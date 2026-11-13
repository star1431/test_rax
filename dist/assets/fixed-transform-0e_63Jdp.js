import{D as e,G as t,H as n,R as r,a as i,c as a,d as o,ft as s,g as c,h as l,j as u,k as d,l as f,m as p,pt as m,r as h,s as g,u as _}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=`.demo-fixed-card {
  padding: 12px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
  transform: translateX(0); /* 예: 애니메이션 라이브러리가 넣은 transform */
}
.demo-fixed-card p {
  margin: 0 0 6px;
}
.demo-fixed-layer {
  position: fixed; /* 기준: 화면(뷰포트) — 조상에 transform이 있으면 그 조상 */
  right: 12px;
  bottom: 12px;
  left: 12px;
  padding: 10px 12px;
  border-radius: 6px;
  background: #23334b;
  color: #fff;
  font-size: 12px;
}
`,b=[{label:`transform`,style:{transform:`translateX(0)`}},{label:`filter`,style:{transform:`none`,filter:`blur(0)`}},{label:`will-change`,style:{transform:`none`,willChange:`transform`}},{label:`없음`,style:{transform:`none`}}],x=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<!-- 문제: 레이어가 transform이 있는 카드 안에 있습니다. -->
<div class="demo-fixed-card">
  <p>카드 내용</p>
  <div class="demo-fixed-layer" role="status">저장했습니다.</div>
</div>

<!-- 해결: 레이어를 body 바로 아래로 옮깁니다. -->
<body>
  <div class="demo-fixed-card">
    <p>카드 내용</p>
  </div>
  <div class="demo-fixed-layer" role="status">저장했습니다.</div>
</body>`},{label:`Vue`,language:`xml`,code:`<template>
  <div class="demo-fixed-card">
    <p>카드 내용</p>
    <!-- 컴포넌트 안에서 작성하되, 렌더링 위치는 body로 옮깁니다. -->
    <Teleport to="body">
      <div v-if="saved" class="demo-fixed-layer" role="status">저장했습니다.</div>
    </Teleport>
  </div>
