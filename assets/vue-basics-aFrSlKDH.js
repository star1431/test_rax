import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-0`},u={id:`section-2`},d={id:`section-4`},f={id:`section-5`},p={id:`section-6`},m={id:`section-7`},h={class:`table-wrap`},g=`vue-basics`,_=2,v=`Vue 3 한눈에 (script setup)`,y=`Vue 3 한눈에`,b=`파일 골격, 템플릿 바인딩, 조건·반복, 이벤트, ref·computed·watch, props·emit·defineModel·slot, 생명주기, 내장 컴포넌트까지 Vue 3 script setup 문법을 한 장으로 다시 떠올립니다.`,x=`오랜만에 여는 Vue 프로젝트, 문법이 가물가물하다면?
자주 쓰는 것만 코드 한 조각씩 모았습니다.
`,S=`문법`,C=`Vue 3`,w=[`Vue 3`,`script setup`,`v-bind`,`v-for`,`ref`,`computed`,`watch`,`defineProps`,`defineEmits`,`defineModel`,`slot`,`onMounted`],T=`기초`,E=`약 12분`,D=`published`,O=`2026-11-13`,k=[`restart-checklist`,`vue-react-map`,`define-model`],A=[{title:`Vue — 템플릿 문법`,url:`https://ko.vuejs.org/guide/essentials/template-syntax`},{title:`Vue — 반응형 기초`,url:`https://ko.vuejs.org/guide/essentials/reactivity-fundamentals`},{title:`Vue — 리스트 렌더링`,url:`https://ko.vuejs.org/guide/essentials/list`},{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model`},{title:`Vue — 템플릿 참조`,url:`https://ko.vuejs.org/guide/essentials/template-refs`},{title:`Vue — script setup`,url:`https://ko.vuejs.org/api/sfc-script-setup`}],j={__name:`vue-basics`,setup(g,{expose:_}){return _({frontmatter:{id:`vue-basics`,order:2,title:`Vue 3 한눈에 (script setup)`,navTitle:`Vue 3 한눈에`,summary:`파일 골격, 템플릿 바인딩, 조건·반복, 이벤트, ref·computed·watch, props·emit·defineModel·slot, 생명주기, 내장 컴포넌트까지 Vue 3 script setup 문법을 한 장으로 다시 떠올립니다.`,lead:`오랜만에 여는 Vue 프로젝트, 문법이 가물가물하다면?
자주 쓰는 것만 코드 한 조각씩 모았습니다.
`,group:`문법`,topic:`Vue 3`,tags:[`Vue 3`,`script setup`,`v-bind`,`v-for`,`ref`,`computed`,`watch`,`defineProps`,`defineEmits`,`defineModel`,`slot`,`onMounted`],level:`기초`,duration:`약 12분`,status:`published`,updated:`2026-11-13`,related:[`restart-checklist`,`vue-react-map`,`define-model`],references:[{title:`Vue — 템플릿 문법`,url:`https://ko.vuejs.org/guide/essentials/template-syntax`},{title:`Vue — 반응형 기초`,url:`https://ko.vuejs.org/guide/essentials/reactivity-fundamentals`},{title:`Vue — 리스트 렌더링`,url:`https://ko.vuejs.org/guide/essentials/list`},{title:`Vue — 컴포넌트 v-model`,url:`https://ko.vuejs.org/guide/components/v-model`},{title:`Vue — 템플릿 참조`,url:`https://ko.vuejs.org/guide/essentials/template-refs`},{title:`Vue — script setup`,url:`https://ko.vuejs.org/api/sfc-script-setup`}]}}),(g,_)=>{let v=o(`RouterLink`),y=o(`DocTakeaway`);return e(),r(`div`,c,[_[38]||=n(`p`,null,[a(`Vue 3.5 + `),n(`code`,null,`<script setup>`),a(` 기준으로 자주 쓰는 문법만 모았습니다. 막히면 섹션 끝 ‘자세히’ 링크로 이어 보세요.`)],-1),n(`section`,l,[_[6]||=s(`<h2><span class="section-no">01</span> 파일 골격</h2><p>순서는 <strong>template → script setup → style</strong>입니다. 스타일은 보통 SCSS 파일로 분리하고, 컴포넌트 안 <code>&lt;style&gt;</code>은 생략합니다. 이 컴포넌트에만 꼭 필요할 때만 <code>&lt;style lang=&quot;scss&quot; scoped&gt;</code>를 둡니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- src/components/NoticeCard.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">article</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-card&quot;</span>
    <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;{ &#39;is-open&#39;: isOpen }&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-card-title&quot;</span>&gt;</span>{{ props.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn btn-primary&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isOpen = !isOpen&quot;</span>
    &gt;</span>
      {{ isOpen ? &#39;접기&#39; : &#39;펼치기&#39; }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;isOpen&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-card-body&quot;</span>&gt;</span>{{ props.body }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({
  <span class="hljs-attr">title</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span> },
  <span class="hljs-attr">body</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">default</span>: <span class="hljs-string">&#39;&#39;</span> },
})
<span class="hljs-keyword">const</span> isOpen = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/assets/css/scss/components/_notice-card.scss (main.scss에서 @use)</span>
<span class="hljs-selector-class">.notice-card</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span>;

  &amp;<span class="hljs-selector-class">.is-open</span> {
    <span class="hljs-attribute">border-color</span>: <span class="hljs-built_in">var</span>(--color-primary);
  }
}
</code></pre><ul><li>파일명은 PascalCase, 두 단어 이상(<code>NoticeCard.vue</code>). 루트 요소는 여러 개여도 됩니다.</li><li><code>scoped</code>를 쓰면 자식 컴포넌트 내부는 <code>:deep()</code>으로만 꾸밀 수 있습니다.</li></ul>`,5),n(`p`,null,[_[3]||=a(`자세히: `,-1),i(v,{to:`/std/vue-component`},{default:t(()=>[..._[0]||=[a(`Vue 3 컴포넌트 작성 규칙`,-1)]]),_:1}),_[4]||=a(` · `,-1),i(v,{to:`/std/scss-structure`},{default:t(()=>[..._[1]||=[a(`SCSS 구조와 작성 규칙`,-1)]]),_:1}),_[5]||=a(` · `,-1),i(v,{to:`/pub/vue/scoped-deep`},{default:t(()=>[..._[2]||=[a(`scoped와 :deep()`,-1)]]),_:1})])]),_[39]||=s(`<section id="section-1"><h2><span class="section-no">02</span> 템플릿에 값 쓰기</h2><div class="table-wrap"><table><thead><tr><th>쓰기</th><th>뜻</th></tr></thead><tbody><tr><td>이중 중괄호(머스태시)</td><td>식의 결과를 글자로 출력(HTML은 이스케이프)</td></tr><tr><td><code>:href=&quot;url&quot;</code></td><td>속성에 값 연결(<code>v-bind:href</code>의 줄임)</td></tr><tr><td><code>:class=&quot;{ &#39;is-active&#39;: isActive }&quot;</code></td><td>객체: 값이 참이면 클래스 추가</td></tr><tr><td><code>:class=&quot;[&#39;btn&#39;, sizeClass]&quot;</code></td><td>배열: 여러 클래스 나열</td></tr><tr><td><code>:style=&quot;{ width: w + &#39;px&#39; }&quot;</code></td><td>인라인 스타일</td></tr><tr><td><code>v-html=&quot;html&quot;</code></td><td>HTML 문자열을 그대로 삽입</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
  <span class="hljs-attr">:href</span>=<span class="hljs-string">&quot;item.url&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn&quot;</span>
  <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;[sizeClass, { &#39;is-active&#39;: item.id === activeId }]&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: barWidth + &#39;px&#39; }&quot;</span>
&gt;</span>
  {{ item.label }}
<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;editor-content&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;trustedHtml&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><ul><li>정적 <code>class</code>와 <code>:class</code>는 합쳐집니다.</li><li><code>v-html</code>은 사용자 입력·외부 데이터에 쓰지 않습니다(XSS). 믿을 수 있는 HTML만 넣습니다.</li></ul></section>`,1),n(`section`,u,[_[11]||=s(`<h2><span class="section-no">03</span> 조건과 반복</h2><div class="table-wrap"><table><thead><tr><th>문법</th><th>동작</th><th>쓰는 곳</th></tr></thead><tbody><tr><td><code>v-if</code> / <code>v-else-if</code> / <code>v-else</code></td><td>거짓이면 요소를 만들지 않음</td><td>거의 안 바뀌는 조건</td></tr><tr><td><code>v-show</code></td><td>요소는 두고 <code>display: none</code>만 전환</td><td>자주 여닫는 탭·아코디언</td></tr><tr><td><code>v-for</code> + <code>:key</code></td><td>배열 반복</td><td>key는 데이터의 고유 id</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;status === &#39;loading&#39;&quot;</span>&gt;</span>불러오는 중…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-else-if</span>=<span class="hljs-string">&quot;status === &#39;error&#39;&quot;</span>&gt;</span>불러오지 못했습니다.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">v-else</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-list&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;notice in visibleNotices&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;notice.id&quot;</span>&gt;</span>
      {{ notice.title }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { computed, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> status = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;done&#39;</span>)
<span class="hljs-keyword">const</span> notices = <span class="hljs-title function_">ref</span>([{ <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;n1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;점검 안내&#39;</span>, <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">true</span> }])
<span class="hljs-keyword">const</span> visibleNotices = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> notices.<span class="hljs-property">value</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">notice</span>) =&gt;</span> notice.<span class="hljs-property">isVisible</span>))
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><ul><li>index를 key로 쓰면 항목을 지우거나 정렬할 때 입력값·상태가 다른 항목에 남습니다.</li><li>같은 요소에 <code>v-if</code>와 <code>v-for</code>를 함께 쓰지 않습니다. Vue 3에서는 <code>v-if</code>가 먼저 평가되어 반복 변수를 쓸 수 없습니다. computed로 먼저 거릅니다.</li><li>여러 요소를 묶을 때는 <code>&lt;template v-if&gt;</code>, <code>&lt;template v-for&gt;</code>를 씁니다.</li></ul>`,4),n(`p`,null,[_[9]||=a(`자세히: `,-1),i(v,{to:`/pub/vue/v-if-v-show`},{default:t(()=>[..._[7]||=[a(`v-if와 v-show 선택`,-1)]]),_:1}),_[10]||=a(` · `,-1),i(v,{to:`/std/vue-component`},{default:t(()=>[..._[8]||=[a(`Vue 3 컴포넌트 작성 규칙`,-1)]]),_:1})])]),_[40]||=s(`<section id="section-3"><h2><span class="section-no">04</span> 이벤트</h2><div class="table-wrap"><table><thead><tr><th>쓰기</th><th>뜻</th></tr></thead><tbody><tr><td><code>@click=&quot;toggle&quot;</code></td><td>함수 이름만: 이벤트 객체가 첫 인자로 전달</td></tr><tr><td><code>@click=&quot;select(tag.id, $event)&quot;</code></td><td>인자 전달, 이벤트 객체는 <code>$event</code></td></tr><tr><td><code>@submit.prevent</code> / <code>@click.stop</code></td><td><code>preventDefault()</code> / <code>stopPropagation()</code></td></tr><tr><td><code>@keyup.enter</code></td><td>Enter 키일 때만</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;search-form&quot;</span> @<span class="hljs-attr">submit.prevent</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;keyword&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn btn-primary&quot;</span>&gt;</span>검색<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag-list&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeMenu&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;tag in tags&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;tag.id&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> @<span class="hljs-attr">click.stop</span>=<span class="hljs-string">&quot;select(tag.id, $event)&quot;</span>&gt;</span>{{ tag.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">keyup.enter</span>=<span class="hljs-string">&quot;addTag&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> keyword = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>)
<span class="hljs-keyword">const</span> tags = <span class="hljs-title function_">ref</span>([{ <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;t1&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Vue&#39;</span> }])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">search</span>(<span class="hljs-params"></span>) {}
<span class="hljs-keyword">function</span> <span class="hljs-title function_">select</span>(<span class="hljs-params">id, event</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(id, event.<span class="hljs-property">currentTarget</span>)
}
<span class="hljs-keyword">function</span> <span class="hljs-title function_">closeMenu</span>(<span class="hljs-params"></span>) {}
<span class="hljs-keyword">function</span> <span class="hljs-title function_">addTag</span>(<span class="hljs-params">event</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(event.<span class="hljs-property">target</span>.<span class="hljs-property">value</span>)
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></section>`,1),n(`section`,d,[_[14]||=s(`<h2><span class="section-no">05</span> 상태: ref·reactive·computed·watch</h2><div class="table-wrap"><table><thead><tr><th>API</th><th>쓰는 곳</th><th>기억할 점</th></tr></thead><tbody><tr><td><code>ref(값)</code></td><td>기본 상태(문자·숫자·배열·객체)</td><td>script에서는 <code>.value</code>, 템플릿에서는 자동 언래핑</td></tr><tr><td><code>reactive(객체)</code></td><td>폼처럼 묶인 객체</td><td><code>.value</code> 없음. 구조 분해하면 반응성을 잃음 → <code>toRefs</code></td></tr><tr><td><code>computed(() =&gt; 식)</code></td><td>다른 상태로 계산한 값</td><td>읽기 전용, 결과 캐시</td></tr><tr><td><code>watch(대상, 콜백)</code></td><td>값이 바뀔 때 할 일(요청·저장)</td><td>대상은 ref, getter 함수, reactive</td></tr><tr><td><code>watchEffect(() =&gt; {})</code></td><td>안에서 읽은 값이 바뀌면 다시 실행</td><td>처음 한 번 바로 실행</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{ count }}건 · {{ isValid ? &#39;입력 완료&#39; : &#39;입력 중&#39; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { computed, reactive, ref, toRefs, watch, watchEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({
  <span class="hljs-attr">categoryId</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">default</span>: <span class="hljs-string">&#39;all&#39;</span> },
})

<span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>)
count.<span class="hljs-property">value</span> += <span class="hljs-number">1</span> <span class="hljs-comment">// script에서는 .value</span>

<span class="hljs-keyword">const</span> form = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">email</span>: <span class="hljs-string">&#39;&#39;</span> })
<span class="hljs-keyword">const</span> { name } = form <span class="hljs-comment">// ✗ 지금 값만 복사(반응성 없음)</span>
<span class="hljs-keyword">const</span> { email } = <span class="hljs-title function_">toRefs</span>(form) <span class="hljs-comment">// ○ email.value로 연결 유지</span>

<span class="hljs-keyword">const</span> isValid = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> form.<span class="hljs-property">name</span> !== <span class="hljs-string">&#39;&#39;</span> &amp;&amp; email.<span class="hljs-property">value</span>.<span class="hljs-title function_">includes</span>(<span class="hljs-string">&#39;@&#39;</span>))

<span class="hljs-title function_">watch</span>(count, <span class="hljs-function">(<span class="hljs-params">newCount, oldCount</span>) =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(oldCount, <span class="hljs-string">&#39;→&#39;</span>, newCount))
<span class="hljs-title function_">watch</span>(
  <span class="hljs-function">() =&gt;</span> props.<span class="hljs-property">categoryId</span>, <span class="hljs-comment">// props는 getter 함수로 감시</span>
  <span class="hljs-function">(<span class="hljs-params">id</span>) =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;목록 다시 불러오기&#39;</span>, id),
  { <span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span> },
)
<span class="hljs-title function_">watchEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">document</span>.<span class="hljs-property">title</span> = <span class="hljs-string">\`공지 <span class="hljs-subst">\${count.value}</span>건\`</span>
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><ul><li><code>name</code>은 구조 분해 순간의 값(빈 문자열) 복사본이라 이후 입력이 반영되지 않습니다. <code>form.name</code>으로 읽거나 <code>toRefs</code>를 씁니다.</li><li><code>watch(props.categoryId, ...)</code>는 문자열만 넘어가서 감시되지 않습니다. <code>() =&gt; props.categoryId</code>로 씁니다.</li><li>Vue 3.5부터 <code>defineProps</code> 구조 분해도 반응성이 유지되지만, 이 사이트 규칙은 <code>props.title</code>로 씁니다.</li></ul>`,4),n(`p`,null,[_[13]||=a(`자세히: `,-1),i(v,{to:`/std/vue-component`},{default:t(()=>[..._[12]||=[a(`Vue 3 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,f,[_[21]||=s(`<h2><span class="section-no">06</span> 부모와 자식</h2><div class="table-wrap"><table><thead><tr><th>방향</th><th>자식</th><th>부모</th></tr></thead><tbody><tr><td>부모 → 자식</td><td><code>defineProps({ ... })</code></td><td><code>:is-pinned=&quot;notice.isPinned&quot;</code></td></tr><tr><td>자식 → 부모</td><td><code>const emit = defineEmits([&#39;select&#39;])</code></td><td><code>@select=&quot;openNotice&quot;</code></td></tr><tr><td>양방향</td><td><code>defineModel(&#39;checked&#39;)</code></td><td><code>v-model:checked=&quot;notice.checked&quot;</code></td></tr><tr><td>마크업 전달</td><td><code>&lt;slot /&gt;</code>, <code>&lt;slot name=&quot;footer&quot; /&gt;</code></td><td>태그 사이 내용, <code>&lt;template #footer&gt;</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- 자식: NoticeItem.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-item&quot;</span> <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;{ &#39;is-pinned&#39;: props.isPinned }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">:aria-label</span>=<span class="hljs-string">&quot;props.title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;emit(&#39;select&#39;, props.id)&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span>{{ props.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;footer&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({
  <span class="hljs-attr">id</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span> },
  <span class="hljs-attr">title</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">String</span>, <span class="hljs-attr">default</span>: <span class="hljs-string">&#39;&#39;</span> },
  <span class="hljs-attr">isPinned</span>: { <span class="hljs-attr">type</span>: <span class="hljs-title class_">Boolean</span>, <span class="hljs-attr">default</span>: <span class="hljs-literal">false</span> },
})
<span class="hljs-keyword">const</span> emit = <span class="hljs-title function_">defineEmits</span>([<span class="hljs-string">&#39;select&#39;</span>])
<span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">defineModel</span>(<span class="hljs-string">&#39;checked&#39;</span>, { <span class="hljs-attr">type</span>: <span class="hljs-title class_">Boolean</span>, <span class="hljs-attr">default</span>: <span class="hljs-literal">false</span> })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- 부모: NoticeList.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-list&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">NoticeItem</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;notice in notices&quot;</span>
      <span class="hljs-attr">:id</span>=<span class="hljs-string">&quot;notice.id&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;notice.id&quot;</span>
      <span class="hljs-attr">v-model:checked</span>=<span class="hljs-string">&quot;notice.checked&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;notice.title&quot;</span>
      <span class="hljs-attr">:is-pinned</span>=<span class="hljs-string">&quot;notice.isPinned&quot;</span>
      @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;openNotice&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ notice.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge&quot;</span>&gt;</span>{{ notice.date }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">NoticeItem</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">NoticeItem</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./NoticeItem.vue&#39;</span>

<span class="hljs-keyword">const</span> notices = <span class="hljs-title function_">ref</span>([
  { <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;n1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;점검 안내&#39;</span>, <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;11.12&#39;</span>, <span class="hljs-attr">isPinned</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">checked</span>: <span class="hljs-literal">false</span> },
])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">openNotice</span>(<span class="hljs-params">id</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;열기&#39;</span>, id)
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><ul><li>props는 읽기 전용입니다. 바꿔야 하면 <code>emit</code>으로 알리거나 <code>defineModel</code>을 씁니다.</li><li>배열·객체 기본값은 함수로 반환합니다(<code>default: () =&gt; []</code>).</li><li>이름 없는 <code>defineModel()</code>은 부모의 <code>v-model</code>과 연결됩니다(Vue 3.4 이상).</li><li>부모에서 kebab-case(<code>:is-pinned</code>)로 넘겨도 자식은 camelCase(<code>isPinned</code>)로 받습니다.</li></ul>`,5),n(`p`,null,[_[18]||=a(`자세히: `,-1),i(v,{to:`/pub/vue/props-mutation`},{default:t(()=>[..._[15]||=[a(`props를 바꿔 경고가 날 때`,-1)]]),_:1}),_[19]||=a(` · `,-1),i(v,{to:`/pub/vue/define-model`},{default:t(()=>[..._[16]||=[a(`defineModel`,-1)]]),_:1}),_[20]||=a(` · `,-1),i(v,{to:`/pub/vue/slot-markup`},{default:t(()=>[..._[17]||=[a(`slot으로 마크업 열어 두기`,-1)]]),_:1})])]),n(`section`,p,[_[26]||=s(`<h2><span class="section-no">07</span> 생명주기와 DOM</h2><div class="table-wrap"><table><thead><tr><th>API</th><th>시점·용도</th></tr></thead><tbody><tr><td><code>onMounted</code></td><td>DOM이 그려진 뒤: 크기 재기, 포커스, 리스너 등록, 라이브러리 초기화</td></tr><tr><td><code>onBeforeUnmount</code></td><td>사라지기 전: 리스너 해제, 타이머 정리, 라이브러리 destroy</td></tr><tr><td><code>useTemplateRef(&#39;이름&#39;)</code></td><td>템플릿 <code>ref=&quot;이름&quot;</code> 요소 참조(Vue 3.5 이상)</td></tr><tr><td><code>await nextTick()</code></td><td>상태를 바꾼 뒤 DOM 갱신까지 기다림</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;panel&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;chat-panel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;message in messages&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;message.id&quot;</span>&gt;</span>{{ message.text }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;addMessage&quot;</span>&gt;</span>추가<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> panel = <span class="hljs-title function_">useTemplateRef</span>(<span class="hljs-string">&#39;panel&#39;</span>)
<span class="hljs-keyword">const</span> messages = <span class="hljs-title function_">ref</span>([])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">onResize</span>(<span class="hljs-params"></span>) {}

<span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, onResize)
})
<span class="hljs-title function_">onBeforeUnmount</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">removeEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, onResize)
})

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">addMessage</span>(<span class="hljs-params"></span>) {
  messages.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>({ <span class="hljs-attr">id</span>: <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>(), <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;새 메시지&#39;</span> })
  <span class="hljs-keyword">await</span> <span class="hljs-title function_">nextTick</span>() <span class="hljs-comment">// 새 항목이 그려진 뒤</span>
  panel.<span class="hljs-property">value</span>.<span class="hljs-property">scrollTop</span> = panel.<span class="hljs-property">value</span>.<span class="hljs-property">scrollHeight</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><ul><li>Vue 3.4 이하는 <code>const panel = ref(null)</code>로 선언하고 템플릿에 같은 이름(<code>ref=&quot;panel&quot;</code>)을 줍니다.</li><li>템플릿 ref는 마운트 전, 그리고 <code>v-if</code>로 빠져 있는 동안 <code>null</code>입니다.</li></ul>`,4),n(`p`,null,[_[24]||=a(`자세히: `,-1),i(v,{to:`/pub/vue/next-tick`},{default:t(()=>[..._[22]||=[a(`바뀐 DOM 크기 재기(nextTick)`,-1)]]),_:1}),_[25]||=a(` · `,-1),i(v,{to:`/std/vue-component`},{default:t(()=>[..._[23]||=[a(`Vue 3 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,m,[_[36]||=n(`h2`,null,[n(`span`,{class:`section-no`},`08`),a(` 자주 쓰는 내장 기능`)],-1),n(`div`,h,[n(`table`,null,[_[34]||=n(`thead`,null,[n(`tr`,null,[n(`th`,null,`컴포넌트`),n(`th`,null,`한 줄 요약`),n(`th`,null,`자세히`)])],-1),n(`tbody`,null,[n(`tr`,null,[_[28]||=n(`td`,null,[n(`code`,null,`<Transition name="fade">`)],-1),_[29]||=n(`td`,null,[n(`code`,null,`v-if`),a(`·`),n(`code`,null,`v-show`),a(`로 나타나고 사라질 때 `),n(`code`,null,`fade-enter-active`),a(` 같은 클래스로 애니메이션`)],-1),n(`td`,null,[i(v,{to:`/pub/vue/transition-toggle`},{default:t(()=>[..._[27]||=[a(`Transition 열고 닫기`,-1)]]),_:1})])]),n(`tr`,null,[_[31]||=n(`td`,null,[n(`code`,null,`<Teleport to="body">`)],-1),_[32]||=n(`td`,null,[a(`마크업은 그 자리에, 실제 DOM은 `),n(`code`,null,`body`),a(` 끝으로(팝업·토스트)`)],-1),n(`td`,null,[i(v,{to:`/pub/vue/teleport-layer`},{default:t(()=>[..._[30]||=[a(`Teleport 레이어`,-1)]]),_:1})])]),_[33]||=n(`tr`,null,[n(`td`,null,[n(`code`,null,`<KeepAlive>`)]),n(`td`,null,`동적 컴포넌트를 바꿔도 이전 컴포넌트 상태를 보관`),n(`td`,null,[n(`a`,{href:`https://ko.vuejs.org/guide/built-ins/keep-alive`,target:`_blank`,rel:`noreferrer`},`Vue — KeepAlive`)])],-1)])])]),_[37]||=s(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">Teleport</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;body&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fade&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isOpen&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;modal&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;dialog&quot;</span> <span class="hljs-attr">aria-modal</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">Transition</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Teleport</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">KeepAlive</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">component</span> <span class="hljs-attr">:is</span>=<span class="hljs-string">&quot;currentTab&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">KeepAlive</span>&gt;</span>
</code></pre><ul><li><code>&lt;Transition&gt;</code> 안에는 요소 하나만 둡니다. 목록은 <code>&lt;TransitionGroup&gt;</code>을 씁니다.</li><li><code>currentTab</code>에 컴포넌트 객체를 담을 때는 <code>ref</code> 대신 <code>shallowRef</code>를 씁니다.</li></ul>`,2),i(y,null,{default:t(()=>[..._[35]||=[n(`p`,null,[a(`script에서는 `),n(`code`,null,`.value`),a(`, 템플릿에서는 그냥 씁니다. props는 읽기만 하고, 값 변경은 `),n(`strong`,null,[n(`code`,null,`emit`),a(`이나 `),n(`code`,null,`defineModel`),a(`로`)]),a(` 부모에 맡깁니다.`)],-1)]]),_:1})])])}}};export{j as default,E as duration,S as group,g as id,x as lead,T as level,y as navTitle,_ as order,A as references,k as related,D as status,b as summary,w as tags,v as title,C as topic,O as updated};