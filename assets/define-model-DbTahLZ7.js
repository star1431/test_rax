import{F as e,H as t,I as n,M as r,O as i,R as a,b as o,c as s,f as c,l,m as u,ot as d,p as f,s as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{d as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y={class:`demo-tf`},b={class:`demo-tf-box`},x=[`id`,`maxlength`,`aria-describedby`],S=[`id`],C={__name:`TextFieldCopy`,props:{id:{type:String,required:!0},modelValue:{type:String,default:``},maxlength:{type:Number,default:20}},setup(e){let t=g(e.modelValue);return(r,i)=>(h(),m(`div`,y,[p(`div`,b,[n(p(`input`,{id:e.id,"onUpdate:modelValue":i[0]||=e=>t.value=e,type:`text`,maxlength:e.maxlength,"aria-describedby":`${e.id}-count`},null,8,x),[[_,t.value]]),t.value?(h(),m(`button`,{key:0,type:`button`,class:`demo-tf-clear`,"aria-label":`입력 지우기`,onClick:i[1]||=e=>t.value=``},`×`)):l(``,!0)]),p(`p`,{id:`${e.id}-count`,class:`demo-tf-count`},d(t.value.length)+`자 / `+d(e.maxlength)+`자`,9,S)]))}},w={class:`demo-tf`},T={class:`demo-tf-box`},E=[`id`,`maxlength`,`aria-describedby`],D=[`id`],O={__name:`TextFieldModel`,props:o({id:{type:String,required:!0},maxlength:{type:Number,default:20}},{modelValue:{type:String,default:``},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=r(e,`modelValue`);return(r,i)=>(h(),m(`div`,w,[p(`div`,T,[n(p(`input`,{id:e.id,"onUpdate:modelValue":i[0]||=e=>t.value=e,type:`text`,maxlength:e.maxlength,"aria-describedby":`${e.id}-count`},null,8,E),[[_,t.value]]),t.value?(h(),m(`button`,{key:0,type:`button`,class:`demo-tf-clear`,"aria-label":`입력 지우기`,onClick:i[1]||=e=>t.value=``},`×`)):l(``,!0)]),p(`p`,{id:`${e.id}-count`,class:`demo-tf-count`},d(t.value.length)+`자 / `+d(e.maxlength)+`자`,9,D)]))}},k={class:`sample-buttons`},A=[`for`],j={class:`demo-tf-parent`},M={__name:`DefineModelDemo`,setup(t){let n=e=>e?`solved`:`problem`,r=a({problem:``,solved:``});function i(e){r.problem=e,r.solved=e}return(t,a)=>(h(),s(v,{problem:{code:`ref(props.modelValue)`,note:`입력해도 부모 값이 그대로이고, 부모에서 바꿔도 입력창이 그대로입니다.`},solved:{code:`defineModel()`,note:`입력하면 부모 값이, 부모에서 바꾸면 입력창이 함께 바뀝니다.`}},{controls:e(()=>[a[3]||=p(`span`,{class:`demo-label`},`부모에서`,-1),p(`div`,k,[p(`button`,{type:`button`,onClick:a[0]||=e=>i(``)},`초기화`),p(`button`,{type:`button`,onClick:a[1]||=e=>i(`임대료 이체`)},`'임대료 이체' 넣기`)])]),default:e(({solved:e})=>[p(`label`,{class:`demo-tf-label`,for:`dm-${n(e)}`},`메모`,8,A),e?(h(),s(O,{key:0,id:`dm-solved`,modelValue:r.solved,"onUpdate:modelValue":e=>r.solved=e},null,8,[`modelValue`,`onUpdate:modelValue`])):(h(),s(C,{key:1,id:`dm-problem`,modelValue:r.problem,"onUpdate:modelValue":a[2]||=e=>r.problem=e},null,8,[`modelValue`])),p(`p`,j,[a[4]||=f(`부모 값 `,-1),p(`code`,null,d(JSON.stringify(r[n(e)])),1)])]),caption:e(()=>[...a[5]||=[f(` 입력창에 글자를 쓰고, 위의 ‘부모에서’ 버튼도 눌러 보세요. `,-1)]]),_:1}))}},N=[{label:`TextField.vue`,language:`xml`,code:`<!-- TextField.vue -->
<template>
  <div class="text-field">
    <input :id="id" v-model="model" type="text" :maxlength="maxlength">
    <button v-if="model" type="button" class="text-field-clear" aria-label="입력 지우기" @click="model = ''">
      ×
    </button>
    <p class="text-field-count">{{ model.length }}자 / {{ maxlength }}자</p>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  maxlength: { type: Number, default: 20 },
})

// 부모의 v-model 값입니다. 읽으면 부모 값, 바꾸면 부모에게 알립니다.
const model = defineModel({ type: String, default: '' })
<\/script>`},{label:`부모에서 사용`,language:`xml`,code:`<template>
  <label for="memo">메모</label>
  <TextField id="memo" v-model="memo" :maxlength="20" />

  <!-- 값이 여러 개면 이름을 붙입니다. 자식: defineModel('title'), defineModel('content') -->
  <PostEditor v-model:title="title" v-model:content="content" />
</template>

<script setup>
import { ref } from 'vue'
import TextField from './TextField.vue'

const memo = ref('')
<\/script>`},{label:`예전 방식 (props + emit)`,language:`xml`,code:`<!-- Vue 3.3 이하: props + emit으로 같은 동작을 만듭니다. -->
<template>
  <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
  <button type="button" @click="emit('update:modelValue', '')">×</button>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])
<\/script>`},{label:`문제 코드`,language:`xml`,code:`<template>
  <!-- 오류: props는 읽기 전용이라 v-model로 직접 바꿀 수 없습니다. -->
  <!-- <input v-model="modelValue"> -->

  <!-- 문제: 처음 값만 복사해 쓰므로 부모와 연결이 끊깁니다. -->
  <input v-model="text">
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ modelValue: String })
const text = ref(props.modelValue)
<\/script>`}],P={class:`doc-body`},F={id:`section-0`},I={id:`section-1`},L={id:`section-2`},ee={id:`section-3`},R={id:`section-5`},z=`define-model`,B=1,V=`입력 컴포넌트와 값 주고받기 (defineModel)`,H=`defineModel`,U=`지우기 버튼·글자 수가 있는 입력 컴포넌트를 만들 때 props를 복사해 부모와 연결이 끊기는 문제를 defineModel로 해결하고, 예전 방식(props + emit)과 여러 개의 v-model을 정리합니다.`,W=`입력 컴포넌트에 글자를 써도 부모 값이 비어 있다면?
props를 복사하지 말고, defineModel로 부모의 v-model과 연결하세요.
`,G=`컴포넌트`,K=`컴포넌트`,q=[`Vue`,`defineModel`,`v-model`,`props`,`emit`,`update:modelValue`,`입력 컴포넌트`,`글자 수`],J=`기초`,Y=`약 7분`,X=[`Vue 컴포넌트`,`props`],Z=`const model = defineModel()`,Q=`published`,$=`2026-11-05`,te=[`scoped-deep`,`teleport-layer`],ne=[{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model.html`},{title:`Vue — 단방향 데이터 흐름(props)`,url:`https://ko.vuejs.org/guide/components/props.html#one-way-data-flow`}],re={__name:`define-model`,setup(n,{expose:r}){return r({frontmatter:{id:`define-model`,order:1,title:`입력 컴포넌트와 값 주고받기 (defineModel)`,navTitle:`defineModel`,summary:`지우기 버튼·글자 수가 있는 입력 컴포넌트를 만들 때 props를 복사해 부모와 연결이 끊기는 문제를 defineModel로 해결하고, 예전 방식(props + emit)과 여러 개의 v-model을 정리합니다.`,lead:`입력 컴포넌트에 글자를 써도 부모 값이 비어 있다면?
props를 복사하지 말고, defineModel로 부모의 v-model과 연결하세요.
`,group:`컴포넌트`,topic:`컴포넌트`,tags:[`Vue`,`defineModel`,`v-model`,`props`,`emit`,`update:modelValue`,`입력 컴포넌트`,`글자 수`],level:`기초`,duration:`약 7분`,prerequisites:[`Vue 컴포넌트`,`props`],keyProperty:`const model = defineModel()`,status:`published`,updated:`2026-11-05`,related:[`scoped-deep`,`teleport-layer`],references:[{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model.html`},{title:`Vue — 단방향 데이터 흐름(props)`,url:`https://ko.vuejs.org/guide/components/props.html#one-way-data-flow`}]}}),(n,r)=>{let a=i(`DocTakeaway`),o=i(`DocSteps`),s=i(`CodePanel`),l=i(`DocPractice`);return h(),m(`div`,P,[p(`section`,F,[r[1]||=c(`<h2><span class="section-no">01</span> 문제 상황</h2><p>지우기 버튼과 글자 수가 있는 메모 입력 컴포넌트를 만들었습니다. 화면에서는 글자가 잘 입력되는데, <strong>저장 버튼을 누르면 부모의 메모 값이 비어 있습니다.</strong> 부모에서 값을 초기화해도 입력창의 글자는 그대로 남습니다.</p><p>처음에는 props에 <code>v-model</code>을 바로 연결하려 했지만 빌드 오류가 나서, props를 <code>ref</code>에 복사하는 방법으로 바꾼 상태입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.
For props declared with defineModel(), assign the returned ref to a variable and use v-model on that variable.
</code></pre>`,4),u(a,null,{default:e(()=>[...r[0]||=[p(`p`,null,[f(`입력 컴포넌트 안에서 `),p(`strong`,null,[p(`code`,null,`const model = defineModel()`),f(`로`)]),f(` 값을 받고, 입력창에는 `),p(`code`,null,`v-model="model"`),f(`을 연결하세요. 부모는 `),p(`code`,null,`<TextField v-model="memo" />`),f(`로 씁니다.`)],-1)]]),_:1})]),p(`section`,I,[r[2]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),f(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[3]||=p(`p`,null,[f(`두 입력창은 같은 모양입니다. 하나는 props를 복사했고, 하나는 `),p(`code`,null,`defineModel`),f(`을 썼습니다. 글자를 쓰고 ‘부모에서’ 버튼도 눌러 보세요.`)],-1),u(M)]),p(`section`,L,[r[5]||=c(`<h2><span class="section-no">03</span> 왜 연결이 끊길까요?</h2><p>Vue에서 값은 <strong>부모 → 자식(props)</strong> 한 방향으로만 내려갑니다. 자식이 props를 직접 바꾸면 부모가 모르는 사이에 값이 달라지므로 Vue는 이를 막습니다(위 빌드 오류).</p><p><code>const text = ref(props.modelValue)</code>는 그 순간의 값을 <strong>한 번 복사</strong>할 뿐입니다. 이후 자식의 <code>text</code>와 부모의 값은 서로 다른 변수라서, 한쪽이 바뀌어도 다른 쪽은 알 수 없습니다.</p><p><code>defineModel()</code>은 두 방향을 한 번에 연결합니다.</p>`,4),u(o,null,{default:e(()=>[...r[4]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`부모 → 자식`),f(),p(`code`,null,`model.value`),f(`를 읽으면 부모 값`)]),p(`li`,null,[p(`strong`,null,`자식 → 부모`),f(),p(`code`,null,`model.value = …`),f(`면 `),p(`code`,null,`update:modelValue`),f(` 전달`)]),p(`li`,null,[p(`strong`,null,`부모가 갱신`),f(),p(`code`,null,`v-model`),f(`이 부모 변수를 바꿈`)])],-1)]]),_:1}),r[6]||=c(`<div class="table-wrap"><table><thead><tr><th>방식</th><th>자식 코드</th><th>쓸 수 있는 버전</th></tr></thead><tbody><tr><td><code>defineModel()</code></td><td><code>const model = defineModel()</code> 한 줄</td><td>Vue 3.4 이상</td></tr><tr><td>props + emit</td><td><code>modelValue</code> props, <code>emit(&#39;update:modelValue&#39;, 값)</code></td><td>모든 Vue 3</td></tr></tbody></table></div><p>이 사이트는 Vue 3.5를 쓰므로 <code>defineModel()</code>을 기본으로 씁니다. 투입된 프로젝트의 Vue 버전이 3.3 이하라면 예전 방식을 씁니다(<code>package.json</code>의 <code>vue</code> 버전 확인).</p>`,2)]),p(`section`,ee,[r[7]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),f(` 해결 코드`)],-1),u(s,{tabs:t(N)},null,8,[`tabs`]),r[8]||=c(`<ul><li><strong>기본값·형식</strong>: <code>defineModel({ type: String, default: &#39;&#39; })</code>처럼 props와 같은 옵션을 줍니다. 기본값이 없으면 <code>model.value.length</code>에서 오류가 날 수 있습니다.</li><li><strong>여러 개의 v-model</strong>: 자식에서 <code>defineModel(&#39;title&#39;)</code>, 부모에서 <code>v-model:title=&quot;title&quot;</code>처럼 이름을 붙입니다.</li><li><strong>지우기 버튼</strong>: <code>model.value = &#39;&#39;</code>만 하면 부모 값도 함께 비워집니다.</li></ul>`,1)]),r[11]||=c(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>객체를 v-model로 넘길 때는 속성만 바꾸지 않습니다.</strong> <code>model.value.name = &#39;…&#39;</code>은 부모 객체를 직접 고치는 것이라 <code>update:modelValue</code>가 발생하지 않습니다. <code>model.value = { ...model.value, name: &#39;…&#39; }</code>처럼 새 값으로 바꿉니다.</li><li><strong>글자 수 제한은 <code>maxlength</code>와 함께 안내합니다.</strong> 글자 수 표시(<code>0자 / 20자</code>)는 스크린 리더가 함께 읽도록 입력창의 <code>aria-describedby</code>로 연결합니다.</li><li><strong>공통 컴포넌트는 함께 쓰는 사람과 맞춥니다.</strong> 이미 프로젝트에 입력 컴포넌트가 있다면 새로 만들지 말고, props 이름(<code>modelValue</code>, <code>maxlength</code> 등)을 확인해 같은 방식으로 씁니다.</li></ul></section>`,1),p(`section`,R,[r[10]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),f(` 짧은 실습`)],-1),u(l,null,{default:e(()=>[...r[9]||=[p(`p`,null,`위 예제에서 차례대로 해 보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},[f(`문제 쪽 입력창에 글자를 쓰면 ‘부모 값’이 `),p(`code`,null,`""`),f(` 그대로다.`)])])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`‘부모에서 초기화’를 누르면 해결 쪽 입력창만 비워진다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},[f(`해결 쪽에서 지우기(×) 버튼을 누르면 부모 값도 `),p(`code`,null,`""`),f(`이 된다.`)])])])],-1)]]),_:1})])])}}};export{re as default,Y as duration,G as group,z as id,Z as keyProperty,W as lead,J as level,H as navTitle,B as order,X as prerequisites,ne as references,te as related,Q as status,U as summary,q as tags,V as title,K as topic,$ as updated};