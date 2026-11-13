import{D as e,G as t,H as n,R as r,T as i,V as a,c as o,d as s,g as c,h as l,j as u,k as d,l as f,m as p,pt as m,r as h,ut as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as _}from"./DemoCompare-Bd6h8ThJ.js";var v={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ts-mode-label`},y=[`aria-checked`,`onClick`],b={class:`sample-buttons`},x={class:`demo-ts-status`,role:`status`},S=[`onTransitionrun`,`onTransitionend`],C=[`onTransitionrun`,`onTransitionend`],w={__name:`TransitionStartDemo`,setup(t){let c=[{value:`create`,label:`새로 만든 요소(토스트)`},{value:`display`,label:`display: none이던 요소`}],u={create:{problem:{code:`appendChild → 바로 classList.add`,note:`처음 계산되는 스타일이 이미 is-show라서, 움직임 없이 바로 나타납니다.`},solved:{code:`appendChild → offsetWidth → classList.add`,note:`시작 스타일(opacity: 0)이 먼저 계산되어 아래에서 올라오며 나타납니다.`}},display:{problem:{code:`is-open + is-show 동시에`,note:`display: none이던 요소는 시작 스타일이 없어 바로 나타납니다.`},solved:{code:`is-open → offsetWidth → is-show`,note:`보이는 상태의 시작 스타일을 먼저 계산한 뒤 클래스를 붙여 전환됩니다.`}}},p={idle:`대기`,pending:`확인 중`,ran:`전환 실행됨`,none:`전환 안 됨`},w=e=>({"is-ran":e===`ran`,"is-none":e===`none`}),T=e=>e?`solved`:`problem`,E=n(`create`),D=n(!1),O=a({problem:0,solved:0}),k=a({problem:0,solved:0}),A=a({problem:`idle`,solved:`idle`}),j={},M={},N=0;function P(e,t){t.propertyName===`opacity`&&(O[e]+=1,A[e]=`ran`)}function F(e,t){t.propertyName===`opacity`&&(k[e]+=1)}function I(){A.problem=`pending`,A.solved=`pending`,clearTimeout(N),N=setTimeout(()=>{A.problem===`pending`&&(A.problem=`none`),A.solved===`pending`&&(A.solved=`none`)},300)}function L(e){e.replaceChildren();let t=document.createElement(`div`);return t.className=`demo-ts-toast`,t.textContent=`장바구니에 담았습니다.`,e.appendChild(t),t}function R(){I(),L(j.problem).classList.add(`is-show`);let e=L(j.solved);e.offsetWidth,e.classList.add(`is-show`)}function z(){D.value?B():(D.value=!0,I(),M.problem.classList.add(`is-open`,`is-show`),M.solved.classList.add(`is-open`),M.solved.offsetWidth,M.solved.classList.add(`is-show`))}function B(){D.value=!1,Object.values(M).forEach(e=>e?.classList.remove(`is-open`,`is-show`)),A.problem=`idle`,A.solved=`idle`}function V(){clearTimeout(N),Object.values(j).forEach(e=>e?.replaceChildren()),B(),O.problem=0,O.solved=0,k.problem=0,k.solved=0}function H(e){E.value!==e&&(V(),E.value=e)}return i(()=>{clearTimeout(N)}),(t,n)=>(e(),f(_,{problem:u[E.value].problem,solved:u[E.value].solved},{controls:r(()=>[n[0]||=o(`span`,{id:`demo-ts-mode-label`,class:`demo-label`},`상황`,-1),o(`div`,v,[(e(),s(h,null,d(c,e=>o(`button`,{key:e.value,type:`button`,role:`radio`,"aria-checked":E.value===e.value,onClick:t=>H(e.value)},m(e.label),9,y)),64))]),n[1]||=o(`span`,{class:`demo-label`},`조작`,-1),o(`div`,b,[E.value===`create`?(e(),s(`button`,{key:0,type:`button`,onClick:R},`토스트 띄우기`)):(e(),s(`button`,{key:1,type:`button`,onClick:z},m(D.value?`패널 숨기기`:`display: none → 보이기`),1)),o(`button`,{type:`button`,onClick:V},`처음으로`)])]),default:r(({solved:t})=>[o(`p`,x,[n[2]||=l(` transitionrun `,-1),o(`strong`,null,m(O[T(t)])+`회`,1),n[3]||=l(` · transitionend `,-1),o(`strong`,null,m(k[T(t)])+`회`,1),o(`span`,{class:g([`demo-ts-result`,w(A[T(t)])])},m(p[A[T(t)]]),3)]),E.value===`create`?(e(),s(`div`,{key:0,ref:e=>j[T(t)]=e,class:`demo-ts-stage`,onTransitionrun:e=>P(T(t),e),onTransitionend:e=>F(T(t),e)},null,40,S)):(e(),s(`div`,{key:1,class:`demo-ts-stage`,onTransitionrun:e=>P(T(t),e),onTransitionend:e=>F(T(t),e)},[o(`div`,{ref:e=>M[T(t)]=e,class:`demo-ts-panel`},[...n[4]||=[o(`p`,null,`display: none이던 패널입니다. 위에서 아래로 내려오며 나타나야 합니다.`,-1)]],512)],40,C))]),caption:r(()=>[...n[5]||=[l(` 전환 시간은 0.6초입니다. 두 화면의 CSS는 같고, 클래스를 붙이기 전에 `,-1),o(`code`,null,`offsetWidth`,-1),l(`를 읽는지만 다릅니다. 횟수는 `,-1),o(`code`,null,`opacity`,-1),l(` 전환만 셉니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},T=[{label:`해결 코드`,language:`javascript`,code:`// 1) 새로 만든 요소: 추가한 뒤 시작 상태를 먼저 계산하게 하고 클래스를 붙입니다.
function showToast(message) {
  const toast = document.createElement('div')
  toast.className = 'toast'
  toast.textContent = message
  document.body.appendChild(toast)

  // 크기 값을 읽으면 브라우저가 지금 스타일(opacity: 0)을 계산합니다. 이 상태가 전환의 시작점이 됩니다.
  void toast.offsetWidth
  toast.classList.add('is-show')

  setTimeout(() => hideToast(toast), 3000)
}

function hideToast(toast) {
  toast.classList.remove('is-show')
  // 전환이 끝나면 지웁니다. transitionend가 오지 않는 경우(전환 없음 등)를 대비해 시간으로도 지웁니다.
  const remove = () => toast.remove()
  toast.addEventListener('transitionend', remove, { once: true })
  setTimeout(remove, 1000)
}

// 2) display: none이던 요소: display를 먼저 켜고, 시작 상태를 계산한 뒤 나타나는 클래스를 붙입니다.
function openPanel(panel) {
  panel.classList.add('is-open') // display: block
  void panel.offsetWidth // opacity: 0인 보이는 상태를 먼저 계산
  panel.classList.add('is-show') // opacity: 1로 전환
}

function closePanel(panel) {
  panel.classList.remove('is-show') // 사라지는 전환을 먼저 실행하고
  panel.addEventListener('transitionend', () => {
    // 그사이 다시 열리지 않았을 때만 display: none으로 돌립니다.
    if (!panel.classList.contains('is-show')) panel.classList.remove('is-open')
  }, { once: true })
}`},{label:`문제 코드`,language:`javascript`,code:`// 문제 1: 추가와 클래스 변경이 같은 작업 안에 있습니다.
// 브라우저가 스타일을 처음 계산할 때 이미 is-show가 붙어 있어, 시작 상태가 없습니다.
const toast = document.createElement('div')
toast.className = 'toast'
document.body.appendChild(toast)
toast.classList.add('is-show') // 전환 없이 바로 보임

// 문제 2: display와 opacity를 한 번에 바꿉니다.
// display: none이던 요소에는 '바뀌기 전 스타일'이 없어 opacity 전환이 시작되지 않습니다.
panel.classList.add('is-open', 'is-show') // 전환 없이 바로 보임`},{label:`requestAnimationFrame`,language:`javascript`,code:`// offsetWidth 대신 '다음 프레임'에 클래스를 붙이는 방법도 흔히 씁니다.
// 한 번만 쓰면 아직 첫 스타일 계산 전에 실행될 수 있어, 두 번 중첩하는 형태가 많이 쓰입니다.
document.body.appendChild(toast)

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    toast.classList.add('is-show')
  })
})

// 전환이 실제로 시작됐는지는 transitionrun 이벤트로 확인할 수 있습니다.
toast.addEventListener('transitionrun', (event) => {
  console.log('전환 시작:', event.propertyName)
})`},{label:`CSS`,language:`css`,code:`/* transition은 기본 상태(시작점)에 선언합니다. is-show에만 두면 닫힐 때 전환이 없습니다. */
.toast {
  position: fixed;
  right: 16px;
  bottom: 16px;
  left: 16px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast.is-show {
  opacity: 1;
  transform: none;
}

.panel {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.panel.is-open {
  display: block;
}

.panel.is-show {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .toast {
    transform: none;
  }
}`},{label:`CSS (실행 예제)`,language:`css`,code:`/* JS 08 실행 예제: 새로 만든 토스트, display: none이던 패널의 등장 전환 */
.demo-ts-status {
  margin: 0 0 10px;
  font-size: 13px;
}

.demo-ts-result {
  display: inline-block;
  margin-left: 4px;
  padding: 1px 8px;
  border-radius: 999px;
  background: #eef1f6;
  color: #4a5668;
  font-size: 12px;
  font-weight: 700;
}

.demo-ts-result.is-ran {
  background: #e3f4ea;
  color: #17643a;
}

.demo-ts-result.is-none {
  background: #fdecea;
  color: #a8261b;
}

/* 토스트와 패널이 나타나는 무대. 예제 밖으로 넘치지 않게 가둡니다. */
.demo-ts-stage {
  position: relative;
  height: 150px;
  overflow: hidden;
  padding: 12px;
  border: 1px dashed #b8c4d4;
  border-radius: 8px;
  background: #ffffff;
  color: #1f2a3d;
  font-size: 13px;
}

/* 1) 새로 만든 요소: 기본 상태(시작 스타일)에 transition을 선언합니다. */
.demo-ts-toast {
  position: absolute;
  right: 12px;
  bottom: 12px;
  left: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  background: #1f2a3d;
  color: #ffffff;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.demo-ts-toast.is-show {
  opacity: 1;
  transform: none;
}

/* 2) display: none이던 요소: is-open으로 자리를 만들고, is-show로 나타냅니다. */
.demo-ts-panel {
  display: none;
  padding: 12px 14px;
  border: 1px solid #b8c4d4;
  border-radius: 8px;
  background: #f4f7fb;
  opacity: 0;
  transform: translateY(-12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.demo-ts-panel.is-open {
  display: block;
}

.demo-ts-panel.is-show {
  opacity: 1;
  transform: none;
}

.demo-ts-panel p {
  margin: 0;
}

/* 움직임을 줄이는 설정에서는 이동 없이 투명도만 바꿉니다. */
@media (prefers-reduced-motion: reduce) {
  .demo-ts-toast,
  .demo-ts-panel {
    transform: none;
    transition: opacity 0.6s ease;
  }
}
`},{label:`HTML`,language:`xml`,code:`<!-- 토스트는 JavaScript로 만들어 body 끝에 추가합니다. -->
<div class="toast is-show">장바구니에 담았습니다.</div>

<!-- 처음에는 display: none인 패널 -->
<button type="button" class="panel-button" aria-expanded="false" aria-controls="notice-panel">공지 보기</button>
<div id="notice-panel" class="panel">…</div>`}],E={class:`doc-body`},D={id:`section-0`},O={id:`section-1`},k={id:`section-2`},A={id:`section-3`},j={id:`section-4`},M={id:`section-5`},N={id:`section-7`},P=`transition-start`,F=8,I=`클래스를 붙였는데 전환(transition) 없이 바로 바뀔 때`,L=`클래스를 붙여도 전환이 없을 때`,R=`요소를 만들자마자, 또는 display none을 푸는 순간에 클래스를 붙이면 전환의 시작 상태가 없어 바로 바뀌는 이유를 이해하고, 시작 스타일을 먼저 계산하게 한 뒤 클래스를 붙여 해결합니다.`,z=`CSS에 transition을 넣고 클래스를 붙였는데 움직임 없이 바로 나타난다면?
브라우저가 '바뀌기 전 상태'를 먼저 계산했는지 확인하세요.
`,B=`DOM`,V=`전환`,H=[`JavaScript`,`transition`,`classList`,`offsetWidth`,`requestAnimationFrame`,`transitionrun`,`transitionend`,`display none`,`@starting-style`,`토스트`],U=`중급`,W=`약 11분`,G=[`CSS transition`,`classList`,`display 속성`],K=`void el.offsetWidth`,q=`published`,J=`2026-11-11`,Y=[`hidden-size`,`transition-toggle`],X=[{title:`W3C — CSS Transitions Level 1`,url:`https://www.w3.org/TR/css-transitions-1/`},{title:`MDN — transition`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/transition`},{title:`MDN — transitionrun 이벤트`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event`},{title:`MDN — @starting-style`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style`},{title:`Chrome DevTools — Animations 패널`,url:`https://developer.chrome.com/docs/devtools/css/animations`}],Z={__name:`transition-start`,setup(n,{expose:i}){return i({frontmatter:{id:`transition-start`,order:8,title:`클래스를 붙였는데 전환(transition) 없이 바로 바뀔 때`,navTitle:`클래스를 붙여도 전환이 없을 때`,summary:`요소를 만들자마자, 또는 display none을 푸는 순간에 클래스를 붙이면 전환의 시작 상태가 없어 바로 바뀌는 이유를 이해하고, 시작 스타일을 먼저 계산하게 한 뒤 클래스를 붙여 해결합니다.`,lead:`CSS에 transition을 넣고 클래스를 붙였는데 움직임 없이 바로 나타난다면?
브라우저가 '바뀌기 전 상태'를 먼저 계산했는지 확인하세요.
`,group:`DOM`,topic:`전환`,tags:[`JavaScript`,`transition`,`classList`,`offsetWidth`,`requestAnimationFrame`,`transitionrun`,`transitionend`,`display none`,`@starting-style`,`토스트`],level:`중급`,duration:`약 11분`,prerequisites:[`CSS transition`,`classList`,`display 속성`],keyProperty:`void el.offsetWidth`,status:`published`,updated:`2026-11-11`,related:[`hidden-size`,`transition-toggle`],references:[{title:`W3C — CSS Transitions Level 1`,url:`https://www.w3.org/TR/css-transitions-1/`},{title:`MDN — transition`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/transition`},{title:`MDN — transitionrun 이벤트`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionrun_event`},{title:`MDN — @starting-style`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style`},{title:`Chrome DevTools — Animations 패널`,url:`https://developer.chrome.com/docs/devtools/css/animations`}]}}),(n,i)=>{let a=u(`DocIssue`),d=u(`DocTakeaway`),f=u(`DocSteps`),m=u(`DocInspect`),h=u(`CodePanel`),g=u(`RouterLink`),_=u(`DocPractice`);return e(),s(`div`,E,[o(`section`,D,[i[2]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),l(` 문제 상황`)],-1),i[3]||=o(`p`,null,[l(`‘장바구니 담기’ 버튼을 누르면 화면 아래에서 토스트가 부드럽게 올라오도록 만들었습니다. CSS에 `),o(`code`,null,`transition`),l(`을 넣고, JavaScript로 토스트를 만들어 추가한 뒤 `),o(`code`,null,`is-show`),l(` 클래스를 붙였는데 `),o(`strong`,null,`움직임 없이 바로 나타납니다.`)],-1),i[4]||=o(`p`,null,`Elements 패널에서 클래스를 직접 지웠다 붙이면 잘 움직여서 CSS 문제가 아닌 것처럼 보이고, 디자인 검수에서 이런 형태로 돌아옵니다.`,-1),c(a,{label:`디자인 검수`,title:`상품 상세: 장바구니 토스트가 올라오는 모션 없이 바로 나타남`,env:`PC Chrome · 상품 상세 화면`,expected:`토스트가 0.3초 동안 아래에서 올라오며 서서히 나타남`,actual:`토스트가 움직임 없이 한 번에 나타남(사라질 때는 모션이 보임)`},{default:r(()=>[...i[0]||=[o(`ol`,null,[o(`li`,null,`상품 상세 화면에서 ‘장바구니 담기’ 버튼을 누릅니다.`),o(`li`,null,`화면 아래에 나타나는 토스트의 움직임을 확인합니다.`),o(`li`,null,`3초 뒤 토스트가 사라질 때의 움직임과 비교합니다.`)],-1)]]),_:1}),c(d,null,{default:r(()=>[...i[1]||=[o(`p`,null,[l(`전환은 `),o(`strong`,null,`바뀌기 전 상태`),l(`가 있어야 실행됩니다. 요소를 추가하거나 `),o(`code`,null,`display`),l(`를 켠 직후에는 `),o(`strong`,null,`시작 스타일을 먼저 계산하게 한 뒤`),l(` 클래스를 붙이세요.`)],-1)]]),_:1})]),o(`section`,O,[i[5]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[6]||=o(`p`,null,[l(`상황을 고른 뒤 버튼을 눌러 보세요. 두 화면의 CSS는 같고, 클래스를 붙이는 시점만 다릅니다. 전환이 실제로 시작되었는지는 `),o(`code`,null,`transitionrun`),l(` 횟수로 확인합니다.`)],-1),c(w)]),o(`section`,k,[i[8]||=p(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>브라우저는 JavaScript가 스타일을 바꿀 때마다 바로 다시 계산하지 않습니다. 하나의 작업(클릭 처리 함수 등)이 끝난 뒤, 화면을 그리기 전에 <strong>한꺼번에 스타일을 계산</strong>합니다. 전환은 이렇게 계산한 ‘이전 결과’와 ‘이번 결과’를 비교해 값이 달라진 속성에 대해 시작됩니다.</p><p>새로 추가한 요소는 이전 결과가 없습니다. 추가와 클래스 붙이기가 같은 함수 안에 있으면, 브라우저가 처음 계산하는 스타일에 이미 <code>is-show</code>가 들어 있어 비교할 시작점이 없습니다. <code>display: none</code>이던 요소도 같습니다. 화면에 박스가 없던 요소는 바뀌기 전 스타일이 없는 것으로 취급되어, <code>display</code>와 <code>opacity</code>를 한 번에 바꾸면 <code>opacity</code> 전환이 시작되지 않습니다. <code>display</code> 자체도 기본적으로 전환되지 않는 속성입니다.</p><p>그래서 클래스를 붙이기 전에 <code>offsetWidth</code>, <code>getBoundingClientRect()</code> 같은 값을 읽어 <strong>그 시점의 스타일을 강제로 계산</strong>하게 합니다. 이때 계산된 <code>opacity: 0</code>이 시작점이 되고, 바로 이어서 붙인 <code>is-show</code>와 비교되어 전환이 실행됩니다.</p>`,4),c(f,null,{default:r(()=>[...i[7]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`요소 추가 또는 display 켜기`),l(),o(`code`,null,`appendChild(toast)`)]),o(`li`,null,[o(`strong`,null,`시작 스타일 계산시키기`),l(),o(`code`,null,`void toast.offsetWidth`)]),o(`li`,null,[o(`strong`,null,`끝 상태 클래스 붙이기`),l(),o(`code`,null,`toast.classList.add('is-show')`)])],-1)]]),_:1}),i[9]||=o(`p`,null,[l(`다음 프레임까지 기다렸다가 클래스를 붙이는 방법(`),o(`code`,null,`requestAnimationFrame`),l(` 두 번 중첩)도 흔히 쓰입니다. 어느 방법이든 핵심은 같습니다. `),o(`strong`,null,`시작 스타일이 한 번 계산된 뒤에`),l(` 끝 상태로 바꿔야 합니다.`)],-1)]),o(`section`,A,[i[11]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),l(` 원인 찾기`)],-1),i[12]||=o(`p`,null,[l(`전환이 없을 때는 `),o(`strong`,null,`전환이 아예 만들어지지 않았는지`),l(`, 만들어졌는데 보이지 않는지부터 나눕니다. 아래 순서로 확인합니다.`)],-1),c(m,null,{default:r(()=>[...i[10]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`Animations 패널에서 기록 확인`),l(` DevTools 오른쪽 위 ⋮ 메뉴의 More tools에서 Animations를 엽니다. 패널을 연 채 버튼을 누르면 실행된 전환이 기록됩니다. 아무것도 기록되지 않으면 전환이 시작되지 않은 것입니다. 기록된 전환은 재생 속도를 25%, 10%로 낮춰 다시 볼 수 있습니다.`)]),o(`li`,null,[o(`strong`,null,`Elements에서 클래스가 붙는 시점 확인`),l(` 버튼을 누를 때 Elements 패널에서 바뀐 부분이 잠깐 강조됩니다. 요소가 새로 추가되면서 처음부터 `),o(`code`,null,`class="toast is-show"`),l(`로 나타난다면, 시작 상태 없이 끝 상태로 만들어진 것입니다.`)]),o(`li`,null,[o(`strong`,null,`Styles에서 transition 선언 위치 확인`),l(` 요소를 선택하고 Styles 탭에서 `),o(`code`,null,`transition`),l(`이 어느 선택자에 있는지 봅니다. `),o(`code`,null,`.toast.is-show`),l(`에만 있으면 클래스를 뗄 때(닫을 때) 전환이 없습니다. 기본 상태인 `),o(`code`,null,`.toast`),l(`에 있어야 양쪽 모두 전환됩니다.`)]),o(`li`,null,[o(`strong`,null,`Console에서 transitionrun 기록`),l(` Console에 `),o(`code`,null,`document.addEventListener('transitionrun', (e) => console.log(e.target, e.propertyName))`),l(`를 입력하고 버튼을 누릅니다. 아무것도 출력되지 않으면 전환이 만들어지지 않은 것이고, 클래스를 붙이는 시점이 원인입니다.`)])],-1)]]),_:1})]),o(`section`,j,[i[13]||=o(`h2`,null,[o(`span`,{class:`section-no`},`05`),l(` 해결 코드`)],-1),i[14]||=o(`p`,null,[l(`새로 만든 요소와 `),o(`code`,null,`display: none`),l(`이던 요소를 각각 처리하는 순수 JavaScript입니다. CSS의 `),o(`code`,null,`transition`),l(`은 기본 상태에 선언합니다.`)],-1),c(h,{tabs:t(T)},null,8,[`tabs`]),i[15]||=p(`<ul><li><strong><code>void el.offsetWidth</code></strong>: 값을 쓰지 않고 읽기만 해서 스타일·배치 계산을 일으킵니다. <code>getComputedStyle(el).opacity</code>를 읽어도 스타일은 계산되지만, 의도를 주석으로 남겨 두어야 다른 사람이 지우지 않습니다.</li><li><strong>닫을 때는 순서를 반대로</strong>: <code>is-show</code>를 먼저 떼어 사라지는 전환을 실행하고, <code>transitionend</code> 뒤에 <code>display: none</code>으로 돌리거나 요소를 지웁니다.</li><li><strong><code>transitionend</code>만 믿지 않기</strong>: 전환이 없거나 중간에 요소가 숨겨지면 <code>transitionend</code>가 오지 않습니다. 요소를 지우는 일은 시간 예비 처리를 함께 둡니다.</li></ul>`,1)]),o(`section`,M,[i[28]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),l(` 비슷한 상황`)],-1),i[29]||=o(`p`,null,`‘클래스는 바뀌었는데 움직임이 없다’는 증상은 다른 원인에서도 나타납니다. 증상이 비슷하다면 아래를 함께 확인하세요.`,-1),i[30]||=o(`h3`,null,`높이를 auto로 펼칠 때`,-1),o(`p`,null,[i[17]||=o(`code`,null,`height: 0`,-1),i[18]||=l(`에서 `,-1),i[19]||=o(`code`,null,`height: auto`,-1),i[20]||=l(`로 바꾸면 기본적으로 전환되지 않고 바로 펼쳐집니다. 높이를 재지 않고 펼치려면 `,-1),c(g,{to:`/pub/css/grid-accordion`},{default:r(()=>[...i[16]||=[l(`아코디언 펼치기`,-1)]]),_:1}),i[21]||=l(`의 `,-1),i[22]||=o(`code`,null,`grid-template-rows: 0fr → 1fr`,-1),i[23]||=l(` 방법을 씁니다.`,-1)]),i[31]||=p(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.accordion-body</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">0</span>fr;
  <span class="hljs-attribute">transition</span>: grid-template-rows <span class="hljs-number">0.3s</span> ease;
}
<span class="hljs-selector-class">.accordion-body</span><span class="hljs-selector-class">.is-open</span> { <span class="hljs-attribute">grid-template-rows</span>: <span class="hljs-number">1</span>fr; }
<span class="hljs-selector-class">.accordion-body</span> &gt; <span class="hljs-selector-class">.inner</span> { <span class="hljs-attribute">overflow</span>: hidden; }
</code></pre><h3>열 때는 되는데 닫을 때만 툭 사라질 때</h3><p>전환은 <strong>바뀐 뒤 스타일</strong>의 <code>transition</code> 값을 씁니다. <code>transition</code>을 <code>.is-show</code>에만 두면, 클래스를 뗀 뒤에는 <code>transition</code>이 없어 바로 바뀝니다. 기본 상태에 선언합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">/* ✗ 닫을 때 전환 없음 */</span>
<span class="hljs-selector-class">.toast</span><span class="hljs-selector-class">.is-show</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>; <span class="hljs-attribute">transition</span>: opacity <span class="hljs-number">0.3s</span>; }

