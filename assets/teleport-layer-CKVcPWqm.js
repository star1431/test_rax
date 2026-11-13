import{D as e,G as t,I as n,R as r,T as i,V as a,a as o,c as s,d as c,g as l,h as u,j as d,l as f,m as p,r as m,u as h,w as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{v as _}from"./index-Dxflp_jg.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y={class:`demo-tl-card`},b=[`aria-expanded`,`onClick`],x={key:0,class:`demo-tl-popup`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`tl-title-problem`},S={class:`demo-tl-dialog`},C={class:`demo-tl-dialog`},w={__name:`TeleportLayerDemo`,setup(t){let d=e=>e?`solved`:`problem`,p=a({problem:!1,solved:!1}),w={},T=n(`solvedTitle`),E=e=>{let t=document.getElementById(`app`);t&&(t.inert=e)};async function D(e){p[d(e)]=!0,e&&(E(!0),await g(),T.value?.focus())}async function O(e){p[d(e)]=!1,e&&(E(!1),await g(),w.solved?.focus())}return i(()=>E(!1)),(t,n)=>(e(),c(m,null,[l(v,{problem:{code:`카드 안에 팝업`,note:`팝업이 카드 영역에 갇혀 잘리고, 포커스도 버튼에 남습니다.`},solved:{code:`<Teleport to="body">`,note:`화면 전체에 열리고, 포커스가 팝업으로 이동했다가 닫으면 돌아옵니다.`}},{default:r(({solved:t})=>[s(`div`,y,[n[7]||=s(`p`,{class:`demo-tl-text`},`거래 1건 · 1,280,000원`,-1),s(`button`,{ref:e=>w[d(t)]=e,type:`button`,class:`demo-tl-open`,"aria-expanded":p[d(t)],onClick:e=>D(t)},` 거래내역상세 열기 `,8,b),!t&&p.problem?(e(),c(`div`,x,[s(`div`,{class:`demo-tl-dimmed`,onClick:n[0]||=e=>O(!1)}),s(`div`,S,[n[5]||=s(`strong`,{id:`tl-title-problem`},`거래내역상세`,-1),n[6]||=s(`dl`,{class:`demo-tl-list`},[s(`div`,null,[s(`dt`,null,`거래일시`),s(`dd`,null,`2023.06.09 16:26`)]),s(`div`,null,[s(`dt`,null,`거래금액`),s(`dd`,null,`1,280,000원`)])],-1),s(`button`,{type:`button`,class:`demo-tl-confirm`,onClick:n[1]||=e=>O(!1)},`확인`)])])):h(``,!0)])]),caption:r(()=>[...n[8]||=[u(` 해결 쪽 팝업은 실제 화면 전체에 열립니다. Escape 키나 확인 버튼으로 닫으세요. `,-1)]]),_:1}),(e(),f(o,{to:`body`},[p.solved?(e(),c(`div`,{key:0,class:`demo-tl-popup demo-tl-popup-body`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`tl-title-solved`,onKeydown:n[4]||=_(e=>O(!0),[`esc`])},[s(`div`,{class:`demo-tl-dimmed`,onClick:n[2]||=e=>O(!0)}),s(`div`,C,[s(`strong`,{id:`tl-title-solved`,ref_key:`solvedTitle`,ref:T,tabindex:`-1`},`거래내역상세`,512),n[9]||=s(`dl`,{class:`demo-tl-list`},[s(`div`,null,[s(`dt`,null,`거래일시`),s(`dd`,null,`2023.06.09 16:26`)]),s(`div`,null,[s(`dt`,null,`거래금액`),s(`dd`,null,`1,280,000원`)])],-1),s(`button`,{type:`button`,class:`demo-tl-confirm`,onClick:n[3]||=e=>O(!0)},`확인`)])],32)):h(``,!0)]))],64))}},T=[{label:`LayerPopup.vue`,language:`xml`,code:`<!-- LayerPopup.vue -->
<template>
  <Teleport to="body">
    <div v-if="open" class="layer-popup" role="dialog" aria-modal="true" :aria-labelledby="titleId" @keydown.esc="close">
      <div class="layer-popup-dimmed" @click="close"></div>
      <div class="layer-popup-dialog">
        <strong :id="titleId" ref="title" tabindex="-1">{{ heading }}</strong>
        <slot />
        <button type="button" @click="close">확인</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, useId, useTemplateRef, watch } from 'vue'

