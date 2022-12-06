import{d as T,k as f,s as S,l as W,o as l,c as i,e as o,a as h,w as b,m as n,b as u,j as s,t,r as M,n as E}from"./app.51d29824.js";import{b as v}from"./route-block.023af118.js";const G={class:"flex flex-col items-center"},$=u("p",{class:"text-2xl m-4",style:{"font-size":"2.3rem"}},"Payment",-1),z={key:0},P=u("br",null,null,-1),V=u("p",null,"Only for Metamask --Goerli network.",-1),O={key:2,class:"outsidebox"},j=u("span",{class:"hide"},"\uFF5E",-1),H=u("span",{class:"hide"},"\uFF5E",-1),I=u("br",null,null,-1),R={class:"MsoNormal"},q={class:"mt-10 MsoNormal",style:{"font-size":"28px"}},J=u("p",null,"(\u8F38\u5165\u55AE\u4F4D: TWD)",-1),K=u("br",null,null,-1),L=u("br",null,null,-1),Q=u("p",null," \u2003",-1),U=u("p",{class:"link-top"},null,-1),X=u("br",null,null,-1),Y={class:"MsoNormal",style:{border:"solid #a9b4bea9 1px"}},Z={key:0,class:"hide"},uu=u("br",null,null,-1),ou={key:1,class:"show box"},tu=u("br",null,null,-1),su=u("br",null,null,-1),eu={class:"box"},nu={key:0},lu={class:"tit2"},iu=u("span",{class:"show"},[u("br"),s("\u2003\u2003")],-1),cu=u("p",{class:"link-top",style:{"border-top":"solid #a9b4bea9 2px"}},null,-1),du=u("br",null,null,-1),ru=u("p",{style:{"font-size":"1.35rem"}},"\u4ED8\u6B3E\u8A73\u60C5",-1),_u=u("br",null,null,-1),au=u("br",null,null,-1),pu=u("br",null,null,-1),hu={key:0},bu={key:1},Eu={class:"box"},mu={class:"m-4"},Fu=u("p",null," \u2003",-1),Du={key:3,class:"outsidebox"},Bu=u("p",{style:{"font-size":"1.8rem"}},"Hello, owner !",-1),fu=u("br",null,null,-1),vu=u("p",null,"\u975E\u5FC5\u8981\u6C92\u4E8B\u6700\u597D\u4E0D\u8981\u624B\u6309\u5E95\u4E0B\u6309\u9215",-1),yu=u("p",null," \u2003",-1),ku={style:{"word-break":"break-all"}},Cu={style:{float:"right"}},wu=T({__name:"Buyingcart",setup(xu){const y=f(),{deposit:k,itemcost:C,connectWallet:m,new_onSign:F,new_count:w}=f(),{discount:_,showTWDtoEth:x,showDisGwei:A,sum:c,disSum:D,account:r,showTWDtoGwei:g,TWDtoEth:B,count:N}=S(y),a=W(0);return(Au,e)=>{const p=M("P");return l(),i("div",G,[$,o(r)?n("v-if",!0):(l(),i("div",z,[h(p,{class:"MsoNormal"},{default:b(()=>[s("\uFF5E\uFF5E\u3002\u91CC\u5409\u62FF\u4ED8\u6B3E\u3002\uFF5E\uFF5E")]),_:1}),h(p,{class:"MsoNormal"},{default:b(()=>[s("\u9EDE\u64CA\u4E0B\u65B9\u6A59\u8272\u6309\u9215\u9023\u7D50\u9322\u5305\u767B\u5165\u4ED8\u6B3E")]),_:1}),P,V])),o(r)?n("v-if",!0):(l(),i("button",{key:1,class:"bg-amber-600 rounded p-4 b-color",onClick:e[0]||(e[0]=(...d)=>o(m)&&o(m)(...d))}," Connect Wallet ")),o(r)?(l(),i("div",O,[h(p,{class:"tit1"},{default:b(()=>[j,s("\uFF5E\u3002\u91CC\u5409\u62FF\u4ED8\u6B3E\u3002\uFF5E"),H]),_:1}),I,u("p",R,[s("\u60A8\u6301\u6709\u672C\u5E97NFT\u6578\u91CF\u70BA:\xA0"),u("span",null,t(o(c)),1),s("\xA0\u500B")]),n(` <input\r
        v-model="getAmount"\r
        :style="{ width: '100px' }"\r
        name="AmountInfo"\r
        class="py-4 px-4 shadow border rounded"\r
        maxlength="15"\r
      > `),u("p",q,"\u53F0\u5E63\u91D1\u984D: "+t(o(E).totalPrice)+" \u5143",1),u("button",{class:"bg-slate-500 rounded p-4 mt-2 b-color",onClick:e[1]||(e[1]=d=>o(C)(a.value))}," \u91D1\u984D\u78BA\u8A8D "),J,K,u("p",null,"Show TWD to Gwei: "+t(o(g))+" gwei",1),u("p",null,"Show TWD to Ether: "+t(o(x))+" ether",1),L,Q,U,X,u("div",Y,[o(c)!==0?(l(),i("p",Z,[s("(\u6301\u6709NFT: "+t(o(c))+"\u500B\uFF0C\u53EF\u6298\u62B5\u65B0\u53F0\u5E63 "+t(o(D))+" \u5143)",1),uu])):n("v-if",!0),o(c)!==0?(l(),i("p",ou,[s("(\u6301\u6709NFT: "+t(o(c))+"\u500B)",1),tu,s("=> \u53EF\u6298\u62B5\u65B0\u53F0\u5E63 "+t(o(D))+" \u5143",1),su])):n("v-if",!0),u("div",eu,[n(` <input id="checkbox" v-model="checked" type="checkbox">\r
          <span class="MsoNormal">&emsp;\u4F7F\u7528NFT\u9032\u884C\u6298\u50F9&emsp;</span> `),o(c)!==0?(l(),i("div",nu,[u("p",lu,[s("\u6703\u54E1\u512A\u60E0\u50F9:"),iu,s("\u2003\u65B0\u53F0\u5E63 "+t(o(_))+" \u5143",1)]),cu,du])):n("v-if",!0),ru,u("p",null,[_u,s("\u65B0\u53F0\u5E63\u4ED8\u6B3E\u91D1\u984D: "+t(o(_))+" \u5143",1),au,s("\u63DB\u7B97Gwei: "+t(o(A))+" gwei",1),pu,s("\u63DB\u7B97\u4E59\u592A\u5E63: "+t(o(B))+" ether ",1)])])]),o(c)!==0?(l(),i("div",hu,[u("button",{class:"bg-cyan-600 rounded p-4 mt-10 b-color",onClick:e[2]||(e[2]=d=>o(F)(o(_)))}," \u78BA\u8A8D\u7C3D\u540D(\u6703\u54E1) ")])):n("v-if",!0),o(c)===0?(l(),i("div",bu,[u("button",{class:"bg-cyan-600 rounded p-4 mt-10 b-color",onClick:e[3]||(e[3]=d=>o(F)(a.value))}," \u78BA\u8A8D\u7C3D\u540D ")])):n("v-if",!0),u("div",Eu,[u("p",mu,"Signature : "+t(o(E).Sig),1)]),u("button",{class:"bg-red-600 rounded p-4 mt-10 b-color",onClick:e[4]||(e[4]=d=>o(k)(a.value))}," \u78BA\u8A8D\u4ED8\u6B3E "),u("p",null,"Show TWD to Eth: "+t(o(B))+" ether",1),Fu])):n("v-if",!0),o(r)&&o(E).Onlyowner===o(r)?(l(),i("div",Du,[Bu,fu,vu,u("button",{class:"bg-red-500 rounded p-4 mt-10 b-color",onClick:e[5]||(e[5]=d=>o(w)())}," nonce +1 "),yu,u("div",ku,[u("p",Cu,"nonce: "+t(o(N)),1)])])):n("v-if",!0)])}}});typeof v=="function"&&v(wu);export{wu as default};
