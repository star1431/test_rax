import{D as e,E as t,G as n,H as r,R as i,T as a,c as o,d as s,g as c,h as l,j as u,k as d,l as f,m as p,pt as m,r as h,u as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{m as _}from"./index-DHgvQBhl.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y={class:`sample-buttons`},b=[`aria-pressed`],x={key:0,class:`demo-tt-panel`},S={key:1,class:`demo-tt-panel demo-tt-panel-keyframes`},C={key:0,class:`demo-tt-log`,"aria-label":`붙었던 클래스 순서`},w={key:0,class:`demo-tt-empty`},T={__name:`TransitionDemo`,setup(n){let c=r(!1),u=r([]),p=null,T={};return t(()=>{let e=T.solved;e&&(p=new MutationObserver(()=>{let t=e.querySelector(`.demo-tt-panel`),n=(t?[...t.classList].filter(e=>e.startsWith(`fold-`)).join(` `):``)||(t?`(클래스 없음: 다 열린 상태)`:`(요소 제거됨)`);u.value.at(-1)!==n&&(u.value=[...u.value,n].slice(-8))}),p.observe(e,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`class`]}))}),a(()=>p?.disconnect()),(t,n)=>(e(),f(v,{problem:{code:`v-if + @keyframes`,note:`열 때는 부드럽지만, 닫으면 바로 사라집니다.`},solved:{code:`<Transition name="fold">`,note:`닫을 때도 사라지는 동작이 보입니다.`}},{controls:i(()=>[n[1]||=o(`span`,{class:`demo-label`},`조작`,-1),o(`div`,y,[o(`button`,{type:`button`,"aria-pressed":c.value,onClick:n[0]||=e=>c.value=!c.value},m(c.value?`닫기`:`열기`),9,b)])]),default:i(({solved:t})=>[o(`div`,{ref:e=>T[t?`solved`:`problem`]=e,class:`demo-tt-stage`},[t?(e(),f(_,{key:0,name:`fold`},{default:i(()=>[c.value?(e(),s(`div`,x,`알림 설정이 저장되었습니다.`)):g(``,!0)]),_:1})):c.value?(e(),s(`div`,S,`알림 설정이 저장되었습니다.`)):g(``,!0)],512),t?(e(),s(`ol`,C,[(e(!0),s(h,null,d(u.value,(t,n)=>(e(),s(`li`,{key:n},[o(`code`,null,m(t),1)]))),128)),u.value.length?g(``,!0):(e(),s(`li`,w,`열기·닫기를 누르면 붙는 클래스가 여기에 쌓입니다.`))])):g(``,!0)]),caption:i(()=>[...n[2]||=[l(` 움직임 줄이기 설정을 켠 환경에서는 애니메이션 없이 바로 바뀝니다. `,-1)]]),_:1}))}},E=[{label:`열고 닫기`,language:`xml`,code:`<template>
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
</style>`}],D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-6`},P={id:`section-7`},F=`transition-toggle`,I=4,L=`닫힐 때도 부드럽게 (Transition)`,R=`Transition 열고 닫기`,z=`v-if로 사라지는 요소는 CSS만으로 닫힘 애니메이션을 줄 수 없는 이유를 이해하고, Transition의 6가지 클래스, 탭 교체용 mode="out-in", 목록용 TransitionGroup을 정리합니다.`,B=`열 때는 부드러운데 닫으면 툭 사라진다면?
v-if 요소는 Transition으로 감싸 사라지는 시간을 주세요.
`,V=`레이어·모션`,H=`모션`,U=[`Vue`,`Transition`,`TransitionGroup`,`v-if`,`enter`,`leave`,`mode="out-in"`,`애니메이션`,`prefers-reduced-motion`],W=`기초`,G=`약 11분`,K=[`CSS transition`,`v-if`],q=`<Transition name="fold">`,J=`published`,Y=`2026-11-11`,X=[`teleport-layer`,`define-model`],Z=[{title:`Vue — Transition`,url:`https://ko.vuejs.org/guide/built-ins/transition.html`},{title:`Vue — TransitionGroup`,url:`https://ko.vuejs.org/guide/built-ins/transition-group.html`}],Q={__name:`transition-toggle`,setup(t,{expose:r}){return r({frontmatter:{id:`transition-toggle`,order:4,title:`닫힐 때도 부드럽게 (Transition)`,navTitle:`Transition 열고 닫기`,summary:`v-if로 사라지는 요소는 CSS만으로 닫힘 애니메이션을 줄 수 없는 이유를 이해하고, Transition의 6가지 클래스, 탭 교체용 mode="out-in", 목록용 TransitionGroup을 정리합니다.`,lead:`열 때는 부드러운데 닫으면 툭 사라진다면?
v-if 요소는 Transition으로 감싸 사라지는 시간을 주세요.
`,group:`레이어·모션`,topic:`모션`,tags:[`Vue`,`Transition`,`TransitionGroup`,`v-if`,`enter`,`leave`,`mode="out-in"`,`애니메이션`,`prefers-reduced-motion`],level:`기초`,duration:`약 11분`,prerequisites:[`CSS transition`,`v-if`],keyProperty:`<Transition name="fold">`,status:`published`,updated:`2026-11-11`,related:[`teleport-layer`,`define-model`],references:[{title:`Vue — Transition`,url:`https://ko.vuejs.org/guide/built-ins/transition.html`},{title:`Vue — TransitionGroup`,url:`https://ko.vuejs.org/guide/built-ins/transition-group.html`}]}}),(t,r)=>{let a=u(`DocIssue`),d=u(`DocTakeaway`),f=u(`DocSteps`),m=u(`DocInspect`),h=u(`CodePanel`),g=u(`RouterLink`),_=u(`DocPractice`);return e(),s(`div`,D,[o(`section`,O,[r[2]||=p(`<h2><span class="section-no">01</span> 문제 상황</h2><p>알림 패널에 나타나는 애니메이션(<code>@keyframes</code>)을 넣었습니다. 열 때는 부드럽게 내려오는데, <strong>닫으면 애니메이션 없이 바로 사라집니다.</strong> 닫힘용 <code>@keyframes</code>를 추가해도 재생되지 않습니다.</p><p>정적 HTML에서 클래스로 열고 닫을 때는 잘 되던 모션이, Vue 화면에서 <code>v-if</code>로 바뀐 뒤 검수에서 이런 형태로 돌아옵니다.</p>`,3),c(a,{label:`디자인 검수`,title:`알림 설정: 패널을 닫을 때 모션 없이 사라짐`,env:`전체 브라우저 · 알림 설정 패널 열기·닫기`,expected:`열 때처럼 닫을 때도 위로 흐려지며 사라짐`,actual:`닫기를 누르면 패널이 바로 사라지고 아래 내용이 한 번에 올라옴`},{default:i(()=>[...r[0]||=[o(`ol`,null,[o(`li`,null,`알림 설정 버튼을 눌러 패널을 엽니다.`),o(`li`,null,`다시 버튼을 눌러 패널을 닫습니다.`),o(`li`,null,`닫히는 동작을 시안의 모션 가이드와 비교합니다.`)],-1)]]),_:1}),c(d,null,{default:i(()=>[...r[1]||=[o(`p`,null,[o(`code`,null,`v-if`),l(`로 없어지는 요소는 `),o(`strong`,null,[o(`code`,null,`<Transition>`),l(`으로 감싸세요.`)]),l(` Vue가 요소를 지우기 전에 닫힘 클래스를 붙이고, 애니메이션이 끝날 때까지 기다렸다가 지웁니다.`)],-1)]]),_:1})]),o(`section`,k,[r[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=o(`p`,null,`‘열기’와 ‘닫기’를 번갈아 눌러 보세요. 해결 쪽 아래에는 Vue가 실제로 붙였다 뗀 클래스가 순서대로 쌓입니다.`,-1),c(T)]),o(`section`,A,[r[6]||=p(`<h2><span class="section-no">03</span> 왜 닫힐 때는 안 될까요?</h2><p><code>v-if</code>가 <code>false</code>가 되면 Vue는 요소를 <strong>즉시 DOM에서 지웁니다.</strong> 화면에 없는 요소에는 CSS 애니메이션을 그릴 수 없으므로, 닫힘 <code>@keyframes</code>를 만들어도 재생할 틈이 없습니다.</p><p><code>&lt;Transition&gt;</code>은 이 순간에 끼어들어 <strong>클래스를 붙이고, 끝날 때까지 기다린 뒤</strong> 요소를 지웁니다. 이름이 <code>fold</code>면 아래 클래스가 차례로 붙습니다.</p><div class="table-wrap"><table><thead><tr><th>단계</th><th>열 때 (enter)</th><th>닫을 때 (leave)</th></tr></thead><tbody><tr><td>시작</td><td><code>fold-enter-from</code> + <code>fold-enter-active</code></td><td><code>fold-leave-from</code> + <code>fold-leave-active</code></td></tr><tr><td>다음 프레임</td><td><code>fold-enter-to</code> + <code>fold-enter-active</code></td><td><code>fold-leave-to</code> + <code>fold-leave-active</code></td></tr><tr><td>끝</td><td>클래스 모두 제거</td><td>요소 제거</td></tr></tbody></table></div><p>CSS는 보통 두 묶음만 쓰면 됩니다.</p>`,5),c(f,null,{default:i(()=>[...r[5]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`진행 중`),l(),o(`code`,null,`*-enter-active, *-leave-active`),l(` → `),o(`code`,null,`transition`)]),o(`li`,null,[o(`strong`,null,`보이지 않는 상태`),l(),o(`code`,null,`*-enter-from, *-leave-to`),l(` → `),o(`code`,null,`opacity: 0`),l(` 등`)])],-1)]]),_:1})]),o(`section`,j,[r[8]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),l(` 원인 찾기`)],-1),r[9]||=o(`p`,null,[l(`닫힘 애니메이션이 없을 때는 `),o(`strong`,null,`닫는 순간 요소가 DOM에 얼마나 남아 있는지`),l(`를 봅니다. 위 예제의 두 패널을 번갈아 닫으며 확인해 보세요.`)],-1),c(m,null,{default:i(()=>[...r[7]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`Elements 패널에서 닫는 순간 보기`),l(` 열린 패널(`),o(`code`,null,`.demo-tt-panel`),l(`)을 선택해 두고 닫기를 누릅니다. 문제 쪽은 노드가 바로 없어지고, 개발 모드에서는 그 자리에 `),o(`code`,null,`<!--v-if-->`),l(` 주석만 남습니다.`)]),o(`li`,null,[o(`strong`,null,`클래스가 붙는지 확인`),l(` 해결 쪽을 닫으면 잠시 동안 `),o(`code`,null,`fold-leave-active fold-leave-to`),l(`가 붙은 뒤 노드가 사라집니다. 클래스가 전혀 붙지 않으면 `),o(`code`,null,`<Transition>`),l(`으로 감싸지 않았거나 `),o(`code`,null,`name`),l(`이 CSS와 다른 것입니다.`)]),o(`li`,null,[o(`strong`,null,`CSS에 transition이 있는지 확인`),l(` 클래스는 붙는데 바로 사라진다면, Search 패널(`),o(`code`,null,`Ctrl+Shift+F`),l(`)에서 `),o(`code`,null,`fold-leave-active`),l(`를 찾아 `),o(`code`,null,`transition`),l(`이나 `),o(`code`,null,`animation`),l(`이 있는지 봅니다. 시간이 없으면 Vue는 기다리지 않고 바로 지웁니다.`)]),o(`li`,null,[o(`strong`,null,`Animations 패널로 재생 기록 보기`),l(` More tools 메뉴에서 Animations 패널을 열고 열기·닫기를 해 봅니다. 문제 쪽은 닫을 때 아무것도 기록되지 않고, 해결 쪽은 닫힘 transition이 기록됩니다.`)])],-1)]]),_:1})]),o(`section`,M,[r[10]||=o(`h2`,null,[o(`span`,{class:`section-no`},`05`),l(` 해결 코드`)],-1),r[11]||=o(`p`,null,`열고 닫기, 탭 내용 바꾸기, 목록 추가·삭제 세 가지입니다.`,-1),c(h,{tabs:n(E)},null,8,[`tabs`]),r[12]||=p(`<ul><li><strong><code>mode=&quot;out-in&quot;</code></strong>: 탭처럼 한 요소가 나가고 다른 요소가 들어올 때, 나가는 애니메이션이 끝난 뒤에 들어오게 합니다. 없으면 두 요소가 잠시 함께 있어 높이가 튀거나 겹칩니다.</li><li><strong><code>TransitionGroup</code></strong>: 여러 항목을 추가·삭제할 때 씁니다. 항목마다 <code>key</code>가 반드시 있어야 합니다.</li><li><strong><code>v-show</code>도 됩니다</strong>: <code>display: none</code>으로 숨기는 <code>v-show</code>도 <code>&lt;Transition&gt;</code> 안에서 같은 클래스로 동작합니다.</li></ul>`,1)]),r[25]||=p(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>요소가 생기고 없어지는 시점을 Vue가 정하는 경우에는 모두 같은 원리가 적용됩니다. 아래 경우도 함께 확인하세요.</p><h3>목록에서 하나를 지우면 나머지가 툭 올라올 때</h3><p><code>TransitionGroup</code>의 enter·leave 클래스는 추가·삭제되는 항목에만 붙습니다. 남은 항목이 부드럽게 자리를 옮기게 하려면 <code>*-move</code> 클래스를 함께 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.list-move</span> {
  <span class="hljs-attribute">transition</span>: transform <span class="hljs-number">0.3s</span> ease;
}

<span class="hljs-comment">/* 나가는 항목을 흐름에서 빼야 남은 항목이 바로 이동을 시작합니다. */</span>
<span class="hljs-selector-class">.list-leave-active</span> {
  <span class="hljs-attribute">position</span>: absolute;
}
</code></pre><h3>내용만 바뀌고 요소는 그대로일 때</h3><p>안내 문구처럼 같은 요소의 글자만 바뀌면 Vue는 요소를 새로 만들지 않으므로 Transition이 동작하지 않습니다. <code>key</code>를 주면 값이 바뀔 때 다른 요소로 보고 교체합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fade&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;out-in&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;message&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;guide-text&quot;</span>&gt;</span>{{ message }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Transition</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h3>처음 화면에 그려질 때</h3><p><code>&lt;Transition&gt;</code>은 처음부터 보이는 요소에는 애니메이션을 주지 않습니다. 첫 렌더링에도 적용하려면 <code>appear</code>를 붙입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fold&quot;</span> <span class="hljs-attr">appear</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isOpen&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-panel&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Transition</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></section>`,1),o(`section`,N,[r[22]||=o(`h2`,null,[o(`span`,{class:`section-no`},`07`),l(` 적용 시 주의점`)],-1),o(`ul`,null,[r[19]||=o(`li`,null,[o(`strong`,null,[o(`code`,null,`<Transition>`),l(` 안에는 요소가 하나여야 합니다.`)]),l(` 여러 요소를 넣으면 경고가 나고 애니메이션이 동작하지 않습니다. 감싸는 `),o(`code`,null,`div`),l(` 하나를 두거나 목록이면 `),o(`code`,null,`TransitionGroup`),l(`을 씁니다.`)],-1),r[20]||=o(`li`,null,[o(`strong`,null,`컴포넌트를 넣으면 그 컴포넌트의 바깥 요소가 하나여야 합니다.`),l(` 루트 요소가 여러 개인 컴포넌트는 Transition이 어느 요소에 클래스를 붙일지 알 수 없습니다.`)],-1),o(`li`,null,[r[14]||=o(`strong`,null,[o(`code`,null,`height: auto`),l(`는 transition되지 않습니다.`)],-1),r[15]||=l(` 높이를 모르는 패널을 펼치려면 `,-1),c(g,{to:`/pub/css/grid-accordion`},{default:i(()=>[...r[13]||=[l(`아코디언 펼치기`,-1)]]),_:1}),r[16]||=l(`의 `,-1),r[17]||=o(`code`,null,`grid-template-rows: 0fr → 1fr`,-1),r[18]||=l(` 방법을 함께 씁니다.`,-1)]),r[21]||=o(`li`,null,[o(`strong`,null,`움직임 줄이기 설정을 존중합니다.`),l(),o(`code`,null,`prefers-reduced-motion: reduce`),l(`에서는 `),o(`code`,null,`transition: none`),l(`으로 바로 바뀌게 합니다. 클래스는 그대로 붙었다 떨어지므로 동작에는 문제가 없습니다.`)],-1)])]),o(`section`,P,[r[24]||=o(`h2`,null,[o(`span`,{class:`section-no`},`08`),l(` 짧은 실습`)],-1),c(_,null,{default:i(()=>[...r[23]||=[o(`p`,null,`위 예제에서 확인해 보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`문제 쪽은 닫을 때 바로 사라지고, 해결 쪽은 위로 흐려지며 사라진다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[l(`해결 쪽 기록에서 닫을 때 `),o(`code`,null,`fold-leave-active fold-leave-to`),l(`가 붙은 뒤 ‘요소 제거됨’이 되는 것을 확인한다.`)])])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[l(`탭 바꾸기 코드에서 `),o(`code`,null,`mode="out-in"`),l(`을 지우면 어떤 일이 생길지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{Q as default,G as duration,V as group,F as id,q as keyProperty,B as lead,W as level,R as navTitle,I as order,K as prerequisites,Z as references,X as related,J as status,z as summary,U as tags,L as title,H as topic,Y as updated};