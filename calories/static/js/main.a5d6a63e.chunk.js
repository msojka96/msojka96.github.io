(this.webpackJsonpcalories=this.webpackJsonpcalories||[]).push([[0],{27:function(e,a,t){e.exports=t(78)},32:function(e,a,t){},33:function(e,a,t){},58:function(e,a){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(21),i=t.n(c),m=(t(32),t(22)),r=t(23),s=t(25),u=t(24),o=t(26),d=(t(33),t(5)),E=t.n(d),v=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={name:"",sex:"",age:"",weight:""},t.onClick=function(e){e.preventDefault(),t.setState({name:document.getElementById("name").value,sex:document.getElementById("sex").value,age:parseInt(document.getElementById("age").value),weight:parseInt(document.getElementById("weight").value),height:parseInt(document.getElementById("height").value)})},t.ppm=function(){if("M\u0119\u017cczyzna"===t.state.sex){for(var e=13.7*t.state.weight+5*t.state.height-6.76*t.state.age+66,a=0,n=.5,c="";a<1;)1.2*e-n*(8e3/30)>=e?(c+='<div class="name">\n            <b>\n            <div>Tempo chudni\u0119cia - '.concat(n,"kg w miesi\u0105c:</div>\n            <div>").concat(Math.round(1.2*e-n*(8e3/30))," kcal</div>\n            </b>\n          </div>"),n+=.5):a=1;return l.a.createElement("div",{className:"calories"},l.a.createElement("div",{className:"name ppm"},l.a.createElement("b",null,l.a.createElement("div",null,"PODSTAWOWA PRZEMIANA MATERII:"),l.a.createElement("div",null,Math.round(e)," kcal"))),l.a.createElement("div",{className:"name ppm"},l.a.createElement("b",null,l.a.createElement("div",null,"BMR - UTRZYMYWANIE WAGI:"),l.a.createElement("div",null,Math.round(1.2*e)," kcal"))),E()(c))}for(var i=655+9.6*t.state.weight+1.8*t.state.height-4.7*t.state.age,m=0,r=.5,s="";m<1;)1.2*i-r*(8e3/30)>=i?(s+='<div class="name">\n            <b>\n            <div>Tempo chudni\u0119cia - '.concat(r,"kg w miesi\u0105c:</div>\n            <div>").concat(Math.round(1.2*i-r*(8e3/30))," kcal</div>\n            </b>\n          </div>"),r+=.5):m=1;return l.a.createElement("div",{className:"calories"},l.a.createElement("div",{className:"name ppm"},l.a.createElement("b",null,l.a.createElement("div",null,"PODSTAWOWA PRZEMIANA MATERII:"),l.a.createElement("div",null,Math.round(i)," kcal"))),l.a.createElement("div",{className:"name ppm"},l.a.createElement("b",null,l.a.createElement("div",null,"BMR - UTRZYMYWANIE WAGI:"),l.a.createElement("div",null,Math.round(1.2*i)," kcal"))),E()(s))},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return this.state.name?l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"name"},l.a.createElement("b",null,this.state.name,", ",this.state.age)),l.a.createElement("div",{className:"name sex"},l.a.createElement("b",null,this.state.sex)),l.a.createElement("div",{className:"name sex"},l.a.createElement("b",null,this.state.weight)),this.ppm()):l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"navbar"},"My calories"),l.a.createElement("form",null,l.a.createElement("label",null,"Imi\u0119"),l.a.createElement("input",{type:"text",id:"name",name:"name"}),l.a.createElement("label",null,"P\u0142e\u0107"),l.a.createElement("select",{id:"sex"},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"M\u0119\u017cczyzna"},"m\u0119\u017cczyzna"),l.a.createElement("option",{value:"Kobieta"},"kobieta")),l.a.createElement("label",null,"Wiek"),l.a.createElement("input",{type:"text",id:"age",name:"age"}),l.a.createElement("label",null,"Waga"),l.a.createElement("input",{type:"text",id:"weight",name:"weight"}),l.a.createElement("label",null,"Wzrost"),l.a.createElement("input",{type:"text",id:"height",name:"height"}),l.a.createElement("label",null,"."),l.a.createElement("button",{id:"button",onClick:this.onClick},"Zatwierd\u017a")),l.a.createElement("footer",{className:"navbar"},"Miko\u0142aj Sojka"))}}]),a}(l.a.Component);t(77);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null))};i.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a5d6a63e.chunk.js.map