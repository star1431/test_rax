import{D as e,E as t,G as n,H as r,L as i,R as a,V as o,c as s,d as c,g as l,h as u,j as d,k as f,l as p,m,pt as h,r as g,s as _,u as v,ut as y,w as b}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as x}from"./DemoCompare-Bd6h8ThJ.js";var S=[{id:1,text:`안녕하세요, 상담원입니다. 무엇을 도와드릴까요?`,mine:!1},{id:2,text:`이체 한도를 늘리고 싶어요.`,mine:!0},{id:3,text:`본인 확인 후 앱에서 바로 변경하실 수 있습니다.`,mine:!1},{id:4,text:`어느 메뉴에서 하면 되나요?`,mine:!0},{id:5,text:`전체 메뉴 > 이체 > 이체 한도 변경으로 들어가세요.`,mine:!1}],C=[`찾았어요. 하루 한도도 같이 바뀌나요?`,`보안카드 대신 OTP로도 되나요?`,`변경하면 바로 적용되나요?`,`감사합니다. 해결됐어요!`],w=[{label:`채팅 스크롤 (nextTick)`,language:`xml`,code:`<!-- ChatRoom.vue -->
<template>
  <ul ref="list" class="chat-list" role="log" tabindex="0" aria-label="대화 내용">
    <li v-for="message in messages" :key="message.id" class="chat-message">{{ message.text }}</li>
  </ul>

  <form class="chat-form" @submit.prevent="send">
    <input v-model="draft" type="text" aria-label="메시지 입력">
    <button type="submit">보내기</button>
  </form>
</template>

<script setup>
import { nextTick, ref, useTemplateRef } from 'vue'

const messages = ref([])
const draft = ref('')
const list = useTemplateRef('list')
let nextId = 1

async function send() {
  if (!draft.value.trim()) return
  messages.value.push({ id: nextId++, text: draft.value })
  draft.value = ''

  // 여기까지는 아직 이전 DOM입니다. 화면 반영을 기다린 뒤 재고 스크롤합니다.
  await nextTick()
  list.value.scrollTop = list.value.scrollHeight
}
<\/script>

<style>
.chat-list {
  height: 320px;
  margin: 0;
  padding: 12px;
  overflow-y: auto;
  list-style: none;
}
</style>`},{label:`입력창 포커스`,language:`xml`,code:`<!-- MemoEditor.vue -->
<template>
  <button type="button" @click="startEdit">메모 쓰기</button>

  <div v-if="isEditing" class="memo-field">
    <label for="memo">메모</label>
    <input id="memo" ref="memoInput" type="text">
  </div>
</template>

<script setup>
import { nextTick, ref, useTemplateRef } from 'vue'

const isEditing = ref(false)
const memoInput = useTemplateRef('memoInput')

async function startEdit() {
  isEditing.value = true

  // v-if 요소는 화면 갱신 때 만들어집니다. 바로 부르면 memoInput.value가 null입니다.
  await nextTick()
  memoInput.value?.focus()
}
<\/script>

<style>
.memo-field {
  display: grid;
  gap: 6px;
  margin-top: 12px;
}
</style>`},{label:`watch flush: 'post'`,language:`xml`,code:`<!-- 메시지가 어디서 추가되든(보내기, 받기, 불러오기) 갱신 뒤에 스크롤합니다. -->
<template>
  <ul ref="list" class="chat-list" role="log" tabindex="0" aria-label="대화 내용">
    <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
  </ul>
</template>

<script setup>
import { ref, useTemplateRef, watch } from 'vue'

const messages = ref([])
const list = useTemplateRef('list')

// flush: 'post' → DOM 갱신이 끝난 뒤에 콜백을 실행합니다. (기본값 'pre'는 갱신 전)
watch(
  () => messages.value.length,
  () => {
    list.value.scrollTop = list.value.scrollHeight
  },
  { flush: 'post' },
)
<\/script>

<style>
.chat-list {
  height: 320px;
  overflow-y: auto;
}
</style>`},{label:`자동 포커스 (디렉티브)`,language:`xml`,code:`<!-- 나타날 때마다 자동으로 포커스: 사용자 디렉티브 -->
<template>
  <input v-if="isEditing" v-focus type="text" aria-label="메모">
</template>

<script setup>
import { ref } from 'vue'

const isEditing = ref(false)

// <script setup>에서 v로 시작하는 camelCase 변수는 v-focus 디렉티브가 됩니다.
// mounted는 요소가 DOM에 들어간 뒤 실행되므로 nextTick이 필요 없습니다.
const vFocus = {
  mounted: (el) => el.focus(),
}
<\/script>`},{label:`문제 코드`,language:`xml`,code:`<template>
  <ul ref="list" class="chat-list">…</ul>
  <input v-if="isEditing" ref="memoInput" type="text" aria-label="메모">
</template>

<script setup>
function send() {
  messages.value.push({ id: nextId++, text: draft.value })

  // 문제: 새 메시지가 그려지기 전이라 이전 높이로 스크롤합니다. 방금 보낸 메시지는 아래에 가려집니다.
  list.value.scrollTop = list.value.scrollHeight
}

function startEdit() {
  isEditing.value = true

  // 문제: v-if 입력창이 아직 없어 null입니다.
  // TypeError: Cannot read properties of null (reading 'focus')
  memoInput.value.focus()
}
<\/script>`}],T={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-tick-mode-label`},E=[`aria-checked`,`onClick`],D={class:`sample-buttons`},O=[`aria-label`],k={key:1,class:`demo-tick-form`},A=[`for`],j=[`id`],M={class:`demo-tick-status`,"aria-live":`polite`},N={__name:`NextTickDemo`,setup(n){let l=[{value:`scroll`,label:`채팅 스크롤`},{value:`focus`,label:`입력창 포커스`}],d={scroll:`‘메시지 추가’를 눌러 보세요.`,focus:`‘입력창 보이기’를 눌러 보세요.`},m=r(`scroll`),w=r(S.map(e=>({...e}))),N=r(!1),P=o({problem:d.scroll,solved:d.scroll}),F={},I={},L=S.length+1,R=0,z=e=>e?`solved`:`problem`,B=_(()=>m.value===`scroll`?{problem:{code:`push() → scrollTop = scrollHeight`,note:`이전 높이로 스크롤해서 방금 추가한 메시지가 아래에 가려집니다.`},solved:{code:`push() → await nextTick() → scrollTop`,note:`새 메시지가 들어간 높이로 스크롤해 맨 아래가 보입니다.`}}:{problem:{code:`show = true → focus()`,note:`입력창이 아직 없어(null) 포커스가 옮겨지지 않습니다.`},solved:{code:`show = true → await nextTick() → focus()`,note:`입력창이 생긴 뒤에 포커스를 옮깁니다.`}});function V(){Object.values(F).forEach(e=>{e&&(e.scrollTop=e.scrollHeight)})}async function H(){w.value.push({id:L++,text:C[R++%C.length],mine:!0});let e=F.problem,t=e.scrollHeight;e.scrollTop=t,await b();let n=F.solved;n.scrollTop=n.scrollHeight,P.problem=`잰 높이 ${t}px / 실제 높이 ${e.scrollHeight}px · 새 메시지가 아래에 가려짐`,P.solved=`잰 높이 ${n.scrollHeight}px / 실제 높이 ${n.scrollHeight}px · 새 메시지까지 스크롤됨`}async function U(){w.value=S.map(e=>({...e})),L=S.length+1,R=0,P.problem=d.scroll,P.solved=d.scroll,await b(),V()}async function W(){if(N.value){N.value=!1,P.problem=d.focus,P.solved=d.focus;return}N.value=!0;let e=I.problem??null;e?.focus(),P.problem=e?`입력창으로 포커스 이동됨`:`focus()를 부른 순간 입력창이 null → 포커스 이동 실패`,await b(),I.solved?.focus(),P.solved=document.activeElement===I.solved?`갱신 뒤 입력창이 생겨 포커스 이동됨`:`입력창을 찾지 못함`}return i(m,e=>{N.value=!1,P.problem=d[e],P.solved=d[e],e===`scroll`&&V()},{flush:`post`}),t(V),(t,n)=>(e(),p(x,{problem:B.value.problem,solved:B.value.solved},{controls:a(()=>[n[0]||=s(`span`,{id:`demo-tick-mode-label`,class:`demo-label`},`예제`,-1),s(`div`,T,[(e(),c(g,null,f(l,e=>s(`button`,{key:e.value,type:`button`,role:`radio`,"aria-checked":m.value===e.value,onClick:t=>m.value=e.value},h(e.label),9,E)),64))]),n[1]||=s(`span`,{class:`demo-label`},`조작`,-1),s(`div`,D,[m.value===`scroll`?(e(),c(g,{key:0},[s(`button`,{type:`button`,onClick:H},`메시지 추가`),s(`button`,{type:`button`,onClick:U},`처음으로`)],64)):(e(),c(`button`,{key:1,type:`button`,onClick:W},h(N.value?`입력창 숨기기`:`입력창 보이기`),1))])]),default:a(({solved:t})=>[m.value===`scroll`?(e(),c(`ul`,{key:0,ref:e=>F[z(t)]=e,class:`demo-tick-chat`,tabindex:`0`,"aria-label":`채팅 목록 (${t?`해결`:`문제`} 상태)`},[(e(!0),c(g,null,f(w.value,t=>(e(),c(`li`,{key:t.id,class:y([`demo-tick-msg`,{"demo-tick-msg-mine":t.mine}])},h(t.text),3))),128))],8,O)):(e(),c(`div`,k,[n[2]||=s(`p`,{class:`demo-tick-form-text`},`‘입력창 보이기’를 누르면 아래에 메모 입력창이 나타납니다.`,-1),N.value?(e(),c(g,{key:0},[s(`label`,{class:`demo-tick-label`,for:`demo-tick-input-${z(t)}`},`메모`,8,A),s(`input`,{id:`demo-tick-input-${z(t)}`,ref:e=>I[z(t)]=e,class:`demo-tick-input`,type:`text`,placeholder:`메모를 입력하세요`},null,8,j)],64)):v(``,!0)])),s(`p`,M,h(P[z(t)]),1)]),caption:a(()=>[...n[3]||=[u(` 두 화면은 같은 목록을 함께 씁니다. 문제 쪽은 값을 바꾼 바로 다음 줄에서, 해결 쪽은 `,-1),s(`code`,null,`await nextTick()`,-1),u(` 다음에 재고·스크롤하고·포커스합니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},P={class:`doc-body`},F={id:`section-0`},I={id:`section-1`},L={id:`section-2`},R={id:`section-3`},z={id:`section-4`},B={id:`section-5`},V={id:`section-6`},H={id:`section-7`},U=`next-tick`,W=5,G=`값을 바꿨는데 바뀐 화면 크기를 바로 못 잴 때 (nextTick)`,K=`바뀐 DOM 크기 재기(nextTick)`,q=`반응형 값을 바꾼 바로 다음 줄에서 높이를 재거나 스크롤·포커스하면 이전 DOM을 보게 되는 이유를 이해하고, await nextTick(), watch의 flush 'post', 디렉티브 mounted로 화면 갱신 뒤에 처리하는 방법을 정리합니다.`,J=`메시지를 추가하고 맨 아래로 내렸는데 방금 쓴 메시지가 가려진다면?
Vue는 DOM을 나중에 한 번에 고칩니다. await nextTick() 뒤에 재세요.
`,Y=`렌더링`,X=`DOM 갱신`,Z=[`Vue`,`nextTick`,`DOM 갱신`,`scrollHeight`,`템플릿 ref`,`useTemplateRef`,`focus`,`flush: post`,`채팅 스크롤`],Q=`중급`,$=`약 11분`,ee=[`Vue 반응형 상태`,`템플릿 ref`],te=`await nextTick()`,ne=`published`,re=`2026-11-11`,ie=[`hidden-size`,`transition-toggle`],ae=[{title:`Vue — nextTick`,url:`https://ko.vuejs.org/api/general.html#nexttick`},{title:`Vue — 반응형 기초(DOM 업데이트 타이밍)`,url:`https://ko.vuejs.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing`},{title:`Vue — 감시자(콜백 실행 타이밍)`,url:`https://ko.vuejs.org/guide/essentials/watchers.html#callback-flush-timing`},{title:`MDN — Element.scrollHeight`,url:`https://developer.mozilla.org/ko/docs/Web/API/Element/scrollHeight`}],oe={__name:`next-tick`,setup(t,{expose:r}){return r({frontmatter:{id:`next-tick`,order:5,title:`값을 바꿨는데 바뀐 화면 크기를 바로 못 잴 때 (nextTick)`,navTitle:`바뀐 DOM 크기 재기(nextTick)`,summary:`반응형 값을 바꾼 바로 다음 줄에서 높이를 재거나 스크롤·포커스하면 이전 DOM을 보게 되는 이유를 이해하고, await nextTick(), watch의 flush 'post', 디렉티브 mounted로 화면 갱신 뒤에 처리하는 방법을 정리합니다.`,lead:`메시지를 추가하고 맨 아래로 내렸는데 방금 쓴 메시지가 가려진다면?
Vue는 DOM을 나중에 한 번에 고칩니다. await nextTick() 뒤에 재세요.
`,group:`렌더링`,topic:`DOM 갱신`,tags:[`Vue`,`nextTick`,`DOM 갱신`,`scrollHeight`,`템플릿 ref`,`useTemplateRef`,`focus`,`flush: post`,`채팅 스크롤`],level:`중급`,duration:`약 11분`,prerequisites:[`Vue 반응형 상태`,`템플릿 ref`],keyProperty:`await nextTick()`,status:`published`,updated:`2026-11-11`,related:[`hidden-size`,`transition-toggle`],references:[{title:`Vue — nextTick`,url:`https://ko.vuejs.org/api/general.html#nexttick`},{title:`Vue — 반응형 기초(DOM 업데이트 타이밍)`,url:`https://ko.vuejs.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing`},{title:`Vue — 감시자(콜백 실행 타이밍)`,url:`https://ko.vuejs.org/guide/essentials/watchers.html#callback-flush-timing`},{title:`MDN — Element.scrollHeight`,url:`https://developer.mozilla.org/ko/docs/Web/API/Element/scrollHeight`}]}}),(t,r)=>{let i=d(`DocIssue`),o=d(`DocTakeaway`),f=d(`DocSteps`),p=d(`DocInspect`),h=d(`CodePanel`),g=d(`RouterLink`),_=d(`DocPractice`);return e(),c(`div`,P,[s(`section`,F,[r[2]||=m(`<h2><span class="section-no">01</span> 문제 상황</h2><p>상담 채팅 화면을 만들었습니다. 메시지를 보내면 목록 맨 아래로 내려가도록 <code>push()</code> 다음 줄에 <code>scrollTop = scrollHeight</code>를 넣었는데, <strong>직전 메시지까지만 내려가고 방금 보낸 메시지는 아래에 가려집니다.</strong> 한 번 더 보내면 그제야 앞 메시지가 보입니다.</p><p>같은 화면의 ‘메모 쓰기’ 버튼도 <code>v-if</code>로 입력창을 보이게 한 뒤 바로 <code>focus()</code>를 부르는데, 포커스는 가지 않고 콘솔에 <code>TypeError: Cannot read properties of null (reading &#39;focus&#39;)</code>가 남습니다.</p><p>값은 제대로 바뀌어 있어서 코드만 봐서는 틀린 곳을 찾기 어렵고, 대화가 길어진 상태에서 검수할 때 이런 형태로 돌아옵니다.</p>`,4),l(i,{label:`QA`,title:`상담 채팅: 메시지를 보내도 맨 아래로 내려가지 않음`,env:`전체 브라우저 · 대화가 화면보다 길게 쌓인 상담 채팅`,expected:`보낸 메시지가 목록 맨 아래에 보이도록 자동으로 스크롤됨`,actual:`직전 메시지까지만 스크롤되고 방금 보낸 메시지는 아래에 가려짐`},{default:a(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,`대화가 목록 높이보다 길게 쌓인 상담 채팅을 엽니다.`),s(`li`,null,`메시지를 입력하고 보내기를 누릅니다.`),s(`li`,null,`방금 보낸 메시지가 목록 안에 보이는지 확인합니다.`)],-1)]]),_:1}),l(o,null,{default:a(()=>[...r[1]||=[s(`p`,null,[u(`Vue는 값을 바꿔도 DOM을 바로 고치지 않습니다. `),s(`strong`,null,[u(`크기 재기·스크롤·포커스는 `),s(`code`,null,`await nextTick()`),u(` 다음 줄에서`)]),u(` 하세요.`)],-1)]]),_:1})]),s(`section`,I,[r[3]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),u(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=s(`p`,null,`‘메시지 추가’를 여러 번 눌러 두 목록과 아래의 잰 높이를 비교해 보세요. ‘입력창 포커스’ 예제도 함께 확인할 수 있습니다.`,-1),l(N)]),s(`section`,L,[r[6]||=m(`<h2><span class="section-no">03</span> 왜 이전 DOM이 보일까요?</h2><p>Vue는 반응형 값이 바뀌어도 <strong>DOM을 그 자리에서 바로 고치지 않습니다.</strong> 바뀐 값을 모아 두었다가 지금 실행 중인 코드가 끝난 뒤 한 번에 화면을 갱신합니다. 메시지 10개를 연달아 넣어도 목록을 열 번 다시 그리지 않는 이유입니다.</p><p>그래서 <code>messages.value.push()</code> 바로 다음 줄은 <strong>아직 이전 DOM을 보고 있습니다.</strong> <code>scrollHeight</code>·<code>offsetHeight</code>는 새 메시지가 빠진 높이이고, <code>v-if</code>로 막 보이게 한 요소는 아직 만들어지지 않아 템플릿 ref가 <code>null</code>입니다.</p><p><code>nextTick()</code>은 이 ‘한 번에 갱신’이 끝나면 완료되는 Promise를 돌려줍니다. 그래서 <code>await nextTick()</code> 다음 줄부터는 새 DOM을 보게 됩니다.</p>`,4),l(f,null,{default:a(()=>[...r[5]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`값 변경`),u(),s(`code`,null,`messages.value.push(…)`),u(` → 화면 갱신 예약`)]),s(`li`,null,[s(`strong`,null,`같은 함수의 다음 줄`),u(),s(`code`,null,`list.value.scrollHeight`),u(` → 이전 높이`)]),s(`li`,null,[s(`strong`,null,`화면 갱신`),u(` Vue가 바뀐 부분을 DOM에 반영`)]),s(`li`,null,[s(`strong`,null,`nextTick 이후`),u(),s(`code`,null,`await nextTick()`),u(` 다음 줄 → 새 높이`)])],-1)]]),_:1}),r[7]||=m(`<div class="table-wrap"><table><thead><tr><th>방법</th><th>쓰는 경우</th></tr></thead><tbody><tr><td><code>await nextTick()</code></td><td>값을 바꾼 함수 안에서 이어서 재기·스크롤·포커스</td></tr><tr><td><code>watch(…, { flush: &#39;post&#39; })</code></td><td>값이 어디서 바뀌든 갱신 뒤에 같은 일을 할 때</td></tr><tr><td><code>onMounted</code>, 디렉티브 <code>mounted</code></td><td>요소가 처음 생길 때 한 번(자동 포커스 등)</td></tr><tr><td><code>onUpdated</code></td><td>컴포넌트가 다시 그려질 때마다. 무거운 작업·상태 변경은 넣지 않습니다.</td></tr></tbody></table></div>`,1)]),s(`section`,R,[r[9]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),u(` 원인 찾기`)],-1),r[10]||=s(`p`,null,[u(`값은 맞는데 잰 결과만 틀리면 `),s(`strong`,null,`언제 재고 있는지`),u(`를 확인합니다. 아래 순서로 갱신 전 DOM을 보고 있는지 확인하세요.`)],-1),l(p,null,{default:a(()=>[...r[8]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`값을 바꾼 바로 다음 줄에서 찍기`),s(`code`,null,`push()`),u(` 다음에 `),s(`code`,null,`console.log(list.value.children.length, list.value.scrollHeight)`),u(`를 넣고, `),s(`code`,null,`await nextTick()`),u(` 다음에도 같은 줄을 넣습니다. 두 줄의 개수·높이가 다르면 갱신 전에 재고 있는 것입니다.`)]),s(`li`,null,[s(`strong`,null,`Sources 패널에서 중단점 걸기`),u(` 스크롤하는 줄(`),s(`code`,null,`scrollTop = …`),u(`)에 중단점을 걸고 메시지를 보냅니다. 멈춘 상태에서 Elements 패널을 보면 목록에 새 `),s(`code`,null,`li`),u(`가 아직 없습니다. 화면 갱신은 지금 함수가 끝난 뒤에 실행되기 때문입니다.`)]),s(`li`,null,[s(`strong`,null,`v-if 요소가 아직 없는지 보기`),u(` 포커스 문제라면 `),s(`code`,null,`focus()`),u(` 줄에서 멈춥니다. Elements 패널에서 입력창 자리에 개발 모드의 `),s(`code`,null,`<!--v-if-->`),u(` 주석만 있고, 멈춘 상태의 Console에서 `),s(`code`,null,`memoInput.value`),u(`를 입력하면 `),s(`code`,null,`null`),u(`이 나옵니다.`)]),s(`li`,null,[s(`strong`,null,`Vue DevTools에서 상태 확인`),u(` 중단점을 풀고 Components 탭에서 컴포넌트를 선택하면 `),s(`code`,null,`messages`),u(`는 이미 개수가 늘어 있고 `),s(`code`,null,`isEditing`),u(`도 `),s(`code`,null,`true`),u(`입니다. 상태는 맞는데 DOM에서 잰 값만 틀리면 코드 로직이 아니라 재는 시점의 문제입니다.`)])],-1)]]),_:1})]),s(`section`,z,[r[11]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),u(` 해결 코드`)],-1),r[12]||=s(`p`,null,`채팅 스크롤과 입력창 포커스, 갱신 뒤에 자동으로 실행하는 두 가지 방법입니다.`,-1),l(h,{tabs:n(w)},null,8,[`tabs`]),r[13]||=m(`<ul><li><strong><code>await</code>를 쓰려면 함수에 <code>async</code>가 필요합니다.</strong> <code>nextTick(() =&gt; { … })</code>처럼 콜백으로 넘겨도 같습니다.</li><li><strong><code>useTemplateRef</code>는 Vue 3.5부터</strong> 쓸 수 있습니다. 3.4 이하라면 <code>const list = ref(null)</code>로 만들고 템플릿의 <code>ref=&quot;list&quot;</code>와 이름을 맞춥니다.</li><li><strong><code>?.focus()</code></strong>: 조건에 따라 입력창이 없을 수도 있다면 옵셔널 체이닝으로 오류를 막습니다.</li></ul>`,1)]),s(`section`,B,[r[21]||=m(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>값을 바꾼 뒤 DOM을 읽거나 다루는 코드는 모두 같은 시점 문제를 겪습니다. 아래 경우도 함께 확인하세요.</p><h3>v-if로 나타난 입력창에 포커스</h3><p>검색창 열기, 수정 모드 전환처럼 <code>v-if</code>로 보이게 한 입력창은 <code>await nextTick()</code> 뒤에 포커스합니다. 나타날 때마다 항상 포커스한다면 디렉티브의 <code>mounted</code>가 더 간단합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">// &lt;input v-if=&quot;isSearching&quot; v-focus&gt;</span>
<span class="hljs-keyword">const</span> vFocus = {
  <span class="hljs-attr">mounted</span>: <span class="hljs-function">(<span class="hljs-params">el</span>) =&gt;</span> el.<span class="hljs-title function_">focus</span>(),
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>목록을 추가한 뒤 높이 애니메이션</h3>`,6),s(`p`,null,[r[15]||=u(`항목을 추가한 패널의 높이를 재서 `,-1),r[16]||=s(`code`,null,`height`,-1),r[17]||=u(`를 transition하려면, 추가한 직후가 아니라 갱신 뒤의 `,-1),r[18]||=s(`code`,null,`scrollHeight`,-1),r[19]||=u(`를 써야 합니다. 나타나고 사라지는 모션 자체는 `,-1),l(g,{to:`/pub/vue/transition-toggle`},{default:a(()=>[...r[14]||=[u(`Transition 열고 닫기`,-1)]]),_:1}),r[20]||=u(`를 함께 보세요.`,-1)]),r[22]||=m(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">addItem</span>(<span class="hljs-params">item</span>) {
  items.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(item)
  <span class="hljs-keyword">await</span> <span class="hljs-title function_">nextTick</span>()
  <span class="hljs-comment">// 새 항목이 들어간 높이로 맞춥니다.</span>
  panel.<span class="hljs-property">value</span>.<span class="hljs-property">style</span>.<span class="hljs-property">height</span> = <span class="hljs-string">\`<span class="hljs-subst">\${panel.value.scrollHeight}</span>px\`</span>
}
</code></pre><h3>외부 라이브러리(차트·슬라이더) 갱신</h3><p><code>v-for</code>로 슬라이드를 늘리고 바로 슬라이더의 갱신 함수를 부르면, 라이브러리는 아직 새 슬라이드가 없는 DOM을 읽습니다. 데이터가 바뀌는 곳이 여러 곳이면 <code>flush: &#39;post&#39;</code> 감시자로 한 번에 처리합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">watch</span>(slides, <span class="hljs-function">() =&gt;</span> {
  slider.<span class="hljs-title function_">update</span>() <span class="hljs-comment">// 사용하는 라이브러리의 갱신 함수</span>
}, { <span class="hljs-attr">flush</span>: <span class="hljs-string">&#39;post&#39;</span>, <span class="hljs-attr">deep</span>: <span class="hljs-literal">true</span> })
</code></pre><h3>watch 안에서 DOM을 읽을 때</h3><p><code>watch</code> 콜백은 기본값(<code>flush: &#39;pre&#39;</code>)에서 <strong>컴포넌트 DOM 갱신 전에</strong> 실행됩니다. 콜백 안에서 높이를 재거나 스크롤한다면 <code>flush: &#39;post&#39;</code>를 주거나 <code>watchPostEffect</code>를 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">watch</span>(isOpen, <span class="hljs-function">() =&gt;</span> {
  height.<span class="hljs-property">value</span> = panel.<span class="hljs-property">value</span>?.<span class="hljs-property">offsetHeight</span> ?? <span class="hljs-number">0</span>
}, { <span class="hljs-attr">flush</span>: <span class="hljs-string">&#39;post&#39;</span> })
</code></pre>`,7)]),s(`section`,V,[r[27]||=s(`h2`,null,[s(`span`,{class:`section-no`},`07`),u(` 적용 시 주의점`)],-1),s(`ul`,null,[s(`li`,null,[r[24]||=m(`<strong><code>nextTick</code>은 이미지 로딩까지 기다리지 않습니다.</strong> 메시지에 이미지가 있으면 DOM에 들어간 뒤에도 높이가 늘어납니다. 이미지에 <code>width</code>·<code>height</code>(또는 <code>aspect-ratio</code>)를 미리 주거나, <code>load</code> 이벤트·<code>ResizeObserver</code>로 다시 맞춥니다. 숨긴 요소의 크기는 `,12),l(g,{to:`/pub/js/hidden-size`},{default:a(()=>[...r[23]||=[u(`숨긴 요소 크기 재기`,-1)]]),_:1}),r[25]||=u(`를 참고하세요.`,-1)]),r[26]||=m(`<li><strong><code>setTimeout</code>으로 대신하지 않습니다.</strong> 대개 동작은 하지만 Vue 갱신을 기다린다는 뜻이 코드에 드러나지 않고, 실행이 늦어져 스크롤 전 화면이 잠깐 보일 수 있습니다.</li><li><strong>읽던 위치를 존중합니다.</strong> 사용자가 위로 올려 이전 대화를 읽고 있다면 새 메시지가 와도 강제로 내리지 않습니다. 값을 바꾸기 <strong>전에</strong> <code>scrollHeight - scrollTop - clientHeight</code>로 맨 아래 근처였는지 확인해 두고, 그때만 내립니다.</li><li><strong>포커스는 사용자가 요청했을 때만 옮깁니다.</strong> 버튼을 눌러 입력창을 연 경우처럼 예상할 수 있을 때만 옮기고, 새 메시지는 목록에 <code>role=&quot;log&quot;</code>를 주어 스크린 리더가 읽게 합니다.</li>`,3)])]),s(`section`,H,[r[29]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),u(` 짧은 실습`)],-1),l(_,null,{default:a(()=>[...r[28]||=[s(`p`,null,`위 예제에서 차례대로 해 보세요.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`문제 쪽에서 ‘메시지 추가’를 누르면 잰 높이가 실제 높이보다 작고, 방금 추가한 메시지가 아래에 가려진다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`해결 쪽은 누를 때마다 새 메시지가 맨 아래에 보이고, 잰 높이와 실제 높이가 같다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`‘입력창 포커스’에서 ‘입력창 보이기’를 누르면 해결 쪽 입력창에만 포커스 테두리가 생긴다.`)])])],-1)]]),_:1})])])}}};export{oe as default,$ as duration,Y as group,U as id,te as keyProperty,J as lead,Q as level,K as navTitle,W as order,ee as prerequisites,ae as references,ie as related,ne as status,q as summary,Z as tags,G as title,X as topic,re as updated};