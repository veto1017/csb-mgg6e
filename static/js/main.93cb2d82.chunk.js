(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),o=a(1),s=a(5),u=a(6),m=a(8),i=a(7),f=a(2);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var l=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var d=function(e){Object(m.a)(a,e);var t=v(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={currencies:["USD","AUD","SGD","PHP","EUR"],base:"USD",amount:"",convertTo:"EUR",result:"",date:""},e.handleSelect=function(t){var a;e.setState((a={},Object(o.a)(a,t.target.name,t.target.value),Object(o.a)(a,"result",null),a),e.calculate)},e.handleInput=function(t){e.setState({amount:t.target.value,result:null,date:null},e.calculate)},e.calculate=function(){var t=e.state.amount;t!==isNaN&&fetch("https://api.exchangeratesapi.io/latest?base=".concat(e.state.base)).then(function(e){return e.json()}).then(function(a){var n=a.date,l=(a.rates[e.state.convertTo]*t).toFixed(4);e.setState({result:l,date:n})})},e.handleSwap=function(t){var a=e.state.base,n=e.state.convertTo;t.preventDefault(),e.setState({convertTo:a,base:n,result:null},e.calculate)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.base,n=e.amount,c=e.convertTo,r=e.result,o=e.date;return l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 mx-auto"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("h5",null,n," ",a," is equevalent to"),l.a.createElement("h2",null,""===n?"0":null===r?"Calculating...":r," ",c),l.a.createElement("p",null,"As of ",""===n?"/ / /":null===o?"":o),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10"},l.a.createElement("form",{className:"form-inline mb-4"},l.a.createElement("input",{type:"number",value:n,onChange:this.handleInput,className:"form-control form-control-lg mx-3"}),l.a.createElement("select",{name:"base",value:a,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map(function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("form",{className:"form-inline mb-4"},l.a.createElement("input",{disabled:!0,value:""===n?"0":null===r?"Calculating...":r,className:"form-control form-control-lg mx-3"}),l.a.createElement("select",{name:"convertTo",value:c,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map(function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"col-lg-2 align-self-center"},l.a.createElement("h1",{onClick:this.handleSwap,className:"swap"},"\u2193\u2191")))))))}}]),a}(n.Component);a(14);function p(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null))}var h=document.getElementById("root");r.a.render(l.a.createElement(p,null),h)},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.93cb2d82.chunk.js.map