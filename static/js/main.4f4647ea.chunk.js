(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(271)},114:function(e,t,n){},115:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n.n(o),i=(n(114),n(28)),u=n(29),m=n(31),c=n(30),s=n(32),d=(n(115),n(17)),p=n(27),y=n(101),h=n.n(y),b=n(103),g=n.n(b),E=n(100),v=n.n(E),f=n(102),w=n.n(f),O=n(64),j=n.n(O),C=n(47),q=n.n(C),k=Object(p.withStyles)(function(e){return{head:{color:e.palette.common.white},body:{fontSize:14}}})(v.a);var A=0,I=0,x=[],N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(c.a)(t).call(this,e))).total=function(){x.map(function(e){return A+=parseInt(e)}),I=A,A=0,x=[]},n.costpush=function(e,t){x.push(e*t)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.summary;return r.a.createElement(q.a,{className:t.root,style:{height:"80%"}},r.a.createElement(h.a,{className:t.table},r.a.createElement(w.a,{style:{backgroundColor:"#00b5ad"}},r.a.createElement(j.a,null,r.a.createElement(k,{align:"center"},"Item"),r.a.createElement(k,{align:"center"},"Quantity"),r.a.createElement(k,{align:"center"},"Unit"),r.a.createElement(k,{align:"center"},"Unit Cost($)"),r.a.createElement(k,{align:"center"},"OverAll Cost($)"))),r.a.createElement(g.a,null,n.map(function(n){return r.a.createElement(j.a,{className:t.row,key:n.id},r.a.createElement(k,{align:"center",component:"th",scope:"row"},n.item),r.a.createElement(k,{align:"center"},n.quantity),r.a.createElement(k,{align:"center"},n.unit),r.a.createElement(k,{align:"center"},n.amount),r.a.createElement(k,{align:"center"},n.amount*n.quantity),e.costpush(n.amount,n.quantity))}))),this.total(),r.a.createElement("h3",null,"Total : ",I," "))}}]),t}(r.a.Component),T=Object(p.withStyles)(function(e){return{root:{width:"100%",marginTop:6*e.spacing.unit,overflowX:"auto"},table:{minWidth:50},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(N),B=n(16),Q=n(104),U=n.n(Q),P=n(105),S=n.n(P),$=n(107),R=n.n($),W=n(63),z=n.n(W),J=n(33),L=n.n(J),F=n(106),G=n.n(F),K=(n(6),[{value:"KG",label:"kg"},{value:"LITRES",label:"Lt"},{value:"none",label:"--"}]),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={unit:""},n.handleChange=function(e){n.setState({unit:e.target.value}),console.log(n.state.unit)},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{id:"unit",select:!0,label:"Unit",value:this.props.unit,onChange:this.props.onUnit,helperText:"Please select A Unit From Above",margin:"normal",variant:"outlined"},K.map(function(e){return r.a.createElement("option",{key:e.value,value:e.label},e.label)}))}}]),t}(r.a.Component),X=Object(d.b)(function(e){return{unit:e.unit}},function(e){return{onUnit:function(t){return e({type:"unit",value:t.target.value})}}})(M);var D=Object(d.b)(function(e){return{item:e.item,amount:e.amount,quantity:e.quantity}},function(e){return{onItem:function(t){return e({type:"item",value:t.target.value})},onQuantity:function(t){return e({type:"quantity",value:t.target.value})},onAmount:function(t){return e({type:"amount",value:t.target.value})},onAdd:function(){return e({type:"add"})}}})(function(e){return e.classes,r.a.createElement(B.Container,{fluid:!0},r.a.createElement(B.Row,null,r.a.createElement(B.Col,{md:4,sm:1,xs:1}),r.a.createElement(B.Col,{md:4,sm:10,xs:10},r.a.createElement(U.a,{style:{marginTop:"20px",border:"1px solid darkgray",background:"linear-gradient(to right, #9796f0,#fbc7d4)"}},r.a.createElement(S.a,null,r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(z.a,{variant:"h4"},"Billing Calculator"),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(L.a,{id:"item",label:"Item",margin:"normal",variant:"outlined",onChange:e.onItem}),r.a.createElement("br",null),r.a.createElement(X,null),r.a.createElement("br",null),r.a.createElement(L.a,{id:"quantity",label:"Quantity",margin:"normal",variant:"outlined",onChange:e.onQuantity}),r.a.createElement("br",null),r.a.createElement(L.a,{id:"amount",label:"Amount Per Item",margin:"normal",variant:"outlined",onChange:e.onAmount,InputProps:{startAdornment:r.a.createElement(G.a,{position:"start"},"$")}}),r.a.createElement("br",null),r.a.createElement(R.a,{size:"small",style:{marginTop:"2vh",backgroundColor:"#00b5ad",color:"white"},onClick:e.onAdd,variant:"contained"},"Add")))))),r.a.createElement(B.Col,{md:4,sm:1,xs:1})))}),H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(B.Container,{fluid:!0},r.a.createElement(B.Row,null,r.a.createElement(B.Col,{md:3,sm:1,xs:1}),r.a.createElement(B.Col,{md:6,sm:10,xs:10},"yes"===this.props.show?r.a.createElement(T,{summary:this.props.summary}):"none"===this.props.show?r.a.createElement("h3",null,"Please Add Items, Quantity And Amount !"):"string"===this.props.show?r.a.createElement("h3",null,"Please Input A Number In Amount/Quantity !"):console.log("no")),r.a.createElement(B.Col,{md:3,sm:1,xs:1}))))}}]),t}(r.a.Component),V=Object(d.b)(function(e){return{show:e.show,summary:e.summary}},function(e){return{}})(H),Y=n(48);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(38),_={item:"",amount:0,quantity:0,unit:"",show:"",summary:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=Object(Z.a)({},e);if("item"===t.type&&(n.item=t.value),"quantity"===t.type&&(n.quantity=t.value),"unit"===t.type&&(n.unit=t.value),"amount"===t.type&&(n.amount=t.value),"add"===t.type){if(document.getElementById("item").value="",document.getElementById("amount").value="",document.getElementById("quantity").value="",isNaN(n.amount)||isNaN(n.quantity))return Object(Z.a)({},e,{item:"",amount:0,show:"string",quantity:0});if(n.item.length>0&&n.amount>0&&n.quantity>0)return Object(Z.a)({},e,{summary:e.summary.concat({id:Math.random(),item:e.item,quantity:e.quantity,unit:e.unit,amount:e.amount}),item:"",amount:0,show:"yes",quantity:0});if(n.item.length<=0||n.amount<=0||n.quantity<=0)return Object(Z.a)({},e,{item:"",amount:0,show:"none",quantity:0})}return n},te=Object(Y.b)(ee);l.a.render(r.a.createElement(d.a,{store:te},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.4f4647ea.chunk.js.map