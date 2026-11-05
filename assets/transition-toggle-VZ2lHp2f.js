import{C as e,E as t,F as n,H as r,O as i,S as a,c as o,f as s,l as c,m as l,ot as u,p as d,r as f,s as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{u as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y={class:`sample-buttons`},b=[`aria-pressed`],x={key:0,class:`demo-tt-panel`},S={key:1,class:`demo-tt-panel demo-tt-panel--keyframes`},C={key:0,class:`demo-tt-log`,"aria-label":`붙었던 클래스 순서`},w={key:0,class:`demo-tt-empty`},T={__name:`TransitionDemo`,setup(r){let i=g(!1),s=g([]),l=null,T={};return e(()=>{let e=T.solved;e&&(l=new MutationObserver(()=>{let t=e.querySelector(`.demo-tt-panel`),n=(t?[...t.classList].filter(e=>e.startsWith(`fold-`)).join(` `):``)||(t?`(클래스 없음: 다 열린 상태)`:`(요소 제거됨)`);s.value.at(-1)!==n&&(s.value=[...s.value,n].slice(-8))}),l.observe(e,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`class`]}))}),a(()=>l?.disconnect()),(e,r)=>(h(),o(v,{problem:{code:`v-if + @keyframes`,note:`열 때는 부드럽지만, 닫으면 바로 사라집니다.`},solved:{code:`<Transition name="fold">`,note:`닫을 때도 사라지는 동작이 보입니다.`}},{controls:n(()=>[r[1]||=p(`span`,{class:`demo-label`},`조작`,-1),p(`div`,y,[p(`button`,{type:`button`,"aria-pressed":i.value,onClick:r[0]||=e=>i.value=!i.value},u(i.value?`닫기`:`열기`),9,b)])]),default:n(({solved:e})=>[p(`div`,{ref:t=>T[e?`solved`:`problem`]=t,class:`demo-tt-stage`},[e?(h(),o(_,{key:0,name:`fold`},{default:n(()=>[i.value?(h(),m(`div`,x,`알림 설정이 저장되었습니다.`)):c(``,!0)]),_:1})):i.value?(h(),m(`div`,S,`알림 설정이 저장되었습니다.`)):c(``,!0)],512),e?(h(),m(`ol`,C,[(h(!0),m(f,null,t(s.value,(e,t)=>(h(),m(`li`,{key:t},[p(`code`,null,u(e),1)]))),128)),s.value.length?c(``,!0):(h(),m(`li`,w,`열기·닫기를 누르면 붙는 클래스가 여기에 쌓입니다.`))])):c(``,!0)]),caption:n(()=>[...r[2]||=[d(` 움직임 줄이기 설정을 켠 환경에서는 애니메이션 없이 바로 바뀝니다. `,-1)]]),_:1}))}},E=[{label:`열고 닫기`,language:`xml`,code:`<template>
  <button type="button" :aria-expanded="isOpen" aria-controls="notice-panel" @click="isOpen = !isOpen">
    알림 설정
  </button>

  <Transition name="fold">
    <div v-if="isOpen" id="notice-panel" class="notice-panel">…</div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<style>
/* 진행 중: 어떤 속성을 얼마 동안 바꿀지 */
.fold-enter-active,
.fold-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* 시작(열기 전)과 끝(닫은 뒤)의 모습 */
.fold-enter-from,
.fold-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .fold-enter-active,
  .fold-leave-active {
    transition: none;
  }
}
</style>`},{label:`탭 바꾸기 (mode)`,language:`xml`,code:`<template>
  <!-- 탭 내용 바꾸기: 나가는 요소가 끝난 뒤 들어오게 해서 두 요소가 겹치지 않게 합니다. -->
  <Transition name="fade" mode="out-in">
    <component :is="tabs[current]" :key="current" />
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>`},{label:`목록 (TransitionGroup)`,language:`xml`,code:`<template>
  <!-- 목록 추가·삭제: TransitionGroup, 항목마다 key 필수 -->
  <TransitionGroup name="list" tag="ul" class="toast-list">
    <li v-for="toast in toasts" :key="toast.id">{{ toast.message }}</li>
  </TransitionGroup>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(16px);
}
</style>`}],D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-5`},P=`transition-toggle`,F=4,I=`닫힐 때도 부드럽게 (Transition)`,L=`Transition 열고 닫기`,R=`v-if로 사라지는 요소는 CSS만으로 닫힘 애니메이션을 줄 수 없는 이유를 이해하고, Transition의 6가지 클래스, 탭 교체용 mode="out-in", 목록용 TransitionGroup을 정리합니다.`,z=`열 때는 부드러운데 닫으면 툭 사라진다면?
v-if 요소는 Transition으로 감싸 사라지는 시간을 주세요.
`,B=`레이어·모션`,V=`모션`,H=[`Vue`,`Transition`,`TransitionGroup`,`v-if`,`enter`,`leave`,`mode="out-in"`,`애니메이션`,`prefers-reduced-motion`],U=`기초`,W=`약 7분`,G=[`CSS transition`,`v-if`],K=`<Transition name="fold">`,q=`published`,J=`2026-11-05`,Y=[`teleport-layer`,`define-model`],X=[{title:`Vue — Transition`,url:`https://ko.vuejs.org/guide/built-ins/transition.html`},{title:`Vue — TransitionGroup`,url:`https://ko.vuejs.org/guide/built-ins/transition-group.html`}],Z={__name:`transition-toggle`,setup(e,{expose:t}){return t({frontmatter:{id:`transition-toggle`,order:4,title:`닫힐 때도 부드럽게 (Transition)`,navTitle:`Transition 열고 닫기`,summary:`v-if로 사라지는 요소는 CSS만으로 닫힘 애니메이션을 줄 수 없는 이유를 이해하고, Transition의 6가지 클래스, 탭 교체용 mode="out-in", 목록용 TransitionGroup을 정리합니다.`,lead:`열 때는 부드러운데 닫으면 툭 사라진다면?
v-if 요소는 Transition으로 감싸 사라지는 시간을 주세요.
`,group:`레이어·모션`,topic:`모션`,tags:[`Vue`,`Transition`,`TransitionGroup`,`v-if`,`enter`,`leave`,`mode="out-in"`,`애니메이션`,`prefers-reduced-motion`],level:`기초`,duration:`약 7분`,prerequisites:[`CSS transition`,`v-if`],keyProperty:`<Transition name="fold">`,status:`published`,updated:`2026-11-05`,related:[`teleport-layer`,`define-model`],references:[{title:`Vue — Transition`,url:`https://ko.vuejs.org/guide/built-ins/transition.html`},{title:`Vue — TransitionGroup`,url:`https://ko.vuejs.org/guide/built-ins/transition-group.html`}]}}),(e,t)=>{let a=i(`DocTakeaway`),o=i(`DocSteps`),c=i(`CodePanel`),u=i(`RouterLink`),f=i(`DocPractice`);return h(),m(`div`,D,[p(`section`,O,[t[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),t[2]||=p(`p`,null,[d(`알림 패널에 나타나는 애니메이션(`),p(`code`,null,`@keyframes`),d(`)을 넣었습니다. 열 때는 부드럽게 내려오는데, `),p(`strong`,null,`닫으면 애니메이션 없이 바로 사라집니다.`),d(` 닫힘용 `),p(`code`,null,`@keyframes`),d(`를 추가해도 재생되지 않습니다.`)],-1),l(a,null,{default:n(()=>[...t[0]||=[p(`p`,null,[p(`code`,null,`v-if`),d(`로 없어지는 요소는 `),p(`strong`,null,[p(`code`,null,`<Transition>`),d(`으로 감싸세요.`)]),d(` Vue가 요소를 지우기 전에 닫힘 클래스를 붙이고, 애니메이션이 끝날 때까지 기다렸다가 지웁니다.`)],-1)]]),_:1})]),p(`section`,k,[t[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),t[4]||=p(`p`,null,`‘열기’와 ‘닫기’를 번갈아 눌러 보세요. 해결 쪽 아래에는 Vue가 실제로 붙였다 뗀 클래스가 순서대로 쌓입니다.`,-1),l(T)]),p(`section`,A,[t[6]||=s(`<h2><span class="section-no">03</span> 왜 닫힐 때는 안 될까요?</h2><p><code>v-if</code>가 <code>false</code>가 되면 Vue는 요소를 <strong>즉시 DOM에서 지웁니다.</strong> 화면에 없는 요소에는 CSS 애니메이션을 그릴 수 없으므로, 닫힘 <code>@keyframes</code>를 만들어도 재생할 틈이 없습니다.</p><p><code>&lt;Transition&gt;</code>은 이 순간에 끼어들어 <strong>클래스를 붙이고, 끝날 때까지 기다린 뒤</strong> 요소를 지웁니다. 이름이 <code>fold</code>면 아래 클래스가 차례로 붙습니다.</p><div class="table-wrap"><table><thead><tr><th>단계</th><th>열 때 (enter)</th><th>닫을 때 (leave)</th></tr></thead><tbody><tr><td>시작</td><td><code>fold-enter-from</code> + <code>fold-enter-active</code></td><td><code>fold-leave-from</code> + <code>fold-leave-active</code></td></tr><tr><td>다음 프레임</td><td><code>fold-enter-to</code> + <code>fold-enter-active</code></td><td><code>fold-leave-to</code> + <code>fold-leave-active</code></td></tr><tr><td>끝</td><td>클래스 모두 제거</td><td>요소 제거</td></tr></tbody></table></div><p>CSS는 보통 두 묶음만 쓰면 됩니다.</p>`,5),l(o,null,{default:n(()=>[...t[5]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`진행 중`),d(),p(`code`,null,`*-enter-active, *-leave-active`),d(` → `),p(`code`,null,`transition`)]),p(`li`,null,[p(`strong`,null,`보이지 않는 상태`),d(),p(`code`,null,`*-enter-from, *-leave-to`),d(` → `),p(`code`,null,`opacity: 0`),d(` 등`)])],-1)]]),_:1})]),p(`section`,j,[t[7]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 해결 코드`)],-1),t[8]||=p(`p`,null,`열고 닫기, 탭 내용 바꾸기, 목록 추가·삭제 세 가지입니다.`,-1),l(c,{tabs:r(E)},null,8,[`tabs`]),t[9]||=s(`<ul><li><strong><code>mode=&quot;out-in&quot;</code></strong>: 탭처럼 한 요소가 나가고 다른 요소가 들어올 때, 나가는 애니메이션이 끝난 뒤에 들어오게 합니다. 없으면 두 요소가 잠시 함께 있어 높이가 튀거나 겹칩니다.</li><li><strong><code>TransitionGroup</code></strong>: 여러 항목을 추가·삭제할 때 씁니다. 항목마다 <code>key</code>가 반드시 있어야 합니다.</li><li><strong><code>v-show</code>도 됩니다</strong>: <code>display: none</code>으로 숨기는 <code>v-show</code>도 <code>&lt;Transition&gt;</code> 안에서 같은 클래스로 동작합니다.</li></ul>`,1)]),p(`section`,M,[t[19]||=p(`h2`,null,[p(`span`,{class:`section-no`},`05`),d(` 적용 시 주의점`)],-1),p(`ul`,null,[t[16]||=p(`li`,null,[p(`strong`,null,[p(`code`,null,`<Transition>`),d(` 안에는 요소가 하나여야 합니다.`)]),d(` 여러 요소를 넣으면 경고가 나고 애니메이션이 동작하지 않습니다. 감싸는 `),p(`code`,null,`div`),d(` 하나를 두거나 목록이면 `),p(`code`,null,`TransitionGroup`),d(`을 씁니다.`)],-1),t[17]||=p(`li`,null,[p(`strong`,null,`컴포넌트를 넣으면 그 컴포넌트의 바깥 요소가 하나여야 합니다.`),d(` 루트 요소가 여러 개인 컴포넌트는 Transition이 어느 요소에 클래스를 붙일지 알 수 없습니다.`)],-1),p(`li`,null,[t[11]||=p(`strong`,null,[p(`code`,null,`height: auto`),d(`는 transition되지 않습니다.`)],-1),t[12]||=d(` 높이를 모르는 패널을 펼치려면 `,-1),l(u,{to:`/pub/css/grid-accordion`},{default:n(()=>[...t[10]||=[d(`아코디언 펼치기`,-1)]]),_:1}),t[13]||=d(`의 `,-1),t[14]||=p(`code`,null,`grid-template-rows: 0fr → 1fr`,-1),t[15]||=d(` 방법을 함께 씁니다.`,-1)]),t[18]||=p(`li`,null,[p(`strong`,null,`움직임 줄이기 설정을 존중합니다.`),d(),p(`code`,null,`prefers-reduced-motion: reduce`),d(`에서는 `),p(`code`,null,`transition: none`),d(`으로 바로 바뀌게 합니다. 클래스는 그대로 붙었다 떨어지므로 동작에는 문제가 없습니다.`)],-1)])]),p(`section`,N,[t[21]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),d(` 짧은 실습`)],-1),l(f,null,{default:n(()=>[...t[20]||=[p(`p`,null,`위 예제에서 확인해 보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문제 쪽은 닫을 때 바로 사라지고, 해결 쪽은 위로 흐려지며 사라진다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},[d(`해결 쪽 기록에서 닫을 때 `),p(`code`,null,`fold-leave-active fold-leave-to`),d(`가 붙은 뒤 ‘요소 제거됨’이 되는 것을 확인한다.`)])])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},[d(`탭 바꾸기 코드에서 `),p(`code`,null,`mode="out-in"`),d(`을 지우면 어떤 일이 생길지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};