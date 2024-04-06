import{B as k,C as f,Ga as T,H as u,Ha as N,I as x,Ia as F,J as y,Ja as M,K as S,Ka as P,Pa as j,Q as o,Qa as b,W as d,Y as l,aa as i,ba as n,ca as I,da as v,ea as _,fa as c,la as r,ma as p,ua as C,wa as E,x as h,xa as D,ya as w}from"./chunk-F3XBP6Z3.js";var A=(t,e,a)=>({"bg-success":t,"bg-danger":e,"bg-info":a}),B=t=>["/add-task",t];function H(t,e){t&1&&(i(0,"div",10)(1,"div",11)(2,"button",12),y(),i(3,"svg",13),I(4,"path",14)(5,"path",15)(6,"path",16),n(),S(),i(7,"span"),r(8," New Task "),n()()()())}function J(t,e){t&1&&(i(0,"span",26),r(1,"Unassigned Task"),n())}function $(t,e){if(t&1&&(i(0,"span",27),r(1),n()),t&2){let a=e.$implicit;o(),p(a.item_text)}}function z(t,e){if(t&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),n(),i(5,"td"),r(6),n(),i(7,"td"),d(8,J,2,0,"span",22)(9,$,2,1,"span",23),n(),i(10,"td")(11,"span",24),r(12),n()(),i(13,"td"),r(14),D(15,"date"),n(),i(16,"td")(17,"a",25),r(18,"Edit"),n()()()),t&2){let a=e.$implicit;o(2),p(a.id),o(2),p(a.priority),o(2),p(a.desc),o(2),l("ngIf",a.assign==null||a.assign.length==0),o(),l("ngForOf",a.assign),o(2),l("ngClass",E(12,A,a.status=="Completed",a.status=="Todo",a.status=="In-progress")),o(),p(a.status),o(2),p(w(15,9,a.timestamp,"medium")),o(3),l("routerLink",C(16,B,a.id))}}function G(t,e){if(t&1&&(i(0,"div",6)(1,"div",17)(2,"table",18)(3,"thead",19)(4,"tr")(5,"th",20),r(6,"Task#"),n(),i(7,"th",20),r(8,"Priority"),n(),i(9,"th",20),r(10,"Title"),n(),i(11,"th",20),r(12,"Assignd to"),n(),i(13,"th",20),r(14,"Status"),n(),i(15,"th",20),r(16,"Created on"),n(),i(17,"th",20),r(18,"Action"),n()()(),i(19,"tbody"),d(20,z,19,18,"tr",21),n()()()()),t&2){let a=c();o(20),l("ngForOf",a.tableData)}}function R(t,e){t&1&&(i(0,"div",28)(1,"h1"),r(2,"Welcome to the task manager"),n(),i(3,"p"),r(4,"It seems you haven't created any task yet. Lets create your first task."),n(),i(5,"a",29),r(6,"Create first task"),n()())}function U(t,e){if(t&1){let a=v();i(0,"li",33)(1,"a",34),_("click",function(){u(a);let s=c(2);return x(s.onPrevious())}),r(2,"Previous"),n()()}}function W(t,e){if(t&1){let a=v();i(0,"li",33)(1,"a",34),_("click",function(){u(a);let s=c(2);return x(s.onNext())}),r(2,"Next"),n()()}}function q(t,e){if(t&1&&(i(0,"nav",30)(1,"ul",31),d(2,U,3,0,"li",32)(3,W,3,0,"li",32),n()()),t&2){let a=c();o(2),l("ngIf",a.page>1),o(),l("ngIf",a.showNext)}}var L=(()=>{let e=class e{constructor(){this.taskData=[],this.tableData=[],this.page=1,this.perpage=5,this.showNext=!1,this.startItem=(this.page-1)*this.perpage,this.endItem=this.page*this.perpage}ngOnInit(){let m=localStorage.getItem("tasks");m===null?localStorage.setItem("tasks",JSON.stringify(this.taskData)):(this.taskData=JSON.parse(m),this.buildPagination())}onNext(){this.page>=1&&(this.page=this.page+1,this.buildPagination())}onPrevious(){this.page>=2&&(this.page=this.page-1,this.buildPagination())}buildPagination(){this.startItem=(this.page-1)*this.perpage,this.endItem=this.page*this.perpage,this.tableData=this.taskData.slice(this.startItem,this.endItem),Math.ceil(this.taskData.length/this.perpage)>=1?this.showNext=!0:this.showNext=!1}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=k({type:e,selectors:[["app-dashboard"]],decls:14,vars:4,consts:[[1,"container"],[1,"row"],[1,"col","text-center"],[1,"my-3"],["class","row mb-3",4,"ngIf"],["class","col",4,"ngIf"],[1,"col"],["style","min-height: 90vh","class","d-flex flex-column justify-content-center align-items-center",4,"ngIf"],[1,"col","d-flex","justify-content-center"],["aria-label","Page navigation example",4,"ngIf"],[1,"row","mb-3"],[1,"col","d-flex","justify-content-end"],["type","button","routerLink","/add-task",1,"btn","btn-danger"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-plus"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M12 5l0 14"],["d","M5 12l14 0"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"table-dark"],["scope","col"],[4,"ngFor","ngForOf"],["class","badge bg-danger mx-1",4,"ngIf"],["class","badge bg-primary mx-1",4,"ngFor","ngForOf"],[1,"badge",3,"ngClass"],[1,"btn","btn-primary",3,"routerLink"],[1,"badge","bg-danger","mx-1"],[1,"badge","bg-primary","mx-1"],[1,"d-flex","flex-column","justify-content-center","align-items-center",2,"min-height","90vh"],["routerLink","/add-task",1,"btn","btn-danger"],["aria-label","Page navigation example"],[1,"pagination"],["class","page-item",4,"ngIf"],[1,"page-item"],["href","#",1,"page-link",3,"click"]],template:function(s,g){s&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),r(4,"Task Manager"),n()()(),d(5,H,9,0,"div",4),i(6,"div",1),d(7,G,21,1,"div",5),n(),i(8,"div",1)(9,"div",6),d(10,R,7,0,"div",7),n()(),i(11,"div",1)(12,"div",8),d(13,q,4,2,"nav",9),n()()()),s&2&&(o(5),l("ngIf",g.taskData.length>0),o(2),l("ngIf",g.taskData.length>0),o(3),l("ngIf",g.taskData.length==0),o(3),l("ngIf",g.taskData.length>0))},dependencies:[T,N,F,j,M]});let t=e;return t})();var K=[{path:"",component:L}],V=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[b.forChild(K),b]});let t=e;return t})();var ot=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[P,V]});let t=e;return t})();export{ot as DashboardModule};
