import{E as e,F as t,H as n,I as r,O as i,R as a,c as o,f as s,l as c,m as l,ot as u,p as d,r as f,s as p,u as m,w as h,x as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{f as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y={class:`demo-hs-result`,role:`status`},b={key:0},x={__name:`HiddenSizeDemo`,setup(n){let i=[`접힌 영역의 높이를 알아야 펼침 애니메이션이나 스크롤 위치를 계산할 수 있습니다.`,`숨겨진(display: none) 요소는 화면에 자리를 만들지 않아 높이가 0입니다.`],s=e=>e?`solved`:`problem`,l=a({problem:!1,solved:!1}),x=a({problem:null,solved:null}),S={};async function C(){l.problem=!0,x.problem=S.problem.offsetHeight,l.solved=!0,await g(),x.solved=S.solved.offsetHeight}function w(){l.problem=!1,l.solved=!1,x.problem=null,x.solved=null}return(n,a)=>(h(),o(v,{problem:{code:`isOpen = true → 바로 재기`,note:`아직 display: none이라 0이 나옵니다.`},solved:{code:`isOpen = true → nextTick 뒤 재기`,note:`화면에 반영된 뒤라 실제 높이가 나옵니다.`}},{controls:t(()=>[a[0]||=p(`span`,{class:`demo-label`},`조작`,-1),p(`div`,{class:`sample-buttons`},[p(`button`,{type:`button`,onClick:C},`두 패널 펼치고 높이 재기`),p(`button`,{type:`button`,onClick:w},`접기`)])]),default:t(({solved:t})=>[p(`p`,y,[a[1]||=d(` 잰 높이 `,-1),p(`strong`,null,u(x[s(t)]??`—`),1),x[s(t)]===null?c(``,!0):(h(),m(`span`,b,`px`))]),r(p(`div`,{ref:e=>S[s(t)]=e,class:`demo-hs-panel`},[(h(),m(f,null,e(i,e=>p(`p`,{key:e},u(e),1)),64))],512),[[_,l[s(t)]]])]),caption:t(()=>[...a[2]||=[d(` 두 패널은 같은 내용입니다. 높이를 재는 시점만 다릅니다. `,-1)]]),_:1}))}},S=[{label:`Vue`,language:`xml`,code:`<template>
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
panel.style.cssText = 'display: block; visibility: hidden; position: absolute;'
const hiddenHeight = panel.offsetHeight
panel.style.cssText = ''

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
}`}],C={class:`doc-body`},w={id:`section-0`},T={id:`section-1`},E={id:`section-2`},D={id:`section-3`},O={id:`section-4`},k={id:`section-5`},A=`hidden-size`,j=2,M=`숨긴 요소의 높이가 0으로 나올 때`,N=`숨긴 요소 크기 재기`,P=`display none 상태나 Vue에서 상태를 바꾼 직후에 높이를 재면 0이 나오는 이유를 이해하고, 화면 반영 뒤에 재기·visibility로 재기·ResizeObserver로 해결합니다.`,F=`펼친 패널의 높이를 쟀는데 0이 나온다면?
요소가 화면에 반영된 뒤에 재고 있는지 확인하세요.
`,I=`DOM`,L=`크기 측정`,R=[`JavaScript`,`offsetHeight`,`display none`,`nextTick`,`v-show`,`useLayoutEffect`,`ResizeObserver`,`아코디언`],z=`중급`,B=`약 7분`,V=[`display 속성`,`Vue 반응형 상태`],H=`await nextTick()`,U=`published`,W=`2026-11-05`,G=[`optional-chaining`,`event-delegation`],K=[{title:`Vue — nextTick`,url:`https://ko.vuejs.org/api/general.html#nexttick`},{title:`MDN — ResizeObserver`,url:`https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver`},{title:`MDN — HTMLElement.offsetHeight`,url:`https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/offsetHeight`}],q={__name:`hidden-size`,setup(e,{expose:r}){return r({frontmatter:{id:`hidden-size`,order:2,title:`숨긴 요소의 높이가 0으로 나올 때`,navTitle:`숨긴 요소 크기 재기`,summary:`display none 상태나 Vue에서 상태를 바꾼 직후에 높이를 재면 0이 나오는 이유를 이해하고, 화면 반영 뒤에 재기·visibility로 재기·ResizeObserver로 해결합니다.`,lead:`펼친 패널의 높이를 쟀는데 0이 나온다면?
요소가 화면에 반영된 뒤에 재고 있는지 확인하세요.
`,group:`DOM`,topic:`크기 측정`,tags:[`JavaScript`,`offsetHeight`,`display none`,`nextTick`,`v-show`,`useLayoutEffect`,`ResizeObserver`,`아코디언`],level:`중급`,duration:`약 7분`,prerequisites:[`display 속성`,`Vue 반응형 상태`],keyProperty:`await nextTick()`,status:`published`,updated:`2026-11-05`,related:[`optional-chaining`,`event-delegation`],references:[{title:`Vue — nextTick`,url:`https://ko.vuejs.org/api/general.html#nexttick`},{title:`MDN — ResizeObserver`,url:`https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver`},{title:`MDN — HTMLElement.offsetHeight`,url:`https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/offsetHeight`}]}}),(e,r)=>{let a=i(`DocTakeaway`),o=i(`DocSteps`),c=i(`CodePanel`),u=i(`RouterLink`),f=i(`DocPractice`);return h(),m(`div`,C,[p(`section`,w,[r[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[2]||=p(`p`,null,[d(`아코디언을 펼치면서 내용 높이를 재어 애니메이션 높이로 쓰려고 합니다. 그런데 `),p(`code`,null,`offsetHeight`),d(`가 항상 `),p(`code`,null,`0`),d(`이라 패널이 열리지 않거나, 두 번째 클릭부터만 정상으로 동작합니다.`)],-1),l(a,null,{default:t(()=>[...r[0]||=[p(`p`,null,[d(`숨겨진 요소는 `),p(`strong`,null,`높이가 0`),d(`입니다. Vue에서는 `),p(`code`,null,`isOpen = true`),d(`로 바꾼 뒤 `),p(`strong`,null,[p(`code`,null,`await nextTick()`),d(`으로`)]),d(` 화면 반영을 기다리고 나서 재세요.`)],-1)]]),_:1})]),p(`section`,T,[r[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=p(`p`,null,[d(`버튼을 누르면 두 패널이 같은 순간에 펼쳐집니다. 높이를 `),p(`strong`,null,`재는 시점만`),d(` 다릅니다.`)],-1),l(x)]),p(`section`,E,[r[6]||=p(`h2`,null,[p(`span`,{class:`section-no`},`03`),d(` 왜 0이 나올까요?`)],-1),r[7]||=p(`p`,null,`이유는 두 가지입니다.`,-1),l(o,null,{default:t(()=>[...r[5]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,[p(`code`,null,`display: none`),d(`은 자리를 만들지 않습니다.`)]),d(` 브라우저는 숨긴 요소의 박스를 배치하지 않으므로 `),p(`code`,null,`offsetHeight`),d(`, `),p(`code`,null,`getBoundingClientRect()`),d(`가 모두 0입니다. (`),p(`code`,null,`v-show`),d(`, `),p(`code`,null,`hidden`),d(` 속성도 `),p(`code`,null,`display: none`),d(`입니다.)`)]),p(`li`,null,[p(`strong`,null,`Vue는 화면을 한꺼번에 나중에 바꿉니다.`),d(),p(`code`,null,`isOpen.value = true`),d(`를 실행해도 DOM은 바로 바뀌지 않고, 같은 순서의 코드가 끝난 뒤 한 번에 반영됩니다. 그래서 바로 다음 줄에서 재면 아직 숨은 상태입니다.`)])],-1)]]),_:1}),r[8]||=s(`<p>순수 JavaScript는 다릅니다. <code>panel.hidden = false</code>처럼 스타일을 직접 바꾸면, 바로 다음 줄에서 <code>offsetHeight</code>를 읽을 때 브라우저가 배치를 다시 계산해 실제 값을 줍니다. 0이 나온다면 아직 숨긴 상태에서 재고 있는 것입니다.</p><div class="table-wrap"><table><thead><tr><th>상황</th><th>재는 시점</th></tr></thead><tbody><tr><td>Vue</td><td>상태를 바꾸고 <code>await nextTick()</code> 뒤</td></tr><tr><td>React</td><td><code>useLayoutEffect</code> 안 (화면 반영 직후, 그리기 전)</td></tr><tr><td>순수 JavaScript</td><td>숨김을 푼 직후 (같은 함수 안에서 바로 읽어도 됨)</td></tr><tr><td>숨긴 채로 알아야 할 때</td><td><code>visibility: hidden; position: absolute</code>로 잠시 바꿔 재고 되돌리기</td></tr><tr><td>내용이 계속 바뀔 때</td><td><code>ResizeObserver</code>로 크기 변화를 따라가기</td></tr></tbody></table></div>`,2)]),p(`section`,D,[r[9]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 해결 코드`)],-1),r[10]||=p(`p`,null,`같은 문제를 Vue, 순수 JavaScript, React(TSX)에서 해결하는 방법입니다.`,-1),l(c,{tabs:n(S)},null,8,[`tabs`])]),p(`section`,O,[r[19]||=p(`h2`,null,[p(`span`,{class:`section-no`},`05`),d(` 적용 시 주의점`)],-1),p(`ul`,null,[p(`li`,null,[r[12]||=p(`strong`,null,`CSS로 해결되면 재지 않습니다.`,-1),r[13]||=d(` 높이를 모르는 패널을 펼치는 애니메이션은 `,-1),l(u,{to:`/pub/css/grid-accordion`},{default:t(()=>[...r[11]||=[d(`아코디언 펼치기`,-1)]]),_:1}),r[14]||=d(`의 `,-1),r[15]||=p(`code`,null,`grid-template-rows: 0fr → 1fr`,-1),r[16]||=d(`처럼 JavaScript 없이 처리할 수 있습니다. 측정 코드는 화면 크기가 바뀔 때마다 다시 재야 해서 관리가 어렵습니다.`,-1)]),r[17]||=p(`li`,null,[p(`strong`,null,`재는 코드를 반복문 안에서 섞지 않습니다.`),d(` 여러 요소의 스타일을 바꾸고 높이를 읽는 일을 번갈아 하면 매번 배치 계산이 다시 일어나 느려집니다. 모두 바꾼 뒤 한 번에 읽습니다.`)],-1),r[18]||=p(`li`,null,[p(`strong`,null,`글꼴·이미지가 늦게 불러와지면 높이가 바뀝니다.`),d(` 처음 잰 값을 계속 쓰지 말고, 필요하면 `),p(`code`,null,`ResizeObserver`),d(`로 갱신합니다.`)],-1)])]),p(`section`,k,[r[21]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),d(` 짧은 실습`)],-1),l(f,null,{default:t(()=>[...r[20]||=[p(`p`,null,`위 예제에서 버튼을 누르고, 브라우저 창 너비를 바꿔 보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문제 패널은 0, 해결 패널은 실제 높이가 나온다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`접었다가 창을 좁힌 뒤 다시 펼치면 해결 패널의 높이 값이 커진다(글이 더 많은 줄로 나뉘기 때문).`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},[d(`해결 코드 Vue 탭에서 `),p(`code`,null,`await nextTick()`),d(`을 지우면 어떤 값이 나올지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{q as default,B as duration,I as group,A as id,H as keyProperty,F as lead,z as level,N as navTitle,j as order,V as prerequisites,K as references,G as related,U as status,P as summary,R as tags,M as title,L as topic,W as updated};