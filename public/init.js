/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);

	function requireAll(r) { r.keys().forEach(r); }
	requireAll(__webpack_require__(42));

	__webpack_require__(54);

	__webpack_require__(70);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n* {\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(24) + ");\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(25) + ");\n  font-weight: 100;\n  font-style: italic;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(26) + ");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(27) + ");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(28) + ");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(29) + ");\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(30) + ");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(31) + ");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(32) + ");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(33) + ");\n  font-weight: 700;\n  font-style: italic;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(34) + ");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url(" + __webpack_require__(35) + ");\n  font-weight: 900;\n  font-style: italic;\n}\n@-webkit-keyframes button-smart-border {\n  0% {\n    top: 100%;\n    width: 0;\n  }\n  50% {\n    top: -0.3rem;\n    width: 0;\n  }\n  100% {\n    top: -0.3rem;\n    width: 50%;\n  }\n}\n@keyframes button-smart-border {\n  0% {\n    top: 100%;\n    width: 0;\n  }\n  50% {\n    top: -0.3rem;\n    width: 0;\n  }\n  100% {\n    top: -0.3rem;\n    width: 50%;\n  }\n}\n/*!\n *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(36) + ");\n  src: url(" + __webpack_require__(36) + ") format('embedded-opentype'), url(" + __webpack_require__(37) + ") format('woff2'), url(" + __webpack_require__(38) + ") format('woff'), url(" + __webpack_require__(39) + ") format('truetype'), url(" + __webpack_require__(40) + ") format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #fff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.who_i_am-title {\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n.who_i_am-title__name {\n  display: block;\n  margin-bottom: 1rem;\n}\n.who_i_am-title__position {\n  display: block;\n  color: #777;\n  font-weight: 100;\n}\n.who_i_am-about {\n  margin-bottom: 2rem;\n  color: #777;\n  font-size: 1.6rem;\n  font-weight: 100;\n  line-height: 1.5;\n  text-align: justify;\n}\n.who_i_am-table {\n  width: 100%;\n  font-size: 1.6rem;\n  text-align: center;\n}\n@media screen and (max-width: 767px) {\n  .who_i_am-table {\n    border-bottom: 0.1rem solid #efefef;\n  }\n}\n.who_i_am-table__th,\n.who_i_am-table__td {\n  padding: 1rem;\n  width: 50%;\n  border: 0.1rem solid #efefef;\n}\n@media screen and (max-width: 767px) {\n  .who_i_am-table__th,\n  .who_i_am-table__td {\n    display: block;\n    width: 100%;\n    border-bottom: none;\n  }\n}\n.who_i_am-table__th {\n  font-weight: 700;\n}\n.who_i_am-table__td {\n  font-weight: 300;\n  background-color: #fafafa;\n}\n.exp-list {\n  position: relative;\n  font-size: 1.6rem;\n}\n.exp-list-title_icon {\n  position: relative;\n  left: -0.4rem;\n  width: 4.7rem;\n  line-height: 4rem;\n  font-size: 2rem;\n  text-align: center;\n  border: 0.3rem solid #efefef;\n  border-radius: 50%;\n}\n.exp-list-item {\n  margin-left: 1.7rem;\n  padding-left: 2rem;\n  padding-top: 4rem;\n  border-left: 0.3rem solid #efefef;\n}\n.exp-list-item__title {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.exp-list-item__title:before {\n  content: '';\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  left: -2.8rem;\n  background-color: #558e6a;\n  border: 0.2rem solid white;\n  border-radius: 50%;\n}\n.exp-list-item__date {\n  margin-bottom: 1rem;\n  color: #777;\n  font-style: italic;\n  font-weight: 300;\n}\n.exp-list-item__date__icon {\n  display: inline-block;\n  color: #777;\n  margin-right: 0.5rem;\n}\n.exp-list-item__description {\n  line-height: 1.3;\n  font-weight: 300;\n  text-align: justify;\n}\n.icons-list {\n  text-align: center;\n}\n.icons-list-item {\n  display: inline-block;\n  width: 30%;\n  margin-bottom: 3rem;\n  vertical-align: top;\n}\n@media screen and (max-width: 767px) {\n  .icons-list-item {\n    display: block;\n    width: auto;\n  }\n}\n.icons-list-item__icon {\n  display: inline-block;\n  margin-bottom: 1rem;\n  color: #558e6a;\n  font-size: 5rem;\n}\n.icons-list-item__title {\n  margin-bottom: 1rem;\n  font-size: 1.6rem;\n  font-style: italic;\n  text-transform: uppercase;\n}\n.icons-list-item__description {\n  display: inline-block;\n  width: 70%;\n  color: #777;\n  font-size: 1.6rem;\n  font-style: italic;\n  font-weight: 100;\n  line-height: 1.2;\n}\n@media screen and (max-width: 767px) {\n  .icons-list-item__description {\n    width: auto;\n  }\n}\n.tech-skills-item {\n  position: relative;\n  margin-bottom: 3rem;\n}\n.tech-skills-title {\n  display: inline-block;\n  width: 80%;\n  padding-right: 3rem;\n  vertical-align: top;\n}\n@media screen and (max-width: 767px) {\n  .tech-skills-title {\n    position: absolute;\n    padding-right: 0;\n    left: 50%;\n    top: 50%;\n    width: 80%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n  }\n}\n.tech-skills-title__name {\n  margin-bottom: 1rem;\n  color: #33373d;\n  font-size: 2rem;\n  font-style: italic;\n  letter-spacing: 0.1rem;\n}\n.tech-skills-title__description {\n  margin-bottom: 1rem;\n  color: #777;\n  font-size: 1.6rem;\n  font-style: italic;\n  font-weight: 100;\n  line-height: 1.4;\n  text-align: justify;\n}\n@media screen and (max-width: 767px) {\n  .tech-skills-title__description {\n    display: none;\n  }\n}\n.tech-skills-title__keywords {\n  font-size: 1.6rem;\n  line-height: 1.5;\n}\n.tech-skills-title__keywords__label {\n  display: inline-block;\n  padding: 0 1rem;\n  margin-right: 0.5rem;\n  color: white;\n  font-style: italic;\n  font-weight: normal;\n  background-color: #558e6a;\n  border-radius: 0.5rem;\n}\n.tech-skills-title__keywords__text {\n  color: #777;\n  font-weight: bold;\n}\n.tech-skills-progress {\n  display: inline-block;\n  width: 20%;\n  vertical-align: top;\n}\n@media screen and (max-width: 767px) {\n  .tech-skills-progress {\n    display: block;\n    width: auto;\n  }\n}\n@media screen and (max-width: 767px) {\n  .tech-skills-progress .text {\n    display: none;\n  }\n}\n.language-skills-item {\n  margin-bottom: 3rem;\n}\n.language-skills-title {\n  margin-bottom: 1rem;\n  color: #33373d;\n  font-size: 1.8rem;\n  font-style: italic;\n  letter-spacing: 0.1rem;\n}\n.language-skills-title .small {\n  float: right;\n  color: #777;\n  font-size: 1.6rem;\n  font-weight: 300;\n}\n.language-skills-progress {\n  margin-bottom: 2rem;\n}\n.language-skills-description {\n  color: #777;\n  font-size: 1.6rem;\n  font-style: italic;\n  font-weight: 100;\n  line-height: 1.4;\n  text-align: justify;\n}\n.tools-skills-item {\n  margin-bottom: 3rem;\n  overflow: hidden;\n}\n.tools-skills-title {\n  float: left;\n  color: #777;\n  font-size: 1.8rem;\n  font-style: italic;\n  letter-spacing: 0.1rem;\n}\n@media screen and (max-width: 767px) {\n  .tools-skills-title {\n    float: none;\n    margin-bottom: 1rem;\n  }\n}\n.tools-skills-progress {\n  float: right;\n}\n@media screen and (max-width: 767px) {\n  .tools-skills-progress {\n    float: none;\n    margin-left: -0.5rem;\n  }\n}\n.tools-skills-progress__item {\n  display: inline-block;\n  margin: 0 0.5rem;\n  width: 2rem;\n  height: 2rem;\n  background: black;\n  border-radius: 50%;\n}\n.tools-skills-progress__item.active {\n  background-color: #558e6a;\n}\n.portfolio-list {\n  text-align: center;\n}\n.portfolio-list-item {\n  position: relative;\n  display: inline-block;\n  margin: 0 1rem 2rem;\n  width: 30%;\n}\n@media screen and (max-width: 767px) {\n  .portfolio-list-item {\n    display: block;\n    width: auto;\n  }\n}\n.portfolio-list-item__img {\n  width: 100%;\n}\n.portfolio-list-item__overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(85, 142, 106, 0.8);\n}\n.portfolio-list-item__overlay__center {\n  display: inline-block;\n  position: absolute;\n  width: 70%;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.portfolio-list-item__overlay__name {\n  display: block;\n  margin-bottom: 1rem;\n  color: white;\n  font-size: 1.6rem;\n  font-style: italic;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n}\n.portfolio-list-item__overlay__position {\n  color: white;\n  font-size: 1.6rem;\n  font-weight: 300;\n}\n.portfolio-list-item:hover .portfolio-list-item__overlay {\n  display: block;\n}\n.contact-map {\n  position: relative;\n  padding-top: 60%;\n}\n.contact-map-instance {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.contact-info {\n  position: relative;\n  padding: 4rem 2rem 2rem;\n  margin-top: 5rem;\n  border: 0.1rem solid #efefef;\n}\n.contact-info-icon {\n  position: absolute;\n  width: 6rem;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  line-height: 6rem;\n  color: white;\n  font-size: 3rem;\n  text-align: center;\n  background-color: #558e6a;\n  border-radius: 50%;\n}\n.contact-info-text {\n  color: #33373d;\n  font-size: 2rem;\n  text-align: center;\n}\nhtml,\nbody {\n  min-height: 100%;\n  color: #33373d;\n  font-size: 10px;\n  font-family: Roboto;\n}\nbody {\n  padding: 5rem 0;\n  background-color: #efefef;\n}\n@media screen and (max-width: 767px) {\n  body {\n    padding: 0;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n  body {\n    padding: 2rem;\n  }\n}\n.cv {\n  margin: 0 auto;\n  max-width: 120rem;\n  height: 100%;\n  font-size: 0;\n}\n.main-header,\n.page-wrapper {\n  display: inline-block;\n  min-height: 100%;\n  vertical-align: top;\n}\n@media screen and (max-width: 767px) {\n  .main-header,\n  .page-wrapper {\n    display: block;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n  .main-header,\n  .page-wrapper {\n    display: block;\n  }\n}\n.main-header {\n  width: 30%;\n  padding-right: 2rem;\n}\n@media screen and (max-width: 767px) {\n  .main-header {\n    width: auto;\n    padding-right: 0;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n  .main-header {\n    width: auto;\n    padding-right: 0;\n  }\n}\n.main-nav {\n  font-weight: bold;\n  text-transform: uppercase;\n  background-color: #33373d;\n}\n.main-nav-li {\n  position: relative;\n  border-bottom: 0.1rem solid #26292e;\n  font-size: 1.4rem;\n  text-align: right;\n}\n@media screen and (max-width: 767px) {\n  .main-nav-li {\n    display: inline-block;\n    width: 25%;\n    vertical-align: top;\n    font-size: 0;\n    text-align: center;\n    border: none;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n  .main-nav-li {\n    display: inline-block;\n    width: 25%;\n    vertical-align: top;\n    border-bottom: none;\n    border-right: 0.1rem solid #26292e;\n  }\n  .main-nav-li:last-child {\n    border-right: none;\n  }\n}\n.main-nav-li:last-child {\n  border-bottom: none;\n}\n.main-nav-item {\n  display: block;\n  padding: 2rem;\n  color: #85878b;\n}\n@media screen and (max-width: 767px) {\n  .main-nav-item {\n    display: inline-block;\n  }\n}\n.main-nav-item:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  background-color: #558e6a;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n.main-nav-item:hover,\n.main-nav-item.active {\n  color: white;\n}\n.main-nav-item:hover:before,\n.main-nav-item.active:before {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n.main-nav-item > * {\n  position: relative;\n  z-index: 2;\n}\n.main-nav-item i {\n  float: left;\n  font-size: 2rem;\n  margin-top: -0.3rem;\n}\n@media screen and (max-width: 767px) {\n  .main-nav-item i {\n    font-size: 2rem;\n  }\n}\n.avatar {\n  position: relative;\n}\n.avatar-title {\n  position: absolute;\n  padding: 0.5rem 1.5rem;\n  color: #FFF;\n  font-size: 1.6rem;\n  letter-spacing: 0.2rem;\n  -webkit-transform: rotate(270deg) translateX(-100%);\n          transform: rotate(270deg) translateX(-100%);\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  background: -webkit-linear-gradient(right, #33373D 0%, rgba(51, 55, 61, 0) 100%);\n  background: linear-gradient(to left, #33373D 0%, rgba(51, 55, 61, 0) 100%);\n}\n.avatar img {\n  width: 100%;\n}\n.social-links {\n  padding: 2rem;\n  background-color: white;\n  color: #33373d;\n  font-size: 2rem;\n  text-align: center;\n}\n.social-links-li {\n  display: inline-block;\n  margin: 0 0.1rem;\n  width: 4rem;\n  line-height: 3.5rem;\n  border-radius: 50%;\n  border: 0.2rem solid #33373d;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.social-links-li:hover {\n  color: #558e6a;\n  border-color: #558e6a;\n}\n.page-wrapper {\n  width: 70%;\n  background-color: white;\n}\n@media screen and (max-width: 767px) {\n  .page-wrapper {\n    width: auto;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n  .page-wrapper {\n    width: auto;\n  }\n}\n.page-footer {\n  padding: 5rem 0;\n  text-align: center;\n  border-top: 1px solid #efefef;\n}\n.page-footer .download-cv,\n.page-footer .print-cv {\n  display: inline-block;\n  padding: 1rem 0;\n  margin: 0 2rem;\n  width: 25rem;\n  font-size: 2rem;\n  text-transform: uppercase;\n  border: 0.3rem solid;\n}\n.page-footer .download-cv i,\n.page-footer .print-cv i {\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n.page-footer .download-cv {\n  color: white;\n  background-color: #33373d;\n  border-color: #33373d;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n@media screen and (max-width: 767px) {\n  .page-footer .download-cv {\n    margin-bottom: 3rem;\n  }\n}\n.page-footer .download-cv:hover {\n  background-color: #558e6a;\n  border-color: #558e6a;\n}\n.page-footer .print-cv {\n  position: relative;\n  border-width: 0;\n  border-bottom-width: 0.3rem;\n}\n.page-footer .print-cv:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  left: 0;\n  bottom: -0.3rem;\n  border-left: 0.3rem solid;\n  border-top: 0.3rem solid;\n}\n.page-footer .print-cv:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  right: 0;\n  bottom: -0.3rem;\n  border-right: 0.3rem solid;\n  border-top: 0.3rem solid;\n}\n.page-footer .print-cv:hover:before,\n.page-footer .print-cv:hover:after {\n  -webkit-animation: button-smart-border 0.4s forwards;\n          animation: button-smart-border 0.4s forwards;\n}\n.section {\n  padding: 0 3rem;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 767px) {\n  .section {\n    padding: 0 2rem;\n  }\n}\n.section-title {\n  padding: 2rem 3rem 1rem;\n  margin: 0 -3rem 3rem;\n  color: #33373d;\n  font-size: 1.7rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-bottom: 0.1rem solid #efefef;\n}\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Thin.ttf?3f68500b267c20051088bcc0698af773";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-ThinItalic.ttf?1e5737be5c68c15c3a105b2db9a3b67c";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Light.ttf?7b5fb88f12bec8143f00e21bc3222124";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-LightItalic.ttf?129c5057f4480f9a353e15e1e1e09f9d";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Regular.ttf?ac3f799d5bbaf5196fab15ab8de8431c";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Italic.ttf?de74c60991cd63c8b922e0e665a39c7a";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Medium.ttf?fe13e4170719c2fc586501e777bde143";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-MediumItalic.ttf?5b25afa871e1b896011859f8cdf8da74";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Bold.ttf?d329cc8b34667f114a95422aaad1b063";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-BoldItalic.ttf?b37d0bb73a2f688ecaee01647f41e3e5";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-Black.ttf?893fe14628bd7ac498d550e96367e1be";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/Roboto//Roboto-BlackItalic.ttf?256aab654d3c4dd0e12fd0a32c7e8aa6";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/font-awesome//fontawesome-webfont.eot?32400f4e08932a94d8bfd2422702c446";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/font-awesome//fontawesome-webfont.woff2?db812d8a70a4e88e888744c1c9a27e89";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/font-awesome//fontawesome-webfont.woff?a35720c2fed2c7f043bc7e4ffb45e073";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/font-awesome//fontawesome-webfont.ttf?a3de2170e4e9df77161ea5d3f31b2668";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/font-awesome//fontawesome-webfont.svg?f775f9cca88e21d45bebe185b27c0e5b";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./ava1.jpg": 43,
		"./portfolio/freelance.jpg": 44,
		"./portfolio/gbas.jpg": 45,
		"./portfolio/gcas.jpg": 46,
		"./portfolio/gofast.jpg": 47,
		"./portfolio/got.jpg": 48,
		"./portfolio/hiqo.jpg": 49,
		"./portfolio/look.jpg": 50,
		"./portfolio/node.jpg": 51,
		"./portfolio/sportcom.jpg": 52,
		"./the-rock.jpg": 53
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 42;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img//ava1.jpg?8eaab2a60961dbba08df2f2363ee9c42";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//freelance.jpg?bb44ffeab5fc0c9530f6952fe7afbd6a";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//gbas.jpg?faa85a44b9cfd267b29f27f2da83ab7e";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//gcas.jpg?895fb056e057eb59c7b783f270551eb8";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//gofast.jpg?3d2cbc38b2d076f775c24cb109926672";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//got.jpg?8b28a3d1434b2b7675b6a755a12b8e66";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//hiqo.jpg?68c3c10f2d6da02c9c5399276b290481";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//look.jpg?1f5cce779f2fc5b79adb0dc8a8e8bde9";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//node.jpg?2b0ea3e980ad773b0ef802ec024ed43b";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/portfolio//sportcom.jpg?2f91b0f55e9506293c19a0899cdfac23";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img//the-rock.jpg?0e1b7ae15ca908ea5b8111d2cc6f3146";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var dom = __webpack_require__(55);
	var MainHeader = __webpack_require__(58);

	var mainHeader = new MainHeader();

	dom('.fn-main-header').append(mainHeader.el);

	module.exports = {
	    updateMainNav: function (path) {
	        mainHeader.updateNav(path);
	    }
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var dom = __webpack_require__(56);

	module.exports = dom;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * jBone v1.2.0 - 2016-04-13 - Library for DOM manipulation
	 *
	 * http://jbone.js.org
	 *
	 * Copyright 2016 Alexey Kupriyanenko
	 * Released under the MIT license.
	 */

	(function (win) {

	var
	// cache previous versions
	_$ = win.$,
	_jBone = win.jBone,

	// Quick match a standalone tag
	rquickSingleTag = /^<(\w+)\s*\/?>$/,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash
	rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Alias for function
	slice = [].slice,
	splice = [].splice,
	keys = Object.keys,

	// Alias for global variables
	doc = document,

	isString = function(el) {
	    return typeof el === "string";
	},
	isObject = function(el) {
	    return el instanceof Object;
	},
	isFunction = function(el) {
	    return ({}).toString.call(el) === "[object Function]";
	},
	isArray = function(el) {
	    return Array.isArray(el);
	},
	jBone = function(element, data) {
	    return new fn.init(element, data);
	},
	fn;

	// set previous values and return the instance upon calling the no-conflict mode
	jBone.noConflict = function() {
	    win.$ = _$;
	    win.jBone = _jBone;

	    return jBone;
	};

	fn = jBone.fn = jBone.prototype = {
	    init: function(element, data) {
	        var elements, tag, wraper, fragment;

	        if (!element) {
	            return this;
	        }
	        if (isString(element)) {
	            // Create single DOM element
	            if (tag = rquickSingleTag.exec(element)) {
	                this[0] = doc.createElement(tag[1]);
	                this.length = 1;

	                if (isObject(data)) {
	                    this.attr(data);
	                }

	                return this;
	            }
	            // Create DOM collection
	            if ((tag = rquickExpr.exec(element)) && tag[1]) {
	                fragment = doc.createDocumentFragment();
	                wraper = doc.createElement("div");
	                wraper.innerHTML = element;
	                while (wraper.lastChild) {
	                    fragment.appendChild(wraper.firstChild);
	                }
	                elements = slice.call(fragment.childNodes);

	                return jBone.merge(this, elements);
	            }
	            // Find DOM elements with querySelectorAll
	            if (jBone.isElement(data)) {
	                return jBone(data).find(element);
	            }

	            try {
	                elements = doc.querySelectorAll(element);

	                return jBone.merge(this, elements);
	            } catch (e) {
	                return this;
	            }
	        }
	        // Wrap DOMElement
	        if (element.nodeType) {
	            this[0] = element;
	            this.length = 1;

	            return this;
	        }
	        // Run function
	        if (isFunction(element)) {
	            return element();
	        }
	        // Return jBone element as is
	        if (element instanceof jBone) {
	            return element;
	        }

	        // Return element wrapped by jBone
	        return jBone.makeArray(element, this);
	    },

	    pop: [].pop,
	    push: [].push,
	    reverse: [].reverse,
	    shift: [].shift,
	    sort: [].sort,
	    splice: [].splice,
	    slice: [].slice,
	    indexOf: [].indexOf,
	    forEach: [].forEach,
	    unshift: [].unshift,
	    concat: [].concat,
	    join: [].join,
	    every: [].every,
	    some: [].some,
	    filter: [].filter,
	    map: [].map,
	    reduce: [].reduce,
	    reduceRight: [].reduceRight,
	    length: 0
	};

	fn.constructor = jBone;

	fn.init.prototype = fn;

	jBone.setId = function(el) {
	    var jid = el.jid;

	    if (el === win) {
	        jid = "window";
	    } else if (el.jid === undefined) {
	        el.jid = jid = ++jBone._cache.jid;
	    }

	    if (!jBone._cache.events[jid]) {
	        jBone._cache.events[jid] = {};
	    }
	};

	jBone.getData = function(el) {
	    el = el instanceof jBone ? el[0] : el;

	    var jid = el === win ? "window" : el.jid;

	    return {
	        jid: jid,
	        events: jBone._cache.events[jid]
	    };
	};

	jBone.isElement = function(el) {
	    return el && el instanceof jBone || el instanceof HTMLElement || isString(el);
	};

	jBone._cache = {
	    events: {},
	    jid: 0
	};

	function isArraylike(obj) {
	    var length = obj.length,
	        type = typeof obj;

	    if (isFunction(type) || obj === win) {
	        return false;
	    }

	    if (obj.nodeType === 1 && length) {
	        return true;
	    }

	    return isArray(type) || length === 0 ||
	        typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	fn.pushStack = function(elems) {
	    var ret = jBone.merge(this.constructor(), elems);

	    return ret;
	};

	jBone.merge = function(first, second) {
	    var l = second.length,
	        i = first.length,
	        j = 0;

	    while (j < l) {
	        first[i++] = second[j++];
	    }

	    first.length = i;

	    return first;
	};

	jBone.contains = function(container, contained) {
	    return container.contains(contained);
	};

	jBone.extend = function(target) {
	    var tg;

	    splice.call(arguments, 1).forEach(function(source) {
	        tg = target; //caching target for perf improvement

	        if (source) {
	            for (var prop in source) {
	                tg[prop] = source[prop];
	            }
	        }
	    });

	    return target;
	};

	jBone.makeArray = function(arr, results) {
	    var ret = results || [];

	    if (arr !== null) {
	        if (isArraylike(arr)) {
	            jBone.merge(ret, isString(arr) ? [arr] : arr);
	        } else {
	            ret.push(arr);
	        }
	    }

	    return ret;
	};

	jBone.unique = function(array) {
	    if (array == null) {
	        return [];
	    }

	    var result = [];

	    for (var i = 0, length = array.length; i < length; i++) {
	        var value = array[i];
	        if (result.indexOf(value) < 0) {
	            result.push(value);
	        }
	    }
	    return result;
	};

	function BoneEvent(e, data) {
	    var key, setter;

	    this.originalEvent = e;

	    setter = function(key, e) {
	        if (key === "preventDefault") {
	            this[key] = function() {
	                this.defaultPrevented = true;
	                return e[key]();
	            };
	        } else if (key === "stopImmediatePropagation") {
	            this[key] = function() {
	                this.immediatePropagationStopped = true;
	                return e[key]();
	            };
	        } else if (isFunction(e[key])) {
	            this[key] = function() {
	                return e[key]();
	            };
	        } else {
	            this[key] = e[key];
	        }
	    };

	    for (key in e) {
	        if (e[key] || typeof e[key] === "function") {
	            setter.call(this, key, e);
	        }
	    }

	    jBone.extend(this, data, {
	        isImmediatePropagationStopped: function() {
	            return !!this.immediatePropagationStopped;
	        }
	    });
	}

	jBone.Event = function(event, data) {
	    var namespace, eventType;

	    if (event.type && !data) {
	        data = event;
	        event = event.type;
	    }

	    namespace = event.split(".").splice(1).join(".");
	    eventType = event.split(".")[0];

	    event = doc.createEvent("Event");
	    event.initEvent(eventType, true, true);

	    return jBone.extend(event, {
	        namespace: namespace,
	        isDefaultPrevented: function() {
	            return event.defaultPrevented;
	        }
	    }, data);
	};

	jBone.event = {

	    /**
	     * Attach a handler to an event for the elements
	     * @param {Node}        el         - Events will be attached to this DOM Node
	     * @param {String}      types      - One or more space-separated event types and optional namespaces
	     * @param {Function}    handler    - A function to execute when the event is triggered
	     * @param {Object}      [data]     - Data to be passed to the handler in event.data
	     * @param {String}      [selector] - A selector string to filter the descendants of the selected elements
	     */
	    add: function(el, types, handler, data, selector) {
	        jBone.setId(el);

	        var eventHandler = function(e) {
	                jBone.event.dispatch.call(el, e);
	            },
	            events = jBone.getData(el).events,
	            eventType, t, event;

	        types = types.split(" ");
	        t = types.length;
	        while (t--) {
	            event = types[t];

	            eventType = event.split(".")[0];
	            events[eventType] = events[eventType] || [];

	            if (events[eventType].length) {
	                // override with previous event handler
	                eventHandler = events[eventType][0].fn;
	            } else {
	                el.addEventListener && el.addEventListener(eventType, eventHandler, false);
	            }

	            events[eventType].push({
	                namespace: event.split(".").splice(1).join("."),
	                fn: eventHandler,
	                selector: selector,
	                data: data,
	                originfn: handler
	            });
	        }
	    },

	    /**
	     * Remove an event handler
	     * @param  {Node}       el        - Events will be deattached from this DOM Node
	     * @param  {String}     types     - One or more space-separated event types and optional namespaces
	     * @param  {Function}   handler   - A handler function previously attached for the event(s)
	     * @param  {String}     [selector] - A selector string to filter the descendants of the selected elements
	     */
	    remove: function(el, types, handler, selector) {
	        var removeListener = function(events, eventType, index, el, e) {
	                var callback;

	                // get callback
	                if ((handler && e.originfn === handler) || !handler) {
	                    callback = e.fn;
	                }

	                if (events[eventType][index].fn === callback) {
	                    // remove handler from cache
	                    events[eventType].splice(index, 1);

	                    if (!events[eventType].length) {
	                        el.removeEventListener(eventType, callback);
	                    }
	                }
	            },
	            events = jBone.getData(el).events,
	            l,
	            eventsByType;

	        if (!events) {
	            return;
	        }

	        // remove all events
	        if (!types && events) {
	            return keys(events).forEach(function(eventType) {
	                eventsByType = events[eventType];
	                l = eventsByType.length;

	                while(l--) {
	                    removeListener(events, eventType, l, el, eventsByType[l]);
	                }
	            });
	        }

	        types.split(" ").forEach(function(eventName) {
	            var eventType = eventName.split(".")[0],
	                namespace = eventName.split(".").splice(1).join("."),
	                e;

	            // remove named events
	            if (events[eventType]) {
	                eventsByType = events[eventType];
	                l = eventsByType.length;

	                while(l--) {
	                    e = eventsByType[l];
	                    if ((!namespace || (namespace && e.namespace === namespace)) &&
	                        (!selector  || (selector  && e.selector === selector))) {
	                        removeListener(events, eventType, l, el, e);
	                    }
	                }
	            }
	            // remove all namespaced events
	            else if (namespace) {
	                keys(events).forEach(function(eventType) {
	                    eventsByType = events[eventType];
	                    l = eventsByType.length;

	                    while(l--) {
	                        e = eventsByType[l];
	                        if (e.namespace.split(".")[0] === namespace.split(".")[0]) {
	                            removeListener(events, eventType, l, el, e);
	                        }
	                    }
	                });
	            }
	        });
	    },

	    /**
	     * Execute all handlers and behaviors attached to the matched elements for the given event type.
	     * @param  {Node}       el       - Events will be triggered for thie DOM Node
	     * @param  {String}     event    - One or more space-separated event types and optional namespaces
	     */
	    trigger: function(el, event) {
	        var events = [];

	        if (isString(event)) {
	            events = event.split(" ").map(function(event) {
	                return jBone.Event(event);
	            });
	        } else {
	            event = event instanceof Event ? event : jBone.Event(event);
	            events = [event];
	        }

	        events.forEach(function(event) {
	            if (!event.type) {
	                return;
	            }

	            el.dispatchEvent && el.dispatchEvent(event);
	        });
	    },

	    dispatch: function(e) {
	        var i = 0,
	            j = 0,
	            el = this,
	            handlers = jBone.getData(el).events[e.type],
	            length = handlers.length,
	            handlerQueue = [],
	            targets = [],
	            l,
	            expectedTarget,
	            handler,
	            event,
	            eventOptions;

	        // cache all events handlers, fix issue with multiple handlers (issue #45)
	        for (; i < length; i++) {
	            handlerQueue.push(handlers[i]);
	        }

	        i = 0;
	        length = handlerQueue.length;

	        for (;
	            // if event exists
	            i < length &&
	            // if handler is not removed from stack
	            ~handlers.indexOf(handlerQueue[i]) &&
	            // if propagation is not stopped
	            !(event && event.isImmediatePropagationStopped());
	        i++) {
	            expectedTarget = null;
	            eventOptions = {};
	            handler = handlerQueue[i];
	            handler.data && (eventOptions.data = handler.data);

	            // event handler without selector
	            if (!handler.selector) {
	                event = new BoneEvent(e, eventOptions);

	                if (!(e.namespace && e.namespace !== handler.namespace)) {
	                    handler.originfn.call(el, event);
	                }
	            }
	            // event handler with selector
	            else if (
	                // if target and selected element the same
	                ~(targets = jBone(el).find(handler.selector)).indexOf(e.target) && (expectedTarget = e.target) ||
	                // if one of element matched with selector contains target
	                (el !== e.target && el.contains(e.target))
	            ) {
	                // get element matched with selector
	                if (!expectedTarget) {
	                    l = targets.length;
	                    j = 0;

	                    for (; j < l; j++) {
	                        if (targets[j] && targets[j].contains(e.target)) {
	                            expectedTarget = targets[j];
	                        }
	                    }
	                }

	                if (!expectedTarget) {
	                    continue;
	                }

	                eventOptions.currentTarget = expectedTarget;
	                event = new BoneEvent(e, eventOptions);

	                if (!(e.namespace && e.namespace !== handler.namespace)) {
	                    handler.originfn.call(expectedTarget, event);
	                }
	            }
	        }
	    }
	};

	fn.on = function(types, selector, data, fn) {
	    var length = this.length,
	        i = 0;

	    if (data == null && fn == null) {
	        // (types, fn)
	        fn = selector;
	        data = selector = undefined;
	    } else if (fn == null) {
	        if (typeof selector === "string") {
	            // (types, selector, fn)
	            fn = data;
	            data = undefined;
	        } else {
	            // (types, data, fn)
	            fn = data;
	            data = selector;
	            selector = undefined;
	        }
	    }

	    if (!fn) {
	        return this;
	    }

	    for (; i < length; i++) {
	        jBone.event.add(this[i], types, fn, data, selector);
	    }

	    return this;
	};

	fn.one = function(event) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        oneArgs = slice.call(args, 1, args.length - 1),
	        callback = slice.call(args, -1)[0],
	        addListener;

	    addListener = function(el) {
	        var $el = jBone(el);

	        event.split(" ").forEach(function(event) {
	            var fn = function(e) {
	                $el.off(event, fn);
	                callback.call(el, e);
	            };

	            $el.on.apply($el, [event].concat(oneArgs, fn));
	        });
	    };

	    for (; i < length; i++) {
	        addListener(this[i]);
	    }

	    return this;
	};

	fn.trigger = function(event) {
	    var i = 0,
	        length = this.length;

	    if (!event) {
	        return this;
	    }

	    for (; i < length; i++) {
	        jBone.event.trigger(this[i], event);
	    }

	    return this;
	};

	fn.off = function(types, selector, handler) {
	    var i = 0,
	        length = this.length;

	    if (isFunction(selector)) {
	        handler = selector;
	        selector = undefined;
	    }

	    for (; i < length; i++) {
	        jBone.event.remove(this[i], types, handler, selector);
	    }

	    return this;
	};

	fn.find = function(selector) {
	    var results = [],
	        i = 0,
	        length = this.length,
	        finder = function(el) {
	            if (isFunction(el.querySelectorAll)) {
	                [].forEach.call(el.querySelectorAll(selector), function(found) {
	                    results.push(found);
	                });
	            }
	        };

	    for (; i < length; i++) {
	        finder(this[i]);
	    }

	    return jBone(results);
	};

	fn.get = function(index) {
	    return index != null ?

	        // Return just one element from the set
	        (index < 0 ? this[index + this.length] : this[index]) :

	        // Return all the elements in a clean array
	        slice.call(this);
	};

	fn.eq = function(index) {
	    return jBone(this[index]);
	};

	fn.parent = function() {
	    var results = [],
	        parent,
	        i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        if (!~results.indexOf(parent = this[i].parentElement) && parent) {
	            results.push(parent);
	        }
	    }

	    return jBone(results);
	};

	fn.toArray = function() {
	    return slice.call(this);
	};

	fn.is = function() {
	    var args = arguments;

	    return this.some(function(el) {
	        return el.tagName.toLowerCase() === args[0];
	    });
	};

	fn.has = function() {
	    var args = arguments;

	    return this.some(function(el) {
	        return el.querySelectorAll(args[0]).length;
	    });
	};

	fn.add = function(selector, context) {
	    return this.pushStack(
	        jBone.unique(
	            jBone.merge(this.get(), jBone(selector, context))
	        )
	    );
	};

	fn.attr = function(key, value) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        setter;

	    if (isString(key) && args.length === 1) {
	        return this[0] && this[0].getAttribute(key);
	    }

	    if (args.length === 2) {
	        setter = function(el) {
	            el.setAttribute(key, value);
	        };
	    } else if (isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                el.setAttribute(name, key[name]);
	            });
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.removeAttr = function(key) {
	    var i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        this[i].removeAttribute(key);
	    }

	    return this;
	};

	fn.val = function(value) {
	    var i = 0,
	        length = this.length;

	    if (arguments.length === 0) {
	        return this[0] && this[0].value;
	    }

	    for (; i < length; i++) {
	        this[i].value = value;
	    }

	    return this;
	};

	fn.css = function(key, value) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        setter;

	    // Get attribute
	    if (isString(key) && args.length === 1) {
	        return this[0] && win.getComputedStyle(this[0])[key];
	    }

	    // Set attributes
	    if (args.length === 2) {
	        setter = function(el) {
	            el.style[key] = value;
	        };
	    } else if (isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                el.style[name] = key[name];
	            });
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.data = function(key, value) {
	    var args = arguments, data = {},
	        i = 0,
	        length = this.length,
	        setter,
	        setValue = function(el, key, value) {
	            if (isObject(value)) {
	                el.jdata = el.jdata || {};
	                el.jdata[key] = value;
	            } else {
	                el.dataset[key] = value;
	            }
	        },
	        getValue = function(value) {
	            if (value === "true") {
	                return true;
	            } else if (value === "false") {
	                return false;
	            } else {
	                return value;
	            }
	        };

	    // Get all data
	    if (args.length === 0) {
	        this[0].jdata && (data = this[0].jdata);

	        keys(this[0].dataset).forEach(function(key) {
	            data[key] = getValue(this[0].dataset[key]);
	        }, this);

	        return data;
	    }
	    // Get data by name
	    if (args.length === 1 && isString(key)) {
	        return this[0] && getValue(this[0].dataset[key] || this[0].jdata && this[0].jdata[key]);
	    }

	    // Set data
	    if (args.length === 1 && isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                setValue(el, name, key[name]);
	            });
	        };
	    } else if (args.length === 2) {
	        setter = function(el) {
	            setValue(el, key, value);
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.removeData = function(key) {
	    var i = 0,
	        length = this.length,
	        jdata, dataset;

	    for (; i < length; i++) {
	        jdata = this[i].jdata;
	        dataset = this[i].dataset;

	        if (key) {
	            jdata && jdata[key] && delete jdata[key];
	            delete dataset[key];
	        } else {
	            for (key in jdata) {
	                delete jdata[key];
	            }

	            for (key in dataset) {
	                delete dataset[key];
	            }
	        }
	    }

	    return this;
	};

	fn.addClass = function(className) {
	    var i = 0,
	        j = 0,
	        length = this.length,
	        classes = className ? className.trim().split(/\s+/) : [];

	    for (; i < length; i++) {
	        j = 0;

	        for (j = 0; j < classes.length; j++) {
	            this[i].classList.add(classes[j]);
	        }
	    }

	    return this;
	};

	fn.removeClass = function(className) {
	    var i = 0,
	        j = 0,
	        length = this.length,
	        classes = className ? className.trim().split(/\s+/) : [];

	    for (; i < length; i++) {
	        j = 0;

	        for (j = 0; j < classes.length; j++) {
	            this[i].classList.remove(classes[j]);
	        }
	    }

	    return this;
	};

	fn.toggleClass = function(className, force) {
	    var i = 0,
	        length = this.length,
	        method = "toggle";

	    force === true && (method = "add") || force === false && (method = "remove");

	    if (className) {
	        for (; i < length; i++) {
	            this[i].classList[method](className);
	        }
	    }

	    return this;
	};

	fn.hasClass = function(className) {
	    var i = 0, length = this.length;

	    if (className) {
	        for (; i < length; i++) {
	            if (this[i].classList.contains(className)) {
	                return true;
	            }
	        }
	    }

	    return false;
	};

	fn.html = function(value) {
	    var args = arguments,
	        el;

	    // add HTML into elements
	    if (args.length === 1 && value !== undefined) {
	        return this.empty().append(value);
	    }
	    // get HTML from element
	    else if (args.length === 0 && (el = this[0])) {
	        return el.innerHTML;
	    }

	    return this;
	};

	fn.append = function(appended) {
	    var i = 0,
	        length = this.length,
	        setter;

	    // create jBone object and then append
	    if (isString(appended) && rquickExpr.exec(appended)) {
	        appended = jBone(appended);
	    }
	    // create text node for insertion
	    else if (!isObject(appended)) {
	        appended = document.createTextNode(appended);
	    }

	    appended = appended instanceof jBone ? appended : jBone(appended);

	    setter = function(el, i) {
	        appended.forEach(function(node) {
	            if (i) {
	                el.appendChild(node.cloneNode(true));
	            } else {
	                el.appendChild(node);
	            }
	        });
	    };

	    for (; i < length; i++) {
	        setter(this[i], i);
	    }

	    return this;
	};

	fn.appendTo = function(to) {
	    jBone(to).append(this);

	    return this;
	};

	fn.empty = function() {
	    var i = 0,
	        length = this.length,
	        el;

	    for (; i < length; i++) {
	        el = this[i];

	        while (el.lastChild) {
	            el.removeChild(el.lastChild);
	        }
	    }

	    return this;
	};

	fn.remove = function() {
	    var i = 0,
	        length = this.length,
	        el;

	    // remove all listeners
	    this.off();

	    for (; i < length; i++) {
	        el = this[i];

	        // remove data and nodes
	        delete el.jdata;
	        el.parentNode && el.parentNode.removeChild(el);
	    }

	    return this;
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
	    // Expose jBone as module.exports in loaders that implement the Node
	    // module pattern (including browserify). Do not create the global, since
	    // the user will be storing it themselves locally, and globals are frowned
	    // upon in the Node module world.
	    module.exports = jBone;
	}
	// Register as a AMD module
	else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return jBone;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    win.jBone = win.$ = jBone;
	} else if (typeof win === "object" && typeof win.document === "object") {
	    win.jBone = win.$ = jBone;
	}

	}(window));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var BaseView = __webpack_require__(59);
	var mvc = __webpack_require__(60);

	var MainHeader = BaseView.extend({
	    template: 'layout/main-header',
	    url: 'data/about.json',

	    events: {
	        'click .fn-nav-item': 'navigate'
	    },

	    initialize: function () {
	        this.renderAfterFetch();
	    },

	    navigate: function (event) {
	        event.preventDefault();

	        mvc.history.navigate(event.currentTarget.getAttribute('href'), true);
	    },

	    updateNav: function (path) {
	        if (this._rendered) {
	            this.setNavActiveClass(path);
	        } else {
	            this.listenToOnce(this, 'rendered', this.setNavActiveClass.bind(this, path));
	        }
	    },

	    setNavActiveClass: function (path) {
	        var target = this.$('.fn-nav-item').filter(function (el) {
	            return el.getAttribute('href').substr(1) === path;
	        })[0];

	        this.$('.fn-nav-item').removeClass('active');

	        target.classList.add('active');
	    }
	});

	module.exports = MainHeader;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var mvc = __webpack_require__(60);

	var BaseView = mvc.View.extend({
	    template: null,
	    url: null,

	    /**
	     * Return DoT template by template name or only template name
	     * @param {String} templateName
	     * @param {*} data
	     * @returns {String}
	     */
	    tmpl: function (templateName, data) {
	        var template = __webpack_require__(63)("./" + templateName + '.dot');

	        return template.call({
	            tmpl: this.tmpl
	        }, data);
	    },

	    renderAfterFetch: function () {
	        this._rendered = false;

	        return window.fetch(this.url)
	            .then(function (response) {
	                return response.json();
	            })
	            .then(function (data) {
	                this.$el.html(this.tmpl(this.template, data));

	                this.trigger('rendered');
	                this._rendered = true;
	            }.bind(this));
	    }
	});

	module.exports = BaseView;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var mvc = __webpack_require__(61);

	module.exports = mvc;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(62), __webpack_require__(56), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch (e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	})(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./layout/main-footer.dot": 64,
		"./layout/main-header.dot": 65,
		"./pages/about-page.dot": 66,
		"./pages/contact-page.dot": 67,
		"./pages/portfolio-page.dot": 68,
		"./pages/skills-page.dot": 69
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 63;


/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='';return out;
	}

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<figure class="avatar"> <figcaption class="avatar-title">'+(it.commonInfo.fullName)+'</figcaption> <img src="'+(it.commonInfo.avatarSrc)+'" alt="avatar"/></figure><ul class="main-nav"> <li class="main-nav-li"> <a href="/" class="main-nav-item fn-nav-item active"> <i class="fa fa-user"></i> <span>About</span> </a> </li> <li class="main-nav-li"> <a href="/skills" class="main-nav-item fn-nav-item"> <i class="fa fa-gears"></i> <span>Skills</span> </a> </li> <li class="main-nav-li"> <a href="/portfolio" class="main-nav-item fn-nav-item"> <i class="fa fa-folder"></i> <span>Portfolio</span> </a> </li> <li class="main-nav-li"> <a href="/contact" class="main-nav-item fn-nav-item"> <i class="fa fa-phone"></i> <span>Contact</span> </a> </li></ul><ul class="social-links"> ';var arr1=it.socialLinks;if(arr1){var link,i1=-1,l1=arr1.length-1;while(i1<l1){link=arr1[i1+=1];out+=' <li class="social-links-li"> <a href="'+(link.href)+'" target="_blank"><i class="fa fa-'+(link.icon)+'"></i></a> </li> ';} } out+='</ul>';return out;
	}

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<div class="page about-page"> <section class="section who_i_am"> <h1 class="section-title">Who i am</h1> <h2 class="who_i_am-title"> <span class="who_i_am-title__name">'+(it.commonInfo.fullName)+'</span> <span class="who_i_am-title__position">'+(it.commonInfo.position)+'</span> </h2> <p class="who_i_am-about">'+(it.commonInfo.introWords)+'</p> <table class="who_i_am-table"> <tbody> ';var arr1=it.commonInfo.details;if(arr1){var detail,i1=-1,l1=arr1.length-1;while(i1<l1){detail=arr1[i1+=1];out+=' <tr class="who_i_am-table__tr"> <td class="who_i_am-table__th">'+(detail.title)+'</td> <td class="who_i_am-table__td">'+(detail.value)+'</td> </tr> ';} } out+=' </tbody> </table> </section> <section class="section"> <h2 class="section-title">Education</h2> <ul class="exp-list"> <i class="fa fa-graduation-cap exp-list-title_icon"></i> ';var arr2=it.education;if(arr2){var edu,i2=-1,l2=arr2.length-1;while(i2<l2){edu=arr2[i2+=1];out+=' <li class="exp-list-item"> <h3 class="exp-list-item__title"> <span class="exp-list-item__title__position">'+(edu.position)+'</span> &nbsp;-&nbsp; <span class="exp-list-item__title__place">'+(edu.place)+'</span> </h3> <div class="exp-list-item__date"> <i class="fa fa-calendar exp-list-item__date__icon"></i> <span class="exp-list-item__date__start">'+(edu.startDate)+'</span> &nbsp;-&nbsp; <span class="exp-list-item__date__end">'+(edu.endDate)+'</span> </div> <p class="exp-list-item__description">'+(edu.description)+'</p> </li> ';} } out+=' </ul> </section> <section class="section"> <h2 class="section-title">Experience</h2> <ul class="exp-list"> <i class="fa fa-briefcase exp-list-title_icon"></i> ';var arr3=it.expirience;if(arr3){var exp,i3=-1,l3=arr3.length-1;while(i3<l3){exp=arr3[i3+=1];out+=' <li class="exp-list-item"> <h3 class="exp-list-item__title"> <span class="exp-list-item__title__position">'+(exp.position)+'</span> &nbsp;-&nbsp; <span class="exp-list-item__title__place">'+(exp.place)+'</span> </h3> <div class="exp-list-item__date"> <i class="fa fa-calendar exp-list-item__date__icon"></i> <span class="exp-list-item__date__start">'+(exp.startDate)+'</span> &nbsp;-&nbsp; <span class="exp-list-item__date__end">'+(exp.endDate)+'</span> </div> <p class="exp-list-item__description">'+(exp.description)+'</p> </li> ';} } out+=' </ul> </section> <section class="section"> <h1 class="section-title">Services</h1> <ul class="icons-list"> ';var arr4=it.services;if(arr4){var service,i4=-1,l4=arr4.length-1;while(i4<l4){service=arr4[i4+=1];out+=' <li class="icons-list-item"> <i class="fa fa-'+(service.icon)+' icons-list-item__icon"></i> <h4 class="icons-list-item__title">'+(service.title)+'</h4> <p class="icons-list-item__description">'+(service.description)+'</p> </li> ';} } out+=' </ul> </section> <section class="section"> <h1 class="section-title">Hobbies</h1> <ul class="icons-list"> ';var arr5=it.hobbies;if(arr5){var hobby,i5=-1,l5=arr5.length-1;while(i5<l5){hobby=arr5[i5+=1];out+=' <li class="icons-list-item"> <i class="fa fa-'+(hobby.icon)+' icons-list-item__icon"></i> <h4 class="icons-list-item__title">'+(hobby.title)+'</h4> <p class="icons-list-item__description">'+(hobby.description)+'</p> </li> ';} } out+=' </ul> </section></div>';return out;
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out=''; var contacts = it.commonInfo.details.filter(function (detail) { return detail.contact; }); out+='<div class="page about-page"> <section class="section who_i_am"> <h1 class="section-title">Map location</h1> <div class="contact-map"> <div class="contact-map-instance fn-map"></div> </div> </section> <section class="section"> <h1 class="section-title">Contact Info</h1> ';var arr1=contacts;if(arr1){var contact,i1=-1,l1=arr1.length-1;while(i1<l1){contact=arr1[i1+=1];out+=' <div class="contact-info"> <span class="contact-info-icon"> <i class="fa fa-'+(contact.contactIcon)+'"></i> </span> <h5 class="contact-info-text">'+(contact.value)+'</h5> </div> ';} } out+=' </section></div>';return out;
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<div class="page about-page"> <section class="section who_i_am"> <h1 class="section-title">Portfolio</h1> <ul class="portfolio-list"> ';var arr1=it.projects;if(arr1){var project,i1=-1,l1=arr1.length-1;while(i1<l1){project=arr1[i1+=1];out+=' <li class="portfolio-list-item"> <img class="portfolio-list-item__img" src="'+(project.img)+'" alt="portfolio"/> <a class="portfolio-list-item__overlay" href="'+(project.href)+'" target="_blank"> <span class="portfolio-list-item__overlay__center"> <span class="portfolio-list-item__overlay__name">'+(project.name)+'</span> <span class="portfolio-list-item__overlay__position">'+(project.position)+'</span> </span> </a> </li> ';} } out+=' </ul> </section></div>';return out;
	}

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function anonymous(it
	/**/) {
	var out='<div class="page skill-page"> <section class="section"> <h1 class="section-title">Tech Skills</h1> <ul class="tech-skills"> ';var arr1=it.commonTechSkills;if(arr1){var skill,i1=-1,l1=arr1.length-1;while(i1<l1){skill=arr1[i1+=1];out+=' <li class="tech-skills-item"> <div class="tech-skills-title"> <h4 class="tech-skills-title__name">'+(skill.title)+'</h4> <p class="tech-skills-title__description">'+(skill.description)+'</p> <div class="tech-skills-title__keywords"> <span class="tech-skills-title__keywords__label">Keywords:</span> <span class="tech-skills-title__keywords__text">'+(skill.keywords)+'</span> </div> </div> <div class="tech-skills-progress fn-tech-skills-progress" data-percent="'+(skill.level)+'" data-color="#558e6a" data-font-color="#558e6a" data-line-width="5">123</div> </li> ';} } out+=' </ul> </section> <section class="section"> <h1 class="section-title">Languages Skills</h1> <ul class="language-skills"> ';var arr2=it.languageSkills;if(arr2){var skill,i2=-1,l2=arr2.length-1;while(i2<l2){skill=arr2[i2+=1];out+=' <li class="language-skills-item"> <h4 class="language-skills-title">'+(skill.title)+' <span class="small">'+(skill.levelInWords)+'</span></h4> <div class="language-skills-progress fn-language-skills-progress" data-percent="'+(skill.level)+'" data-color="#558e6a"></div> <p class="language-skills-description">'+(skill.description)+'</p> </li> ';} } out+=' </ul> </section> <section class="section"> <h1 class="section-title">Tools Skills</h1> <ul class="tools-skills"> ';var arr3=it.toolsSkills;if(arr3){var skill,i3=-1,l3=arr3.length-1;while(i3<l3){skill=arr3[i3+=1];out+=' <li class="tools-skills-item"> <h4 class="tools-skills-title">'+(skill.title)+'</h4> <ul class="tools-skills-progress fn-tools-skills-progress" data-percent="'+(skill.level)+'" data-color="#558e6a"></ul> </li> ';} } out+=' </ul> </section></div>';return out;
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mvc = __webpack_require__(60);
	var layoutManager = __webpack_require__(54);

	var HomePage = __webpack_require__(71);
	var SkillsPage = __webpack_require__(73);
	var PortfolioPage = __webpack_require__(78);
	var ContactPage = __webpack_require__(79);

	var pages = {
	    home: new HomePage(),
	    skill: new SkillsPage(),
	    portfolio: new PortfolioPage(),
	    contact: new ContactPage()
	};

	/**
	 * Base router
	 *
	 * @constructor
	 * @extends Router
	 */
	var BaseRouter = mvc.Router.extend({
	    currentPage: null,

	    pages: {
	        '': pages.home,
	        default: pages.home,
	        skills: pages.skill,
	        portfolio: pages.portfolio,
	        contact: pages.contact
	    },

	    routes: {
	        '*route': 'routeHandler'
	    },

	    showPage: function (newPage) {
	        var currentPage = this.currentPage;

	        currentPage && currentPage.remove();

	        newPage.append();

	        this.currentPage = newPage;
	    },

	    routeHandler: function (path) {
	        var pageKey = path || '';
	        var newPage = this.pages[pageKey] || this.pages.default;

	        this.showPage(newPage);

	        layoutManager.updateMainNav(pageKey);
	    }
	});

	// Create instance of router and start history functionality
	var baseRouter = new BaseRouter();
	mvc.history.start({pushState: true});

	module.exports = baseRouter;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var PageView = __webpack_require__(72);

	var HomePage = PageView.extend({
	    template: 'pages/about-page',
	    url: 'data/about.json'
	});

	module.exports = HomePage;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var BaseView = __webpack_require__(59);
	var dom = __webpack_require__(55);

	var $pageContainer = dom('.page-container');

	var PageView = BaseView.extend({
	    initialize: function () {
	        BaseView.prototype.initialize.apply(this, arguments);

	        this.renderAfterFetch();
	    },

	    append: function () {
	        $pageContainer.append(this.el);

	        if (this._rendered) {
	            this.trigger('mounted');
	        } else {
	            this.listenToOnce(this, 'rendered', function () {
	                this.trigger('mounted');
	            }.bind(this));
	        }
	    }
	});

	module.exports = PageView;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var PageView = __webpack_require__(72);
	var dom = __webpack_require__(55);
	var CircleProgressBar = __webpack_require__(74);
	var LinearProgressBar = __webpack_require__(76);
	var PointsProgressBar = __webpack_require__(77);

	var SkillsPage = PageView.extend({
	    template: 'pages/skills-page',
	    url: 'data/skills.json',

	    circleProgresses: [],

	    initialize: function () {
	        PageView.prototype.initialize.apply(this, arguments);

	        this.listenToOnce(this, 'mounted', this.runProgresses.bind(this));
	    },

	    runProgresses: function () {
	        this.$('.fn-tech-skills-progress').forEach(function (el) {
	            var circleProgress = new CircleProgressBar({ el: el });

	            circleProgress.start();

	            this.circleProgresses.push(circleProgress);
	        }, this);

	        this.$('.fn-language-skills-progress').forEach(function (el) {
	            (new LinearProgressBar({ el: el })).start();
	        });

	        this.$('.fn-tools-skills-progress').forEach(function (el) {
	            (new PointsProgressBar({ el: el })).start();
	        });
	    },

	    delegateEvents: function () {
	        PageView.prototype.delegateEvents.apply(this, arguments);

	        dom(window).on('resize.resize-circle-progress', function () {
	            this.circleProgresses.forEach(function (circleProgress) {
	                circleProgress.refreshOnResize();
	            });
	        }.bind(this));
	    },

	    undelegateEvents: function () {
	        PageView.prototype.undelegateEvents.apply(this, arguments);

	        dom(window).off('resize.resize-circle-progress');
	    }
	});

	module.exports = SkillsPage;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var BaseProgressBar = __webpack_require__(75);

	var CircleProgressBar = BaseProgressBar.extend({
	    template: '<canvas></canvas><span class="text"></span>',

	    defaultOptions: {
	        percent: 33,
	        color: 'black',
	        lineWidth: 3,
	        radius: 100,
	        lineCap: 'round', // butt, round or square
	        fontSize: '2rem',
	        fontColor: 'black',
	        duration: 1000
	    },

	    initialize: function () {
	        BaseProgressBar.prototype.initialize.apply(this, arguments);


	    },

	    setElements: function () {
	        this.canvas = this.el.querySelector('canvas');
	        this.ctx = this.canvas.getContext('2d');

	        this.$text = this.$el.find('.text');
	    },

	    setElementsView: function () {
	        this.options.size = this.el.clientWidth;

	        this.canvas.width = this.canvas.height = this.options.size;
	        this.ctx.translate(this.options.size / 2, this.options.size / 2);
	        this.ctx.rotate(-1 * Math.PI);

	        this.imageData = this.ctx.getImageData(0, 0, this.options.size, this.options.size);

	        this.$el.css({
	            position: 'relative'
	        });

	        this.$text.css({
	            'font-size': this.options.fontSize,
	            color: this.options.fontColor,
	            position: 'absolute',
	            left: 0,
	            top: 0,
	            'margin-left': '50%',
	            'margin-top': '50%',
	            transform: 'translate(-50%, -50%)'
	        });
	    },

	    start: function () {
	        var interval = this.options.duration / this.options.percent;
	        var currentPercent = 1;

	        window.setTimeout(this.ticker.bind(this, interval, currentPercent), interval);
	    },

	    ticker: function (interval, currentPercent) {
	        this.drawCircle(currentPercent++);

	        if (currentPercent <= parseInt(this.options.percent, 10)) {
	            window.setTimeout(this.ticker.bind(this, interval, currentPercent), interval);
	        }
	    },

	    drawCircle: function (percent) {
	        var options = this.options;
	        var canvas = this.canvas;
	        var ctx = this.ctx;

	        ctx.putImageData(this.imageData, 0, 0);

	        ctx.beginPath();
	        ctx.arc(0, 0, (options.size - options.lineWidth) / 2, 0, Math.PI * 2, false);
	        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	        ctx.lineCap = options.lineCap;
	        ctx.lineWidth = options.lineWidth - 2;
	        ctx.stroke();
	        ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(0, 0, (options.size - options.lineWidth) / 2, 0, Math.PI * 2 * percent / 100, false);
	        ctx.strokeStyle = options.color;
	        ctx.lineCap = options.lineCap;
	        ctx.lineWidth = options.lineWidth;
	        ctx.stroke();
	        ctx.closePath();

	        this.$text.html(percent + '%');
	    },

	    refreshOnResize: function () {
	        this.setElementsView();
	        this.drawCircle(this.options.percent);
	    }

	    //delegateEvents: function () {
	    //    dom(window).on('resize.resize-circle-progress', function () {
	    //        this.setElementsView();
	    //        this.drawCircle();
	    //    }.bind(this));
	    //
	    //    this.listenTo(dom());
	    //
	    //    BaseProgressBar.prototype.delegateEvents.apply(this, arguments);
	    //},
	    //
	    //undelegateEvents: function () {
	    //    dom(window).off('resize.resize-circle-progress');
	    //
	    //    BaseProgressBar.prototype.undelegateEvents.apply(this, arguments);
	    //}
	});

	module.exports = CircleProgressBar;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var BaseView = __webpack_require__(59);

	var BaseProgressBar = BaseView.extend({
	    template: '',

	    defaultOptions: {},

	    initialize: function (options) {
	        this.setElement(options.el);
	        this.setOptions();
	        this.render();
	        this.setElements();
	        this.setElementsView();
	    },

	    setOptions: function () {
	        var data = this.$el.get(0).dataset;

	        this.options = {};

	        Object.keys(this.defaultOptions).forEach(function (key) {
	            this.options[key] = data[key] || this.defaultOptions[key];
	        }, this);
	    },

	    render: function () {
	        this.$el.html(this.template);
	    },

	    setElements: function () {},

	    setElementsView: function () {},

	    start: function () {}
	});

	module.exports = BaseProgressBar;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var BaseProgressBar = __webpack_require__(75);

	var LinearProgressBar = BaseProgressBar.extend({
	    template: '<span class="language-skills-progress__bar fn-bar"></span>',

	    defaultOptions: {
	        percent: 33,
	        color: 'black',
	        duration: 1000,
	        animationFunction: 'linear'
	    },

	    setElements: function () {
	        this.$bar = this.$('.fn-bar');
	    },

	    setElementsView: function () {
	        var options = this.options;

	        this.$el.css({
	            'position': 'relative',
	            'border': '0.2rem solid ' + options.color,
	            'height': '1.5rem',
	            'border-radius': '0.75rem'
	        });

	        this.$bar.css({
	            position: 'absolute',
	            left: 0,
	            top: 0,
	            height: '100%',
	            width: 0,
	            'background-color': options.color,
	            'transition': 'width ' + (options.duration / 1000) + 's ' + options.animationFunction,
	            '-webkit-transition': 'width ' + (options.duration / 1000) + 's ' + options.animationFunction
	        });
	    },

	    start: function () {
	        window.setTimeout(function () {
	            this.$bar.css('width', this.options.percent + '%');
	        }.bind(this));
	    }
	});

	module.exports = LinearProgressBar;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var BaseProgressBar = __webpack_require__(75);

	var LinearProgressBar = BaseProgressBar.extend({
	    template: '<li class="tools-skills-progress__item fn-item"></li>',

	    totalLength: 10,

	    defaultOptions: {
	        percent: 33,
	        color: 'black',
	        delay: 200,
	        duration: 400,
	        animationFunction: 'linear'
	    },

	    render: function () {
	        var html = '';

	        for (var i = 0; i < this.totalLength; i++) {
	            html += this.template;
	        }

	        this.$el.html(html);
	    },

	    setElements: function () {
	        this.$items = this.$('.fn-item');
	    },

	    setElementsView: function () {
	        var options = this.options;

	        this.$items.css({
	            'transition': 'background ' + (options.duration / 1000) + 's ' + options.animationFunction,
	            '-webkit-transition': 'background ' + (options.duration / 1000) + 's ' + options.animationFunction
	        });
	    },

	    start: function () {
	        var options = this.options;
	        var length = Math.round(options.percent / 10);
	        var flag = 0;

	        var interval = setInterval(function () {
	            this.$items.eq(flag++).css('background-color', options.color);

	            if (flag === length) {
	                clearInterval(interval);
	            }
	        }.bind(this), options.delay);
	    }
	});

	module.exports = LinearProgressBar;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var PageView = __webpack_require__(72);

	var PortfolioPage = PageView.extend({
	    url: 'data/portfolio.json',
	    template: 'pages/portfolio-page'
	});

	module.exports = PortfolioPage;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var PageView = __webpack_require__(72);

	var ContactPage = PageView.extend({
	    template: 'pages/contact-page',
	    url: 'data/about.json',

	    googleMapsApiSrc: 'https://maps.googleapis.com/maps/api/js',

	    googleMapOptions: {
	        center: {
	            lat: 53.90431287332806,
	            lng: 27.561290189623833
	        },
	        zoom: 11
	    },

	    initialize: function () {
	        PageView.prototype.initialize.apply(this, arguments);

	        this.listenToOnce(this, 'mounted', this.renderContactMap.bind(this));
	    },

	    renderContactMap: function () {
	        this.loadGoogleMapsApi().then(this.createGoogleMap.bind(this));
	    },

	    loadGoogleMapsApi: function () {
	        return new Promise(function (resolve) {
	            var scriptElement = document.createElement('script');

	            scriptElement.async = true;
	            scriptElement.src = this.googleMapsApiSrc;

	            scriptElement.addEventListener('load', function () {
	                resolve();
	            });

	            document.head.appendChild(scriptElement);
	        }.bind(this));
	    },

	    createGoogleMap: function () {
	        var mapDiv = this.$('.fn-map').get(0);
	        var options = this.googleMapOptions;

	        var map = new google.maps.Map(mapDiv, options);

	        var marker = new google.maps.Marker({
	            position: options.center,
	            map: map
	        });
	    }
	});

	module.exports = ContactPage;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyY2MyMTJhYWQ2N2NlZThiMWYwMiIsIndlYnBhY2s6Ly8vLi9qcy9pbml0LmpzIiwid2VicGFjazovLy8uL2xlc3MvY29tbW9uLmxlc3M/ZmJhZiIsIndlYnBhY2s6Ly8vLi9sZXNzL2NvbW1vbi5sZXNzIiwid2VicGFjazovLy8uLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvUm9ib3RvL1JvYm90by1UaGluSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9Sb2JvdG8vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL1JvYm90by9Sb2JvdG8tSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9Sb2JvdG8vUm9ib3RvLUJsYWNrLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9Sb2JvdG8vUm9ib3RvLUJsYWNrSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3QiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUvZm9udGF3ZXNvbWUtd2ViZm9udC50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnIiwid2VicGFjazovLy8uLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaW1nIFxcLihpY298cG5nfGpwZykkLyIsIndlYnBhY2s6Ly8vLi9pbWcvYXZhMS5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1nL3BvcnRmb2xpby9mcmVlbGFuY2UuanBnIiwid2VicGFjazovLy8uL2ltZy9wb3J0Zm9saW8vZ2Jhcy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1nL3BvcnRmb2xpby9nY2FzLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWcvcG9ydGZvbGlvL2dvZmFzdC5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1nL3BvcnRmb2xpby9nb3QuanBnIiwid2VicGFjazovLy8uL2ltZy9wb3J0Zm9saW8vaGlxby5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1nL3BvcnRmb2xpby9sb29rLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWcvcG9ydGZvbGlvL25vZGUuanBnIiwid2VicGFjazovLy8uL2ltZy9wb3J0Zm9saW8vc3BvcnRjb20uanBnIiwid2VicGFjazovLy8uL2ltZy90aGUtcm9jay5qcGciLCJ3ZWJwYWNrOi8vLy4vanMvbGF5b3V0L2xheW91dC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL34vamJvbmUvZGlzdC9qYm9uZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL2pzL2xheW91dC9tYWluLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iYXNlL2Jhc2Utdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9saWIvbXZjLmpzIiwid2VicGFjazovLy8uLi9+L2JhY2tib25lL2JhY2tib25lLmpzIiwid2VicGFjazovLy8uLi9+L3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMgXlxcLlxcLy4qXFwuZG90JCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvbGF5b3V0L21haW4tZm9vdGVyLmRvdCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvbGF5b3V0L21haW4taGVhZGVyLmRvdCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcGFnZXMvYWJvdXQtcGFnZS5kb3QiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3BhZ2VzL2NvbnRhY3QtcGFnZS5kb3QiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3BhZ2VzL3BvcnRmb2xpby1wYWdlLmRvdCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcGFnZXMvc2tpbGxzLXBhZ2UuZG90Iiwid2VicGFjazovLy8uL2pzL2Jhc2UvYmFzZS1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvaG9tZS1wYWdlLmpzIiwid2VicGFjazovLy8uL2pzL2Jhc2UvcGFnZS12aWV3LmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL3NraWxscy1wYWdlLmpzIiwid2VicGFjazovLy8uL2pzL3Rvb2xzL3Byb2dyZXNzLWJhci9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYmFzZS9wcm9ncmVzcy1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9vbHMvcHJvZ3Jlc3MtYmFyL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b29scy9wcm9ncmVzcy1iYXIvcG9pbnRzLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL3BvcnRmb2xpby1wYWdlLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL2NvbnRhY3QtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyY2MyMTJhYWQ2N2NlZThiMWYwMlxuICoqLyIsInJlcXVpcmUoJ2xlc3MvY29tbW9uLmxlc3MnKTtcblxuZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCdpbWcvJywgdHJ1ZSwgL1xcLihpY298cG5nfGpwZykkL2kpKTtcblxucmVxdWlyZSgnbGF5b3V0L2xheW91dC1tYW5hZ2VyJyk7XG5cbnJlcXVpcmUoJ2Jhc2UvYmFzZS1yb3V0ZXInKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvaW5pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9jb21tb24ubGVzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2NvbW1vbi5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9jb21tb24ubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xlc3MvY29tbW9uLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiZm9udHMvUm9ib3RvL1JvYm90by1UaGluLnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcImZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbkl0YWxpYy50dGZcIikgKyBcIik7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCJmb250cy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcImZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIpICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcImZvbnRzL1JvYm90by9Sb2JvdG8tSXRhbGljLnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcImZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcImZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcImZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIikgKyBcIik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCJmb250cy9Sb2JvdG8vUm9ib3RvLUJvbGRJdGFsaWMudHRmXCIpICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyByZXF1aXJlKFwiZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay50dGZcIikgKyBcIik7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCJmb250cy9Sb2JvdG8vUm9ib3RvLUJsYWNrSXRhbGljLnR0ZlwiKSArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b24tc21hcnQtYm9yZGVyIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRvcDogLTAuM3JlbTtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAtMC4zcmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1zbWFydC1ib3JkZXIge1xcbiAgMCUge1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdG9wOiAtMC4zcmVtO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0b3A6IC0wLjNyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcbi8qIVxcbiAqICBGb250IEF3ZXNvbWUgNC41LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxcbiAqL1xcbi8qIEZPTlQgUEFUSFxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL2ZvbnQtYXdlc29tZS9mb250YXdlc29tZS13ZWJmb250LmVvdFwiKSArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL2ZvbnQtYXdlc29tZS9mb250YXdlc29tZS13ZWJmb250LmVvdFwiKSArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9mb250LWF3ZXNvbWUvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9mb250LWF3ZXNvbWUvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmXCIpICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL2ZvbnQtYXdlc29tZS9mb250YXdlc29tZS13ZWJmb250LnN2Z1wiKSArIFwiKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLmZhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcXG59XFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG4uZmEtZncge1xcbiAgd2lkdGg6IDEuMjg1NzE0MjllbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZhLXVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAyLjE0Mjg1NzE0ZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5mYS11bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZhLWxpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yLjE0Mjg1NzE0ZW07XFxuICB3aWR0aDogMi4xNDI4NTcxNGVtO1xcbiAgdG9wOiAwLjE0Mjg1NzE0ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYS1saS5mYS1sZyB7XFxuICBsZWZ0OiAtMS44NTcxNDI4NmVtO1xcbn1cXG4uZmEtYm9yZGVyIHtcXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogLjFlbTtcXG59XFxuLmZhLXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZhLXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcXG59XFxuLmZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XFxufVxcbi8qIERlcHJlY2F0ZWQgYXMgb2YgNC40LjAgKi9cXG4ucHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mYS5wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xcbn1cXG4uZmEucHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogLjNlbTtcXG59XFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLmZhLXB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG4uZmEtcm90YXRlLTkwIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLmZhLXJvdGF0ZS0xODAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5mYS1yb3RhdGUtMjcwIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xcbiAgICAgICAgICBmaWx0ZXI6IG5vbmU7XFxufVxcbi5mYS1zdGFjayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYS1zdGFjay0xeCB7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLyogRm9udCBBd2Vzb21lIHVzZXMgdGhlIFVuaWNvZGUgUHJpdmF0ZSBVc2UgQXJlYSAoUFVBKSB0byBlbnN1cmUgc2NyZWVuXFxuICAgcmVhZGVycyBkbyBub3QgcmVhZCBvZmYgcmFuZG9tIGNoYXJhY3RlcnMgdGhhdCByZXByZXNlbnQgaWNvbnMgKi9cXG4uZmEtZ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMFxcXCI7XFxufVxcbi5mYS1tdXNpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAxXFxcIjtcXG59XFxuLmZhLXNlYXJjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAyXFxcIjtcXG59XFxuLmZhLWVudmVsb3BlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwM1xcXCI7XFxufVxcbi5mYS1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA0XFxcIjtcXG59XFxuLmZhLXN0YXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNVxcXCI7XFxufVxcbi5mYS1zdGFyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNlxcXCI7XFxufVxcbi5mYS11c2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDdcXFwiO1xcbn1cXG4uZmEtZmlsbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA4XFxcIjtcXG59XFxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDlcXFwiO1xcbn1cXG4uZmEtdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQVxcXCI7XFxufVxcbi5mYS10aC1saXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEJcXFwiO1xcbn1cXG4uZmEtY2hlY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQ1xcXCI7XFxufVxcbi5mYS1yZW1vdmU6YmVmb3JlLFxcbi5mYS1jbG9zZTpiZWZvcmUsXFxuLmZhLXRpbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMERcXFwiO1xcbn1cXG4uZmEtc2VhcmNoLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRVxcXCI7XFxufVxcbi5mYS1zZWFyY2gtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMFxcXCI7XFxufVxcbi5mYS1wb3dlci1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMVxcXCI7XFxufVxcbi5mYS1zaWduYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMlxcXCI7XFxufVxcbi5mYS1nZWFyOmJlZm9yZSxcXG4uZmEtY29nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTNcXFwiO1xcbn1cXG4uZmEtdHJhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE0XFxcIjtcXG59XFxuLmZhLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNVxcXCI7XFxufVxcbi5mYS1maWxlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNlxcXCI7XFxufVxcbi5mYS1jbG9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTdcXFwiO1xcbn1cXG4uZmEtcm9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE4XFxcIjtcXG59XFxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTlcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFBXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUJcXFwiO1xcbn1cXG4uZmEtaW5ib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQ1xcXCI7XFxufVxcbi5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMURcXFwiO1xcbn1cXG4uZmEtcm90YXRlLXJpZ2h0OmJlZm9yZSxcXG4uZmEtcmVwZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUVcXFwiO1xcbn1cXG4uZmEtcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIxXFxcIjtcXG59XFxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjJcXFwiO1xcbn1cXG4uZmEtbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIzXFxcIjtcXG59XFxuLmZhLWZsYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNFxcXCI7XFxufVxcbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjVcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI2XFxcIjtcXG59XFxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjdcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjhcXFwiO1xcbn1cXG4uZmEtcXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjlcXFwiO1xcbn1cXG4uZmEtYmFyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJBXFxcIjtcXG59XFxuLmZhLXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJCXFxcIjtcXG59XFxuLmZhLXRhZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ1xcXCI7XFxufVxcbi5mYS1ib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkRcXFwiO1xcbn1cXG4uZmEtYm9va21hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRVxcXCI7XFxufVxcbi5mYS1wcmludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJGXFxcIjtcXG59XFxuLmZhLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMwXFxcIjtcXG59XFxuLmZhLWZvbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMVxcXCI7XFxufVxcbi5mYS1ib2xkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzJcXFwiO1xcbn1cXG4uZmEtaXRhbGljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzNcXFwiO1xcbn1cXG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNFxcXCI7XFxufVxcbi5mYS10ZXh0LXdpZHRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzVcXFwiO1xcbn1cXG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM2XFxcIjtcXG59XFxuLmZhLWFsaWduLWNlbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3XFxcIjtcXG59XFxuLmZhLWFsaWduLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzhcXFwiO1xcbn1cXG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM5XFxcIjtcXG59XFxuLmZhLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQVxcXCI7XFxufVxcbi5mYS1kZWRlbnQ6YmVmb3JlLFxcbi5mYS1vdXRkZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0JcXFwiO1xcbn1cXG4uZmEtaW5kZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0NcXFwiO1xcbn1cXG4uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0RcXFwiO1xcbn1cXG4uZmEtcGhvdG86YmVmb3JlLFxcbi5mYS1pbWFnZTpiZWZvcmUsXFxuLmZhLXBpY3R1cmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDNFXFxcIjtcXG59XFxuLmZhLXBlbmNpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQwXFxcIjtcXG59XFxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MVxcXCI7XFxufVxcbi5mYS1hZGp1c3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MlxcXCI7XFxufVxcbi5mYS10aW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDNcXFwiO1xcbn1cXG4uZmEtZWRpdDpiZWZvcmUsXFxuLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ0XFxcIjtcXG59XFxuLmZhLXNoYXJlLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVcXFwiO1xcbn1cXG4uZmEtY2hlY2stc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NlxcXCI7XFxufVxcbi5mYS1hcnJvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0N1xcXCI7XFxufVxcbi5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDhcXFwiO1xcbn1cXG4uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ5XFxcIjtcXG59XFxuLmZhLWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEFcXFwiO1xcbn1cXG4uZmEtcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRCXFxcIjtcXG59XFxuLmZhLXBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNENcXFwiO1xcbn1cXG4uZmEtc3RvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDREXFxcIjtcXG59XFxuLmZhLWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RVxcXCI7XFxufVxcbi5mYS1mYXN0LWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MFxcXCI7XFxufVxcbi5mYS1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MVxcXCI7XFxufVxcbi5mYS1lamVjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUyXFxcIjtcXG59XFxuLmZhLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUzXFxcIjtcXG59XFxuLmZhLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NFxcXCI7XFxufVxcbi5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU1XFxcIjtcXG59XFxuLmZhLW1pbnVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU2XFxcIjtcXG59XFxuLmZhLXRpbWVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU3XFxcIjtcXG59XFxuLmZhLWNoZWNrLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU4XFxcIjtcXG59XFxuLmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU5XFxcIjtcXG59XFxuLmZhLWluZm8tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUFcXFwiO1xcbn1cXG4uZmEtY3Jvc3NoYWlyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVCXFxcIjtcXG59XFxuLmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUNcXFwiO1xcbn1cXG4uZmEtY2hlY2stY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RFxcXCI7XFxufVxcbi5mYS1iYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RVxcXCI7XFxufVxcbi5mYS1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjBcXFwiO1xcbn1cXG4uZmEtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MVxcXCI7XFxufVxcbi5mYS1hcnJvdy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDYyXFxcIjtcXG59XFxuLmZhLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2M1xcXCI7XFxufVxcbi5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxcbi5mYS1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY0XFxcIjtcXG59XFxuLmZhLWV4cGFuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY1XFxcIjtcXG59XFxuLmZhLWNvbXByZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjZcXFwiO1xcbn1cXG4uZmEtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3XFxcIjtcXG59XFxuLmZhLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjhcXFwiO1xcbn1cXG4uZmEtYXN0ZXJpc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OVxcXCI7XFxufVxcbi5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QVxcXCI7XFxufVxcbi5mYS1naWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkJcXFwiO1xcbn1cXG4uZmEtbGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZDXFxcIjtcXG59XFxuLmZhLWZpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RFxcXCI7XFxufVxcbi5mYS1leWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RVxcXCI7XFxufVxcbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MFxcXCI7XFxufVxcbi5mYS13YXJuaW5nOmJlZm9yZSxcXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MVxcXCI7XFxufVxcbi5mYS1wbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcyXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzNcXFwiO1xcbn1cXG4uZmEtcmFuZG9tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzRcXFwiO1xcbn1cXG4uZmEtY29tbWVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc1XFxcIjtcXG59XFxuLmZhLW1hZ25ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc2XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3N1xcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OFxcXCI7XFxufVxcbi5mYS1yZXR3ZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzlcXFwiO1xcbn1cXG4uZmEtc2hvcHBpbmctY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdBXFxcIjtcXG59XFxuLmZhLWZvbGRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdCXFxcIjtcXG59XFxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0NcXFwiO1xcbn1cXG4uZmEtYXJyb3dzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RFxcXCI7XFxufVxcbi5mYS1hcnJvd3MtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdFXFxcIjtcXG59XFxuLmZhLWJhci1jaGFydC1vOmJlZm9yZSxcXG4uZmEtYmFyLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODBcXFwiO1xcbn1cXG4uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MVxcXCI7XFxufVxcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MlxcXCI7XFxufVxcbi5mYS1jYW1lcmEtcmV0cm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4M1xcXCI7XFxufVxcbi5mYS1rZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NFxcXCI7XFxufVxcbi5mYS1nZWFyczpiZWZvcmUsXFxuLmZhLWNvZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NVxcXCI7XFxufVxcbi5mYS1jb21tZW50czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg2XFxcIjtcXG59XFxuLmZhLXRodW1icy1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODdcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg4XFxcIjtcXG59XFxuLmZhLXN0YXItaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg5XFxcIjtcXG59XFxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QVxcXCI7XFxufVxcbi5mYS1zaWduLW91dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhCXFxcIjtcXG59XFxuLmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhDXFxcIjtcXG59XFxuLmZhLXRodW1iLXRhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RFxcXCI7XFxufVxcbi5mYS1leHRlcm5hbC1saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEVcXFwiO1xcbn1cXG4uZmEtc2lnbi1pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkwXFxcIjtcXG59XFxuLmZhLXRyb3BoeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkxXFxcIjtcXG59XFxuLmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MlxcXCI7XFxufVxcbi5mYS11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5M1xcXCI7XFxufVxcbi5mYS1sZW1vbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTRcXFwiO1xcbn1cXG4uZmEtcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NVxcXCI7XFxufVxcbi5mYS1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk2XFxcIjtcXG59XFxuLmZhLWJvb2ttYXJrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5N1xcXCI7XFxufVxcbi5mYS1waG9uZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OFxcXCI7XFxufVxcbi5mYS10d2l0dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTlcXFwiO1xcbn1cXG4uZmEtZmFjZWJvb2stZjpiZWZvcmUsXFxuLmZhLWZhY2Vib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUFcXFwiO1xcbn1cXG4uZmEtZ2l0aHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUJcXFwiO1xcbn1cXG4uZmEtdW5sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUNcXFwiO1xcbn1cXG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RFxcXCI7XFxufVxcbi5mYS1mZWVkOmJlZm9yZSxcXG4uZmEtcnNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUVcXFwiO1xcbn1cXG4uZmEtaGRkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMFxcXCI7XFxufVxcbi5mYS1idWxsaG9ybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEExXFxcIjtcXG59XFxuLmZhLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGM1xcXCI7XFxufVxcbi5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEzXFxcIjtcXG59XFxuLmZhLWhhbmQtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE0XFxcIjtcXG59XFxuLmZhLWhhbmQtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTVcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTZcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBN1xcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE5XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFBXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUJcXFwiO1xcbn1cXG4uZmEtZ2xvYmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQ1xcXCI7XFxufVxcbi5mYS13cmVuY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRFxcXCI7XFxufVxcbi5mYS10YXNrczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFFXFxcIjtcXG59XFxuLmZhLWZpbHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEIwXFxcIjtcXG59XFxuLmZhLWJyaWVmY2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEIxXFxcIjtcXG59XFxuLmZhLWFycm93cy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMlxcXCI7XFxufVxcbi5mYS1ncm91cDpiZWZvcmUsXFxuLmZhLXVzZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzBcXFwiO1xcbn1cXG4uZmEtY2hhaW46YmVmb3JlLFxcbi5mYS1saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzFcXFwiO1xcbn1cXG4uZmEtY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMlxcXCI7XFxufVxcbi5mYS1mbGFzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzXFxcIjtcXG59XFxuLmZhLWN1dDpiZWZvcmUsXFxuLmZhLXNjaXNzb3JzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzRcXFwiO1xcbn1cXG4uZmEtY29weTpiZWZvcmUsXFxuLmZhLWZpbGVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNVxcXCI7XFxufVxcbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNlxcXCI7XFxufVxcbi5mYS1zYXZlOmJlZm9yZSxcXG4uZmEtZmxvcHB5LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDN1xcXCI7XFxufVxcbi5mYS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOFxcXCI7XFxufVxcbi5mYS1uYXZpY29uOmJlZm9yZSxcXG4uZmEtcmVvcmRlcjpiZWZvcmUsXFxuLmZhLWJhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOVxcXCI7XFxufVxcbi5mYS1saXN0LXVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0FcXFwiO1xcbn1cXG4uZmEtbGlzdC1vbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENCXFxcIjtcXG59XFxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQ1xcXCI7XFxufVxcbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRFxcXCI7XFxufVxcbi5mYS10YWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENFXFxcIjtcXG59XFxuLmZhLW1hZ2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDBcXFwiO1xcbn1cXG4uZmEtdHJ1Y2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMVxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMlxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDNcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDRcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENVxcXCI7XFxufVxcbi5mYS1tb25leTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ2XFxcIjtcXG59XFxuLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEN1xcXCI7XFxufVxcbi5mYS1jYXJldC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ4XFxcIjtcXG59XFxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOVxcXCI7XFxufVxcbi5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMERBXFxcIjtcXG59XFxuLmZhLWNvbHVtbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQlxcXCI7XFxufVxcbi5mYS11bnNvcnRlZDpiZWZvcmUsXFxuLmZhLXNvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQ1xcXCI7XFxufVxcbi5mYS1zb3J0LWRvd246YmVmb3JlLFxcbi5mYS1zb3J0LWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERFxcXCI7XFxufVxcbi5mYS1zb3J0LXVwOmJlZm9yZSxcXG4uZmEtc29ydC1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERVxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUwXFxcIjtcXG59XFxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTFcXFwiO1xcbn1cXG4uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLFxcbi5mYS11bmRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTJcXFwiO1xcbn1cXG4uZmEtbGVnYWw6YmVmb3JlLFxcbi5mYS1nYXZlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUzXFxcIjtcXG59XFxuLmZhLWRhc2hib2FyZDpiZWZvcmUsXFxuLmZhLXRhY2hvbWV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNFxcXCI7XFxufVxcbi5mYS1jb21tZW50LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNVxcXCI7XFxufVxcbi5mYS1jb21tZW50cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTZcXFwiO1xcbn1cXG4uZmEtZmxhc2g6YmVmb3JlLFxcbi5mYS1ib2x0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTdcXFwiO1xcbn1cXG4uZmEtc2l0ZW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU4XFxcIjtcXG59XFxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTlcXFwiO1xcbn1cXG4uZmEtcGFzdGU6YmVmb3JlLFxcbi5mYS1jbGlwYm9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQVxcXCI7XFxufVxcbi5mYS1saWdodGJ1bGItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVCXFxcIjtcXG59XFxuLmZhLWV4Y2hhbmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNcXFwiO1xcbn1cXG4uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRFxcXCI7XFxufVxcbi5mYS1jbG91ZC11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRVxcXCI7XFxufVxcbi5mYS11c2VyLW1kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjBcXFwiO1xcbn1cXG4uZmEtc3RldGhvc2NvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMVxcXCI7XFxufVxcbi5mYS1zdWl0Y2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYyXFxcIjtcXG59XFxuLmZhLWJlbGwtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEyXFxcIjtcXG59XFxuLmZhLWNvZmZlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0XFxcIjtcXG59XFxuLmZhLWN1dGxlcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNVxcXCI7XFxufVxcbi5mYS1maWxlLXRleHQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY2XFxcIjtcXG59XFxuLmZhLWJ1aWxkaW5nLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGN1xcXCI7XFxufVxcbi5mYS1ob3NwaXRhbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjhcXFwiO1xcbn1cXG4uZmEtYW1idWxhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlcXFwiO1xcbn1cXG4uZmEtbWVka2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkFcXFwiO1xcbn1cXG4uZmEtZmlnaHRlci1qZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQlxcXCI7XFxufVxcbi5mYS1iZWVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkNcXFwiO1xcbn1cXG4uZmEtaC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRFxcXCI7XFxufVxcbi5mYS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZFXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDBcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDJcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7XFxufVxcbi5mYS1hbmdsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiO1xcbn1cXG4uZmEtYW5nbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7XFxufVxcbi5mYS1hbmdsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA2XFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwN1xcXCI7XFxufVxcbi5mYS1kZXNrdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDhcXFwiO1xcbn1cXG4uZmEtbGFwdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDlcXFwiO1xcbn1cXG4uZmEtdGFibGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiO1xcbn1cXG4uZmEtbW9iaWxlLXBob25lOmJlZm9yZSxcXG4uZmEtbW9iaWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiO1xcbn1cXG4uZmEtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7XFxufVxcbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiO1xcbn1cXG4uZmEtcXVvdGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxufVxcbi5mYS1zcGlubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTBcXFwiO1xcbn1cXG4uZmEtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiO1xcbn1cXG4uZmEtbWFpbC1yZXBseTpiZWZvcmUsXFxuLmZhLXJlcGx5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiO1xcbn1cXG4uZmEtZ2l0aHViLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjtcXG59XFxuLmZhLWZvbGRlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTRcXFwiO1xcbn1cXG4uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjtcXG59XFxuLmZhLXNtaWxlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7XFxufVxcbi5mYS1mcm93bi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiO1xcbn1cXG4uZmEtbWVoLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7XFxufVxcbi5mYS1nYW1lcGFkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUJcXFwiO1xcbn1cXG4uZmEta2V5Ym9hcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjtcXG59XFxuLmZhLWZsYWctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjtcXG59XFxuLmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiO1xcbn1cXG4uZmEtdGVybWluYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7XFxufVxcbi5mYS1jb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiO1xcbn1cXG4uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLFxcbi5mYS1yZXBseS1hbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7XFxufVxcbi5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLFxcbi5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXFxuLmZhLXN0YXItaGFsZi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiO1xcbn1cXG4uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7XFxufVxcbi5mYS1jcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiO1xcbn1cXG4uZmEtY29kZS1mb3JrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiO1xcbn1cXG4uZmEtdW5saW5rOmJlZm9yZSxcXG4uZmEtY2hhaW4tYnJva2VuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiO1xcbn1cXG4uZmEtcXVlc3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7XFxufVxcbi5mYS1pbmZvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiO1xcbn1cXG4uZmEtZXhjbGFtYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQVxcXCI7XFxufVxcbi5mYS1zdXBlcnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJCXFxcIjtcXG59XFxuLmZhLXN1YnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjtcXG59XFxuLmZhLWVyYXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjtcXG59XFxuLmZhLXB1enpsZS1waWVjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjtcXG59XFxuLmZhLW1pY3JvcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7XFxufVxcbi5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiO1xcbn1cXG4uZmEtc2hpZWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjtcXG59XFxuLmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzRcXFwiO1xcbn1cXG4uZmEtcm9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzVcXFwiO1xcbn1cXG4uZmEtbWF4Y2RuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzZcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0FcXFwiO1xcbn1cXG4uZmEtaHRtbDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQlxcXCI7XFxufVxcbi5mYS1jc3MzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0NcXFwiO1xcbn1cXG4uZmEtYW5jaG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiO1xcbn1cXG4uZmEtdW5sb2NrLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjtcXG59XFxuLmZhLWJ1bGxzZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDBcXFwiO1xcbn1cXG4uZmEtZWxsaXBzaXMtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjtcXG59XFxuLmZhLWVsbGlwc2lzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MlxcXCI7XFxufVxcbi5mYS1yc3Mtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDNcXFwiO1xcbn1cXG4uZmEtcGxheS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7XFxufVxcbi5mYS10aWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NVxcXCI7XFxufVxcbi5mYS1taW51cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NlxcXCI7XFxufVxcbi5mYS1taW51cy1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ3XFxcIjtcXG59XFxuLmZhLWxldmVsLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiO1xcbn1cXG4uZmEtbGV2ZWwtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ5XFxcIjtcXG59XFxuLmZhLWNoZWNrLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjtcXG59XFxuLmZhLXBlbmNpbC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7XFxufVxcbi5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTRDXFxcIjtcXG59XFxuLmZhLXNoYXJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTREXFxcIjtcXG59XFxuLmZhLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RVxcXCI7XFxufVxcbi5mYS10b2dnbGUtZG93bjpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MFxcXCI7XFxufVxcbi5mYS10b2dnbGUtdXA6YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTUxXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTJcXFwiO1xcbn1cXG4uZmEtZXVybzpiZWZvcmUsXFxuLmZhLWV1cjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTUzXFxcIjtcXG59XFxuLmZhLWdicDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU0XFxcIjtcXG59XFxuLmZhLWRvbGxhcjpiZWZvcmUsXFxuLmZhLXVzZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU1XFxcIjtcXG59XFxuLmZhLXJ1cGVlOmJlZm9yZSxcXG4uZmEtaW5yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTZcXFwiO1xcbn1cXG4uZmEtY255OmJlZm9yZSxcXG4uZmEtcm1iOmJlZm9yZSxcXG4uZmEteWVuOmJlZm9yZSxcXG4uZmEtanB5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTdcXFwiO1xcbn1cXG4uZmEtcnVibGU6YmVmb3JlLFxcbi5mYS1yb3VibGU6YmVmb3JlLFxcbi5mYS1ydWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OFxcXCI7XFxufVxcbi5mYS13b246YmVmb3JlLFxcbi5mYS1rcnc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OVxcXCI7XFxufVxcbi5mYS1iaXRjb2luOmJlZm9yZSxcXG4uZmEtYnRjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUFcXFwiO1xcbn1cXG4uZmEtZmlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVCXFxcIjtcXG59XFxuLmZhLWZpbGUtdGV4dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVDXFxcIjtcXG59XFxuLmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNURcXFwiO1xcbn1cXG4uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUVcXFwiO1xcbn1cXG4uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjBcXFwiO1xcbn1cXG4uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTYxXFxcIjtcXG59XFxuLmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MlxcXCI7XFxufVxcbi5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTYzXFxcIjtcXG59XFxuLmZhLXRodW1icy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY0XFxcIjtcXG59XFxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjVcXFwiO1xcbn1cXG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NlxcXCI7XFxufVxcbi5mYS15b3V0dWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjdcXFwiO1xcbn1cXG4uZmEteGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY4XFxcIjtcXG59XFxuLmZhLXhpbmctc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjlcXFwiO1xcbn1cXG4uZmEteW91dHViZS1wbGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkFcXFwiO1xcbn1cXG4uZmEtZHJvcGJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTZCXFxcIjtcXG59XFxuLmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkNcXFwiO1xcbn1cXG4uZmEtaW5zdGFncmFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkRcXFwiO1xcbn1cXG4uZmEtZmxpY2tyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkVcXFwiO1xcbn1cXG4uZmEtYWRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzBcXFwiO1xcbn1cXG4uZmEtYml0YnVja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzFcXFwiO1xcbn1cXG4uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTcyXFxcIjtcXG59XFxuLmZhLXR1bWJscjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTczXFxcIjtcXG59XFxuLmZhLXR1bWJsci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NFxcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NVxcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzZcXFwiO1xcbn1cXG4uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzdcXFwiO1xcbn1cXG4uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc4XFxcIjtcXG59XFxuLmZhLWFwcGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzlcXFwiO1xcbn1cXG4uZmEtd2luZG93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdBXFxcIjtcXG59XFxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QlxcXCI7XFxufVxcbi5mYS1saW51eDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdDXFxcIjtcXG59XFxuLmZhLWRyaWJiYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0RcXFwiO1xcbn1cXG4uZmEtc2t5cGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RVxcXCI7XFxufVxcbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODBcXFwiO1xcbn1cXG4uZmEtdHJlbGxvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODFcXFwiO1xcbn1cXG4uZmEtZmVtYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODJcXFwiO1xcbn1cXG4uZmEtbWFsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTgzXFxcIjtcXG59XFxuLmZhLWdpdHRpcDpiZWZvcmUsXFxuLmZhLWdyYXRpcGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODRcXFwiO1xcbn1cXG4uZmEtc3VuLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NVxcXCI7XFxufVxcbi5mYS1tb29uLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NlxcXCI7XFxufVxcbi5mYS1hcmNoaXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODdcXFwiO1xcbn1cXG4uZmEtYnVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODhcXFwiO1xcbn1cXG4uZmEtdms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OVxcXCI7XFxufVxcbi5mYS13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThBXFxcIjtcXG59XFxuLmZhLXJlbnJlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThCXFxcIjtcXG59XFxuLmZhLXBhZ2VsaW5lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThDXFxcIjtcXG59XFxuLmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOERcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTBcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLWxlZnQ6YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTFcXFwiO1xcbn1cXG4uZmEtZG90LWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTJcXFwiO1xcbn1cXG4uZmEtd2hlZWxjaGFpcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTkzXFxcIjtcXG59XFxuLmZhLXZpbWVvLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk0XFxcIjtcXG59XFxuLmZhLXR1cmtpc2gtbGlyYTpiZWZvcmUsXFxuLmZhLXRyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk1XFxcIjtcXG59XFxuLmZhLXBsdXMtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NlxcXCI7XFxufVxcbi5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTdcXFwiO1xcbn1cXG4uZmEtc2xhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OFxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OVxcXCI7XFxufVxcbi5mYS13b3JkcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QVxcXCI7XFxufVxcbi5mYS1vcGVuaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QlxcXCI7XFxufVxcbi5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsXFxuLmZhLWJhbms6YmVmb3JlLFxcbi5mYS11bml2ZXJzaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUNcXFwiO1xcbn1cXG4uZmEtbW9ydGFyLWJvYXJkOmJlZm9yZSxcXG4uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RFxcXCI7XFxufVxcbi5mYS15YWhvbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTlFXFxcIjtcXG59XFxuLmZhLWdvb2dsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUEwXFxcIjtcXG59XFxuLmZhLXJlZGRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUExXFxcIjtcXG59XFxuLmZhLXJlZGRpdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMlxcXCI7XFxufVxcbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBM1xcXCI7XFxufVxcbi5mYS1zdHVtYmxldXBvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE0XFxcIjtcXG59XFxuLmZhLWRlbGljaW91czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE1XFxcIjtcXG59XFxuLmZhLWRpZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNlxcXCI7XFxufVxcbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTdcXFwiO1xcbn1cXG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOFxcXCI7XFxufVxcbi5mYS1kcnVwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOVxcXCI7XFxufVxcbi5mYS1qb29tbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQVxcXCI7XFxufVxcbi5mYS1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFCXFxcIjtcXG59XFxuLmZhLWZheDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFDXFxcIjtcXG59XFxuLmZhLWJ1aWxkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQURcXFwiO1xcbn1cXG4uZmEtY2hpbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRVxcXCI7XFxufVxcbi5mYS1wYXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMFxcXCI7XFxufVxcbi5mYS1zcG9vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUIxXFxcIjtcXG59XFxuLmZhLWN1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMlxcXCI7XFxufVxcbi5mYS1jdWJlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUIzXFxcIjtcXG59XFxuLmZhLWJlaGFuY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNFxcXCI7XFxufVxcbi5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI1XFxcIjtcXG59XFxuLmZhLXN0ZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjZcXFwiO1xcbn1cXG4uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjdcXFwiO1xcbn1cXG4uZmEtcmVjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI4XFxcIjtcXG59XFxuLmZhLWF1dG9tb2JpbGU6YmVmb3JlLFxcbi5mYS1jYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOVxcXCI7XFxufVxcbi5mYS1jYWI6YmVmb3JlLFxcbi5mYS10YXhpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkFcXFwiO1xcbn1cXG4uZmEtdHJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJCXFxcIjtcXG59XFxuLmZhLXNwb3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQ1xcXCI7XFxufVxcbi5mYS1kZXZpYW50YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkRcXFwiO1xcbn1cXG4uZmEtc291bmRjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJFXFxcIjtcXG59XFxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzBcXFwiO1xcbn1cXG4uZmEtZmlsZS1wZGYtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUMxXFxcIjtcXG59XFxuLmZhLWZpbGUtd29yZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzJcXFwiO1xcbn1cXG4uZmEtZmlsZS1leGNlbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzNcXFwiO1xcbn1cXG4uZmEtZmlsZS1wb3dlcnBvaW50LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNFxcXCI7XFxufVxcbi5mYS1maWxlLXBob3RvLW86YmVmb3JlLFxcbi5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsXFxuLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM1XFxcIjtcXG59XFxuLmZhLWZpbGUtemlwLW86YmVmb3JlLFxcbi5mYS1maWxlLWFyY2hpdmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM2XFxcIjtcXG59XFxuLmZhLWZpbGUtc291bmQtbzpiZWZvcmUsXFxuLmZhLWZpbGUtYXVkaW8tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM3XFxcIjtcXG59XFxuLmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsXFxuLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM4XFxcIjtcXG59XFxuLmZhLWZpbGUtY29kZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzlcXFwiO1xcbn1cXG4uZmEtdmluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNBXFxcIjtcXG59XFxuLmZhLWNvZGVwZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQlxcXCI7XFxufVxcbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNDXFxcIjtcXG59XFxuLmZhLWxpZmUtYm91eTpiZWZvcmUsXFxuLmZhLWxpZmUtYnVveTpiZWZvcmUsXFxuLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLFxcbi5mYS1zdXBwb3J0OmJlZm9yZSxcXG4uZmEtbGlmZS1yaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0RcXFwiO1xcbn1cXG4uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRVxcXCI7XFxufVxcbi5mYS1yYTpiZWZvcmUsXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDBcXFwiO1xcbn1cXG4uZmEtZ2U6YmVmb3JlLFxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMVxcXCI7XFxufVxcbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDJcXFwiO1xcbn1cXG4uZmEtZ2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDNcXFwiO1xcbn1cXG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXFxuLmZhLXljLXNxdWFyZTpiZWZvcmUsXFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDRcXFwiO1xcbn1cXG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ1XFxcIjtcXG59XFxuLmZhLXFxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDZcXFwiO1xcbn1cXG4uZmEtd2VjaGF0OmJlZm9yZSxcXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDdcXFwiO1xcbn1cXG4uZmEtc2VuZDpiZWZvcmUsXFxuLmZhLXBhcGVyLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDhcXFwiO1xcbn1cXG4uZmEtc2VuZC1vOmJlZm9yZSxcXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ5XFxcIjtcXG59XFxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQVxcXCI7XFxufVxcbi5mYS1jaXJjbGUtdGhpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMURCXFxcIjtcXG59XFxuLmZhLWhlYWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMURDXFxcIjtcXG59XFxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUREXFxcIjtcXG59XFxuLmZhLXNsaWRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERVxcXCI7XFxufVxcbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMFxcXCI7XFxufVxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTFcXFwiO1xcbn1cXG4uZmEtYm9tYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUUyXFxcIjtcXG59XFxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUUzXFxcIjtcXG59XFxuLmZhLXR0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU0XFxcIjtcXG59XFxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNVxcXCI7XFxufVxcbi5mYS1wbHVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTZcXFwiO1xcbn1cXG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU3XFxcIjtcXG59XFxuLmZhLXR3aXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU4XFxcIjtcXG59XFxuLmZhLXllbHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOVxcXCI7XFxufVxcbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVBXFxcIjtcXG59XFxuLmZhLXdpZmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQlxcXCI7XFxufVxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUNcXFwiO1xcbn1cXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRURcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVFXFxcIjtcXG59XFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMFxcXCI7XFxufVxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjFcXFwiO1xcbn1cXG4uZmEtY2MtZGlzY292ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMlxcXCI7XFxufVxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjNcXFwiO1xcbn1cXG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjRcXFwiO1xcbn1cXG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjVcXFwiO1xcbn1cXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY2XFxcIjtcXG59XFxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY3XFxcIjtcXG59XFxuLmZhLXRyYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjhcXFwiO1xcbn1cXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiO1xcbn1cXG4uZmEtYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQVxcXCI7XFxufVxcbi5mYS1leWVkcm9wcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiO1xcbn1cXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7XFxufVxcbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkRcXFwiO1xcbn1cXG4uZmEtYXJlYS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZFXFxcIjtcXG59XFxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjtcXG59XFxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7XFxufVxcbi5mYS1sYXN0Zm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMlxcXCI7XFxufVxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDNcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA0XFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA1XFxcIjtcXG59XFxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7XFxufVxcbi5mYS1idXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7XFxufVxcbi5mYS1pb3hob3N0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDhcXFwiO1xcbn1cXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiO1xcbn1cXG4uZmEtY2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7XFxufVxcbi5mYS1zaGVrZWw6YmVmb3JlLFxcbi5mYS1zaGVxZWw6YmVmb3JlLFxcbi5mYS1pbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7XFxufVxcbi5mYS1tZWFucGF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjtcXG59XFxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7XFxufVxcbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBFXFxcIjtcXG59XFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiO1xcbn1cXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7XFxufVxcbi5mYS1sZWFucHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiO1xcbn1cXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiO1xcbn1cXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTRcXFwiO1xcbn1cXG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7XFxufVxcbi5mYS1za3lhdGxhczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjtcXG59XFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjtcXG59XFxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjtcXG59XFxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7XFxufVxcbi5mYS1zaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUFcXFwiO1xcbn1cXG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7XFxufVxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUNcXFwiO1xcbn1cXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7XFxufVxcbi5mYS1oZWFydGJlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7XFxufVxcbi5mYS12ZW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjtcXG59XFxuLmZhLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7XFxufVxcbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiO1xcbn1cXG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI0XFxcIjtcXG59XFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjtcXG59XFxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI2XFxcIjtcXG59XFxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiO1xcbn1cXG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiO1xcbn1cXG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjJBXFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7XFxufVxcbi5mYS1uZXV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQ1xcXCI7XFxufVxcbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiO1xcbn1cXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjMxXFxcIjtcXG59XFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzJcXFwiO1xcbn1cXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiO1xcbn1cXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiO1xcbn1cXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjtcXG59XFxuLmZhLWhvdGVsOmJlZm9yZSxcXG4uZmEtYmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiO1xcbn1cXG4uZmEtdmlhY29pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjtcXG59XFxuLmZhLXRyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiO1xcbn1cXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiO1xcbn1cXG4uZmEtbWVkaXVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiO1xcbn1cXG4uZmEteWM6YmVmb3JlLFxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7XFxufVxcbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiO1xcbn1cXG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7XFxufVxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRVxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0yOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjtcXG59XFxuLmZhLW1vdXNlLXBvaW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7XFxufVxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjtcXG59XFxuLmZhLW9iamVjdC1ncm91cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjtcXG59XFxuLmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiO1xcbn1cXG4uZmEtc3RpY2t5LW5vdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7XFxufVxcbi5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiO1xcbn1cXG4uZmEtY2MtamNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiO1xcbn1cXG4uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7XFxufVxcbi5mYS1jbG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjtcXG59XFxuLmZhLWJhbGFuY2Utc2NhbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3MtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0xOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzLTI6YmVmb3JlLFxcbi5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0zOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjtcXG59XFxuLmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSxcXG4uZmEtaGFuZC1yb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7XFxufVxcbi5mYS1oYW5kLXN0b3AtbzpiZWZvcmUsXFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjtcXG59XFxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjtcXG59XFxuLmZhLWhhbmQtbGl6YXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7XFxufVxcbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7XFxufVxcbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjtcXG59XFxuLmZhLWhhbmQtcGVhY2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjtcXG59XFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjtcXG59XFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7XFxufVxcbi5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiO1xcbn1cXG4uZmEtZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7XFxufVxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7XFxufVxcbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjtcXG59XFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7XFxufVxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjtcXG59XFxuLmZhLWdldC1wb2NrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7XFxufVxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjtcXG59XFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjtcXG59XFxuLmZhLWNocm9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjtcXG59XFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7XFxufVxcbi5mYS1vcGVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjtcXG59XFxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiO1xcbn1cXG4uZmEtdHY6YmVmb3JlLFxcbi5mYS10ZWxldmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiO1xcbn1cXG4uZmEtY29udGFvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiO1xcbn1cXG4uZmEtNTAwcHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7XFxufVxcbi5mYS1hbWF6b246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7XFxufVxcbi5mYS1pbmR1c3RyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjtcXG59XFxuLmZhLW1hcC1waW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7XFxufVxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7XFxufVxcbi5mYS1tYXAtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjtcXG59XFxuLmZhLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7XFxufVxcbi5mYS1jb21tZW50aW5nLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7XFxufVxcbi5mYS1ob3V6ejpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjtcXG59XFxuLmZhLXZpbWVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiO1xcbn1cXG4uZmEtYmxhY2stdGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0VcXFwiO1xcbn1cXG4uZmEtZm9udGljb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODBcXFwiO1xcbn1cXG4uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODFcXFwiO1xcbn1cXG4uZmEtZWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjgyXFxcIjtcXG59XFxuLmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjgzXFxcIjtcXG59XFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODRcXFwiO1xcbn1cXG4uZmEtbW9keDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg1XFxcIjtcXG59XFxuLmZhLWZvcnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg2XFxcIjtcXG59XFxuLmZhLXVzYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg3XFxcIjtcXG59XFxuLmZhLXByb2R1Y3QtaHVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg4XFxcIjtcXG59XFxuLmZhLW1peGNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODlcXFwiO1xcbn1cXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEFcXFwiO1xcbn1cXG4uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEJcXFwiO1xcbn1cXG4uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4Q1xcXCI7XFxufVxcbi5mYS1zdG9wLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjhEXFxcIjtcXG59XFxuLmZhLXN0b3AtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RVxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MFxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MVxcXCI7XFxufVxcbi5mYS1oYXNodGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTJcXFwiO1xcbn1cXG4uZmEtYmx1ZXRvb3RoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTNcXFwiO1xcbn1cXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NFxcXCI7XFxufVxcbi5mYS1wZXJjZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiO1xcbn1cXG4ud2hvX2lfYW0tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi53aG9faV9hbS10aXRsZV9fbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi53aG9faV9hbS10aXRsZV9fcG9zaXRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi53aG9faV9hbS1hYm91dCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLndob19pX2FtLXRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAud2hvX2lfYW0tdGFibGUge1xcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2VmZWZlZjtcXG4gIH1cXG59XFxuLndob19pX2FtLXRhYmxlX190aCxcXG4ud2hvX2lfYW0tdGFibGVfX3RkIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2VmZWZlZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC53aG9faV9hbS10YWJsZV9fdGgsXFxuICAud2hvX2lfYW0tdGFibGVfX3RkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgfVxcbn1cXG4ud2hvX2lfYW0tdGFibGVfX3RoIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi53aG9faV9hbS10YWJsZV9fdGQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcbi5leHAtbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuLmV4cC1saXN0LXRpdGxlX2ljb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTAuNHJlbTtcXG4gIHdpZHRoOiA0LjdyZW07XFxuICBsaW5lLWhlaWdodDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkICNlZmVmZWY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5leHAtbGlzdC1pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjdyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIGJvcmRlci1sZWZ0OiAwLjNyZW0gc29saWQgI2VmZWZlZjtcXG59XFxuLmV4cC1saXN0LWl0ZW1fX3RpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5leHAtbGlzdC1pdGVtX190aXRsZTpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGxlZnQ6IC0yLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4ZTZhO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5leHAtbGlzdC1pdGVtX19kYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5leHAtbGlzdC1pdGVtX19kYXRlX19pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjNzc3O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5leHAtbGlzdC1pdGVtX19kZXNjcmlwdGlvbiB7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5pY29ucy1saXN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmljb25zLWxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaWNvbnMtbGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG4uaWNvbnMtbGlzdC1pdGVtX19pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzU1OGU2YTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuLmljb25zLWxpc3QtaXRlbV9fdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmljb25zLWxpc3QtaXRlbV9fZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5pY29ucy1saXN0LWl0ZW1fX2Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcbi50ZWNoLXNraWxscy1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi50ZWNoLXNraWxscy10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAudGVjaC1za2lsbHMtdGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLnRlY2gtc2tpbGxzLXRpdGxlX19uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzMzMzczZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcbi50ZWNoLXNraWxscy10aXRsZV9fZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAudGVjaC1za2lsbHMtdGl0bGVfX2Rlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnRlY2gtc2tpbGxzLXRpdGxlX19rZXl3b3JkcyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi50ZWNoLXNraWxscy10aXRsZV9fa2V5d29yZHNfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThlNmE7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi50ZWNoLXNraWxscy10aXRsZV9fa2V5d29yZHNfX3RleHQge1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRlY2gtc2tpbGxzLXByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnRlY2gtc2tpbGxzLXByb2dyZXNzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnRlY2gtc2tpbGxzLXByb2dyZXNzIC50ZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLmxhbmd1YWdlLXNraWxscy1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5sYW5ndWFnZS1za2lsbHMtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiAjMzMzNzNkO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG4ubGFuZ3VhZ2Utc2tpbGxzLXRpdGxlIC5zbWFsbCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLmxhbmd1YWdlLXNraWxscy1wcm9ncmVzcyB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubGFuZ3VhZ2Utc2tpbGxzLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi50b29scy1za2lsbHMtaXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRvb2xzLXNraWxscy10aXRsZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnRvb2xzLXNraWxscy10aXRsZSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcbn1cXG4udG9vbHMtc2tpbGxzLXByb2dyZXNzIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC50b29scy1za2lsbHMtcHJvZ3Jlc3Mge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XFxuICB9XFxufVxcbi50b29scy1za2lsbHMtcHJvZ3Jlc3NfX2l0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50b29scy1za2lsbHMtcHJvZ3Jlc3NfX2l0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThlNmE7XFxufVxcbi5wb3J0Zm9saW8tbGlzdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wb3J0Zm9saW8tbGlzdC1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMCAxcmVtIDJyZW07XFxuICB3aWR0aDogMzAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnBvcnRmb2xpby1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcbi5wb3J0Zm9saW8tbGlzdC1pdGVtX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wb3J0Zm9saW8tbGlzdC1pdGVtX19vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCAxNDIsIDEwNiwgMC44KTtcXG59XFxuLnBvcnRmb2xpby1saXN0LWl0ZW1fX292ZXJsYXlfX2NlbnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLnBvcnRmb2xpby1saXN0LWl0ZW1fX292ZXJsYXlfX25hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5wb3J0Zm9saW8tbGlzdC1pdGVtX19vdmVybGF5X19wb3NpdGlvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wb3J0Zm9saW8tbGlzdC1pdGVtOmhvdmVyIC5wb3J0Zm9saW8tbGlzdC1pdGVtX19vdmVybGF5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udGFjdC1tYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDYwJTtcXG59XFxuLmNvbnRhY3QtbWFwLWluc3RhbmNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRhY3QtaW5mbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA0cmVtIDJyZW0gMnJlbTtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZWZlZmVmO1xcbn1cXG4uY29udGFjdC1pbmZvLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDZyZW07XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGxpbmUtaGVpZ2h0OiA2cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OGU2YTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmNvbnRhY3QtaW5mby10ZXh0IHtcXG4gIGNvbG9yOiAjMzMzNzNkO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjMzMzNzNkO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuYm9keSB7XFxuICBwYWRkaW5nOiA1cmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gIH1cXG59XFxuLmN2IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjByZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDA7XFxufVxcbi5tYWluLWhlYWRlcixcXG4ucGFnZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLm1haW4taGVhZGVyLFxcbiAgLnBhZ2Utd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLm1haW4taGVhZGVyLFxcbiAgLnBhZ2Utd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG4ubWFpbi1oZWFkZXIge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAubWFpbi1oZWFkZXIge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgfVxcbn1cXG4ubWFpbi1uYXYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzczZDtcXG59XFxuLm1haW4tbmF2LWxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjMjYyOTJlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5tYWluLW5hdi1saSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gIC5tYWluLW5hdi1saSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgIzI2MjkyZTtcXG4gIH1cXG4gIC5tYWluLW5hdi1saTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgfVxcbn1cXG4ubWFpbi1uYXYtbGk6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4ubWFpbi1uYXYtaXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogIzg1ODc4YjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5tYWluLW5hdi1pdGVtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbn1cXG4ubWFpbi1uYXYtaXRlbTpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OGU2YTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuLm1haW4tbmF2LWl0ZW06aG92ZXIsXFxuLm1haW4tbmF2LWl0ZW0uYWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1haW4tbmF2LWl0ZW06aG92ZXI6YmVmb3JlLFxcbi5tYWluLW5hdi1pdGVtLmFjdGl2ZTpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcbi5tYWluLW5hdi1pdGVtID4gKiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4ubWFpbi1uYXYtaXRlbSBpIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuM3JlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5tYWluLW5hdi1pdGVtIGkge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbi5hdmF0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYXZhdGFyLXRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICMzMzM3M0QgMCUsIHJnYmEoNTEsIDU1LCA2MSwgMCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzMzMzczRCAwJSwgcmdiYSg1MSwgNTUsIDYxLCAwKSAxMDAlKTtcXG59XFxuLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zb2NpYWwtbGlua3Mge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMzMzM3M2Q7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zb2NpYWwtbGlua3MtbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDAuMXJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICMzMzM3M2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxufVxcbi5zb2NpYWwtbGlua3MtbGk6aG92ZXIge1xcbiAgY29sb3I6ICM1NThlNmE7XFxuICBib3JkZXItY29sb3I6ICM1NThlNmE7XFxufVxcbi5wYWdlLXdyYXBwZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnBhZ2Utd3JhcHBlciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgLnBhZ2Utd3JhcHBlciB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG4ucGFnZS1mb290ZXIge1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XFxufVxcbi5wYWdlLWZvb3RlciAuZG93bmxvYWQtY3YsXFxuLnBhZ2UtZm9vdGVyIC5wcmludC1jdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXI6IDAuM3JlbSBzb2xpZDtcXG59XFxuLnBhZ2UtZm9vdGVyIC5kb3dubG9hZC1jdiBpLFxcbi5wYWdlLWZvb3RlciAucHJpbnQtY3YgaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnBhZ2UtZm9vdGVyIC5kb3dubG9hZC1jdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNzNkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzNzNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnBhZ2UtZm9vdGVyIC5kb3dubG9hZC1jdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICB9XFxufVxcbi5wYWdlLWZvb3RlciAuZG93bmxvYWQtY3Y6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OGU2YTtcXG4gIGJvcmRlci1jb2xvcjogIzU1OGU2YTtcXG59XFxuLnBhZ2UtZm9vdGVyIC5wcmludC1jdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjNyZW07XFxufVxcbi5wYWdlLWZvb3RlciAucHJpbnQtY3Y6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMC4zcmVtO1xcbiAgYm9yZGVyLWxlZnQ6IDAuM3JlbSBzb2xpZDtcXG4gIGJvcmRlci10b3A6IDAuM3JlbSBzb2xpZDtcXG59XFxuLnBhZ2UtZm9vdGVyIC5wcmludC1jdjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0wLjNyZW07XFxuICBib3JkZXItcmlnaHQ6IDAuM3JlbSBzb2xpZDtcXG4gIGJvcmRlci10b3A6IDAuM3JlbSBzb2xpZDtcXG59XFxuLnBhZ2UtZm9vdGVyIC5wcmludC1jdjpob3ZlcjpiZWZvcmUsXFxuLnBhZ2UtZm9vdGVyIC5wcmludC1jdjpob3ZlcjphZnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uLXNtYXJ0LWJvcmRlciAwLjRzIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbi1zbWFydC1ib3JkZXIgMC40cyBmb3J3YXJkcztcXG59XFxuLnNlY3Rpb24ge1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgfVxcbn1cXG4uc2VjdGlvbi10aXRsZSB7XFxuICBwYWRkaW5nOiAycmVtIDNyZW0gMXJlbTtcXG4gIG1hcmdpbjogMCAtM3JlbSAzcmVtO1xcbiAgY29sb3I6ICMzMzM3M2Q7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZWZlZmVmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlciEuLi9+L2F1dG9wcmVmaXhlci1sb2FkZXIhLi4vfi9sZXNzLWxvYWRlciEuL2xlc3MvY29tbW9uLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9Sb2JvdG8vL1JvYm90by1UaGluLnR0Zj8zZjY4NTAwYjI2N2MyMDA1MTA4OGJjYzA2OThhZjc3M1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW4udHRmXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL1JvYm90by8vUm9ib3RvLVRoaW5JdGFsaWMudHRmPzFlNTczN2JlNWM2OGMxNWMzYTEwNWIyZGI5YTNiNjdjXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbkl0YWxpYy50dGZcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvUm9ib3RvLy9Sb2JvdG8tTGlnaHQudHRmPzdiNWZiODhmMTJiZWM4MTQzZjAwZTIxYmMzMjIyMTI0XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZvbnRzL1JvYm90by9Sb2JvdG8tTGlnaHQudHRmXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL1JvYm90by8vUm9ib3RvLUxpZ2h0SXRhbGljLnR0Zj8xMjljNTA1N2Y0NDgwZjlhMzUzZTE1ZTFlMWUwOWY5ZFwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9mb250cy9Sb2JvdG8vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZlxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9Sb2JvdG8vL1JvYm90by1SZWd1bGFyLnR0Zj9hYzNmNzk5ZDViYmFmNTE5NmZhYjE1YWI4ZGU4NDMxY1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL1JvYm90by8vUm9ib3RvLUl0YWxpYy50dGY/ZGU3NGM2MDk5MWNkNjNjOGI5MjJlMGU2NjVhMzljN2FcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvUm9ib3RvL1JvYm90by1JdGFsaWMudHRmXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL1JvYm90by8vUm9ib3RvLU1lZGl1bS50dGY/ZmUxM2U0MTcwNzE5YzJmYzU4NjUwMWU3NzdiZGUxNDNcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW0udHRmXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL1JvYm90by8vUm9ib3RvLU1lZGl1bUl0YWxpYy50dGY/NWIyNWFmYTg3MWUxYjg5NjAxMTg1OWY4Y2RmOGRhNzRcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvUm9ib3RvL1JvYm90by1NZWRpdW1JdGFsaWMudHRmXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL1JvYm90by8vUm9ib3RvLUJvbGQudHRmP2QzMjljYzhiMzQ2NjdmMTE0YTk1NDIyYWFhZDFiMDYzXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZvbnRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvUm9ib3RvLy9Sb2JvdG8tQm9sZEl0YWxpYy50dGY/YjM3ZDBiYjczYTJmNjg4ZWNhZWUwMTY0N2Y0MWUzZTVcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvUm9ib3RvL1JvYm90by1Cb2xkSXRhbGljLnR0ZlxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9Sb2JvdG8vL1JvYm90by1CbGFjay50dGY/ODkzZmUxNDYyOGJkN2FjNDk4ZDU1MGU5NjM2N2UxYmVcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvUm9ib3RvL1JvYm90by1CbGFjay50dGZcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvUm9ib3RvLy9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmPzI1NmFhYjY1NGQzYzRkZDBlMTJmZDBhMzJjN2U4YWE2XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZvbnRzL1JvYm90by9Sb2JvdG8tQmxhY2tJdGFsaWMudHRmXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2ZvbnQtYXdlc29tZS8vZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/MzI0MDBmNGUwODkzMmE5NGQ4YmZkMjQyMjcwMmM0NDZcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90XG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2ZvbnQtYXdlc29tZS8vZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMj9kYjgxMmQ4YTcwYTRlODhlODg4NzQ0YzFjOWEyN2U4OVwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9mb250cy9mb250LWF3ZXNvbWUvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMlxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9mb250LWF3ZXNvbWUvL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj9hMzU3MjBjMmZlZDJjN2YwNDNiYzdlNGZmYjQ1ZTA3M1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9mb250cy9mb250LWF3ZXNvbWUvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2ZvbnQtYXdlc29tZS8vZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/YTNkZTIxNzBlNGU5ZGY3NzE2MWVhNWQzZjMxYjI2NjhcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2ZvbnQtYXdlc29tZS8vZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/Zjc3NWY5Y2NhODhlMjFkNDViZWJlMTg1YjI3YzBlNWJcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9udHMvZm9udC1hd2Vzb21lL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2F2YTEuanBnXCI6IDQzLFxuXHRcIi4vcG9ydGZvbGlvL2ZyZWVsYW5jZS5qcGdcIjogNDQsXG5cdFwiLi9wb3J0Zm9saW8vZ2Jhcy5qcGdcIjogNDUsXG5cdFwiLi9wb3J0Zm9saW8vZ2Nhcy5qcGdcIjogNDYsXG5cdFwiLi9wb3J0Zm9saW8vZ29mYXN0LmpwZ1wiOiA0Nyxcblx0XCIuL3BvcnRmb2xpby9nb3QuanBnXCI6IDQ4LFxuXHRcIi4vcG9ydGZvbGlvL2hpcW8uanBnXCI6IDQ5LFxuXHRcIi4vcG9ydGZvbGlvL2xvb2suanBnXCI6IDUwLFxuXHRcIi4vcG9ydGZvbGlvL25vZGUuanBnXCI6IDUxLFxuXHRcIi4vcG9ydGZvbGlvL3Nwb3J0Y29tLmpwZ1wiOiA1Mixcblx0XCIuL3RoZS1yb2NrLmpwZ1wiOiA1M1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA0MjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9pbWcgXFwuKGljb3xwbmd8anBnKSQvXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy8vYXZhMS5qcGc/OGVhYWIyYTYwOTYxZGJiYTA4ZGYyZjIzNjNlZTljNDJcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW1nL2F2YTEuanBnXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wb3J0Zm9saW8vL2ZyZWVsYW5jZS5qcGc/YmI0NGZmZWFiNWZjMGM5NTMwZjY5NTJmZTdhZmJkNmFcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW1nL3BvcnRmb2xpby9mcmVlbGFuY2UuanBnXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wb3J0Zm9saW8vL2diYXMuanBnP2ZhYTg1YTQ0YjljZmQyNjdiMjlmMjdmMmRhODNhYjdlXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ltZy9wb3J0Zm9saW8vZ2Jhcy5qcGdcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3BvcnRmb2xpby8vZ2Nhcy5qcGc/ODk1ZmIwNTZlMDU3ZWI1OWM3Yjc4M2YyNzA1NTFlYjhcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW1nL3BvcnRmb2xpby9nY2FzLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcG9ydGZvbGlvLy9nb2Zhc3QuanBnPzNkMmNiYzM4YjJkMDc2Zjc3NWMyNGNiMTA5OTI2NjcyXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ltZy9wb3J0Zm9saW8vZ29mYXN0LmpwZ1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcG9ydGZvbGlvLy9nb3QuanBnPzhiMjhhM2QxNDM0YjJiNzY3NWI2YTc1NWExMmI4ZTY2XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ltZy9wb3J0Zm9saW8vZ290LmpwZ1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcG9ydGZvbGlvLy9oaXFvLmpwZz82OGMzYzEwZjJkNmRhMDJjOWM1Mzk5Mjc2YjI5MDQ4MVwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9pbWcvcG9ydGZvbGlvL2hpcW8uanBnXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wb3J0Zm9saW8vL2xvb2suanBnPzFmNWNjZTc3OWYyZmM1Yjc5YWRiMGRjOGE4ZThiZGU5XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ltZy9wb3J0Zm9saW8vbG9vay5qcGdcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3BvcnRmb2xpby8vbm9kZS5qcGc/MmIwZWEzZTk4MGFkNzczYjBlZjgwMmVjMDI0ZWQ0M2JcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW1nL3BvcnRmb2xpby9ub2RlLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcG9ydGZvbGlvLy9zcG9ydGNvbS5qcGc/MmY5MWIwZjU1ZTk1MDYyOTNjMTlhMDg5OWNkZmFjMjNcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW1nL3BvcnRmb2xpby9zcG9ydGNvbS5qcGdcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nLy90aGUtcm9jay5qcGc/MGUxYjdhZTE1Y2E5MDhlYTViODExMWQyY2M2ZjMxNDZcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW1nL3RoZS1yb2NrLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZG9tID0gcmVxdWlyZSgnbGliL2RvbScpO1xudmFyIE1haW5IZWFkZXIgPSByZXF1aXJlKCdsYXlvdXQvbWFpbi1oZWFkZXInKTtcblxudmFyIG1haW5IZWFkZXIgPSBuZXcgTWFpbkhlYWRlcigpO1xuXG5kb20oJy5mbi1tYWluLWhlYWRlcicpLmFwcGVuZChtYWluSGVhZGVyLmVsKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdXBkYXRlTWFpbk5hdjogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgbWFpbkhlYWRlci51cGRhdGVOYXYocGF0aCk7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9sYXlvdXQvbGF5b3V0LW1hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRvbSA9IHJlcXVpcmUoJ2pib25lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9saWIvZG9tLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogakJvbmUgdjEuMi4wIC0gMjAxNi0wNC0xMyAtIExpYnJhcnkgZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqXG4gKiBodHRwOi8vamJvbmUuanMub3JnXG4gKlxuICogQ29weXJpZ2h0IDIwMTYgQWxleGV5IEt1cHJpeWFuZW5rb1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbihmdW5jdGlvbiAod2luKSB7XG5cbnZhclxuLy8gY2FjaGUgcHJldmlvdXMgdmVyc2lvbnNcbl8kID0gd2luLiQsXG5fakJvbmUgPSB3aW4uakJvbmUsXG5cbi8vIFF1aWNrIG1hdGNoIGEgc3RhbmRhbG9uZSB0YWdcbnJxdWlja1NpbmdsZVRhZyA9IC9ePChcXHcrKVxccypcXC8/PiQvLFxuXG4vLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuLy8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2hcbnJxdWlja0V4cHIgPSAvXig/OlteIzxdKig8W1xcd1xcV10rPilbXj5dKiR8IyhbXFx3XFwtXSopJCkvLFxuXG4vLyBBbGlhcyBmb3IgZnVuY3Rpb25cbnNsaWNlID0gW10uc2xpY2UsXG5zcGxpY2UgPSBbXS5zcGxpY2UsXG5rZXlzID0gT2JqZWN0LmtleXMsXG5cbi8vIEFsaWFzIGZvciBnbG9iYWwgdmFyaWFibGVzXG5kb2MgPSBkb2N1bWVudCxcblxuaXNTdHJpbmcgPSBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwic3RyaW5nXCI7XG59LFxuaXNPYmplY3QgPSBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbCBpbnN0YW5jZW9mIE9iamVjdDtcbn0sXG5pc0Z1bmN0aW9uID0gZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKGVsKSA9PT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiO1xufSxcbmlzQXJyYXkgPSBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGVsKTtcbn0sXG5qQm9uZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IGZuLmluaXQoZWxlbWVudCwgZGF0YSk7XG59LFxuZm47XG5cbi8vIHNldCBwcmV2aW91cyB2YWx1ZXMgYW5kIHJldHVybiB0aGUgaW5zdGFuY2UgdXBvbiBjYWxsaW5nIHRoZSBuby1jb25mbGljdCBtb2RlXG5qQm9uZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgd2luLiQgPSBfJDtcbiAgICB3aW4uakJvbmUgPSBfakJvbmU7XG5cbiAgICByZXR1cm4gakJvbmU7XG59O1xuXG5mbiA9IGpCb25lLmZuID0gakJvbmUucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGRhdGEpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzLCB0YWcsIHdyYXBlciwgZnJhZ21lbnQ7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpbmcoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzaW5nbGUgRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIGlmICh0YWcgPSBycXVpY2tTaW5nbGVUYWcuZXhlYyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXNbMF0gPSBkb2MuY3JlYXRlRWxlbWVudCh0YWdbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDcmVhdGUgRE9NIGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGlmICgodGFnID0gcnF1aWNrRXhwci5leGVjKGVsZW1lbnQpKSAmJiB0YWdbMV0pIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgd3JhcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgd3JhcGVyLmlubmVySFRNTCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBlci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQod3JhcGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IHNsaWNlLmNhbGwoZnJhZ21lbnQuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gakJvbmUubWVyZ2UodGhpcywgZWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmluZCBET00gZWxlbWVudHMgd2l0aCBxdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICBpZiAoakJvbmUuaXNFbGVtZW50KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpCb25lKGRhdGEpLmZpbmQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBqQm9uZS5tZXJnZSh0aGlzLCBlbGVtZW50cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JhcCBET01FbGVtZW50XG4gICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICB0aGlzWzBdID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGZ1bmN0aW9uXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiBqQm9uZSBlbGVtZW50IGFzIGlzXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgakJvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIGVsZW1lbnQgd3JhcHBlZCBieSBqQm9uZVxuICAgICAgICByZXR1cm4gakJvbmUubWFrZUFycmF5KGVsZW1lbnQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBwb3A6IFtdLnBvcCxcbiAgICBwdXNoOiBbXS5wdXNoLFxuICAgIHJldmVyc2U6IFtdLnJldmVyc2UsXG4gICAgc2hpZnQ6IFtdLnNoaWZ0LFxuICAgIHNvcnQ6IFtdLnNvcnQsXG4gICAgc3BsaWNlOiBbXS5zcGxpY2UsXG4gICAgc2xpY2U6IFtdLnNsaWNlLFxuICAgIGluZGV4T2Y6IFtdLmluZGV4T2YsXG4gICAgZm9yRWFjaDogW10uZm9yRWFjaCxcbiAgICB1bnNoaWZ0OiBbXS51bnNoaWZ0LFxuICAgIGNvbmNhdDogW10uY29uY2F0LFxuICAgIGpvaW46IFtdLmpvaW4sXG4gICAgZXZlcnk6IFtdLmV2ZXJ5LFxuICAgIHNvbWU6IFtdLnNvbWUsXG4gICAgZmlsdGVyOiBbXS5maWx0ZXIsXG4gICAgbWFwOiBbXS5tYXAsXG4gICAgcmVkdWNlOiBbXS5yZWR1Y2UsXG4gICAgcmVkdWNlUmlnaHQ6IFtdLnJlZHVjZVJpZ2h0LFxuICAgIGxlbmd0aDogMFxufTtcblxuZm4uY29uc3RydWN0b3IgPSBqQm9uZTtcblxuZm4uaW5pdC5wcm90b3R5cGUgPSBmbjtcblxuakJvbmUuc2V0SWQgPSBmdW5jdGlvbihlbCkge1xuICAgIHZhciBqaWQgPSBlbC5qaWQ7XG5cbiAgICBpZiAoZWwgPT09IHdpbikge1xuICAgICAgICBqaWQgPSBcIndpbmRvd1wiO1xuICAgIH0gZWxzZSBpZiAoZWwuamlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWwuamlkID0gamlkID0gKytqQm9uZS5fY2FjaGUuamlkO1xuICAgIH1cblxuICAgIGlmICghakJvbmUuX2NhY2hlLmV2ZW50c1tqaWRdKSB7XG4gICAgICAgIGpCb25lLl9jYWNoZS5ldmVudHNbamlkXSA9IHt9O1xuICAgIH1cbn07XG5cbmpCb25lLmdldERhdGEgPSBmdW5jdGlvbihlbCkge1xuICAgIGVsID0gZWwgaW5zdGFuY2VvZiBqQm9uZSA/IGVsWzBdIDogZWw7XG5cbiAgICB2YXIgamlkID0gZWwgPT09IHdpbiA/IFwid2luZG93XCIgOiBlbC5qaWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBqaWQ6IGppZCxcbiAgICAgICAgZXZlbnRzOiBqQm9uZS5fY2FjaGUuZXZlbnRzW2ppZF1cbiAgICB9O1xufTtcblxuakJvbmUuaXNFbGVtZW50ID0gZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwgJiYgZWwgaW5zdGFuY2VvZiBqQm9uZSB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGlzU3RyaW5nKGVsKTtcbn07XG5cbmpCb25lLl9jYWNoZSA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIGppZDogMFxufTtcblxuZnVuY3Rpb24gaXNBcnJheWxpa2Uob2JqKSB7XG4gICAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGgsXG4gICAgICAgIHR5cGUgPSB0eXBlb2Ygb2JqO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24odHlwZSkgfHwgb2JqID09PSB3aW4pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvYmoubm9kZVR5cGUgPT09IDEgJiYgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FycmF5KHR5cGUpIHx8IGxlbmd0aCA9PT0gMCB8fFxuICAgICAgICB0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcbn1cblxuZm4ucHVzaFN0YWNrID0gZnVuY3Rpb24oZWxlbXMpIHtcbiAgICB2YXIgcmV0ID0gakJvbmUubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLCBlbGVtcyk7XG5cbiAgICByZXR1cm4gcmV0O1xufTtcblxuakJvbmUubWVyZ2UgPSBmdW5jdGlvbihmaXJzdCwgc2Vjb25kKSB7XG4gICAgdmFyIGwgPSBzZWNvbmQubGVuZ3RoLFxuICAgICAgICBpID0gZmlyc3QubGVuZ3RoLFxuICAgICAgICBqID0gMDtcblxuICAgIHdoaWxlIChqIDwgbCkge1xuICAgICAgICBmaXJzdFtpKytdID0gc2Vjb25kW2orK107XG4gICAgfVxuXG4gICAgZmlyc3QubGVuZ3RoID0gaTtcblxuICAgIHJldHVybiBmaXJzdDtcbn07XG5cbmpCb25lLmNvbnRhaW5zID0gZnVuY3Rpb24oY29udGFpbmVyLCBjb250YWluZWQpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGNvbnRhaW5lZCk7XG59O1xuXG5qQm9uZS5leHRlbmQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgdGc7XG5cbiAgICBzcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHRnID0gdGFyZ2V0OyAvL2NhY2hpbmcgdGFyZ2V0IGZvciBwZXJmIGltcHJvdmVtZW50XG5cbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0Z1twcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmpCb25lLm1ha2VBcnJheSA9IGZ1bmN0aW9uKGFyciwgcmVzdWx0cykge1xuICAgIHZhciByZXQgPSByZXN1bHRzIHx8IFtdO1xuXG4gICAgaWYgKGFyciAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNBcnJheWxpa2UoYXJyKSkge1xuICAgICAgICAgICAgakJvbmUubWVyZ2UocmV0LCBpc1N0cmluZyhhcnIpID8gW2Fycl0gOiBhcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0LnB1c2goYXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59O1xuXG5qQm9uZS51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV07XG4gICAgICAgIGlmIChyZXN1bHQuaW5kZXhPZih2YWx1ZSkgPCAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIEJvbmVFdmVudChlLCBkYXRhKSB7XG4gICAgdmFyIGtleSwgc2V0dGVyO1xuXG4gICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZTtcblxuICAgIHNldHRlciA9IGZ1bmN0aW9uKGtleSwgZSkge1xuICAgICAgICBpZiAoa2V5ID09PSBcInByZXZlbnREZWZhdWx0XCIpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVba2V5XSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZVtrZXldKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oZVtrZXldKSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVba2V5XSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGVba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKGtleSBpbiBlKSB7XG4gICAgICAgIGlmIChlW2tleV0gfHwgdHlwZW9mIGVba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCBrZXksIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgakJvbmUuZXh0ZW5kKHRoaXMsIGRhdGEsIHtcbiAgICAgICAgaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuakJvbmUuRXZlbnQgPSBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgIHZhciBuYW1lc3BhY2UsIGV2ZW50VHlwZTtcblxuICAgIGlmIChldmVudC50eXBlICYmICFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBldmVudDtcbiAgICAgICAgZXZlbnQgPSBldmVudC50eXBlO1xuICAgIH1cblxuICAgIG5hbWVzcGFjZSA9IGV2ZW50LnNwbGl0KFwiLlwiKS5zcGxpY2UoMSkuam9pbihcIi5cIik7XG4gICAgZXZlbnRUeXBlID0gZXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuXG4gICAgZXZlbnQgPSBkb2MuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlKTtcblxuICAgIHJldHVybiBqQm9uZS5leHRlbmQoZXZlbnQsIHtcbiAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgICAgIGlzRGVmYXVsdFByZXZlbnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgICAgfVxuICAgIH0sIGRhdGEpO1xufTtcblxuakJvbmUuZXZlbnQgPSB7XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYSBoYW5kbGVyIHRvIGFuIGV2ZW50IGZvciB0aGUgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge05vZGV9ICAgICAgICBlbCAgICAgICAgIC0gRXZlbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhpcyBET00gTm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgICAgIHR5cGVzICAgICAgLSBPbmUgb3IgbW9yZSBzcGFjZS1zZXBhcmF0ZWQgZXZlbnQgdHlwZXMgYW5kIG9wdGlvbmFsIG5hbWVzcGFjZXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgICBoYW5kbGVyICAgIC0gQSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIFtkYXRhXSAgICAgLSBEYXRhIHRvIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlciBpbiBldmVudC5kYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICAgICAgW3NlbGVjdG9yXSAtIEEgc2VsZWN0b3Igc3RyaW5nIHRvIGZpbHRlciB0aGUgZGVzY2VuZGFudHMgb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbihlbCwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yKSB7XG4gICAgICAgIGpCb25lLnNldElkKGVsKTtcblxuICAgICAgICB2YXIgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGpCb25lLmV2ZW50LmRpc3BhdGNoLmNhbGwoZWwsIGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50cyA9IGpCb25lLmdldERhdGEoZWwpLmV2ZW50cyxcbiAgICAgICAgICAgIGV2ZW50VHlwZSwgdCwgZXZlbnQ7XG5cbiAgICAgICAgdHlwZXMgPSB0eXBlcy5zcGxpdChcIiBcIik7XG4gICAgICAgIHQgPSB0eXBlcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0LS0pIHtcbiAgICAgICAgICAgIGV2ZW50ID0gdHlwZXNbdF07XG5cbiAgICAgICAgICAgIGV2ZW50VHlwZSA9IGV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgIGV2ZW50c1tldmVudFR5cGVdID0gZXZlbnRzW2V2ZW50VHlwZV0gfHwgW107XG5cbiAgICAgICAgICAgIGlmIChldmVudHNbZXZlbnRUeXBlXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSB3aXRoIHByZXZpb3VzIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSBldmVudHNbZXZlbnRUeXBlXVswXS5mbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lciAmJiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50c1tldmVudFR5cGVdLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogZXZlbnQuc3BsaXQoXCIuXCIpLnNwbGljZSgxKS5qb2luKFwiLlwiKSxcbiAgICAgICAgICAgICAgICBmbjogZXZlbnRIYW5kbGVyLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIG9yaWdpbmZuOiBoYW5kbGVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlclxuICAgICAqIEBwYXJhbSAge05vZGV9ICAgICAgIGVsICAgICAgICAtIEV2ZW50cyB3aWxsIGJlIGRlYXR0YWNoZWQgZnJvbSB0aGlzIERPTSBOb2RlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgdHlwZXMgICAgIC0gT25lIG9yIG1vcmUgc3BhY2Utc2VwYXJhdGVkIGV2ZW50IHR5cGVzIGFuZCBvcHRpb25hbCBuYW1lc3BhY2VzXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259ICAgaGFuZGxlciAgIC0gQSBoYW5kbGVyIGZ1bmN0aW9uIHByZXZpb3VzbHkgYXR0YWNoZWQgZm9yIHRoZSBldmVudChzKVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICAgIFtzZWxlY3Rvcl0gLSBBIHNlbGVjdG9yIHN0cmluZyB0byBmaWx0ZXIgdGhlIGRlc2NlbmRhbnRzIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50c1xuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwsIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3Rvcikge1xuICAgICAgICB2YXIgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudHMsIGV2ZW50VHlwZSwgaW5kZXgsIGVsLCBlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgaWYgKChoYW5kbGVyICYmIGUub3JpZ2luZm4gPT09IGhhbmRsZXIpIHx8ICFoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZS5mbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzW2V2ZW50VHlwZV1baW5kZXhdLmZuID09PSBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgaGFuZGxlciBmcm9tIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50c1tldmVudFR5cGVdLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudHNbZXZlbnRUeXBlXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzID0gakJvbmUuZ2V0RGF0YShlbCkuZXZlbnRzLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGV2ZW50c0J5VHlwZTtcblxuICAgICAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBldmVudHNcbiAgICAgICAgaWYgKCF0eXBlcyAmJiBldmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXlzKGV2ZW50cykuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICBldmVudHNCeVR5cGUgPSBldmVudHNbZXZlbnRUeXBlXTtcbiAgICAgICAgICAgICAgICBsID0gZXZlbnRzQnlUeXBlLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHdoaWxlKGwtLSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihldmVudHMsIGV2ZW50VHlwZSwgbCwgZWwsIGV2ZW50c0J5VHlwZVtsXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudE5hbWUuc3BsaXQoXCIuXCIpWzBdLFxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZSA9IGV2ZW50TmFtZS5zcGxpdChcIi5cIikuc3BsaWNlKDEpLmpvaW4oXCIuXCIpLFxuICAgICAgICAgICAgICAgIGU7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBuYW1lZCBldmVudHNcbiAgICAgICAgICAgIGlmIChldmVudHNbZXZlbnRUeXBlXSkge1xuICAgICAgICAgICAgICAgIGV2ZW50c0J5VHlwZSA9IGV2ZW50c1tldmVudFR5cGVdO1xuICAgICAgICAgICAgICAgIGwgPSBldmVudHNCeVR5cGUubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBldmVudHNCeVR5cGVbbF07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIW5hbWVzcGFjZSB8fCAobmFtZXNwYWNlICYmIGUubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCFzZWxlY3RvciAgfHwgKHNlbGVjdG9yICAmJiBlLnNlbGVjdG9yID09PSBzZWxlY3RvcikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihldmVudHMsIGV2ZW50VHlwZSwgbCwgZWwsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBuYW1lc3BhY2VkIGV2ZW50c1xuICAgICAgICAgICAgZWxzZSBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAga2V5cyhldmVudHMpLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50c0J5VHlwZSA9IGV2ZW50c1tldmVudFR5cGVdO1xuICAgICAgICAgICAgICAgICAgICBsID0gZXZlbnRzQnlUeXBlLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBldmVudHNCeVR5cGVbbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpWzBdID09PSBuYW1lc3BhY2Uuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZXZlbnRzLCBldmVudFR5cGUsIGwsIGVsLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhbGwgaGFuZGxlcnMgYW5kIGJlaGF2aW9ycyBhdHRhY2hlZCB0byB0aGUgbWF0Y2hlZCBlbGVtZW50cyBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtICB7Tm9kZX0gICAgICAgZWwgICAgICAgLSBFdmVudHMgd2lsbCBiZSB0cmlnZ2VyZWQgZm9yIHRoaWUgRE9NIE5vZGVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICBldmVudCAgICAtIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBldmVudCB0eXBlcyBhbmQgb3B0aW9uYWwgbmFtZXNwYWNlc1xuICAgICAqL1xuICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGVsLCBldmVudCkge1xuICAgICAgICB2YXIgZXZlbnRzID0gW107XG5cbiAgICAgICAgaWYgKGlzU3RyaW5nKGV2ZW50KSkge1xuICAgICAgICAgICAgZXZlbnRzID0gZXZlbnQuc3BsaXQoXCIgXCIpLm1hcChmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBqQm9uZS5FdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgaW5zdGFuY2VvZiBFdmVudCA/IGV2ZW50IDogakJvbmUuRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgZXZlbnRzID0gW2V2ZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQgJiYgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaDogZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGVsID0gdGhpcyxcbiAgICAgICAgICAgIGhhbmRsZXJzID0gakJvbmUuZ2V0RGF0YShlbCkuZXZlbnRzW2UudHlwZV0sXG4gICAgICAgICAgICBsZW5ndGggPSBoYW5kbGVycy5sZW5ndGgsXG4gICAgICAgICAgICBoYW5kbGVyUXVldWUgPSBbXSxcbiAgICAgICAgICAgIHRhcmdldHMgPSBbXSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBleHBlY3RlZFRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGV2ZW50T3B0aW9ucztcblxuICAgICAgICAvLyBjYWNoZSBhbGwgZXZlbnRzIGhhbmRsZXJzLCBmaXggaXNzdWUgd2l0aCBtdWx0aXBsZSBoYW5kbGVycyAoaXNzdWUgIzQ1KVxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyUXVldWUucHVzaChoYW5kbGVyc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gMDtcbiAgICAgICAgbGVuZ3RoID0gaGFuZGxlclF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDtcbiAgICAgICAgICAgIC8vIGlmIGV2ZW50IGV4aXN0c1xuICAgICAgICAgICAgaSA8IGxlbmd0aCAmJlxuICAgICAgICAgICAgLy8gaWYgaGFuZGxlciBpcyBub3QgcmVtb3ZlZCBmcm9tIHN0YWNrXG4gICAgICAgICAgICB+aGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyUXVldWVbaV0pICYmXG4gICAgICAgICAgICAvLyBpZiBwcm9wYWdhdGlvbiBpcyBub3Qgc3RvcHBlZFxuICAgICAgICAgICAgIShldmVudCAmJiBldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKTtcbiAgICAgICAgaSsrKSB7XG4gICAgICAgICAgICBleHBlY3RlZFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICBldmVudE9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyUXVldWVbaV07XG4gICAgICAgICAgICBoYW5kbGVyLmRhdGEgJiYgKGV2ZW50T3B0aW9ucy5kYXRhID0gaGFuZGxlci5kYXRhKTtcblxuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlciB3aXRob3V0IHNlbGVjdG9yXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXIuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBCb25lRXZlbnQoZSwgZXZlbnRPcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGlmICghKGUubmFtZXNwYWNlICYmIGUubmFtZXNwYWNlICE9PSBoYW5kbGVyLm5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5vcmlnaW5mbi5jYWxsKGVsLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlciB3aXRoIHNlbGVjdG9yXG4gICAgICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAvLyBpZiB0YXJnZXQgYW5kIHNlbGVjdGVkIGVsZW1lbnQgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICB+KHRhcmdldHMgPSBqQm9uZShlbCkuZmluZChoYW5kbGVyLnNlbGVjdG9yKSkuaW5kZXhPZihlLnRhcmdldCkgJiYgKGV4cGVjdGVkVGFyZ2V0ID0gZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgLy8gaWYgb25lIG9mIGVsZW1lbnQgbWF0Y2hlZCB3aXRoIHNlbGVjdG9yIGNvbnRhaW5zIHRhcmdldFxuICAgICAgICAgICAgICAgIChlbCAhPT0gZS50YXJnZXQgJiYgZWwuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGVsZW1lbnQgbWF0Y2hlZCB3aXRoIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgaWYgKCFleHBlY3RlZFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBsID0gdGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0c1tqXSAmJiB0YXJnZXRzW2pdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkVGFyZ2V0ID0gdGFyZ2V0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZXhwZWN0ZWRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnRPcHRpb25zLmN1cnJlbnRUYXJnZXQgPSBleHBlY3RlZFRhcmdldDtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBCb25lRXZlbnQoZSwgZXZlbnRPcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGlmICghKGUubmFtZXNwYWNlICYmIGUubmFtZXNwYWNlICE9PSBoYW5kbGVyLm5hbWVzcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5vcmlnaW5mbi5jYWxsKGV4cGVjdGVkVGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZm4ub24gPSBmdW5jdGlvbih0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBpID0gMDtcblxuICAgIGlmIChkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCkge1xuICAgICAgICAvLyAodHlwZXMsIGZuKVxuICAgICAgICBmbiA9IHNlbGVjdG9yO1xuICAgICAgICBkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChmbiA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vICh0eXBlcywgc2VsZWN0b3IsIGZuKVxuICAgICAgICAgICAgZm4gPSBkYXRhO1xuICAgICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICh0eXBlcywgZGF0YSwgZm4pXG4gICAgICAgICAgICBmbiA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBqQm9uZS5ldmVudC5hZGQodGhpc1tpXSwgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5mbi5vbmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIG9uZUFyZ3MgPSBzbGljZS5jYWxsKGFyZ3MsIDEsIGFyZ3MubGVuZ3RoIC0gMSksXG4gICAgICAgIGNhbGxiYWNrID0gc2xpY2UuY2FsbChhcmdzLCAtMSlbMF0sXG4gICAgICAgIGFkZExpc3RlbmVyO1xuXG4gICAgYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICB2YXIgJGVsID0gakJvbmUoZWwpO1xuXG4gICAgICAgIGV2ZW50LnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgJGVsLm9mZihldmVudCwgZm4pO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWwsIGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJGVsLm9uLmFwcGx5KCRlbCwgW2V2ZW50XS5jb25jYXQob25lQXJncywgZm4pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5mbi50cmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gICAgaWYgKCFldmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGpCb25lLmV2ZW50LnRyaWdnZXIodGhpc1tpXSwgZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuZm4ub2ZmID0gZnVuY3Rpb24odHlwZXMsIHNlbGVjdG9yLCBoYW5kbGVyKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICBoYW5kbGVyID0gc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgakJvbmUuZXZlbnQucmVtb3ZlKHRoaXNbaV0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5mbi5maW5kID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIGZpbmRlciA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihlbC5xdWVyeVNlbGVjdG9yQWxsKSkge1xuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgZnVuY3Rpb24oZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGZvdW5kKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmluZGVyKHRoaXNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBqQm9uZShyZXN1bHRzKTtcbn07XG5cbmZuLmdldCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ICE9IG51bGwgP1xuXG4gICAgICAgIC8vIFJldHVybiBqdXN0IG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuICAgICAgICAoaW5kZXggPCAwID8gdGhpc1tpbmRleCArIHRoaXMubGVuZ3RoXSA6IHRoaXNbaW5kZXhdKSA6XG5cbiAgICAgICAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxuICAgICAgICBzbGljZS5jYWxsKHRoaXMpO1xufTtcblxuZm4uZXEgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIHJldHVybiBqQm9uZSh0aGlzW2luZGV4XSk7XG59O1xuXG5mbi5wYXJlbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF+cmVzdWx0cy5pbmRleE9mKHBhcmVudCA9IHRoaXNbaV0ucGFyZW50RWxlbWVudCkgJiYgcGFyZW50KSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBqQm9uZShyZXN1bHRzKTtcbn07XG5cbmZuLnRvQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzKTtcbn07XG5cbmZuLmlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICByZXR1cm4gdGhpcy5zb21lKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IGFyZ3NbMF07XG4gICAgfSk7XG59O1xuXG5mbi5oYXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIHJldHVybiB0aGlzLnNvbWUoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoYXJnc1swXSkubGVuZ3RoO1xuICAgIH0pO1xufTtcblxuZm4uYWRkID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soXG4gICAgICAgIGpCb25lLnVuaXF1ZShcbiAgICAgICAgICAgIGpCb25lLm1lcmdlKHRoaXMuZ2V0KCksIGpCb25lKHNlbGVjdG9yLCBjb250ZXh0KSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5mbi5hdHRyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIHNldHRlcjtcblxuICAgIGlmIChpc1N0cmluZyhrZXkpICYmIGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdICYmIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNldHRlciA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICAgIHNldHRlciA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBrZXlzKGtleSkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGtleVtuYW1lXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldHRlcih0aGlzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZuLnJlbW92ZUF0dHIgPSBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzW2ldLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuZm4udmFsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0gJiYgdGhpc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXNbaV0udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZuLmNzcyA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBzZXR0ZXI7XG5cbiAgICAvLyBHZXQgYXR0cmlidXRlXG4gICAgaWYgKGlzU3RyaW5nKGtleSkgJiYgYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0gJiYgd2luLmdldENvbXB1dGVkU3R5bGUodGhpc1swXSlba2V5XTtcbiAgICB9XG5cbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBzZXR0ZXIgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICBzZXR0ZXIgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAga2V5cyhrZXkpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlW25hbWVdID0ga2V5W25hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzZXR0ZXIodGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5mbi5kYXRhID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLCBkYXRhID0ge30sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgc2V0dGVyLFxuICAgICAgICBzZXRWYWx1ZSA9IGZ1bmN0aW9uKGVsLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZWwuamRhdGEgPSBlbC5qZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBlbC5qZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmRhdGFzZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIC8vIEdldCBhbGwgZGF0YVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzWzBdLmpkYXRhICYmIChkYXRhID0gdGhpc1swXS5qZGF0YSk7XG5cbiAgICAgICAga2V5cyh0aGlzWzBdLmRhdGFzZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSBnZXRWYWx1ZSh0aGlzWzBdLmRhdGFzZXRba2V5XSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICAvLyBHZXQgZGF0YSBieSBuYW1lXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzU3RyaW5nKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0gJiYgZ2V0VmFsdWUodGhpc1swXS5kYXRhc2V0W2tleV0gfHwgdGhpc1swXS5qZGF0YSAmJiB0aGlzWzBdLmpkYXRhW2tleV0pO1xuICAgIH1cblxuICAgIC8vIFNldCBkYXRhXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgc2V0dGVyID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGtleXMoa2V5KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlbCwgbmFtZSwga2V5W25hbWVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2V0dGVyID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKGVsLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldHRlcih0aGlzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZuLnJlbW92ZURhdGEgPSBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBqZGF0YSwgZGF0YXNldDtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgamRhdGEgPSB0aGlzW2ldLmpkYXRhO1xuICAgICAgICBkYXRhc2V0ID0gdGhpc1tpXS5kYXRhc2V0O1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGpkYXRhICYmIGpkYXRhW2tleV0gJiYgZGVsZXRlIGpkYXRhW2tleV07XG4gICAgICAgICAgICBkZWxldGUgZGF0YXNldFtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gamRhdGEpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgamRhdGFba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhc2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZuLmFkZENsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykgOiBbXTtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaiA9IDA7XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGNsYXNzZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0uY2xhc3NMaXN0LmFkZChjbGFzc2VzW2pdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuZm4ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGogPSAwLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzTmFtZSA/IGNsYXNzTmFtZS50cmltKCkuc3BsaXQoL1xccysvKSA6IFtdO1xuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBqID0gMDtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2xhc3Nlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbal0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5mbi50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgZm9yY2UpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBtZXRob2QgPSBcInRvZ2dsZVwiO1xuXG4gICAgZm9yY2UgPT09IHRydWUgJiYgKG1ldGhvZCA9IFwiYWRkXCIpIHx8IGZvcmNlID09PSBmYWxzZSAmJiAobWV0aG9kID0gXCJyZW1vdmVcIik7XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0uY2xhc3NMaXN0W21ldGhvZF0oY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuZm4uaGFzQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZm4uaHRtbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGVsO1xuXG4gICAgLy8gYWRkIEhUTUwgaW50byBlbGVtZW50c1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5KCkuYXBwZW5kKHZhbHVlKTtcbiAgICB9XG4gICAgLy8gZ2V0IEhUTUwgZnJvbSBlbGVtZW50XG4gICAgZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDAgJiYgKGVsID0gdGhpc1swXSkpIHtcbiAgICAgICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZuLmFwcGVuZCA9IGZ1bmN0aW9uKGFwcGVuZGVkKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgc2V0dGVyO1xuXG4gICAgLy8gY3JlYXRlIGpCb25lIG9iamVjdCBhbmQgdGhlbiBhcHBlbmRcbiAgICBpZiAoaXNTdHJpbmcoYXBwZW5kZWQpICYmIHJxdWlja0V4cHIuZXhlYyhhcHBlbmRlZCkpIHtcbiAgICAgICAgYXBwZW5kZWQgPSBqQm9uZShhcHBlbmRlZCk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGUgZm9yIGluc2VydGlvblxuICAgIGVsc2UgaWYgKCFpc09iamVjdChhcHBlbmRlZCkpIHtcbiAgICAgICAgYXBwZW5kZWQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcHBlbmRlZCk7XG4gICAgfVxuXG4gICAgYXBwZW5kZWQgPSBhcHBlbmRlZCBpbnN0YW5jZW9mIGpCb25lID8gYXBwZW5kZWQgOiBqQm9uZShhcHBlbmRlZCk7XG5cbiAgICBzZXR0ZXIgPSBmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICBhcHBlbmRlZC5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2V0dGVyKHRoaXNbaV0sIGkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuZm4uYXBwZW5kVG8gPSBmdW5jdGlvbih0bykge1xuICAgIGpCb25lKHRvKS5hcHBlbmQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZuLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgZWw7XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsID0gdGhpc1tpXTtcblxuICAgICAgICB3aGlsZSAoZWwubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChlbC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5mbi5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBlbDtcblxuICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzXG4gICAgdGhpcy5vZmYoKTtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWwgPSB0aGlzW2ldO1xuXG4gICAgICAgIC8vIHJlbW92ZSBkYXRhIGFuZCBub2Rlc1xuICAgICAgICBkZWxldGUgZWwuamRhdGE7XG4gICAgICAgIGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gRXhwb3NlIGpCb25lIGFzIG1vZHVsZS5leHBvcnRzIGluIGxvYWRlcnMgdGhhdCBpbXBsZW1lbnQgdGhlIE5vZGVcbiAgICAvLyBtb2R1bGUgcGF0dGVybiAoaW5jbHVkaW5nIGJyb3dzZXJpZnkpLiBEbyBub3QgY3JlYXRlIHRoZSBnbG9iYWwsIHNpbmNlXG4gICAgLy8gdGhlIHVzZXIgd2lsbCBiZSBzdG9yaW5nIGl0IHRoZW1zZWx2ZXMgbG9jYWxseSwgYW5kIGdsb2JhbHMgYXJlIGZyb3duZWRcbiAgICAvLyB1cG9uIGluIHRoZSBOb2RlIG1vZHVsZSB3b3JsZC5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGpCb25lO1xufVxuLy8gUmVnaXN0ZXIgYXMgYSBBTUQgbW9kdWxlXG5lbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGpCb25lO1xuICAgIH0pO1xuXG4gICAgd2luLmpCb25lID0gd2luLiQgPSBqQm9uZTtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbiA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luLmRvY3VtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgd2luLmpCb25lID0gd2luLiQgPSBqQm9uZTtcbn1cblxufSh3aW5kb3cpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9qYm9uZS9kaXN0L2pib25lLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEJhc2VWaWV3ID0gcmVxdWlyZSgnYmFzZS9iYXNlLXZpZXcnKTtcbnZhciBtdmMgPSByZXF1aXJlKCdsaWIvbXZjJyk7XG5cbnZhciBNYWluSGVhZGVyID0gQmFzZVZpZXcuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogJ2xheW91dC9tYWluLWhlYWRlcicsXG4gICAgdXJsOiAnZGF0YS9hYm91dC5qc29uJyxcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmZuLW5hdi1pdGVtJzogJ25hdmlnYXRlJ1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQWZ0ZXJGZXRjaCgpO1xuICAgIH0sXG5cbiAgICBuYXZpZ2F0ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbXZjLmhpc3RvcnkubmF2aWdhdGUoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZU5hdjogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldE5hdkFjdGl2ZUNsYXNzKHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcywgJ3JlbmRlcmVkJywgdGhpcy5zZXROYXZBY3RpdmVDbGFzcy5iaW5kKHRoaXMsIHBhdGgpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXROYXZBY3RpdmVDbGFzczogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuJCgnLmZuLW5hdi1pdGVtJykuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cigxKSA9PT0gcGF0aDtcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgdGhpcy4kKCcuZm4tbmF2LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5IZWFkZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2xheW91dC9tYWluLWhlYWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbXZjID0gcmVxdWlyZSgnbGliL212YycpO1xuXG52YXIgQmFzZVZpZXcgPSBtdmMuVmlldy5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiBudWxsLFxuICAgIHVybDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBEb1QgdGVtcGxhdGUgYnkgdGVtcGxhdGUgbmFtZSBvciBvbmx5IHRlbXBsYXRlIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGVtcGxhdGVOYW1lXG4gICAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICB0bXBsOiBmdW5jdGlvbiAodGVtcGxhdGVOYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJ3RlbXBsYXRlcy8nICsgdGVtcGxhdGVOYW1lICsgJy5kb3QnKTtcblxuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY2FsbCh7XG4gICAgICAgICAgICB0bXBsOiB0aGlzLnRtcGxcbiAgICAgICAgfSwgZGF0YSk7XG4gICAgfSxcblxuICAgIHJlbmRlckFmdGVyRmV0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gd2luZG93LmZldGNoKHRoaXMudXJsKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50bXBsKHRoaXMudGVtcGxhdGUsIGRhdGEpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncmVuZGVyZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VWaWV3O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9iYXNlL2Jhc2Utdmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbXZjID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtdmM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2xpYi9tdmMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gICAgIEJhY2tib25lLmpzIDEuMy4zXG5cbi8vICAgICAoYykgMjAxMC0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgQmFja2JvbmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vLyAgICAgRm9yIGFsbCBkZXRhaWxzIGFuZCBkb2N1bWVudGF0aW9uOlxuLy8gICAgIGh0dHA6Ly9iYWNrYm9uZWpzLm9yZ1xuXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIChgc2VsZmApIGluIHRoZSBicm93c2VyLCBvciBgZ2xvYmFsYCBvbiB0aGUgc2VydmVyLlxuICAvLyBXZSB1c2UgYHNlbGZgIGluc3RlYWQgb2YgYHdpbmRvd2AgZm9yIGBXZWJXb3JrZXJgIHN1cHBvcnQuXG4gIHZhciByb290ID0gKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCk7XG5cbiAgLy8gU2V0IHVwIEJhY2tib25lIGFwcHJvcHJpYXRlbHkgZm9yIHRoZSBlbnZpcm9ubWVudC4gU3RhcnQgd2l0aCBBTUQuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWyd1bmRlcnNjb3JlJywgJ2pxdWVyeScsICdleHBvcnRzJ10sIGZ1bmN0aW9uKF8sICQsIGV4cG9ydHMpIHtcbiAgICAgIC8vIEV4cG9ydCBnbG9iYWwgZXZlbiBpbiBBTUQgY2FzZSBpbiBjYXNlIHRoaXMgc2NyaXB0IGlzIGxvYWRlZCB3aXRoXG4gICAgICAvLyBvdGhlcnMgdGhhdCBtYXkgc3RpbGwgZXhwZWN0IGEgZ2xvYmFsIEJhY2tib25lLlxuICAgICAgcm9vdC5CYWNrYm9uZSA9IGZhY3Rvcnkocm9vdCwgZXhwb3J0cywgXywgJCk7XG4gICAgfSk7XG5cbiAgLy8gTmV4dCBmb3IgTm9kZS5qcyBvciBDb21tb25KUy4galF1ZXJ5IG1heSBub3QgYmUgbmVlZGVkIGFzIGEgbW9kdWxlLlxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpLCAkO1xuICAgIHRyeSB7ICQgPSByZXF1aXJlKCdqcXVlcnknKTsgfSBjYXRjaCAoZSkge31cbiAgICBmYWN0b3J5KHJvb3QsIGV4cG9ydHMsIF8sICQpO1xuXG4gIC8vIEZpbmFsbHksIGFzIGEgYnJvd3NlciBnbG9iYWwuXG4gIH0gZWxzZSB7XG4gICAgcm9vdC5CYWNrYm9uZSA9IGZhY3Rvcnkocm9vdCwge30sIHJvb3QuXywgKHJvb3QualF1ZXJ5IHx8IHJvb3QuWmVwdG8gfHwgcm9vdC5lbmRlciB8fCByb290LiQpKTtcbiAgfVxuXG59KShmdW5jdGlvbihyb290LCBCYWNrYm9uZSwgXywgJCkge1xuXG4gIC8vIEluaXRpYWwgU2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgQmFja2JvbmVgIHZhcmlhYmxlLCBzbyB0aGF0IGl0IGNhbiBiZVxuICAvLyByZXN0b3JlZCBsYXRlciBvbiwgaWYgYG5vQ29uZmxpY3RgIGlzIHVzZWQuXG4gIHZhciBwcmV2aW91c0JhY2tib25lID0gcm9vdC5CYWNrYm9uZTtcblxuICAvLyBDcmVhdGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gYSBjb21tb24gYXJyYXkgbWV0aG9kIHdlJ2xsIHdhbnQgdG8gdXNlIGxhdGVyLlxuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uIG9mIHRoZSBsaWJyYXJ5LiBLZWVwIGluIHN5bmMgd2l0aCBgcGFja2FnZS5qc29uYC5cbiAgQmFja2JvbmUuVkVSU0lPTiA9ICcxLjMuMyc7XG5cbiAgLy8gRm9yIEJhY2tib25lJ3MgcHVycG9zZXMsIGpRdWVyeSwgWmVwdG8sIEVuZGVyLCBvciBNeSBMaWJyYXJ5IChraWRkaW5nKSBvd25zXG4gIC8vIHRoZSBgJGAgdmFyaWFibGUuXG4gIEJhY2tib25lLiQgPSAkO1xuXG4gIC8vIFJ1bnMgQmFja2JvbmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYEJhY2tib25lYCB2YXJpYWJsZVxuICAvLyB0byBpdHMgcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhpcyBCYWNrYm9uZSBvYmplY3QuXG4gIEJhY2tib25lLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290LkJhY2tib25lID0gcHJldmlvdXNCYWNrYm9uZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBUdXJuIG9uIGBlbXVsYXRlSFRUUGAgdG8gc3VwcG9ydCBsZWdhY3kgSFRUUCBzZXJ2ZXJzLiBTZXR0aW5nIHRoaXMgb3B0aW9uXG4gIC8vIHdpbGwgZmFrZSBgXCJQQVRDSFwiYCwgYFwiUFVUXCJgIGFuZCBgXCJERUxFVEVcImAgcmVxdWVzdHMgdmlhIHRoZSBgX21ldGhvZGAgcGFyYW1ldGVyIGFuZFxuICAvLyBzZXQgYSBgWC1IdHRwLU1ldGhvZC1PdmVycmlkZWAgaGVhZGVyLlxuICBCYWNrYm9uZS5lbXVsYXRlSFRUUCA9IGZhbHNlO1xuXG4gIC8vIFR1cm4gb24gYGVtdWxhdGVKU09OYCB0byBzdXBwb3J0IGxlZ2FjeSBzZXJ2ZXJzIHRoYXQgY2FuJ3QgZGVhbCB3aXRoIGRpcmVjdFxuICAvLyBgYXBwbGljYXRpb24vanNvbmAgcmVxdWVzdHMgLi4uIHRoaXMgd2lsbCBlbmNvZGUgdGhlIGJvZHkgYXNcbiAgLy8gYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGAgaW5zdGVhZCBhbmQgd2lsbCBzZW5kIHRoZSBtb2RlbCBpbiBhXG4gIC8vIGZvcm0gcGFyYW0gbmFtZWQgYG1vZGVsYC5cbiAgQmFja2JvbmUuZW11bGF0ZUpTT04gPSBmYWxzZTtcblxuICAvLyBQcm94eSBCYWNrYm9uZSBjbGFzcyBtZXRob2RzIHRvIFVuZGVyc2NvcmUgZnVuY3Rpb25zLCB3cmFwcGluZyB0aGUgbW9kZWwnc1xuICAvLyBgYXR0cmlidXRlc2Agb2JqZWN0IG9yIGNvbGxlY3Rpb24ncyBgbW9kZWxzYCBhcnJheSBiZWhpbmQgdGhlIHNjZW5lcy5cbiAgLy9cbiAgLy8gY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24obW9kZWwpIHsgcmV0dXJuIG1vZGVsLmdldCgnYWdlJykgPiAxMCB9KTtcbiAgLy8gY29sbGVjdGlvbi5lYWNoKHRoaXMuYWRkVmlldyk7XG4gIC8vXG4gIC8vIGBGdW5jdGlvbiNhcHBseWAgY2FuIGJlIHNsb3cgc28gd2UgdXNlIHRoZSBtZXRob2QncyBhcmcgY291bnQsIGlmIHdlIGtub3cgaXQuXG4gIHZhciBhZGRNZXRob2QgPSBmdW5jdGlvbihsZW5ndGgsIG1ldGhvZCwgYXR0cmlidXRlKSB7XG4gICAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX1ttZXRob2RdKHRoaXNbYXR0cmlidXRlXSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9bbWV0aG9kXSh0aGlzW2F0dHJpYnV0ZV0sIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihpdGVyYXRlZSwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gX1ttZXRob2RdKHRoaXNbYXR0cmlidXRlXSwgY2IoaXRlcmF0ZWUsIHRoaXMpLCBjb250ZXh0KTtcbiAgICAgIH07XG4gICAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihpdGVyYXRlZSwgZGVmYXVsdFZhbCwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gX1ttZXRob2RdKHRoaXNbYXR0cmlidXRlXSwgY2IoaXRlcmF0ZWUsIHRoaXMpLCBkZWZhdWx0VmFsLCBjb250ZXh0KTtcbiAgICAgIH07XG4gICAgICBkZWZhdWx0OiByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICBhcmdzLnVuc2hpZnQodGhpc1thdHRyaWJ1dGVdKTtcbiAgICAgICAgcmV0dXJuIF9bbWV0aG9kXS5hcHBseShfLCBhcmdzKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICB2YXIgYWRkVW5kZXJzY29yZU1ldGhvZHMgPSBmdW5jdGlvbihDbGFzcywgbWV0aG9kcywgYXR0cmlidXRlKSB7XG4gICAgXy5lYWNoKG1ldGhvZHMsIGZ1bmN0aW9uKGxlbmd0aCwgbWV0aG9kKSB7XG4gICAgICBpZiAoX1ttZXRob2RdKSBDbGFzcy5wcm90b3R5cGVbbWV0aG9kXSA9IGFkZE1ldGhvZChsZW5ndGgsIG1ldGhvZCwgYXR0cmlidXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTdXBwb3J0IGBjb2xsZWN0aW9uLnNvcnRCeSgnYXR0cicpYCBhbmQgYGNvbGxlY3Rpb24uZmluZFdoZXJlKHtpZDogMX0pYC5cbiAgdmFyIGNiID0gZnVuY3Rpb24oaXRlcmF0ZWUsIGluc3RhbmNlKSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpdGVyYXRlZSkpIHJldHVybiBpdGVyYXRlZTtcbiAgICBpZiAoXy5pc09iamVjdChpdGVyYXRlZSkgJiYgIWluc3RhbmNlLl9pc01vZGVsKGl0ZXJhdGVlKSkgcmV0dXJuIG1vZGVsTWF0Y2hlcihpdGVyYXRlZSk7XG4gICAgaWYgKF8uaXNTdHJpbmcoaXRlcmF0ZWUpKSByZXR1cm4gZnVuY3Rpb24obW9kZWwpIHsgcmV0dXJuIG1vZGVsLmdldChpdGVyYXRlZSk7IH07XG4gICAgcmV0dXJuIGl0ZXJhdGVlO1xuICB9O1xuICB2YXIgbW9kZWxNYXRjaGVyID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICB2YXIgbWF0Y2hlciA9IF8ubWF0Y2hlcyhhdHRycyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG1vZGVsKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcihtb2RlbC5hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEJhY2tib25lLkV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBIG1vZHVsZSB0aGF0IGNhbiBiZSBtaXhlZCBpbiB0byAqYW55IG9iamVjdCogaW4gb3JkZXIgdG8gcHJvdmlkZSBpdCB3aXRoXG4gIC8vIGEgY3VzdG9tIGV2ZW50IGNoYW5uZWwuIFlvdSBtYXkgYmluZCBhIGNhbGxiYWNrIHRvIGFuIGV2ZW50IHdpdGggYG9uYCBvclxuICAvLyByZW1vdmUgd2l0aCBgb2ZmYDsgYHRyaWdnZXJgLWluZyBhbiBldmVudCBmaXJlcyBhbGwgY2FsbGJhY2tzIGluXG4gIC8vIHN1Y2Nlc3Npb24uXG4gIC8vXG4gIC8vICAgICB2YXIgb2JqZWN0ID0ge307XG4gIC8vICAgICBfLmV4dGVuZChvYmplY3QsIEJhY2tib25lLkV2ZW50cyk7XG4gIC8vICAgICBvYmplY3Qub24oJ2V4cGFuZCcsIGZ1bmN0aW9uKCl7IGFsZXJ0KCdleHBhbmRlZCcpOyB9KTtcbiAgLy8gICAgIG9iamVjdC50cmlnZ2VyKCdleHBhbmQnKTtcbiAgLy9cbiAgdmFyIEV2ZW50cyA9IEJhY2tib25lLkV2ZW50cyA9IHt9O1xuXG4gIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHNwbGl0IGV2ZW50IHN0cmluZ3MuXG4gIHZhciBldmVudFNwbGl0dGVyID0gL1xccysvO1xuXG4gIC8vIEl0ZXJhdGVzIG92ZXIgdGhlIHN0YW5kYXJkIGBldmVudCwgY2FsbGJhY2tgIChhcyB3ZWxsIGFzIHRoZSBmYW5jeSBtdWx0aXBsZVxuICAvLyBzcGFjZS1zZXBhcmF0ZWQgZXZlbnRzIGBcImNoYW5nZSBibHVyXCIsIGNhbGxiYWNrYCBhbmQgalF1ZXJ5LXN0eWxlIGV2ZW50XG4gIC8vIG1hcHMgYHtldmVudDogY2FsbGJhY2t9YCkuXG4gIHZhciBldmVudHNBcGkgPSBmdW5jdGlvbihpdGVyYXRlZSwgZXZlbnRzLCBuYW1lLCBjYWxsYmFjaywgb3B0cykge1xuICAgIHZhciBpID0gMCwgbmFtZXM7XG4gICAgaWYgKG5hbWUgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBIYW5kbGUgZXZlbnQgbWFwcy5cbiAgICAgIGlmIChjYWxsYmFjayAhPT0gdm9pZCAwICYmICdjb250ZXh0JyBpbiBvcHRzICYmIG9wdHMuY29udGV4dCA9PT0gdm9pZCAwKSBvcHRzLmNvbnRleHQgPSBjYWxsYmFjaztcbiAgICAgIGZvciAobmFtZXMgPSBfLmtleXMobmFtZSk7IGkgPCBuYW1lcy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzQXBpKGl0ZXJhdGVlLCBldmVudHMsIG5hbWVzW2ldLCBuYW1lW25hbWVzW2ldXSwgb3B0cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYW1lICYmIGV2ZW50U3BsaXR0ZXIudGVzdChuYW1lKSkge1xuICAgICAgLy8gSGFuZGxlIHNwYWNlLXNlcGFyYXRlZCBldmVudCBuYW1lcyBieSBkZWxlZ2F0aW5nIHRoZW0gaW5kaXZpZHVhbGx5LlxuICAgICAgZm9yIChuYW1lcyA9IG5hbWUuc3BsaXQoZXZlbnRTcGxpdHRlcik7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBldmVudHMgPSBpdGVyYXRlZShldmVudHMsIG5hbWVzW2ldLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpbmFsbHksIHN0YW5kYXJkIGV2ZW50cy5cbiAgICAgIGV2ZW50cyA9IGl0ZXJhdGVlKGV2ZW50cywgbmFtZSwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzO1xuICB9O1xuXG4gIC8vIEJpbmQgYW4gZXZlbnQgdG8gYSBgY2FsbGJhY2tgIGZ1bmN0aW9uLiBQYXNzaW5nIGBcImFsbFwiYCB3aWxsIGJpbmRcbiAgLy8gdGhlIGNhbGxiYWNrIHRvIGFsbCBldmVudHMgZmlyZWQuXG4gIEV2ZW50cy5vbiA9IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGludGVybmFsT24odGhpcywgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIEd1YXJkIHRoZSBgbGlzdGVuaW5nYCBhcmd1bWVudCBmcm9tIHRoZSBwdWJsaWMgQVBJLlxuICB2YXIgaW50ZXJuYWxPbiA9IGZ1bmN0aW9uKG9iaiwgbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQsIGxpc3RlbmluZykge1xuICAgIG9iai5fZXZlbnRzID0gZXZlbnRzQXBpKG9uQXBpLCBvYmouX2V2ZW50cyB8fCB7fSwgbmFtZSwgY2FsbGJhY2ssIHtcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBjdHg6IG9iaixcbiAgICAgIGxpc3RlbmluZzogbGlzdGVuaW5nXG4gICAgfSk7XG5cbiAgICBpZiAobGlzdGVuaW5nKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gb2JqLl9saXN0ZW5lcnMgfHwgKG9iai5fbGlzdGVuZXJzID0ge30pO1xuICAgICAgbGlzdGVuZXJzW2xpc3RlbmluZy5pZF0gPSBsaXN0ZW5pbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBJbnZlcnNpb24tb2YtY29udHJvbCB2ZXJzaW9ucyBvZiBgb25gLiBUZWxsICp0aGlzKiBvYmplY3QgdG8gbGlzdGVuIHRvXG4gIC8vIGFuIGV2ZW50IGluIGFub3RoZXIgb2JqZWN0Li4uIGtlZXBpbmcgdHJhY2sgb2Ygd2hhdCBpdCdzIGxpc3RlbmluZyB0b1xuICAvLyBmb3IgZWFzaWVyIHVuYmluZGluZyBsYXRlci5cbiAgRXZlbnRzLmxpc3RlblRvID0gZnVuY3Rpb24ob2JqLCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghb2JqKSByZXR1cm4gdGhpcztcbiAgICB2YXIgaWQgPSBvYmouX2xpc3RlbklkIHx8IChvYmouX2xpc3RlbklkID0gXy51bmlxdWVJZCgnbCcpKTtcbiAgICB2YXIgbGlzdGVuaW5nVG8gPSB0aGlzLl9saXN0ZW5pbmdUbyB8fCAodGhpcy5fbGlzdGVuaW5nVG8gPSB7fSk7XG4gICAgdmFyIGxpc3RlbmluZyA9IGxpc3RlbmluZ1RvW2lkXTtcblxuICAgIC8vIFRoaXMgb2JqZWN0IGlzIG5vdCBsaXN0ZW5pbmcgdG8gYW55IG90aGVyIGV2ZW50cyBvbiBgb2JqYCB5ZXQuXG4gICAgLy8gU2V0dXAgdGhlIG5lY2Vzc2FyeSByZWZlcmVuY2VzIHRvIHRyYWNrIHRoZSBsaXN0ZW5pbmcgY2FsbGJhY2tzLlxuICAgIGlmICghbGlzdGVuaW5nKSB7XG4gICAgICB2YXIgdGhpc0lkID0gdGhpcy5fbGlzdGVuSWQgfHwgKHRoaXMuX2xpc3RlbklkID0gXy51bmlxdWVJZCgnbCcpKTtcbiAgICAgIGxpc3RlbmluZyA9IGxpc3RlbmluZ1RvW2lkXSA9IHtvYmo6IG9iaiwgb2JqSWQ6IGlkLCBpZDogdGhpc0lkLCBsaXN0ZW5pbmdUbzogbGlzdGVuaW5nVG8sIGNvdW50OiAwfTtcbiAgICB9XG5cbiAgICAvLyBCaW5kIGNhbGxiYWNrcyBvbiBvYmosIGFuZCBrZWVwIHRyYWNrIG9mIHRoZW0gb24gbGlzdGVuaW5nLlxuICAgIGludGVybmFsT24ob2JqLCBuYW1lLCBjYWxsYmFjaywgdGhpcywgbGlzdGVuaW5nKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBUaGUgcmVkdWNpbmcgQVBJIHRoYXQgYWRkcyBhIGNhbGxiYWNrIHRvIHRoZSBgZXZlbnRzYCBvYmplY3QuXG4gIHZhciBvbkFwaSA9IGZ1bmN0aW9uKGV2ZW50cywgbmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBoYW5kbGVycyA9IGV2ZW50c1tuYW1lXSB8fCAoZXZlbnRzW25hbWVdID0gW10pO1xuICAgICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQsIGN0eCA9IG9wdGlvbnMuY3R4LCBsaXN0ZW5pbmcgPSBvcHRpb25zLmxpc3RlbmluZztcbiAgICAgIGlmIChsaXN0ZW5pbmcpIGxpc3RlbmluZy5jb3VudCsrO1xuXG4gICAgICBoYW5kbGVycy5wdXNoKHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIGN0eDogY29udGV4dCB8fCBjdHgsIGxpc3RlbmluZzogbGlzdGVuaW5nfSk7XG4gICAgfVxuICAgIHJldHVybiBldmVudHM7XG4gIH07XG5cbiAgLy8gUmVtb3ZlIG9uZSBvciBtYW55IGNhbGxiYWNrcy4gSWYgYGNvbnRleHRgIGlzIG51bGwsIHJlbW92ZXMgYWxsXG4gIC8vIGNhbGxiYWNrcyB3aXRoIHRoYXQgZnVuY3Rpb24uIElmIGBjYWxsYmFja2AgaXMgbnVsbCwgcmVtb3ZlcyBhbGxcbiAgLy8gY2FsbGJhY2tzIGZvciB0aGUgZXZlbnQuIElmIGBuYW1lYCBpcyBudWxsLCByZW1vdmVzIGFsbCBib3VuZFxuICAvLyBjYWxsYmFja3MgZm9yIGFsbCBldmVudHMuXG4gIEV2ZW50cy5vZmYgPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICghdGhpcy5fZXZlbnRzKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9ldmVudHMgPSBldmVudHNBcGkob2ZmQXBpLCB0aGlzLl9ldmVudHMsIG5hbWUsIGNhbGxiYWNrLCB7XG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgbGlzdGVuZXJzOiB0aGlzLl9saXN0ZW5lcnNcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBUZWxsIHRoaXMgb2JqZWN0IHRvIHN0b3AgbGlzdGVuaW5nIHRvIGVpdGhlciBzcGVjaWZpYyBldmVudHMgLi4uIG9yXG4gIC8vIHRvIGV2ZXJ5IG9iamVjdCBpdCdzIGN1cnJlbnRseSBsaXN0ZW5pbmcgdG8uXG4gIEV2ZW50cy5zdG9wTGlzdGVuaW5nID0gZnVuY3Rpb24ob2JqLCBuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBsaXN0ZW5pbmdUbyA9IHRoaXMuX2xpc3RlbmluZ1RvO1xuICAgIGlmICghbGlzdGVuaW5nVG8pIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGlkcyA9IG9iaiA/IFtvYmouX2xpc3RlbklkXSA6IF8ua2V5cyhsaXN0ZW5pbmdUbyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmluZyA9IGxpc3RlbmluZ1RvW2lkc1tpXV07XG5cbiAgICAgIC8vIElmIGxpc3RlbmluZyBkb2Vzbid0IGV4aXN0LCB0aGlzIG9iamVjdCBpcyBub3QgY3VycmVudGx5XG4gICAgICAvLyBsaXN0ZW5pbmcgdG8gb2JqLiBCcmVhayBvdXQgZWFybHkuXG4gICAgICBpZiAoIWxpc3RlbmluZykgYnJlYWs7XG5cbiAgICAgIGxpc3RlbmluZy5vYmoub2ZmKG5hbWUsIGNhbGxiYWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBUaGUgcmVkdWNpbmcgQVBJIHRoYXQgcmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gdGhlIGBldmVudHNgIG9iamVjdC5cbiAgdmFyIG9mZkFwaSA9IGZ1bmN0aW9uKGV2ZW50cywgbmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAoIWV2ZW50cykgcmV0dXJuO1xuXG4gICAgdmFyIGkgPSAwLCBsaXN0ZW5pbmc7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQsIGxpc3RlbmVycyA9IG9wdGlvbnMubGlzdGVuZXJzO1xuXG4gICAgLy8gRGVsZXRlIGFsbCBldmVudHMgbGlzdGVuZXJzIGFuZCBcImRyb3BcIiBldmVudHMuXG4gICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgdmFyIGlkcyA9IF8ua2V5cyhsaXN0ZW5lcnMpO1xuICAgICAgZm9yICg7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdGVuaW5nID0gbGlzdGVuZXJzW2lkc1tpXV07XG4gICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbbGlzdGVuaW5nLmlkXTtcbiAgICAgICAgZGVsZXRlIGxpc3RlbmluZy5saXN0ZW5pbmdUb1tsaXN0ZW5pbmcub2JqSWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lcyA9IG5hbWUgPyBbbmFtZV0gOiBfLmtleXMoZXZlbnRzKTtcbiAgICBmb3IgKDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICB2YXIgaGFuZGxlcnMgPSBldmVudHNbbmFtZV07XG5cbiAgICAgIC8vIEJhaWwgb3V0IGlmIHRoZXJlIGFyZSBubyBldmVudHMgc3RvcmVkLlxuICAgICAgaWYgKCFoYW5kbGVycykgYnJlYWs7XG5cbiAgICAgIC8vIFJlcGxhY2UgZXZlbnRzIGlmIHRoZXJlIGFyZSBhbnkgcmVtYWluaW5nLiAgT3RoZXJ3aXNlLCBjbGVhbiB1cC5cbiAgICAgIHZhciByZW1haW5pbmcgPSBbXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tqXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrICE9PSBoYW5kbGVyLmNhbGxiYWNrICYmXG4gICAgICAgICAgICBjYWxsYmFjayAhPT0gaGFuZGxlci5jYWxsYmFjay5fY2FsbGJhY2sgfHxcbiAgICAgICAgICAgICAgY29udGV4dCAmJiBjb250ZXh0ICE9PSBoYW5kbGVyLmNvbnRleHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVtYWluaW5nLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuaW5nID0gaGFuZGxlci5saXN0ZW5pbmc7XG4gICAgICAgICAgaWYgKGxpc3RlbmluZyAmJiAtLWxpc3RlbmluZy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1tsaXN0ZW5pbmcuaWRdO1xuICAgICAgICAgICAgZGVsZXRlIGxpc3RlbmluZy5saXN0ZW5pbmdUb1tsaXN0ZW5pbmcub2JqSWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgdGFpbCBldmVudCBpZiB0aGUgbGlzdCBoYXMgYW55IGV2ZW50cy4gIE90aGVyd2lzZSwgY2xlYW4gdXAuXG4gICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCkge1xuICAgICAgICBldmVudHNbbmFtZV0gPSByZW1haW5pbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgZXZlbnRzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzO1xuICB9O1xuXG4gIC8vIEJpbmQgYW4gZXZlbnQgdG8gb25seSBiZSB0cmlnZ2VyZWQgYSBzaW5nbGUgdGltZS4gQWZ0ZXIgdGhlIGZpcnN0IHRpbWVcbiAgLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQsIGl0cyBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQuIElmIG11bHRpcGxlIGV2ZW50c1xuICAvLyBhcmUgcGFzc2VkIGluIHVzaW5nIHRoZSBzcGFjZS1zZXBhcmF0ZWQgc3ludGF4LCB0aGUgaGFuZGxlciB3aWxsIGZpcmVcbiAgLy8gb25jZSBmb3IgZWFjaCBldmVudCwgbm90IG9uY2UgZm9yIGEgY29tYmluYXRpb24gb2YgYWxsIGV2ZW50cy5cbiAgRXZlbnRzLm9uY2UgPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIC8vIE1hcCB0aGUgZXZlbnQgaW50byBhIGB7ZXZlbnQ6IG9uY2V9YCBvYmplY3QuXG4gICAgdmFyIGV2ZW50cyA9IGV2ZW50c0FwaShvbmNlTWFwLCB7fSwgbmFtZSwgY2FsbGJhY2ssIF8uYmluZCh0aGlzLm9mZiwgdGhpcykpO1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgY29udGV4dCA9PSBudWxsKSBjYWxsYmFjayA9IHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudHMsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBJbnZlcnNpb24tb2YtY29udHJvbCB2ZXJzaW9ucyBvZiBgb25jZWAuXG4gIEV2ZW50cy5saXN0ZW5Ub09uY2UgPSBmdW5jdGlvbihvYmosIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgLy8gTWFwIHRoZSBldmVudCBpbnRvIGEgYHtldmVudDogb25jZX1gIG9iamVjdC5cbiAgICB2YXIgZXZlbnRzID0gZXZlbnRzQXBpKG9uY2VNYXAsIHt9LCBuYW1lLCBjYWxsYmFjaywgXy5iaW5kKHRoaXMuc3RvcExpc3RlbmluZywgdGhpcywgb2JqKSk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuVG8ob2JqLCBldmVudHMpO1xuICB9O1xuXG4gIC8vIFJlZHVjZXMgdGhlIGV2ZW50IGNhbGxiYWNrcyBpbnRvIGEgbWFwIG9mIGB7ZXZlbnQ6IG9uY2VXcmFwcGVyfWAuXG4gIC8vIGBvZmZlcmAgdW5iaW5kcyB0aGUgYG9uY2VXcmFwcGVyYCBhZnRlciBpdCBoYXMgYmVlbiBjYWxsZWQuXG4gIHZhciBvbmNlTWFwID0gZnVuY3Rpb24obWFwLCBuYW1lLCBjYWxsYmFjaywgb2ZmZXIpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBvbmNlID0gbWFwW25hbWVdID0gXy5vbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICBvZmZlcihuYW1lLCBvbmNlKTtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgICAgb25jZS5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcblxuICAvLyBUcmlnZ2VyIG9uZSBvciBtYW55IGV2ZW50cywgZmlyaW5nIGFsbCBib3VuZCBjYWxsYmFja3MuIENhbGxiYWNrcyBhcmVcbiAgLy8gcGFzc2VkIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyBgdHJpZ2dlcmAgaXMsIGFwYXJ0IGZyb20gdGhlIGV2ZW50IG5hbWVcbiAgLy8gKHVubGVzcyB5b3UncmUgbGlzdGVuaW5nIG9uIGBcImFsbFwiYCwgd2hpY2ggd2lsbCBjYXVzZSB5b3VyIGNhbGxiYWNrIHRvXG4gIC8vIHJlY2VpdmUgdGhlIHRydWUgbmFtZSBvZiB0aGUgZXZlbnQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50KS5cbiAgRXZlbnRzLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KDAsIGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG5cbiAgICBldmVudHNBcGkodHJpZ2dlckFwaSwgdGhpcy5fZXZlbnRzLCBuYW1lLCB2b2lkIDAsIGFyZ3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEhhbmRsZXMgdHJpZ2dlcmluZyB0aGUgYXBwcm9wcmlhdGUgZXZlbnQgY2FsbGJhY2tzLlxuICB2YXIgdHJpZ2dlckFwaSA9IGZ1bmN0aW9uKG9iakV2ZW50cywgbmFtZSwgY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICBpZiAob2JqRXZlbnRzKSB7XG4gICAgICB2YXIgZXZlbnRzID0gb2JqRXZlbnRzW25hbWVdO1xuICAgICAgdmFyIGFsbEV2ZW50cyA9IG9iakV2ZW50cy5hbGw7XG4gICAgICBpZiAoZXZlbnRzICYmIGFsbEV2ZW50cykgYWxsRXZlbnRzID0gYWxsRXZlbnRzLnNsaWNlKCk7XG4gICAgICBpZiAoZXZlbnRzKSB0cmlnZ2VyRXZlbnRzKGV2ZW50cywgYXJncyk7XG4gICAgICBpZiAoYWxsRXZlbnRzKSB0cmlnZ2VyRXZlbnRzKGFsbEV2ZW50cywgW25hbWVdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmpFdmVudHM7XG4gIH07XG5cbiAgLy8gQSBkaWZmaWN1bHQtdG8tYmVsaWV2ZSwgYnV0IG9wdGltaXplZCBpbnRlcm5hbCBkaXNwYXRjaCBmdW5jdGlvbiBmb3JcbiAgLy8gdHJpZ2dlcmluZyBldmVudHMuIFRyaWVzIHRvIGtlZXAgdGhlIHVzdWFsIGNhc2VzIHNwZWVkeSAobW9zdCBpbnRlcm5hbFxuICAvLyBCYWNrYm9uZSBldmVudHMgaGF2ZSAzIGFyZ3VtZW50cykuXG4gIHZhciB0cmlnZ2VyRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzLCBhcmdzKSB7XG4gICAgdmFyIGV2LCBpID0gLTEsIGwgPSBldmVudHMubGVuZ3RoLCBhMSA9IGFyZ3NbMF0sIGEyID0gYXJnc1sxXSwgYTMgPSBhcmdzWzJdO1xuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogd2hpbGUgKCsraSA8IGwpIChldiA9IGV2ZW50c1tpXSkuY2FsbGJhY2suY2FsbChldi5jdHgpOyByZXR1cm47XG4gICAgICBjYXNlIDE6IHdoaWxlICgrK2kgPCBsKSAoZXYgPSBldmVudHNbaV0pLmNhbGxiYWNrLmNhbGwoZXYuY3R4LCBhMSk7IHJldHVybjtcbiAgICAgIGNhc2UgMjogd2hpbGUgKCsraSA8IGwpIChldiA9IGV2ZW50c1tpXSkuY2FsbGJhY2suY2FsbChldi5jdHgsIGExLCBhMik7IHJldHVybjtcbiAgICAgIGNhc2UgMzogd2hpbGUgKCsraSA8IGwpIChldiA9IGV2ZW50c1tpXSkuY2FsbGJhY2suY2FsbChldi5jdHgsIGExLCBhMiwgYTMpOyByZXR1cm47XG4gICAgICBkZWZhdWx0OiB3aGlsZSAoKytpIDwgbCkgKGV2ID0gZXZlbnRzW2ldKS5jYWxsYmFjay5hcHBseShldi5jdHgsIGFyZ3MpOyByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIC8vIEFsaWFzZXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBFdmVudHMuYmluZCAgID0gRXZlbnRzLm9uO1xuICBFdmVudHMudW5iaW5kID0gRXZlbnRzLm9mZjtcblxuICAvLyBBbGxvdyB0aGUgYEJhY2tib25lYCBvYmplY3QgdG8gc2VydmUgYXMgYSBnbG9iYWwgZXZlbnQgYnVzLCBmb3IgZm9sa3Mgd2hvXG4gIC8vIHdhbnQgZ2xvYmFsIFwicHVic3ViXCIgaW4gYSBjb252ZW5pZW50IHBsYWNlLlxuICBfLmV4dGVuZChCYWNrYm9uZSwgRXZlbnRzKTtcblxuICAvLyBCYWNrYm9uZS5Nb2RlbFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEJhY2tib25lICoqTW9kZWxzKiogYXJlIHRoZSBiYXNpYyBkYXRhIG9iamVjdCBpbiB0aGUgZnJhbWV3b3JrIC0tXG4gIC8vIGZyZXF1ZW50bHkgcmVwcmVzZW50aW5nIGEgcm93IGluIGEgdGFibGUgaW4gYSBkYXRhYmFzZSBvbiB5b3VyIHNlcnZlci5cbiAgLy8gQSBkaXNjcmV0ZSBjaHVuayBvZiBkYXRhIGFuZCBhIGJ1bmNoIG9mIHVzZWZ1bCwgcmVsYXRlZCBtZXRob2RzIGZvclxuICAvLyBwZXJmb3JtaW5nIGNvbXB1dGF0aW9ucyBhbmQgdHJhbnNmb3JtYXRpb25zIG9uIHRoYXQgZGF0YS5cblxuICAvLyBDcmVhdGUgYSBuZXcgbW9kZWwgd2l0aCB0aGUgc3BlY2lmaWVkIGF0dHJpYnV0ZXMuIEEgY2xpZW50IGlkIChgY2lkYClcbiAgLy8gaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYW5kIGFzc2lnbmVkIGZvciB5b3UuXG4gIHZhciBNb2RlbCA9IEJhY2tib25lLk1vZGVsID0gZnVuY3Rpb24oYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgIHZhciBhdHRycyA9IGF0dHJpYnV0ZXMgfHwge307XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICB0aGlzLmNpZCA9IF8udW5pcXVlSWQodGhpcy5jaWRQcmVmaXgpO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIGlmIChvcHRpb25zLmNvbGxlY3Rpb24pIHRoaXMuY29sbGVjdGlvbiA9IG9wdGlvbnMuY29sbGVjdGlvbjtcbiAgICBpZiAob3B0aW9ucy5wYXJzZSkgYXR0cnMgPSB0aGlzLnBhcnNlKGF0dHJzLCBvcHRpb25zKSB8fCB7fTtcbiAgICB2YXIgZGVmYXVsdHMgPSBfLnJlc3VsdCh0aGlzLCAnZGVmYXVsdHMnKTtcbiAgICBhdHRycyA9IF8uZGVmYXVsdHMoXy5leHRlbmQoe30sIGRlZmF1bHRzLCBhdHRycyksIGRlZmF1bHRzKTtcbiAgICB0aGlzLnNldChhdHRycywgb3B0aW9ucyk7XG4gICAgdGhpcy5jaGFuZ2VkID0ge307XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQXR0YWNoIGFsbCBpbmhlcml0YWJsZSBtZXRob2RzIHRvIHRoZSBNb2RlbCBwcm90b3R5cGUuXG4gIF8uZXh0ZW5kKE1vZGVsLnByb3RvdHlwZSwgRXZlbnRzLCB7XG5cbiAgICAvLyBBIGhhc2ggb2YgYXR0cmlidXRlcyB3aG9zZSBjdXJyZW50IGFuZCBwcmV2aW91cyB2YWx1ZSBkaWZmZXIuXG4gICAgY2hhbmdlZDogbnVsbCxcblxuICAgIC8vIFRoZSB2YWx1ZSByZXR1cm5lZCBkdXJpbmcgdGhlIGxhc3QgZmFpbGVkIHZhbGlkYXRpb24uXG4gICAgdmFsaWRhdGlvbkVycm9yOiBudWxsLFxuXG4gICAgLy8gVGhlIGRlZmF1bHQgbmFtZSBmb3IgdGhlIEpTT04gYGlkYCBhdHRyaWJ1dGUgaXMgYFwiaWRcImAuIE1vbmdvREIgYW5kXG4gICAgLy8gQ291Y2hEQiB1c2VycyBtYXkgd2FudCB0byBzZXQgdGhpcyB0byBgXCJfaWRcImAuXG4gICAgaWRBdHRyaWJ1dGU6ICdpZCcsXG5cbiAgICAvLyBUaGUgcHJlZml4IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBjbGllbnQgaWQgd2hpY2ggaXMgdXNlZCB0byBpZGVudGlmeSBtb2RlbHMgbG9jYWxseS5cbiAgICAvLyBZb3UgbWF5IHdhbnQgdG8gb3ZlcnJpZGUgdGhpcyBpZiB5b3UncmUgZXhwZXJpZW5jaW5nIG5hbWUgY2xhc2hlcyB3aXRoIG1vZGVsIGlkcy5cbiAgICBjaWRQcmVmaXg6ICdjJyxcblxuICAgIC8vIEluaXRpYWxpemUgaXMgYW4gZW1wdHkgZnVuY3Rpb24gYnkgZGVmYXVsdC4gT3ZlcnJpZGUgaXQgd2l0aCB5b3VyIG93blxuICAgIC8vIGluaXRpYWxpemF0aW9uIGxvZ2ljLlxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7fSxcblxuICAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG1vZGVsJ3MgYGF0dHJpYnV0ZXNgIG9iamVjdC5cbiAgICB0b0pTT046IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBfLmNsb25lKHRoaXMuYXR0cmlidXRlcyk7XG4gICAgfSxcblxuICAgIC8vIFByb3h5IGBCYWNrYm9uZS5zeW5jYCBieSBkZWZhdWx0IC0tIGJ1dCBvdmVycmlkZSB0aGlzIGlmIHlvdSBuZWVkXG4gICAgLy8gY3VzdG9tIHN5bmNpbmcgc2VtYW50aWNzIGZvciAqdGhpcyogcGFydGljdWxhciBtb2RlbC5cbiAgICBzeW5jOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS5zeW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlLlxuICAgIGdldDogZnVuY3Rpb24oYXR0cikge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1thdHRyXTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBIVE1MLWVzY2FwZWQgdmFsdWUgb2YgYW4gYXR0cmlidXRlLlxuICAgIGVzY2FwZTogZnVuY3Rpb24oYXR0cikge1xuICAgICAgcmV0dXJuIF8uZXNjYXBlKHRoaXMuZ2V0KGF0dHIpKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGF0dHJpYnV0ZSBjb250YWlucyBhIHZhbHVlIHRoYXQgaXMgbm90IG51bGxcbiAgICAvLyBvciB1bmRlZmluZWQuXG4gICAgaGFzOiBmdW5jdGlvbihhdHRyKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoYXR0cikgIT0gbnVsbDtcbiAgICB9LFxuXG4gICAgLy8gU3BlY2lhbC1jYXNlZCBwcm94eSB0byB1bmRlcnNjb3JlJ3MgYF8ubWF0Y2hlc2AgbWV0aG9kLlxuICAgIG1hdGNoZXM6IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgICByZXR1cm4gISFfLml0ZXJhdGVlKGF0dHJzLCB0aGlzKSh0aGlzLmF0dHJpYnV0ZXMpO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgYSBoYXNoIG9mIG1vZGVsIGF0dHJpYnV0ZXMgb24gdGhlIG9iamVjdCwgZmlyaW5nIGBcImNoYW5nZVwiYC4gVGhpcyBpc1xuICAgIC8vIHRoZSBjb3JlIHByaW1pdGl2ZSBvcGVyYXRpb24gb2YgYSBtb2RlbCwgdXBkYXRpbmcgdGhlIGRhdGEgYW5kIG5vdGlmeWluZ1xuICAgIC8vIGFueW9uZSB3aG8gbmVlZHMgdG8ga25vdyBhYm91dCB0aGUgY2hhbmdlIGluIHN0YXRlLiBUaGUgaGVhcnQgb2YgdGhlIGJlYXN0LlxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWwsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIEhhbmRsZSBib3RoIGBcImtleVwiLCB2YWx1ZWAgYW5kIGB7a2V5OiB2YWx1ZX1gIC1zdHlsZSBhcmd1bWVudHMuXG4gICAgICB2YXIgYXR0cnM7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYXR0cnMgPSBrZXk7XG4gICAgICAgIG9wdGlvbnMgPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoYXR0cnMgPSB7fSlba2V5XSA9IHZhbDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcblxuICAgICAgLy8gUnVuIHZhbGlkYXRpb24uXG4gICAgICBpZiAoIXRoaXMuX3ZhbGlkYXRlKGF0dHJzLCBvcHRpb25zKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBFeHRyYWN0IGF0dHJpYnV0ZXMgYW5kIG9wdGlvbnMuXG4gICAgICB2YXIgdW5zZXQgICAgICA9IG9wdGlvbnMudW5zZXQ7XG4gICAgICB2YXIgc2lsZW50ICAgICA9IG9wdGlvbnMuc2lsZW50O1xuICAgICAgdmFyIGNoYW5nZXMgICAgPSBbXTtcbiAgICAgIHZhciBjaGFuZ2luZyAgID0gdGhpcy5fY2hhbmdpbmc7XG4gICAgICB0aGlzLl9jaGFuZ2luZyA9IHRydWU7XG5cbiAgICAgIGlmICghY2hhbmdpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzID0gXy5jbG9uZSh0aGlzLmF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmF0dHJpYnV0ZXM7XG4gICAgICB2YXIgY2hhbmdlZCA9IHRoaXMuY2hhbmdlZDtcbiAgICAgIHZhciBwcmV2ICAgID0gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzO1xuXG4gICAgICAvLyBGb3IgZWFjaCBgc2V0YCBhdHRyaWJ1dGUsIHVwZGF0ZSBvciBkZWxldGUgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgICAgIHZhbCA9IGF0dHJzW2F0dHJdO1xuICAgICAgICBpZiAoIV8uaXNFcXVhbChjdXJyZW50W2F0dHJdLCB2YWwpKSBjaGFuZ2VzLnB1c2goYXR0cik7XG4gICAgICAgIGlmICghXy5pc0VxdWFsKHByZXZbYXR0cl0sIHZhbCkpIHtcbiAgICAgICAgICBjaGFuZ2VkW2F0dHJdID0gdmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBjaGFuZ2VkW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHVuc2V0ID8gZGVsZXRlIGN1cnJlbnRbYXR0cl0gOiBjdXJyZW50W2F0dHJdID0gdmFsO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgdGhlIGBpZGAuXG4gICAgICBpZiAodGhpcy5pZEF0dHJpYnV0ZSBpbiBhdHRycykgdGhpcy5pZCA9IHRoaXMuZ2V0KHRoaXMuaWRBdHRyaWJ1dGUpO1xuXG4gICAgICAvLyBUcmlnZ2VyIGFsbCByZWxldmFudCBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmxlbmd0aCkgdGhpcy5fcGVuZGluZyA9IG9wdGlvbnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlOicgKyBjaGFuZ2VzW2ldLCB0aGlzLCBjdXJyZW50W2NoYW5nZXNbaV1dLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBZb3UgbWlnaHQgYmUgd29uZGVyaW5nIHdoeSB0aGVyZSdzIGEgYHdoaWxlYCBsb29wIGhlcmUuIENoYW5nZXMgY2FuXG4gICAgICAvLyBiZSByZWN1cnNpdmVseSBuZXN0ZWQgd2l0aGluIGBcImNoYW5nZVwiYCBldmVudHMuXG4gICAgICBpZiAoY2hhbmdpbmcpIHJldHVybiB0aGlzO1xuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX3BlbmRpbmcpIHtcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5fcGVuZGluZztcbiAgICAgICAgICB0aGlzLl9wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fcGVuZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgYW4gYXR0cmlidXRlIGZyb20gdGhlIG1vZGVsLCBmaXJpbmcgYFwiY2hhbmdlXCJgLiBgdW5zZXRgIGlzIGEgbm9vcFxuICAgIC8vIGlmIHRoZSBhdHRyaWJ1dGUgZG9lc24ndCBleGlzdC5cbiAgICB1bnNldDogZnVuY3Rpb24oYXR0ciwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGF0dHIsIHZvaWQgMCwgXy5leHRlbmQoe30sIG9wdGlvbnMsIHt1bnNldDogdHJ1ZX0pKTtcbiAgICB9LFxuXG4gICAgLy8gQ2xlYXIgYWxsIGF0dHJpYnV0ZXMgb24gdGhlIG1vZGVsLCBmaXJpbmcgYFwiY2hhbmdlXCJgLlxuICAgIGNsZWFyOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgYXR0cnMgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmF0dHJpYnV0ZXMpIGF0dHJzW2tleV0gPSB2b2lkIDA7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXR0cnMsIF8uZXh0ZW5kKHt9LCBvcHRpb25zLCB7dW5zZXQ6IHRydWV9KSk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiB0aGUgbW9kZWwgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYFwiY2hhbmdlXCJgIGV2ZW50LlxuICAgIC8vIElmIHlvdSBzcGVjaWZ5IGFuIGF0dHJpYnV0ZSBuYW1lLCBkZXRlcm1pbmUgaWYgdGhhdCBhdHRyaWJ1dGUgaGFzIGNoYW5nZWQuXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKGF0dHIgPT0gbnVsbCkgcmV0dXJuICFfLmlzRW1wdHkodGhpcy5jaGFuZ2VkKTtcbiAgICAgIHJldHVybiBfLmhhcyh0aGlzLmNoYW5nZWQsIGF0dHIpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBhdHRyaWJ1dGVzIHRoYXQgaGF2ZSBjaGFuZ2VkLCBvclxuICAgIC8vIGZhbHNlIGlmIHRoZXJlIGFyZSBubyBjaGFuZ2VkIGF0dHJpYnV0ZXMuIFVzZWZ1bCBmb3IgZGV0ZXJtaW5pbmcgd2hhdFxuICAgIC8vIHBhcnRzIG9mIGEgdmlldyBuZWVkIHRvIGJlIHVwZGF0ZWQgYW5kL29yIHdoYXQgYXR0cmlidXRlcyBuZWVkIHRvIGJlXG4gICAgLy8gcGVyc2lzdGVkIHRvIHRoZSBzZXJ2ZXIuIFVuc2V0IGF0dHJpYnV0ZXMgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICAgIC8vIFlvdSBjYW4gYWxzbyBwYXNzIGFuIGF0dHJpYnV0ZXMgb2JqZWN0IHRvIGRpZmYgYWdhaW5zdCB0aGUgbW9kZWwsXG4gICAgLy8gZGV0ZXJtaW5pbmcgaWYgdGhlcmUgKndvdWxkIGJlKiBhIGNoYW5nZS5cbiAgICBjaGFuZ2VkQXR0cmlidXRlczogZnVuY3Rpb24oZGlmZikge1xuICAgICAgaWYgKCFkaWZmKSByZXR1cm4gdGhpcy5oYXNDaGFuZ2VkKCkgPyBfLmNsb25lKHRoaXMuY2hhbmdlZCkgOiBmYWxzZTtcbiAgICAgIHZhciBvbGQgPSB0aGlzLl9jaGFuZ2luZyA/IHRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcyA6IHRoaXMuYXR0cmlidXRlcztcbiAgICAgIHZhciBjaGFuZ2VkID0ge307XG4gICAgICBmb3IgKHZhciBhdHRyIGluIGRpZmYpIHtcbiAgICAgICAgdmFyIHZhbCA9IGRpZmZbYXR0cl07XG4gICAgICAgIGlmIChfLmlzRXF1YWwob2xkW2F0dHJdLCB2YWwpKSBjb250aW51ZTtcbiAgICAgICAgY2hhbmdlZFthdHRyXSA9IHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfLnNpemUoY2hhbmdlZCkgPyBjaGFuZ2VkIDogZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgcHJldmlvdXMgdmFsdWUgb2YgYW4gYXR0cmlidXRlLCByZWNvcmRlZCBhdCB0aGUgdGltZSB0aGUgbGFzdFxuICAgIC8vIGBcImNoYW5nZVwiYCBldmVudCB3YXMgZmlyZWQuXG4gICAgcHJldmlvdXM6IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmIChhdHRyID09IG51bGwgfHwgIXRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcykgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNBdHRyaWJ1dGVzW2F0dHJdO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgYWxsIG9mIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBtb2RlbCBhdCB0aGUgdGltZSBvZiB0aGUgcHJldmlvdXNcbiAgICAvLyBgXCJjaGFuZ2VcImAgZXZlbnQuXG4gICAgcHJldmlvdXNBdHRyaWJ1dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfLmNsb25lKHRoaXMuX3ByZXZpb3VzQXR0cmlidXRlcyk7XG4gICAgfSxcblxuICAgIC8vIEZldGNoIHRoZSBtb2RlbCBmcm9tIHRoZSBzZXJ2ZXIsIG1lcmdpbmcgdGhlIHJlc3BvbnNlIHdpdGggdGhlIG1vZGVsJ3NcbiAgICAvLyBsb2NhbCBhdHRyaWJ1dGVzLiBBbnkgY2hhbmdlZCBhdHRyaWJ1dGVzIHdpbGwgdHJpZ2dlciBhIFwiY2hhbmdlXCIgZXZlbnQuXG4gICAgZmV0Y2g6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBfLmV4dGVuZCh7cGFyc2U6IHRydWV9LCBvcHRpb25zKTtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXM7XG4gICAgICB2YXIgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcbiAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgdmFyIHNlcnZlckF0dHJzID0gb3B0aW9ucy5wYXJzZSA/IG1vZGVsLnBhcnNlKHJlc3AsIG9wdGlvbnMpIDogcmVzcDtcbiAgICAgICAgaWYgKCFtb2RlbC5zZXQoc2VydmVyQXR0cnMsIG9wdGlvbnMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzLmNhbGwob3B0aW9ucy5jb250ZXh0LCBtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICAgIG1vZGVsLnRyaWdnZXIoJ3N5bmMnLCBtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgICAgd3JhcEVycm9yKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuc3luYygncmVhZCcsIHRoaXMsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvLyBTZXQgYSBoYXNoIG9mIG1vZGVsIGF0dHJpYnV0ZXMsIGFuZCBzeW5jIHRoZSBtb2RlbCB0byB0aGUgc2VydmVyLlxuICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBhdHRyaWJ1dGVzIGhhc2ggdGhhdCBkaWZmZXJzLCB0aGUgbW9kZWwnc1xuICAgIC8vIHN0YXRlIHdpbGwgYmUgYHNldGAgYWdhaW4uXG4gICAgc2F2ZTogZnVuY3Rpb24oa2V5LCB2YWwsIG9wdGlvbnMpIHtcbiAgICAgIC8vIEhhbmRsZSBib3RoIGBcImtleVwiLCB2YWx1ZWAgYW5kIGB7a2V5OiB2YWx1ZX1gIC1zdHlsZSBhcmd1bWVudHMuXG4gICAgICB2YXIgYXR0cnM7XG4gICAgICBpZiAoa2V5ID09IG51bGwgfHwgdHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYXR0cnMgPSBrZXk7XG4gICAgICAgIG9wdGlvbnMgPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoYXR0cnMgPSB7fSlba2V5XSA9IHZhbDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucyA9IF8uZXh0ZW5kKHt2YWxpZGF0ZTogdHJ1ZSwgcGFyc2U6IHRydWV9LCBvcHRpb25zKTtcbiAgICAgIHZhciB3YWl0ID0gb3B0aW9ucy53YWl0O1xuXG4gICAgICAvLyBJZiB3ZSdyZSBub3Qgd2FpdGluZyBhbmQgYXR0cmlidXRlcyBleGlzdCwgc2F2ZSBhY3RzIGFzXG4gICAgICAvLyBgc2V0KGF0dHIpLnNhdmUobnVsbCwgb3B0cylgIHdpdGggdmFsaWRhdGlvbi4gT3RoZXJ3aXNlLCBjaGVjayBpZlxuICAgICAgLy8gdGhlIG1vZGVsIHdpbGwgYmUgdmFsaWQgd2hlbiB0aGUgYXR0cmlidXRlcywgaWYgYW55LCBhcmUgc2V0LlxuICAgICAgaWYgKGF0dHJzICYmICF3YWl0KSB7XG4gICAgICAgIGlmICghdGhpcy5zZXQoYXR0cnMsIG9wdGlvbnMpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl92YWxpZGF0ZShhdHRycywgb3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBBZnRlciBhIHN1Y2Nlc3NmdWwgc2VydmVyLXNpZGUgc2F2ZSwgdGhlIGNsaWVudCBpcyAob3B0aW9uYWxseSlcbiAgICAgIC8vIHVwZGF0ZWQgd2l0aCB0aGUgc2VydmVyLXNpZGUgc3RhdGUuXG4gICAgICB2YXIgbW9kZWwgPSB0aGlzO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3M7XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlcztcbiAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgLy8gRW5zdXJlIGF0dHJpYnV0ZXMgYXJlIHJlc3RvcmVkIGR1cmluZyBzeW5jaHJvbm91cyBzYXZlcy5cbiAgICAgICAgbW9kZWwuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHZhciBzZXJ2ZXJBdHRycyA9IG9wdGlvbnMucGFyc2UgPyBtb2RlbC5wYXJzZShyZXNwLCBvcHRpb25zKSA6IHJlc3A7XG4gICAgICAgIGlmICh3YWl0KSBzZXJ2ZXJBdHRycyA9IF8uZXh0ZW5kKHt9LCBhdHRycywgc2VydmVyQXR0cnMpO1xuICAgICAgICBpZiAoc2VydmVyQXR0cnMgJiYgIW1vZGVsLnNldChzZXJ2ZXJBdHRycywgb3B0aW9ucykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHN1Y2Nlc3MuY2FsbChvcHRpb25zLmNvbnRleHQsIG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgICAgbW9kZWwudHJpZ2dlcignc3luYycsIG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgICB3cmFwRXJyb3IodGhpcywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFNldCB0ZW1wb3JhcnkgYXR0cmlidXRlcyBpZiBge3dhaXQ6IHRydWV9YCB0byBwcm9wZXJseSBmaW5kIG5ldyBpZHMuXG4gICAgICBpZiAoYXR0cnMgJiYgd2FpdCkgdGhpcy5hdHRyaWJ1dGVzID0gXy5leHRlbmQoe30sIGF0dHJpYnV0ZXMsIGF0dHJzKTtcblxuICAgICAgdmFyIG1ldGhvZCA9IHRoaXMuaXNOZXcoKSA/ICdjcmVhdGUnIDogKG9wdGlvbnMucGF0Y2ggPyAncGF0Y2gnIDogJ3VwZGF0ZScpO1xuICAgICAgaWYgKG1ldGhvZCA9PT0gJ3BhdGNoJyAmJiAhb3B0aW9ucy5hdHRycykgb3B0aW9ucy5hdHRycyA9IGF0dHJzO1xuICAgICAgdmFyIHhociA9IHRoaXMuc3luYyhtZXRob2QsIHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBSZXN0b3JlIGF0dHJpYnV0ZXMuXG4gICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gICAgICByZXR1cm4geGhyO1xuICAgIH0sXG5cbiAgICAvLyBEZXN0cm95IHRoaXMgbW9kZWwgb24gdGhlIHNlcnZlciBpZiBpdCB3YXMgYWxyZWFkeSBwZXJzaXN0ZWQuXG4gICAgLy8gT3B0aW1pc3RpY2FsbHkgcmVtb3ZlcyB0aGUgbW9kZWwgZnJvbSBpdHMgY29sbGVjdGlvbiwgaWYgaXQgaGFzIG9uZS5cbiAgICAvLyBJZiBgd2FpdDogdHJ1ZWAgaXMgcGFzc2VkLCB3YWl0cyBmb3IgdGhlIHNlcnZlciB0byByZXNwb25kIGJlZm9yZSByZW1vdmFsLlxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zID8gXy5jbG9uZShvcHRpb25zKSA6IHt9O1xuICAgICAgdmFyIG1vZGVsID0gdGhpcztcbiAgICAgIHZhciBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuICAgICAgdmFyIHdhaXQgPSBvcHRpb25zLndhaXQ7XG5cbiAgICAgIHZhciBkZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGVsLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICAgICAgbW9kZWwudHJpZ2dlcignZGVzdHJveScsIG1vZGVsLCBtb2RlbC5jb2xsZWN0aW9uLCBvcHRpb25zKTtcbiAgICAgIH07XG5cbiAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgaWYgKHdhaXQpIGRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHN1Y2Nlc3MuY2FsbChvcHRpb25zLmNvbnRleHQsIG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKCFtb2RlbC5pc05ldygpKSBtb2RlbC50cmlnZ2VyKCdzeW5jJywgbW9kZWwsIHJlc3AsIG9wdGlvbnMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIHhociA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuaXNOZXcoKSkge1xuICAgICAgICBfLmRlZmVyKG9wdGlvbnMuc3VjY2Vzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwRXJyb3IodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHhociA9IHRoaXMuc3luYygnZGVsZXRlJywgdGhpcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBpZiAoIXdhaXQpIGRlc3Ryb3koKTtcbiAgICAgIHJldHVybiB4aHI7XG4gICAgfSxcblxuICAgIC8vIERlZmF1bHQgVVJMIGZvciB0aGUgbW9kZWwncyByZXByZXNlbnRhdGlvbiBvbiB0aGUgc2VydmVyIC0tIGlmIHlvdSdyZVxuICAgIC8vIHVzaW5nIEJhY2tib25lJ3MgcmVzdGZ1bCBtZXRob2RzLCBvdmVycmlkZSB0aGlzIHRvIGNoYW5nZSB0aGUgZW5kcG9pbnRcbiAgICAvLyB0aGF0IHdpbGwgYmUgY2FsbGVkLlxuICAgIHVybDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmFzZSA9XG4gICAgICAgIF8ucmVzdWx0KHRoaXMsICd1cmxSb290JykgfHxcbiAgICAgICAgXy5yZXN1bHQodGhpcy5jb2xsZWN0aW9uLCAndXJsJykgfHxcbiAgICAgICAgdXJsRXJyb3IoKTtcbiAgICAgIGlmICh0aGlzLmlzTmV3KCkpIHJldHVybiBiYXNlO1xuICAgICAgdmFyIGlkID0gdGhpcy5nZXQodGhpcy5pZEF0dHJpYnV0ZSk7XG4gICAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9bXlxcL10kLywgJyQmLycpICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkKTtcbiAgICB9LFxuXG4gICAgLy8gKipwYXJzZSoqIGNvbnZlcnRzIGEgcmVzcG9uc2UgaW50byB0aGUgaGFzaCBvZiBhdHRyaWJ1dGVzIHRvIGJlIGBzZXRgIG9uXG4gICAgLy8gdGhlIG1vZGVsLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBpcyBqdXN0IHRvIHBhc3MgdGhlIHJlc3BvbnNlIGFsb25nLlxuICAgIHBhcnNlOiBmdW5jdGlvbihyZXNwLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gcmVzcDtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IG1vZGVsIHdpdGggaWRlbnRpY2FsIGF0dHJpYnV0ZXMgdG8gdGhpcyBvbmUuXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuYXR0cmlidXRlcyk7XG4gICAgfSxcblxuICAgIC8vIEEgbW9kZWwgaXMgbmV3IGlmIGl0IGhhcyBuZXZlciBiZWVuIHNhdmVkIHRvIHRoZSBzZXJ2ZXIsIGFuZCBsYWNrcyBhbiBpZC5cbiAgICBpc05ldzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzKHRoaXMuaWRBdHRyaWJ1dGUpO1xuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbW9kZWwgaXMgY3VycmVudGx5IGluIGEgdmFsaWQgc3RhdGUuXG4gICAgaXNWYWxpZDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKHt9LCBfLmV4dGVuZCh7fSwgb3B0aW9ucywge3ZhbGlkYXRlOiB0cnVlfSkpO1xuICAgIH0sXG5cbiAgICAvLyBSdW4gdmFsaWRhdGlvbiBhZ2FpbnN0IHRoZSBuZXh0IGNvbXBsZXRlIHNldCBvZiBtb2RlbCBhdHRyaWJ1dGVzLFxuICAgIC8vIHJldHVybmluZyBgdHJ1ZWAgaWYgYWxsIGlzIHdlbGwuIE90aGVyd2lzZSwgZmlyZSBhbiBgXCJpbnZhbGlkXCJgIGV2ZW50LlxuICAgIF92YWxpZGF0ZTogZnVuY3Rpb24oYXR0cnMsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghb3B0aW9ucy52YWxpZGF0ZSB8fCAhdGhpcy52YWxpZGF0ZSkgcmV0dXJuIHRydWU7XG4gICAgICBhdHRycyA9IF8uZXh0ZW5kKHt9LCB0aGlzLmF0dHJpYnV0ZXMsIGF0dHJzKTtcbiAgICAgIHZhciBlcnJvciA9IHRoaXMudmFsaWRhdGlvbkVycm9yID0gdGhpcy52YWxpZGF0ZShhdHRycywgb3B0aW9ucykgfHwgbnVsbDtcbiAgICAgIGlmICghZXJyb3IpIHJldHVybiB0cnVlO1xuICAgICAgdGhpcy50cmlnZ2VyKCdpbnZhbGlkJywgdGhpcywgZXJyb3IsIF8uZXh0ZW5kKG9wdGlvbnMsIHt2YWxpZGF0aW9uRXJyb3I6IGVycm9yfSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBVbmRlcnNjb3JlIG1ldGhvZHMgdGhhdCB3ZSB3YW50IHRvIGltcGxlbWVudCBvbiB0aGUgTW9kZWwsIG1hcHBlZCB0byB0aGVcbiAgLy8gbnVtYmVyIG9mIGFyZ3VtZW50cyB0aGV5IHRha2UuXG4gIHZhciBtb2RlbE1ldGhvZHMgPSB7a2V5czogMSwgdmFsdWVzOiAxLCBwYWlyczogMSwgaW52ZXJ0OiAxLCBwaWNrOiAwLFxuICAgICAgb21pdDogMCwgY2hhaW46IDEsIGlzRW1wdHk6IDF9O1xuXG4gIC8vIE1peCBpbiBlYWNoIFVuZGVyc2NvcmUgbWV0aG9kIGFzIGEgcHJveHkgdG8gYE1vZGVsI2F0dHJpYnV0ZXNgLlxuICBhZGRVbmRlcnNjb3JlTWV0aG9kcyhNb2RlbCwgbW9kZWxNZXRob2RzLCAnYXR0cmlidXRlcycpO1xuXG4gIC8vIEJhY2tib25lLkNvbGxlY3Rpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIElmIG1vZGVscyB0ZW5kIHRvIHJlcHJlc2VudCBhIHNpbmdsZSByb3cgb2YgZGF0YSwgYSBCYWNrYm9uZSBDb2xsZWN0aW9uIGlzXG4gIC8vIG1vcmUgYW5hbG9nb3VzIHRvIGEgdGFibGUgZnVsbCBvZiBkYXRhIC4uLiBvciBhIHNtYWxsIHNsaWNlIG9yIHBhZ2Ugb2YgdGhhdFxuICAvLyB0YWJsZSwgb3IgYSBjb2xsZWN0aW9uIG9mIHJvd3MgdGhhdCBiZWxvbmcgdG9nZXRoZXIgZm9yIGEgcGFydGljdWxhciByZWFzb25cbiAgLy8gLS0gYWxsIG9mIHRoZSBtZXNzYWdlcyBpbiB0aGlzIHBhcnRpY3VsYXIgZm9sZGVyLCBhbGwgb2YgdGhlIGRvY3VtZW50c1xuICAvLyBiZWxvbmdpbmcgdG8gdGhpcyBwYXJ0aWN1bGFyIGF1dGhvciwgYW5kIHNvIG9uLiBDb2xsZWN0aW9ucyBtYWludGFpblxuICAvLyBpbmRleGVzIG9mIHRoZWlyIG1vZGVscywgYm90aCBpbiBvcmRlciwgYW5kIGZvciBsb29rdXAgYnkgYGlkYC5cblxuICAvLyBDcmVhdGUgYSBuZXcgKipDb2xsZWN0aW9uKiosIHBlcmhhcHMgdG8gY29udGFpbiBhIHNwZWNpZmljIHR5cGUgb2YgYG1vZGVsYC5cbiAgLy8gSWYgYSBgY29tcGFyYXRvcmAgaXMgc3BlY2lmaWVkLCB0aGUgQ29sbGVjdGlvbiB3aWxsIG1haW50YWluXG4gIC8vIGl0cyBtb2RlbHMgaW4gc29ydCBvcmRlciwgYXMgdGhleSdyZSBhZGRlZCBhbmQgcmVtb3ZlZC5cbiAgdmFyIENvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uID0gZnVuY3Rpb24obW9kZWxzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICBpZiAob3B0aW9ucy5tb2RlbCkgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyYXRvciAhPT0gdm9pZCAwKSB0aGlzLmNvbXBhcmF0b3IgPSBvcHRpb25zLmNvbXBhcmF0b3I7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAobW9kZWxzKSB0aGlzLnJlc2V0KG1vZGVscywgXy5leHRlbmQoe3NpbGVudDogdHJ1ZX0sIG9wdGlvbnMpKTtcbiAgfTtcblxuICAvLyBEZWZhdWx0IG9wdGlvbnMgZm9yIGBDb2xsZWN0aW9uI3NldGAuXG4gIHZhciBzZXRPcHRpb25zID0ge2FkZDogdHJ1ZSwgcmVtb3ZlOiB0cnVlLCBtZXJnZTogdHJ1ZX07XG4gIHZhciBhZGRPcHRpb25zID0ge2FkZDogdHJ1ZSwgcmVtb3ZlOiBmYWxzZX07XG5cbiAgLy8gU3BsaWNlcyBgaW5zZXJ0YCBpbnRvIGBhcnJheWAgYXQgaW5kZXggYGF0YC5cbiAgdmFyIHNwbGljZSA9IGZ1bmN0aW9uKGFycmF5LCBpbnNlcnQsIGF0KSB7XG4gICAgYXQgPSBNYXRoLm1pbihNYXRoLm1heChhdCwgMCksIGFycmF5Lmxlbmd0aCk7XG4gICAgdmFyIHRhaWwgPSBBcnJheShhcnJheS5sZW5ndGggLSBhdCk7XG4gICAgdmFyIGxlbmd0aCA9IGluc2VydC5sZW5ndGg7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHRhaWwubGVuZ3RoOyBpKyspIHRhaWxbaV0gPSBhcnJheVtpICsgYXRdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgYXJyYXlbaSArIGF0XSA9IGluc2VydFtpXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFpbC5sZW5ndGg7IGkrKykgYXJyYXlbaSArIGxlbmd0aCArIGF0XSA9IHRhaWxbaV07XG4gIH07XG5cbiAgLy8gRGVmaW5lIHRoZSBDb2xsZWN0aW9uJ3MgaW5oZXJpdGFibGUgbWV0aG9kcy5cbiAgXy5leHRlbmQoQ29sbGVjdGlvbi5wcm90b3R5cGUsIEV2ZW50cywge1xuXG4gICAgLy8gVGhlIGRlZmF1bHQgbW9kZWwgZm9yIGEgY29sbGVjdGlvbiBpcyBqdXN0IGEgKipCYWNrYm9uZS5Nb2RlbCoqLlxuICAgIC8vIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW4gbW9zdCBjYXNlcy5cbiAgICBtb2RlbDogTW9kZWwsXG5cbiAgICAvLyBJbml0aWFsaXplIGlzIGFuIGVtcHR5IGZ1bmN0aW9uIGJ5IGRlZmF1bHQuIE92ZXJyaWRlIGl0IHdpdGggeW91ciBvd25cbiAgICAvLyBpbml0aWFsaXphdGlvbiBsb2dpYy5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpe30sXG5cbiAgICAvLyBUaGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiBhIENvbGxlY3Rpb24gaXMgYW4gYXJyYXkgb2YgdGhlXG4gICAgLy8gbW9kZWxzJyBhdHRyaWJ1dGVzLlxuICAgIHRvSlNPTjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKG1vZGVsKSB7IHJldHVybiBtb2RlbC50b0pTT04ob3B0aW9ucyk7IH0pO1xuICAgIH0sXG5cbiAgICAvLyBQcm94eSBgQmFja2JvbmUuc3luY2AgYnkgZGVmYXVsdC5cbiAgICBzeW5jOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBCYWNrYm9uZS5zeW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIG1vZGVsLCBvciBsaXN0IG9mIG1vZGVscyB0byB0aGUgc2V0LiBgbW9kZWxzYCBtYXkgYmUgQmFja2JvbmVcbiAgICAvLyBNb2RlbHMgb3IgcmF3IEphdmFTY3JpcHQgb2JqZWN0cyB0byBiZSBjb252ZXJ0ZWQgdG8gTW9kZWxzLCBvciBhbnlcbiAgICAvLyBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLlxuICAgIGFkZDogZnVuY3Rpb24obW9kZWxzLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQobW9kZWxzLCBfLmV4dGVuZCh7bWVyZ2U6IGZhbHNlfSwgb3B0aW9ucywgYWRkT3B0aW9ucykpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgYSBtb2RlbCwgb3IgYSBsaXN0IG9mIG1vZGVscyBmcm9tIHRoZSBzZXQuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihtb2RlbHMsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gICAgICB2YXIgc2luZ3VsYXIgPSAhXy5pc0FycmF5KG1vZGVscyk7XG4gICAgICBtb2RlbHMgPSBzaW5ndWxhciA/IFttb2RlbHNdIDogbW9kZWxzLnNsaWNlKCk7XG4gICAgICB2YXIgcmVtb3ZlZCA9IHRoaXMuX3JlbW92ZU1vZGVscyhtb2RlbHMsIG9wdGlvbnMpO1xuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCAmJiByZW1vdmVkLmxlbmd0aCkge1xuICAgICAgICBvcHRpb25zLmNoYW5nZXMgPSB7YWRkZWQ6IFtdLCBtZXJnZWQ6IFtdLCByZW1vdmVkOiByZW1vdmVkfTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCd1cGRhdGUnLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaW5ndWxhciA/IHJlbW92ZWRbMF0gOiByZW1vdmVkO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgYSBjb2xsZWN0aW9uIGJ5IGBzZXRgLWluZyBhIG5ldyBsaXN0IG9mIG1vZGVscywgYWRkaW5nIG5ldyBvbmVzLFxuICAgIC8vIHJlbW92aW5nIG1vZGVscyB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudCwgYW5kIG1lcmdpbmcgbW9kZWxzIHRoYXRcbiAgICAvLyBhbHJlYWR5IGV4aXN0IGluIHRoZSBjb2xsZWN0aW9uLCBhcyBuZWNlc3NhcnkuIFNpbWlsYXIgdG8gKipNb2RlbCNzZXQqKixcbiAgICAvLyB0aGUgY29yZSBvcGVyYXRpb24gZm9yIHVwZGF0aW5nIHRoZSBkYXRhIGNvbnRhaW5lZCBieSB0aGUgY29sbGVjdGlvbi5cbiAgICBzZXQ6IGZ1bmN0aW9uKG1vZGVscywgb3B0aW9ucykge1xuICAgICAgaWYgKG1vZGVscyA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgIG9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgc2V0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5wYXJzZSAmJiAhdGhpcy5faXNNb2RlbChtb2RlbHMpKSB7XG4gICAgICAgIG1vZGVscyA9IHRoaXMucGFyc2UobW9kZWxzLCBvcHRpb25zKSB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbmd1bGFyID0gIV8uaXNBcnJheShtb2RlbHMpO1xuICAgICAgbW9kZWxzID0gc2luZ3VsYXIgPyBbbW9kZWxzXSA6IG1vZGVscy5zbGljZSgpO1xuXG4gICAgICB2YXIgYXQgPSBvcHRpb25zLmF0O1xuICAgICAgaWYgKGF0ICE9IG51bGwpIGF0ID0gK2F0O1xuICAgICAgaWYgKGF0ID4gdGhpcy5sZW5ndGgpIGF0ID0gdGhpcy5sZW5ndGg7XG4gICAgICBpZiAoYXQgPCAwKSBhdCArPSB0aGlzLmxlbmd0aCArIDE7XG5cbiAgICAgIHZhciBzZXQgPSBbXTtcbiAgICAgIHZhciB0b0FkZCA9IFtdO1xuICAgICAgdmFyIHRvTWVyZ2UgPSBbXTtcbiAgICAgIHZhciB0b1JlbW92ZSA9IFtdO1xuICAgICAgdmFyIG1vZGVsTWFwID0ge307XG5cbiAgICAgIHZhciBhZGQgPSBvcHRpb25zLmFkZDtcbiAgICAgIHZhciBtZXJnZSA9IG9wdGlvbnMubWVyZ2U7XG4gICAgICB2YXIgcmVtb3ZlID0gb3B0aW9ucy5yZW1vdmU7XG5cbiAgICAgIHZhciBzb3J0ID0gZmFsc2U7XG4gICAgICB2YXIgc29ydGFibGUgPSB0aGlzLmNvbXBhcmF0b3IgJiYgYXQgPT0gbnVsbCAmJiBvcHRpb25zLnNvcnQgIT09IGZhbHNlO1xuICAgICAgdmFyIHNvcnRBdHRyID0gXy5pc1N0cmluZyh0aGlzLmNvbXBhcmF0b3IpID8gdGhpcy5jb21wYXJhdG9yIDogbnVsbDtcblxuICAgICAgLy8gVHVybiBiYXJlIG9iamVjdHMgaW50byBtb2RlbCByZWZlcmVuY2VzLCBhbmQgcHJldmVudCBpbnZhbGlkIG1vZGVsc1xuICAgICAgLy8gZnJvbSBiZWluZyBhZGRlZC5cbiAgICAgIHZhciBtb2RlbCwgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBtb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbW9kZWwgPSBtb2RlbHNbaV07XG5cbiAgICAgICAgLy8gSWYgYSBkdXBsaWNhdGUgaXMgZm91bmQsIHByZXZlbnQgaXQgZnJvbSBiZWluZyBhZGRlZCBhbmRcbiAgICAgICAgLy8gb3B0aW9uYWxseSBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBtb2RlbC5cbiAgICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5nZXQobW9kZWwpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICBpZiAobWVyZ2UgJiYgbW9kZWwgIT09IGV4aXN0aW5nKSB7XG4gICAgICAgICAgICB2YXIgYXR0cnMgPSB0aGlzLl9pc01vZGVsKG1vZGVsKSA/IG1vZGVsLmF0dHJpYnV0ZXMgOiBtb2RlbDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcnNlKSBhdHRycyA9IGV4aXN0aW5nLnBhcnNlKGF0dHJzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGV4aXN0aW5nLnNldChhdHRycywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0b01lcmdlLnB1c2goZXhpc3RpbmcpO1xuICAgICAgICAgICAgaWYgKHNvcnRhYmxlICYmICFzb3J0KSBzb3J0ID0gZXhpc3RpbmcuaGFzQ2hhbmdlZChzb3J0QXR0cik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbW9kZWxNYXBbZXhpc3RpbmcuY2lkXSkge1xuICAgICAgICAgICAgbW9kZWxNYXBbZXhpc3RpbmcuY2lkXSA9IHRydWU7XG4gICAgICAgICAgICBzZXQucHVzaChleGlzdGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1vZGVsc1tpXSA9IGV4aXN0aW5nO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBuZXcsIHZhbGlkIG1vZGVsLCBwdXNoIGl0IHRvIHRoZSBgdG9BZGRgIGxpc3QuXG4gICAgICAgIH0gZWxzZSBpZiAoYWRkKSB7XG4gICAgICAgICAgbW9kZWwgPSBtb2RlbHNbaV0gPSB0aGlzLl9wcmVwYXJlTW9kZWwobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgICAgdG9BZGQucHVzaChtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLl9hZGRSZWZlcmVuY2UobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbW9kZWxNYXBbbW9kZWwuY2lkXSA9IHRydWU7XG4gICAgICAgICAgICBzZXQucHVzaChtb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBzdGFsZSBtb2RlbHMuXG4gICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbW9kZWwgPSB0aGlzLm1vZGVsc1tpXTtcbiAgICAgICAgICBpZiAoIW1vZGVsTWFwW21vZGVsLmNpZF0pIHRvUmVtb3ZlLnB1c2gobW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b1JlbW92ZS5sZW5ndGgpIHRoaXMuX3JlbW92ZU1vZGVscyh0b1JlbW92ZSwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlZSBpZiBzb3J0aW5nIGlzIG5lZWRlZCwgdXBkYXRlIGBsZW5ndGhgIGFuZCBzcGxpY2UgaW4gbmV3IG1vZGVscy5cbiAgICAgIHZhciBvcmRlckNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHZhciByZXBsYWNlID0gIXNvcnRhYmxlICYmIGFkZCAmJiByZW1vdmU7XG4gICAgICBpZiAoc2V0Lmxlbmd0aCAmJiByZXBsYWNlKSB7XG4gICAgICAgIG9yZGVyQ2hhbmdlZCA9IHRoaXMubGVuZ3RoICE9PSBzZXQubGVuZ3RoIHx8IF8uc29tZSh0aGlzLm1vZGVscywgZnVuY3Rpb24obSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gbSAhPT0gc2V0W2luZGV4XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWxzLmxlbmd0aCA9IDA7XG4gICAgICAgIHNwbGljZSh0aGlzLm1vZGVscywgc2V0LCAwKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLm1vZGVscy5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKHRvQWRkLmxlbmd0aCkge1xuICAgICAgICBpZiAoc29ydGFibGUpIHNvcnQgPSB0cnVlO1xuICAgICAgICBzcGxpY2UodGhpcy5tb2RlbHMsIHRvQWRkLCBhdCA9PSBudWxsID8gdGhpcy5sZW5ndGggOiBhdCk7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5tb2RlbHMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICAvLyBTaWxlbnRseSBzb3J0IHRoZSBjb2xsZWN0aW9uIGlmIGFwcHJvcHJpYXRlLlxuICAgICAgaWYgKHNvcnQpIHRoaXMuc29ydCh7c2lsZW50OiB0cnVlfSk7XG5cbiAgICAgIC8vIFVubGVzcyBzaWxlbmNlZCwgaXQncyB0aW1lIHRvIGZpcmUgYWxsIGFwcHJvcHJpYXRlIGFkZC9zb3J0L3VwZGF0ZSBldmVudHMuXG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b0FkZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChhdCAhPSBudWxsKSBvcHRpb25zLmluZGV4ID0gYXQgKyBpO1xuICAgICAgICAgIG1vZGVsID0gdG9BZGRbaV07XG4gICAgICAgICAgbW9kZWwudHJpZ2dlcignYWRkJywgbW9kZWwsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3J0IHx8IG9yZGVyQ2hhbmdlZCkgdGhpcy50cmlnZ2VyKCdzb3J0JywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0b0FkZC5sZW5ndGggfHwgdG9SZW1vdmUubGVuZ3RoIHx8IHRvTWVyZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgb3B0aW9ucy5jaGFuZ2VzID0ge1xuICAgICAgICAgICAgYWRkZWQ6IHRvQWRkLFxuICAgICAgICAgICAgcmVtb3ZlZDogdG9SZW1vdmUsXG4gICAgICAgICAgICBtZXJnZWQ6IHRvTWVyZ2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMudHJpZ2dlcigndXBkYXRlJywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHRoZSBhZGRlZCAob3IgbWVyZ2VkKSBtb2RlbCAob3IgbW9kZWxzKS5cbiAgICAgIHJldHVybiBzaW5ndWxhciA/IG1vZGVsc1swXSA6IG1vZGVscztcbiAgICB9LFxuXG4gICAgLy8gV2hlbiB5b3UgaGF2ZSBtb3JlIGl0ZW1zIHRoYW4geW91IHdhbnQgdG8gYWRkIG9yIHJlbW92ZSBpbmRpdmlkdWFsbHksXG4gICAgLy8geW91IGNhbiByZXNldCB0aGUgZW50aXJlIHNldCB3aXRoIGEgbmV3IGxpc3Qgb2YgbW9kZWxzLCB3aXRob3V0IGZpcmluZ1xuICAgIC8vIGFueSBncmFudWxhciBgYWRkYCBvciBgcmVtb3ZlYCBldmVudHMuIEZpcmVzIGByZXNldGAgd2hlbiBmaW5pc2hlZC5cbiAgICAvLyBVc2VmdWwgZm9yIGJ1bGsgb3BlcmF0aW9ucyBhbmQgb3B0aW1pemF0aW9ucy5cbiAgICByZXNldDogZnVuY3Rpb24obW9kZWxzLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyA/IF8uY2xvbmUob3B0aW9ucykgOiB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmVmZXJlbmNlKHRoaXMubW9kZWxzW2ldLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMucHJldmlvdXNNb2RlbHMgPSB0aGlzLm1vZGVscztcbiAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICBtb2RlbHMgPSB0aGlzLmFkZChtb2RlbHMsIF8uZXh0ZW5kKHtzaWxlbnQ6IHRydWV9LCBvcHRpb25zKSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLnRyaWdnZXIoJ3Jlc2V0JywgdGhpcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBtb2RlbCB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgIHB1c2g6IGZ1bmN0aW9uKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQobW9kZWwsIF8uZXh0ZW5kKHthdDogdGhpcy5sZW5ndGh9LCBvcHRpb25zKSk7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhIG1vZGVsIGZyb20gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICBwb3A6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMuYXQodGhpcy5sZW5ndGggLSAxKTtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZShtb2RlbCwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIG1vZGVsIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgdW5zaGlmdDogZnVuY3Rpb24obW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZChtb2RlbCwgXy5leHRlbmQoe2F0OiAwfSwgb3B0aW9ucykpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgYSBtb2RlbCBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgc2hpZnQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMuYXQoMCk7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmUobW9kZWwsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvLyBTbGljZSBvdXQgYSBzdWItYXJyYXkgb2YgbW9kZWxzIGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gICAgc2xpY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNsaWNlLmFwcGx5KHRoaXMubW9kZWxzLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgYSBtb2RlbCBmcm9tIHRoZSBzZXQgYnkgaWQsIGNpZCwgbW9kZWwgb2JqZWN0IHdpdGggaWQgb3IgY2lkXG4gICAgLy8gcHJvcGVydGllcywgb3IgYW4gYXR0cmlidXRlcyBvYmplY3QgdGhhdCBpcyB0cmFuc2Zvcm1lZCB0aHJvdWdoIG1vZGVsSWQuXG4gICAgZ2V0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICAgIHJldHVybiB0aGlzLl9ieUlkW29ial0gfHxcbiAgICAgICAgdGhpcy5fYnlJZFt0aGlzLm1vZGVsSWQob2JqLmF0dHJpYnV0ZXMgfHwgb2JqKV0gfHxcbiAgICAgICAgb2JqLmNpZCAmJiB0aGlzLl9ieUlkW29iai5jaWRdO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgbW9kZWwgaXMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gICAgaGFzOiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0aGlzLmdldChvYmopICE9IG51bGw7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgbW9kZWwgYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgIGF0OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCkgaW5kZXggKz0gdGhpcy5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy5tb2RlbHNbaW5kZXhdO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gbW9kZWxzIHdpdGggbWF0Y2hpbmcgYXR0cmlidXRlcy4gVXNlZnVsIGZvciBzaW1wbGUgY2FzZXMgb2ZcbiAgICAvLyBgZmlsdGVyYC5cbiAgICB3aGVyZTogZnVuY3Rpb24oYXR0cnMsIGZpcnN0KSB7XG4gICAgICByZXR1cm4gdGhpc1tmaXJzdCA/ICdmaW5kJyA6ICdmaWx0ZXInXShhdHRycyk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZmlyc3QgbW9kZWwgd2l0aCBtYXRjaGluZyBhdHRyaWJ1dGVzLiBVc2VmdWwgZm9yIHNpbXBsZSBjYXNlc1xuICAgIC8vIG9mIGBmaW5kYC5cbiAgICBmaW5kV2hlcmU6IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgICByZXR1cm4gdGhpcy53aGVyZShhdHRycywgdHJ1ZSk7XG4gICAgfSxcblxuICAgIC8vIEZvcmNlIHRoZSBjb2xsZWN0aW9uIHRvIHJlLXNvcnQgaXRzZWxmLiBZb3UgZG9uJ3QgbmVlZCB0byBjYWxsIHRoaXMgdW5kZXJcbiAgICAvLyBub3JtYWwgY2lyY3Vtc3RhbmNlcywgYXMgdGhlIHNldCB3aWxsIG1haW50YWluIHNvcnQgb3JkZXIgYXMgZWFjaCBpdGVtXG4gICAgLy8gaXMgYWRkZWQuXG4gICAgc29ydDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGNvbXBhcmF0b3IgPSB0aGlzLmNvbXBhcmF0b3I7XG4gICAgICBpZiAoIWNvbXBhcmF0b3IpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNvcnQgYSBzZXQgd2l0aG91dCBhIGNvbXBhcmF0b3InKTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG5cbiAgICAgIHZhciBsZW5ndGggPSBjb21wYXJhdG9yLmxlbmd0aDtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24oY29tcGFyYXRvcikpIGNvbXBhcmF0b3IgPSBfLmJpbmQoY29tcGFyYXRvciwgdGhpcyk7XG5cbiAgICAgIC8vIFJ1biBzb3J0IGJhc2VkIG9uIHR5cGUgb2YgYGNvbXBhcmF0b3JgLlxuICAgICAgaWYgKGxlbmd0aCA9PT0gMSB8fCBfLmlzU3RyaW5nKGNvbXBhcmF0b3IpKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gdGhpcy5zb3J0QnkoY29tcGFyYXRvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vZGVscy5zb3J0KGNvbXBhcmF0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy50cmlnZ2VyKCdzb3J0JywgdGhpcywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gUGx1Y2sgYW4gYXR0cmlidXRlIGZyb20gZWFjaCBtb2RlbCBpbiB0aGUgY29sbGVjdGlvbi5cbiAgICBwbHVjazogZnVuY3Rpb24oYXR0cikge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGF0dHIgKyAnJyk7XG4gICAgfSxcblxuICAgIC8vIEZldGNoIHRoZSBkZWZhdWx0IHNldCBvZiBtb2RlbHMgZm9yIHRoaXMgY29sbGVjdGlvbiwgcmVzZXR0aW5nIHRoZVxuICAgIC8vIGNvbGxlY3Rpb24gd2hlbiB0aGV5IGFycml2ZS4gSWYgYHJlc2V0OiB0cnVlYCBpcyBwYXNzZWQsIHRoZSByZXNwb25zZVxuICAgIC8vIGRhdGEgd2lsbCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgYHJlc2V0YCBtZXRob2QgaW5zdGVhZCBvZiBgc2V0YC5cbiAgICBmZXRjaDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IF8uZXh0ZW5kKHtwYXJzZTogdHJ1ZX0sIG9wdGlvbnMpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3M7XG4gICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXM7XG4gICAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBvcHRpb25zLnJlc2V0ID8gJ3Jlc2V0JyA6ICdzZXQnO1xuICAgICAgICBjb2xsZWN0aW9uW21ldGhvZF0ocmVzcCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChzdWNjZXNzKSBzdWNjZXNzLmNhbGwob3B0aW9ucy5jb250ZXh0LCBjb2xsZWN0aW9uLCByZXNwLCBvcHRpb25zKTtcbiAgICAgICAgY29sbGVjdGlvbi50cmlnZ2VyKCdzeW5jJywgY29sbGVjdGlvbiwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgICAgd3JhcEVycm9yKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuc3luYygncmVhZCcsIHRoaXMsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgYSBtb2RlbCBpbiB0aGlzIGNvbGxlY3Rpb24uIEFkZCB0aGUgbW9kZWwgdG8gdGhlXG4gICAgLy8gY29sbGVjdGlvbiBpbW1lZGlhdGVseSwgdW5sZXNzIGB3YWl0OiB0cnVlYCBpcyBwYXNzZWQsIGluIHdoaWNoIGNhc2Ugd2VcbiAgICAvLyB3YWl0IGZvciB0aGUgc2VydmVyIHRvIGFncmVlLlxuICAgIGNyZWF0ZTogZnVuY3Rpb24obW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zID8gXy5jbG9uZShvcHRpb25zKSA6IHt9O1xuICAgICAgdmFyIHdhaXQgPSBvcHRpb25zLndhaXQ7XG4gICAgICBtb2RlbCA9IHRoaXMuX3ByZXBhcmVNb2RlbChtb2RlbCwgb3B0aW9ucyk7XG4gICAgICBpZiAoIW1vZGVsKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIXdhaXQpIHRoaXMuYWRkKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcztcbiAgICAgIHZhciBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xuICAgICAgb3B0aW9ucy5zdWNjZXNzID0gZnVuY3Rpb24obSwgcmVzcCwgY2FsbGJhY2tPcHRzKSB7XG4gICAgICAgIGlmICh3YWl0KSBjb2xsZWN0aW9uLmFkZChtLCBjYWxsYmFja09wdHMpO1xuICAgICAgICBpZiAoc3VjY2Vzcykgc3VjY2Vzcy5jYWxsKGNhbGxiYWNrT3B0cy5jb250ZXh0LCBtLCByZXNwLCBjYWxsYmFja09wdHMpO1xuICAgICAgfTtcbiAgICAgIG1vZGVsLnNhdmUobnVsbCwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcblxuICAgIC8vICoqcGFyc2UqKiBjb252ZXJ0cyBhIHJlc3BvbnNlIGludG8gYSBsaXN0IG9mIG1vZGVscyB0byBiZSBhZGRlZCB0byB0aGVcbiAgICAvLyBjb2xsZWN0aW9uLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBpcyBqdXN0IHRvIHBhc3MgaXQgdGhyb3VnaC5cbiAgICBwYXJzZTogZnVuY3Rpb24ocmVzcCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHJlc3A7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uIHdpdGggYW4gaWRlbnRpY2FsIGxpc3Qgb2YgbW9kZWxzIGFzIHRoaXMgb25lLlxuICAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLm1vZGVscywge1xuICAgICAgICBtb2RlbDogdGhpcy5tb2RlbCxcbiAgICAgICAgY29tcGFyYXRvcjogdGhpcy5jb21wYXJhdG9yXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gRGVmaW5lIGhvdyB0byB1bmlxdWVseSBpZGVudGlmeSBtb2RlbHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gICAgbW9kZWxJZDogZnVuY3Rpb24oYXR0cnMpIHtcbiAgICAgIHJldHVybiBhdHRyc1t0aGlzLm1vZGVsLnByb3RvdHlwZS5pZEF0dHJpYnV0ZSB8fCAnaWQnXTtcbiAgICB9LFxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2QgdG8gcmVzZXQgYWxsIGludGVybmFsIHN0YXRlLiBDYWxsZWQgd2hlbiB0aGUgY29sbGVjdGlvblxuICAgIC8vIGlzIGZpcnN0IGluaXRpYWxpemVkIG9yIHJlc2V0LlxuICAgIF9yZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgdGhpcy5fYnlJZCAgPSB7fTtcbiAgICB9LFxuXG4gICAgLy8gUHJlcGFyZSBhIGhhc2ggb2YgYXR0cmlidXRlcyAob3Igb3RoZXIgbW9kZWwpIHRvIGJlIGFkZGVkIHRvIHRoaXNcbiAgICAvLyBjb2xsZWN0aW9uLlxuICAgIF9wcmVwYXJlTW9kZWw6IGZ1bmN0aW9uKGF0dHJzLCBvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5faXNNb2RlbChhdHRycykpIHtcbiAgICAgICAgaWYgKCFhdHRycy5jb2xsZWN0aW9uKSBhdHRycy5jb2xsZWN0aW9uID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBfLmNsb25lKG9wdGlvbnMpIDoge307XG4gICAgICBvcHRpb25zLmNvbGxlY3Rpb24gPSB0aGlzO1xuICAgICAgdmFyIG1vZGVsID0gbmV3IHRoaXMubW9kZWwoYXR0cnMsIG9wdGlvbnMpO1xuICAgICAgaWYgKCFtb2RlbC52YWxpZGF0aW9uRXJyb3IpIHJldHVybiBtb2RlbDtcbiAgICAgIHRoaXMudHJpZ2dlcignaW52YWxpZCcsIHRoaXMsIG1vZGVsLnZhbGlkYXRpb25FcnJvciwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIEludGVybmFsIG1ldGhvZCBjYWxsZWQgYnkgYm90aCByZW1vdmUgYW5kIHNldC5cbiAgICBfcmVtb3ZlTW9kZWxzOiBmdW5jdGlvbihtb2RlbHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciByZW1vdmVkID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmdldChtb2RlbHNbaV0pO1xuICAgICAgICBpZiAoIW1vZGVsKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YobW9kZWwpO1xuICAgICAgICB0aGlzLm1vZGVscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmxlbmd0aC0tO1xuXG4gICAgICAgIC8vIFJlbW92ZSByZWZlcmVuY2VzIGJlZm9yZSB0cmlnZ2VyaW5nICdyZW1vdmUnIGV2ZW50IHRvIHByZXZlbnQgYW5cbiAgICAgICAgLy8gaW5maW5pdGUgbG9vcC4gIzM2OTNcbiAgICAgICAgZGVsZXRlIHRoaXMuX2J5SWRbbW9kZWwuY2lkXTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5tb2RlbElkKG1vZGVsLmF0dHJpYnV0ZXMpO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkgZGVsZXRlIHRoaXMuX2J5SWRbaWRdO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICBvcHRpb25zLmluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgbW9kZWwudHJpZ2dlcigncmVtb3ZlJywgbW9kZWwsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlZC5wdXNoKG1vZGVsKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmVmZXJlbmNlKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW1vdmVkO1xuICAgIH0sXG5cbiAgICAvLyBNZXRob2QgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gb2JqZWN0IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbW9kZWwgZm9yXG4gICAgLy8gdGhlIHB1cnBvc2VzIG9mIGFkZGluZyB0byB0aGUgY29sbGVjdGlvbi5cbiAgICBfaXNNb2RlbDogZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgIHJldHVybiBtb2RlbCBpbnN0YW5jZW9mIE1vZGVsO1xuICAgIH0sXG5cbiAgICAvLyBJbnRlcm5hbCBtZXRob2QgdG8gY3JlYXRlIGEgbW9kZWwncyB0aWVzIHRvIGEgY29sbGVjdGlvbi5cbiAgICBfYWRkUmVmZXJlbmNlOiBmdW5jdGlvbihtb2RlbCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5fYnlJZFttb2RlbC5jaWRdID0gbW9kZWw7XG4gICAgICB2YXIgaWQgPSB0aGlzLm1vZGVsSWQobW9kZWwuYXR0cmlidXRlcyk7XG4gICAgICBpZiAoaWQgIT0gbnVsbCkgdGhpcy5fYnlJZFtpZF0gPSBtb2RlbDtcbiAgICAgIG1vZGVsLm9uKCdhbGwnLCB0aGlzLl9vbk1vZGVsRXZlbnQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyBJbnRlcm5hbCBtZXRob2QgdG8gc2V2ZXIgYSBtb2RlbCdzIHRpZXMgdG8gYSBjb2xsZWN0aW9uLlxuICAgIF9yZW1vdmVSZWZlcmVuY2U6IGZ1bmN0aW9uKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICBkZWxldGUgdGhpcy5fYnlJZFttb2RlbC5jaWRdO1xuICAgICAgdmFyIGlkID0gdGhpcy5tb2RlbElkKG1vZGVsLmF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKGlkICE9IG51bGwpIGRlbGV0ZSB0aGlzLl9ieUlkW2lkXTtcbiAgICAgIGlmICh0aGlzID09PSBtb2RlbC5jb2xsZWN0aW9uKSBkZWxldGUgbW9kZWwuY29sbGVjdGlvbjtcbiAgICAgIG1vZGVsLm9mZignYWxsJywgdGhpcy5fb25Nb2RlbEV2ZW50LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgbWV0aG9kIGNhbGxlZCBldmVyeSB0aW1lIGEgbW9kZWwgaW4gdGhlIHNldCBmaXJlcyBhbiBldmVudC5cbiAgICAvLyBTZXRzIG5lZWQgdG8gdXBkYXRlIHRoZWlyIGluZGV4ZXMgd2hlbiBtb2RlbHMgY2hhbmdlIGlkcy4gQWxsIG90aGVyXG4gICAgLy8gZXZlbnRzIHNpbXBseSBwcm94eSB0aHJvdWdoLiBcImFkZFwiIGFuZCBcInJlbW92ZVwiIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZVxuICAgIC8vIGluIG90aGVyIGNvbGxlY3Rpb25zIGFyZSBpZ25vcmVkLlxuICAgIF9vbk1vZGVsRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50LCBtb2RlbCwgY29sbGVjdGlvbiwgb3B0aW9ucykge1xuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIGlmICgoZXZlbnQgPT09ICdhZGQnIHx8IGV2ZW50ID09PSAncmVtb3ZlJykgJiYgY29sbGVjdGlvbiAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICBpZiAoZXZlbnQgPT09ICdkZXN0cm95JykgdGhpcy5yZW1vdmUobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoZXZlbnQgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgICAgdmFyIHByZXZJZCA9IHRoaXMubW9kZWxJZChtb2RlbC5wcmV2aW91c0F0dHJpYnV0ZXMoKSk7XG4gICAgICAgICAgdmFyIGlkID0gdGhpcy5tb2RlbElkKG1vZGVsLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgIGlmIChwcmV2SWQgIT09IGlkKSB7XG4gICAgICAgICAgICBpZiAocHJldklkICE9IG51bGwpIGRlbGV0ZSB0aGlzLl9ieUlkW3ByZXZJZF07XG4gICAgICAgICAgICBpZiAoaWQgIT0gbnVsbCkgdGhpcy5fYnlJZFtpZF0gPSBtb2RlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBVbmRlcnNjb3JlIG1ldGhvZHMgdGhhdCB3ZSB3YW50IHRvIGltcGxlbWVudCBvbiB0aGUgQ29sbGVjdGlvbi5cbiAgLy8gOTAlIG9mIHRoZSBjb3JlIHVzZWZ1bG5lc3Mgb2YgQmFja2JvbmUgQ29sbGVjdGlvbnMgaXMgYWN0dWFsbHkgaW1wbGVtZW50ZWRcbiAgLy8gcmlnaHQgaGVyZTpcbiAgdmFyIGNvbGxlY3Rpb25NZXRob2RzID0ge2ZvckVhY2g6IDMsIGVhY2g6IDMsIG1hcDogMywgY29sbGVjdDogMywgcmVkdWNlOiAwLFxuICAgICAgZm9sZGw6IDAsIGluamVjdDogMCwgcmVkdWNlUmlnaHQ6IDAsIGZvbGRyOiAwLCBmaW5kOiAzLCBkZXRlY3Q6IDMsIGZpbHRlcjogMyxcbiAgICAgIHNlbGVjdDogMywgcmVqZWN0OiAzLCBldmVyeTogMywgYWxsOiAzLCBzb21lOiAzLCBhbnk6IDMsIGluY2x1ZGU6IDMsIGluY2x1ZGVzOiAzLFxuICAgICAgY29udGFpbnM6IDMsIGludm9rZTogMCwgbWF4OiAzLCBtaW46IDMsIHRvQXJyYXk6IDEsIHNpemU6IDEsIGZpcnN0OiAzLFxuICAgICAgaGVhZDogMywgdGFrZTogMywgaW5pdGlhbDogMywgcmVzdDogMywgdGFpbDogMywgZHJvcDogMywgbGFzdDogMyxcbiAgICAgIHdpdGhvdXQ6IDAsIGRpZmZlcmVuY2U6IDAsIGluZGV4T2Y6IDMsIHNodWZmbGU6IDEsIGxhc3RJbmRleE9mOiAzLFxuICAgICAgaXNFbXB0eTogMSwgY2hhaW46IDEsIHNhbXBsZTogMywgcGFydGl0aW9uOiAzLCBncm91cEJ5OiAzLCBjb3VudEJ5OiAzLFxuICAgICAgc29ydEJ5OiAzLCBpbmRleEJ5OiAzLCBmaW5kSW5kZXg6IDMsIGZpbmRMYXN0SW5kZXg6IDN9O1xuXG4gIC8vIE1peCBpbiBlYWNoIFVuZGVyc2NvcmUgbWV0aG9kIGFzIGEgcHJveHkgdG8gYENvbGxlY3Rpb24jbW9kZWxzYC5cbiAgYWRkVW5kZXJzY29yZU1ldGhvZHMoQ29sbGVjdGlvbiwgY29sbGVjdGlvbk1ldGhvZHMsICdtb2RlbHMnKTtcblxuICAvLyBCYWNrYm9uZS5WaWV3XG4gIC8vIC0tLS0tLS0tLS0tLS1cblxuICAvLyBCYWNrYm9uZSBWaWV3cyBhcmUgYWxtb3N0IG1vcmUgY29udmVudGlvbiB0aGFuIHRoZXkgYXJlIGFjdHVhbCBjb2RlLiBBIFZpZXdcbiAgLy8gaXMgc2ltcGx5IGEgSmF2YVNjcmlwdCBvYmplY3QgdGhhdCByZXByZXNlbnRzIGEgbG9naWNhbCBjaHVuayBvZiBVSSBpbiB0aGVcbiAgLy8gRE9NLiBUaGlzIG1pZ2h0IGJlIGEgc2luZ2xlIGl0ZW0sIGFuIGVudGlyZSBsaXN0LCBhIHNpZGViYXIgb3IgcGFuZWwsIG9yXG4gIC8vIGV2ZW4gdGhlIHN1cnJvdW5kaW5nIGZyYW1lIHdoaWNoIHdyYXBzIHlvdXIgd2hvbGUgYXBwLiBEZWZpbmluZyBhIGNodW5rIG9mXG4gIC8vIFVJIGFzIGEgKipWaWV3KiogYWxsb3dzIHlvdSB0byBkZWZpbmUgeW91ciBET00gZXZlbnRzIGRlY2xhcmF0aXZlbHksIHdpdGhvdXRcbiAgLy8gaGF2aW5nIHRvIHdvcnJ5IGFib3V0IHJlbmRlciBvcmRlciAuLi4gYW5kIG1ha2VzIGl0IGVhc3kgZm9yIHRoZSB2aWV3IHRvXG4gIC8vIHJlYWN0IHRvIHNwZWNpZmljIGNoYW5nZXMgaW4gdGhlIHN0YXRlIG9mIHlvdXIgbW9kZWxzLlxuXG4gIC8vIENyZWF0aW5nIGEgQmFja2JvbmUuVmlldyBjcmVhdGVzIGl0cyBpbml0aWFsIGVsZW1lbnQgb3V0c2lkZSBvZiB0aGUgRE9NLFxuICAvLyBpZiBhbiBleGlzdGluZyBlbGVtZW50IGlzIG5vdCBwcm92aWRlZC4uLlxuICB2YXIgVmlldyA9IEJhY2tib25lLlZpZXcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5jaWQgPSBfLnVuaXF1ZUlkKCd2aWV3Jyk7XG4gICAgXy5leHRlbmQodGhpcywgXy5waWNrKG9wdGlvbnMsIHZpZXdPcHRpb25zKSk7XG4gICAgdGhpcy5fZW5zdXJlRWxlbWVudCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8vIENhY2hlZCByZWdleCB0byBzcGxpdCBrZXlzIGZvciBgZGVsZWdhdGVgLlxuICB2YXIgZGVsZWdhdGVFdmVudFNwbGl0dGVyID0gL14oXFxTKylcXHMqKC4qKSQvO1xuXG4gIC8vIExpc3Qgb2YgdmlldyBvcHRpb25zIHRvIGJlIHNldCBhcyBwcm9wZXJ0aWVzLlxuICB2YXIgdmlld09wdGlvbnMgPSBbJ21vZGVsJywgJ2NvbGxlY3Rpb24nLCAnZWwnLCAnaWQnLCAnYXR0cmlidXRlcycsICdjbGFzc05hbWUnLCAndGFnTmFtZScsICdldmVudHMnXTtcblxuICAvLyBTZXQgdXAgYWxsIGluaGVyaXRhYmxlICoqQmFja2JvbmUuVmlldyoqIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gIF8uZXh0ZW5kKFZpZXcucHJvdG90eXBlLCBFdmVudHMsIHtcblxuICAgIC8vIFRoZSBkZWZhdWx0IGB0YWdOYW1lYCBvZiBhIFZpZXcncyBlbGVtZW50IGlzIGBcImRpdlwiYC5cbiAgICB0YWdOYW1lOiAnZGl2JyxcblxuICAgIC8vIGpRdWVyeSBkZWxlZ2F0ZSBmb3IgZWxlbWVudCBsb29rdXAsIHNjb3BlZCB0byBET00gZWxlbWVudHMgd2l0aGluIHRoZVxuICAgIC8vIGN1cnJlbnQgdmlldy4gVGhpcyBzaG91bGQgYmUgcHJlZmVycmVkIHRvIGdsb2JhbCBsb29rdXBzIHdoZXJlIHBvc3NpYmxlLlxuICAgICQ6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWwuZmluZChzZWxlY3Rvcik7XG4gICAgfSxcblxuICAgIC8vIEluaXRpYWxpemUgaXMgYW4gZW1wdHkgZnVuY3Rpb24gYnkgZGVmYXVsdC4gT3ZlcnJpZGUgaXQgd2l0aCB5b3VyIG93blxuICAgIC8vIGluaXRpYWxpemF0aW9uIGxvZ2ljLlxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7fSxcblxuICAgIC8vICoqcmVuZGVyKiogaXMgdGhlIGNvcmUgZnVuY3Rpb24gdGhhdCB5b3VyIHZpZXcgc2hvdWxkIG92ZXJyaWRlLCBpbiBvcmRlclxuICAgIC8vIHRvIHBvcHVsYXRlIGl0cyBlbGVtZW50IChgdGhpcy5lbGApLCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBIVE1MLiBUaGVcbiAgICAvLyBjb252ZW50aW9uIGlzIGZvciAqKnJlbmRlcioqIHRvIGFsd2F5cyByZXR1cm4gYHRoaXNgLlxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlIHRoaXMgdmlldyBieSB0YWtpbmcgdGhlIGVsZW1lbnQgb3V0IG9mIHRoZSBET00sIGFuZCByZW1vdmluZyBhbnlcbiAgICAvLyBhcHBsaWNhYmxlIEJhY2tib25lLkV2ZW50cyBsaXN0ZW5lcnMuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSB0aGlzIHZpZXcncyBlbGVtZW50IGZyb20gdGhlIGRvY3VtZW50IGFuZCBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gICAgLy8gYXR0YWNoZWQgdG8gaXQuIEV4cG9zZWQgZm9yIHN1YmNsYXNzZXMgdXNpbmcgYW4gYWx0ZXJuYXRpdmUgRE9NXG4gICAgLy8gbWFuaXB1bGF0aW9uIEFQSS5cbiAgICBfcmVtb3ZlRWxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbC5yZW1vdmUoKTtcbiAgICB9LFxuXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3J3MgZWxlbWVudCAoYHRoaXMuZWxgIHByb3BlcnR5KSBhbmQgcmUtZGVsZWdhdGUgdGhlXG4gICAgLy8gdmlldydzIGV2ZW50cyBvbiB0aGUgbmV3IGVsZW1lbnQuXG4gICAgc2V0RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdGhpcy51bmRlbGVnYXRlRXZlbnRzKCk7XG4gICAgICB0aGlzLl9zZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgdGhpcy5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZXMgdGhlIGB0aGlzLmVsYCBhbmQgYHRoaXMuJGVsYCByZWZlcmVuY2VzIGZvciB0aGlzIHZpZXcgdXNpbmcgdGhlXG4gICAgLy8gZ2l2ZW4gYGVsYC4gYGVsYCBjYW4gYmUgYSBDU1Mgc2VsZWN0b3Igb3IgYW4gSFRNTCBzdHJpbmcsIGEgalF1ZXJ5XG4gICAgLy8gY29udGV4dCBvciBhbiBlbGVtZW50LiBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIHV0aWxpemUgYW5cbiAgICAvLyBhbHRlcm5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIEFQSSBhbmQgYXJlIG9ubHkgcmVxdWlyZWQgdG8gc2V0IHRoZVxuICAgIC8vIGB0aGlzLmVsYCBwcm9wZXJ0eS5cbiAgICBfc2V0RWxlbWVudDogZnVuY3Rpb24oZWwpIHtcbiAgICAgIHRoaXMuJGVsID0gZWwgaW5zdGFuY2VvZiBCYWNrYm9uZS4kID8gZWwgOiBCYWNrYm9uZS4kKGVsKTtcbiAgICAgIHRoaXMuZWwgPSB0aGlzLiRlbFswXTtcbiAgICB9LFxuXG4gICAgLy8gU2V0IGNhbGxiYWNrcywgd2hlcmUgYHRoaXMuZXZlbnRzYCBpcyBhIGhhc2ggb2ZcbiAgICAvL1xuICAgIC8vICp7XCJldmVudCBzZWxlY3RvclwiOiBcImNhbGxiYWNrXCJ9KlxuICAgIC8vXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAnbW91c2Vkb3duIC50aXRsZSc6ICAnZWRpdCcsXG4gICAgLy8gICAgICAgJ2NsaWNrIC5idXR0b24nOiAgICAgJ3NhdmUnLFxuICAgIC8vICAgICAgICdjbGljayAub3Blbic6ICAgICAgIGZ1bmN0aW9uKGUpIHsgLi4uIH1cbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gcGFpcnMuIENhbGxiYWNrcyB3aWxsIGJlIGJvdW5kIHRvIHRoZSB2aWV3LCB3aXRoIGB0aGlzYCBzZXQgcHJvcGVybHkuXG4gICAgLy8gVXNlcyBldmVudCBkZWxlZ2F0aW9uIGZvciBlZmZpY2llbmN5LlxuICAgIC8vIE9taXR0aW5nIHRoZSBzZWxlY3RvciBiaW5kcyB0aGUgZXZlbnQgdG8gYHRoaXMuZWxgLlxuICAgIGRlbGVnYXRlRXZlbnRzOiBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgIGV2ZW50cyB8fCAoZXZlbnRzID0gXy5yZXN1bHQodGhpcywgJ2V2ZW50cycpKTtcbiAgICAgIGlmICghZXZlbnRzKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50cykge1xuICAgICAgICB2YXIgbWV0aG9kID0gZXZlbnRzW2tleV07XG4gICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKG1ldGhvZCkpIG1ldGhvZCA9IHRoaXNbbWV0aG9kXTtcbiAgICAgICAgaWYgKCFtZXRob2QpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgbWF0Y2ggPSBrZXkubWF0Y2goZGVsZWdhdGVFdmVudFNwbGl0dGVyKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZShtYXRjaFsxXSwgbWF0Y2hbMl0sIF8uYmluZChtZXRob2QsIHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHZpZXcncyBlbGVtZW50IChvciBhIGNoaWxkIGVsZW1lbnRcbiAgICAvLyB1c2luZyBgc2VsZWN0b3JgKS4gVGhpcyBvbmx5IHdvcmtzIGZvciBkZWxlZ2F0ZS1hYmxlIGV2ZW50czogbm90IGBmb2N1c2AsXG4gICAgLy8gYGJsdXJgLCBhbmQgbm90IGBjaGFuZ2VgLCBgc3VibWl0YCwgYW5kIGByZXNldGAgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAgZGVsZWdhdGU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgc2VsZWN0b3IsIGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRlbC5vbihldmVudE5hbWUgKyAnLmRlbGVnYXRlRXZlbnRzJyArIHRoaXMuY2lkLCBzZWxlY3RvciwgbGlzdGVuZXIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIENsZWFycyBhbGwgY2FsbGJhY2tzIHByZXZpb3VzbHkgYm91bmQgdG8gdGhlIHZpZXcgYnkgYGRlbGVnYXRlRXZlbnRzYC5cbiAgICAvLyBZb3UgdXN1YWxseSBkb24ndCBuZWVkIHRvIHVzZSB0aGlzLCBidXQgbWF5IHdpc2ggdG8gaWYgeW91IGhhdmUgbXVsdGlwbGVcbiAgICAvLyBCYWNrYm9uZSB2aWV3cyBhdHRhY2hlZCB0byB0aGUgc2FtZSBET00gZWxlbWVudC5cbiAgICB1bmRlbGVnYXRlRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLiRlbCkgdGhpcy4kZWwub2ZmKCcuZGVsZWdhdGVFdmVudHMnICsgdGhpcy5jaWQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEEgZmluZXItZ3JhaW5lZCBgdW5kZWxlZ2F0ZUV2ZW50c2AgZm9yIHJlbW92aW5nIGEgc2luZ2xlIGRlbGVnYXRlZCBldmVudC5cbiAgICAvLyBgc2VsZWN0b3JgIGFuZCBgbGlzdGVuZXJgIGFyZSBib3RoIG9wdGlvbmFsLlxuICAgIHVuZGVsZWdhdGU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgc2VsZWN0b3IsIGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRlbC5vZmYoZXZlbnROYW1lICsgJy5kZWxlZ2F0ZUV2ZW50cycgKyB0aGlzLmNpZCwgc2VsZWN0b3IsIGxpc3RlbmVyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBQcm9kdWNlcyBhIERPTSBlbGVtZW50IHRvIGJlIGFzc2lnbmVkIHRvIHlvdXIgdmlldy4gRXhwb3NlZCBmb3JcbiAgICAvLyBzdWJjbGFzc2VzIHVzaW5nIGFuIGFsdGVybmF0aXZlIERPTSBtYW5pcHVsYXRpb24gQVBJLlxuICAgIF9jcmVhdGVFbGVtZW50OiBmdW5jdGlvbih0YWdOYW1lKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICB9LFxuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIFZpZXcgaGFzIGEgRE9NIGVsZW1lbnQgdG8gcmVuZGVyIGludG8uXG4gICAgLy8gSWYgYHRoaXMuZWxgIGlzIGEgc3RyaW5nLCBwYXNzIGl0IHRocm91Z2ggYCQoKWAsIHRha2UgdGhlIGZpcnN0XG4gICAgLy8gbWF0Y2hpbmcgZWxlbWVudCwgYW5kIHJlLWFzc2lnbiBpdCB0byBgZWxgLiBPdGhlcndpc2UsIGNyZWF0ZVxuICAgIC8vIGFuIGVsZW1lbnQgZnJvbSB0aGUgYGlkYCwgYGNsYXNzTmFtZWAgYW5kIGB0YWdOYW1lYCBwcm9wZXJ0aWVzLlxuICAgIF9lbnN1cmVFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBfLmV4dGVuZCh7fSwgXy5yZXN1bHQodGhpcywgJ2F0dHJpYnV0ZXMnKSk7XG4gICAgICAgIGlmICh0aGlzLmlkKSBhdHRycy5pZCA9IF8ucmVzdWx0KHRoaXMsICdpZCcpO1xuICAgICAgICBpZiAodGhpcy5jbGFzc05hbWUpIGF0dHJzWydjbGFzcyddID0gXy5yZXN1bHQodGhpcywgJ2NsYXNzTmFtZScpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnQodGhpcy5fY3JlYXRlRWxlbWVudChfLnJlc3VsdCh0aGlzLCAndGFnTmFtZScpKSk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZXMoYXR0cnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50KF8ucmVzdWx0KHRoaXMsICdlbCcpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU2V0IGF0dHJpYnV0ZXMgZnJvbSBhIGhhc2ggb24gdGhpcyB2aWV3J3MgZWxlbWVudC4gIEV4cG9zZWQgZm9yXG4gICAgLy8gc3ViY2xhc3NlcyB1c2luZyBhbiBhbHRlcm5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIEFQSS5cbiAgICBfc2V0QXR0cmlidXRlczogZnVuY3Rpb24oYXR0cmlidXRlcykge1xuICAgICAgdGhpcy4kZWwuYXR0cihhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgLy8gQmFja2JvbmUuc3luY1xuICAvLyAtLS0tLS0tLS0tLS0tXG5cbiAgLy8gT3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBjaGFuZ2UgdGhlIG1hbm5lciBpbiB3aGljaCBCYWNrYm9uZSBwZXJzaXN0c1xuICAvLyBtb2RlbHMgdG8gdGhlIHNlcnZlci4gWW91IHdpbGwgYmUgcGFzc2VkIHRoZSB0eXBlIG9mIHJlcXVlc3QsIGFuZCB0aGVcbiAgLy8gbW9kZWwgaW4gcXVlc3Rpb24uIEJ5IGRlZmF1bHQsIG1ha2VzIGEgUkVTVGZ1bCBBamF4IHJlcXVlc3RcbiAgLy8gdG8gdGhlIG1vZGVsJ3MgYHVybCgpYC4gU29tZSBwb3NzaWJsZSBjdXN0b21pemF0aW9ucyBjb3VsZCBiZTpcbiAgLy9cbiAgLy8gKiBVc2UgYHNldFRpbWVvdXRgIHRvIGJhdGNoIHJhcGlkLWZpcmUgdXBkYXRlcyBpbnRvIGEgc2luZ2xlIHJlcXVlc3QuXG4gIC8vICogU2VuZCB1cCB0aGUgbW9kZWxzIGFzIFhNTCBpbnN0ZWFkIG9mIEpTT04uXG4gIC8vICogUGVyc2lzdCBtb2RlbHMgdmlhIFdlYlNvY2tldHMgaW5zdGVhZCBvZiBBamF4LlxuICAvL1xuICAvLyBUdXJuIG9uIGBCYWNrYm9uZS5lbXVsYXRlSFRUUGAgaW4gb3JkZXIgdG8gc2VuZCBgUFVUYCBhbmQgYERFTEVURWAgcmVxdWVzdHNcbiAgLy8gYXMgYFBPU1RgLCB3aXRoIGEgYF9tZXRob2RgIHBhcmFtZXRlciBjb250YWluaW5nIHRoZSB0cnVlIEhUVFAgbWV0aG9kLFxuICAvLyBhcyB3ZWxsIGFzIGFsbCByZXF1ZXN0cyB3aXRoIHRoZSBib2R5IGFzIGBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRgXG4gIC8vIGluc3RlYWQgb2YgYGFwcGxpY2F0aW9uL2pzb25gIHdpdGggdGhlIG1vZGVsIGluIGEgcGFyYW0gbmFtZWQgYG1vZGVsYC5cbiAgLy8gVXNlZnVsIHdoZW4gaW50ZXJmYWNpbmcgd2l0aCBzZXJ2ZXItc2lkZSBsYW5ndWFnZXMgbGlrZSAqKlBIUCoqIHRoYXQgbWFrZVxuICAvLyBpdCBkaWZmaWN1bHQgdG8gcmVhZCB0aGUgYm9keSBvZiBgUFVUYCByZXF1ZXN0cy5cbiAgQmFja2JvbmUuc3luYyA9IGZ1bmN0aW9uKG1ldGhvZCwgbW9kZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgdHlwZSA9IG1ldGhvZE1hcFttZXRob2RdO1xuXG4gICAgLy8gRGVmYXVsdCBvcHRpb25zLCB1bmxlc3Mgc3BlY2lmaWVkLlxuICAgIF8uZGVmYXVsdHMob3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KSwge1xuICAgICAgZW11bGF0ZUhUVFA6IEJhY2tib25lLmVtdWxhdGVIVFRQLFxuICAgICAgZW11bGF0ZUpTT046IEJhY2tib25lLmVtdWxhdGVKU09OXG4gICAgfSk7XG5cbiAgICAvLyBEZWZhdWx0IEpTT04tcmVxdWVzdCBvcHRpb25zLlxuICAgIHZhciBwYXJhbXMgPSB7dHlwZTogdHlwZSwgZGF0YVR5cGU6ICdqc29uJ307XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB3ZSBoYXZlIGEgVVJMLlxuICAgIGlmICghb3B0aW9ucy51cmwpIHtcbiAgICAgIHBhcmFtcy51cmwgPSBfLnJlc3VsdChtb2RlbCwgJ3VybCcpIHx8IHVybEVycm9yKCk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoYXQgd2UgaGF2ZSB0aGUgYXBwcm9wcmlhdGUgcmVxdWVzdCBkYXRhLlxuICAgIGlmIChvcHRpb25zLmRhdGEgPT0gbnVsbCAmJiBtb2RlbCAmJiAobWV0aG9kID09PSAnY3JlYXRlJyB8fCBtZXRob2QgPT09ICd1cGRhdGUnIHx8IG1ldGhvZCA9PT0gJ3BhdGNoJykpIHtcbiAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgIHBhcmFtcy5kYXRhID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5hdHRycyB8fCBtb2RlbC50b0pTT04ob3B0aW9ucykpO1xuICAgIH1cblxuICAgIC8vIEZvciBvbGRlciBzZXJ2ZXJzLCBlbXVsYXRlIEpTT04gYnkgZW5jb2RpbmcgdGhlIHJlcXVlc3QgaW50byBhbiBIVE1MLWZvcm0uXG4gICAgaWYgKG9wdGlvbnMuZW11bGF0ZUpTT04pIHtcbiAgICAgIHBhcmFtcy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSA/IHttb2RlbDogcGFyYW1zLmRhdGF9IDoge307XG4gICAgfVxuXG4gICAgLy8gRm9yIG9sZGVyIHNlcnZlcnMsIGVtdWxhdGUgSFRUUCBieSBtaW1pY2tpbmcgdGhlIEhUVFAgbWV0aG9kIHdpdGggYF9tZXRob2RgXG4gICAgLy8gQW5kIGFuIGBYLUhUVFAtTWV0aG9kLU92ZXJyaWRlYCBoZWFkZXIuXG4gICAgaWYgKG9wdGlvbnMuZW11bGF0ZUhUVFAgJiYgKHR5cGUgPT09ICdQVVQnIHx8IHR5cGUgPT09ICdERUxFVEUnIHx8IHR5cGUgPT09ICdQQVRDSCcpKSB7XG4gICAgICBwYXJhbXMudHlwZSA9ICdQT1NUJztcbiAgICAgIGlmIChvcHRpb25zLmVtdWxhdGVKU09OKSBwYXJhbXMuZGF0YS5fbWV0aG9kID0gdHlwZTtcbiAgICAgIHZhciBiZWZvcmVTZW5kID0gb3B0aW9ucy5iZWZvcmVTZW5kO1xuICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLUhUVFAtTWV0aG9kLU92ZXJyaWRlJywgdHlwZSk7XG4gICAgICAgIGlmIChiZWZvcmVTZW5kKSByZXR1cm4gYmVmb3JlU2VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBwcm9jZXNzIGRhdGEgb24gYSBub24tR0VUIHJlcXVlc3QuXG4gICAgaWYgKHBhcmFtcy50eXBlICE9PSAnR0VUJyAmJiAhb3B0aW9ucy5lbXVsYXRlSlNPTikge1xuICAgICAgcGFyYW1zLnByb2Nlc3NEYXRhID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUGFzcyBhbG9uZyBgdGV4dFN0YXR1c2AgYW5kIGBlcnJvclRocm93bmAgZnJvbSBqUXVlcnkuXG4gICAgdmFyIGVycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICBvcHRpb25zLmVycm9yID0gZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgb3B0aW9ucy50ZXh0U3RhdHVzID0gdGV4dFN0YXR1cztcbiAgICAgIG9wdGlvbnMuZXJyb3JUaHJvd24gPSBlcnJvclRocm93bjtcbiAgICAgIGlmIChlcnJvcikgZXJyb3IuY2FsbChvcHRpb25zLmNvbnRleHQsIHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgIH07XG5cbiAgICAvLyBNYWtlIHRoZSByZXF1ZXN0LCBhbGxvd2luZyB0aGUgdXNlciB0byBvdmVycmlkZSBhbnkgQWpheCBvcHRpb25zLlxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociA9IEJhY2tib25lLmFqYXgoXy5leHRlbmQocGFyYW1zLCBvcHRpb25zKSk7XG4gICAgbW9kZWwudHJpZ2dlcigncmVxdWVzdCcsIG1vZGVsLCB4aHIsIG9wdGlvbnMpO1xuICAgIHJldHVybiB4aHI7XG4gIH07XG5cbiAgLy8gTWFwIGZyb20gQ1JVRCB0byBIVFRQIGZvciBvdXIgZGVmYXVsdCBgQmFja2JvbmUuc3luY2AgaW1wbGVtZW50YXRpb24uXG4gIHZhciBtZXRob2RNYXAgPSB7XG4gICAgJ2NyZWF0ZSc6ICdQT1NUJyxcbiAgICAndXBkYXRlJzogJ1BVVCcsXG4gICAgJ3BhdGNoJzogJ1BBVENIJyxcbiAgICAnZGVsZXRlJzogJ0RFTEVURScsXG4gICAgJ3JlYWQnOiAnR0VUJ1xuICB9O1xuXG4gIC8vIFNldCB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBgQmFja2JvbmUuYWpheGAgdG8gcHJveHkgdGhyb3VnaCB0byBgJGAuXG4gIC8vIE92ZXJyaWRlIHRoaXMgaWYgeW91J2QgbGlrZSB0byB1c2UgYSBkaWZmZXJlbnQgbGlicmFyeS5cbiAgQmFja2JvbmUuYWpheCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBCYWNrYm9uZS4kLmFqYXguYXBwbHkoQmFja2JvbmUuJCwgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBCYWNrYm9uZS5Sb3V0ZXJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUm91dGVycyBtYXAgZmF1eC1VUkxzIHRvIGFjdGlvbnMsIGFuZCBmaXJlIGV2ZW50cyB3aGVuIHJvdXRlcyBhcmVcbiAgLy8gbWF0Y2hlZC4gQ3JlYXRpbmcgYSBuZXcgb25lIHNldHMgaXRzIGByb3V0ZXNgIGhhc2gsIGlmIG5vdCBzZXQgc3RhdGljYWxseS5cbiAgdmFyIFJvdXRlciA9IEJhY2tib25lLlJvdXRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIGlmIChvcHRpb25zLnJvdXRlcykgdGhpcy5yb3V0ZXMgPSBvcHRpb25zLnJvdXRlcztcbiAgICB0aGlzLl9iaW5kUm91dGVzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gQ2FjaGVkIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIG1hdGNoaW5nIG5hbWVkIHBhcmFtIHBhcnRzIGFuZCBzcGxhdHRlZFxuICAvLyBwYXJ0cyBvZiByb3V0ZSBzdHJpbmdzLlxuICB2YXIgb3B0aW9uYWxQYXJhbSA9IC9cXCgoLio/KVxcKS9nO1xuICB2YXIgbmFtZWRQYXJhbSAgICA9IC8oXFwoXFw/KT86XFx3Ky9nO1xuICB2YXIgc3BsYXRQYXJhbSAgICA9IC9cXCpcXHcrL2c7XG4gIHZhciBlc2NhcGVSZWdFeHAgID0gL1tcXC17fVxcW1xcXSs/LixcXFxcXFxeJHwjXFxzXS9nO1xuXG4gIC8vIFNldCB1cCBhbGwgaW5oZXJpdGFibGUgKipCYWNrYm9uZS5Sb3V0ZXIqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChSb3V0ZXIucHJvdG90eXBlLCBFdmVudHMsIHtcblxuICAgIC8vIEluaXRpYWxpemUgaXMgYW4gZW1wdHkgZnVuY3Rpb24gYnkgZGVmYXVsdC4gT3ZlcnJpZGUgaXQgd2l0aCB5b3VyIG93blxuICAgIC8vIGluaXRpYWxpemF0aW9uIGxvZ2ljLlxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7fSxcblxuICAgIC8vIE1hbnVhbGx5IGJpbmQgYSBzaW5nbGUgbmFtZWQgcm91dGUgdG8gYSBjYWxsYmFjay4gRm9yIGV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyAgICAgdGhpcy5yb3V0ZSgnc2VhcmNoLzpxdWVyeS9wOm51bScsICdzZWFyY2gnLCBmdW5jdGlvbihxdWVyeSwgbnVtKSB7XG4gICAgLy8gICAgICAgLi4uXG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgcm91dGU6IGZ1bmN0aW9uKHJvdXRlLCBuYW1lLCBjYWxsYmFjaykge1xuICAgICAgaWYgKCFfLmlzUmVnRXhwKHJvdXRlKSkgcm91dGUgPSB0aGlzLl9yb3V0ZVRvUmVnRXhwKHJvdXRlKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24obmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuYW1lO1xuICAgICAgICBuYW1lID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IHRoaXNbbmFtZV07XG4gICAgICB2YXIgcm91dGVyID0gdGhpcztcbiAgICAgIEJhY2tib25lLmhpc3Rvcnkucm91dGUocm91dGUsIGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgICAgIHZhciBhcmdzID0gcm91dGVyLl9leHRyYWN0UGFyYW1ldGVycyhyb3V0ZSwgZnJhZ21lbnQpO1xuICAgICAgICBpZiAocm91dGVyLmV4ZWN1dGUoY2FsbGJhY2ssIGFyZ3MsIG5hbWUpICE9PSBmYWxzZSkge1xuICAgICAgICAgIHJvdXRlci50cmlnZ2VyLmFwcGx5KHJvdXRlciwgWydyb3V0ZTonICsgbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICByb3V0ZXIudHJpZ2dlcigncm91dGUnLCBuYW1lLCBhcmdzKTtcbiAgICAgICAgICBCYWNrYm9uZS5oaXN0b3J5LnRyaWdnZXIoJ3JvdXRlJywgcm91dGVyLCBuYW1lLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRXhlY3V0ZSBhIHJvdXRlIGhhbmRsZXIgd2l0aCB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycy4gIFRoaXMgaXMgYW5cbiAgICAvLyBleGNlbGxlbnQgcGxhY2UgdG8gZG8gcHJlLXJvdXRlIHNldHVwIG9yIHBvc3Qtcm91dGUgY2xlYW51cC5cbiAgICBleGVjdXRlOiBmdW5jdGlvbihjYWxsYmFjaywgYXJncywgbmFtZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LFxuXG4gICAgLy8gU2ltcGxlIHByb3h5IHRvIGBCYWNrYm9uZS5oaXN0b3J5YCB0byBzYXZlIGEgZnJhZ21lbnQgaW50byB0aGUgaGlzdG9yeS5cbiAgICBuYXZpZ2F0ZTogZnVuY3Rpb24oZnJhZ21lbnQsIG9wdGlvbnMpIHtcbiAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoZnJhZ21lbnQsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJpbmQgYWxsIGRlZmluZWQgcm91dGVzIHRvIGBCYWNrYm9uZS5oaXN0b3J5YC4gV2UgaGF2ZSB0byByZXZlcnNlIHRoZVxuICAgIC8vIG9yZGVyIG9mIHRoZSByb3V0ZXMgaGVyZSB0byBzdXBwb3J0IGJlaGF2aW9yIHdoZXJlIHRoZSBtb3N0IGdlbmVyYWxcbiAgICAvLyByb3V0ZXMgY2FuIGJlIGRlZmluZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcm91dGUgbWFwLlxuICAgIF9iaW5kUm91dGVzOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5yb3V0ZXMpIHJldHVybjtcbiAgICAgIHRoaXMucm91dGVzID0gXy5yZXN1bHQodGhpcywgJ3JvdXRlcycpO1xuICAgICAgdmFyIHJvdXRlLCByb3V0ZXMgPSBfLmtleXModGhpcy5yb3V0ZXMpO1xuICAgICAgd2hpbGUgKChyb3V0ZSA9IHJvdXRlcy5wb3AoKSkgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJvdXRlKHJvdXRlLCB0aGlzLnJvdXRlc1tyb3V0ZV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgcm91dGUgc3RyaW5nIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24sIHN1aXRhYmxlIGZvciBtYXRjaGluZ1xuICAgIC8vIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaC5cbiAgICBfcm91dGVUb1JlZ0V4cDogZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgIHJvdXRlID0gcm91dGUucmVwbGFjZShlc2NhcGVSZWdFeHAsICdcXFxcJCYnKVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKG9wdGlvbmFsUGFyYW0sICcoPzokMSk/JylcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZShuYW1lZFBhcmFtLCBmdW5jdGlvbihtYXRjaCwgb3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25hbCA/IG1hdGNoIDogJyhbXi8/XSspJztcbiAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHNwbGF0UGFyYW0sICcoW14/XSo/KScpO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcm91dGUgKyAnKD86XFxcXD8oW1xcXFxzXFxcXFNdKikpPyQnKTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gYSByb3V0ZSwgYW5kIGEgVVJMIGZyYWdtZW50IHRoYXQgaXQgbWF0Y2hlcywgcmV0dXJuIHRoZSBhcnJheSBvZlxuICAgIC8vIGV4dHJhY3RlZCBkZWNvZGVkIHBhcmFtZXRlcnMuIEVtcHR5IG9yIHVubWF0Y2hlZCBwYXJhbWV0ZXJzIHdpbGwgYmVcbiAgICAvLyB0cmVhdGVkIGFzIGBudWxsYCB0byBub3JtYWxpemUgY3Jvc3MtYnJvd3NlciBiZWhhdmlvci5cbiAgICBfZXh0cmFjdFBhcmFtZXRlcnM6IGZ1bmN0aW9uKHJvdXRlLCBmcmFnbWVudCkge1xuICAgICAgdmFyIHBhcmFtcyA9IHJvdXRlLmV4ZWMoZnJhZ21lbnQpLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIF8ubWFwKHBhcmFtcywgZnVuY3Rpb24ocGFyYW0sIGkpIHtcbiAgICAgICAgLy8gRG9uJ3QgZGVjb2RlIHRoZSBzZWFyY2ggcGFyYW1zLlxuICAgICAgICBpZiAoaSA9PT0gcGFyYW1zLmxlbmd0aCAtIDEpIHJldHVybiBwYXJhbSB8fCBudWxsO1xuICAgICAgICByZXR1cm4gcGFyYW0gPyBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pIDogbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBCYWNrYm9uZS5IaXN0b3J5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBIYW5kbGVzIGNyb3NzLWJyb3dzZXIgaGlzdG9yeSBtYW5hZ2VtZW50LCBiYXNlZCBvbiBlaXRoZXJcbiAgLy8gW3B1c2hTdGF0ZV0oaHR0cDovL2RpdmVpbnRvaHRtbDUuaW5mby9oaXN0b3J5Lmh0bWwpIGFuZCByZWFsIFVSTHMsIG9yXG4gIC8vIFtvbmhhc2hjaGFuZ2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvRE9NL3dpbmRvdy5vbmhhc2hjaGFuZ2UpXG4gIC8vIGFuZCBVUkwgZnJhZ21lbnRzLiBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBuZWl0aGVyIChvbGQgSUUsIG5hdGNoKSxcbiAgLy8gZmFsbHMgYmFjayB0byBwb2xsaW5nLlxuICB2YXIgSGlzdG9yeSA9IEJhY2tib25lLkhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgdGhpcy5jaGVja1VybCA9IF8uYmluZCh0aGlzLmNoZWNrVXJsLCB0aGlzKTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IGBIaXN0b3J5YCBjYW4gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgIHRoaXMuaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICAgIH1cbiAgfTtcblxuICAvLyBDYWNoZWQgcmVnZXggZm9yIHN0cmlwcGluZyBhIGxlYWRpbmcgaGFzaC9zbGFzaCBhbmQgdHJhaWxpbmcgc3BhY2UuXG4gIHZhciByb3V0ZVN0cmlwcGVyID0gL15bI1xcL118XFxzKyQvZztcblxuICAvLyBDYWNoZWQgcmVnZXggZm9yIHN0cmlwcGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzLlxuICB2YXIgcm9vdFN0cmlwcGVyID0gL15cXC8rfFxcLyskL2c7XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IGZvciBzdHJpcHBpbmcgdXJscyBvZiBoYXNoLlxuICB2YXIgcGF0aFN0cmlwcGVyID0gLyMuKiQvO1xuXG4gIC8vIEhhcyB0aGUgaGlzdG9yeSBoYW5kbGluZyBhbHJlYWR5IGJlZW4gc3RhcnRlZD9cbiAgSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG5cbiAgLy8gU2V0IHVwIGFsbCBpbmhlcml0YWJsZSAqKkJhY2tib25lLkhpc3RvcnkqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChIaXN0b3J5LnByb3RvdHlwZSwgRXZlbnRzLCB7XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBpbnRlcnZhbCB0byBwb2xsIGZvciBoYXNoIGNoYW5nZXMsIGlmIG5lY2Vzc2FyeSwgaXNcbiAgICAvLyB0d2VudHkgdGltZXMgYSBzZWNvbmQuXG4gICAgaW50ZXJ2YWw6IDUwLFxuXG4gICAgLy8gQXJlIHdlIGF0IHRoZSBhcHAgcm9vdD9cbiAgICBhdFJvb3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhdGggPSB0aGlzLmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1teXFwvXSQvLCAnJCYvJyk7XG4gICAgICByZXR1cm4gcGF0aCA9PT0gdGhpcy5yb290ICYmICF0aGlzLmdldFNlYXJjaCgpO1xuICAgIH0sXG5cbiAgICAvLyBEb2VzIHRoZSBwYXRobmFtZSBtYXRjaCB0aGUgcm9vdD9cbiAgICBtYXRjaFJvb3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhdGggPSB0aGlzLmRlY29kZUZyYWdtZW50KHRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgdmFyIHJvb3RQYXRoID0gcGF0aC5zbGljZSgwLCB0aGlzLnJvb3QubGVuZ3RoIC0gMSkgKyAnLyc7XG4gICAgICByZXR1cm4gcm9vdFBhdGggPT09IHRoaXMucm9vdDtcbiAgICB9LFxuXG4gICAgLy8gVW5pY29kZSBjaGFyYWN0ZXJzIGluIGBsb2NhdGlvbi5wYXRobmFtZWAgYXJlIHBlcmNlbnQgZW5jb2RlZCBzbyB0aGV5J3JlXG4gICAgLy8gZGVjb2RlZCBmb3IgY29tcGFyaXNvbi4gYCUyNWAgc2hvdWxkIG5vdCBiZSBkZWNvZGVkIHNpbmNlIGl0IG1heSBiZSBwYXJ0XG4gICAgLy8gb2YgYW4gZW5jb2RlZCBwYXJhbWV0ZXIuXG4gICAgZGVjb2RlRnJhZ21lbnQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJKGZyYWdtZW50LnJlcGxhY2UoLyUyNS9nLCAnJTI1MjUnKSk7XG4gICAgfSxcblxuICAgIC8vIEluIElFNiwgdGhlIGhhc2ggZnJhZ21lbnQgYW5kIHNlYXJjaCBwYXJhbXMgYXJlIGluY29ycmVjdCBpZiB0aGVcbiAgICAvLyBmcmFnbWVudCBjb250YWlucyBgP2AuXG4gICAgZ2V0U2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtYXRjaCA9IHRoaXMubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jLiovLCAnJykubWF0Y2goL1xcPy4rLyk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xuICAgIH0sXG5cbiAgICAvLyBHZXRzIHRoZSB0cnVlIGhhc2ggdmFsdWUuIENhbm5vdCB1c2UgbG9jYXRpb24uaGFzaCBkaXJlY3RseSBkdWUgdG8gYnVnXG4gICAgLy8gaW4gRmlyZWZveCB3aGVyZSBsb2NhdGlvbi5oYXNoIHdpbGwgYWx3YXlzIGJlIGRlY29kZWQuXG4gICAgZ2V0SGFzaDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgICB2YXIgbWF0Y2ggPSAod2luZG93IHx8IHRoaXMpLmxvY2F0aW9uLmhyZWYubWF0Y2goLyMoLiopJC8pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBwYXRobmFtZSBhbmQgc2VhcmNoIHBhcmFtcywgd2l0aG91dCB0aGUgcm9vdC5cbiAgICBnZXRQYXRoOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5kZWNvZGVGcmFnbWVudChcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5wYXRobmFtZSArIHRoaXMuZ2V0U2VhcmNoKClcbiAgICAgICkuc2xpY2UodGhpcy5yb290Lmxlbmd0aCAtIDEpO1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoLnNsaWNlKDEpIDogcGF0aDtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBjcm9zcy1icm93c2VyIG5vcm1hbGl6ZWQgVVJMIGZyYWdtZW50IGZyb20gdGhlIHBhdGggb3IgaGFzaC5cbiAgICBnZXRGcmFnbWVudDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICAgIGlmIChmcmFnbWVudCA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLl91c2VQdXNoU3RhdGUgfHwgIXRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmdldEhhc2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyYWdtZW50LnJlcGxhY2Uocm91dGVTdHJpcHBlciwgJycpO1xuICAgIH0sXG5cbiAgICAvLyBTdGFydCB0aGUgaGFzaCBjaGFuZ2UgaGFuZGxpbmcsIHJldHVybmluZyBgdHJ1ZWAgaWYgdGhlIGN1cnJlbnQgVVJMIG1hdGNoZXNcbiAgICAvLyBhbiBleGlzdGluZyByb3V0ZSwgYW5kIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgIHN0YXJ0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAoSGlzdG9yeS5zdGFydGVkKSB0aHJvdyBuZXcgRXJyb3IoJ0JhY2tib25lLmhpc3RvcnkgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkJyk7XG4gICAgICBIaXN0b3J5LnN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBpbml0aWFsIGNvbmZpZ3VyYXRpb24uIERvIHdlIG5lZWQgYW4gaWZyYW1lP1xuICAgICAgLy8gSXMgcHVzaFN0YXRlIGRlc2lyZWQgLi4uIGlzIGl0IGF2YWlsYWJsZT9cbiAgICAgIHRoaXMub3B0aW9ucyAgICAgICAgICA9IF8uZXh0ZW5kKHtyb290OiAnLyd9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yb290ICAgICAgICAgICAgID0gdGhpcy5vcHRpb25zLnJvb3Q7XG4gICAgICB0aGlzLl93YW50c0hhc2hDaGFuZ2UgPSB0aGlzLm9wdGlvbnMuaGFzaENoYW5nZSAhPT0gZmFsc2U7XG4gICAgICB0aGlzLl9oYXNIYXNoQ2hhbmdlICAgPSAnb25oYXNoY2hhbmdlJyBpbiB3aW5kb3cgJiYgKGRvY3VtZW50LmRvY3VtZW50TW9kZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA+IDcpO1xuICAgICAgdGhpcy5fdXNlSGFzaENoYW5nZSAgID0gdGhpcy5fd2FudHNIYXNoQ2hhbmdlICYmIHRoaXMuX2hhc0hhc2hDaGFuZ2U7XG4gICAgICB0aGlzLl93YW50c1B1c2hTdGF0ZSAgPSAhIXRoaXMub3B0aW9ucy5wdXNoU3RhdGU7XG4gICAgICB0aGlzLl9oYXNQdXNoU3RhdGUgICAgPSAhISh0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSk7XG4gICAgICB0aGlzLl91c2VQdXNoU3RhdGUgICAgPSB0aGlzLl93YW50c1B1c2hTdGF0ZSAmJiB0aGlzLl9oYXNQdXNoU3RhdGU7XG4gICAgICB0aGlzLmZyYWdtZW50ICAgICAgICAgPSB0aGlzLmdldEZyYWdtZW50KCk7XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSByb290IHRvIGFsd2F5cyBpbmNsdWRlIGEgbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2guXG4gICAgICB0aGlzLnJvb3QgPSAoJy8nICsgdGhpcy5yb290ICsgJy8nKS5yZXBsYWNlKHJvb3RTdHJpcHBlciwgJy8nKTtcblxuICAgICAgLy8gVHJhbnNpdGlvbiBmcm9tIGhhc2hDaGFuZ2UgdG8gcHVzaFN0YXRlIG9yIHZpY2UgdmVyc2EgaWYgYm90aCBhcmVcbiAgICAgIC8vIHJlcXVlc3RlZC5cbiAgICAgIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgdGhpcy5fd2FudHNQdXNoU3RhdGUpIHtcblxuICAgICAgICAvLyBJZiB3ZSd2ZSBzdGFydGVkIG9mZiB3aXRoIGEgcm91dGUgZnJvbSBhIGBwdXNoU3RhdGVgLWVuYWJsZWRcbiAgICAgICAgLy8gYnJvd3NlciwgYnV0IHdlJ3JlIGN1cnJlbnRseSBpbiBhIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgaXQuLi5cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNQdXNoU3RhdGUgJiYgIXRoaXMuYXRSb290KCkpIHtcbiAgICAgICAgICB2YXIgcm9vdFBhdGggPSB0aGlzLnJvb3Quc2xpY2UoMCwgLTEpIHx8ICcvJztcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2Uocm9vdFBhdGggKyAnIycgKyB0aGlzLmdldFBhdGgoKSk7XG4gICAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGFzIGJyb3dzZXIgd2lsbCBkbyByZWRpcmVjdCB0byBuZXcgdXJsXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgLy8gT3IgaWYgd2UndmUgc3RhcnRlZCBvdXQgd2l0aCBhIGhhc2gtYmFzZWQgcm91dGUsIGJ1dCB3ZSdyZSBjdXJyZW50bHlcbiAgICAgICAgLy8gaW4gYSBicm93c2VyIHdoZXJlIGl0IGNvdWxkIGJlIGBwdXNoU3RhdGVgLWJhc2VkIGluc3RlYWQuLi5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUgJiYgdGhpcy5hdFJvb3QoKSkge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGUodGhpcy5nZXRIYXNoKCksIHtyZXBsYWNlOiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICAvLyBQcm94eSBhbiBpZnJhbWUgdG8gaGFuZGxlIGxvY2F0aW9uIGV2ZW50cyBpZiB0aGUgYnJvd3NlciBkb2Vzbid0XG4gICAgICAvLyBzdXBwb3J0IHRoZSBgaGFzaGNoYW5nZWAgZXZlbnQsIEhUTUw1IGhpc3RvcnksIG9yIHRoZSB1c2VyIHdhbnRzXG4gICAgICAvLyBgaGFzaENoYW5nZWAgYnV0IG5vdCBgcHVzaFN0YXRlYC5cbiAgICAgIGlmICghdGhpcy5faGFzSGFzaENoYW5nZSAmJiB0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgIXRoaXMuX3VzZVB1c2hTdGF0ZSkge1xuICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICB0aGlzLmlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDowJztcbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5pZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBVc2luZyBgYXBwZW5kQ2hpbGRgIHdpbGwgdGhyb3cgb24gSUUgPCA5IGlmIHRoZSBkb2N1bWVudCBpcyBub3QgcmVhZHkuXG4gICAgICAgIHZhciBpV2luZG93ID0gYm9keS5pbnNlcnRCZWZvcmUodGhpcy5pZnJhbWUsIGJvZHkuZmlyc3RDaGlsZCkuY29udGVudFdpbmRvdztcbiAgICAgICAgaVdpbmRvdy5kb2N1bWVudC5vcGVuKCk7XG4gICAgICAgIGlXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgaVdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgdGhpcy5mcmFnbWVudDtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGEgY3Jvc3MtcGxhdGZvcm0gYGFkZEV2ZW50TGlzdGVuZXJgIHNoaW0gZm9yIG9sZGVyIGJyb3dzZXJzLlxuICAgICAgdmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBhdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgICB9O1xuXG4gICAgICAvLyBEZXBlbmRpbmcgb24gd2hldGhlciB3ZSdyZSB1c2luZyBwdXNoU3RhdGUgb3IgaGFzaGVzLCBhbmQgd2hldGhlclxuICAgICAgLy8gJ29uaGFzaGNoYW5nZScgaXMgc3VwcG9ydGVkLCBkZXRlcm1pbmUgaG93IHdlIGNoZWNrIHRoZSBVUkwgc3RhdGUuXG4gICAgICBpZiAodGhpcy5fdXNlUHVzaFN0YXRlKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5jaGVja1VybCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl91c2VIYXNoQ2hhbmdlICYmICF0aGlzLmlmcmFtZSkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5jaGVja1VybCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tVcmxJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuY2hlY2tVcmwsIHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaWxlbnQpIHJldHVybiB0aGlzLmxvYWRVcmwoKTtcbiAgICB9LFxuXG4gICAgLy8gRGlzYWJsZSBCYWNrYm9uZS5oaXN0b3J5LCBwZXJoYXBzIHRlbXBvcmFyaWx5LiBOb3QgdXNlZnVsIGluIGEgcmVhbCBhcHAsXG4gICAgLy8gYnV0IHBvc3NpYmx5IHVzZWZ1bCBmb3IgdW5pdCB0ZXN0aW5nIFJvdXRlcnMuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBBZGQgYSBjcm9zcy1wbGF0Zm9ybSBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmAgc2hpbSBmb3Igb2xkZXIgYnJvd3NlcnMuXG4gICAgICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyIHx8IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFJlbW92ZSB3aW5kb3cgbGlzdGVuZXJzLlxuICAgICAgaWYgKHRoaXMuX3VzZVB1c2hTdGF0ZSkge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuY2hlY2tVcmwsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdXNlSGFzaENoYW5nZSAmJiAhdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuY2hlY2tVcmwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgdGhlIGlmcmFtZSBpZiBuZWNlc3NhcnkuXG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gU29tZSBlbnZpcm9ubWVudHMgd2lsbCB0aHJvdyB3aGVuIGNsZWFyaW5nIGFuIHVuZGVmaW5lZCBpbnRlcnZhbC5cbiAgICAgIGlmICh0aGlzLl9jaGVja1VybEludGVydmFsKSBjbGVhckludGVydmFsKHRoaXMuX2NoZWNrVXJsSW50ZXJ2YWwpO1xuICAgICAgSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIHJvdXRlIHRvIGJlIHRlc3RlZCB3aGVuIHRoZSBmcmFnbWVudCBjaGFuZ2VzLiBSb3V0ZXMgYWRkZWQgbGF0ZXJcbiAgICAvLyBtYXkgb3ZlcnJpZGUgcHJldmlvdXMgcm91dGVzLlxuICAgIHJvdXRlOiBmdW5jdGlvbihyb3V0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMudW5zaGlmdCh7cm91dGU6IHJvdXRlLCBjYWxsYmFjazogY2FsbGJhY2t9KTtcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2tzIHRoZSBjdXJyZW50IFVSTCB0byBzZWUgaWYgaXQgaGFzIGNoYW5nZWQsIGFuZCBpZiBpdCBoYXMsXG4gICAgLy8gY2FsbHMgYGxvYWRVcmxgLCBub3JtYWxpemluZyBhY3Jvc3MgdGhlIGhpZGRlbiBpZnJhbWUuXG4gICAgY2hlY2tVcmw6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXRGcmFnbWVudCgpO1xuXG4gICAgICAvLyBJZiB0aGUgdXNlciBwcmVzc2VkIHRoZSBiYWNrIGJ1dHRvbiwgdGhlIGlmcmFtZSdzIGhhc2ggd2lsbCBoYXZlXG4gICAgICAvLyBjaGFuZ2VkIGFuZCB3ZSBzaG91bGQgdXNlIHRoYXQgZm9yIGNvbXBhcmlzb24uXG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mcmFnbWVudCAmJiB0aGlzLmlmcmFtZSkge1xuICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXRIYXNoKHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mcmFnbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMuaWZyYW1lKSB0aGlzLm5hdmlnYXRlKGN1cnJlbnQpO1xuICAgICAgdGhpcy5sb2FkVXJsKCk7XG4gICAgfSxcblxuICAgIC8vIEF0dGVtcHQgdG8gbG9hZCB0aGUgY3VycmVudCBVUkwgZnJhZ21lbnQuIElmIGEgcm91dGUgc3VjY2VlZHMgd2l0aCBhXG4gICAgLy8gbWF0Y2gsIHJldHVybnMgYHRydWVgLiBJZiBubyBkZWZpbmVkIHJvdXRlcyBtYXRjaGVzIHRoZSBmcmFnbWVudCxcbiAgICAvLyByZXR1cm5zIGBmYWxzZWAuXG4gICAgbG9hZFVybDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICAgIC8vIElmIHRoZSByb290IGRvZXNuJ3QgbWF0Y2gsIG5vIHJvdXRlcyBjYW4gbWF0Y2ggZWl0aGVyLlxuICAgICAgaWYgKCF0aGlzLm1hdGNoUm9vdCgpKSByZXR1cm4gZmFsc2U7XG4gICAgICBmcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KGZyYWdtZW50KTtcbiAgICAgIHJldHVybiBfLnNvbWUodGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICBpZiAoaGFuZGxlci5yb3V0ZS50ZXN0KGZyYWdtZW50KSkge1xuICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZnJhZ21lbnQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gU2F2ZSBhIGZyYWdtZW50IGludG8gdGhlIGhhc2ggaGlzdG9yeSwgb3IgcmVwbGFjZSB0aGUgVVJMIHN0YXRlIGlmIHRoZVxuICAgIC8vICdyZXBsYWNlJyBvcHRpb24gaXMgcGFzc2VkLiBZb3UgYXJlIHJlc3BvbnNpYmxlIGZvciBwcm9wZXJseSBVUkwtZW5jb2RpbmdcbiAgICAvLyB0aGUgZnJhZ21lbnQgaW4gYWR2YW5jZS5cbiAgICAvL1xuICAgIC8vIFRoZSBvcHRpb25zIG9iamVjdCBjYW4gY29udGFpbiBgdHJpZ2dlcjogdHJ1ZWAgaWYgeW91IHdpc2ggdG8gaGF2ZSB0aGVcbiAgICAvLyByb3V0ZSBjYWxsYmFjayBiZSBmaXJlZCAobm90IHVzdWFsbHkgZGVzaXJhYmxlKSwgb3IgYHJlcGxhY2U6IHRydWVgLCBpZlxuICAgIC8vIHlvdSB3aXNoIHRvIG1vZGlmeSB0aGUgY3VycmVudCBVUkwgd2l0aG91dCBhZGRpbmcgYW4gZW50cnkgdG8gdGhlIGhpc3RvcnkuXG4gICAgbmF2aWdhdGU6IGZ1bmN0aW9uKGZyYWdtZW50LCBvcHRpb25zKSB7XG4gICAgICBpZiAoIUhpc3Rvcnkuc3RhcnRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMgPT09IHRydWUpIG9wdGlvbnMgPSB7dHJpZ2dlcjogISFvcHRpb25zfTtcblxuICAgICAgLy8gTm9ybWFsaXplIHRoZSBmcmFnbWVudC5cbiAgICAgIGZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChmcmFnbWVudCB8fCAnJyk7XG5cbiAgICAgIC8vIERvbid0IGluY2x1ZGUgYSB0cmFpbGluZyBzbGFzaCBvbiB0aGUgcm9vdC5cbiAgICAgIHZhciByb290UGF0aCA9IHRoaXMucm9vdDtcbiAgICAgIGlmIChmcmFnbWVudCA9PT0gJycgfHwgZnJhZ21lbnQuY2hhckF0KDApID09PSAnPycpIHtcbiAgICAgICAgcm9vdFBhdGggPSByb290UGF0aC5zbGljZSgwLCAtMSkgfHwgJy8nO1xuICAgICAgfVxuICAgICAgdmFyIHVybCA9IHJvb3RQYXRoICsgZnJhZ21lbnQ7XG5cbiAgICAgIC8vIFN0cmlwIHRoZSBoYXNoIGFuZCBkZWNvZGUgZm9yIG1hdGNoaW5nLlxuICAgICAgZnJhZ21lbnQgPSB0aGlzLmRlY29kZUZyYWdtZW50KGZyYWdtZW50LnJlcGxhY2UocGF0aFN0cmlwcGVyLCAnJykpO1xuXG4gICAgICBpZiAodGhpcy5mcmFnbWVudCA9PT0gZnJhZ21lbnQpIHJldHVybjtcbiAgICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcblxuICAgICAgLy8gSWYgcHVzaFN0YXRlIGlzIGF2YWlsYWJsZSwgd2UgdXNlIGl0IHRvIHNldCB0aGUgZnJhZ21lbnQgYXMgYSByZWFsIFVSTC5cbiAgICAgIGlmICh0aGlzLl91c2VQdXNoU3RhdGUpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5W29wdGlvbnMucmVwbGFjZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcblxuICAgICAgLy8gSWYgaGFzaCBjaGFuZ2VzIGhhdmVuJ3QgYmVlbiBleHBsaWNpdGx5IGRpc2FibGVkLCB1cGRhdGUgdGhlIGhhc2hcbiAgICAgIC8vIGZyYWdtZW50IHRvIHN0b3JlIGhpc3RvcnkuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUgJiYgZnJhZ21lbnQgIT09IHRoaXMuZ2V0SGFzaCh0aGlzLmlmcmFtZS5jb250ZW50V2luZG93KSkge1xuICAgICAgICAgIHZhciBpV2luZG93ID0gdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdztcblxuICAgICAgICAgIC8vIE9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlIGlmcmFtZSB0cmlja3MgSUU3IGFuZCBlYXJsaWVyIHRvIHB1c2ggYVxuICAgICAgICAgIC8vIGhpc3RvcnkgZW50cnkgb24gaGFzaC10YWcgY2hhbmdlLiAgV2hlbiByZXBsYWNlIGlzIHRydWUsIHdlIGRvbid0XG4gICAgICAgICAgLy8gd2FudCB0aGlzLlxuICAgICAgICAgIGlmICghb3B0aW9ucy5yZXBsYWNlKSB7XG4gICAgICAgICAgICBpV2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl91cGRhdGVIYXNoKGlXaW5kb3cubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSd2ZSB0b2xkIHVzIHRoYXQgeW91IGV4cGxpY2l0bHkgZG9uJ3Qgd2FudCBmYWxsYmFjayBoYXNoY2hhbmdlLVxuICAgICAgLy8gYmFzZWQgaGlzdG9yeSwgdGhlbiBgbmF2aWdhdGVgIGJlY29tZXMgYSBwYWdlIHJlZnJlc2guXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRyaWdnZXIpIHJldHVybiB0aGlzLmxvYWRVcmwoZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdGhlIGhhc2ggbG9jYXRpb24sIGVpdGhlciByZXBsYWNpbmcgdGhlIGN1cnJlbnQgZW50cnksIG9yIGFkZGluZ1xuICAgIC8vIGEgbmV3IG9uZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5LlxuICAgIF91cGRhdGVIYXNoOiBmdW5jdGlvbihsb2NhdGlvbiwgZnJhZ21lbnQsIHJlcGxhY2UpIHtcbiAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oamF2YXNjcmlwdDp8IykuKiQvLCAnJyk7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoaHJlZiArICcjJyArIGZyYWdtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgcmVxdWlyZSB0aGF0IGBoYXNoYCBjb250YWlucyBhIGxlYWRpbmcgIy5cbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjJyArIGZyYWdtZW50O1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuICAvLyBDcmVhdGUgdGhlIGRlZmF1bHQgQmFja2JvbmUuaGlzdG9yeS5cbiAgQmFja2JvbmUuaGlzdG9yeSA9IG5ldyBIaXN0b3J5O1xuXG4gIC8vIEhlbHBlcnNcbiAgLy8gLS0tLS0tLVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4gZm9yIHN1YmNsYXNzZXMuXG4gIC8vIFNpbWlsYXIgdG8gYGdvb2cuaW5oZXJpdHNgLCBidXQgdXNlcyBhIGhhc2ggb2YgcHJvdG90eXBlIHByb3BlcnRpZXMgYW5kXG4gIC8vIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZXh0ZW5kZWQuXG4gIHZhciBleHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuICAgIHZhciBjaGlsZDtcblxuICAgIC8vIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIG5ldyBzdWJjbGFzcyBpcyBlaXRoZXIgZGVmaW5lZCBieSB5b3VcbiAgICAvLyAodGhlIFwiY29uc3RydWN0b3JcIiBwcm9wZXJ0eSBpbiB5b3VyIGBleHRlbmRgIGRlZmluaXRpb24pLCBvciBkZWZhdWx0ZWRcbiAgICAvLyBieSB1cyB0byBzaW1wbHkgY2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yLlxuICAgIGlmIChwcm90b1Byb3BzICYmIF8uaGFzKHByb3RvUHJvcHMsICdjb25zdHJ1Y3RvcicpKSB7XG4gICAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIH1cblxuICAgIC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuICAgIF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuICAgIC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG4gICAgLy8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbiBhbmQgYWRkIHRoZSBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAgICBjaGlsZC5wcm90b3R5cGUgPSBfLmNyZWF0ZShwYXJlbnQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBjaGlsZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjaGlsZDtcblxuICAgIC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWRcbiAgICAvLyBsYXRlci5cbiAgICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9O1xuXG4gIC8vIFNldCB1cCBpbmhlcml0YW5jZSBmb3IgdGhlIG1vZGVsLCBjb2xsZWN0aW9uLCByb3V0ZXIsIHZpZXcgYW5kIGhpc3RvcnkuXG4gIE1vZGVsLmV4dGVuZCA9IENvbGxlY3Rpb24uZXh0ZW5kID0gUm91dGVyLmV4dGVuZCA9IFZpZXcuZXh0ZW5kID0gSGlzdG9yeS5leHRlbmQgPSBleHRlbmQ7XG5cbiAgLy8gVGhyb3cgYW4gZXJyb3Igd2hlbiBhIFVSTCBpcyBuZWVkZWQsIGFuZCBub25lIGlzIHN1cHBsaWVkLlxuICB2YXIgdXJsRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgXCJ1cmxcIiBwcm9wZXJ0eSBvciBmdW5jdGlvbiBtdXN0IGJlIHNwZWNpZmllZCcpO1xuICB9O1xuXG4gIC8vIFdyYXAgYW4gb3B0aW9uYWwgZXJyb3IgY2FsbGJhY2sgd2l0aCBhIGZhbGxiYWNrIGVycm9yIGV2ZW50LlxuICB2YXIgd3JhcEVycm9yID0gZnVuY3Rpb24obW9kZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgZXJyb3IgPSBvcHRpb25zLmVycm9yO1xuICAgIG9wdGlvbnMuZXJyb3IgPSBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBpZiAoZXJyb3IpIGVycm9yLmNhbGwob3B0aW9ucy5jb250ZXh0LCBtb2RlbCwgcmVzcCwgb3B0aW9ucyk7XG4gICAgICBtb2RlbC50cmlnZ2VyKCdlcnJvcicsIG1vZGVsLCByZXNwLCBvcHRpb25zKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBCYWNrYm9uZTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhY2tib25lL2JhY2tib25lLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuOC4zXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQsXG4gICAgbmF0aXZlQ3JlYXRlICAgICAgID0gT2JqZWN0LmNyZWF0ZTtcblxuICAvLyBOYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG4gIHZhciBDdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdC5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS44LjMnO1xuXG4gIC8vIEludGVybmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlZmZpY2llbnQgKGZvciBjdXJyZW50IGVuZ2luZXMpIHZlcnNpb25cbiAgLy8gb2YgdGhlIHBhc3NlZC1pbiBjYWxsYmFjaywgdG8gYmUgcmVwZWF0ZWRseSBhcHBsaWVkIGluIG90aGVyIFVuZGVyc2NvcmVcbiAgLy8gZnVuY3Rpb25zLlxuICB2YXIgb3B0aW1pemVDYiA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQsIGFyZ0NvdW50KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgcmV0dXJuIGZ1bmM7XG4gICAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCB2YWx1ZSwgb3RoZXIpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICB9O1xuICAgICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEEgbW9zdGx5LWludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNhbGxiYWNrcyB0aGF0IGNhbiBiZSBhcHBsaWVkXG4gIC8vIHRvIGVhY2ggZWxlbWVudCBpbiBhIGNvbGxlY3Rpb24sIHJldHVybmluZyB0aGUgZGVzaXJlZCByZXN1bHQg4oCUIGVpdGhlclxuICAvLyBpZGVudGl0eSwgYW4gYXJiaXRyYXJ5IGNhbGxiYWNrLCBhIHByb3BlcnR5IG1hdGNoZXIsIG9yIGEgcHJvcGVydHkgYWNjZXNzb3IuXG4gIHZhciBjYiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXy5pZGVudGl0eTtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIG9wdGltaXplQ2IodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbiAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkpIHJldHVybiBfLm1hdGNoZXIodmFsdWUpO1xuICAgIHJldHVybiBfLnByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgXy5pdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNiKHZhbHVlLCBjb250ZXh0LCBJbmZpbml0eSk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbiAgdmFyIGNyZWF0ZUFzc2lnbmVyID0gZnVuY3Rpb24oa2V5c0Z1bmMsIHVuZGVmaW5lZE9ubHkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCAyIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgIGtleXMgPSBrZXlzRnVuYyhzb3VyY2UpLFxuICAgICAgICAgICAgbCA9IGtleXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmICghdW5kZWZpbmVkT25seSB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gYW5vdGhlci5cbiAgdmFyIGJhc2VDcmVhdGUgPSBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICBpZiAoIV8uaXNPYmplY3QocHJvdG90eXBlKSkgcmV0dXJuIHt9O1xuICAgIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgICBDdG9yLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gICAgQ3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHByb3BlcnR5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbiAgLy8gc2hvdWxkIGJlIGl0ZXJhdGVkIGFzIGFuIGFycmF5IG9yIGFzIGFuIG9iamVjdFxuICAvLyBSZWxhdGVkOiBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuICAvLyBBdm9pZHMgYSB2ZXJ5IG5hc3R5IGlPUyA4IEpJVCBidWcgb24gQVJNLTY0LiAjMjA5NFxuICB2YXIgTUFYX0FSUkFZX0lOREVYID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIGdldExlbmd0aCA9IHByb3BlcnR5KCdsZW5ndGgnKTtcbiAgdmFyIGlzQXJyYXlMaWtlID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBsZW5ndGggPT0gJ251bWJlcicgJiYgbGVuZ3RoID49IDAgJiYgbGVuZ3RoIDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfTtcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIHJhdyBvYmplY3RzIGluIGFkZGl0aW9uIHRvIGFycmF5LWxpa2VzLiBUcmVhdHMgYWxsXG4gIC8vIHNwYXJzZSBhcnJheS1saWtlcyBhcyBpZiB0aGV5IHdlcmUgZGVuc2UuXG4gIF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBpLCBsZW5ndGg7XG4gICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVyYXRlZShvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudC5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIHJlc3VsdHMgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICByZXN1bHRzW2luZGV4XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24gaXRlcmF0aW5nIGxlZnQgb3IgcmlnaHQuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZShkaXIpIHtcbiAgICAvLyBPcHRpbWl6ZWQgaXRlcmF0b3IgZnVuY3Rpb24gYXMgdXNpbmcgYXJndW1lbnRzLmxlbmd0aFxuICAgIC8vIGluIHRoZSBtYWluIGZ1bmN0aW9uIHdpbGwgZGVvcHRpbWl6ZSB0aGUsIHNlZSAjMTk5MS5cbiAgICBmdW5jdGlvbiBpdGVyYXRvcihvYmosIGl0ZXJhdGVlLCBtZW1vLCBrZXlzLCBpbmRleCwgbGVuZ3RoKSB7XG4gICAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICAgIHZhciBjdXJyZW50S2V5ID0ga2V5cyA/IGtleXNbaW5kZXhdIDogaW5kZXg7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRlZShtZW1vLCBvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgbWVtbywgY29udGV4dCkge1xuICAgICAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCA0KTtcbiAgICAgIHZhciBrZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYgXy5rZXlzKG9iaiksXG4gICAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXIgPiAwID8gMCA6IGxlbmd0aCAtIDE7XG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGluaXRpYWwgdmFsdWUgaWYgbm9uZSBpcyBwcm92aWRlZC5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBtZW1vID0gb2JqW2tleXMgPyBrZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgICAgaW5kZXggKz0gZGlyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdG9yKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGtleXMsIGluZGV4LCBsZW5ndGgpO1xuICAgIH07XG4gIH1cblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gY3JlYXRlUmVkdWNlKDEpO1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGNyZWF0ZVJlZHVjZSgtMSk7XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGtleTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAga2V5ID0gXy5maW5kSW5kZXgob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBfLmZpbmRLZXkob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIH1cbiAgICBpZiAoa2V5ICE9PSB2b2lkIDAgJiYga2V5ICE9PSAtMSkgcmV0dXJuIG9ialtrZXldO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgXy5uZWdhdGUoY2IocHJlZGljYXRlKSksIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmICghcHJlZGljYXRlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBfLmtleXMob2JqKSxcbiAgICAgICAgbGVuZ3RoID0gKGtleXMgfHwgb2JqKS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzID8ga2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gaXRlbSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlc2AgYW5kIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZXMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gICAgcmV0dXJuIF8uaW5kZXhPZihvYmosIGl0ZW0sIGZyb21JbmRleCkgPj0gMDtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdO1xuICAgICAgcmV0dXJuIGZ1bmMgPT0gbnVsbCA/IGZ1bmMgOiBmdW5jLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBfLnByb3BlcnR5KGtleSkpO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLmZpbmQob2JqLCBfLm1hdGNoZXIoYXR0cnMpKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgICAgdmFsdWUsIGNvbXB1dGVkO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsICYmIG9iaiAhPSBudWxsKSB7XG4gICAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogXy52YWx1ZXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICAgIGlmICh2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgICAgaWYgKGNvbXB1dGVkID4gbGFzdENvbXB1dGVkIHx8IGNvbXB1dGVkID09PSAtSW5maW5pdHkgJiYgcmVzdWx0ID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IEluZmluaXR5LFxuICAgICAgICB2YWx1ZSwgY29tcHV0ZWQ7XG4gICAgaWYgKGl0ZXJhdGVlID09IG51bGwgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgIG9iaiA9IGlzQXJyYXlMaWtlKG9iaikgPyBvYmogOiBfLnZhbHVlcyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IG9ialtpXTtcbiAgICAgICAgaWYgKHZhbHVlIDwgcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgICBfLmVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgICBpZiAoY29tcHV0ZWQgPCBsYXN0Q29tcHV0ZWQgfHwgY29tcHV0ZWQgPT09IEluZmluaXR5ICYmIHJlc3VsdCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhIGNvbGxlY3Rpb24sIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGVcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgc2V0ID0gaXNBcnJheUxpa2Uob2JqKSA/IG9iaiA6IF8udmFsdWVzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IHNldC5sZW5ndGg7XG4gICAgdmFyIHNodWZmbGVkID0gQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIHJhbmQ7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oMCwgaW5kZXgpO1xuICAgICAgaWYgKHJhbmQgIT09IGluZGV4KSBzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gc2V0W2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYSBjb2xsZWN0aW9uLlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSB7XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IF8udmFsdWVzKG9iaik7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHJldHVybiBfLnNodWZmbGUob2JqKS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSk7XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdGVlLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0ZWUodmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgaWYgKF8uaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgIGlmIChfLmhhcyhyZXN1bHQsIGtleSkpIHJlc3VsdFtrZXldKys7IGVsc2UgcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiBpc0FycmF5TGlrZShvYmopID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byB0d28gYXJyYXlzOiBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIHNhdGlzZnkgdGhlIGdpdmVuXG4gIC8vIHByZWRpY2F0ZSwgYW5kIG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgZG8gbm90IHNhdGlzZnkgdGhlIHByZWRpY2F0ZS5cbiAgXy5wYXJ0aXRpb24gPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIHBhc3MgPSBbXSwgZmFpbCA9IFtdO1xuICAgIF8uZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iaikge1xuICAgICAgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBvYmopID8gcGFzcyA6IGZhaWwpLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBbcGFzcywgZmFpbF07XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgICByZXR1cm4gXy5pbml0aWFsKGFycmF5LCBhcnJheS5sZW5ndGggLSBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gXy5yZXN0KGFycmF5LCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSBuKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBzdHJpY3QsIHN0YXJ0SW5kZXgpIHtcbiAgICB2YXIgb3V0cHV0ID0gW10sIGlkeCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXggfHwgMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGlucHV0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAgIC8vZmxhdHRlbiBjdXJyZW50IGxldmVsIG9mIGFycmF5IG9yIGFyZ3VtZW50cyBvYmplY3RcbiAgICAgICAgaWYgKCFzaGFsbG93KSB2YWx1ZSA9IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIHN0cmljdCk7XG4gICAgICAgIHZhciBqID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBvdXRwdXQubGVuZ3RoICs9IGxlbjtcbiAgICAgICAgd2hpbGUgKGogPCBsZW4pIHtcbiAgICAgICAgICBvdXRwdXRbaWR4KytdID0gdmFsdWVbaisrXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc3RyaWN0KSB7XG4gICAgICAgIG91dHB1dFtpZHgrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIGZhbHNlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFfLmlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRlZTtcbiAgICAgIGl0ZXJhdGVlID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0ZWUgIT0gbnVsbCkgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpLCBhcnJheSkgOiB2YWx1ZTtcbiAgICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgICBpZiAoIWkgfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuICAgICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBpZiAoIV8uY29udGFpbnMoc2VlbiwgY29tcHV0ZWQpKSB7XG4gICAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIV8uY29udGFpbnMocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoZmxhdHRlbihhcmd1bWVudHMsIHRydWUsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgICBpZiAoXy5jb250YWlucyhyZXN1bHQsIGl0ZW0pKSBjb250aW51ZTtcbiAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgYXJnc0xlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICghXy5jb250YWlucyhhcmd1bWVudHNbal0sIGl0ZW0pKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBmbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSwgdHJ1ZSwgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW56aXAoYXJndW1lbnRzKTtcbiAgfTtcblxuICAvLyBDb21wbGVtZW50IG9mIF8uemlwLiBVbnppcCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyBhbmQgZ3JvdXBzXG4gIC8vIGVhY2ggYXJyYXkncyBlbGVtZW50cyBvbiBzaGFyZWQgaW5kaWNlc1xuICBfLnVuemlwID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgXy5tYXgoYXJyYXksIGdldExlbmd0aCkubGVuZ3RoIHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICByZXN1bHRbaW5kZXhdID0gXy5wbHVjayhhcnJheSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChsaXN0KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gR2VuZXJhdG9yIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmluZEluZGV4IGFuZCBmaW5kTGFzdEluZGV4IGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcihkaXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgICAgdmFyIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgcHJlZGljYXRlIHRlc3RcbiAgXy5maW5kSW5kZXggPSBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcigxKTtcbiAgXy5maW5kTGFzdEluZGV4ID0gY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbbWlkXSkgPCB2YWx1ZSkgbG93ID0gbWlkICsgMTsgZWxzZSBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRvciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGluZGV4T2YgYW5kIGxhc3RJbmRleE9mIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVJbmRleEZpbmRlcihkaXIsIHByZWRpY2F0ZUZpbmQsIHNvcnRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICAgIHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgICBpID0gaWR4ID49IDAgPyBpZHggOiBNYXRoLm1heChpZHggKyBsZW5ndGgsIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVuZ3RoID0gaWR4ID49IDAgPyBNYXRoLm1pbihpZHggKyAxLCBsZW5ndGgpIDogaWR4ICsgbGVuZ3RoICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0ZWRJbmRleCAmJiBpZHggJiYgbGVuZ3RoKSB7XG4gICAgICAgIGlkeCA9IHNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgXy5pc05hTik7XG4gICAgICAgIHJldHVybiBpZHggPj0gMCA/IGlkeCArIGkgOiAtMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaWR4ID0gZGlyID4gMCA/IGkgOiBsZW5ndGggLSAxOyBpZHggPj0gMCAmJiBpZHggPCBsZW5ndGg7IGlkeCArPSBkaXIpIHtcbiAgICAgICAgaWYgKGFycmF5W2lkeF0gPT09IGl0ZW0pIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbiAgLy8gb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKDEsIF8uZmluZEluZGV4LCBfLnNvcnRlZEluZGV4KTtcbiAgXy5sYXN0SW5kZXhPZiA9IGNyZWF0ZUluZGV4RmluZGVyKC0xLCBfLmZpbmRMYXN0SW5kZXgpO1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBsZW5ndGg7IGlkeCsrLCBzdGFydCArPSBzdGVwKSB7XG4gICAgICByYW5nZVtpZHhdID0gc3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGV4ZWN1dGUgYSBmdW5jdGlvbiBhcyBhIGNvbnN0cnVjdG9yXG4gIC8vIG9yIGEgbm9ybWFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50c1xuICB2YXIgZXhlY3V0ZUJvdW5kID0gZnVuY3Rpb24oc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICAgIGlmICghKGNhbGxpbmdDb250ZXh0IGluc3RhbmNlb2YgYm91bmRGdW5jKSkgcmV0dXJuIHNvdXJjZUZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgdmFyIHNlbGYgPSBiYXNlQ3JlYXRlKHNvdXJjZUZ1bmMucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICBpZiAoXy5pc09iamVjdChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICAgIHJldHVybiBib3VuZDtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LiBfIGFjdHNcbiAgLy8gYXMgYSBwbGFjZWhvbGRlciwgYWxsb3dpbmcgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyB0byBiZSBwcmUtZmlsbGVkLlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgICB2YXIgYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IF8gPyBhcmd1bWVudHNbcG9zaXRpb24rK10gOiBib3VuZEFyZ3NbaV07XG4gICAgICB9XG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICAgIHJldHVybiBleGVjdXRlQm91bmQoZnVuYywgYm91bmQsIHRoaXMsIHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9O1xuXG4gIC8vIEJpbmQgYSBudW1iZXIgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gUmVtYWluaW5nIGFyZ3VtZW50c1xuICAvLyBhcmUgdGhlIG1ldGhvZCBuYW1lcyB0byBiZSBib3VuZC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0IGFsbCBjYWxsYmFja3NcbiAgLy8gZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwga2V5O1xuICAgIGlmIChsZW5ndGggPD0gMSkgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzJyk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbaV07XG4gICAgICBvYmpba2V5XSA9IF8uYmluZChvYmpba2V5XSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGNhY2hlID0gbWVtb2l6ZS5jYWNoZTtcbiAgICAgIHZhciBhZGRyZXNzID0gJycgKyAoaGFzaGVyID8gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrZXkpO1xuICAgICAgaWYgKCFfLmhhcyhjYWNoZSwgYWRkcmVzcykpIGNhY2hlW2FkZHJlc3NdID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIGNhY2hlW2FkZHJlc3NdO1xuICAgIH07XG4gICAgbWVtb2l6ZS5jYWNoZSA9IHt9O1xuICAgIHJldHVybiBtZW1vaXplO1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IF8ucGFydGlhbChfLmRlbGF5LCBfLCAxKTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBfLm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gXy5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhc3QgPSBfLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBfLnBhcnRpYWwod3JhcHBlciwgZnVuYyk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbiAgXy5uZWdhdGUgPSBmdW5jdGlvbihwcmVkaWNhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIXByZWRpY2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gc3RhcnQ7XG4gICAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdoaWxlIChpLS0pIHJlc3VsdCA9IGFyZ3NbaV0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBvbiBhbmQgYWZ0ZXIgdGhlIE50aCBjYWxsLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZSBOdGggY2FsbC5cbiAgXy5iZWZvcmUgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHZhciBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzID4gMCkge1xuICAgICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzIDw9IDEpIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gXy5wYXJ0aWFsKF8uYmVmb3JlLCAyKTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBLZXlzIGluIElFIDwgOSB0aGF0IHdvbid0IGJlIGl0ZXJhdGVkIGJ5IGBmb3Iga2V5IGluIC4uLmAgYW5kIHRodXMgbWlzc2VkLlxuICB2YXIgaGFzRW51bUJ1ZyA9ICF7dG9TdHJpbmc6IG51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuICB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gICAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcHJvdG8gPSAoXy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yKSAmJiBjb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHx8IE9ialByb3RvO1xuXG4gICAgLy8gQ29uc3RydWN0b3IgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICAgIGlmIChfLmhhcyhvYmosIHByb3ApICYmICFfLmNvbnRhaW5zKGtleXMsIHByb3ApKSBrZXlzLnB1c2gocHJvcCk7XG5cbiAgICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25vbkVudW1JZHhdO1xuICAgICAgaWYgKHByb3AgaW4gb2JqICYmIG9ialtwcm9wXSAhPT0gcHJvdG9bcHJvcF0gJiYgIV8uY29udGFpbnMoa2V5cywgcHJvcCkpIHtcbiAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgLy8gQWhlbSwgSUUgPCA5LlxuICAgIGlmIChoYXNFbnVtQnVnKSBjb2xsZWN0Tm9uRW51bVByb3BzKG9iaiwga2V5cyk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcyBvZiBhbiBvYmplY3QuXG4gIF8uYWxsS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gW107XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgICAvLyBBaGVtLCBJRSA8IDkuXG4gICAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgb2JqZWN0XG4gIC8vIEluIGNvbnRyYXN0IHRvIF8ubWFwIGl0IHJldHVybnMgYW4gb2JqZWN0XG4gIF8ubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIHZhciBrZXlzID0gIF8ua2V5cyhvYmopLFxuICAgICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgIHJlc3VsdHMgPSB7fSxcbiAgICAgICAgICBjdXJyZW50S2V5O1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjdXJyZW50S2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgIHJlc3VsdHNbY3VycmVudEtleV0gPSBpdGVyYXRlZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGNyZWF0ZUFzc2lnbmVyKF8uYWxsS2V5cyk7XG5cbiAgLy8gQXNzaWducyBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgb3duIHByb3BlcnRpZXMgaW4gdGhlIHBhc3NlZC1pbiBvYmplY3QocylcbiAgLy8gKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ24pXG4gIF8uZXh0ZW5kT3duID0gXy5hc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihfLmtleXMpO1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSBwcmVkaWNhdGUgdGVzdFxuICBfLmZpbmRLZXkgPSBmdW5jdGlvbihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKSwga2V5O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmplY3QsIG9pdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSB7fSwgb2JqID0gb2JqZWN0LCBpdGVyYXRlZSwga2V5cztcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihvaXRlcmF0ZWUpKSB7XG4gICAgICBrZXlzID0gXy5hbGxLZXlzKG9iaik7XG4gICAgICBpdGVyYXRlZSA9IG9wdGltaXplQ2Iob2l0ZXJhdGVlLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IGZsYXR0ZW4oYXJndW1lbnRzLCBmYWxzZSwgZmFsc2UsIDEpO1xuICAgICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHsgcmV0dXJuIGtleSBpbiBvYmo7IH07XG4gICAgICBvYmogPSBPYmplY3Qob2JqKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgICAgaXRlcmF0ZWUgPSBfLm5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5tYXAoZmxhdHRlbihhcmd1bWVudHMsIGZhbHNlLCBmYWxzZSwgMSksIFN0cmluZyk7XG4gICAgICBpdGVyYXRlZSA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICFfLmNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gXy5waWNrKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBjcmVhdGVBc3NpZ25lcihfLmFsbEtleXMsIHRydWUpO1xuXG4gIC8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbiAgLy8gSWYgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBwcm92aWRlZCB0aGVuIHRoZXkgd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAgLy8gY3JlYXRlZCBvYmplY3QuXG4gIF8uY3JlYXRlID0gZnVuY3Rpb24ocHJvdG90eXBlLCBwcm9wcykge1xuICAgIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gICAgaWYgKHByb3BzKSBfLmV4dGVuZE93bihyZXN1bHQsIHByb3BzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHNldCBvZiBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5pc01hdGNoID0gZnVuY3Rpb24ob2JqZWN0LCBhdHRycykge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKGF0dHJzKSwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgICB2YXIgb2JqID0gT2JqZWN0KG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoYXR0cnNba2V5XSAhPT0gb2JqW2tleV0gfHwgIShrZXkgaW4gb2JqKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiAnJyArIGEgPT09ICcnICsgYjtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOXG4gICAgICAgIGlmICgrYSAhPT0gK2EpIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgIH1cblxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoJ2NvbnN0cnVjdG9yJyBpbiBhICYmICdjb25zdHJ1Y3RvcicgaW4gYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChhcmVBcnJheXMpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhhKSwga2V5O1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgICBpZiAoXy5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgICAgaWYgKCEoXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0FycmF5TGlrZShvYmopICYmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikgfHwgXy5pc0FyZ3VtZW50cyhvYmopKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgcmV0dXJuIF8ua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIW9iajtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNFcnJvci5cbiAgXy5lYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIF8uaGFzKG9iaiwgJ2NhbGxlZScpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuIFdvcmsgYXJvdW5kIHNvbWUgdHlwZW9mIGJ1Z3MgaW4gb2xkIHY4LFxuICAvLyBJRSAxMSAoIzE2MjEpLCBhbmQgaW4gU2FmYXJpIDggKCMxOTI5KS5cbiAgaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0ZWVzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb25zLiBPZnRlbiB1c2VmdWwgb3V0c2lkZSBvZiBVbmRlcnNjb3JlLlxuICBfLmNvbnN0YW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBfLm5vb3AgPSBmdW5jdGlvbigpe307XG5cbiAgXy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gIC8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbiAgXy5wcm9wZXJ0eU9mID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gZnVuY3Rpb24oKXt9IDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgcHJlZGljYXRlIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2ZcbiAgLy8gYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ubWF0Y2hlciA9IF8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgYXR0cnMgPSBfLmV4dGVuZE93bih7fSwgYXR0cnMpO1xuICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBfLmlzTWF0Y2gob2JqLCBhdHRycyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwgY29udGV4dCwgMSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlc2NhcGVNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAnYCc6ICcmI3g2MDsnXG4gIH07XG4gIHZhciB1bmVzY2FwZU1hcCA9IF8uaW52ZXJ0KGVzY2FwZU1hcCk7XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xuICAgIH07XG4gICAgLy8gUmVnZXhlcyBmb3IgaWRlbnRpZnlpbmcgYSBrZXkgdGhhdCBuZWVkcyB0byBiZSBlc2NhcGVkXG4gICAgdmFyIHNvdXJjZSA9ICcoPzonICsgXy5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XG4gICAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIF8uZXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xuICBfLnVuZXNjYXBlID0gY3JlYXRlRXNjYXBlcih1bmVzY2FwZU1hcCk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSwgZmFsbGJhY2spIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHZvaWQgMCA6IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlID0gZmFsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZXIsIGVzY2FwZUNoYXIpO1xuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZmVzdC5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArICdyZXR1cm4gX19wO1xcbic7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24uIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgICBpbnN0YW5jZS5fY2hhaW4gPSB0cnVlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9iaikge1xuICAgIHJldHVybiBpbnN0YW5jZS5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBfLmVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIF8uZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgXy5lYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0KHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgXy5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgfTtcblxuICAvLyBQcm92aWRlIHVud3JhcHBpbmcgcHJveHkgZm9yIHNvbWUgbWV0aG9kcyB1c2VkIGluIGVuZ2luZSBvcGVyYXRpb25zXG4gIC8vIHN1Y2ggYXMgYXJpdGhtZXRpYyBhbmQgSlNPTiBzdHJpbmdpZmljYXRpb24uXG4gIF8ucHJvdG90eXBlLnZhbHVlT2YgPSBfLnByb3RvdHlwZS50b0pTT04gPSBfLnByb3RvdHlwZS52YWx1ZTtcblxuICBfLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuX3dyYXBwZWQ7XG4gIH07XG5cbiAgLy8gQU1EIHJlZ2lzdHJhdGlvbiBoYXBwZW5zIGF0IHRoZSBlbmQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQgbG9hZGVyc1xuICAvLyB0aGF0IG1heSBub3QgZW5mb3JjZSBuZXh0LXR1cm4gc2VtYW50aWNzIG9uIG1vZHVsZXMuIEV2ZW4gdGhvdWdoIGdlbmVyYWxcbiAgLy8gcHJhY3RpY2UgZm9yIEFNRCByZWdpc3RyYXRpb24gaXMgdG8gYmUgYW5vbnltb3VzLCB1bmRlcnNjb3JlIHJlZ2lzdGVyc1xuICAvLyBhcyBhIG5hbWVkIG1vZHVsZSBiZWNhdXNlLCBsaWtlIGpRdWVyeSwgaXQgaXMgYSBiYXNlIGxpYnJhcnkgdGhhdCBpc1xuICAvLyBwb3B1bGFyIGVub3VnaCB0byBiZSBidW5kbGVkIGluIGEgdGhpcmQgcGFydHkgbGliLCBidXQgbm90IGJlIHBhcnQgb2ZcbiAgLy8gYW4gQU1EIGxvYWQgcmVxdWVzdC4gVGhvc2UgY2FzZXMgY291bGQgZ2VuZXJhdGUgYW4gZXJyb3Igd2hlbiBhblxuICAvLyBhbm9ueW1vdXMgZGVmaW5lKCkgaXMgY2FsbGVkIG91dHNpZGUgb2YgYSBsb2FkZXIgcmVxdWVzdC5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgndW5kZXJzY29yZScsIFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9XG59LmNhbGwodGhpcykpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbGF5b3V0L21haW4tZm9vdGVyLmRvdFwiOiA2NCxcblx0XCIuL2xheW91dC9tYWluLWhlYWRlci5kb3RcIjogNjUsXG5cdFwiLi9wYWdlcy9hYm91dC1wYWdlLmRvdFwiOiA2Nixcblx0XCIuL3BhZ2VzL2NvbnRhY3QtcGFnZS5kb3RcIjogNjcsXG5cdFwiLi9wYWdlcy9wb3J0Zm9saW8tcGFnZS5kb3RcIjogNjgsXG5cdFwiLi9wYWdlcy9za2lsbHMtcGFnZS5kb3RcIjogNjlcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdGVtcGxhdGVzIF5cXC5cXC8uKlxcLmRvdCRcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbi8qKi8pIHtcbnZhciBvdXQ9Jyc7cmV0dXJuIG91dDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdGVtcGxhdGVzL2xheW91dC9tYWluLWZvb3Rlci5kb3RcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbi8qKi8pIHtcbnZhciBvdXQ9JzxmaWd1cmUgY2xhc3M9XCJhdmF0YXJcIj4gPGZpZ2NhcHRpb24gY2xhc3M9XCJhdmF0YXItdGl0bGVcIj4nKyhpdC5jb21tb25JbmZvLmZ1bGxOYW1lKSsnPC9maWdjYXB0aW9uPiA8aW1nIHNyYz1cIicrKGl0LmNvbW1vbkluZm8uYXZhdGFyU3JjKSsnXCIgYWx0PVwiYXZhdGFyXCIvPjwvZmlndXJlPjx1bCBjbGFzcz1cIm1haW4tbmF2XCI+IDxsaSBjbGFzcz1cIm1haW4tbmF2LWxpXCI+IDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJtYWluLW5hdi1pdGVtIGZuLW5hdi1pdGVtIGFjdGl2ZVwiPiA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+IDxzcGFuPkFib3V0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSBjbGFzcz1cIm1haW4tbmF2LWxpXCI+IDxhIGhyZWY9XCIvc2tpbGxzXCIgY2xhc3M9XCJtYWluLW5hdi1pdGVtIGZuLW5hdi1pdGVtXCI+IDxpIGNsYXNzPVwiZmEgZmEtZ2VhcnNcIj48L2k+IDxzcGFuPlNraWxsczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgY2xhc3M9XCJtYWluLW5hdi1saVwiPiA8YSBocmVmPVwiL3BvcnRmb2xpb1wiIGNsYXNzPVwibWFpbi1uYXYtaXRlbSBmbi1uYXYtaXRlbVwiPiA8aSBjbGFzcz1cImZhIGZhLWZvbGRlclwiPjwvaT4gPHNwYW4+UG9ydGZvbGlvPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSBjbGFzcz1cIm1haW4tbmF2LWxpXCI+IDxhIGhyZWY9XCIvY29udGFjdFwiIGNsYXNzPVwibWFpbi1uYXYtaXRlbSBmbi1uYXYtaXRlbVwiPiA8aSBjbGFzcz1cImZhIGZhLXBob25lXCI+PC9pPiA8c3Bhbj5Db250YWN0PC9zcGFuPiA8L2E+IDwvbGk+PC91bD48dWwgY2xhc3M9XCJzb2NpYWwtbGlua3NcIj4gJzt2YXIgYXJyMT1pdC5zb2NpYWxMaW5rcztpZihhcnIxKXt2YXIgbGluayxpMT0tMSxsMT1hcnIxLmxlbmd0aC0xO3doaWxlKGkxPGwxKXtsaW5rPWFycjFbaTErPTFdO291dCs9JyA8bGkgY2xhc3M9XCJzb2NpYWwtbGlua3MtbGlcIj4gPGEgaHJlZj1cIicrKGxpbmsuaHJlZikrJ1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEgZmEtJysobGluay5pY29uKSsnXCI+PC9pPjwvYT4gPC9saT4gJzt9IH0gb3V0Kz0nPC91bD4nO3JldHVybiBvdXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3RlbXBsYXRlcy9sYXlvdXQvbWFpbi1oZWFkZXIuZG90XG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4vKiovKSB7XG52YXIgb3V0PSc8ZGl2IGNsYXNzPVwicGFnZSBhYm91dC1wYWdlXCI+IDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbiB3aG9faV9hbVwiPiA8aDEgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+V2hvIGkgYW08L2gxPiA8aDIgY2xhc3M9XCJ3aG9faV9hbS10aXRsZVwiPiA8c3BhbiBjbGFzcz1cIndob19pX2FtLXRpdGxlX19uYW1lXCI+JysoaXQuY29tbW9uSW5mby5mdWxsTmFtZSkrJzwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ3aG9faV9hbS10aXRsZV9fcG9zaXRpb25cIj4nKyhpdC5jb21tb25JbmZvLnBvc2l0aW9uKSsnPC9zcGFuPiA8L2gyPiA8cCBjbGFzcz1cIndob19pX2FtLWFib3V0XCI+JysoaXQuY29tbW9uSW5mby5pbnRyb1dvcmRzKSsnPC9wPiA8dGFibGUgY2xhc3M9XCJ3aG9faV9hbS10YWJsZVwiPiA8dGJvZHk+ICc7dmFyIGFycjE9aXQuY29tbW9uSW5mby5kZXRhaWxzO2lmKGFycjEpe3ZhciBkZXRhaWwsaTE9LTEsbDE9YXJyMS5sZW5ndGgtMTt3aGlsZShpMTxsMSl7ZGV0YWlsPWFycjFbaTErPTFdO291dCs9JyA8dHIgY2xhc3M9XCJ3aG9faV9hbS10YWJsZV9fdHJcIj4gPHRkIGNsYXNzPVwid2hvX2lfYW0tdGFibGVfX3RoXCI+JysoZGV0YWlsLnRpdGxlKSsnPC90ZD4gPHRkIGNsYXNzPVwid2hvX2lfYW0tdGFibGVfX3RkXCI+JysoZGV0YWlsLnZhbHVlKSsnPC90ZD4gPC90cj4gJzt9IH0gb3V0Kz0nIDwvdGJvZHk+IDwvdGFibGU+IDwvc2VjdGlvbj4gPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+IDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5FZHVjYXRpb248L2gyPiA8dWwgY2xhc3M9XCJleHAtbGlzdFwiPiA8aSBjbGFzcz1cImZhIGZhLWdyYWR1YXRpb24tY2FwIGV4cC1saXN0LXRpdGxlX2ljb25cIj48L2k+ICc7dmFyIGFycjI9aXQuZWR1Y2F0aW9uO2lmKGFycjIpe3ZhciBlZHUsaTI9LTEsbDI9YXJyMi5sZW5ndGgtMTt3aGlsZShpMjxsMil7ZWR1PWFycjJbaTIrPTFdO291dCs9JyA8bGkgY2xhc3M9XCJleHAtbGlzdC1pdGVtXCI+IDxoMyBjbGFzcz1cImV4cC1saXN0LWl0ZW1fX3RpdGxlXCI+IDxzcGFuIGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fdGl0bGVfX3Bvc2l0aW9uXCI+JysoZWR1LnBvc2l0aW9uKSsnPC9zcGFuPiAmbmJzcDstJm5ic3A7IDxzcGFuIGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fdGl0bGVfX3BsYWNlXCI+JysoZWR1LnBsYWNlKSsnPC9zcGFuPiA8L2gzPiA8ZGl2IGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fZGF0ZVwiPiA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyIGV4cC1saXN0LWl0ZW1fX2RhdGVfX2ljb25cIj48L2k+IDxzcGFuIGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fZGF0ZV9fc3RhcnRcIj4nKyhlZHUuc3RhcnREYXRlKSsnPC9zcGFuPiAmbmJzcDstJm5ic3A7IDxzcGFuIGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fZGF0ZV9fZW5kXCI+JysoZWR1LmVuZERhdGUpKyc8L3NwYW4+IDwvZGl2PiA8cCBjbGFzcz1cImV4cC1saXN0LWl0ZW1fX2Rlc2NyaXB0aW9uXCI+JysoZWR1LmRlc2NyaXB0aW9uKSsnPC9wPiA8L2xpPiAnO30gfSBvdXQrPScgPC91bD4gPC9zZWN0aW9uPiA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj4gPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkV4cGVyaWVuY2U8L2gyPiA8dWwgY2xhc3M9XCJleHAtbGlzdFwiPiA8aSBjbGFzcz1cImZhIGZhLWJyaWVmY2FzZSBleHAtbGlzdC10aXRsZV9pY29uXCI+PC9pPiAnO3ZhciBhcnIzPWl0LmV4cGlyaWVuY2U7aWYoYXJyMyl7dmFyIGV4cCxpMz0tMSxsMz1hcnIzLmxlbmd0aC0xO3doaWxlKGkzPGwzKXtleHA9YXJyM1tpMys9MV07b3V0Kz0nIDxsaSBjbGFzcz1cImV4cC1saXN0LWl0ZW1cIj4gPGgzIGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fdGl0bGVcIj4gPHNwYW4gY2xhc3M9XCJleHAtbGlzdC1pdGVtX190aXRsZV9fcG9zaXRpb25cIj4nKyhleHAucG9zaXRpb24pKyc8L3NwYW4+ICZuYnNwOy0mbmJzcDsgPHNwYW4gY2xhc3M9XCJleHAtbGlzdC1pdGVtX190aXRsZV9fcGxhY2VcIj4nKyhleHAucGxhY2UpKyc8L3NwYW4+IDwvaDM+IDxkaXYgY2xhc3M9XCJleHAtbGlzdC1pdGVtX19kYXRlXCI+IDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXIgZXhwLWxpc3QtaXRlbV9fZGF0ZV9faWNvblwiPjwvaT4gPHNwYW4gY2xhc3M9XCJleHAtbGlzdC1pdGVtX19kYXRlX19zdGFydFwiPicrKGV4cC5zdGFydERhdGUpKyc8L3NwYW4+ICZuYnNwOy0mbmJzcDsgPHNwYW4gY2xhc3M9XCJleHAtbGlzdC1pdGVtX19kYXRlX19lbmRcIj4nKyhleHAuZW5kRGF0ZSkrJzwvc3Bhbj4gPC9kaXY+IDxwIGNsYXNzPVwiZXhwLWxpc3QtaXRlbV9fZGVzY3JpcHRpb25cIj4nKyhleHAuZGVzY3JpcHRpb24pKyc8L3A+IDwvbGk+ICc7fSB9IG91dCs9JyA8L3VsPiA8L3NlY3Rpb24+IDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPiA8aDEgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+U2VydmljZXM8L2gxPiA8dWwgY2xhc3M9XCJpY29ucy1saXN0XCI+ICc7dmFyIGFycjQ9aXQuc2VydmljZXM7aWYoYXJyNCl7dmFyIHNlcnZpY2UsaTQ9LTEsbDQ9YXJyNC5sZW5ndGgtMTt3aGlsZShpNDxsNCl7c2VydmljZT1hcnI0W2k0Kz0xXTtvdXQrPScgPGxpIGNsYXNzPVwiaWNvbnMtbGlzdC1pdGVtXCI+IDxpIGNsYXNzPVwiZmEgZmEtJysoc2VydmljZS5pY29uKSsnIGljb25zLWxpc3QtaXRlbV9faWNvblwiPjwvaT4gPGg0IGNsYXNzPVwiaWNvbnMtbGlzdC1pdGVtX190aXRsZVwiPicrKHNlcnZpY2UudGl0bGUpKyc8L2g0PiA8cCBjbGFzcz1cImljb25zLWxpc3QtaXRlbV9fZGVzY3JpcHRpb25cIj4nKyhzZXJ2aWNlLmRlc2NyaXB0aW9uKSsnPC9wPiA8L2xpPiAnO30gfSBvdXQrPScgPC91bD4gPC9zZWN0aW9uPiA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj4gPGgxIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkhvYmJpZXM8L2gxPiA8dWwgY2xhc3M9XCJpY29ucy1saXN0XCI+ICc7dmFyIGFycjU9aXQuaG9iYmllcztpZihhcnI1KXt2YXIgaG9iYnksaTU9LTEsbDU9YXJyNS5sZW5ndGgtMTt3aGlsZShpNTxsNSl7aG9iYnk9YXJyNVtpNSs9MV07b3V0Kz0nIDxsaSBjbGFzcz1cImljb25zLWxpc3QtaXRlbVwiPiA8aSBjbGFzcz1cImZhIGZhLScrKGhvYmJ5Lmljb24pKycgaWNvbnMtbGlzdC1pdGVtX19pY29uXCI+PC9pPiA8aDQgY2xhc3M9XCJpY29ucy1saXN0LWl0ZW1fX3RpdGxlXCI+JysoaG9iYnkudGl0bGUpKyc8L2g0PiA8cCBjbGFzcz1cImljb25zLWxpc3QtaXRlbV9fZGVzY3JpcHRpb25cIj4nKyhob2JieS5kZXNjcmlwdGlvbikrJzwvcD4gPC9saT4gJzt9IH0gb3V0Kz0nIDwvdWw+IDwvc2VjdGlvbj48L2Rpdj4nO3JldHVybiBvdXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3RlbXBsYXRlcy9wYWdlcy9hYm91dC1wYWdlLmRvdFxuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhpdFxuLyoqLykge1xudmFyIG91dD0nJzsgdmFyIGNvbnRhY3RzID0gaXQuY29tbW9uSW5mby5kZXRhaWxzLmZpbHRlcihmdW5jdGlvbiAoZGV0YWlsKSB7IHJldHVybiBkZXRhaWwuY29udGFjdDsgfSk7IG91dCs9JzxkaXYgY2xhc3M9XCJwYWdlIGFib3V0LXBhZ2VcIj4gPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIHdob19pX2FtXCI+IDxoMSBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5NYXAgbG9jYXRpb248L2gxPiA8ZGl2IGNsYXNzPVwiY29udGFjdC1tYXBcIj4gPGRpdiBjbGFzcz1cImNvbnRhY3QtbWFwLWluc3RhbmNlIGZuLW1hcFwiPjwvZGl2PiA8L2Rpdj4gPC9zZWN0aW9uPiA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj4gPGgxIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkNvbnRhY3QgSW5mbzwvaDE+ICc7dmFyIGFycjE9Y29udGFjdHM7aWYoYXJyMSl7dmFyIGNvbnRhY3QsaTE9LTEsbDE9YXJyMS5sZW5ndGgtMTt3aGlsZShpMTxsMSl7Y29udGFjdD1hcnIxW2kxKz0xXTtvdXQrPScgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb1wiPiA8c3BhbiBjbGFzcz1cImNvbnRhY3QtaW5mby1pY29uXCI+IDxpIGNsYXNzPVwiZmEgZmEtJysoY29udGFjdC5jb250YWN0SWNvbikrJ1wiPjwvaT4gPC9zcGFuPiA8aDUgY2xhc3M9XCJjb250YWN0LWluZm8tdGV4dFwiPicrKGNvbnRhY3QudmFsdWUpKyc8L2g1PiA8L2Rpdj4gJzt9IH0gb3V0Kz0nIDwvc2VjdGlvbj48L2Rpdj4nO3JldHVybiBvdXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3RlbXBsYXRlcy9wYWdlcy9jb250YWN0LXBhZ2UuZG90XG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKGl0XG4vKiovKSB7XG52YXIgb3V0PSc8ZGl2IGNsYXNzPVwicGFnZSBhYm91dC1wYWdlXCI+IDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbiB3aG9faV9hbVwiPiA8aDEgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+UG9ydGZvbGlvPC9oMT4gPHVsIGNsYXNzPVwicG9ydGZvbGlvLWxpc3RcIj4gJzt2YXIgYXJyMT1pdC5wcm9qZWN0cztpZihhcnIxKXt2YXIgcHJvamVjdCxpMT0tMSxsMT1hcnIxLmxlbmd0aC0xO3doaWxlKGkxPGwxKXtwcm9qZWN0PWFycjFbaTErPTFdO291dCs9JyA8bGkgY2xhc3M9XCJwb3J0Zm9saW8tbGlzdC1pdGVtXCI+IDxpbWcgY2xhc3M9XCJwb3J0Zm9saW8tbGlzdC1pdGVtX19pbWdcIiBzcmM9XCInKyhwcm9qZWN0LmltZykrJ1wiIGFsdD1cInBvcnRmb2xpb1wiLz4gPGEgY2xhc3M9XCJwb3J0Zm9saW8tbGlzdC1pdGVtX19vdmVybGF5XCIgaHJlZj1cIicrKHByb2plY3QuaHJlZikrJ1wiIHRhcmdldD1cIl9ibGFua1wiPiA8c3BhbiBjbGFzcz1cInBvcnRmb2xpby1saXN0LWl0ZW1fX292ZXJsYXlfX2NlbnRlclwiPiA8c3BhbiBjbGFzcz1cInBvcnRmb2xpby1saXN0LWl0ZW1fX292ZXJsYXlfX25hbWVcIj4nKyhwcm9qZWN0Lm5hbWUpKyc8L3NwYW4+IDxzcGFuIGNsYXNzPVwicG9ydGZvbGlvLWxpc3QtaXRlbV9fb3ZlcmxheV9fcG9zaXRpb25cIj4nKyhwcm9qZWN0LnBvc2l0aW9uKSsnPC9zcGFuPiA8L3NwYW4+IDwvYT4gPC9saT4gJzt9IH0gb3V0Kz0nIDwvdWw+IDwvc2VjdGlvbj48L2Rpdj4nO3JldHVybiBvdXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3RlbXBsYXRlcy9wYWdlcy9wb3J0Zm9saW8tcGFnZS5kb3RcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMoaXRcbi8qKi8pIHtcbnZhciBvdXQ9JzxkaXYgY2xhc3M9XCJwYWdlIHNraWxsLXBhZ2VcIj4gPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+IDxoMSBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5UZWNoIFNraWxsczwvaDE+IDx1bCBjbGFzcz1cInRlY2gtc2tpbGxzXCI+ICc7dmFyIGFycjE9aXQuY29tbW9uVGVjaFNraWxscztpZihhcnIxKXt2YXIgc2tpbGwsaTE9LTEsbDE9YXJyMS5sZW5ndGgtMTt3aGlsZShpMTxsMSl7c2tpbGw9YXJyMVtpMSs9MV07b3V0Kz0nIDxsaSBjbGFzcz1cInRlY2gtc2tpbGxzLWl0ZW1cIj4gPGRpdiBjbGFzcz1cInRlY2gtc2tpbGxzLXRpdGxlXCI+IDxoNCBjbGFzcz1cInRlY2gtc2tpbGxzLXRpdGxlX19uYW1lXCI+Jysoc2tpbGwudGl0bGUpKyc8L2g0PiA8cCBjbGFzcz1cInRlY2gtc2tpbGxzLXRpdGxlX19kZXNjcmlwdGlvblwiPicrKHNraWxsLmRlc2NyaXB0aW9uKSsnPC9wPiA8ZGl2IGNsYXNzPVwidGVjaC1za2lsbHMtdGl0bGVfX2tleXdvcmRzXCI+IDxzcGFuIGNsYXNzPVwidGVjaC1za2lsbHMtdGl0bGVfX2tleXdvcmRzX19sYWJlbFwiPktleXdvcmRzOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ0ZWNoLXNraWxscy10aXRsZV9fa2V5d29yZHNfX3RleHRcIj4nKyhza2lsbC5rZXl3b3JkcykrJzwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwidGVjaC1za2lsbHMtcHJvZ3Jlc3MgZm4tdGVjaC1za2lsbHMtcHJvZ3Jlc3NcIiBkYXRhLXBlcmNlbnQ9XCInKyhza2lsbC5sZXZlbCkrJ1wiIGRhdGEtY29sb3I9XCIjNTU4ZTZhXCIgZGF0YS1mb250LWNvbG9yPVwiIzU1OGU2YVwiIGRhdGEtbGluZS13aWR0aD1cIjVcIj4xMjM8L2Rpdj4gPC9saT4gJzt9IH0gb3V0Kz0nIDwvdWw+IDwvc2VjdGlvbj4gPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCI+IDxoMSBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5MYW5ndWFnZXMgU2tpbGxzPC9oMT4gPHVsIGNsYXNzPVwibGFuZ3VhZ2Utc2tpbGxzXCI+ICc7dmFyIGFycjI9aXQubGFuZ3VhZ2VTa2lsbHM7aWYoYXJyMil7dmFyIHNraWxsLGkyPS0xLGwyPWFycjIubGVuZ3RoLTE7d2hpbGUoaTI8bDIpe3NraWxsPWFycjJbaTIrPTFdO291dCs9JyA8bGkgY2xhc3M9XCJsYW5ndWFnZS1za2lsbHMtaXRlbVwiPiA8aDQgY2xhc3M9XCJsYW5ndWFnZS1za2lsbHMtdGl0bGVcIj4nKyhza2lsbC50aXRsZSkrJyA8c3BhbiBjbGFzcz1cInNtYWxsXCI+Jysoc2tpbGwubGV2ZWxJbldvcmRzKSsnPC9zcGFuPjwvaDQ+IDxkaXYgY2xhc3M9XCJsYW5ndWFnZS1za2lsbHMtcHJvZ3Jlc3MgZm4tbGFuZ3VhZ2Utc2tpbGxzLXByb2dyZXNzXCIgZGF0YS1wZXJjZW50PVwiJysoc2tpbGwubGV2ZWwpKydcIiBkYXRhLWNvbG9yPVwiIzU1OGU2YVwiPjwvZGl2PiA8cCBjbGFzcz1cImxhbmd1YWdlLXNraWxscy1kZXNjcmlwdGlvblwiPicrKHNraWxsLmRlc2NyaXB0aW9uKSsnPC9wPiA8L2xpPiAnO30gfSBvdXQrPScgPC91bD4gPC9zZWN0aW9uPiA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj4gPGgxIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlRvb2xzIFNraWxsczwvaDE+IDx1bCBjbGFzcz1cInRvb2xzLXNraWxsc1wiPiAnO3ZhciBhcnIzPWl0LnRvb2xzU2tpbGxzO2lmKGFycjMpe3ZhciBza2lsbCxpMz0tMSxsMz1hcnIzLmxlbmd0aC0xO3doaWxlKGkzPGwzKXtza2lsbD1hcnIzW2kzKz0xXTtvdXQrPScgPGxpIGNsYXNzPVwidG9vbHMtc2tpbGxzLWl0ZW1cIj4gPGg0IGNsYXNzPVwidG9vbHMtc2tpbGxzLXRpdGxlXCI+Jysoc2tpbGwudGl0bGUpKyc8L2g0PiA8dWwgY2xhc3M9XCJ0b29scy1za2lsbHMtcHJvZ3Jlc3MgZm4tdG9vbHMtc2tpbGxzLXByb2dyZXNzXCIgZGF0YS1wZXJjZW50PVwiJysoc2tpbGwubGV2ZWwpKydcIiBkYXRhLWNvbG9yPVwiIzU1OGU2YVwiPjwvdWw+IDwvbGk+ICc7fSB9IG91dCs9JyA8L3VsPiA8L3NlY3Rpb24+PC9kaXY+JztyZXR1cm4gb3V0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90ZW1wbGF0ZXMvcGFnZXMvc2tpbGxzLXBhZ2UuZG90XG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG12YyA9IHJlcXVpcmUoJ2xpYi9tdmMnKTtcbnZhciBsYXlvdXRNYW5hZ2VyID0gcmVxdWlyZSgnbGF5b3V0L2xheW91dC1tYW5hZ2VyJyk7XG5cbnZhciBIb21lUGFnZSA9IHJlcXVpcmUoJ3BhZ2VzL2hvbWUtcGFnZScpO1xudmFyIFNraWxsc1BhZ2UgPSByZXF1aXJlKCdwYWdlcy9za2lsbHMtcGFnZScpO1xudmFyIFBvcnRmb2xpb1BhZ2UgPSByZXF1aXJlKCdwYWdlcy9wb3J0Zm9saW8tcGFnZScpO1xudmFyIENvbnRhY3RQYWdlID0gcmVxdWlyZSgncGFnZXMvY29udGFjdC1wYWdlJyk7XG5cbnZhciBwYWdlcyA9IHtcbiAgICBob21lOiBuZXcgSG9tZVBhZ2UoKSxcbiAgICBza2lsbDogbmV3IFNraWxsc1BhZ2UoKSxcbiAgICBwb3J0Zm9saW86IG5ldyBQb3J0Zm9saW9QYWdlKCksXG4gICAgY29udGFjdDogbmV3IENvbnRhY3RQYWdlKClcbn07XG5cbi8qKlxuICogQmFzZSByb3V0ZXJcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleHRlbmRzIFJvdXRlclxuICovXG52YXIgQmFzZVJvdXRlciA9IG12Yy5Sb3V0ZXIuZXh0ZW5kKHtcbiAgICBjdXJyZW50UGFnZTogbnVsbCxcblxuICAgIHBhZ2VzOiB7XG4gICAgICAgICcnOiBwYWdlcy5ob21lLFxuICAgICAgICBkZWZhdWx0OiBwYWdlcy5ob21lLFxuICAgICAgICBza2lsbHM6IHBhZ2VzLnNraWxsLFxuICAgICAgICBwb3J0Zm9saW86IHBhZ2VzLnBvcnRmb2xpbyxcbiAgICAgICAgY29udGFjdDogcGFnZXMuY29udGFjdFxuICAgIH0sXG5cbiAgICByb3V0ZXM6IHtcbiAgICAgICAgJypyb3V0ZSc6ICdyb3V0ZUhhbmRsZXInXG4gICAgfSxcblxuICAgIHNob3dQYWdlOiBmdW5jdGlvbiAobmV3UGFnZSkge1xuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuXG4gICAgICAgIGN1cnJlbnRQYWdlICYmIGN1cnJlbnRQYWdlLnJlbW92ZSgpO1xuXG4gICAgICAgIG5ld1BhZ2UuYXBwZW5kKCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XG4gICAgfSxcblxuICAgIHJvdXRlSGFuZGxlcjogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIHBhZ2VLZXkgPSBwYXRoIHx8ICcnO1xuICAgICAgICB2YXIgbmV3UGFnZSA9IHRoaXMucGFnZXNbcGFnZUtleV0gfHwgdGhpcy5wYWdlcy5kZWZhdWx0O1xuXG4gICAgICAgIHRoaXMuc2hvd1BhZ2UobmV3UGFnZSk7XG5cbiAgICAgICAgbGF5b3V0TWFuYWdlci51cGRhdGVNYWluTmF2KHBhZ2VLZXkpO1xuICAgIH1cbn0pO1xuXG4vLyBDcmVhdGUgaW5zdGFuY2Ugb2Ygcm91dGVyIGFuZCBzdGFydCBoaXN0b3J5IGZ1bmN0aW9uYWxpdHlcbnZhciBiYXNlUm91dGVyID0gbmV3IEJhc2VSb3V0ZXIoKTtcbm12Yy5oaXN0b3J5LnN0YXJ0KHtwdXNoU3RhdGU6IHRydWV9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUm91dGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9iYXNlL2Jhc2Utcm91dGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBQYWdlVmlldyA9IHJlcXVpcmUoJ2Jhc2UvcGFnZS12aWV3Jyk7XG5cbnZhciBIb21lUGFnZSA9IFBhZ2VWaWV3LmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6ICdwYWdlcy9hYm91dC1wYWdlJyxcbiAgICB1cmw6ICdkYXRhL2Fib3V0Lmpzb24nXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lUGFnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvcGFnZXMvaG9tZS1wYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBCYXNlVmlldyA9IHJlcXVpcmUoJ2Jhc2UvYmFzZS12aWV3Jyk7XG52YXIgZG9tID0gcmVxdWlyZSgnbGliL2RvbScpO1xuXG52YXIgJHBhZ2VDb250YWluZXIgPSBkb20oJy5wYWdlLWNvbnRhaW5lcicpO1xuXG52YXIgUGFnZVZpZXcgPSBCYXNlVmlldy5leHRlbmQoe1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQmFzZVZpZXcucHJvdG90eXBlLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLnJlbmRlckFmdGVyRmV0Y2goKTtcbiAgICB9LFxuXG4gICAgYXBwZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwYWdlQ29udGFpbmVyLmFwcGVuZCh0aGlzLmVsKTtcblxuICAgICAgICBpZiAodGhpcy5fcmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbW91bnRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcywgJ3JlbmRlcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignbW91bnRlZCcpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VWaWV3O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9iYXNlL3BhZ2Utdmlldy5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUGFnZVZpZXcgPSByZXF1aXJlKCdiYXNlL3BhZ2UtdmlldycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJ2xpYi9kb20nKTtcbnZhciBDaXJjbGVQcm9ncmVzc0JhciA9IHJlcXVpcmUoJ3Rvb2xzL3Byb2dyZXNzLWJhci9jaXJjbGUnKTtcbnZhciBMaW5lYXJQcm9ncmVzc0JhciA9IHJlcXVpcmUoJ3Rvb2xzL3Byb2dyZXNzLWJhci9saW5lYXInKTtcbnZhciBQb2ludHNQcm9ncmVzc0JhciA9IHJlcXVpcmUoJ3Rvb2xzL3Byb2dyZXNzLWJhci9wb2ludHMnKTtcblxudmFyIFNraWxsc1BhZ2UgPSBQYWdlVmlldy5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiAncGFnZXMvc2tpbGxzLXBhZ2UnLFxuICAgIHVybDogJ2RhdGEvc2tpbGxzLmpzb24nLFxuXG4gICAgY2lyY2xlUHJvZ3Jlc3NlczogW10sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBhZ2VWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcywgJ21vdW50ZWQnLCB0aGlzLnJ1blByb2dyZXNzZXMuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHJ1blByb2dyZXNzZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kKCcuZm4tdGVjaC1za2lsbHMtcHJvZ3Jlc3MnKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIGNpcmNsZVByb2dyZXNzID0gbmV3IENpcmNsZVByb2dyZXNzQmFyKHsgZWw6IGVsIH0pO1xuXG4gICAgICAgICAgICBjaXJjbGVQcm9ncmVzcy5zdGFydCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNpcmNsZVByb2dyZXNzZXMucHVzaChjaXJjbGVQcm9ncmVzcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuJCgnLmZuLWxhbmd1YWdlLXNraWxscy1wcm9ncmVzcycpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAobmV3IExpbmVhclByb2dyZXNzQmFyKHsgZWw6IGVsIH0pKS5zdGFydCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiQoJy5mbi10b29scy1za2lsbHMtcHJvZ3Jlc3MnKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgKG5ldyBQb2ludHNQcm9ncmVzc0Jhcih7IGVsOiBlbCB9KSkuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBhZ2VWaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZUV2ZW50cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIGRvbSh3aW5kb3cpLm9uKCdyZXNpemUucmVzaXplLWNpcmNsZS1wcm9ncmVzcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlUHJvZ3Jlc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaXJjbGVQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIGNpcmNsZVByb2dyZXNzLnJlZnJlc2hPblJlc2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHVuZGVsZWdhdGVFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUGFnZVZpZXcucHJvdG90eXBlLnVuZGVsZWdhdGVFdmVudHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICBkb20od2luZG93KS5vZmYoJ3Jlc2l6ZS5yZXNpemUtY2lyY2xlLXByb2dyZXNzJyk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2tpbGxzUGFnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvcGFnZXMvc2tpbGxzLXBhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEJhc2VQcm9ncmVzc0JhciA9IHJlcXVpcmUoJ2Jhc2UvcHJvZ3Jlc3MtYmFyJyk7XG5cbnZhciBDaXJjbGVQcm9ncmVzc0JhciA9IEJhc2VQcm9ncmVzc0Jhci5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiAnPGNhbnZhcz48L2NhbnZhcz48c3BhbiBjbGFzcz1cInRleHRcIj48L3NwYW4+JyxcblxuICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIHBlcmNlbnQ6IDMzLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgbGluZVdpZHRoOiAzLFxuICAgICAgICByYWRpdXM6IDEwMCxcbiAgICAgICAgbGluZUNhcDogJ3JvdW5kJywgLy8gYnV0dCwgcm91bmQgb3Igc3F1YXJlXG4gICAgICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBCYXNlUHJvZ3Jlc3NCYXIucHJvdG90eXBlLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuXG4gICAgfSxcblxuICAgIHNldEVsZW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIHRoaXMuJHRleHQgPSB0aGlzLiRlbC5maW5kKCcudGV4dCcpO1xuICAgIH0sXG5cbiAgICBzZXRFbGVtZW50c1ZpZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnNpemUgPSB0aGlzLmVsLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5vcHRpb25zLnNpemU7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLm9wdGlvbnMuc2l6ZSAvIDIsIHRoaXMub3B0aW9ucy5zaXplIC8gMik7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtMSAqIE1hdGguUEkpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMub3B0aW9ucy5zaXplLCB0aGlzLm9wdGlvbnMuc2l6ZSk7XG5cbiAgICAgICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHRleHQuY3NzKHtcbiAgICAgICAgICAgICdmb250LXNpemUnOiB0aGlzLm9wdGlvbnMuZm9udFNpemUsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLmZvbnRDb2xvcixcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6ICc1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOiAnNTAlJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbCA9IHRoaXMub3B0aW9ucy5kdXJhdGlvbiAvIHRoaXMub3B0aW9ucy5wZXJjZW50O1xuICAgICAgICB2YXIgY3VycmVudFBlcmNlbnQgPSAxO1xuXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMudGlja2VyLmJpbmQodGhpcywgaW50ZXJ2YWwsIGN1cnJlbnRQZXJjZW50KSwgaW50ZXJ2YWwpO1xuICAgIH0sXG5cbiAgICB0aWNrZXI6IGZ1bmN0aW9uIChpbnRlcnZhbCwgY3VycmVudFBlcmNlbnQpIHtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGN1cnJlbnRQZXJjZW50KyspO1xuXG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA8PSBwYXJzZUludCh0aGlzLm9wdGlvbnMucGVyY2VudCwgMTApKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLnRpY2tlci5iaW5kKHRoaXMsIGludGVydmFsLCBjdXJyZW50UGVyY2VudCksIGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkcmF3Q2lyY2xlOiBmdW5jdGlvbiAocGVyY2VudCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKDAsIDAsIChvcHRpb25zLnNpemUgLSBvcHRpb25zLmxpbmVXaWR0aCkgLyAyLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjEpJztcbiAgICAgICAgY3R4LmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXA7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBvcHRpb25zLmxpbmVXaWR0aCAtIDI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygwLCAwLCAob3B0aW9ucy5zaXplIC0gb3B0aW9ucy5saW5lV2lkdGgpIC8gMiwgMCwgTWF0aC5QSSAqIDIgKiBwZXJjZW50IC8gMTAwLCBmYWxzZSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IG9wdGlvbnMuY29sb3I7XG4gICAgICAgIGN0eC5saW5lQ2FwID0gb3B0aW9ucy5saW5lQ2FwO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5saW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuJHRleHQuaHRtbChwZXJjZW50ICsgJyUnKTtcbiAgICB9LFxuXG4gICAgcmVmcmVzaE9uUmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudHNWaWV3KCk7XG4gICAgICAgIHRoaXMuZHJhd0NpcmNsZSh0aGlzLm9wdGlvbnMucGVyY2VudCk7XG4gICAgfVxuXG4gICAgLy9kZWxlZ2F0ZUV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgIGRvbSh3aW5kb3cpLm9uKCdyZXNpemUucmVzaXplLWNpcmNsZS1wcm9ncmVzcycsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgdGhpcy5zZXRFbGVtZW50c1ZpZXcoKTtcbiAgICAvLyAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKCk7XG4gICAgLy8gICAgfS5iaW5kKHRoaXMpKTtcbiAgICAvL1xuICAgIC8vICAgIHRoaXMubGlzdGVuVG8oZG9tKCkpO1xuICAgIC8vXG4gICAgLy8gICAgQmFzZVByb2dyZXNzQmFyLnByb3RvdHlwZS5kZWxlZ2F0ZUV2ZW50cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vfSxcbiAgICAvL1xuICAgIC8vdW5kZWxlZ2F0ZUV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgIGRvbSh3aW5kb3cpLm9mZigncmVzaXplLnJlc2l6ZS1jaXJjbGUtcHJvZ3Jlc3MnKTtcbiAgICAvL1xuICAgIC8vICAgIEJhc2VQcm9ncmVzc0Jhci5wcm90b3R5cGUudW5kZWxlZ2F0ZUV2ZW50cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2lyY2xlUHJvZ3Jlc3NCYXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL3Rvb2xzL3Byb2dyZXNzLWJhci9jaXJjbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEJhc2VWaWV3ID0gcmVxdWlyZSgnYmFzZS9iYXNlLXZpZXcnKTtcblxudmFyIEJhc2VQcm9ncmVzc0JhciA9IEJhc2VWaWV3LmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6ICcnLFxuXG4gICAgZGVmYXVsdE9wdGlvbnM6IHt9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50KG9wdGlvbnMuZWwpO1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRzVmlldygpO1xuICAgIH0sXG5cbiAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZWwuZ2V0KDApLmRhdGFzZXQ7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kZWZhdWx0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IGRhdGFba2V5XSB8fCB0aGlzLmRlZmF1bHRPcHRpb25zW2tleV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKTtcbiAgICB9LFxuXG4gICAgc2V0RWxlbWVudHM6IGZ1bmN0aW9uICgpIHt9LFxuXG4gICAgc2V0RWxlbWVudHNWaWV3OiBmdW5jdGlvbiAoKSB7fSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVByb2dyZXNzQmFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9iYXNlL3Byb2dyZXNzLWJhci5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgQmFzZVByb2dyZXNzQmFyID0gcmVxdWlyZSgnYmFzZS9wcm9ncmVzcy1iYXInKTtcblxudmFyIExpbmVhclByb2dyZXNzQmFyID0gQmFzZVByb2dyZXNzQmFyLmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImxhbmd1YWdlLXNraWxscy1wcm9ncmVzc19fYmFyIGZuLWJhclwiPjwvc3Bhbj4nLFxuXG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgcGVyY2VudDogMzMsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgYW5pbWF0aW9uRnVuY3Rpb246ICdsaW5lYXInXG4gICAgfSxcblxuICAgIHNldEVsZW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGJhciA9IHRoaXMuJCgnLmZuLWJhcicpO1xuICAgIH0sXG5cbiAgICBzZXRFbGVtZW50c1ZpZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAnYm9yZGVyJzogJzAuMnJlbSBzb2xpZCAnICsgb3B0aW9ucy5jb2xvcixcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMS41cmVtJyxcbiAgICAgICAgICAgICdib3JkZXItcmFkaXVzJzogJzAuNzVyZW0nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJhci5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogb3B0aW9ucy5jb2xvcixcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ3dpZHRoICcgKyAob3B0aW9ucy5kdXJhdGlvbiAvIDEwMDApICsgJ3MgJyArIG9wdGlvbnMuYW5pbWF0aW9uRnVuY3Rpb24sXG4gICAgICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogJ3dpZHRoICcgKyAob3B0aW9ucy5kdXJhdGlvbiAvIDEwMDApICsgJ3MgJyArIG9wdGlvbnMuYW5pbWF0aW9uRnVuY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGJhci5jc3MoJ3dpZHRoJywgdGhpcy5vcHRpb25zLnBlcmNlbnQgKyAnJScpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhclByb2dyZXNzQmFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy90b29scy9wcm9ncmVzcy1iYXIvbGluZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBCYXNlUHJvZ3Jlc3NCYXIgPSByZXF1aXJlKCdiYXNlL3Byb2dyZXNzLWJhcicpO1xuXG52YXIgTGluZWFyUHJvZ3Jlc3NCYXIgPSBCYXNlUHJvZ3Jlc3NCYXIuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogJzxsaSBjbGFzcz1cInRvb2xzLXNraWxscy1wcm9ncmVzc19faXRlbSBmbi1pdGVtXCI+PC9saT4nLFxuXG4gICAgdG90YWxMZW5ndGg6IDEwLFxuXG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgcGVyY2VudDogMzMsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBkZWxheTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICBhbmltYXRpb25GdW5jdGlvbjogJ2xpbmVhcidcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBodG1sID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvdGFsTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy50ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwoaHRtbCk7XG4gICAgfSxcblxuICAgIHNldEVsZW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kKCcuZm4taXRlbScpO1xuICAgIH0sXG5cbiAgICBzZXRFbGVtZW50c1ZpZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy4kaXRlbXMuY3NzKHtcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ2JhY2tncm91bmQgJyArIChvcHRpb25zLmR1cmF0aW9uIC8gMTAwMCkgKyAncyAnICsgb3B0aW9ucy5hbmltYXRpb25GdW5jdGlvbixcbiAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24nOiAnYmFja2dyb3VuZCAnICsgKG9wdGlvbnMuZHVyYXRpb24gLyAxMDAwKSArICdzICcgKyBvcHRpb25zLmFuaW1hdGlvbkZ1bmN0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgdmFyIGxlbmd0aCA9IE1hdGgucm91bmQob3B0aW9ucy5wZXJjZW50IC8gMTApO1xuICAgICAgICB2YXIgZmxhZyA9IDA7XG5cbiAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kaXRlbXMuZXEoZmxhZysrKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBvcHRpb25zLmNvbG9yKTtcblxuICAgICAgICAgICAgaWYgKGZsYWcgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIG9wdGlvbnMuZGVsYXkpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhclByb2dyZXNzQmFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy90b29scy9wcm9ncmVzcy1iYXIvcG9pbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBQYWdlVmlldyA9IHJlcXVpcmUoJ2Jhc2UvcGFnZS12aWV3Jyk7XG5cbnZhciBQb3J0Zm9saW9QYWdlID0gUGFnZVZpZXcuZXh0ZW5kKHtcbiAgICB1cmw6ICdkYXRhL3BvcnRmb2xpby5qc29uJyxcbiAgICB0ZW1wbGF0ZTogJ3BhZ2VzL3BvcnRmb2xpby1wYWdlJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9ydGZvbGlvUGFnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvcGFnZXMvcG9ydGZvbGlvLXBhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFBhZ2VWaWV3ID0gcmVxdWlyZSgnYmFzZS9wYWdlLXZpZXcnKTtcblxudmFyIENvbnRhY3RQYWdlID0gUGFnZVZpZXcuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2NvbnRhY3QtcGFnZScsXG4gICAgdXJsOiAnZGF0YS9hYm91dC5qc29uJyxcblxuICAgIGdvb2dsZU1hcHNBcGlTcmM6ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanMnLFxuXG4gICAgZ29vZ2xlTWFwT3B0aW9uczoge1xuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgIGxhdDogNTMuOTA0MzEyODczMzI4MDYsXG4gICAgICAgICAgICBsbmc6IDI3LjU2MTI5MDE4OTYyMzgzM1xuICAgICAgICB9LFxuICAgICAgICB6b29tOiAxMVxuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBhZ2VWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcywgJ21vdW50ZWQnLCB0aGlzLnJlbmRlckNvbnRhY3RNYXAuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHJlbmRlckNvbnRhY3RNYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sb2FkR29vZ2xlTWFwc0FwaSgpLnRoZW4odGhpcy5jcmVhdGVHb29nbGVNYXAuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGxvYWRHb29nbGVNYXBzQXBpOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IHRoaXMuZ29vZ2xlTWFwc0FwaVNyYztcblxuICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVHb29nbGVNYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hcERpdiA9IHRoaXMuJCgnLmZuLW1hcCcpLmdldCgwKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdvb2dsZU1hcE9wdGlvbnM7XG5cbiAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRGl2LCBvcHRpb25zKTtcblxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogb3B0aW9ucy5jZW50ZXIsXG4gICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0UGFnZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvcGFnZXMvY29udGFjdC1wYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2aUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==