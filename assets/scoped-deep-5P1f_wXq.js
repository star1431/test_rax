import{C as e,F as t,H as n,O as r,R as i,c as a,f as o,m as s,ot as c,p as l,s as u,u as d,w as f,x as p}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{r as m}from"./index-CQ21ZCHZ.js";import{t as h}from"./DemoCompare-WCDBpe2Q.js";var g={},_={class:`demo-sc-card`};function v(e,t){return f(),d(`div`,_,[...t[0]||=[u(`strong`,{class:`demo-sc-title`},`공지 카드 제목`,-1),u(`p`,{class:`demo-sc-desc`},`자식 컴포넌트 안쪽 요소입니다.`,-1)]])}var y=m(g,[[`render`,v],[`__scopeId`,`data-v-ca2971ea`]]),b={class:`demo-sc-wrap`},x=m({__name:`ScopedParentProblem`,setup(e){return(e,t)=>(f(),d(`div`,b,[s(y)]))}},[[`__scopeId`,`data-v-43be2a26`]]),S={class:`demo-sc-wrap`},C=m({__name:`ScopedParentSolved`,setup(e){return(e,t)=>(f(),d(`div`,S,[s(y)]))}},[[`__scopeId`,`data-v-4497ce16`]]),w={class:`demo-sc-info`},T={__name:`ScopedDeepDemo`,setup(n){let r=e=>e?`solved`:`problem`,o={},s=i({problem:{titleAttrs:`…`,selector:`…`},solved:{titleAttrs:`…`,selector:`…`}});function d(e){for(let t of document.styleSheets){let n;try{n=t.cssRules}catch{continue}for(let t of n)if(t.selectorText?.includes(`demo-sc-title`)&&t.selectorText.includes(e))return t.selectorText}return`(찾지 못함)`}return e(async()=>{await p();for(let e of[`problem`,`solved`]){let t=o[e].querySelector(`.demo-sc-wrap`),n=o[e].querySelector(`.demo-sc-title`),r=t.getAttributeNames().find(e=>e.startsWith(`data-v-`));s[e].titleAttrs=n.getAttributeNames().filter(e=>e.startsWith(`data-v-`)).join(` `)||`없음`,s[e].selector=d(r)}}),(e,n)=>(f(),a(h,{problem:{code:`.demo-sc-wrap .demo-sc-title`,note:`바깥 테두리는 바뀌지만, 안쪽 제목은 그대로입니다.`},solved:{code:`.demo-sc-wrap :deep(.demo-sc-title)`,note:`안쪽 제목에도 부모 스타일이 적용됩니다.`}},{default:t(({solved:e})=>[u(`div`,{ref:t=>o[r(e)]=t},[e?(f(),a(C,{key:0})):(f(),a(x,{key:1}))],512),u(`dl`,w,[u(`div`,null,[n[0]||=u(`dt`,null,`제목 요소의 data-v`,-1),u(`dd`,null,[u(`code`,null,c(s[r(e)].titleAttrs),1)])]),u(`div`,null,[n[1]||=u(`dt`,null,`바뀐 선택자`,-1),u(`dd`,null,[u(`code`,null,c(s[r(e)].selector),1)])])])]),caption:t(()=>[...n[2]||=[l(` data-v 값은 빌드할 때 컴포넌트마다 만들어지는 고유 값입니다. `,-1)]]),_:1}))}},E=[{label:`:deep() 사용`,language:`xml`,code:`<!-- NoticeSection.vue (부모) -->
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
  <div class="notice-card" :class="\`notice-card--\${tone}\`">
    <strong class="notice-card-title">…</strong>
  </div>
</template>

<style scoped>
.notice-card--primary .notice-card-title {
  color: #3162d4;
}
</style>`}],D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`scoped-deep`,P=2,F=`부모 scoped 스타일이 자식에 적용되지 않을 때 (:deep)`,I=`scoped와 :deep()`,L=`scoped 스타일이 data-v 속성 선택자로 바뀌는 원리를 확인하고, 자식 컴포넌트 안쪽·v-html 내용에는 :deep(), 슬롯에는 :slotted()를 쓰는 기준과 남용하지 않는 방법을 정리합니다.`,R=`부모에서 자식 컴포넌트 안쪽 스타일을 바꿨는데 적용되지 않는다면?
scoped 스타일은 내 컴포넌트 요소에만 붙습니다. 안쪽은 :deep()으로 감싸세요.
`,z=`스타일`,B=`스타일`,V=[`Vue`,`scoped`,`:deep()`,`data-v`,`:slotted()`,`:global()`,`v-html`,`컴포넌트 스타일`],H=`중급`,U=`약 7분`,W=[`Vue 컴포넌트`,`CSS 선택자`],G=`:deep(.자식-클래스)`,K=`published`,q=`2026-11-05`,J=[`define-model`,`teleport-layer`],Y=[{title:`Vue — SFC CSS 기능(scoped, :deep, :slotted, :global)`,url:`https://ko.vuejs.org/api/sfc-css-features.html`}],X={__name:`scoped-deep`,setup(e,{expose:i}){return i({frontmatter:{id:`scoped-deep`,order:2,title:`부모 scoped 스타일이 자식에 적용되지 않을 때 (:deep)`,navTitle:`scoped와 :deep()`,summary:`scoped 스타일이 data-v 속성 선택자로 바뀌는 원리를 확인하고, 자식 컴포넌트 안쪽·v-html 내용에는 :deep(), 슬롯에는 :slotted()를 쓰는 기준과 남용하지 않는 방법을 정리합니다.`,lead:`부모에서 자식 컴포넌트 안쪽 스타일을 바꿨는데 적용되지 않는다면?
scoped 스타일은 내 컴포넌트 요소에만 붙습니다. 안쪽은 :deep()으로 감싸세요.
`,group:`스타일`,topic:`스타일`,tags:[`Vue`,`scoped`,`:deep()`,`data-v`,`:slotted()`,`:global()`,`v-html`,`컴포넌트 스타일`],level:`중급`,duration:`약 7분`,prerequisites:[`Vue 컴포넌트`,`CSS 선택자`],keyProperty:`:deep(.자식-클래스)`,status:`published`,updated:`2026-11-05`,related:[`define-model`,`teleport-layer`],references:[{title:`Vue — SFC CSS 기능(scoped, :deep, :slotted, :global)`,url:`https://ko.vuejs.org/api/sfc-css-features.html`}]}}),(e,i)=>{let a=r(`DocTakeaway`),c=r(`DocSteps`),p=r(`CodePanel`),m=r(`DocPractice`);return f(),d(`div`,D,[u(`section`,O,[i[1]||=u(`h2`,null,[u(`span`,{class:`section-no`},`01`),l(` 문제 상황`)],-1),i[2]||=u(`p`,null,[l(`공지 영역(부모)에서 공통 카드 컴포넌트(자식)의 제목 색만 바꾸려고 부모의 `),u(`code`,null,`<style scoped>`),l(`에 규칙을 넣었습니다. 카드 `),u(`strong`,null,`테두리는 바뀌는데 제목은 그대로`),l(`입니다. 개발자 도구에서 보면 규칙은 있는데 제목 요소에 연결되지 않습니다.`)],-1),s(a,null,{default:t(()=>[...i[0]||=[u(`p`,null,[l(`scoped 스타일은 `),u(`strong`,null,`내 컴포넌트가 그린 요소`),l(`에만 적용됩니다. 자식 컴포넌트 안쪽 요소를 꾸미려면 선택자를 `),u(`strong`,null,[u(`code`,null,`:deep()`),l(`으로`)]),l(` 감싸세요.`)],-1)]]),_:1})]),u(`section`,k,[i[3]||=u(`h2`,null,[u(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),u(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[4]||=u(`p`,null,[l(`같은 자식 컴포넌트에 부모 스타일을 두 가지로 적용했습니다. 아래 정보는 지금 화면의 요소와 스타일시트에서 `),u(`strong`,null,`실제로 읽은 값`),l(`입니다.`)],-1),s(T)]),u(`section`,A,[i[6]||=u(`h2`,null,[u(`span`,{class:`section-no`},`03`),l(` 왜 적용되지 않을까요?`)],-1),i[7]||=u(`p`,null,[u(`code`,null,`<style scoped>`),l(`는 빌드할 때 두 가지 일을 합니다.`)],-1),s(c,null,{default:t(()=>[...i[5]||=[u(`ol`,null,[u(`li`,null,[u(`strong`,null,`요소에 표시`),l(` 컴포넌트가 그린 요소마다 `),u(`code`,null,`data-v-…`),l(` 속성`)]),u(`li`,null,[u(`strong`,null,`선택자에 조건`),l(` 마지막 선택자에 `),u(`code`,null,`[data-v-…]`)]),u(`li`,null,[u(`strong`,null,`결과`),l(` 내 요소에만 적용`)])],-1)]]),_:1}),i[8]||=o(`<p>부모 규칙 <code>.wrap .title</code>은 <code>.wrap .title[data-v-부모]</code>로 바뀝니다. 그런데 자식 안쪽의 제목에는 <strong>자식의 <code>data-v</code>만</strong> 있고 부모의 <code>data-v</code>는 없으므로 조건에 맞지 않습니다.</p><p>예외가 하나 있습니다. <strong>자식 컴포넌트의 바깥 요소(루트)에는</strong> 부모와 자식의 <code>data-v</code>가 함께 붙습니다. 그래서 예제의 테두리(<code>.demo-sc-card</code>)는 <code>:deep()</code> 없이도 바뀝니다.</p><p><code>:deep()</code>으로 감싸면 <code>[data-v-부모]</code>가 <code>:deep()</code> <strong>앞쪽 선택자로 옮겨 붙습니다.</strong> “부모 안에 있는 <code>.title</code>이면 누구의 요소든” 적용된다는 뜻이 됩니다.</p><div class="table-wrap"><table><thead><tr><th>꾸밀 대상</th><th>쓰는 방법</th></tr></thead><tbody><tr><td>내 컴포넌트가 그린 요소</td><td>그냥 쓰기</td></tr><tr><td>자식 컴포넌트의 바깥 요소</td><td>그냥 쓰기 (루트에는 부모 <code>data-v</code>도 있음)</td></tr><tr><td>자식 컴포넌트의 안쪽 요소</td><td><code>.wrap :deep(.title)</code></td></tr><tr><td><code>v-html</code>로 넣은 내용</td><td><code>.editor-view :deep(p)</code></td></tr><tr><td>부모가 슬롯으로 넣은 내용 (자식 쪽 스타일)</td><td><code>:slotted(.badge)</code></td></tr><tr><td>scoped 파일에서 전역 규칙</td><td><code>:global(body.is-modal-open)</code></td></tr></tbody></table></div>`,4)]),u(`section`,j,[i[9]||=u(`h2`,null,[u(`span`,{class:`section-no`},`04`),l(` 해결 코드`)],-1),i[10]||=u(`p`,null,[u(`strong`,null,`빌드 결과`),l(` 탭은 Vue 컴파일러(`),u(`code`,null,`@vue/compiler-sfc`),l(`)로 실제 변환한 결과와 같은 형태입니다.`)],-1),s(p,{tabs:n(E)},null,8,[`tabs`])]),i[13]||=o(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong><code>:deep()</code>은 앞에 부모 선택자를 둡니다.</strong> <code>:deep(.title)</code>만 쓰면 <code>[data-v-부모] .title</code>이 되어, 부모 컴포넌트 안의 모든 <code>.title</code>에 넓게 적용됩니다. <code>.notice-section :deep(.notice-card-title)</code>처럼 범위를 좁힙니다.</li><li><strong>먼저 props·클래스로 해결할 수 있는지 봅니다.</strong> 여러 화면에서 같은 변형이 필요하면 자식에 <code>tone=&quot;primary&quot;</code> 같은 props를 만들고 자식 스타일에 변형을 두는 편이 관리하기 쉽습니다(‘props로 해결’ 탭). <code>:deep()</code>은 자식 구조가 바뀌면 조용히 깨집니다.</li><li><strong>공통 컴포넌트를 <code>:deep()</code>으로 고치면 담당자와 공유합니다.</strong> 공통 컴포넌트의 내부 클래스는 언제든 바뀔 수 있으므로, 화면에서 덮어쓴 내용은 팀 소통 채널에 남깁니다.</li><li><strong>예제의 <code>&lt;style scoped&gt;</code>는 원리를 보여 주기 위한 예외입니다.</strong> 이 사이트는 스타일을 SCSS 파일로 분리하지만, 현장 프로젝트는 컴포넌트 안 <code>&lt;style scoped&gt;</code>를 쓰는 경우가 많습니다. 프로젝트 규칙을 따릅니다.</li></ul></section>`,1),u(`section`,M,[i[12]||=u(`h2`,null,[u(`span`,{class:`section-no`},`06`),l(` 짧은 실습`)],-1),s(m,null,{default:t(()=>[...i[11]||=[u(`p`,null,`위 예제의 정보와 해결 코드를 비교해 보세요.`,-1),u(`ul`,{class:`checklist`},[u(`li`,null,[u(`label`,null,[u(`input`,{type:`checkbox`}),u(`span`,{class:`checklist-text`},[l(`두 예제 모두 제목 요소에 붙은 `),u(`code`,null,`data-v`),l(`가 하나(자식 것)뿐인 것을 확인한다.`)])])]),u(`li`,null,[u(`label`,null,[u(`input`,{type:`checkbox`}),u(`span`,{class:`checklist-text`},[l(`문제 쪽 선택자는 `),u(`code`,null,`[data-v-…]`),l(`가 `),u(`code`,null,`.demo-sc-title`),l(` 뒤에, 해결 쪽은 `),u(`code`,null,`.demo-sc-wrap`),l(` 뒤에 붙은 것을 확인한다.`)])])]),u(`li`,null,[u(`label`,null,[u(`input`,{type:`checkbox`}),u(`span`,{class:`checklist-text`},[u(`code`,null,`:deep()`),l(` 앞의 `),u(`code`,null,`.demo-sc-wrap`),l(`을 지우면 어떤 범위에 적용될지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{X as default,U as duration,z as group,N as id,G as keyProperty,R as lead,H as level,I as navTitle,P as order,W as prerequisites,Y as references,J as related,K as status,L as summary,V as tags,F as title,B as topic,q as updated};