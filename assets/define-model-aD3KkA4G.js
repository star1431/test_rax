import{D as e,F as t,G as n,H as r,R as i,S as a,V as o,c as s,d as c,g as l,h as u,j as d,l as f,m as p,pt as m,u as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as _}from"./index-Dxflp_jg.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y={class:`demo-tf`},b={class:`demo-tf-box`},x=[`id`,`maxlength`,`aria-describedby`],S=[`id`],C={__name:`TextFieldCopy`,props:{id:{type:String,required:!0},modelValue:{type:String,default:``},maxlength:{type:Number,default:20}},setup(t){let n=r(t.modelValue);return(r,i)=>(e(),c(`div`,y,[s(`div`,b,[g(s(`input`,{id:t.id,"onUpdate:modelValue":i[0]||=e=>n.value=e,type:`text`,maxlength:t.maxlength,"aria-describedby":`${t.id}-count`},null,8,x),[[_,n.value]]),n.value?(e(),c(`button`,{key:0,type:`button`,class:`demo-tf-clear`,"aria-label":`입력 지우기`,onClick:i[1]||=e=>n.value=``},`×`)):h(``,!0)]),s(`p`,{id:`${t.id}-count`,class:`demo-tf-count`},m(n.value.length)+`자 / `+m(t.maxlength)+`자`,9,S)]))}},w={class:`demo-tf`},T={class:`demo-tf-box`},E=[`id`,`maxlength`,`aria-describedby`],D=[`id`],O={__name:`TextFieldModel`,props:a({id:{type:String,required:!0},maxlength:{type:Number,default:20}},{modelValue:{type:String,default:``},modelModifiers:{}}),emits:[`update:modelValue`],setup(n){let r=t(n,`modelValue`);return(t,i)=>(e(),c(`div`,w,[s(`div`,T,[g(s(`input`,{id:n.id,"onUpdate:modelValue":i[0]||=e=>r.value=e,type:`text`,maxlength:n.maxlength,"aria-describedby":`${n.id}-count`},null,8,E),[[_,r.value]]),r.value?(e(),c(`button`,{key:0,type:`button`,class:`demo-tf-clear`,"aria-label":`입력 지우기`,onClick:i[1]||=e=>r.value=``},`×`)):h(``,!0)]),s(`p`,{id:`${n.id}-count`,class:`demo-tf-count`},m(r.value.length)+`자 / `+m(n.maxlength)+`자`,9,D)]))}},k={class:`sample-buttons`},A=[`for`],j={class:`demo-tf-parent`},M={__name:`DefineModelDemo`,setup(t){let n=e=>e?`solved`:`problem`,r=o({problem:``,solved:``});function a(e){r.problem=e,r.solved=e}return(t,o)=>(e(),f(v,{problem:{code:`ref(props.modelValue)`,note:`입력해도 부모 값이 그대로이고, 부모에서 바꿔도 입력창이 그대로입니다.`},solved:{code:`defineModel()`,note:`입력하면 부모 값이, 부모에서 바꾸면 입력창이 함께 바뀝니다.`}},{controls:i(()=>[o[3]||=s(`span`,{class:`demo-label`},`부모에서`,-1),s(`div`,k,[s(`button`,{type:`button`,onClick:o[0]||=e=>a(``)},`초기화`),s(`button`,{type:`button`,onClick:o[1]||=e=>a(`임대료 이체`)},`'임대료 이체' 넣기`)])]),default:i(({solved:t})=>[s(`label`,{class:`demo-tf-label`,for:`dm-${n(t)}`},`메모`,8,A),t?(e(),f(O,{key:0,id:`dm-solved`,modelValue:r.solved,"onUpdate:modelValue":e=>r.solved=e},null,8,[`modelValue`,`onUpdate:modelValue`])):(e(),f(C,{key:1,id:`dm-problem`,modelValue:r.problem,"onUpdate:modelValue":o[2]||=e=>r.problem=e},null,8,[`modelValue`])),s(`p`,j,[o[4]||=u(`부모 값 `,-1),s(`code`,null,m(JSON.stringify(r[n(t)])),1)])]),caption:i(()=>[...o[5]||=[u(` 입력창에 글자를 쓰고, 위의 ‘부모에서’ 버튼도 눌러 보세요. `,-1)]]),_:1}))}},N=[{label:`TextField.vue`,language:`xml`,code:`<!-- TextField.vue -->
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
<\/script>`}],P={class:`doc-body`},F={id:`section-0`},I={id:`section-1`},L={id:`section-2`},R={id:`section-3`},ee={id:`section-4`},z={id:`section-7`},B=`define-model`,V=1,H=`입력 컴포넌트와 값 주고받기 (defineModel)`,U=`defineModel`,W=`지우기 버튼·글자 수가 있는 입력 컴포넌트를 만들 때 props를 복사해 부모와 연결이 끊기는 문제를 defineModel로 해결하고, 예전 방식(props + emit)과 여러 개의 v-model을 정리합니다.`,G=`입력 컴포넌트에 글자를 써도 부모 값이 비어 있다면?
props를 복사하지 말고, defineModel로 부모의 v-model과 연결하세요.
`,K=`컴포넌트`,q=`컴포넌트`,J=[`Vue`,`defineModel`,`v-model`,`props`,`emit`,`update:modelValue`,`입력 컴포넌트`,`글자 수`],Y=`기초`,X=`약 11분`,Z=[`Vue 컴포넌트`,`props`],Q=`const model = defineModel()`,$=`published`,te=`2026-11-13`,ne=[`scoped-deep`,`teleport-layer`],re=[{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model.html`},{title:`Vue — 단방향 데이터 흐름(props)`,url:`https://ko.vuejs.org/guide/components/props.html#one-way-data-flow`}],ie={__name:`define-model`,setup(t,{expose:r}){return r({frontmatter:{id:`define-model`,order:1,title:`입력 컴포넌트와 값 주고받기 (defineModel)`,navTitle:`defineModel`,summary:`지우기 버튼·글자 수가 있는 입력 컴포넌트를 만들 때 props를 복사해 부모와 연결이 끊기는 문제를 defineModel로 해결하고, 예전 방식(props + emit)과 여러 개의 v-model을 정리합니다.`,lead:`입력 컴포넌트에 글자를 써도 부모 값이 비어 있다면?
props를 복사하지 말고, defineModel로 부모의 v-model과 연결하세요.
`,group:`컴포넌트`,topic:`컴포넌트`,tags:[`Vue`,`defineModel`,`v-model`,`props`,`emit`,`update:modelValue`,`입력 컴포넌트`,`글자 수`],level:`기초`,duration:`약 11분`,prerequisites:[`Vue 컴포넌트`,`props`],keyProperty:`const model = defineModel()`,status:`published`,updated:`2026-11-13`,related:[`scoped-deep`,`teleport-layer`],references:[{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model.html`},{title:`Vue — 단방향 데이터 흐름(props)`,url:`https://ko.vuejs.org/guide/components/props.html#one-way-data-flow`}]}}),(t,r)=>{let a=d(`DocIssue`),o=d(`DocTakeaway`),f=d(`DocSteps`),m=d(`DocInspect`),h=d(`CodePanel`),g=d(`DocPractice`);return e(),c(`div`,P,[s(`section`,F,[r[2]||=p(`<h2><span class="section-no">01</span> 문제 상황</h2><p>지우기 버튼과 글자 수가 있는 메모 입력 컴포넌트를 만들었습니다. 화면에서는 글자가 잘 입력되는데, <strong>저장 버튼을 누르면 부모의 메모 값이 비어 있습니다.</strong> 부모에서 값을 초기화해도 입력창의 글자는 그대로 남습니다.</p><p>처음에는 props에 <code>v-model</code>을 바로 연결하려 했지만 빌드 오류가 나서, props를 <code>ref</code>에 복사하는 방법으로 바꾼 상태입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.
For props declared with defineModel(), assign the returned ref to a variable and use v-model on that variable.
</code></pre><p>화면에서는 입력이 잘 되기 때문에 퍼블리싱 단계에서는 지나치기 쉽고, 개발자가 저장 기능을 연결한 뒤 이런 문의로 돌아옵니다.</p>`,5),l(a,{label:`개발 문의`,title:`메모 입력: 입력한 메모가 저장되지 않음`,env:`전체 브라우저 · 공통 TextField 컴포넌트를 쓰는 화면`,expected:`입력한 메모가 저장되고, 초기화하면 입력창도 비워짐`,actual:`저장 요청에 메모가 빈 값으로 전송됨, 초기화해도 입력창에 글자가 남음`},{default:i(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,`메모 입력창에 ‘임대료 이체’를 입력합니다.`),s(`li`,null,`저장 버튼을 누르고 전송된 메모 값을 확인합니다.`),s(`li`,null,`초기화 버튼을 누르고 입력창을 확인합니다.`)],-1)]]),_:1}),l(o,null,{default:i(()=>[...r[1]||=[s(`p`,null,[u(`입력 컴포넌트 안에서 `),s(`strong`,null,[s(`code`,null,`const model = defineModel()`),u(`로`)]),u(` 값을 받고, 입력창에는 `),s(`code`,null,`v-model="model"`),u(`을 연결하세요. 부모는 `),s(`code`,null,`<TextField v-model="memo" />`),u(`로 씁니다.`)],-1)]]),_:1})]),s(`section`,I,[r[3]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),u(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=s(`p`,null,[u(`두 입력창은 같은 모양입니다. 하나는 props를 복사했고, 하나는 `),s(`code`,null,`defineModel`),u(`을 썼습니다. 글자를 쓰고 ‘부모에서’ 버튼도 눌러 보세요.`)],-1),l(M)]),s(`section`,L,[r[6]||=p(`<h2><span class="section-no">03</span> 왜 연결이 끊길까요?</h2><p>Vue에서 값은 <strong>부모 → 자식(props)</strong> 한 방향으로만 내려갑니다. 자식이 props를 직접 바꾸면 부모가 모르는 사이에 값이 달라지므로 Vue는 이를 막습니다(위 빌드 오류).</p><p><code>const text = ref(props.modelValue)</code>는 그 순간의 값을 <strong>한 번 복사</strong>할 뿐입니다. 이후 자식의 <code>text</code>와 부모의 값은 서로 다른 변수라서, 한쪽이 바뀌어도 다른 쪽은 알 수 없습니다.</p><p><code>defineModel()</code>은 두 방향을 한 번에 연결합니다.</p>`,4),l(f,null,{default:i(()=>[...r[5]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`부모 → 자식`),u(),s(`code`,null,`model.value`),u(`를 읽으면 부모 값`)]),s(`li`,null,[s(`strong`,null,`자식 → 부모`),u(),s(`code`,null,`model.value = …`),u(`면 `),s(`code`,null,`update:modelValue`),u(` 전달`)]),s(`li`,null,[s(`strong`,null,`부모가 갱신`),u(),s(`code`,null,`v-model`),u(`이 부모 변수를 바꿈`)])],-1)]]),_:1}),r[7]||=p(`<div class="table-wrap"><table><thead><tr><th>방식</th><th>자식 코드</th><th>쓸 수 있는 버전</th></tr></thead><tbody><tr><td><code>defineModel()</code></td><td><code>const model = defineModel()</code> 한 줄</td><td>Vue 3.4 이상</td></tr><tr><td>props + emit</td><td><code>modelValue</code> props, <code>emit(&#39;update:modelValue&#39;, 값)</code></td><td>모든 Vue 3</td></tr></tbody></table></div><p>이 사이트는 Vue 3.5를 쓰므로 <code>defineModel()</code>을 기본으로 씁니다. 투입된 프로젝트의 Vue 버전이 3.3 이하라면 예전 방식을 씁니다(<code>package.json</code>의 <code>vue</code> 버전 확인).</p>`,2)]),s(`section`,R,[r[9]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),u(` 원인 찾기`)],-1),r[10]||=s(`p`,null,[u(`부모 값이 비어 있을 때는 `),s(`strong`,null,`자식이 부모에게 값을 보내고 있는지`),u(`부터 확인합니다. Vue DevTools 브라우저 확장을 설치하면 아래 순서로 볼 수 있습니다. Vue DevTools 단계는 내 프로젝트의 개발 서버(`),s(`code`,null,`npm run dev`),u(`)에서 확인하세요. 배포된 이 사이트의 예제에는 연결되지 않습니다.`)],-1),l(m,null,{default:i(()=>[...r[8]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Components 탭에서 자식 선택`),u(` 컴포넌트 트리에서 입력 컴포넌트(예제의 `),s(`code`,null,`TextFieldCopy`),u(`)를 선택합니다. 오른쪽에 props와 setup 상태가 함께 보입니다.`)]),s(`li`,null,[s(`strong`,null,`입력하면서 두 값 비교`),u(` 입력창에 글자를 씁니다. setup의 `),s(`code`,null,`text`),u(`만 바뀌고 props의 `),s(`code`,null,`modelValue`),u(`가 `),s(`code`,null,`""`),u(` 그대로라면 값이 복사본에만 쌓이고 있는 것입니다.`)]),s(`li`,null,[s(`strong`,null,`Timeline 탭에서 이벤트 확인`),u(` Component events 기록을 켜고 다시 입력합니다. `),s(`code`,null,`update:modelValue`),u(`가 한 번도 기록되지 않으면 부모에게 알리는 코드가 없는 것입니다.`)]),s(`li`,null,[s(`strong`,null,`부모 컴포넌트 값 확인`),u(` 트리에서 부모를 선택해 `),s(`code`,null,`v-model`),u(`에 연결한 변수를 봅니다. 해결 쪽(`),s(`code`,null,`TextFieldModel`),u(`)은 입력할 때마다 이 값과 이벤트 기록이 함께 바뀝니다.`)])],-1)]]),_:1})]),s(`section`,ee,[r[11]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),u(` 해결 코드`)],-1),l(h,{tabs:n(N)},null,8,[`tabs`]),r[12]||=p(`<ul><li><strong>기본값·형식</strong>: <code>defineModel({ type: String, default: &#39;&#39; })</code>처럼 props와 같은 옵션을 줍니다. 기본값이 없으면 <code>model.value.length</code>에서 오류가 날 수 있습니다.</li><li><strong>여러 개의 v-model</strong>: 자식에서 <code>defineModel(&#39;title&#39;)</code>, 부모에서 <code>v-model:title=&quot;title&quot;</code>처럼 이름을 붙입니다.</li><li><strong>지우기 버튼</strong>: <code>model.value = &#39;&#39;</code>만 하면 부모 값도 함께 비워집니다.</li></ul>`,1)]),r[15]||=p(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>props를 복사해서 생기는 문제는 입력창이 아닌 컴포넌트에서도 나타납니다. 아래 경우도 같은 기준으로 확인하세요.</p><h3>값이 여러 개인 입력 영역</h3><p>제목·내용처럼 값이 여러 개면 <code>defineModel</code>에 이름을 붙여 따로 받습니다. 하나의 객체로 묶어 넘기는 것보다 갱신이 분명합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- PostEditor.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">const</span> title = <span class="hljs-title function_">defineModel</span>(<span class="hljs-string">&#39;title&#39;</span>, { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">default</span>: <span class="hljs-string">&#39;&#39;</span> })
<span class="hljs-keyword">const</span> content = <span class="hljs-title function_">defineModel</span>(<span class="hljs-string">&#39;content&#39;</span>, { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">default</span>: <span class="hljs-string">&#39;&#39;</span> })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>체크박스·토글 컴포넌트</h3><p>값이 <code>true</code>/<code>false</code>여도 방법은 같습니다. 형식만 <code>Boolean</code>으로 바꿉니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- ToggleSwitch.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;toggle&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;switch&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">defineModel</span>({ <span class="hljs-attr">type</span>: <span class="hljs-title class_">Boolean</span>, <span class="hljs-attr">default</span>: <span class="hljs-literal">false</span> })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>받은 값을 가공해서 보여 줄 때</h3><p>보여 주기만 하는 값(금액 쉼표, 날짜 형식 등)을 <code>ref</code>에 복사하면 같은 문제가 생깁니다. 바꿀 일이 없는 값은 <code>computed</code>로 계산합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;amount&quot;</span>&gt;</span>{{ formatted }}원<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({ <span class="hljs-attr">amount</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">Number</span>, <span class="hljs-attr">default</span>: <span class="hljs-number">0</span> } })

<span class="hljs-comment">// ref(props.amount.toLocaleString())은 처음 값만 남습니다.</span>
<span class="hljs-keyword">const</span> formatted = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> props.<span class="hljs-property">amount</span>.<span class="hljs-title function_">toLocaleString</span>())
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>객체를 v-model로 넘길 때는 속성만 바꾸지 않습니다.</strong> <code>model.value.name = &#39;…&#39;</code>은 부모 객체를 직접 고치는 것이라 <code>update:modelValue</code>가 발생하지 않습니다. <code>model.value = { ...model.value, name: &#39;…&#39; }</code>처럼 새 값으로 바꿉니다.</li><li><strong>글자 수 제한은 <code>maxlength</code>와 함께 안내합니다.</strong> 글자 수 표시(<code>0자 / 20자</code>)는 스크린 리더가 함께 읽도록 입력창의 <code>aria-describedby</code>로 연결합니다.</li><li><strong>공통 컴포넌트는 함께 쓰는 사람과 맞춥니다.</strong> 이미 프로젝트에 입력 컴포넌트가 있다면 새로 만들지 말고, props 이름(<code>modelValue</code>, <code>maxlength</code> 등)을 확인해 같은 방식으로 씁니다.</li></ul></section>`,2),s(`section`,z,[r[14]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),u(` 짧은 실습`)],-1),l(g,null,{default:i(()=>[...r[13]||=[s(`p`,null,`위 예제에서 차례대로 해 보세요.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},[u(`문제 쪽 입력창에 글자를 쓰면 ‘부모 값’이 `),s(`code`,null,`""`),u(` 그대로다.`)])])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`‘부모에서 초기화’를 누르면 해결 쪽 입력창만 비워진다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},[u(`해결 쪽에서 지우기(×) 버튼을 누르면 부모 값도 `),s(`code`,null,`""`),u(`이 된다.`)])])])],-1)]]),_:1})])])}}};export{ie as default,X as duration,K as group,B as id,Q as keyProperty,G as lead,Y as level,U as navTitle,V as order,Z as prerequisites,re as references,ne as related,$ as status,W as summary,J as tags,H as title,q as topic,te as updated};