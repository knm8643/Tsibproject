(function(){"use strict";var n={9358:function(n,t,e){var o=e(9242),r=e(3396);function i(n,t,e,o,i,a){const l=(0,r.up)("HelloWorld"),u=(0,r.up)("mainPage");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{msg:"Hello World"}),(0,r.Wm)(u)],64)}var a=e(7139);const l=n=>((0,r.dD)("data-v-74bd880b"),n=n(),(0,r.Cn)(),n),u={key:0,class:"hello"},s=l((()=>(0,r._)("p",{id:"tmp"},[(0,r.Uk)(" 애들아 버튼을 한번 눌러봐 그리고 콘솔창에 SYSOUT 헬로월드가 있는지 확인해봐!"),(0,r._)("br"),(0,r.Uk)(" 뷰는 ajax보단 axios를 사용하는게 좋다네"),(0,r._)("br"),(0,r.Uk)(" 스프링 연결해놨다 일단! 스프링API 테스트 하려면 계속 npm run build필요?"),(0,r._)("br"),(0,r._)("a",{href:"https://velog.io/@aimzero9303/Vue-20.-%EC%84%9C%EB%B2%84%EB%A1%9C-ajax-%EC%9A%94%EC%B2%AD%ED%95%B4%EB%B3%B4%EC%9E%90..-feat.-axios"},"Ajax-Axios 설치 법"),(0,r._)("br"),(0,r._)("a",{href:"https://jhhan009.tistory.com/33"},"vue-spring 연결")],-1)));function c(n,t,e,o,i,l){return i.mainOff?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("h1",null,(0,a.zw)(e.msg),1),s,(0,r._)("div",null,[(0,r._)("button",{onClick:t[0]||(t[0]=n=>l.sendSpring())},"SPRING TEST"),(0,r._)("button",{onClick:t[1]||(t[1]=n=>l.goMainPage())},"GO MAIN PAGE")])])):(0,r.kq)("",!0)}var f=e(1928);const d={id:"mainBody",style:{display:"none"}},p=(0,r._)("br",null,null,-1),m=(0,r._)("br",null,null,-1),g=(0,r._)("button",null,"click",-1);function h(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Uk)(" 새로운 메인 페이지! 이런식으로 만들어가면 되는걸까?"),p,(0,r.Uk)(" 하나의 index.html 안에서 템플릿만 바꾸는 느낌?"),m,g])}var v={name:"mainPage",props:{},data(){return{openMain:!0}},methods:{thisMainPage(n){this.openMain="false"==n,this.openMain&&(console.log(this.openMain),document.getElementById("mainBody").style.display="show"),console.log("OPEN MAIN! 왜 안떠 SIBAL!")}}},b=e(89);const y=(0,b.Z)(v,[["render",h]]);var _=y,O={name:"HelloWorld",props:{msg:String},data(){return{mainOff:!0}},methods:{sendSpring(){(0,f.Z)({url:"/springTestController/test",method:"post",params:{userMessage:prompt("서버에 전달하고 싶은 말","")}}).then((n=>{n.data?(document.getElementById("tmp").innerHTML=n.data,console.log("Hello World!")):console.log("Fail")}))},goMainPage(){this.mainOff=!1,_.methods.thisMainPage("false")}}};const k=(0,b.Z)(O,[["render",c],["__scopeId","data-v-74bd880b"]]);var E=k,M={name:"App",data(){return{openMain:!1}},components:{HelloWorld:E,mainPage:_}};const w=(0,b.Z)(M,[["render",i]]);var B=w;(0,o.ri)(B).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<n.length;c++){o=n[c][0],r=n[c][1],i=n[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){n.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(u)var c=u(e)}for(t&&t(o);s<a.length;s++)i=a[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(c)},o=self["webpackChunktsibvue"]=self["webpackChunktsibvue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9358)}));o=e.O(o)})();
//# sourceMappingURL=app.19602bfc.js.map