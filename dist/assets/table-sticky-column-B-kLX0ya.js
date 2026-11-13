import{D as e,E as t,G as n,H as r,L as i,R as a,V as o,c as s,d as c,ft as l,g as u,h as d,j as f,k as p,l as m,m as h,pt as g,r as _,s as v,ut as y,w as b,z as x}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as S}from"./index-DHgvQBhl.js";import{t as C}from"./DemoCompare-Bd6h8ThJ.js";var w=`/* 가상 모바일 화면: 너비를 고정해 PC에서도 같은 상황을 재현합니다. */
.demo-tbl-frame {
  overflow-x: auto; /* 실제 화면처럼, 넓은 요소가 있으면 페이지 전체가 가로로 스크롤됩니다. */
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
/* 공통으로 감싼 요소에 overflow-x: hidden을 넣은 페이지 */
.demo-tbl-frame-clip {
  overflow-x: hidden;
}
.demo-tbl-page {
  padding: 12px;
}
.demo-tbl-title {
  margin: 0 0 8px;
  font-size: 14px;
}
.demo-tbl-note {
  margin: 8px 0 0;
}
.demo-tbl-status {
  margin: 6px 0 0;
  font-size: 12px;
}

/* 1. 감싼 요소가 스크롤 컨테이너가 됩니다. 넓은 표는 이 영역 안에서만 가로로 스크롤됩니다. */
.demo-tbl-scroll {
  overflow-x: auto;
}
.demo-tbl-scroll:focus-visible {
  outline: 2px solid #315bc2;
  outline-offset: 2px;
}

/* 2. 표 너비를 확보합니다. 열이 좁아져 글자가 여러 줄로 눌리지 않게 합니다. */
.demo-tbl-table {
  min-width: 560px;
  border-collapse: separate; /* 테두리를 셀마다 그려, 고정 셀과 함께 움직이게 합니다. */
  border-spacing: 0; /* separate의 셀 간격 없애기 */
  white-space: nowrap;
}
.demo-tbl-table caption {
  padding-bottom: 6px;
  text-align: left;
  color: #4a5a70;
}
.demo-tbl-table th,
.demo-tbl-table td {
  padding: 8px 10px;
  border-right: 1px solid #c9d4e3;
  border-bottom: 1px solid #c9d4e3;
  background: #fff;
  text-align: right;
}
/* 바깥 테두리는 첫 행 위쪽, 첫 열 왼쪽에만 그려 선이 두 줄로 겹치지 않게 합니다. */
.demo-tbl-table thead th {
  border-top: 1px solid #c9d4e3;
  background: #f4f7fb;
}

/* 3. 첫 열 고정: 기준은 가장 가까운 스크롤 컨테이너(.demo-tbl-scroll)입니다. */
.demo-tbl-table tr > :first-child {
  position: sticky;
  left: 0;
  z-index: 1; /* 뒤로 지나가는 셀보다 위에 그립니다. */
  border-left: 1px solid #c9d4e3;
  background: #f4f7fb; /* 배경이 없으면 뒤로 지나가는 셀 글자가 비쳐 보입니다. */
  text-align: left;
}

/* 4. 스크롤했을 때만 고정 열 오른쪽에 그림자를 표시합니다. (.is-scrolled는 스크립트에서 붙입니다.) */
.demo-tbl-scroll.is-scrolled tr > :first-child {
  box-shadow: 6px 0 6px -4px rgba(35, 51, 75, 0.3);
}


/* 비교를 위한 문제 상태: 감싼 요소가 스크롤하지 않고, 첫 열도 고정하지 않습니다. */
.is-problem .demo-tbl-scroll {
  overflow-x: visible;
}
.is-problem .demo-tbl-table tr > :first-child {
  position: static;
}
`,T=[{key:`scroll`,label:`페이지가 밀림`,frameClass:``,problem:`감싼 요소 overflow: visible`,note:`표가 화면보다 넓어 페이지 전체가 가로로 스크롤됩니다. 제목과 지점 열도 함께 밀려납니다.`},{key:`clip`,label:`감싼 요소에 overflow-x: hidden`,frameClass:`demo-tbl-frame-clip`,problem:`.wrap { overflow-x: hidden }`,note:`페이지의 가로 스크롤은 사라졌지만 표 오른쪽이 잘리고, 스크롤해서 볼 수도 없습니다.`}],E=[`지점`,`1월`,`2월`,`3월`,`4월`,`5월`,`6월`,`합계`],D=[[`강남점`,[1240,1185,1320,1410,1388,1502]],[`홍대점`,[980,1012,1104,1096,1150,1233]],[`판교점`,[1530,1490,1612,1580,1645,1710]],[`해운대점`,[870,905,1020,1188,1264,1420]],[`대전둔산점`,[760,742,815,830,868,902]]],O=e=>e.toLocaleString(`ko-KR`),k=D.map(([e,t])=>({name:e,cells:[...t,t.reduce((e,t)=>e+t,0)].map(O)})),A=[{label:`CSS`,language:`css`,code:w},{label:`HTML`,language:`xml`,code:`<!-- 감싼 요소가 스크롤 영역입니다. 키보드로도 스크롤할 수 있게 포커스를 받고, 이름을 붙입니다. -->
<div class="demo-tbl-scroll" role="region" tabindex="0" aria-labelledby="sales-caption">
  <table class="demo-tbl-table">
    <caption id="sales-caption">2026년 상반기 지점별 매출(단위: 만 원)</caption>
    <thead>
      <tr>
        <th scope="col">지점</th>
        <th scope="col">1월</th>
        <!-- … 2월 ~ 6월 … -->
        <th scope="col">합계</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">강남점</th>
        <td>1,240</td>
        <!-- … -->
        <td>8,045</td>
      </tr>
    </tbody>
  </table>
</div>`},{label:`JS`,language:`javascript`,code:`// 스크롤했을 때만 고정 열에 그림자를 표시합니다.
const scrollArea = document.querySelector('.demo-tbl-scroll')

scrollArea.addEventListener('scroll', () => {
  scrollArea.classList.toggle('is-scrolled', scrollArea.scrollLeft > 0)
}, { passive: true })`}],ee={for:`demo-tbl-width`},j={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-tbl-page-label`},M=[`aria-checked`,`onClick`],N={class:`demo-tbl-page`},P=[`role`,`tabindex`,`aria-labelledby`,`onScroll`],F={class:`demo-tbl-table`},I=[`id`],L={scope:`row`},R={class:`demo-tbl-status`},z=`표 영역만 가로로 스크롤되고 지점 열은 왼쪽에 남습니다.`,B={__name:`TableStickyColumnDemo`,setup(u){let f=r(320),h=r(T[0].key),w=v(()=>T.find(e=>e.key===h.value)),D=r(!1);function O(e,t){t&&(D.value=e.target.scrollLeft>0)}let A={},B={},V=o({problem:{page:[0,0],table:[0,0]},solved:{page:[0,0],table:[0,0]}});function H(e,t){A[t?`solved`:`problem`]=e}function U(e,t){B[t?`solved`:`problem`]=e}function W(){[`problem`,`solved`].forEach(e=>{let t=A[e],n=B[e];t&&n&&(V[e]={page:[t.scrollWidth,t.clientWidth],table:[n.scrollWidth,n.clientWidth]})})}function G(e){let{page:t,table:n}=V[e?`solved`:`problem`];return t[0]>t[1]?`${h.value===`clip`?`넘친 부분이 잘림`:`페이지 전체가 가로 스크롤됨`} (페이지 내용 ${t[0]}px / 화면 ${t[1]}px)`:n[0]>n[1]?`페이지 스크롤 없음 · 표 영역만 가로 스크롤 (표 ${n[0]}px / 영역 ${n[1]}px)`:`가로 스크롤 없음`}return i([f,h],()=>b(W)),t(()=>{b(W),document.fonts?.ready.then(W)}),(t,r)=>(e(),m(C,{problem:{code:w.value.problem,note:w.value.note},solved:{code:`overflow-x: auto + sticky`,note:z}},{controls:a(()=>[s(`label`,ee,[r[1]||=d(`화면 너비 `,-1),s(`strong`,null,g(f.value)+`px`,1)]),x(s(`input`,{id:`demo-tbl-width`,"onUpdate:modelValue":r[0]||=e=>f.value=e,type:`range`,min:`280`,max:`400`,step:`10`},null,512),[[S,f.value,void 0,{number:!0}]]),r[2]||=s(`span`,{id:`demo-tbl-page-label`,class:`demo-label`},`문제 상태의 페이지`,-1),s(`div`,j,[(e(!0),c(_,null,p(n(T),t=>(e(),c(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":h.value===t.key,onClick:e=>h.value=t.key},g(t.label),9,M))),128))])]),default:a(({solved:t})=>[s(`div`,{ref:e=>H(e,t),class:y([`demo-tbl-frame`,w.value.frameClass]),style:l({width:f.value+`px`})},[s(`div`,N,[r[3]||=s(`h4`,{class:`demo-tbl-title`},`지점 실적 보고`,-1),s(`div`,{ref:e=>U(e,t),class:y([`demo-tbl-scroll`,{"is-scrolled":t&&D.value}]),role:t?`region`:void 0,tabindex:t?0:void 0,"aria-labelledby":t?`demo-tbl-caption-solved`:void 0,onScroll:e=>O(e,t)},[s(`table`,F,[s(`caption`,{id:t?`demo-tbl-caption-solved`:`demo-tbl-caption-problem`},` 2026년 상반기 지점별 매출(단위: 만 원) `,8,I),s(`thead`,null,[s(`tr`,null,[(e(!0),c(_,null,p(n(E),t=>(e(),c(`th`,{key:t,scope:`col`},g(t),1))),128))])]),s(`tbody`,null,[(e(!0),c(_,null,p(n(k),t=>(e(),c(`tr`,{key:t.name},[s(`th`,L,g(t.name),1),(e(!0),c(_,null,p(t.cells,(t,n)=>(e(),c(`td`,{key:n},g(t),1))),128))]))),128))])])],42,P),r[4]||=s(`p`,{class:`demo-tbl-note`},`매출은 부가세를 제외한 금액입니다.`,-1)])],6),s(`p`,R,g(G(t)),1)]),caption:a(()=>[...r[5]||=[d(` 가상 화면은 너비를 고정해 PC에서도 재현됩니다. 해결 상태의 표를 가로로 스크롤해 보세요(Shift + 마우스 휠, 또는 표를 Tab으로 선택한 뒤 방향키). `,-1)]]),_:1},8,[`problem`,`solved`]))}},V={class:`doc-body`},H={id:`section-0`},U={id:`section-1`},W={id:`section-2`},G={id:`section-3`},K={id:`section-4`},te={id:`section-7`},q=`table-sticky-column`,J=14,Y=`넓은 표를 모바일에서 가로 스크롤하며 첫 열 고정하기`,X=`반응형 표 첫 열 고정`,Z=`넓은 표를 감싼 요소 안에 넣어 표 영역만 가로로 스크롤하고, 첫 열은 position sticky로 고정해 어떤 행인지 계속 보이게 합니다.`,Q=`표 하나 때문에 모바일 화면 전체가 옆으로 밀린다면?
표를 줄이기보다, 표를 감싼 영역이 스크롤되게 하세요.
`,ne=`레이아웃`,re=`표`,ie=[`table`,`반응형`,`가로 스크롤`,`overflow-x`,`sticky`,`border-collapse`,`접근성`],ae=`중급`,oe=`약 12분`,$=[`overflow`,`position`,`table`],se=`overflow-x: auto + sticky`,ce=`published`,le=`2026-11-11`,ue=[`sticky-overflow`,`overflow-x-mobile`],de=[{title:`CSS Positioned Layout — Sticky positioning`,url:`https://www.w3.org/TR/css-position-3/#stickypos-insets`},{title:`CSS Overflow Module Level 3`,url:`https://www.w3.org/TR/css-overflow-3/`},{title:`MDN — border-collapse`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/border-collapse`},{title:`W3C WAI Tables Tutorial — Caption & Summary`,url:`https://www.w3.org/WAI/tutorials/tables/caption-summary/`}],fe={__name:`table-sticky-column`,setup(t,{expose:r}){return r({frontmatter:{id:`table-sticky-column`,order:14,title:`넓은 표를 모바일에서 가로 스크롤하며 첫 열 고정하기`,navTitle:`반응형 표 첫 열 고정`,summary:`넓은 표를 감싼 요소 안에 넣어 표 영역만 가로로 스크롤하고, 첫 열은 position sticky로 고정해 어떤 행인지 계속 보이게 합니다.`,lead:`표 하나 때문에 모바일 화면 전체가 옆으로 밀린다면?
표를 줄이기보다, 표를 감싼 영역이 스크롤되게 하세요.
`,group:`레이아웃`,topic:`표`,tags:[`table`,`반응형`,`가로 스크롤`,`overflow-x`,`sticky`,`border-collapse`,`접근성`],level:`중급`,duration:`약 12분`,prerequisites:[`overflow`,`position`,`table`],keyProperty:`overflow-x: auto + sticky`,status:`published`,updated:`2026-11-11`,related:[`sticky-overflow`,`overflow-x-mobile`],references:[{title:`CSS Positioned Layout — Sticky positioning`,url:`https://www.w3.org/TR/css-position-3/#stickypos-insets`},{title:`CSS Overflow Module Level 3`,url:`https://www.w3.org/TR/css-overflow-3/`},{title:`MDN — border-collapse`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/border-collapse`},{title:`W3C WAI Tables Tutorial — Caption & Summary`,url:`https://www.w3.org/WAI/tutorials/tables/caption-summary/`}]}}),(t,r)=>{let i=f(`DocIssue`),o=f(`DocTakeaway`),l=f(`DocSteps`),p=f(`DocInspect`),m=f(`CodePanel`),g=f(`DocPractice`);return e(),c(`div`,V,[s(`section`,H,[r[2]||=s(`h2`,null,[s(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[3]||=s(`p`,null,[d(`지점별 월 매출을 보여 주는 표입니다. 열이 8개라 PC에서는 넉넉하지만, 모바일에서 열면 `),s(`strong`,null,`페이지 전체`),d(`가 옆으로 밀리고 제목과 본문까지 함께 흔들립니다. 가로 스크롤을 막으려고 공통으로 감싼 요소에 `),s(`code`,null,`overflow-x: hidden`),d(`을 넣으면 이번에는 표 오른쪽이 잘려 합계를 볼 수 없습니다.`)],-1),r[4]||=s(`p`,null,`상품 비교표, 월별 실적표처럼 열이 많은 표는 시안이 PC 기준으로만 나온 경우가 많아, 모바일 QA에서 이런 형태로 돌아옵니다.`,-1),u(i,{title:`실적 보고: 모바일에서 표 때문에 화면 전체가 좌우로 밀리고, 옆으로 넘기면 지점명이 사라짐`,env:`전체 브라우저 · 모바일(360px) 및 PC 좁은 창`,expected:`표 영역만 가로로 스크롤되고, 지점명 열은 왼쪽에 계속 보임`,actual:`페이지 전체가 가로로 스크롤되고, 오른쪽 열을 보면 어느 지점의 숫자인지 알 수 없음`},{default:a(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,`실적 보고 화면을 360px 너비로 엽니다.`),s(`li`,null,`표를 왼쪽으로 밀어 6월·합계 열을 봅니다.`),s(`li`,null,`페이지 제목과 지점명 열이 화면에 남아 있는지 확인합니다.`)],-1)]]),_:1}),u(o,null,{default:a(()=>[...r[1]||=[s(`p`,null,[d(`표를 감싼 요소에 `),s(`code`,null,`overflow-x: auto`),d(`를 주고, 첫 열 셀에 `),s(`code`,null,`position: sticky; left: 0;`),d(`과 `),s(`strong`,null,`배경색`),d(`을 지정하세요.`)],-1)]]),_:1})]),s(`section`,U,[r[5]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=s(`p`,null,`화면 너비와 페이지 상태를 바꾸면서, 스크롤이 페이지에서 생기는지 표 영역에서 생기는지 비교해 보세요.`,-1),u(B)]),s(`section`,W,[r[8]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>표는 기본적으로 내용에 맞춰 열 너비를 정합니다. 화면이 좁으면 글자를 여러 줄로 접어 열을 좁히다가, 더 줄일 수 없는 너비(숫자, 줄바꿈 금지 글자 등)에 닿으면 부모 밖으로 넘칩니다. 부모의 <code>overflow</code>가 기본값 <code>visible</code>이면 넘친 표가 그대로 보이고, 그만큼 <strong>페이지 전체</strong>를 가로로 스크롤할 수 있게 됩니다.</p><p>해결은 넘침을 받아 줄 영역을 따로 만드는 것입니다. 표를 감싼 요소에 <code>overflow-x: auto</code>를 주면 그 요소가 <strong>스크롤 컨테이너</strong>가 되어, 넓은 표는 감싼 요소 안에서만 스크롤됩니다. 표에는 <code>min-width</code>나 <code>white-space: nowrap</code>으로 읽을 수 있는 너비를 확보해, 글자가 한두 글자씩 눌리지 않게 합니다.</p><p><code>position: sticky</code>는 가장 가까운 스크롤 컨테이너를 기준으로 붙습니다. 첫 열 셀에 <code>left: 0</code>을 주면 감싼 요소를 가로로 스크롤해도 왼쪽 끝에 남습니다. 셀 배경은 기본적으로 투명하므로, 배경색이 없으면 뒤로 지나가는 셀의 글자가 겹쳐 보입니다.</p>`,4),u(l,null,{default:a(()=>[...r[7]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`감싼 요소를 스크롤 영역으로`),d(),s(`code`,null,`overflow-x: auto`)]),s(`li`,null,[s(`strong`,null,`표 너비 확보`),d(),s(`code`,null,`min-width`),d(),s(`code`,null,`white-space: nowrap`)]),s(`li`,null,[s(`strong`,null,`첫 열 고정`),d(),s(`code`,null,`position: sticky; left: 0`)]),s(`li`,null,[s(`strong`,null,`고정 셀 배경·테두리`),d(),s(`code`,null,`background`),d(),s(`code`,null,`border-collapse: separate`)])],-1)]]),_:1})]),s(`section`,G,[r[10]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),r[11]||=s(`p`,null,[d(`표 때문에 화면이 밀릴 때는 `),s(`strong`,null,`표가 부모보다 얼마나 넓은지`),d(`와 `),s(`strong`,null,`어느 요소가 스크롤되고 있는지`),d(`부터 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),u(p,null,{default:a(()=>[...r[9]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Elements 패널에서 표와 부모 너비 비교`),s(`code`,null,`table`),d(`에 마우스를 올리면 화면에 요소 크기가 표시됩니다. 부모 요소(표를 감싼 요소)의 너비와 비교해 표가 더 넓다면 넘친 것입니다. Computed 탭의 상자 모델에서도 실제 너비를 확인할 수 있습니다.`)]),s(`li`,null,[s(`strong`,null,`스크롤 컨테이너가 어디인지 확인`),d(` 표의 부모부터 위로 올라가며 Computed 탭에서 `),s(`code`,null,`overflow-x`),d(`를 검색합니다. 감싼 요소의 값이 `),s(`code`,null,`visible`),d(`이면 넘친 표가 페이지까지 이어지고, 더 위 조상의 값이 `),s(`code`,null,`hidden`),d(`이면 그 지점에서 잘립니다.`)]),s(`li`,null,[s(`strong`,null,`sticky 셀의 기준과 값 확인`),d(` 첫 열 셀(`),s(`code`,null,`th`),d(`)을 선택하고 Styles 탭에서 `),s(`code`,null,`position: sticky`),d(`와 `),s(`code`,null,`left: 0`),d(`이 취소선 없이 적용되었는지 봅니다. 감싼 요소가 스크롤 컨테이너가 아니면 sticky는 그보다 바깥의 스크롤 영역을 기준으로 움직입니다.`)]),s(`li`,null,[s(`strong`,null,`Styles 탭에서 배경과 테두리 바꿔 보기`),d(` 첫 열 셀의 `),s(`code`,null,`background`),d(` 선언 체크박스를 해제하고 표를 스크롤해 글자가 겹치는지 봅니다.`)])],-1)]]),_:1})]),s(`section`,K,[r[12]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),r[13]||=s(`p`,null,`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. HTML 탭에서 감싼 요소의 접근성 속성을, JS 탭에서 스크롤 그림자를 붙이는 방법을 확인하세요.`,-1),u(m,{tabs:n(A)},null,8,[`tabs`]),r[14]||=s(`p`,null,[d(`예제는 `),s(`code`,null,`border-collapse: separate; border-spacing: 0;`),d(`으로 두고 셀마다 테두리를 그립니다. 테두리가 셀 상자의 일부라서 고정 셀과 함께 움직입니다. `),s(`code`,null,`collapse`),d(`로 바꿀 때는 고정 셀의 테두리 표시가 브라우저에 따라 다를 수 있으니 실제 브라우저에서 스크롤하며 확인하세요. 선이 두 줄로 겹치지 않게 셀에는 오른쪽·아래 테두리만 주고, 위쪽은 첫 행에, 왼쪽은 첫 열에만 줍니다.`)],-1)]),r[17]||=h(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 구조(표를 감싼 요소)로 머리글 행이나 마지막 열도 고정할 수 있고, 표 자체를 카드로 바꾸는 방법도 있습니다. 상황에 맞게 골라 쓰세요.</p><h3>머리글 행도 고정할 때</h3><p><code>overflow-x: auto</code>를 준 감싼 요소는 세로 방향도 스크롤 컨테이너가 됩니다(<code>overflow-y</code>가 <code>visible</code>에서 <code>auto</code>로 계산됨). 그래서 머리글에 <code>top: 0</code>을 주면 <strong>페이지가 아니라 감싼 요소</strong>를 기준으로 붙고, 감싼 요소 높이를 제한하지 않으면 감싼 요소가 세로로 스크롤되지 않아 머리글도 고정되지 않습니다. 감싼 요소에 높이를 정해 세로 스크롤 영역으로 만듭니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.table-scroll</span> {
  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">320px</span>;
  <span class="hljs-attribute">overflow</span>: auto; <span class="hljs-comment">/* 가로·세로 모두 이 영역에서 스크롤 */</span>
}
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">thead</span> <span class="hljs-selector-tag">th</span> {
  <span class="hljs-attribute">position</span>: sticky;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>;
}
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">thead</span> <span class="hljs-selector-tag">th</span><span class="hljs-selector-pseudo">:first-child</span> {
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">3</span>; <span class="hljs-comment">/* 머리글 행과 첫 열이 만나는 칸을 가장 위에 */</span>
}
</code></pre><h3>마지막 열(버튼 열)을 오른쪽에 고정할 때</h3><p>주문 목록의 ‘상세’ 버튼처럼 마지막 열이 늘 보여야 한다면 <code>right: 0</code>으로 고정합니다. 이 경우에도 배경색이 필요합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.order-table</span> <span class="hljs-selector-tag">tr</span> &gt; <span class="hljs-selector-pseudo">:last-child</span> {
  <span class="hljs-attribute">position</span>: sticky;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
}
</code></pre><h3>작은 화면에서 행을 카드로 바꿀 때</h3><p>열을 비교할 필요가 적은 목록형 표라면, 작은 화면에서 행마다 카드로 보여 주는 방법도 있습니다. 각 칸의 머리글은 <code>data-label</code> 속성으로 넣어 보여 줍니다. <code>display</code>를 바꾸면 브라우저에 따라 표의 의미가 스크린 리더에 전달되지 않을 수 있으니 실제 환경에서 확인하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@media</span> (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">600px</span>) {
  <span class="hljs-selector-class">.order-table</span> <span class="hljs-selector-tag">thead</span> { <span class="hljs-attribute">display</span>: none; }
  <span class="hljs-selector-class">.order-table</span> <span class="hljs-selector-tag">tr</span>,
  <span class="hljs-selector-class">.order-table</span> <span class="hljs-selector-tag">td</span> { <span class="hljs-attribute">display</span>: block; }
  <span class="hljs-selector-class">.order-table</span> <span class="hljs-selector-tag">td</span><span class="hljs-selector-pseudo">::before</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-built_in">attr</span>(data-label); <span class="hljs-comment">/* &lt;td data-label=&quot;주문일&quot;&gt; */</span>
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">700</span>;
  }
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>sticky는 셀(<code>th</code>·<code>td</code>)에 지정합니다.</strong> <code>thead</code>·<code>tr</code>에 지정하는 방식은 브라우저 지원이 달랐던 적이 있으니, 셀에 지정하는 쪽이 안전합니다. 고정 셀에는 배경색을 꼭 넣으세요.</li><li><strong>감싼 요소는 키보드로도 스크롤할 수 있어야 합니다.</strong> 스크롤 영역이 포커스를 받는지는 브라우저마다 다를 수 있으므로 <code>tabindex=&quot;0&quot;</code>을 지정하고, <code>role=&quot;region&quot;</code>과 <code>aria-labelledby</code>(또는 <code>aria-label</code>)로 영역 이름을 붙입니다. 포커스 표시(<code>:focus-visible</code>)도 지우지 마세요.</li><li><strong>표에는 <code>caption</code>과 <code>scope</code>를 씁니다.</strong> <code>caption</code>은 표의 이름이 되고, <code>th</code>의 <code>scope=&quot;col&quot;</code>·<code>scope=&quot;row&quot;</code>는 숫자가 어느 지점·어느 달의 값인지 알려 줍니다. 첫 열을 <code>th scope=&quot;row&quot;</code>로 두면 고정 열의 의미도 함께 전달됩니다.</li><li><strong>감싼 요소 안의 그림자·포커스 테두리는 잘릴 수 있습니다.</strong> <code>overflow-x: auto</code>는 감싼 요소 밖으로 나가는 내용을 자릅니다. 표 안 툴팁·드롭다운은 감싼 요소 밖에 두거나 위치를 따로 처리하세요.</li></ul></section>`,2),s(`section`,te,[r[16]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(g,null,{default:a(()=>[...r[15]||=[s(`p`,null,`위 예제에서 화면 너비를 320px로 두고, 문제 상태의 페이지를 바꿔 가며 해결 상태의 표를 가로로 스크롤해 보세요.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`‘페이지가 밀림’에서는 문제 상태의 화면 전체가 스크롤되고, 제목과 지점 열이 함께 사라진다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`해결 상태에서는 페이지 스크롤 없이 표 영역만 스크롤되고, 지점 열이 왼쪽에 남으며 그림자가 생긴다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`해결 상태의 표를 Tab 키로 선택하면 포커스 테두리가 보이고, 방향키로 가로 스크롤할 수 있다.`)])])],-1)]]),_:1})])])}}};export{fe as default,oe as duration,ne as group,q as id,se as keyProperty,Q as lead,ae as level,X as navTitle,J as order,$ as prerequisites,de as references,ue as related,ce as status,Z as summary,ie as tags,Y as title,re as topic,le as updated};