(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10fca6ff"],{"0fe0":function(a,t,e){},"3ca3":function(a,t,e){"use strict";var l=e("6547").charAt,i=e("69f3"),r=e("7dd0"),s="String Iterator",o=i.set,n=i.getterFor(s);r(String,"String",(function(a){o(this,{type:s,string:String(a),index:0})}),(function(){var a,t=n(this),e=t.string,i=t.index;return i>=e.length?{value:void 0,done:!0}:(a=l(e,i),t.index+=a.length,{value:a,done:!1})}))},"469d":function(a,t,e){"use strict";var l=e("0fe0"),i=e.n(l);i.a},"4df4":function(a,t,e){"use strict";var l=e("0366"),i=e("7b0b"),r=e("9bdd"),s=e("e95a"),o=e("50c4"),n=e("8418"),d=e("35a1");a.exports=function(a){var t,e,c,v,u,h,b=i(a),m="function"==typeof this?this:Array,p=arguments.length,_=p>1?arguments[1]:void 0,f=void 0!==_,g=d(b),D=0;if(f&&(_=l(_,p>2?arguments[2]:void 0,2)),void 0==g||m==Array&&s(g))for(t=o(b.length),e=new m(t);t>D;D++)h=f?_(b[D],D):b[D],n(e,D,h);else for(v=g.call(b),u=v.next,e=new m;!(c=u.call(v)).done;D++)h=f?r(v,_,[c.value,D],!0):c.value,n(e,D,h);return e.length=D,e}},"565b":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"download"},[a._m(0),e("div",{staticClass:"content"},[e("div",{staticClass:"text1"},[a._v(" ※ 本區提供本系統使用到的開放資料、本系統統整的資料下載連結，以及相關資訊網址。 ")]),e("el-tabs",{attrs:{type:"border-card",stretch:"","tab-position":"top"},model:{value:a.searchKind,callback:function(t){a.searchKind=t},expression:"searchKind"}},a._l(a.AllKinds,(function(t){return e("el-tab-pane",{key:t,attrs:{label:t,name:t}},["水法規"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("水資源法規")])]),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("全國法規資料庫")]),e("hr"),e("div",[a._v(" 點擊以下連結可至全國法規資料庫查看相關資訊 "),e("br"),e("br"),a._v("1. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0110011"}},[a._v("水庫蓄水範圍使用管理辦法")]),e("br"),a._v(" 2. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0110055"}},[a._v("自來水法")]),e("br"),a._v(" 3. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=O0040001"}},[a._v("水污染防治法")]),e("br"),a._v(" 4. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=O0040067"}},[a._v("水體水質監測站設置及監測準則")]),e("br"),a._v(" 5. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0110026"}},[a._v("地下水管制辦法")]),e("br"),a._v(" 6. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0110001"}},[a._v("水利法")]),e("br"),a._v(" 7. "),e("a",{attrs:{href:"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0110002"}},[a._v("水利法施行細則")]),e("br")])])])],1):a._e(),"用水"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("各縣市自來水用水量統計")])]),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("經濟部水利署各項用水統計資料庫")]),e("div",[e("hr"),a._v(" 點擊連結可至"),e("a",{attrs:{href:"http://wuss.wra.gov.tw/waterusage.aspx"}},[a._v("經濟部水利署")]),a._v("下載相關資訊 ")])])])],1):a._e(),"降雨"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市降雨即時資訊")])]),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("行政院環境保護署環境資源資料開放平台 ")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" lat(緯度)、lon(經度)、locationName(測站名稱)、 stationId(測站ID)、 obsTime(觀測資料時間)、ELEV(高度)、RAIN(60分鐘累積雨量)、MIN_10(10分鐘累積雨量)、 HOUR_3(3小時累積雨量)、HOUR_6(6小時累積雨量)、HOUR_12(12小時累積雨量)、HOUR_24(24小時累積雨量)、 NOW(本日累積雨量)、latest_2days(前1日0時到現在之累積雨量)、latest_3days(前2日0時到現在之累積雨量)、 CITY(縣市)、CITY_SN(縣市編號)、TOWN(鄉鎮)、TOWN_SN(鄉鎮編號)、ATTRIBUTE(自動站屬性) ")]),e("div",[e("hr"),a._v(" 點擊連結可至"),e("a",{attrs:{href:"https://opendata.cwb.gov.tw/dataset/observation/O-A0002-001"}},[a._v("行政院環境保護署")]),a._v("下載相關資訊 ")])])])],1):a._e(),"汙水處理廠"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市汙水處理廠資訊")])]),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("高雄市政府資料開放")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" 廠區、總經費、平均噸數、處理等級、緯度、經度 ")]),e("div",[e("hr"),a._v(" 點擊連結可至"),e("a",{attrs:{href:"https://data.kcg.gov.tw/dataset/plant"}},[a._v("高雄市政府資料開放")]),a._v("下載相關資訊 ")])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("全國污水下水道用戶接管普及率及整體污水處理率統計表")])]),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("中華民國內政部營建署")]),e("hr"),e("div",[a._v(" 點擊連結可至"),e("a",{attrs:{href:"https://www.cpami.gov.tw/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF/%E6%A5%AD%E5%8B%99%E6%96%B0%E8%A8%8A/51-%E4%B8%8B%E6%B0%B4%E9%81%93%E5%B7%A5%E7%A8%8B%E8%99%95/9995-%E5%85%A8%E5%9C%8B%E6%B1%A1%E6%B0%B4%E4%B8%8B%E6%B0%B4%E9%81%93%E7%94%A8%E6%88%B6%E6%8E%A5%E7%AE%A1%E6%99%AE%E5%8F%8A%E7%8E%87%E5%8F%8A%E6%95%B4%E9%AB%94%E6%B1%A1%E6%B0%B4%E8%99%95%E7%90%86%E7%8E%87%E7%B5%B1%E8%A8%88%E8%A1%A8.html"}},[a._v("內政部營建署")]),a._v("下載相關資訊 ")])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市公共/專用/建築物汙水下水道設置及整體污水處理率統計表")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_dirtywater",{year:a.dirtyWaterYear},"高雄市"+a.dirtyWaterYear+"年公共/專用/建築物汙水下水道設置及整體污水處理率統計表")}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("本系統統整")]),e("hr"),e("div",[e("b",[a._v("資料集描述：")]),a._v(" "),e("br"),a._v(" year(年分)、public(公共污水下水道普及率)、special(專用污水下水道普及率)、building(建築物污水設施設置率 )、total(整體污水處理率合計)、date(月份) ")]),e("div",[e("hr"),e("b",[a._v("選擇年分：")]),a._v(" "),e("span",[e("el-select",{attrs:{placeholder:"年分"},model:{value:a.dirtyWaterYear,callback:function(t){a.dirtyWaterYear=t},expression:"dirtyWaterYear"}},a._l(a.dirtyWaterYearArray,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1),a._v(" "),e("el-radio",{attrs:{label:"104-108年"},model:{value:a.dirtyWaterYear,callback:function(t){a.dirtyWaterYear=t},expression:"dirtyWaterYear"}},[a._v("民國104-108年平均")])],1)])])],1):a._e(),"地下水"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄地下水監測站位置")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_groundWaterStationName",{},"高雄地下水監測站位置")}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" SiteId(測站代碼)、SiteName(測站名稱)、SiteEngName(測站英文名稱)、County(縣市)、Township(鄉鎮市區)、UgwDistName(地下水分區名稱) 、TWD97Lon(TWD97經度)、TWD97Lat(TWD97緯度)、TWD97TM2X(TWD97二度分帶X)、TWD97TM2Y(TWD97二度分帶Y)、SiteAddress(測站位置描述)、StatusOfUse(測站狀態) ")])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄地下水監測站歷史檢測資訊")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_groundWaterAlldetailSearch",{dis:a.AllgroundWaterDis,year:a.AllgroundWaterYear},"高雄市"+a.AllgroundWaterDis+a.AllgroundWaterYear+"年地下水監測站檢測資訊",1)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" SiteId(測站代碼)、SiteName(測站名稱)、SiteEngName(測站英文名稱)、UgwDistName(地下水區)、County(縣市)、Township(鄉鎮市區) 、TWD97Lon(TWD97經度)、TWD97Lat(TWD97緯度)、TWD97TM2X(TWD97二度分帶X)、TWD97TM2Y(TWD97二度分帶Y)、SampleDate(採樣日期) 、ItemName(測項名稱)、ItemEngName(測項英文名稱)、ItemEngAbbreviation(測項英文簡稱)、ItemValue(監測值)、ItemUnit(測項單位) ")]),e("hr"),e("div",[e("b",[a._v("選擇行政區：")]),e("span",[e("el-select",{attrs:{placeholder:"行政區"},model:{value:a.AllgroundWaterDis,callback:function(t){a.AllgroundWaterDis=t},expression:"AllgroundWaterDis"}},a._l(a.AllgroundWaterDisArray,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)]),e("br"),e("div",[e("b",[a._v("選擇年分：")]),e("span",[e("el-select",{attrs:{placeholder:"年分"},model:{value:a.AllgroundWaterYear,callback:function(t){a.AllgroundWaterYear=t},expression:"AllgroundWaterYear"}},a._l(a.AllgroundWaterYearArray,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄地下水監測站背景與指標水質項目年平均檢測資訊")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_groundWaterdetailSearch",{dis:a.groundWaterDis,year:a.groundWaterYear},"高雄市"+a.groundWaterDis+a.groundWaterYear+"年地下水監測站背景與指標水質項目年平均檢測資訊",2)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("本系統統整")]),e("hr"),e("div",[e("b",[a._v("資料集描述：")]),e("br"),a._v(" year(年分)、siteName(測站名稱)、dis(行政區)、item1(鐵)、item2(錳)、item3(總硬度)、item4(總溶解固體物)、item5(氯鹽)、item6(氨氮)、item7(硫酸鹽)、item8(總有機碳)、item9(總酚) ")]),e("hr"),e("div",[e("b",[a._v("選擇行政區：")]),e("span",[e("el-select",{attrs:{placeholder:"行政區"},model:{value:a.groundWaterDis,callback:function(t){a.groundWaterDis=t},expression:"groundWaterDis"}},a._l(a.groundWaterDisArray,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)]),e("div",[e("br"),e("b",[a._v("選擇年分：")]),e("span",[e("el-select",{attrs:{placeholder:"年分"},model:{value:a.groundWaterYear,callback:function(t){a.groundWaterYear=t},expression:"groundWaterYear"}},a._l(a.groundWaterYearArray,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)])])])],1):a._e(),"環境水體"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市河川汙染狀態")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_newestRiverData",{year:a.pollutionYear,river:a.pollutionRiver},""+a.pollutionRiver+a.pollutionYear+"年河川汙染狀態",1)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" item1(統計期)、item2(統計區)、value1(河川總長度)、value2(未(稍)受污染長度)、value3(輕度污染長度)、value4(中度污染長度)、value5(嚴重污染長度) ")]),e("hr"),e("div",[e("b",[a._v("選擇河川：")]),e("br"),e("el-radio",{attrs:{label:"阿公店溪"},model:{value:a.pollutionRiver,callback:function(t){a.pollutionRiver=t},expression:"pollutionRiver"}},[a._v("阿公店溪")]),e("el-radio",{attrs:{label:"高屏溪"},model:{value:a.pollutionRiver,callback:function(t){a.pollutionRiver=t},expression:"pollutionRiver"}},[a._v("高屏溪")]),e("el-radio",{attrs:{label:"鳳山溪"},model:{value:a.pollutionRiver,callback:function(t){a.pollutionRiver=t},expression:"pollutionRiver"}},[a._v("鳳山溪")]),e("el-radio",{attrs:{label:"二仁溪"},model:{value:a.pollutionRiver,callback:function(t){a.pollutionRiver=t},expression:"pollutionRiver"}},[a._v("二仁溪")])],1),e("div",[e("b",[a._v("選擇年分：")]),e("span",[e("el-select",{attrs:{placeholder:"年分"},model:{value:a.pollutionYear,callback:function(t){a.pollutionYear=t},expression:"pollutionYear"}},a._l(a.pollutionYearArray,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市環境水體監測站資訊")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_environmentstationName",{},"高雄市環境水體監測站資訊")}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料 & 高雄市政府開放資料 ")]),e("hr"),e("div",[e("b",[a._v("資料集描述＿環保署環境資料開放平台開放資料：")]),a._v(" "),e("br"),a._v(" SiteId(測站代碼)、SiteName(測站名稱)、SiteEngName(測站英文名稱)、County(縣市)、Township(鄉鎮市區)、Basin(流域名稱)、River(河川名稱)、TWD97Lon(TWD97經度)、TWD97Lat(TWD97緯度)、TWD97TM2X(TWD97二度分帶X)、TWD97TM2Y(TWD97二度分帶Y)、SiteAddress(測站位置描述)"),e("br"),e("hr"),e("b",[a._v("資料集描述＿高雄市政府開放資料：")]),e("br"),a._v(" _id(id)、River(流域名稱)、Name(測站名稱)、Location(地址)、Longitude(TWD97經度)、Latitude(TWD97緯度) ")])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市河川汙染歷史資料")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_AllRPIdata",{river:a.hisPollutionRiver},a.hisPollutionRiver+"汙染歷史資訊",2)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料")]),e("hr"),e("div",[e("b",[a._v("資料集描述：")]),e("br"),a._v("item1(統計期)、item2(統計區)、value1(監測站數)、value2(溶氧量平均值)、value3(生化需氧量平均值)、value4(懸浮固體平均值)、 value5(氨氮平均值)、value6(溶氧量最大值)、value7(生化需氧量最大值)、value8(懸浮固體最大值)、value9(氨氮最大值) ")]),e("hr"),e("div",[e("b",[a._v("選擇河川：")]),e("br"),e("el-radio",{attrs:{label:"阿公店溪"},model:{value:a.hisPollutionRiver,callback:function(t){a.hisPollutionRiver=t},expression:"hisPollutionRiver"}},[a._v("阿公店溪")]),e("el-radio",{attrs:{label:"高屏溪"},model:{value:a.hisPollutionRiver,callback:function(t){a.hisPollutionRiver=t},expression:"hisPollutionRiver"}},[a._v("高屏溪")]),e("el-radio",{attrs:{label:"鳳山溪"},model:{value:a.hisPollutionRiver,callback:function(t){a.hisPollutionRiver=t},expression:"hisPollutionRiver"}},[a._v("鳳山溪")]),e("el-radio",{attrs:{label:"二仁溪"},model:{value:a.hisPollutionRiver,callback:function(t){a.hisPollutionRiver=t},expression:"hisPollutionRiver"}},[a._v("二仁溪")])],1)])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("高雄市河川汙染RPI歷史資料")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_RPIdata",{river:a.hisRPIPollutionRiver},a.hisRPIPollutionRiver+"汙染RPI歷史資訊",3)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("本系統統整")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" riverName(河川名稱)、 year(年分)、 avg(RPI指數)、 avgText(RPI指數對應汙染程度) ")]),e("div",[e("hr"),e("b",[a._v("選擇河川：")]),e("br"),e("el-radio",{attrs:{label:"阿公店溪"},model:{value:a.hisRPIPollutionRiver,callback:function(t){a.hisRPIPollutionRiver=t},expression:"hisRPIPollutionRiver"}},[a._v("阿公店溪")]),e("el-radio",{attrs:{label:"高屏溪"},model:{value:a.hisRPIPollutionRiver,callback:function(t){a.hisRPIPollutionRiver=t},expression:"hisRPIPollutionRiver"}},[a._v("高屏溪")]),e("el-radio",{attrs:{label:"鳳山溪"},model:{value:a.hisRPIPollutionRiver,callback:function(t){a.hisRPIPollutionRiver=t},expression:"hisRPIPollutionRiver"}},[a._v("鳳山溪")]),e("el-radio",{attrs:{label:"二仁溪"},model:{value:a.hisRPIPollutionRiver,callback:function(t){a.hisRPIPollutionRiver=t},expression:"hisRPIPollutionRiver"}},[a._v("二仁溪")])],1)])])],1):a._e(),"水庫"===a.searchKind?e("div",{staticStyle:{padding:"2%"}},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("水庫測站卡爾森指數年平均歷史資訊")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_YearCTSI",{damName:a.AllCTSIDam,year:a.DamYear},""+a.AllCTSIDam+a.DamYear+"年卡爾森指數年平均",1)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("本系統統整")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" year(年分)、name(測站名稱)、value(卡爾森年平均值) ")]),e("hr"),e("div",[e("div",{staticClass:"downloadSelect"},[a._v("選擇水庫： ")]),e("el-radio",{attrs:{label:"澄清湖水庫"},model:{value:a.AllCTSIDam,callback:function(t){a.AllCTSIDam=t},expression:"AllCTSIDam"}},[a._v("澄清湖水庫")]),e("el-radio",{attrs:{label:"阿公店水庫"},model:{value:a.AllCTSIDam,callback:function(t){a.AllCTSIDam=t},expression:"AllCTSIDam"}},[a._v("阿公店水庫")]),e("el-radio",{attrs:{label:"鳳山水庫"},model:{value:a.AllCTSIDam,callback:function(t){a.AllCTSIDam=t},expression:"AllCTSIDam"}},[a._v("鳳山水庫")])],1),e("div",[e("span",{staticClass:"downloadSelect"},[a._v("選擇年分： ")]),e("span",[e("el-select",{attrs:{placeholder:"年分"},model:{value:a.DamYear,callback:function(t){a.DamYear=t},expression:"DamYear"}},a._l(a.hisDamYear,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("水庫測站監測歷史資訊")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_detailSearch",{damName:a.hisDam,year:a.AllDamYear},""+a.hisDam+a.AllDamYear+"年監測資訊",2)}}},[a._v("下載")])],1),e("div",[e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(' SiteId(測站代碼)、SiteName(測站名稱)、SiteEngName(測站英文名稱)、DamName(水庫名稱)、County(縣市)、Township(鄉鎮市區)、TWD97Lon(TWD97經度) 、TWD97Lat(TWD97緯度)、TWD97TM2X(TWD97二度分帶X)、TWD97TM2Y(TWD97二度分帶Y)、SampleDate(採樣日期)、SampleLayer(採樣水層)" 、SampleDepth(採樣深度)、ItemName(測項名稱)、ItemEngName(測項英文名稱)、ItemEngAbbreviation(測項英文簡稱)、ItemValue(監測值)、ItemUnit(測項單位) ')]),e("hr"),e("div",[e("b",[a._v("選擇水庫：")]),e("br"),e("el-radio",{attrs:{label:"澄清湖水庫"},model:{value:a.hisDam,callback:function(t){a.hisDam=t},expression:"hisDam"}},[a._v("澄清湖水庫")]),e("el-radio",{attrs:{label:"阿公店水庫"},model:{value:a.hisDam,callback:function(t){a.hisDam=t},expression:"hisDam"}},[a._v("阿公店水庫")]),e("el-radio",{attrs:{label:"鳳山水庫"},model:{value:a.hisDam,callback:function(t){a.hisDam=t},expression:"hisDam"}},[a._v("鳳山水庫")])],1),e("div",[e("b",[a._v("選擇年分：")]),e("span",[e("el-select",{attrs:{placeholder:"年分"},model:{value:a.AllDamYear,callback:function(t){a.AllDamYear=t},expression:"AllDamYear"}},a._l(a.AllhisDamYear,(function(a){return e("el-option",{key:a,attrs:{label:a,value:a}})})),1)],1)])])]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("水庫卡爾森指數紀錄")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_AllCTSI",{river:a.CTSIdam},a.CTSIdam+"卡爾森指數紀錄",3)}}},[a._v("下載")])],1),e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料 && 本系統統整 ( 阿公店水庫 ) ")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" item1(統計期)、item2(統計區)、value1(卡爾森優養指數) ")]),e("hr"),e("div",[e("b",[a._v("選擇水庫：")]),e("br"),e("el-radio",{attrs:{label:"澄清湖"},model:{value:a.CTSIdam,callback:function(t){a.CTSIdam=t},expression:"CTSIdam"}},[a._v("澄清湖水庫")]),e("el-radio",{attrs:{label:"鳳"},model:{value:a.CTSIdam,callback:function(t){a.CTSIdam=t},expression:"CTSIdam"}},[a._v("鳳山水庫")]),e("el-radio",{attrs:{label:"阿公店水庫"},model:{value:a.CTSIdam,callback:function(t){a.CTSIdam=t},expression:"CTSIdam"}},[a._v("阿公店水庫")])],1)]),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"fileTitle"},[a._v("水庫測站位置")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return a.downloadData(a.allURL+"download/download_waterPoolstationName",{},"高雄水庫測站位置")}}},[a._v("下載")])],1),e("div",[e("b",[a._v("資料來源：")]),e("br"),a._v("環保署環境資料開放平台開放資料")]),e("div",[e("hr"),e("b",[a._v("資料集描述：")]),e("br"),a._v(" SiteId(測站代碼)、SiteName(測站名稱)、SiteEngName(測站英文名稱)、County(縣市)、Township(鄉鎮市區)、DamName(水庫名稱)、DamRank(水庫分類)、TWD97Lon(TWD97經度)、TWD97Lat(TWD97緯度)、 TWD97TM2X(TWD97二度分帶X)、TWD97TM2Y(TWD97二度分帶Y)、SiteAddress(測站位置描述)、StatusOfUse(測站狀態) ")])])],1):a._e()])})),1)],1),e("div",{staticClass:"footer"})])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row",staticStyle:{margin:"0 15px 0 15px"}},[e("div",{staticClass:"col-12 text-center"},[e("span",{staticClass:"badge badge-pill badge-info animate__animated animate__fadeInUp title"},[a._v("資料下載區")])])])}],r=(e("4160"),e("b0c0"),e("d3b7"),e("3ca3"),e("159b"),e("ddb0"),e("2b3d"),e("c1df")),s=e.n(r),o=e("bc3a"),n=e.n(o),d={data:function(){return{AllKinds:["降雨","水庫","用水","汙水處理廠","環境水體","地下水","水法規"],searchKind:"降雨",hisDam:"",CTSIdam:"",AllCTSIDam:"",nowYear:"",pollutionRiver:"",hisPollutionRiver:"",hisRPIPollutionRiver:"",hisDamYear:[],AllhisDamYear:[],dirtyWaterYearArray:["104","105","106","107","108"],AllgroundWaterDis:"",AllgroundWaterYear:"",pollutionYearArray:["100","101","102","103","104","105","106","107","108"],groundWaterYearArray:["2014","2015","2016","2017","2018","2019","2020"],AllgroundWaterYearArray:["2014","2015","2016","2017","2018","2019","2020"],AllgroundWaterDisArray:["鳳山區","梓官區","大社區","岡山區","永安區","路竹區","阿蓮區","鳥松區","仁武區","橋頭區","湖內區","美濃區","旗山區","大寮區","林園區","楠梓區","苓雅區","小港區","左營區","旗津區","鼓山區","新興區","大樹區","茄萣區","六龜區","杉林區"],groundWaterDisArray:[],groundWaterStationArray:[],groundWaterDis:"",groundWaterYear:"",pollutionYear:"",dirtyWaterYear:"",DamYear:"",AllDamYear:""}},mounted:function(){this.nowYear=s()(new Date).format("YYYY"),this.getGroundWaterDisArray()},methods:{getGroundWaterDisArray:function(){var a=this;n.a.post("".concat(this.allURL,"groundWater/stationName")).then((function(t){console.log(t.data),t.data.siteData[0].forEach((function(t){a.groundWaterDisArray.push(t.name)}));for(var e=1;e<t.data.siteData.length;e++){var l={name:"",dis:""};l.name=t.data.siteData[e].SiteName,l.dis=t.data.siteData[e].dis,a.groundWaterStationArray.push(l)}console.log(a.groundWaterStationArray)})).catch((function(a){console.log(a)}))},downloadData:function(a,t,e,l){var i=this;if("水庫"===this.searchKind)switch(l){case 1:if(""===this.damName||""===this.DamYear)return void this.message();break;case 2:if(""===this.hisDam||""===this.AllDamYear)return void this.message();break;case 3:if(""===this.CTSIdam)return void this.message();break}if("汙水處理廠"!==this.searchKind||""!==this.dirtyWaterYear){if("環境水體"===this.searchKind)switch(l){case 1:if(""===this.pollutionYear||""===this.pollutionRiver)return void this.message();break;case 2:if(""===this.hisPollutionRiver)return void this.message();break;case 3:if(""===this.hisRPIPollutionRiver)return void this.message();break}if("地下水"===this.searchKind)switch(l){case 1:if(console.log(this.AllgroundWaterDis),console.log(this.AllgroundWaterYear),""===this.AllgroundWaterDis||""===this.AllgroundWaterYear)return void this.message();break;case 2:if(""===this.groundWaterDis||""===this.groundWaterYear)return void this.message();break}n.a.post(a,t,{responseType:"blob"}).then((function(a){i.download(a,"".concat(e,".json"))})).catch((function(a){console.log(a)}))}else this.message()},message:function(){this.$message({message:"請確認欲下載條件皆填寫完成!!",type:"warning"})},download:function(a,t){if(a){var e=window.URL.createObjectURL(new Blob([a.data])),l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download",t),document.body.appendChild(l),l.click()}}},watch:{AllCTSIDam:function(){switch(this.hisDamYear=[],this.AllCTSIDam){case"阿公店水庫":for(var a=2007;a<=this.nowYear;a++)this.hisDamYear.push(a);break;case"澄清湖水庫":for(var t=2005;t<=this.nowYear;t++)this.hisDamYear.push(t);break;case"鳳山水庫":for(var e=2005;e<=this.nowYear;e++)this.hisDamYear.push(e);break}},hisDam:function(){switch(this.AllhisDamYear=[],this.hisDam){case"阿公店水庫":for(var a=2007;a<=this.nowYear;a++)this.AllhisDamYear.push(a);break;case"澄清湖水庫":for(var t=2005;t<=this.nowYear;t++)this.AllhisDamYear.push(t);break;case"鳳山水庫":for(var e=2005;e<=this.nowYear;e++)this.AllhisDamYear.push(e);break}}}},c=d,v=(e("469d"),e("2877")),u=Object(v["a"])(c,l,i,!1,null,"7ad858e7",null);t["default"]=u.exports},6547:function(a,t,e){var l=e("a691"),i=e("1d80"),r=function(a){return function(t,e){var r,s,o=String(i(t)),n=l(e),d=o.length;return n<0||n>=d?a?"":void 0:(r=o.charCodeAt(n),r<55296||r>56319||n+1===d||(s=o.charCodeAt(n+1))<56320||s>57343?a?o.charAt(n):r:a?o.slice(n,n+2):s-56320+(r-55296<<10)+65536)}};a.exports={codeAt:r(!1),charAt:r(!0)}},ddb0:function(a,t,e){var l=e("da84"),i=e("fdbc"),r=e("e260"),s=e("9112"),o=e("b622"),n=o("iterator"),d=o("toStringTag"),c=r.values;for(var v in i){var u=l[v],h=u&&u.prototype;if(h){if(h[n]!==c)try{s(h,n,c)}catch(m){h[n]=c}if(h[d]||s(h,d,v),i[v])for(var b in r)if(h[b]!==r[b])try{s(h,b,r[b])}catch(m){h[b]=r[b]}}}}}]);
//# sourceMappingURL=chunk-10fca6ff.c23f0d5c.js.map