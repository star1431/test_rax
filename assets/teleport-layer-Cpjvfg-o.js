import{F as e,H as t,N as n,O as r,R as i,S as a,c as o,f as s,i as c,l,m as u,p as d,r as f,s as p,u as m,w as h,x as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{p as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y={class:`demo-tl-card`},b=[`aria-expanded`,`onClick`],x={key:0,class:`demo-tl-popup`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`tl-title-problem`},S={class:`demo-tl-dialog`},C={class:`demo-tl-dialog`},w={__name:`TeleportLayerDemo`,setup(t){let r=e=>e?`solved`:`problem`,s=i({problem:!1,solved:!1}),w={},T=n(`solvedTitle`),E=e=>{let t=document.getElementById(`app`);t&&(t.inert=e)};async function D(e){s[r(e)]=!0,e&&(E(!0),await g(),T.value?.focus())}async function O(e){s[r(e)]=!1,e&&(E(!1),await g(),w.solved?.focus())}return a(()=>E(!1)),(t,n)=>(h(),m(f,null,[u(v,{problem:{code:`카드 안에 팝업`,note:`팝업이 카드 영역에 갇혀 잘리고, 포커스도 버튼에 남습니다.`},solved:{code:`<Teleport to="body">`,note:`화면 전체에 열리고, 포커스가 팝업으로 이동했다가 닫으면 돌아옵니다.`}},{default:e(({solved:e})=>[p(`div`,y,[n[7]||=p(`p`,{class:`demo-tl-text`},`거래 1건 · 1,280,000원`,-1),p(`button`,{ref:t=>w[r(e)]=t,type:`button`,class:`demo-tl-open`,"aria-expanded":s[r(e)],onClick:t=>D(e)},` 거래내역상세 열기 `,8,b),!e&&s.problem?(h(),m(`div`,x,[p(`div`,{class:`demo-tl-dimmed`,onClick:n[0]||=e=>O(!1)}),p(`div`,S,[n[5]||=p(`strong`,{id:`tl-title-problem`},`거래내역상세`,-1),n[6]||=p(`dl`,{class:`demo-tl-list`},[p(`div`,null,[p(`dt`,null,`거래일시`),p(`dd`,null,`2023.06.09 16:26`)]),p(`div`,null,[p(`dt`,null,`거래금액`),p(`dd`,null,`1,280,000원`)])],-1),p(`button`,{type:`button`,class:`demo-tl-confirm`,onClick:n[1]||=e=>O(!1)},`확인`)])])):l(``,!0)])]),caption:e(()=>[...n[8]||=[d(` 해결 쪽 팝업은 실제 화면 전체에 열립니다. Escape 키나 확인 버튼으로 닫으세요. `,-1)]]),_:1}),(h(),o(c,{to:`body`},[s.solved?(h(),m(`div`,{key:0,class:`demo-tl-popup demo-tl-popup--body`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`tl-title-solved`,onKeydown:n[4]||=_(e=>O(!0),[`esc`])},[p(`div`,{class:`demo-tl-dimmed`,onClick:n[2]||=e=>O(!0)}),p(`div`,C,[p(`strong`,{id:`tl-title-solved`,ref_key:`solvedTitle`,ref:T,tabindex:`-1`},`거래내역상세`,512),n[9]||=p(`dl`,{class:`demo-tl-list`},[p(`div`,null,[p(`dt`,null,`거래일시`),p(`dd`,null,`2023.06.09 16:26`)]),p(`div`,null,[p(`dt`,null,`거래금액`),p(`dd`,null,`1,280,000원`)])],-1),p(`button`,{type:`button`,class:`demo-tl-confirm`,onClick:n[3]||=e=>O(!0)},`확인`)])],32)):l(``,!0)]))],64))}},T=[{label:`LayerPopup.vue`,language:`xml`,code:`<!-- LayerPopup.vue -->
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
import { nextTick, useId, useTemplateRef, watch } from 'vue'

defineProps({
  heading: { type: String, required: true },
})

const open = defineModel('open', { type: Boolean, default: false })
const titleId = useId()
const title = useTemplateRef('title')
let opener = null

// 열 때: 연 버튼을 기억하고, 뒤 화면을 막고, 팝업 제목으로 포커스를 옮깁니다.
// 닫을 때: 뒤 화면을 풀고, 연 버튼으로 포커스를 돌려줍니다.
watch(open, async (isOpen) => {
  document.getElementById('app').inert = isOpen
  if (isOpen) {
    opener = document.activeElement
    await nextTick()
    title.value?.focus()
  } else {
    opener?.focus()
  }
})

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
<div class="layer-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">…</div>`}],E={class:`doc-body`},D={id:`section-0`},O={id:`section-1`},k={id:`section-2`},A={class:`table-wrap`},j={id:`section-3`},M={id:`section-4`},N={id:`section-6`},P=`teleport-layer`,F=3,I=`팝업이 잘리거나 가려질 때 (Teleport와 포커스)`,L=`Teleport 레이어`,R=`카드·슬라이드 안에서 연 팝업이 overflow·transform·z-index 때문에 잘리거나 가려지는 문제를 Teleport로 해결하고, 포커스 이동·Escape 닫기·배경 inert로 팝업 접근성을 함께 챙깁니다.`,z=`팝업이 카드 안에 갇히거나 헤더 뒤로 숨는다면?
팝업은 Teleport로 body 아래에 그리고, 포커스는 팝업으로 옮기세요.
`,B=`레이어·모션`,V=`레이어`,H=[`Vue`,`Teleport`,`팝업`,`dialog`,`aria-modal`,`inert`,`포커스`,`z-index`,`overflow`,`접근성`],U=`중급`,W=`약 8분`,G=[`position fixed`,`Vue 컴포넌트`],K=`<Teleport to="body">`,q=`published`,J=`2026-11-05`,Y=[`scoped-deep`,`transition-toggle`],X=[{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport.html`},{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`}],Z={__name:`teleport-layer`,setup(n,{expose:i}){return i({frontmatter:{id:`teleport-layer`,order:3,title:`팝업이 잘리거나 가려질 때 (Teleport와 포커스)`,navTitle:`Teleport 레이어`,summary:`카드·슬라이드 안에서 연 팝업이 overflow·transform·z-index 때문에 잘리거나 가려지는 문제를 Teleport로 해결하고, 포커스 이동·Escape 닫기·배경 inert로 팝업 접근성을 함께 챙깁니다.`,lead:`팝업이 카드 안에 갇히거나 헤더 뒤로 숨는다면?
팝업은 Teleport로 body 아래에 그리고, 포커스는 팝업으로 옮기세요.
`,group:`레이어·모션`,topic:`레이어`,tags:[`Vue`,`Teleport`,`팝업`,`dialog`,`aria-modal`,`inert`,`포커스`,`z-index`,`overflow`,`접근성`],level:`중급`,duration:`약 8분`,prerequisites:[`position fixed`,`Vue 컴포넌트`],keyProperty:`<Teleport to="body">`,status:`published`,updated:`2026-11-05`,related:[`scoped-deep`,`transition-toggle`],references:[{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport.html`},{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`}]}}),(n,i)=>{let a=r(`DocTakeaway`),o=r(`RouterLink`),c=r(`DocSteps`),l=r(`CodePanel`),f=r(`DocPractice`);return h(),m(`div`,E,[p(`section`,D,[i[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),i[2]||=p(`p`,null,[d(`거래 카드 안의 버튼으로 상세 팝업을 엽니다. 팝업은 `),p(`code`,null,`position: fixed`),d(`로 화면 전체를 덮도록 만들었는데, `),p(`strong`,null,`카드 크기만큼만 보이고 나머지가 잘립니다.`),d(` 다른 화면에서는 팝업이 고정 헤더 `),p(`strong`,null,`뒤로`),d(` 숨기도 합니다. 키보드 사용자는 팝업이 열려도 포커스가 버튼에 남아 뒤쪽 화면을 계속 돌아다닙니다.`)],-1),u(a,null,{default:e(()=>[...i[0]||=[p(`p`,null,[d(`팝업은 `),p(`strong`,null,[p(`code`,null,`<Teleport to="body">`),d(`로`)]),d(),p(`code`,null,`body`),d(` 바로 아래에 그리세요. 열면 `),p(`strong`,null,`팝업으로 포커스를 옮기고`),d(`, 닫으면 연 버튼으로 돌려주며, 그동안 뒤 화면은 `),p(`strong`,null,[p(`code`,null,`inert`),d(`로`)]),d(` 막습니다.`)],-1)]]),_:1})]),p(`section`,O,[i[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[4]||=p(`p`,null,[d(`두 카드는 같은 카드입니다(`),p(`code`,null,`overflow: hidden`),d(` + `),p(`code`,null,`transform`),d(`). 각각 ‘거래내역상세 열기’를 눌러 보세요. 해결 쪽은 키보드(Tab, Enter, Escape)로도 확인해 보세요.`)],-1),u(w)]),p(`section`,k,[i[13]||=p(`h2`,null,[p(`span`,{class:`section-no`},`03`),d(` 왜 잘리고 가려질까요?`)],-1),i[14]||=p(`p`,null,[d(`팝업이 `),p(`strong`,null,`어디에 그려졌는지(DOM 위치)가`),d(` 조상 요소의 영향을 정합니다.`)],-1),p(`div`,A,[p(`table`,null,[i[12]||=p(`thead`,null,[p(`tr`,null,[p(`th`,null,`원인`),p(`th`,null,`결과`)])],-1),p(`tbody`,null,[p(`tr`,null,[i[9]||=p(`td`,null,[d(`조상에 `),p(`code`,null,`transform`),d(`·`),p(`code`,null,`filter`),d(` 등`)],-1),p(`td`,null,[i[6]||=p(`code`,null,`fixed`,-1),i[7]||=d(`의 기준이 화면이 아닌 그 조상이 됨 → 조상 크기에 갇힘 (`,-1),u(o,{to:`/pub/css/fixed-transform`},{default:e(()=>[...i[5]||=[d(`fixed 기준 오류`,-1)]]),_:1}),i[8]||=d(`)`,-1)])]),i[10]||=p(`tr`,null,[p(`td`,null,[d(`조상에 `),p(`code`,null,`overflow: hidden`)]),p(`td`,null,`조상 밖으로 나간 부분이 잘림`)],-1),i[11]||=p(`tr`,null,[p(`td`,null,[d(`조상에 `),p(`code`,null,`z-index`),d(` + `),p(`code`,null,`position`),d(` (쌓임 맥락)`)]),p(`td`,null,[d(`팝업의 `),p(`code`,null,`z-index: 9999`),d(`도 그 조상 안에서만 비교됨 → 헤더 뒤로 숨음`)])],-1)])])]),i[15]||=p(`p`,null,[d(`세 가지 모두 CSS 값을 더 키워서는 해결되지 않습니다. 팝업을 그 조상 `),p(`strong`,null,`밖으로`),d(` 옮겨야 합니다. `),p(`code`,null,`<Teleport to="body">`),d(`는 컴포넌트 코드는 그대로 두고, 화면에 그릴 위치만 `),p(`code`,null,`body`),d(` 아래로 바꿉니다. props·이벤트·상태는 원래 컴포넌트와 그대로 연결됩니다.`)],-1)]),p(`section`,j,[i[17]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 팝업 접근성`)],-1),i[18]||=p(`p`,null,[d(`화면에 띄우는 것만큼 `),p(`strong`,null,`키보드와 스크린 리더`),d(`에서 팝업이 열렸음을 알리는 것이 중요합니다.`)],-1),u(c,null,{default:e(()=>[...i[16]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`열 때`),d(` 팝업 제목으로 포커스`)]),p(`li`,null,[p(`strong`,null,`열려 있는 동안`),d(` 뒤 화면 `),p(`code`,null,`inert`)]),p(`li`,null,[p(`strong`,null,`Escape·닫기`),d(` 팝업 닫기`)]),p(`li`,null,[p(`strong`,null,`닫은 뒤`),d(` 연 버튼으로 포커스`)])],-1)]]),_:1}),i[19]||=s(`<ul><li><strong><code>role=&quot;dialog&quot;</code> + <code>aria-modal=&quot;true&quot;</code></strong>: 스크린 리더에 대화상자임을 알립니다. <code>aria-labelledby</code>로 제목을 연결합니다.</li><li><strong><code>inert</code></strong>: 지정한 영역 전체를 클릭·포커스·스크린 리더 대상에서 한 번에 빼 줍니다. 팝업을 <code>body</code>로 옮겼기 때문에 앱 영역(<code>#app</code>)에만 <code>inert</code>를 걸면 됩니다.</li><li><strong>예전 방식과 비교</strong>: 헤더·버튼 등 뒤쪽 요소마다 <code>aria-hidden</code>을 붙이는 방식은 빠뜨리기 쉽고, <code>aria-hidden</code>은 읽기만 막을 뿐 <strong>키보드 포커스는 막지 못합니다</strong>. ‘aria-hidden과 inert’ 탭을 비교해 보세요.</li></ul>`,1)]),p(`section`,M,[i[20]||=p(`h2`,null,[p(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),i[21]||=p(`p`,null,[d(`팝업을 공통 컴포넌트로 만들고, 열림 상태는 `),p(`code`,null,`defineModel('open')`),d(`으로 부모와 주고받습니다(`),p(`code`,null,`useId()`),d(`는 Vue 3.5 이상).`)],-1),u(l,{tabs:t(T)},null,8,[`tabs`])]),i[24]||=s(`<section id="section-5"><h2><span class="section-no">06</span> 적용 시 주의점</h2><ul><li><strong>프로젝트에 공통 팝업이 있으면 그것을 씁니다.</strong> 이미 레이어 컴포넌트나 팝업 스크립트가 있다면 새로 만들지 말고, 포커스·Escape 처리가 되어 있는지 확인해 빠진 부분을 담당자와 공유합니다.</li><li><strong>Teleport 대상은 먼저 있어야 합니다.</strong> <code>to=&quot;#modal-root&quot;</code>처럼 특정 요소로 옮길 때는 그 요소가 앱보다 먼저 문서에 있어야 합니다. <code>body</code>는 항상 있으므로 가장 안전합니다.</li><li><strong>scoped 스타일은 그대로 적용됩니다.</strong> 그리는 위치만 바뀌고 컴포넌트는 같으므로 <code>data-v</code> 속성이 유지됩니다. 다만 부모의 <code>.section .popup</code>처럼 <strong>조상 선택자에 기대는 규칙</strong>은 더 이상 맞지 않습니다.</li><li><strong>스크롤 잠금은 따로 처리합니다.</strong> 팝업이 열린 동안 뒤 화면이 스크롤되지 않게 하려면 <code>body</code>에 클래스를 붙여 <code>overflow: hidden</code>을 줍니다.</li></ul></section>`,1),p(`section`,N,[i[23]||=p(`h2`,null,[p(`span`,{class:`section-no`},`07`),d(` 짧은 실습`)],-1),u(f,null,{default:e(()=>[...i[22]||=[p(`p`,null,`위 예제에서 확인해 보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문제 쪽 팝업은 카드 크기 안에서만 어둡게 덮이고 대화상자가 잘린다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`해결 쪽 버튼을 키보드(Tab → Enter)로 열면 팝업 제목으로 포커스가 이동한다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`Escape로 닫으면 포커스가 ‘거래내역상세 열기’ 버튼으로 돌아온다.`)])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};