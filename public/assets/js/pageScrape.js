;(function( $, window, document ){

    function PageScrape( element, options ) {
        var self = this;
        var $element = $(element);
        var defaults = {
                merchantKeys: null,
                debugMode: true
            };

        
        self.options = $.extend( {}, defaults, options) ;
        self.variables = { merchant: self.options.merchant,
                           portal: self.options.portal
                         };

        function parseName( rawName ){
            if (self.variables.merchant.name.replace === true ) {
                return rawName.replace(new RegExp(self.variables.merchant.name.regex), '').trim();
            } else {
                return rawName;
            }
        }

        function parseReward(rawReward){
            //debug( rawReward );
            //debug(self.variables.merchant.reward.regex);
            var unit, rate, limit;
            var matchReward = rawReward.match(new RegExp(self.variables.merchant.reward.regex));
            debug( matchReward );
            limit = ( matchReward[self.variables.merchant.reward.limitIndex] !== undefined ) ? matchReward[self.variables.merchant.reward.limitIndex] : '';
            if ( matchReward[self.variables.merchant.reward.dollarIndex] !== undefined ) {
                unit = matchReward[self.variables.merchant.reward.dollarIndex];
                rate = matchReward[self.variables.merchant.reward.dollarIndex];
            } else {
                unit = (matchReward[self.variables.merchant.reward.unitIndex] !== undefined) ? matchReward[self.variables.merchant.reward.unitIndex] : ''
                rate = (matchReward[self.variables.merchant.reward.rateIndex] !== undefined) ? matchReward[self.variables.merchant.reward.rateIndex] : ''
            }
            value = (matchReward[self.variables.merchant.reward.valueIndex] !== undefined) ? parseFloat(matchReward[self.variables.merchant.reward.valueIndex]) : 0.0;
            return new reward(value, unit.trim(), rate.trim(), limit.toLowerCase().trim());
        }
        
        function process() {
            var merchants = [];
            $.each($element, function (index, merchantRoot) {
                debug(index);
                var name = parseName($(merchantRoot).find(self.variables.merchant.name.element).text());
                merchants.push( 
                    new merchant( name,
                        merchantNameToKey( name ),
                        $(merchantRoot).find(self.variables.merchant.link.element).attr('href'),
                        parseReward( $(merchantRoot).find(self.variables.merchant.reward.element).text() ) 
                    )
                );
            });
            return JSON.stringify( merchants );
        }
      
        function test() {
            return "rewardYourself test";
        }
        
        function merchant( name, key, link, reward ) {
            this.name = name;
            this.key = key;
            this.link = link;
            this.reward = reward;
            this.enabled = true;
            this.portalName = self.variables.portal.name;
            this.portalKey = self.variables.portal.key;
            this.type = self.options.portal.type;
            this.dateCreated = new Date();
            return this;
        }
        
        function reward( value, unit, rate, limit ) {
            this.value = value;
            this.unit = unit;
            this.rate = rate;
            this.limit = limit;
            // use the id for the timestamp in seconds
            this.id = self.variables.portal.key+parseInt(new Date().getTime()/1000);
            this.equivalentPercentage = self.variables.portal.equivalentPercentage;
            this.currency = self.variables.portal.currency;
            return this;
        }
        
        function merchantNameToKey( merchantName ) {
            // strip any spaces or special characters from name and convert to lowercase
            var keyName = merchantName.replace(/\W+/g,'').replace(/\s+/g,'').toLowerCase();
            if (self.options.merchantKeys[keyName] === undefined ) {
                return keyName;
            } else {
                return self.options.merchantKeys[keyName];
            }
        }
        
        function debug(msg) {
            if (self.options.debugMode === true) { 
                console.log(msg); 
            }
        }
        
        return { process: process, test: test };
    };

    $.fn.pageScrape = function(options) {
        return new PageScrape(this, options);
    };
    
})( jQuery, window, document );