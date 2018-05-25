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
var sp_pnp_js_1 = require("sp-pnp-js");
var sp_loader_1 = require("@microsoft/sp-loader");
var DocumentListView = (function (_super) {
    __extends(DocumentListView, _super);
    function DocumentListView(props, state) {
        var _this = _super.call(this, props) || this;
        _this.items = [];
        sp_loader_1.SPComponentLoader.loadCss('https://wallerotemp.sharepoint.com/SPFxAssets/bootstrap.min.css');
        sp_loader_1.SPComponentLoader.loadCss('https://wallerotemp.sharepoint.com/SPFxAssets/DocListView.css');
        _this.state = {
            FilterVal: "",
            FilterValItems: [],
            DocumentViewItems: []
        };
        return _this;
    }
    DocumentListView.prototype.render = function () {
        var _this = this;
        var that = this;
        return (React.createElement("div", { className: "container" },
            React.createElement("h2", null, "Lorem Ipsum"),
            React.createElement("p", null, "Data platform play resources across the Partner development lifecycle"),
            React.createElement("ul", { className: "nav nav-tabs" }, this.state.FilterValItems.map(function (headerItems) {
                return React.createElement("li", null,
                    React.createElement("a", { onClick: function (e) { return _this.rerender(_this, e); } }, headerItems.Title.toUpperCase()));
            })),
            React.createElement("div", { className: "table-responsive" },
                React.createElement("table", { className: "table" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "RESOURCE"),
                            React.createElement("th", null, "AUDIANCE"))),
                    this.items.map(function (listItem, index) {
                        return React.createElement("tbody", null,
                            ((index === 0) || (index > 0 && (listItem.Header.toUpperCase() != that.items[index - 1].Header.toUpperCase()))) &&
                                React.createElement("tr", { className: "active" },
                                    React.createElement("td", null,
                                        React.createElement("b", null, listItem.Header.toUpperCase())),
                                    React.createElement("td", null)),
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("a", { href: listItem.EncodedAbsUrl }, listItem.Title)),
                                React.createElement("td", null, listItem.Audience.Title)));
                    })))));
    };
    DocumentListView.prototype.componentWillMount = function () {
        var _this = this;
        if (this.state.DocumentViewItems == undefined || this.state.DocumentViewItems.length <= 0) {
            var filterlistitems_1 = [];
            var fieldsArr = ["ID", "Title"];
            this._fetchFromSPList(this.props.filterlist, fieldsArr)
                .then(function (items) {
                filterlistitems_1 = items;
                _this._getListItems(_this.props.datalist)
                    .then(function (items) {
                    _this.items = items.sort(function (b, a) { if ((a.Header) > (b.Header)) {
                        return -1;
                    }
                    else {
                        return 1;
                    } });
                    _this.setState({
                        FilterValItems: filterlistitems_1,
                        DocumentViewItems: _this.items
                    });
                });
            });
        }
    };
    DocumentListView.prototype._fetchFromSPList = function (listtitle, fieldsArr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var web = new sp_pnp_js_1.Web(_this.props.siteurl);
            web.lists.getByTitle(listtitle).items
                .select(fieldsArr)
                .get()
                .then(function (items) {
                console.log("success", items);
                resolve(items);
            })
                .catch(function (error) {
                console.log("Error", new Error(error));
                reject(error);
            });
        });
    };
    DocumentListView.prototype._getListItems = function (listtitle) {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) { _this.props.spHttpClient.get(_this.props.siteurl + "/_api/web/lists/getbytitle('Resources')/Items?$select=ID,Title,Audience/Id,Audience/Title,Filter1/Id,Filter1/Title,Header,FileRef&$orderby=Modified&$expand=Audience/Id,Audience/Title,Filter1/Id,Filter1/Title", sp_http_1.SPHttpClient.configurations.v1, { headers: { 'Accept': 'application/json;odata=nometadata', 'odata-version': '' } }).then(function (response) { return response.json(); }).then(function (response) { resolve(response.value); }); });
        }
        catch (error) {
            console.log(error);
        }
    };
    DocumentListView.prototype.rerender = function (ctr, e) {
        debugger;
        this.items = this.state.DocumentViewItems.filter(function (el) { return el.Filter1.Title == e.currentTarget.textContent; });
        this.setState({
            FilterVal: e.target.value
        });
    };
    return DocumentListView;
}(React.Component));
exports.default = DocumentListView;

//# sourceMappingURL=DocumentListView.js.map
