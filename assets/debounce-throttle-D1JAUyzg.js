import{D as e,G as t,H as n,L as r,R as i,T as a,V as o,c as s,d as c,ft as l,g as u,h as d,j as f,k as p,l as m,m as h,pt as g,r as _,s as ee,u as te,ut as v,z as y}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as b}from"./index-Dxflp_jg.js";import{t as ne}from"./DemoCompare-Bd6h8ThJ.js";function x(e,t){let n=null,r=(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)};return r.cancel=()=>clearTimeout(n),r}function S(e,t){let n=0,r=null,i=null,a=(...a)=>{i=a;let o=t-(Date.now()-n);o<=0?(clearTimeout(r),r=null,n=Date.now(),e(...a)):r||=setTimeout(()=>{n=Date.now(),r=null,e(...i)},o)};return a.cancel=()=>{clearTimeout(r),r=null},a}var re=e=>[0,2500,1500,900][e.length]??300,C=[{label:`해결 코드 (디바운스)`,language:`javascript`,code:`// 입력이 멈추고 wait(ms)가 지나면 마지막 값으로 한 번만 실행합니다.
function debounce(fn, wait) {
  let timer = null
  const debounced = (...args) => {
    clearTimeout(timer) // 앞에서 예약한 실행을 취소하고
    timer = setTimeout(() => fn(...args), wait) // 다시 예약합니다.
  }
  debounced.cancel = () => clearTimeout(timer)
  return debounced
}

const input = document.querySelector('#search')
const status = document.querySelector('.search-status')
let controller = null

async function search(keyword) {
  // 진행 중인 이전 요청을 취소해, 늦게 도착한 옛 결과가 최신 결과를 덮어쓰지 않게 합니다.
  controller?.abort()
  if (!keyword) return renderResult([])

  controller = new AbortController()
  status.textContent = '검색 중…'
  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(keyword)}\`, {
      signal: controller.signal,
    })
    const items = await res.json()
    status.textContent = \`\${items.length}건\`
    renderResult(items)
  } catch (error) {
    if (error.name === 'AbortError') return // 취소한 요청은 무시합니다.
    status.textContent = '검색하지 못했습니다.'
  }
}

const debouncedSearch = debounce((value) => search(value.trim()), 300)
input.addEventListener('input', (event) => debouncedSearch(event.target.value))

// 창 크기 조절이 끝난 뒤 한 번만 다시 계산합니다.
window.addEventListener('resize', debounce(updateLayout, 200))`},{label:`해결 코드 (스로틀)`,language:`javascript`,code:`// 마지막 실행 뒤 wait(ms)가 지나야 다시 실행합니다.
// 간격 안에 들어온 마지막 값은 기다렸다가 한 번 더 실행합니다(끝 값을 놓치지 않음).
function throttle(fn, wait) {
  let last = 0
  let timer = null
  let lastArgs = null
  const throttled = (...args) => {
    lastArgs = args
    const remaining = wait - (Date.now() - last)
    if (remaining <= 0) {
      clearTimeout(timer)
      timer = null
      last = Date.now()
      fn(...args)
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now()
        timer = null
        fn(...lastArgs)
      }, remaining)
    }
  }
  throttled.cancel = () => {
    clearTimeout(timer)
    timer = null
  }
  return throttled
}

// 드래그하는 동안 위치 저장은 200ms에 한 번만 합니다.
const range = document.querySelector('#position')
const savePosition = throttle((value) => sendPosition(value), 200)
range.addEventListener('input', (event) => savePosition(event.target.value))

// 스크롤하는 동안 현재 위치에 맞춰 목차 강조를 바꿉니다.
window.addEventListener('scroll', throttle(updateActiveToc, 100))`},{label:`requestAnimationFrame`,language:`javascript`,code:`// 화면을 다시 그리는 일은 프레임마다 한 번이면 충분합니다.
function rafThrottle(fn) {
  let frame = 0
  let lastArgs = null
  const throttled = (...args) => {
    lastArgs = args
    if (frame) return // 이번 프레임에 이미 예약되어 있으면 값만 바꿉니다.
    frame = requestAnimationFrame(() => {
      frame = 0
      fn(...lastArgs)
    })
  }
  throttled.cancel = () => {
    cancelAnimationFrame(frame)
    frame = 0
  }
  return throttled
}

const handle = document.querySelector('.drag-handle')
const moveHandle = rafThrottle((x) => {
  handle.style.transform = \`translateX(\${x}px)\`
})

handle.addEventListener('pointerdown', (event) => handle.setPointerCapture(event.pointerId))
handle.addEventListener('pointermove', (event) => {
  if (handle.hasPointerCapture(event.pointerId)) moveHandle(event.clientX)
})`},{label:`문제 코드`,language:`javascript`,code:`// 글자를 입력할 때마다 요청합니다.
// 응답은 보낸 순서가 아니라 도착한 순서로 처리되어, 옛 결과가 최신 결과를 덮어쓸 수 있습니다.
input.addEventListener('input', async (event) => {
  const res = await fetch(\`/api/search?q=\${encodeURIComponent(event.target.value)}\`)
  renderResult(await res.json())
})

// 드래그하는 동안 input 이벤트마다 저장 요청을 보냅니다.
range.addEventListener('input', (event) => sendPosition(event.target.value))

// 창 크기를 조절하는 동안 1초에 수십 번 다시 계산합니다.
window.addEventListener('resize', updateLayout)`},{label:`HTML`,language:`xml`,code:`<label for="search">상품 검색</label>
<input id="search" type="search" autocomplete="off">
<p class="search-status" aria-live="polite"></p>
<ul class="search-result"></ul>

<label for="position">위치</label>
<input id="position" type="range" min="0" max="100" value="50">`}],w={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-db-mode-label`},ie=[`aria-checked`,`onClick`],ae=[`value`],oe={for:`demo-db-delay`},se={for:`demo-db-drag`},ce=[`value`],le={for:`demo-db-wait`},ue={class:`demo-db-count`},de={class:`demo-db-count-run`},fe={class:`demo-db-timeline`,"aria-hidden":`true`},pe={class:`demo-db-track`},me={class:`demo-db-lane`},he={class:`demo-db-track`},ge={class:`demo-db-lane`},_e={key:2},ve={class:`demo-db-log`},ye={key:1,class:`demo-db-result`},T=4e3,be=4,E={__name:`DebounceThrottleDemo`,setup(t){let u=[{value:`search`,label:`검색 입력 (디바운스)`},{value:`drag`,label:`슬라이더 드래그 (스로틀)`}],f={pending:`응답 대기`,done:`도착`,aborted:`취소됨`},h=e=>e?`solved`:`problem`,C=n(`search`),E=n(``),D=n(300),O=n(50),k=n(200),A=o({inputs:0,problem:0,solved:0}),j=o({start:0,last:0,inputs:[],problem:[],solved:[]}),M=o({problem:null,solved:null}),N=o({problem:0,solved:0}),P=o({problem:[],solved:[]}),F=o({problem:null,solved:null}),I=ee(()=>C.value===`search`?{problem:{code:`input마다 fetch`,note:`글자마다 요청하고, 늦게 온 옛 응답이 결과를 덮어쓸 수 있습니다.`},solved:{code:`debounce(${D.value}ms) + abort`,note:`입력이 멈춘 뒤 한 번만 요청하고, 이전 요청은 취소합니다.`}}:{problem:{code:`input마다 저장`,note:`드래그하는 동안 이벤트마다 저장 처리를 실행합니다.`},solved:{code:`throttle(${k.value}ms)`,note:`간격마다 한 번만 실행하고, 멈춘 뒤 마지막 값도 저장합니다.`}}),L=0;function R(e){let t=performance.now();!j.last||t-j.last>T?(j.inputs=[],j.problem=[],j.solved=[],j.start=t-100):t>j.start+T&&(j.start=t-T),j.last=t,j[e].push({id:++L,t});for(let e of[`inputs`,`problem`,`solved`])j[e][0]?.t<j.start&&(j[e]=j[e].filter(e=>e.t>=j.start))}let z=e=>`calc(${(e-j.start)/T} * (100% - 8px))`,B=new Set,V=null,H=0,U=0;function W(e,t){return new Promise((n,r)=>{let i=setTimeout(()=>{B.delete(i),t?.removeEventListener(`abort`,a),n(e)},re(e));B.add(i);function a(){clearTimeout(i),B.delete(i),r(new DOMException(`요청 취소`,`AbortError`))}t?.addEventListener(`abort`,a,{once:!0})})}async function G(e,t){let n=t.trim();if(e===`solved`&&V?.abort(),!n){M[e]=null;return}A[e]+=1,R(e);let r;e===`solved`&&(V=new AbortController,r=V.signal),P[e].unshift({id:++H,keyword:n,state:`pending`}),P[e].splice(be);let i=P[e][0],a=U;N[e]+=1;try{let t=await W(n,r);if(a!==U)return;M[e]=t,i.state=`done`}catch(e){if(e.name!==`AbortError`)throw e;a===U&&(i.state=`aborted`)}finally{a===U&&--N[e]}}let K=e=>M[e]!==null&&M[e]!==E.value.trim()&&N[e]===0,q=x(e=>G(`solved`,e),D.value);r(D,e=>{q.cancel(),q=x(e=>G(`solved`,e),e)});function J(e){E.value=e.target.value,A.inputs+=1,R(`inputs`),G(`problem`,E.value),q(E.value)}function Y(e,t){A[e]+=1,R(e),F[e]=t}let X=S(e=>Y(`solved`,e),k.value);r(k,e=>{X.cancel(),X=S(e=>Y(`solved`,e),e)});function Z(e){O.value=Number(e.target.value),A.inputs+=1,R(`inputs`),Y(`problem`,O.value),X(O.value)}function Q(){U+=1,q.cancel(),X.cancel(),V?.abort(),V=null,B.forEach(e=>clearTimeout(e)),B.clear()}function $(){Q(),Object.assign(A,{inputs:0,problem:0,solved:0}),Object.assign(j,{start:0,last:0,inputs:[],problem:[],solved:[]}),Object.assign(M,{problem:null,solved:null}),Object.assign(N,{problem:0,solved:0}),Object.assign(P,{problem:[],solved:[]}),Object.assign(F,{problem:null,solved:null}),E.value=``}function xe(e){C.value!==e&&($(),C.value=e)}return a(Q),(t,n)=>(e(),m(ne,{problem:I.value.problem,solved:I.value.solved},{controls:i(()=>[n[6]||=s(`span`,{id:`demo-db-mode-label`,class:`demo-label`},`상황`,-1),s(`div`,w,[(e(),c(_,null,p(u,e=>s(`button`,{key:e.value,type:`button`,role:`radio`,"aria-checked":C.value===e.value,onClick:t=>xe(e.value)},g(e.label),9,ie)),64))]),C.value===`search`?(e(),c(_,{key:0},[n[3]||=s(`label`,{for:`demo-db-query`},`검색어`,-1),s(`input`,{id:`demo-db-query`,value:E.value,type:`text`,autocomplete:`off`,placeholder:`빠르게 입력해 보세요`,onInput:J},null,40,ae),s(`label`,oe,[n[2]||=d(`디바운스 지연 `,-1),s(`strong`,null,g(D.value)+`ms`,1)]),y(s(`input`,{id:`demo-db-delay`,"onUpdate:modelValue":n[0]||=e=>D.value=e,type:`range`,min:`100`,max:`800`,step:`50`},null,512),[[b,D.value,void 0,{number:!0}]])],64)):(e(),c(_,{key:1},[s(`label`,se,[n[4]||=d(`끌어 보기 `,-1),s(`strong`,null,g(O.value),1)]),s(`input`,{id:`demo-db-drag`,value:O.value,type:`range`,min:`0`,max:`100`,onInput:Z},null,40,ce),s(`label`,le,[n[5]||=d(`스로틀 간격 `,-1),s(`strong`,null,g(k.value)+`ms`,1)]),y(s(`input`,{id:`demo-db-wait`,"onUpdate:modelValue":n[1]||=e=>k.value=e,type:`range`,min:`100`,max:`800`,step:`50`},null,512),[[b,k.value,void 0,{number:!0}]])],64)),n[7]||=s(`span`,{class:`demo-label`},`기록`,-1),s(`div`,{class:`sample-buttons`},[s(`button`,{type:`button`,onClick:$},`기록 지우기`)])]),default:i(({solved:t})=>[s(`p`,ue,[n[8]||=d(` 이벤트 `,-1),s(`strong`,null,g(A.inputs)+`회`,1),d(` · `+g(C.value===`search`?`요청`:`처리`)+` `,1),s(`strong`,de,g(A[h(t)])+`회`,1)]),s(`div`,fe,[s(`div`,pe,[n[9]||=s(`span`,{class:`demo-db-track-label`},`이벤트`,-1),s(`span`,me,[(e(!0),c(_,null,p(j.inputs,t=>(e(),c(`i`,{key:t.id,class:`demo-db-dot`,style:l({left:z(t.t)})},null,4))),128))])]),s(`div`,he,[n[10]||=s(`span`,{class:`demo-db-track-label`},`실행`,-1),s(`span`,ge,[(e(!0),c(_,null,p(j[h(t)],t=>(e(),c(`i`,{key:t.id,class:`demo-db-dot demo-db-dot-run`,style:l({left:z(t.t)})},null,4))),128))])])]),C.value===`search`?(e(),c(_,{key:0},[s(`p`,{class:v([`demo-db-result`,{"is-stale":K(h(t))}])},[M[h(t)]===null?(e(),c(_,{key:0},[d(`표시된 결과 없음`)],64)):(e(),c(_,{key:1},[d(`‘`+g(M[h(t)])+`’ 검색 결과 표시 중`,1)],64)),K(h(t))?(e(),c(`b`,_e,`입력과 다름`)):te(``,!0)],2),s(`ol`,ve,[(e(!0),c(_,null,p(P[h(t)],t=>(e(),c(`li`,{key:t.id,class:v(`is-${t.state}`)},[s(`span`,null,`#`+g(t.id)+` ‘`+g(t.keyword)+`’`,1),s(`span`,null,g(f[t.state]),1)],2))),128))])],64)):(e(),c(`p`,ye,[n[11]||=d(` 마지막으로 저장한 위치 `,-1),s(`strong`,null,g(F[h(t)]??`—`),1)]))]),caption:i(()=>[...n[12]||=[d(` 점 하나가 이벤트 또는 실행 한 번이며, 최근 4초만 보입니다. 검색 응답은 시뮬레이션으로, 짧은 검색어일수록 늦게 도착하게 만들었습니다(1글자 2.5초, 2글자 1.5초, 3글자 0.9초, 4글자 이상 0.3초). 해결 쪽 검색은 디바운스와 함께 `,-1),s(`code`,null,`AbortController`,-1),d(`로 이전 요청을 취소합니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-5`},P={id:`section-7`},F=`debounce-throttle`,I=6,L=`입력·resize 이벤트가 너무 자주 실행될 때 (디바운스·스로틀)`,R=`디바운스·스로틀`,z=`글자마다 요청하는 검색창, 1초에 수십 번 실행되는 resize·드래그 처리를 디바운스(멈춘 뒤 한 번)와 스로틀(간격마다 한 번)로 줄이고, 늦게 온 옛 응답은 AbortController로 취소합니다.`,B=`검색어를 입력할 때마다 요청이 쌓이고, 엉뚱한 결과가 보인다면?
멈춘 뒤 한 번은 디바운스, 간격마다 한 번은 스로틀로 실행 횟수를 줄이세요.
`,V=`성능`,H=`이벤트`,U=[`JavaScript`,`디바운스`,`스로틀`,`debounce`,`throttle`,`setTimeout`,`clearTimeout`,`AbortController`,`requestAnimationFrame`,`검색`,`resize`,`성능`],W=`중급`,G=`약 12분`,K=[`addEventListener`,`setTimeout`,`fetch`],q=`debounce · throttle`,J=`fe`,Y=`published`,X=`2026-11-13`,Z=[`scroll-observer`,`event-delegation`],Q=[{title:`MDN — Debounce`,url:`https://developer.mozilla.org/en-US/docs/Glossary/Debounce`},{title:`MDN — Throttle`,url:`https://developer.mozilla.org/en-US/docs/Glossary/Throttle`},{title:`MDN — AbortController`,url:`https://developer.mozilla.org/ko/docs/Web/API/AbortController`},{title:`MDN — Window.requestAnimationFrame()`,url:`https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame`}],$={__name:`debounce-throttle`,setup(n,{expose:r}){return r({frontmatter:{id:`debounce-throttle`,order:6,title:`입력·resize 이벤트가 너무 자주 실행될 때 (디바운스·스로틀)`,navTitle:`디바운스·스로틀`,summary:`글자마다 요청하는 검색창, 1초에 수십 번 실행되는 resize·드래그 처리를 디바운스(멈춘 뒤 한 번)와 스로틀(간격마다 한 번)로 줄이고, 늦게 온 옛 응답은 AbortController로 취소합니다.`,lead:`검색어를 입력할 때마다 요청이 쌓이고, 엉뚱한 결과가 보인다면?
멈춘 뒤 한 번은 디바운스, 간격마다 한 번은 스로틀로 실행 횟수를 줄이세요.
`,group:`성능`,topic:`이벤트`,tags:[`JavaScript`,`디바운스`,`스로틀`,`debounce`,`throttle`,`setTimeout`,`clearTimeout`,`AbortController`,`requestAnimationFrame`,`검색`,`resize`,`성능`],level:`중급`,duration:`약 12분`,prerequisites:[`addEventListener`,`setTimeout`,`fetch`],keyProperty:`debounce · throttle`,scope:`fe`,status:`published`,updated:`2026-11-13`,related:[`scroll-observer`,`event-delegation`],references:[{title:`MDN — Debounce`,url:`https://developer.mozilla.org/en-US/docs/Glossary/Debounce`},{title:`MDN — Throttle`,url:`https://developer.mozilla.org/en-US/docs/Glossary/Throttle`},{title:`MDN — AbortController`,url:`https://developer.mozilla.org/ko/docs/Web/API/AbortController`},{title:`MDN — Window.requestAnimationFrame()`,url:`https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame`}]}}),(n,r)=>{let a=f(`DocIssue`),o=f(`DocTakeaway`),l=f(`DocSteps`),p=f(`DocInspect`),m=f(`CodePanel`),g=f(`RouterLink`),_=f(`DocPractice`);return e(),c(`div`,D,[s(`section`,O,[r[2]||=s(`h2`,null,[s(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[3]||=s(`p`,null,[d(`상품 검색창에 입력하는 대로 결과를 보여 주는 기능을 만들었습니다. `),s(`code`,null,`input`),d(` 이벤트마다 검색 API를 부르는데, 빠르게 입력하면 `),s(`strong`,null,`입력한 검색어와 다른 결과가 보이고`),d(`, 서버 쪽에서는 검색 요청이 갑자기 늘었다는 문의가 옵니다. 창 크기에 맞춰 배치를 다시 계산하는 `),s(`code`,null,`resize`),d(` 처리도 크기를 조절하는 동안 화면이 버벅입니다.`)],-1),r[4]||=s(`p`,null,`로컬 개발 서버는 응답이 빨라 순서가 뒤바뀌는 일이 드물어서 지나치기 쉽고, 실제 서버와 모바일 네트워크로 확인하는 QA에서 이런 형태로 돌아옵니다.`,-1),u(a,{title:`상품 검색: 빠르게 입력하면 입력한 검색어와 다른 결과가 보임`,env:`전체 브라우저 · 검색창에 빠르게 연속 입력 · 느린 네트워크에서 더 자주 발생`,expected:`마지막으로 입력한 검색어의 결과만 표시됨`,actual:`입력 중간 단계 검색어의 결과가 늦게 도착해 최신 결과를 덮어씀, Network 패널에 글자 수만큼 요청이 쌓임`},{default:i(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,`상품 검색 화면을 엽니다.`),s(`li`,null,[d(`검색창에 `),s(`code`,null,`running shoes`),d(`를 쉬지 않고 빠르게 입력합니다.`)]),s(`li`,null,`입력을 멈추고 결과 목록이 마지막 검색어의 결과인지 확인합니다.`)],-1)]]),_:1}),u(o,null,{default:i(()=>[...r[1]||=[s(`p`,null,[d(`입력이 `),s(`strong`,null,`멈춘 뒤 한 번`),d(` 실행하려면 디바운스, 계속 일어나는 이벤트를 `),s(`strong`,null,`일정 간격마다 한 번`),d(`으로 줄이려면 스로틀을 씁니다. 늦게 도착한 옛 응답은 `),s(`code`,null,`AbortController`),d(`로 취소합니다.`)],-1)]]),_:1})]),s(`section`,k,[r[5]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=s(`p`,null,`‘검색 입력’에서 검색어를 빠르게 입력하고, ‘슬라이더 드래그’에서 슬라이더를 끌어 보세요. 이벤트 수는 같고, 실행 횟수만 다릅니다.`,-1),u(E)]),s(`section`,A,[r[8]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>input</code> 이벤트는 값이 바뀔 때마다 발생합니다. 한글은 자음·모음을 조합하는 단계마다 발생하기도 해서, ‘검색’ 두 글자에도 이벤트가 여러 번 생깁니다. <code>resize</code>·<code>scroll</code>·<code>pointermove</code>는 움직이는 동안 화면을 그릴 때마다(보통 1초에 수십 번) 발생합니다. 처리 함수가 요청을 보내거나 배치를 계산하면 그 횟수만큼 그대로 실행됩니다.</p><p>요청은 <strong>보낸 순서가 아니라 도착한 순서</strong>로 끝납니다. 짧은 검색어는 결과가 많아 응답이 늦을 수 있어서, 먼저 보낸 <code>r</code>의 결과가 나중에 보낸 <code>running shoes</code>의 결과 뒤에 도착하면 화면이 옛 결과로 바뀝니다.</p>`,3),u(l,null,{default:i(()=>[...r[7]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`디바운스`),d(` 이벤트마다 `),s(`code`,null,`clearTimeout`),d(` 후 `),s(`code`,null,`setTimeout`),d(` 다시 예약 → 멈춘 뒤 한 번`)]),s(`li`,null,[s(`strong`,null,`스로틀`),d(` 마지막 실행 시각과 비교 → 간격(`),s(`code`,null,`wait`),d(`)마다 한 번`)]),s(`li`,null,[s(`strong`,null,`requestAnimationFrame`),d(` 프레임마다 한 번 → 화면 갱신용`)])],-1)]]),_:1}),r[9]||=h(`<div class="table-wrap"><table><thead><tr><th>하고 싶은 일</th><th>쓰는 방법</th></tr></thead><tbody><tr><td>검색어 자동완성, 입력 내용 자동 저장, 입력값 검사</td><td>디바운스 (입력이 멈춘 뒤 한 번)</td></tr><tr><td>창 크기 조절이 <strong>끝난 뒤</strong> 배치 다시 계산</td><td>디바운스</td></tr><tr><td>스크롤 위치에 따른 목차 강조, 드래그 중 위치 저장</td><td>스로틀 (일정 간격마다 한 번)</td></tr><tr><td>드래그 손잡이 이동처럼 화면을 그리는 일</td><td><code>requestAnimationFrame</code> (프레임마다 한 번)</td></tr></tbody></table></div>`,1)]),s(`section`,j,[r[11]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),r[12]||=s(`p`,null,[d(`화면이 버벅이거나 결과가 뒤섞일 때는 `),s(`strong`,null,`이벤트 하나에 처리가 몇 번 실행되는지`),d(`부터 셉니다. 요청 수와 응답 순서는 Network 패널에서 바로 보입니다.`)],-1),u(p,null,{default:i(()=>[...r[10]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Network 패널에서 요청 수 확인`),d(` Network 패널에서 `),s(`code`,null,`Fetch/XHR`),d(` 필터를 켜고 검색창에 입력합니다. 글자를 입력할 때마다 행이 하나씩 늘면 이벤트마다 요청하는 것입니다. 네트워크 속도 목록에서 `),s(`code`,null,`Slow 4G`),d(`를 고르면 응답이 겹쳐 순서가 바뀌는 상황을 재현하기 쉽습니다.`)]),s(`li`,null,[s(`strong`,null,`Waterfall에서 응답 순서 확인`),s(`code`,null,`Waterfall`),d(` 열에서 막대가 서로 겹치고, 나중에 시작한 요청이 먼저 끝나는지 봅니다. 늦게 끝난 요청의 검색어가 화면 결과와 같다면 옛 응답이 덮어쓴 것입니다.`)]),s(`li`,null,[s(`strong`,null,`Console에서 실행 횟수 세기`),d(` 처리 함수 첫 줄에 `),s(`code`,null,`console.count('search')`),d(`를 넣고 입력하면 Console에 `),s(`code`,null,`search: 1`),d(`, `),s(`code`,null,`search: 2`),d(`처럼 실행할 때마다 숫자가 늘어납니다. `),s(`code`,null,`resize`),d(` 처리에 넣고 창 크기를 조절해 보면 몇 번 실행되는지 바로 보입니다.`)]),s(`li`,null,[s(`strong`,null,`Event Listeners 탭에서 연결된 처리 함수 찾기`),d(` Elements 패널에서 검색창을 선택하고 Event Listeners 탭에서 `),s(`code`,null,`input`),d(`을 펼칩니다. 오른쪽 파일 이름을 누르면 Sources 패널의 해당 코드로 이동합니다. `),s(`code`,null,`resize`),d(`처럼 `),s(`code`,null,`window`),d(`에 연결한 이벤트는 `),s(`code`,null,`Ancestors`),d(`를 켠 상태에서 `),s(`code`,null,`Window`),d(` 항목으로 보입니다.`)]),s(`li`,null,[s(`strong`,null,`Performance 녹화로 반복 실행 확인`),d(` Performance 패널에서 Record를 누르고 창 크기를 조절하거나 입력한 뒤 멈춥니다. Main 트랙에 `),s(`code`,null,`Event: resize`),d(`·`),s(`code`,null,`Event: input`),d(` 블록이 촘촘하게 반복되고, 각 블록 아래에 같은 처리 함수가 계속 보이면 실행 횟수를 줄일 대상입니다.`)])],-1)]]),_:1})]),s(`section`,M,[r[13]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),r[14]||=s(`p`,null,[d(`검색은 디바운스와 `),s(`code`,null,`AbortController`),d(`를 함께 쓰고, 드래그·스크롤은 스로틀, 화면을 그리는 일은 `),s(`code`,null,`requestAnimationFrame`),d(`으로 줄입니다.`)],-1),u(m,{tabs:t(C)},null,8,[`tabs`]),r[15]||=h(`<ul><li><strong>디바운스의 핵심은 <code>clearTimeout</code>입니다.</strong> 이벤트가 올 때마다 앞의 예약을 취소하고 다시 예약하므로, 마지막 이벤트 뒤 <code>wait</code>(ms)가 지나야 한 번 실행됩니다.</li><li><strong>스로틀은 처음 값과 끝 값을 모두 실행합니다.</strong> 첫 이벤트는 바로 실행하고(leading), 간격 안에 들어온 마지막 값은 기다렸다가 한 번 더 실행합니다(trailing). 끝 값을 빠뜨리면 드래그를 멈춘 위치가 저장되지 않습니다.</li><li><strong><code>cancel()</code>을 함께 만듭니다.</strong> 화면을 벗어나거나 컴포넌트가 사라질 때 예약된 실행을 취소할 수 있어야 합니다.</li></ul>`,1)]),s(`section`,N,[r[21]||=h(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>‘이벤트가 너무 자주, 또는 순서가 엉켜 실행됨’은 다른 기능에서도 보입니다. 횟수를 줄이기보다 다른 방법이 더 맞는 경우도 있습니다.</p><h3>응답 순서가 뒤바뀔 때</h3><p>디바운스로 요청 수를 줄여도, 입력 중간에 잠깐 멈추면 요청이 둘 이상 나갈 수 있습니다. 새 요청을 보내기 전에 <code>AbortController</code>로 이전 요청을 취소하면 옛 응답이 화면을 덮어쓰지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">let</span> controller = <span class="hljs-literal">null</span>

<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">loadList</span>(<span class="hljs-params">params</span>) {
  controller?.<span class="hljs-title function_">abort</span>() <span class="hljs-comment">// 이전 요청 취소 → 그 fetch는 AbortError로 끝납니다.</span>
  controller = <span class="hljs-keyword">new</span> <span class="hljs-title class_">AbortController</span>()
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(<span class="hljs-string">\`/api/list?<span class="hljs-subst">\${<span class="hljs-keyword">new</span> URLSearchParams(params)}</span>\`</span>, { <span class="hljs-attr">signal</span>: controller.<span class="hljs-property">signal</span> })
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">await</span> res.<span class="hljs-title function_">json</span>()
  } <span class="hljs-keyword">catch</span> (e) {
    <span class="hljs-keyword">if</span> (e.<span class="hljs-property">name</span> === <span class="hljs-string">&#39;AbortError&#39;</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span> <span class="hljs-comment">// 취소된 요청은 오류로 남기지 않습니다.</span>
    <span class="hljs-keyword">throw</span> e
  }
}
</code></pre><h3>스크롤 위치에 따라 바뀌는 UI</h3>`,6),s(`p`,null,[r[17]||=d(`맨 위로 버튼, 등장 효과처럼 ‘요소가 화면에 보이는가’를 판단하는 일은 스로틀보다 `,-1),r[18]||=s(`code`,null,`IntersectionObserver`,-1),r[19]||=d(`가 맞습니다. 보이는 상태가 바뀔 때만 실행됩니다. 자세한 내용은 `,-1),u(g,{to:`/pub/js/scroll-observer`},{default:i(()=>[...r[16]||=[d(`스크롤 위치 감지`,-1)]]),_:1}),r[20]||=d(`를 참고하세요.`,-1)]),r[22]||=h(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> observer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">IntersectionObserver</span>(<span class="hljs-function">(<span class="hljs-params">[entry]</span>) =&gt;</span> {
  topButton.<span class="hljs-property">hidden</span> = entry.<span class="hljs-property">isIntersecting</span>
})
observer.<span class="hljs-title function_">observe</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;.top-sentinel&#39;</span>))
</code></pre><h3>요소 크기가 바뀔 때</h3><p>창 크기가 아니라 특정 요소의 크기에 따라 배치를 바꾼다면 <code>resize</code> 이벤트 대신 <code>ResizeObserver</code>를 씁니다. 크기가 실제로 바뀐 요소만 알려 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> observer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ResizeObserver</span>(<span class="hljs-function">(<span class="hljs-params">[entry]</span>) =&gt;</span> {
  chart.<span class="hljs-property">classList</span>.<span class="hljs-title function_">toggle</span>(<span class="hljs-string">&#39;is-compact&#39;</span>, entry.<span class="hljs-property">contentRect</span>.<span class="hljs-property">width</span> &lt; <span class="hljs-number">480</span>)
})
observer.<span class="hljs-title function_">observe</span>(chart)
</code></pre><h3>버튼 연타로 같은 요청이 두 번 갈 때</h3><p>제출 버튼을 여러 번 누르는 문제는 디바운스보다 <strong>진행 중에는 다시 실행하지 않는 것</strong>이 정확합니다. 요청하는 동안 버튼을 <code>disabled</code>로 바꾸거나 진행 중 플래그로 막습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">let</span> isSubmitting = <span class="hljs-literal">false</span>

form.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;submit&#39;</span>, <span class="hljs-title function_">async</span> (event) =&gt; {
  event.<span class="hljs-title function_">preventDefault</span>()
  <span class="hljs-keyword">if</span> (isSubmitting) <span class="hljs-keyword">return</span>
  isSubmitting = <span class="hljs-literal">true</span>
  submitButton.<span class="hljs-property">disabled</span> = <span class="hljs-literal">true</span>
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">await</span> <span class="hljs-title function_">sendForm</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FormData</span>(form))
  } <span class="hljs-keyword">finally</span> {
    isSubmitting = <span class="hljs-literal">false</span>
    submitButton.<span class="hljs-property">disabled</span> = <span class="hljs-literal">false</span>
  }
})
</code></pre>`,7)]),r[25]||=h(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>기다리는 동안 화면에 알려 줍니다.</strong> 디바운스 지연과 응답 대기 동안 아무 변화가 없으면 고장 난 것처럼 보입니다. ‘검색 중…’ 같은 표시를 두고, 결과 개수 안내는 <code>aria-live=&quot;polite&quot;</code> 영역에 넣어 화면 낭독기 사용자도 알 수 있게 합니다. 디바운스는 결과가 바뀔 때마다 낭독이 겹치는 것도 줄여 줍니다.</li><li><strong>지연 시간은 짧게 시작해 조정합니다.</strong> 검색 입력은 200~400ms 정도가 흔히 쓰이는 출발점이며 정해진 값은 아닙니다. 너무 길면 입력을 멈춰도 반응이 늦어 느린 화면으로 느껴지므로, 실제 기기에서 입력해 보고 정합니다.</li><li><strong>화면을 벗어나면 타이머를 정리합니다.</strong> 컴포넌트가 사라진 뒤 예약된 실행이 남아 있으면 없는 요소를 다루다 오류가 나거나 필요 없는 요청이 나갑니다. Vue는 <code>onBeforeUnmount</code>, React는 <code>useEffect</code>의 정리 함수에서 <code>cancel()</code>과 <code>abort()</code>를 부릅니다.</li><li><strong>라이브러리를 쓰면 <code>cancel</code>·<code>flush</code>를 확인합니다.</strong> lodash의 <code>debounce</code>·<code>throttle</code>이 돌려주는 함수에는 예약을 취소하는 <code>cancel()</code>과 기다리지 않고 바로 실행하는 <code>flush()</code>가 있습니다. 자동 저장처럼 화면을 떠나기 전에 마지막 값을 꼭 보내야 하면 <code>flush()</code>를 부릅니다.</li></ul></section>`,1),s(`section`,P,[r[24]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(_,null,{default:i(()=>[...r[23]||=[s(`p`,null,`위 예제에서 상황을 바꿔 가며 아래 내용을 확인합니다.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},[d(`‘검색 입력’에서 `),s(`code`,null,`javascript`),d(`를 빠르게 입력하면 문제 쪽 요청은 글자 수만큼, 해결 쪽은 1회에 그치고, 문제 쪽에 ‘입력과 다름’이 표시된다.`)])])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`디바운스 지연을 100ms로 줄이고 같은 속도로 입력하면 해결 쪽 요청이 늘고, 기록에 ‘취소됨’ 요청이 생기는 것을 확인한다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`‘슬라이더 드래그’에서 스로틀 간격을 800ms로 늘리면 실행 점 간격이 넓어지고, 드래그를 멈춘 뒤에도 마지막 위치가 저장되는 것을 확인한다.`)])])],-1)]]),_:1})])])}}};export{$ as default,G as duration,V as group,F as id,q as keyProperty,B as lead,W as level,R as navTitle,I as order,K as prerequisites,Q as references,Z as related,J as scope,Y as status,z as summary,U as tags,L as title,H as topic,X as updated};