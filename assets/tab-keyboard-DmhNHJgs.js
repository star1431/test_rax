import{D as e,G as t,H as n,L as r,R as i,V as a,c as o,d as s,g as c,h as l,j as u,k as d,l as f,m as p,pt as m,r as h,ut as g,w as _}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=[{id:`detail`,label:`상세 정보`,text:`소재: 면 100% · 세탁기 사용 가능`},{id:`delivery`,label:`배송 안내`,text:`오후 2시 이전 주문은 당일 출발합니다.`},{id:`review`,label:`리뷰`,text:`구매 후기 12건 · 평균 4.6점`}],b=[{value:`automatic`,label:`자동 활성화`},{value:`manual`,label:`수동 활성화`}],x=[{label:`해결 코드`,language:`javascript`,code:`// 'automatic': 방향키로 포커스를 옮기면 바로 선택(패널이 즉시 보일 때 권장)
// 'manual': 방향키는 포커스만 옮기고, Enter·Space로 선택(패널을 불러오는 데 시간이 걸릴 때)
const ACTIVATION = 'automatic'

const tablist = document.querySelector('.product-tabs [role="tablist"]')
const tabs = [...tablist.querySelectorAll('[role="tab"]')]

// 선택된 탭만 aria-selected="true", tabindex="0" → Tab 키는 선택된 탭 하나에만 멈춥니다.
function selectTab(nextTab) {
  tabs.forEach((tab) => {
    const selected = tab === nextTab
    tab.setAttribute('aria-selected', String(selected))
    tab.tabIndex = selected ? 0 : -1
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected
  })
}

// 마우스 클릭, 그리고 button이므로 Enter·Space도 click으로 들어옵니다.
tablist.addEventListener('click', (event) => {
  const tab = event.target.closest('[role="tab"]')
  if (tab) selectTab(tab)
})

// 탭 사이 이동은 방향키로 합니다. 끝에서 누르면 반대쪽 끝으로 갑니다.
tablist.addEventListener('keydown', (event) => {
  const current = tabs.indexOf(document.activeElement)
  if (current < 0) return

  let next
  switch (event.key) {
    case 'ArrowRight': next = (current + 1) % tabs.length; break
    case 'ArrowLeft': next = (current - 1 + tabs.length) % tabs.length; break
    case 'Home': next = 0; break
    case 'End': next = tabs.length - 1; break
    default: return // Tab, Enter, Space 등은 브라우저 기본 동작에 맡깁니다.
  }

  event.preventDefault() // 방향키·Home·End로 페이지가 스크롤되지 않게 합니다.
  tabs[next].focus()
  if (ACTIVATION === 'automatic') selectTab(tabs[next])
})`},{label:`문제 코드`,language:`javascript`,code:`// div에 click만 연결했습니다.
document.querySelectorAll('.product-tabs .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.product-tabs .tab').forEach((item) => {
      item.classList.toggle('is-selected', item === tab) // 선택 상태가 모양(class)에만 있습니다.
    })
    document.querySelectorAll('.product-tabs .panel').forEach((panel) => {
      panel.hidden = panel.id !== tab.dataset.panel
    })
  })
})
// div는 Tab 키로 포커스를 받지 못하고, Enter·Space를 눌러도 click이 발생하지 않습니다.
// 스크린 리더에는 '탭'이라는 역할도, 어떤 탭이 선택되었는지도 전달되지 않습니다.`},{label:`HTML`,language:`xml`,code:`<div class="product-tabs">
  <!-- 탭 묶음: 이름(aria-label)으로 무엇의 탭인지 알려 줍니다. -->
  <div role="tablist" aria-label="상품 정보">
    <button type="button" role="tab" id="tab-detail" aria-selected="true" aria-controls="panel-detail">상세 정보</button>
    <button type="button" role="tab" id="tab-delivery" aria-selected="false" aria-controls="panel-delivery" tabindex="-1">배송 안내</button>
    <button type="button" role="tab" id="tab-review" aria-selected="false" aria-controls="panel-review" tabindex="-1">리뷰</button>
  </div>

  <!-- 패널: 어느 탭의 내용인지 aria-labelledby로 연결합니다. tabindex="0"이면 탭 다음 Tab에서 패널로 갑니다.
       패널 첫 내용이 링크·버튼처럼 포커스 가능한 요소면 tabindex는 생략할 수 있습니다. -->
  <div role="tabpanel" id="panel-detail" aria-labelledby="tab-detail" tabindex="0">…</div>
  <div role="tabpanel" id="panel-delivery" aria-labelledby="tab-delivery" tabindex="0" hidden>…</div>
  <div role="tabpanel" id="panel-review" aria-labelledby="tab-review" tabindex="0" hidden>…</div>
</div>`},{label:`문제 HTML`,language:`xml`,code:`<div class="product-tabs">
  <div class="tab-list">
    <div class="tab is-selected" data-panel="panel-detail">상세 정보</div>
    <div class="tab" data-panel="panel-delivery">배송 안내</div>
    <div class="tab" data-panel="panel-review">리뷰</div>
  </div>
  <div class="panel" id="panel-detail">…</div>
  <div class="panel" id="panel-delivery" hidden>…</div>
  <div class="panel" id="panel-review" hidden>…</div>
</div>`},{label:`CSS`,language:`css`,code:`.product-tabs [role='tablist'] {
  display: flex;
  gap: 2px;
  overflow-x: auto; /* 탭이 많으면 가로 스크롤 */
  border-bottom: 1px solid #dbe2ed;
}

.product-tabs [role='tab'] {
  flex-shrink: 0;
  padding: 8px 12px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: none;
  color: #707f97;
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
}

/* 선택 상태는 class가 아니라 aria-selected로 표시해 상태와 모양을 하나로 맞춥니다. */
.product-tabs [role='tab'][aria-selected='true'] {
  border-bottom-color: #3162d4;
  color: #3162d4;
  font-weight: 700;
}

/* overflow로 잘리지 않게 포커스 링을 안쪽에 그립니다. */
.product-tabs [role='tab']:focus-visible {
  outline: 2px solid #638cf5;
  outline-offset: -2px;
}

.product-tabs [role='tabpanel']:focus-visible {
  outline: 2px solid #638cf5;
  outline-offset: 2px;
}`}],S={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-tabkey-mode-label`},C=[`aria-checked`,`onClick`],w={class:`demo-tabkey-status`},T={class:`demo-tabkey-a11y`},E=[`onFocusin`,`onFocusout`],D={class:`demo-tabkey-list`},O=[`onClick`],k=[`hidden`],A=[`data-name`],j=[`id`,`aria-selected`,`aria-controls`,`tabindex`,`data-name`,`onClick`],M=[`id`,`aria-labelledby`,`hidden`,`data-name`],N=[`data-name`],P={__name:`TabKeyboardDemo`,setup(c){let u=e=>e?`solved`:`problem`,p={},x={},P={problem:null,solved:null},F=(e=`없음`)=>({name:e,tag:`-`,role:`-`,selected:`-`,tabindex:`-`}),I=n(`automatic`),L=a({problem:`detail`,solved:`detail`}),R=a({problem:F(),solved:F()}),z=e=>y.find(t=>t.id===e)?.label??`-`;function B(e){let t=P[e];t&&(R[e]={name:t.dataset.name??t.textContent.trim(),tag:`<${t.tagName.toLowerCase()}>`,role:t.getAttribute(`role`)??`없음`,selected:t.getAttribute(`aria-selected`)??`없음`,tabindex:t.getAttribute(`tabindex`)??`없음`})}function V(e,t){let n=u(e);P[n]=t.target,B(n)}function H(e,t){let n=u(e);p[n]?.contains(t.relatedTarget)||(P[n]=null,R[n]=F(t.relatedTarget?`가상 화면 밖`:`없음 (body)`))}function U(e){let t=y.map(e=>x[e.id]),n=t.indexOf(document.activeElement);if(n<0)return;let r;switch(e.key){case`ArrowRight`:r=(n+1)%t.length;break;case`ArrowLeft`:r=(n-1+t.length)%t.length;break;case`Home`:r=0;break;case`End`:r=t.length-1;break;default:return}e.preventDefault(),t[r].focus(),I.value===`automatic`&&(L.solved=y[r].id)}r(()=>[L.problem,L.solved],()=>{B(`problem`),B(`solved`)},{flush:`post`});async function W(){L.problem=`detail`,L.solved=`detail`,I.value=`automatic`,await _(),P.problem=null,P.solved=null,R.problem=F(),R.solved=F()}return(n,r)=>(e(),f(v,{problem:{code:`div + click`,note:`Tab 키가 탭을 건너뛰고 패널 안 버튼으로 갑니다. 방향키·Enter·Space에도 반응하지 않고, role·선택 상태가 없습니다.`},solved:{code:`button role=tab + aria-selected + tabindex`,note:`Tab 한 번에 선택된 탭으로 가고, 방향키·Home·End로 탭을 바꿉니다. 다시 Tab을 누르면 패널로 갑니다.`}},{controls:i(()=>[r[0]||=o(`span`,{id:`demo-tabkey-mode-label`,class:`demo-label`},`해결 쪽 활성화`,-1),o(`div`,S,[(e(!0),s(h,null,d(t(b),t=>(e(),s(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":I.value===t.value,onClick:e=>I.value=t.value},m(t.label),9,C))),128))]),r[1]||=o(`span`,{class:`demo-label`},`조작`,-1),o(`div`,{class:`sample-buttons`},[o(`button`,{type:`button`,onClick:W},`처음으로`)])]),default:i(({solved:n})=>[o(`p`,w,[r[2]||=l(` 현재 포커스 `,-1),o(`strong`,null,m(R[u(n)].name),1),r[3]||=l(` · 선택된 탭 `,-1),o(`strong`,null,m(z(L[u(n)])),1)]),o(`p`,T,[r[4]||=l(` 접근성 정보 `,-1),o(`code`,null,m(R[u(n)].tag),1),o(`code`,null,`role: `+m(R[u(n)].role),1),o(`code`,null,`aria-selected: `+m(R[u(n)].selected),1),o(`code`,null,`tabindex: `+m(R[u(n)].tabindex),1)]),o(`div`,{ref:e=>p[u(n)]=e,class:`demo-tabkey-screen`,onFocusin:e=>V(n,e),onFocusout:e=>H(n,e)},[r[5]||=o(`button`,{type:`button`,class:`demo-tabkey-start`,"data-name":`시작 버튼`},`시작 버튼`,-1),n?(e(),s(h,{key:1},[o(`div`,{class:`demo-tabkey-list`,role:`tablist`,"aria-label":`상품 정보`,onKeydown:U},[(e(!0),s(h,null,d(t(y),t=>(e(),s(`button`,{id:`demo-tabkey-tab-${t.id}`,key:t.id,ref_for:!0,ref:e=>x[t.id]=e,type:`button`,class:`demo-tabkey-tab`,role:`tab`,"aria-selected":String(L.solved===t.id),"aria-controls":`demo-tabkey-panel-${t.id}`,tabindex:L.solved===t.id?0:-1,"data-name":`${t.label} 탭`,onClick:e=>L.solved=t.id},m(t.label),9,j))),128))],32),(e(!0),s(h,null,d(t(y),t=>(e(),s(`div`,{id:`demo-tabkey-panel-${t.id}`,key:t.id,class:`demo-tabkey-panel`,role:`tabpanel`,"aria-labelledby":`demo-tabkey-tab-${t.id}`,tabindex:`0`,hidden:L.solved!==t.id,"data-name":`${t.label} 패널`},[o(`p`,null,m(t.text),1),o(`button`,{type:`button`,"data-name":`${t.label} 패널 안 버튼`},`문의하기`,8,N)],8,M))),128))],64)):(e(),s(h,{key:0},[o(`div`,D,[(e(!0),s(h,null,d(t(y),t=>(e(),s(`div`,{key:t.id,class:g([`demo-tabkey-tab`,{"is-selected":L.problem===t.id}]),onClick:e=>L.problem=t.id},m(t.label),11,O))),128))]),(e(!0),s(h,null,d(t(y),t=>(e(),s(`div`,{key:t.id,class:`demo-tabkey-panel`,hidden:L.problem!==t.id},[o(`p`,null,m(t.text),1),o(`button`,{type:`button`,"data-name":`${t.label} 패널 안 버튼`},`문의하기`,8,A)],8,k))),128))],64))],40,E)]),caption:i(()=>[...r[6]||=[l(` 각 가상 화면의 ‘시작 버튼’을 누른 뒤 Tab·Shift+Tab, 방향키(← →), Home·End, Enter·Space를 눌러 보세요. ‘접근성 정보’는 지금 포커스된 요소의 태그와 role·aria-selected·tabindex 속성 값을 그대로 읽어 표시합니다(속성이 없으면 ‘없음’). ‘수동 활성화’에서는 방향키로 포커스만 옮겨지고, Enter·Space를 눌러야 선택됩니다. 스크린 리더가 실제로 읽는 문구는 스크린 리더·브라우저에 따라 다르므로 직접 확인하세요. `,-1)]]),_:1}))}},F={class:`doc-body`},I={id:`section-0`},L={id:`section-1`},R={id:`section-3`},z={id:`section-4`},B={id:`section-7`},V=`tab-keyboard`,H=7,U=`탭 메뉴를 키보드로 쓸 수 없을 때 (방향키 이동과 aria)`,W=`탭 UI 키보드 이동`,G=`div에 클릭만 연결한 탭이 키보드로 선택되지 않고 스크린 리더에 선택 상태가 전달되지 않는 문제를, WAI-ARIA 탭 패턴(role, aria-selected, aria-controls, roving tabindex, 방향키 이동)으로 해결합니다.`,K=`탭을 마우스로는 바꿀 수 있는데 Tab 키로는 탭에 갈 수조차 없다면?
탭은 button으로 만들고, 역할과 선택 상태를 aria로 알려 주세요.
`,q=`접근성`,J=`탭`,Y=[`JavaScript`,`탭`,`접근성`,`키보드`,`role`,`aria-selected`,`aria-controls`,`tabindex`,`roving tabindex`,`WAI-ARIA`],X=`중급`,Z=`약 12분`,Q=[`addEventListener`,`document.activeElement`,`tabindex`],$=`role="tab" + aria-selected + tabindex`,ee=`published`,te=`2026-11-13`,ne=[`modal-focus-scroll`,`event-delegation`],re=[{title:`WAI-ARIA APG — Tabs 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`},{title:`WAI-ARIA APG — Tabs with Automatic Activation 예제`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/`},{title:`WAI-ARIA APG — Tabs with Manual Activation 예제`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/`},{title:`WAI-ARIA APG — Developing a Keyboard Interface (roving tabindex)`,url:`https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/`},{title:`MDN — ARIA tab role`,url:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role`}],ie={__name:`tab-keyboard`,setup(n,{expose:r}){return r({frontmatter:{id:`tab-keyboard`,order:7,title:`탭 메뉴를 키보드로 쓸 수 없을 때 (방향키 이동과 aria)`,navTitle:`탭 UI 키보드 이동`,summary:`div에 클릭만 연결한 탭이 키보드로 선택되지 않고 스크린 리더에 선택 상태가 전달되지 않는 문제를, WAI-ARIA 탭 패턴(role, aria-selected, aria-controls, roving tabindex, 방향키 이동)으로 해결합니다.`,lead:`탭을 마우스로는 바꿀 수 있는데 Tab 키로는 탭에 갈 수조차 없다면?
탭은 button으로 만들고, 역할과 선택 상태를 aria로 알려 주세요.
`,group:`접근성`,topic:`탭`,tags:[`JavaScript`,`탭`,`접근성`,`키보드`,`role`,`aria-selected`,`aria-controls`,`tabindex`,`roving tabindex`,`WAI-ARIA`],level:`중급`,duration:`약 12분`,prerequisites:[`addEventListener`,`document.activeElement`,`tabindex`],keyProperty:`role="tab" + aria-selected + tabindex`,status:`published`,updated:`2026-11-13`,related:[`modal-focus-scroll`,`event-delegation`],references:[{title:`WAI-ARIA APG — Tabs 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`},{title:`WAI-ARIA APG — Tabs with Automatic Activation 예제`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/`},{title:`WAI-ARIA APG — Tabs with Manual Activation 예제`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/`},{title:`WAI-ARIA APG — Developing a Keyboard Interface (roving tabindex)`,url:`https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/`},{title:`MDN — ARIA tab role`,url:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role`}]}}),(n,r)=>{let a=u(`DocIssue`),d=u(`DocTakeaway`),f=u(`DocInspect`),m=u(`RouterLink`),h=u(`CodePanel`),g=u(`DocPractice`);return e(),s(`div`,F,[o(`section`,I,[r[2]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),l(` 문제 상황`)],-1),r[3]||=o(`p`,null,[l(`상품 상세 화면에 ‘상세 정보 · 배송 안내 · 리뷰’ 탭이 있습니다. 마우스로 누르면 잘 바뀌는데, 키보드로 Tab을 누르면 `),o(`strong`,null,`탭을 모두 건너뛰고 패널 안의 버튼으로 이동`),l(`합니다. 방향키나 Enter를 눌러도 탭이 바뀌지 않고, 스크린 리더로 들으면 탭이라는 것도, 어떤 탭이 선택되었는지도 알 수 없습니다.`)],-1),r[4]||=o(`p`,null,[l(`탭을 `),o(`code`,null,`div`),l(`에 클릭만 연결해 만들면 마우스 확인에서는 문제가 보이지 않고, 웹 접근성 점검이나 키보드·스크린 리더로 확인하는 QA에서 이런 형태로 돌아옵니다.`)],-1),c(a,{title:`상품 상세: 상세 정보·배송 안내·리뷰 탭을 키보드로 선택할 수 없음`,env:`전체 브라우저 · 키보드 사용, 스크린 리더 사용`,expected:`Tab 키로 탭 목록에 들어가 방향키로 탭을 바꾸고, 스크린 리더가 탭 역할과 선택된 탭을 알려 줌`,actual:`Tab 키가 탭을 건너뛰고 패널 안 버튼으로 이동, 방향키·Enter·Space 무반응, 탭 역할과 선택 상태가 전달되지 않음`},{default:i(()=>[...r[0]||=[o(`ol`,null,[o(`li`,null,`상품 상세 화면에서 탭 위쪽의 요소를 한 번 누릅니다.`),o(`li`,null,`Tab 키를 눌러 포커스가 어디로 가는지 확인합니다.`),o(`li`,null,`탭 근처에서 방향키, Enter, Space를 눌러 봅니다.`)],-1)]]),_:1}),c(d,null,{default:i(()=>[...r[1]||=[o(`p`,null,[l(`탭은 `),o(`strong`,null,[o(`code`,null,`button`),l(`으로 만들고`)]),l(),o(`code`,null,`role="tab"`),l(`, `),o(`code`,null,`aria-selected`),l(`, `),o(`code`,null,`aria-controls`),l(`로 역할과 상태를 알려 주세요. 선택된 탭만 `),o(`code`,null,`tabindex="0"`),l(`, 나머지는 `),o(`code`,null,`-1`),l(`로 두고 `),o(`strong`,null,`탭 사이는 방향키로`),l(` 이동시킵니다.`)],-1)]]),_:1})]),o(`section`,L,[r[5]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=o(`p`,null,`두 가상 화면에서 ‘시작 버튼’을 누른 뒤, Tab 키와 방향키로 탭을 바꿔 보세요.`,-1),c(P)]),r[24]||=p(`<section id="section-2"><h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>Tab 키로 포커스를 받는 요소는 정해져 있습니다. <code>button</code>, <code>a[href]</code>, <code>input</code> 같은 요소와 <code>tabindex</code>를 준 요소입니다. <code>div</code>에 클릭만 연결하면 Tab 순서에 들어가지 않습니다. <code>tabindex=&quot;0&quot;</code>을 붙여 포커스를 받게 해도 <strong>Enter·Space를 눌렀을 때 click이 발생하지 않아</strong> 키 처리를 따로 만들어야 합니다. <code>button</code>은 Enter·Space를 누르면 click 이벤트가 발생하므로 이 처리가 필요 없습니다. <code>&lt;a href=&quot;#&quot;&gt;</code>로 만든 탭은 포커스와 Enter는 되지만, Space를 누르면 페이지가 스크롤되고 역할은 탭이 아니라 링크로 전달됩니다.</p><p>스크린 리더는 화면 모양이 아니라 <strong>접근성 트리의 역할(role)·이름(name)·상태</strong>를 읽습니다. 밑줄과 색으로 표시한 선택 상태는 전달되지 않으므로 <code>aria-selected</code>로 알려 주어야 합니다. 탭과 패널은 <code>aria-controls</code>, <code>aria-labelledby</code>로 서로 연결합니다.</p><div class="table-wrap"><table><thead><tr><th>요소</th><th>속성</th><th>역할</th></tr></thead><tbody><tr><td>탭 묶음</td><td><code>role=&quot;tablist&quot;</code>, <code>aria-label</code></td><td>탭 목록임과 무엇의 탭인지 알림</td></tr><tr><td>탭</td><td><code>button</code>, <code>role=&quot;tab&quot;</code>, <code>aria-selected</code>, <code>aria-controls</code></td><td>탭 역할, 선택 여부, 연결된 패널</td></tr><tr><td>패널</td><td><code>role=&quot;tabpanel&quot;</code>, <code>aria-labelledby</code>, <code>tabindex=&quot;0&quot;</code></td><td>어느 탭의 내용인지, Tab으로 패널에 도착(패널 첫 내용이 링크·버튼처럼 포커스 가능한 요소면 <code>tabindex</code> 생략 가능)</td></tr><tr><td>선택 안 된 패널</td><td><code>hidden</code></td><td>화면·Tab 순서·스크린 리더에서 모두 빠짐</td></tr></tbody></table></div><p>키보드 동작은 WAI-ARIA APG(ARIA Authoring Practices Guide)의 탭 패턴을 따릅니다. 탭이 여러 개여도 Tab 키는 <strong>선택된 탭 하나에만</strong> 멈추고, 탭 사이는 방향키로 이동합니다. 이렇게 포커스를 받을 하나에만 <code>tabindex=&quot;0&quot;</code>을 주고 나머지는 <code>-1</code>로 두는 방법을 roving tabindex라고 합니다. 세로로 놓인 탭은 <code>aria-orientation=&quot;vertical&quot;</code>을 붙이고 위·아래 방향키를 씁니다.</p><div class="table-wrap"><table><thead><tr><th>키</th><th>동작</th></tr></thead><tbody><tr><td>Tab</td><td>탭 목록에 들어오면 선택된 탭으로, 한 번 더 누르면 패널로 이동</td></tr><tr><td>← →</td><td>이전·다음 탭으로 이동(끝에서는 반대쪽 끝으로)</td></tr><tr><td>Home · End</td><td>첫 탭·마지막 탭으로 이동</td></tr><tr><td>Enter · Space</td><td>수동 활성화일 때 포커스된 탭을 선택</td></tr></tbody></table></div><p>방향키로 이동할 때 탭을 바로 선택하면 <strong>자동 활성화</strong>, 포커스만 옮기고 Enter·Space로 선택하면 <strong>수동 활성화</strong>입니다. APG는 패널이 지연 없이 바로 보일 때 자동 활성화를 권장합니다. 패널을 열 때마다 데이터를 불러와 시간이 걸린다면, 방향키를 누를 때마다 요청이 가지 않도록 수동 활성화를 씁니다.</p></section>`,1),o(`section`,R,[r[8]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),l(` 원인 찾기`)],-1),r[9]||=o(`p`,null,[l(`탭이 키보드로 동작하지 않을 때는 `),o(`strong`,null,`포커스가 탭에 도착하는지, 탭의 역할과 상태가 무엇으로 전달되는지`),l(`를 차례로 확인합니다. 위 예제의 문제 쪽과 해결 쪽을 번갈아 보며 따라 해 보세요.`)],-1),c(f,null,{default:i(()=>[...r[7]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`Tab 키로 포커스 링 따라가기`),l(` 탭 바로 앞의 요소를 누른 뒤 Tab을 누릅니다. 포커스 링이 탭에 생기지 않고 패널 안 버튼으로 넘어가면, 탭이 포커스를 받을 수 없는 요소로 만들어진 것입니다.`)]),o(`li`,null,[o(`strong`,null,`Console의 Live Expression으로 포커스 추적`),l(` Console 위쪽의 눈 모양 아이콘(Create live expression)을 누르고 `),o(`code`,null,`document.activeElement`),l(`를 입력합니다. 탭에 포커스를 두고 방향키를 눌러도 값이 바뀌지 않으면 방향키 처리가 없는 것입니다.`)]),o(`li`,null,[o(`strong`,null,`Elements 패널에서 tabindex 확인`),l(` 해결 쪽 탭 목록을 펼쳐 둔 채 방향키를 누르면, 선택된 탭만 `),o(`code`,null,`tabindex="0"`),l(`이고 나머지는 `),o(`code`,null,`-1`),l(`로 바뀌는 것을 볼 수 있습니다. 모든 탭이 `),o(`code`,null,`0`),l(`이면 Tab 키가 탭마다 멈추고, 모두 `),o(`code`,null,`-1`),l(`이면 Tab 키로 탭 목록에 들어올 수 없습니다.`)]),o(`li`,null,[o(`strong`,null,`Accessibility 탭에서 role·name·상태 확인`),l(` Elements 패널에서 탭을 선택하고 오른쪽의 Accessibility 탭을 엽니다. Computed Properties에서 Name과 Role을, ARIA Attributes에서 `),o(`code`,null,`aria-selected`),l(` 값을 확인합니다. 문제 쪽 `),o(`code`,null,`div`),l(`는 Role이 `),o(`code`,null,`tab`),l(`으로 나오지 않고 `),o(`code`,null,`aria-selected`),l(`도 없습니다.`)])],-1)]]),_:1})]),o(`section`,z,[r[21]||=o(`h2`,null,[o(`span`,{class:`section-no`},`05`),l(` 해결 코드`)],-1),o(`p`,null,[r[11]||=l(`탭 목록에 `,-1),r[12]||=o(`code`,null,`click`,-1),r[13]||=l(`과 `,-1),r[14]||=o(`code`,null,`keydown`,-1),r[15]||=l(`을 하나씩 연결합니다. 클릭 처리는 `,-1),c(m,{to:`/pub/js/event-delegation`},{default:i(()=>[...r[10]||=[l(`이벤트 위임`,-1)]]),_:1}),r[16]||=l(`과 같은 방식으로 `,-1),r[17]||=o(`code`,null,`closest()`,-1),r[18]||=l(`를 씁니다. `,-1),r[19]||=o(`code`,null,`ACTIVATION`,-1),r[20]||=l(` 값으로 자동·수동 활성화를 바꿉니다.`,-1)]),c(h,{tabs:t(x)},null,8,[`tabs`])]),r[25]||=p(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>탭과 모양이 비슷하거나 같은 원인(클릭만 연결, 상태가 모양에만 있음)으로 생기는 경우입니다. 무엇을 만드는지에 따라 패턴이 다르므로 아래를 함께 확인하세요.</p><h3>아코디언</h3><p>제목을 누르면 내용이 펼쳐지는 아코디언은 탭이 아닙니다. 제목을 <code>button</code>으로 만들고 열림 상태를 <code>aria-expanded</code>로 알립니다. 방향키 처리 없이 Tab 키로 제목 사이를 이동해도 됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">&quot;faq-1&quot;</span>&gt;</span>배송은 얼마나 걸리나요?<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;faq-1&quot;</span> <span class="hljs-attr">hidden</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h3>드롭다운 메뉴</h3><p>헤더의 펼침 메뉴에 <code>role=&quot;menu&quot;</code>를 붙이면 방향키 이동, 글자 입력 이동, Escape 닫기 등 메뉴 버튼 패턴의 키보드 동작을 모두 만들어야 합니다. 링크 목록을 펼치는 것이 목적이라면 버튼과 <code>aria-expanded</code>만 쓰는 간단한 방식(Disclosure)으로 충분한 경우가 많습니다. 자세한 차이는 <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/" target="_blank" rel="noreferrer">APG Menu Button 패턴</a>과 <a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/" target="_blank" rel="noreferrer">Disclosure 패턴</a>을 참고하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">&quot;gnb-shop&quot;</span>&gt;</span>쇼핑<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;gnb-shop&quot;</span> <span class="hljs-attr">hidden</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/shop/new&quot;</span>&gt;</span>신상품<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/shop/best&quot;</span>&gt;</span>베스트<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre><h3>이미 a 태그로 만든 탭</h3><p>누를 때마다 <strong>다른 페이지로 이동</strong>한다면 모양만 탭일 뿐 내비게이션입니다. <code>role=&quot;tab&quot;</code>을 붙이지 말고 링크로 두며, 현재 페이지에 <code>aria-current=&quot;page&quot;</code>를 붙입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;고객센터 메뉴&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/cs/notice&quot;</span> <span class="hljs-attr">aria-current</span>=<span class="hljs-string">&quot;page&quot;</span>&gt;</span>공지사항<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/cs/faq&quot;</span>&gt;</span>자주 묻는 질문<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/cs/qna&quot;</span>&gt;</span>1:1 문의<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
</code></pre><h3>탭이 많아 가로 스크롤할 때</h3><p>탭 목록에 <code>overflow-x: auto</code>를 주면 포커스 링이 잘릴 수 있으므로 <code>outline-offset</code>을 음수로 해서 안쪽에 그립니다. 방향키로 이동한 탭이 스크롤 영역 밖에 있으면 보이도록 맞춥니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">tabs[next].<span class="hljs-title function_">focus</span>()
tabs[next].<span class="hljs-title function_">scrollIntoView</span>({ <span class="hljs-attr">block</span>: <span class="hljs-string">&#39;nearest&#39;</span>, <span class="hljs-attr">inline</span>: <span class="hljs-string">&#39;nearest&#39;</span> })
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>role만 붙인다고 키보드 동작이 생기지는 않습니다.</strong> <code>role=&quot;tab&quot;</code>은 스크린 리더에 ‘탭’이라고 알릴 뿐입니다. 탭이라고 알렸다면 방향키 이동까지 만들어야 사용자가 기대한 대로 동작합니다.</li><li><strong>선택 상태와 모양을 같은 값으로 관리합니다.</strong> 선택 표시를 <code>.is-selected</code> 같은 class로 따로 두면 <code>aria-selected</code>와 어긋나기 쉽습니다. CSS 선택자를 <code>[aria-selected=&#39;true&#39;]</code>로 쓰면 하나의 값으로 맞춰집니다.</li><li><strong>선택 안 된 패널은 <code>hidden</code>이나 <code>display: none</code>으로 숨깁니다.</strong> <code>opacity: 0</code>이나 <code>height: 0</code>으로만 숨기면 보이지 않는 패널 안의 링크·버튼으로 Tab 포커스가 갑니다.</li><li><strong>스크린 리더가 읽는 방식은 제품마다 다릅니다.</strong> 같은 마크업도 스크린 리더·브라우저에 따라 읽는 문구와 순서가 다를 수 있으니, 대상 환경의 스크린 리더로 직접 확인하세요.</li></ul></section>`,2),o(`section`,B,[r[23]||=o(`h2`,null,[o(`span`,{class:`section-no`},`08`),l(` 짧은 실습`)],-1),c(g,null,{default:i(()=>[...r[22]||=[o(`p`,null,`위 예제에서 각 가상 화면의 ‘시작 버튼’을 누른 뒤 Tab 키를 눌러 진행합니다.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`문제 쪽은 Tab을 누르면 ‘현재 포커스’가 탭을 건너뛰고 ‘상세 정보 패널 안 버튼’으로 바뀐다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[l(`해결 쪽은 Tab 한 번에 선택된 탭으로 가고, ← → · Home · End로 탭이 바뀌며 ‘접근성 정보’에 `),o(`code`,null,`aria-selected: true`),l(`, `),o(`code`,null,`tabindex: 0`),l(`이 표시된다.`)])])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[l(`‘수동 활성화’로 바꾸면 방향키로는 포커스만 옮겨져 `),o(`code`,null,`aria-selected: false`),l(`로 남고, Enter나 Space를 눌러야 선택된다.`)])])])],-1)]]),_:1})])])}}};export{ie as default,Z as duration,q as group,V as id,$ as keyProperty,K as lead,X as level,W as navTitle,H as order,Q as prerequisites,re as references,ne as related,ee as status,G as summary,Y as tags,U as title,J as topic,te as updated};