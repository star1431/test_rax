import{D as e,G as t,H as n,L as r,R as i,T as a,V as o,c as s,d as c,ft as l,g as u,h as d,j as f,k as p,l as m,m as h,pt as g,r as _,s as v,u as y,ut as b,w as ee}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as x}from"./DemoCompare-Bd6h8ThJ.js";var S=`/* 가상 화면: 안쪽 .demo-ss-page가 실제 페이지(또는 목록 영역)의 스크롤을 대신합니다. */
.demo-ss-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 220px;
  overflow: hidden;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-ss-bar {
  padding: 6px 12px;
  border-bottom: 1px solid #e2e8f1;
  color: #5b6b80;
}
/* 보이는 영역: 이 너비(W)가 사용자가 보는 화면 너비입니다. */
.demo-ss-frame {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden; /* 방법 2에서 밖으로 밀어낸 스크롤바를 잘라 냅니다. */
}
.demo-ss-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box; /* 잠글 때 더하는 padding-right가 너비 안에서 계산되도록 */
  width: 100%;
  overflow-y: auto; /* 내용이 길어지면 스크롤바가 생깁니다. (문제 상태는 이 상태 그대로) */
}
.demo-ss-page.is-locked {
  overflow: hidden; /* 팝업이 열려 스크롤을 잠근 상태: 스크롤바가 사라집니다. */
}

/* 방법 1. 잰 너비로 보정: 잠그기 직전에 잰 스크롤바 너비(--scrollbar-width)만큼 오른쪽을 채웁니다.
   스크롤바가 없었거나 겹쳐 보이는 환경이면 잰 값이 0이라 아무것도 바뀌지 않습니다. */
.demo-ss-page-compensate.is-locked {
  padding-right: var(--scrollbar-width, 0px);
}

/* 방법 2. 스크롤바 숨김(안쪽 영역): 스크롤바 너비만큼 넓혀 스크롤바를 보이는 영역(W) 밖으로 밀어냅니다.
   overflow-y: scroll로 스크롤바가 항상 있으므로 내용 너비 = (W + 스크롤바) − 스크롤바 = W 로 늘 같습니다.
   padding-right를 함께 주면 내용 너비가 W − 스크롤바로 줄어드니 넣지 않습니다. */
.demo-ss-page-hide {
  width: calc(100% + var(--scrollbar-width, 0px));
  overflow-y: scroll;
}
.demo-ss-page-hide.is-locked {
  padding-right: var(--scrollbar-width, 0px); /* 잠가서 스크롤바가 빠진 자리만 채웁니다. 내용 너비 = W */
}
/* 숨긴 스크롤바 대신 스크롤 위치를 보여 주는 얇은 막대 (위치·높이는 JavaScript가 계산) */
.demo-ss-thumb {
  position: absolute;
  top: 0;
  right: 2px;
  width: 4px;
  border-radius: 2px;
  background: rgba(60, 80, 110, 0.45);
  pointer-events: none;
}

/* 방법 3. 참고: 스크롤바 자리를 항상 비워 둡니다. 짧은 화면에도 오른쪽 빈 여백이 남습니다. */
.demo-ss-page-gutter {
  scrollbar-gutter: stable;
}

/* 화면 안 요소: 오른쪽 정렬 메뉴와 가운데 정렬 카드 */
.demo-ss-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f1;
}
.demo-ss-menu {
  padding: 2px 8px;
  border: 1px solid #c9d4e3;
  border-radius: 4px;
}
.demo-ss-card {
  width: 180px;
  margin: 12px auto; /* 가운데 정렬: 내용 너비가 바뀌면 왼쪽 위치가 바뀝니다. */
  padding: 10px 12px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #f5f8fc;
}
.demo-ss-card strong {
  display: block;
  margin-bottom: 4px;
}
.demo-ss-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-ss-list li {
  padding: 6px 0;
  border-top: 1px solid #e2e8f1;
}

/* 팝업: 배경을 어둡게 덮고, 뒤 화면의 움직임이 보이도록 아래쪽에 작게 띄웁니다. */
.demo-ss-dim {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 12px;
  background: rgba(20, 30, 48, 0.35);
}
.demo-ss-popup {
  padding: 10px 14px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(20, 30, 48, 0.2);
}

/* 예제 측정값 표시 (해결과는 관계없는 안내용 스타일) */
.demo-ss-meter {
  margin: 8px 0 0;
  font-size: 13px;
  color: #4b5b73;
}
.demo-ss-meter b {
  color: #1b7f4b;
}
.demo-ss-meter b.is-moved {
  color: #c62828;
}

/* 예제용: 어느 환경에서나 자리를 차지하는 12px 스크롤바를 보이게 합니다. 실무 코드에는 넣지 않습니다. */
.demo-ss-scroll {
  scrollbar-width: auto; /* 표준 속성을 auto로 두어야 Chrome에서 ::-webkit-scrollbar가 적용됩니다. */
  scrollbar-color: auto;
}
.demo-ss-scroll::-webkit-scrollbar {
  width: 12px;
}
.demo-ss-scroll::-webkit-scrollbar-track {
  background: #eef2f7;
}
.demo-ss-scroll::-webkit-scrollbar-thumb {
  border: 3px solid #eef2f7;
  border-radius: 6px;
  background: #9aabc2;
}
/* 스크롤바 너비를 재는 보이지 않는 상자 */
.demo-ss-probe {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  overflow-y: scroll;
  visibility: hidden;
  pointer-events: none;
}
`,C=[{value:`short`,label:`짧은 목록`},{value:`long`,label:`내용 늘리기`},{value:`locked`,label:`팝업 열기`}],w=[{value:`compensate`,label:`잰 너비로 보정`,className:`demo-ss-page-compensate`,code:`padding-right: var(--scrollbar-width)`,note:`팝업을 열기 직전에 잰 스크롤바 너비만큼 padding-right를 채워 잠금 순간의 흔들림을 막습니다. 내용이 늘어날 때의 흔들림은 이 방법으로 막지 않습니다.`},{value:`hide`,label:`스크롤바 숨김(안쪽 영역)`,className:`demo-ss-page-hide`,code:`width: calc(100% + var(--scrollbar-width))`,note:`스크롤바를 보이는 영역 밖으로 밀어내 내용 너비가 늘 같습니다. 오른쪽 얇은 막대가 스크롤 위치를 대신 보여 줍니다.`},{value:`gutter`,label:`scrollbar-gutter 참고`,className:`demo-ss-page-gutter`,code:`scrollbar-gutter: stable`,note:`스크롤바 자리를 항상 비워 두어 움직이지 않지만, 짧은 목록에서도 오른쪽에 빈 여백이 남습니다.`}],T=[`배송 시작 안내`],E=[`배송 시작 안내`,`주문 접수 완료`,`쿠폰 사용 내역`,`포인트 적립 안내`,`리뷰 작성 요청`,`재입고 알림`,`이벤트 당첨 안내`],D=[{label:`CSS`,language:`css`,code:S},{label:`1. 잠금 보정 JS`,language:`javascript`,code:`// 방법 1. 팝업 스크롤 잠금 + 잰 너비로 보정
// 잠그기 직전에 지금 문서 스크롤바가 차지한 너비를 잽니다.
// 스크롤바가 없거나(짧은 페이지) 겹쳐 보이는 환경이면 0이 나와 아무것도 바뀌지 않습니다.
function lockScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  document.documentElement.style.setProperty('--scrollbar-width', \`\${scrollbarWidth}px\`)
  document.body.classList.add('is-locked')
}

function unlockScroll() {
  document.body.classList.remove('is-locked')
  document.documentElement.style.removeProperty('--scrollbar-width')
}

// 안쪽 스크롤 상자를 잠글 때는 그 상자에서 잽니다. (테두리가 없는 상자 기준)
// const gap = box.offsetWidth - box.clientWidth`},{label:`1. 잠금 보정 CSS`,language:`css`,code:`/* 방법 1. 잠근 동안 사라진 스크롤바 자리만큼 오른쪽을 채웁니다. */
body.is-locked {
  overflow: hidden;
  padding-right: var(--scrollbar-width, 0px);
}

/* right: 0으로 붙인 고정 요소는 body의 padding을 받지 않으므로 따로 더합니다.
   원래 padding-right가 있으면 calc(원래 값 + var(--scrollbar-width, 0px))로 씁니다. */
body.is-locked .site-header,
body.is-locked .bottom-bar {
  padding-right: var(--scrollbar-width, 0px);
}`},{label:`2. 숨김 CSS`,language:`css`,code:`/* 방법 2-A. 스크롤바를 보이는 영역 밖으로 밀어내기 (안쪽 목록·패널용) */
.list-frame {
  height: 320px;
  overflow: hidden; /* 밀려난 스크롤바를 잘라 냄 */
}
.list-scroll {
  box-sizing: border-box;
  width: calc(100% + var(--scrollbar-width, 0px)); /* 스크롤바 너비만큼 넓힘 */
  height: 100%;
  overflow-y: scroll; /* 스크롤바가 항상 있어야 내용 너비가 늘 100%로 같음 */
}
/* 같은 결과: width를 두지 않고 margin-right: calc(var(--scrollbar-width, 0px) * -1)
   넓히는 값은 width와 음수 margin 중 하나만 씁니다.
   여기에 padding-right를 더하면 내용 너비가 그만큼 줄고 오른쪽에 빈 여백이 생깁니다. */

/* 방법 2-B. 스크롤바를 아예 그리지 않기 (너비 계산 없음) */
.list-scroll-none {
  overflow-y: auto;
  scrollbar-width: none; /* 표준 속성 */
}
.list-scroll-none::-webkit-scrollbar {
  display: none; /* scrollbar-width를 지원하지 않는 이전 WebKit·Chromium */
}`},{label:`2. 숨김 JS`,language:`javascript`,code:`// 방법 2-A에서 쓸 스크롤바 너비를 잽니다.
// overflow-y: scroll이라 내용이 짧아도 스크롤바가 있으므로 바로 잴 수 있습니다. (테두리가 없는 상자 기준)
document.querySelectorAll('.list-scroll').forEach((list) => {
  list.style.setProperty('--scrollbar-width', \`\${list.offsetWidth - list.clientWidth}px\`)
})`},{label:`HTML`,language:`xml`,code:`<!-- 가상 화면: .demo-ss-frame이 보이는 영역, .demo-ss-page가 스크롤 영역입니다. -->
<div class="demo-ss-screen">
  <div class="demo-ss-bar">가상 화면</div>
  <div class="demo-ss-frame">
    <div class="demo-ss-page demo-ss-scroll demo-ss-page-hide" tabindex="0" aria-label="가상 화면 내용">
      <div class="demo-ss-header">
        <span>알림</span>
        <span class="demo-ss-menu">메뉴</span>
      </div>
      <div class="demo-ss-card">
        <strong>알림 목록</strong>
        <ul class="demo-ss-list">
          <li>배송 시작 안내</li>
          <!-- 내용이 늘어나면 스크롤바가 생깁니다. -->
        </ul>
      </div>
    </div>
    <!-- 방법 2: 숨긴 스크롤바 대신 위치를 보여 주는 막대 -->
    <div class="demo-ss-thumb" aria-hidden="true"></div>
  </div>
</div>`}],O={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ss-view-label`},k=[`aria-checked`,`onClick`],A={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ss-method-label`},j=[`aria-checked`,`onClick`],M={class:`demo-ss-frame`},N=[`aria-label`,`onScroll`],P={class:`demo-ss-card`},F={class:`demo-ss-list`},I={key:0,class:`demo-ss-dim`},L={key:1,class:`demo-ss-probe demo-ss-scroll`,"aria-hidden":`true`},te={class:`demo-ss-meter`},R={__name:`ScrollbarShiftDemo`,setup(u){let f=n(C[0].value),h=n(w[0].value),S=v(()=>w.find(e=>e.value===h.value)),D=v(()=>f.value===`short`?T:E),R=n(null),z=n(0),B=v(()=>h.value===`compensate`?{"--scrollbar-width":`${z.value}px`}:h.value===`hide`?{"--scrollbar-width":`${R.value??0}px`}:null),V={problem:null,solved:null},H=o({problem:{left:null,moved:0},solved:{left:null,moved:0}}),U=o({visible:!1,top:0,height:0}),W=v(()=>({height:`${U.height}px`,transform:`translateY(${U.top}px)`})),G=e=>Math.round(e*10)/10;function K(e){return e>0?`+${e}`:`${e}`}let q=e=>V[e]?.querySelector(`.demo-ss-page`);function J(e){Object.entries(V).forEach(([t,n])=>{let r=n?.querySelector(`.demo-ss-frame`),i=n?.querySelector(`.demo-ss-card`);if(!r||!i)return;let a=G(i.getBoundingClientRect().left-r.getBoundingClientRect().left),o=H[t].left;H[t].moved=e&&o!==null?G(a-o):0,H[t].left=a});let t=V.solved?.querySelector(`.demo-ss-probe`);t&&(R.value=t.offsetWidth-t.clientWidth)}function Y(){let e=q(`solved`);if(!e)return;let{scrollTop:t,scrollHeight:n,clientHeight:r}=e,i=n-r;U.visible=i>1,U.visible&&(U.height=Math.max(16,r*r/n),U.top=t/i*(r-U.height))}function X(e){J(e),Y()}let Z=typeof ResizeObserver>`u`?null:new ResizeObserver(()=>X(!1));function Q(e,t){let n=e?`solved`:`problem`;V[n]!==t&&(V[n]&&Z?.unobserve(V[n]),V[n]=t,t&&(Z?.observe(t),ee(()=>X(!1))))}return r(f,e=>{if(e!==`locked`)return;let t=q(`solved`);z.value=t?t.offsetWidth-t.clientWidth:0}),r(h,e=>{if(e!==`compensate`||f.value!==`locked`)return;let t=q(`solved`);z.value=t&&t.scrollHeight>t.clientHeight?R.value??0:0}),r(f,()=>X(!0),{flush:`post`}),r(h,()=>X(!1),{flush:`post`}),a(()=>Z?.disconnect()),(n,r)=>(e(),m(x,{problem:{code:`처리 없음`,note:`스크롤바가 생기거나 사라질 때마다 카드와 메뉴가 옆으로 움직입니다.`},solved:{code:S.value.code,note:S.value.note}},{controls:i(()=>[r[0]||=s(`span`,{id:`demo-ss-view-label`,class:`demo-label`},`화면 상태`,-1),s(`div`,O,[(e(!0),c(_,null,p(t(C),t=>(e(),c(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":f.value===t.value,onClick:e=>f.value=t.value},g(t.label),9,k))),128))]),r[1]||=s(`span`,{id:`demo-ss-method-label`,class:`demo-label`},`해결 방법`,-1),s(`div`,A,[(e(!0),c(_,null,p(t(w),t=>(e(),c(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":h.value===t.value,onClick:e=>h.value=t.value},g(t.label),9,j))),128))])]),default:i(({solved:t})=>[s(`div`,{ref:e=>Q(t,e),class:`demo-ss-screen`},[r[5]||=s(`div`,{class:`demo-ss-bar`},`가상 화면`,-1),s(`div`,M,[s(`div`,{class:b([`demo-ss-page demo-ss-scroll`,[t?S.value.className:``,{"is-locked":f.value===`locked`}]]),style:l(t?B.value:null),tabindex:`0`,"aria-label":t?`해결 상태 가상 화면`:`문제 상태 가상 화면`,onScroll:e=>t&&Y()},[r[3]||=s(`div`,{class:`demo-ss-header`},[s(`span`,null,`알림`),s(`span`,{class:`demo-ss-menu`},`메뉴`)],-1),s(`div`,P,[r[2]||=s(`strong`,null,`알림 목록`,-1),s(`ul`,F,[(e(!0),c(_,null,p(D.value,t=>(e(),c(`li`,{key:t},g(t),1))),128))])])],46,N),t&&h.value===`hide`&&U.visible?(e(),c(`div`,{key:0,class:`demo-ss-thumb`,style:l(W.value),"aria-hidden":`true`},null,4)):y(``,!0)]),f.value===`locked`?(e(),c(`div`,I,[...r[4]||=[s(`div`,{class:`demo-ss-popup`},`팝업이 열려 배경 스크롤을 잠갔습니다.`,-1)]])):y(``,!0),t?(e(),c(`div`,L)):y(``,!0)],512),s(`p`,te,[r[7]||=d(` 카드 이동 `,-1),s(`b`,{class:b({"is-moved":H[t?`solved`:`problem`].moved!==0})},g(K(H[t?`solved`:`problem`].moved))+`px`,3),t&&h.value===`compensate`&&f.value===`locked`?(e(),c(_,{key:0},[r[6]||=d(` · 더한 padding-right `,-1),s(`b`,null,g(z.value)+`px`,1)],64)):y(``,!0)])]),caption:i(()=>[r[8]||=d(` 화면 상태를 바꿀 때마다 카드의 왼쪽 위치를 getBoundingClientRect()로 재서, 바로 전 상태와의 차이를 ‘카드 이동’으로 표시합니다. 이 예제는 어느 환경에서나 차이가 보이도록 `,-1),r[9]||=s(`code`,null,`::-webkit-scrollbar`,-1),r[10]||=d(`로 자리를 차지하는 12px 스크롤바를 강제로 표시합니다(Chrome·Edge·Safari). Firefox는 운영체제 설정의 스크롤바를 그대로 씁니다. 지금 브라우저에서 잰 스크롤바 너비는 `,-1),s(`b`,null,g(R.value??`-`)+`px`,1),r[11]||=d(`입니다. `,-1),R.value===0?(e(),c(_,{key:0},[d(` 0px이면 스크롤바가 내용 위에 겹쳐 표시되는(자리를 차지하지 않는) 환경이라 두 화면 모두 움직이지 않습니다. `)],64)):y(``,!0),r[12]||=d(` ‘잰 너비로 보정’은 팝업을 열어 잠그는 순간만 막는 방법이라, ‘내용 늘리기’에서는 해결 쪽 카드도 움직입니다. ‘스크롤바 숨김’은 목록·패널 같은 안쪽 스크롤 영역에 쓰는 방법이므로, 이때는 가상 화면을 그런 영역으로 보세요. `,-1)]),_:1},8,[`solved`]))}},z={class:`doc-body`},B={id:`section-0`},V={id:`section-1`},H={id:`section-2`},U={id:`section-3`},W={id:`section-4`},G={id:`section-5`},K={id:`section-7`},q=`scrollbar-shift`,J=18,Y=`스크롤바가 생기거나 사라질 때 화면이 옆으로 흔들릴 때`,X=`스크롤바 화면 흔들림`,Z=`스크롤바가 생기거나 사라지면서 내용 너비가 바뀌는 원리를 이해하고, 팝업 스크롤 잠금은 잰 스크롤바 너비로 보정하고 안쪽 스크롤 영역은 스크롤바를 숨겨 흔들림을 막습니다.`,Q=`팝업을 열거나 목록을 펼칠 때 화면이 옆으로 움찔한다면?
내용보다 먼저, 그 순간 스크롤바가 생기거나 사라지는지 확인하세요.
`,ne=`레이어·스크롤`,re=`스크롤바`,ie=[`스크롤바`,`레이아웃 흔들림`,`팝업`,`스크롤 잠금`,`padding-right`,`scrollbar-width`,`scrollbar-gutter`,`overflow`],ae=`중급`,oe=`약 12분`,$=[`overflow`,`가운데 정렬`,`CSS 변수`],se=`padding-right: var(--scrollbar-width)`,ce=`published`,le=`2026-11-11`,ue=[`modal-focus-scroll`,`overflow-x-mobile`,`scroll-margin`],de=[{title:`MDN — Window.innerWidth`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth`},{title:`MDN — Element.clientWidth`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`},{title:`MDN — scrollbar-width`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width`},{title:`MDN — scrollbar-gutter`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter`},{title:`CSS Scrollbars Styling Module Level 1`,url:`https://www.w3.org/TR/css-scrollbars-1/`}],fe={__name:`scrollbar-shift`,setup(n,{expose:r}){return r({frontmatter:{id:`scrollbar-shift`,order:18,title:`스크롤바가 생기거나 사라질 때 화면이 옆으로 흔들릴 때`,navTitle:`스크롤바 화면 흔들림`,summary:`스크롤바가 생기거나 사라지면서 내용 너비가 바뀌는 원리를 이해하고, 팝업 스크롤 잠금은 잰 스크롤바 너비로 보정하고 안쪽 스크롤 영역은 스크롤바를 숨겨 흔들림을 막습니다.`,lead:`팝업을 열거나 목록을 펼칠 때 화면이 옆으로 움찔한다면?
내용보다 먼저, 그 순간 스크롤바가 생기거나 사라지는지 확인하세요.
`,group:`레이어·스크롤`,topic:`스크롤바`,tags:[`스크롤바`,`레이아웃 흔들림`,`팝업`,`스크롤 잠금`,`padding-right`,`scrollbar-width`,`scrollbar-gutter`,`overflow`],level:`중급`,duration:`약 12분`,prerequisites:[`overflow`,`가운데 정렬`,`CSS 변수`],keyProperty:`padding-right: var(--scrollbar-width)`,status:`published`,updated:`2026-11-11`,related:[`modal-focus-scroll`,`overflow-x-mobile`,`scroll-margin`],references:[{title:`MDN — Window.innerWidth`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth`},{title:`MDN — Element.clientWidth`,url:`https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`},{title:`MDN — scrollbar-width`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width`},{title:`MDN — scrollbar-gutter`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter`},{title:`CSS Scrollbars Styling Module Level 1`,url:`https://www.w3.org/TR/css-scrollbars-1/`}]}}),(n,r)=>{let a=f(`DocIssue`),o=f(`DocTakeaway`),l=f(`RouterLink`),p=f(`DocSteps`),m=f(`DocInspect`),g=f(`CodePanel`),_=f(`DocPractice`);return e(),c(`div`,z,[s(`section`,B,[r[2]||=s(`h2`,null,[s(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[3]||=s(`p`,null,`가운데 정렬된 마이페이지에서 ‘쿠폰 등록’ 팝업을 열면 배경 화면 전체가 오른쪽으로 몇 픽셀 밀리고, 닫으면 다시 돌아옵니다. 높이를 고정한 알림 패널에서도 ‘안 읽음’(짧은 목록)과 ‘전체’(긴 목록) 필터를 바꿀 때마다 패널 안 카드와 버튼이 좌우로 움찔합니다.`,-1),r[4]||=s(`p`,null,`맥북 트랙패드로 확인하면 보이지 않고, 마우스를 쓰는 Windows PC에서 검수할 때 드러나 디자인 검수에서 이런 형태로 돌아옵니다.`,-1),u(a,{label:`디자인 검수`,title:`마이페이지: 팝업 열기·알림 필터 변경 때 화면이 좌우로 흔들림`,env:`Windows PC 브라우저(스크롤바가 자리를 차지하는 환경) · 가운데 정렬 레이아웃`,expected:`팝업을 열거나 필터를 바꿔도 배경 화면과 패널 안 요소 위치가 그대로임`,actual:`팝업을 열고 닫을 때 배경이 좌우로 밀리고, 알림 필터를 바꿀 때 패널 안 카드와 버튼이 몇 픽셀씩 움직임`},{default:i(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,`Windows PC에서 내용이 길어 스크롤바가 있는 마이페이지로 이동합니다.`),s(`li`,null,`‘쿠폰 등록’ 버튼으로 팝업을 열고 닫으면서 배경 헤더 메뉴의 위치를 봅니다.`),s(`li`,null,`알림 패널에서 ‘안 읽음’과 ‘전체’ 필터를 번갈아 누릅니다.`)],-1)]]),_:1}),u(o,null,{default:i(()=>[...r[1]||=[s(`p`,null,[d(`팝업으로 스크롤을 잠글 때는 `),s(`strong`,null,`잠그기 직전에 잰 스크롤바 너비만큼`),d(),s(`code`,null,`padding-right`),d(`를 채우고, 길이가 바뀌는 안쪽 목록은 `),s(`strong`,null,`스크롤바를 숨겨`),d(` 내용 너비를 고정하세요.`)],-1)]]),_:1})]),s(`section`,V,[r[5]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=s(`p`,null,`해결 방법을 하나씩 고르고 ‘짧은 목록 → 내용 늘리기 → 팝업 열기’ 순서로 눌러 보면서, 두 화면의 카드 이동 값을 비교해 보세요.`,-1),u(R)]),s(`section`,H,[r[18]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>Windows의 기본 스크롤바처럼 <strong>자리를 차지하는 스크롤바</strong>(classic scrollbar)는 스크롤 영역의 너비 일부를 가져갑니다. <code>overflow: auto</code>인 영역은 내용이 넘칠 때만 스크롤바를 그리므로, 내용이 짧다가 길어지는 순간 내용 너비가 스크롤바 너비만큼 줄어듭니다. 가운데 정렬(<code>margin: 0 auto</code>)된 요소는 그 절반만큼, 오른쪽 정렬된 요소는 그 전체만큼 왼쪽으로 움직입니다. 팝업을 열 때 배경 스크롤을 막으려고 <code>overflow: hidden</code>을 주면 반대로 스크롤바가 사라지면서 내용 너비가 넓어지고, 화면이 오른쪽으로 밀립니다.</p><p>macOS(트랙패드 사용 시 기본 설정)나 모바일 브라우저처럼 <strong>스크롤바가 내용 위에 겹쳐 표시되는</strong>(overlay scrollbar) 환경에서는 스크롤바가 자리를 차지하지 않아 이 흔들림이 생기지 않습니다. 작업자 화면에서는 멀쩡하고 검수 화면에서만 보이는 이유입니다. 스크롤바 너비는 운영체제·브라우저·사용자 설정마다 다르므로, 해결 코드에 <code>17px</code> 같은 고정값을 넣지 않고 <strong>그때그때 잽니다.</strong></p>`,3),s(`p`,null,[r[8]||=s(`strong`,null,`팝업 스크롤 잠금`,-1),r[9]||=d(`은 잠그기 직전에 `,-1),r[10]||=s(`code`,null,`window.innerWidth - document.documentElement.clientWidth`,-1),r[11]||=d(`(안쪽 상자라면 `,-1),r[12]||=s(`code`,null,`offsetWidth - clientWidth`,-1),r[13]||=d(`)로 지금 스크롤바가 차지한 너비를 재서 CSS 변수에 넣고, 잠근 동안 그만큼 `,-1),r[14]||=s(`code`,null,`padding-right`,-1),r[15]||=d(`를 채웁니다. 스크롤바가 없던 짧은 페이지나 겹쳐 보이는 환경에서는 잰 값이 0이라 아무것도 바뀌지 않으므로 환경별 분기가 필요 없습니다. 실무에서 가장 많이 쓰는 방법이며, 포커스 이동과 Escape 닫기는 `,-1),u(l,{to:`/pub/js/modal-focus-scroll`},{default:i(()=>[...r[7]||=[d(`팝업을 열었는데 Tab 키와 스크롤이 뒤 화면으로 빠질 때`,-1)]]),_:1}),r[16]||=d(` 문서에서 다룹니다.`,-1)]),r[19]||=h(`<p><strong>길이가 바뀌는 안쪽 목록·패널</strong>은 스크롤바를 보이는 영역 밖으로 밀어냅니다. 바깥 상자에 <code>overflow: hidden</code>을 주고, 안쪽 스크롤 영역을 <code>width: calc(100% + 스크롤바 너비)</code>로 넓히면서 <code>overflow-y: scroll</code>로 스크롤바를 항상 둡니다. 그러면 내용 너비는 (보이는 너비 + 스크롤바) − 스크롤바 = 보이는 너비로, 내용이 짧든 길든 같습니다. <code>overflow-y: auto</code>로 두면 스크롤바가 없을 때 내용이 그만큼 넓어져 다시 흔들리고, 여기에 <code>padding-right</code>까지 더하면 내용 너비가 그만큼 더 줄어듭니다. 너비 계산 없이 <code>scrollbar-width: none</code>으로 스크롤바를 그리지 않는 방법도 같은 효과를 냅니다.</p>`,1),u(p,null,{default:i(()=>[...r[17]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`잠그기 직전에 스크롤바 너비 재기`),d(),s(`code`,null,`innerWidth - clientWidth`)]),s(`li`,null,[s(`strong`,null,`잠근 동안 그만큼 오른쪽 채우기`),d(),s(`code`,null,`padding-right: var(--scrollbar-width)`)]),s(`li`,null,[s(`strong`,null,`안쪽 목록은 스크롤바를 보이는 영역 밖으로`),d(),s(`code`,null,`width: calc(100% + var(--scrollbar-width))`)])],-1)]]),_:1})]),s(`section`,U,[r[21]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),r[22]||=s(`p`,null,[d(`흔들림이 보이면 `),s(`strong`,null,`그 순간 스크롤바가 생기거나 사라지는지`),d(`부터 확인합니다. 스크롤바가 자리를 차지하는 환경(Windows PC 또는 스크롤바를 항상 표시하도록 설정한 macOS)에서 아래 순서로 봅니다.`)],-1),u(m,null,{default:i(()=>[...r[20]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Rendering 패널에서 흔들린 영역 표시`),d(` DevTools 오른쪽 위의 점 세 개 메뉴 → More tools → Rendering을 열고 `),s(`strong`,null,`Layout Shift Regions`),d(`를 켭니다. 팝업을 열거나 필터를 바꿀 때 움직인 영역이 잠시 강조되면 레이아웃이 실제로 이동한 것입니다.`)]),s(`li`,null,[s(`strong`,null,`Console에서 스크롤바 너비 확인`),d(` 페이지는 `),s(`code`,null,`window.innerWidth - document.documentElement.clientWidth`),d(`를 입력합니다. 안쪽 목록은 Elements 패널에서 그 상자를 선택한 뒤 `),s(`code`,null,`$0.offsetWidth - $0.clientWidth`),d(`를 입력합니다(테두리가 없는 상자 기준). 짧은 상태와 긴 상태에서 값이 0과 0보다 큰 값으로 달라지면 스크롤바가 원인입니다.`)]),s(`li`,null,[s(`strong`,null,`Elements 패널에서 overflow 확인`),d(` 팝업을 연 상태에서 `),s(`code`,null,`html`),d(`, `),s(`code`,null,`body`),d(`, 또는 목록 상자를 선택하고 Styles 탭에서 `),s(`code`,null,`overflow: hidden`),d(`이 새로 붙었는지 봅니다. 스크롤 잠금 코드가 붙인 값이라면 이때 스크롤바가 사라진 것입니다.`)]),s(`li`,null,[s(`strong`,null,`Styles 탭에서 바로 시험`),d(` 팝업을 연 상태에서 `),s(`code`,null,`body`),d(`에 2단계에서 잰 값만큼 `),s(`code`,null,`padding-right`),d(`를 추가해 봅니다. 목록이라면 그 상자에 `),s(`code`,null,`overflow-y: scroll`),d(`을 추가해 짧은 상태와 긴 상태의 위치가 같아지는지 봅니다. 흔들림이 사라지면 원인이 확정됩니다.`)])],-1)]]),_:1})]),s(`section`,W,[r[23]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),r[24]||=s(`p`,null,[d(`‘CSS’ 탭은 위 실행 예제와 같은 파일이고, 번호 탭은 실제 페이지에 옮겨 쓰는 코드입니다. 예제의 `),s(`code`,null,`::-webkit-scrollbar`),d(` 부분은 시연용이므로 실무 코드에 넣지 않습니다.`)],-1),u(g,{tabs:t(D)},null,8,[`tabs`])]),s(`section`,G,[r[31]||=h(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>스크롤바가 생기고 사라지는 원리는 같고, 나타나는 모습만 다른 경우입니다.</p><h3>고정 헤더·하단 버튼만 따로 움직일 때</h3><p><code>right: 0</code>으로 붙인 <code>position: fixed</code> 요소는 <code>body</code>의 <code>padding-right</code>를 받지 않아, 본문은 고정되고 헤더 메뉴만 움직입니다. 같은 변수로 고정 요소에도 보정을 더하고, 원래 오른쪽 여백이 있으면 <code>calc()</code>로 합칩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-tag">body</span><span class="hljs-selector-class">.is-locked</span> <span class="hljs-selector-class">.site-header</span> {
  <span class="hljs-attribute">padding-right</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">20px</span> + <span class="hljs-built_in">var</span>(--scrollbar-width, <span class="hljs-number">0px</span>)); <span class="hljs-comment">/* 원래 20px + 보정 */</span>
}
</code></pre><h3>페이지 전체 길이가 바뀔 때 (참고)</h3><p>탭 전환처럼 페이지 자체가 짧아졌다 길어지는 흔들림은 보정 코드로 막지 않습니다. 스크롤바 자리를 항상 남기는 방법이 있지만, <strong>짧은 페이지에도 오른쪽에 빈 여백이나 빈 스크롤 트랙이 보여</strong> 결함처럼 보일 수 있어 실무에서는 제한적으로 씁니다. 흔들림과 빈 여백 중 무엇이 더 눈에 띄는지 디자인과 함께 정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-tag">html</span> { <span class="hljs-attribute">scrollbar-gutter</span>: stable; } <span class="hljs-comment">/* 자리만 비워 둠: 짧은 페이지에 오른쪽 빈 여백 */</span>
<span class="hljs-selector-tag">html</span> { <span class="hljs-attribute">overflow-y</span>: scroll; }       <span class="hljs-comment">/* 트랙을 항상 표시: 짧은 페이지에 빈 스크롤바 */</span>
</code></pre><h3>100vw를 쓴 요소가 넘칠 때</h3>`,9),s(`p`,null,[r[26]||=s(`code`,null,`width: 100vw`,-1),r[27]||=d(`는 스크롤바 너비까지 포함해 계산되어, 스크롤바가 자리를 차지하는 환경에서 가로 스크롤을 만듭니다. 스크롤바 보정으로 해결되는 문제가 아니므로 부모 기준 `,-1),r[28]||=s(`code`,null,`100%`,-1),r[29]||=d(`를 씁니다. 자세한 내용은 `,-1),u(l,{to:`/pub/css/overflow-x-mobile`},{default:i(()=>[...r[25]||=[d(`모바일에서 가로 스크롤이 생길 때`,-1)]]),_:1}),r[30]||=d(`를 참고하세요.`,-1)]),r[32]||=h(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.full-banner</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>; <span class="hljs-comment">/* width: 100vw 대신 */</span>
}
</code></pre>`,1)]),r[35]||=h(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>스크롤바를 숨기면 다른 표시를 꼭 둡니다.</strong> 스크롤바가 없으면 내용이 더 있다는 신호와 끌어 내리는 손잡이가 함께 사라집니다. 예제처럼 얇은 위치 막대나 아래쪽 흐림 그림자로 더 있음을 보여 주고, 휠·터치·키보드 스크롤이 그대로 되는지 확인합니다. 안에 포커스할 요소가 없는 목록은 <code>tabindex=&quot;0&quot;</code>과 <code>aria-label</code>을 주어 키보드로도 스크롤되게 합니다.</li><li><strong>스크롤바 너비는 JavaScript로 잽니다.</strong> 운영체제·브라우저·사용자 설정마다 다르고, 겹쳐 보이는 환경에서는 0입니다. 브라우저 확대 비율에 따라서도 달라질 수 있으니 고정값을 넣지 말고 잠글 때마다(숨김 방식은 화면 크기가 바뀔 때도) 다시 잽니다.</li><li><strong>페이지 전체(<code>html</code>, <code>body</code>)의 스크롤바는 숨기지 않습니다.</strong> 문서 스크롤바는 사용자가 지금 위치와 남은 분량을 파악하는 기본 수단입니다. 숨김 방식은 높이를 정한 목록·패널 같은 안쪽 스크롤 영역에만 쓰고, 페이지는 잠금 보정으로 처리합니다.</li><li><strong>스크롤바 관련 속성의 지원 범위를 확인합니다.</strong> <code>scrollbar-width</code>와 <code>scrollbar-gutter</code>는 비교적 최근에 지원이 넓어진 속성이라 브라우저·버전에 따라 다를 수 있습니다. <code>scrollbar-width: none</code>에는 <code>::-webkit-scrollbar { display: none; }</code>을 함께 두고, 대상 브라우저는 MDN과 실제 환경에서 확인하세요.</li></ul></section>`,1),s(`section`,K,[r[34]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(_,null,{default:i(()=>[...r[33]||=[s(`p`,null,`위 예제에서 해결 방법을 바꿔 가며 ‘짧은 목록 → 내용 늘리기 → 팝업 열기’ 순서로 눌러 보세요. 잰 스크롤바 너비가 0px이면 스크롤바가 겹쳐 보이는 환경이라 차이가 나타나지 않습니다.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`문제 상태에서 ‘내용 늘리기’를 누르면 카드 이동 값이 음수(왼쪽)로, 이어서 ‘팝업 열기’를 누르면 양수(오른쪽)로 표시된다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`‘잰 너비로 보정’에서 ‘내용 늘리기 → 팝업 열기’를 누르면 해결 쪽 카드 이동이 0px이고, 더한 padding-right가 잰 스크롤바 너비와 같다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`‘스크롤바 숨김(안쪽 영역)’에서는 세 상태 모두 해결 쪽 카드 이동이 0px이고, 긴 목록을 스크롤하면 오른쪽 얇은 막대가 따라 움직인다.`)])])],-1)]]),_:1})])])}}};export{fe as default,oe as duration,ne as group,q as id,se as keyProperty,Q as lead,ae as level,X as navTitle,J as order,$ as prerequisites,de as references,ue as related,ce as status,Z as summary,ie as tags,Y as title,re as topic,le as updated};