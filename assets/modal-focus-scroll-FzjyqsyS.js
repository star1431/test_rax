import{D as e,E as t,G as n,H as r,L as i,R as a,T as o,V as s,c,d as l,g as u,h as d,j as f,k as p,l as m,m as h,pt as g,r as _,u as v,ut as y,w as b}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as x}from"./DemoCompare-Bd6h8ThJ.js";var S=[{value:`none`,label:`보정 안 함`},{value:`padding`,label:`padding-right 보정`},{value:`gutter`,label:`scrollbar-gutter: stable`}],C=`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`,w=[{label:`해결 코드`,language:`javascript`,code:`const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

const popup = document.querySelector('#coupon-popup')
const dialog = popup.querySelector('.popup-dialog')
const background = document.querySelector('#wrap') // 팝업을 뺀 화면 전체
let lastFocused = null

// 1. 배경 스크롤 잠금: 사라지는 스크롤바 너비만큼 padding-right로 채워 화면 밀림을 막습니다.
function lockScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  document.body.style.overflow = 'hidden'
  if (scrollbarWidth > 0) document.body.style.paddingRight = \`\${scrollbarWidth}px\`
}

function unlockScroll() {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

// 2. 포커스 트랩: 마지막 요소에서 Tab → 처음, 처음 요소에서 Shift+Tab → 마지막
function trapTab(event) {
  const items = [...dialog.querySelectorAll(FOCUSABLE)]
  if (!items.length) return
  const first = items[0]
  const last = items[items.length - 1]
  const active = document.activeElement

  if (event.shiftKey && (active === first || active === dialog)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

// 3. 키보드: Escape로 닫고, Tab은 팝업 안에서만 돕니다.
function handleKeydown(event) {
  if (event.key === 'Escape') closePopup()
  if (event.key === 'Tab') trapTab(event)
}

function openPopup() {
  lastFocused = document.activeElement // 닫은 뒤 돌아갈 곳(연 버튼)
  popup.hidden = false
  background.inert = true // 뒤 화면 클릭·포커스·스크린 리더 차단
  lockScroll()
  popup.querySelector('input').focus() // 열자마자 팝업 안으로 포커스
  document.addEventListener('keydown', handleKeydown)
}

function closePopup() {
  popup.hidden = true
  background.inert = false
  unlockScroll()
  document.removeEventListener('keydown', handleKeydown)
  lastFocused?.focus() // 연 버튼으로 포커스를 돌려줍니다.
}

document.querySelector('.coupon-open').addEventListener('click', openPopup)
popup.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', closePopup))`},{label:`문제 코드`,language:`javascript`,code:`// 화면에 보이고 숨기기만 합니다.
document.querySelector('.coupon-open').addEventListener('click', () => {
  popup.hidden = false
  // 포커스는 '열기' 버튼에 그대로 → Tab을 누르면 뒤 화면의 다음 링크로 이동
  // Escape 처리 없음 → 키보드 사용자는 닫을 방법을 찾기 어려움
  // body는 그대로 스크롤 가능 → 휠·터치로 뒤 화면이 움직임
})

popup.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => {
    popup.hidden = true // 포커스가 사라진 버튼과 함께 문서 처음으로 돌아감
  })
})`},{label:`dialog 요소로`,language:`javascript`,code:`// <dialog id="coupon-dialog" aria-labelledby="coupon-title">…</dialog>
const dialog = document.querySelector('#coupon-dialog')
const opener = document.querySelector('.coupon-open')

opener.addEventListener('click', () => {
  // showModal(): 맨 위 레이어(top layer)에 열고, 나머지 문서를 inert 상태로 만듭니다.
  // Escape를 누르면 닫히고 close 이벤트가 발생합니다. 배경 스크롤은 막지 않습니다.
  dialog.showModal()
  document.documentElement.classList.add('is-scroll-locked')
})

dialog.addEventListener('close', () => {
  document.documentElement.classList.remove('is-scroll-locked')
  opener.focus() // 브라우저가 돌려주지 않는 경우를 대비해 직접 돌려줍니다.
})`},{label:`iOS 16 미만 대응`,language:`javascript`,code:`// iOS Safari 16 미만까지 지원해야 할 때: body를 고정하고 스크롤 위치를 직접 기억합니다.
let savedScrollY = 0

function lockScrollFixed() {
  savedScrollY = window.scrollY
  Object.assign(document.body.style, {
    position: 'fixed',
    top: \`-\${savedScrollY}px\`, // 현재 위치 그대로 보이게 위로 올립니다.
    left: '0',
    right: '0',
  })
}

function unlockScrollFixed() {
  Object.assign(document.body.style, { position: '', top: '', left: '', right: '' })
  window.scrollTo(0, savedScrollY) // 고정을 풀면 맨 위로 가므로 위치를 되돌립니다.
}`},{label:`CSS`,language:`css`,code:`/* 스크롤바가 사라져도 화면이 밀리지 않게 자리를 항상 비워 둡니다. (padding-right 보정 대신) */
html {
  scrollbar-gutter: stable;
}

/* dialog 요소를 쓸 때의 스크롤 잠금 */
html.is-scroll-locked {
  overflow: hidden;
}

/* 팝업 안 스크롤 영역 끝에서 배경으로 스크롤이 넘어가지 않게 합니다. */
.popup-body {
  max-height: 60vh;
  overflow-y: auto;
  overscroll-behavior: contain;
}`},{label:`HTML`,language:`xml`,code:`<div id="wrap">
  <button type="button" class="coupon-open">쿠폰 등록</button>
  …
</div>

<!-- 팝업은 #wrap 밖에 둡니다. 그래야 #wrap에 inert를 걸어도 팝업은 막히지 않습니다. -->
<div id="coupon-popup" class="popup" hidden>
  <div class="popup-dimmed"></div>
  <div class="popup-dialog" role="dialog" aria-modal="true" aria-labelledby="coupon-title" tabindex="-1">
    <h2 id="coupon-title">쿠폰 등록</h2>
    <input type="text" aria-label="쿠폰 번호" placeholder="쿠폰 번호">
    <button type="button" data-close>취소</button>
    <button type="button" data-close>등록</button>
  </div>
</div>`}],T={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-modal-fix-label`},ee=[`aria-checked`,`onClick`],te={class:`demo-modal-status`},ne=[`onFocusin`,`onFocusout`,`onKeydown`],re=[`onScroll`],ie={key:0,class:`demo-modal-layer`},ae=[`aria-labelledby`],oe=[`id`],se={class:`demo-modal-actions`},E=[`onClick`],D=[`onClick`],O=[`onClick`],k={class:`demo-modal-links`},A=[`data-name`],j={__name:`ModalFocusScrollDemo`,setup(u){let f=e=>e?`solved`:`problem`,h={},w={},j={},M={},N={},P=r(`padding`),F=r(0),I=s({problem:!1,solved:!1}),L=s({problem:`없음`,solved:`없음`}),R=s({problem:0,solved:0}),z=s({problem:0,solved:0}),B={problem:0,solved:0},V=null,H=e=>e?.dataset?.name??e?.textContent?.trim()??`알 수 없음`;function U(e,t){let n=f(e);L[n]=H(t.target),I[n]&&!M[n]?.contains(t.target)&&(R[n]+=1)}function W(e,t){let n=f(e);h[n]?.contains(t.relatedTarget)||(L[n]=`가상 화면 밖`)}function G(e){let t=f(e);I[t]&&(z[t]=Math.round(Math.abs(w[t].scrollTop-B[t])))}function K(){let e=w.solved,t=e.offsetWidth-e.clientWidth;e.style.overflow=`hidden`,P.value===`padding`&&t>0&&(j.solved.style.paddingRight=`${12+t}px`)}function q(){w.solved.style.overflow=``,j.solved.style.paddingRight=``}function J(e){let t=M.solved,n=[...t.querySelectorAll(C)];if(!n.length)return;let r=n[0],i=n[n.length-1],a=document.activeElement;e.shiftKey&&(a===r||a===t)?(e.preventDefault(),i.focus()):!e.shiftKey&&a===i&&(e.preventDefault(),r.focus())}function Y(e,t){e&&I.solved&&(t.key===`Escape`&&(t.preventDefault(),Z(!0)),t.key===`Tab`&&J(t))}async function X(e){let t=f(e);if(B[t]=w[t].scrollTop,z[t]=0,R[t]=0,I[t]=!0,!e)return;let n=document.activeElement;V=h.solved.contains(n)?n:N.solved,j.solved.inert=!0,K(),await b(),M.solved?.querySelector(`input`)?.focus()}async function Z(e){let t=f(e);I[t]&&(I[t]=!1,e&&(j.solved.inert=!1,q(),await b(),V?.focus(),V=null))}function Q(e){I.solved&&e.preventDefault()}i(P,async()=>{I.solved&&(q(),await b(),K())}),t(()=>{F.value=w.problem.offsetWidth-w.problem.clientWidth,h.solved.addEventListener(`wheel`,Q,{passive:!1}),h.solved.addEventListener(`touchmove`,Q,{passive:!1})}),o(()=>{h.solved?.removeEventListener(`wheel`,Q),h.solved?.removeEventListener(`touchmove`,Q)});function $(){I.problem=!1,V=null,Z(!0),Object.keys(w).forEach(e=>{w[e].scrollTop=0,z[e]=0,R[e]=0,L[e]=`없음`})}return(t,r)=>(e(),m(x,{problem:{code:`popup.hidden = false`,note:`Tab을 누르면 뒤 화면으로 포커스가 빠지고, 팝업 위에서 휠을 굴리면 뒤 화면이 스크롤됩니다.`},solved:{code:`포커스 트랩 + Escape + overflow: hidden`,note:`포커스가 팝업 안에서만 돌고, Escape로 닫으면 열기 버튼으로 돌아옵니다. 뒤 화면은 움직이지 않습니다.`}},{controls:a(()=>[r[0]||=c(`span`,{id:`demo-modal-fix-label`,class:`demo-label`},`해결 쪽 스크롤바 보정`,-1),c(`div`,T,[(e(!0),l(_,null,p(n(S),t=>(e(),l(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":P.value===t.value,onClick:e=>P.value=t.value},g(t.label),9,ee))),128))]),r[1]||=c(`span`,{class:`demo-label`},`조작`,-1),c(`div`,{class:`sample-buttons`},[c(`button`,{type:`button`,onClick:$},`처음으로`)])]),default:a(({solved:t})=>[c(`p`,te,[r[2]||=d(` 현재 포커스 `,-1),c(`strong`,null,g(L[f(t)]),1),r[3]||=d(` · 팝업 밖 포커스 `,-1),c(`strong`,null,g(R[f(t)])+`회`,1),r[4]||=d(` · 열린 뒤 배경 이동 `,-1),c(`strong`,null,g(z[f(t)])+`px`,1)]),c(`div`,{ref:e=>h[f(t)]=e,class:`demo-modal-screen`,onFocusin:e=>U(t,e),onFocusout:e=>W(t,e),onKeydown:e=>Y(t,e)},[r[8]||=c(`div`,{class:`demo-screen-bar`},`가상 화면`,-1),c(`div`,{ref:e=>w[f(t)]=e,class:y([`demo-modal-page`,{"is-open":I[f(t)],"demo-modal-page-gutter":t&&P.value===`gutter`}]),onScroll:e=>G(t)},[I[f(t)]?(e(),l(`div`,ie,[r[6]||=c(`div`,{class:`demo-modal-dim`,"aria-hidden":`true`},null,-1),c(`div`,{ref:e=>M[f(t)]=e,class:`demo-modal-dialog`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`demo-modal-title-${f(t)}`,tabindex:`-1`,"data-name":`팝업`},[c(`strong`,{id:`demo-modal-title-${f(t)}`},`쿠폰 등록`,8,oe),r[5]||=c(`input`,{type:`text`,class:`demo-modal-input`,"aria-label":`쿠폰 번호`,placeholder:`쿠폰 번호`,"data-name":`쿠폰 번호 입력창`},null,-1),c(`div`,se,[c(`button`,{type:`button`,"data-name":`취소 버튼`,onClick:e=>Z(t)},`취소`,8,E),c(`button`,{type:`button`,class:`demo-modal-submit`,"data-name":`등록 버튼`,onClick:e=>Z(t)},`등록`,8,D)])],8,ae)])):v(``,!0),c(`div`,{ref:e=>j[f(t)]=e,class:`demo-modal-content`},[c(`button`,{ref:e=>N[f(t)]=e,type:`button`,class:`demo-modal-open`,"data-name":`열기 버튼`,onClick:e=>X(t)},` 열기 `,8,O),c(`ul`,k,[(e(),l(_,null,p(8,e=>c(`li`,{key:e},[c(`button`,{type:`button`,"data-name":`뒤 화면 메뉴 ${e}`},[d(`메뉴 `+g(e)+` `,1),r[7]||=c(`span`,{"aria-hidden":`true`},`→`,-1)],8,A)])),64))])],512)],42,re)],40,ne)]),caption:a(()=>[d(` 열기를 누른 뒤 Tab·Shift+Tab·Escape를 눌러 보고, 팝업 위에서 휠(터치)로 스크롤해 보세요. 이 브라우저의 스크롤바 너비는 `+g(F.value)+`px입니다. 0px이면(macOS 기본 설정, 모바일) 보정 방식에 따른 밀림 차이가 보이지 않습니다. 예제는 실제 페이지를 잠그지 않도록 가상 화면의 스크롤 영역을 잠그고, 키 입력도 가상 화면 안에서만 처리합니다. 또 가상 화면 밖의 문서가 대신 스크롤되지 않게 해결 쪽 팝업이 열린 동안 가상 화면 안의 휠·터치 스크롤을 막았습니다. 실제 코드는 해결 코드처럼 `,1),r[9]||=c(`code`,null,`document.body`,-1),r[10]||=d(`와 `,-1),r[11]||=c(`code`,null,`document`,-1),r[12]||=d(`에 적용합니다. `,-1)]),_:1}))}},M={class:`doc-body`},N={id:`section-0`},P={id:`section-1`},F={id:`section-2`},I={class:`table-wrap`},L={id:`section-3`},R={id:`section-4`},z={id:`section-7`},B=`modal-focus-scroll`,V=5,H=`팝업을 열었는데 Tab 키와 스크롤이 뒤 화면으로 빠질 때`,U=`팝업 포커스·스크롤 잠금`,W=`팝업이 열린 동안 Tab 키가 뒤 화면으로 빠지고 배경이 스크롤되는 문제를, 포커스 트랩·Escape 닫기·포커스 복귀·배경 스크롤 잠금으로 해결합니다. dialog 요소의 showModal()로 처리하는 방법도 함께 봅니다.`,G=`팝업을 열었는데 Tab을 누르면 뒤 화면 메뉴로 가고, 휠을 굴리면 배경이 움직인다면?
팝업은 보이게만 하지 말고, 포커스와 스크롤을 팝업 안에 묶어 두세요.
`,K=`접근성`,q=`팝업`,J=[`JavaScript`,`팝업`,`포커스 트랩`,`Escape`,`스크롤 잠금`,`inert`,`dialog`,`showModal`,`scrollbar-gutter`,`overscroll-behavior`,`접근성`],Y=`중급`,X=`약 12분`,Z=[`addEventListener`,`document.activeElement`,`overflow`],Q=`포커스 트랩 + overflow: hidden`,$=`published`,ce=`2026-11-13`,le=[`event-delegation`,`teleport-layer`,`scrollbar-shift`],ue=[{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — dialog 요소`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`},{title:`MDN — scrollbar-gutter`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter`},{title:`MDN — overscroll-behavior`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/overscroll-behavior`}],de={__name:`modal-focus-scroll`,setup(t,{expose:r}){return r({frontmatter:{id:`modal-focus-scroll`,order:5,title:`팝업을 열었는데 Tab 키와 스크롤이 뒤 화면으로 빠질 때`,navTitle:`팝업 포커스·스크롤 잠금`,summary:`팝업이 열린 동안 Tab 키가 뒤 화면으로 빠지고 배경이 스크롤되는 문제를, 포커스 트랩·Escape 닫기·포커스 복귀·배경 스크롤 잠금으로 해결합니다. dialog 요소의 showModal()로 처리하는 방법도 함께 봅니다.`,lead:`팝업을 열었는데 Tab을 누르면 뒤 화면 메뉴로 가고, 휠을 굴리면 배경이 움직인다면?
팝업은 보이게만 하지 말고, 포커스와 스크롤을 팝업 안에 묶어 두세요.
`,group:`접근성`,topic:`팝업`,tags:[`JavaScript`,`팝업`,`포커스 트랩`,`Escape`,`스크롤 잠금`,`inert`,`dialog`,`showModal`,`scrollbar-gutter`,`overscroll-behavior`,`접근성`],level:`중급`,duration:`약 12분`,prerequisites:[`addEventListener`,`document.activeElement`,`overflow`],keyProperty:`포커스 트랩 + overflow: hidden`,status:`published`,updated:`2026-11-13`,related:[`event-delegation`,`teleport-layer`,`scrollbar-shift`],references:[{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — dialog 요소`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`},{title:`MDN — scrollbar-gutter`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter`},{title:`MDN — overscroll-behavior`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/overscroll-behavior`}]}}),(t,r)=>{let i=f(`DocIssue`),o=f(`DocTakeaway`),s=f(`RouterLink`),p=f(`DocSteps`),m=f(`DocInspect`),g=f(`CodePanel`),_=f(`DocPractice`);return e(),l(`div`,M,[c(`section`,N,[r[2]||=c(`h2`,null,[c(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[3]||=c(`p`,null,[d(`마이페이지의 ‘쿠폰 등록’ 버튼으로 팝업을 엽니다. 화면에는 팝업이 잘 뜨는데, 키보드로 Tab을 누르면 `),c(`strong`,null,`어두운 배경 뒤의 메뉴로 포커스가 이동`),d(`하고, Escape를 눌러도 닫히지 않습니다. 팝업 위에서 휠을 굴리면 `),c(`strong`,null,`뒤 화면이 스크롤`),d(`되고, 팝업을 닫으면 포커스가 문서 처음으로 돌아갑니다.`)],-1),r[4]||=c(`p`,null,`마우스로만 확인하면 지나치기 쉽고, 웹 접근성 점검이나 키보드·스크린 리더로 확인하는 QA에서 이런 형태로 돌아옵니다.`,-1),u(i,{title:`마이페이지: 쿠폰 등록 팝업에서 Tab 키가 뒤 화면으로 이동함`,env:`전체 브라우저 · 키보드 사용, PC 휠 및 모바일 터치 스크롤`,expected:`팝업 안의 입력창·버튼 사이에서만 포커스가 이동하고, Escape로 닫히며, 뒤 화면은 움직이지 않음`,actual:`Tab을 누르면 어두운 배경 뒤의 메뉴로 포커스가 이동, Escape 무반응, 팝업 위에서 스크롤하면 뒤 화면이 스크롤됨`},{default:a(()=>[...r[0]||=[c(`ol`,null,[c(`li`,null,`마이페이지에서 ‘쿠폰 등록’ 버튼을 누릅니다.`),c(`li`,null,`팝업이 열린 상태에서 Tab 키를 여러 번 누르고, Escape 키를 누릅니다.`),c(`li`,null,`팝업 위에서 마우스 휠을 굴리거나 손가락으로 끌어 봅니다.`)],-1)]]),_:1}),u(o,null,{default:a(()=>[...r[1]||=[c(`p`,null,[d(`팝업을 열면 `),c(`strong`,null,`포커스를 팝업 안으로 옮기고`),d(` Tab이 팝업 안에서만 돌게 하세요. Escape로 닫고 `),c(`strong`,null,`연 버튼으로 포커스를 돌려주며`),d(`, 열려 있는 동안 `),c(`code`,null,`body`),d(`에 `),c(`code`,null,`overflow: hidden`),d(`을 걸어 `),c(`strong`,null,`배경 스크롤을 잠급니다.`)],-1)]]),_:1})]),c(`section`,P,[r[5]||=c(`h2`,null,[c(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),c(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=c(`p`,null,`두 가상 화면에서 각각 ‘열기’를 누른 뒤, Tab·Escape를 눌러 보고 팝업 위에서 스크롤해 보세요.`,-1),u(j)]),c(`section`,F,[r[22]||=c(`h2`,null,[c(`span`,{class:`section-no`},`03`),d(` 왜 이런 일이 생길까요?`)],-1),r[23]||=c(`p`,null,[d(`팝업을 화면 맨 위에 보이게 하는 것은 CSS(`),c(`code`,null,`position: fixed`),d(`, `),c(`code`,null,`z-index`),d(`)의 일입니다. `),c(`strong`,null,`포커스 순서와 스크롤은 CSS로 덮었다고 바뀌지 않습니다.`),d(` Tab은 여전히 DOM 순서대로 다음 요소로 가고, 어두운 배경 뒤의 링크·버튼도 그대로 포커스를 받을 수 있습니다. 휠·터치 스크롤도 팝업 레이어가 스크롤할 내용이 없으면 문서로 넘어가 뒤 화면을 움직입니다.`)],-1),c(`p`,null,[r[8]||=d(`그래서 팝업을 열 때는 보이기와 별도로 아래 세 가지를 직접 처리해야 합니다. Vue에서 같은 처리를 하는 방법은 `,-1),u(s,{to:`/pub/vue/teleport-layer`},{default:a(()=>[...r[7]||=[d(`Teleport 레이어`,-1)]]),_:1}),r[9]||=d(` 문서에서 다룹니다. 여기서는 프레임워크 없는 JavaScript로 만듭니다.`,-1)]),c(`div`,I,[c(`table`,null,[r[20]||=c(`thead`,null,[c(`tr`,null,[c(`th`,null,`증상`),c(`th`,null,`원인`),c(`th`,null,`처리`)])],-1),c(`tbody`,null,[r[17]||=c(`tr`,null,[c(`td`,null,`Tab이 뒤 화면으로 감`),c(`td`,null,`뒤 화면 요소도 포커스를 받을 수 있음`),c(`td`,null,[d(`열 때 팝업 안으로 포커스 이동, 처음·끝 순환(포커스 트랩), 배경 `),c(`code`,null,`inert`)])],-1),r[18]||=c(`tr`,null,[c(`td`,null,`Escape 무반응, 닫으면 포커스가 처음으로`),c(`td`,null,`키 처리·포커스 복귀 코드 없음`),c(`td`,null,[c(`code`,null,`keydown`),d(`에서 Escape로 닫고, 연 버튼을 기억했다가 `),c(`code`,null,`focus()`)])],-1),r[19]||=c(`tr`,null,[c(`td`,null,`팝업 위 스크롤이 배경을 움직임`),c(`td`,null,[d(`문서(`),c(`code`,null,`body`),d(`)가 여전히 스크롤 가능`)]),c(`td`,null,[c(`code`,null,`body`),d(`에 `),c(`code`,null,`overflow: hidden`)])],-1),c(`tr`,null,[r[15]||=c(`td`,null,`잠그는 순간 화면이 옆으로 밀림`,-1),r[16]||=c(`td`,null,`스크롤바가 사라지며 내용 폭이 넓어짐`,-1),c(`td`,null,[r[11]||=d(`잠그기 직전에 잰 스크롤바 너비만큼 `,-1),r[12]||=c(`code`,null,`padding-right`,-1),r[13]||=d(` (스크롤바가 자리를 차지하는 원리: `,-1),u(s,{to:`/pub/css/scrollbar-shift`},{default:a(()=>[...r[10]||=[d(`스크롤바 화면 흔들림`,-1)]]),_:1}),r[14]||=d(`)`,-1)])])])])]),u(p,null,{default:a(()=>[...r[21]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`열 때`),d(` 연 버튼 기억 → 배경 잠금 → 팝업 안으로 포커스`)]),c(`li`,null,[c(`strong`,null,`Tab`),d(` 마지막에서 처음으로, Shift+Tab은 처음에서 마지막으로`)]),c(`li`,null,[c(`strong`,null,`Escape`),d(` 팝업 닫기`)]),c(`li`,null,[c(`strong`,null,`닫은 뒤`),d(` 잠금 해제 → 연 버튼으로 포커스`)])],-1)]]),_:1}),r[24]||=c(`p`,null,[d(`포커스 트랩은 팝업 안에서 Tab으로 갈 수 있는 요소(`),c(`code`,null,`button`),d(`, `),c(`code`,null,`input`),d(`, `),c(`code`,null,`a[href]`),d(` 등)를 찾아 `),c(`strong`,null,`처음과 끝만`),d(` 확인합니다. 마지막 요소에서 Tab을 누르면 기본 동작을 막고(`),c(`code`,null,`preventDefault()`),d(`) 첫 요소로 보내고, 첫 요소에서 Shift+Tab을 누르면 마지막 요소로 보냅니다. 중간 요소 사이의 이동은 브라우저에 맡깁니다.`)],-1)]),c(`section`,L,[r[26]||=c(`h2`,null,[c(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),r[27]||=c(`p`,null,[d(`팝업이 열린 상태에서 `),c(`strong`,null,`포커스가 지금 어디에 있는지, 배경이 막혀 있는지`),d(`를 차례로 확인합니다. 위 예제의 문제 쪽 팝업을 열고 따라 해 보세요.`)],-1),u(m,null,{default:a(()=>[...r[25]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`Console의 Live Expression으로 포커스 추적`),d(` Console 위쪽의 눈 모양 아이콘(Create live expression)을 누르고 `),c(`code`,null,`document.activeElement`),d(`를 입력합니다. 페이지를 누른 뒤 Tab을 누를 때마다 값이 바뀌므로, 팝업 밖 요소가 나오면 포커스가 빠진 것입니다.`)]),c(`li`,null,[c(`strong`,null,`Elements 패널에서 배경 막힘 확인`),d(` 팝업을 연 상태로 팝업을 뺀 화면 영역(`),c(`code`,null,`#wrap`),d(` 등)을 선택해 `),c(`code`,null,`inert`),d(` 속성이 붙었는지 봅니다. `),c(`code`,null,`aria-hidden="true"`),d(`만 있다면 스크린 리더에서만 숨겨질 뿐 Tab 포커스는 그대로 갑니다.`)]),c(`li`,null,[c(`strong`,null,`Accessibility 탭에서 접근성 트리 확인`),d(` Elements 패널 오른쪽의 Accessibility 탭에서 배경 요소를 선택합니다. 접근성 트리에서 제외(Ignored)되었는지와 그 이유가 표시됩니다. 팝업 요소는 role이 `),c(`code`,null,`dialog`),d(`이고 이름(제목)이 연결되어 있어야 합니다.`)]),c(`li`,null,[c(`strong`,null,`Styles 탭에서 스크롤 잠금 확인`),d(` 팝업을 연 상태로 `),c(`code`,null,`body`),d(`를 선택해 `),c(`code`,null,`overflow: hidden`),d(`이 적용되었는지 봅니다. `),c(`code`,null,`html`),d(`에도 `),c(`code`,null,`overflow`),d(`가 지정되어 있으면 `),c(`code`,null,`body`),d(`의 값이 화면 스크롤에 전달되지 않으므로 Computed 탭에서 `),c(`code`,null,`html`),d(`의 `),c(`code`,null,`overflow`),d(`도 함께 확인합니다.`)]),c(`li`,null,[c(`strong`,null,`Rendering 탭에서 화면 밀림 확인`),d(` DevTools 오른쪽 위의 점 세 개 메뉴(Customize and control DevTools) → More tools → Rendering에서 `),c(`strong`,null,`Layout Shift Regions`),d(`를 켭니다. 팝업을 열고 닫을 때 배경 내용이 파란색으로 깜빡이면 스크롤바가 사라지며 레이아웃이 밀린 것입니다.`)])],-1)]]),_:1})]),c(`section`,R,[r[28]||=c(`h2`,null,[c(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),r[29]||=c(`p`,null,[c(`code`,null,`keydown`),d(`은 `),c(`code`,null,`document`),d(`에 연결하고 팝업을 닫을 때 해제합니다. 팝업은 배경 영역(`),c(`code`,null,`#wrap`),d(`) 밖에 두어야 배경에만 `),c(`code`,null,`inert`),d(`를 걸 수 있습니다.`)],-1),u(g,{tabs:n(w)},null,8,[`tabs`])]),r[32]||=h(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>팝업이 아니어도 ‘화면 위에 덮이는 영역’이라면 같은 처리가 필요합니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>dialog 요소와 showModal()</h3><p>새로 만든다면 <code>&lt;dialog&gt;</code>와 <code>showModal()</code>을 먼저 검토합니다. 맨 위 레이어(top layer)에 열려 <code>z-index</code>를 신경 쓸 필요가 없고, 나머지 문서가 <code>inert</code> 상태가 되며, Escape 닫기와 <code>::backdrop</code> 배경을 기본으로 제공합니다. 다만 <strong>배경 스크롤은 잠그지 않으므로</strong> CSS로 따로 처리합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">/* 모달로 열린 dialog가 있는 동안 문서 스크롤을 잠급니다. */</span>
<span class="hljs-selector-tag">html</span><span class="hljs-selector-pseudo">:has</span>(dialog:modal) {
  <span class="hljs-attribute">overflow</span>: hidden;
}
</code></pre><h3>모바일 전체 메뉴(드로어)</h3><p>햄버거 버튼으로 여는 전체 메뉴도 팝업과 같습니다. 메뉴로 포커스를 옮기고 배경을 잠급니다. 화면을 넓혀 PC 메뉴로 바뀔 때 메뉴가 저절로 사라지면 <strong>잠금이 풀리지 않고 남는</strong> 경우가 많으니 함께 해제합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> pcQuery = <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">matchMedia</span>(<span class="hljs-string">&#39;(min-width: 1024px)&#39;</span>)

pcQuery.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;change&#39;</span>, <span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (event.<span class="hljs-property">matches</span> &amp;&amp; drawer.<span class="hljs-property">classList</span>.<span class="hljs-title function_">contains</span>(<span class="hljs-string">&#39;is-open&#39;</span>)) <span class="hljs-title function_">closeDrawer</span>() <span class="hljs-comment">// 잠금 해제·포커스 복귀 포함</span>
})
</code></pre><h3>팝업 안 스크롤 영역 끝에서 배경이 스크롤될 때</h3><p>약관처럼 팝업 안에 스크롤 영역이 있으면, 끝까지 내린 뒤 계속 스크롤할 때 스크롤이 바깥으로 넘어갑니다(스크롤 체이닝). 스크롤 영역에 <code>overscroll-behavior: contain</code>을 주면 넘어가지 않습니다. 내용이 넘쳐서 실제로 스크롤되는 영역에만 효과가 있습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.popup-body</span> {
  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">60vh</span>;
  <span class="hljs-attribute">overflow-y</span>: auto;
  <span class="hljs-attribute">overscroll-behavior</span>: contain;
}
</code></pre><h3>팝업 위에 팝업을 또 열 때</h3><p>확인 팝업 위에 알림 팝업을 여는 식으로 겹치면, 위의 팝업을 닫을 때 잠금이 먼저 풀려 버립니다. 잠근 횟수를 세어 <strong>마지막 팝업이 닫힐 때만</strong> 해제합니다. 연 버튼도 팝업마다 따로 기억합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">let</span> lockCount = <span class="hljs-number">0</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">lockScroll</span>(<span class="hljs-params"></span>) {
  lockCount += <span class="hljs-number">1</span>
  <span class="hljs-keyword">if</span> (lockCount === <span class="hljs-number">1</span>) <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span>.<span class="hljs-property">style</span>.<span class="hljs-property">overflow</span> = <span class="hljs-string">&#39;hidden&#39;</span>
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">unlockScroll</span>(<span class="hljs-params"></span>) {
  lockCount = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(<span class="hljs-number">0</span>, lockCount - <span class="hljs-number">1</span>)
  <span class="hljs-keyword">if</span> (lockCount === <span class="hljs-number">0</span>) <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span>.<span class="hljs-property">style</span>.<span class="hljs-property">overflow</span> = <span class="hljs-string">&#39;&#39;</span>
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>iOS Safari 16 미만은 <code>body</code>의 <code>overflow: hidden</code>으로 터치 스크롤이 막히지 않았습니다.</strong> 이 버전까지 지원해야 하면 ‘iOS 16 미만 대응’ 탭처럼 <code>body</code>를 <code>position: fixed</code>로 고정하고 <code>top</code>에 현재 스크롤 위치를 음수로 넣은 뒤, 해제할 때 <code>scrollTo()</code>로 위치를 되돌립니다.</li><li><strong><code>inert</code>는 비교적 최근 기능입니다.</strong> Chrome 102, Safari 15.5, Firefox 112부터 지원합니다. 지원하지 않는 환경까지 맞춰야 하면 포커스 트랩과 배경의 <code>aria-hidden=&quot;true&quot;</code>를 함께 씁니다. 팝업에는 <code>role=&quot;dialog&quot;</code>, <code>aria-modal=&quot;true&quot;</code>, <code>aria-labelledby</code>를 붙입니다.</li><li><strong>고정 요소는 padding 보정이 적용되지 않습니다.</strong> <code>body</code>의 <code>padding-right</code>는 <code>position: fixed</code> 헤더·하단 버튼에 영향을 주지 않으므로 같은 값을 따로 더합니다(예: <code>right: calc(20px + var(--scrollbar-width))</code>). 페이지(<code>html</code>)에 <code>scrollbar-gutter: stable</code>을 주는 방법도 있지만 짧은 페이지에도 오른쪽 빈 자리가 남습니다.</li><li><strong>열 때 포커스 위치를 정해 둡니다.</strong> 입력이 목적이면 첫 입력창, 안내문이 길면 제목(<code>tabindex=&quot;-1&quot;</code>)으로 보냅니다. 닫은 뒤 연 버튼이 사라졌다면(목록 삭제 등) 그 근처의 의미 있는 요소로 보냅니다.</li></ul></section>`,2),c(`section`,z,[r[31]||=c(`h2`,null,[c(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(_,null,{default:a(()=>[...r[30]||=[c(`p`,null,`위 예제에서 각 가상 화면의 ‘열기’를 누른 뒤 진행합니다.`,-1),c(`ul`,{class:`checklist`},[c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`문제 쪽에서 Tab을 누르면 ‘팝업 밖 포커스’ 횟수가 늘고, 뒤 화면 메뉴가 강조된다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`해결 쪽에서 Tab·Shift+Tab을 여러 번 눌러도 포커스가 팝업 안에서만 돌고, Escape를 누르면 ‘열기 버튼’으로 돌아온다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`팝업 위에서 휠을 굴리면 문제 쪽만 ‘열린 뒤 배경 이동’ 값이 늘어난다.`)])])],-1)]]),_:1})])])}}};export{de as default,X as duration,K as group,B as id,Q as keyProperty,G as lead,Y as level,U as navTitle,V as order,Z as prerequisites,ue as references,le as related,$ as status,W as summary,J as tags,H as title,q as topic,ce as updated};