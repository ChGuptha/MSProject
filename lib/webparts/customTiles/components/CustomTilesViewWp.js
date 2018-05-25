"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//import topstyles from 'CustomTilesWebPart.module.scss';
var CustomTilesViewCard_module_scss_1 = require("./CustomTilesViewCard.module.scss");
var CustomTilesViewCard2_module_scss_1 = require("./CustomTilesViewCard2.module.scss");
var sp_http_1 = require("@microsoft/sp-http");
var CustomTilesViewWp = (function (_super) {
    __extends(CustomTilesViewWp, _super);
    function CustomTilesViewWp(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentState: "initial",
            items: Array()
        };
        return _this;
    }
    CustomTilesViewWp.prototype.componentWillMount = function () {
        try {
            this.domainString = (window.location.href.toLowerCase().split("solutionarea=")[1]).trim();
            this.domainString = this.domainString ? this.domainString : "";
        }
        catch (error) {
            console.log(error);
        }
    };
    CustomTilesViewWp.prototype.componentDidMount = function () {
        var _this = this;
        try {
            this.getListItems().then(function (item) {
                debugger;
                _this.setState({
                    currentState: "data"
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    CustomTilesViewWp.prototype.getListItems = function () {
        var _this = this;
        try {
            debugger;
            return new Promise(function (resolve, reject) {
                //this.props.spHttpClient.get(`${this.props.siteurl}/_api/web/lists/getbytitle('Apps_Infrastructure')/Items?$filter=Domain/ID eq '`+this.domainString+`'`,       
                _this.props.spHttpClient.get(_this.props.siteurl + "/_api/web/lists/getbytitle('Apps_Infrastructure')/items?$select=Play,Sales_Conversation,Market_Opportunities,Domain/Title,Domain/ID&$expand=Domain/Id&$filter=Domain/Id%20eq%20" + _this.domainString, sp_http_1.SPHttpClient.configurations.v1, { headers: { 'Accept': 'application/json;odata=nometadata', 'odata-version': '' } })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (response) {
                    console.log(response.value);
                    _this.topItems = response.value;
                    resolve(response.value);
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    CustomTilesViewWp.prototype.render = function () {
        var i = 0;
        try {
            var that = this;
            if (this.topItems) {
                var items = this.topItems;
                return (React.createElement("code", null,
                    React.createElement("div", { className: "container" },
                        React.createElement("header", { id: "header_outer" },
                            React.createElement("h2", null, "Lorem Ipsum")),
                        React.createElement("section", { id: "Portfolio", className: "content" },
                            React.createElement("h1", null, "Apps and Infrastructure")),
                        React.createElement("div", { className: "row app-headings hidden-xs hidden-sm" },
                            React.createElement("div", { className: "col-sm-12 col-md-6 col-lg-6" }, "PLAYS"),
                            React.createElement("div", { className: "col-sm-6 col-md-3 col-lg-3" }, "SALES CONVERSATION"),
                            React.createElement("div", { className: "col-sm-6 col-md-3 col-lg-3" }, "MARKET OPPORTUNITY"))),
                    items.map(function (item) {
                        return React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.customTiles },
                            React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.Tilescontainer },
                                React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.row },
                                    React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column },
                                        React.createElement("div", { className: CustomTilesViewCard_module_scss_1.default.customTile },
                                            React.createElement("div", { className: CustomTilesViewCard_module_scss_1.default.partnerPlayCardWrapper },
                                                React.createElement("a", { href: item.Play.Url },
                                                    React.createElement("img", { className: CustomTilesViewCard_module_scss_1.default.imageHeight, src: item.Play.Url })),
                                                React.createElement("div", { className: CustomTilesViewCard_module_scss_1.default.partnerPlayCardHoverPanel },
                                                    React.createElement("div", { className: CustomTilesViewCard_module_scss_1.default.partnerPlayCardTitle },
                                                        React.createElement("a", { href: item.Play.Url }, item.Play.Description)))))),
                                    React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column },
                                        React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.row },
                                            React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column }, React.createElement("img", { className: "fa fa-line-chart imagesize", src: item.Sales_Conversation.Url }))),
                                        React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.row },
                                            React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column }, React.createElement("p", null, item.Sales_Conversation.Description)))),
                                    React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column },
                                        React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.row },
                                            React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column }, React.createElement("img", { className: "fa fa-line-chart imagesize", src: item.Market_Opportunities.Url }))),
                                        React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.row },
                                            React.createElement("div", { className: CustomTilesViewCard2_module_scss_1.default.column }, React.createElement("p", null, item.Market_Opportunities.Description)))))));
                    })));
            }
            else {
                return (React.createElement("div", null, "Data Not Available"));
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return CustomTilesViewWp;
}(React.Component));
exports.default = CustomTilesViewWp;

//# sourceMappingURL=CustomTilesViewWp.js.map
