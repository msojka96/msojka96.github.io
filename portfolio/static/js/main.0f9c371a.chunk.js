(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(36),o=a.n(i),c=(a(47),a(3)),r=a(1),s=a(4),m=a(5),u=a(6);a(48);var p=function(){return l.a.createElement("div",{class:"header"},l.a.createElement("div",{class:"navbar"},l.a.createElement("a",{href:"#A1"},"Portfolio")),l.a.createElement("div",{class:"menu"},l.a.createElement("div",{class:"nav"},l.a.createElement("a",{href:"#A2"},"O mnie")),l.a.createElement("div",{class:"nav"},l.a.createElement("a",{href:"#A3"},"Kontakt"))))},d=(a(49),a(50),a(19)),h=a.n(d),E=a(9),w=a.n(E),f=(a(15),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={list:"",presentation:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.technology);var e="<ul>";this.props.technology.map((function(t){e+="<li><b>".concat(t,"</b></li>")})),e+="</ul>",this.setState({list:e}),"iframe"===this.props.presentation&&(e="<iframe\n            id=".concat(this.props.alt,'\n            type="text/html"\n            width="100%"\n            height="100%"\n            src=').concat(this.props.src,'\n            allowfullscreen="allowfullscreen"\n            mozallowfullscreen="mozallowfullscreen" \n            msallowfullscreen="msallowfullscreen" \n            oallowfullscreen="oallowfullscreen" \n            webkitallowfullscreen="webkitallowfullscreen"\n            frameborder="0"\n          />'),this.setState({presentation:e})),"image"===this.props.presentation&&(e="<img\n      src=".concat(this.props.src,'\n      width="100%"\n      height="100%"\n      alt=').concat(this.props.alt,"\n    />"),this.setState({presentation:e}))}},{key:"render",value:function(){return w.a.init(),l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"presentation"},h()(this.state.presentation)),l.a.createElement("div",{className:"description"},l.a.createElement("h4",null,this.props.title),l.a.createElement("p",null,this.props.description),h()(this.state.list)))}}]),t}(l.a.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){w.a.init()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"projects","data-aos":this.props.direction,id:"A1"},l.a.createElement(f,{technology:["HTML","CSS/LESS","BOOTSTRAP","GOOGLE MAPS API"],title:"Strona domki Rewa",description:"Niedoko\u0144czone zlecenie maj\u0105ce by\u0107 stron\u0105-wizyt\xf3wk\u0105 domk\xf3w letniskowych.",image:"./1.png",alt:"domki rewa",presentation:"image",src:"./1.png"}),l.a.createElement(f,{technology:["HTML","CSS/LESS","VUE oraz VUEX","EXPRESS JS","SOCKET IO","MONGO DB","LOGOWANIE"],title:"Konkurs pi\u0119kno\u015bci koni Arabskich",description:"Aplikacja zaliczeniowa przedmiotu Technologie Sieci Web na Uczelni. Symuluje prowadzenie zawod\xf3w online. ",image:"./2.png",alt:"konie arabskie",presentation:"iframe",src:"http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"}),l.a.createElement(f,{technology:["HTML","CSS/LESS","MONGO DB","EXPRESS JS","REACT JS oraz REDUX","LOGOWANIE","REJESTRACJA"],title:"FIT APP",description:"Aplikacja s\u0142u\u017cy do prowadzenia rejestr\xf3w kalorycznych - zjedzone kalorie/spalone kalorie. Pozwala obliczy\u0107 nasze zapotrzebowanie energetyczne. Aplikacja generuje\r na bie\u017c\u0105co raporty kaloryczne dla dowolnie wybranego okresu.",image:"./3.png",alt:"fit App",presentation:"iframe",src:"http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"})))}}]),t}(l.a.Component),k=(a(94),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){w.a.init()}},{key:"render",value:function(){return l.a.createElement("div",{className:"about",id:"A2","data-aos":this.props.direction},l.a.createElement("div",{id:"about"},l.a.createElement("img",{src:"me.jpg",id:"me",alt:"me"}),l.a.createElement("div",{id:"name"},"Miko\u0142aj Sojka")),l.a.createElement("div",{id:"life"},l.a.createElement("br",null),"Mam 22 lata. Uko\u0144czy\u0142em kierunek licencjacki: ",l.a.createElement("b",null,"informatyka")," na wydziale MFI na Uniwesytecie Gda\u0144skim ze specjalizacj\u0105:"," ",l.a.createElement("b",null,"aplikacje internetowe i bazy danych"),". Interesuj\u0119 si\u0119 napraw\u0105 urz\u0105dze\u0144 elektronicznych , jazd\u0105 wyczynow\u0105 na rolkach, jazd\u0105 wyczynow\u0105 na \u0142y\u017cwach, sportem oraz s\u0142uchaniem muzyki. Dodatkow\u0105 przyjemno\u015b\u0107 sprawia mi tworzenie aplikacji internetowych."),l.a.createElement("div",{id:"skills"},l.a.createElement("br",null),"Umiej\u0119tno\u015bci :",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"Javascript"),", wraz z Dom Api, Jquery oraz Ajax"),l.a.createElement("li",null,"ReactJS, wraz z Redux oraz Vue, wraz z Vuex"),l.a.createElement("li",null,"Html, CSS, Less"),l.a.createElement("li",null,"ExpressJS"),l.a.createElement("li",null,"Znajomo\u015b\u0107 systemu Linux oraz Git."),l.a.createElement("li",null,"Bieg\u0142a obs\u0142uga program\xf3w: Excel oraz Word."),l.a.createElement("li",null,"Dodatkowo podczas studiowania mia\u0142em kontakt z j\u0119zykami: C, Java, C++, Ruby, Assembler, C#, batch, SQL, PostgreSQL."))))}}]),t}(l.a.Component)),y=(a(95),a(37)),j=a.n(y),z=a(39),S=a.n(z),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about",id:"A3","data-aos":this.props.direction},l.a.createElement("div",{className:"ainfo"},l.a.createElement(j.a,{className:"icons"})," \xa0 690-819-235"),l.a.createElement("div",{className:"ainfo"},l.a.createElement(S.a,{className:"icons"})," \xa0 mikolaj.sojka@gmail.com"))}}]),t}(l.a.Component),O=a(40),g=a.n(O),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={classname:"start"},a.handleClick=function(e){window.scrollTo(0,0)},a.handleScroll=function(){0!==window.scrollY?a.setState({classname:"update"}):a.setState({classname:"start"})},a.render=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(p,null),l.a.createElement(b,{direction:"fade-down"}),l.a.createElement(k,{direction:"fade-right"}),l.a.createElement(v,null),l.a.createElement(g.a,{id:"button_top",className:a.state.classname,onClick:a.handleClick}),l.a.createElement("footer",null,"\xa9 Copyright Miko\u0142aj Sojka"))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}}]),t}(l.a.Component);o.a.render(l.a.createElement(A,null),document.getElementById("root"))},42:function(e,t,a){e.exports=a(102)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},75:function(e,t){},94:function(e,t,a){},95:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.0f9c371a.chunk.js.map