defineProps({
  heading: { type: String, required: true },
})

const open = defineModel('open', { type: Boolean, default: false })
const titleId = useId()
const title = useTemplateRef('title')
let opener = null

// 팝업 뒤 화면(#app)을 막거나 풉니다. #app이 없는 화면에서도 오류가 나지 않게 확인합니다.
function setBackgroundInert(value) {
  const app = document.getElementById('app')
  if (app) app.inert = value
}

// 열 때: 연 버튼을 기억하고, 뒤 화면을 막고, 팝업 제목으로 포커스를 옮깁니다.
// 닫을 때: 뒤 화면을 풀고, 연 버튼으로 포커스를 돌려줍니다.
watch(open, async (isOpen) => {
  setBackgroundInert(isOpen)
  if (isOpen) {
    opener = document.activeElement
    await nextTick()
    title.value?.focus()
  } else {
    opener?.focus()
  }
})

// 열린 채로 컴포넌트가 사라지면(라우트 이동 등) watch가 돌지 않으므로, 여기서 뒤 화면을 풀어 줍니다.
onBeforeUnmount(() => setBackgroundInert(false))

function close() {
  open.value = false
}
<\/script>`},{label:`사용하는 쪽`,language:`xml`,code:`<template>
  <button type="button" :aria-expanded="isOpen" @click="isOpen = true">거래내역상세</button>

  <LayerPopup v-model:open="isOpen" heading="거래내역상세">
    <dl class="dlist">…</dl>
  </LayerPopup>
</template>

<script setup>
import { ref } from 'vue'
import LayerPopup from './LayerPopup.vue'

const isOpen = ref(false)
<\/script>`},{label:`aria-hidden과 inert`,language:`xml`,code:`<!-- 예전 방식: 팝업이 열릴 때마다 뒤쪽 요소에 aria-hidden을 하나씩 붙입니다. -->
<Header :aria-hidden="isOpen" />
<button :aria-hidden="isOpen">팝업 다시 열기</button>
<div class="popup" role="dialog" :aria-hidden="!isOpen">…</div>

<!-- 지금 권장: 팝업을 body로 옮기고, 앱 영역 전체를 inert 하나로 막습니다.
     inert는 aria-hidden(읽기 막기)과 키보드 포커스 막기를 함께 처리합니다. -->
