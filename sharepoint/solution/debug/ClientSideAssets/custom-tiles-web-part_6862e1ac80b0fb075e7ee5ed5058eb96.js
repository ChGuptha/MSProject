define("e5804604-fb78-488a-a834-9cce29a314dc_0.0.1",["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-http","CustomTilesViewWpWebPartStrings"],function(e,t,r,n,a,o){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=523)}({10:function(e,r){e.exports=t},14:function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},2:function(t,r){t.exports=e},21:function(e,t){e.exports=r},22:function(e,t){e.exports=n},23:function(e,t){e.exports=a},24:function(e,t){function r(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var o=n(a);return[r].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},3:function(e,t,r){"use strict";(function(e){function r(e){var t=w();e();var r=w();S.perf.duration+=r-t}function n(e,t){void 0===t&&(t=!1),r(function(){var r=Array.isArray(e)?e:h(e);void 0===b&&(b=v());var n=S.runState,a=n.mode,o=n.buffer,i=n.flushTimer;t||1===a?(o.push(r),i||(S.runState.flushTimer=l())):s(r)})}function a(e){S.loadStyles=e}function o(e){S.runState.mode=e}function i(){r(function(){var e=S.runState.buffer.slice();S.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&s(t)})}function l(){return setTimeout(function(){S.runState.flushTimer=0,i()},0)}function s(e,t){S.loadStyles?S.loadStyles(f(e).styleString,e):b?_(e,t):y(e)}function c(e){S.theme=e,d()}function u(e){void 0===e&&(e=3),3!==e&&2!==e||(p(S.registeredStyles),S.registeredStyles=[]),3!==e&&1!==e||(p(S.registeredThemableStyles),S.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function d(){if(S.theme){for(var e=[],t=0,r=S.registeredThemableStyles;t<r.length;t++){var n=r[t];e.push(n.themableStyle)}e.length>0&&(u(1),s([].concat.apply([],e)))}}function m(e){return e&&(e=f(h(e)).styleString),e}function f(e){var t=S.theme,r=!1;return{styleString:(e||[]).map(function(e){var n=e.theme;if(n){r=!0;var a=t?t[n]:void 0,o=e.defaultValue||"inherit";return t&&!a&&console,a||o}return e.rawString}).join(""),themable:r}}function h(e){var t=[];if(e){for(var r=0,n=void 0;n=x.exec(e);){var a=n.index;a>r&&t.push({rawString:e.substring(r,a)}),t.push({theme:n[1],defaultValue:n[2]}),r=x.lastIndex}t.push({rawString:e.substring(r)})}return t}function y(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("style"),n=f(e),a=n.styleString,o=n.themable;r.type="text/css",r.appendChild(document.createTextNode(a)),S.perf.count++,t.appendChild(r);var i={styleElement:r,themableStyle:e};o?S.registeredThemableStyles.push(i):S.registeredStyles.push(i)}function _(e,t){var r=document.getElementsByTagName("head")[0],n=S.registeredStyles,a=S.lastStyleElement,o=a?a.styleSheet:void 0,i=o?o.cssText:"",l=n[n.length-1],s=f(e).styleString;(!a||i.length+s.length>P)&&(a=document.createElement("style"),a.type="text/css",t?(r.replaceChild(a,t.styleElement),t.styleElement=a):r.appendChild(a),t||(l={styleElement:a,themableStyle:e},n.push(l))),a.styleSheet.cssText+=m(s),Array.prototype.push.apply(l.themableStyle,e),S.lastStyleElement=a}function v(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var g=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};Object.defineProperty(t,"__esModule",{value:!0});var b,T="undefined"==typeof window?e:window,S=function(){var e=T.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=g({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=g({},e,{registeredThemableStyles:[]})),T.__themeState__=e,e}(),x=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,P=1e4,w=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=n,t.configureLoadStyles=a,t.configureRunMode=o,t.flush=i,t.loadTheme=c,t.clearStyles=u,t.detokenize=m,t.splitStyles=h}).call(t,r(14))},523:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=r(10),i=r(21),l=r(22),s=r(66),c=r(524),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=a.createElement(c.default,{siteurl:this.context.pageContext.site.absoluteUrl,spHttpClient:this.context.spHttpClient});o.render(e,this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:s.PropertyPaneDescription},groups:[{groupName:s.BasicGroupName,groupFields:[l.PropertyPaneTextField("description",{label:s.DescriptionFieldLabel})]}]}]}},t}(l.BaseClientSideWebPart);t.default=u},524:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=r(525),i=r(528),l=r(23),s=function(e){function t(t,r){var n=e.call(this,t)||this;return n.state={currentState:"initial",items:Array()},n}return n(t,e),t.prototype.componentWillMount=function(){try{this.domainString=window.location.href.toLowerCase().split("solutionarea=")[1].trim(),this.domainString=this.domainString?this.domainString:""}catch(e){console.log(e)}},t.prototype.componentDidMount=function(){var e=this;try{this.getListItems().then(function(t){e.setState({currentState:"data"})})}catch(e){console.log(e)}},t.prototype.getListItems=function(){var e=this;try{return new Promise(function(t,r){e.props.spHttpClient.get(e.props.siteurl+"/_api/web/lists/getbytitle('Apps_Infrastructure')/items?$select=Play,Sales_Conversation,Market_Opportunities,Domain/Title,Domain/ID&$expand=Domain/Id&$filter=Domain/Id%20eq%20"+e.domainString,l.SPHttpClient.configurations.v1,{headers:{Accept:"application/json;odata=nometadata","odata-version":""}}).then(function(e){return e.json()}).then(function(r){console.log(r.value),e.topItems=r.value,t(r.value)})})}catch(e){console.log(e)}},t.prototype.render=function(){try{if(this.topItems){var e=this.topItems;return a.createElement("code",null,a.createElement("div",{className:"container"},a.createElement("header",{id:"header_outer"},a.createElement("h2",null,"Lorem Ipsum")),a.createElement("section",{id:"Portfolio",className:"content"},a.createElement("h1",null,"Apps and Infrastructure")),a.createElement("div",{className:"row app-headings hidden-xs hidden-sm"},a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-6"},"PLAYS"),a.createElement("div",{className:"col-sm-6 col-md-3 col-lg-3"},"SALES CONVERSATION"),a.createElement("div",{className:"col-sm-6 col-md-3 col-lg-3"},"MARKET OPPORTUNITY"))),e.map(function(e){return a.createElement("div",{className:i.default.customTiles},a.createElement("div",{className:i.default.Tilescontainer},a.createElement("div",{className:i.default.row},a.createElement("div",{className:i.default.column},a.createElement("div",{className:o.default.customTile},a.createElement("div",{className:o.default.partnerPlayCardWrapper},a.createElement("a",{href:e.Play.Url},a.createElement("img",{className:"image",src:e.Play.Url})),a.createElement("div",{className:o.default.partnerPlayCardHoverPanel},a.createElement("div",{className:o.default.partnerPlayCardTitle},a.createElement("a",{href:e.Play.Url},e.Play.Description)))))),a.createElement("div",{className:i.default.column},a.createElement("div",{className:i.default.row},a.createElement("div",{className:i.default.column},a.createElement("img",{className:"fa fa-line-chart imagesize",src:e.Sales_Conversation.Url}))),a.createElement("div",{className:i.default.row},a.createElement("div",{className:i.default.column},a.createElement("p",null,e.Sales_Conversation.Description)))),a.createElement("div",{className:i.default.column},a.createElement("div",{className:i.default.row},a.createElement("div",{className:i.default.column},a.createElement("img",{className:"fa fa-line-chart imagesize",src:e.Market_Opportunities.Url}))),a.createElement("div",{className:i.default.row},a.createElement("div",{className:i.default.column},a.createElement("p",null,e.Market_Opportunities.Description)))))))}))}return a.createElement("div",null,"Data Not Available")}catch(e){console.log(e)}},t}(a.Component);t.default=s},525:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(526);var n={customTile:"customTile_4f921e22",container:"container_4f921e22",partnerPlayCardWrapper:"partnerPlayCardWrapper_4f921e22",partnerPlayCardImage:"partnerPlayCardImage_4f921e22",partnerPlayCardHoverPanel:"partnerPlayCardHoverPanel_4f921e22",partnerPlayCardTitle:"partnerPlayCardTitle_4f921e22"};t.default=n},526:function(e,t,r){var n=r(527),a=r(3);"string"==typeof n&&(n=[[e.i,n]]);for(var o=0;o<n.length;o++)a.loadStyles(n[o][1],!0);n.locals&&(e.exports=n.locals)},527:function(e,t,r){t=e.exports=r(24)(!1),t.push([e.i,".customTile_4f921e22 .container_4f921e22{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.customTile_4f921e22 .partnerPlayCardWrapper_4f921e22{float:left;display:block;height:240px;position:relative;border:1px solid #fff;margin:0;width:100%;cursor:pointer}.customTile_4f921e22 .partnerPlayCardImage_4f921e22{height:240px;width:100%}.customTile_4f921e22 .partnerPlayCardHoverPanel_4f921e22{position:absolute;top:75%;bottom:0;left:0;right:0;padding:2px;overflow:hidden;transition-property:top;transition-duration:.5s}.customTile_4f921e22 .partnerPlayCardHoverPanel_4f921e22:hover{top:0}.customTile_4f921e22 .partnerPlayCardTitle_4f921e22{color:#fff;padding:15px}",""])},528:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(529);var n={customTiles:"customTiles_3a939113",Tilescontainer:"Tilescontainer_3a939113",row:"row_3a939113",column:"column_3a939113","ms-Grid":"ms-Grid_3a939113",solutionArea:"solutionArea_3a939113",partnerPlaysRow:"partnerPlaysRow_3a939113",partnerPlays:"partnerPlays_3a939113",playTypes:"playTypes_3a939113",active:"active_3a939113"};t.default=n},529:function(e,t,r){var n=r(530),a=r(3);"string"==typeof n&&(n=[[e.i,n]]);for(var o=0;o<n.length;o++)a.loadStyles(n[o][1],!0);n.locals&&(e.exports=n.locals)},530:function(e,t,r){t=e.exports=r(24)(!1),t.push([e.i,'.customTiles_3a939113 .Tilescontainer_3a939113{margin:0 auto}@media (min-width:640px){.customTiles_3a939113 .Tilescontainer_3a939113{width:100%}}.customTiles_3a939113 .row_3a939113{margin:0 -8px;box-sizing:border-box}.customTiles_3a939113 .row_3a939113:after,.customTiles_3a939113 .row_3a939113:before{display:table;content:"";line-height:0}.customTiles_3a939113 .row_3a939113:after{clear:both}.customTiles_3a939113 .column_3a939113{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .customTiles_3a939113 .column_3a939113{float:left}[dir=rtl] .customTiles_3a939113 .column_3a939113{float:right}.customTiles_3a939113 .column_3a939113 .ms-Grid_3a939113{padding:0}@media (min-width:640px){.customTiles_3a939113 .column_3a939113{width:100%}}.customTiles_3a939113 h3{text-transform:uppercase}.customTiles_3a939113 .solutionArea_3a939113:nth-child(2n){background-color:#5c005c}.customTiles_3a939113 .solutionArea_3a939113{display:inline-block;width:19.8%;background-color:#32145a;height:auto;margin-right:2px}.customTiles_3a939113 .solutionArea_3a939113 span{padding:15px;display:inline-block;color:#fff;font-size:1.2em}.customTiles_3a939113 .partnerPlaysRow_3a939113{min-height:600px;height:1200px;overflow-y:auto}.customTiles_3a939113 .partnerPlays_3a939113{width:19.8%;float:left;position:absolute}.customTiles_3a939113 .partnerPlays_3a939113:first-child{left:0}.customTiles_3a939113 .partnerPlays_3a939113:nth-child(2){left:19.8%}.customTiles_3a939113 .partnerPlays_3a939113:nth-child(3){left:39.6%}.customTiles_3a939113 .partnerPlays_3a939113:nth-child(4){left:59.4%}.customTiles_3a939113 .partnerPlays_3a939113:nth-child(5){left:79.2%}.customTiles_3a939113 .playTypes_3a939113 h3{width:20%;display:inline-block}.customTiles_3a939113 .playTypes_3a939113 div{width:80%;display:inline-block}.customTiles_3a939113 .playTypes_3a939113 div a{padding:0 50px;text-transform:uppercase;text-decoration:none}.customTiles_3a939113 .playTypes_3a939113 div a.active_3a939113{font-weight:700;text-decoration:underline}',""])},66:function(e,t){e.exports=o}})});