</template>`}],S={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-fixed-label`},C=[`aria-checked`,`onClick`],w={class:`demo-screen-body`},T={key:0,id:`demo-fixed-root`},E={__name:`FixedTransformDemo`,setup(c){let u=n(b[0].label),p=g(()=>b.find(e=>e.label===u.value));return(n,c)=>(e(),f(v,{problem:{code:`레이어: 카드 안`,note:`레이어가 화면이 아닌 카드 하단에 붙습니다.`},solved:{code:`레이어: Teleport → 화면 직속`,note:`레이어가 화면 하단에 붙습니다.`},"viewport-class":`demo-viewport-screen`},{controls:r(()=>[c[0]||=a(`span`,{id:`demo-fixed-label`},`카드(조상)에 적용된 속성`,-1),a(`div`,S,[(e(!0),o(h,null,d(t(b),t=>(e(),o(`button`,{key:t.label,type:`button`,role:`radio`,"aria-checked":u.value===t.label,onClick:e=>u.value=t.label},m(t.label),9,C))),128))])]),default:r(({solved:t})=>[c[4]||=a(`div`,{class:`demo-screen-bar`},`가상 화면`,-1),a(`div`,w,[a(`div`,{class:`demo-fixed-card`,style:s(p.value.style)},[a(`p`,null,[c[1]||=l(`카드 내용입니다. 카드에 `,-1),a(`code`,null,m(u.value),1),c[2]||=l(` 속성이 있습니다.`,-1)]),(e(),f(i,{defer:``,to:`#demo-fixed-root`,disabled:!t},[c[3]||=a(`div`,{class:`demo-fixed-layer`,role:`status`},`저장했습니다.`,-1)],8,[`disabled`]))],4)]),t?(e(),o(`div`,T)):_(``,!0)]),caption:r(()=>[...c[5]||=[l(` 예제 화면 틀은 실제 화면을 덮지 않도록 transform으로 ‘가상 화면’을 만들었습니다. 본문에서 설명하는 원리를 그대로 이용한 것입니다. `,-1)]]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-7`},P=`fixed-transform`,F=4,I=`fixed 요소가 화면 기준으로 배치되지 않을 때`,L=`fixed 기준 오류`,R=`조상 요소의 transform·filter·will-change가 fixed 요소의 기준을 바꾸는 원리를 이해하고, 레이어를 body로 옮겨 해결합니다.`,z=`화면 하단에 붙어야 할 레이어가 카드 안에 붙는다면?
레이어의 속성보다 먼저, 조상 요소의 transform을 확인하세요.
`,B=`레이아웃`,V=`위치`,H=[`position`,`fixed`,`transform`,`Teleport`,`레이어`,`토스트`],U=`중급`,W=`약 12분`,G=[`position`,`containing block`],K=`transform → 기준 변경`,q=`published`,J=`2026-11-11`,Y=[`flex-scroll-area`],X=[{title:`CSS Transforms — transform 속성과 containing block`,url:`https://www.w3.org/TR/css-transforms-1/#transform-rendering`},{title:`MDN — 컨테이닝 블록`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block`},{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport`}],Z={__name:`fixed-transform`,setup(n,{expose:i}){return i({frontmatter:{id:`fixed-transform`,order:4,title:`fixed 요소가 화면 기준으로 배치되지 않을 때`,navTitle:`fixed 기준 오류`,summary:`조상 요소의 transform·filter·will-change가 fixed 요소의 기준을 바꾸는 원리를 이해하고, 레이어를 body로 옮겨 해결합니다.`,lead:`화면 하단에 붙어야 할 레이어가 카드 안에 붙는다면?
레이어의 속성보다 먼저, 조상 요소의 transform을 확인하세요.
`,group:`레이아웃`,topic:`위치`,tags:[`position`,`fixed`,`transform`,`Teleport`,`레이어`,`토스트`],level:`중급`,duration:`약 12분`,prerequisites:[`position`,`containing block`],keyProperty:`transform → 기준 변경`,status:`published`,updated:`2026-11-11`,related:[`flex-scroll-area`],references:[{title:`CSS Transforms — transform 속성과 containing block`,url:`https://www.w3.org/TR/css-transforms-1/#transform-rendering`},{title:`MDN — 컨테이닝 블록`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block`},{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport`}]}}),(n,i)=>{let s=u(`DocIssue`),d=u(`DocTakeaway`),f=u(`DocTerm`),m=u(`DocSteps`),h=u(`DocInspect`),g=u(`CodePanel`),_=u(`DocPractice`);return e(),o(`div`,D,[a(`section`,O,[i[2]||=a(`h2`,null,[a(`span`,{class:`section-no`},`01`),l(` 문제 상황`)],-1),i[3]||=a(`p`,null,[l(`카드 안의 저장 버튼을 누르면 화면 하단에 알림 레이어(`),a(`code`,null,`position: fixed`),l(`)를 띄우려고 합니다. 그런데 레이어가 화면이 아니라 카드 하단에 붙고, 카드가 스크롤되면 함께 움직입니다.`)],-1),i[4]||=a(`p`,null,`레이어만 따로 확인할 때는 정상이다가, 슬라이더나 등장 애니메이션이 붙은 화면에서만 나타나 QA에서 이런 형태로 돌아옵니다.`,-1),c(s,{title:`관심 상품: 저장 알림이 화면 하단이 아닌 카드 안에 표시됨`,env:`전체 브라우저 · 슬라이더 안의 상품 카드`,expected:`'저장했습니다' 알림이 화면 하단에 고정되어 보임`,actual:`알림이 카드 하단에 붙고, 슬라이더 영역 밖으로 나간 부분은 잘려 보임`},{default:r(()=>[...i[0]||=[a(`ol`,null,[a(`li`,null,`메인 화면의 추천 상품 슬라이더로 이동합니다.`),a(`li`,null,`두 번째 슬라이드에 있는 상품 카드의 저장 버튼을 누릅니다.`),a(`li`,null,`알림이 표시되는 위치를 확인합니다.`)],-1)]]),_:1}),c(d,null,{default:r(()=>[...i[1]||=[a(`p`,null,[l(`조상에 `),a(`strong`,null,`transform`),l(` 계열 속성이 있으면, 레이어를 `),a(`code`,null,`body`),l(` 바로 아래로 옮기세요. Vue에서는 `),a(`code`,null,`<Teleport to="body">`),l(`를 사용합니다.`)],-1)]]),_:1})]),a(`section`,k,[i[5]||=a(`h2`,null,[a(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),a(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[6]||=a(`p`,null,`카드에 적용된 속성을 바꾸면서 레이어가 어디를 기준으로 붙는지 비교해 보세요. ‘없음’을 선택하면 두 상태가 같아집니다.`,-1),c(E)]),a(`section`,A,[i[12]||=a(`h2`,null,[a(`span`,{class:`section-no`},`03`),l(` 왜 이런 일이 생길까요?`)],-1),a(`p`,null,[i[8]||=a(`code`,null,`position: fixed`,-1),i[9]||=l(`는 보통 화면(`,-1),c(f,{term:`viewport`},{default:r(()=>[...i[7]||=[l(`뷰포트`,-1)]]),_:1}),i[10]||=p(`)을 기준으로 배치됩니다. 하지만 조상 요소에 <code>transform</code>, <code>filter</code>, <code>perspective</code>, <code>will-change: transform</code>, <code>contain: paint</code>, <code>backdrop-filter</code> 등이 있으면 그 조상이 <strong>fixed 요소의 기준</strong>(containing block)이 됩니다.`,15)]),i[13]||=a(`p`,null,[l(`이 속성들은 요소를 별도로 그리기 위한 기준을 만듭니다. 그래서 자손의 fixed 위치도 그 조상 안에서 계산되고, 조상의 `),a(`code`,null,`overflow: hidden`),l(`에 잘리기도 합니다. 레이어의 CSS를 아무리 바꿔도 해결되지 않는 이유입니다.`)],-1),c(m,null,{default:r(()=>[...i[11]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`조상에 transform 계열 속성`),l(),a(`code`,null,`transform`)]),a(`li`,null,[a(`strong`,null,`조상이 기준이 됨`),l(),a(`code`,null,`containing block`)]),a(`li`,null,[a(`strong`,null,`레이어를 기준 밖으로`),l(),a(`code`,null,`<Teleport to="body">`)])],-1)]]),_:1})]),a(`section`,j,[i[15]||=a(`h2`,null,[a(`span`,{class:`section-no`},`04`),l(` 원인 찾기`)],-1),i[16]||=a(`p`,null,[l(`fixed 레이어가 엉뚱한 곳에 붙을 때는 레이어의 CSS보다 `),a(`strong`,null,`어느 조상이 기준이 되었는지`),l(`부터 찾습니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),c(h,null,{default:r(()=>[...i[14]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`Elements 패널에서 레이어 선택`),a(`code`,null,`.demo-fixed-layer`),l(`를 선택하고 Computed 탭에서 `),a(`code`,null,`position`),l(`이 `),a(`code`,null,`fixed`),l(`인지 확인합니다. 값이 맞다면 레이어 자체가 아니라 조상 쪽을 봐야 합니다.`)]),a(`li`,null,[a(`strong`,null,`조상 요소를 차례로 거슬러 확인`),l(` Elements 패널에서 부모 요소를 하나씩 선택하며 Computed 탭에서 `),a(`code`,null,`transform`),l(`, `),a(`code`,null,`filter`),l(`, `),a(`code`,null,`will-change`),l(`를 검색합니다. 값이 `),a(`code`,null,`none`),l(`이나 `),a(`code`,null,`auto`),l(`가 아닌 첫 번째 조상이 기준입니다.`)]),a(`li`,null,[a(`strong`,null,`인라인 스타일 확인`),l(` 라이브러리가 넣은 값은 Elements 패널의 `),a(`code`,null,`style`),l(` 속성과 Styles 탭 맨 위 `),a(`code`,null,`element.style`),l(` 항목에 보입니다. CSS 파일을 검색해도 나오지 않는다면 이 경우입니다.`)]),a(`li`,null,[a(`strong`,null,`Styles 탭에서 속성 끄기`),l(` 찾은 조상의 `),a(`code`,null,`transform`),l(` 선언 앞 체크박스를 해제해 봅니다. 레이어가 화면 하단으로 돌아가면 원인이 확정됩니다.`)])],-1)]]),_:1})]),a(`section`,M,[i[17]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),l(` 해결 코드`)],-1),i[18]||=a(`p`,null,[l(`CSS는 그대로 두고 `),a(`strong`,null,`DOM 위치`),l(`를 바꾸는 것이 핵심입니다. HTML 탭에서 문제·해결 구조를, Vue 탭에서 Teleport 사용법을 확인하세요.`)],-1),c(g,{tabs:t(x)},null,8,[`tabs`]),i[19]||=p(`<p>조상의 transform을 직접 제거할 수 있다면 그 방법도 가능합니다. 위치 이동 애니메이션은 <code>transform</code> 대신 <code>translate</code> 속성이나 다른 방식으로 바꿀 수 있는지 검토하세요. 다만 <code>translate</code>, <code>rotate</code>, <code>scale</code> 개별 속성도 <code>none</code>이 아니면 같은 기준을 만듭니다.</p>`,1)]),i[22]||=p(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>조상이 fixed 요소의 기준이 되는 일은 transform을 직접 쓰지 않은 곳에서도 생깁니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>흐림 효과가 있는 헤더 안의 메뉴</h3><p><code>backdrop-filter</code>도 기준을 만듭니다. 헤더 안에 전체 화면 메뉴를 fixed로 두면 메뉴가 헤더 크기로 잡힙니다. 흐림 효과를 가상 요소로 옮기면 메뉴의 조상에서 빠집니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.site-header</span> {
  <span class="hljs-attribute">position</span>: sticky;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
}
<span class="hljs-selector-class">.site-header</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;&#39;</span>;
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">inset</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">z-index</span>: -<span class="hljs-number">1</span>;
  <span class="hljs-attribute">backdrop-filter</span>: <span class="hljs-built_in">blur</span>(<span class="hljs-number">8px</span>); <span class="hljs-comment">/* 헤더 대신 가상 요소에 적용 */</span>
}
</code></pre><h3>등장 애니메이션이 끝난 뒤에도 남을 때</h3><p><code>animation-fill-mode: forwards</code>는 마지막 키프레임 값을 계속 유지합니다. 끝 값이 <code>translateY(0)</code>이면 <code>none</code>이 아니므로 기준이 남습니다. 끝 값을 <code>none</code>으로 지정하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@keyframes</span> fade-up {
  <span class="hljs-selector-tag">from</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(<span class="hljs-number">16px</span>); }
  <span class="hljs-selector-tag">to</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>; <span class="hljs-attribute">transform</span>: none; } <span class="hljs-comment">/* translateY(0) 대신 */</span>
}
<span class="hljs-selector-class">.card</span> { <span class="hljs-attribute">animation</span>: fade-up <span class="hljs-number">0.3s</span> forwards; }
</code></pre><h3>z-index를 올려도 다른 요소 아래에 깔릴 때</h3><p>transform은 쌓임 맥락(stacking context)도 만듭니다. 레이어의 <code>z-index</code>는 카드 안에서만 비교되므로, 카드 뒤에 오는 요소보다 위로 올라가지 못합니다. 이 경우도 레이어를 body로 옮기면 해결됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card</span> { <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(<span class="hljs-number">0</span>); }  <span class="hljs-comment">/* 쌓임 맥락 생성 */</span>
<span class="hljs-selector-class">.card</span> <span class="hljs-selector-class">.layer</span> {
  <span class="hljs-attribute">position</span>: fixed;
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">9999</span>; <span class="hljs-comment">/* 카드 밖 요소와는 비교되지 않음 */</span>
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>라이브러리가 넣는 속성을 확인합니다.</strong> 슬라이더·애니메이션 라이브러리가 조상에 <code>transform</code>이나 <code>will-change</code>를 인라인 스타일로 넣는 경우가 많습니다. 개발자 도구의 Computed 탭에서 확인하세요.</li><li><strong>Teleport 대상이 먼저 있어야 합니다.</strong> <code>to</code>로 지정한 요소가 렌더링 시점에 없으면 오류가 납니다. 같은 컴포넌트 안의 요소로 옮길 때는 <code>defer</code> 속성을 사용합니다.</li><li><strong>레이어 동작은 따로 구현합니다.</strong> 위치를 옮겨도 배경 스크롤 잠금, 포커스 가두기, Escape 닫기 같은 동작은 자동으로 생기지 않습니다.</li><li><strong>스크린 리더 순서를 확인합니다.</strong> body 끝으로 옮긴 레이어는 읽기 순서도 바뀝니다. 알림은 <code>role=&quot;status&quot;</code>, 대화상자는 <code>role=&quot;dialog&quot;</code>와 포커스 이동을 함께 적용하세요.</li></ul></section>`,2),a(`section`,N,[i[21]||=a(`h2`,null,[a(`span`,{class:`section-no`},`08`),l(` 짧은 실습`)],-1),c(_,null,{default:r(()=>[...i[20]||=[a(`p`,null,`위 예제에서 카드 속성을 transform → filter → will-change → 없음 순서로 바꿔보세요.`,-1),a(`ul`,{class:`checklist`},[a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`transform, filter, will-change에서는 문제 상태의 레이어가 카드 하단에 붙는다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`해결 상태의 레이어는 속성과 관계없이 화면 하단에 붙는다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`‘없음’을 선택하면 두 상태의 레이어 위치가 같아진다.`)])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};