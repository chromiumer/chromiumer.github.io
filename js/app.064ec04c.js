(function(t){function e(e){for(var n,o,r=e[0],s=e[1],c=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("5c96"),l=a.n(i),o=a("8c4f");n["default"].use(o["a"]);var r=new o["a"]({mode:"history",routes:[{path:"/",name:"home",meta:{title:"Respeed 🐳 Download"}}]}),s=r,c=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"app","element-loading-text":"服务器正在努力下载 请稍等......","element-loading-spinner":"el-icon-loading"}},[a("h2",{staticStyle:{color:"#409EFF"},attrs:{align:"center"}},[t._v("Respeed 🐳 Download")]),a("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入要下载的资源URL",clearable:""},on:{clear:t.restData},model:{value:t.userURL,callback:function(e){t.userURL=e},expression:"userURL"}})],1),a("el-col",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:t.DownloadRes}},[t._v("Download"),a("i",{staticClass:"el-icon-download el-icon--right"})]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.toDonate}},[t._v("支持"),a("i",{staticClass:"el-icon-loading"})])],1)],1),t.CardShow?a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"font-size":"13px"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("文件信息")])]),a("p",{staticStyle:{"font-size":"13px"}},[a("el-tag",{attrs:{effect:"plain",size:"small"}},[t._v("文 件:")]),t._v(" "+t._s(t.downloadURL)+" ")],1),a("p",{staticStyle:{"font-size":"13px"}},[a("el-tag",{attrs:{effect:"plain",size:"small"}},[t._v("Size:")]),t._v(" "+t._s(t.size)+" "+t._s(t.sizeunit)+" "),a("el-tag",{attrs:{effect:"plain",size:"small"}},[t._v("md5:")]),t._v(" "+t._s(t.md5)+" ")],1),a("el-link",{staticStyle:{float:"right","margin-bottom":"15px"},attrs:{underline:!1,href:t.downloadURL}},[a("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[t._v("下载到本地"),a("i",{staticClass:"el-icon-download el-icon--right"})])],1)],1):t._e(),t.RecentTableShow?a("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-col",{attrs:{span:16}},[a("h5",[a("a",{staticStyle:{color:"#409EFF"},attrs:{align:"left"}},[t._v("最近下载")]),a("a",{staticStyle:{color:"#F56C6C"},attrs:{align:"left"}},[t._v("(24小时后自动删除)")])]),a("el-table",{attrs:{data:t.fileListdata,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"Filename",label:"文件"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"RentFileLlink",attrs:{href:e.row.Dlurl}},[t._v(t._s(e.row.Filename))]),a("i",{staticClass:"el-icon-download"})]}}],null,!1,1645080275)}),a("el-table-column",{attrs:{prop:"Size",label:"大小",width:"120"}})],1)],1)],1):t._e(),t._m(0)],1)}),u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("pre",[t._v("             说明：\n                 1.本站主要用于文件下载加速（国内资源下载可能会更慢）。\n                 2.对下载的文件不做任何修改，并且下载24小时后服务器会自动将其删除，请及时下载到本地。\n        ")])])}],d={data:function(){return{userURL:"",CardShow:!1,loading:!1,downloadURL:"",filename:"",md5:"",size:"",sizeunit:"",imgShow:!1,RecentTableShow:!0,fileListdata:[]}},created:function(){this.getRentFileList()},methods:{restData:function(){this.CardShow=!1,this.downloadURL="",this.filename="",this.md5="",this.size="",this.sizeunit=""},toDonate:function(){this.imgShow?this.imgShow=!1:this.$alert('<img align="center" height="150px" src="https://static.chromiumer.com/donate.jpg">',"",{dangerouslyUseHTMLString:!0,confirmButtonText:"感谢支持🙏",center:!0,showClose:!0})},DownloadRes:function(){var t=this,e=/^http[s]{0,1}:\/\/([\w.]+\/?)\S*/;return e.test(this.userURL)?""===this.userURL?this.$message.success("请输入要下载的资源URL!!"):(this.loading=!0,void this.$http.get("/dl?url="+this.userURL).then((function(e){if(200!==e.status)return t.$message.error("Resources Request Failed, Please try again later !!! ");t.downloadURL=e.data.dlurl,t.filename=e.data.filename,t.md5=e.data.md5,t.size=e.data.size,t.sizeunit=e.data.sizeunit,t.RecentTableShow=!1,t.loading=!1,t.CardShow=!0}))):this.$notify.error({title:"Oooooops!!",message:"请输入有效的资源URL!!",position:"bottom-right",showClose:!1})},getRentFileList:function(){var t=this;this.$http.get("/filelist").then((function(e){if(200!==e.status)return t.$message.error("文件信息获取失败！");t.fileListdata=e.data}))}}},f=d,p=(a("034f"),a("2877")),h=Object(p["a"])(f,c,u,!1,null,null,null),m=h.exports,g=a("bc3a"),v=a.n(g);a("aede");v.a.defaults.baseURL="https://proxy.chromiumer.com",n["default"].prototype.$http=v.a,n["default"].use(l.a),n["default"].config.productionTip=!1,s.beforeEach((function(t,e,a){t.meta.title&&(document.title=t.meta.title),a()})),new n["default"]({el:"#app",router:s,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,a){},aede:function(t,e,a){}});
//# sourceMappingURL=app.064ec04c.js.map