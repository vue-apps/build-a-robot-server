webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,r){t.exports=r("NHnr")},"8xDI":function(t,e){},Fuqr:function(t,e){},Ix4D:function(t,e){},JyIu:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("/5sW"),a={name:"app",computed:{cart:function(){return this.$store.state.robots.cart}}},s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",[o("nav",[o("ul",[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"},exact:""}},[o("img",{staticClass:"logo",attrs:{src:r("toLF")}}),t._v("\n            Build-a-Bot\n          ")])],1),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:{name:"Build"},exact:""}},[t._v("\n            Build\n          ")])],1),o("li",{staticClass:"nav-item cart"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[t._v("\n            Cart\n          ")]),o("div",{staticClass:"cart-items"},[t._v(t._s(t.cart.length))])],1)])])]),o("div",{staticClass:"container"},[o("aside",{staticClass:"aside"},[o("router-view",{attrs:{name:"sidebar"}})],1),o("main",[o("router-view")],1)])])},n=[],i=r("XyMi");function c(t){r("+VGo"),r("Orst")}var l=!1,u=c,d="data-v-04f24a83",p=null,f=Object(i["a"])(a,s,n,l,u,d,p),v=f.exports,m=(r("XtiL"),r("/ocq")),h=r("Biqn"),b=r.n(h),_=r("NYxO"),C={name:"HomePage",props:{msg:String},computed:b()({},Object(_["d"])({rootFoo:"foo",usersFoo:function(t){return t.users.foo}}),Object(_["d"])("robots",{robotsFoo:"foo"}),Object(_["c"])({rootGetterFoo:"foo"}),Object(_["c"])("robots",{robotsGetterFoo:"foo"}))},g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._v("\n  Root Foo: "+t._s(t.rootFoo)+" "),r("br"),t._v("\n  Users Foo: "+t._s(t.usersFoo)+" "),r("br"),t._v("\n  Robots Foo: "+t._s(t.robotsFoo)+" "),r("br"),t._v("\n  Root Getter Foo: "+t._s(t.rootGetterFoo)+" "),r("br"),t._v("\n  Robots Getter Foo: "+t._s(t.robotsGetterFoo)+" "),r("br"),t._m(0),r("div",{staticClass:"get-started"},[r("router-link",{attrs:{to:"/build"}},[t._v("Get started")]),t._v(" building your first robot!\n  ")],1)])},P=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{staticClass:"robot",attrs:{src:r("WOgR"),"aria-hidden":"true"}})])}];function y(t){r("JyIu")}var x=!1,w=y,S="data-v-65d3ea74",R=null,B=Object(i["a"])(C,g,P,x,w,S,R),k=B.exports,O=(r("n12u"),{created:function(){console.log("component created")}});r("gbyG"),r("Gh7F");function T(t,e){var r=t-1;return r<0?e-1:r}function $(t,e){var r=t+1;return r>e-1?0:r}var j={props:{parts:{type:Array,required:!0},position:{type:String,required:!0,validator:function(t){return["left","right","top","center","bottom"].includes(t)}}},mounted:function(){this.emitSelectedpart()},updated:function(){this.emitSelectedpart()},data:function(){return{selectedPartIndex:0,pinPadding:"10px"}},computed:{selectedPart:function(){return this.parts[this.selectedPartIndex]}},methods:{emitSelectedpart:function(){this.$emit("partSelected",this.selectedPart)},selectNextPart:function(){this.selectedPartIndex=$(this.selectedPartIndex,this.parts.length)},selectPreviousPart:function(){this.selectedPartIndex=T(this.selectedPartIndex,this.parts.length)}}},F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"part",class:t.position},[r("span",{directives:[{name:"pin",rawName:"v-pin",value:{bottom:t.pinPadding,right:t.pinPadding},expression:"{bottom: pinPadding, right: pinPadding}"},{name:"show",rawName:"v-show",value:t.selectedPart.onSale,expression:"selectedPart.onSale"}],staticClass:"sale",on:{click:function(e){t.pinPadding="30px"}}},[t._v("Sale!")]),r("router-link",{attrs:{to:{name:"Parts",params:{id:this.selectedPart.id,partType:this.selectedPart.type}}}},[r("img",{attrs:{src:t.selectedPart.src,title:"arm"}})]),r("button",{staticClass:"prev-selector",on:{click:function(e){t.selectPreviousPart()}}}),r("button",{staticClass:"next-selector",on:{click:function(e){t.selectNextPart()}}})],1)},I=[];function E(t){r("Wn5B")}var A=!1,G=E,H="data-v-4ca2d86e",N=null,q=Object(i["a"])(j,F,I,A,G,H,N),W=q.exports,D={name:"CollapsibleSection",data:function(){return{open:!0}}},Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header"},[t.open?r("span",{on:{click:function(e){t.open=!t.open}}},[t._v("▲ Collapse")]):t._e(),t.open?t._e():r("span",{on:{click:function(e){t.open=!t.open}}},[t._v("▼ Expand")])]),t.open?t._t("default",[r("div",[t._v("Default Content")])]):t._e()],2)},L=[];function z(t){r("oRqt")}var J=!1,M=z,Q="data-v-31e82e7e",U=null,V=Object(i["a"])(D,Y,L,J,M,Q,U),X=V.exports,K={name:"RobotBuilder",mixins:[O],components:{PartSelector:W,CollapsibleSection:X},created:function(){this.getParts()},computed:{availableParts:function(){return this.$store.state.robots.parts},headBorderStyle:function(){return{border:this.selectedRobot.head.onSale?"3px solid red":"3px solid #aaa"}},saleBorderClass:function(){return this.selectedRobot.head.onSale?"sale-border":""}},data:function(){return{addedToCart:!1,cart:[],selectedRobot:{head:{},leftArm:{},torso:{},rightArm:{},base:{}}}},methods:b()({},Object(_["b"])("robots",["getParts","addRobotToCart"]),{addToCart:function(){var t=this;this.addedToCart=!0;var e=this.selectedRobot,r=e.head.cost+e.leftArm.cost+e.torso.cost+e.rightArm.cost+e.base.cost;this.addRobotToCart(Object.assign({},e,{cost:r})).then(function(){return t.$router.push("/cart")})}}),beforeRouteLeave:function(t,e,r){if(this.addedToCart)r(!0);else{var o=confirm("You have not added your robot to your cart, are you sure you want to leave?");r(o)}}},Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.availableParts?r("div",{staticClass:"content"},[r("div",{staticClass:"top-row"},[r("PartSelector",{attrs:{parts:t.availableParts.heads,position:"top"},on:{partSelected:function(e){return t.selectedRobot.head=e}}})],1),r("div",{staticClass:"middle-row"},[r("PartSelector",{attrs:{parts:t.availableParts.arms,position:"left"},on:{partSelected:function(e){return t.selectedRobot.leftArm=e}}}),r("PartSelector",{attrs:{parts:t.availableParts.torsos,position:"center"},on:{partSelected:function(e){return t.selectedRobot.torso=e}}}),r("PartSelector",{attrs:{parts:t.availableParts.arms,position:"right"},on:{partSelected:function(e){return t.selectedRobot.rightArm=e}}})],1),r("div",{staticClass:"bottom-row"},[r("PartSelector",{attrs:{parts:t.availableParts.bases,position:"bottom"},on:{partSelected:function(e){return t.selectedRobot.base=e}}})],1),r("div",{staticClass:"preview"},[r("CollapsibleSection",[r("div",{staticClass:"preview-content "},[r("div",{staticClass:"top-row"},[r("img",{attrs:{src:t.selectedRobot.head.src}})]),r("div",{staticClass:"middle-row"},[r("img",{staticClass:"rotate-left",attrs:{src:t.selectedRobot.leftArm.src}}),r("img",{attrs:{src:t.selectedRobot.torso.src}}),r("img",{staticClass:"rotate-right",attrs:{src:t.selectedRobot.rightArm.src}})]),r("div",{staticClass:"bottom-row"},[r("img",{attrs:{src:t.selectedRobot.base.src}})])])]),r("button",{staticClass:"add-to-cart",on:{click:function(e){t.addToCart()}}},[t._v("Add to Cart")])],1)]):t._e()},tt=[];function et(t){r("Ix4D")}var rt=!1,ot=et,at="data-v-8380ff3e",st=null,nt=Object(i["a"])(K,Z,tt,rt,ot,at,st),it=nt.exports,ct=(r("WpTh"),{created:function(){this.$store.dispatch("robots/getParts")},computed:{parts:function(){return this.$store.state.robots.parts||{heads:[],arms:[],torsos:[],bases:[]}}}}),lt={name:"PartInfo",mixins:[ct],props:{partType:{type:String},id:{type:[Number,String],validator:function(t){return Number.isInteger(Number(t))}}},computed:{part:function(){var t=this.partType,e=this.id;return this.parts[t].find(function(t){return t.id===+e})}}},ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.part.title))]),r("div",[t._v("\n    "+t._s(t.part.description)+"\n  ")])])},dt=[],pt=!1,ft=null,vt=null,mt=null,ht=Object(i["a"])(lt,ut,dt,pt,ft,vt,mt),bt=ht.exports,_t={name:"BrowseParts"},Ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Browse Parts")]),r("ul",{staticClass:"menu"},[r("li",[r("router-link",{attrs:{to:{name:"BrowseHeads"}}},[t._v("Heads")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseArms"}}},[t._v("Arms")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseTorsos"}}},[t._v("Torsos")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseBases"}}},[t._v("Bases")])],1)]),r("router-view")],1)},gt=[];function Pt(t){r("QYGe")}var yt=!1,xt=Pt,wt="data-v-013d20c8",St=null,Rt=Object(i["a"])(_t,Ct,gt,yt,xt,wt,St),Bt=Rt.exports,kt={name:"RobotHeads",mixins:[ct]},Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Heads")]),t._v("\n  The head is where the brain of your robot will reside. Heads have\n  different capabilities so be sure to choose the one that fits your needs.\n  "),t._l(t.parts.heads,function(e,o){return r("div",{key:o},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},Tt=[],$t=!1,jt=null,Ft=null,It=null,Et=Object(i["a"])(kt,Ot,Tt,$t,jt,Ft,It),At=Et.exports,Gt={name:"RobotArms",mixins:[ct]},Ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Arms")]),t._v("\n  The arms are how your robot will interact with the world.\n  They come in a variety of shapes and functions.\n  "),t._l(t.parts.arms,function(e,o){return r("div",{key:o},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},Nt=[],qt=!1,Wt=null,Dt=null,Yt=null,Lt=Object(i["a"])(Gt,Ht,Nt,qt,Wt,Dt,Yt),zt=Lt.exports,Jt={name:"RobotTorsos",mixins:[ct]},Mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Torsos")]),t._v("\n  The torso is the central part of your robot that holds everything\n  together. Choosing the right torso will help ensure your robot\n  functions well with the parts you choose.\n  "),t._l(t.parts.torsos,function(e,o){return r("div",{key:o},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},Qt=[],Ut=!1,Vt=null,Xt=null,Kt=null,Zt=Object(i["a"])(Jt,Mt,Qt,Ut,Vt,Xt,Kt),te=Zt.exports,ee={name:"RobotBases",mixins:[ct]},re=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Bases")]),t._v("\n  The Base is critical to the mobility of your robot. Be\n  sure to choose a base that will work well with the terrain\n  where your robot needs to operate.\n  "),t._l(t.parts.bases,function(e,o){return r("div",{key:o},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},oe=[],ae=!1,se=null,ne=null,ie=null,ce=Object(i["a"])(ee,re,oe,ae,se,ne,ie),le=ce.exports,ue={name:"Standard"},de=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\n  Standard Sidebar\n")])},pe=[];function fe(t){r("Fuqr")}var ve=!1,me=fe,he="data-v-6787769f",be=null,_e=Object(i["a"])(ue,de,pe,ve,me,he,be),Ce=_e.exports,ge={name:"Standard"},Pe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\n  Build Sidebar\n")])},ye=[];function xe(t){r("zk37")}var we=!1,Se=xe,Re="data-v-41af857f",Be=null,ke=Object(i["a"])(ge,Pe,ye,we,Se,Re,Be),Oe=ke.exports,Te={name:"Cart",computed:{cart:function(){return this.$store.state.robots.cart},cartSaleItems:function(){return this.$store.getters["robots/cartSaleItems"]}}},$e=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Cart")]),r("table",[t._m(0),r("tbody",t._l(t.cart,function(e,o){return r("tr",{key:o},[r("td",{staticClass:"robot-title"},[t._v("\n           "+t._s(e.head.title)+"\n         ")]),r("td",{staticClass:"cost"},[t._v("\n           "+t._s(t._f("currency")(e.cost,"£"))+"\n         ")])])}))]),r("h2",{staticClass:"saleItems"},[t._v("You saved money on these robots:")]),r("table",[t._m(1),r("tbody",t._l(t.cartSaleItems,function(e,o){return r("tr",{key:o},[r("td",{staticClass:"robot-title"},[t._v("\n           "+t._s(e.head.title)+"\n         ")]),r("td",{staticClass:"cost"},[t._v("\n           "+t._s(t._f("currency")(e.cost,"£"))+"\n         ")])])}))])])},je=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"robot-title"},[t._v("\n           Robot\n         ")]),r("th",{staticClass:"cost"},[t._v("\n           Cost\n         ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"robot-title"},[t._v("\n           Robot\n         ")]),r("th",{staticClass:"cost"},[t._v("\n           Cost\n         ")])])])}];function Fe(t){r("8xDI")}var Ie=!1,Ee=Fe,Ae="data-v-8c8a4312",Ge=null,He=Object(i["a"])(Te,$e,je,Ie,Ee,Ae,Ge),Ne=He.exports;o["a"].use(m["a"]);var qe=new m["a"]({mode:"history",routes:[{path:"/",name:"Home",components:{default:k,sidebar:Ce}},{path:"/build",name:"Build",components:{default:it,sidebar:Oe}},{path:"/cart",name:"Cart",component:Ne},{path:"/parts/browse",name:"BrowseParts",component:Bt,children:[{name:"BrowseHeads",path:"heads",component:At},{name:"BrowseArms",path:"arms",component:zt},{name:"BrowseTorsos",path:"torsos",component:te},{name:"BrowseBases",path:"bases",component:le}]},{path:"/parts/:partType/:id",name:"Parts",component:bt,props:!0,beforeRouteEnter:function(t,e,r){var o=Number.isInteger(t.params.id);r(o)}}]}),We=r("rzQm"),De=r.n(We),Ye=r("mtWM"),Le=r.n(Ye),ze={namespaced:!0,state:{cart:[],parts:null,foo:"robots-foo"},getters:{cartSaleItems:function(t){return t.cart.filter(function(t){return t.head.onSale})},foo:function(t){return"robots-getter/".concat(t.foo)}},mutations:{addRobotToCart:function(t,e){t.cart.push(e)},updateParts:function(t,e){t.parts=e}},actions:{getParts:function(t){var e=t.commit;Le.a.get("/api/parts").then(function(t){return e("updateParts",t.data)}).catch(console.error)},addRobotToCart:function(t,e){var r=t.commit,o=t.state,a=De()(o.cart).concat([e]);return Le.a.post("/api/cart",a).then(function(){return r("addRobotToCart",e)})}}},Je={state:{user:null,foo:"users-foo"},mutations:{updateCurrentUser:function(t,e){t.user=e}},getters:{foo:function(t,e,r){return"users-getter/".concat(r.foo)}},actions:{signIn:function(t){var e=t.commit;Le.a.post("/api/sign-in").then(function(t){return e("updateCurrentUser",t.data)}).catch(console.error)}}};o["a"].use(_["a"]);var Me=new _["a"].Store({state:{foo:"root-foo"},getters:{},modules:{robots:ze,users:Je}}),Qe=function(t,e){t.style.position="absolute",Object.keys(e.value).forEach(function(r){t.style[r]=e.value[r]})},Ue=function(t,e){return"".concat(e).concat(t.toFixed(2))};o["a"].config.productionTip=!1,o["a"].directive("pin",Qe),o["a"].filter("currency",Ue),new o["a"]({render:function(t){return t(v)},router:qe,store:Me}).$mount("#app")},Orst:function(t,e){},QYGe:function(t,e){},WOgR:function(t,e,r){t.exports=r.p+"img/robot-home.90d11f5b.png"},Wn5B:function(t,e){},oRqt:function(t,e){},toLF:function(t,e,r){t.exports=r.p+"img/build-a-bot-logo.bdca6725.png"},zk37:function(t,e){}},[0]);
//# sourceMappingURL=app.0b6582b2.js.map