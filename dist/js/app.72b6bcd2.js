(function(e){function t(t){for(var r,u,s=t[0],a=t[1],o=t[2],d=0,m=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&m.push(i[u][0]),i[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(m.length)m.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06d6":function(e,t,n){"use strict";n("7ebc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=n("3fd4");n("7dd6");function c(e,t,n,i,c,u){var s=Object(r["M"])("page-management");return Object(r["D"])(),Object(r["i"])(s)}var u=Object(r["fb"])("data-v-68a9cb03");Object(r["G"])("data-v-68a9cb03");var s={class:"backgroundColor headConfig"},a=Object(r["l"])(" 内存管理 "),o=Object(r["l"])(" (分页方法) "),l=Object(r["m"])("div",null,[Object(r["m"])("span",null,"地址空间")],-1),d=Object(r["l"])(" Memory "),m={class:"card-header"},b={key:0},f=Object(r["m"])("span",null,"指令执行进度：",-1),O=Object(r["m"])("span",null,"页置换算法: ",-1),h=Object(r["l"])(" 指令数: 320 "),p=Object(r["l"])(" 页数： 32 "),j=Object(r["l"])(" 内存帧数： 4 "),g={class:"percentage-value"},v=Object(r["m"])("div",{class:"percentage-label"},"缺页率",-1),y={class:"controlPannel"},F={style:{"margin-bottom":"50px"}},_=Object(r["l"])(" 执行一步 "),I=Object(r["l"])("自动执行 "),x=Object(r["l"])("暂停执行"),M=Object(r["l"])("继续执行"),P=Object(r["l"])("重置指令 ");Object(r["E"])();var w=u((function(e,t,n,i,c,w){var T=Object(r["M"])("el-row"),S=Object(r["M"])("el-table-column"),k=Object(r["M"])("el-tag"),R=Object(r["M"])("el-table"),U=Object(r["M"])("el-card"),A=Object(r["M"])("el-col"),C=Object(r["M"])("el-space"),L=Object(r["M"])("el-progress"),E=Object(r["M"])("el-option"),N=Object(r["M"])("el-select"),D=Object(r["M"])("el-slider"),Q=Object(r["M"])("el-button"),V=Object(r["M"])("el-button-group");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])("div",s,[Object(r["m"])(T,{type:"flex",justify:"center",class:"titleConfig"},{default:u((function(){return[a]})),_:1}),Object(r["m"])(T,{type:"flex",justify:"center"},{default:u((function(){return[o]})),_:1})]),Object(r["m"])(T,{type:"flex",align:"middle",justify:"space-between"},{default:u((function(){return[Object(r["m"])(A,{span:"24"},{default:u((function(){return[Object(r["m"])(U,null,{header:u((function(){return[l]})),default:u((function(){return[Object(r["m"])(R,{data:c.instructions,height:"700",stripe:""},{default:u((function(){return[Object(r["m"])(S,{prop:"page_id",label:"页号",width:"50"}),Object(r["m"])(S,{prop:"address",label:"地址",width:"50"}),Object(r["m"])(S,{prop:"next_address",label:"下个地址",width:"80"}),Object(r["m"])(S,{prop:"status",label:"状态",width:"80",filters:[{text:"未执行",value:"未执行"},{text:"已执行",value:"已执行"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},{default:u((function(e){return[Object(r["m"])(k,{type:"未执行"===e.row.status?"primary":"success","disable-transitions":""},{default:u((function(){return[Object(r["l"])(Object(r["Q"])(e.row.status),1)]})),_:2},1032,["type"])]})),_:1},8,["filter-method"])]})),_:1},8,["data"])]})),_:1})]})),_:1}),Object(r["m"])(A,{span:"24"},{default:u((function(){return[Object(r["m"])(T,null,{default:u((function(){return[Object(r["m"])(U,{class:"memory"},{header:u((function(){return[d]})),default:u((function(){return[Object(r["m"])(C,{size:30},{default:u((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(c.memoryFrames,(function(e,t){return Object(r["D"])(),Object(r["i"])(A,{span:"24",key:t},{default:u((function(){return[Object(r["m"])(U,{class:"box-card memoryFrame"},{header:u((function(){return[Object(r["m"])("div",m,[Object(r["m"])("span",null,"Frame "+Object(r["Q"])(t),1)])]})),default:u((function(){return[-1!=e.pageId?(Object(r["D"])(),Object(r["i"])("div",b,[Object(r["m"])("div",null," PageId:"+Object(r["Q"])(e.pageId),1),(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.instructions,(function(e,t){return Object(r["D"])(),Object(r["i"])("div",{key:t,class:"instruction"},Object(r["Q"])(e.address),1)})),128))])):Object(r["j"])("",!0)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1}),Object(r["m"])(L,{"text-inside":!0,"stroke-width":26,percentage:w.conductPercent,class:"conductProgress"},{default:u((function(e){var t=e.percentage;return[f,Object(r["m"])("span",null,Object(r["Q"])(t)+"%",1)]})),_:1},8,["percentage"])]})),_:1}),Object(r["m"])(A,{span:"24"},{default:u((function(){return[Object(r["m"])(U,{class:"controller"},{default:u((function(){return[O,Object(r["m"])(N,{modelValue:c.currentAlgorithm,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.currentAlgorithm=e}),placeholder:"请选择页置换算法"},{default:u((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(c.algorithms,(function(e){return Object(r["D"])(),Object(r["i"])(E,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),Object(r["m"])(U,{style:{"margin-top":"50px"}},{default:u((function(){return[Object(r["m"])(T,null,{default:u((function(){return[h]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[p]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[j]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[Object(r["l"])(" 已执行指令数: "+Object(r["Q"])(c.haveConductStepNum),1)]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[Object(r["l"])(" 缺页数："+Object(r["Q"])(c.missStepNum),1)]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[Object(r["l"])(" 当前指令地址："+Object(r["Q"])(c.currentInstId),1)]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[Object(r["l"])(" 下条指令地址："+Object(r["Q"])(c.instructions[c.currentInstId].next_address),1)]})),_:1})]})),_:1}),Object(r["m"])(L,{type:"dashboard",percentage:w.missRate,style:{"margin-top":"50px"}},{default:u((function(e){var t=e.percentage;return[Object(r["m"])("div",g,Object(r["Q"])(t>0?t:0)+"%",1),v]})),_:1},8,["percentage"]),Object(r["m"])("div",y,[Object(r["m"])("div",F,[Object(r["m"])("span",null,"自动执行速度: ×"+Object(r["Q"])(c.speed),1),Object(r["m"])(D,{modelValue:c.speed,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.speed=e}),max:"5",disabled:c.isAutoExecuting},null,8,["modelValue","disabled"])]),Object(r["m"])(C,{direction:"vertical"},{default:u((function(){return[Object(r["m"])(T,null,{default:u((function(){return[Object(r["m"])(V,null,{default:u((function(){return[Object(r["m"])(Q,{onClick:t[3]||(t[3]=function(e){return w.conductOneStep()}),icon:"el-icon-arrow-right",disabled:c.isAutoExecuting},{default:u((function(){return[_]})),_:1},8,["disabled"]),Object(r["m"])(Q,{type:"primary",onClick:t[4]||(t[4]=function(e){return w.autoExecute()}),icon:"el-icon-d-arrow-right",disabled:c.isAutoExecuting||c.isPaused},{default:u((function(){return[I]})),_:1},8,["disabled"])]})),_:1})]})),_:1}),Object(r["m"])(T,null,{default:u((function(){return[Object(r["m"])(V,null,{default:u((function(){return[c.isPaused?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])(Q,{key:0,type:"warning",icon:"el-icon-video-pause",onClick:w.pause,disabled:!c.isAutoExecuting},{default:u((function(){return[x]})),_:1},8,["onClick","disabled"])),c.isPaused?(Object(r["D"])(),Object(r["i"])(Q,{key:1,type:"success",icon:"el-icon-video-play",onClick:w.continueExecute},{default:u((function(){return[M]})),_:1},8,["onClick"])):Object(r["j"])("",!0),Object(r["m"])(Q,{type:"danger",plain:"",onClick:t[5]||(t[5]=function(e){return w.reset()}),icon:"el-icon-refresh-right"},{default:u((function(){return[P]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1})]})),_:1})]})),_:1})],64)})),T=(n("b680"),{name:"PageManagement",data:function(){return{algorithms:[{value:"FIFO",label:"FIFO"},{value:"LRU",label:"LRU"}],currentAlgorithm:"FIFO",memoryFrames:Array(4),instructions:Array(320),currentInstId:-1,haveConductStepNum:0,missStepNum:0,FIFOTime:0,LRUTime:0,isAutoExecuting:!1,speed:2,isPaused:!1}},computed:{conductPercent:function(){return(this.haveConductStepNum/320*100).toFixed(1)},realSpeed:function(){return this.speed>0?500/this.speed:1e6},missRate:function(){return(this.missStepNum/this.haveConductStepNum*100).toFixed(1)}},beforeMount:function(){this.reset()},methods:{reset:function(){this.haveConductStepNum=0,this.missStepNum=0,this.FIFOTime=0,this.LRUTime=0,this.isAutoExecuting=!1,this.speed=2,this.isPaused=!1,this.initMemoryPages(),this.initInstructions()},initMemoryPages:function(){this.memoryPages=Array(4);for(var e=0;e<4;e++)this.memoryFrames[e]={pageId:-1,instructions:[],FIFOTime:this.FIFOTime,LRUTime:this.LRUTime}},initInstructions:function(){this.instructions=Array(320);for(var e=321,t=319,n=t,r=-1,i=0;i<e;i++)switch(i%4){case 0:for(var c=[],u=0;u<t;u++)void 0==this.instructions[u]&&c.push(u);0!=c.length?(n=c[this.getRndInteger(0,c.length-1)],0!=i?this.instructions[t]={page_id:Math.floor(t/10),address:t,next_address:n,status:"未执行"}:r=n,t=n):e++;break;case 1:var s=!0;while(s)n=(n+1)%320,void 0==this.instructions[n]&&(this.instructions[t]={page_id:Math.floor(t/10),address:t,next_address:n,status:"未执行"},t=n,s=!1);break;case 2:for(var a=[],o=t+1;o<320;o++)void 0==this.instructions[o]&&a.push(o);0!=a.length?(n=a[this.getRndInteger(0,a.length-1)],this.instructions[t]={page_id:Math.floor(t/10),address:t,next_address:n,status:"未执行"},t=n):e++;break;case 3:var l=!0;while(l)n=(n+1)%320,void 0==this.instructions[n]&&(this.instructions[t]={page_id:Math.floor(t/10),address:t,next_address:n,status:"未执行"},t=n,l=!1);break}this.currentInstId=r},getRndInteger:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},conductOneStep:function(){if(this.haveConductStepNum<=319){switch(this.haveConductStepNum++,this.currentAlgorithm){case"FIFO":this.conductOneFIFO();break;case"LRU":this.conductOneLRU();break}this.instructions[this.currentInstId].status="已执行",this.currentInstId=this.instructions[this.currentInstId].next_address}},conductOneFIFO:function(){for(var e=Math.floor(this.currentInstId/10),t=-1,n=0;n<this.memoryFrames.length;n++)this.memoryFrames[n].pageId==e&&(t=n);-1==t&&(this.missStepNum+=1,t=this.unloadOneFIFOPage()),this.loadOnePage(t,e)},conductOneLRU:function(){for(var e=Math.floor(this.currentInstId/10),t=-1,n=0;n<this.memoryFrames.length;n++)this.memoryFrames[n].pageId==e&&(t=n);-1==t?(this.missStepNum+=1,t=this.unloadOneLRUPage()):(this.LRUTime++,console.log(t),this.memoryFrames[t].LRUTime=this.LRUTime),this.loadOnePage(t,e)},unloadOneFIFOPage:function(){for(var e=0,t=this.memoryFrames[0].FIFOTime,n=0;n<this.memoryFrames.length;n++)t>this.memoryFrames[n].FIFOTime&&(e=n,t=this.memoryFrames[n].FIFOTime);return e},unloadOneLRUPage:function(){for(var e=0,t=this.memoryFrames[0].FIFOTime,n=0;n<this.memoryFrames.length;n++)t>this.memoryFrames[n].LRUTime&&(e=n,t=this.memoryFrames[n].LRUTime);return e},loadOnePage:function(e,t){for(var n=[],r=10*t;r<10*(t+1);r++)n.push(this.instructions[r]);this.LRUTime++,this.FIFOTime++,this.memoryFrames[e]={pageId:t,instructions:n,FIFOTime:this.FIFOTime,LRUTime:this.LRUTime}},autoExecute:function(){var e=this;this.isAutoExecuting=!0;var t=setInterval((function(){320==e.haveConductStepNum||0==e.isAutoExecuting||1==e.isPaused?clearInterval(t):(e.conductOneStep(),console.log(e.haveConductStepNum))}),this.realSpeed)},pause:function(){this.isAutoExecuting=!1,this.isPaused=!0},continueExecute:function(){this.isAutoExecuting=!0,this.isPaused=!1,this.autoExecute()}}});n("06d6");T.render=w,T.__scopeId="data-v-68a9cb03";var S=T,k={name:"App",components:{PageManagement:S}};n("faf8");k.render=c;var R=k,U=Object(r["h"])(R);U.use(i["a"]),U.mount("#app")},"7ebc":function(e,t,n){},db30:function(e,t,n){},faf8:function(e,t,n){"use strict";n("db30")}});
//# sourceMappingURL=app.72b6bcd2.js.map