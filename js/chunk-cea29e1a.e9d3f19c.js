(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cea29e1a"],{1148:function(t,e,a){"use strict";var n=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,a){var n=a("c6b6"),i=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"5fa8":function(t,e,a){"use strict";var n=a("6999"),i=a.n(n);i.a},6999:function(t,e,a){},"81d5":function(t,e,a){"use strict";var n=a("7b0b"),i=a("23cb"),r=a("50c4");t.exports=function(t){var e=n(this),a=r(e.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,a),c=o>2?arguments[2]:void 0,l=void 0===c?a:i(c,a);while(l>s)e[s++]=t;return e}},"83f4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"waterpool"},[t._m(0),a("div",{staticClass:"childtitle one"},[t._v("高雄水庫最新水量資訊")]),a("el-row",[a("el-col",{attrs:{xs:24,span:12}},[a("el-card",{staticClass:"iconExplainCard"},[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("el-col",{staticClass:"iconExplainCard_title",attrs:{xs:6,span:7}},[t._v(" 圖標 "),a("br"),t._v("說明 ")]),a("el-col",{attrs:{xs:18,span:17}},t._l(t.iconimg,(function(e,n){return a("div",{key:e,staticClass:"iconExplain"},[a("img",{staticClass:"iconExplain_img",attrs:{src:e}}),a("span",[t._v(t._s(t.iconExplain[n]))])])})),0)],1)],1),0!==t.text.length?a("l-map",{staticClass:"map",attrs:{zoom:t.zoom,options:t.options,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.MapData,(function(e,n){return a("l-marker",{key:e.name,ref:"location",refInFor:!0,attrs:{"lat-lng":e.local}},[a("l-icon",{attrs:{"icon-url":t.iconColor(n)}}),a("l-tooltip",{attrs:{options:t.tooltipOptions}},[a("div",{staticClass:"tooltip-content"},[a("div",[t._v(t._s(e.name))])])]),a("l-popup",{staticStyle:{"text-align":"center"}},[a("div",[t._v(t._s(e.name))]),a("div",[t._v("目前有效容量比 : "+t._s(t.text[n].percent)+"%")])])],1)}))],2):t._e()],1),t.getDataFinished?a("el-col",{attrs:{xs:24,span:12}},[a("div",{staticStyle:{"margin-bottom":"5%"},attrs:{id:"w1"}},[t._v(t._s(t.text[0].name))]),a("el-row",{staticStyle:{"text-align":"center"}},[a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_before"},[t._v("原本")]),t._v("水庫資訊")]),a("div",{attrs:{id:"originalpic"},on:{mouseover:function(e){return t.animation("in","originalpic")},mouseout:function(e){return t.animation("out","originalpic")}}},[t._v(" "+t._s(t.text[0].capacitym3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("水位（m）："+t._s(t.text[0].capacitym)+"m")]),a("div",[t._v(" 水庫容量（萬立方公尺）："+t._s(t.text[0].capacitym3)+"m "),a("sup",[t._v("3")])])]),a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_after"},[t._v("目前")]),t._v("水庫資訊")]),a("canvas",{attrs:{id:"sineCanvas"},on:{mouseover:function(e){return t.animation("in","sineCanvas")},mouseout:function(e){return t.animation("out","sineCanvas")}}}),a("div",{attrs:{id:"percent1"}},[t._v("有效容量比：："+t._s(t.text[0].percent)+" %")]),a("div",[t._v("水位（m）："+t._s(t.text[0].nowm)+"m")]),a("div",[t._v(" 水庫容量（萬立方公尺）："+t._s(t.text[0].nowm3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("更新時間："+t._s(t.text[0].time))])])],1)],1):t._e()],1),a("el-row",[t.getDataFinished?a("el-col",{attrs:{span:12,xs:24}},[a("div",{staticStyle:{"margin-bottom":"5%"},attrs:{id:"w2"}},[t._v(t._s(t.text[1].name))]),a("el-row",{staticStyle:{"text-align":"center"}},[a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_before"},[t._v("原本")]),t._v("水庫資訊")]),a("div",{attrs:{id:"originalpic2"},on:{mouseover:function(e){return t.animation("in","originalpic2")},mouseout:function(e){return t.animation("out","originalpic2")}}},[t._v(" "+t._s(t.text[1].capacitym3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("水位（m）："+t._s(t.text[1].capacitym)+"m")]),a("div",[t._v(" 水庫容量（萬立方公尺）："+t._s(t.text[1].capacitym3)+"m "),a("sup",[t._v("3")])])]),a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_after"},[t._v("目前")]),t._v("水庫資訊")]),a("canvas",{attrs:{id:"sineCanvas2"},on:{mouseover:function(e){return t.animation("in","sineCanvas2")},mouseout:function(e){return t.animation("out","sineCanvas2")}}}),a("div",{attrs:{id:"percent2"}},[t._v("有效容量比 : "+t._s(t.text[1].percent)+" %")]),a("div",[t._v("水位 (m) : "+t._s(t.text[1].nowm)+"m")]),a("div",[t._v(" 水庫容量（萬立方公尺（"+t._s(t.text[1].nowm3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("更新時間："+t._s(t.text[1].time))])])],1)],1):t._e(),t.getDataFinished?a("el-col",{attrs:{span:12,xs:24}},[a("div",{staticStyle:{"margin-bottom":"5%"},attrs:{id:"w3"}},[t._v(t._s(t.text[2].name))]),a("el-row",{staticStyle:{"text-align":"center"}},[a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_before"},[t._v("原本")]),t._v("水庫資訊")]),a("div",{attrs:{id:"originalpic3"},on:{mouseover:function(e){return t.animation("in","originalpic3")},mouseout:function(e){return t.animation("out","originalpic3")}}},[t._v(" "+t._s(t.text[2].capacitym3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("水位（m）："+t._s(t.text[2].capacitym)+"m")]),a("div",[t._v(" 水庫容量（萬立方公尺）："+t._s(t.text[2].capacitym3)+"m "),a("sup",[t._v("3")])])]),a("el-col",{attrs:{span:12}},[a("div",[a("span",{staticClass:"bigWord_after"},[t._v("目前")]),t._v("水庫資訊")]),a("canvas",{attrs:{id:"sineCanvas3"},on:{mouseover:function(e){return t.animation("in","sineCanvas3")},mouseout:function(e){return t.animation("out","sineCanvas3")}}}),a("div",{attrs:{id:"percent3"}},[t._v("有效容量比 : "+t._s(t.text[2].percent)+" %")]),a("div",[t._v("水位（m）："+t._s(t.text[2].nowm)+"m")]),a("div",[t._v(" 水庫容量（萬立方公尺）："+t._s(t.text[2].nowm3)+"m "),a("sup",[t._v("3")])]),a("div",[t._v("更新時間："+t._s(t.text[2].time))])])],1)],1):t._e()],1),a("hr",{staticClass:"hr"}),a("div",{staticClass:"childtitle two"},[t._v("你知道嗎？")]),a("div",{staticClass:"content"},[a("el-row",{staticClass:"row_gutter",attrs:{gutter:50}},[a("el-col",{attrs:{xs:24,span:12}},[a("div",[t._v(" 用於評估水庫水質優養程度的指標為「"),a("span",{staticClass:"explain_heilight2"},[t._v(" 卡爾森指數(Carlson trophic state index)")]),t._v("」，簡稱"),a("span",{staticClass:"explain_heilight2"},[t._v("CTSI")]),t._v("， CTSI係以"),a("span",{staticClass:"explain_heilight2"},[t._v("水中的透明度（SD）、葉綠素a（Chl-a）")]),t._v("及 "),a("span",{staticClass:"explain_heilight2"},[t._v("總磷（TP）")]),t._v("等三項水質參數之濃度值進行計算， 再以其計算所得之指標值，判定水庫水質之優養程度。 ")]),a("el-table",{staticStyle:{margin:"30px 0"},attrs:{data:t.CTSI_tableData,"header-cell-style":{background:"#1C629C",color:"white",fontSize:"20px"},"row-style":t.tableHeaderColor}},[a("el-table-column",{attrs:{prop:"CTSI",label:"CTSI指標值"}}),a("el-table-column",{attrs:{prop:"degree",label:"水庫優養程度"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.CTSIExplain[e.$index])},slot:"content"}),a("div",[t._v(t._s(e.row.degree))])])]}}])})],1),a("div",{staticStyle:{"text-align":"right","margin-top":"15px"}},[t._v(" ※ 更多詳細卡爾森指數算法情請洽："),a("br"),a("a",{attrs:{href:"https://wq.epa.gov.tw/Code/Business/Standard.aspx"}},[t._v("卡爾森指數詳細說明")])])],1),a("el-col",{attrs:{xs:24,span:12}},[a("chart",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],staticStyle:{width:"100%",height:"300px"},attrs:{options:t.ChartOption,"element-loading-text":"等待政府資料中...",height:"350"}})],1)],1)],1),a("hr",{staticClass:"hr"}),a("div",{staticClass:"childtitle three"},[t._v("各水庫監測站進階歷史紀錄查詢")]),a("div",{staticClass:"content"},[t._m(1),a("el-tabs",{staticClass:"searchMainRiver",attrs:{"tab-position":"top",type:"border-card"},on:{"tab-click":t.search},model:{value:t.searchData.dam,callback:function(e){t.$set(t.searchData,"dam",e)},expression:"searchData.dam"}},t._l(t.searchDamName,(function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.name,disabled:!t.chartFinish,name:e.englishName}})})),1),a("el-card",{staticClass:"box-card"},[t.StationMapData.length&&t.width>=450?a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"detailSearchTitle"},[t._v("測站位置")])]),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"detailSearchTitle"},[t._v("卡爾森指數變化")])])],1):t._e(),a("el-row",{staticClass:"row_gutter",attrs:{gutter:20}},[t.StationMapData.length?a("el-col",{attrs:{xs:24,span:10}},[t.StationMapData.length&&t.width<450?a("div",{staticClass:"detailSearchTitle"},[t._v(" 測站位置 ")]):t._e(),a("div",[a("l-map",{staticClass:"map",attrs:{zoom:t.stationZoom,options:t.options,center:t.stationCenter}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.StationMapData,(function(e){return a("l-marker",{key:e.name,ref:"location",refInFor:!0,attrs:{"lat-lng":e.local}},[a("l-icon",{attrs:{"icon-url":t.iconimg[2]}}),a("l-tooltip",{attrs:{options:t.tooltipOptions}},[t._v(t._s(e.name)+" ")]),a("l-popup",{staticStyle:{"text-align":"center"}},[a("div",[t._v(t._s(e.address))])])],1)}))],2)],1)]):t._e(),a("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{xs:24,span:14,"element-loading-text":"等待政府資料中..."}},[t.StationMapData.length&&t.width<450?a("div",{staticClass:"detailSearchTitle"},[t._v(" 卡爾森指數變化 ")]):t._e(),t._l(t.searchtData[0],(function(e,n){return a("div",{key:e.name},[a("div",[t._v(t._s(e.name))]),t.chartFinish?a("chart",{staticStyle:{width:"100%",height:"150px"},attrs:{options:t.searchChartOption[n].option,height:"150"}}):t._e()],1)}))],2)],1)],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center",staticStyle:{margin:"0 15px 0 15px"}},[a("div",{staticClass:"col-12 col-xl-12 text-center"},[a("span",{staticClass:"badge badge-pill badge-info animate__animated animate__fadeInUp title",staticStyle:{"animation-duration":"1s","animation-iteration-count":"1"}},[t._v("水庫")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"20px"}},[a("b",[t._v("Tip：")]),t._v(" 點擊以下水庫，系統將會顯示該監測該水庫的所有測站位置，以及每個測站的卡爾森指數歷年變化。 ")])}],r=(a("99af"),a("cb29"),a("4de4"),a("4160"),a("c975"),a("a434"),a("b680"),a("ac1f"),a("841c"),a("159b"),a("2909")),o=a("5530"),s=(a("96cf"),a("1da1")),c=a("bc3a"),l=a.n(c),d=a("2f62"),u=a("c1df"),p=a.n(u),h={mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.width=window.innerWidth,e.next=3,t.getStationName();case 3:return t.water(),t.getCTSIdata("澄清湖",1),e.next=7,t.getCTSIdata("鳳",2);case 7:t.search();case 8:case"end":return e.stop()}}),e)})))()},computed:Object(o["a"])({},Object(d["b"])({nowChooseIndex:function(t){return t.nowChooseIndex}})),data:function(){return{width:0,CTSIExplain:["大多在低度開發的狀態下<br/>水庫污染少、水體中營養鹽濃度較低、浮游動植物含量少<br/>此時<b> ' 水質狀況相對較佳 ' <b/>","又稱為 ' 普養 ' <br/>為貧養階段到優養階段的過渡期<br/>營養鹽漸高、浮游動植物含量漸增","藻類大量繁殖造成底層缺氧<br/>水中殘留物質增加、水體透明度顯著降低<br/>可能造成魚類等水中生物無法生存"],iconExplain:["目前有效容量比 < 30%","30% < 目前有效容量比 < 80%","目前有效容量比 > 80%"],searchDamName:[{name:"阿公店水庫",englishName:"Agon"},{name:"澄清湖水庫",englishName:"Chengcing"},{name:"鳳山水庫",englishName:"Fengshan"}],CTSI_tableData:[{CTSI:"CTSI < 40",degree:"貧養狀態"},{CTSI:"40 ≦ CTSI ≦ 50",degree:"普養狀態"},{CTSI:"CTSI > 50",degree:"優養狀態"}],ChartOption:{title:{text:"100-108年高雄水庫卡爾森指數紀錄",textStyle:{color:"#006030",fontSize:16,align:"center"},itemGap:7},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["澄清湖水庫","鳳山水庫","阿公店水庫"],right:0,top:"8%"},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[]},searchChartOption:[{option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{x:30,y:20,x2:25,y2:20},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[{data:[],name:"卡爾森指數",type:"line"}]}},{option:{}},{option:{}},{option:{}}],activeNames:["1"],tooltipOptions:{permanent:!0,offset:[0,10]},getDataFinished:!1,text:[],searchtData:[],zoom:9,center:[22.712786,120.342959],stationZoom:14,stationCenter:[22.712786,120.342959],iconimg:["https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png","https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png","https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',options:{zoomControl:!1},MapData:[{name:"阿公店水庫",local:[22.812786,120.342959]},{name:"澄清湖水庫",local:[22.660768,120.353766]},{name:"鳳山水庫",local:[22.535315,120.384482]}],StationMapData:[],StationMapData_original:{Agon:[],Chengcing:[],Fengshan:[]},firstLoad:!0,chartFinish:!1,loading:!1,loading2:!1,searchData:{dam:"Agon",year:""}}},methods:{tableHeaderColor:function(t){var e=t.row;return"貧養狀態"===e.degree?{"background-color":"#FFFACD"}:"普養狀態"===e.degree?{"background-color":"#E2F0D9"}:"優養狀態"===e.degree?{"background-color":"#FFE4E1"}:void 0},getStationName:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("".concat(t.allURL,"waterPoolAPI/stationName")).then((function(e){console.log(e.data),e.data.data.forEach((function(e){var a={name:"",address:"",local:[22.812786,120.342959]};switch(a.name=e.SiteName,a.address=e.SiteAddress,a.local[0]=e.TWD97Lat,a.local[1]=e.TWD97Lon,e.DamName){case"阿公店水庫":t.StationMapData_original["Agon"].push(a);break;case"澄清湖水庫":t.StationMapData_original["Chengcing"].push(a);break;case"鳳山水庫":t.StationMapData_original["Fengshan"].push(a);break}})),console.log(t.StationMapData_original)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},search:function(){var t=this;this.loading=!0,this.chartFinish=!1,this.searchtData=[];var e="";switch(this.searchData.dam){case"Agon":e="阿公店水庫";break;case"Chengcing":e="澄清湖水庫";break;case"Fengshan":e="鳳山水庫";break}this.StationMapData=this.StationMapData_original[this.searchData.dam],console.log(this.StationMapData),this.stationCenter=this.StationMapData[0].local;var a=0,n=p()(new Date).format("YYYY");switch(this.searchData.dam){case"Agon":for(var i=2007;i<=1e4;i++){if(i>n)break;a+=1,l.a.post("".concat(this.allURL,"waterPoolAPI/waterPooldetailSearch"),{damName:e,year:i}).then((function(e){var n;console.log(e.data),(n=t.searchtData).push.apply(n,Object(r["a"])(e.data.dataArray)),t.searchtData.length==a&&(t.searchChartSetting(),t.chartFinish=!0,t.loading=!1)})).catch((function(t){console.log(t)}))}break;case"Chengcing":for(var o=2005;o<=2020;o++){if(o>n)break;a+=1,l.a.post("".concat(this.allURL,"waterPoolAPI/waterPooldetailSearch"),{damName:e,year:o}).then((function(e){var n;console.log(e.data),(n=t.searchtData).push.apply(n,Object(r["a"])(e.data.dataArray)),t.searchtData.length==a&&(t.searchChartSetting(),t.chartFinish=!0,t.loading=!1)})).catch((function(t){console.log(t)}))}break;case"Fengshan":for(var s=2005;s<=2020;s++){if(s>n)break;a+=1,l.a.post("".concat(this.allURL,"waterPoolAPI/waterPooldetailSearch"),{damName:e,year:s}).then((function(e){var n;console.log(e.data),(n=t.searchtData).push.apply(n,Object(r["a"])(e.data.dataArray)),t.searchtData.length==a&&(t.searchChartSetting(),t.chartFinish=!0,t.loading=!1)})).catch((function(t){console.log(t)}))}break}},searchChartSetting:function(){for(var t=this,e=JSON.parse(JSON.stringify(this.searchtData)),a=function(e){t.searchChartOption[e].option=JSON.parse(JSON.stringify(t.searchChartOption[0].option)),t.searchChartOption[e].option.xAxis.data=[],t.searchChartOption[e].option.series[0].data=[],t.searchtData.forEach((function(a){t.searchChartOption[e].option.xAxis.data.push(a[0])}))},n=0;n<this.searchtData[0].length-1;n++)a(n);if(this.searchtData.forEach((function(e){for(var a=1;a<e.length;a++)t.searchChartOption[a-1].option.series[0].data.push(e[a].value);e.splice(0,1)})),console.log(this.searchtData),console.log(this.searchChartOption),this.firstLoad){this.firstLoad=!1,e=e.filter((function(e){var a=e[0]-1911+"年";return-1!==t.ChartOption.xAxis.data.indexOf(a)}));var i=[];e.forEach((function(t){for(var e=0,a=1;a<4;a++)e+=parseFloat(t[a].value);i.push((e/3).toFixed(2))}));var r={name:"阿公店水庫",data:[],type:"line"};i.forEach((function(t){r.data.push(t)})),this.ChartOption.series.push(r),console.log(this.ChartOption.series),this.loading2=!1}},getCTSIdata:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=a.ChartOption.xAxis.data,a.loading2=!0,n.next=4,l.a.post("".concat(a.allURL,"waterPoolAPI/CTSIdata"),{river:t}).then((function(n){console.log(n.data);var r="";switch(t){case"鳳":r="鳳山水庫";break;case"澄清湖":r="澄清湖水庫";break}var o={name:r,data:[],type:"line"};n.data.CTSIdata.forEach((function(t){o.data.push(t.value1),1===e&&i.push(t.item1)})),a.ChartOption.series.push(o),a.ChartOption.title.text="".concat(i[0],"-").concat(i[o.data.length-1],"高雄水庫卡爾森指數紀錄")})).catch((function(t){console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},iconColor:function(t){return this.text[t].percent<30?this.iconimg[0]:this.text[t].percent>30&&this.text[t].percent<80?this.iconimg[1]:this.iconimg[2]},animation:function(t,e){switch(e){case"sineCanvas":var a=document.getElementById("sineCanvas");a.style.opacity="in"===t?1:.5;break;case"sineCanvas2":var n=document.getElementById("sineCanvas2");n.style.opacity="in"===t?1:.5;break;case"sineCanvas3":var i=document.getElementById("sineCanvas3");i.style.opacity="in"===t?1:.5;break;case"originalpic":var r=document.getElementById("originalpic");r.style.opacity="in"===t?1:.5;break;case"originalpic2":var o=document.getElementById("originalpic2");o.style.opacity="in"===t?1:.5;break;case"originalpic3":var s=document.getElementById("originalpic3");s.style.opacity="in"===t?1:.5;break}},water:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("server/water.json").then((function(e){t.text=e.data,console.log(t.text)})).catch((function(t){console.log(t)}));case 2:t.getDataFinished=!0,window.setTimeout((function(){var e=document.getElementById("percent1"),a=document.getElementById("percent2"),n=document.getElementById("percent3");t.text[0].percent<30?e.style.color="red":t.text[0].percent>30&&t.text[0].percent<80?e.style.color="#DAA520":e.style.color="green",t.text[1].percent<30?a.style.color="red":t.text[1].percent>30&&t.text[1].percent<80?a.style.color="#DAA520":a.style.color="green",t.text[2].percent<30?n.style.color="red":t.text[2].percent>30&&t.text[2].percent<80?n.style.color="#DAA520":n.style.color="green",t.drawWater("1",t.text[0].percent),t.drawWater("2",t.text[1].percent),t.drawWater("3",t.text[2].percent)}),0);case 4:case"end":return e.stop()}}),e)})))()},drawWater:function(t,e){var a,n,i,r,o,s,c=100,l=e/100,d=0,u=1;l>=1&&(u=.95);var p=3;function h(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),a="1"==t?document.getElementById("sineCanvas"):"2"==t?document.getElementById("sineCanvas2"):document.getElementById("sineCanvas3"),a.width=1e3,a.height=1e3,n=a.getContext("2d"),i=a.height,r=a.width,s=0,v()}function v(){n.clearRect(0,0,r,i),g(e>80?["#77DDFF","#0044BB"]:e>30&&e<80?["#F0E68C","#B8860B"]:["#FFA07A","#FF4500"],1,1.5),d<=l&&(d+=.002,o=Math.floor(i*(u-d))),d>.8&&p<=36*l&&(p+=.05),v.seconds=v.seconds+.009,v.t=v.seconds*Math.PI,window.requestAnimFrame(v)}function g(t,e,a){n.globalAlpha=e;var o=n.createLinearGradient(0,0,r,0);o.addColorStop(0,t[0]),o.addColorStop(1,t[1]),n.fillStyle=o,n.beginPath(),m(v.t/.5,a),n.lineTo(r+10,i),n.lineTo(0,i),n.closePath(),n.fill()}function m(t,e){var a=t,i=Math.sin(a)/e;n.moveTo(s,c*i+o);for(var l=s;l<=r+10;l+=10)a=t+(-s+l)/c/e,i=Math.sin(a-0)/p,n.lineTo(l,c*i+o)}v.seconds=0,v.t=0,h()}}},v=h,g=(a("5fa8"),a("2877")),m=Object(g["a"])(v,n,i,!1,null,"f8584902",null);e["default"]=m.exports},"841c":function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),r=a("1d80"),o=a("129f"),s=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var r=i(t),c=String(this),l=r.lastIndex;o(l,0)||(r.lastIndex=0);var d=s(r,c);return o(r.lastIndex,l)||(r.lastIndex=l),null===d?-1:d.index}]}))},9263:function(t,e,a){"use strict";var n=a("ad6d"),i=a("9f7f"),r=RegExp.prototype.exec,o=String.prototype.replace,s=r,c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=c||d||l;u&&(s=function(t){var e,a,i,s,u=this,p=l&&u.sticky,h=n.call(u),v=u.source,g=0,m=t;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),m=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(v="(?: "+v+")",m=" "+m,g++),a=new RegExp("^(?:"+v+")",h)),d&&(a=new RegExp("^"+v+"$(?!\\s)",h)),c&&(e=u.lastIndex),i=r.call(p?a:u,m),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=u.lastIndex,u.lastIndex+=i[0].length):u.lastIndex=0:c&&i&&(u.lastIndex=u.global?i.index+i[0].length:e),d&&i&&i.length>1&&o.call(i[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),o=a("861d"),s=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),h=a("2d00"),v=p("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",f=h>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=u("concat"),_=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},C=!f||!x;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,n,i,r,o=s(this),u=d(o,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?o:arguments[e],_(r)){if(i=c(r.length),p+i>g)throw TypeError(m);for(a=0;a<i;a++,p++)a in r&&l(u,p,r[a])}else{if(p>=g)throw TypeError(m);l(u,p++,r)}return u.length=p,u}})},"9f7f":function(t,e,a){"use strict";var n=a("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),i=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b680:function(t,e,a){"use strict";var n=a("23e7"),i=a("a691"),r=a("408a"),o=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},u=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,a,n,s,c=r(this),p=i(t),h=[0,0,0,0,0,0],v="",g="0",m=function(t,e){var a=-1,n=e;while(++a<6)n+=t*h[a],h[a]=n%1e7,n=l(n/1e7)},f=function(t){var e=6,a=0;while(--e>=0)a+=h[e],h[e]=l(a/t),a=a%t*1e7},x=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var a=String(h[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=u(c*d(2,69,1))-69,a=e<0?c*d(2,-e,1):c/d(2,e,1),a*=4503599627370496,e=52-e,e>0){m(0,a),n=p;while(n>=7)m(1e7,0),n-=7;m(d(10,n,1),0),n=e-1;while(n>=23)f(1<<23),n-=23;f(1<<n),m(1,1),f(2),g=x()}else m(0,a),m(1<<-e,0),g=x()+o.call("0",p);return p>0?(s=g.length,g=v+(s<=p?"0."+o.call("0",p-s)+g:g.slice(0,s-p)+"."+g.slice(s-p))):g=v+g,g}})},cb29:function(t,e,a){var n=a("23e7"),i=a("81d5"),r=a("44d2");n({target:"Array",proto:!0},{fill:i}),r("fill")},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),i=a("d039"),r=a("b622"),o=a("9263"),s=a("9112"),c=r("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=r("replace"),p=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,u){var v=r(t),g=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),m=g&&!i((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return e=!0,null},a[v](""),!e}));if(!g||!m||"replace"===t&&(!l||!d||p)||"split"===t&&!h){var f=/./[v],x=a(v,""[t],(function(t,e,a,n,i){return e.exec===o?g&&!i?{done:!0,value:f.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=x[0],C=x[1];n(String.prototype,t,_),n(RegExp.prototype,v,2==e?function(t,e){return C.call(t,this,e)}:function(t){return C.call(t,this)})}u&&s(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-cea29e1a.e9d3f19c.js.map