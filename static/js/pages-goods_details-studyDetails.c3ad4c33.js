(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_details-studyDetails"],{"0cf3":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-2ad0a206]{position:fixed;top:0;left:0;right:0;z-index:99}.header .flex[data-v-2ad0a206]{align-items:center;display:flex;justify-content:space-between;padding:0 %?20?%;width:100%;height:%?100?%}.header .nav[data-v-2ad0a206]{display:flex;align-items:center}.header .nav .navitem[data-v-2ad0a206]{margin-left:30px;font-size:%?30?%}.header .nav .navitem[data-v-2ad0a206]:first-child{margin-left:0}.header .round[data-v-2ad0a206]{display:flex;align-items:center;justify-content:center;border-radius:50%;width:%?70?%;height:%?70?%}.commodity[data-v-2ad0a206]{width:100%;height:%?550?%}.commodity .swiper[data-v-2ad0a206]{width:100%;height:%?550?%}.commodity uni-image[data-v-2ad0a206]{width:100%;height:%?550?%}.evaluate[data-v-2ad0a206]{margin-top:%?-10?%;padding-bottom:%?170?%}.evaluate .xinjian-image[data-v-2ad0a206]{width:100%;border-radius:%?20?% %?20?% 0 0}.footer[data-v-2ad0a206]{position:fixed;bottom:0;left:0;right:0;margin:auto;height:%?150?%;display:flex;align-items:center;overflow:hidden;font-size:%?32?%;flex-wrap:wrap;background:#d9ccb9;border-radius:%?40?% %?40?% 0 0}.footer .t-b[data-v-2ad0a206]{display:flex;align-items:center;width:100%;justify-content:space-between;padding:0 %?30?%}.footer .t-b .t-l[data-v-2ad0a206]{font-size:%?55?%;color:#000}.footer .t-b .t-r[data-v-2ad0a206]{display:flex;align-items:center}.footer .t-b .t-r .icon[data-v-2ad0a206]{margin-right:%?20?%}.footer .t-b .t-r .r-b[data-v-2ad0a206]{color:#fff;padding:%?15?% %?55?%;border-radius:%?30?%;background-color:#268672}',""]),t.exports=i},1636:function(t,i,a){var e=a("0cf3");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("02148637",e,!0,{sourceMap:!1,shadowMode:!1})},"2dda":function(t,i,a){"use strict";var e=a("a7f0"),n=a.n(e);n.a},"3b12":function(t,i,a){"use strict";a.r(i);var e=a("f889"),n=a("877e");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(r);a("2dda"),a("ea16");var s=a("f0c5"),o=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"2ad0a206",null,!1,e["a"],void 0);i["default"]=o.exports},8319:function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("26e9"),a("4de4"),a("d3b7"),a("159b"),a("ac1f");var e={data:function(){return{list:[{src:"/static/icon-1.jpg"},{src:"/static/icon-4.png"},{src:"/static/icon-5.jpg"}],statusbarHeight:uni.getSystemInfoSync().statusBarHeight,scrollTop:0,nav_list:[{id:1,text:"评价",scrollId:"scrollView1"},{id:2,text:"详情",scrollId:"scrollView2"},{id:3,text:"推荐",scrollId:"scrollView3"}],nav_id:null,scrollId:"",transparency:0,isDropDown:!1,criticalValue:200-uni.getSystemInfoSync().statusBarHeight,loveShow:!1,type:""}},onLoad:function(t){this.type=t.type},methods:{clickLoveFn:function(){this.loveShow=!this.loveShow},scroll:function(t){var i=t.detail.scrollTop;this.calcSize();var a=this.nav_list.filter((function(t){return t.top<=i})).reverse();a.length>0&&(this.nav_id=a[0].id),this.transparency=t.detail.scrollTop/this.criticalValue,!this.isDropDown&&t.detail.scrollTop>=this.criticalValue?this.isDropDown=!0:this.isDropDown&&t.detail.scrollTop<this.criticalValue&&(this.isDropDown=!1,this.nav_id=null)},calcSize:function(t){var i=0;this.nav_list.forEach((function(t){var a=uni.createSelectorQuery().select("#".concat(t.scrollId));a.fields({size:!0},(function(a){null!=a&&(t.top=i+250-50-uni.getSystemInfoSync().statusBarHeight+10*t.id,i+=a.height,t.bottom=i)})).exec()}))},getback:function(){uni.switchTab({url:1==this.type?"/pages/index/index":"/pages/my/index"})}}};i.default=e},"877e":function(t,i,a){"use strict";a.r(i);var e=a("8319"),n=a.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(r);i["default"]=n.a},a7f0:function(t,i,a){var e=a("ac0e");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("3c2ec113",e,!0,{sourceMap:!1,shadowMode:!1})},ac0e:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-2ad0a206]{background-color:#e7e7e7}body.?%PAGE?%[data-v-2ad0a206]{background-color:#e7e7e7}",""]),t.exports=i},ea16:function(t,i,a){"use strict";var e=a("1636"),n=a.n(e);n.a},f889:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return r})),a.d(i,"a",(function(){return e}));var e={uniIcons:a("0cd8").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{style:{height:t.statusbarHeight+"px"}}),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"round",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getback.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{size:"26",type:"arrowleft"}})],1)],1)],1),a("v-uni-scroll-view",{staticStyle:{height:"100vh"},attrs:{"scroll-y":"true","scroll-top":t.scrollTop,"scroll-into-view":t.scrollId,"scroll-with-animation":"true"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"commodity"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-color":"#ffffff","indicator-active-color":"#ff0000",circular:!0,"indicator-dots":"true"}},t._l(t.list,(function(t,i){return a("v-uni-swiper-item",[a("v-uni-image",{attrs:{src:t.src,mode:""}})],1)})),1)],1),a("v-uni-view",{staticClass:"evaluate box"},[a("v-uni-image",{staticClass:"xinjian-image",attrs:{src:"/static/微信图片_20240531143506.png",mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"t-b"},[a("v-uni-view",{staticClass:"t-l"},[t._v("￥128/人")]),a("v-uni-view",{staticClass:"t-r"},[a("v-uni-view",{staticClass:"icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickLoveFn.apply(void 0,arguments)}}},[t.loveShow?a("uni-icons",{attrs:{size:"28",type:"heart-filled",color:"#fb5430"}}):a("uni-icons",{attrs:{size:"28",type:"heart"}})],1),a("v-uni-view",{staticClass:"r-b"},[t._v("购买")])],1)],1)],1)],1)},r=[]}}]);