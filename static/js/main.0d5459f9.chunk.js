(this.webpackJsonpgrocerylist=this.webpackJsonpgrocerylist||[]).push([[0],{388:function(e,t,r){},389:function(e,t,r){},728:function(e,t,r){"use strict";r.r(t);var n=r(11),o=r(0),c=r(14),a=r.n(c),i=(r(388),r(389),r(25)),s=r(18),l=r(759),u=r(13),d=r(762),j=r(764),b=r(767),p=r(765),m=r(232),O=r.n(m),h=r(766),g=r(3),f=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,margin:"auto",color:"#FFC107",fontSize:30},customBadge:{backgroundColor:"#79D70F"}}}));var v=function(){var e=f(),t=Object(u.d)((function(e){return e.firebase.auth.isEmpty}));return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(d.a,{position:"static",style:{backgroundColor:"#346751"},children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",component:i.b,to:"/profile",children:Object(g.jsx)(h.a,{badgeContent:"",classes:{badge:t?"":e.customBadge},children:Object(g.jsx)(O.a,{style:{fontSize:35}})})}),Object(g.jsx)(b.a,{variant:"h6",className:e.title,children:"PersoList"}),Object(g.jsx)(p.a,{edge:"start",className:e.menuButton,"aria-label":"menu",component:i.b,to:"/profile",style:{backgroundColor:"#346751"},children:Object(g.jsx)(O.a,{style:{backgroundColor:"#346751",color:"#346751"}})})]})})})},x=r(768),y=(r(396),Object(l.a)((function(e){return{root:{flexGrow:1,width:"80%",margin:"auto",paddingTop:20,marginBottom:20},button:{color:"#ECDBBA",backgroundColor:"#346751",marginRight:2,marginTop:10},button2:{color:"#ECDBBA",backgroundColor:"#346751",marginLeft:2,marginTop:10}}})));var C=function(){var e=y();return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsxs)(b.a,{variant:"body2",component:"p",style:{fontSize:20,color:"#B4846C",fontFamily:"Teko"},children:["Avez-vous d\xe9ja r\xe9ussi \xe0 faire votre liste de courses sans oublier un produit? Ou pire encore, oubli\xe9 d'acheter un produit qui \xe9tait justement inscrit sur votre liste de courses? Si c'est le cas, vous connaissez s\xfbrement ce moment o\xf9 en rentrant des courses, arriv\xe9 devant votre porte, vous vous dites: \"Bordel de m***e!! J'ai oubli\xe9 la cr\xe8me fra\xeeche!\" Ou ce moment o\xf9 vous passer \xe0 la caisse et \xe0 ce moment pr\xe9cis vous vous rendez compte que vous avez oubli\xe9 quelque chose, que vous n'aurez pas le temps d'aller le chercher car toutes vos courses sont d\xe9j\xe0 sur le tapis, qu'une queue de dix m\xe8tres se situe derri\xe8re vous et que la caissi\xe8re au regard morne est d\xe9j\xe0 en train de passer vos articles au scanner...",Object(g.jsx)("br",{}),"D\xe9sormais ce temps est r\xe9volu. Et ce gr\xe2ce \xe0 PersoList qui vous permet de personnaliser votre propre liste de courses. Ici, vous cr\xe9ez une liste initiale qui est sauvegard\xe9 en permanence. Le jour de vos courses vous pouvez donc la checker afin de supprimer les articles que vous n'avez pas besoin pour ce jour pr\xe9cis, ou en ajouter dans le cas contraire. Ainsi, vous n'avez plus besoin de refaire une liste chaque semaine, mais plut\xf4t personnaliser celle d'origine.",Object(g.jsx)("br",{}),"Ne vous inquietez pas, c'est super simple!"]}),Object(g.jsx)(x.a,{color:"inherit",component:i.b,to:"/sign-up",className:e.button,children:"Inscription"}),Object(g.jsx)(x.a,{color:"inherit",component:i.b,to:"/login",className:e.button2,children:"Connexion"})]})},N=r(376),E=r(769),T=Object(l.a)((function(e){return{root:{flexGrow:1,width:"100%",height:30,background:"#30475e"},footer:{background:"#346751",width:"100%",height:"100%",paddingTop:10},text1:{marginLeft:10},text2:{marginRight:10}}}));var _=function(){var e=T();return Object(g.jsx)("div",{children:Object(g.jsx)(N.a,{className:e.footer,children:Object(g.jsxs)(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(g.jsx)(b.a,{component:"h6",className:e.text1,children:"persolist1@gmail.com"}),Object(g.jsx)(b.a,{component:"h6",className:e.text2,children:"\xa9 PersoList, 2021"})]})})})},w=Object(l.a)((function(e){return{button:{color:"#EAE2B6",backgroundColor:"#57837B",marginTop:40},button1:{color:"#EAE2B6",backgroundColor:"#5D8233",marginTop:40,marginBottom:20},button2:{color:"#ECDBBA",backgroundColor:"red",marginTop:10,marginBottom:20},title:{paddingTop:20,fontSize:22,marginBottom:20,color:"#ECD662",margin:"auto"},notconnect:{color:"#ECD662",paddingTop:20}}}));var B=function(e){var t=w(),r=Object(u.d)((function(e){return e.firebase.auth.isEmpty})),n=Object(u.c)();return Object(o.useEffect)((function(){!0===r&&setTimeout((function(){e.history.push("/")}),2e3)}),[r,e.history]),!0===r?Object(g.jsx)("p",{className:t.notconnect,children:"Vous n'\xeates pas connect\xe9. Nous vous redirigeons vers la page d'acceuil"}):Object(g.jsxs)(E.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(g.jsx)("h3",{className:t.title,children:"Hello!"}),Object(g.jsx)(x.a,{onClick:function(){n((function(e,t,r){(0,r.getFirebase)().auth().signOut().then((function(){e({type:"SIGN_OUT"})}))})),setTimeout((function(){e.history.push("/")}),1e3)},variant:"outlined",size:"small",className:t.button2,children:"D\xe9conexion"}),Object(g.jsx)(x.a,{component:i.b,to:"/edit-principal-list",variant:"outlined",className:t.button1,children:"Nouvelle course"})]})},I=r(37),S="ADD_TO_P_LIST",D="REMOVE_FROM_P_LIST",R="CHECK_P_PRODUCT",k="CLEAR_LIST",A="CHECK_S_PRODUCT",F="ADD_TO_S_LIST",z="REMOVE_FROM_S_LIST",L=r(770),P=r(771),M=r(773),G=r(66),q=r.n(G),U=Object(l.a)({div:{width:375,margin:"auto"},root:{width:350,height:90,marginTop:15,margin:"auto",backgroundColor:"#57837B"},title:{paddingTop:20,fontSize:22,color:"#ECDBBA",margin:"auto"},pos:{marginBottom:12},button:{margin:"auto",backgroundColor:"#7F8B52",marginTop:20}});var V=function(){var e,t=U(),r=Object(u.d)((function(e){return e})).list.items,n=Object(o.useState)(""),c=Object(I.a)(n,2),a=c[0],s=c[1],l=Object(o.useState)(""),d=Object(I.a)(l,2),j=d[0],m=d[1],O=Object(u.c)();return Object(g.jsxs)("div",{className:t.div,children:[Object(g.jsx)(b.a,{className:t.title,children:"Ajouter des articles juste pour cette course"}),Object(g.jsx)(L.a,{className:t.root,children:Object(g.jsxs)(P.a,{children:[Object(g.jsx)(M.a,{value:j,variant:"outlined",onChange:function(e){s(e.target.value),m(e.target.value)}}),Object(g.jsx)(x.a,{size:"small",onClick:function(e){e.preventDefault(),a&&(O({type:S,payload:a}),s(""),m(""))},children:"Ajouter"})]})}),r.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(g.jsx)(p.a,{color:"secondary","aria-label":"upload picture",component:"span",onClick:function(){return O((t=e.id,{type:D,payload:{id:t}}));var t},children:Object(g.jsx)(q.a,{})}),Object(g.jsx)("p",{style:{textDecoration:e.completed?"line-through":"",color:"#ECDBBA"},children:e.value},e.value)]})})})),Object(g.jsx)(x.a,{className:t.button,component:i.b,to:"/principal-list",children:(e=r,Array.isArray(e)&&0===e.length?"Non, pas la peine":"Ajouter pour cette course")})]})},K=r(84),H=r(772),W=Object(l.a)({root:{width:300,margin:"auto",paddingTop:20},title:{fontSize:20},pos:{marginTop:5},button:{margin:"auto",backgroundColor:"#7F8B52"}});var J=function(e){var t=W(),r=Object(u.c)(),c=Object(o.useState)({email:"",password:""}),a=Object(I.a)(c,2),i=a[0],s=a[1],l=function(e){s(Object(n.a)(Object(n.a)({},i),{},Object(K.a)({},e.target.id,e.target.value)))};return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(g.jsxs)(L.a,{style:{backgroundColor:"#A3A847"},children:[Object(g.jsxs)(P.a,{children:[Object(g.jsx)(b.a,{className:t.title,gutterBottom:!0,children:"Inscription"}),Object(g.jsx)(M.a,{id:"email",type:"e-mail",label:"E-mail",variant:"outlined",onChange:l,className:t.pos}),Object(g.jsx)(M.a,{id:"password",type:"password",label:"Password",variant:"outlined",onChange:l,className:t.pos})]}),Object(g.jsx)(H.a,{children:Object(g.jsx)(x.a,{onClick:function(t){var n;t.preventDefault(),r((n=i,function(e,t,r){(0,r.getFirebase)().auth().createUserWithEmailAndPassword(n.email,n.password).then((function(){e({type:"SIGN_UP"})})).catch((function(t){e({type:"SIGN_UP_ERR"},t)}))})),setTimeout((function(){e.history.push("/profile")}),2e3)},className:t.button,variant:"outlined",children:"S'inscrire"})})]})})})},X=Object(l.a)({root:{width:300,margin:"auto",paddingTop:20},title:{fontSize:20},pos:{marginTop:5},button:{margin:"auto",backgroundColor:"#7F8B52"}});var Q=function(e){var t=X(),r=Object(u.c)(),c=Object(o.useState)({email:"",password:""}),a=Object(I.a)(c,2),i=a[0],s=a[1],l=function(e){s(Object(n.a)(Object(n.a)({},i),{},Object(K.a)({},e.target.id,e.target.value)))};return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(g.jsxs)(L.a,{style:{backgroundColor:"#A3A847"},children:[Object(g.jsxs)(P.a,{children:[Object(g.jsx)(b.a,{className:t.title,gutterBottom:!0,children:"Connexion"}),Object(g.jsx)(M.a,{id:"email",type:"e-mail",label:"E-mail",variant:"outlined",onChange:l}),Object(g.jsx)(M.a,{id:"password",type:"password",label:"Password",variant:"outlined",onChange:l,className:t.pos})]}),Object(g.jsx)(H.a,{children:Object(g.jsx)(x.a,{size:"small",onClick:function(t){var n;t.preventDefault(),r((n=i,function(e,t,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"SIGN_IN"})})).catch((function(t){e({type:"SIGN_IN_ERR"},t)}))})),setTimeout((function(){e.history.push("/profile")}),2e3)},className:t.button,variant:"outlined",children:"Se connecter"})})]})})})},Y=r(45),Z=r(35),$=Object(l.a)({div:{width:375,margin:"auto"},root:{width:350,height:90,marginTop:15,margin:"auto",backgroundColor:"#A3A847"},title:{paddingTop:20,fontSize:22,color:"#ECDBBA",margin:"auto"},grid:{margin:"auto"}});var ee=function(){var e=$(),t=Object(o.useState)({product:"",checked:"false"}),r=Object(I.a)(t,2),c=r[0],a=r[1],i=Object(u.c)();return Object(g.jsx)("div",{className:e.div,children:Object(g.jsx)(L.a,{className:e.root,children:Object(g.jsx)(P.a,{children:Object(g.jsxs)(E.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.grid,children:[Object(g.jsx)(M.a,{id:"product",label:"",value:c.product,variant:"outlined",onChange:function(e){a({product:e.target.value,checked:"false"})}}),Object(g.jsx)(x.a,{onClick:function(e){var t;e.preventDefault(),i((t=c,function(e,r,o){var c=(0,o.getFirebase)().firestore(),a=r().firebase.auth.uid;c.collection("products").add(Object(n.a)(Object(n.a)({},t),{},{authorId:a,date:new Date})).then((function(){e({type:"ADD_TO_LIST",products:t})})).catch((function(t){e({type:"ADD_TO_LIST_ERR",err:t})}))})),a({product:"",checked:"false"})},children:"Ajouter"})]})})})})},te=Object(l.a)({div:{width:375,margin:"auto"},root:{width:350,margin:"auto",height:50}});var re=function(e){var t=e.product,r=te(),n=Object(u.c)();return Object(g.jsx)("div",{className:r.div,children:Object(g.jsx)("div",{children:Object(g.jsxs)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(g.jsx)(p.a,{color:"secondary","aria-label":"upload picture",component:"span",onClick:function(){return n((e=t,function(t,r,n){(0,n.getFirebase)().firestore().collection("products").doc(e.id).delete().then((function(){t({type:"REMOVE_FROM_LIST"})})).catch((function(e){t({type:"REMOVE_FROM_LIST_ERR",err:e})}))}));var e},children:Object(g.jsx)(q.a,{})}),Object(g.jsx)(b.a,{style:{textDecoration:t.checked?"":"line-through",color:"#ECDBBA"},children:t.product},t)]})})})},ne=Object(l.a)({div:{width:375,margin:"auto"},root:{minWidth:275},title:{paddingTop:20,fontSize:22,color:"#ECDBBA",margin:"auto"},pos:{marginBottom:12},button:{margin:"auto",marginTop:20,backgroundColor:"#7F8B52"}});var oe=Object(Y.compose)(Object(u.b)((function(e){return{list:e.firestore.ordered.products,uid:e.firebase.auth.uid}})),Object(Z.firestoreConnect)((function(e){return[{collection:"products",where:["authorId","==",e.uid],orderBy:["date","desc"]}]})))((function(e,t){var r=e.list,n=ne();return Object(g.jsxs)("div",{className:n.div,children:[Object(g.jsx)(b.a,{className:n.title,children:"Cr\xe9er / Modifier ma liste"}),Object(g.jsx)(ee,{}),r&&r.map((function(e){return Object(g.jsx)(re,{product:e},e.id)})),Object(g.jsx)(x.a,{className:n.button,component:i.b,to:"/grocery-list2",children:"Enregistrer"})]})})),ce=r(91),ae=Object(l.a)({div:{width:375,margin:"auto"},root:{minWidth:275},title:{paddingTop:20,fontSize:22,marginBottom:20,color:"#ECD662",margin:"auto"},pos:{marginBottom:12},button:{margin:"auto",backgroundColor:"#D9DD6B",color:"#8D2828",marginTop:20,marginBottom:20}});var ie=Object(Y.compose)(Object(u.b)((function(e){return{list:e.firestore.ordered.products,list2:e.list.items,uid:e.firebase.auth.uid}})),Object(Z.firestoreConnect)((function(e){return[{collection:"products",where:["authorId","==",e.uid],orderBy:["date","desc"]}]})))((function(e,t){var r=e.list,n=e.list2,c=ae(),a=Object(o.useState)(r),s=Object(I.a)(a,2),l=s[0],d=s[1],j=Object(o.useState)(n),m=Object(I.a)(j,2),O=m[0],h=m[1],f=Object(u.c)();return Object(g.jsxs)("div",{className:c.div,children:[Object(g.jsx)(b.a,{className:c.title,children:"Ma liste:"}),l&&l.map((function(e,t){return Object(g.jsx)("div",{children:Object(g.jsxs)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(g.jsx)(p.a,{color:"secondary","aria-label":"upload picture",component:"span",onClick:function(){return function(e){var t=Object(ce.a)(l);t.splice(e,1),d(t)}(t)},children:Object(g.jsx)(q.a,{})},t),Object(g.jsx)(b.a,{style:{color:"#ECDBBA"},children:e.product},e.product)]})})})),O&&O.map((function(e,t){return Object(g.jsxs)(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(g.jsx)(p.a,{color:"secondary","aria-label":"upload picture",component:"span",onClick:function(){return function(e){var t=Object(ce.a)(O);t.splice(e,1),h(t)}(t)},children:Object(g.jsx)(q.a,{})},t),Object(g.jsx)(b.a,{style:{color:"#ECDBBA"},children:e.value},e.value)]})})),Object(g.jsx)(x.a,{className:c.button,component:i.b,to:"/profile",onClick:function(){f({type:k})},children:"Course Termin\xe9e"})]})}));var se=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"page-container",children:[Object(g.jsx)("div",{className:"content-wrapper",children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(v,{}),Object(g.jsx)(s.a,{exact:!0,path:"/",component:C}),Object(g.jsx)(s.a,{path:"/sign-up",component:J}),Object(g.jsx)(s.a,{path:"/login",component:Q}),Object(g.jsx)(s.a,{path:"/profile",component:B}),Object(g.jsx)(s.a,{path:"/grocery-list2",component:V}),Object(g.jsx)(s.a,{path:"/edit-principal-list",component:oe}),Object(g.jsx)(s.a,{path:"/principal-list",component:ie})]})}),Object(g.jsx)(_,{})]})})},le=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,775)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))},ue=r(161);r(563),r(730);ue.a.initializeApp({apiKey:"AIzaSyC6IK05-zzrtXpJmii_EaMdAhtE9w0cEhs",authDomain:"persolist-8d424.firebaseapp.com",databaseURL:"https://persolist-8d424-default-rtdb.europe-west1.firebasedatabase.app",projectId:"persolist-8d424",storageBucket:"persolist-8d424.appspot.com",messagingSenderId:"390092852942",appId:"1:390092852942:web:11b5bff55d7b8fea2aca9f"}),ue.a.firestore();var de=ue.a,je=r(86),be={items:[],items2:[]},pe=Object(Y.combineReducers)({firebase:Z.firebaseReducer,firestore:je.firestoreReducer,list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(n.a)(Object(n.a)({},e),{},{items:[].concat(Object(ce.a)(e.items),[{value:t.payload,id:t.payload,completed:!1}])});case D:return Object(n.a)(Object(n.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload.id}))});case R:return Object(n.a)(Object(n.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(n.a)(Object(n.a)({},e),{},{completed:!e.completed}):e}))});case k:return Object(n.a)(Object(n.a)({},e),{},{items:[]});case F:return Object(n.a)(Object(n.a)({},e),{},{items2:[].concat(Object(ce.a)(e.items2),[{value2:t.payload,id:t.payload,completed:!1}])});case z:return Object(n.a)(Object(n.a)({},e),{},{items2:e.items2.filter((function(e){return e.id!==t.payload.id}))});case A:return Object(n.a)(Object(n.a)({},e),{},{items2:e.items2.map((function(e){return e.id===t.id?Object(n.a)(Object(n.a)({},e),{},{completed:!e.completed}):e}))});default:return e}},itemList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_LIST":return console.log("add",t.products),e;case"ADD_TO_LIST_ERR":return console.log("err"),e;case"REMOVE_FROM_LIST":return console.log("delete",t.products),e;case"REMOVE_FROM_LIST_ERR":return console.log("err"),e;case"CHECK_PRODUCT":return console.log("check"),e;case"CHECK_PRODUCT_ERR":return console.log("err"),e;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return console.log("signin"),e;case"SIGN_IN_ERR":return console.log("signin err"),e;case"SIGN_OUT":return console.log("signout"),e;case"SIGN_UP":return console.log("signup"),e;case"SIGN_UP_ERR":return console.log("err"),e;default:return e}}}),me=r(373),Oe=r(374),he=Object(Y.createStore)(pe,Object(Oe.composeWithDevTools)(Object(Y.applyMiddleware)(me.a.withExtraArgument({getFirebase:Z.getFirebase,getFirestore:je.getFirestore})))),ge={firebase:de,config:{},dispatch:he.dispatch,createFirestoreInstance:je.createFirestoreInstance};function fe(e){var t=e.children,r=Object(u.d)((function(e){return e.firebase.auth}));return Object(Z.isLoaded)(r)?t:Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)("div",{className:"spinner-grow text-primary",style:{width:"7rem",height:"7rem"},role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}a.a.render(Object(g.jsx)(u.a,{store:he,children:Object(g.jsx)(Z.ReactReduxFirebaseProvider,Object(n.a)(Object(n.a)({},ge),{},{children:Object(g.jsx)(fe,{children:Object(g.jsx)(se,{})})}))}),document.getElementById("root")),le()}},[[728,1,2]]]);
//# sourceMappingURL=main.0d5459f9.chunk.js.map