"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[274],{5224:function(n,e,r){r.d(e,{z:function(){return s}});var i,a=r(168),o=(0,r(1191).ZP)("button")(i||(i=(0,a.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid #4072AF;\n    background-color: #4072AF;\n  }\n"])),(function(n){return n.color||"#102D4D"}),(function(n){return n.color?"#102D4D":"#fff"})),t=r(184),s=function(n){var e=n.color,r=n.children,i=n.onClick;return(0,t.jsx)(o,{color:e,onClick:i,children:r})}},5274:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var i=r(605),a=r(9603),o=r(4720),t=r(6709),s=r(4942),d=r(4165),l=r(5861),c=r(1413),u=r(9439),m=r(2791),p=r(8691),h={name:"",email:"",message:""};function x(n){var e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}var f,g,Z,v,S,_,E,b,j,C,P=r(5224),T=r(1489),O=r(184),y=(0,o.Z)()((function(n){var e=n.title,r=n.content,i=n.t;return(0,O.jsxs)(T.W2,{children:[(0,O.jsx)("h6",{children:i(e)}),(0,O.jsx)(T.OP,{children:(0,O.jsx)(T.VY,{children:i(r)})})]})})),D=r(168),w=r(1191),A=(0,w.ZP)("div")(f||(f=(0,D.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),k=(0,w.ZP)("input")(g||(g=(0,D.Z)(["\n  font-size: 0.875rem;\n  color:#333\n"]))),R=(0,w.ZP)("div")(Z||(Z=(0,D.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),F=(0,w.ZP)("textarea")(v||(v=(0,D.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n  color:#333\n"]))),I=(0,w.ZP)("label")(S||(S=(0,D.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),L=(0,o.Z)()((function(n){var e=n.name,r=n.placeholder,i=n.onChange,a=n.t;return(0,O.jsxs)(A,{children:[(0,O.jsx)(I,{htmlFor:e,children:a(e)}),(0,O.jsx)(k,{placeholder:a(r),name:e,id:e,onChange:i})]})})),W=(0,o.Z)()((function(n){var e=n.name,r=n.placeholder,i=n.onChange,a=n.t;return(0,O.jsxs)(R,{children:[(0,O.jsx)(I,{htmlFor:e,children:a(e)}),(0,O.jsx)(F,{placeholder:a(r),id:e,name:e,onChange:i})]})})),H=(w.ZP.input(_||(_=(0,D.Z)(["\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 1rem;\n  color: #333;  // Change text color here (dark gray)\n  background-color: #fff;  // Ensure background is white or desired color\n  \n  &:focus {\n    outline: none;\n    border-color: #4f8a8b;  // Focus border color\n  }\n"]))),(0,w.ZP)("div")(E||(E=(0,D.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"])))),K=(0,w.ZP)("form")(b||(b=(0,D.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),z=(0,w.ZP)("span")(j||(j=(0,D.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),M=(0,w.ZP)("div")(C||(C=(0,D.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),N=r(4050),U=(0,o.Z)()((function(n){var e=n.title,r=n.content,o=n.id,f=n.t,g=function(n){var e=(0,m.useState)({values:(0,c.Z)({},h),errors:(0,c.Z)({},h)}),r=(0,u.Z)(e,2),i=r[0],a=r[1],o=function(){var e=(0,l.Z)((0,d.Z)().mark((function e(r){var o,t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),o=i.values,t=n(o),a((function(n){return(0,c.Z)((0,c.Z)({},n),{},{errors:t})})),!Object.values(t).some((function(n){return""!==n}))){e.next=6;break}return e.abrupt("return");case 6:try{r.target.reset(),a({values:(0,c.Z)({},h),errors:(0,c.Z)({},h)}),p.Z.success({message:"Success",description:"Your message has been sent!"})}catch(s){p.Z.error({message:"Error",description:"Failed to submit form. Please try again later."})}case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{handleChange:function(n){n.persist();var e=n.target,r=e.name,i=e.value;a((function(n){return(0,c.Z)((0,c.Z)({},n),{},{values:(0,c.Z)((0,c.Z)({},n.values),{},(0,s.Z)({},r,i)),errors:(0,c.Z)((0,c.Z)({},n.errors),{},(0,s.Z)({},r,""))})}))},handleSubmit:o,values:i.values,errors:i.errors}}(x),Z=g.values,v=g.errors,S=g.handleChange,_=g.handleSubmit,E=function(n){var e=n.type,r=v[e];return(0,O.jsx)(z,{children:r})};return(0,O.jsx)(H,{id:o,children:(0,O.jsxs)(i.Z,{justify:"space-between",align:"middle",children:[(0,O.jsx)(a.Z,{lg:12,md:11,sm:24,xs:24,children:(0,O.jsx)(t.Mi,{direction:"left",triggerOnce:!0,children:(0,O.jsx)(y,{title:e,content:r})})}),(0,O.jsx)(a.Z,{lg:12,md:12,sm:24,xs:24,children:(0,O.jsx)(t.Mi,{direction:"right",triggerOnce:!0,children:(0,O.jsxs)(K,{autoComplete:"off",onSubmit:function(n){_(n),function(n){n.preventDefault(),N.ZP.send({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_SERVICE_ID||"",{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_TEMPLATE_ID||"",{name:Z.name,email:Z.email,message:Z.message},{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_EMAILJS_USER_ID||"").then((function(n){console.log("Email sent successfully:",n.text)}),(function(n){console.error("Error sending email:",n.text)}))}(n)},children:[(0,O.jsxs)(a.Z,{span:24,children:[(0,O.jsx)(L,{type:"text",name:"name",placeholder:"Your Name",value:Z.name||"",onChange:S}),(0,O.jsx)(E,{type:"name"})]}),(0,O.jsxs)(a.Z,{span:24,children:[(0,O.jsx)(L,{type:"email",name:"email",placeholder:"Your Email",value:Z.email||"",onChange:S}),(0,O.jsx)(E,{type:"email"})]}),(0,O.jsxs)(a.Z,{span:24,children:[(0,O.jsx)(W,{placeholder:"Your Message",value:Z.message||"",name:"message",onChange:S}),(0,O.jsx)(E,{type:"message"})]}),(0,O.jsx)(M,{children:(0,O.jsx)(P.z,{name:"submit",children:f("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=274.19174815.chunk.js.map