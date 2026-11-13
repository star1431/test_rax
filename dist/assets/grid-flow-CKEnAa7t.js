import{D as e,G as t,H as n,R as r,c as i,d as a,ft as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as _}from"./index-DHgvQBhl.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y={for:`demo-flow-count`},b={for:`demo-flow-columns`},x={__name:`GridFlowDemo`,setup(t){let s=n(7),l=n(3),f=h(()=>Math.ceil(s.value/l.value));return(t,n)=>(e(),d(v,{problem:{code:`grid-auto-flow: row`,note:`번호가 왼쪽에서 오른쪽으로 이어집니다.`},solved:{code:`grid-auto-flow: column`,note:`번호가 위에서 아래로 이어집니다.`}},{controls:r(()=>[i(`label`,y,[n[2]||=c(`항목 수 `,-1),i(`strong`,null,p(s.value)+`개`,1)]),g(i(`input`,{id:`demo-flow-count`,"onUpdate:modelValue":n[0]||=e=>s.value=e,type:`range`,min:`4`,max:`12`,step:`1`},null,512),[[_,s.value,void 0,{number:!0}]]),i(`label`,b,[n[3]||=c(`열 수 `,-1),i(`strong`,null,p(l.value)+`열 · `+p(f.value)+`행`,1)]),g(i(`input`,{id:`demo-flow-columns`,"onUpdate:modelValue":n[1]||=e=>l.value=e,type:`range`,min:`2`,max:`4`,step:`1`},null,512),[[_,l.value,void 0,{number:!0}]])]),caption:r(()=>[...n[5]||=[c(` 행 수는 항목 수와 열 수로 계산해 CSS 변수 `,-1),i(`code`,null,`--rows`,-1),c(`로 전달합니다. `,-1)]]),default:r(()=>[i(`ul`,{class:`demo-flow-list`,style:o({"--rows":f.value,"--cols":l.value})},[(e(!0),a(m,null,u(s.value,t=>(e(),a(`li`,{key:t},[i(`b`,null,p(t),1),n[4]||=c(`항목`,-1)]))),128))],4)]),_:1}))}},S=[{label:`CSS`,language:`css`,code:`.demo-flow-list {
  display: grid;
  grid-auto-flow: column; /* 열을 먼저 채웁니다. */
  grid-template-rows: repeat(var(--rows), auto); /* 행 수 = 올림(항목 수 ÷ 열 수) */
  grid-auto-columns: minmax(0, 1fr);
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-flow-list li {
  padding: 8px 10px;
  border: 1px solid #c9d4e3;
  border-radius: 4px;
  background: #fff;
  font-size: 12px;
}
.demo-flow-list b {
  margin-right: 6px;
  color: #315bc2;
}
/* 비교를 위한 문제 상태: 기본 방향(행 우선)으로 배치합니다. */
.is-problem .demo-flow-list {
  grid-auto-flow: row;
  grid-template-rows: none;
  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
}
`},{label:`HTML`,language:`xml`,code:`<ul class="demo-flow-list" style="--rows: 3; --cols: 3">
  <li><b>1</b>항목</li>
  <li><b>2</b>항목</li>
  <!-- … -->
</ul>`},{label:`Vue`,language:`xml`,code:`<script setup>
import { computed } from 'vue'

const props = defineProps({ items: Array, columns: { type: Number, default: 3 } })

// CSS만으로는 행 수를 알 수 없으므로 항목 수와 열 수로 계산해 전달합니다.
const rows = computed(() => Math.ceil(props.items.length / props.columns))
<\/script>

<template>
  <ul class="demo-flow-list" :style="{ '--rows': rows, '--cols': columns }">
    <li v-for="(item, i) in items" :key="item.id"><b>{{ i + 1 }}</b>{{ item.name }}</li>
  </ul>
