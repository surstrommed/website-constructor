parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CrKI":[function(require,module,exports) {
module.exports="/image.2238dd01.png";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'\n    <div class="row" style="'.concat(t,'">').concat(n,"</div>\n  ")}function t(n){return'\n    <div class="col-sm">'.concat(n,"</div>\n  ")}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(t){return"".concat(t,": ").concat(n[t])}).join(";")}function r(n){return'\n    <form name="'.concat(n,'">\n      <h5>Блок: ').concat(c(n),'</h5>\n      <div class="p-2 form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="p-2 form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="m-2 btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}function c(n){return n?n[0].toUpperCase()+n.slice(1):n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=n,exports.col=t,exports.css=o,exports.block=r;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextBlock=exports.ColumnsBlock=exports.ImageBlock=exports.TitleBlock=exports.Block=void 0;var t=require("./../utils");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&n(t,o)}function n(t,o){return(n=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function r(t){var o=i();return function(){var e,n=s(t);if(o){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function a(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,o,e){return o&&a(t.prototype,o),e&&a(t,e),t}var p=function(){function t(o,e){l(this,t),this.value=o,this.options=e}return f(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть реализован")}}]),t}();exports.Block=p;var y=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return f(c,[{key:"toHTML",value:function(){var o=this.options,e=o.tag,n=void 0===e?"h1":e,r=o.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var v=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return f(c,[{key:"toHTML",value:function(){var o=this.options,e=o.imageStyles,n=o.alt,r=void 0===n?"":n,c=o.styles;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(r,'" style="').concat((0,t.css)(e),'" />'),(0,t.css)(c))}}]),c}();exports.ImageBlock=v;var h=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return f(c,[{key:"toHTML",value:function(){var o=this.value.map(t.col).join(" ");return(0,t.row)(o,(0,t.css)(this.options.styles))}}]),c}();exports.ColumnsBlock=h;var b=function(o){e(c,p);var n=r(c);function c(t,o){return l(this,c),n.call(this,t,o)}return f(c,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(this.options.styles))}}]),c}();exports.TextBlock=b;
},{"./../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=a(require("./assets/image.png")),t=require("./classes/blocks");function a(e){return e&&e.__esModule?e:{default:e}}var r='\nТелеграмм площадка оригинальных товаров, на которой каждый сможет найти/купить/продать обувь и одежду: <a href="https://t.me/liquidbay" style="color: #00344B" target="_blank">LiquidBay</a>\n',o=[new t.TitleBlock("Конструктов сайтов на Javascript",{tag:"h2",styles:{background:"linear-gradient(90deg, #00344B, #0082C3, #00344B)",color:"#fff",padding:"1rem","text-align":"center"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"800px",height:"auto","border-radius":"20px"},alt:"Главная картинка"}),new t.ColumnsBlock(["JavaScript один из самых популярных языков программирования в мире.","Первоначально язык Javascript назывался Mocha, в какой-то момент стал LiveScript, и наконец стал называться Javascript в тот момент, когда язык Java был провозглашен спасителем жизни.","Функциями можно оперировать, как и любыми другими элементами. Их можно привязывать к переменным и, в более поздних версиях JavaScript, даже выбрасывать как исключения."],{styles:{"background-color":"#00344B",padding:"2rem",color:"#fff","font-weight":"bold"}}),new t.TextBlock(r,{styles:{"background-color":"#0082C3",padding:"1rem","font-weight":"bold",color:"#fff"}})];exports.model=o;
},{"./assets/image.png":"CrKI","./classes/blocks":"dDFO"}],"jExt":[function(require,module,exports) {

},{}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}var r=function(){function n(e,t){a(this,n),this.$el=document.querySelector(e),this.update=t,this.init()}return i(n,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"template",get:function(){return[(0,e.block)("text"),(0,e.block)("title"),(0,e.block)("image"),(0,e.block)("columns")].join("")}},{key:"add",value:function(e){e.preventDefault();var a,n=e.target.name,i=e.target.value.value,r=e.target.styles.value;switch(n){case"text":a=new t.TextBlock(i,{styles:r});break;case"title":a=new t.TitleBlock(i,{styles:r});break;case"image":a=new t.ImageBlock(i,{styles:r});break;case"columns":a=new t.ColumnsBlock([i],{styles:r})}this.update(a),e.target.value.value="",e.target.styles.value=""}}]),n}();exports.Sidebar=r;
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),r=require("./sidebar");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var o=function(){function t(e){n(this,t),this.model=e}return i(t,[{key:"init",value:function(){var n=this,t=new e.Site("#site");t.render(this.model);new r.Sidebar("#panel",function(e){n.model.push(e),t.render(n.model)})}}]),t}();exports.App=o;
},{"./site":"V48B","./sidebar":"idI0"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model");require("./styles/main.css");var r=require("./classes/app");new r.App(e.model).init();
},{"./model":"JDu1","./styles/main.css":"jExt","./classes/app":"Z1kE"}]},{},["Focm"], null)