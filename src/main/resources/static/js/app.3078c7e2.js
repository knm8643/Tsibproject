(function(){"use strict";var n={279:function(n,e,t){var o=t(9242),i=t(3396);function r(n,e,t,o,r,a){const l=(0,i.up)("HelloWorld"),s=(0,i.up)("mainPage");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l,{msg:"튜토리얼"}),(0,i.Wm)(s,{msg:"메인"})],64)}var a=t(7139);const l=n=>((0,i.dD)("data-v-5c015dc4"),n=n(),(0,i.Cn)(),n),s={id:"hello"},c=l((()=>(0,i._)("p",{id:"tmp"},[(0,i.Uk)(" 1. "),(0,i._)("a",{href:"https://velog.io/@aimzero9303/Vue-20.-%EC%84%9C%EB%B2%84%EB%A1%9C-ajax-%EC%9A%94%EC%B2%AD%ED%95%B4%EB%B3%B4%EC%9E%90..-feat.-axios"},"SPRING-VUE 통신하기"),(0,i._)("br"),(0,i.Uk)(" 2. "),(0,i._)("a",{href:"https://jhhan009.tistory.com/33"},"AXIOS 설치하기"),(0,i._)("br"),(0,i.Uk)(" 3. tsibvue/src/ npm run build And start! ")],-1)));function u(n,e,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("h1",null,(0,a.zw)(t.msg),1),c,(0,i._)("div",null,[(0,i._)("button",{onClick:e[0]||(e[0]=n=>l.sendSpring())},"SPRING TEST")])])}var d=t(1928),g={name:"HelloWorld",props:{msg:String},data(){return{mainOff:!0}},methods:{sendSpring(){(0,d.Z)({url:"/springTestController/test",method:"post",params:{userMessage:confirm("서버에 한마디 하겠습니까?")?prompt("안녕 스프링 반가워!","Hello World!"):prompt("진짜 하고 싶은말이 없으신가요?","T_T")}}).then((n=>{n.data?(document.getElementById("tmp").innerHTML=n.data,console.log("Hello World!")):console.log("Fail")}))},goMainPage(){document.getElementById("hello").style.display="none"}}},p=t(89);const f=(0,p.Z)(g,[["render",u],["__scopeId","data-v-5c015dc4"]]);var m=f,v=t.p+"img/일어나.1955c81c.jpeg";const h={id:"mainBody",style:{display:"none"}},_=(0,i._)("p",null,"스와이퍼 생길공간!",-1),y={class:"noticeList"},b=(0,i._)("div",null,[(0,i._)("div",{id:"notice_img",style:{height:"100px"}},[(0,i._)("img",{src:v,style:{"object-fit":"cover",width:"100%",height:"100%"}})]),(0,i._)("div",{id:"noticeTry",style:{"margin-top":"20px"}},[(0,i.Uk)(" 일어나 애들아 코딩해야지?"),(0,i._)("br"),(0,i.Uk)(" 게시판은 이런식으로 만들겠지?"),(0,i._)("br"),(0,i.Uk)(" (더미 테스트용) ")])],-1),k=[b];function w(n,e,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("h1",null,(0,a.zw)(t.msg),1),_,(0,i._)("div",y,[(0,i._)("div",{id:"notice",onClick:e[0]||(e[0]=n=>l.noticePage()),style:{border:"1px solid black",height:"200px",width:"200px",margin:"auto"}},k)])])}var C={name:"mainPage",props:{msg:String},data(){return{openMain:!0}},methods:{noticePage(){console.log("look Notice!"),alert("게시판 내부는 아직입니다!")},thisMainPage(n){this.openMain="false"==n,this.openMain&&(document.getElementById("mainBody").style.display="block"),console.log("Open Main!")}}};const E=(0,p.Z)(C,[["render",w]]);var P=E,B={name:"App",data(){return{openMain:!1}},components:{HelloWorld:m,mainPage:P}};const O=(0,p.Z)(B,[["render",r]]);var M=O;const x={class:"navi_list"};function U(n,e,t,o,r,a){return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("span",{id:"navi_main",onClick:e[0]||(e[0]=n=>a.goMainNaviPage("false"))},"메인"),(0,i.Uk)("   "),(0,i._)("span",{id:"navi_intro",onClick:e[1]||(e[1]=n=>a.gointro())},"만든이"),(0,i.Uk)("   "),(0,i._)("span",{id:"navi_login",onClick:e[2]||(e[2]=n=>a.gologin())},"로그인"),(0,i.Uk)("   "),(0,i._)("span",{id:"navi_mypage",onClick:e[3]||(e[3]=n=>a.gomypage())},"마이페이지"),(0,i.Uk)("   ")])}var j={name:"naviPage",data(){return{mainOff:!0}},methods:{goMainNaviPage(n){document.getElementById("navi_main").style.borderBottom="2px solid black",m.methods.goMainPage(),P.methods.thisMainPage(n)},gologin(){alert("로그인 페이지 미구현")},gointro(){alert("인트로 페이지 미구현")},gomypage(){alert("마이페이지 미구현")}}};const I=(0,p.Z)(j,[["render",U],["__scopeId","data-v-77f6fa6f"]]);var T=I;(0,o.ri)(M).mount("#app"),(0,o.ri)(T).mount("#navi")}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,o,i,r){if(!o){var a=1/0;for(u=0;u<n.length;u++){o=n[u][0],i=n[u][1],r=n[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(l=!1,r<a&&(a=r));if(l){n.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[o,i,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var i,r,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(e){return 0!==n[e]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(s)var u=s(t)}for(e&&e(o);c<a.length;c++)r=a[c],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(u)},o=self["webpackChunktsibvue"]=self["webpackChunktsibvue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(279)}));o=t.O(o)})();
//# sourceMappingURL=app.3078c7e2.js.map