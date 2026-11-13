import{D as e,G as t,R as n,V as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{_}from"./index-Dxflp_jg.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y={class:`demo-hs-result`,role:`status`},b={key:0},x={__name:`HiddenSizeDemo`,setup(t){let o=[`접힌 영역의 높이를 알아야 펼침 애니메이션이나 스크롤 위치를 계산할 수 있습니다.`,`숨겨진(display: none) 요소는 화면에 자리를 만들지 않아 높이가 0입니다.`],c=e=>e?`solved`:`problem`,d=r({problem:!1,solved:!1}),x=r({problem:null,solved:null}),S={};async function C(){d.problem=!0,x.problem=S.problem.offsetHeight,d.solved=!0,await h(),x.solved=S.solved.offsetHeight}function w(){d.problem=!1,d.solved=!1,x.problem=null,x.solved=null}return(t,r)=>(e(),u(v,{problem:{code:`isOpen = true → 바로 재기`,note:`아직 display: none이라 0이 나옵니다.`},solved:{code:`isOpen = true → nextTick 뒤 재기`,note:`화면에 반영된 뒤라 실제 높이가 나옵니다.`}},{controls:n(()=>[r[0]||=i(`span`,{class:`demo-label`},`조작`,-1),i(`div`,{class:`sample-buttons`},[i(`button`,{type:`button`,onClick:C},`두 패널 펼치고 높이 재기`),i(`button`,{type:`button`,onClick:w},`접기`)])]),default:n(({solved:t})=>[i(`p`,y,[r[1]||=s(` 잰 높이 `,-1),i(`strong`,null,f(x[c(t)]??`—`),1),x[c(t)]===null?m(``,!0):(e(),a(`span`,b,`px`))]),g(i(`div`,{ref:e=>S[c(t)]=e,class:`demo-hs-panel`},[(e(),a(p,null,l(o,e=>i(`p`,{key:e},f(e),1)),64))],512),[[_,d[c(t)]]])]),caption:n(()=>[...r[2]||=[s(` 두 패널은 같은 내용입니다. 높이를 재는 시점만 다릅니다. `,-1)]]),_:1}))}},S=[{label:`Vue`,language:`xml`,code:`<template>
  <button type="button" @click="open">펼치기</button>
  <div v-show="isOpen" ref="panel" class="panel">…</div>
</template>

<script setup>
import { nextTick, ref, useTemplateRef } from 'vue'

const isOpen = ref(false)
const height = ref(0)
const panel = useTemplateRef('panel')

async function open() {
  isOpen.value = true
  // 상태를 바꿔도 화면(DOM)은 바로 바뀌지 않습니다. 반영된 뒤에 잽니다.
  await nextTick()
  height.value = panel.value.offsetHeight
}
<\/script>`},{label:`JavaScript`,language:`javascript`,code:`// 1) 보인 뒤에 잽니다. 스타일을 바꾼 직후 읽으면 브라우저가 배치를 다시 계산해 실제 값을 줍니다.
panel.hidden = false
const height = panel.offsetHeight

// 2) 보이지 않게 둔 채 잽니다. visibility: hidden은 자리(박스)는 만들고 그리지만 않습니다.
//    position: absolute는 넣지 않습니다. 너비가 내용 폭으로 줄어 줄바꿈과 높이가 달라집니다.
//    재고 바로 되돌리므로 그 사이 화면에 그려지지 않습니다.
const prevDisplay = panel.style.display
const prevVisibility = panel.style.visibility
panel.style.display = 'block' // 원래 flex 등이면 그 값으로
panel.style.visibility = 'hidden'
const hiddenHeight = panel.offsetHeight
// 바꾼 속성만 원래 값으로 되돌립니다. (cssText = ''는 다른 인라인 스타일까지 지웁니다.)
panel.style.display = prevDisplay
panel.style.visibility = prevVisibility

// 3) 크기가 바뀔 때마다 따라가야 하면 ResizeObserver
const observer = new ResizeObserver(([entry]) => {
  console.log(entry.contentRect.height)
})
observer.observe(panel)`},{label:`React (TSX)`,language:`typescript`,code:`import { useLayoutEffect, useRef, useState } from 'react'

function Panel({ isOpen }: { isOpen: boolean }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // 화면에 반영된 직후, 그리기 전에 실행됩니다.
  useLayoutEffect(() => {
    if (isOpen) setHeight(panelRef.current?.offsetHeight ?? 0)
  }, [isOpen])

  return (
    <div ref={panelRef} hidden={!isOpen}>
      …
    </div>
  )
}`}],C={class:`doc-body`},w={id:`section-0`},T={id:`section-1`},E={id:`section-2`},D={id:`section-3`},O={id:`section-4`},k={id:`section-6`},A={id:`section-7`},j=`hidden-size`,M=2,N=`숨긴 요소의 높이가 0으로 나올 때`,P=`숨긴 요소 크기 재기`,F=`display none 상태나 Vue에서 상태를 바꾼 직후에 높이를 재면 0이 나오는 이유를 이해하고, 화면 반영 뒤에 재기·visibility로 재기·ResizeObserver로 해결합니다.`,I=`펼친 패널의 높이를 쟀는데 0이 나온다면?
요소가 화면에 반영된 뒤에 재고 있는지 확인하세요.
`,L=`DOM`,R=`크기 측정`,z=[`JavaScript`,`offsetHeight`,`display none`,`nextTick`,`v-show`,`useLayoutEffect`,`ResizeObserver`,`아코디언`],B=`중급`,V=`약 11분`,H=[`display 속성`,`Vue 반응형 상태`],U=`await nextTick()`,W=`published`,G=`2026-11-13`,K=[`optional-chaining`,`event-delegation`],q=[{title:`Vue — nextTick`,url:`https://ko.vuejs.org/api/general.html#nexttick`},{title:`MDN — ResizeObserver`,url:`https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver`},{title:`MDN — HTMLElement.offsetHeight`,url:`https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/offsetHeight`}],J={__name:`hidden-size`,setup(r,{expose:l}){return l({frontmatter:{id:`hidden-size`,order:2,title:`숨긴 요소의 높이가 0으로 나올 때`,navTitle:`숨긴 요소 크기 재기`,summary:`display none 상태나 Vue에서 상태를 바꾼 직후에 높이를 재면 0이 나오는 이유를 이해하고, 화면 반영 뒤에 재기·visibility로 재기·ResizeObserver로 해결합니다.`,lead:`펼친 패널의 높이를 쟀는데 0이 나온다면?
요소가 화면에 반영된 뒤에 재고 있는지 확인하세요.
`,group:`DOM`,topic:`크기 측정`,tags:[`JavaScript`,`offsetHeight`,`display none`,`nextTick`,`v-show`,`useLayoutEffect`,`ResizeObserver`,`아코디언`],level:`중급`,duration:`약 11분`,prerequisites:[`display 속성`,`Vue 반응형 상태`],keyProperty:`await nextTick()`,status:`published`,updated:`2026-11-13`,related:[`optional-chaining`,`event-delegation`],references:[{title:`Vue — nextTick`,url:`https://ko.vuejs.org/api/general.html#nexttick`},{title:`MDN — ResizeObserver`,url:`https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver`},{title:`MDN — HTMLElement.offsetHeight`,url:`https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/offsetHeight`}]}}),(r,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`RouterLink`),_=c(`DocPractice`);return e(),a(`div`,C,[i(`section`,w,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,[s(`아코디언을 펼치면서 내용 높이를 재어 애니메이션 높이로 쓰려고 합니다. 그런데 `),i(`code`,null,`offsetHeight`),s(`가 항상 `),i(`code`,null,`0`),s(`이라 패널이 열리지 않거나, 두 번째 클릭부터만 정상으로 동작합니다.`)],-1),l[4]||=i(`p`,null,`작업 중에는 패널을 펼쳐 둔 채 확인하는 일이 많아 지나치기 쉽고, 페이지에 처음 들어와 누르는 QA에서 이런 형태로 돌아옵니다.`,-1),o(u,{title:`FAQ: 질문을 처음 누르면 답변이 펼쳐지지 않음`,env:`전체 브라우저 · 페이지 첫 진입 후 첫 클릭`,expected:`질문을 누르면 답변 높이만큼 부드럽게 펼쳐짐`,actual:`첫 클릭에는 높이 0으로 열리지 않고, 두 번째 클릭부터 정상`},{default:n(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`FAQ 화면에 새로 들어갑니다.`),i(`li`,null,`첫 번째 질문을 누릅니다.`),i(`li`,null,`답변 영역이 펼쳐지는지 확인합니다.`)],-1)]]),_:1}),o(f,null,{default:n(()=>[...l[1]||=[i(`p`,null,[s(`숨겨진 요소는 `),i(`strong`,null,`높이가 0`),s(`입니다. Vue에서는 `),i(`code`,null,`isOpen = true`),s(`로 바꾼 뒤 `),i(`strong`,null,[i(`code`,null,`await nextTick()`),s(`으로`)]),s(` 화면 반영을 기다리고 나서 재세요.`)],-1)]]),_:1})]),i(`section`,T,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[6]||=i(`p`,null,[s(`버튼을 누르면 두 패널이 같은 순간에 펼쳐집니다. 높이를 `),i(`strong`,null,`재는 시점만`),s(` 다릅니다.`)],-1),o(x)]),i(`section`,E,[l[8]||=i(`h2`,null,[i(`span`,{class:`section-no`},`03`),s(` 왜 0이 나올까요?`)],-1),l[9]||=i(`p`,null,`이유는 두 가지입니다.`,-1),o(p,null,{default:n(()=>[...l[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,[i(`code`,null,`display: none`),s(`은 자리를 만들지 않습니다.`)]),s(` 브라우저는 숨긴 요소의 박스를 배치하지 않으므로 `),i(`code`,null,`offsetHeight`),s(`, `),i(`code`,null,`getBoundingClientRect()`),s(`가 모두 0입니다. (`),i(`code`,null,`v-show`),s(`, `),i(`code`,null,`hidden`),s(` 속성도 `),i(`code`,null,`display: none`),s(`입니다.)`)]),i(`li`,null,[i(`strong`,null,`Vue는 화면을 한꺼번에 나중에 바꿉니다.`),s(),i(`code`,null,`isOpen.value = true`),s(`를 실행해도 DOM은 바로 바뀌지 않고, 같은 순서의 코드가 끝난 뒤 한 번에 반영됩니다. 그래서 바로 다음 줄에서 재면 아직 숨은 상태입니다.`)])],-1)]]),_:1}),l[10]||=d(`<p>순수 JavaScript는 다릅니다. <code>panel.hidden = false</code>처럼 스타일을 직접 바꾸면, 바로 다음 줄에서 <code>offsetHeight</code>를 읽을 때 브라우저가 배치를 다시 계산해 실제 값을 줍니다. 0이 나온다면 아직 숨긴 상태에서 재고 있는 것입니다.</p><div class="table-wrap"><table><thead><tr><th>상황</th><th>재는 시점</th></tr></thead><tbody><tr><td>Vue</td><td>상태를 바꾸고 <code>await nextTick()</code> 뒤</td></tr><tr><td>React</td><td><code>useLayoutEffect</code> 안 (화면 반영 직후, 그리기 전)</td></tr><tr><td>순수 JavaScript</td><td>숨김을 푼 직후 (같은 함수 안에서 바로 읽어도 됨)</td></tr><tr><td>숨긴 채로 알아야 할 때</td><td><code>display: block; visibility: hidden</code>으로 잠시 바꿔 재고, 바꾼 속성만 되돌리기</td></tr><tr><td>내용이 계속 바뀔 때</td><td><code>ResizeObserver</code>로 크기 변화를 따라가기</td></tr></tbody></table></div><p>숨긴 채로 잴 때 <code>position: absolute</code>까지 넣으면 너비가 내용 폭으로 줄어듭니다. 그러면 줄바꿈이 달라져 실제로 펼쳤을 때와 다른 높이가 나옵니다. 재고 바로 되돌리면 자리를 잠깐 차지해도 화면에 그려지지 않습니다.</p>`,3)]),i(`section`,D,[l[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[13]||=i(`p`,null,[s(`높이가 0으로 나올 때는 `),i(`strong`,null,`재는 순간에 요소가 어떤 상태인지`),s(`를 확인합니다. 그 순간에 멈춰서 보면 시점 문제인지 바로 알 수 있습니다.`)],-1),o(m,null,{default:n(()=>[...l[11]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`재는 줄에 중단점 걸기`),s(` Sources 패널에서 `),i(`code`,null,`offsetHeight`),s(`를 읽는 줄 번호를 눌러 중단점을 겁니다. 버튼을 누르면 그 줄에서 멈춥니다.`)]),i(`li`,null,[i(`strong`,null,`멈춘 상태로 Elements 확인`),s(` 패널 요소에 `),i(`code`,null,`style="display: none;"`),s(`이 남아 있다면 아직 숨은 상태에서 재고 있는 것입니다. `),i(`code`,null,`v-show`),s(`는 이 인라인 스타일로 요소를 숨깁니다.`)]),i(`li`,null,[i(`strong`,null,`Console에서 값 직접 읽기`),s(` Elements에서 패널을 선택하고 Console에 `),i(`code`,null,`$0.offsetHeight`),s(`, `),i(`code`,null,`getComputedStyle($0).display`),s(`를 입력합니다. `),i(`code`,null,`0`),s(`과 `),i(`code`,null,`'none'`),s(`이 나오면 원인이 확정됩니다.`)]),i(`li`,null,[i(`strong`,null,`실행을 이어 간 뒤 다시 읽기`),s(` Resume 버튼으로 실행을 이어 가고 같은 명령을 다시 입력합니다. 이번에 실제 높이가 나온다면 값이 아니라 재는 시점의 문제입니다.`)])],-1)]]),_:1})]),i(`section`,O,[l[14]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[15]||=i(`p`,null,`같은 문제를 Vue, 순수 JavaScript, React(TSX)에서 해결하는 방법입니다.`,-1),o(h,{tabs:t(S)},null,8,[`tabs`])]),l[27]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 원인(배치되지 않은 상태에서 재기)이 다른 화면에서도 나타납니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>숨은 탭·모달 안에서 초기화할 때</h3><p>요소 자신은 숨기지 않았어도 <strong>조상 중 하나가</strong> <code>display: none</code>이면 크기가 0입니다. 닫힌 탭 안의 슬라이더를 미리 초기화하면 너비가 0으로 계산됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">tabButton.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;click&#39;</span>, <span class="hljs-function">() =&gt;</span> {
  tabPanel.<span class="hljs-property">hidden</span> = <span class="hljs-literal">false</span>
  <span class="hljs-comment">// 탭이 보인 뒤에 초기화해야 슬라이더 너비가 제대로 계산됩니다.</span>
  <span class="hljs-title function_">initSlider</span>(tabPanel.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;.slider&#39;</span>))
})
</code></pre><h3><code>v-if</code>로 숨긴 경우</h3><p><code>v-if</code>는 요소를 아예 만들지 않습니다. 그래서 0이 아니라 ref가 <code>null</code>이고, 바로 재면 TypeError가 납니다. 해결 방법은 같습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">open</span>(<span class="hljs-params"></span>) {
  isOpen.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span> <span class="hljs-comment">// &lt;div v-if=&quot;isOpen&quot; ref=&quot;panel&quot;&gt;</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(panel.<span class="hljs-property">value</span>) <span class="hljs-comment">// null: 아직 요소가 만들어지지 않음</span>
  <span class="hljs-keyword">await</span> <span class="hljs-title function_">nextTick</span>()
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(panel.<span class="hljs-property">value</span>.<span class="hljs-property">offsetHeight</span>) <span class="hljs-comment">// 실제 높이</span>
}
</code></pre><h3>높이 0으로 접어 둔 경우</h3><p><code>display: none</code>이 아니라 <code>height: 0; overflow: hidden</code>으로 접었다면 박스는 배치되어 있습니다. 이때는 <code>scrollHeight</code>로 내용 높이를 바로 읽을 수 있습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// .panel { height: 0; overflow: hidden; transition: height 0.3s; }</span>
panel.<span class="hljs-property">style</span>.<span class="hljs-property">height</span> = <span class="hljs-string">\`<span class="hljs-subst">\${panel.scrollHeight}</span>px\`</span>
</code></pre></section>`,1),i(`section`,k,[l[24]||=i(`h2`,null,[i(`span`,{class:`section-no`},`07`),s(` 적용 시 주의점`)],-1),i(`ul`,null,[i(`li`,null,[l[17]||=i(`strong`,null,`CSS로 해결되면 재지 않습니다.`,-1),l[18]||=s(` 높이를 모르는 패널을 펼치는 애니메이션은 `,-1),o(g,{to:`/pub/css/grid-accordion`},{default:n(()=>[...l[16]||=[s(`아코디언 펼치기`,-1)]]),_:1}),l[19]||=s(`의 `,-1),l[20]||=i(`code`,null,`grid-template-rows: 0fr → 1fr`,-1),l[21]||=s(`처럼 JavaScript 없이 처리할 수 있습니다. 측정 코드는 화면 크기가 바뀔 때마다 다시 재야 해서 관리가 어렵습니다.`,-1)]),l[22]||=i(`li`,null,[i(`strong`,null,`재는 코드를 반복문 안에서 섞지 않습니다.`),s(` 여러 요소의 스타일을 바꾸고 높이를 읽는 일을 번갈아 하면 매번 배치 계산이 다시 일어나 느려집니다. 모두 바꾼 뒤 한 번에 읽습니다.`)],-1),l[23]||=i(`li`,null,[i(`strong`,null,`글꼴·이미지가 늦게 불러와지면 높이가 바뀝니다.`),s(` 처음 잰 값을 계속 쓰지 말고, 필요하면 `),i(`code`,null,`ResizeObserver`),s(`로 갱신합니다.`)],-1)])]),i(`section`,A,[l[26]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(_,null,{default:n(()=>[...l[25]||=[i(`p`,null,`위 예제에서 버튼을 누르고, 브라우저 창 너비를 바꿔 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문제 패널은 0, 해결 패널은 실제 높이가 나온다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`접었다가 창을 좁힌 뒤 다시 펼치면 해결 패널의 높이 값이 커진다(글이 더 많은 줄로 나뉘기 때문).`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`해결 코드 Vue 탭에서 `),i(`code`,null,`await nextTick()`),s(`을 지우면 어떤 값이 나올지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{J as default,V as duration,L as group,j as id,U as keyProperty,I as lead,B as level,P as navTitle,M as order,H as prerequisites,q as references,K as related,W as status,F as summary,z as tags,N as title,R as topic,G as updated};