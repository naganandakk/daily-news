(window["webpackJsonpgoogle-news-clone"]=window["webpackJsonpgoogle-news-clone"]||[]).push([[0],{102:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(87),s=n(35),l=n(73),p=n(17),u=n(39),m=(n(102),n(5)),d=n(12),g=n(4),b=n(178),f=n(179),h=n(169),O=n(172),E=n(173),y=n(170),j=n(54),w=n.n(j),v=n(187),k=n(14),S=n(188),P=n(51),x=n.n(P),D=n(75),I=n.n(D),N=n(74),C=n.n(N),F=n(45),T=n.n(F),M=Object(h.a)(function(e){var t;return{search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF"},arrowDropdownIcon:{height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:e.spacing(1),color:"#FFFFFF"},closeIcon:{height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:e.spacing(6),color:"#FFFFFF"},inputRoot:{color:"inherit"},inputInput:(t={padding:e.spacing(1,4,1,7),transition:e.transitions.create("width"),width:e.spacing(75),height:e.spacing(4),fontFamily:"Google Sans"},Object(m.a)(t,e.breakpoints.down("md"),{width:e.spacing(35),padding:e.spacing(1,10,1,7)}),Object(m.a)(t,e.breakpoints.down("xs"),{width:"100%"}),t)}}),R=Object(p.f)(function(e){var t=M(),n=Object(a.useState)(""),o=Object(d.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),p=l[0],u=l[1],m=T.a.parse(e.location.search).q||"",g=function(e){13===e.which&&(window.location="#/search?q=".concat(c))},b=function(e){i(e.target.value)};return Object(a.useEffect)(function(){u(!!c)},[c]),Object(a.useEffect)(function(){i(m)},[m]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{xsDown:!0,implementation:"css"},r.a.createElement("div",{className:t.search},r.a.createElement(y.a,{className:t.searchIcon},r.a.createElement(x.a,null)),p?r.a.createElement(y.a,{className:t.closeIcon},r.a.createElement(C.a,null)):null,r.a.createElement(y.a,{className:t.arrowDropdownIcon},r.a.createElement(I.a,null)),r.a.createElement(S.a,{onChange:b,onKeyPress:g,value:c,placeholder:"Search for topics, locations & sources",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}))),r.a.createElement(v.a,{smUp:!0,implementation:"css"},r.a.createElement("div",{className:t.search},r.a.createElement(y.a,{className:t.searchIcon},r.a.createElement(x.a,null)),r.a.createElement(S.a,{onChange:b,onKeyPress:g,value:c,placeholder:"Search",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}))))}),B=Object(h.a)(function(e){return{menuButton:{marginRight:e.spacing(2)},appBar:{zIndex:e.zIndex.drawer+1},title:Object(m.a)({flexGrow:.2,fontWeight:600},e.breakpoints.down("sm"),{display:"none"})}}),L=function(e){var t=B();return r.a.createElement(O.a,{position:"fixed",className:t.appBar},r.a.createElement(E.a,null,r.a.createElement(v.a,{mdUp:!0,implementation:"css"},r.a.createElement(y.a,{onClick:e.onMobileMenuToggle,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null))),r.a.createElement(v.a,{smDown:!0,implementation:"css"},r.a.createElement(y.a,{onClick:e.onDesktopMenuToggle,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null))),r.a.createElement("h3",{className:t.title},"Daily News"),r.a.createElement(R,null)))},_=n(186),z=n(174),G=n(177),W=n(175),U=n(176),A=n(77),H=n.n(A),q=n(78),J=n.n(q),K=n(80),V=n.n(K),X=n(79),$=n.n(X),Q=n(82),Y=n.n(Q),Z=n(81),ee=n.n(Z),te=n(83),ne=n.n(te),ae=Object(h.a)(function(e){return{drawer:Object(m.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),drawerPaper:{width:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),borderRight:e.spacing(0)},drawerPaperShift:{width:0,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},toolbar:e.mixins.toolbar,listItem:{borderTopRightRadius:e.spacing(3),borderBottomRightRadius:e.spacing(3),"&:hover":{color:"#1a73e8",background:"none"}},listItemSelected:{borderTopRightRadius:e.spacing(3),borderBottomRightRadius:e.spacing(3),background:"#E6EBFD",color:"#1a73e8","&:hover":{color:"#1a73e8",background:"#E6EBFD"}},listItemIconSelected:{color:"inherit"},title:{paddingLeft:e.spacing(2),fontWeight:600}}}),re=Object(p.f)(function(e){var t=ae(),n=e.location.pathname,a=[[{key:"top-stories",title:"Top stories",icon:r.a.createElement(H.a,null),link:"/",selected:!("/"!==n&&!n.includes("top-stories"))}],[{key:"business",title:"Business",icon:r.a.createElement(J.a,null),link:"/topics/business",selected:!!n.includes("topics/business")},{key:"technology",title:"Technology",icon:r.a.createElement($.a,null),link:"/topics/technology",selected:!!n.includes("topics/technology")},{key:"entertainment",title:"Entertainment",icon:r.a.createElement(V.a,null),link:"/topics/entertainment",selected:!!n.includes("topics/entertainment")},{key:"sports",title:"Sports",icon:r.a.createElement(ee.a,null),link:"/topics/sports",selected:!!n.includes("topics/sports")},{key:"science",title:"Science",icon:r.a.createElement(Y.a,null),link:"/topics/science",selected:!!n.includes("topics/science")},{key:"health",title:"Health",icon:r.a.createElement(ne.a,null),link:"/topics/health",selected:!!n.includes("topics/health")}]],o=function(){var n=a.length;return a.map(function(a,o){return r.a.createElement(r.a.Fragment,{key:"menu-list-".concat(o)},r.a.createElement(z.a,null,a.map(function(n){return r.a.createElement(u.b,{key:n.title,to:n.link,onClick:function(){e.openMobile&&e.onMobileMenuToggle()}},r.a.createElement(W.a,{button:!0,key:n.key,className:n.selected?t.listItemSelected:t.listItem},r.a.createElement(U.a,{className:n.selected?t.listItemIconSelected:""},n.icon),r.a.createElement("span",null,n.title)))})),n-1!==o?r.a.createElement(G.a,null):null)})};return r.a.createElement("nav",{className:t.drawer,"aria-label":"top-stories categories"},r.a.createElement(v.a,{mdUp:!0,implementation:"css"},r.a.createElement(_.a,{variant:"temporary",open:e.openMobile,onClose:e.onMobileMenuToggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolbar},r.a.createElement("h3",{className:t.title},"Daily News")),o())),r.a.createElement(v.a,{smDown:!0,implementation:"css"},r.a.createElement(_.a,{variant:"permanent",open:!0,classes:{paper:e.openDesktop?t.drawerPaper:t.drawerPaperShift},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolbar}),o())))}),oe=Object(h.a)(function(e){return{root:{display:"flex",flexGrow:1},content:{flexGrow:1,padding:e.spacing(3),marginTop:e.spacing(4),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},gridContainer:{flexGrow:1}}}),ce=function(e){var t=oe(),n=Object(a.useState)(!1),o=Object(d.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(!0),l=Object(d.a)(s,2),p=l[0],u=l[1];function h(){i(!c)}function O(){u(!p)}return r.a.createElement("div",{className:t.root},r.a.createElement(L,{onMobileMenuToggle:h,onDesktopMenuToggle:O}),r.a.createElement(re,{openMobile:c,openDesktop:p,onMobileMenuToggle:h,onDesktopMenuToggle:O}),r.a.createElement(b.a,{className:Object(g.a)(t.content,Object(m.a)({},t.contentShift,p))},r.a.createElement(f.a,{container:!0,className:t.gridContainer,spacing:2},r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:10,lg:8},e.children))))},ie=n(25),se=n.n(ie),le=n(37),pe=n(181),ue=n(185);function me(e){return r.a.createElement(ue.a,{"aria-labelledby":e.title||"app-modal-title","aria-describedby":e.description||"app-modal-description",open:e.open,onClose:e.handleClose||null},e.children)}var de=n(84),ge=n.n(de),be=n(180),fe=Object(h.a)(function(e){var t;return{gridContainer:{flexGrow:1},card:{borderRadius:e.spacing(1),borderStyle:"solid",borderWidth:"thin",borderColor:"#D3D3D3"},mediaContainer:Object(m.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{padding:e.spacing(1)}),articleContainer:Object(m.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{padding:e.spacing(1),margin:e.spacing(0)}),media:(t={width:"100%",height:"100%",borderRadius:e.spacing(1)},Object(m.a)(t,e.breakpoints.down("xs"),{maxHeight:80}),Object(m.a)(t,e.breakpoints.up("sm"),{maxHeight:150}),t),title:Object(m.a)({padding:e.spacing(0),marginBottom:e.spacing(.5)},e.breakpoints.down("xs"),{fontSize:"0.8rem"}),source:Object(m.a)({color:"grey",fontSize:"0.9rem"},e.breakpoints.down("xs"),{fontSize:"0.7rem"}),description:Object(m.a)({},e.breakpoints.down("sm"),{display:"none"})}}),he=function(e){var t=e.article,n=fe();return r.a.createElement(be.a,{className:n.card},r.a.createElement(f.a,{container:!0,className:n.gridContainer},r.a.createElement(f.a,{item:!0,xs:8,className:n.articleContainer},r.a.createElement("h3",{className:n.title},t.title),r.a.createElement("span",{className:n.source},t.source.name," - ",ge.a.utc(t.publishedAt).fromNow()),r.a.createElement("p",{className:n.description},t.description)),r.a.createElement(f.a,{item:!0,xs:4,className:n.mediaContainer},r.a.createElement("img",{className:n.media,src:t.urlToImage,alt:""}))))},Oe=Object(h.a)(function(e){return{article:{marginBottom:e.spacing(2)},title:{padding:e.spacing(0),margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)}}}),Ee=function(e){var t=Oe(),n=e.articles.map(function(e,n){return r.a.createElement("div",{className:t.article,key:n},r.a.createElement(he,{className:t.article,article:e}))}),a=e.title?r.a.createElement("h2",{className:t.title},e.title):null;return r.a.createElement(r.a.Fragment,null,a,n)},ye=n(85);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var we=["f251266458e947ba94e465c731e10a2a","afbacd1a0f8a435e8971084223998783"],ve=n.n(ye).a.create({baseURL:"https://newsapi.org/v2"});ve.interceptors.request.use(function(e){var t=Math.floor(Math.random()*we.length),n=we[t];e.headers.Authorization="Bearer ".concat(n);return e.params=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{country:"in"},{},e.params,{pageSize:100}),e});var ke=ve,Se=function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(d.a)(i,2),l=s[0],p=s[1];function u(){return(u=Object(le.a)(se.a.mark(function e(){var t;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,ke.get("/top-headlines");case 3:t=e.sent,p(!1),c(t.data.articles);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){!function(){u.apply(this,arguments)}()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{open:l},r.a.createElement(pe.a,{color:"secondary"})),r.a.createElement(Ee,{title:"Headlines",articles:o}))},Pe=n(183),xe=n(184),De=n(182),Ie=Object(h.a)(function(e){return{tabsContainer:{borderBottom:"1px solid",borderBottomWidth:"thin",borderBottomColor:"#D3D3D3",marginBottom:e.spacing(3)},tabs:{padding:e.spacing(0),margin:e.spacing(0)},tab:Object(m.a)({textTransform:"none",fontFamily:"Google Sans",fontSize:"1.2rem",fontWeight:500,margin:e.spacing(0),padding:e.spacing(2),"&:hover":{color:"#000000"},width:"fit-content",minWidth:e.spacing(0)},e.breakpoints.down("xs"),{fontSize:"0.8rem"})}});function Ne(e){var t=Ie(),n=Object(a.useState)(e.selectedTabIndex||0),o=Object(d.a)(n,2),c=o[0],i=o[1],s=e.tabs.map(function(e,n){return r.a.createElement(De.a,Object.assign({key:e,className:t.tab,label:e},{id:"scrollable-auto-tab-".concat(a=n),"aria-controls":"scrollable-auto-tabpanel-".concat(a)}));var a});return Object(a.useEffect)(function(){i(e.selectedTabIndex)},[e.selectedTabIndex]),r.a.createElement("div",{className:t.tabsContainer},r.a.createElement(xe.a,{className:t.tabs,value:c,onChange:function(t,n){i(n),e.onSectionChange(n)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},s))}var Ce=Object(h.a)(function(e){return{title:Object(m.a)({fontSize:"1.8rem",textTransform:"capitalize",margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)},e.breakpoints.down("xs"),{fontSize:"1.2rem"})}});function Fe(e){var t=Ce(),n=Object(a.useState)([]),o=Object(d.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),p=l[0],u=l[1],m=Object(a.useState)(!1),g=Object(d.a)(m,2),b=g[0],f=g[1],h=e.match.params,O=h.topicID,E=h.sectionID,y={business:["Latest","Economy","Markets","Jobs","Personal finance","Entrepreneurship"],technology:["Latest","Mobile","Gadgets","Internet","Virtual Reality","Artificial Intelligence","Computing"],entertainment:["Latest","Movies","Music","Tv","Books","Art","Celebrities"],sports:["Latest","Cricket","Hockey","Tennis","Football","Badminton","Kabbadi","Women's Cricket","Basketball","F1 Racing"],science:["Latest","Environment","Outer space","Physics","Genetics","Wildlife"],health:["Latest","Medicine","Healthcare","Mental health","Nutrition","Fitness"]},j=y[O].map(function(e){return e.toLowerCase()}).indexOf(E),w=-1!==j?j:0,v=function(){var e=Object(le.a)(se.a.mark(function e(t){var n;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,ke.get("/top-headlines",{params:{category:O,q:"latest"!==t?t:void 0}});case 3:n=e.sent,f(!1),i(n.data.articles);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){(function(){var e=Object(le.a)(se.a.mark(function e(){var t;return se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,ke.get("/top-headlines",{params:{category:O}});case 3:t=e.sent,u(!1),i(t.data.articles);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[O]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{open:p},r.a.createElement(pe.a,{color:"secondary"})),r.a.createElement("h2",{className:t.title},O),r.a.createElement(Ne,{tabs:y[e.match.params.topicID],selectedTabIndex:w,onSectionChange:function(e){var t=y[O][e].toLowerCase();window.location.hash="topics/".concat(O,"/sections/").concat(t),v(t)}}),b?r.a.createElement(Pe.a,{color:"secondary"}):r.a.createElement(Ee,{articles:c}))}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Re=Object(h.a)(function(e){return{spacing:{marginBottom:e.spacing(3)}}});function Be(e){var t=Re(),n=Object(a.useState)([]),o=Object(d.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),p=l[0],u=l[1];return Object(a.useEffect)(function(){(function(){var t=Object(le.a)(se.a.mark(function t(){var n;return se.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,ke.get("/everything",{params:Me({country:void 0,language:"en"},T.a.parse(e.location.search))});case 3:n=t.sent,u(!1),i(n.data.articles);case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[e.location.search]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{open:p},r.a.createElement(pe.a,{color:"secondary"})),r.a.createElement("div",{className:t.spacing}),r.a.createElement(Ee,{articles:c}))}function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ze={isSignedIn:!1,user:{}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return _e({},e,{isSignedIn:!0,user:t.payload});case"SIGN_OUT":return _e({},e,{isSignedIn:!1,user:{}});default:return e}},We=n(86),Ue=n.n(We);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var qe={pageSize:100,country:"in",language:"en"};function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ve={sidebar:!0,pageLoader:!1},Xe=Object(s.c)({auth:Ge,articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ARTICLES":return t.payload;default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTERS":return He({},e,{},t.payload);case"REMOVE_FILTERS":return Ue.a.omit(e,t.payload);default:return e}},sources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SOURCES":return t.payload;default:return e}},uiState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_UI_STATE":return Ke({},e,{},t.payload);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Qe=Object(s.e)(Xe,$e(Object(s.a)(l.a)));c.a.render(r.a.createElement(i.a,{store:Qe},r.a.createElement(function(){return r.a.createElement(u.a,null,r.a.createElement(ce,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:Se}),r.a.createElement(p.a,{exact:!0,path:"/topics/:topicID",component:Fe}),r.a.createElement(p.a,{exact:!0,path:"/topics/:topicID/sections/:sectionID",component:Fe}),r.a.createElement(p.a,{exact:!0,path:"/search",component:Be}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,n){e.exports=n(134)}},[[93,1,2]]]);
//# sourceMappingURL=main.d758c3c9.chunk.js.map