import{D as e,E as t,G as n,H as r,L as i,R as a,T as o,V as s,c,d as l,ft as u,g as d,h as f,j as p,k as m,l as h,m as g,pt as _,r as v,s as y,w as b,z as x}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as S}from"./index-DHgvQBhl.js";import{t as C}from"./DemoCompare-Bd6h8ThJ.js";var w=`/* 측정 틀: 오른쪽에 실제 간격 눈금을 표시할 공간을 둡니다. */
.demo-mc-stage {
  position: relative;
  min-width: 220px;
  padding-right: 64px;
  font-size: 12px;
}

/* 1) 형제 사이: 위 상자의 margin-bottom과 아래 상자의 margin-top이 만납니다. */
.demo-mc-stack {
  display: flex;
  flex-direction: column; /* flex 항목끼리는 margin이 합쳐지지 않습니다. */
}
.demo-mc-box {
  margin: 0;
  padding: 10px 12px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
}
.demo-mc-box-top {
  margin-bottom: 20px;
}
.demo-mc-box-bottom {
  margin-top: 30px;
}

/* 2) 첫 자식이 부모 밖으로: 카드 위쪽에 border·padding이 없습니다. */
.demo-mc-lead {
  margin: 0 0 20px;
}
.demo-mc-card {
  display: flow-root; /* 새 블록 서식 맥락(BFC): 제목 margin이 카드 안에 머뭅니다. */
  padding: 0 12px 12px; /* 위쪽 padding 없음 */
  border-radius: 6px;
  background: #eaf0ff;
}
.demo-mc-card-title {
  margin: 30px 0 6px;
  font-weight: 700;
}
.demo-mc-card-text {
  margin: 0;
}

/* 비교를 위한 문제 상태: 일반 블록 흐름으로 되돌립니다. */
.is-problem .demo-mc-stack {
  display: block;
}
.is-problem .demo-mc-card {
  display: block;
}

/* 확인용 표시: margin 영역(주황)과 실제 간격 눈금 */
.demo-mc-guide {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.demo-mc-margin {
  position: absolute;
  background: rgba(246, 166, 92, 0.35);
  outline: 1px dashed #e8590c;
  outline-offset: -1px;
}
.demo-mc-ruler {
  position: absolute;
  right: 48px;
  width: 8px;
  border: 2px solid #c2410c;
  border-left: 0;
  box-sizing: border-box;
}
.demo-mc-ruler-label {
  position: absolute;
  top: 50%;
  left: 12px;
  color: #c2410c;
  font-weight: 700;
  white-space: nowrap;
  transform: translateY(-50%);
}
.demo-mc-readout {
  margin: 12px 0 0;
  font-size: 12px;
}
`,T=[{value:`sibling`,label:`형제 사이`,aLabel:`위 상자 margin-bottom`,bLabel:`아래 상자 margin-top`,problem:{code:`display: block`,note:`두 margin 중 큰 값 하나만 간격이 됩니다.`},solved:{code:`display: flex; flex-direction: column`,note:`flex 항목의 margin은 합쳐지지 않아 두 값이 더해집니다.`}},{value:`parent`,label:`첫 자식이 부모 밖으로`,aLabel:`안내 문구 margin-bottom`,bLabel:`카드 제목 margin-top`,problem:{code:`display: block`,note:`제목의 margin이 카드 밖으로 빠져, 카드 배경이 아래로 밀립니다.`},solved:{code:`display: flow-root`,note:`제목의 margin이 카드 배경 안에 머뭅니다.`}}],E=[{label:`CSS`,language:`css`,code:w},{label:`HTML`,language:`xml`,code:`<!-- 1) 형제 사이 -->
<div class="demo-mc-stack">
  <div class="demo-mc-box demo-mc-box-top">공지 박스</div>
  <div class="demo-mc-box demo-mc-box-bottom">상품 목록</div>
</div>

<!-- 2) 첫 자식이 부모 밖으로 -->
<div class="demo-mc-lead">섹션 안내 문구</div>
<div class="demo-mc-card">
  <div class="demo-mc-card-title">카드 제목</div>
  <p class="demo-mc-card-text">카드 본문</p>
</div>`},{label:`권장 패턴`,language:`css`,code:`/* 권장 1) 간격을 부모의 gap 한 곳에서 정합니다. */
.page-stack {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.page-stack > * {
  margin: 0; /* 자식은 바깥 여백을 갖지 않습니다. */
}

/* 권장 2) 블록 흐름이라면 margin은 아래 방향만 씁니다. */
.section {
  margin: 0 0 40px;
}
.section:last-child {
  margin-bottom: 0;
}

/* 권장 3) 카드 안쪽 여백은 부모의 padding으로 정합니다. */
.card {
  padding: 20px;
}
.card > :first-child {
  margin-top: 0;
}`}],D={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-mc-label`},O=[`aria-checked`,`onClick`],k={for:`demo-mc-a`},A={for:`demo-mc-b`},j={key:0,class:`demo-mc-stack`},M={class:`demo-mc-card`},N={class:`demo-mc-guide`,"aria-hidden":`true`},P={class:`demo-mc-ruler-label`},F={key:0,class:`demo-mc-readout`},I={key:1,class:`demo-mc-readout`},L={__name:`MarginCollapseDemo`,setup(d){let p=r(T[0].value),g=r(20),w=r(30),E=y(()=>T.find(e=>e.value===p.value)),L=e=>e?`solved`:`problem`,R=e=>`${Math.round(e)}px`,z=e=>({top:e.top+`px`,left:e.left+`px`,width:e.width+`px`,height:e.height+`px`}),B={},V=()=>({margins:[],rulers:[],gap:0,inner:0}),H=s({problem:V(),solved:V()}),U=null;function W(e,t){let n=e.getBoundingClientRect();return{top:n.top-t.top,bottom:n.bottom-t.top,left:n.left-t.left,width:n.width}}function G(e,t){return parseFloat(getComputedStyle(e)[t])||0}function K(){for(let e of[`problem`,`solved`]){let t=B[e];if(!t)continue;let n=t.getBoundingClientRect();if(p.value===`sibling`){let r=t.querySelector(`.demo-mc-box-top`),i=t.querySelector(`.demo-mc-box-bottom`);if(!r||!i)continue;let a=W(r,n),o=W(i,n),s=G(r,`marginBottom`),c=G(i,`marginTop`),l=o.top-a.bottom;H[e]={margins:[{top:a.bottom,left:a.left,width:a.width,height:s},{top:o.top-c,left:o.left,width:o.width,height:c}],rulers:[{top:a.bottom,height:l}],gap:l,inner:0}}else{let r=t.querySelector(`.demo-mc-lead`),i=t.querySelector(`.demo-mc-card`),a=t.querySelector(`.demo-mc-card-title`);if(!r||!i||!a)continue;let o=W(r,n),s=W(i,n),c=W(a,n),l=G(r,`marginBottom`),u=G(a,`marginTop`);H[e]={margins:[{top:o.bottom,left:o.left,width:o.width,height:l},{top:c.top-u,left:c.left,width:c.width,height:u}],rulers:[{top:o.bottom,height:s.top-o.bottom},{top:s.top,height:c.top-s.top}],gap:s.top-o.bottom,inner:c.top-s.top}}}}return i([p,g,w],()=>b(K)),t(()=>{K(),`ResizeObserver`in window&&(U=new ResizeObserver(()=>K()),Object.values(B).forEach(e=>e&&U.observe(e)))}),o(()=>U?.disconnect()),(t,r)=>(e(),h(C,{problem:E.value.problem,solved:E.value.solved},{controls:a(()=>[r[2]||=c(`span`,{id:`demo-mc-label`,class:`demo-label`},`상황`,-1),c(`div`,D,[(e(!0),l(v,null,m(n(T),t=>(e(),l(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":p.value===t.value,onClick:e=>p.value=t.value},_(t.label),9,O))),128))]),c(`label`,k,[f(_(E.value.aLabel)+` `,1),c(`strong`,null,_(g.value)+`px`,1)]),x(c(`input`,{id:`demo-mc-a`,"onUpdate:modelValue":r[0]||=e=>g.value=e,type:`range`,min:`0`,max:`40`,step:`2`},null,512),[[S,g.value,void 0,{number:!0}]]),c(`label`,A,[f(_(E.value.bLabel)+` `,1),c(`strong`,null,_(w.value)+`px`,1)]),x(c(`input`,{id:`demo-mc-b`,"onUpdate:modelValue":r[1]||=e=>w.value=e,type:`range`,min:`0`,max:`40`,step:`2`},null,512),[[S,w.value,void 0,{number:!0}]])]),default:a(({solved:t})=>[c(`div`,{ref:e=>B[L(t)]=e,class:`demo-mc-stage`},[p.value===`sibling`?(e(),l(`div`,j,[c(`div`,{class:`demo-mc-box demo-mc-box-top`,style:u({marginBottom:g.value+`px`})},`공지 박스 · margin-bottom `+_(g.value)+`px`,5),c(`div`,{class:`demo-mc-box demo-mc-box-bottom`,style:u({marginTop:w.value+`px`})},`상품 목록 · margin-top `+_(w.value)+`px`,5)])):(e(),l(v,{key:1},[c(`div`,{class:`demo-mc-lead`,style:u({marginBottom:g.value+`px`})},`섹션 안내 문구 · margin-bottom `+_(g.value)+`px`,5),c(`div`,M,[c(`div`,{class:`demo-mc-card-title`,style:u({marginTop:w.value+`px`})},`카드 제목 · margin-top `+_(w.value)+`px`,5),r[3]||=c(`p`,{class:`demo-mc-card-text`},`카드 배경은 여기부터 시작해야 합니다.`,-1)])],64)),c(`div`,N,[(e(!0),l(v,null,m(H[L(t)].margins,(t,n)=>(e(),l(`span`,{key:`m`+n,class:`demo-mc-margin`,style:u(z(t))},null,4))),128)),(e(!0),l(v,null,m(H[L(t)].rulers,(t,n)=>(e(),l(`span`,{key:`r`+n,class:`demo-mc-ruler`,style:u({top:t.top+`px`,height:t.height+`px`})},[c(`span`,P,_(R(t.height)),1)],4))),128))])],512),p.value===`sibling`?(e(),l(`p`,F,[f(_(g.value)+`px + `+_(w.value)+`px → 실제 간격 `,1),c(`strong`,null,_(R(H[L(t)].gap)),1)])):(e(),l(`p`,I,[r[4]||=f(` 안내 문구 ~ 카드 배경 `,-1),c(`strong`,null,_(R(H[L(t)].gap)),1),r[5]||=f(` · 카드 배경 ~ 제목 `,-1),c(`strong`,null,_(R(H[L(t)].inner)),1)]))]),caption:a(()=>[...r[6]||=[f(` 주황 영역은 각 요소의 margin이고, 눈금과 숫자는 getBoundingClientRect()로 잰 실제 간격입니다. 두 margin이 겹쳐 보이면 합쳐진 것입니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},R={class:`doc-body`},z={id:`section-0`},B={id:`section-1`},V={id:`section-2`},H={id:`section-3`},U={id:`section-4`},W={id:`section-7`},G=`margin-collapse`,K=13,q=`위아래 margin이 합쳐지거나 부모 밖으로 빠질 때`,J=`위아래 margin 겹침`,Y=`블록 요소의 위아래 margin이 큰 값 하나로 합쳐지는 원리를 이해하고, gap·padding·flow-root로 간격을 예측할 수 있게 만듭니다.`,X=`20px과 30px을 줬는데 간격이 30px뿐이라면?
숫자를 키우기 전에, 위아래 margin이 서로 만나고 있는지 확인하세요.
`,Z=`레이아웃`,Q=`여백`,$=[`margin`,`마진 겹침`,`margin collapsing`,`flow-root`,`gap`,`BFC`],ee=`기초`,te=`약 10분`,ne=[`margin`,`블록 요소`],re=`display: flow-root`,ie=`published`,ae=`2026-11-11`,oe=[`flex-bottom-action`,`image-gap`],se=[{title:`CSS 2.1 — Collapsing margins`,url:`https://www.w3.org/TR/CSS21/box.html#collapsing-margins`},{title:`MDN — Mastering margin collapsing`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing`},{title:`MDN — Block formatting context`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context`}],ce={__name:`margin-collapse`,setup(t,{expose:r}){return r({frontmatter:{id:`margin-collapse`,order:13,title:`위아래 margin이 합쳐지거나 부모 밖으로 빠질 때`,navTitle:`위아래 margin 겹침`,summary:`블록 요소의 위아래 margin이 큰 값 하나로 합쳐지는 원리를 이해하고, gap·padding·flow-root로 간격을 예측할 수 있게 만듭니다.`,lead:`20px과 30px을 줬는데 간격이 30px뿐이라면?
숫자를 키우기 전에, 위아래 margin이 서로 만나고 있는지 확인하세요.
`,group:`레이아웃`,topic:`여백`,tags:[`margin`,`마진 겹침`,`margin collapsing`,`flow-root`,`gap`,`BFC`],level:`기초`,duration:`약 10분`,prerequisites:[`margin`,`블록 요소`],keyProperty:`display: flow-root`,status:`published`,updated:`2026-11-11`,related:[`flex-bottom-action`,`image-gap`],references:[{title:`CSS 2.1 — Collapsing margins`,url:`https://www.w3.org/TR/CSS21/box.html#collapsing-margins`},{title:`MDN — Mastering margin collapsing`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing`},{title:`MDN — Block formatting context`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context`}]}}),(t,r)=>{let i=p(`DocIssue`),o=p(`DocTakeaway`),s=p(`DocSteps`),u=p(`DocInspect`),m=p(`CodePanel`),h=p(`DocPractice`);return e(),l(`div`,R,[c(`section`,z,[r[2]||=c(`h2`,null,[c(`span`,{class:`section-no`},`01`),f(` 문제 상황`)],-1),r[3]||=c(`p`,null,[f(`공지 박스 컴포넌트에는 `),c(`code`,null,`margin-bottom: 20px`),f(`, 그 아래 상품 목록 컴포넌트에는 `),c(`code`,null,`margin-top: 30px`),f(`이 있습니다. 시안대로라면 둘 사이가 50px이어야 하는데, 화면에서 재 보면 30px입니다. 같은 화면의 카드에서는 제목에 준 `),c(`code`,null,`margin-top`),f(`이 카드 안쪽이 아니라 카드 위쪽에 생겨, 카드 배경이 통째로 아래로 내려갑니다.`)],-1),r[4]||=c(`p`,null,`컴포넌트를 하나씩 볼 때는 문제가 없다가, 여러 컴포넌트를 한 페이지에 모은 뒤 디자인 검수에서 이런 형태로 돌아옵니다.`,-1),d(i,{label:`디자인 검수`,title:`메인: 공지와 상품 목록 사이 간격이 시안보다 좁고, 카드 제목 위 여백이 카드 밖에 생김`,env:`전체 브라우저 · PC 및 모바일`,expected:`공지와 목록 사이 50px, 카드 배경 안쪽에 제목 위 여백이 있음`,actual:`공지와 목록 사이 30px, 카드 배경이 제목 바로 위에서 시작하고 카드 위 간격만 넓어짐`},{default:a(()=>[...r[0]||=[c(`ol`,null,[c(`li`,null,`메인 화면에서 공지 박스와 상품 목록 사이의 간격을 잽니다.`),c(`li`,null,`같은 화면의 추천 카드에서 카드 배경 위쪽 끝과 제목 사이를 확인합니다.`),c(`li`,null,[f(`개발자 도구에서 각 요소의 `),c(`code`,null,`margin`),f(` 값과 실제 간격을 비교합니다.`)])],-1)]]),_:1}),d(o,null,{default:a(()=>[...r[1]||=[c(`p`,null,[f(`위아래 간격은 `),c(`strong`,null,`한 곳에서만`),f(` 정하세요. 부모의 `),c(`code`,null,`gap`),f(`이나 `),c(`code`,null,`padding`),f(`을 쓰고, 카드처럼 안쪽 margin을 가둬야 하는 부모에는 `),c(`code`,null,`display: flow-root`),f(`를 적용합니다.`)],-1)]]),_:1})]),c(`section`,B,[r[5]||=c(`h2`,null,[c(`span`,{class:`section-no`},`02`),f(` 직접 비교하기`),c(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=c(`p`,null,`상황과 두 margin 값을 바꾸면서, 실제로 잰 간격이 어떻게 달라지는지 확인해 보세요.`,-1),d(L)]),c(`section`,V,[r[8]||=g(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>일반 블록 흐름에서는 위아래로 맞닿은 margin이 더해지지 않고 <strong>하나로 합쳐집니다</strong>(margin collapsing). 두 값이 모두 양수이면 큰 값 하나만 남습니다. 그래서 20px과 30px이 만나면 50px이 아니라 30px이 됩니다. 이 규칙은 위아래 margin에만 적용되고, 좌우 margin은 합쳐지지 않습니다.</p><p>부모와 첫 자식 사이에서도 같은 일이 생깁니다. 부모에 위쪽 <code>border</code>·<code>padding</code>이 없고 부모가 새 블록 서식 맥락(BFC)을 만들지 않으면, 첫 자식의 <code>margin-top</code>과 부모의 <code>margin-top</code>이 맞닿은 것으로 봅니다. 두 값이 합쳐져 부모 바깥에 생기므로, 제목의 margin이 카드 밖으로 빠진 것처럼 보이고 카드 배경은 그만큼 아래에서 시작합니다. 마지막 자식의 <code>margin-bottom</code>도 같은 조건에서 부모 아래로 빠질 수 있고, 내용·높이·border·padding이 없는 빈 블록은 자기 위아래 margin이 합쳐집니다.</p><p>Flex·Grid 컨테이너의 항목끼리는 margin이 합쳐지지 않습니다. 부모에 위쪽 <code>padding</code>이나 <code>border</code>가 있거나, 부모가 <code>display: flow-root</code>, <code>overflow: hidden</code>·<code>auto</code>처럼 BFC를 만드는 속성을 가지면 자식의 margin이 부모 밖으로 빠지지 않습니다.</p>`,4),d(s,null,{default:a(()=>[...r[7]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`위아래 margin이 맞닿음`),f(),c(`code`,null,`margin-bottom: 20px`),f(` + `),c(`code`,null,`margin-top: 30px`)]),c(`li`,null,[c(`strong`,null,`큰 값 하나로 합쳐짐`),f(),c(`code`,null,`간격 30px`)]),c(`li`,null,[c(`strong`,null,`간격을 한 곳에서 정함`),f(),c(`code`,null,`gap`),f(` · `),c(`code`,null,`padding`),f(` · `),c(`code`,null,`display: flow-root`)])],-1)]]),_:1})]),c(`section`,H,[r[10]||=c(`h2`,null,[c(`span`,{class:`section-no`},`04`),f(` 원인 찾기`)],-1),r[11]||=c(`p`,null,[f(`간격이 예상과 다를 때는 값을 키우기 전에 `),c(`strong`,null,`어느 margin이 어디에 그려지는지`),f(`부터 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),d(u,null,{default:a(()=>[...r[9]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`Elements 패널에서 요소에 마우스 올리기`),f(` 요소에 마우스를 올리면 화면에 margin 영역이 주황색으로 표시됩니다. 두 요소의 주황 영역이 서로 겹치거나, 제목의 주황 영역이 카드 배경 바깥에 그려지면 margin이 합쳐진 것입니다.`)]),c(`li`,null,[c(`strong`,null,`Computed 탭의 박스 모델 보기`),f(` Computed 탭 위쪽의 박스 모델 그림에서 margin 값을 확인합니다. 두 값의 합보다 실제 간격이 작다면 합쳐진 것입니다.`)]),c(`li`,null,[c(`strong`,null,`부모의 border·padding 확인`),f(` 카드처럼 margin이 밖으로 빠지는 경우, 부모를 선택해 박스 모델에서 위쪽 `),c(`code`,null,`border`),f(`와 `),c(`code`,null,`padding`),f(`이 0인지 봅니다. 둘 다 0이면 첫 자식의 margin이 부모 밖으로 빠질 수 있습니다.`)]),c(`li`,null,[c(`strong`,null,`Styles 탭에서 바로 시험`),f(` 부모에 `),c(`code`,null,`display: flow-root`),f(`를 추가하거나, 형제를 감싼 부모에 `),c(`code`,null,`display: flex`),f(`와 `),c(`code`,null,`flex-direction: column`),f(`을 추가해 봅니다. 간격이 바뀌면 원인이 확정됩니다.`)])],-1)]]),_:1})]),c(`section`,U,[r[12]||=c(`h2`,null,[c(`span`,{class:`section-no`},`05`),f(` 해결 코드`)],-1),r[13]||=c(`p`,null,`아래 CSS는 위 실행 예제와 같은 파일입니다. 실무에서 간격을 정하는 방식은 ‘권장 패턴’ 탭을 참고하세요.`,-1),d(m,{tabs:n(E)},null,8,[`tabs`])]),r[16]||=g(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>margin 겹침은 컴포넌트를 조합하는 곳에서 자주 드러납니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>카드 안 제목의 margin이 카드 밖으로</h3><p>카드 배경이 제목 위에서 바로 시작하고 카드 위 간격만 넓어진다면, 제목의 <code>margin-top</code>이 카드 밖으로 빠진 것입니다. 카드 안쪽 여백은 카드의 <code>padding</code>으로 정하고, 첫 자식의 <code>margin-top</code>은 없앱니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;
}
<span class="hljs-selector-class">.card</span> &gt; <span class="hljs-selector-pseudo">:first-child</span> {
  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">0</span>;
}
</code></pre><h3>목록 마지막 항목의 margin-bottom이 남을 때</h3><p>항목마다 <code>margin-bottom</code>을 주면 마지막 항목의 여백이 목록 아래에 남거나 부모 밖으로 빠집니다. <code>:last-child</code>로 지우거나, 부모의 <code>gap</code>으로 항목 사이에만 간격을 둡니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.list-item</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">12px</span>; }
<span class="hljs-selector-class">.list-item</span><span class="hljs-selector-pseudo">:last-child</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">0</span>; }

<span class="hljs-comment">/* 또는 */</span>
<span class="hljs-selector-class">.list</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">12px</span>;
}
</code></pre><h3>섹션 사이 간격 설계</h3><p>어떤 섹션은 <code>margin-top</code>, 어떤 섹션은 <code>margin-bottom</code>을 쓰면 만나는 곳마다 큰 값만 남아 간격을 예측하기 어렵습니다. 방향을 하나로 정하거나, 섹션을 감싼 부모에서 간격을 정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">/* 규칙: 섹션은 margin-bottom만 씁니다. */</span>
<span class="hljs-selector-class">.section</span> { <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">40px</span>; }
<span class="hljs-selector-class">.section</span><span class="hljs-selector-pseudo">:last-child</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">0</span>; }
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>flex로 바꾸면 간격이 커질 수 있습니다.</strong> 부모를 flex·grid로 바꾸면 그동안 합쳐지던 margin이 더해집니다. 기존 화면의 간격이 달라지므로, 바꿀 때는 자식의 margin을 정리하고 <code>gap</code>으로 옮기세요.</li><li><strong><code>overflow: hidden</code>은 다른 부작용이 있습니다.</strong> BFC를 만들어 margin이 빠지는 것은 막지만, 넘치는 그림자·드롭다운·포커스 테두리까지 잘립니다. 의도가 드러나는 <code>display: flow-root</code>를 쓰세요.</li><li><strong>flow-root는 오래된 브라우저에서 확인합니다.</strong> 현재 주요 브라우저는 지원하지만 Internet Explorer는 지원하지 않습니다. 지원 범위가 넓어야 한다면 부모의 <code>padding</code>으로 해결하는 편이 안전합니다.</li><li><strong>음수 margin은 계산이 다릅니다.</strong> 양수와 음수가 만나면 가장 큰 양수 값에서 절댓값이 가장 큰 음수 값을 뺀 만큼이 간격이 됩니다. 음수 margin으로 간격을 맞춘 곳은 실제 간격을 개발자 도구에서 확인하세요.</li></ul></section>`,2),c(`section`,W,[r[15]||=c(`h2`,null,[c(`span`,{class:`section-no`},`08`),f(` 짧은 실습`)],-1),d(h,null,{default:a(()=>[...r[14]||=[c(`p`,null,`위 예제에서 두 상황을 번갈아 선택하고, 두 margin 값을 바꿔보세요.`,-1),c(`ul`,{class:`checklist`},[c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`‘형제 사이’의 문제 상태에서는 실제 간격이 두 값 중 큰 값과 같다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`‘첫 자식이 부모 밖으로’의 문제 상태에서는 카드 배경과 제목 사이 간격이 0px이다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`해결 상태에서는 카드 배경과 제목 사이 간격이 카드 제목 margin-top 값과 같다.`)])])],-1)]]),_:1})])])}}};export{ce as default,te as duration,Z as group,G as id,re as keyProperty,X as lead,ee as level,J as navTitle,K as order,ne as prerequisites,se as references,oe as related,ie as status,Y as summary,$ as tags,q as title,Q as topic,ae as updated};