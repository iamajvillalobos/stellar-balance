(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(48)},45:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),s=t.n(c),l=t(12),o=t(13),i=t(17),u=t(14),m=t(18);var d=function(e){var a=e.onTextChange;return r.a.createElement("div",{className:"address-text-field"},r.a.createElement("input",{type:"text",onChange:function(e){a(e.target.value)},placeholder:"GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB"}))},h=t(5),f=t.n(h),v=t(15),E=t(3),p=t.n(E);var b=function(e){var a="https://horizon.stellar.org/accounts/".concat(e);return p.a.get(a).then(function(e){return e.data.balances}).catch(function(e){return e.response.statusText})};var g=function(e){if(0===e.length)return"";var a=e.split("*")[1],t="https://federation.".concat(a,"/federation?q=").concat(e);return p.a.get(t).then(function(e){return e.data.account_id}).catch(function(e){return""})};var N=function(e){return e.split("*").length>1};var k=function(e){var a=e.address,t=e.onButtonClick,n=e.onError;function c(){return(c=Object(v.a)(f.a.mark(function e(){var r,c,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!N(a)){e.next=14;break}return e.next=3,g(a);case 3:if(!((r=e.sent).length>0)){e.next=11;break}return e.next=7,b(r);case 7:c=e.sent,Array.isArray(c)?t(c):n(c),e.next=12;break;case 11:n("Not Found");case 12:e.next=18;break;case 14:return e.next=16,b(a);case 16:s=e.sent,Array.isArray(s)?t(s):n(s);case 18:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return r.a.createElement("div",{className:"check-balance-button"},r.a.createElement("button",{onClick:function(){return c.apply(this,arguments)}},"Check Balance"))},C=t(16);var w=function(e){var a=e.data,t=a.asset_code?a.asset_code:"XLM",n=a.balance;return r.a.createElement("div",{className:"content-row"},r.a.createElement("span",{className:"row-item"},t),r.a.createElement("span",{className:"row-item"},Object(C.a)(n)))};var x=function(e){var a=e.balances;return r.a.createElement("div",{className:"results-table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("span",{className:"header-item"},"Token"),r.a.createElement("span",{className:"header-item"},"Total")),r.a.createElement("div",{className:"table-contents"},a.map(function(e,a){return r.a.createElement(w,{data:e,key:a})})))};var y=function(e){var a=e.message,t=e.onClick;return r.a.createElement("div",{className:"notification"},r.a.createElement("span",{className:"message"},a),r.a.createElement("button",{className:"close-button is-link",onClick:function(e){e.preventDefault(),t()}},"Close"))};var j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={balances:[],address:"",error:null,fetching:!1},t.handleBalanceChange=function(e){t.setState({balances:e,error:null})},t.handleAddressTextFieldChange=function(e){t.setState({address:e})},t.handleError=function(e){t.setState({balances:[],error:e})},t.handleNotificationClose=function(){t.setState({error:null})},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"address-checker"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-half"},this.state.error?r.a.createElement(y,{message:this.state.error,onClick:this.handleNotificationClose}):null,r.a.createElement("h1",{className:"title"},"Enter your public xlm address"),r.a.createElement("p",{className:"subtitle"},"You can also enter your federated address like\xa0",r.a.createElement("strong",null,"user@email.com*stellarx.com")),r.a.createElement(d,{onTextChange:this.handleAddressTextFieldChange}),r.a.createElement(k,{onButtonClick:this.handleBalanceChange,address:this.state.address,onError:this.handleError}),this.state.balances.length>0?r.a.createElement(x,{balances:this.state.balances}):null)))))}}]),a}(r.a.Component);var B=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"This project is not affiliated with Stellar. It is an"," ",r.a.createElement("a",{href:"https://github.com/iamajvillalobos/stellar-balance"},"open-source project")," created by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://iamajvillalobos.micro.blog/about/"},"AJ Villalobos"),".")))};t(45);var T=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(j,null),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.7222d5e7.chunk.js.map