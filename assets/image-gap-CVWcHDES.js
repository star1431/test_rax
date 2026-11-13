import{D as e,G as t,H as n,L as r,R as i,T as a,V as o,c as s,d as c,ft as l,g as u,h as d,j as f,k as p,l as m,m as h,pt as g,r as _,s as v,ut as y,w as b,z as x}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as S}from"./index-Dxflp_jg.js";import{t as C}from"./DemoCompare-Bd6h8ThJ.js";var w=`.demo-gap-card {
  box-sizing: border-box;
  width: 196px;
  padding: 16px;
  border: 1px solid #c9d4e3;
  border-radius: 8px;
  background: #fff;
  color: #23334b;
  line-height: 1.5;
}

/* 썸네일 틀: 배경색을 넣어 이미지 아래에 남는 틈이 보이게 합니다. */
.demo-gap-thumb {
  border: 2px solid #23334b;
  background: #ffd84d;
  /* font-size는 예제에서 조절합니다. 글자가 없어도 줄 높이 계산에 쓰입니다. */
}

.demo-gap-thumb img {
  width: 158px;
  height: 100px;
  /* 기본값: display: inline; vertical-align: baseline; */
}

.demo-gap-title {
  margin: 10px 0 0;
  font-size: 14px;
  font-weight: 700;
}

/* 해결 1: 이미지만 단독으로 있을 때 — 블록으로 바꿔 줄(line box)에서 빼냅니다. */
.demo-gap-thumb-block img {
  display: block;
}

/* 해결 2: 글자와 한 줄에 있어야 할 때 — 기준선 대신 줄의 아래쪽에 맞춥니다. */
.demo-gap-thumb-bottom img {
  vertical-align: bottom; /* 이미지가 줄 높이보다 크면 top, middle도 틈이 사라집니다. */
}

/* 해결 3: 부모를 flex로 — 자식 img가 블록처럼 바뀌어(blockify) 기준선 정렬을 받지 않습니다. */
.demo-gap-thumb-flex {
  display: flex;
}

/* 예제 측정값 표시 (해결과는 관계없는 안내용 스타일) */
.demo-gap-measure {
  margin: 8px 0 0;
  font-size: 13px;
  color: #4b5b73;
}
.demo-gap-measure b {
  color: #c62828;
}
.demo-gap-measure b.is-zero {
  color: #1b7f4b;
}
`,T=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22158%22%20height%3D%22100%22%20viewBox%3D%220%200%20158%20100%22%3E%0A%20%20%3Crect%20width%3D%22158%22%20height%3D%22100%22%20fill%3D%22%234a78c2%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22122%22%20cy%3D%2228%22%20r%3D%2212%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M0%20100%20L46%2048%20L80%2082%20L104%2060%20L158%20100%20Z%22%20fill%3D%22%2323334b%22%2F%3E%0A%3C%2Fsvg%3E`,E=[{label:`display: block`,className:`demo-gap-thumb-block`},{label:`vertical-align: bottom`,className:`demo-gap-thumb-bottom`},{label:`부모 display: flex`,className:`demo-gap-thumb-flex`}],D=[{label:`CSS`,language:`css`,code:w},{label:`HTML`,language:`xml`,code:`<div class="demo-gap-card">
  <!-- 해결 방법에 맞는 변형 클래스를 하나 붙입니다. 예) demo-gap-thumb demo-gap-thumb-block -->
  <div class="demo-gap-thumb demo-gap-thumb-block">
    <img src="thumb.jpg" width="158" height="100" alt="가을 산 풍경">
  </div>
  <p class="demo-gap-title">가을 산행 코스</p>
