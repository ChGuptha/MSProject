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
var PartnerPlay_module_scss_1 = require("./PartnerPlay.module.scss");
var PartnerPlayDetailCard_1 = require("./PartnerPlayDetailCard/PartnerPlayDetailCard");
var PartnerPlay = (function (_super) {
    __extends(PartnerPlay, _super);
    function PartnerPlay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { partnerPlayDetails: [] };
        return _this;
    }
    PartnerPlay.prototype.componentDidMount = function () {
        var _this = this;
        console.log('Component Did Mount Starts');
        console.log(window.location.href);
        var params = (new URL(window.location.href)).searchParams;
        console.log(params);
        var sID = parseInt(params.get("sID"));
        this.props.dataProvider.getPartnerPlayDetails(sID).then(function (result) {
            _this.setState({ partnerPlayDetails: result });
        });
    };
    PartnerPlay.prototype.render = function () {
        return (React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerPlay },
            React.createElement("div", { className: PartnerPlay_module_scss_1.default.container },
                React.createElement("div", { className: PartnerPlay_module_scss_1.default.row },
                    React.createElement("div", { className: PartnerPlay_module_scss_1.default.column },
                        React.createElement("h1", null, this.state.partnerPlayDetails.length && React.createElement("p", null, this.state.partnerPlayDetails[0].SolutionArea.Title)),
                        React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplayrow },
                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplaycolumn1header }, "PLAYS"),
                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplaycolumn2header }, "SALES CONVERSATIONS"),
                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplaycolumn2header }, "MARKET OPPORTUNITIES")),
                        this.state.partnerPlayDetails.length &&
                            this.state.partnerPlayDetails.map(function (PartnerPlayDetail, i) {
                                return React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplayrow },
                                    React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplaycolumn1 }, React.createElement(PartnerPlayDetailCard_1.PartnerPlayDetailCard, { height: 240, cardDetail: { Title: PartnerPlayDetail.PlayDescription, Image: PartnerPlayDetail.PlayImage, Link: './PartnerPlay.aspx?PlayID=' + PartnerPlayDetail.ID } })),
                                    React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplaycolumn2 },
                                        React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplayrow2 },
                                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnericoncolumn },
                                                React.createElement("img", { src: PartnerPlayDetail.SalesConversationsIcon.Url }))),
                                        React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplayrow2 },
                                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerdescriptionolumn }, PartnerPlayDetail.SalesConversationsDescription))),
                                    React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplaycolumn2 },
                                        React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplayrow2 },
                                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnericoncolumn },
                                                React.createElement("img", { src: PartnerPlayDetail.MarketOpportunitiesIcon.Url }))),
                                        React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerplayrow2 },
                                            React.createElement("div", { className: PartnerPlay_module_scss_1.default.partnerdescriptionolumn }, PartnerPlayDetail.MarketOpportunitiesDescription))));
                            }))))));
    };
    return PartnerPlay;
}(React.Component));
exports.default = PartnerPlay;

//# sourceMappingURL=PartnerPlay.js.map
