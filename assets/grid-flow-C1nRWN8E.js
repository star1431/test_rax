import{$ as e,A as t,C as n,L as r,P as i,T as a,a as o,c as s,d as c,et as l,f as u,i as d,j as f,o as p,t as m,u as h,x as g}from"./runtime-core.esm-bundler-_PXz1bcR.js";import{o as _}from"./index-DhNIXVN4.js";import{t as v}from"./DemoCompare-C7skMkLc.js";var y={for:`demo-flow-count`},b={for:`demo-flow-columns`},x={__name:`GridFlowDemo`,setup(r){let a=i(7),u=i(3),h=d(()=>Math.ceil(a.value/u.value));return(r,i)=>(g(),p(v,{problem:{code:`grid-auto-flow: row`,note:`번호가 왼쪽에서 오른쪽으로 이어집니다.`},solved:{code:`grid-auto-flow: column`,note:`번호가 위에서 아래로 이어집니다.`}},{controls:t(()=>[o(`label`,y,[i[2]||=c(`항목 수 `,-1),o(`strong`,null,l(a.value)+`개`,1)]),f(o(`input`,{id:`demo-flow-count`,"onUpdate:modelValue":i[0]||=e=>a.value=e,type:`range`,min:`4`,max:`12`,step:`1`},null,512),[[_,a.value,void 0,{number:!0}]]),o(`label`,b,[i[3]||=c(`열 수 `,-1),o(`strong`,null,l(u.value)+`열 · `+l(h.value)+`행`,1)]),f(o(`input`,{id:`demo-flow-columns`,"onUpdate:modelValue":i[1]||=e=>u.value=e,type:`range`,min:`2`,max:`4`,step:`1`},null,512),[[_,u.value,void 0,{number:!0}]])]),caption:t(()=>[...i[5]||=[c(` 행 수는 항목 수와 열 수로 계산해 CSS 변수 `,-1),o(`code`,null,`--rows`,-1),c(`로 전달합니다. `,-1)]]),default:t(()=>[o(`ul`,{class:`demo-flow-list`,style:e({"--rows":h.value,"--cols":u.value})},[(g(!0),s(m,null,n(a.value,e=>(g(),s(`li`,{key:e},[o(`b`,null,l(e),1),i[4]||=c(`항목`,-1)]))),128))],4)]),_:1}))}},S=[{label:`CSS`,language:`css`,code:`.demo-flow-list {
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
</template>`}],C={class:`doc-body`},w={id:`section-0`},T={id:`section-1`},E={id:`section-2`},D={id:`section-3`},O={id:`section-5`},k=`grid-flow`,A=5,j=`Grid 항목을 세로 방향으로 배치하기`,M=`Grid 세로 배치`,N=`데이터 순서대로 위에서 아래로 채우는 열 우선 배치를 grid-auto-flow column과 행 수 계산으로 구현합니다.`,P=`1, 2, 3… 순서를 위에서 아래로 나열해야 한다면?
배치 방향을 바꾸기 전에, 몇 행으로 나눌지부터 정하세요.
`,F=`CSS`,I=`CSS · Grid`,L=`Grid`,R=[`Grid`,`grid-auto-flow`,`열 우선`,`목록`,`CSS 변수`],z=`기초`,B=`약 6분`,V=[`Grid 행·열`,`자동 배치`],H=`grid-auto-flow: column`,U=`published`,W=`2026-11-02`,G=[`grid-dense`,`flex-bottom-action`],K=[{title:`CSS Grid Layout — grid-auto-flow`,url:`https://www.w3.org/TR/css-grid-1/#grid-auto-flow-property`},{title:`MDN — grid-auto-flow`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/grid-auto-flow`}],q={__name:`grid-flow`,setup(e,{expose:n}){return n({frontmatter:{id:`grid-flow`,order:5,title:`Grid 항목을 세로 방향으로 배치하기`,navTitle:`Grid 세로 배치`,summary:`데이터 순서대로 위에서 아래로 채우는 열 우선 배치를 grid-auto-flow column과 행 수 계산으로 구현합니다.`,lead:`1, 2, 3… 순서를 위에서 아래로 나열해야 한다면?
배치 방향을 바꾸기 전에, 몇 행으로 나눌지부터 정하세요.
`,category:`CSS`,group:`CSS · Grid`,topic:`Grid`,tags:[`Grid`,`grid-auto-flow`,`열 우선`,`목록`,`CSS 변수`],level:`기초`,duration:`약 6분`,prerequisites:[`Grid 행·열`,`자동 배치`],keyProperty:`grid-auto-flow: column`,status:`published`,updated:`2026-11-02`,related:[`grid-dense`,`flex-bottom-action`],references:[{title:`CSS Grid Layout — grid-auto-flow`,url:`https://www.w3.org/TR/css-grid-1/#grid-auto-flow-property`},{title:`MDN — grid-auto-flow`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/grid-auto-flow`}]}}),(e,n)=>{let i=a(`DocTakeaway`),l=a(`DocSteps`),d=a(`CodePanel`),f=a(`DocPractice`);return g(),s(`div`,C,[o(`section`,w,[n[1]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),n[2]||=o(`p`,null,[c(`가나다순 용어 목록을 3열로 보여주려고 합니다. 사용자는 `),o(`strong`,null,`위에서 아래로`),c(` 읽기를 기대하는데, Grid로 배치하면 1·2·3이 첫 줄에 가로로 놓입니다.`)],-1),u(i,null,{default:t(()=>[...n[0]||=[o(`p`,null,[o(`code`,null,`grid-auto-flow: column`),c(`과 함께 `),o(`strong`,null,`행 수`),c(`를 `),o(`code`,null,`grid-template-rows`),c(`로 지정하세요.`)],-1)]]),_:1})]),o(`section`,T,[n[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),n[4]||=o(`p`,null,`항목 수와 열 수를 바꾸면서 번호가 이어지는 방향을 비교해 보세요.`,-1),u(x)]),o(`section`,E,[n[6]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>Grid의 자동 배치 방향인 <code>grid-auto-flow</code>의 기본값은 <code>row</code>입니다. 위치를 지정하지 않은 항목은 한 행을 다 채운 뒤 다음 행으로 넘어갑니다.</p><p><code>column</code>으로 바꾸면 한 열을 다 채운 뒤 다음 열로 넘어갑니다. 이때 <strong>한 열에 몇 개를 채울지</strong>, 즉 행 수를 알아야 합니다. 행 수를 지정하지 않으면 모든 항목이 한 행에 놓여 열이 끝없이 늘어납니다. CSS는 항목 수를 셀 수 없으므로 행 수는 <code>올림(항목 수 ÷ 열 수)</code>로 계산해 전달합니다.</p>`,3),u(l,null,{default:t(()=>[...n[5]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`행 수를 계산하고`),c(),o(`code`,null,`--rows`)]),o(`li`,null,[o(`strong`,null,`행 템플릿을 정하고`),c(),o(`code`,null,`grid-template-rows`)]),o(`li`,null,[o(`strong`,null,`열 우선으로 채움`),c(),o(`code`,null,`grid-auto-flow: column`)])],-1)]]),_:1})]),o(`section`,D,[n[7]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),c(` 해결 코드`)],-1),n[8]||=o(`p`,null,`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. Vue 탭에서 행 수를 계산해 CSS 변수로 전달하는 방법을 확인하세요.`,-1),u(d,{tabs:r(S)},null,8,[`tabs`]),n[9]||=h(`<p>카드 높이가 제각각이어도 되는 단순 텍스트 목록이라면 다단(<code>columns</code>)도 대안입니다. 행 수 계산이 필요 없지만 각 열의 높이를 맞추는 방식이라 항목 높이가 다르면 열마다 개수가 달라질 수 있습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.term-list</span> {
  <span class="hljs-attribute">columns</span>: <span class="hljs-number">3</span>;
  <span class="hljs-attribute">column-gap</span>: <span class="hljs-number">16px</span>;
}
<span class="hljs-selector-class">.term-list</span> <span class="hljs-selector-tag">li</span> {
  <span class="hljs-attribute">break-inside</span>: avoid; <span class="hljs-comment">/* 항목이 두 열로 나뉘지 않게 합니다. */</span>
}
</code></pre>`,2)]),n[12]||=h(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>행 수가 바뀌는 시점마다 다시 계산합니다.</strong> 항목 수가 바뀌거나, 반응형에서 열 수가 바뀌면 <code>--rows</code>도 함께 바꿔야 합니다.</li><li><strong><code>grid-template-columns</code> 대신 <code>grid-auto-columns</code>를 사용합니다.</strong> 열 우선 배치에서는 열이 자동으로 생기므로 생성될 열의 크기를 <code>grid-auto-columns</code>로 지정합니다.</li><li><strong>DOM 순서와 화면 순서가 같은지 확인합니다.</strong> 이 방법은 DOM 순서대로 위에서 아래로 놓이므로 읽기·Tab 순서가 자연스럽습니다. CSS로 순서를 바꾸는 <code>order</code>와는 다릅니다.</li><li><strong>좁은 화면에서는 1열로 바꿉니다.</strong> 모바일에서 열 수를 1로 두면 행 수는 항목 수와 같아집니다.</li></ul></section>`,1),o(`section`,O,[n[11]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),c(` 짧은 실습`)],-1),u(f,null,{default:t(()=>[...n[10]||=[o(`p`,null,`위 예제에서 항목 수를 10개, 열 수를 4열로 바꿔보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태에서 첫 번째 열에 1, 2, 3번이 위에서 아래로 놓인다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`열 수 라벨의 행 수가 3행으로 바뀐다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`마지막 열에는 남은 항목만 놓인다.`)])])],-1)]]),_:1})])])}}};export{F as category,q as default,B as duration,I as group,k as id,H as keyProperty,P as lead,z as level,M as navTitle,A as order,V as prerequisites,K as references,G as related,U as status,N as summary,R as tags,j as title,L as topic,W as updated};