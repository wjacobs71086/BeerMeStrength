(this.webpackJsonpbeer_client=this.webpackJsonpbeer_client||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(28),r=n.n(i),s=(n(45),n(46),n(3)),l=n(16),o=(n(47),n(21));var j=function(e){var t=e.x,n=void 0===t?0:t,c=e.y,i=void 0===c?0:c,r=e.rotation,l=void 0===r?0:r,j=e.scale,b=void 0===j?1:j,u=e.timing,p=void 0===u?150:u,d=e.springConfig,h=void 0===d?{tension:300,friction:10}:d,O=a.a.useState(!1),x=Object(s.a)(O,2),m=x[0],v=x[1],f=Object(o.useSpring)({transform:m?"translate(".concat(n,"px, ").concat(i,"px)\n         rotate(").concat(l,"deg)\n         scale(").concat(b,")"):"translate(0px, 0px)\n         rotate(0deg)\n         scale(1)",config:h});return a.a.useEffect((function(){if(m){var e=window.setTimeout((function(){v(!1)}),p);return function(){window.clearTimeout(e)}}}),[m]),[f,a.a.useCallback((function(){v(!0)}),[])]},b=n(1),u=function(e){var t=j({scale:1.02}),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)(o.animated.div,{className:"beerItemContainer",style:c,onMouseEnter:a,children:[Object(b.jsx)(l.b,{to:"/beer/".concat(e.identifier),className:"beerItemText name",children:Object(b.jsx)("h5",{children:e.name})}),e.by?Object(b.jsxs)("p",{children:["By: ",e.by]}):null,Object(b.jsxs)("p",{className:"beerItemText",children:[e.rating,"/5 - ",Object(b.jsx)("span",{className:"priceHighlight",children:e.price})]})]})},p=(n(58),function(e){var t=e.filter,n=e.beers;return Object(b.jsxs)("div",{className:"beerListContainer",children:[""===t.term&&""==t.price&""==t.rating?Object(b.jsx)("h3",{className:"beerTextTitle",children:"Favorite Beers"}):null,function(e){var t=n.beerList;return"fav"!==e&&e.term.length>0&&(t=n.beerList.filter((function(t){return t.name.toLowerCase().includes(e.term)||t.by.toLowerCase().includes(e.term)}))),e.rating>1&&(t=t.filter((function(t){return t.rating>=e.rating}))),""===e.term&&(t=t.filter((function(e){return e.fav}))),""!=e.price&&e.price&&(t=t.filter((function(t){return t.price.length>=e.price.length}))),Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(u,{identifier:e.id,name:e.name,rating:e.rating,price:e.price},e.id)}))})}(t)]})}),d={beerList:[{id:1,name:"Beak Breaker",by:"Pelican",type:"IPA",abv:9,rating:4,price:"$$",fav:!0},{id:2,name:"Pabst Blue Ribbon",by:"Pabst",type:"Pilsner",abv:4.5,rating:2,price:"$",fav:!0},{id:3,name:"Pliney the Eldest",by:"Pliney",type:"IPA",abv:7.5,rating:5,price:"$$$$$",fav:!0},{id:4,name:"Shiner Bock",by:"Shiner",type:"Bock",abv:5.5,rating:4,price:"$$",fav:!0},{id:5,name:"Batsquatch",by:"Rogue",type:"Hazy IPA",abv:6.7,rating:4,price:"$$",fav:!0}]},h=function(e){return Object(b.jsx)("div",{className:"beerListContainer",children:e.beers.beerList?e.beers.beerList.map((function(e){return Object(b.jsx)(u,{identifier:e.id,name:e.name,rating:e.rating,price:e.price},e.id)})):null})},O=n(8),x=(n(59),function(e){var t=Object(c.useState)({term:"",rating:"",price:""}),n=Object(s.a)(t,2),a=n[0],i=n[1],r=j({scale:1,rotation:15,x:0,y:0}),u=Object(s.a)(r,2),p=u[0],d=u[1];return Object(c.useEffect)((function(){e.handleSearch(a)}),[a]),Object(b.jsxs)("div",{className:"searchContainer",children:[Object(b.jsx)("input",{type:"text",defaultValue:"",className:"searchItem textSearch",onChange:function(e){i(Object(O.a)(Object(O.a)({},a),{},{term:e.target.value.toLowerCase()}))},placeholder:"\uf002"}),Object(b.jsxs)("div",{className:"subSearch",children:[Object(b.jsx)("label",{className:"searchItem",children:"Rating: "}),Object(b.jsxs)("select",{name:"rating",className:"searchItem",value:a.rating?a.rating:"",onChange:function(e){i(Object(O.a)(Object(O.a)({},a),{},{rating:e.target.value}))},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:1,children:"1+"}),Object(b.jsx)("option",{value:2,children:"2+"}),Object(b.jsx)("option",{value:3,children:"3+"}),Object(b.jsx)("option",{value:4,children:"4+"}),Object(b.jsx)("option",{value:5,children:"5+"})]}),Object(b.jsx)("label",{className:"searchItem",children:"Price: "}),Object(b.jsxs)("select",{name:"price",className:"searchItem",value:a.price?a.price:"",onChange:function(e){i(Object(O.a)(Object(O.a)({},a),{},{price:e.target.value}))},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"$",children:"$"}),Object(b.jsx)("option",{value:"$$",children:"$$"}),Object(b.jsx)("option",{value:"$$$",children:"$$$"}),Object(b.jsx)("option",{value:"$$$$",children:"$$$$"}),Object(b.jsx)("option",{value:"$$$$$",children:"$$$$$"})]}),Object(b.jsx)(l.b,{to:"/new",children:Object(b.jsx)(o.animated.button,{style:p,onMouseEnter:d,className:"newButton",children:"+"})})]})]})}),m=function(e){var t=Object(c.useState)({term:"",rating:null,price:null}),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(d),l=Object(s.a)(r,2),o=l[0],j=(l[1],Object(c.useState)(!1)),u=Object(s.a)(j,2),O=u[0],m=u[1],v=Object(c.useState)(""),f=Object(s.a)(v,2);f[0],f[1];return Object(b.jsxs)("div",{className:"mainContainer",children:[Object(b.jsx)(x,{beers:o,handleSearch:function(e){return i(e)}}),Object(b.jsx)(p,{filter:a,beers:o}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"bottom",onClick:function(){return m(!O)},children:O?"Hide Beers":"All Beers"}),O?Object(b.jsx)(h,{beers:o}):null]})]})},v=(n(60),function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),j=o[0],u=o[1];return Object(b.jsx)("div",{className:"newBeerPage",children:Object(b.jsxs)("form",{className:"beerFormContainer",onSubmit:function(t){t.preventDefault();var n=t.target,c=n.name,a=n.by,i=n.type,r=n.abv,s=n.rating,l=n.price,o=n.fav;d.beerList.push({id:Math.floor(200*Math.random()),name:c.value,by:a.value,type:i.value,abv:r.value,rating:s.value,price:l.value,fav:o.checked}),e.history.goBack()},children:[Object(b.jsx)("input",{className:"formInputText",placeholder:"Name",type:"text",name:"name"}),Object(b.jsx)("input",{className:"formInputText",placeholder:"Brewery",type:"text",name:"by"}),Object(b.jsx)("input",{className:"formInputText",placeholder:"Type",type:"text",name:"type"}),Object(b.jsx)("input",{className:"formInputText",placeholder:"ABV",type:"text",name:"abv"}),Object(b.jsxs)("select",{name:"rating",className:"formInputSelect",value:j||"",onChange:function(e){u("".concat(e.target.value))},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"1",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"})]}),Object(b.jsxs)("select",{name:"price",className:"formInputSelect",value:a||"",onChange:function(e){i("".concat(e.target.value))},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"$",children:"$"}),Object(b.jsx)("option",{value:"$$",children:"$$"}),Object(b.jsx)("option",{value:"$$$",children:"$$$"}),Object(b.jsx)("option",{value:"$$$$",children:"$$$$"}),Object(b.jsx)("option",{value:"$$$$$",children:"$$$$$"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Favorite?"}),Object(b.jsx)("input",{type:"checkbox",name:"fav",value:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{children:Object(b.jsx)(l.b,{to:"/",children:"Back"})}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})]})})}),f=n.p+"static/media/beerIcon.a8c05e4c.png",$=n(5),g=(n(61),function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),l=Object(s.a)(r,2),o=(l[0],l[1]),j=Object(c.useState)(""),u=Object(s.a)(j,2),p=(u[0],u[1]),h=Object(c.useState)(d.beerList.filter((function(t){return t.id==e.match.params.id}))[0]),x=Object(s.a)(h,2),m=x[0],v=x[1],f=d.beerList.filter((function(t){return t.id==e.match.params.id}))[0],$=d.beerList.indexOf(f),g=function(t){t.preventDefault(),d.beerList[$]=m,e.history.push("/")};return Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:"beerFormContainer",onSubmit:g,children:[Object(b.jsx)("input",{className:"formInputText",placeholder:"Name",autoComplete:"off",type:"text",name:"name",value:m.name,onChange:function(e){v(Object(O.a)(Object(O.a)({},m),{},{name:e.target.value}))}}),Object(b.jsx)("input",{className:"formInputText",placeholder:"Brewery",type:"text",name:"by",value:m.by,onChange:function(e){v(Object(O.a)(Object(O.a)({},m),{},{by:e.target.value}))}}),Object(b.jsx)("input",{className:"formInputText",placeholder:"Type",type:"text",name:"type",value:m.type,onChange:function(e){v(Object(O.a)(Object(O.a)({},m),{},{type:e.target.value}))}}),Object(b.jsx)("input",{className:"formInputText",placeholder:"ABV",type:"text",name:"abv",value:m.abv,onChange:function(e){v(Object(O.a)(Object(O.a)({},m),{},{abv:e.target.value}))}}),Object(b.jsxs)("select",{name:"rating",className:"formInputSelect",value:m.rating,onChange:function(e){p("".concat(e.target.value))},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"1",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"})]}),Object(b.jsxs)("select",{name:"price",className:"formInputSelect",value:m.price,onChange:function(e){o("".concat(e.target.value))},children:[Object(b.jsx)("option",{value:""}),Object(b.jsx)("option",{value:"$",children:"$"}),Object(b.jsx)("option",{value:"$$",children:"$$"}),Object(b.jsx)("option",{value:"$$$",children:"$$$"}),Object(b.jsx)("option",{value:"$$$$",children:"$$$$"}),Object(b.jsx)("option",{value:"$$$$$",children:"$$$$$"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Favorite?"}),Object(b.jsx)("input",{type:"radio",name:"fav",value:m.fav,checked:!!m.fav,onClick:function(e){v(Object(O.a)(Object(O.a)({},m),{},{fav:!e.target.value}))}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){v(f),i(!1)},children:"Back"}),Object(b.jsx)("button",{type:"submit",children:"Save"})]})]})}):Object(b.jsxs)("div",{className:"beerPageContainer",children:[Object(b.jsx)("h1",{className:"beerTextTitle",children:m.name}),Object(b.jsxs)("p",{children:["Brewery: ",m.by]}),Object(b.jsxs)("p",{children:["Type: ",m.type]}),Object(b.jsxs)("p",{children:["ABV: ",m.abv]}),Object(b.jsxs)("p",{children:["Price: ",m.price]}),Object(b.jsxs)("p",{children:["Rating: ",m.rating]}),Object(b.jsxs)("div",{className:"beerButtonContainer",children:[Object(b.jsx)("button",{onClick:function(){return e.history.push("/")},children:"Back"}),Object(b.jsx)("button",{onClick:function(){!function(e){for(var t=0;t<d.beerList.length;t++)d.beerList[t].id==e&&d.beerList.splice(t,1)}(m.id),e.history.push("/")},children:"Delete"}),Object(b.jsx)("button",{onClick:function(){return i(!0)},children:"Edit"})]})]})})});var y=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("img",{src:f,alt:"beerIcon",className:"beerIcon"}),Object(b.jsx)("h1",{className:"title",children:"Beer Me Strength"})]}),Object(b.jsx)($.a,{exact:!0,path:"/new",component:v}),Object(b.jsx)($.a,{path:"/beer/:id",component:g}),Object(b.jsx)($.a,{exact:!0,path:"/",component:m})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(l.a,{children:Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})})}),document.getElementById("root")),N()}},[[62,1,2]]]);
//# sourceMappingURL=main.9236b32a.chunk.js.map