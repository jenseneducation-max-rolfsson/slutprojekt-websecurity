(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},s={app:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"09b9":function(t,e,r){},"09c2":function(t,e,r){},1771:function(t,e,r){var a={"./hoodie-ash.png":"af53","./hoodie-fire.png":"8e5d","./hoodie-ocean.png":"6158","./icon-bag-black.svg":"8bcf","./icon-bag-white.svg":"b91a","./icon-edit-white.svg":"b301","./icon-user-black.svg":"2f91","./sinus-logo.svg":"942c","./skate-hero-1.jpg":"fd81","./skateboard-generic.png":"d082","./skateboard-greta.png":"e2c6","./wheel-rocket.png":"7e9b","./wheel-spinner.png":"6992","./wheel-wave.png":"5b1c"};function s(t){var e=o(t);return r(e)}function o(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id="1771"},"17ae":function(t,e,r){"use strict";var a=r("8b7a"),s=r.n(a);s.a},"21bb":function(t,e,r){"use strict";var a=r("2dad"),s=r.n(a);s.a},"230c":function(t,e,r){},"2dad":function(t,e,r){},"2f91":function(t,e,r){t.exports=r.p+"img/icon-user-black.83b77489.svg"},"36c1":function(t,e,r){},"382c":function(t,e,r){"use strict";var a=r("09b9"),s=r.n(a);s.a},"3ea6":function(t,e,r){},"4a9a":function(t,e,r){"use strict";var a=r("dea9"),s=r.n(a);s.a},5338:function(t,e,r){"use strict";var a=r("230c"),s=r.n(a);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"drop"}},[t.overlay?r("Overlay"):t._e()],1),r("Topbar"),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"topbar"}},[a("img",{attrs:{src:r("942c"),alt:"logo"}}),a("nav",[a("router-link",{attrs:{to:"/"}},[t._v("Products")]),t.auth.loggedIn?a("router-link",{attrs:{to:"/me"}},[t._v("My Account")]):t._e(),t.auth.loggedIn?t._e():a("router-link",{attrs:{to:"/register"}},[t._v("Register")]),t.auth.loggedIn&&"admin"==t.auth.user.role?a("router-link",{attrs:{to:"/admin"}},[t._v("Admin Area")]):t._e()],1),a("login"),a("cart")],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"cart",on:{click:function(e){t.showModal=!t.showModal}}},[t.cart.length>0?a("div",{staticClass:"badge",class:{animate:t.animate}},[t._v(t._s(t.cart.length))]):t._e(),a("img",{attrs:{src:r("b91a"),alt:"cart"}}),t.showModal?a("section",{staticClass:"cart-modal"},[t.cart.length?t._e():a("p",[t._v("No items in cart.")]),t._l(t.cart,(function(e,s){return a("article",{key:s,staticClass:"cart-item",on:{click:function(e){return t.removeFromCart(s)}}},[a("figure",{staticClass:"thumbnail"},[a("img",{attrs:{src:r("1771")("./"+e.imgFile),alt:e.title}})]),a("section",{staticClass:"info"},[a("h1",[t._v(t._s(e.title))]),a("h2",[t._v(t._s(e.shortDesc))])]),a("p",{staticClass:"price"},[t._v(t._s(e.price)+" kr")])])})),t.cart.length?a("footer",{staticClass:"total"},[a("h1",[t._v("Total")]),a("h1",[t._v(t._s(t.total)+" kr")])]):t._e(),t.cart.length?a("a",{staticClass:"btn large",attrs:{href:"#"},on:{click:function(e){return t.$router.push("/pay")}}},[t._v("Take my Money!")]):t._e()],2):t._e()])},l=[],u=r("e67d"),d=r.n(u),m={name:"cart",data:function(){return{showModal:!1,animate:!1}},methods:{removeFromCart:function(t){this.$store.commit("removeFromCart",t)},close:function(){this.showModal=!1}},computed:{cart:function(){return this.$store.state.cart},total:function(){return this.$store.getters.total}},watch:{cart:function(){var t=this;this.animate=!0,setTimeout((function(){t.animate=!1}),400)}},directives:{ClickOutside:d.a}},p=m,v=(r("88b7"),r("2877")),h=Object(v["a"])(p,c,l,!1,null,null,null),f=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"login"},[a("div",{staticClass:"icon",on:{click:function(e){t.showModal=!t.showModal}}},[a("img",{attrs:{src:r("2f91"),alt:"login"}})]),t.showModal&&!t.auth.loggedIn?a("form",{staticClass:"login-modal"},[a("label",{attrs:{for:""}},[t._v(" Email "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],attrs:{type:"email",autocomplete:"off"},domProps:{value:t.credentials.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),a("label",{attrs:{for:""}},[t._v(" Password "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"password",autocomplete:"off"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),a("a",{staticClass:"btn large",attrs:{href:"#"},on:{click:t.login}},[t._v("Login")])]):t._e(),t.showModal&&t.auth.loggedIn?a("section",{staticClass:"login-modal"},[a("p",[t._v(" "+t._s(t.auth.user.name)+" ")]),a("a",{staticClass:"btn large",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])]):t._e()])},_=[],b={name:"Login",data:function(){return{showModal:!1,credentials:{email:"",password:""}}},computed:{auth:function(){return this.$store.state.auth}},methods:{login:function(){this.$store.dispatch("login",this.credentials),this.showModal=!1},logout:function(){this.$store.dispatch("logout")},close:function(){this.showModal=!1}},directives:{ClickOutside:d.a}},y=b,C=(r("5338"),Object(v["a"])(y,g,_,!1,null,null,null)),w=C.exports,k={name:"topbar",components:{cart:f,login:w},computed:{auth:function(){return this.$store.state.auth}}},P=k,$=(r("fb46"),Object(v["a"])(P,n,i,!1,null,null,null)),x=$.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"overlay"}},[a("aside",{staticClass:"background",on:{click:t.toggleOverlay}}),a("article",{staticClass:"single-product"},[a("section",{staticClass:"product-img"},[a("img",{attrs:{src:r("1771")("./"+t.product.imgFile),alt:t.product.title}})]),a("section",{staticClass:"product-info"},[a("h1",[t._v(t._s(t.product.title))]),a("h2",[t._v(t._s(t.product.shortDesc))]),a("p",[t._v(t._s(t.product.longDesc))]),a("h3",{staticClass:"price"},[t._v(t._s(t.product.price)+" sek")]),a("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Take my money")])])])])},N=[],D={name:"ProductView",computed:{product:function(){return this.$store.state.overlay.product}},methods:{toggleOverlay:function(){this.$store.commit("toggleOverlay")},addToCart:function(t){this.$store.commit("addToCart",t),this.$store.commit("toggleOverlay")}}},S=D,j=(r("b5ca"),Object(v["a"])(S,O,N,!1,null,null,null)),M=j.exports,A={name:"App",components:{Topbar:x,Overlay:M},computed:{overlay:function(){return this.$store.state.overlay.active}},beforeMount:function(){this.$store.dispatch("checkAuth")}},T=A,E=(r("5c0b"),Object(v["a"])(T,s,o,!1,null,null,null)),z=E.exports,R=r("8c4f"),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"grid-container",attrs:{id:"home"}},[t.loading?r("p",{staticClass:"col-6"},[t._v("Loading products...")]):t._e(),t._l(t.products,(function(t){return r("Product",{key:t.serial,attrs:{item:t}})}))],2)},F=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"product col-2"},[a("aside",{staticClass:"buy",on:{click:function(e){return t.addToCart(t.item)}}},[a("img",{attrs:{src:r("8bcf"),alt:"Buy"}})]),a("aside",{staticClass:"price"},[t._v(" "+t._s(t.item.price)+" "),a("span",{staticClass:"currency"},[t._v("Sek")])]),a("h1",[t._v(t._s(t.item.title))]),a("h2",[t._v(t._s(t.item.shortDesc))]),a("figure",{on:{click:function(e){return t.showOverlay(t.item)}}},[a("img",{attrs:{src:r("1771")("./"+t.item.imgFile),alt:t.item.title}})])])},H=[],U={name:"product",props:["item"],methods:{showOverlay:function(t){this.$store.dispatch("showSingleProduct",t)},addToCart:function(t){this.$store.commit("addToCart",t)}}},G=U,L=(r("7cd1"),Object(v["a"])(G,I,H,!1,null,null,null)),J=L.exports,Y={name:"home",components:{Product:J},computed:{products:function(){return this.$store.state.items},loading:function(){return this.$store.state.loading}},beforeMount:function(){this.$store.dispatch("readProducts")}},K=Y,B=(r("21bb"),Object(v["a"])(K,V,F,!1,null,null,null)),Z=B.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"grid-container wide",attrs:{id:"pay"}},[a("h1",{staticClass:"col-6"},[t._v("Pay")]),a("h2",{staticClass:"col-3"},[t._v("Your order")]),a("h2",{staticClass:"col-3"},[t._v("Your Details")]),a("section",{staticClass:"col-3 order"},[t._l(t.cart,(function(e,s){return a("article",{key:s,staticClass:"order-item"},[a("figure",{staticClass:"thumbnail"},[a("img",{attrs:{src:r("1771")("./"+e.imgFile),alt:e.title}})]),a("h1",[t._v(t._s(e.title))]),a("p",{staticClass:"price"},[t._v(t._s(e.price)+" kr")]),a("h2",[t._v(t._s(e.shortDesc))]),a("p",{staticClass:"serial"},[t._v(t._s(e.serial))])])})),a("footer",{staticClass:"total"},[a("h1",[t._v("Total")]),a("h1",[t._v(t._s(t.total)+" kr")])])],2),a("form",{staticClass:"col-3"},[a("label",{staticClass:"col-4",attrs:{for:"name"}},[t._v(" Your name "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.customer.name,expression:"order.customer.name"}],attrs:{type:"text",name:"name"},domProps:{value:t.order.customer.name},on:{input:function(e){e.target.composing||t.$set(t.order.customer,"name",e.target.value)}}})]),a("label",{staticClass:"col-4",attrs:{for:"street"}},[t._v(" Street "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.customer.street,expression:"order.customer.street"}],attrs:{type:"text"},domProps:{value:t.order.customer.street},on:{input:function(e){e.target.composing||t.$set(t.order.customer,"street",e.target.value)}}})]),a("label",{staticClass:"col-2",attrs:{for:"zip"}},[t._v(" ZIP code "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.customer.zip,expression:"order.customer.zip"}],attrs:{type:"text"},domProps:{value:t.order.customer.zip},on:{input:function(e){e.target.composing||t.$set(t.order.customer,"zip",e.target.value)}}})]),a("label",{staticClass:"col-2",attrs:{for:"city"}},[t._v(" City "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.customer.city,expression:"order.customer.city"}],attrs:{type:"text"},domProps:{value:t.order.customer.city},on:{input:function(e){e.target.composing||t.$set(t.order.customer,"city",e.target.value)}}})]),a("h2",{staticClass:"col-4"},[t._v("Payment ")]),a("label",{staticClass:"col-4",attrs:{for:"cardowner"}},[t._v(" Card Owner "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.payment.cardOwner,expression:"order.payment.cardOwner"}],attrs:{type:"text"},domProps:{value:t.order.payment.cardOwner},on:{input:function(e){e.target.composing||t.$set(t.order.payment,"cardOwner",e.target.value)}}})]),a("label",{staticClass:"col-4",attrs:{for:"cardnumber"}},[t._v(" Card Number "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.payment.cardNr,expression:"order.payment.cardNr"}],attrs:{type:"numbers"},domProps:{value:t.order.payment.cardNr},on:{input:function(e){e.target.composing||t.$set(t.order.payment,"cardNr",e.target.value)}}})]),a("label",{staticClass:"col-2",attrs:{for:"cardvalid"}},[t._v(" Valid until "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.payment.cardValidUntil,expression:"order.payment.cardValidUntil"}],attrs:{type:"text"},domProps:{value:t.order.payment.cardValidUntil},on:{input:function(e){e.target.composing||t.$set(t.order.payment,"cardValidUntil",e.target.value)}}})]),a("label",{staticClass:"col-2",attrs:{for:"cardcc"}},[t._v(" CVV "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.order.payment.cardCVV,expression:"order.payment.cardCVV"}],attrs:{type:"numbers"},domProps:{value:t.order.payment.cardCVV},on:{input:function(e){e.target.composing||t.$set(t.order.payment,"cardCVV",e.target.value)}}})]),a("footer",{staticClass:"col-4"},[a("a",{staticClass:"btn",attrs:{href:"#"},on:{click:t.submitOrder}},[t._v("Submit Order")])])])])},Q=[],W=(r("b0c0"),{name:"Pay",data:function(){return{order:{customer:{name:"",street:"",zip:"",city:""},payment:{cardOwner:"",cardNr:"",cardValidUntil:"",cardCVV:""},items:this.cart}}},methods:{submitOrder:function(){this.order.items=this.cart,this.$store.dispatch("submitOrder",this.order)}},computed:{cart:function(){return this.$store.state.cart},total:function(){return this.$store.getters.total},user:function(){return this.$store.state.auth.user}},mounted:function(){console.log(this.user),"anonymous"!=this.user.role&&(this.order.customer.name=this.user.name,this.order.customer.street=this.user.adress.street,this.order.customer.zip=this.user.adress.zip,this.order.customer.city=this.user.adress.city)}}),X=W,tt=(r("17ae"),Object(v["a"])(X,q,Q,!1,null,null,null)),et=tt.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"grid-container",attrs:{id:"register"}},[t._m(0),t._m(1),r("section",{staticClass:"col-3"},[r("h1",[t._v("Register")]),r("form",[r("label",{staticClass:"col-4"},[t._v(" Name "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("label",{staticClass:"col-4"},[t._v(" Email "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("label",{staticClass:"col-4"},[t._v(" Password "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),r("label",{staticClass:"col-4"},[t._v(" Repeat Password "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.repeatPassword,expression:"user.repeatPassword"}],attrs:{type:"password"},domProps:{value:t.user.repeatPassword},on:{input:function(e){e.target.composing||t.$set(t.user,"repeatPassword",e.target.value)}}})]),r("h2",[t._v("Adress")]),r("label",{staticClass:"col-4"},[t._v(" Street "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.adress.street,expression:"user.adress.street"}],attrs:{type:"text"},domProps:{value:t.user.adress.street},on:{input:function(e){e.target.composing||t.$set(t.user.adress,"street",e.target.value)}}})]),r("label",{staticClass:"col-2"},[t._v(" Zip Code "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.adress.zip,expression:"user.adress.zip"}],attrs:{type:"text"},domProps:{value:t.user.adress.zip},on:{input:function(e){e.target.composing||t.$set(t.user.adress,"zip",e.target.value)}}})]),r("label",{staticClass:"col-2"},[t._v(" City "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.adress.city,expression:"user.adress.city"}],attrs:{type:"text"},domProps:{value:t.user.adress.city},on:{input:function(e){e.target.composing||t.$set(t.user.adress,"city",e.target.value)}}})]),r("footer",{staticClass:"col-4"},[r("a",{staticClass:"btn",attrs:{href:"#"},on:{click:t.register}},[t._v("Sign me up!")])])])])])},at=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero col-6"},[r("h1",[t._v("Join the rolling family!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"col-3"},[r("h1",[t._v("Cowabunga")]),r("p",{staticClass:"ingress"},[t._v("Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose Tracker. Gnar bucket Skateboard Shuffle casper slide 180 boneless layback hardware nosebone.")]),r("p",[t._v("Vans Calfornia Daze rock and roll chicken wing pogo transfer. Powerslide pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghosts ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn ledge. 50-50 Kevin Harris boardslide street Mark Gonzales. Air pool hang-up fakie out Randy Ruiz. Steps nose bump powerslide axle set. Future Primitive Japan air snake steps camel back. Face plant crailtap rail slide half-cab. Rail regular footed flypaper drop in. Casper slide speed wobbles indy grab ollie hole. ")])])}],st=(r("d3b7"),r("96cf"),{name:"Register",data:function(){return{user:{email:"",password:"",repeatPassword:"",name:"",adress:{street:"",zip:"",city:""}}}},methods:{register:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("register",this.user));case 3:return t.next=5,regeneratorRuntime.awrap(this.$router.push("/"));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),null,this,[[0,7]])}}}),ot=st,nt=(r("a894"),Object(v["a"])(ot,rt,at,!1,null,null,null)),it=nt.exports,ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"grid-container",attrs:{id:"doc"}},[r("h1",{staticClass:"col-6"},[t._v("Documentation")]),r("article",{staticClass:"col-3"},[r("h2",[t._v("Vad är detta?")]),r("p",[t._v("SINUS Skate webshop nyttjar ett API med följande resurser, metoder och datamodeller.")]),r("h2",[t._v("Datamodeller")]),r("p",[t._v("De tre objekt som API:et ska kunna hantera är följande:")]),r("h3",[t._v("Product")]),r("vue-code-highlight",[t._v(" "+t._s(t.code.product)+" ")]),r("h3",[t._v("Order")]),r("vue-code-highlight",[t._v(" "+t._s(t.code.order)+" ")]),r("h3",[t._v("User")]),r("vue-code-highlight",[t._v(" "+t._s(t.code.user)+" ")])],1),t._m(0)])},lt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"col-3"},[r("h2",[t._v("API dokumentation")]),r("h3",[t._v("Authentication")]),r("table",{attrs:{cellspacing:"0"}},[r("thead",[r("tr",[r("th",[t._v("Resurs")]),r("th",[t._v("Metod")]),r("th",[t._v("Detaljer")])])]),r("tbody",[r("tr",[r("td",[t._v("/auth")]),r("td",[r("span",{staticClass:"method"},[t._v("POST")])]),r("td",[t._v("Authentiserar user med "),r("em",[t._v("email")]),t._v(" & "),r("em",[t._v("password")]),t._v(". Returnerar en "),r("em",[t._v("token")]),t._v(" som används vid varje anrop till API.")])])])]),r("h3",[t._v("Products")]),r("table",{attrs:{cellspacing:"0"}},[r("thead",[r("tr",[r("th",[t._v("Resurs")]),r("th",[t._v("Metod")]),r("th",[t._v("Detaljer")])])]),r("tbody",[r("tr",[r("td",{staticClass:"endpoint"},[t._v("/products")]),r("td",[r("span",{staticClass:"method"},[t._v("GET")])]),r("td",[t._v("Returnerar en lista på samtliga produkter.")])]),r("tr",[r("td",{staticClass:"endpoint"},[t._v("/products/:id")]),r("td",[r("span",{staticClass:"method"},[t._v("GET")])]),r("td",[t._v("Returnerar en enstaka produkt.")])]),r("tr",[r("td"),r("td",[r("span",{staticClass:"method"},[t._v("POST")])]),r("td",[t._v("Skapar en ny produkt, se produkt-modell.")])]),r("tr",[r("td",[t._v("/products/:id")]),r("td",[r("span",{staticClass:"method"},[t._v("PATCH")])]),r("td",[t._v("Uppdaterar produkt, se produkt-modell.")])])])]),r("h3",[t._v("Orders")]),r("table",{attrs:{cellspacing:"0"}},[r("thead",[r("tr",[r("th",[t._v("Resurs")]),r("th",[t._v("Metod")]),r("th",[t._v("Detaljer")])])]),r("tbody",[r("tr",[r("td",{staticClass:"endpoint"},[t._v("/orders")]),r("td",[r("span",{staticClass:"method"},[t._v("GET")])]),r("td",[t._v("Returnerar en lista på samtliga ordrar.")])]),r("tr",[r("td"),r("td",[r("span",{staticClass:"method"},[t._v("POST")])]),r("td",[t._v("Skapar en ny order, se order-modell.")])])])]),r("h3",[t._v("Users")]),r("table",{attrs:{cellspacing:"0"}},[r("thead",[r("tr",[r("th",[t._v("Resurs")]),r("th",[t._v("Metod")]),r("th",[t._v("Detaljer")])])]),r("tbody",[r("tr",[r("td",{staticClass:"endpoint"},[t._v("/users")]),r("td",[r("span",{staticClass:"method"},[t._v("GET")])]),r("td",[t._v("Returnerar en lista på samtliga användare. Endast tillgänglig för admins.")])]),r("tr",[r("td"),r("td",[r("span",{staticClass:"method"},[t._v("POST")])]),r("td",[t._v("Skapar en ny användare, se user-modell. Default-roll är "),r("em",[t._v("customer")]),t._v(".")])])])])])}],ut=r("d36c"),dt=(r("4357"),{name:"Documentation",data:function(){return{code:{user:"{\n    uuid: '6b521d3f-3d15...' // add server side\n    email: 'johan.kivi@zocom.se',\n    password: [encrypted string],\n    name: 'Johan Kivi',\n    role: 'admin', // customer\n\n    adress: {\n        street: 'Tokitokvägen 3',\n        zip: '123 45',\n        city: 'Tokberga'\n    },\n    payment: {\n        cardOwner: 'Johan Kivi',\n        cardNumber: '1234 5678 9101 1121',\n        validUntil: '10 / 23',\n        cvv: '123'\n    },\n    orderHistory: [ { order }, ... ]\n}",product:"{\n    _id: '39y7gbbZk1u4ABnv',\n    serial : '173891297371277',\n    title: 'Gretas Fury',\n    price: 999,\n    category: 'board',\n    shortDesc: 'Unisex',\n    longDesc: 'Skate ipsum dolor sit amet...',\n    imgFile: 'skateboard-greta.png'\n}",order:"{\n    orderNr: 123,\n    timeStamp: Date.now(), // add server side\n    status: 'inProcess', // done\n    items: [ product ],\n    orderValue: 999\n}"}}},components:{VueCodeHighlight:ut["a"]}}),mt=dt,pt=(r("7bb6"),Object(v["a"])(mt,ct,lt,!1,null,null,null)),vt=pt.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"grid-container",attrs:{id:"me"}},[r("h1",{staticClass:"col-6"},[t._v(t._s(t.me.name))]),r("article",{staticClass:"col-3"},[r("h3",[t._v(t._s(t.me.email))]),r("p",[t._v("Role: "+t._s(t.me.role))])]),r("article",{staticClass:"col-3"},[r("h3",[t._v(t._s(t.me.adress.street))]),r("p",[t._v(t._s(t.me.adress.zip)+", "+t._s(t.me.adress.city))])]),r("h2",{staticClass:"col-6"},[t._v("Order History")]),r("section",{staticClass:"order-history col-6"},t._l(t.orderHistory,(function(e){return r("article",{key:e.orderNumber,staticClass:"order-item"},[r("p",[t._v(t._s(e._id))]),r("p",[t._v("Items count: "+t._s(e.items.length))]),r("p",[t._v(t._s(e.orderValue))])])})),0)])},ft=[],gt={name:"Me",computed:{me:function(){return this.$store.state.auth.user},orderHistory:function(){return this.$store.state.orderHistory}},beforeMount:function(){this.$store.dispatch("readOrders")}},_t=gt,bt=(r("a459"),Object(v["a"])(_t,ht,ft,!1,null,null,null)),yt=bt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"grid-container",attrs:{id:"admin"}},[a("transition",{attrs:{name:"drop"}},[t.showModal?a("ProductForm",{attrs:{product:t.selectedProduct}}):t._e()],1),a("header",{staticClass:"col-6"},[a("a",{staticClass:"btn outline",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addProduct(e)}}},[t._v("+ Add new Item")])]),t._l(t.products,(function(e,s){return a("article",{key:s,staticClass:"product-row col-6"},[a("figure",[a("img",{attrs:{src:r("1771")("./"+e.imgFile),alt:e.title}})]),a("section",{staticClass:"info"},[a("h1",[t._v(t._s(e.title))]),a("h2",[t._v(t._s(e.shortDesc))])]),a("aside",{staticClass:"edit",on:{click:function(e){return t.editProduct(s)}}},[t._m(0,!0)])])}))],2)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:r("b301"),alt:"edit"}})])}],kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"overlay"}},[r("aside",{staticClass:"background",on:{click:t.toggleOverlay}}),r("form",[r("h1",{staticClass:"col-4 row-1"},[t.$parent.edit?r("span",[t._v("Edit")]):r("span",[t._v("Add")]),t._v(" Product")]),r("label",{staticClass:"col-4",attrs:{for:"image"}},[t._v(" Product image URL "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.activeProduct.imgFile,expression:"activeProduct.imgFile"}],attrs:{type:"text"},domProps:{value:t.activeProduct.imgFile},on:{input:function(e){e.target.composing||t.$set(t.activeProduct,"imgFile",e.target.value)}}})]),r("label",{staticClass:"col-4",attrs:{for:"product-name"}},[t._v(" Product Name "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.activeProduct.title,expression:"activeProduct.title"}],attrs:{type:"text"},domProps:{value:t.activeProduct.title},on:{input:function(e){e.target.composing||t.$set(t.activeProduct,"title",e.target.value)}}})]),r("label",{staticClass:"col-1",attrs:{for:""}},[t._v(" Serial Number "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.activeProduct.serial,expression:"activeProduct.serial"}],attrs:{type:"text"},domProps:{value:t.activeProduct.serial},on:{input:function(e){e.target.composing||t.$set(t.activeProduct,"serial",e.target.value)}}})]),r("label",{staticClass:"col-1",attrs:{for:""}},[t._v(" Price "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.activeProduct.price,expression:"activeProduct.price"}],attrs:{type:"number"},domProps:{value:t.activeProduct.price},on:{input:function(e){e.target.composing||t.$set(t.activeProduct,"price",e.target.value)}}})]),r("label",{staticClass:"col-2",attrs:{for:""}},[t._v(" Short Description "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.activeProduct.shortDesc,expression:"activeProduct.shortDesc"}],attrs:{type:"text"},domProps:{value:t.activeProduct.shortDesc},on:{input:function(e){e.target.composing||t.$set(t.activeProduct,"shortDesc",e.target.value)}}})]),r("label",{staticClass:"col-4 row-2",attrs:{for:""}},[t._v(" Long Description "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeProduct.longDesc,expression:"activeProduct.longDesc"}],attrs:{rows:"3"},domProps:{value:t.activeProduct.longDesc},on:{input:function(e){e.target.composing||t.$set(t.activeProduct,"longDesc",e.target.value)}}})]),r("footer",{staticClass:"col-4"},[r("a",{staticClass:"btn delete",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.remove(e)}}},[t._v("Delete")]),r("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Submit")])])])])},Pt=[],$t={name:"ProductForm",props:["product"],data:function(){return{activeProduct:Object}},methods:{submit:function(){this.$parent.edit?this.$store.dispatch("updateProduct",this.product):this.$store.dispatch("createProduct",this.product),this.toggleOverlay()},remove:function(){this.$parent.edit&&this.$store.dispatch("removeProduct",this.product),this.toggleOverlay()},toggleOverlay:function(){this.$parent.showModal=!1,this.$parent.edit=!1}},beforeMount:function(){this.activeProduct=Object.assign(this.product)}},xt=$t,Ot=(r("fbb8"),Object(v["a"])(xt,kt,Pt,!1,null,null,null)),Nt=Ot.exports,Dt={name:"Admin",components:{ProductForm:Nt},data:function(){return{showModal:!1,edit:!1,selectedProduct:Object}},methods:{editProduct:function(t){this.selectedProduct=this.products[t],this.edit=!0,this.showModal=!0},addProduct:function(){this.selectedProduct={imgFile:"skateboard-generic.png",title:"",serial:Date.now(),price:0,shortDesc:"",longDesc:""},this.showModal=!0}},computed:{products:function(){return this.$store.state.items},auth:function(){return this.$store.state.auth.user}},mounted:function(){0==this.$store.state.items.length&&this.$store.dispatch("readProducts")}},St=Dt,jt=(r("4a9a"),Object(v["a"])(St,Ct,wt,!1,null,null,null)),Mt=jt.exports,At=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"grid-container",attrs:{id:"thankyou"}},[t._m(0),r("section",{staticClass:"col-6"},[r("h1",[t._v("Your order is beeing processed, go out and skate while you wait")]),r("p",[t._v("Vans Calfornia Daze rock and roll chicken wing pogo transfer. Powerslide pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghosts ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn ledge. 50-50 Kevin Harris boardslide street Mark Gonzales. Air pool hang-up fakie out Randy Ruiz. Steps nose bump powerslide axle set. Future Primitive Japan air snake steps camel back. Face plant crailtap rail slide half-cab. Rail regular footed flypaper drop in. Casper slide speed wobbles indy grab ollie hole. ")]),r("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Coolio!")])])])},Tt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero col-6"},[r("h1",[t._v("Thank You!")])])}],Et={name:"Thankyou",data:function(){return{}}},zt=Et,Rt=(r("382c"),Object(v["a"])(zt,At,Tt,!1,null,null,null)),Vt=Rt.exports;a["a"].use(R["a"]);var Ft=[{path:"/",name:"Home",component:Z},{path:"/pay",name:"Pay",component:et},{path:"/thankyou",name:"thankyou",component:Vt},{path:"/register",name:"Register",component:it},{path:"/documentation",name:"Documentation",component:vt},{path:"/me",name:"Me",component:yt},{path:"/admin",name:"Admin",component:Mt}],It=new R["a"]({historyMode:!0,routes:Ft}),Ht=It,Ut=(r("4de4"),r("d81d"),r("4e82"),r("a434"),r("159b"),r("2f62")),Gt=r("bc3a"),Lt=r.n(Gt),Jt=Lt.a.create({baseURL:"/api"});Jt.setAuthHeader=function(t){this.defaults.headers.common["Authorization"]="Bearer ".concat(t)},Jt.clearAuthHeader=function(){delete this.defaults.headers.common["Authorization"]};var Yt=Jt;a["a"].use(Ut["a"]);var Kt=new Ut["a"].Store({state:{loading:!1,auth:{loggedIn:!1,error:!1,token:null,user:{role:"anonymous"}},items:[],overlay:{active:!1,product:null},orderHistory:[],cart:[]},mutations:{toggleOverlay:function(t){t.overlay.active=!t.overlay.active},setActiveProduct:function(t,e){t.overlay.product=e},addToCart:function(t,e){t.cart.push(e)},removeFromCart:function(t,e){t.cart.splice(e,1)},setProducts:function(t,e){t.items=e},addProduct:function(t,e){t.items.push(e),t.items=t.items.sort((function(t,e){return t.title>e.title}))},updateProduct:function(t,e){t.items=t.items.map((function(t){return t._id==e._id?e:t}))},removeProduct:function(t,e){t.items=t.items.filter((function(t){return t._id!=e}))},setOrderHistory:function(t,e){t.orderHistory=e},auth:function(t,e){t.auth.user=e.user,t.auth.loggedIn=!0,Yt.setAuthHeader(e.token);var r=e.user,a=e.token;sessionStorage.setItem("sinus",JSON.stringify({user:r,token:a}))},login:function(t){t.auth.loggedIn=!0,t.auth.error=!1},failLogin:function(t){t.auth.login=!1,t.auth.error=!0,Yt.clearAuthHeader()},logout:function(t){t.auth.loggedIn=!1,t.auth.error=!1,Yt.clearAuthHeader(),sessionStorage.removeItem("sinus")}},actions:{checkAuth:function(t){var e=t.commit;if(sessionStorage.getItem("sinus")){var r=JSON.parse(sessionStorage.getItem("sinus"));e("auth",r),console.log("User Authorized")}else e("logout"),console.log("User Not Authorized")},showSingleProduct:function(t,e){var r=t.commit;r("toggleOverlay"),r("setActiveProduct",e)},submitOrder:function(t,e){e.items=e.items.map((function(t){return t._id})),Yt.post("/orders",e).then((function(t){console.log(t),Ht.push("/thankyou")})).catch(console.log)},createProduct:function(t,e){var r=t.commit;Yt.post("/products",e).then((function(t){console.log(t),r("addProduct",t.data.product)})).catch(console.log)},readProducts:function(t){var e=t.commit,r=t.state;r.loading=!0,Yt.get("/products").then((function(t){console.log(t),r.loading=!1,e("setProducts",t.data)})).catch(console.log)},updateProduct:function(t,e){var r=t.commit;Yt.patch("/products/".concat(e._id),e).then((function(t){console.log(t),r("updateProduct",e)})).catch(console.log)},removeProduct:function(t,e){var r=t.commit;Yt.delete("/products/".concat(e._id)).then((function(t){console.log(t),r("removeProduct",e._id)})).catch(console.log)},register:function(t,e){var r=t.commit;Yt.post("/register",e).then((function(t){console.log(t),r("auth",t.data),r("login")})).catch(console.log)},login:function(t,e){var r=t.commit;Yt.post("/auth",e).then((function(t){console.log(t),r("auth",t.data)})).catch((function(t){console.log(t),r("failLogin")}))},logout:function(t){var e=t.commit;e("logout")},readOrders:function(t){var e=t.commit;Yt.get("/orders").then((function(t){console.log(t),e("setOrderHistory",t.data)})).catch(console.log)}},getters:{total:function(t){var e=0;return t.cart.forEach((function(t){e+=t.price})),e}}});a["a"].config.productionTip=!1,new a["a"]({router:Ht,store:Kt,render:function(t){return t(z)}}).$mount("#app")},"5b1c":function(t,e,r){t.exports=r.p+"img/wheel-wave.7ae85ee6.png"},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),s=r.n(a);s.a},6158:function(t,e,r){t.exports=r.p+"img/hoodie-ocean.68b3445e.png"},6992:function(t,e,r){t.exports=r.p+"img/wheel-spinner.4c4b7208.png"},"7bb6":function(t,e,r){"use strict";var a=r("ab49"),s=r.n(a);s.a},"7cd1":function(t,e,r){"use strict";var a=r("3ea6"),s=r.n(a);s.a},"7e9b":function(t,e,r){t.exports=r.p+"img/wheel-rocket.a369221f.png"},"88b7":function(t,e,r){"use strict";var a=r("8f4f"),s=r.n(a);s.a},8968:function(t,e,r){},"8b7a":function(t,e,r){},"8bcf":function(t,e,r){t.exports=r.p+"img/icon-bag-black.102f746b.svg"},"8e5d":function(t,e,r){t.exports=r.p+"img/hoodie-fire.b961747e.png"},"8f4f":function(t,e,r){},"942c":function(t,e,r){t.exports=r.p+"img/sinus-logo.c1250acc.svg"},"9c0c":function(t,e,r){},a459:function(t,e,r){"use strict";var a=r("36c1"),s=r.n(a);s.a},a894:function(t,e,r){"use strict";var a=r("db38"),s=r.n(a);s.a},ab49:function(t,e,r){},af53:function(t,e,r){t.exports=r.p+"img/hoodie-ash.9845e671.png"},b301:function(t,e,r){t.exports=r.p+"img/icon-edit-white.c7326536.svg"},b5ca:function(t,e,r){"use strict";var a=r("09c2"),s=r.n(a);s.a},b91a:function(t,e,r){t.exports=r.p+"img/icon-bag-white.84c0bcba.svg"},bf77:function(t,e,r){},d082:function(t,e,r){t.exports=r.p+"img/skateboard-generic.10eb1082.png"},db38:function(t,e,r){},dea9:function(t,e,r){},e2c6:function(t,e,r){t.exports=r.p+"img/skateboard-greta.4821b55a.png"},fb46:function(t,e,r){"use strict";var a=r("bf77"),s=r.n(a);s.a},fbb8:function(t,e,r){"use strict";var a=r("8968"),s=r.n(a);s.a},fd81:function(t,e,r){t.exports=r.p+"img/skate-hero-1.62da4442.jpg"}});
//# sourceMappingURL=app.307e7823.js.map