<div id="app" inert>…</div>
<div class="layer-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">…</div>`}],E={class:`doc-body`},D={id:`section-0`},O={id:`section-1`},k={id:`section-2`},A={class:`table-wrap`},j={id:`section-3`},M={id:`section-4`},N={id:`section-5`},P={id:`section-8`},F=`teleport-layer`,I=3,L=`팝업이 잘리거나 가려질 때 (Teleport와 포커스)`,R=`Teleport 레이어`,z=`카드·슬라이드 안에서 연 팝업이 overflow·transform·z-index 때문에 잘리거나 가려지는 문제를 Teleport로 해결하고, 포커스 이동·Escape 닫기·배경 inert로 팝업 접근성을 함께 챙깁니다.`,B=`팝업이 카드 안에 갇히거나 헤더 뒤로 숨는다면?
팝업은 Teleport로 body 아래에 그리고, 포커스는 팝업으로 옮기세요.
`,V=`레이어·모션`,H=`레이어`,U=[`Vue`,`Teleport`,`팝업`,`dialog`,`aria-modal`,`inert`,`포커스`,`z-index`,`overflow`,`접근성`],W=`중급`,G=`약 12분`,K=[`position fixed`,`Vue 컴포넌트`],q=`<Teleport to="body">`,J=`published`,Y=`2026-11-11`,X=[`scoped-deep`,`transition-toggle`],Z=[{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport.html`},{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`}],Q={__name:`teleport-layer`,setup(n,{expose:i}){return i({frontmatter:{id:`teleport-layer`,order:3,title:`팝업이 잘리거나 가려질 때 (Teleport와 포커스)`,navTitle:`Teleport 레이어`,summary:`카드·슬라이드 안에서 연 팝업이 overflow·transform·z-index 때문에 잘리거나 가려지는 문제를 Teleport로 해결하고, 포커스 이동·Escape 닫기·배경 inert로 팝업 접근성을 함께 챙깁니다.`,lead:`팝업이 카드 안에 갇히거나 헤더 뒤로 숨는다면?
팝업은 Teleport로 body 아래에 그리고, 포커스는 팝업으로 옮기세요.
`,group:`레이어·모션`,topic:`레이어`,tags:[`Vue`,`Teleport`,`팝업`,`dialog`,`aria-modal`,`inert`,`포커스`,`z-index`,`overflow`,`접근성`],level:`중급`,duration:`약 12분`,prerequisites:[`position fixed`,`Vue 컴포넌트`],keyProperty:`<Teleport to="body">`,status:`published`,updated:`2026-11-11`,related:[`scoped-deep`,`transition-toggle`],references:[{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport.html`},{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`}]}}),(n,i)=>{let a=d(`DocIssue`),o=d(`DocTakeaway`),f=d(`RouterLink`),m=d(`DocSteps`),h=d(`DocInspect`),g=d(`CodePanel`),_=d(`DocPractice`);return e(),c(`div`,E,[s(`section`,D,[i[2]||=s(`h2`,null,[s(`span`,{class:`section-no`},`01`),u(` 문제 상황`)],-1),i[3]||=s(`p`,null,[u(`거래 카드 안의 버튼으로 상세 팝업을 엽니다. 팝업은 `),s(`code`,null,`position: fixed`),u(`로 화면 전체를 덮도록 만들었는데, `),s(`strong`,null,`카드 크기만큼만 보이고 나머지가 잘립니다.`),u(` 다른 화면에서는 팝업이 고정 헤더 `),s(`strong`,null,`뒤로`),u(` 숨기도 합니다. 키보드 사용자는 팝업이 열려도 포커스가 버튼에 남아 뒤쪽 화면을 계속 돌아다닙니다.`)],-1),i[4]||=s(`p`,null,`팝업만 따로 만든 화면에서는 잘 열리다가, 카드·슬라이드 안에 버튼이 들어간 화면에서만 생겨 QA에서 이런 형태로 돌아옵니다.`,-1),l(a,{title:`거래내역: 상세 팝업이 카드 안에서 잘림`,env:`전체 브라우저 · 슬라이드 카드(overflow hidden, transform) 안의 버튼`,expected:`팝업이 화면 전체를 덮고 가운데에 열리며, 포커스가 팝업으로 이동`,actual:`카드 영역만 어두워지고 대화상자가 잘림, Tab을 누르면 뒤 화면 요소로 이동`},{default:r(()=>[...i[0]||=[s(`ol`,null,[s(`li`,null,`거래내역 화면에서 첫 번째 거래 카드의 ‘거래내역상세 열기’를 누릅니다.`),s(`li`,null,`팝업의 어두운 배경과 대화상자 크기를 확인합니다.`),s(`li`,null,`팝업이 열린 상태에서 Tab 키를 여러 번 누릅니다.`)],-1)]]),_:1}),l(o,null,{default:r(()=>[...i[1]||=[s(`p`,null,[u(`팝업은 `),s(`strong`,null,[s(`code`,null,`<Teleport to="body">`),u(`로`)]),u(),s(`code`,null,`body`),u(` 바로 아래에 그리세요. 열면 `),s(`strong`,null,`팝업으로 포커스를 옮기고`),u(`, 닫으면 연 버튼으로 돌려주며, 그동안 뒤 화면은 `),s(`strong`,null,[s(`code`,null,`inert`),u(`로`)]),u(` 막습니다.`)],-1)]]),_:1})]),s(`section`,O,[i[5]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),u(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[6]||=s(`p`,null,[u(`두 카드는 같은 카드입니다(`),s(`code`,null,`overflow: hidden`),u(` + `),s(`code`,null,`transform`),u(`). 각각 ‘거래내역상세 열기’를 눌러 보세요. 해결 쪽은 키보드(Tab, Enter, Escape)로도 확인해 보세요.`)],-1),l(w)]),s(`section`,k,[i[15]||=s(`h2`,null,[s(`span`,{class:`section-no`},`03`),u(` 왜 잘리고 가려질까요?`)],-1),i[16]||=s(`p`,null,[u(`팝업이 `),s(`strong`,null,`어디에 그려졌는지(DOM 위치)가`),u(` 조상 요소의 영향을 정합니다.`)],-1),s(`div`,A,[s(`table`,null,[i[14]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`원인`),s(`th`,null,`결과`)])],-1),s(`tbody`,null,[s(`tr`,null,[i[11]||=s(`td`,null,[u(`조상에 `),s(`code`,null,`transform`),u(`·`),s(`code`,null,`filter`),u(` 등`)],-1),s(`td`,null,[i[8]||=s(`code`,null,`fixed`,-1),i[9]||=u(`의 기준이 화면이 아닌 그 조상이 됨 → 조상 크기에 갇힘 (`,-1),l(f,{to:`/pub/css/fixed-transform`},{default:r(()=>[...i[7]||=[u(`fixed 기준 오류`,-1)]]),_:1}),i[10]||=u(`)`,-1)])]),i[12]||=s(`tr`,null,[s(`td`,null,[u(`조상에 `),s(`code`,null,`overflow: hidden`)]),s(`td`,null,`조상 밖으로 나간 부분이 잘림`)],-1),i[13]||=s(`tr`,null,[s(`td`,null,[u(`조상에 `),s(`code`,null,`z-index`),u(` + `),s(`code`,null,`position`),u(` (쌓임 맥락)`)]),s(`td`,null,[u(`팝업의 `),s(`code`,null,`z-index: 9999`),u(`도 그 조상 안에서만 비교됨 → 헤더 뒤로 숨음`)])],-1)])])]),i[17]||=s(`p`,null,[u(`세 가지 모두 CSS 값을 더 키워서는 해결되지 않습니다. 팝업을 그 조상 `),s(`strong`,null,`밖으로`),u(` 옮겨야 합니다. `),s(`code`,null,`<Teleport to="body">`),u(`는 컴포넌트 코드는 그대로 두고, 화면에 그릴 위치만 `),s(`code`,null,`body`),u(` 아래로 바꿉니다. props·이벤트·상태는 원래 컴포넌트와 그대로 연결됩니다.`)],-1)]),s(`section`,j,[i[19]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),u(` 팝업 접근성`)],-1),i[20]||=s(`p`,null,[u(`화면에 띄우는 것만큼 `),s(`strong`,null,`키보드와 스크린 리더`),u(`에서 팝업이 열렸음을 알리는 것이 중요합니다.`)],-1),l(m,null,{default:r(()=>[...i[18]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`열 때`),u(` 팝업 제목으로 포커스`)]),s(`li`,null,[s(`strong`,null,`열려 있는 동안`),u(` 뒤 화면 `),s(`code`,null,`inert`)]),s(`li`,null,[s(`strong`,null,`Escape·닫기`),u(` 팝업 닫기`)]),s(`li`,null,[s(`strong`,null,`닫은 뒤`),u(` 연 버튼으로 포커스`)])],-1)]]),_:1}),i[21]||=p(`<ul><li><strong><code>role=&quot;dialog&quot;</code> + <code>aria-modal=&quot;true&quot;</code></strong>: 스크린 리더에 대화상자임을 알립니다. <code>aria-labelledby</code>로 제목을 연결합니다.</li><li><strong><code>inert</code></strong>: 지정한 영역 전체를 클릭·포커스·스크린 리더 대상에서 한 번에 빼 줍니다. 팝업을 <code>body</code>로 옮겼기 때문에 앱 영역(<code>#app</code>)에만 <code>inert</code>를 걸면 됩니다.</li><li><strong>예전 방식과 비교</strong>: 헤더·버튼 등 뒤쪽 요소마다 <code>aria-hidden</code>을 붙이는 방식은 빠뜨리기 쉽고, <code>aria-hidden</code>은 읽기만 막을 뿐 <strong>키보드 포커스는 막지 못합니다</strong>. ‘aria-hidden과 inert’ 탭을 비교해 보세요.</li></ul>`,1)]),s(`section`,M,[i[23]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),u(` 원인 찾기`)],-1),i[24]||=s(`p`,null,[u(`팝업이 잘리거나 가려질 때는 CSS 값보다 `),s(`strong`,null,`팝업이 DOM 어디에 있는지`),u(`부터 확인합니다. 위 예제의 문제 쪽 팝업을 연 상태로 따라 해 보세요.`)],-1),l(h,null,{default:r(()=>[...i[22]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Elements 패널에서 팝업 위치 확인`),u(` 팝업의 `),s(`code`,null,`.demo-tl-popup`),u(`을 선택합니다. 이 요소가 카드(`),s(`code`,null,`.demo-tl-card`),u(`) 안에 있으면 조상 요소의 영향을 그대로 받습니다.`)]),s(`li`,null,[s(`strong`,null,`조상 요소의 Computed 값 확인`),u(` 팝업에서 위로 한 단계씩 조상을 선택하며 Computed 탭에서 `),s(`code`,null,`transform`),u(`, `),s(`code`,null,`filter`),u(`, `),s(`code`,null,`overflow`),u(`를 봅니다. `),s(`code`,null,`none`),u(`이나 `),s(`code`,null,`visible`),u(`이 아닌 조상이 원인입니다.`)]),s(`li`,null,[s(`strong`,null,`가려질 때는 z-index 조상 확인`),u(` 헤더 뒤로 숨는 경우, 조상 중 `),s(`code`,null,`position`),u(`과 `),s(`code`,null,`z-index`),u(`가 함께 있는 요소를 찾습니다. 팝업의 `),s(`code`,null,`z-index`),u(`는 그 조상 안에서만 비교됩니다.`)]),s(`li`,null,[s(`strong`,null,`해결 쪽 위치와 비교`),u(` 해결 쪽 팝업을 열고 다시 찾아봅니다. `),s(`code`,null,`#app`),u(` 밖, `),s(`code`,null,`body`),u(` 바로 아래에 그려져 있으면 Teleport가 동작한 것입니다.`)]),s(`li`,null,[s(`strong`,null,`포커스 위치 확인`),u(` Console의 Live Expression(눈 아이콘)에 `),s(`code`,null,`document.activeElement`),u(`를 등록합니다. 팝업을 열었을 때 팝업 제목으로 바뀌지 않으면 포커스 처리가 빠진 것입니다.`)])],-1)]]),_:1})]),s(`section`,N,[i[25]||=s(`h2`,null,[s(`span`,{class:`section-no`},`06`),u(` 해결 코드`)],-1),i[26]||=s(`p`,null,[u(`팝업을 공통 컴포넌트로 만들고, 열림 상태는 `),s(`code`,null,`defineModel('open')`),u(`으로 부모와 주고받습니다(`),s(`code`,null,`useId()`),u(`는 Vue 3.5 이상).`)],-1),l(g,{tabs:t(T)},null,8,[`tabs`])]),i[29]||=p(`<section id="section-6"><h2><span class="section-no">07</span> 비슷한 상황</h2><p>조상 요소의 영향을 받는 레이어는 팝업만이 아닙니다. 아래 경우도 Teleport로 해결하거나 함께 확인하세요.</p><h3>드롭다운·툴팁이 잘릴 때</h3><p>스크롤 영역이나 카드 안의 드롭다운 목록도 <code>overflow: hidden</code>에 잘립니다. <code>body</code>로 옮기면 위치는 직접 계산해야 합니다. 목록에 <code>position: fixed</code>를 주고, 버튼의 <code>getBoundingClientRect()</code> 값으로 좌표를 정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;trigger&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">:aria-expanded</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle&quot;</span>&gt;</span>정렬<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Teleport</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;body&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sort-options&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;position&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Teleport</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref, useTemplateRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> open = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)
<span class="hljs-keyword">const</span> position = <span class="hljs-title function_">ref</span>({})
<span class="hljs-keyword">const</span> trigger = <span class="hljs-title function_">useTemplateRef</span>(<span class="hljs-string">&#39;trigger&#39;</span>)

<span class="hljs-keyword">function</span> <span class="hljs-title function_">toggle</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> rect = trigger.<span class="hljs-property">value</span>.<span class="hljs-title function_">getBoundingClientRect</span>()
  position.<span class="hljs-property">value</span> = { <span class="hljs-attr">top</span>: <span class="hljs-string">\`<span class="hljs-subst">\${rect.bottom}</span>px\`</span>, <span class="hljs-attr">left</span>: <span class="hljs-string">\`<span class="hljs-subst">\${rect.left}</span>px\`</span> }
  open.<span class="hljs-property">value</span> = !open.<span class="hljs-property">value</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>화면 크기에 따라 옮길지 정할 때</h3><p>모바일에서는 바텀시트로 <code>body</code>에 띄우고, PC에서는 제자리에 두는 경우 <code>disabled</code>를 씁니다. <code>disabled</code>가 <code>true</code>면 원래 위치에 그립니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">Teleport</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;body&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;isPc&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;filter-sheet&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Teleport</span>&gt;</span>
</code></pre><h3>옮길 대상이 Vue 화면 안에 있을 때</h3><p><code>#modal-root</code> 같은 대상 요소를 <code>index.html</code>이 아니라 Vue 컴포넌트가 그린다면, Teleport가 대상을 찾는 시점에 아직 문서에 없어 경고가 납니다. Vue 3.5부터는 <code>defer</code>를 붙이면 같은 화면을 다 그린 뒤 대상을 찾습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Teleport</span> <span class="hljs-attr">defer</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;#modal-root&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isOpen&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;toast&quot;</span>&gt;</span>저장되었습니다.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Teleport</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;modal-root&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></section><section id="section-7"><h2><span class="section-no">08</span> 적용 시 주의점</h2><ul><li><strong>프로젝트에 공통 팝업이 있으면 그것을 씁니다.</strong> 이미 레이어 컴포넌트나 팝업 스크립트가 있다면 새로 만들지 말고, 포커스·Escape 처리가 되어 있는지 확인해 빠진 부분을 담당자와 공유합니다.</li><li><strong>Teleport 대상은 먼저 있어야 합니다.</strong> <code>to=&quot;#modal-root&quot;</code>처럼 특정 요소로 옮길 때는 그 요소가 앱보다 먼저 문서에 있어야 합니다. <code>body</code>는 항상 있으므로 가장 안전합니다.</li><li><strong>scoped 스타일은 그대로 적용됩니다.</strong> 그리는 위치만 바뀌고 컴포넌트는 같으므로 <code>data-v</code> 속성이 유지됩니다. 다만 부모의 <code>.section .popup</code>처럼 <strong>조상 선택자에 기대는 규칙</strong>은 더 이상 맞지 않습니다.</li><li><strong>스크롤 잠금은 따로 처리합니다.</strong> 팝업이 열린 동안 뒤 화면이 스크롤되지 않게 하려면 <code>body</code>에 클래스를 붙여 <code>overflow: hidden</code>을 줍니다.</li></ul></section>`,2),s(`section`,P,[i[28]||=s(`h2`,null,[s(`span`,{class:`section-no`},`09`),u(` 짧은 실습`)],-1),l(_,null,{default:r(()=>[...i[27]||=[s(`p`,null,`위 예제에서 확인해 보세요.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`문제 쪽 팝업은 카드 크기 안에서만 어둡게 덮이고 대화상자가 잘린다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`해결 쪽 버튼을 키보드(Tab → Enter)로 열면 팝업 제목으로 포커스가 이동한다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`Escape로 닫으면 포커스가 ‘거래내역상세 열기’ 버튼으로 돌아온다.`)])])],-1)]]),_:1})])])}}};export{Q as default,G as duration,V as group,F as id,q as keyProperty,B as lead,W as level,R as navTitle,I as order,K as prerequisites,Z as references,X as related,J as status,z as summary,U as tags,L as title,H as topic,Y as updated};