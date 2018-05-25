"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = require("@microsoft/sp-http");
var SharePointDataProvider = (function () {
    function SharePointDataProvider() {
    }
    Object.defineProperty(SharePointDataProvider.prototype, "webPartContext", {
        get: function () {
            return this._webPartContext;
        },
        set: function (value) {
            this._webPartContext = value;
        },
        enumerable: true,
        configurable: true
    });
    SharePointDataProvider.prototype.getPartnerPlayDetails = function (ID) {
        return this._webPartContext.spHttpClient.get(this._webPartContext.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('Partner Plays')/items?$select=ID,Title,PlayDescription,PlayImage,PlayLink,SalesConversationsDescription,SalesConversationsIcon,SalesConversationsLink,MarketOpportunitiesDescription,MarketOpportunitiesIcon,MarketOpportunitiesLink,SolutionArea/Title&$expand=SolutionArea/Title&$filter=SolutionArea/Id%20eq%20" + ID, sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            return json.value;
        });
    };
    return SharePointDataProvider;
}());
exports.SharePointDataProvider = SharePointDataProvider;

//# sourceMappingURL=SharePointDataProvider.js.map
