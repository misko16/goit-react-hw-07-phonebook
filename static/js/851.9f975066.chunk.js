"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[851],{7851:function(e,r,t){t.r(r);var n=t(1413),s=t(5861),a=t(4687),u=t.n(a),c=(t(2791),t(887)),i=t(4111),o=t(184);r.default=function(){var e=(0,c.cI)(),r=e.register,t=e.handleSubmit,a=e.reset,p=e.formState.errors,l=function(){var e=(0,s.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.lV)(r);case 3:t=e.sent,console.log("Registration successful",t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Registration error",e.t0);case 10:a();case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,o.jsxs)("form",{className:"form",onSubmit:t(l),children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Name"}),(0,o.jsx)("input",(0,n.Z)({className:"input",placeholder:"Write your name"},r("name",{required:!0})))]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Email"}),(0,o.jsx)("input",(0,n.Z)({className:"input",placeholder:"Write your email"},r("email",{required:!0})))]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Password"}),(0,o.jsx)("input",(0,n.Z)((0,n.Z)({className:"input",placeholder:"Write your password"},r("password",{required:!0,minLength:7})),{},{type:"password"})),p.password&&"required"===p.password.type&&(0,o.jsx)("span",{className:"error",children:"Password is required"}),p.password&&"minLength"===p.password.type&&(0,o.jsx)("span",{className:"error",children:"Password must be at least 7 characters long"})]}),(0,o.jsx)("input",{className:"submitButton",type:"submit",value:"Submit"})]})}},4111:function(e,r,t){t.d(r,{P1:function(){return i},lV:function(){return c}});var n=t(5861),s=t(4687),a=t.n(s),u=t(1243).Z.create({baseURL:"https://connections-api.herokuapp.com"}),c=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/users/signup",r);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/users/login",r);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=851.9f975066.chunk.js.map