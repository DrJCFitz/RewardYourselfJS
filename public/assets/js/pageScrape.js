;(function( $, window, document ){

    function PageScrape( element, options ) {
        var self = this;
        var $element = $(element);
        var keyTrans = {"wsjwineclub": "wsjwine","spreadshirtdesigner": "spreadshirt","speedousa": "speedo","spanxbysarablakely": "spanx","spafinderwellness365": "spafinderwellness","sonystore": "sony","smashbox": "smashboxcosmetics","skyo": "skyotextbooks","samsungelectronicsamerica": "samsung","sallybeauty": "sallybeautysupply","saksfifthavenueoff5th": "saksofffifth","saks": "saksfifthavenue","rosettastonelanguagesoftware": "rosettastone","rodalestore": "rodales","rakutenshoppingformerlybuy": "rakuten","quickbooks": "quickbooksonline","performancebike": "performancebicycle","ps": "psfromaeropostale","overland": "overlandsheepskinco","ojon": "ojonhaircare","northerntoolequipment": "northerntool","nikestore": "nike","nfl": "nflshop","nationalgeographicstore": "nationalgeographic","nascarstore": "nascar","midesignmichaelscustominvites": "michaelscustominvitations","luckybrand": "luckybrandjeans","lenovothinkpad": "lenovo","legoshopathome": "lego","labseries": "labseriesskincareformen","labseriesformen": "labseriesskincareformen","kiplingusa": "kipling","kielssince1851": "kiels","jaredthegalleriaofjewelry": "jared","istockphoto": "istock","irvsluggage": "irvsluggagewarehouse","ipage": "ipagewebhosting","intuitquickbooksonline": "quickbooksonline","intuitquickbooksdesktop": "quickbooksdesktop","highlights": "highlightsforchildren","hrblockathome": "hrblock","gocardusasmartdestinations": "gocardusa","glasses": "glassesusa","gevaliakaffe": "gevalia","gevaliacoffee": "gevalia","folica": "folicabeautysupply","effyjewelry": "effyjewelers","discoverystore": "discoverychannelstore","dancingdeerbakingco": "dancingdeerbakingcompany","cymaxstores": "cymax","cusp": "cuspbyneimanmarcus","champion": "championusa","carolwrightsgifts": "carolwrightgifts","boden": "bodenus","bodenusa": "bodenus","blissworld": "bliss","bjs": "bjswholesaleclub","bjswholesale": "bjswholesaleclub","baseballrampagesoftballrampage": "baseballrampage","americaneagle": "americaneagleoutfitters","afflictionclothing": "affliction","aerieforamericaneagle": "aerie","crowneplaza": "crowneplazahotelsresorts","discounttireamericastire": "discounttire","drleonards": "drleonardshealthcare","duncraft": "duncraftwildbirdsuperstore","duncraftbirdfeeders": "duncraftwildbirdsuperstore","elsevierstore": "elsevier","estelauder": "esteelauder","evesaddiction": "evesaddictionjewelry","fanniemaycandies": "fanniemay","holidayinnexpresshotels": "holidayinnexpress","holidayinn": "holidayinnhotelsresorts","hotelindigo": "hotelindigohotels","intercontinental": "intercontinentalhotelsresorts","adagio": "adagioteas","ahnu": "ahnufootwear","alibris": "alibrisbooksmusicmovies","bates": "batesfootwear","bowflexshop": "bowflex","budget": "budgetrentacar","budgettruck": "budgettruckrental","carbonite": "carbonitebackup","chefs": "chefscatalog","chegg": "cheggstudy","clarionhotel": "clarionhotels","candlewoodsuites": "candlewoodsuiteshotels","cookieskids": "cookiesthekidsdepartmentstore","dellhomesystems": "dellhome","foodsavervacuumsealingsystem": "foodsaver","ftdflowersgifts": "ftd","hphomehomeofficestore": "hphomeofficestore","lancme": "lancome","levi": "levis","lifelockidentitytheftprotection": "lifelock","lumberliquidator": "lumberliquidators","melissaanddoug": "melissadoug","microtelinnsuitesbywyndham": "microtelinnsuites","mlbshop": "mlb","nascarsuperstore": "nascar","nbcstore": "nbcuniversalstore","nortonfromsymantec": "nortonbysymantec","oneidaltd": "oneida","panasonicideasforlife": "panasonic","parkplaza": "parkplazahotelsresorts","paylesssource": "paylessshoesource","pipingrock": "pipingrockhealthproducts","proactivsolution": "proactiv","radisson": "radissonhotelsresorts","rakutenshopping": "rakuten","ruum": "ruumamericankidswear","sandalsallinclusiveresorts": "sandalsresorts","staybridgesuiteshotels": "staybridgesuites","sundancecatalog": "sundance","thenewyorktimesstore": "thenewyorktimes","wjswinediscoveryclub": "wsjwine","wyndhamhotelgroup": "wyndhamhotelsresorts","yvesrocherus": "yvesrocherusa","yvessaintlaurent": "yvessaintlaurentbeauty"};
        
        var defaults = {
                merchantKeys: keyTrans,
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
            this.id = self.variables.portal.key;
            this.equivalentPercentage = self.variables.merchant.reward.equivalentPercentage;
            this.currency = self.variables.merchant.reward.currency;
            return this;
        }
        
        function merchantNameToKey( merchantName ) {
            // strip any spaces or special characters from name and convert to lowercase
            var keyName = merchantName.replace(new RegExp('\\W+'),'').replace(new RegExp('\\s+'),'').toLowerCase();
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