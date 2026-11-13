import{D as e,E as t,G as n,R as r,V as i,c as a,d as o,g as s,h as c,j as l,l as u,m as d,pt as f,w as p}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{r as m}from"./index-DHgvQBhl.js";import{t as h}from"./DemoCompare-Bd6h8ThJ.js";var g={},_={class:`demo-sc-card`};function v(t,n){return e(),o(`div`,_,[...n[0]||=[a(`strong`,{class:`demo-sc-title`},`공지 카드 제목`,-1),a(`p`,{class:`demo-sc-desc`},`자식 컴포넌트 안쪽 요소입니다.`,-1)]])}var y=m(g,[[`render`,v],[`__scopeId`,`data-v-ca2971ea`]]),b={class:`demo-sc-wrap`},x=m({__name:`ScopedParentProblem`,setup(t){return(t,n)=>(e(),o(`div`,b,[s(y)]))}},[[`__scopeId`,`data-v-43be2a26`]]),S={class:`demo-sc-wrap`},C=m({__name:`ScopedParentSolved`,setup(t){return(t,n)=>(e(),o(`div`,S,[s(y)]))}},[[`__scopeId`,`data-v-4497ce16`]]),w={class:`demo-sc-info`},T={__name:`ScopedDeepDemo`,setup(n){let o=e=>e?`solved`:`problem`,s={},l=i({problem:{titleAttrs:`…`,selector:`…`},solved:{titleAttrs:`…`,selector:`…`}});function d(e){for(let t of document.styleSheets){let n;try{n=t.cssRules}catch{continue}for(let t of n)if(t.selectorText?.includes(`demo-sc-title`)&&t.selectorText.includes(e))return t.selectorText}return`(찾지 못함)`}return t(async()=>{await p();for(let e of[`problem`,`solved`]){let t=s[e].querySelector(`.demo-sc-wrap`),n=s[e].querySelector(`.demo-sc-title`),r=t.getAttributeNames().find(e=>e.startsWith(`data-v-`));l[e].titleAttrs=n.getAttributeNames().filter(e=>e.startsWith(`data-v-`)).join(` `)||`없음`,l[e].selector=d(r)}}),(t,n)=>(e(),u(h,{problem:{code:`.demo-sc-wrap .demo-sc-title`,note:`바깥 테두리는 바뀌지만, 안쪽 제목은 그대로입니다.`},solved:{code:`.demo-sc-wrap :deep(.demo-sc-title)`,note:`안쪽 제목에도 부모 스타일이 적용됩니다.`}},{default:r(({solved:t})=>[a(`div`,{ref:e=>s[o(t)]=e},[t?(e(),u(C,{key:0})):(e(),u(x,{key:1}))],512),a(`dl`,w,[a(`div`,null,[n[0]||=a(`dt`,null,`제목 요소의 data-v`,-1),a(`dd`,null,[a(`code`,null,f(l[o(t)].titleAttrs),1)])]),a(`div`,null,[n[1]||=a(`dt`,null,`바뀐 선택자`,-1),a(`dd`,null,[a(`code`,null,f(l[o(t)].selector),1)])])])]),caption:r(()=>[...n[2]||=[c(` data-v 값은 빌드할 때 컴포넌트마다 만들어지는 고유 값입니다. `,-1)]]),_:1}))}},E=[{label:`:deep() 사용`,language:`xml`,code:`<!-- NoticeSection.vue (부모) -->
<template>
  <section class="notice-section">
    <NoticeCard />
  </section>
</template>

<style scoped>
/* 자식의 바깥 요소(.notice-card)에는 부모 scoped 스타일이 그대로 적용됩니다. */
.notice-section .notice-card {
  border-color: #3162d4;
}

/* 자식 안쪽 요소는 :deep()으로 감쌉니다. */
.notice-section :deep(.notice-card-title) {
  color: #3162d4;
}
</style>`},{label:`빌드 결과`,language:`css`,code:`/* 빌드 결과(예): data-v 값은 컴포넌트마다 다릅니다. */

/* 일반 선택자: 마지막 요소(.notice-card-title)에 부모의 data-v가 붙습니다.
   자식 안쪽 요소에는 부모의 data-v가 없으므로 적용되지 않습니다. */
.notice-section .notice-card-title[data-v-7a1b2c3d] { color: #3162d4; }

/* :deep(): data-v가 :deep() 앞(.notice-section)으로 옮겨 붙습니다.
   그 안의 .notice-card-title은 누구의 요소든 적용됩니다. */
.notice-section[data-v-7a1b2c3d] .notice-card-title { color: #3162d4; }`},{label:`v-html · 슬롯 · 전역`,language:`xml`,code:`<template>
  <!-- v-html로 넣은 내용에는 data-v가 붙지 않습니다. -->
  <div class="editor-view" v-html="content"></div>
  <slot />
</template>

<style scoped>
/* v-html 내용 */
.editor-view :deep(p) {
  margin: 0 0 8px;
}

/* 부모가 슬롯으로 넣은 내용 (자식 컴포넌트에서) */
:slotted(.notice-badge) {
  margin-left: 4px;
}

/* scoped 파일 안에서 전역 규칙이 꼭 필요할 때 */
:global(body.is-modal-open) {
  overflow: hidden;
}
</style>`},{label:`props로 해결`,language:`xml`,code:`<!-- 먼저 생각할 방법: 자식이 상태를 props·클래스로 받게 만듭니다. -->
<!-- 부모 -->
<NoticeCard tone="primary" />

<!-- NoticeCard.vue (자식) -->
<template>
  <div class="notice-card" :class="\`notice-card-\${tone}\`">
    <strong class="notice-card-title">…</strong>
  </div>
</template>

<style scoped>
.notice-card-primary .notice-card-title {
  color: #3162d4;
}
</style>`}],D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-7`},P=`scoped-deep`,F=2,I=`부모 scoped 스타일이 자식에 적용되지 않을 때 (:deep)`,L=`scoped와 :deep()`,R=`scoped 스타일이 data-v 속성 선택자로 바뀌는 원리를 확인하고, 자식 컴포넌트 안쪽·v-html 내용에는 :deep(), 슬롯에는 :slotted()를 쓰는 기준과 남용하지 않는 방법을 정리합니다.`,z=`부모에서 자식 컴포넌트 안쪽 스타일을 바꿨는데 적용되지 않는다면?
scoped 스타일은 내 컴포넌트 요소에만 붙습니다. 안쪽은 :deep()으로 감싸세요.
`,B=`스타일`,V=`스타일`,H=[`Vue`,`scoped`,`:deep()`,`data-v`,`:slotted()`,`:global()`,`v-html`,`컴포넌트 스타일`],U=`중급`,W=`약 11분`,G=[`Vue 컴포넌트`,`CSS 선택자`],K=`:deep(.자식-클래스)`,q=`published`,J=`2026-11-11`,Y=[`define-model`,`teleport-layer`],X=[{title:`Vue — SFC CSS 기능(scoped, :deep, :slotted, :global)`,url:`https://ko.vuejs.org/api/sfc-css-features.html`}],Z={__name:`scoped-deep`,setup(t,{expose:i}){return i({frontmatter:{id:`scoped-deep`,order:2,title:`부모 scoped 스타일이 자식에 적용되지 않을 때 (:deep)`,navTitle:`scoped와 :deep()`,summary:`scoped 스타일이 data-v 속성 선택자로 바뀌는 원리를 확인하고, 자식 컴포넌트 안쪽·v-html 내용에는 :deep(), 슬롯에는 :slotted()를 쓰는 기준과 남용하지 않는 방법을 정리합니다.`,lead:`부모에서 자식 컴포넌트 안쪽 스타일을 바꿨는데 적용되지 않는다면?
scoped 스타일은 내 컴포넌트 요소에만 붙습니다. 안쪽은 :deep()으로 감싸세요.
`,group:`스타일`,topic:`스타일`,tags:[`Vue`,`scoped`,`:deep()`,`data-v`,`:slotted()`,`:global()`,`v-html`,`컴포넌트 스타일`],level:`중급`,duration:`약 11분`,prerequisites:[`Vue 컴포넌트`,`CSS 선택자`],keyProperty:`:deep(.자식-클래스)`,status:`published`,updated:`2026-11-11`,related:[`define-model`,`teleport-layer`],references:[{title:`Vue — SFC CSS 기능(scoped, :deep, :slotted, :global)`,url:`https://ko.vuejs.org/api/sfc-css-features.html`}]}}),(t,i)=>{let u=l(`DocIssue`),f=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`DocPractice`);return e(),o(`div`,D,[a(`section`,O,[i[2]||=a(`h2`,null,[a(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),i[3]||=a(`p`,null,[c(`공지 영역(부모)에서 공통 카드 컴포넌트(자식)의 제목 색만 바꾸려고 부모의 `),a(`code`,null,`<style scoped>`),c(`에 규칙을 넣었습니다. 카드 `),a(`strong`,null,`테두리는 바뀌는데 제목은 그대로`),c(`입니다. 개발자 도구에서 보면 규칙은 있는데 제목 요소에 연결되지 않습니다.`)],-1),i[4]||=a(`p`,null,`공통 컴포넌트를 다른 사람이 만들었을 때 자주 생기고, 시안 검수에서 이런 형태로 돌아옵니다.`,-1),s(u,{label:`디자인 검수`,title:`메인 공지 영역: 카드 제목 색이 시안과 다름`,env:`전체 브라우저 · 공통 NoticeCard를 쓰는 공지 영역`,expected:`공지 영역의 카드 테두리와 제목이 모두 파란색`,actual:`테두리만 파란색, 제목은 기본 글자색 그대로`},{default:r(()=>[...i[0]||=[a(`ol`,null,[a(`li`,null,`메인 화면의 공지 영역으로 이동합니다.`),a(`li`,null,`카드 테두리와 제목 색을 시안과 비교합니다.`),a(`li`,null,`다른 화면에 있는 같은 카드와도 비교합니다.`)],-1)]]),_:1}),s(f,null,{default:r(()=>[...i[1]||=[a(`p`,null,[c(`scoped 스타일은 `),a(`strong`,null,`내 컴포넌트가 그린 요소`),c(`에만 적용됩니다. 자식 컴포넌트 안쪽 요소를 꾸미려면 선택자를 `),a(`strong`,null,[a(`code`,null,`:deep()`),c(`으로`)]),c(` 감싸세요.`)],-1)]]),_:1})]),a(`section`,k,[i[5]||=a(`h2`,null,[a(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),a(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[6]||=a(`p`,null,[c(`같은 자식 컴포넌트에 부모 스타일을 두 가지로 적용했습니다. 아래 정보는 지금 화면의 요소와 스타일시트에서 `),a(`strong`,null,`실제로 읽은 값`),c(`입니다.`)],-1),s(T)]),a(`section`,A,[i[8]||=a(`h2`,null,[a(`span`,{class:`section-no`},`03`),c(` 왜 적용되지 않을까요?`)],-1),i[9]||=a(`p`,null,[a(`code`,null,`<style scoped>`),c(`는 빌드할 때 두 가지 일을 합니다.`)],-1),s(p,null,{default:r(()=>[...i[7]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`요소에 표시`),c(` 컴포넌트가 그린 요소마다 `),a(`code`,null,`data-v-…`),c(` 속성`)]),a(`li`,null,[a(`strong`,null,`선택자에 조건`),c(` 마지막 선택자에 `),a(`code`,null,`[data-v-…]`)]),a(`li`,null,[a(`strong`,null,`결과`),c(` 내 요소에만 적용`)])],-1)]]),_:1}),i[10]||=d(`<p>부모 규칙 <code>.wrap .title</code>은 <code>.wrap .title[data-v-부모]</code>로 바뀝니다. 그런데 자식 안쪽의 제목에는 <strong>자식의 <code>data-v</code>만</strong> 있고 부모의 <code>data-v</code>는 없으므로 조건에 맞지 않습니다.</p><p>예외가 하나 있습니다. <strong>자식 컴포넌트의 바깥 요소(루트)에는</strong> 부모와 자식의 <code>data-v</code>가 함께 붙습니다. 그래서 예제의 테두리(<code>.demo-sc-card</code>)는 <code>:deep()</code> 없이도 바뀝니다.</p><p><code>:deep()</code>으로 감싸면 <code>[data-v-부모]</code>가 <code>:deep()</code> <strong>앞쪽 선택자로 옮겨 붙습니다.</strong> “부모 안에 있는 <code>.title</code>이면 누구의 요소든” 적용된다는 뜻이 됩니다.</p><div class="table-wrap"><table><thead><tr><th>꾸밀 대상</th><th>쓰는 방법</th></tr></thead><tbody><tr><td>내 컴포넌트가 그린 요소</td><td>그냥 쓰기</td></tr><tr><td>자식 컴포넌트의 바깥 요소</td><td>그냥 쓰기 (루트에는 부모 <code>data-v</code>도 있음)</td></tr><tr><td>자식 컴포넌트의 안쪽 요소</td><td><code>.wrap :deep(.title)</code></td></tr><tr><td><code>v-html</code>로 넣은 내용</td><td><code>.editor-view :deep(p)</code></td></tr><tr><td>부모가 슬롯으로 넣은 내용 (자식 쪽 스타일)</td><td><code>:slotted(.badge)</code></td></tr><tr><td>scoped 파일에서 전역 규칙</td><td><code>:global(body.is-modal-open)</code></td></tr></tbody></table></div>`,4)]),a(`section`,j,[i[12]||=a(`h2`,null,[a(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),i[13]||=a(`p`,null,[c(`scoped 스타일이 안 먹을 때는 `),a(`strong`,null,[c(`요소의 `),a(`code`,null,`data-v`),c(` 값과 선택자의 `),a(`code`,null,`data-v`),c(` 값이 같은지`)]),c(` 비교합니다. 위 예제의 문제 쪽으로 따라 해 보세요.`)],-1),s(m,null,{default:r(()=>[...i[11]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`Elements 패널에서 제목 선택`),a(`code`,null,`.demo-sc-title`),c(`을 선택하고 붙은 속성을 봅니다. `),a(`code`,null,`data-v-xxxx`),c(` 속성이 하나(자식 것)만 있습니다.`)]),a(`li`,null,[a(`strong`,null,`카드 바깥 요소와 비교`),c(` 부모인 `),a(`code`,null,`.demo-sc-card`),c(`를 선택합니다. 이 요소에는 `),a(`code`,null,`data-v`),c(` 속성이 두 개(부모 것과 자식 것) 붙어 있습니다.`)]),a(`li`,null,[a(`strong`,null,`Styles 탭에서 규칙 확인`),c(` 다시 제목을 선택하면 Styles 탭에 부모의 `),a(`code`,null,`.demo-sc-wrap .demo-sc-title`),c(` 규칙이 보이지 않습니다. 선택자 조건에 맞지 않아 연결되지 않은 것입니다.`)]),a(`li`,null,[a(`strong`,null,`빌드된 선택자 검색`),c(` 개발자 도구에서 `),a(`code`,null,`Ctrl+Shift+F`),c(`(Mac은 `),a(`code`,null,`Cmd+Option+F`),c(`)로 Search 패널을 열고 `),a(`code`,null,`demo-sc-title`),c(`을 찾습니다. 선택자 끝에 붙은 `),a(`code`,null,`[data-v-…]`),c(` 값이 제목 요소의 값과 다르면 scoped 범위 밖이 원인입니다.`)])],-1)]]),_:1})]),a(`section`,M,[i[14]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),i[15]||=a(`p`,null,[a(`strong`,null,`빌드 결과`),c(` 탭은 Vue 컴파일러(`),a(`code`,null,`@vue/compiler-sfc`),c(`)로 실제 변환한 결과와 같은 형태입니다.`)],-1),s(h,{tabs:n(E)},null,8,[`tabs`])]),i[18]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>“내 컴포넌트가 그리지 않은 요소”에는 모두 같은 일이 생깁니다. 아래 경우도 <code>data-v</code> 속성부터 확인하세요.</p><h3>v-html로 넣은 내용</h3><p>에디터·약관처럼 <code>v-html</code>로 넣은 HTML에는 <code>data-v</code>가 붙지 않습니다. 감싸는 요소를 기준으로 <code>:deep()</code>을 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;terms-view&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;termsHtml&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
<span class="hljs-selector-class">.terms-view</span> :<span class="hljs-built_in">deep</span>(h3) {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">16px</span> <span class="hljs-number">0</span> <span class="hljs-number">8px</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">15px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>슬롯으로 받은 내용</h3><p>부모가 슬롯으로 넣은 요소에는 부모의 <code>data-v</code>가 붙습니다. 그래서 부모 scoped 스타일은 그대로 적용되고, <strong>자식 쪽에서</strong> 꾸밀 때는 <code>:slotted()</code>를 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- NoticeCard.vue (자식) --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-card&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
<span class="hljs-selector-pseudo">:slotted</span>(<span class="hljs-selector-class">.notice-badge</span>) {
  <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">4px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>외부 라이브러리가 만든 요소</h3><p>슬라이드·달력 같은 라이브러리가 스크립트로 만든 요소에도 <code>data-v</code>가 없습니다. 감싸는 클래스를 앞에 두고 <code>:deep()</code>으로 범위를 좁힙니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
<span class="hljs-selector-class">.main-banner</span> :<span class="hljs-built_in">deep</span>(.swiper-pagination-bullet-active) {
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#3162d4</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>body·html의 상태 클래스</h3><p>팝업이 열릴 때 <code>body</code>에 붙이는 클래스처럼 앱 바깥 요소는 <code>:global()</code>로 씁니다. 이 규칙은 모든 화면에 적용되므로 꼭 필요한 곳에만 둡니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
:<span class="hljs-built_in">global</span>(body.is-modal-open) {
  <span class="hljs-attribute">overflow</span>: hidden;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>:deep()</code>은 앞에 부모 선택자를 둡니다.</strong> <code>:deep(.title)</code>만 쓰면 <code>[data-v-부모] .title</code>이 되어, 부모 컴포넌트 안의 모든 <code>.title</code>에 넓게 적용됩니다. <code>.notice-section :deep(.notice-card-title)</code>처럼 범위를 좁힙니다.</li><li><strong>먼저 props·클래스로 해결할 수 있는지 봅니다.</strong> 여러 화면에서 같은 변형이 필요하면 자식에 <code>tone=&quot;primary&quot;</code> 같은 props를 만들고 자식 스타일에 변형을 두는 편이 관리하기 쉽습니다(‘props로 해결’ 탭). <code>:deep()</code>은 자식 구조가 바뀌면 조용히 깨집니다.</li><li><strong>공통 컴포넌트를 <code>:deep()</code>으로 고치면 담당자와 공유합니다.</strong> 공통 컴포넌트의 내부 클래스는 언제든 바뀔 수 있으므로, 화면에서 덮어쓴 내용은 팀 소통 채널에 남깁니다.</li><li><strong>예제의 <code>&lt;style scoped&gt;</code>는 원리를 보여 주기 위한 예외입니다.</strong> 이 사이트는 스타일을 SCSS 파일로 분리하지만, 현장 프로젝트는 컴포넌트 안 <code>&lt;style scoped&gt;</code>를 쓰는 경우가 많습니다. 프로젝트 규칙을 따릅니다.</li></ul></section>`,2),a(`section`,N,[i[17]||=a(`h2`,null,[a(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(g,null,{default:r(()=>[...i[16]||=[a(`p`,null,`위 예제의 정보와 해결 코드를 비교해 보세요.`,-1),a(`ul`,{class:`checklist`},[a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},[c(`두 예제 모두 제목 요소에 붙은 `),a(`code`,null,`data-v`),c(`가 하나(자식 것)뿐인 것을 확인한다.`)])])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},[c(`문제 쪽 선택자는 `),a(`code`,null,`[data-v-…]`),c(`가 `),a(`code`,null,`.demo-sc-title`),c(` 뒤에, 해결 쪽은 `),a(`code`,null,`.demo-sc-wrap`),c(` 뒤에 붙은 것을 확인한다.`)])])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},[a(`code`,null,`:deep()`),c(` 앞의 `),a(`code`,null,`.demo-sc-wrap`),c(`을 지우면 어떤 범위에 적용될지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};