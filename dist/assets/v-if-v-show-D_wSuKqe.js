import{C as e,D as t,E as n,G as r,H as i,L as a,R as o,V as s,c,d as l,g as u,h as d,i as f,j as p,k as m,l as h,m as g,pt as _,r as v,s as y,u as b,ut as x,w as S,z as C}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{_ as w,g as T}from"./index-DHgvQBhl.js";import{t as ee}from"./DemoCompare-Bd6h8ThJ.js";var E=[`id`,`aria-labelledby`],D=[`for`],O=[`id`,`placeholder`],k={class:`demo-vif-mount`},A={__name:`VIfFormPanel`,props:{id:{type:String,required:!0},labelledby:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:String,default:``},count:{type:Number,default:0}},emits:[`mounted`],setup(e,{emit:r}){let a=r,o=i(``);return n(()=>a(`mounted`)),(n,r)=>(t(),l(`section`,{id:e.id,class:`demo-vif-panel`,role:`tabpanel`,"aria-labelledby":e.labelledby},[c(`label`,{class:`demo-vif-field-label`,for:`${e.id}-field`},_(e.label),9,D),C(c(`input`,{id:`${e.id}-field`,"onUpdate:modelValue":r[0]||=e=>o.value=e,class:`demo-vif-input`,type:`text`,placeholder:e.placeholder},null,8,O),[[T,o.value]]),c(`p`,k,[r[1]||=d(` 만들어진 횟수(onMounted) `,-1),c(`strong`,{class:x({"is-repeated":e.count>1})},_(e.count)+`번`,3)])],8,E))}},j=[{key:`basic`,label:`기본 정보`,field:`이름`,placeholder:`예) 홍길동`},{key:`ship`,label:`배송지`,field:`받는 주소`,placeholder:`예) 서울시 중구 세종대로 110`}],M=[{key:`show`,label:`v-show`},{key:`keep`,label:`KeepAlive`}],N=[{label:`v-show로 숨기기`,language:`xml`,code:`<template>
  <div class="tab-list" role="tablist" aria-label="회원 정보">
    <button
      v-for="tab in tabs"
      :id="\`tab-\${tab.key}\`"
      :key="tab.key"
      type="button"
      role="tab"
      :aria-selected="current === tab.key"
      :aria-controls="\`panel-\${tab.key}\`"
      @click="current = tab.key"
    >
      {{ tab.label }}
    </button>
  </div>

  <!-- v-if 대신 v-show: 두 패널을 처음에 모두 그리고, 선택되지 않은 패널만 display: none으로 숨깁니다. -->
  <section id="panel-basic" v-show="current === 'basic'" role="tabpanel" aria-labelledby="tab-basic">
    <BasicInfoForm />
  </section>
  <section id="panel-ship" v-show="current === 'ship'" role="tabpanel" aria-labelledby="tab-ship">
    <ShippingForm />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BasicInfoForm from './BasicInfoForm.vue'
import ShippingForm from './ShippingForm.vue'

const tabs = [
  { key: 'basic', label: '기본 정보' },
  { key: 'ship', label: '배송지' },
]
const current = ref('basic')
<\/script>

<style>
.tab-list {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid #d5dbe5;
}

.tab-list [role='tab'][aria-selected='true'] {
  border-bottom: 2px solid #2f5bd3;
  font-weight: 700;
}
</style>`},{label:`KeepAlive (컴포넌트 탭)`,language:`xml`,code:`<template>
  <div class="tab-list" role="tablist" aria-label="회원 정보">
    <button
      v-for="tab in tabs"
      :id="\`tab-\${tab.key}\`"
      :key="tab.key"
      type="button"
      role="tab"
      :aria-selected="current === tab.key"
      aria-controls="tab-panel"
      @click="current = tab.key"
    >
      {{ tab.label }}
    </button>
  </div>

  <section id="tab-panel" role="tabpanel" :aria-labelledby="\`tab-\${current}\`">
    <!-- 컴포넌트를 바꿔 끼우는 탭: KeepAlive가 빠진 컴포넌트를 지우지 않고 보관합니다. -->
    <KeepAlive>
      <component :is="tabs.find((tab) => tab.key === current).component" />
    </KeepAlive>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BasicInfoForm from './BasicInfoForm.vue'
import ShippingForm from './ShippingForm.vue'

const tabs = [
  { key: 'basic', label: '기본 정보', component: BasicInfoForm },
  { key: 'ship', label: '배송지', component: ShippingForm },
]
const current = ref('basic')
<\/script>

<style>
.tab-list {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid #d5dbe5;
}

.tab-list [role='tab'][aria-selected='true'] {
  border-bottom: 2px solid #2f5bd3;
  font-weight: 700;
}
</style>`},{label:`보관된 패널의 훅`,language:`xml`,code:`<!-- ShippingForm.vue: KeepAlive로 보관되면 onMounted는 처음 한 번, onActivated는 보일 때마다 실행됩니다. -->
<template>
  <label for="ship-address">받는 주소</label>
  <input id="ship-address" v-model="address" type="text">
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, ref } from 'vue'

const address = ref('')

// 처음 한 번만: 주소 목록 불러오기 같은 준비 작업
onMounted(() => {
  console.log('배송지 패널 만들어짐')
})

// 처음 보일 때와 탭으로 돌아올 때마다: 최신 정보로 갱신해야 하는 작업만
onActivated(() => {
  console.log('배송지 패널 다시 보임')
})

onDeactivated(() => {
  console.log('배송지 패널 보관됨')
})
<\/script>`}],P={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-vif-method-label`},F=[`aria-checked`,`onClick`],I=[`aria-label`],L=[`id`,`aria-selected`,`aria-controls`,`onClick`],R={key:`show`},z={key:`keep`},B={class:`demo-vif-dom`},V={key:0},H={__name:`VIfVShowDemo`,setup(u){let p=e=>e?`solved`:`problem`,g=i(j[0].key),x=i(`show`),T=y(()=>j.find(e=>e.key===g.value)),E=y(()=>x.value===`show`?{code:`v-show`,note:`두 패널이 모두 남아 있어 입력값이 그대로이고, 한 번만 만들어집니다.`}:{code:`<KeepAlive>`,note:`빠진 패널을 보관했다가 다시 꺼내므로 입력값이 그대로입니다.`}),D=s({problem:Object.fromEntries(j.map(e=>[e.key,0])),solved:Object.fromEntries(j.map(e=>[e.key,0]))});function O(e,t){return{id:`vif-${e}-panel-${t.key}`,labelledby:`vif-${e}-tab-${t.key}`,label:t.field,placeholder:t.placeholder,count:D[e][t.key]}}a(x,()=>{j.forEach(e=>D.solved[e.key]=0)});let k={},N=s({problem:{total:0,hidden:0},solved:{total:0,hidden:0}});function H(){for(let e of[`problem`,`solved`]){let t=k[e]?[...k[e].querySelectorAll(`.demo-vif-panel`)]:[];N[e].total=t.length,N[e].hidden=t.filter(e=>e.style.display===`none`).length}}return n(H),a([g,x],()=>S(H),{flush:`post`}),(n,i)=>(t(),h(ee,{problem:{code:`v-if`,note:`탭을 바꾸면 패널이 지워졌다가 새로 만들어져 입력값이 비워집니다.`},solved:E.value},{controls:o(()=>[i[0]||=c(`span`,{id:`demo-vif-method-label`,class:`demo-label`},`해결 쪽 방법`,-1),c(`div`,P,[(t(!0),l(v,null,m(r(M),e=>(t(),l(`button`,{key:e.key,type:`button`,role:`radio`,"aria-checked":x.value===e.key,onClick:t=>x.value=e.key},_(e.label),9,F))),128))])]),default:o(({solved:n})=>[c(`div`,{ref:e=>k[p(n)]=e,class:`demo-vif-stage`},[c(`div`,{class:`demo-vif-tabs`,role:`tablist`,"aria-label":`${n?`해결`:`문제`} 쪽 회원 정보 탭`},[(t(!0),l(v,null,m(r(j),e=>(t(),l(`button`,{id:`vif-${p(n)}-tab-${e.key}`,key:e.key,type:`button`,class:`demo-vif-tab`,role:`tab`,"aria-selected":g.value===e.key,"aria-controls":`vif-${p(n)}-panel-${e.key}`,onClick:t=>g.value=e.key},_(e.label),9,L))),128))],8,I),n?x.value===`show`?(t(),l(`div`,R,[(t(!0),l(v,null,m(r(j),n=>C((t(),h(A,e({key:n.key},{ref_for:!0},O(`solved`,n),{onMounted:e=>D.solved[n.key]++}),null,16,[`onMounted`])),[[w,g.value===n.key]])),128))])):(t(),l(`div`,z,[(t(),h(f,null,[(t(),h(A,e({key:T.value.key},O(`solved`,T.value),{onMounted:e=>D.solved[T.value.key]++}),null,16,[`onMounted`]))],1024))])):(t(!0),l(v,{key:0},m(r(j),n=>(t(),l(v,{key:n.key},[g.value===n.key?(t(),h(A,e({key:0,ref_for:!0},O(`problem`,n),{onMounted:e=>D.problem[n.key]++}),null,16,[`onMounted`])):b(``,!0)],64))),128)),c(`p`,B,[i[1]||=d(` DOM에 있는 패널 `,-1),c(`strong`,null,_(N[p(n)].total)+`개`,1),N[p(n)].hidden?(t(),l(`span`,V,`(그중 display: none `+_(N[p(n)].hidden)+`개)`,1)):b(``,!0)])],512)]),caption:o(()=>[...i[2]||=[d(` 입력칸에 글자를 쓴 뒤 탭을 바꿨다가 돌아와 보세요. 탭 선택은 두 화면이 함께 바뀌고, 입력값은 각 화면에 따로 있습니다. `,-1)]]),_:1},8,[`solved`]))}},U={class:`doc-body`},W={id:`section-0`},G={id:`section-1`},K={id:`section-2`},q={id:`section-3`},te={id:`section-4`},J={id:`section-5`},Y={id:`section-7`},X=`v-if-v-show`,Z=6,Q=`탭을 바꿀 때마다 입력값이 사라질 때 (v-if와 v-show)`,ne=`v-if와 v-show 선택`,re=`v-if로 만든 탭 패널이 전환할 때마다 지워졌다 새로 만들어져 입력값이 사라지는 문제를 v-show와 KeepAlive로 해결하고, 두 방식을 고르는 기준과 숨긴 요소의 주의점을 정리합니다.`,ie=`탭을 바꿨다 돌아오면 입력한 글자가 사라진다면?
자주 오가는 패널은 v-if 대신 v-show로 숨겨 두세요.
`,ae=`렌더링`,oe=`조건부 렌더링`,$=[`Vue`,`v-if`,`v-show`,`KeepAlive`,`onMounted`,`onActivated`,`display none`,`탭`,`조건부 렌더링`],se=`기초`,ce=`약 11분`,le=[`v-if`,`Vue 컴포넌트`],ue=`v-show="current === 'basic'"`,de=`published`,fe=`2026-11-11`,pe=[`next-tick`,`key-reset`,`transition-toggle`],me=[{title:`Vue — v-if vs. v-show`,url:`https://ko.vuejs.org/guide/essentials/conditional.html#v-if-vs-v-show`},{title:`Vue — v-if와 v-for 함께 쓰기`,url:`https://ko.vuejs.org/guide/essentials/conditional.html#v-if-with-v-for`},{title:`Vue — KeepAlive`,url:`https://ko.vuejs.org/guide/built-ins/keep-alive.html`},{title:`WAI-ARIA APG — Tabs Pattern`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`}],he={__name:`v-if-v-show`,setup(e,{expose:n}){return n({frontmatter:{id:`v-if-v-show`,order:6,title:`탭을 바꿀 때마다 입력값이 사라질 때 (v-if와 v-show)`,navTitle:`v-if와 v-show 선택`,summary:`v-if로 만든 탭 패널이 전환할 때마다 지워졌다 새로 만들어져 입력값이 사라지는 문제를 v-show와 KeepAlive로 해결하고, 두 방식을 고르는 기준과 숨긴 요소의 주의점을 정리합니다.`,lead:`탭을 바꿨다 돌아오면 입력한 글자가 사라진다면?
자주 오가는 패널은 v-if 대신 v-show로 숨겨 두세요.
`,group:`렌더링`,topic:`조건부 렌더링`,tags:[`Vue`,`v-if`,`v-show`,`KeepAlive`,`onMounted`,`onActivated`,`display none`,`탭`,`조건부 렌더링`],level:`기초`,duration:`약 11분`,prerequisites:[`v-if`,`Vue 컴포넌트`],keyProperty:`v-show="current === 'basic'"`,status:`published`,updated:`2026-11-11`,related:[`next-tick`,`key-reset`,`transition-toggle`],references:[{title:`Vue — v-if vs. v-show`,url:`https://ko.vuejs.org/guide/essentials/conditional.html#v-if-vs-v-show`},{title:`Vue — v-if와 v-for 함께 쓰기`,url:`https://ko.vuejs.org/guide/essentials/conditional.html#v-if-with-v-for`},{title:`Vue — KeepAlive`,url:`https://ko.vuejs.org/guide/built-ins/keep-alive.html`},{title:`WAI-ARIA APG — Tabs Pattern`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`}]}}),(e,n)=>{let i=p(`DocIssue`),a=p(`DocTakeaway`),s=p(`DocSteps`),f=p(`DocInspect`),m=p(`CodePanel`),h=p(`RouterLink`),_=p(`DocPractice`);return t(),l(`div`,U,[c(`section`,W,[n[2]||=c(`h2`,null,[c(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),n[3]||=c(`p`,null,[d(`회원 정보 수정 화면을 ‘기본 정보’와 ‘배송지’ 두 탭으로 나누고, 선택된 탭의 패널만 `),c(`code`,null,`v-if`),d(`로 그렸습니다. 기본 정보에 이름을 쓰고 배송지 탭에 다녀오면 `),c(`strong`,null,`이름 입력칸이 비어 있습니다.`),d(` 배송지 탭을 열 때마다 주소 목록도 다시 불러옵니다.`)],-1),n[4]||=c(`p`,null,`정적 HTML에서는 클래스로 패널을 숨겼기 때문에 생기지 않던 일이, Vue로 옮긴 뒤 사용 테스트에서 이런 형태로 돌아옵니다.`,-1),u(i,{label:`QA`,title:`회원 정보 수정: 탭을 바꾸면 입력한 내용이 지워짐`,env:`전체 브라우저 · 기본 정보/배송지 탭 화면`,expected:`탭을 오가도 입력한 내용과 스크롤 위치가 그대로 남음`,actual:`다른 탭에 다녀오면 입력칸이 비어 있고, 배송지 탭을 열 때마다 주소 목록 요청이 다시 나감`},{default:o(()=>[...n[0]||=[c(`ol`,null,[c(`li`,null,`기본 정보 탭의 이름 칸에 ‘홍길동’을 입력합니다.`),c(`li`,null,`배송지 탭을 눌렀다가 다시 기본 정보 탭을 누릅니다.`),c(`li`,null,`이름 칸과 Network 패널의 요청 기록을 확인합니다.`)],-1)]]),_:1}),u(a,null,{default:o(()=>[...n[1]||=[c(`p`,null,[c(`code`,null,`v-if`),d(`는 숨기는 것이 아니라 `),c(`strong`,null,`지우고 다시 만드는 것`),d(`입니다. 자주 오가면서 상태를 지켜야 하는 패널은 `),c(`code`,null,`v-show`),d(`로 숨기고, 컴포넌트를 바꿔 끼우는 탭은 `),c(`code`,null,`<KeepAlive>`),d(`로 감싸세요.`)],-1)]]),_:1})]),c(`section`,G,[n[5]||=c(`h2`,null,[c(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),c(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),n[6]||=c(`p`,null,`입력칸에 글자를 쓰고 탭을 오가 보세요. ‘만들어진 횟수’와 ‘DOM에 있는 패널’ 수가 두 방식의 차이를 보여 줍니다.`,-1),u(H)]),c(`section`,K,[n[8]||=g(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>v-if</code>가 <code>false</code>가 되면 Vue는 그 요소와 안에 있는 <strong>컴포넌트를 통째로 없앱니다(unmount).</strong> 컴포넌트 안의 <code>ref</code> 값, 입력칸에 쓴 글자, 스크롤 위치가 모두 함께 사라집니다. 다시 <code>true</code>가 되면 처음부터 새로 만들기 때문에 <code>onMounted</code>가 다시 실행되고, 거기에 넣은 데이터 요청도 다시 나갑니다.</p><p><code>v-show</code>는 요소를 처음에 한 번 그려 두고, 조건에 따라 <strong><code>style=&quot;display: none;&quot;</code>만 붙였다 뗍니다.</strong> 요소와 컴포넌트가 그대로 있으므로 상태도 유지되고 <code>onMounted</code>도 한 번만 실행됩니다. 대신 처음 화면을 그릴 때 숨긴 패널까지 모두 만들어야 합니다.</p>`,3),u(s,null,{default:o(()=>[...n[7]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`v-if (false)`),d(),c(`code`,null,`<!--v-if-->`),d(` 주석만 남고 요소·컴포넌트 제거`)]),c(`li`,null,[c(`strong`,null,`v-show (false)`),d(` 요소는 그대로, `),c(`code`,null,`display: none`)]),c(`li`,null,[c(`strong`,null,`KeepAlive`),d(` 빠진 컴포넌트를 문서 밖에 보관했다가 다시 꺼냄`)])],-1)]]),_:1}),n[9]||=c(`p`,null,[d(`고르는 기준은 간단합니다. `),c(`strong`,null,[d(`자주 오가고 상태를 지켜야 하면 `),c(`code`,null,`v-show`)]),d(`(컴포넌트를 바꿔 끼우는 구조라면 `),c(`code`,null,`KeepAlive`),d(`), `),c(`strong`,null,[d(`거의 열지 않거나 무거운 영역, DOM에 있으면 안 되는 요소에는 `),c(`code`,null,`v-if`),d(`를 씁니다.`)])],-1)]),c(`section`,q,[n[11]||=c(`h2`,null,[c(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),n[12]||=c(`p`,null,[d(`입력값이 사라진다면 `),c(`strong`,null,`탭을 바꿀 때 패널이 숨겨지는지, 없어지는지`),d(`를 확인합니다. 위 예제의 두 화면에서 탭을 오가며 비교해 보세요.`)],-1),u(f,null,{default:o(()=>[...n[10]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`Elements 패널에서 패널 노드 보기`),d(` 문제 쪽은 탭을 바꿀 때마다 `),c(`code`,null,`.demo-vif-panel`),d(` 노드가 새로 바뀌고, 선택되지 않은 패널 자리에는 `),c(`code`,null,`<!--v-if-->`),d(` 주석만 남습니다. 이 주석은 개발 모드에서만 보입니다. 해결 쪽(v-show)은 두 노드가 그대로 있고 `),c(`code`,null,`style="display: none;"`),d(`만 옮겨 다닙니다.`)]),c(`li`,null,[c(`strong`,null,`Vue DevTools의 Components 탭 보기`),d(` Vue DevTools 확장 프로그램의 Components 트리에서 `),c(`code`,null,`VIfFormPanel`),d(`을 찾습니다. 문제 쪽은 탭을 바꿀 때마다 컴포넌트가 사라졌다 다시 생기고, 선택해 두면 setup 상태의 `),c(`code`,null,`text`),d(` 값이 빈 값으로 돌아와 있습니다.`)]),c(`li`,null,[c(`strong`,null,`onMounted에 console.log 넣기`),d(` 패널 컴포넌트의 `),c(`code`,null,`onMounted`),d(`에 `),c(`code`,null,`console.log`),d(`를 넣고 Console 패널을 엽니다. 탭을 바꿀 때마다 같은 메시지가 다시 찍히면 컴포넌트가 새로 만들어지고 있는 것입니다.`)]),c(`li`,null,[c(`strong`,null,`Network 패널에서 반복 요청 보기`),d(` Network 패널의 Fetch/XHR 필터를 켜고 탭을 오갑니다. 패널이 `),c(`code`,null,`onMounted`),d(`에서 데이터를 불러온다면 탭을 열 때마다 같은 요청이 다시 기록됩니다.`)])],-1)]]),_:1})]),c(`section`,te,[n[13]||=c(`h2`,null,[c(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),n[14]||=c(`p`,null,[d(`패널 영역을 직접 쓰는 탭은 `),c(`code`,null,`v-show`),d(`, 컴포넌트를 바꿔 끼우는 탭은 `),c(`code`,null,`KeepAlive`),d(`를 씁니다.`)],-1),u(m,{tabs:r(N)},null,8,[`tabs`]),n[15]||=g(`<ul><li><strong><code>v-show</code>는 <code>&lt;template&gt;</code>에 쓸 수 없습니다.</strong> 실제 요소가 없어 <code>display</code>를 붙일 곳이 없기 때문입니다. <code>div</code>나 <code>section</code>으로 감싸 그 요소에 씁니다.</li><li><strong>컴포넌트에 <code>v-show</code>를 쓰면 그 컴포넌트의 바깥 요소에 적용됩니다.</strong> 바깥 요소가 여러 개인 컴포넌트에는 쓰지 않습니다.</li><li><strong><code>KeepAlive</code>로 보관된 컴포넌트는 <code>onMounted</code>가 다시 실행되지 않습니다.</strong> 돌아올 때마다 해야 하는 일은 <code>onActivated</code>에 둡니다.</li></ul>`,1)]),c(`section`,J,[n[28]||=g(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>‘한 번 만든 것을 유지할지, 매번 새로 만들지’를 정해야 하는 곳은 탭 말고도 많습니다. 아래 경우도 함께 확인하세요.</p><h3>컴포넌트 탭이 많을 때</h3><p><code>KeepAlive</code>는 기본으로 거쳐 간 컴포넌트를 모두 보관합니다. <code>include</code>로 보관할 컴포넌트를 이름으로 정하고, <code>max</code>로 보관 개수를 제한하면 오래 쓰지 않은 것부터 지웁니다. <code>&lt;script setup&gt;</code> 컴포넌트는 파일 이름이 컴포넌트 이름이 됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">KeepAlive</span> <span class="hljs-attr">include</span>=<span class="hljs-string">&quot;BasicInfoForm,ShippingForm&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">component</span> <span class="hljs-attr">:is</span>=<span class="hljs-string">&quot;currentForm&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">KeepAlive</span>&gt;</span>
</code></pre><h3>자주 여닫는 모바일 메뉴</h3><p>전체 메뉴처럼 자주 여닫고 펼친 하위 메뉴나 스크롤 위치를 유지해야 하는 레이어는 <code>v-show</code>가 맞습니다. 열 때마다 메뉴 목록을 다시 그리지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;isMenuOpen&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;mobile-menu&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mobile-menu&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
</code></pre><h3>처음에는 그리지 않고, 한 번 연 뒤에는 유지할 때</h3><p>무거운 패널을 처음부터 그리면 첫 화면이 느려집니다. 한 번 열었는지를 기억해 <code>v-if</code>로 처음 그리는 시점을 늦추고, 그 뒤로는 <code>v-show</code>로 숨깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;opened.has(&#39;ship&#39;)&quot;</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;current === &#39;ship&#39;&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tabpanel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ShippingForm</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { reactive, ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> current = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;basic&#39;</span>)
<span class="hljs-keyword">const</span> opened = <span class="hljs-title function_">reactive</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>([<span class="hljs-string">&#39;basic&#39;</span>]))

<span class="hljs-title function_">watch</span>(current, <span class="hljs-function">(<span class="hljs-params">key</span>) =&gt;</span> opened.<span class="hljs-title function_">add</span>(key))
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>숨긴 패널의 크기를 재야 할 때</h3>`,12),c(`p`,null,[n[17]||=c(`code`,null,`v-show`,-1),n[18]||=d(`로 숨긴 요소는 DOM에 있어도 `,-1),n[19]||=c(`code`,null,`display: none`,-1),n[20]||=d(`이라 `,-1),n[21]||=c(`code`,null,`offsetHeight`,-1),n[22]||=d(`, `,-1),n[23]||=c(`code`,null,`getBoundingClientRect()`,-1),n[24]||=d(`가 0을 돌려줍니다. 보이게 바꾼 뒤 `,-1),n[25]||=c(`code`,null,`nextTick`,-1),n[26]||=d(`을 기다려 재야 합니다. 자세한 방법은 `,-1),u(h,{to:`/pub/js/hidden-size`},{default:o(()=>[...n[16]||=[d(`숨긴 요소의 높이가 0으로 나올 때`,-1)]]),_:1}),n[27]||=d(`를 참고하세요.`,-1)]),n[29]||=g(`<pre class="doc-code" tabindex="0"><code class="hljs">current.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;ship&#39;</span>
<span class="hljs-keyword">await</span> <span class="hljs-title function_">nextTick</span>()
<span class="hljs-keyword">const</span> height = panel.<span class="hljs-property">value</span>.<span class="hljs-property">offsetHeight</span>
</code></pre>`,1)]),n[32]||=g(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>v-if</code>와 <code>v-for</code>를 같은 요소에 쓰지 않습니다.</strong> Vue 3에서는 <code>v-if</code>가 먼저 처리되어 <code>v-if</code> 조건에서 <code>v-for</code>의 항목 변수를 쓸 수 없습니다. 바깥에 <code>&lt;template v-for&gt;</code>를 두고 안쪽에 <code>v-if</code>를 쓰거나, <code>computed</code>로 미리 걸러 둡니다.</li><li><strong><code>v-show</code>로 숨긴 입력칸도 폼 제출에 포함됩니다.</strong> <code>display: none</code>이어도 <code>name</code>이 있는 입력칸은 함께 전송됩니다. 숨긴 칸에 <code>required</code>가 있고 비어 있으면 제출이 막히고, 콘솔에 ‘An invalid form control … is not focusable’ 오류가 납니다. 보내면 안 되는 칸은 <code>v-if</code>로 없애거나 <code>disabled</code>를 붙입니다.</li><li><strong>처음 렌더링 비용을 생각합니다.</strong> <code>v-show</code>는 숨긴 패널까지 처음에 모두 만들고 데이터 요청도 함께 실행합니다. 패널이 많거나 무겁다면 위의 ‘한 번 연 뒤 유지’ 방법이나 <code>KeepAlive</code>를 씁니다.</li><li><strong>탭 패턴의 접근성 속성을 맞춥니다.</strong> <code>display: none</code>인 패널은 스크린리더에서도 숨겨지므로 선택되지 않은 패널을 숨기는 데는 알맞습니다. 탭에는 <code>role=&quot;tab&quot;</code>과 <code>aria-selected</code>, 패널에는 <code>role=&quot;tabpanel&quot;</code>과 <code>aria-labelledby</code>를 주고, <code>aria-controls</code>가 가리키는 패널이 DOM에 있는지 확인합니다.</li></ul></section>`,1),c(`section`,Y,[n[31]||=c(`h2`,null,[c(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(_,null,{default:o(()=>[...n[30]||=[c(`p`,null,`위 예제에서 확인해 보세요.`,-1),c(`ul`,{class:`checklist`},[c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`문제 쪽은 탭을 다녀오면 입력칸이 비고 ‘만들어진 횟수’가 늘어나며, 해결 쪽은 입력값이 남고 1번에서 그대로다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`v-show를 고르면 ‘DOM에 있는 패널’이 2개(그중 display: none 1개)이고, KeepAlive를 고르면 1개인데도 입력값이 남는 것을 확인한다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},[d(`Elements 패널에서 문제 쪽의 `),c(`code`,null,`<!--v-if-->`),d(` 주석과 해결 쪽의 `),c(`code`,null,`style="display: none;"`),d(`을 찾아본다.`)])])])],-1)]]),_:1})])])}}};export{he as default,ce as duration,ae as group,X as id,ue as keyProperty,ie as lead,se as level,ne as navTitle,Z as order,le as prerequisites,me as references,pe as related,de as status,re as summary,$ as tags,Q as title,oe as topic,fe as updated};