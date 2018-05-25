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
var PartnerPlayDetailCard_module_scss_1 = require("./PartnerPlayDetailCard.module.scss");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var PartnerPlayDetailCard = (function (_super) {
    __extends(PartnerPlayDetailCard, _super);
    function PartnerPlayDetailCard(props) {
        return _super.call(this, props) || this;
    }
    PartnerPlayDetailCard.prototype.navigateUrl = function (event) {
        window.open(this.props.cardDetail.Link.Url, '_blank');
    };
    PartnerPlayDetailCard.prototype.render = function () {
        return (React.createElement("div", { className: PartnerPlayDetailCard_module_scss_1.default.partnerPlayDetailCard },
            React.createElement("div", { className: PartnerPlayDetailCard_module_scss_1.default.partnerPlayDetailCardWrapper, onClick: this.navigateUrl.bind(this), style: { height: this.props.height + 'px' } },
                React.createElement(office_ui_fabric_react_1.Image, { className: PartnerPlayDetailCard_module_scss_1.default.partnerPlayDetailCardImage, height: this.props.height, src: this.props.cardDetail.Image.Url, alt: this.props.cardDetail.Image.Description, shouldFadeIn: true, imageFit: office_ui_fabric_react_1.ImageFit.cover }),
                React.createElement("div", { className: PartnerPlayDetailCard_module_scss_1.default.partnerPlayDetailCardHoverPanel },
                    React.createElement("div", { className: PartnerPlayDetailCard_module_scss_1.default.partnerPlayDetailCardTitle }, this.props.cardDetail.Title)))));
    };
    return PartnerPlayDetailCard;
}(React.Component));
exports.PartnerPlayDetailCard = PartnerPlayDetailCard;

//# sourceMappingURL=PartnerPlayDetailCard.js.map
