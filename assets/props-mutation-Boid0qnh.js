import{D as e,G as t,H as n,R as r,V as i,c as a,d as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,ut as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as _}from"./DemoCompare-Bd6h8ThJ.js";var v={class:`demo-props-item`},y=[`id`],b=[`aria-labelledby`],x=[`disabled`],S={class:`demo-props-value`},C={__name:`PropsCounterProblem`,props:{id:{type:String,required:!0},type:{type:String,default:`count`},count:{type:Number,default:1},item:{type:Object,required:!0}},setup(t){let n=t,r=h(()=>n.type===`count`?n.count:n.item.qty);function i(){n.type===`count`?n.count++:n.item.qty++}function s(){r.value<=1||(n.type===`count`?n.count--:n.item.qty--)}return(n,c)=>(e(),o(`div`,v,[a(`p`,{id:`${t.id}-name`,class:`demo-props-name`},p(t.item.name),9,y),a(`div`,{class:`demo-props-stepper`,role:`group`,"aria-labelledby":`${t.id}-name`},[a(`button`,{type:`button`,class:`demo-props-btn`,"aria-label":`수량 빼기`,disabled:r.value<=1,onClick:s},`−`,8,x),a(`output`,S,p(r.value),1),a(`button`,{type:`button`,class:`demo-props-btn`,"aria-label":`수량 더하기`,onClick:i},`+`)],8,b)]))}},w={class:`demo-props-item`},T=[`id`],E=[`aria-labelledby`],D=[`disabled`],O={class:`demo-props-value`},k={__name:`PropsCounterSolved`,props:{id:{type:String,required:!0},type:{type:String,default:`count`},count:{type:Number,default:1},item:{type:Object,required:!0}},emits:[`update:count`,`update:qty`],setup(t,{emit:n}){let r=t,i=n,s=h(()=>r.type===`count`?r.count:r.item.qty);function c(e){e<1||(r.type===`count`?i(`update:count`,e):i(`update:qty`,e))}return(n,r)=>(e(),o(`div`,w,[a(`p`,{id:`${t.id}-name`,class:`demo-props-name`},p(t.item.name),9,T),a(`div`,{class:`demo-props-stepper`,role:`group`,"aria-labelledby":`${t.id}-name`},[a(`button`,{type:`button`,class:`demo-props-btn`,"aria-label":`수량 빼기`,disabled:s.value<=1,onClick:r[0]||=e=>c(s.value-1)},`−`,8,D),a(`output`,O,p(s.value),1),a(`button`,{type:`button`,class:`demo-props-btn`,"aria-label":`수량 더하기`,onClick:r[1]||=e=>c(s.value+1)},`+`)],8,E)]))}},ee=[{key:`count`,label:`숫자 (count)`},{key:`object`,label:`객체 (item.qty)`}];function A(){return{count:1,item:{name:`캔버스 에코백`,qty:1},notices:0,saved:1}}var j=[{label:`QtyStepper.vue (emit)`,language:`xml`,code:`<!-- QtyStepper.vue -->
<template>
  <div class="qty-stepper" role="group" :aria-label="label">
    <button type="button" aria-label="수량 빼기" :disabled="count <= min" @click="change(count - 1)">−</button>
    <output>{{ count }}</output>
    <button type="button" aria-label="수량 더하기" :disabled="count >= max" @click="change(count + 1)">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: '수량' },
  count: { type: Number, required: true },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 99 },
})

const emit = defineEmits(['update:count'])

// props는 읽기만 합니다. 다음 값을 계산해 부모에게 요청합니다.
function change(next) {
  if (next < props.min || next > props.max) return
  emit('update:count', next)
}
<\/script>

<style>
.qty-stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid #c4ccd8;
  border-radius: 6px;
}

.qty-stepper button {
  width: 34px;
  height: 34px;
  border: 0;
  background: none;
  font-size: 18px;
}

.qty-stepper output {
  min-width: 40px;
  border-right: 1px solid #e1e6ee;
  border-left: 1px solid #e1e6ee;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
}
</style>`},{label:`부모에서 사용`,language:`xml`,code:`<!-- CartItem.vue: 수량을 가진 부모가 값을 바꾸고, 저장도 여기서 합니다. -->
<template>
  <div class="cart-item">
    <p class="cart-item-name">{{ item.name }}</p>

    <!-- 이벤트를 직접 받아 처리할 때 -->
    <QtyStepper :label="\`\${item.name} 수량\`" :count="item.qty" :max="item.stock" @update:count="changeQty" />

    <!-- 받은 값을 그대로 넣기만 한다면 v-model:count로 줄여 쓸 수 있습니다. -->
    <!-- <QtyStepper v-model:count="item.qty" :max="item.stock" /> -->
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QtyStepper from './QtyStepper.vue'

const item = reactive({ id: 101, name: '캔버스 에코백', qty: 1, stock: 5 })

function changeQty(next) {
  item.qty = next
  // 부모가 바꾸는 시점을 알기 때문에 저장·합계 계산을 여기에 둘 수 있습니다.
  // saveCartQty(item.id, next)
}
<\/script>`},{label:`defineModel로 줄이기`,language:`xml`,code:`<!-- QtyStepper.vue (defineModel, Vue 3.4 이상) -->
<template>
  <div class="qty-stepper" role="group" :aria-label="label">
    <button type="button" aria-label="수량 빼기" :disabled="count <= min" @click="count--">−</button>
    <output>{{ count }}</output>
    <button type="button" aria-label="수량 더하기" :disabled="count >= max" @click="count++">+</button>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '수량' },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 99 },
})

// count.value를 바꾸면 부모에게 update:count가 전달됩니다.
// 부모: <QtyStepper v-model:count="item.qty" />
const count = defineModel('count', { type: Number, required: true })
<\/script>`},{label:`문제 코드`,language:`xml`,code:`<script setup>
import { ref } from 'vue'

const props = defineProps({
  count: Number,
  item: Object,
})

function increase() {
  // 문제 1: 숫자 props를 직접 바꿈
  // 개발 모드: 경고가 나고 값이 바뀌지 않음
  // 배포 빌드: 자식 화면만 바뀌고, 부모가 props를 다시 넘기면 되돌아감
  props.count++

  // 문제 2: 객체 props의 속성을 바꿈
  // 경고 없이 부모의 객체가 바뀌지만 부모는 알림을 받지 못함
  props.item.qty++
}

// 문제 3: 처음 값만 복사함. 이후 부모 값이 바뀌어도 따라가지 않음
const localCount = ref(props.count)
<\/script>`}],M={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-props-type-label`},N=[`aria-checked`,`onClick`],P={class:`demo-props-stage`},F={class:`demo-props-parent`},I={__name:`PropsMutationDemo`,setup(s){let l=e=>e?`solved`:`problem`,f=n(`count`),v=n(0),y=i({problem:A(),solved:A()}),b=h(()=>f.value===`object`?{code:`props.item.qty++`,note:`경고 없이 부모의 객체가 바뀝니다. 부모는 알림을 받지 못해 저장 요청한 수량과 어긋납니다.`}:{code:`props.count++`,note:`자식 숫자만 바뀌고 부모 값은 그대로입니다. ‘수량 +1’을 누르면 부모 값으로 되돌아갑니다.`}),x=h(()=>f.value===`object`?{code:`emit('update:qty', next)`,note:`부모가 알림을 받아 객체를 바꿉니다. 부모 값과 저장 요청한 수량이 항상 같습니다.`}:{code:`emit('update:count', next)`,note:`부모가 알림을 받아 값을 바꾸고 다시 내려 줍니다. 화면 숫자와 부모 값이 항상 같습니다.`});function S(e){return f.value===`count`?y[e].count:y[e].item.qty}function w(e,t){f.value===`count`?y[e].count=t:y[e].item.qty=t,y[e].saved=t}function T(e){y.solved.notices++,w(`solved`,e)}function E(){w(`problem`,S(`problem`)+1),w(`solved`,S(`solved`)+1)}function D(){y.problem=A(),y.solved=A(),v.value++}function O(e){f.value=e,D()}return(n,i)=>(e(),d(_,{problem:b.value,solved:x.value},{controls:r(()=>[i[0]||=a(`span`,{id:`demo-props-type-label`,class:`demo-label`},`넘기는 props`,-1),a(`div`,M,[(e(!0),o(m,null,u(t(ee),t=>(e(),o(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":f.value===t.key,onClick:e=>O(t.key)},p(t.label),9,N))),128))]),i[1]||=a(`span`,{id:`demo-props-parent-label`,class:`demo-label`},`부모에서`,-1),a(`div`,{class:`sample-buttons`,role:`group`,"aria-labelledby":`demo-props-parent-label`},[a(`button`,{type:`button`,onClick:E},`수량 +1`),a(`button`,{type:`button`,onClick:D},`처음으로`)])]),default:r(({solved:t})=>[a(`div`,P,[t?(e(),d(k,{id:`props-solved-${v.value}`,key:`solved-${f.value}-${v.value}`,type:f.value,count:y.solved.count,item:y.solved.item,"onUpdate:count":T,"onUpdate:qty":T},null,8,[`id`,`type`,`count`,`item`])):(e(),d(C,{id:`props-problem-${v.value}`,key:`problem-${f.value}-${v.value}`,type:f.value,count:y.problem.count,item:y.problem.item},null,8,[`id`,`type`,`count`,`item`])),a(`dl`,F,[a(`div`,null,[i[2]||=a(`dt`,null,`부모 값`,-1),a(`dd`,null,[a(`code`,null,p(f.value===`count`?`count`:`item.qty`)+`: `+p(S(l(t))),1)])]),a(`div`,null,[i[3]||=a(`dt`,null,`부모가 받은 알림(emit)`,-1),a(`dd`,null,p(y[l(t)].notices)+`번`,1)]),a(`div`,null,[i[4]||=a(`dt`,null,`저장 요청한 수량`,-1),a(`dd`,{class:g({"is-mismatch":y[l(t)].saved!==S(l(t))})},p(y[l(t)].saved),3)])])])]),caption:r(()=>[i[5]||=c(` 스테퍼의 +·− 버튼과 위의 ‘부모에서’ 버튼을 번갈아 눌러 보세요. 부모는 직접 바꾸거나 알림을 받을 때만 저장을 요청합니다. 지금 이 화면은 `,-1),a(`strong`,null,p(t(!1)?`개발 서버`:`배포(production) 빌드`),1),c(`로 실행 중입니다. `+p(t(!1)?`숫자 props 문제 쪽은 숫자가 바뀌지 않고 Console에 Vue 경고가 찍힙니다.`:`배포 빌드에서는 Vue 경고가 나오지 않습니다.`),1)]),_:1},8,[`problem`,`solved`]))}},L={class:`doc-body`},R={id:`section-0`},z={id:`section-1`},B={id:`section-2`},V={id:`section-3`},H={id:`section-4`},U={id:`section-7`},W=`props-mutation`,te=7,G=`자식에서 props를 바꿨더니 경고가 나거나 값이 되돌아갈 때`,K=`props를 바꿔 경고가 날 때`,q=`수량 버튼 같은 자식 컴포넌트에서 props를 직접 바꿔 개발 모드에서는 경고가 나고, 배포 빌드에서는 값이 되돌아가거나 부모 모르게 객체가 바뀌는 문제를 emit·defineModel로 해결하고, computed·초기값 props를 쓰는 기준을 정리합니다.`,J=`자식에서 props를 바꿨더니 경고가 나거나, 숫자가 원래대로 돌아간다면?
props는 부모의 값입니다. 바꿀 값은 emit으로 부모에게 요청하세요.
`,Y=`컴포넌트`,X=`props`,Z=[`Vue`,`props`,`emit`,`단방향 데이터 흐름`,`readonly`,`update:count`,`defineModel`,`computed`,`수량 버튼`],Q=`기초`,ne=`약 11분`,re=[`Vue 컴포넌트`,`props`,`emit`],$=`emit('update:count', next)`,ie=`published`,ae=`2026-11-11`,oe=[`define-model`,`v-if-v-show`],se=[{title:`Vue — 단방향 데이터 흐름(props)`,url:`https://ko.vuejs.org/guide/components/props.html#one-way-data-flow`},{title:`Vue — 컴포넌트 이벤트(emit)`,url:`https://ko.vuejs.org/guide/components/events.html`},{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model.html`},{title:`Vue — shallowReadonly()`,url:`https://ko.vuejs.org/api/reactivity-advanced.html#shallowreadonly`}],ce={__name:`props-mutation`,setup(n,{expose:i}){return i({frontmatter:{id:`props-mutation`,order:7,title:`자식에서 props를 바꿨더니 경고가 나거나 값이 되돌아갈 때`,navTitle:`props를 바꿔 경고가 날 때`,summary:`수량 버튼 같은 자식 컴포넌트에서 props를 직접 바꿔 개발 모드에서는 경고가 나고, 배포 빌드에서는 값이 되돌아가거나 부모 모르게 객체가 바뀌는 문제를 emit·defineModel로 해결하고, computed·초기값 props를 쓰는 기준을 정리합니다.`,lead:`자식에서 props를 바꿨더니 경고가 나거나, 숫자가 원래대로 돌아간다면?
props는 부모의 값입니다. 바꿀 값은 emit으로 부모에게 요청하세요.
`,group:`컴포넌트`,topic:`props`,tags:[`Vue`,`props`,`emit`,`단방향 데이터 흐름`,`readonly`,`update:count`,`defineModel`,`computed`,`수량 버튼`],level:`기초`,duration:`약 11분`,prerequisites:[`Vue 컴포넌트`,`props`,`emit`],keyProperty:`emit('update:count', next)`,status:`published`,updated:`2026-11-11`,related:[`define-model`,`v-if-v-show`],references:[{title:`Vue — 단방향 데이터 흐름(props)`,url:`https://ko.vuejs.org/guide/components/props.html#one-way-data-flow`},{title:`Vue — 컴포넌트 이벤트(emit)`,url:`https://ko.vuejs.org/guide/components/events.html`},{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model.html`},{title:`Vue — shallowReadonly()`,url:`https://ko.vuejs.org/api/reactivity-advanced.html#shallowreadonly`}]}}),(n,i)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`RouterLink`),_=l(`DocPractice`);return e(),o(`div`,L,[a(`section`,R,[i[2]||=f(`<h2><span class="section-no">01</span> 문제 상황</h2><p>장바구니의 수량 버튼을 <code>QtyStepper</code> 컴포넌트로 만들었습니다. 부모는 <code>&lt;QtyStepper :count=&quot;item.qty&quot; :max=&quot;option.stock&quot; /&gt;</code>으로 수량과 재고를 넘기고, 자식은 +·− 버튼을 누르면 <code>props.count++</code>로 숫자를 바꿉니다. 개발 서버에서는 <strong>+를 눌러도 숫자가 바뀌지 않고</strong> Console에 이런 경고가 찍힙니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">[Vue warn] Set operation on key &quot;count&quot; failed: target is readonly.
</code></pre><p>경고를 없애려고 상품 객체를 통째로 넘기고 <code>props.item.qty++</code>로 바꾸자 경고도 사라지고 숫자도 잘 바뀝니다. 그런데 장바구니 저장 요청은 여전히 나가지 않습니다. 한편 <code>props.count++</code> 그대로 올라간 검수 서버(배포 빌드)에서는 경고 없이 숫자가 바뀌어 보이다가, 이런 문의로 돌아옵니다.</p>`,4),s(u,{label:`QA`,title:`장바구니: 수량을 올려도 저장되지 않고 원래 숫자로 돌아감`,env:`검수 서버(배포 빌드) · 장바구니 수량 버튼`,expected:`+를 누르면 수량과 합계 금액이 바뀌고, 옵션을 바꿔도 수량이 유지됨`,actual:`수량 숫자만 바뀌고 합계 금액은 그대로, 색상 옵션을 바꾸면 수량이 원래 숫자로 돌아감`},{default:r(()=>[...i[0]||=[a(`ol`,null,[a(`li`,null,`장바구니에서 ‘캔버스 에코백’의 수량 + 버튼을 두 번 누릅니다.`),a(`li`,null,`수량 숫자와 합계 금액을 비교합니다.`),a(`li`,null,`색상 옵션을 다른 색으로 바꾸고 수량 숫자를 다시 확인합니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...i[1]||=[a(`p`,null,[c(`props는 부모가 가진 값이라 자식은 `),a(`strong`,null,`읽기만 합니다.`),c(` 바꿀 값은 `),a(`code`,null,`emit('update:count', next)`),c(`로 부모에게 요청하고, 객체 props의 속성(`),a(`code`,null,`props.item.qty`),c(`)도 직접 고치지 마세요.`)],-1)]]),_:1})]),a(`section`,z,[i[3]||=a(`h2`,null,[a(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),a(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[4]||=a(`p`,null,`같은 수량 버튼입니다. 문제 쪽은 props를 직접 바꾸고, 해결 쪽은 부모에게 요청합니다. ‘넘기는 props’를 숫자와 객체로 바꿔 가며 눌러 보세요.`,-1),s(I)]),a(`section`,B,[i[6]||=f(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>Vue에서 값은 <strong>부모 → 자식(props)</strong> 한 방향으로만 내려갑니다. 값의 주인은 부모이고, 부모는 자식에게 넘기는 값이 바뀔 때마다 자기 값을 다시 넘겨 줍니다. 자식이 props를 바꾸면 부모가 모르는 사이에 값이 달라지므로 Vue는 이를 막습니다.</p><p>막는 방식은 실행 환경에 따라 다릅니다. <strong>개발 모드에서는</strong> 자식이 받는 <code>props</code>가 읽기 전용(<code>shallowReadonly</code>)으로 감싸져 있어서 <code>props.count++</code>가 무시되고 위의 경고가 납니다. <strong>배포 빌드에서는</strong> 이 감싸기가 빠져 있어 경고 없이 자식 안의 값만 바뀝니다. 부모 값은 그대로이므로 합계 금액은 바뀌지 않고, 옵션을 바꿔 부모가 <code>max</code> 같은 props를 다시 넘기면 자식의 <code>count</code>도 부모 값으로 다시 채워집니다. 이것이 ‘원래 숫자로 돌아가는’ 이유입니다.</p><p>읽기 전용은 <strong>겉(첫 단계)에만</strong> 걸립니다. <code>props.item</code>은 부모가 가진 객체와 같은 객체라서, <code>props.item.qty++</code>는 개발·배포 모두 경고 없이 부모의 객체를 직접 고칩니다. 화면은 맞아 보이지만 부모는 알림(이벤트)을 받지 못해 저장 요청 같은 코드가 실행되지 않습니다. <code>const local = ref(props.count)</code>처럼 복사해 쓰는 것도 해결이 아닙니다. 처음 값을 한 번 복사할 뿐이라 이후 부모 값이 바뀌어도 따라가지 않습니다.</p><div class="table-wrap"><table><thead><tr><th>자식 코드</th><th>개발 서버</th><th>배포 빌드</th></tr></thead><tbody><tr><td><code>props.count++</code></td><td>경고, 값이 바뀌지 않음</td><td>경고 없음, 자식 화면만 바뀌었다가 부모 값으로 되돌아감</td></tr><tr><td><code>props.item.qty++</code></td><td>경고 없음, 부모 객체가 바뀜(부모는 알림 못 받음)</td><td>같음</td></tr><tr><td><code>ref(props.count)</code></td><td>처음 값만 복사, 부모 값을 따라가지 않음</td><td>같음</td></tr></tbody></table></div>`,5),s(p,null,{default:r(()=>[...i[5]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`자식이 요청`),c(),a(`code`,null,`emit('update:count', next)`)]),a(`li`,null,[a(`strong`,null,`부모가 변경`),c(),a(`code`,null,`item.qty = next`),c(`, 저장 요청도 여기서`)]),a(`li`,null,[a(`strong`,null,`자식이 다시 그림`),c(` 바뀐 props를 받아 화면 갱신`)])],-1)]]),_:1})]),a(`section`,V,[i[8]||=a(`h2`,null,[a(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),i[9]||=a(`p`,null,[c(`부모와 자식의 값이 어긋난다면 `),a(`strong`,null,`누가 값을 바꾸고 있는지`),c(`부터 확인합니다. 경고와 Vue DevTools는 개발 서버에서 확인하세요.`)],-1),s(m,null,{default:r(()=>[...i[7]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`Console 패널에서 Vue 경고 찾기`),c(` 개발 서버에서 버튼을 누르고 Console 패널을 엽니다. `),a(`code`,null,`Set operation on key "count" failed: target is readonly.`),c(`가 찍히면 자식이 props를 직접 바꾸고 있는 것입니다. Options API에서 `),a(`code`,null,`this.count++`),c(`로 바꿨다면 `),a(`code`,null,`Attempting to mutate prop "count". Props are readonly.`),c(`로 나옵니다. 배포 빌드에서는 이 경고가 나오지 않습니다.`)]),a(`li`,null,[a(`strong`,null,`Vue DevTools의 Components 탭에서 부모 값 보기`),c(` Vue DevTools 확장 프로그램의 Components 트리에서 부모 컴포넌트를 선택해 두고 자식(`),a(`code`,null,`QtyStepper`),c(`)의 버튼을 누릅니다. 숫자 props는 개발 모드에서 대입이 막혀 부모 값도 화면 숫자도 그대로입니다. 객체 props는 부모의 `),a(`code`,null,`item.qty`),c(`가 함께 바뀌는데, 이는 자식이 부모의 객체를 고쳤다는 뜻입니다.`)]),a(`li`,null,[a(`strong`,null,`자식 코드에서 props 대입 검색`),c(` 에디터의 정규식 검색으로 `),a(`code`,null,`props\\.[\\w.]+\\s*(\\+\\+|--|=[^=])`),c(`과 `),a(`code`,null,`props\\.[\\w.]+\\.(push|splice|sort)\\(`),c(`를 찾습니다. 템플릿 안의 `),a(`code`,null,`count++`),c(`, `),a(`code`,null,`item.qty = …`),c(`처럼 `),a(`code`,null,`props.`),c(` 없이 쓴 대입도 함께 확인합니다.`)]),a(`li`,null,[a(`strong`,null,`Timeline 탭에서 이벤트 없이 값이 바뀌는지 보기`),c(` Timeline 탭의 Component events 기록을 켜고 버튼을 누릅니다. 부모의 `),a(`code`,null,`item.qty`),c(`는 바뀌는데 `),a(`code`,null,`update:count`),c(` 같은 이벤트가 하나도 기록되지 않으면 자식이 객체 props를 직접 고치고 있는 것입니다.`)])],-1)]]),_:1})]),a(`section`,H,[i[16]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),i[17]||=a(`p`,null,[c(`자식은 다음 값을 계산해 `),a(`code`,null,`emit`),c(`으로 보내고, 부모가 값을 바꿉니다.`)],-1),s(h,{tabs:t(j)},null,8,[`tabs`]),a(`ul`,null,[i[14]||=a(`li`,null,[a(`strong`,null,[c(`이벤트 이름은 `),a(`code`,null,`update:props이름`),c(`으로 맞춥니다.`)]),c(),a(`code`,null,`update:count`),c(`로 보내면 부모에서 `),a(`code`,null,`v-model:count="item.qty"`),c(`로 줄여 쓸 수 있습니다.`)],-1),a(`li`,null,[i[11]||=a(`strong`,null,[c(`값만 주고받는다면 `),a(`code`,null,`defineModel`),c(`이 짧습니다.`)],-1),i[12]||=c(` 자세한 내용은 `,-1),s(g,{to:`/pub/vue/define-model`},{default:r(()=>[...i[10]||=[c(`입력 컴포넌트와 값 주고받기 (defineModel)`,-1)]]),_:1}),i[13]||=c(`를 참고하세요.`,-1)]),i[15]||=a(`li`,null,[a(`strong`,null,`저장·합계 계산은 부모의 이벤트 처리 함수에 둡니다.`),c(` 값이 바뀌는 곳이 한 군데라서 언제 저장해야 하는지가 분명해집니다.`)],-1)])]),i[20]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>‘받은 props를 자식이 바꾸려는’ 코드는 수량 버튼 말고도 자주 보입니다. 아래 경우도 같은 기준으로 확인하세요.</p><h3>자식 입력창에 props를 v-model로 연결할 때</h3><p><code>v-model=&quot;keyword&quot;</code>처럼 props를 바로 연결하면 빌드 오류가 납니다. <code>v-model=&quot;props.keyword&quot;</code>로 바꾸면 빌드는 되지만, 개발 모드에서 입력할 때마다 같은 readonly 경고가 납니다. 입력 컴포넌트는 <code>defineModel</code>로 받습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- ✗ &lt;input v-model=&quot;props.keyword&quot;&gt; --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">const</span> keyword = <span class="hljs-title function_">defineModel</span>(<span class="hljs-string">&#39;keyword&#39;</span>, { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">default</span>: <span class="hljs-string">&#39;&#39;</span> })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>받은 값을 가공해서 보여 줄 때</h3><p>금액 쉼표, 날짜 형식처럼 보여 주기만 하는 값은 props를 바꾸거나 <code>ref</code>에 복사하지 말고 <code>computed</code>로 계산합니다. 부모 값이 바뀌면 함께 다시 계산됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({ <span class="hljs-attr">price</span>: <span class="hljs-title class_">Number</span>, <span class="hljs-attr">count</span>: <span class="hljs-title class_">Number</span> })

<span class="hljs-keyword">const</span> total = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> (props.<span class="hljs-property">price</span> * props.<span class="hljs-property">count</span>).<span class="hljs-title function_">toLocaleString</span>())
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>처음 값으로만 쓸 때</h3><p>부모 값은 시작값일 뿐이고 이후에는 자식이 따로 관리해야 한다면 복사해서 써도 됩니다. 이때는 이름을 <code>initialCount</code>처럼 지어 ‘처음 값만 쓴다’는 것을 드러냅니다. 부모가 처음 값을 다시 넣어야 하는 화면이라면 <code>watch</code>로 따라가거나, 부모에서 <code>key</code>를 바꿔 자식을 새로 만듭니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({ <span class="hljs-attr">initialCount</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">Number</span>, <span class="hljs-attr">default</span>: <span class="hljs-number">1</span> } })

<span class="hljs-comment">// 처음 값만 복사합니다. 이후 부모의 initialCount 변경은 따라가지 않습니다.</span>
<span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(props.<span class="hljs-property">initialCount</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>배열 props에 push할 때</h3><p><code>props.tags.push(tag)</code>도 객체와 같아서 경고 없이 부모의 배열을 바꿉니다. 새 배열을 만들어 부모에게 보냅니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> emit = <span class="hljs-title function_">defineEmits</span>([<span class="hljs-string">&#39;update:tags&#39;</span>])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">addTag</span>(<span class="hljs-params">tag</span>) {
  <span class="hljs-comment">// ✗ props.tags.push(tag)</span>
  <span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;update:tags&#39;</span>, [...props.<span class="hljs-property">tags</span>, tag])
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>배포 빌드에서는 경고가 나오지 않습니다.</strong> props를 직접 바꾸는 코드는 검수 서버에서 조용히 ‘값이 되돌아가는’ 문제로만 보입니다. 공통 컴포넌트를 만들면 개발 서버에서 Console 경고를 먼저 확인합니다.</li><li><strong>객체·배열 props는 경고가 없어도 직접 고치지 않습니다.</strong> 읽기 전용이 첫 단계에만 걸리기 때문에 Vue가 막지 못할 뿐입니다. 객체를 넘기더라도 바꿀 값은 이벤트로 요청합니다.</li><li><strong>수량 버튼에는 이름과 상태를 줍니다.</strong> −·+ 기호만 있는 버튼에는 <code>aria-label=&quot;수량 빼기&quot;</code>처럼 이름을 주고, 최솟값·최댓값에서는 <code>disabled</code>로 막습니다. 묶음에는 <code>role=&quot;group&quot;</code>과 상품 이름을 연결합니다.</li><li><strong>부모가 값을 바꾸지 않으면 숫자도 바뀌지 않습니다.</strong> 해결 방식에서 부모가 <code>@update:count</code>를 받지 않으면 버튼을 눌러도 아무 일이 없습니다. 컴포넌트를 쓰는 화면마다 이벤트나 <code>v-model:count</code>가 연결됐는지 확인합니다.</li></ul></section>`,2),a(`section`,U,[i[19]||=a(`h2`,null,[a(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(_,null,{default:r(()=>[...i[18]||=[a(`p`,null,`위 예제에서 차례대로 해 보세요.`,-1),a(`ul`,{class:`checklist`},[a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`‘숫자 (count)’에서 문제 쪽 +를 눌러 스테퍼 숫자와 ‘부모 값’을 비교하고, ‘수량 +1’을 눌렀을 때 문제 쪽 숫자가 어떻게 되는지 확인한다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`‘객체 (item.qty)’에서 문제 쪽 +를 누르면 부모 값은 바뀌는데 ‘부모가 받은 알림’은 0번이고 ‘저장 요청한 수량’이 어긋난다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`해결 쪽은 두 경우 모두 누른 횟수만큼 알림이 늘고, 스테퍼 숫자·부모 값·저장 요청한 수량이 같다.`)])])],-1)]]),_:1})])])}}};export{ce as default,ne as duration,Y as group,W as id,$ as keyProperty,J as lead,Q as level,K as navTitle,te as order,re as prerequisites,se as references,oe as related,ie as status,q as summary,Z as tags,G as title,X as topic,ae as updated};