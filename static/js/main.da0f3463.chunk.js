(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={contactsTitle:"App_contactsTitle__31lJc"}},16:function(e,t,n){e.exports={button:"Form_button__lcHRg"}},17:function(e,t,n){e.exports={item:"Contact_item__1xTdI"}},18:function(e,t,n){e.exports={container:"Container_container__2qR3g"}},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),o=n.n(a),i=n(3),s=n(2),u=n(4),b=n(11),j=Object(b.a)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),d=Object(u.c)(j,{addContact:function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])},removeContact:function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))}}),l=Object(u.c)("",{handleInputChange:function(e,t){return t.payload}}),m=n(5),O=n(14),h={key:"contacts",version:1,storage:n.n(O).a,blacklist:["filter"]},f=Object(s.b)({items:d,filter:l}),p=Object(m.g)(h,f),x=Object(u.a)({reducer:{contacts:p},middleware:function(e){return e({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})},devTools:!1}),v=Object(m.h)(x),C=(n(32),n(15)),g=n.n(C),y=n(12),_=n(16),w=n.n(_),k=Object(u.b)("addContact"),A=Object(u.b)("removeContact"),T=Object(u.b)("handleInputChange"),N=n(1);function S(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(y.a)(a,2),s=o[0],u=o[1],b=Object(i.b)(),j=Object(i.c)((function(e){return e.contacts.items})),d=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":u(c)}};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){if(j.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))alert("You have already had ".concat(e.name," in your contacts"));else{var t={id:Date.now(),name:e.name,number:e.number};b(k(t))}}({name:n,number:s}),r(""),u("")},children:[Object(N.jsxs)("label",{children:[Object(N.jsx)("p",{children:"Name"}),Object(N.jsx)("input",{type:"text",value:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,onChange:d})]}),Object(N.jsxs)("label",{children:[Object(N.jsx)("p",{children:"Number"}),Object(N.jsx)("input",{type:"tel",value:s,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:d,required:!0})]}),Object(N.jsx)("button",{type:"submit",className:w.a.button,children:"Add contact"})]})})}function z(){var e=Object(i.b)();return Object(N.jsxs)("label",{children:[Object(N.jsx)("p",{children:"Find contacts by name:"}),Object(N.jsx)("input",{type:"text",name:"filter",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:function(t){e(T(t.currentTarget.value))}})]})}var I=n(17),L=n.n(I);function q(e){var t=e.contact,n=Object(i.b)();return Object(N.jsxs)("li",{className:L.a.item,children:[t.name,": ",t.number," ",Object(N.jsx)("button",{onClick:function(){return function(e){n(A(e.id))}(t)},children:"Delete"})]})}function D(){var e=Object(i.c)((function(e){return e.contacts})),t=e.items,n=e.filter;return Object(N.jsx)("ul",{children:function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t,n).map((function(e){return Object(N.jsx)(q,{contact:e},e.id)}))})}var F=n(18),J=n.n(F);function R(e){var t=e.children;return Object(N.jsxs)("div",{className:J.a.container,children:[t," "]})}var Z=function(){return Object(N.jsxs)(R,{children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(S,{}),Object(N.jsx)("h2",{className:g.a.contactsTitle,children:"Contacts"}),Object(N.jsx)(z,{}),Object(N.jsx)(D,{})]})},E=n(19);o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(E.a,{persistor:v,children:Object(N.jsx)(i.a,{store:x,children:Object(N.jsx)(Z,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.da0f3463.chunk.js.map