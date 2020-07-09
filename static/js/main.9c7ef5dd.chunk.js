(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),o=n.n(r),c=(n(14),n(15),n(8)),u=n(1),i=n(4),m=n(2),d=n.n(m),s=d.a.shape({title:d.a.string.isRequired,id:d.a.number.isRequired,completed:d.a.bool.isRequired}),f=(d.a.arrayOf(s),l.a.createContext());function p(e){var t=e.todo,n=Object(a.useContext)(f),r=n.todoToggle,o=n.removeTodo,c=t.title,u=t.id,i=t.completed;return l.a.createElement("li",{className:i?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(u),checked:i,onChange:function(){return r(u)}}),l.a.createElement("label",{htmlFor:"todo-".concat(u)},c),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(u)}})),l.a.createElement("input",{type:"text",className:"edit"}))}function E(e){var t=e.todos,n=e.toggleAllTodos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){return n(t)}}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(p,{key:e.id,todo:e})}))))}function b(e){var t=e.addTodo,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],c=r[1];return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o.trim()&&(t(o),c(""))}},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:function(e){return c(e.target.value)}})))}function g(e){var t=e.filterName,n=Object(a.useContext)(f),r=n.addFilter,o=n.filter;return l.a.createElement("li",null,l.a.createElement("a",{href:"#/".concat(t),onClick:function(){return r(t)},className:t===o?"selected":""},t))}function h(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"filters"},["All","Active","Completed"].map((function(e){return l.a.createElement(g,{filterName:e,key:e})}))))}function v(e){var t=e.todos,n=e.clearedCompleted;return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},"".concat(t.length," items left")),l.a.createElement(h,null),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return n()}},"Clear completed"))}var N=function(){var e=Object(a.useState)([{id:1,title:"Learn HTML/CSS",completed:!1,filter:"All"},{id:2,title:"Learn React",completed:!1,filter:"All"},{id:3,title:"Learn JavaScript",completed:!1,filter:"All"}]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("All"),m=Object(i.a)(o,2),d=m[0],s=m[1],p=[];switch(d){case"Active":p=n.filter((function(e){return!1===e.completed}));break;case"Completed":p=n.filter((function(e){return!0===e.completed}));break;default:p=n}return l.a.createElement(f.Provider,{value:{todoToggle:function(e){return r((function(t){return t.map((function(t){var n=t.completed;return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!n}):t}))}))},removeTodo:function(e){return r((function(t){return t.filter((function(t){return t.id!==e}))}))},addFilter:function(e){return s(e)},filter:d}},l.a.createElement("section",{className:"todoapp"},l.a.createElement(b,{addTodo:function(e){return r([].concat(Object(c.a)(n),[{id:Date.now(),title:e,completed:!1,filter:"All"}]))}}),l.a.createElement("section",{className:"main"},l.a.createElement(E,{todos:p,toggleAllTodos:function(e){return e.some((function(e){return!1===e.completed}))?r(e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{completed:!0})}))):r(e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{completed:!1})})))}})),n.length?l.a.createElement(v,{todos:p,clearedCompleted:function(){return r((function(e){return e.filter((function(e){return!1===e.completed}))}))}}):""))};o.a.render(l.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.9c7ef5dd.chunk.js.map