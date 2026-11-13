import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,u as h,ut as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as _}from"./DemoCompare-Bd6h8ThJ.js";var v=`.demo-z-list {
  display: grid;
  gap: 8px;
  min-width: 240px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-z-card {
  position: relative; /* 메뉴(absolute)의 기준. z-index가 없으면 쌓임 맥락은 만들지 않습니다. */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-z-card p {
  margin: 0;
}

/* 카드에 쌓임 맥락을 만드는 속성 (예제에서 하나를 골라 모든 카드에 적용) */
.demo-z-card-zindex {
  z-index: 1; /* position과 함께 쓰면 쌓임 맥락 생성 */
}
.demo-z-card-transform {
  transform: translateY(0); /* 예: 등장 애니메이션이 남긴 transform */
}
.demo-z-card-opacity {
  opacity: 0.99;
}
.demo-z-card-isolate {
  isolation: isolate;
}

/* 해결: 메뉴가 열린 카드를 형제 카드보다 한 단계 위로 올립니다. */
.demo-z-card-open {
  z-index: 2; /* 형제 카드(1 또는 auto)보다 크게 */
}

.demo-z-toggle {
  padding: 3px 8px;
  border: 1px solid #c9d4e3;
  border-radius: 4px;
  background: #fff;
  font-size: 12px;
}
.demo-z-menu {
  position: absolute;
  top: calc(100% - 4px);
  right: 12px;
  z-index: 9999; /* 카드의 쌓임 맥락 안에서만 비교됩니다. */
  width: 112px;
  margin: 0;
  padding: 4px 0;
  border: 1px solid #23334b;
  border-radius: 6px;
  background: #23334b;
  color: #fff;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.demo-z-menu li {
  padding: 5px 12px;
}
`,y=[{label:`z-index: 1`,className:`demo-z-card-zindex`},{label:`transform`,className:`demo-z-card-transform`},{label:`opacity: 0.99`,className:`demo-z-card-opacity`},{label:`isolation`,className:`demo-z-card-isolate`},{label:`없음`,className:``}],b=[`주문 A-1024 · 배송 중`,`주문 A-1023 · 배송 완료`,`주문 A-1022 · 배송 완료`],x=[`배송 조회`,`교환 신청`,`주문 취소`],S=[{label:`CSS`,language:`css`,code:v},{label:`HTML`,language:`xml`,code:`<ul class="demo-z-list">
  <!-- 문제: 메뉴가 열려도 카드의 z-index는 형제와 같습니다. -->
  <li class="demo-z-card demo-z-card-zindex">
    <p>주문 A-1024 · 배송 중</p>
    <button type="button" class="demo-z-toggle" aria-expanded="true">더보기</button>
    <ul class="demo-z-menu">
      <li>배송 조회</li>
      <li>교환 신청</li>
      <li>주문 취소</li>
    </ul>
  </li>
  <li class="demo-z-card demo-z-card-zindex">
    <p>주문 A-1023 · 배송 완료</p>
  </li>
</ul>

<!-- 해결: 메뉴가 열린 동안 카드에 demo-z-card-open을 붙입니다. -->
<li class="demo-z-card demo-z-card-zindex demo-z-card-open">
  ...
</li>`},{label:`Vue`,language:`xml`,code:`<template>
  <ul class="demo-z-list">
    <li
      v-for="order in orders"
      :key="order.id"
      class="demo-z-card demo-z-card-zindex"
      :class="{ 'demo-z-card-open': openId === order.id }"
    >
      <p>{{ order.title }}</p>
      <button
        type="button"
        class="demo-z-toggle"
        :aria-expanded="openId === order.id"
        @click="openId = openId === order.id ? null : order.id"
      >
        더보기
      </button>
      <ul v-if="openId === order.id" class="demo-z-menu">
        <li>배송 조회</li>
        <li>교환 신청</li>
        <li>주문 취소</li>
      </ul>
    </li>
  </ul>
</template>`}],C={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-z-label`},w=[`aria-checked`,`onClick`],T={class:`demo-z-list`},E=[`aria-expanded`],D={key:0,class:`demo-z-menu`},O={__name:`ZIndexContextDemo`,setup(o){let c=n(y[0].label),d=n(!0),v=m(()=>y.find(e=>e.label===c.value)),S=m(()=>v.value.className?{code:`menu z-index: 9999`,note:`메뉴가 다음 카드 아래로 깔립니다. 카드끼리는 나중에 나온 카드가 위입니다.`}:{code:`menu z-index: 9999`,note:`카드에 쌓임 맥락이 없어 메뉴의 9999가 카드들과 직접 비교되고, 위로 올라옵니다.`});return(n,o)=>(e(),u(_,{problem:S.value,solved:{code:`.demo-z-card-open { z-index: 2 }`,note:`메뉴가 열린 카드가 형제 카드보다 위에 놓여 메뉴가 보입니다.`}},{controls:r(()=>[o[1]||=i(`span`,{id:`demo-z-label`,class:`demo-label`},`카드에 적용된 속성`,-1),i(`div`,C,[(e(!0),a(p,null,l(t(y),t=>(e(),a(`button`,{key:t.label,type:`button`,role:`radio`,"aria-checked":c.value===t.label,onClick:e=>c.value=t.label},f(t.label),9,w))),128))])]),default:r(({solved:n})=>[i(`ul`,T,[(e(!0),a(p,null,l(t(b),(r,s)=>(e(),a(`li`,{key:r,class:g([`demo-z-card`,[v.value.className,{"demo-z-card-open":n&&s===0&&d.value}]])},[i(`p`,null,f(r),1),s===0?(e(),a(p,{key:0},[i(`button`,{type:`button`,class:`demo-z-toggle`,"aria-expanded":d.value,onClick:o[0]||=e=>d.value=!d.value},`더보기`,8,E),d.value?(e(),a(`ul`,D,[(e(!0),a(p,null,l(t(x),t=>(e(),a(`li`,{key:t},f(t),1))),128))])):h(``,!0)],64)):h(``,!0)],2))),128))])]),caption:r(()=>[...o[2]||=[s(` ‘없음’을 선택하면 카드가 쌓임 맥락을 만들지 않으므로 두 상태 모두 메뉴가 위로 올라옵니다. `,-1)]]),_:1},8,[`problem`]))}},k={class:`doc-body`},A={id:`section-0`},j={id:`section-1`},M={id:`section-2`},N={id:`section-3`},P={id:`section-4`},F={id:`section-7`},I=`z-index-context`,L=8,R=`z-index를 올려도 위로 올라오지 않을 때`,z=`z-index가 안 먹을 때`,B=`드롭다운의 z-index를 9999로 올려도 다음 카드 아래로 깔릴 때, 쌓임 맥락을 만든 조상을 찾아 그 단계에서 순서를 정합니다.`,V=`z-index를 9999로 올렸는데도 옆 카드에 가려진다면?
레이어의 숫자보다 먼저, 쌓임 맥락을 만든 조상을 확인하세요.
`,H=`레이어·스크롤`,U=`레이어`,W=[`z-index`,`쌓임 맥락`,`stacking context`,`드롭다운`,`isolation`,`레이어`],G=`중급`,K=`약 12분`,q=[`position`,`z-index`],J=`쌓임 맥락(stacking context)`,Y=`published`,X=`2026-11-11`,Z=[`fixed-transform`],Q=[{title:`CSS 2.2 — Layered presentation (z-index)`,url:`https://www.w3.org/TR/CSS22/visuren.html#layers`},{title:`MDN — 쌓임 맥락`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context`},{title:`MDN — isolation`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/isolation`}],$={__name:`z-index-context`,setup(n,{expose:l}){return l({frontmatter:{id:`z-index-context`,order:8,title:`z-index를 올려도 위로 올라오지 않을 때`,navTitle:`z-index가 안 먹을 때`,summary:`드롭다운의 z-index를 9999로 올려도 다음 카드 아래로 깔릴 때, 쌓임 맥락을 만든 조상을 찾아 그 단계에서 순서를 정합니다.`,lead:`z-index를 9999로 올렸는데도 옆 카드에 가려진다면?
레이어의 숫자보다 먼저, 쌓임 맥락을 만든 조상을 확인하세요.
`,group:`레이어·스크롤`,topic:`레이어`,tags:[`z-index`,`쌓임 맥락`,`stacking context`,`드롭다운`,`isolation`,`레이어`],level:`중급`,duration:`약 12분`,prerequisites:[`position`,`z-index`],keyProperty:`쌓임 맥락(stacking context)`,status:`published`,updated:`2026-11-11`,related:[`fixed-transform`],references:[{title:`CSS 2.2 — Layered presentation (z-index)`,url:`https://www.w3.org/TR/CSS22/visuren.html#layers`},{title:`MDN — 쌓임 맥락`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context`},{title:`MDN — isolation`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/isolation`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`DocPractice`);return e(),a(`div`,k,[i(`section`,A,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,[s(`주문 내역 카드마다 더보기 메뉴가 있습니다. 첫 번째 카드의 메뉴를 열면 아래 카드 위로 펼쳐져야 하는데, 메뉴가 다음 카드 아래로 깔려 일부 항목이 보이지 않습니다. 메뉴에 `),i(`code`,null,`z-index: 9999`),s(`를 주어도 그대로입니다.`)],-1),l[4]||=i(`p`,null,[s(`카드 하나만 두고 확인할 때는 정상이다가, 목록에 카드가 여러 개 쌓이고 카드에 `),i(`code`,null,`z-index`),s(`나 등장 애니메이션이 붙은 뒤 QA에서 이런 형태로 돌아옵니다.`)],-1),o(u,{title:`주문 내역: 더보기 메뉴가 아래 주문 카드에 가려짐`,env:`전체 브라우저 · 주문 내역 목록(카드 2개 이상)`,expected:`더보기 메뉴가 아래 카드 위로 펼쳐져 모든 항목이 보임`,actual:`메뉴가 다음 카드 아래로 깔려 '교환 신청', '주문 취소'가 가려짐`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`주문이 2건 이상 있는 계정으로 주문 내역 화면을 엽니다.`),i(`li`,null,`첫 번째 주문 카드의 더보기 버튼을 누릅니다.`),i(`li`,null,`펼쳐진 메뉴가 두 번째 카드와 겹치는 부분을 확인합니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[i(`code`,null,`z-index`),s(`는 `),i(`strong`,null,`같은 쌓임 맥락 안에서만`),s(` 비교됩니다. 메뉴가 아니라 메뉴를 감싼 카드의 `),i(`code`,null,`z-index`),s(`를 형제 카드보다 높이세요.`)],-1)]]),_:1})]),i(`section`,j,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[6]||=i(`p`,null,`카드에 적용된 속성을 바꾸면서 메뉴가 다음 카드 위로 올라오는지 비교해 보세요. ‘없음’을 선택하면 두 상태가 같아집니다.`,-1),o(O)]),i(`section`,M,[l[8]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>브라우저는 요소를 <strong>쌓임 맥락</strong>(stacking context) 단위로 겹쳐 그립니다. 어떤 요소가 쌓임 맥락을 만들면 그 안의 자손은 바깥 요소와 직접 비교되지 않고, 요소 전체가 한 장의 층처럼 묶여 부모 쪽 맥락에서 순서가 정해집니다. 메뉴의 <code>z-index: 9999</code>는 카드 안에서 가장 위라는 뜻일 뿐, 카드 밖의 다음 카드보다 위라는 뜻이 아닙니다.</p><p>예제의 카드는 모두 같은 속성을 가지고 있어 같은 단계(<code>z-index: 1</code>, 또는 <code>auto</code>·0과 같은 단계)에 놓입니다. 단계가 같으면 HTML에서 나중에 나온 요소가 위에 그려지므로, 두 번째 카드가 첫 번째 카드를 메뉴째 덮습니다. ‘없음’에서는 카드가 쌓임 맥락을 만들지 않아 메뉴의 9999가 카드들과 같은 맥락에서 비교되고, 그래서 위로 올라옵니다.</p><p>쌓임 맥락을 만드는 속성은 생각보다 많습니다. <code>position</code>(relative·absolute)과 <code>z-index</code>(auto 아님)의 조합, <code>position: fixed</code>·<code>sticky</code>, <code>z-index</code>가 있는 flex·grid 항목, <code>opacity</code>가 1 미만, <code>transform</code>·<code>filter</code>·<code>clip-path</code>·<code>mask</code>, <code>mix-blend-mode</code>, <code>isolation: isolate</code>, 이 속성들을 지정한 <code>will-change</code>, <code>contain: paint</code> 등입니다.</p>`,4),o(p,null,{default:r(()=>[...l[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`카드가 쌓임 맥락을 만들고`),s(),i(`code`,null,`z-index: 1`)]),i(`li`,null,[i(`strong`,null,`메뉴의 숫자는 카드 안에서만 비교`),s(),i(`code`,null,`z-index: 9999`)]),i(`li`,null,[i(`strong`,null,`열린 카드를 형제보다 위로`),s(),i(`code`,null,`.demo-z-card-open { z-index: 2 }`)])],-1)]]),_:1})]),i(`section`,N,[l[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[11]||=i(`p`,null,[i(`code`,null,`z-index`),s(`를 올려도 효과가 없을 때는 숫자를 더 키우기보다 `),i(`strong`,null,`어느 조상이 쌓임 맥락을 만들었는지`),s(`부터 찾습니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),o(m,null,{default:r(()=>[...l[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 레이어 선택`),i(`code`,null,`.demo-z-menu`),s(`를 선택하고 Computed 탭에서 `),i(`code`,null,`position`),s(`과 `),i(`code`,null,`z-index`),s(`를 확인합니다. `),i(`code`,null,`position`),s(`이 `),i(`code`,null,`static`),s(`이면(flex·grid 항목이 아니라면) `),i(`code`,null,`z-index`),s(`가 적용되지 않으니 이것부터 고칩니다.`)]),i(`li`,null,[i(`strong`,null,`조상을 거슬러 쌓임 맥락 찾기`),s(` 부모 요소를 하나씩 선택하며 Computed 탭에서 `),i(`strong`,null,`Show all`),s(`을 켜고 `),i(`code`,null,`z-index`),s(`, `),i(`code`,null,`transform`),s(`, `),i(`code`,null,`opacity`),s(`, `),i(`code`,null,`filter`),s(`, `),i(`code`,null,`isolation`),s(`, `),i(`code`,null,`will-change`),s(`를 검색합니다. 기본값이 아닌 값이 있는 첫 번째 조상이 메뉴의 비교 범위입니다.`)]),i(`li`,null,[i(`strong`,null,`가리는 요소와 같은 단계 찾기`),s(` 가리는 요소(다음 카드)에서도 위로 올라가며, 메뉴 쪽 조상과 같은 부모를 둔 형제를 찾습니다. 순서는 이 두 형제의 `),i(`code`,null,`z-index`),s(`와 HTML 순서로 정해집니다. 예제에서는 `),i(`code`,null,`.demo-z-card`),s(` 두 개입니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 조상 z-index 올려 시험`),s(` 메뉴 쪽 카드를 선택하고 `),i(`code`,null,`element.style`),s(`에 `),i(`code`,null,`z-index: 2`),s(`를 추가합니다. 메뉴가 다음 카드 위로 올라오면 원인이 확정됩니다.`)])],-1)]]),_:1})]),i(`section`,P,[l[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[13]||=i(`p`,null,[s(`메뉴의 숫자는 그대로 두고, 메뉴가 열린 `),i(`strong`,null,`카드`),s(`에 `),i(`code`,null,`demo-z-card-open`),s(`을 붙여 형제보다 높이는 것이 핵심입니다. Vue 탭에서 열린 카드에만 클래스를 붙이는 방법을 확인하세요.`)],-1),o(h,{tabs:t(S)},null,8,[`tabs`]),l[14]||=i(`p`,null,[s(`카드에 `),i(`code`,null,`overflow: hidden`),s(`이 있어 메뉴가 잘리거나, 쌓임 맥락이 여러 겹이라 조상마다 순서를 맞추기 어렵다면 메뉴를 `),i(`code`,null,`body`),s(` 바로 아래로 옮기는 방법을 씁니다. Vue에서는 `),i(`code`,null,`<Teleport to="body">`),s(`를 사용합니다. 자세한 내용은 ‘fixed 요소가 화면 기준으로 배치되지 않을 때’ 문서를 참고하세요.`)],-1)]),l[17]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>쌓임 맥락에 갇히는 일은 카드 목록이 아닌 곳에서도 생깁니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>고정 헤더 아래로 팝업이 깔릴 때</h3><p>본문 컨테이너에 <code>z-index</code>가 있으면 본문 안의 팝업은 그 값 안에 갇힙니다. 헤더(100)보다 본문(1)이 낮으므로 팝업이 9999여도 헤더 아래에 깔립니다. 본문의 <code>z-index</code>를 없애거나 팝업을 <code>body</code>로 옮깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.site-header</span> { <span class="hljs-attribute">position</span>: sticky; <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">z-index</span>: <span class="hljs-number">100</span>; }
<span class="hljs-selector-class">.site-main</span> { <span class="hljs-attribute">position</span>: relative; <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>; } <span class="hljs-comment">/* 본문 전체가 1 단계에 묶임 */</span>
<span class="hljs-selector-class">.site-main</span> <span class="hljs-selector-class">.popup</span> {
  <span class="hljs-attribute">position</span>: fixed;
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">9999</span>; <span class="hljs-comment">/* 헤더(100)와 비교되지 않음 */</span>
}
</code></pre><h3>등장 애니메이션 중에만 가려질 때</h3><p><code>opacity</code>나 <code>transform</code>을 애니메이션하는 동안에는 값이 1이나 <code>none</code>이어도 쌓임 맥락이 생깁니다. <code>animation-fill-mode: forwards</code>로 끝 값을 유지하면 끝난 뒤에도 남습니다. 끝 값이 기본 스타일과 같다면 <code>forwards</code>를 빼세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@keyframes</span> fade-in {
  <span class="hljs-selector-tag">from</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(<span class="hljs-number">8px</span>); }
  <span class="hljs-selector-tag">to</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>; <span class="hljs-attribute">transform</span>: none; }
}
<span class="hljs-selector-class">.card</span> { <span class="hljs-attribute">animation</span>: fade-in <span class="hljs-number">0.3s</span>; } <span class="hljs-comment">/* forwards 없이 */</span>
</code></pre><h3>isolation으로 일부러 가두기</h3><p>컴포넌트 안에서 <code>z-index: -1</code>로 배경 장식을 깔거나 큰 숫자를 쓸 때, 감싼 요소에 <code>isolation: isolate</code>를 주면 그 숫자가 바깥으로 새지 않습니다. 반대로, 안의 드롭다운도 바깥 요소 위로 나갈 수 없다는 점을 기억하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.promo-card</span> { <span class="hljs-attribute">position</span>: relative; <span class="hljs-attribute">isolation</span>: isolate; }
<span class="hljs-selector-class">.promo-card</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;&#39;</span>;
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">inset</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">z-index</span>: -<span class="hljs-number">1</span>; <span class="hljs-comment">/* 카드 배경 위, 내용 아래에만 깔림 */</span>
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">#eef4ff</span>, <span class="hljs-number">#fff</span>);
}
</code></pre><h3>mix-blend-mode가 있는 요소</h3><p><code>mix-blend-mode</code>도 쌓임 맥락을 만듭니다. 장식용 혼합 효과를 준 섹션 안에 메뉴가 있다면 같은 방식으로 섹션 단계에서 순서를 확인합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.hero</span> { <span class="hljs-attribute">mix-blend-mode</span>: multiply; } <span class="hljs-comment">/* normal이 아니면 쌓임 맥락 생성 */</span>
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>숫자 경쟁 대신 단계를 정해 둡니다.</strong> 헤더, 드롭다운, 모달처럼 레이어 종류별 <code>z-index</code> 값을 변수로 정해 두면 9999 같은 값이 늘어나지 않습니다. 단계 값은 같은 쌓임 맥락에 있는 요소끼리만 의미가 있습니다.</li><li><strong>열린 요소만 올립니다.</strong> 모든 카드에 같은 높은 값을 주면 다시 HTML 순서로 겹칩니다. 메뉴가 닫히면 <code>demo-z-card-open</code>도 함께 빼야 다른 카드의 메뉴를 열었을 때 순서가 꼬이지 않습니다.</li><li><strong>가려진 메뉴도 키보드로는 선택될 수 있습니다.</strong> 다른 요소에 덮여도 포커스는 그대로 이동하므로, 사용자는 보이지 않는 항목을 고르게 됩니다. 메뉴 버튼에 <code>aria-expanded</code>를 붙이고, 닫힌 메뉴는 <code>display: none</code>이나 <code>v-if</code>로 숨기세요.</li><li><strong>최상위 레이어(top layer)도 검토합니다.</strong> <code>&lt;dialog&gt;</code>의 <code>showModal()</code>과 <code>popover</code> 속성으로 띄운 요소는 쌓임 맥락과 관계없이 모든 요소 위에 그려집니다. <code>popover</code>는 최신 브라우저에서 지원하므로 지원 범위를 확인하고 사용하세요.</li></ul></section>`,2),i(`section`,F,[l[16]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(g,null,{default:r(()=>[...l[15]||=[i(`p`,null,`위 예제에서 카드 속성을 z-index: 1 → transform → opacity: 0.99 → isolation → 없음 순서로 바꿔보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`‘없음’을 뺀 모든 속성에서 문제 상태의 메뉴가 두 번째 카드 아래로 깔린다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태의 메뉴는 속성과 관계없이 두 번째 카드 위로 펼쳐진다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`‘없음’을 선택하면 두 상태의 메뉴가 모두 위로 올라온다.`)])])],-1)]]),_:1})])])}}};export{$ as default,K as duration,H as group,I as id,J as keyProperty,V as lead,G as level,z as navTitle,L as order,q as prerequisites,Q as references,Z as related,Y as status,B as summary,W as tags,R as title,U as topic,X as updated};