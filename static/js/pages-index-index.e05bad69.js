(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"485c":function(i,t,e){var a=e("9e12");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("a3be41b6",a,!0,{sourceMap:!1,shadowMode:!1})},"4e8e":function(i,t,e){"use strict";e.r(t);var a=e("72c3"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},7286:function(i,t,e){"use strict";e.r(t);var a=e("eaf2"),n=e("4e8e");for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("7fea");var c=e("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1f68d8ef",null,!1,a["a"],void 0);t["default"]=o.exports},"72c3":function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",n=(getApp(),{data:function(){return{currentTab:"全部",statusBarHeight:a,navIndex:0,marTop:10,interval:3e3,circular:!0,duration:500,imgUrls:[{id:1,name:"",pic:"/static/icon-1.jpg",url:"/pages/goods_details/storyDetails?id=1"},{id:2,name:"雨衣",pic:"/static/icon-4.png",url:"/pages/goods_details/studyDetails?type=1"},{id:3,name:"测试",pic:"/static/icon-5.jpg",url:"/pages/my/index?id=1"}],list:[{id:1234,name:"品牌故事",pic:"/static/icon-23.png",url:"/pages/goods_details/storyDetails?id=1"},{id:1235,name:"研学预约",pic:"/static/icon-24.png",url:"/pages/goods_details/studyDetails?type=1"},{id:1255,name:"展销成果",pic:"/static/icon-22.png",url:"/pages/goods_details/index?id=1"}],list1:[{pic:"/static/icon28.png",url:"/pages/goods_details/exhibition?icon=/static/icon-21.png&type=1&isShow=false"},{pic:"/static/icon29.png",url:"/pages/goods_details/exhibition?icon=/static/icon31.png&type=1&isShow=false"},{pic:"/static/icon30.png",url:"/pages/goods_details/exhibition?icon=/static/icon-20.png&type=1&isShow=false"}],list2:[{pic:"/static/icon36.png",url:"/pages/goods_details/exhibition?icon=/static/icon45.png&type=1&isShow=false"},{pic:"/static/icon37.png",url:"/pages/goods_details/exhibition?icon=/static/icon47.png&type=1&isShow=false"},{pic:"/static/icon38.png",url:"/pages/goods_details/exhibition?icon=/static/icon46.png&type=1&isShow=false"}]}},methods:{switchTab:function(i){this.currentTab=i},clickFn:function(){uni.showToast({title:"亲，活动已截止~",duration:2e3,icon:"error"})},skipFn:function(i){uni.navigateTo({url:i.url})},lacquerFn:function(i,t){uni.navigateTo({url:1==i?"/pages/goods_details/studyDetails?type=1":t})},imageClickFn:function(i){3==i.id?uni.switchTab({url:"/pages/my/index"}):uni.navigateTo({url:i.url})}}});t.default=n},"7fea":function(i,t,e){"use strict";var a=e("485c"),n=e.n(a);n.a},"9e12":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.df[data-v-1f68d8ef]{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;\r\n  /* 横向布局 */-webkit-overflow-scrolling:touch\r\n  /* 允许滚动加速 */}.df[data-v-1f68d8ef]::-webkit-scrollbar{display:none}.page-index[data-v-1f68d8ef]{display:flex;flex-direction:column;min-height:100%}.page-index .page_content[data-v-1f68d8ef]{position:relative}.page-index .page_content .swiper[data-v-1f68d8ef]{position:relative;width:100%;height:%?550?%;margin:0 auto;overflow:hidden}.page-index .page_content .swiper uni-swiper[data-v-1f68d8ef],\r\n.page-index .page_content .swiper .swiper-item[data-v-1f68d8ef],\r\n.page-index .page_content .swiper uni-image[data-v-1f68d8ef]{width:100%;height:%?550?%}.page-index .page_content .c-box[data-v-1f68d8ef]{background:#f6f4e7;border-radius:%?30?%;position:absolute;left:0;top:%?535?%;width:100%;height:92vh}.page-index .page_content .c-box .i-b[data-v-1f68d8ef]{display:flex;align-items:center;justify-content:space-around;margin-top:%?70?%}.page-index .page_content .c-box .i-b .item[data-v-1f68d8ef]{text-align:center}.page-index .page_content .c-box .i-b .item .bargain-image[data-v-1f68d8ef]{width:%?80?%;height:%?80?%}.page-index .page_content .c-box .i-b .item .i-t[data-v-1f68d8ef]{margin-top:%?10?%;font-size:%?26?%;color:#333}.page-index .page_content .c-box .Palace[data-v-1f68d8ef]{padding:%?60?% %?35?% %?35?% %?35?%}.page-index .page_content .c-box .Palace .p-t[data-v-1f68d8ef]{display:flex;align-items:center;justify-content:space-between}.page-index .page_content .c-box .Palace .p-t .t-l[data-v-1f68d8ef]{font-size:%?35?%;font-weight:500}.page-index .page_content .c-box .Palace .p-t .t-r[data-v-1f68d8ef]{font-size:%?28?%}.page-index .page_content .c-box .Palace .p-i[data-v-1f68d8ef]{margin-top:%?20?%;margin-right:%?17?%}.page-index .page_content .c-box .Palace .p-i .palace-image[data-v-1f68d8ef]{width:%?250?%;height:%?300?%;border-radius:%?10?%}.page-index .page_content .c-box .Palace .p-i .i-t[data-v-1f68d8ef]{margin-top:%?10?%;font-size:%?28?%;padding-bottom:%?50?%}.page-index .page_content .c-box .Palace .p-i[data-v-1f68d8ef]:last-child{margin-right:0\r\n  /* 去掉最后一个元素的右边距 */}',""]),i.exports=t},eaf2:function(i,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){}));var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"page-index",class:{bgf:i.navIndex>0}},[0==i.navIndex?e("v-uni-view",{staticClass:"page_content"},[i.imgUrls.length?e("v-uni-view",{staticClass:"swiper"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:!0,circular:i.circular,interval:i.interval,duration:i.duration,"indicator-color":"rgba(255,255,255,0.6)","indicator-active-color":"#fff"}},[i._l(i.imgUrls,(function(t,a){return[e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:t.pic,"lazy-load":!0},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.imageClickFn(t)}}})],1)]}))],2)],1):i._e(),e("v-uni-view",{staticClass:"c-box"},[e("v-uni-view",{staticClass:"i-b"},i._l(i.list,(function(t,a){return e("v-uni-view",{key:a,staticClass:"item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.skipFn(t)}}},[e("v-uni-image",{staticClass:"bargain-image",attrs:{src:t.pic}}),e("v-uni-view",{staticClass:"i-t"},[i._v(i._s(t.name))])],1)})),1),e("v-uni-view",{staticClass:"Palace"},[e("v-uni-view",{staticClass:"p-t"},[e("v-uni-view",{staticClass:"t-l"},[i._v("漆艺产品")])],1),e("v-uni-view",{staticClass:"df"},i._l(i.list2,(function(t,a){return e("v-uni-view",{key:a,staticClass:"p-i",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.lacquerFn(2,t.url)}}},[e("v-uni-image",{staticClass:"palace-image",attrs:{src:t.pic}})],1)})),1)],1),e("v-uni-view",{staticClass:"Palace"},[e("v-uni-view",{staticClass:"p-t"},[e("v-uni-view",{staticClass:"t-l"},[i._v("数字藏品")])],1),e("v-uni-view",{staticClass:"df"},i._l(i.list1,(function(t,a){return e("v-uni-view",{key:a,staticClass:"p-i",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.lacquerFn(2,t.url)}}},[e("v-uni-image",{staticClass:"palace-image",attrs:{src:t.pic}}),e("v-uni-view",{staticClass:"i-t"})],1)})),1)],1)],1)],1):i._e()],1)],1)},n=[]}}]);