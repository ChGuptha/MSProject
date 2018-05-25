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
var sp_http_1 = require("@microsoft/sp-http");
var sp_loader_1 = require("@microsoft/sp-loader");
//require("./tiles.style.css");
require("./style.css");
var CustomTilesViewWp = (function (_super) {
    __extends(CustomTilesViewWp, _super);
    function CustomTilesViewWp(props, state) {
        var _this = _super.call(this, props) || this;
        sp_loader_1.SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
        sp_loader_1.SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css');
        sp_loader_1.SPComponentLoader.loadCss('https://wallerotemp.sharepoint.com/SPFxAssets/stylegrd.css');
        //<link href="css/style.css" rel="stylesheet" type="text/css"> 
        _this.state = {
            currentState: "initial",
            items: Array()
        };
        return _this;
    }
    CustomTilesViewWp.prototype.componentWillMount = function () {
        try {
            this.domainString = (window.location.href.toLowerCase().split("domain=")[1]).trim();
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
                        return React.createElement("div", { className: "container" },
                            React.createElement("div", { className: 'row app-rows-one' },
                                React.createElement("div", { className: "col-sm-12 col-md-6 col-lg-6 h-v" },
                                    React.createElement("div", { className: "img-container" },
                                        React.createElement("a", { href: item.Play.Url },
                                            React.createElement("img", { className: "image", src: item.Play.Url }))),
                                    React.createElement("div", { className: "overlay-o" },
                                        React.createElement("div", { className: "text-hover" },
                                            React.createElement("p", null,
                                                React.createElement("a", { href: item.Play.Url }, item.Play.Description))))),
                                React.createElement("div", { className: "col-sm-6 col-md-3 col-lg-3" },
                                    React.createElement("div", { "left-charts": true },
                                        React.createElement("img", { className: "fa fa-line-chart imagesize", src: item.Sales_Conversation.Url }),
                                        React.createElement("div", { className: "chart-text" },
                                            React.createElement("p", null, item.Sales_Conversation.Description)))),
                                React.createElement("div", { className: "col-sm-6 col-md-3 col-lg-3" },
                                    React.createElement("div", { "left-charts": true },
                                        React.createElement("img", { className: "fa fa-line-chart imagesize", src: item.Market_Opportunities.Url }),
                                        React.createElement("div", { className: "chart-text" },
                                            React.createElement("p", null, item.Market_Opportunities.Description))))));
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
