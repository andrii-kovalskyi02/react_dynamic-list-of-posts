(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(10),i=c(6),r=c(2),o=c(4),l=c.n(o),d=c(1),j=c.n(d),u=c(3),m=c.n(u),b=c(0),h=j.a.memo((function(e){var t=e.posts,c=e.onPostDetails,n=Object(d.useState)(!1),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(d.useState)(null),l=Object(r.a)(o,2),j=l[0],u=l[1],m=Object(d.useCallback)((function(e){u(e.id),i(!0),c(e)}),[c]),h=Object(d.useCallback)((function(){i(!1),c(null)}),[c]);return Object(b.jsxs)("div",{"data-cy":"PostsList",children:[Object(b.jsx)("p",{className:"title",children:"Posts:"}),Object(b.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"has-background-link-light",children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"Post",children:[Object(b.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(b.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:s&&e.id===j?Object(b.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:h,children:"Close"}):Object(b.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return m(e)},children:"Open"})})]},e.id)}))})]})]})})),O=(c(17),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),x=j.a.memo((function(e){var t=e.postId,c=e.addComment,n=e.isCommentAdditionError,a=e.isCommentAdditionLoading,s=Object(d.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(d.useState)(""),u=Object(r.a)(j,2),h=u[0],O=u[1],x=Object(d.useState)(""),f=Object(r.a)(x,2),p=f[0],v=f[1],N=Object(d.useState)(!1),y=Object(r.a)(N,2),g=y[0],C=y[1],k=Object(d.useState)(!1),S=Object(r.a)(k,2),w=S[0],E=S[1],P=Object(d.useState)(!1),A=Object(r.a)(P,2),F=A[0],L=A[1],T=Object(d.useCallback)((function(e){if(e.preventDefault(),function(){var e=o.trim(),t=h.trim(),c=p.trim(),n=/^\S+@\S+\.\S+$/.test(t);return C(!e),E(!t||!n),L(!c),e&&t&&c&&n}()){var n={postId:t,name:o.trim(),email:h.trim(),body:p.trim()};c(n),v("")}}),[o,h,p]),I=Object(d.useCallback)((function(){l(""),C(!1),O(""),E(!1),v(""),L(!1)}),[]),D=Object(d.useCallback)((function(e){g&&C(!1),l(e.target.value)}),[o,g]),B=Object(d.useCallback)((function(e){w&&E(!1),O(e.target.value)}),[h,w]),M=Object(d.useCallback)((function(e){F&&L(!1),v(e.target.value)}),[p,F]);return Object(b.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:T,children:[Object(b.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:m()("input",{"is-danger":g}),value:o,onChange:D}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})}),g&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]})]})]}),Object(b.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:m()("input",{"is-danger":w}),value:h,onChange:B}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),w&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]})]})]}),Object(b.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:m()("textarea",{"is-danger":F}),value:p,onChange:M})}),F&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(b.jsxs)("div",{className:"field is-grouped",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"submit",className:m()("button is-link",{"is-loading":a}),children:"Add"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:I,children:"Clear"})})]}),n&&Object(b.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"})]})})),f=j.a.memo((function(e){var t=e.post,c=e.comments,n=e.hasCommentsError,a=e.removeComment,s=e.addComment,i=e.isCommentAdditionError,o=e.isCommentAdditionLoading,l=Object(d.useState)(!1),u=Object(r.a)(l,2),m=u[0],h=u[1];Object(d.useEffect)((function(){return function(){h(!1)}}),[t]);var f=!n&&c&&!c.length;return Object(b.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(b.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(b.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(b.jsxs)("div",{className:"block",children:[null===c&&!n&&Object(b.jsx)(O,{}),n&&Object(b.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),f&&Object(b.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),c&&c.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"title is-4",children:"Comments:"}),Object(b.jsx)("article",{className:"message is-small","data-cy":"Comment",children:c.map((function(e){return Object(b.jsxs)(j.a.Fragment,{children:[Object(b.jsxs)("div",{className:"message-header",children:[Object(b.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(b.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return a(e.id)},children:"Delete comment"})]}),Object(b.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))})]}),!m&&Object(b.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return h(!m)},children:"Write a comment"})]}),m&&Object(b.jsx)(x,{postId:t.id,addComment:s,isCommentAdditionError:i,isCommentAdditionLoading:o})]})})})),p=j.a.memo((function(e){var t=e.users,c=e.onUserClick,n=Object(d.useState)("Choose a user"),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(d.useState)(!1),l=Object(r.a)(o,2),j=l[0],u=l[1],h=Object(d.useRef)(null);Object(d.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&u(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var O=Object(d.useCallback)((function(e,t){i(t),c(e),u(!1)}),[s,c]);return Object(b.jsxs)("div",{"data-cy":"UserSelector",className:m()("dropdown",{"is-active":j}),ref:h,children:[Object(b.jsx)("div",{className:"dropdown-trigger",children:Object(b.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return u(!j)},children:[Object(b.jsx)("span",{children:s}),Object(b.jsx)("span",{className:"icon is-small",children:Object(b.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(b.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(b.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var t=e.id,c=e.name;return Object(b.jsx)("a",{href:"#user-".concat(t),className:m()("dropdown-item",{"is-active":c===s}),onClick:function(){return O(t,c)},children:c},t)}))})})]})})),v="https://mate.academy/students-api";function N(e){return new Promise((function(t){setTimeout(t,e)}))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),N(300).then((function(){return fetch(v+e,n)})).then((function(e){if(!e.ok)throw new Error("Request failed with status: ".concat(e.status));return e.json()}))}var g=function(e){return y(e)},C=function(e,t){return y(e,"POST",t)},k=function(e){return y(e,"DELETE")},S=function(e){return g("/posts?userId=".concat(e))},w=function(e){return C("/comments",e)},E=function(e){return k("/comments/".concat(e))},P=(c(18),c(19),c(20),function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(null),o=Object(r.a)(a,2),j=o[0],u=o[1],x=Object(d.useState)(null),v=Object(r.a)(x,2),N=v[0],y=v[1],C=Object(d.useState)(null),k=Object(r.a)(C,2),P=k[0],A=k[1],F=Object(d.useState)(!1),L=Object(r.a)(F,2),T=L[0],I=L[1],D=Object(d.useState)(!1),B=Object(r.a)(D,2),M=B[0],U=B[1],_=Object(d.useState)(!1),q=Object(r.a)(_,2),J=q[0],R=q[1],W=Object(d.useState)(!1),G=Object(r.a)(W,2),Y=G[0],$=G[1],z=Object(d.useState)(!1),H=Object(r.a)(z,2),K=H[0],Q=H[1];Object(d.useEffect)((function(){g("/users").then((function(e){return n(e)})).catch((function(){return U(!0)}))}),[]);var V=!T&&!M&&j&&!j.length,X=Object(d.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(null),u([]),I(!0),e.prev=3,e.next=6,S(t);case 6:c=e.sent,u(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),U(!0);case 13:return e.prev=13,I(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),Z=Object(d.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return y(null),e.abrupt("return");case 3:return y(t),A(null),R(!1),e.prev=6,e.next=9,n=t.id,g("/comments?postId=".concat(n));case 9:c=e.sent,A(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),R(!0);case 16:case"end":return e.stop()}var n}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}(),[]),ee=Object(d.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.prev=1,e.next=4,w(t);case 4:c=e.sent,A((function(e){return[].concat(Object(s.a)(e||[]),[c])})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),$(!0);case 11:return e.prev=11,Q(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),[]),te=Object(d.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(t);case 3:A((function(e){return(e||[]).filter((function(e){return e.id!==t}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),R(!0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"tile is-ancestor",children:[Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child box is-success",children:[Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(p,{users:c,onUserClick:X})}),Object(b.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!j&&Object(b.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),T&&Object(b.jsx)(O,{}),M&&Object(b.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),V&&Object(b.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),j&&j.length>0&&Object(b.jsx)(h,{posts:j,onPostDetails:Z})]})]})}),Object(b.jsx)("div",{"data-cy":"Sidebar",className:m()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":N}),children:N&&Object(b.jsx)("div",{className:"tile is-child box is-success ",children:Object(b.jsx)(f,{post:N,comments:P,hasCommentsError:J,removeComment:te,addComment:ee,isCommentAdditionError:Y,isCommentAdditionLoading:K})})})]})})})});a.a.render(Object(b.jsx)(P,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.aa94820c.chunk.js.map