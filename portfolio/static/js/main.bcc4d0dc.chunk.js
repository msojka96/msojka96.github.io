(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(36),r=a.n(o),s=(a(47),a(3)),c=a(1),l=a(4),m=a(5),p=a(6);a(48);var d=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"navbar"},i.a.createElement("a",{href:"#A2"},"Miko\u0142aj Sojka")),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"nav"},i.a.createElement("a",{href:"#A1"},"Projekty")),i.a.createElement("div",{className:"nav"},i.a.createElement("a",{href:"#A3"},"Kontakt"))))},u=(a(49),a(50),a(19)),h=a.n(u),y=a(9),E=a.n(y),w=(a(15),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={list:"",presentation:"",mouseover:1,style:""},a.onMouseOver=function(e){window.innerWidth>900&&(document.getElementById("pres".concat(a.props.id)).style.display="none",document.getElementById("desc".concat(a.props.id)).style.display="block")},a.onMouseOut=function(){window.innerWidth>900&&(document.getElementById("pres".concat(a.props.id)).style.display="flex",document.getElementById("desc".concat(a.props.id)).style.display="none")},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateSize",value:function(){window.innerWidth<=900?(document.getElementById("pres".concat(this.props.id)).style.display="flex",document.getElementById("desc".concat(this.props.id)).style.display="block"):(document.getElementById("pres".concat(this.props.id)).style.display="flex",document.getElementById("desc".concat(this.props.id)).style.display="none")}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize.bind(this)),void 0===this.props.demo&&this.setState({style:"none"});try{var e="<ul>";this.props.technology.map((function(t){return e+="<li><b>".concat(t,"</b></li>"),0})),e+="</ul>",this.setState({list:e}),"iframe"===this.props.presentation&&(e="<iframe\n            id=".concat(this.props.alt,'\n            type="text/html"\n            width="100%"\n            height="100%"\n            src=').concat(this.props.src,'\n            allowfullscreen="allowfullscreen"\n            mozallowfullscreen="mozallowfullscreen" \n            msallowfullscreen="msallowfullscreen" \n            oallowfullscreen="oallowfullscreen" \n            webkitallowfullscreen="webkitallowfullscreen"\n            frameborder="0"\n          />'),this.setState({presentation:e})),"image"===this.props.presentation&&(e="<img\n      src=".concat(this.props.src,"\n      id=").concat(this.props.id,'\n      width="100%"\n      height="100%"\n      alt=').concat(this.props.alt,"\n    />"),this.setState({presentation:e}))}catch(t){}}},{key:"render",value:function(){return E.a.init(),i.a.createElement("div",{className:"project",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},i.a.createElement("div",{className:"presentation",id:"pres"+this.props.id},h()(this.state.presentation)),i.a.createElement("div",{className:"description",id:"desc"+this.props.id},i.a.createElement("h4",null,this.props.title),i.a.createElement("p",null,this.props.description),h()(this.state.list),i.a.createElement("div",{className:"links"},i.a.createElement("a",{href:this.props.href},i.a.createElement("div",{className:"link"},"Github")),i.a.createElement("a",{href:this.props.demo},i.a.createElement("div",{className:"link ".concat(this.state.style)},"Demo")))))}}]),t}(i.a.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){E.a.init()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"projects","data-aos":this.props.direction,id:"A1"},i.a.createElement(w,{technology:["HTML","CSS/LESS","BOOTSTRAP","GOOGLE MAPS API","RWD"],title:"Strona domki Rewa",description:"Niedoko\u0144czone zlecenie maj\u0105ce by\u0107 stron\u0105-wizyt\xf3wk\u0105 domk\xf3w letniskowych.",image:"./1.png",alt:"domki rewa",id:"domki",presentation:"image",src:"./1.png",href:"https://github.com/msojka96/msojka96.github.io/tree/master/strona_domki",demo:"https://msojka96.github.io/strona_domki"}),i.a.createElement(w,{technology:["HTML","CSS/LESS","VUE oraz VUEX","EXPRESS JS (BACKEND - w\u0142asny serwer)","SOCKET IO","MONGO DB","LOGOWANIE","RWD"],title:"Konkurs pi\u0119kno\u015bci koni Arabskich",description:"Aplikacja zaliczeniowa przedmiotu Technologie Sieci Web na Uczelni. Symuluje prowadzenie zawod\xf3w online. ",image:"./2.png",alt:"konie arabskie",id:"horses",presentation:"image",src:"./2.png",href:"https://github.com/msojka96/inf_exp/tree/master/project-horses"}),i.a.createElement(w,{technology:["HTML","CSS/LESS","MONGO DB","EXPRESS JS (BACKEND - w\u0142asny serwer)","REACT JS oraz REDUX","LOGOWANIE","REJESTRACJA","RWD"],title:"FIT APP",description:"Aplikacja s\u0142u\u017cy do prowadzenia rejestr\xf3w kalorycznych - zjedzone kalorie/spalone kalorie. Pozwala obliczy\u0107 nasze zapotrzebowanie energetyczne. Aplikacja generuje\r na bie\u017c\u0105co raporty kaloryczne dla dowolnie wybranego okresu.",image:"./4.png",alt:"fitapp",id:"fitapp",presentation:"image",src:"./4.png",href:"https://github.com/msojka96/inf_exp/tree/master/fitApp",demo:"https://msojka96.github.io/fitapp"})),i.a.createElement("div",{className:"projects","data-aos":this.props.direction,id:"A1"},i.a.createElement(w,{technology:["HTML","CSS","REACT JS oraz REDUX","GOOGLE CUSTOM SEARCH API","SEMANTIC UI"],title:"Wyszukiwarka",description:"Aplikacja s\u0142u\u017cy do wyszukiwania podanych fraz ze strony Wikipedia i wy\u015bwietlania wynik\xf3w wyszukiwa\u0144. Aplikacja pozwala na wyszukanie \r jednocze\u015bnie 10 wynik\xf3w z danej frazy.",image:"./3.png",alt:"wyszukiwarka",id:"searcher",presentation:"image",src:"./3.png",href:"https://github.com/msojka96/inf_exp/tree/master/searcher",demo:"https://msojka96.github.io/searcher"}),i.a.createElement(w,{technology:["HTML","CSS - layout pisany od zera przeze mnie, bez gotowych rozwi\u0105za\u0144","REACT JS","RWD"],title:"Portoflio",description:"Aplikacja Portfolio, na kt\xf3rej pa\u0144stwo si\u0119 obecnie znajduj\u0105.",image:"./5.png",alt:"portfolio",id:"portfolio",presentation:"image",src:"./5.png",href:"https://github.com/msojka96/inf_exp/tree/master/portfolio",demo:"https://msojka96.github.io/portfolio"}),i.a.createElement(w,{technology:["HTML","CSS/SASS","REACT JS oraz REDUX","RWD","GOOGLE MAPS API","FIREBASE","LOGOWANIE","REJESTRACJA","MATERIAL UI"],title:"Turystyczne Tricity",description:"Projekt czteroosobowy b\u0119d\u0105cy prac\u0105 licencjacka. Aplikacja umo\u017cliwia proste i szybkie przegl\u0105danie atrakcyjnych miejsc turystycznych. Administrator\r zajmuje si\u0119 dodawaniem, usuwaniem, edytowaniem miejsc.",image:"./6.png",alt:"turystyczne",id:"tricity",presentation:"image",src:"./6.png",href:"https://github.com/msojka96/turystyczne_projekt"})),i.a.createElement("div",{className:"projects","data-aos":this.props.direction,id:"A1"},i.a.createElement(w,{technology:["HTML","CSS","REACT JS oraz REDUX","RWD","EXPRESS JS - BACKEND (w\u0142asny serwer z danymi)"],title:"Skm",description:"Projekt maj\u0105cy na celu \u0142atwe sprawdzanie odleg\u0142o\u015bci mi\u0119dzy stacjami SKM.",image:"./7.png",alt:"skm",id:"skm",presentation:"image",src:"./7.png",href:"https://github.com/msojka96/skm",demo:"https://msojka96.github.io/skm"})))}}]),t}(i.a.Component),j=(a(94),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){E.a.init()}},{key:"render",value:function(){return i.a.createElement("div",{className:"about",id:"A2","data-aos":this.props.direction},i.a.createElement("div",{className:"title",id:"title-about"},"O mnie"),i.a.createElement("div",{id:"about"},i.a.createElement("img",{src:"me.JPG",id:"me",alt:"me"})),i.a.createElement("div",{id:"life"},i.a.createElement("br",null),"Mam 22 lata. Uko\u0144czy\u0142em kierunek licencjacki: ",i.a.createElement("b",null,"informatyka")," na wydziale MFI na Uniwesytecie Gda\u0144skim ze specjalizacj\u0105:"," ",i.a.createElement("b",null,"aplikacje internetowe i bazy danych"),". Interesuj\u0119 si\u0119 napraw\u0105 urz\u0105dze\u0144 elektronicznych , jazd\u0105 wyczynow\u0105 na rolkach, jazd\u0105 wyczynow\u0105 na \u0142y\u017cwach, sportem oraz s\u0142uchaniem muzyki. Dodatkow\u0105 przyjemno\u015b\u0107 sprawia mi tworzenie aplikacji internetowych."),i.a.createElement("div",{id:"skills"},i.a.createElement("br",null),"Umiej\u0119tno\u015bci :",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"Javascript"),", wraz z Dom Api, Jquery oraz Ajax."),i.a.createElement("li",null,"ReactJS, wraz z Redux oraz Vue, wraz z Vuex."),i.a.createElement("li",null,"Html, CSS, Less, Sass."),i.a.createElement("li",null,"ExpressJS, pisanie w\u0142asnych serwer\xf3w."),i.a.createElement("li",null,"Znajomo\u015b\u0107 systemu Linux oraz Git."),i.a.createElement("li",null,"Bieg\u0142a obs\u0142uga program\xf3w: Excel oraz Word."),i.a.createElement("li",null,"Dodatkowo podczas studiowania mia\u0142em kontakt z j\u0119zykami: C, Java, C++, Ruby, Assembler, C#, batch, SQL, PostgreSQL.")),i.a.createElement("b",null,"UWAGA!: "),i.a.createElement("p",null,"Poni\u017cej znajduj\u0105 si\u0119 wybrane przeze mnie projekty wraz z przekierowaniami do ich repozytori\xf3w. Tworz\u0105c moje prywatne projekty staram si\u0119 u\u017cywa\u0107 w\u0142asnych umiej\u0119tno\u015bci CSS/LESS/SASS."),i.a.createElement("br",null)),i.a.createElement("div",{className:"title"},"Projekty"))}}]),t}(i.a.Component)),f=(a(95),a(37)),z=a.n(f),g=a(39),b=a.n(g),S=a(40),v=a.n(S),A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"about",id:"A3"},i.a.createElement("div",{className:"title",id:"title-contact"},"Kontakt"),i.a.createElement("div",{className:"ainfo"},i.a.createElement(z.a,{className:"icons"})," \xa0 690-819-235"),i.a.createElement("div",{className:"ainfo"},i.a.createElement(b.a,{className:"icons"})," \xa0 mikolaj.sojka@gmail.com"),i.a.createElement("div",{className:"ainfo"},i.a.createElement(v.a,{className:"icons"})," \xa0 ",i.a.createElement("a",{href:"https://github.com/msojka96/"},"https://github.com/msojka96/")))}}]),t}(i.a.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={classname:"start"},a.handleClick=function(e){window.scrollTo(0,0)},a.handleScroll=function(){0!==window.scrollY?a.setState({classname:"update"}):a.setState({classname:"start"})},a.render=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(d,null),i.a.createElement(j,{direction:"fade-right"}),i.a.createElement(k,{direction:"fade-down"}),i.a.createElement(A,{direction:"fade-left"}),i.a.createElement("div",{id:"button_top",className:a.state.classname,onClick:a.handleClick,color:"error"}),i.a.createElement("a",{href:"https://jigsaw.w3.org/css-validator/check/referer"},i.a.createElement("img",{id:"w3c",src:"https://jigsaw.w3.org/css-validator/images/vcss",alt:"Poprawny CSS!"})),i.a.createElement("footer",null,"\xa9 Copyright Miko\u0142aj Sojka"))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}}]),t}(i.a.Component);r.a.render(i.a.createElement(O,null),document.getElementById("root"))},42:function(e,t,a){e.exports=a(102)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},75:function(e,t){},94:function(e,t,a){},95:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.bcc4d0dc.chunk.js.map