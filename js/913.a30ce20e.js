(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[913],{1393:function(e,t,i){i(6573),i(8100),i(7936),i(7467),i(4732),i(9577),i(4979),i(4603),i(7566),i(8721),function(t,i){e.exports=i()}(0,(function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var a;function s(e){return["image/png","image/jpeg","image/gif"].some((t=>t===e))}i.r(t),i.d(t,"canvastoDataURL",(function(){return o})),i.d(t,"canvastoFile",(function(){return l})),i.d(t,"dataURLtoFile",(function(){return u})),i.d(t,"dataURLtoImage",(function(){return d})),i.d(t,"downloadFile",(function(){return c})),i.d(t,"filetoDataURL",(function(){return h})),i.d(t,"imagetoCanvas",(function(){return g})),i.d(t,"urltoBlob",(function(){return f})),i.d(t,"urltoImage",(function(){return m})),i.d(t,"compress",(function(){return y})),i.d(t,"compressAccurately",(function(){return k})),i.d(t,"EImageType",(function(){return a})),function(e){e.PNG="image/png",e.JPEG="image/jpeg",e.GIF="image/gif"}(a||(a={}));var n=function(e,t,i,a){return new(i||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}))};function o(e,t=.92,i=a.JPEG){return n(this,void 0,void 0,(function*(){return s(i)||(i=a.JPEG),e.toDataURL(i,t)}))}function l(e,t=.92,i=a.JPEG){return new Promise((a=>e.toBlob((e=>a(e)),i,t)))}var r=function(e,t,i,a){return new(i||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}))};function u(e,t){return r(this,void 0,void 0,(function*(){const i=e.split(",");let a=i[0].match(/:(.*?);/)[1];const n=atob(i[1]);let o=n.length;const l=new Uint8Array(o);for(;o--;)l[o]=n.charCodeAt(o);return s(t)&&(a=t),new Blob([l],{type:a})}))}function d(e){return new Promise(((t,i)=>{const a=new Image;a.onload=()=>t(a),a.onerror=()=>i(new Error("dataURLtoImage(): dataURL is illegal")),a.src=e}))}function c(e,t){const i=document.createElement("a");i.href=window.URL.createObjectURL(e),i.download=t||Date.now().toString(36),document.body.appendChild(i);const a=document.createEvent("MouseEvents");a.initEvent("click",!1,!1),i.dispatchEvent(a),document.body.removeChild(i)}function h(e){return new Promise((t=>{const i=new FileReader;i.onloadend=e=>t(e.target.result),i.readAsDataURL(e)}))}var p=function(e,t,i,a){return new(i||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}))};function g(e,t={}){return p(this,void 0,void 0,(function*(){const i=Object.assign({},t),a=document.createElement("canvas"),s=a.getContext("2d");let n,o;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Number(i[e]));if(i.scale){const t=i.scale>0&&i.scale<10?i.scale:1;o=e.width*t,n=e.height*t}else o=i.width||i.height*e.width/e.height||e.width,n=i.height||i.width*e.height/e.width||e.height;switch([5,6,7,8].some((e=>e===i.orientation))?(a.height=o,a.width=n):(a.height=n,a.width=o),i.orientation){case 3:s.rotate(180*Math.PI/180),s.drawImage(e,-a.width,-a.height,a.width,a.height);break;case 6:s.rotate(90*Math.PI/180),s.drawImage(e,0,-a.width,a.height,a.width);break;case 8:s.rotate(270*Math.PI/180),s.drawImage(e,-a.height,0,a.height,a.width);break;case 2:s.translate(a.width,0),s.scale(-1,1),s.drawImage(e,0,0,a.width,a.height);break;case 4:s.translate(a.width,0),s.scale(-1,1),s.rotate(180*Math.PI/180),s.drawImage(e,-a.width,-a.height,a.width,a.height);break;case 5:s.translate(a.width,0),s.scale(-1,1),s.rotate(90*Math.PI/180),s.drawImage(e,0,-a.width,a.height,a.width);break;case 7:s.translate(a.width,0),s.scale(-1,1),s.rotate(270*Math.PI/180),s.drawImage(e,-a.height,0,a.height,a.width);break;default:s.drawImage(e,0,0,a.width,a.height)}return a}))}function f(e){return fetch(e).then((e=>e.blob()))}function m(e){return new Promise(((t,i)=>{const a=new Image;a.onload=()=>t(a),a.onerror=()=>i(new Error("urltoImage(): Image failed to load, please check the image URL")),a.src=e}))}var b=function(e,t,i,a){return new(i||(i=Promise))((function(s,n){function o(e){try{r(a.next(e))}catch(e){n(e)}}function l(e){try{r(a.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((a=a.apply(e,t||[])).next())}))};function y(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({quality:t})),t.quality=Number(t.quality),Number.isNaN(t.quality))return e;const i=yield h(e);let n=i.split(",")[0].match(/:(.*?);/)[1],l=a.JPEG;s(t.type)&&(l=t.type,n=t.type);const r=yield d(i),c=yield g(r,Object.assign({},t)),p=yield o(c,t.quality,l),f=yield u(p,n);return f.size>e.size?e:f}))}function k(e,t={}){return b(this,void 0,void 0,(function*(){if(!(e instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if("object"!=typeof t&&(t=Object.assign({size:t})),t.size=Number(t.size),Number.isNaN(t.size))return e;if(1024*t.size>e.size)return e;t.accuracy=Number(t.accuracy),(!t.accuracy||t.accuracy<.8||t.accuracy>.99)&&(t.accuracy=.95);const i=t.size*(2-t.accuracy)*1024,n=1024*t.size,l=t.size*t.accuracy*1024,r=yield h(e);let c=r.split(",")[0].match(/:(.*?);/)[1],p=a.JPEG;s(t.type)&&(p=t.type,c=t.type);const f=yield d(r),m=yield g(f,Object.assign({},t));let b,y=.5;const k=[null,null];for(let e=1;e<=7;e++){b=yield o(m,y,p);const t=.75*b.length;if(7===e){(i<t||l>t)&&(b=[b,...k].filter((e=>e)).sort(((e,t)=>Math.abs(.75*e.length-n)-Math.abs(.75*t.length-n)))[0]);break}if(i<t)k[1]=b,y-=Math.pow(.5,e+1);else{if(!(l>t))break;k[0]=b,y+=Math.pow(.5,e+1)}}const w=yield u(b,c);return w.size>e.size?e:w}))}}])}))},6334:function(e,t,i){e.exports=i(1393)},8913:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ie}});var a=i(7377),s=(i(5331),i(7197),i(6810)),n=i(6768);const o={class:"page-footer"};function l(e,t){return(0,n.uX)(),(0,n.CE)("div",o,t[0]||(t[0]=[(0,n.Lk)("p",null,[(0,n.eW)("© 2024 Designed by "),(0,n.Lk)("a",{class:"footer-name",href:"https://github.com/MarSeventh",target:"_blank"},"SanyueQi"),(0,n.eW)(" for You!")],-1)]))}var r=i(1241);const u={},d=(0,r.A)(u,[["render",l],["__scopeId","data-v-7c801e22"]]);var c=d,h=i(683),p=i(2657),g=i(9655),f=i(2105),m=(i(9092),i(47)),b=i(1450),y=(i(9648),i(4253)),k=i(7358),w=i(813),L=i(4232);const v={key:0,class:"el-upload__text"},F={key:1,class:"el-upload__text"},U={class:"upload-list-dashboard"},C={class:"upload-list-dashboard-action"},_=["href"],I={key:0,style:{width:"10vw","border-radius":"12px"},controls:""},P=["src"],R=["src","onError"],x={class:"upload-list-item-content"},E={key:0,class:"upload-list-item-url"},M={class:"upload-list-item-url-row"},W={class:"upload-list-item-url-row"},j={key:1,class:"upload-list-item-progress"},S={class:"upload-list-item-action"};function z(e,t,i,a,s,o){const l=(0,n.g2)("CameraFilled"),r=(0,n.g2)("CopyDocument"),u=w.tk,d=k.j5,c=(0,n.g2)("List"),z=(0,n.g2)("Checked"),B=(0,n.g2)("Failed"),$=y.$g,O=(0,n.g2)("Grid"),T=m.S2,V=b.R7,A=(0,n.g2)("CircleClose"),D=m.fg,N=f.WK,X=g.ve,q=(0,n.g2)("Link"),G=(0,n.g2)("Delete"),J=p.kA,H=h.Ik;return(0,n.uX)(),(0,n.CE)("div",{class:"upload-form",onPaste:t[0]||(t[0]=(...e)=>o.handlePaste&&o.handlePaste(...e))},[(0,n.bF)(d,{class:(0,L.C4)(["upload-card",{"is-uploading":s.uploading,"upload-card-busy":s.fileList.length,"paste-mode":"paste"===i.uploadMethod}]),drag:"",multiple:"","http-request":o.uploadFile,onSuccess:o.handleSuccess,"on-error":o.handleError,"before-upload":o.beforeUpload,"on-progress":o.handleProgress,"file-list":s.fileList,"show-file-list":!1,accept:"image/*, video/*"},{tip:(0,n.k6)((()=>t[3]||(t[3]=[(0,n.Lk)("div",{class:"el-upload__tip"},"支持多文件上传，支持图片和视频，不超过20MB",-1)]))),default:(0,n.k6)((()=>[(0,n.bF)(u,{class:"el-icon--upload"},{default:(0,n.k6)((()=>["drag"===i.uploadMethod?((0,n.uX)(),(0,n.Wv)(l,{key:0,color:"blanchedalmond"})):((0,n.uX)(),(0,n.Wv)(r,{key:1,color:"blanchedalmond"}))])),_:1}),"drag"===i.uploadMethod?((0,n.uX)(),(0,n.CE)("div",v,t[1]||(t[1]=[(0,n.eW)("拖拽 或 "),(0,n.Lk)("em",null,"点击上传",-1)]))):((0,n.uX)(),(0,n.CE)("div",F,t[2]||(t[2]=[(0,n.eW)("复制 "),(0,n.Lk)("em",null,"粘贴",-1),(0,n.eW)(" 上传")])))])),_:1},8,["class","http-request","onSuccess","on-error","before-upload","on-progress","file-list"]),(0,n.bF)(H,{class:(0,L.C4)(["upload-list-card",{"upload-list-busy":s.fileList.length}])},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:(0,L.C4)(["upload-list-container",{"upload-list-busy":s.fileList.length}])},[(0,n.bF)(J,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",U,[(0,n.bF)($,{class:"upload-list-dashboard-title"},{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(c)])),_:1}),(0,n.eW)((0,L.v_)(o.uploadingCount+o.waitingCount)+" ",1),(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(z)])),_:1}),(0,n.eW)((0,L.v_)(o.uploadSuccessCount)+" ",1),(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(B)])),_:1}),(0,n.eW)((0,L.v_)(o.uploadErrorCount),1)])),_:1}),(0,n.Lk)("div",C,[(0,n.bF)(D,null,{default:(0,n.k6)((()=>[(0,n.bF)(V,{content:"整体复制",placement:"top"},{default:(0,n.k6)((()=>[(0,n.bF)(T,{type:"primary",round:"",onClick:o.copyAll,alt:"整体复制"},{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(O)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,n.bF)(V,{content:"清空列表",placement:"top"},{default:(0,n.k6)((()=>[(0,n.bF)(T,{type:"primary",round:"",onClick:o.clearFileList},{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(A)])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])]),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.fileList,(e=>((0,n.uX)(),(0,n.CE)("div",{class:"upload-list-item",key:e.name,span:8},[(0,n.Lk)("a",{href:e.url,target:"_blank"},[o.isVideo(e.name)?((0,n.uX)(),(0,n.CE)("video",I,[(0,n.Lk)("source",{src:e.url,type:"video/mp4"},null,8,P),t[4]||(t[4]=(0,n.eW)(" Your browser does not support the video tag. "))])):((0,n.uX)(),(0,n.CE)("img",{key:1,style:{width:"10vw","border-radius":"12px"},src:e.url,onError:t=>e.url="https://imgbed.sanyue.site/file/b6a4a65b4edba4377492e.png"},null,40,R))],8,_),(0,n.Lk)("div",x,[(0,n.bF)($,{class:"upload-list-item-name",truncated:""},{default:(0,n.k6)((()=>[(0,n.eW)((0,L.v_)(e.name),1)])),_:2},1024),"done"===e.status?((0,n.uX)(),(0,n.CE)("div",E,[(0,n.Lk)("div",M,[(0,n.bF)(N,{modelValue:e.finalURL,"onUpdate:modelValue":t=>e.finalURL=t,size:"small",readonly:"",onFocus:o.selectAllText},{prepend:(0,n.k6)((()=>t[5]||(t[5]=[(0,n.eW)("URL:")]))),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"]),(0,n.bF)(N,{modelValue:e.mdURL,"onUpdate:modelValue":t=>e.mdURL=t,size:"small",readonly:"",onFocus:o.selectAllText},{prepend:(0,n.k6)((()=>t[6]||(t[6]=[(0,n.eW)("MarkDown:")]))),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"])]),(0,n.Lk)("div",W,[(0,n.bF)(N,{modelValue:e.htmlURL,"onUpdate:modelValue":t=>e.htmlURL=t,size:"small",readonly:"",onFocus:o.selectAllText},{prepend:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("HTML:")]))),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"]),(0,n.bF)(N,{modelValue:e.ubbURL,"onUpdate:modelValue":t=>e.ubbURL=t,size:"small",readonly:"",onFocus:o.selectAllText},{prepend:(0,n.k6)((()=>t[8]||(t[8]=[(0,n.eW)("BBCode:")]))),_:2},1032,["modelValue","onUpdate:modelValue","onFocus"])])])):((0,n.uX)(),(0,n.CE)("div",j,[(0,n.bF)(X,{percentage:e.progreess,status:e.status,"show-text":!1},null,8,["percentage","status"])]))]),(0,n.Lk)("div",S,[(0,n.bF)(T,{type:"primary",circle:"",class:"upload-list-item-action-button",onClick:t=>o.handleCopy(e)},{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(q)])),_:1})])),_:2},1032,["onClick"]),(0,n.bF)(T,{type:"danger",circle:"",class:"upload-list-item-action-button",onClick:t=>o.handleRemove(e)},{default:(0,n.k6)((()=>[(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(G)])),_:1})])),_:2},1032,["onClick"])])])))),128))])),_:1})],2)])),_:1},8,["class"])],32)}i(4114),i(4603),i(7566),i(8721);var B=i(4373),$=i(4570),O=i.n($),T=i(6334),V={name:"UploadForm",props:{selectedUrlForm:{type:String,default:"url",required:!1},uploadMethod:{type:String,default:"drag",required:!1}},data(){return{fileList:[],uploading:!1,maxUploading:10,waitingList:[]}},computed:{uploadSuccessCount(){return this.fileList.filter((e=>"done"===e.status||"success"===e.status)).length},uploadErrorCount(){return this.fileList.filter((e=>"exception"===e.status)).length},uploadingCount(){return this.fileList.filter((e=>"uploading"===e.status)).length},waitingCount(){return this.waitingList.length}},methods:{uploadFile(e){if(this.uploadingCount>this.maxUploading)return this.waitingList.push(e),void(this.fileList.find((t=>t.uid===e.file.uid)).status="waiting");this.fileList.find((t=>t.uid===e.file.uid)).status="uploading";const t=new FormData;t.append("file",e.file),(0,B.A)({url:"/upload?authCode="+O().get("authCode"),method:"post",data:t,onUploadProgress:t=>{const i=Math.round(t.loaded/t.total*100);e.onProgress({percent:i,file:e.file})}}).then((t=>{e.onSuccess(t,e.file)})).catch((t=>{t.response&&401===t.response.status?(this.waitingList=[],this.fileList=[],this.$message.error("认证状态错误！"),this.$router.push("/login")):e.onError(t,e.file)})).finally((()=>{this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)}))},handleRemove(e){this.fileList=this.fileList.filter((t=>t.uid!==e.uid)),this.$message({type:"info",message:e.name+"已删除"})},handleSuccess(e,t){try{const i=`${window.location.protocol}//${window.location.host}`;this.fileList.find((e=>e.uid===t.uid)).url=i+e.data[0].src,this.fileList.find((e=>e.uid===t.uid)).finalURL=i+e.data[0].src,this.fileList.find((e=>e.uid===t.uid)).mdURL=`![${t.name}](${i+e.data[0].src})`,this.fileList.find((e=>e.uid===t.uid)).htmlURL=`<img src="${i+e.data[0].src}" alt="${t.name}" width=100% />`,this.fileList.find((e=>e.uid===t.uid)).ubbURL=`[img]${i+e.data[0].src}[/img]`,this.fileList.find((e=>e.uid===t.uid)).progreess=100,this.fileList.find((e=>e.uid===t.uid)).status="success",this.$message({type:"success",message:t.name+"上传成功"}),setTimeout((()=>{this.fileList.find((e=>e.uid===t.uid)).status="done"}),1e3)}catch(i){this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception"}finally{if(this.uploadingCount+this.waitingCount===0&&(this.uploading=!1),this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}}},handleError(e,t){if(this.$message.error(t.name+"上传失败"),this.fileList.find((e=>e.uid===t.uid)).status="exception",this.waitingList.length){const e=this.waitingList.shift();this.uploadFile(e)}this.uploadingCount+this.waitingCount===0&&(this.uploading=!1)},handleCopy(e){const t=this.fileList.find((t=>t.uid===e.uid)).status;"done"===t||"success"===t?("url"===this.selectedUrlForm?navigator.clipboard.writeText(e.finalURL):"md"===this.selectedUrlForm?navigator.clipboard.writeText(e.mdURL):"html"===this.selectedUrlForm?navigator.clipboard.writeText(e.htmlURL):"ubb"===this.selectedUrlForm?navigator.clipboard.writeText(e.ubbURL):navigator.clipboard.writeText(e.finalURL),this.$message({type:"success",message:"复制成功"})):this.$message({type:"warning",message:"文件未上传成功，无法复制链接"})},beforeUpload(e){return new Promise(((t,i)=>{const a=e.size/1024/1024<5,s=e.size/1024/1024<20;if(!a&&e.type.includes("image"))T.compressAccurately(e,4096).then((a=>{a.size/1024/1024>20&&(this.$message.error(e.name+"压缩后文件过大，无法上传!"),i("文件过大")),this.uploading=!0;const s=new File([a],e.name,{type:a.type});s.uid=e.uid;const n=URL.createObjectURL(s);this.fileList.push({uid:e.uid,name:e.name,url:n,finalURL:"",mdURL:"",htmlURL:"",ubbURL:"",status:"uploading",progreess:0}),t(s)})).catch((t=>{this.$message.error(e.name+"文件过大且压缩失败，无法上传!"),i(t)}));else if(s){this.uploading=!0;const i=URL.createObjectURL(e);this.fileList.push({uid:e.uid,name:e.name,url:i,finalURL:"",mdURL:"",htmlURL:"",ubbURL:"",status:"uploading",progreess:0}),t(e)}else this.$message.error(e.name+"文件过大，无法上传!"),i("文件过大")}))},handleProgress(e){this.fileList.find((t=>t.uid===e.file.uid)).progreess=e.percent},copyAll(){if("url"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}else if("md"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.mdURL})).join("\n");navigator.clipboard.writeText(e)}else if("html"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.htmlURL})).join("\n");navigator.clipboard.writeText(e)}else if("ubb"===this.selectedUrlForm){const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.ubbURL})).join("\n");navigator.clipboard.writeText(e)}else{const e=this.fileList.map((e=>{if("done"===e.status||"success"===e.status)return e.finalURL})).join("\n");navigator.clipboard.writeText(e)}this.$message({type:"success",message:"整体复制成功"})},clearFileList(){this.fileList=[],this.$message({type:"info",message:"列表已清空"})},handlePaste(e){if("paste"!==this.uploadMethod)return;const t=e.clipboardData.items;for(let i=0;i<t.length;i++)if("file"===t[i].kind){const e=t[i].getAsFile();if(e.type.includes("image")||e.type.includes("video")){e.uid=Date.now()+i,e.file=e;const t=this.beforeUpload(e);t instanceof Promise&&t.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))}else this.$message({type:"warning",message:"粘贴板中的文件不是图片或视频"})}else"string"===t[i].kind&&t[i].getAsString((e=>{const t=/^(https?:\/\/[^\s$.?#].[^\s]*)$/;t.test(e)&&fetch("/api/fetchRes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((e=>{const t=e.headers.get("content-type");if(200==e.status&&(t.includes("image")||t.includes("video")))return e.blob();throw new Error("URL地址的内容不是图片或视频")})).then((t=>{let a=e.split(".").pop();["jpg","jpeg","png","gif","bmp","webp","mp4","webm","ogg","mkv"].includes(a)||(a="jpeg");const s="PastedFile"+Date.now()+i+"."+a,n=new File([t],s,{type:t.type});n.uid=Date.now()+i,n.file=n;const o=this.beforeUpload(n);o instanceof Promise&&o.then((e=>{e instanceof File&&this.uploadFile({file:e,onProgress:e=>this.handleProgress(e),onSuccess:(e,t)=>this.handleSuccess(e,t),onError:(e,t)=>this.handleError(e,t)})})).catch((e=>{console.log(e)}))})).catch((e=>{this.$message({type:"warning",message:"粘贴板中的URL地址的内容不是图片或视频"})}))}))},selectAllText(e){e.target.select()},isImage(e){const t=["jpg","jpeg","png","gif","bmp","webp"],i=e.split(".").pop().toLowerCase();return t.includes(i)},isVideo(e){const t=["mp4","webm","ogg","mkv"],i=e.split(".").pop().toLowerCase();return t.includes(i)}}};const A=(0,r.A)(V,[["render",z],["__scopeId","data-v-e1c50a46"]]);var D=A;const N={class:"upload-home"},X={class:"toolbar"},q={class:"header"},G={href:"https://github.com/MarSeventh/CloudFlare-ImgBed"},J=["src"],H={class:"main-title",href:"https://github.com/MarSeventh/CloudFlare-ImgBed",target:"_blank"},K={class:"dialog-action"};function Q(e,t,i,o,l,r){const u=(0,n.g2)("Refresh"),d=w.tk,h=m.S2,p=b.R7,g=(0,n.g2)("Connection"),f=(0,n.g2)("Tools"),y=(0,n.g2)("Close"),k=D,v=c,F=s.ll,U=s.MQ,C=a.kZ;return(0,n.uX)(),(0,n.CE)("div",N,[t[9]||(t[9]=(0,n.Lk)("img",{id:"bg1",class:"background-image1",alt:"Background Image"},null,-1)),t[10]||(t[10]=(0,n.Lk)("img",{id:"bg2",class:"background-image2",alt:"Background Image"},null,-1)),(0,n.Lk)("div",X,[(0,n.bF)(p,{content:"上传方式",placement:"left"},{default:(0,n.k6)((()=>[(0,n.bF)(h,{class:"toolbar-button",size:"large",type:"info",onClick:r.changeUploadMethod,circle:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,{size:"large"},{default:(0,n.k6)((()=>[(0,n.bF)(u)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,n.bF)(p,{content:"链接格式",placement:"left"},{default:(0,n.k6)((()=>[(0,n.bF)(h,{class:"toolbar-button",size:"large",type:"success",onClick:r.openUrlDialog,circle:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,{size:"large"},{default:(0,n.k6)((()=>[(0,n.bF)(g)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,n.bF)(p,{content:"管理页面",placement:"left"},{default:(0,n.k6)((()=>[(0,n.bF)(h,{class:"toolbar-button",size:"large",type:"primary",onClick:r.handleManage,circle:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,{size:"large"},{default:(0,n.k6)((()=>[(0,n.bF)(f)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,n.bF)(p,{content:"退出登录",placement:"left"},{default:(0,n.k6)((()=>[(0,n.bF)(h,{class:"toolbar-button",size:"large",type:"danger",onClick:r.handleLogout,circle:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,{size:"large"},{default:(0,n.k6)((()=>[(0,n.bF)(y)])),_:1})])),_:1},8,["onClick"])])),_:1})]),(0,n.Lk)("div",q,[(0,n.Lk)("a",G,[(0,n.Lk)("img",{class:"logo",alt:"Sanyue logo",src:r.logoUrl},null,8,J)]),(0,n.Lk)("h1",null,[(0,n.Lk)("a",H,(0,L.v_)(r.ownerName),1),t[3]||(t[3]=(0,n.eW)(" ImgHub"))])]),(0,n.bF)(k,{selectedUrlForm:l.selectedUrlForm,uploadMethod:l.uploadMethod,class:"upload"},null,8,["selectedUrlForm","uploadMethod"]),(0,n.bF)(v),(0,n.bF)(C,{title:"选择复制链接格式",modelValue:l.showUrlDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>l.showUrlDialog=e),width:"40%","show-close":!1},{default:(0,n.k6)((()=>[(0,n.bF)(U,{modelValue:l.selectedUrlForm,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedUrlForm=e)},{default:(0,n.k6)((()=>[(0,n.bF)(F,{value:"url"},{default:(0,n.k6)((()=>t[4]||(t[4]=[(0,n.eW)("原始链接")]))),_:1}),(0,n.bF)(F,{value:"md"},{default:(0,n.k6)((()=>t[5]||(t[5]=[(0,n.eW)("MarkDown")]))),_:1}),(0,n.bF)(F,{value:"html"},{default:(0,n.k6)((()=>t[6]||(t[6]=[(0,n.eW)("HTML")]))),_:1}),(0,n.bF)(F,{value:"ubb"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("BBCode")]))),_:1})])),_:1},8,["modelValue"]),(0,n.Lk)("div",K,[(0,n.bF)(h,{type:"primary",onClick:t[1]||(t[1]=e=>l.showUrlDialog=!1)},{default:(0,n.k6)((()=>t[8]||(t[8]=[(0,n.eW)("确定")]))),_:1})])])),_:1},8,["modelValue"])])}var Y=i(144),Z=i(782),ee={name:"UploadHome",data(){return{selectedUrlForm:(0,Y.KR)("url"),uploadMethod:(0,Y.KR)("drag"),showUrlDialog:!1,bingWallPaperIndex:0,customWallPaperIndex:0}},computed:{...(0,Z.L8)(["userConfig","bingWallPapers"]),ownerName(){return this.userConfig?.ownerName||"Sanyue"},logoUrl(){return this.userConfig?.logoUrl||i(3153)},bkInterval(){return this.userConfig?.bkInterval||3e3},bkOpacity(){return this.userConfig?.bkOpacity||1}},mounted(){const e=document.getElementById("bg1"),t=document.getElementById("bg2");"bing"===this.userConfig?.uploadBkImg?this.$store.dispatch("fetchBingWallPapers").then((()=>{e.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,e.onload=()=>{e.style.opacity=this.bkOpacity},setInterval((()=>{let i=0!=e.style.opacity?e:t,a=0!=e.style.opacity?t:e;i.style.opacity=0,this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length,a.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,a.onload=()=>{a.style.opacity=this.bkOpacity}}),this.bkInterval)})):this.userConfig?.uploadBkImg instanceof Array&&this.userConfig?.uploadBkImg?.length>1?(e.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],e.onload=()=>{e.style.opacity=this.bkOpacity},setInterval((()=>{let i=0!=e.style.opacity?e:t,a=0!=e.style.opacity?t:e;i.style.opacity=0,this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.uploadBkImg.length,a.src=this.userConfig.uploadBkImg[this.customWallPaperIndex],a.onload=()=>{a.style.opacity=this.bkOpacity}}),this.bkInterval)):this.userConfig?.uploadBkImg instanceof Array&&1==this.userConfig?.uploadBkImg.length?(e.src=this.userConfig.uploadBkImg[0],e.onload=()=>{e.style.opacity=this.bkOpacity}):(e.src="https://imgbed.sanyue.site/file/0dbd5add3605a0b2e8994.jpg",e.onload=()=>{e.style.opacity=this.bkOpacity})},components:{UploadForm:D,Footer:c},methods:{handleManage(){window.location.href="/admin"},openUrlDialog(){this.showUrlDialog=!0},changeUploadMethod(){this.uploadMethod="drag"===this.uploadMethod?"paste":"drag"},handleLogout(){O().remove("authCode"),this.$router.push("/login"),this.$message.success("已退出登录~")}}};const te=(0,r.A)(ee,[["render",Q],["__scopeId","data-v-3cf53ad2"]]);var ie=te},3153:function(e,t,i){"use strict";e.exports=i.p+"img/logo.e8dbfa27.png"}}]);
//# sourceMappingURL=913.a30ce20e.js.map