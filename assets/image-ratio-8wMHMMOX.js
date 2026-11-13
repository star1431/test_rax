import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,ut as h}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as g}from"./DemoCompare-Bd6h8ThJ.js";var _=`.demo-ratio-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(64px, 1fr));
  align-items: start;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-ratio-card {
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
}
.demo-ratio-img {
  display: block;
  width: 100%;
  height: auto; /* width·height 속성이 있어도 높이는 비율로 계산합니다. */
  aspect-ratio: 4 / 3; /* 원본 크기와 상관없이 칸의 비율을 고정합니다. */
  object-fit: cover; /* 칸을 가득 채우고, 넘치는 부분은 잘라냅니다. */
  object-position: center; /* 가운데를 기준으로 자릅니다. */
  background: #eef2f7; /* contain일 때 남는 여백의 색 */
}
.demo-ratio-img-square {
  aspect-ratio: 1 / 1;
}
.demo-ratio-img-wide {
  aspect-ratio: 16 / 9;
}
.demo-ratio-img-contain {
  object-fit: contain; /* 이미지 전체를 보여 주고, 남는 곳은 여백으로 둡니다. */
}
.demo-ratio-img-top {
  object-position: center top; /* 위쪽을 기준으로 자릅니다. */
}
.demo-ratio-name {
  margin: 0;
  padding: 6px 8px;
  color: #25334a;
  font-size: 12px;
  line-height: 1.4;
}
.demo-ratio-name span {
  display: block;
  color: #5c6b82;
}
/* 비교를 위한 문제 상태 1: 비율 지정 없이 원본 비율대로 그립니다. */
.is-problem .demo-ratio-img {
  aspect-ratio: auto;
  object-fit: fill;
  object-position: 50% 50%;
}
/* 비교를 위한 문제 상태 2: 너비와 높이를 모두 고정해 이미지가 늘어납니다. */
.is-problem .demo-ratio-list-fixed .demo-ratio-img {
  height: 120px;
}
`;function v(e,t,n){let r=Math.min(e,t)*.28,i=`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="0 0 ${e} ${t}">
<rect width="${e}" height="${t}" fill="${n}"/>
<rect x="8" y="8" width="${e-16}" height="${t-16}" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="14 8"/>
<circle cx="${e/2}" cy="${t/2}" r="${r}" fill="#fff" fill-opacity="0.35" stroke="#fff" stroke-width="4"/>
<g fill="#fff" font-family="sans-serif" font-size="24" font-weight="700" text-anchor="middle">
<text x="${e/2}" y="44">위</text>
<text x="${e/2}" y="${t/2+8}">${e}×${t}</text>
<text x="${e/2}" y="${t-24}">아래</text>
</g>
</svg>`;return`data:image/svg+xml,${encodeURIComponent(i)}`}var y=[{name:`가로형`,width:400,height:200,color:`#3d6fd9`},{name:`세로형`,width:200,height:400,color:`#c95a2e`},{name:`정사각`,width:300,height:300,color:`#2a8a60`},{name:`조금 세로`,width:300,height:400,color:`#7a4fc4`}].map(e=>({...e,src:v(e.width,e.height,e.color)})),b=[{label:`높이 제각각`,value:`auto`,code:`width: 100%; height: auto`,note:`원본 비율대로 그려져 카드 높이가 제각각입니다.`},{label:`늘어남`,value:`fixed`,code:`width: 100%; height: 120px`,note:`원본 비율을 무시하고 늘어나 원이 타원이 됩니다.`}],x=[{label:`1:1`,value:`1 / 1`,className:`demo-ratio-img-square`},{label:`4:3`,value:`4 / 3`,className:``},{label:`16:9`,value:`16 / 9`,className:`demo-ratio-img-wide`}],S=[{label:`cover`,note:`모든 칸의 비율이 같고, 칸을 넘치는 부분은 잘립니다.`},{label:`contain`,note:`모든 칸의 비율이 같고, 이미지 전체가 보이며 남는 곳은 여백입니다.`}],C=[`center`,`top`],w=[{label:`CSS`,language:`css`,code:_},{label:`HTML`,language:`xml`,code:`<ul class="demo-ratio-list">
  <li class="demo-ratio-card">
    <!-- width·height에는 원본 크기를 적습니다. 로드 전에도 자리 비율을 계산할 수 있습니다. -->
    <img class="demo-ratio-img" src="product-01.jpg" width="400" height="200" alt="접이식 캠핑 의자">
    <p class="demo-ratio-name">접이식 캠핑 의자</p>
  </li>
  <li class="demo-ratio-card">
    <!-- 세로형 이미지는 위쪽 기준으로 자릅니다. -->
    <img class="demo-ratio-img demo-ratio-img-top" src="product-02.jpg" width="200" height="400" alt="스탠드 조명">
    <p class="demo-ratio-name">스탠드 조명</p>
  </li>
</ul>`}],T={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ratio-problem-label`},E=[`aria-checked`,`onClick`],D={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ratio-ratio-label`},O=[`aria-checked`,`onClick`],k={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ratio-fit-label`},A=[`aria-checked`,`onClick`],j={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ratio-position-label`},M=[`aria-checked`,`onClick`],N=[`src`,`width`,`height`,`alt`],P={class:`demo-ratio-name`},F={__name:`ImageRatioDemo`,setup(o){let c=n(`fixed`),d=n(`4:3`),_=n(`cover`),v=n(`center`),w=m(()=>b.find(e=>e.value===c.value)),F=m(()=>x.find(e=>e.label===d.value)),I=m(()=>S.find(e=>e.label===_.value));return(n,o)=>(e(),u(g,{problem:{code:w.value.code,note:w.value.note},solved:{code:`aspect-ratio: ${F.value.value}; object-fit: ${I.value.label}`,note:I.value.note}},{controls:r(()=>[o[0]||=i(`span`,{id:`demo-ratio-problem-label`,class:`demo-label`},`문제 유형`,-1),i(`div`,T,[(e(!0),a(p,null,l(t(b),t=>(e(),a(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":c.value===t.value,onClick:e=>c.value=t.value},f(t.label),9,E))),128))]),o[1]||=i(`span`,{id:`demo-ratio-ratio-label`,class:`demo-label`},`비율(aspect-ratio)`,-1),i(`div`,D,[(e(!0),a(p,null,l(t(x),t=>(e(),a(`button`,{key:t.label,type:`button`,role:`radio`,"aria-checked":d.value===t.label,onClick:e=>d.value=t.label},f(t.label),9,O))),128))]),o[2]||=i(`span`,{id:`demo-ratio-fit-label`,class:`demo-label`},`맞춤 방식(object-fit)`,-1),i(`div`,k,[(e(!0),a(p,null,l(t(S),t=>(e(),a(`button`,{key:t.label,type:`button`,role:`radio`,"aria-checked":_.value===t.label,onClick:e=>_.value=t.label},f(t.label),9,A))),128))]),o[3]||=i(`span`,{id:`demo-ratio-position-label`,class:`demo-label`},`기준 위치(object-position)`,-1),i(`div`,j,[(e(!0),a(p,null,l(t(C),t=>(e(),a(`button`,{key:t,type:`button`,role:`radio`,"aria-checked":v.value===t,onClick:e=>v.value=t},f(t),9,M))),128))])]),caption:r(()=>[...o[4]||=[s(` 문제 유형은 문제 상태에, 비율·맞춤 방식·기준 위치는 해결 상태에 적용됩니다. 점선 테두리가 끊기면 잘린 것이고, 가운데 원이 타원이 되면 늘어난 것입니다. `,-1)]]),default:r(()=>[i(`ul`,{class:h([`demo-ratio-list`,{"demo-ratio-list-fixed":c.value===`fixed`}])},[(e(!0),a(p,null,l(t(y),t=>(e(),a(`li`,{key:t.name,class:`demo-ratio-card`},[i(`img`,{class:h([`demo-ratio-img`,[F.value.className,{"demo-ratio-img-contain":_.value===`contain`,"demo-ratio-img-top":v.value===`top`}]]),src:t.src,width:t.width,height:t.height,alt:`${t.name} 예제 이미지`},null,10,N),i(`p`,P,[s(f(t.name)+` `,1),i(`span`,null,f(t.width)+`×`+f(t.height),1)])]))),128))],2)]),_:1},8,[`problem`,`solved`]))}},I={class:`doc-body`},L={id:`section-0`},R={id:`section-1`},z={id:`section-2`},B={id:`section-3`},V={id:`section-4`},ee={id:`section-7`},H=`image-ratio`,U=16,W=`크기가 제각각인 이미지를 같은 비율로 맞추기 (aspect-ratio, object-fit)`,G=`이미지 비율 유지·자르기`,K=`가로형·세로형·정사각 이미지가 섞여도 aspect-ratio로 칸의 비율을 고정하고, object-fit으로 이미지를 칸에 맞춰 카드 높이를 맞춥니다.`,q=`업로드한 이미지마다 카드 높이가 달라지거나 이미지가 찌그러진다면?
이미지 크기를 고정하기보다, 칸의 비율을 정하고 이미지를 그 칸에 맞추세요.
`,J=`텍스트·미디어`,Y=`이미지`,X=[`이미지`,`썸네일`,`aspect-ratio`,`object-fit`,`object-position`,`카드`],Z=`기초`,Q=`약 10분`,$=[`img 요소`,`대체 요소(replaced element)`],te=`aspect-ratio: 4 / 3; object-fit: cover`,ne=`published`,re=`2026-11-11`,ie=[`image-gap`,`line-clamp`],ae=[{title:`CSS Box Sizing Level 4 — aspect-ratio`,url:`https://www.w3.org/TR/css-sizing-4/#aspect-ratio`},{title:`CSS Images Level 3 — object-fit`,url:`https://www.w3.org/TR/css-images-3/#the-object-fit`},{title:`MDN — object-position`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/object-position`},{title:`MDN — img 요소의 width·height 속성`,url:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img`}],oe={__name:`image-ratio`,setup(n,{expose:l}){return l({frontmatter:{id:`image-ratio`,order:16,title:`크기가 제각각인 이미지를 같은 비율로 맞추기 (aspect-ratio, object-fit)`,navTitle:`이미지 비율 유지·자르기`,summary:`가로형·세로형·정사각 이미지가 섞여도 aspect-ratio로 칸의 비율을 고정하고, object-fit으로 이미지를 칸에 맞춰 카드 높이를 맞춥니다.`,lead:`업로드한 이미지마다 카드 높이가 달라지거나 이미지가 찌그러진다면?
이미지 크기를 고정하기보다, 칸의 비율을 정하고 이미지를 그 칸에 맞추세요.
`,group:`텍스트·미디어`,topic:`이미지`,tags:[`이미지`,`썸네일`,`aspect-ratio`,`object-fit`,`object-position`,`카드`],level:`기초`,duration:`약 10분`,prerequisites:[`img 요소`,`대체 요소(replaced element)`],keyProperty:`aspect-ratio: 4 / 3; object-fit: cover`,status:`published`,updated:`2026-11-11`,related:[`image-gap`,`line-clamp`],references:[{title:`CSS Box Sizing Level 4 — aspect-ratio`,url:`https://www.w3.org/TR/css-sizing-4/#aspect-ratio`},{title:`CSS Images Level 3 — object-fit`,url:`https://www.w3.org/TR/css-images-3/#the-object-fit`},{title:`MDN — object-position`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/object-position`},{title:`MDN — img 요소의 width·height 속성`,url:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`DocPractice`);return e(),a(`div`,I,[i(`section`,L,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,[s(`상품 목록 카드에 관리자가 올린 이미지를 넣습니다. 이미지는 가로형, 세로형, 정사각이 섞여 들어옵니다. `),i(`code`,null,`width: 100%`),s(`만 주면 세로형 이미지 카드만 길어지고, 높이까지 고정하면 이미지가 늘어나거나 눌려 보입니다.`)],-1),l[4]||=i(`p`,null,`퍼블리싱할 때는 같은 크기의 샘플 이미지로 작업해서 지나치기 쉽고, 실제 상품 이미지가 등록된 뒤 QA에서 이런 형태로 돌아옵니다.`,-1),o(u,{title:`상품 목록: 이미지 크기에 따라 카드 높이가 다르고, 일부 이미지가 찌그러짐`,env:`전체 브라우저 · 상품 목록 4열 카드`,expected:`모든 썸네일이 같은 비율(4:3)로 보이고 카드 높이와 상품명 위치가 맞음`,actual:`세로형 이미지 카드만 길어짐, 높이를 고정한 화면에서는 이미지가 늘어나 보임`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`가로형(400×200)과 세로형(200×400) 상품 이미지를 각각 등록합니다.`),i(`li`,null,`상품 목록 화면을 엽니다.`),i(`li`,null,`같은 줄 카드의 높이와 이미지 모양을 비교합니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`이미지에 `),i(`strong`,null,[i(`code`,null,`aspect-ratio`),s(`로 칸의 비율을`)]),s(` 정하고, `),i(`code`,null,`object-fit: cover`),s(`로 이미지를 그 칸에 맞추세요.`)],-1)]]),_:1})]),i(`section`,R,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[6]||=i(`p`,null,`문제 유형과 비율·맞춤 방식을 바꾸면서, 원본 크기가 다른 이미지 4개가 어떻게 그려지는지 확인해 보세요.`,-1),o(F)]),i(`section`,z,[l[8]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>img</code>는 원본 크기와 비율을 가진 요소입니다. 너비만 <code>100%</code>로 정하면 높이는 원본 비율에 따라 계산되므로, 세로형 이미지는 같은 너비에서 더 길게 그려집니다. 반대로 너비와 높이를 모두 고정하면 <code>object-fit</code>의 기본값 <code>fill</code> 때문에 이미지가 원본 비율을 무시하고 상자에 맞춰 늘어납니다.</p><p><code>aspect-ratio</code>는 이미지를 그릴 <strong>상자(칸)의 비율</strong>을 정합니다. 너비가 <code>100%</code>이고 높이가 <code>auto</code>이면 높이는 이 비율로 계산되어, 원본 크기와 상관없이 모든 칸이 같은 모양이 됩니다.</p><p>칸의 모양이 정해지면 그 안에 이미지를 어떻게 넣을지를 <code>object-fit</code>으로 고릅니다. <code>cover</code>는 비율을 유지한 채 칸을 가득 채우고 넘치는 부분을 잘라냅니다. <code>contain</code>은 이미지 전체가 보이도록 줄이고 남는 곳은 여백으로 둡니다. 어느 부분을 남길지는 <code>object-position</code>으로 정하며, 기본값은 가운데(<code>50% 50%</code>)입니다.</p>`,4),o(p,null,{default:r(()=>[...l[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`칸의 비율을 정하고`),s(),i(`code`,null,`aspect-ratio: 4 / 3`)]),i(`li`,null,[i(`strong`,null,`이미지를 칸에 맞추고`),s(),i(`code`,null,`object-fit: cover`)]),i(`li`,null,[i(`strong`,null,`남길 부분을 고르기`),s(),i(`code`,null,`object-position: center top`)])],-1)]]),_:1})]),i(`section`,B,[l[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[11]||=i(`p`,null,[s(`이미지 모양이 어긋날 때는 `),i(`strong`,null,`원본 크기와 화면에 그려진 크기`),s(`를 나란히 비교합니다. 아래 순서로 보면 비율 지정이 없는지, 이미지가 늘어난 것인지 구분할 수 있습니다.`)],-1),o(m,null,{default:r(()=>[...l[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 img 선택`),s(` 어긋난 카드의 이미지에서 마우스 오른쪽 버튼을 눌러 `),i(`strong`,null,`검사`),s(`를 고릅니다. 감싼 요소가 아니라 `),i(`code`,null,`img`),s(` 요소가 선택되었는지 확인합니다.`)]),i(`li`,null,[i(`strong`,null,`Console에서 원본 크기 확인`),s(` Console에 `),i(`code`,null,`$0.naturalWidth`),s(`, `),i(`code`,null,`$0.naturalHeight`),s(`를 입력합니다. `),i(`code`,null,`$0`),s(`은 Elements에서 선택한 요소입니다. 카드마다 원본 비율이 다르다면 CSS가 비율을 맞춰 줘야 합니다.`)]),i(`li`,null,[i(`strong`,null,`Computed 탭에서 그려진 크기 확인`),s(` Computed 탭 위쪽의 박스 모델 그림에서 너비와 높이를 봅니다. 카드마다 높이가 다르면 칸의 비율이 정해지지 않은 것이고, 높이는 같은데 원본 비율과 다르면 이미지가 늘어난 것입니다.`)]),i(`li`,null,[i(`strong`,null,`object-fit 값 확인 후 Styles 탭에서 시험`),s(` Computed 탭에서 `),i(`strong`,null,`Show all`),s(`을 켜고 `),i(`code`,null,`object-fit`),s(`을 검색합니다. 기본값은 이 옵션을 켜야 보입니다. `),i(`code`,null,`fill`),s(`이면 늘어날 수 있습니다. Styles 탭에서 `),i(`code`,null,`height: auto`),s(`, `),i(`code`,null,`aspect-ratio: 4 / 3`),s(`, `),i(`code`,null,`object-fit: cover`),s(`를 추가해 모양이 맞춰지는지 확인합니다.`)])],-1)]]),_:1})]),i(`section`,V,[l[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[13]||=i(`p`,null,[s(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),i(`code`,null,`aspect-ratio`),s(`와 `),i(`code`,null,`object-fit`),s(`이 같은 `),i(`code`,null,`img`),s(`에 함께 적용되는 것을 확인하세요.`)],-1),o(h,{tabs:t(w)},null,8,[`tabs`])]),l[16]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>이미지를 정해진 비율의 칸에 맞추는 문제는 이미지 태그 밖에서도 나타납니다. 상황에 맞게 아래를 함께 확인하세요.</p><h3>배경 이미지로 넣을 때</h3><p><code>background-image</code>는 요소 크기에 영향을 주지 않으므로, 요소에 비율을 따로 정해야 합니다. 칸에 맞추는 방법은 <code>background-size</code>의 <code>cover</code>·<code>contain</code>으로 고르고, 기준 위치는 <code>background-position</code>으로 정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.banner</span> {
  <span class="hljs-attribute">aspect-ratio</span>: <span class="hljs-number">16</span> / <span class="hljs-number">9</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">banner.jpg</span>) no-repeat center / cover;
}
</code></pre><h3>동영상·지도 iframe을 16:9로</h3><p><code>iframe</code>은 넣은 내용과 상관없이 정한 크기로 그려집니다. 너비를 <code>100%</code>로 두고 <code>aspect-ratio</code>로 높이를 계산합니다. 예전 코드에서 보이는 감싼 요소의 <code>padding-top: 56.25%</code>는 같은 목적의 이전 방식입니다(세로 패딩 %는 부모 너비 기준).</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.video-frame</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: auto;
  <span class="hljs-attribute">aspect-ratio</span>: <span class="hljs-number">16</span> / <span class="hljs-number">9</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">0</span>;
}
</code></pre><h3>이미지가 늦게 뜰 때 아래 내용이 밀림</h3><p>이미지를 불러오기 전에는 원본 크기를 알 수 없어 자리가 거의 잡히지 않았다가, 로드 후 내용이 아래로 밀릴 수 있습니다(레이아웃 이동, CLS). <code>img</code>에 원본 크기를 <code>width</code>·<code>height</code> 속성으로 적으면 최신 브라우저는 이 값으로 기본 비율을 계산해 미리 자리를 잡습니다. CSS에서는 <code>height: auto</code>로 두어야 그 비율이 쓰입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;product-01.jpg&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;접이식 캠핑 의자&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-tag">img</span> { <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>; <span class="hljs-attribute">height</span>: auto; }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>height: auto</code>를 함께 적습니다.</strong> <code>width</code>·<code>height</code> 속성은 CSS 높이로도 쓰입니다. CSS에서 높이를 <code>auto</code>로 되돌리지 않으면 높이가 고정되어 <code>aspect-ratio</code>가 적용되지 않고 이미지가 늘어날 수 있습니다.</li><li><strong><code>cover</code>는 이미지 일부를 잘라냅니다.</strong> 상품 전체가 보여야 하는 목록이라면 <code>contain</code>을 쓰거나, 이미지 등록 기준(비율, 여백)을 기획·운영과 함께 정하세요. 글자가 들어간 이미지는 잘렸을 때 정보가 사라집니다.</li><li><strong>대체 텍스트는 그대로 필요합니다.</strong> <code>object-fit</code>은 보이는 모양만 바꿉니다. 잘린 부분이 있어도 <code>alt</code>에는 이미지가 전하는 정보(상품명 등)를 적고, 장식용 이미지라면 <code>alt=&quot;&quot;</code>로 둡니다.</li><li><strong>브라우저 지원을 확인합니다.</strong> <code>aspect-ratio</code>, <code>object-fit</code>은 현재 주요 브라우저에서 쓸 수 있습니다. 아주 오래된 브라우저까지 지원해야 하는 프로젝트라면 지원 범위를 실제 환경에서 확인하세요. 예전 코드의 <code>padding-top: 75%</code> 같은 비율 상자는 <code>aspect-ratio</code>로 바꿀 수 있습니다.</li></ul></section>`,2),i(`section`,ee,[l[15]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(g,null,{default:r(()=>[...l[14]||=[i(`p`,null,`위 예제에서 문제 유형을 바꿔 보고, 해결 상태의 비율·맞춤 방식·기준 위치를 차례로 바꿔 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`‘늘어남’ 문제 상태에서 가운데 원이 타원으로 찌그러진다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태에서 contain을 고르면 세로형 이미지 양옆에 여백이 생긴다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`cover와 top을 고르면 세로형 이미지의 ‘위’ 글자가 보인다.`)])])],-1)]]),_:1})])])}}};export{oe as default,Q as duration,J as group,H as id,te as keyProperty,q as lead,Z as level,G as navTitle,U as order,$ as prerequisites,ae as references,ie as related,ne as status,K as summary,X as tags,W as title,Y as topic,re as updated};