<span class="hljs-comment">/* ✓ 열고 닫을 때 모두 전환 */</span>
<span class="hljs-selector-class">.toast</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">transition</span>: opacity <span class="hljs-number">0.3s</span>; }
<span class="hljs-selector-class">.toast</span><span class="hljs-selector-class">.is-show</span> { <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>; }
</code></pre><h3>display 대신 visibility로 숨길 때</h3><p>자리를 차지해도 되는 요소(위치가 고정된 토스트, 레이어 등)는 <code>display: none</code> 대신 <code>visibility: hidden</code>과 <code>opacity: 0</code>으로 숨기면 시작 상태가 항상 있습니다. <code>visibility</code>도 함께 전환하면 사라지는 동안에는 보이고, 끝나면 숨겨집니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.layer</span> {
  <span class="hljs-attribute">visibility</span>: hidden;
  <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">transition</span>: opacity <span class="hljs-number">0.3s</span>, visibility <span class="hljs-number">0.3s</span>;
}
<span class="hljs-selector-class">.layer</span><span class="hljs-selector-class">.is-show</span> { <span class="hljs-attribute">visibility</span>: visible; <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>; }
</code></pre><h3>Vue·React에서 나타나고 사라질 때</h3>`,8),o(`p`,null,[i[25]||=o(`code`,null,`v-if`,-1),i[26]||=l(`처럼 요소를 만들고 지우는 경우에는 프레임워크의 Transition 기능이 시작 클래스를 붙이는 시점을 대신 처리합니다. Vue는 `,-1),c(g,{to:`/pub/vue/transition-toggle`},{default:r(()=>[...i[24]||=[l(`Transition 열고 닫기`,-1)]]),_:1}),i[27]||=l(`를 참고하세요.`,-1)]),i[32]||=p(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">Transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fade&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;isOpen&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;toast&quot;</span>&gt;</span>장바구니에 담았습니다.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Transition</span>&gt;</span>
</code></pre>`,1)]),i[35]||=p(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>강제 계산은 필요한 곳에서 한 번만 합니다.</strong> 반복문 안에서 클래스 변경과 <code>offsetWidth</code> 읽기를 번갈아 하면 매번 배치를 다시 계산해 느려집니다. 여러 요소라면 모두 추가한 뒤 한 번 읽고, 그다음 클래스를 붙입니다.</li><li><strong><code>@starting-style</code>은 지원 범위를 확인하고 씁니다.</strong> CSS만으로 시작 상태를 지정하는 최신 브라우저의 새 방법입니다(<code>@starting-style { .panel.is-open { opacity: 0; } }</code>). 지원하지 않는 브라우저에서는 전환 없이 바로 나타나므로, 사용 전에 대상 브라우저의 지원 여부를 확인하세요.</li><li><strong>움직임을 줄이는 설정을 존중합니다.</strong> <code>prefers-reduced-motion: reduce</code>일 때는 이동(<code>transform</code>)을 빼고 투명도만 바꾸거나 전환을 없앱니다. 전환을 없애면 <code>transitionend</code>도 오지 않으니 지우는 코드가 멈추지 않는지 확인합니다.</li><li><strong>토스트 내용은 화면 낭독기에도 전달되어야 합니다.</strong> 알림 문구를 담은 요소를 새로 만들어 넣으면 읽어 주지 않는 경우가 있습니다. <code>role=&quot;status&quot;</code>인 알림 영역을 미리 페이지에 두고 그 안에 내용을 넣는 방식을 권장합니다.</li></ul></section>`,1),o(`section`,N,[i[34]||=o(`h2`,null,[o(`span`,{class:`section-no`},`08`),l(` 짧은 실습`)],-1),c(_,null,{default:r(()=>[...i[33]||=[o(`p`,null,`위 예제에서 두 상황을 각각 골라 버튼을 여러 번 눌러 보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[l(`문제 쪽은 `),o(`code`,null,`transitionrun`),l(`이 0회로 남고 ‘전환 안 됨’, 해결 쪽은 누를 때마다 1회씩 늘고 ‘전환 실행됨’으로 표시된다.`)])])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[l(`해결 쪽 `),o(`code`,null,`transitionend`),l(` 횟수가 0.6초 뒤에 늘어나는 것을 확인한다.`)])])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`DevTools Animations 패널을 연 채 버튼을 누르면, 해결 쪽 전환만 기록되는 것을 확인한다.`)])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};