</template>`}],C={class:`doc-body`},w={id:`section-0`},T={id:`section-1`},E={id:`section-2`},D={id:`section-3`},O={id:`section-4`},k={id:`section-7`},A=`grid-flow`,j=5,M=`Grid 항목을 세로 방향으로 배치하기`,N=`Grid 세로 배치`,P=`데이터 순서대로 위에서 아래로 채우는 열 우선 배치를 grid-auto-flow column과 행 수 계산으로 구현합니다.`,F=`1, 2, 3… 순서를 위에서 아래로 나열해야 한다면?
배치 방향을 바꾸기 전에, 몇 행으로 나눌지부터 정하세요.
`,I=`Grid`,L=`Grid`,R=[`Grid`,`grid-auto-flow`,`열 우선`,`목록`,`CSS 변수`],z=`기초`,B=`약 10분`,V=[`Grid 행·열`,`자동 배치`],H=`grid-auto-flow: column`,U=`published`,W=`2026-11-11`,G=[`grid-dense`,`flex-bottom-action`],K=[{title:`CSS Grid Layout — grid-auto-flow`,url:`https://www.w3.org/TR/css-grid-1/#grid-auto-flow-property`},{title:`MDN — grid-auto-flow`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/grid-auto-flow`}],q={__name:`grid-flow`,setup(n,{expose:o}){return o({frontmatter:{id:`grid-flow`,order:5,title:`Grid 항목을 세로 방향으로 배치하기`,navTitle:`Grid 세로 배치`,summary:`데이터 순서대로 위에서 아래로 채우는 열 우선 배치를 grid-auto-flow column과 행 수 계산으로 구현합니다.`,lead:`1, 2, 3… 순서를 위에서 아래로 나열해야 한다면?
배치 방향을 바꾸기 전에, 몇 행으로 나눌지부터 정하세요.
`,group:`Grid`,topic:`Grid`,tags:[`Grid`,`grid-auto-flow`,`열 우선`,`목록`,`CSS 변수`],level:`기초`,duration:`약 10분`,prerequisites:[`Grid 행·열`,`자동 배치`],keyProperty:`grid-auto-flow: column`,status:`published`,updated:`2026-11-11`,related:[`grid-dense`,`flex-bottom-action`],references:[{title:`CSS Grid Layout — grid-auto-flow`,url:`https://www.w3.org/TR/css-grid-1/#grid-auto-flow-property`},{title:`MDN — grid-auto-flow`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/grid-auto-flow`}]}}),(n,o)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`DocPractice`);return e(),a(`div`,C,[i(`section`,w,[o[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),o[3]||=i(`p`,null,[c(`가나다순 용어 목록을 3열로 보여주려고 합니다. 사용자는 `),i(`strong`,null,`위에서 아래로`),c(` 읽기를 기대하는데, Grid로 배치하면 1·2·3이 첫 줄에 가로로 놓입니다.`)],-1),o[4]||=i(`p`,null,`시안에는 세로 순서로 그려져 있어도 기본 Grid로 옮기면서 놓치기 쉽고, 기획 검토에서 이런 요청으로 돌아옵니다.`,-1),s(u,{label:`기획 요청`,title:`용어 사전: 가나다순이 위에서 아래로 이어지지 않음`,env:`전체 브라우저 · PC 3열 목록`,expected:`첫 번째 열에 ㄱ·ㄴ·ㄷ 순서로 위에서 아래로 이어지고, 다음 열로 넘어감`,actual:`ㄱ·ㄴ·ㄷ이 첫 줄에 왼쪽에서 오른쪽으로 놓임`},{default:r(()=>[...o[0]||=[i(`ol`,null,[i(`li`,null,`용어 사전 화면을 PC 너비로 엽니다.`),i(`li`,null,`첫 번째 열의 위에서 아래 순서를 확인합니다.`),i(`li`,null,`시안의 용어 순서와 비교합니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...o[1]||=[i(`p`,null,[i(`code`,null,`grid-auto-flow: column`),c(`과 함께 `),i(`strong`,null,`행 수`),c(`를 `),i(`code`,null,`grid-template-rows`),c(`로 지정하세요.`)],-1)]]),_:1})]),i(`section`,T,[o[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),o[6]||=i(`p`,null,`항목 수와 열 수를 바꾸면서 번호가 이어지는 방향을 비교해 보세요.`,-1),s(x)]),i(`section`,E,[o[8]||=f(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>Grid의 자동 배치 방향인 <code>grid-auto-flow</code>의 기본값은 <code>row</code>입니다. 위치를 지정하지 않은 항목은 한 행을 다 채운 뒤 다음 행으로 넘어갑니다.</p><p><code>column</code>으로 바꾸면 한 열을 다 채운 뒤 다음 열로 넘어갑니다. 이때 <strong>한 열에 몇 개를 채울지</strong>, 즉 행 수를 알아야 합니다. 행 수를 지정하지 않으면 모든 항목이 한 행에 놓여 열이 끝없이 늘어납니다. CSS는 항목 수를 셀 수 없으므로 행 수는 <code>올림(항목 수 ÷ 열 수)</code>로 계산해 전달합니다.</p>`,3),s(p,null,{default:r(()=>[...o[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`행 수를 계산하고`),c(),i(`code`,null,`--rows`)]),i(`li`,null,[i(`strong`,null,`행 템플릿을 정하고`),c(),i(`code`,null,`grid-template-rows`)]),i(`li`,null,[i(`strong`,null,`열 우선으로 채움`),c(),i(`code`,null,`grid-auto-flow: column`)])],-1)]]),_:1})]),i(`section`,D,[o[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),o[11]||=i(`p`,null,[c(`번호가 원하는 방향으로 이어지지 않을 때는 `),i(`strong`,null,`배치 방향과 행 수`),c(`를 함께 확인합니다. 아래 순서로 보면 둘 중 무엇이 빠졌는지 알 수 있습니다.`)],-1),s(m,null,{default:r(()=>[...o[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`grid 배지로 오버레이 표시`),c(` Elements 패널에서 `),i(`code`,null,`.demo-flow-list`),c(` 옆의 `),i(`code`,null,`grid`),c(` 배지를 누릅니다. 행과 열이 몇 개 만들어졌는지 화면에 표시됩니다.`)]),i(`li`,null,[i(`strong`,null,`Computed 탭에서 배치 방향 확인`),i(`code`,null,`grid-auto-flow`),c(`를 검색합니다. 값이 `),i(`code`,null,`row`),c(`이면 항목은 한 행을 다 채운 뒤 다음 행으로 넘어갑니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 행 수 확인`),i(`code`,null,`grid-template-rows`),c(`가 선언되어 있는지, `),i(`code`,null,`--rows`),c(` 값이 들어 있는지 확인합니다. `),i(`code`,null,`--rows`),c(`가 비어 있으면 `),i(`code`,null,`repeat()`),c(`가 무효가 되어 행 수가 없는 것과 같아집니다.`)]),i(`li`,null,[i(`strong`,null,`행 수를 바꿔 시험`),c(` 해결 예제의 `),i(`code`,null,`element.style`),c(`에서 `),i(`code`,null,`--rows`),c(` 값을 1 늘려 봅니다. 한 열에 들어가는 개수가 늘고 열 수가 줄어들면 행 수가 배치를 결정한다는 것을 확인할 수 있습니다.`)])],-1)]]),_:1})]),i(`section`,O,[o[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),o[13]||=i(`p`,null,`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. Vue 탭에서 행 수를 계산해 CSS 변수로 전달하는 방법을 확인하세요.`,-1),s(h,{tabs:t(S)},null,8,[`tabs`]),o[14]||=f(`<p>카드 높이가 제각각이어도 되는 단순 텍스트 목록이라면 다단(<code>columns</code>)도 대안입니다. 행 수 계산이 필요 없지만 각 열의 높이를 맞추는 방식이라 항목 높이가 다르면 열마다 개수가 달라질 수 있습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.term-list</span> {
  <span class="hljs-attribute">columns</span>: <span class="hljs-number">3</span>;
  <span class="hljs-attribute">column-gap</span>: <span class="hljs-number">16px</span>;
}
<span class="hljs-selector-class">.term-list</span> <span class="hljs-selector-tag">li</span> {
  <span class="hljs-attribute">break-inside</span>: avoid; <span class="hljs-comment">/* 항목이 두 열로 나뉘지 않게 합니다. */</span>
}
</code></pre>`,2)]),o[17]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 원인(열 우선 배치에 필요한 행 수)이 다른 형태로도 나타납니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>행 수 없이 column만 지정했을 때</h3><p><code>grid-template-rows</code> 없이 <code>grid-auto-flow: column</code>만 주면 모든 항목이 한 행에 놓입니다. 열이 항목 수만큼 생겨 가로로 넘칩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.term-list</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-auto-flow</span>: column; <span class="hljs-comment">/* 행 수가 없어 한 줄로 늘어섭니다. */</span>
}
</code></pre><h3>화면 폭마다 열 수가 다를 때</h3><p>열 수가 바뀌면 행 수도 달라집니다. 화면 폭별 행 수를 각각 계산해 변수로 전달하고, 미디어 쿼리에서 골라 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.term-list</span> {
  <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-built_in">var</span>(--rows-mobile), auto);
}
<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">768px</span>) {
  <span class="hljs-selector-class">.term-list</span> { <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-built_in">var</span>(--rows-pc), auto); }
}
</code></pre><h3>Flex 세로 줄바꿈으로 시도할 때</h3><p><code>flex-direction: column</code>과 <code>flex-wrap: wrap</code>으로도 세로 순서를 만들 수 있지만, 컨테이너 높이를 고정해야 줄이 바뀝니다. 항목 높이가 달라지면 열마다 개수가 달라집니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.term-list</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">240px</span>; <span class="hljs-comment">/* 높이가 없으면 한 열로만 늘어납니다. */</span>
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>행 수가 바뀌는 시점마다 다시 계산합니다.</strong> 항목 수가 바뀌거나, 반응형에서 열 수가 바뀌면 <code>--rows</code>도 함께 바꿔야 합니다.</li><li><strong><code>grid-template-columns</code> 대신 <code>grid-auto-columns</code>를 사용합니다.</strong> 열 우선 배치에서는 열이 자동으로 생기므로 생성될 열의 크기를 <code>grid-auto-columns</code>로 지정합니다.</li><li><strong>DOM 순서와 화면 순서가 같은지 확인합니다.</strong> 이 방법은 DOM 순서대로 위에서 아래로 놓이므로 읽기·Tab 순서가 자연스럽습니다. CSS로 순서를 바꾸는 <code>order</code>와는 다릅니다.</li><li><strong>좁은 화면에서는 1열로 바꿉니다.</strong> 모바일에서 열 수를 1로 두면 행 수는 항목 수와 같아집니다.</li></ul></section>`,2),i(`section`,k,[o[16]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(g,null,{default:r(()=>[...o[15]||=[i(`p`,null,`위 예제에서 항목 수를 10개, 열 수를 4열로 바꿔보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태에서 첫 번째 열에 1, 2, 3번이 위에서 아래로 놓인다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`열 수 라벨의 행 수가 3행으로 바뀐다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`마지막 열에는 남은 항목만 놓인다.`)])])],-1)]]),_:1})])])}}};export{q as default,B as duration,I as group,A as id,H as keyProperty,F as lead,z as level,N as navTitle,j as order,V as prerequisites,K as references,G as related,U as status,P as summary,R as tags,M as title,L as topic,W as updated};