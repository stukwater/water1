(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c63507a"],{"152b":function(t,e,a){"use strict";var r=a("86f3"),n=a.n(r);n.a},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7"),a("e6cf");function r(t,e,a,r,n,o,i){try{var l=t[o](i),s=l.value}catch(c){return void a(c)}l.done?e(s):Promise.resolve(s).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var i=t.apply(e,a);function l(t){r(i,n,o,l,s,"next",t)}function s(t){r(i,n,o,l,s,"throw",t)}l(void 0)}))}}},"81d5":function(t,e,a){"use strict";var r=a("7b0b"),n=a("23cb"),o=a("50c4");t.exports=function(t){var e=r(this),a=o(e.length),i=arguments.length,l=n(i>1?arguments[1]:void 0,a),s=i>2?arguments[2]:void 0,c=void 0===s?a:n(s,a);while(c>l)e[l++]=t;return e}},"86f3":function(t,e,a){},"96cf":function(t,e,a){var r=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function s(t,e,a,r){var n=e&&e.prototype instanceof m?e:m,o=Object.create(n.prototype),i=new E(r||[]);return o._invoke=W(t,a,i),o}function c(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var u="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function f(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(P([])));_&&_!==a&&r.call(_,o)&&(y=_);var b=g.prototype=m.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t,e){function a(n,o,i,l){var s=c(t[n],t,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,l)}),(function(t){a("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,l)}))}l(s.arg)}var n;function o(t,r){function o(){return new e((function(e,n){a(t,r,e,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function W(t,e,a){var r=u;return function(n,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===n)throw o;return A()}a.method=n,a.arg=o;while(1){var i=a.delegate;if(i){var l=k(i,a);if(l){if(l===v)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===u)throw r=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var s=c(t,e,a);if("normal"===s.type){if(r=a.done?h:d,s.arg===v)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r=h,a.method="throw",a.arg=s.arg)}}}function k(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,k(t,a),"throw"===a.method))return v;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=c(r,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,v;var o=n.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,v):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var a=t[o];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function a(){while(++n<t.length)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return f.prototype=b.constructor=g,g.constructor=f,g[l]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(C.prototype),C.prototype[i]=function(){return this},t.AsyncIterator=C,t.async=function(e,a,r,n,o){void 0===o&&(o=Promise);var i=new C(s(e,a,r,n),o);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),b[l]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return l.type="throw",l.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),D(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;D(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:P(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},cb29:function(t,e,a){var r=a("23e7"),n=a("81d5"),o=a("44d2");r({target:"Array",proto:!0},{fill:n}),o("fill")},e281:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quickSearch"},[t._m(0),a("div",{staticClass:"searchCard",style:0===t.waterPool.length?{"margin-bottom":"150px"}:{"margin-bottom":"10px"}},[t._m(1),a("el-row",{staticClass:"inputHeader",attrs:{gutter:20}},[a("el-col",{staticClass:"inputhome",attrs:{xs:24,span:10}},[t._v("請輸入住家地址")]),a("el-col",{attrs:{xs:24,span:10}},[a("el-input",{attrs:{placeholder:"地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("el-col",{staticStyle:{"text-align":"center"},attrs:{xs:24,span:4}},[a("el-button",{on:{click:t.search}},[t._v("查詢")])],1)],1),0!==t.stationlatlng.length?a("div",[a("el-card",{staticClass:"iconExplainCard"},[a("el-row",{staticClass:"iconExplainCard_row"},[a("el-col",{staticClass:"iconExplainCard_title",attrs:{xs:24,span:6}},[t._v(" 圖標說明 ")]),a("el-col",{attrs:{xs:24,span:18}},[a("el-row",t._l(t.iconimg,(function(e,r){return a("el-col",{key:e,staticClass:"iconExplain",attrs:{xs:24,span:15}},[a("img",{staticClass:"iconExplain_img",attrs:{src:e}}),a("span",[t._v(t._s(t.iconExplain[r]))])])})),1)],1)],1)],1),a("l-map",{staticClass:"map",attrs:{zoom:t.zoom,options:t.options,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.stationlatlng,(function(e,r){return a("l-marker",{key:e.name,ref:"location",refInFor:!0,attrs:{"lat-lng":e.local}},[a("l-icon",{attrs:{"icon-url":t.iconColor(r)}}),a("l-tooltip",{attrs:{options:t.tooltipOptions}},[t._v(t._s(e.name))]),a("l-popup",[t._v(t._s(e.address))])],1)}))],2),a("el-row",[0!==t.waterPool.length?a("el-col",{attrs:{xs:24,span:12}},[a("div",{staticClass:"waterpool"},[a("div",{staticClass:"childtitle"},[t._v("水庫")]),a("div",{attrs:{id:"w1"}},[t._v(t._s(t.waterPool[0].name))]),a("el-row",{staticStyle:{"text-align":"center"}},[a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_before"},[t._v("原本")]),t._v("水庫資訊")]),a("div",{attrs:{id:"originalpic"}},[t._v(" "+t._s(t.waterPool[0].capacitym3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("水位 (m) : "+t._s(t.waterPool[0].capacitym)+"m")]),a("div",[t._v(" 水庫容量 (萬立方公尺) : "+t._s(t.waterPool[0].capacitym3)+"m "),a("sup",[t._v("3")])])]),a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_after"},[t._v("目前")]),t._v("水庫資訊")]),a("canvas",{attrs:{id:"sineCanvas"}}),a("div",{attrs:{id:"percent1"}},[t._v(" 有效容量比 : "+t._s(t.waterPool[0].percent)+" % ")]),a("div",[t._v("水位 (m) : "+t._s(t.waterPool[0].nowm)+"m")]),a("div",[t._v(" 水庫容量 (萬立方公尺) : "+t._s(t.waterPool[0].nowm3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("更新時間 : "+t._s(t.waterPool[0].time))])])],1)],1)]):t._e(),a("el-col",{attrs:{xs:24,span:12}},[a("div",{staticClass:"cleanwater"},[0!==t.cleanWater.length?a("div",[a("div",{staticClass:"childtitle"},[t._v("淨水廠")]),a("div",{attrs:{id:"w2"}},[t._v(" "+t._s(t.cleanWater[0][0].name)),a("br"),t._v(" 是否通過檢驗 : "+t._s(t.cleanWater[0][0].pass)+" ")]),a("el-table",{staticClass:"dataTable",attrs:{data:t.cleanWater[0],stripe:"",fit:""}},[a("el-table-column",{attrs:{prop:"type",label:"種類"}}),a("el-table-column",{attrs:{prop:"dirty",label:"濁度"}}),a("el-table-column",{attrs:{prop:"ph",label:"PH值"}}),a("el-table-column",{attrs:{prop:"ceil",label:"大腸桿菌值"}})],1),a("div",{staticStyle:{margin:"20px 0 0 70%"}},[t._v(" 更新時間 : "+t._s(t.cleanWater[0][0].updatetime)+" ")])],1):t._e()]),0!==t.dirtyWater.length?a("div",[a("div",{staticClass:"dirtywater"},[a("div",{staticClass:"childtitle"},[t._v("汙水處理廠")]),a("div",{attrs:{id:"w3"}},[t._v(" "+t._s(t.dirtyWater[0].廠區)+" ")]),a("el-row",{staticStyle:{"text-align":"center"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[t._v("平均噸數 : "+t._s(t.dirtyWater[0].平均噸數))]),a("el-col",{attrs:{span:12}},[t._v("處理等級 : "+t._s(t.dirtyWater[0].處理等級))])],1),"初級處理"===t.dirtyWater[0].處理等級?a("el-card",{staticClass:"dirtyWaterCard"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("第一級 ( 初級 ) 處理")])]),a("div",[t._v(" 去除污水中呈懸浮狀況的 "),a("b",{staticStyle:{color:"red"}},[t._v("固體污染物質")]),t._v("，物理處理法大部分只能完結一級處理的要求。 "),a("br"),t._v("通過一級處理的污水，生化需氧量 (BOD) 一般可去除30%左右，但仍達不到排放規範。 ")])]):t._e(),"生物二級處理"===t.dirtyWater[0].處理等級?a("el-card",{staticClass:"dirtyWaterCard"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("第二級處理")])]),a("div",[t._v(" 去除污水中呈膠體和溶解狀況的 "),a("span",{staticStyle:{color:"red","font-weight":"600"}},[t._v("有機污染物質")]),t._v("。 "),a("br"),t._v(" 1. 生化需氧量( BOD ) "),a("br"),t._v("2. 化學需氧量( COD )，去除率可達90%以上，使有機污染物到達排放規範。 ")])]):t._e(),"三級處理"===t.dirtyWater[0].處理等級?a("el-card",{staticClass:"dirtyWaterCard"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("第三級處理")])]),a("div",[t._v(" 進一步處理難降解的有機物、氮和磷等，可以導致水體富營養化的 "),a("b",{staticStyle:{color:"red"}},[t._v("可溶性無機物")]),t._v("等。 "),a("br"),t._v("首要辦法有 : "),a("br"),t._v("生物脫氮除磷法、混凝沉澱法、砂濾法、活性炭吸附法、離子交換法，和電滲分析法等。 ")])]):t._e()],1)]):t._e()])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"environment"},[a("div",{staticClass:"childtitle"},[t._v("環境水體監測站")]),a("div",{attrs:{id:"w4"}},[t._v(" "+t._s(t.AllName.environmentData)+" ")]),a("div",[a("b",[t._v("監測河川名稱："+t._s(t.environmentRiver))])]),a("el-row",{staticStyle:{margin:"20px 0"}},[a("el-col",{attrs:{xs:24,span:8}},[a("div",[t._v(" ※ 若欲查詢各測站的詳細監測資料，請至以下兩個網站查詢 ")])]),a("el-col",{attrs:{xs:24,span:8}},[t._v("1. "),a("a",{attrs:{href:"https://ksenlab.ksepb.gov.tw/kh-taqm/zh-tw/WaterData.aspx"}},[t._v("高雄市政府環境保護局環境檢驗科")])]),a("el-col",{attrs:{xs:24,span:8}},[t._v("2. "),a("a",{attrs:{href:"https://wq.epa.gov.tw/Code/AdvSearch.aspx?YearSelect=3&StartYear=&EndYear=&Area=1660&PageID=5"}},[t._v("行政院環境保護署全國環境水質監測資訊網")])])],1),0!==t.NewRiverChart.yAxis.data.length?a("div",[a("div",[a("b",[t._v(t._s(t.nowYear)+"年 "+t._s(t.environmentRiver)+"汙染狀態")])]),a("chart",{staticStyle:{width:"95%",height:"150px"},attrs:{options:t.NewRiverChart,height:"300"}})],1):t._e()],1)])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"groundwater"},[a("div",{staticClass:"childtitle"},[t._v("地下水監測站")]),a("div",{attrs:{id:"w5"}},[t._v(" "+t._s(t.AllName.groundWaterData)+" ")]),t.underWater.length?a("el-row",{staticClass:"colorExplain"},[a("el-col",{staticStyle:{padding:"0px 2% 0px 0px"},attrs:{xs:3,span:5}},[a("div",{staticClass:"passBlock"})]),a("el-col",{attrs:{xs:9,span:7}},[a("span",[t._v("通過監測標準")])]),a("el-col",{staticStyle:{padding:"0px 2% 0px 0px"},attrs:{xs:3,span:5}},[a("div",{staticClass:"unpassBlock"})]),a("el-col",{attrs:{xs:9,span:7}},[a("span",[t._v("未通過監測標準")])])],1):t._e(),t._l(t.underWater,(function(e){return a("div",{key:e.name},[a("div",{staticStyle:{margin:"10px 0px 0px"}},[a("span",[a("b",[t._v("測站名稱："+t._s(e.name))])]),a("br"),a("span",{staticClass:"groundWaterdate"},[t._v("檢測日期 : "+t._s(e.date))])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:[e],"header-cell-style":{background:"#5F5F5F",color:"white",fontSize:"18px",textAlign:"center"},"cell-style":t.tableCellStyle}},[a("el-table-column",{attrs:{prop:"item1",label:"鐵"}}),a("el-table-column",{attrs:{prop:"item2",label:"錳"}}),a("el-table-column",{attrs:{prop:"item3",label:"總硬度"}}),a("el-table-column",{attrs:{prop:"item4",label:"總溶解固體物"}}),a("el-table-column",{attrs:{prop:"item5",label:"氯鹽"}}),a("el-table-column",{attrs:{prop:"item6",label:"氨氮"}}),a("el-table-column",{attrs:{prop:"item7",label:"硫酸鹽"}}),a("el-table-column",{attrs:{prop:"item8",label:"總有機碳"}}),a("el-table-column",{attrs:{prop:"item9",label:"總酚"}})],1)],1)})),0===t.underWater.length?a("div",{staticClass:"noNewestData"},[t._v(" 目前無"+t._s(t.AllName.groundWaterData)+"最新的檢測資訊 ")]):t._e()],2)])],1)],1):t._e()],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center",staticStyle:{margin:"0 15px 0 15px"}},[a("div",{staticClass:"col-12 col-xl-12 text-center"},[a("span",{staticClass:"badge badge-pill badge-info animate__animated animate__fadeInUp title",staticStyle:{"animation-duration":"1s","animation-iteration-count":"1"}},[t._v("住家水資訊快速查詢區")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"remindText"},[t._v(" ※ 本區可以查詢離住家最近的最新相關水資訊"),a("br"),t._v(" ( 包含 : 水庫、汙水處理廠、環境水體監測站、地下水監測站、淨水廠 ) ")])}],o=(a("cb29"),a("4de4"),a("4160"),a("c975"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),i=a("bc3a"),l=a.n(i),s=a("c1df"),c=a.n(s),u={data:function(){return{address:"高雄市燕巢區西燕里工程路100號",latlng:[],sumlatlng:0,minusNum:0,AllName:{waterPoolData:"",dirtyWaterData:"",environmentData:"",groundWaterData:"",cleanWaterData:""},environmentRiver:"",nowYear:"",nowYear2:"",allSiteData:[],stationlatlng:[],waterPool:[],cleanWater:[],dirtyWater:[],underWater:[],NewRiverChart:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["嚴重污染長度","中度污染長度","輕度污染長度","未(稍)受污染長度"]},grid:{left:"1%",right:"2%",bottom:"1%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:[]},series:[{name:"未(稍)受污染長度",type:"bar",stack:"总量",color:"#91c7ae",data:[]},{name:"輕度污染長度",type:"bar",stack:"总量",color:"#61a0a8",data:[]},{name:"中度污染長度",type:"bar",stack:"总量",color:"#d48265",data:[]},{name:"嚴重污染長度",type:"bar",stack:"总量",color:"#c23531",data:[]}]},zoom:11,center:[22.612786,120.442959],iconExplain:["水庫","地下水監測站","環境水體監測站","地下水監測站","淨水廠"],iconimg:["https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png","https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png","https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png","https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png","https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png"],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',options:{zoomControl:!1},tooltipOptions:{permanent:!0,offset:[10,10]}}},mounted:function(){var t=this;this.nowYear=c()(new Date).format("YYYY")-1910,this.nowYear2=c()(new Date).format("YYYY"),l.a.get("server/quickSearch.json").then((function(e){t.allSiteData=e.data,console.log(t.allSiteData)})).catch((function(t){console.log(t)}))},methods:{iconColor:function(t){return 0===t?this.iconimg[0]:1===t?this.iconimg[1]:2===t?this.iconimg[2]:3===t?this.iconimg[3]:4===t?this.iconimg[4]:void 0},search:function(){var t=this;if(this.latlng=[],this.stationlatlng=[],-1!==this.address.indexOf("高雄")){this.$geocoder.setDefaultMode("address");var e={address_line_1:this.address};this.$geocoder.send(e,(function(e){if(console.log(e),-1!==e.results[0].formatted_address.indexOf("高雄")){t.latlng.push(e.results[0].geometry.location.lat),t.latlng.push(e.results[0].geometry.location.lng),console.log(t.latlng),t.sumlatlng=t.latlng[0]+t.latlng[1],console.log(t.sumlatlng);var a=function(e){console.log(e),console.log(t.allSiteData[0][e]),t.allSiteData[0][e].forEach((function(a,r){var o=a.local[0]+a.local[1],i=o-t.sumlatlng;0===r&&(t.minusNum=Math.abs(i),t.AllName[e]=a.name,n={name:a.name,address:a.SiteAddress,local:a.local,type:e}),t.minusNum>Math.abs(i)&&(t.minusNum=Math.abs(i),t.AllName[e]=a.name,"environmentData"===e&&(t.environmentRiver=a.River),n={name:a.name,address:a.SiteAddress,local:a.local,type:e}),r==t.allSiteData[0][e].length-1&&t.stationlatlng.push(n)}))};for(var r in t.allSiteData[0]){var n;a(r)}console.log(t.AllName),console.log(t.stationlatlng),t.getWaterPool(),t.getCleanWater(),t.getDirtyWater(),t.getEnvironmentWater(),t.getUnderWater()}}))}else this.$message({message:"查詢失敗!! 抱歉目前此功能只開放高雄地區查詢",type:"warning"})},getWaterPool:function(){var t=this;l.a.get("server/water.json").then((function(e){t.waterPool=e.data,t.waterPool=t.waterPool.filter((function(e){return e.name===t.AllName.waterPoolData})),console.log(t.waterPool),window.setTimeout((function(){var e=document.getElementById("percent1");t.waterPool[0].percent<30?e.style.color="red":t.waterPool[0].percent>30&&t.waterPool[0].percent<80?e.style.color="#DAA520":e.style.color="green",t.drawWater(t.waterPool[0].percent)}),0)})).catch((function(t){console.log(t)}))},getCleanWater:function(){var t=this,e=[];this.cleanWater=[],l.a.get("server/cleanwater2.json").then((function(a){console.log(a.data),a.data.length&&(e=a.data,e=e.filter((function(e){return e.name===t.AllName.cleanWaterData}))),console.log(e);var r=[{type:"測值",name:e[0].name,pass:e[0].pass,dirty:e[0].dirty,ceil:e[0].ceil,ph:e[0].ph,updatetime:e[0].updatetime},{type:"最大限值",dirty:"2",ceil:"6.0-8.5",ph:"6"}];t.cleanWater.push(r),console.log(t.cleanWater)})).catch((function(t){console.log(t)}))},getDirtyWater:function(){var t=this;l.a.get("server/dirtywater.json").then((function(e){t.dirtyWater=e.data,t.dirtyWater=t.dirtyWater.filter((function(e){return e.廠區===t.AllName.dirtyWaterData})),console.log(t.dirtyWater)})).catch((function(t){console.log(t)}))},getEnvironmentWater:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.NewRiverChart.yAxis.data=[],-1===t.environmentRiver.indexOf("高屏溪")&&-1===t.environmentRiver.indexOf("阿公店溪")&&-1===t.environmentRiver.indexOf("二仁溪")&&-1===t.environmentRiver.indexOf("鳳山溪")||l.a.post("".concat(t.allURL,"environmentAPI/newestRiverData"),{year:t.nowYear,river:t.environmentRiver}).then((function(e){console.log(e.data),t.NewRiverChart.yAxis.data.push(e.data.data.item2),t.NewRiverChart.series[0].data.push(e.data.data.value2),t.NewRiverChart.series[1].data.push(e.data.data.value3),t.NewRiverChart.series[2].data.push(e.data.data.value4),t.NewRiverChart.series[3].data.push(e.data.data.value5)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getUnderWater:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.underWater=[],l.a.post("".concat(t.allURL,"groundWater/newestGroundData"),{sitename:t.AllName.groundWaterData,year:t.nowYear2}).then((function(e){console.log(e.data),t.underWater=e.data.newestData,console.log(t.underWater)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},tableCellStyle:function(t){var e,a=t.row,r=t.columnIndex;if(0===r&&void 0!==a.year)return"background: #fffff0";var n=0;n=void 0!==a.year?r:r+1;var o=a["item".concat(n)].substring(0,1),i=0;i=parseFloat(a["item".concat(n)]),"<"!==o&&">"!==o||(i=parseFloat(a["item".concat(n)].substr(1)));var l=[.15,.025,150,250,125,.05,125,2,.014];return e=i<l[n-1]?"background: #99DCF1":isNaN(i)?"background: white":"background: #FBD8D8",e},drawWater:function(t){var e,a,r,n,o,i,l=100,s=t/100,c=0,u=1;s>=1&&(u=.95);var d=3;function p(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),e=document.getElementById("sineCanvas"),e.width=1e3,e.height=1e3,a=e.getContext("2d"),r=e.height,n=e.width,i=0,h()}function h(){a.clearRect(0,0,n,r),v(t>80?["#77DDFF","#0044BB"]:t>30&&t<80?["#F0E68C","#B8860B"]:["#FFA07A","#FF4500"],1,1.5),c<=s&&(c+=.002,o=Math.floor(r*(u-c))),c>.8&&d<=36*s&&(d+=.05),h.seconds=h.seconds+.009,h.t=h.seconds*Math.PI,window.requestAnimFrame(h)}function v(t,e,o){a.globalAlpha=e;var i=a.createLinearGradient(0,0,n,0);i.addColorStop(0,t[0]),i.addColorStop(1,t[1]),a.fillStyle=i,a.beginPath(),m(h.t/.5,o),a.lineTo(n+10,r),a.lineTo(0,r),a.closePath(),a.fill()}function m(t,e){var r=t,s=Math.sin(r)/e;a.moveTo(i,l*s+o);for(var c=i;c<=n+10;c+=10)r=t+(-i+c)/l/e,s=Math.sin(r-0)/d,a.lineTo(c,l*s+o)}h.seconds=0,h.t=0,p()}}},d=u,p=(a("152b"),a("2877")),h=Object(p["a"])(d,r,n,!1,null,"3a2cc87b",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-8c63507a.ba4f465e.js.map