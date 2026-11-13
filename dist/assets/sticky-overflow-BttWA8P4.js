import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,u as h,ut as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as _}from"./DemoCompare-Bd6h8ThJ.js";var v=`/* 가상 화면: 실제 페이지의 스크롤(뷰포트)을 대신하는 상자입니다. */
.demo-sticky-screen {
  height: 220px;
  overflow-y: auto;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-sticky-page {
  overflow-x: clip; /* 가로로 넘친 부분만 자르고, 스크롤 컨테이너는 만들지 않습니다. */
}
.demo-sticky-page-all {
  overflow: clip; /* overflow: hidden 대신 clip */
}
.demo-sticky-banner {
  width: calc(100% + 80px); /* 화면보다 넓은 요소: 가로 스크롤을 막으려고 overflow를 쓰게 되는 원인 */
  padding: 10px 12px;
  background: linear-gradient(90deg, #315bc2, #7a5ad8);
  color: #fff;
}
.demo-sticky-head {
  padding: 12px;
}
.demo-sticky-head strong {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
}
.demo-sticky-head p {
  margin: 0;
  color: #5b6b80;
}
.demo-sticky-tabs {
  position: sticky;
  top: 0; /* 어디에 붙을지 정해야 sticky가 동작합니다. */
  z-index: 1; /* 아래 본문보다 위에 그립니다. */
  display: flex;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #c9d4e3;
  background: #fff; /* 배경이 없으면 본문 글자가 비쳐 보입니다. */
  list-style: none;
}
.demo-sticky-tab {
  flex: 1;
  padding: 8px 4px;
  text-align: center;
  white-space: nowrap;
}
.demo-sticky-tab.is-active {
  border-bottom: 2px solid #315bc2;
  color: #315bc2;
  font-weight: 700;
}
.demo-sticky-section {
  padding: 12px;
  border-bottom: 1px solid #e2e8f1;
}
.demo-sticky-section strong {
  display: block;
  margin-bottom: 6px;
}
.demo-sticky-section p {
  margin: 0 0 6px;
  line-height: 1.6;
}
/* 넓은 표: 페이지를 감싼 요소는 그대로 두고, 표를 감싼 상자만 가로로 스크롤합니다. */
.demo-sticky-table-box {
  overflow-x: auto; /* 이 상자 안에서만 가로 스크롤이 생깁니다. 탭 메뉴의 조상이 아니므로 탭의 sticky에는 영향이 없습니다. */
  border: 1px solid #c9d4e3;
}
.demo-sticky-table {
  width: 150%; /* 상자보다 넓은 표 */
  min-width: 560px;
  border-collapse: collapse;
}
.demo-sticky-table caption {
  padding: 0 0 6px;
  text-align: left;
  color: #5b6b80;
}
.demo-sticky-table th,
.demo-sticky-table td {
  padding: 6px 8px;
  border-bottom: 1px solid #e2e8f1;
  text-align: left;
  white-space: nowrap;
}
.demo-sticky-table th {
  background: #f3f6fb;
}
/* 비교를 위한 문제 상태: 페이지를 감싼 요소가 스크롤 컨테이너가 됩니다. */
.is-problem .demo-sticky-page-x { overflow-x: hidden; }
.is-problem .demo-sticky-page-all { overflow: hidden; }
/* 비교를 위한 문제 상태: 가로 스크롤을 페이지를 감싼 요소에 맡겼습니다.
   overflow-x: auto이면 overflow-y도 auto가 되어 감싼 요소가 세로 기준까지 가져갑니다. */
.is-problem .demo-sticky-page-wide { overflow-x: auto; }
.is-problem .demo-sticky-table-box { overflow-x: visible; }
/* 비교를 위한 문제 상태: 붙을 위치(top)가 없습니다. */
.is-problem .demo-sticky-tabs-notop { top: auto; }
`,y=[{label:`overflow-x: hidden`,pageClass:`demo-sticky-page-x`,problem:{code:`overflow-x: hidden`,note:`감싼 요소가 스크롤 컨테이너가 되어 탭이 본문과 함께 올라갑니다.`},solved:{code:`overflow-x: clip`,note:`가로만 자르고 스크롤 컨테이너는 만들지 않아 탭이 위에 붙습니다.`}},{label:`overflow: hidden`,pageClass:`demo-sticky-page-all`,problem:{code:`overflow: hidden`,note:`감싼 요소가 스크롤 컨테이너가 되어 탭이 본문과 함께 올라갑니다.`},solved:{code:`overflow: clip`,note:`넘친 부분만 자르고 스크롤 컨테이너는 만들지 않아 탭이 위에 붙습니다.`}},{label:`top 없음`,tabsClass:`demo-sticky-tabs-notop`,problem:{code:`top: auto`,note:`붙을 위치가 없어 탭이 일반 요소처럼 올라갑니다.`},solved:{code:`top: 0`,note:`가상 화면 맨 위에 닿으면 탭이 붙습니다.`}},{label:`가로 스크롤도 필요`,pageClass:`demo-sticky-page-wide`,wide:!0,problem:{code:`overflow-x: auto`,note:`표는 가로로 밀리지만 감싼 요소가 세로 기준까지 가져가 탭이 본문과 함께 올라갑니다.`},solved:{code:`표 상자만 overflow-x: auto`,note:`감싼 요소는 clip 그대로 두고 표만 따로 가로 스크롤해 탭이 위에 붙습니다.`}},{label:`원인 없음`,problem:{code:`overflow-x: clip · top: 0`,note:`원인이 없으면 문제 상태에서도 탭이 붙습니다.`},solved:{code:`overflow-x: clip · top: 0`,note:`두 상태가 같습니다.`}}],b=[`상품정보`,`리뷰`,`문의`,`배송`],x=[{title:`상품정보`,text:`가볍고 따뜻한 겨울 패딩입니다. 생활 방수 원단을 사용했습니다.`},{title:`사이즈`,text:`S, M, L, XL 네 가지입니다. 평소 입는 사이즈로 고르세요.`},{title:`리뷰`,text:`“가볍고 따뜻해요.” “색이 사진과 같아요.” 외 128건`},{title:`문의`,text:`세탁 방법, 재입고 일정 등 상품 문의 32건`},{title:`배송`,text:`오후 2시 이전 주문은 당일 출고합니다. 도서 산간은 1~2일 더 걸립니다.`},{title:`교환·반품`,text:`받은 날로부터 7일 이내에 신청할 수 있습니다.`}],S={columns:[`사이즈`,`가슴둘레`,`총장`,`어깨너비`,`소매길이`,`권장 키`],rows:[[`S`,`104`,`66`,`44`,`61`,`160~165`],[`M`,`110`,`68`,`46`,`62`,`165~170`],[`L`,`116`,`70`,`48`,`63`,`170~175`],[`XL`,`122`,`72`,`50`,`64`,`175~180`]]},C=[{label:`CSS`,language:`css`,code:v},{label:`HTML`,language:`xml`,code:`<div class="demo-sticky-screen">
  <!-- overflow-x: hidden 대신 clip을 쓰는 감싼 요소 -->
  <div class="demo-sticky-page">
    <div class="demo-sticky-banner">가을 특가 배너</div>
    <div class="demo-sticky-head">…</div>
    <ul class="demo-sticky-tabs">
      <li class="demo-sticky-tab is-active">상품정보</li>
      <li class="demo-sticky-tab">리뷰</li>
      <li class="demo-sticky-tab">문의</li>
      <li class="demo-sticky-tab">배송</li>
    </ul>
    <!-- 넓은 표는 따로 감싼 상자에서만 가로로 스크롤합니다. -->
    <div class="demo-sticky-table-box" tabindex="0" role="region" aria-label="사이즈표, 가로 스크롤 가능">
      <table class="demo-sticky-table">…</table>
    </div>
    <div class="demo-sticky-section">…</div>
  </div>
</div>`}],w={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-sticky-label`},T=[`aria-checked`,`onClick`],E={class:`demo-sticky-screen`,tabindex:`0`,role:`region`,"aria-label":`가상 화면, 스크롤 가능`},D={key:0,class:`demo-sticky-section`},O={class:`demo-sticky-table-box`,tabindex:`0`,role:`region`,"aria-label":`사이즈표, 가로 스크롤 가능`},k={class:`demo-sticky-table`},A={scope:`row`},j={__name:`StickyOverflowDemo`,setup(o){let c=n(y[0].label),d=m(()=>y.find(e=>e.label===c.value));return(n,o)=>(e(),u(_,{problem:d.value.problem,solved:d.value.solved},{controls:r(()=>[o[0]||=i(`span`,{id:`demo-sticky-label`},`sticky가 동작하지 않는 원인`,-1),i(`div`,w,[(e(!0),a(p,null,l(t(y),t=>(e(),a(`button`,{key:t.label,type:`button`,role:`radio`,"aria-checked":c.value===t.label,onClick:e=>c.value=t.label},f(t.label),9,T))),128))])]),caption:r(()=>[...o[5]||=[s(` 각 가상 화면 안을 아래로 스크롤해 보세요. 가상 화면(`,-1),i(`code`,null,`overflow-y: auto`,-1),s(`)이 실제 페이지 스크롤을 대신합니다. ‘가로 스크롤도 필요’에서는 사이즈표를 옆으로도 밀어 보세요. 문제 상태는 페이지 전체가, 해결 상태는 표 상자만 가로로 움직입니다. `,-1)]]),default:r(()=>[i(`div`,E,[i(`div`,{class:g([`demo-sticky-page`,d.value.pageClass])},[o[3]||=i(`div`,{class:`demo-sticky-banner`},`가을 특가 배너 · 화면보다 넓은 요소`,-1),o[4]||=i(`div`,{class:`demo-sticky-head`},[i(`strong`,null,`경량 패딩 점퍼`),i(`p`,null,`59,000원 · 무료 배송`)],-1),i(`ul`,{class:g([`demo-sticky-tabs`,d.value.tabsClass])},[(e(!0),a(p,null,l(t(b),(t,n)=>(e(),a(`li`,{key:t,class:g([`demo-sticky-tab`,{"is-active":n===0}])},f(t),3))),128))],2),d.value.wide?(e(),a(`div`,D,[o[2]||=i(`strong`,null,`사이즈표`,-1),i(`div`,O,[i(`table`,k,[o[1]||=i(`caption`,null,`단위: cm`,-1),i(`thead`,null,[i(`tr`,null,[(e(!0),a(p,null,l(t(S).columns,t=>(e(),a(`th`,{key:t,scope:`col`},f(t),1))),128))])]),i(`tbody`,null,[(e(!0),a(p,null,l(t(S).rows,t=>(e(),a(`tr`,{key:t[0]},[i(`th`,A,f(t[0]),1),(e(!0),a(p,null,l(t.slice(1),(t,n)=>(e(),a(`td`,{key:n},f(t),1))),128))]))),128))])])])])):h(``,!0),(e(!0),a(p,null,l(t(x),t=>(e(),a(`div`,{key:t.title,class:`demo-sticky-section`},[i(`strong`,null,f(t.title),1),i(`p`,null,f(t.text),1)]))),128))],2)])]),_:1},8,[`problem`,`solved`]))}},M={class:`doc-body`},N={id:`section-0`},P={id:`section-1`},F={id:`section-2`},I={id:`section-3`},ee={id:`section-4`},L={id:`section-5`},R={id:`section-7`},z=`sticky-overflow`,B=9,V=`position: sticky가 동작하지 않을 때`,H=`sticky가 동작하지 않을 때`,U=`조상의 overflow가 sticky 요소의 스크롤 기준을 바꾸는 원리를 이해하고, overflow-x를 clip으로 바꾸고 top을 지정해 해결합니다.`,W=`상단에 붙어야 할 탭 메뉴가 본문과 함께 올라간다면?
sticky 요소보다 먼저, 조상 요소의 overflow를 확인하세요.
`,G=`레이아웃`,K=`위치`,q=[`position`,`sticky`,`overflow`,`clip`,`탭 메뉴`,`스크롤`],J=`중급`,Y=`약 12분`,X=[`position`,`overflow`,`containing block`],Z=`overflow-x: clip`,Q=`published`,$=`2026-11-12`,te=[`flex-scroll-area`,`fixed-transform`],ne=[{title:`CSS Positioned Layout — Sticky positioning`,url:`https://www.w3.org/TR/css-position-3/#stickypos-insets`},{title:`CSS Overflow — overflow: clip`,url:`https://www.w3.org/TR/css-overflow-3/#valdef-overflow-clip`},{title:`MDN — position`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/position`},{title:`MDN — overflow`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/overflow`}],re={__name:`sticky-overflow`,setup(n,{expose:l}){return l({frontmatter:{id:`sticky-overflow`,order:9,title:`position: sticky가 동작하지 않을 때`,navTitle:`sticky가 동작하지 않을 때`,summary:`조상의 overflow가 sticky 요소의 스크롤 기준을 바꾸는 원리를 이해하고, overflow-x를 clip으로 바꾸고 top을 지정해 해결합니다.`,lead:`상단에 붙어야 할 탭 메뉴가 본문과 함께 올라간다면?
sticky 요소보다 먼저, 조상 요소의 overflow를 확인하세요.
`,group:`레이아웃`,topic:`위치`,tags:[`position`,`sticky`,`overflow`,`clip`,`탭 메뉴`,`스크롤`],level:`중급`,duration:`약 12분`,prerequisites:[`position`,`overflow`,`containing block`],keyProperty:`overflow-x: clip`,status:`published`,updated:`2026-11-12`,related:[`flex-scroll-area`,`fixed-transform`],references:[{title:`CSS Positioned Layout — Sticky positioning`,url:`https://www.w3.org/TR/css-position-3/#stickypos-insets`},{title:`CSS Overflow — overflow: clip`,url:`https://www.w3.org/TR/css-overflow-3/#valdef-overflow-clip`},{title:`MDN — position`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/position`},{title:`MDN — overflow`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/overflow`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`RouterLink`),_=c(`DocPractice`);return e(),a(`div`,M,[i(`section`,N,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,[s(`상품 상세 화면의 탭 메뉴(상품정보·리뷰·문의·배송)에 `),i(`code`,null,`position: sticky`),s(`와 `),i(`code`,null,`top: 0`),s(`을 넣었습니다. 단독 페이지에서는 화면 위에 잘 붙었는데, 공통 레이아웃에 올리자 탭이 본문과 함께 위로 올라가 버립니다.`)],-1),l[4]||=i(`p`,null,[s(`탭 CSS는 바뀐 것이 없어서 원인을 찾기 어렵고, 가로 스크롤을 막으려고 공통 감싼 요소에 넣은 `),i(`code`,null,`overflow-x: hidden`),s(`이 원인인 경우가 많습니다. QA에서는 이런 형태로 돌아옵니다.`)],-1),o(u,{title:`상품 상세: 스크롤하면 탭 메뉴가 상단에 고정되지 않음`,env:`전체 브라우저 · 공통 레이아웃(.wrap)에 overflow-x: hidden 적용`,expected:`본문을 스크롤해도 탭 메뉴가 화면 상단에 붙어 있음`,actual:`탭 메뉴가 본문과 함께 위로 올라가 화면 밖으로 사라짐`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`상품 상세 화면으로 이동합니다.`),i(`li`,null,`탭 메뉴가 화면 위로 지나가도록 아래로 스크롤합니다.`),i(`li`,null,`탭 메뉴가 화면 상단에 남아 있는지 확인합니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`조상의 `),i(`code`,null,`overflow-x: hidden`),s(`을 `),i(`code`,null,`overflow-x: clip`),s(`으로 바꾸고, sticky 요소에는 `),i(`strong`,null,`top 값`),s(`을 꼭 지정하세요.`)],-1)]]),_:1})]),i(`section`,P,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[6]||=i(`p`,null,`원인을 바꾸면서 각 가상 화면 안을 스크롤해 보세요. ‘원인 없음’을 선택하면 두 상태가 같아집니다.`,-1),o(j)]),i(`section`,F,[l[8]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>position: sticky</code>는 <strong>가장 가까운 스크롤 컨테이너</strong>(scroll container)를 기준으로 붙습니다. 보통은 페이지 전체(뷰포트)가 그 기준입니다. 그런데 조상 요소에 <code>overflow</code>가 <code>hidden</code>, <code>auto</code>, <code>scroll</code> 중 하나라도 있으면 그 조상이 스크롤 컨테이너가 됩니다. <code>overflow-x: hidden</code>만 써도 <code>overflow-y</code>가 <code>visible</code>에서 <code>auto</code>로 바뀌므로 마찬가지입니다.</p><p>이 조상은 높이가 내용만큼 늘어나 스스로 스크롤되지 않습니다. sticky 요소는 이 조상 안에서 붙으려고 하지만 조상이 스크롤되지 않으니 붙을 일이 없고, 페이지가 스크롤되면 조상과 함께 올라갑니다. <code>overflow: clip</code>은 넘친 부분을 똑같이 잘라 내면서도 스크롤 컨테이너를 만들지 않아, sticky가 원래 기준인 페이지 스크롤을 따라갑니다.</p><p>그 밖에 <code>top</code>·<code>bottom</code> 같은 위치 값이 없으면 sticky는 일반 요소(relative)처럼 움직입니다. 또 sticky 요소는 자신의 <strong>부모(containing block) 영역 밖으로는 나가지 못합니다.</strong> 부모가 sticky 요소만큼만 높으면 움직일 공간이 없어 붙지 않는 것처럼 보입니다.</p>`,4),o(p,null,{default:r(()=>[...l[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`조상에 overflow`),s(),i(`code`,null,`overflow-x: hidden`)]),i(`li`,null,[i(`strong`,null,`조상이 스크롤 컨테이너가 됨`),s(),i(`code`,null,`overflow-y: auto`)]),i(`li`,null,[i(`strong`,null,`자르기만 하고 기준은 유지`),s(),i(`code`,null,`overflow-x: clip`)])],-1)]]),_:1})]),i(`section`,I,[l[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[11]||=i(`p`,null,[s(`sticky가 동작하지 않을 때는 sticky 요소의 CSS보다 `),i(`strong`,null,`어느 조상이 스크롤 기준이 되었는지`),s(`부터 찾습니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),o(m,null,{default:r(()=>[...l[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 sticky 요소 선택`),i(`code`,null,`.demo-sticky-tabs`),s(`를 선택하고 Styles 탭에서 `),i(`code`,null,`position: sticky`),s(`와 `),i(`code`,null,`top`),s(` 값이 적용되었는지 확인합니다. 선언에 취소선이 있거나 `),i(`code`,null,`top`),s(`이 없으면 그것부터 고칩니다.`)]),i(`li`,null,[i(`strong`,null,`조상 요소의 overflow 확인`),s(` Elements 패널에서 부모 요소를 하나씩 선택하며 Computed 탭에서 `),i(`code`,null,`overflow`),s(`를 검색합니다. 기본값 `),i(`code`,null,`visible`),s(`은 `),i(`strong`,null,`Show all`),s(`을 켜야 보입니다. `),i(`code`,null,`overflow-x`),s(`나 `),i(`code`,null,`overflow-y`),s(`가 `),i(`code`,null,`visible`),s(`이 아닌 첫 번째 조상이 sticky의 기준입니다.`)]),i(`li`,null,[i(`strong`,null,`부모 높이 확인`),s(` Elements 패널에서 sticky 요소의 부모에 마우스를 올리면 화면에 그 영역이 강조됩니다. 강조된 영역이 sticky 요소와 거의 같은 높이라면 움직일 공간이 없는 경우입니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 바로 시험`),s(` 찾은 조상의 `),i(`code`,null,`overflow-x: hidden`),s(` 값을 `),i(`code`,null,`clip`),s(`으로 바꾸고 페이지를 스크롤해 봅니다. 탭이 상단에 붙으면 원인이 확정됩니다.`)])],-1)]]),_:1})]),i(`section`,ee,[l[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[13]||=i(`p`,null,[i(`code`,null,`.demo-sticky-page`),s(`의 `),i(`code`,null,`overflow-x: clip`),s(`과 `),i(`code`,null,`.demo-sticky-tabs`),s(`의 `),i(`code`,null,`top: 0`),s(`을 확인하세요. 아래 CSS는 위 실행 예제와 같은 파일을 사용합니다.`)],-1),o(h,{tabs:t(C)},null,8,[`tabs`])]),i(`section`,L,[l[26]||=d(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>sticky가 붙지 않는 일은 탭 메뉴 말고도 자주 생깁니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>가로 스크롤도 필요할 때</h3><p><code>overflow-x: clip</code>은 넘친 부분을 잘라 낼 뿐 가로 스크롤을 만들지 않습니다. 넓은 배너처럼 장식이 삐져나온 경우에만 맞고, 넓은 표·탭 목록처럼 내용을 옆으로 밀어 봐야 하는 경우에는 내용이 잘려 보이지 않게 됩니다. 그렇다고 페이지를 감싼 요소를 <code>overflow-x: auto</code>로 바꾸면 <code>overflow-y</code>도 <code>auto</code>로 계산되어 감싼 요소가 세로 기준까지 가져갑니다. 이 감싼 요소는 높이 제한이 없어 스스로 세로로 스크롤되지 않으므로 <code>top: 0</code> 탭이 다시 본문과 함께 올라갑니다. 예제의 ‘가로 스크롤도 필요’에서 두 상태를 비교해 보세요.</p>`,4),i(`p`,null,[l[15]||=i(`strong`,null,`A. 넓은 블록만 따로 스크롤 (권장)`,-1),l[16]||=s(` 페이지를 감싼 요소는 그대로(`,-1),l[17]||=i(`code`,null,`visible`,-1),l[18]||=s(` 또는 `,-1),l[19]||=i(`code`,null,`clip`,-1),l[20]||=s(`) 두고, 넓은 표나 탭 목록만 `,-1),l[21]||=i(`code`,null,`overflow-x: auto`,-1),l[22]||=s(` 상자로 감쌉니다. 이 상자는 탭 메뉴의 조상이 아니므로 탭은 평소처럼 페이지 기준으로 붙습니다. 상자 안에서 `,-1),l[23]||=i(`code`,null,`left: 0`,-1),l[24]||=s(`으로 첫 열을 고정하면 그 상자가 기준이 됩니다(`,-1),o(g,{to:`/pub/css/table-sticky-column`},{default:r(()=>[...l[14]||=[s(`반응형 표 첫 열 고정`,-1)]]),_:1}),l[25]||=s(` 참고).`,-1)]),l[27]||=d(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.wrap</span> { <span class="hljs-attribute">overflow-x</span>: clip; }            <span class="hljs-comment">/* 장식만 자릅니다. */</span>
<span class="hljs-selector-class">.table-scroll</span> { <span class="hljs-attribute">overflow-x</span>: auto; }    <span class="hljs-comment">/* 표만 가로로 스크롤합니다. */</span>
<span class="hljs-selector-class">.tabs</span> { <span class="hljs-attribute">position</span>: sticky; <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>; }    <span class="hljs-comment">/* 페이지 기준으로 붙습니다. */</span>
</code></pre><p><strong>B. 표 머리글도 위·왼쪽 모두 고정</strong> 표 안에서 머리글 행(<code>top: 0</code>)과 첫 열(<code>left: 0</code>)을 함께 고정하려면, 표 상자에 <code>max-height</code>를 주어 가로·세로 모두 스크롤되는 상자로 만듭니다. 그러면 <code>top</code>과 <code>left</code>가 모두 이 상자를 기준으로 동작합니다. 머리글은 페이지가 아니라 상자 위쪽에 붙는다는 점을 기억하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.table-scroll</span> { <span class="hljs-attribute">max-height</span>: <span class="hljs-number">60vh</span>; <span class="hljs-attribute">overflow</span>: auto; }
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">th</span> { <span class="hljs-attribute">position</span>: sticky; <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>; }
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">thead</span> <span class="hljs-selector-tag">th</span> { <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>; }
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">tbody</span> <span class="hljs-selector-tag">th</span> { <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>; }
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">thead</span> <span class="hljs-selector-tag">th</span><span class="hljs-selector-pseudo">:first-child</span> { <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>; } <span class="hljs-comment">/* 왼쪽 위 칸 */</span>
</code></pre><p><strong>C. 머리글은 페이지 상단에, 본문은 가로 스크롤</strong> 머리글이 페이지 맨 위에 붙어야 하면 머리글을 가로 스크롤 상자 밖에 두고, 본문의 가로 위치를 스크립트로 맞춥니다. 데이터 그리드에서 많이 쓰는 방식입니다. 머리글 쪽은 <code>overflow-x: hidden</code>으로 스크롤바 없이 두고(이 상태에서도 스크립트로 <code>scrollLeft</code>는 바꿀 수 있습니다), 이벤트는 <code>{ passive: true }</code>로 등록한 뒤 화면을 떠날 때 해제합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.grid-head</span> { <span class="hljs-attribute">position</span>: sticky; <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">overflow-x</span>: hidden; }
<span class="hljs-selector-class">.grid-body</span> { <span class="hljs-attribute">overflow-x</span>: auto; }
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">syncHead</span> = (<span class="hljs-params"></span>) =&gt; { head.<span class="hljs-property">scrollLeft</span> = body.<span class="hljs-property">scrollLeft</span> }
body.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;scroll&#39;</span>, syncHead, { <span class="hljs-attr">passive</span>: <span class="hljs-literal">true</span> })
<span class="hljs-comment">// 화면을 떠날 때: body.removeEventListener(&#39;scroll&#39;, syncHead)</span>
</code></pre><h3>표 머리글 고정</h3><p>표 머리글은 <code>thead</code>가 아니라 <code>th</code>에 sticky를 줍니다. 표를 감싼 요소에 높이와 <code>overflow-y: auto</code>가 있으면 그 요소 안에서 붙고, 없으면 페이지 기준으로 붙습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.table-wrap</span> { <span class="hljs-attribute">max-height</span>: <span class="hljs-number">320px</span>; <span class="hljs-attribute">overflow-y</span>: auto; }
<span class="hljs-selector-class">.table-wrap</span> <span class="hljs-selector-tag">th</span> {
  <span class="hljs-attribute">position</span>: sticky;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
}
</code></pre><h3>Flex·Grid 안에서 사이드바 고정</h3><p>Flex·Grid 항목은 기본 <code>align-items: stretch</code>로 컨테이너 높이만큼 늘어납니다. 사이드바가 이미 부모만큼 길면 움직일 공간이 없으므로 <code>align-self: start</code>로 자기 높이만 갖게 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.layout</span> { <span class="hljs-attribute">display</span>: flex; <span class="hljs-attribute">gap</span>: <span class="hljs-number">24px</span>; }
<span class="hljs-selector-class">.layout-aside</span> {
  <span class="hljs-attribute">position</span>: sticky;
  <span class="hljs-attribute">top</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">align-self</span>: start; <span class="hljs-comment">/* 늘어나지 않게 */</span>
}
</code></pre><h3>부모가 sticky 요소만큼만 높을 때</h3><p>sticky 요소를 따로 감싼 부모가 있으면, sticky는 그 부모 영역 안에서만 움직입니다. sticky 요소를 본문을 함께 담은 큰 부모의 직접 자식으로 옮깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- 문제: 감싼 div가 탭만큼만 높습니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tabs-wrap&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tabs&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 해결: 탭을 본문과 같은 부모 아래에 둡니다. --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tabs&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h3>가로 sticky(첫 열 고정)</h3><p>가로로 스크롤되는 표의 첫 열은 <code>left: 0</code>으로 고정합니다. 이 경우에는 가로 스크롤을 만드는 감싼 요소(<code>overflow-x: auto</code>)가 의도한 기준입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.table-scroll</span> { <span class="hljs-attribute">overflow-x</span>: auto; }
<span class="hljs-selector-class">.table-scroll</span> <span class="hljs-selector-tag">td</span><span class="hljs-selector-pseudo">:first-child</span> {
  <span class="hljs-attribute">position</span>: sticky;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
}
</code></pre>`,18)]),l[30]||=d(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>overflow: clip</code>은 최신 브라우저에서 지원합니다.</strong> Safari는 16부터 지원하므로 구형 iOS 기기를 지원해야 한다면 확인하세요. 지원하지 않는 브라우저에서는 선언이 무시되어 넘친 요소가 보일 뿐, 레이아웃이 깨지지는 않습니다.</li><li><strong><code>clip</code>은 잘라 낼 뿐 스크롤을 만들지 않습니다.</strong> 넘친 내용을 사용자가 옆으로 밀어 봐야 한다면 <code>clip</code>이 아니라, 그 내용만 감싼 상자에 <code>overflow-x: auto</code>를 줍니다. 페이지를 감싼 요소 전체를 <code>auto</code>로 바꾸면 sticky 기준이 다시 감싼 요소로 바뀝니다.</li><li><strong>한쪽 축만 clip일 때 조합을 확인합니다.</strong> <code>overflow-x: clip</code>에 <code>overflow-y: auto</code>처럼 스크롤 값을 함께 쓰면 <code>clip</code>이 <code>hidden</code>으로 바뀌어 다시 스크롤 컨테이너가 됩니다.</li><li><strong>z-index와 배경색을 지정합니다.</strong> sticky 요소는 뒤에 오는 본문 위에 겹쳐 그려져야 하므로 <code>z-index</code>를 주고, 배경색이 없으면 본문 글자가 비쳐 보입니다.</li><li><strong>고정 영역이 화면을 가리지 않게 합니다.</strong> 탭으로 이동한 요소가 sticky 영역 아래에 숨으면 키보드 사용자가 포커스 위치를 볼 수 없습니다. 고정 높이만큼 <code>scroll-padding-top</code>을 지정하세요.</li></ul></section>`,1),i(`section`,R,[l[29]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(_,null,{default:r(()=>[...l[28]||=[i(`p`,null,`위 예제에서 원인을 overflow-x: hidden → top 없음 → 원인 없음 순서로 바꾸며 각 가상 화면을 스크롤해 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문제 상태에서는 탭 메뉴가 본문과 함께 위로 올라간다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태에서는 탭 메뉴가 가상 화면 상단에 붙고, 넓은 배너는 가로 스크롤 없이 잘린다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`‘원인 없음’을 선택하면 두 상태의 동작이 같아진다.`)])])],-1)]]),_:1})])])}}};export{re as default,Y as duration,G as group,z as id,Z as keyProperty,W as lead,J as level,H as navTitle,B as order,X as prerequisites,ne as references,te as related,Q as status,U as summary,q as tags,V as title,K as topic,$ as updated};