(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e82":function(e,t,n){},"1c05":function(e,t,n){"use strict";n("a322")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("cf05"),o=n.n(c),a=Object(r["f"])("img",{alt:"Vue logo",src:o.a},null,-1);function u(e,t,n,c,o,u){var s=Object(r["k"])("PostComponent");return Object(r["g"])(),Object(r["c"])("div",null,[a,Object(r["f"])(s)])}var s=Object(r["o"])("data-v-4c733992");Object(r["i"])("data-v-4c733992");var i={class:"hello"},l={key:0};Object(r["h"])();var f=s((function(e,t,n,c,o,a){return Object(r["g"])(),Object(r["c"])("div",i,[Object(r["f"])("div",null,[Object(r["n"])(Object(r["f"])("input",{type:"text",id:"create-post","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.text=e}),placeholder:"create post here"},null,512),[[r["m"],o.text]]),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(){return a.createPost&&a.createPost.apply(a,arguments)})},"Create Posts")]),o.error?(Object(r["g"])(),Object(r["c"])("p",l,Object(r["l"])(o.error),1)):Object(r["d"])("",!0),(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(o.posts,(function(e,t){return Object(r["g"])(),Object(r["c"])("div",{key:t},[Object(r["e"])(Object(r["l"])(e.text)+" "+Object(r["l"])(e.createdAt)+" ",1),Object(r["f"])("button",{onClick:function(t){return a.deletePost(e._id)}},"Delete post",8,["onClick"])])})),128))])})),p=n("1da1"),b=(n("96cf"),n("5530")),d=n("d4ec"),O=n("bee2"),j=(n("d3b7"),n("d81d"),n("7338")),v=n.n(j),g="api/posts",h=function(){function e(){Object(d["a"])(this,e)}return Object(O["a"])(e,null,[{key:"getPosts",value:function(){return new Promise((function(e,t){try{v.a.get(g).then((function(t){e(t.data.map((function(e){return Object(b["a"])(Object(b["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))}))}catch(n){t(n)}}))}},{key:"insertPost",value:function(e){return v.a.post(g,{text:e})}},{key:"deletePost",value:function(e){return v.a.delete("".concat(g,"/").concat(e))}}]),e}(),m=h,y={name:"HelloWorld",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getPosts();case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{getPosts:function(){try{return m.getPosts()}catch(e){this.error=e.message}},createPost:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.insertPost(e.text);case 2:return t.next=4,e.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,m.deletePost(e);case 2:return n.next=4,t.getPosts();case 4:t.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}};n("f03b");y.render=f,y.__scopeId="data-v-4c733992";var P=y,x={name:"App",components:{PostComponent:P}};n("1c05");x.render=u;var w=x;Object(r["b"])(w).mount("#app")},a322:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f03b:function(e,t,n){"use strict";n("0e82")}});
//# sourceMappingURL=app.a4422ba4.js.map