</div>`}],O={for:`demo-gap-size`},k={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-gap-fix-label`},A=[`aria-checked`,`onClick`],j={class:`demo-gap-card`},M=[`src`],N={class:`demo-gap-measure`},P={__name:`ImageGapDemo`,setup(u){let f=n(16),h=n(E[0].className),w=v(()=>E.find(e=>e.className===h.value)),D={problem:null,solved:null},P=o({problem:null,solved:null});function F(){Object.entries(D).forEach(([e,t])=>{let n=t?.querySelector(`img`);if(!n)return;let r=getComputedStyle(t),i=parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),a=t.getBoundingClientRect().height-i;P[e]=Math.max(0,Math.round(a-n.getBoundingClientRect().height))})}let I=typeof ResizeObserver>`u`?null:new ResizeObserver(F);function L(e,t){let n=e?`solved`:`problem`;D[n]!==t&&(D[n]&&I?.unobserve(D[n]),D[n]=t,t&&(I?.observe(t),b(F)))}return r([f,h],F,{flush:`post`}),a(()=>I?.disconnect()),(n,r)=>(e(),m(C,{problem:{code:`display: inline (기본값)`,note:`이미지가 글자 기준선에 놓여, 아래에 노란 틈이 남습니다.`},solved:{code:w.value.label,note:`이미지 아래 틈이 사라지고 틀이 이미지 높이에 맞습니다.`}},{controls:i(()=>[s(`label`,O,[r[1]||=d(`부모 글자 크기 `,-1),s(`strong`,null,g(f.value)+`px`,1)]),x(s(`input`,{id:`demo-gap-size`,"onUpdate:modelValue":r[0]||=e=>f.value=e,type:`range`,min:`14`,max:`24`,step:`1`},null,512),[[S,f.value,void 0,{number:!0}]]),r[2]||=s(`span`,{id:`demo-gap-fix-label`,class:`demo-label`},`해결 방법`,-1),s(`div`,k,[(e(!0),c(_,null,p(t(E),t=>(e(),c(`button`,{key:t.className,type:`button`,role:`radio`,"aria-checked":h.value===t.className,onClick:e=>h.value=t.className},g(t.label),9,A))),128))])]),default:i(({solved:e})=>[s(`div`,j,[s(`div`,{ref:t=>L(e,t),class:y([`demo-gap-thumb`,e?w.value.className:``]),style:l({fontSize:f.value+`px`})},[s(`img`,{src:t(T),width:`158`,height:`100`,alt:`가을 산 풍경`},null,8,M)],6),r[3]||=s(`p`,{class:`demo-gap-title`},`가을 산행 코스`,-1)]),s(`p`,N,[r[4]||=d(` 이미지 아래 틈 `,-1),s(`b`,{class:y({"is-zero":P[e?`solved`:`problem`]===0})},g(P[e?`solved`:`problem`]??`-`)+`px`,3)])]),caption:i(()=>[...r[5]||=[d(` 틈 = 썸네일 틀의 안쪽 높이 − 이미지 높이. 실제 값은 글꼴과 줄 높이(line-height)에 따라 조금씩 다릅니다. `,-1)]]),_:1},8,[`solved`]))}},F={class:`doc-body`},I={id:`section-0`},L={id:`section-1`},R={id:`section-2`},z={id:`section-3`},B={id:`section-4`},V={id:`section-7`},ee=`image-gap`,H=12,U=`이미지 아래에 작은 틈이 생길 때`,W=`이미지 아래 생기는 틈`,G=`썸네일 아래에 몇 px 틈이 남을 때, img가 글자 기준선에 놓이는 인라인 요소라는 점을 확인하고 display나 vertical-align으로 정리합니다.`,K=`이미지 아래에 이유 모를 틈이 생긴다면?
margin보다 먼저, 이미지가 글자처럼 줄 위에 놓여 있는지 확인하세요.
`,q=`레이아웃`,J=`인라인`,Y=[`img`,`vertical-align`,`baseline`,`line-height`,`이미지 틈`],X=`기초`,Z=`약 10분`,Q=[`인라인 요소`,`line-height`],$=`display: block`,te=`published`,ne=`2026-11-13`,re=[`flex-ellipsis`],ie=[{title:`CSS 2.1 — Line height calculations (vertical-align)`,url:`https://www.w3.org/TR/CSS21/visudet.html#line-height`},{title:`CSS Display Level 3 — Blockification`,url:`https://www.w3.org/TR/css-display-3/#blockify`},{title:`MDN — vertical-align`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align`}],ae={__name:`image-gap`,setup(n,{expose:r}){return r({frontmatter:{id:`image-gap`,order:12,title:`이미지 아래에 작은 틈이 생길 때`,navTitle:`이미지 아래 생기는 틈`,summary:`썸네일 아래에 몇 px 틈이 남을 때, img가 글자 기준선에 놓이는 인라인 요소라는 점을 확인하고 display나 vertical-align으로 정리합니다.`,lead:`이미지 아래에 이유 모를 틈이 생긴다면?
margin보다 먼저, 이미지가 글자처럼 줄 위에 놓여 있는지 확인하세요.
`,group:`레이아웃`,topic:`인라인`,tags:[`img`,`vertical-align`,`baseline`,`line-height`,`이미지 틈`],level:`기초`,duration:`약 10분`,prerequisites:[`인라인 요소`,`line-height`],keyProperty:`display: block`,status:`published`,updated:`2026-11-13`,related:[`flex-ellipsis`],references:[{title:`CSS 2.1 — Line height calculations (vertical-align)`,url:`https://www.w3.org/TR/CSS21/visudet.html#line-height`},{title:`CSS Display Level 3 — Blockification`,url:`https://www.w3.org/TR/css-display-3/#blockify`},{title:`MDN — vertical-align`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align`}]}}),(n,r)=>{let a=f(`DocIssue`),o=f(`DocTakeaway`),l=f(`DocSteps`),p=f(`DocInspect`),m=f(`CodePanel`),g=f(`DocPractice`);return e(),c(`div`,F,[s(`section`,I,[r[2]||=s(`h2`,null,[s(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[3]||=s(`p`,null,`테두리와 배경색이 있는 썸네일 틀 안에 이미지를 넣었습니다. margin, padding은 모두 0인데 이미지 아래에만 배경색이 몇 px 비쳐 보입니다.`,-1),r[4]||=s(`p`,null,`디자인 시안과 픽셀 단위로 겹쳐 보는 검수 단계에서, 또는 이미지 아래 테두리가 겹쳐야 하는 카드에서 이런 형태로 돌아옵니다.`,-1),u(a,{label:`디자인 검수`,title:`상품 카드: 썸네일 아래에 배경색 줄이 보임`,env:`전체 브라우저 · 썸네일 틀에 배경색 또는 테두리가 있는 카드`,expected:`썸네일 틀의 높이가 이미지 높이와 같음`,actual:`이미지 아래에 몇 px 틈이 생기고, 글자 크기를 키우면 틈도 커짐`},{default:i(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,[d(`배경색이 있는 `),s(`code`,null,`div`),d(` 안에 `),s(`code`,null,`img`),d(` 하나만 넣습니다.`)]),s(`li`,null,[s(`code`,null,`div`),d(`와 `),s(`code`,null,`img`),d(`의 margin, padding이 0인지 확인합니다.`)]),s(`li`,null,`이미지 아래 가장자리를 확대해서 봅니다.`)],-1)]]),_:1}),u(o,null,{default:i(()=>[...r[1]||=[s(`p`,null,[d(`이미지만 단독으로 있다면 `),s(`strong`,null,[s(`code`,null,`img`),d(`에 `),s(`code`,null,`display: block`),d(`을`)]),d(` 적용하세요.`)],-1)]]),_:1})]),s(`section`,L,[r[5]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=s(`p`,null,`부모 글자 크기와 해결 방법을 바꾸면서, 이미지 아래 틈이 어떻게 달라지는지 측정값으로 확인해 보세요.`,-1),u(P)]),s(`section`,R,[r[8]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>img</code>의 기본 <code>display</code>는 <code>inline</code>입니다. 글자 한 자처럼 줄(line box) 안에 놓이고, <code>vertical-align</code>의 기본값 <code>baseline</code>에 따라 <strong>이미지 아래쪽이 글자 기준선</strong>에 맞춰집니다. <code>svg</code>, <code>video</code>, <code>iframe</code>, <code>display: inline-block</code> 요소도 같은 방식으로 줄 위에 놓입니다.</p><p>기준선 아래에는 g, y, p 같은 글자의 아래 획(descender)이 내려올 자리와 줄 높이(line-height)의 여백 절반이 남아 있습니다. 틀 안에 글자가 없어도 줄은 부모의 글꼴과 줄 높이로 계산되기 때문에, 이 자리가 그대로 <strong>이미지 아래 틈</strong>이 됩니다. 그래서 부모의 <code>font-size</code>나 <code>line-height</code>가 커질수록 틈도 커집니다.</p><p>해결은 이미지를 줄에서 빼내거나(<code>display: block</code>), 기준선이 아닌 위치에 맞추거나(<code>vertical-align</code>), 부모를 flex·grid로 바꿔 자식을 블록처럼 다루게 하는 것입니다. Flex·Grid 컨테이너의 자식은 <code>display</code>가 블록 수준으로 바뀌므로(blockify) 기준선 정렬을 받지 않습니다.</p>`,4),u(l,null,{default:i(()=>[...r[7]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`이미지 단독`),d(),s(`code`,null,`img { display: block; }`)]),s(`li`,null,[s(`strong`,null,`글자와 한 줄`),d(),s(`code`,null,`img { vertical-align: bottom; }`)]),s(`li`,null,[s(`strong`,null,`부모가 레이아웃 담당`),d(),s(`code`,null,`.thumb { display: flex; }`)])],-1)]]),_:1})]),s(`section`,z,[r[10]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),r[11]||=s(`p`,null,[d(`margin, padding으로 설명되지 않는 틈은 `),s(`strong`,null,`요소가 인라인으로 줄 위에 놓였는지`),d(`부터 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),u(p,null,{default:i(()=>[...r[9]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Elements 패널에서 img 선택`),d(` 틈이 보이는 이미지를 선택합니다. 화면에서 이미지를 마우스 오른쪽 버튼으로 눌러 `),s(`strong`,null,`검사`),d(`(Inspect)를 선택해도 됩니다.`)]),s(`li`,null,[s(`strong`,null,`Computed 탭에서 display 확인`),s(`strong`,null,`Show all`),d(`을 켜고 `),s(`code`,null,`display`),d(`를 검색합니다. 기본값은 이 옵션을 켜야 보입니다. 값이 `),s(`code`,null,`inline`),d(`이고 `),s(`code`,null,`vertical-align`),d(`이 `),s(`code`,null,`baseline`),d(`이면 기준선 정렬을 받고 있는 것입니다.`)]),s(`li`,null,[s(`strong`,null,`부모와 이미지의 높이 비교`),d(` Elements 패널에서 부모 요소와 `),s(`code`,null,`img`),d(`에 차례로 마우스를 올립니다. 화면에 표시되는 크기를 비교해, 부모가 이미지보다 몇 px 더 높다면 그 차이가 틈입니다.`)]),s(`li`,null,[s(`strong`,null,`Styles 탭에서 바로 시험`),s(`code`,null,`img`),d(`의 `),s(`code`,null,`element.style`),d(`에 `),s(`code`,null,`display: block`),d(`을 추가해 봅니다. 틈이 사라지면 원인이 확정됩니다. 글자 옆에 있어야 하는 이미지라면 `),s(`code`,null,`vertical-align: bottom`),d(`으로 시험합니다.`)])],-1)]]),_:1})]),s(`section`,B,[r[12]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),r[13]||=s(`p`,null,`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. 세 가지 해결 방법 중 상황에 맞는 변형 클래스 하나를 사용하세요.`,-1),u(m,{tabs:t(D)},null,8,[`tabs`])]),r[16]||=h(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 원인(인라인 요소의 기준선 정렬과 공백 문자)이 다른 곳에서도 나타납니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>inline-block 요소 사이의 공백</h3><p><code>display: inline-block</code>으로 나란히 놓은 메뉴·버튼 사이에 의도하지 않은 간격이 생깁니다. HTML의 줄바꿈과 들여쓰기가 공백 한 칸으로 표시되기 때문이며, 간격은 글꼴과 글자 크기에 따라 달라집니다(흔히 4px 안팎). 부모를 flex로 바꾸고 간격은 <code>gap</code>으로 지정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.tab-list</span> { <span class="hljs-attribute">display</span>: flex; <span class="hljs-attribute">gap</span>: <span class="hljs-number">8px</span>; } <span class="hljs-comment">/* li의 inline-block 대신 */</span>
</code></pre><h3>높이가 다른 inline-block 카드의 어긋남</h3><p>inline-block 카드를 나란히 놓으면 카드 안 마지막 줄의 기준선끼리 맞춰져, 내용 줄 수가 다른 카드의 윗선이 어긋납니다. <code>vertical-align: top</code>을 주거나 부모를 flex·grid로 바꿉니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card</span> { <span class="hljs-attribute">display</span>: inline-block; <span class="hljs-attribute">vertical-align</span>: top; }
</code></pre><h3>아이콘(svg)과 글자 세로 정렬</h3><p>글자 옆 인라인 <code>svg</code> 아이콘도 기준선에 놓여 글자보다 살짝 위로 떠 보입니다. 아이콘 크기를 글자에 맞추고 <code>vertical-align</code>으로 위치를 조정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.icon</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">1em</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">1em</span>;
  <span class="hljs-attribute">vertical-align</span>: middle; <span class="hljs-comment">/* 글꼴에 따라 -0.125em 같은 값으로 미세 조정 */</span>
}
</code></pre><h3>버튼 안 아이콘 정렬</h3><p>버튼 안에 아이콘과 글자가 함께 있다면 <code>inline-flex</code>와 <code>align-items: center</code>로 세로 가운데를 맞추는 편이 안정적입니다. 자식은 블록처럼 다뤄져 기준선 틈도 생기지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.btn</span> {
  <span class="hljs-attribute">display</span>: inline-flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">gap</span>: <span class="hljs-number">4px</span>;
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>display: block</code>은 이미지가 단독일 때만 씁니다.</strong> 블록이 되면 글자와 한 줄에 놓일 수 없고, 부모의 <code>text-align: center</code>로 가운데 정렬되지 않습니다. 가운데 정렬은 <code>margin: 0 auto</code>로 바꿔야 합니다.</li><li><strong>부모에 <code>line-height: 0</code>이나 <code>font-size: 0</code>을 주는 방법은 권장하지 않습니다.</strong> 틈은 사라지지만 같은 부모 안의 글자가 겹치거나 보이지 않게 되고, <code>em</code> 단위를 쓰는 자식 크기도 함께 바뀝니다.</li><li><strong>Flex 안의 이미지는 늘어나지 않는지 확인합니다.</strong> <code>align-items</code>의 기본값(<code>normal</code>)은 Flex 항목에서 <code>stretch</code>처럼 동작해서, 높이를 지정하지 않은 이미지 옆에 더 높은 요소가 있으면 이미지가 세로로 늘어날 수 있습니다. <code>width</code>·<code>height</code> 속성을 지정하거나 <code>align-items</code>를 확인하세요.</li><li><strong>이미지 대체 텍스트를 함께 확인합니다.</strong> 정보가 있는 이미지는 내용을 설명하는 <code>alt</code>, 장식용 이미지는 <code>alt=&quot;&quot;</code>를 넣습니다. 틈을 없애는 CSS는 화면 표시만 바꿀 뿐 접근성 정보는 바꾸지 않습니다.</li></ul></section>`,2),s(`section`,V,[r[15]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(g,null,{default:i(()=>[...r[14]||=[s(`p`,null,`위 예제에서 부모 글자 크기를 14px에서 24px까지 바꾸고, 해결 방법을 하나씩 선택해 보세요.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`문제 상태에서 글자 크기를 키우면 측정된 틈도 커진다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`해결 상태에서는 세 가지 방법 모두 틈이 0px이다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`해결 상태의 노란 배경이 이미지 아래로 보이지 않는다.`)])])],-1)]]),_:1})])])}}};export{ae as default,Z as duration,q as group,ee as id,$ as keyProperty,K as lead,X as level,W as navTitle,H as order,Q as prerequisites,ie as references,re as related,te as status,G as summary,Y as tags,U as title,J as topic,ne as updated};