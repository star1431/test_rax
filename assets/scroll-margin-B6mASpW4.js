import{D as e,G as t,H as n,R as r,V as i,c as a,d as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,ut as g,w as _}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=`/* 가상 화면: 실제 페이지의 스크롤(뷰포트)을 대신하는 상자입니다. */
.demo-sm-screen {
  position: relative;
  height: 220px;
  overflow-y: auto;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
/* 고정 헤더: 스크롤해도 상자 맨 위에 붙어 있습니다. */
.demo-sm-header {
  position: sticky;
  top: 0;
  z-index: 1; /* 아래 본문보다 위에 그립니다. */
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 44px; /* 이 높이만큼 본문이 가려질 수 있습니다. */
  padding: 0 12px;
  background: #23334b; /* 배경이 있어 뒤에 있는 제목이 보이지 않습니다. */
  color: #fff;
  font-weight: 700;
}
.demo-sm-intro {
  padding: 12px;
}
.demo-sm-intro p {
  margin: 0;
}
.demo-sm-section {
  min-height: 190px; /* 마지막 섹션도 상자 맨 위까지 올라갈 수 있도록 길게 */
  box-sizing: border-box;
  padding: 12px;
  border-top: 1px solid #e2e8f1;
}
.demo-sm-section.is-target {
  background: #fff8db; /* 목차로 이동한 섹션 표시 */
}
.demo-sm-title {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
}
.demo-sm-section p {
  margin: 0;
  line-height: 1.6;
}
.demo-sm-end {
  margin: 0;
  padding: 12px;
  border-top: 1px solid #e2e8f1;
  text-align: center;
}
.demo-sm-readout {
  margin: 8px 0 0;
  font-size: 12px;
}

/* 해결 1: 이동할 대상 위에 헤더 높이만큼 여백을 둡니다. */
.demo-sm-screen-margin .demo-sm-section {
  scroll-margin-top: 44px;
}
/* 해결 2: 스크롤 상자 위쪽 44px을 '가려진 영역'으로 빼고 맞춥니다. */
.demo-sm-screen-padding {
  scroll-padding-top: 44px;
}

/* 비교를 위한 문제 상태: 여백이 없어 대상의 위쪽 끝이 상자 맨 위(헤더 뒤)에 맞춰집니다. */
.is-problem .demo-sm-screen-margin .demo-sm-section { scroll-margin-top: 0; }
.is-problem .demo-sm-screen-padding { scroll-padding-top: auto; }
`,b=[{key:`margin`,label:`scroll-margin-top (이동할 대상)`,screenClass:`demo-sm-screen-margin`,problem:{code:`scroll-margin-top: 0`,note:`대상의 위쪽 끝이 상자 맨 위에 맞춰져 제목이 헤더 뒤에 가려집니다.`},solved:{code:`scroll-margin-top: 44px`,note:`대상 위에 헤더 높이만큼 여백을 두고 멈춰 제목이 보입니다.`}},{key:`padding`,label:`scroll-padding-top (스크롤 상자)`,screenClass:`demo-sm-screen-padding`,problem:{code:`scroll-padding-top: auto`,note:`상자 맨 위를 기준으로 맞춰 제목이 헤더 뒤에 가려집니다.`},solved:{code:`scroll-padding-top: 44px`,note:`상자 위쪽 44px을 빼고 맞춰 제목이 헤더 아래에 보입니다.`}}],x=[{id:`intro`,title:`1. 소개`,text:`회원 가입 없이 쓸 수 있는 일정 관리 서비스입니다. 일정을 만들고 다른 사람과 공유할 수 있습니다.`},{id:`usage`,title:`2. 사용법`,text:`오른쪽 위의 추가 버튼을 눌러 일정을 만듭니다. 날짜와 시간을 고른 뒤 저장하면 목록에 표시됩니다.`},{id:`caution`,title:`3. 주의`,text:`공유 링크를 받은 사람은 누구나 일정을 볼 수 있습니다. 개인 정보는 일정 제목에 적지 마세요.`}],S=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<div class="demo-sm-screen demo-sm-screen-margin">
  <div class="demo-sm-header">고정 헤더 (높이 44px)</div>

  <div class="demo-sm-intro">
    <p>일정 관리 서비스 사용 안내서</p>
  </div>

  <div id="intro" class="demo-sm-section">
    <strong class="demo-sm-title">1. 소개</strong>
    <p>…</p>
  </div>
  <div id="usage" class="demo-sm-section">
    <strong class="demo-sm-title">2. 사용법</strong>
    <p>…</p>
  </div>
  <div id="caution" class="demo-sm-section">
    <strong class="demo-sm-title">3. 주의</strong>
    <p>…</p>
  </div>
</div>

<!-- 목차: 앵커 링크로 이동 (scroll-margin-top이 적용됨) -->
<a href="#usage">2. 사용법</a>`},{label:`페이지 적용`,language:`css`,code:`/* 실제 페이지: 스크롤 상자는 화면(뷰포트)이고, html에 지정합니다. */
.site-header {
  position: sticky;
  top: 0;
  height: 64px;
}

/* 방법 1: 스크롤 상자(html)에 헤더 높이만큼 */
html {
  scroll-padding-top: 64px;
}

/* 방법 2: 이동할 대상에 헤더 높이만큼 */
main [id] {
  scroll-margin-top: 64px;
}

/* 부드러운 이동은 움직임 줄이기 설정을 끄지 않은 사용자에게만 */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}`},{label:`JS`,language:`javascript`,code:`// scrollIntoView도 scroll-margin-top / scroll-padding-top을 반영합니다.
document.querySelector('#usage').scrollIntoView({ block: 'start' })

// 좌표를 직접 계산해 이동할 때는 반영되지 않으므로 헤더 높이를 빼야 합니다.
const target = document.querySelector('#usage')
const headerHeight = document.querySelector('.site-header').offsetHeight
window.scrollTo({
  top: target.getBoundingClientRect().top + window.scrollY - headerHeight,
})`}],C={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-sm-method-label`},w=[`aria-checked`,`onClick`],T={class:`sample-buttons`,role:`group`,"aria-labelledby":`demo-sm-toc-label`},E=[`aria-pressed`,`onClick`],D=[`onScroll`],O=[`data-section`],k={class:`demo-sm-title`},A={class:`demo-sm-readout`},j={__name:`ScrollMarginDemo`,setup(s){let l=n(b[0].key),f=n(``),y=h(()=>b.find(e=>e.key===l.value)),S={},j=i({problem:``,solved:``}),M=e=>e?`solved`:`problem`;function N(e,t){S[M(e)]=t}function P(e){return e.getBoundingClientRect().top+e.clientTop}function F(e,t){let n=e.querySelector(`[data-section="${t}"]`);if(!n)return;let r=parseFloat(getComputedStyle(n).scrollMarginTop)||0,i=parseFloat(getComputedStyle(e).scrollPaddingTop)||0;e.scrollTop=n.getBoundingClientRect().top-P(e)+e.scrollTop-r-i}function I(e){let t=M(e),n=S[t];if(!n||!f.value)return;let r=n.querySelector(`[data-section="${f.value}"] .demo-sm-title`),i=n.querySelector(`.demo-sm-header`);if(!r||!i)return;let a=Math.round(r.getBoundingClientRect().top-P(n)-i.offsetHeight),o=x.find(e=>e.id===f.value).title;j[t]=`${o} · 제목 위치: 헤더 아래 ${a>0?`+`:``}${a}px (${a<0?`헤더에 가려짐`:`보임`})`}function L(e){f.value=e;for(let t of[!1,!0]){let n=S[M(t)];n&&(F(n,e),I(t))}}async function R(e){l.value=e,f.value&&(await _(),L(f.value))}return(n,i)=>(e(),d(v,{problem:y.value.problem,solved:y.value.solved},{controls:r(()=>[i[0]||=a(`span`,{id:`demo-sm-method-label`,class:`demo-label`},`해결 방법`,-1),a(`div`,C,[(e(!0),o(m,null,u(t(b),t=>(e(),o(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":l.value===t.key,onClick:e=>R(t.key)},p(t.label),9,w))),128))]),i[1]||=a(`span`,{id:`demo-sm-toc-label`,class:`demo-label`},`목차로 이동`,-1),a(`div`,T,[(e(!0),o(m,null,u(t(x),t=>(e(),o(`button`,{key:t.id,type:`button`,"aria-pressed":f.value===t.id,onClick:e=>L(t.id)},p(t.title),9,E))),128))])]),default:r(({solved:n})=>[a(`div`,{ref:e=>N(n,e),class:g([`demo-sm-screen`,y.value.screenClass]),tabindex:`0`,role:`region`,"aria-label":`가상 화면, 스크롤 가능`,onScroll:e=>I(n)},[i[2]||=a(`div`,{class:`demo-sm-header`},`고정 헤더 (높이 44px)`,-1),i[3]||=a(`div`,{class:`demo-sm-intro`},[a(`p`,null,`일정 관리 서비스 사용 안내서`)],-1),(e(!0),o(m,null,u(t(x),t=>(e(),o(`div`,{key:t.id,class:g([`demo-sm-section`,{"is-target":f.value===t.id}]),"data-section":t.id},[a(`strong`,k,p(t.title),1),a(`p`,null,p(t.text),1)],10,O))),128)),i[4]||=a(`p`,{class:`demo-sm-end`},`안내서 끝`,-1)],42,D),a(`p`,A,p(j[M(n)]||`목차 버튼을 눌러 이동해 보세요.`),1)]),caption:r(()=>[...i[5]||=[c(` 목차 버튼은 실제 페이지의 주소(#)와 스크롤을 바꾸지 않도록, 브라우저가 앵커 이동·`,-1),a(`code`,null,`scrollIntoView()`,-1),c(`에서 하는 계산(대상 위치 − `,-1),a(`code`,null,`scroll-margin-top`,-1),c(` − `,-1),a(`code`,null,`scroll-padding-top`,-1),c(`)을 그대로 따라 가상 화면 안의 스크롤 위치만 바꿉니다. 두 값은 예제 CSS에 적용된 값을 읽어 옵니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},M={class:`doc-body`},N={id:`section-0`},P={id:`section-1`},F={id:`section-2`},I={id:`section-3`},L={id:`section-4`},R={id:`section-7`},z=`scroll-margin`,B=17,V=`목차를 눌러 이동하면 제목이 고정 헤더에 가려질 때`,H=`앵커 이동 시 헤더 가림`,U=`앵커 링크나 scrollIntoView로 이동한 제목이 고정 헤더 뒤에 숨을 때, scroll-margin-top 또는 scroll-padding-top으로 헤더 높이만큼 여백을 둡니다.`,W=`목차를 눌렀는데 제목이 헤더 뒤에 숨어 버린다면?
스크롤 위치를 계산하기 전에, 이동 기준에 헤더 높이를 알려 주세요.
`,G=`레이어·스크롤`,K=`스크롤`,q=[`scroll-margin`,`scroll-padding`,`앵커`,`목차`,`sticky`,`고정 헤더`,`scrollIntoView`],J=`기초`,Y=`약 10분`,X=[`position sticky`,`앵커 링크`],Z=`scroll-margin-top`,Q=`published`,$=`2026-11-11`,ee=[`sticky-overflow`,`z-index-context`],te=[{title:`CSS Scroll Snap — scroll-margin`,url:`https://www.w3.org/TR/css-scroll-snap-1/#scroll-margin`},{title:`CSS Scroll Snap — scroll-padding`,url:`https://www.w3.org/TR/css-scroll-snap-1/#scroll-padding`},{title:`MDN — scroll-margin-top`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/scroll-margin-top`},{title:`MDN — scroll-padding-top`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/scroll-padding-top`},{title:`WCAG 2.2 — 2.4.11 Focus Not Obscured (Minimum)`,url:`https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html`}],ne={__name:`scroll-margin`,setup(n,{expose:i}){return i({frontmatter:{id:`scroll-margin`,order:17,title:`목차를 눌러 이동하면 제목이 고정 헤더에 가려질 때`,navTitle:`앵커 이동 시 헤더 가림`,summary:`앵커 링크나 scrollIntoView로 이동한 제목이 고정 헤더 뒤에 숨을 때, scroll-margin-top 또는 scroll-padding-top으로 헤더 높이만큼 여백을 둡니다.`,lead:`목차를 눌렀는데 제목이 헤더 뒤에 숨어 버린다면?
스크롤 위치를 계산하기 전에, 이동 기준에 헤더 높이를 알려 주세요.
`,group:`레이어·스크롤`,topic:`스크롤`,tags:[`scroll-margin`,`scroll-padding`,`앵커`,`목차`,`sticky`,`고정 헤더`,`scrollIntoView`],level:`기초`,duration:`약 10분`,prerequisites:[`position sticky`,`앵커 링크`],keyProperty:`scroll-margin-top`,status:`published`,updated:`2026-11-11`,related:[`sticky-overflow`,`z-index-context`],references:[{title:`CSS Scroll Snap — scroll-margin`,url:`https://www.w3.org/TR/css-scroll-snap-1/#scroll-margin`},{title:`CSS Scroll Snap — scroll-padding`,url:`https://www.w3.org/TR/css-scroll-snap-1/#scroll-padding`},{title:`MDN — scroll-margin-top`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/scroll-margin-top`},{title:`MDN — scroll-padding-top`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/scroll-padding-top`},{title:`WCAG 2.2 — 2.4.11 Focus Not Obscured (Minimum)`,url:`https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html`}]}}),(n,i)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocTerm`),m=l(`DocSteps`),h=l(`DocInspect`),g=l(`CodePanel`),_=l(`DocPractice`);return e(),o(`div`,M,[a(`section`,N,[i[2]||=a(`h2`,null,[a(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),i[3]||=a(`p`,null,[c(`상단에 헤더가 고정된(`),a(`code`,null,`position: sticky`),c(` 또는 `),a(`code`,null,`fixed`),c(`) 안내 페이지입니다. 위쪽 목차에서 ‘2. 사용법’을 누르면 해당 위치로 이동하는데, 섹션 제목이 헤더 뒤에 숨어 본문 첫 줄부터 보입니다.`)],-1),i[4]||=a(`p`,null,`목차 링크 자체는 정상 동작하기 때문에 지나치기 쉽고, 기획 검수에서 ‘엉뚱한 곳으로 이동한다’는 형태로 돌아옵니다.`,-1),s(u,{title:`서비스 안내: 목차를 누르면 섹션 제목이 보이지 않음`,env:`전체 브라우저 · 상단 고정 헤더가 있는 긴 안내 페이지`,expected:`목차에서 고른 섹션의 제목이 헤더 바로 아래에 보임`,actual:`섹션 제목이 고정 헤더 뒤에 가려지고 본문 첫 줄부터 보임`},{default:r(()=>[...i[0]||=[a(`ol`,null,[a(`li`,null,`서비스 안내 페이지를 엽니다.`),a(`li`,null,`상단 목차에서 ‘2. 사용법’을 누릅니다.`),a(`li`,null,`이동한 뒤 화면 맨 위에 보이는 내용을 확인합니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...i[1]||=[a(`p`,null,[c(`이동할 대상에 `),a(`code`,null,`scroll-margin-top`),c(`, 또는 스크롤 상자에 `),a(`code`,null,`scroll-padding-top`),c(`으로 `),a(`strong`,null,`헤더 높이`),c(`를 지정하세요.`)],-1)]]),_:1})]),a(`section`,P,[i[5]||=a(`h2`,null,[a(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),a(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[6]||=a(`p`,null,`목차 버튼을 눌러 이동한 뒤, 두 화면에서 섹션 제목이 어디에 멈추는지 비교해 보세요. 해결 방법을 바꿔도 결과는 같습니다.`,-1),s(j)]),a(`section`,F,[i[17]||=a(`h2`,null,[a(`span`,{class:`section-no`},`03`),c(` 왜 이런 일이 생길까요?`)],-1),a(`p`,null,[i[8]||=c(`앵커 링크(`,-1),i[9]||=a(`code`,null,`#usage`,-1),i[10]||=c(`)나 `,-1),i[11]||=a(`code`,null,`scrollIntoView()`,-1),i[12]||=c(`로 이동하면 브라우저는 대상 요소의 위쪽 끝을 `,-1),i[13]||=a(`strong`,null,`스크롤 상자의 맨 위`,-1),i[14]||=c(`에 맞춥니다. 페이지라면 스크롤 상자는 화면(`,-1),s(p,{term:`viewport`},{default:r(()=>[...i[7]||=[c(`뷰포트`,-1)]]),_:1}),i[15]||=c(`)입니다. 브라우저는 그 위에 고정 헤더가 겹쳐 있다는 것을 알지 못하므로, 헤더 높이만큼의 영역이 대상을 덮게 됩니다.`,-1)]),i[18]||=f(`<p><code>scroll-margin-top</code>은 <strong>이동할 대상</strong>의 위쪽에 ‘여기까지 함께 보여 달라’는 바깥 여백을 지정합니다. 실제 레이아웃의 <code>margin</code>과 달리 요소 위치는 바뀌지 않고, 스크롤해서 맞출 때만 쓰입니다. <code>scroll-padding-top</code>은 반대로 <strong>스크롤 상자</strong>의 위쪽 일부를 ‘가려진 영역’으로 빼고 맞추게 합니다. 페이지 전체라면 <code>html</code>에 지정합니다.</p><p>두 속성 모두 앵커 링크로 <code>:target</code>이 되는 이동이나 <code>scrollIntoView()</code>처럼 브라우저가 대상을 화면에 맞추는 이동에 적용됩니다. <code>window.scrollTo()</code>처럼 좌표를 직접 넘기는 이동에는 적용되지 않습니다.</p>`,2),s(m,null,{default:r(()=>[...i[16]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`대상 위쪽을 상자 맨 위에 맞춤`),c(),a(`code`,null,`#usage`)]),a(`li`,null,[a(`strong`,null,`고정 헤더가 그 위를 덮음`),c(),a(`code`,null,`position: sticky`)]),a(`li`,null,[a(`strong`,null,`헤더 높이만큼 여백`),c(),a(`code`,null,`scroll-margin-top: 44px`)])],-1)]]),_:1})]),a(`section`,I,[i[20]||=a(`h2`,null,[a(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),i[21]||=a(`p`,null,[c(`제목이 가려질 때는 `),a(`strong`,null,`헤더 높이`),c(`와 `),a(`strong`,null,`이동 기준에 그 높이가 반영되었는지`),c(`를 차례로 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),s(h,null,{default:r(()=>[...i[19]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`Elements 패널에서 헤더 확인`),c(` 헤더 요소를 선택하고 Computed 탭에서 `),a(`code`,null,`position`),c(`이 `),a(`code`,null,`sticky`),c(`나 `),a(`code`,null,`fixed`),c(`인지, `),a(`code`,null,`height`),c(`가 몇 px인지 확인합니다. 이 높이가 필요한 여백입니다.`)]),a(`li`,null,[a(`strong`,null,`이동할 대상의 scroll-margin-top 확인`),a(`code`,null,`id`),c(`가 있는 대상 요소를 선택하고 Computed 탭에서 `),a(`strong`,null,`Show all`),c(`을 켠 뒤 `),a(`code`,null,`scroll-margin-top`),c(`을 검색합니다. 기본값은 이 옵션을 켜야 보입니다. `),a(`code`,null,`0px`),c(`이면 여백이 없는 것입니다.`)]),a(`li`,null,[a(`strong`,null,`스크롤 상자의 scroll-padding-top 확인`),c(` 페이지 전체가 스크롤된다면 `),a(`code`,null,`html`),c(` 요소를, 따로 스크롤되는 영역이라면 그 상자를 선택해 `),a(`code`,null,`scroll-padding-top`),c(`을 검색합니다. `),a(`code`,null,`auto`),c(`이면 상자 맨 위를 기준으로 맞춥니다.`)]),a(`li`,null,[a(`strong`,null,`Console에서 이동 후 위치 확인`),c(` 목차로 이동한 뒤 Elements 패널에서 대상을 선택한 상태로 Console에 `),a(`code`,null,`$0.getBoundingClientRect().top`),c(`을 입력합니다. 값이 헤더 높이보다 작으면 그만큼 헤더에 가려진 것입니다.`)])],-1)]]),_:1})]),a(`section`,L,[i[22]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),i[23]||=a(`p`,null,`CSS 탭은 위 실행 예제와 같은 파일입니다. 실제 페이지에 적용하는 형태는 ‘페이지 적용’ 탭, 스크립트로 이동하는 경우는 JS 탭에서 확인하세요.`,-1),s(g,{tabs:t(S)},null,8,[`tabs`]),i[24]||=a(`p`,null,[c(`두 방법 중 하나만 쓰면 됩니다. 함께 쓰면 두 값이 더해져 그만큼 더 아래에 멈춥니다. 페이지 전체에 한 번에 적용하려면 `),a(`code`,null,`html`),c(`의 `),a(`code`,null,`scroll-padding-top`),c(`이, 특정 대상만 조정하려면 `),a(`code`,null,`scroll-margin-top`),c(`이 편합니다.`)],-1)]),i[27]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>헤더에 가려지는 문제는 목차 링크 말고도 화면 위치를 맞추는 여러 상황에서 나타납니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>헤더 높이가 화면마다 다를 때</h3><p>모바일과 PC의 헤더 높이가 다르면 여백도 함께 바꿔야 합니다. 헤더 높이를 CSS 변수 하나로 관리하면 값이 어긋나지 않습니다. 이 사이트도 본문 섹션에 화면 크기별로 다른 <code>scroll-margin-top</code>을 지정해 둡니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-pseudo">:root</span> { <span class="hljs-attr">--header-height</span>: <span class="hljs-number">80px</span>; }
<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">760px</span>) {
  <span class="hljs-selector-pseudo">:root</span> { <span class="hljs-attr">--header-height</span>: <span class="hljs-number">64px</span>; }
}
<span class="hljs-selector-class">.site-header</span> { <span class="hljs-attribute">height</span>: <span class="hljs-built_in">var</span>(--header-height); }
<span class="hljs-selector-tag">html</span> { <span class="hljs-attribute">scroll-padding-top</span>: <span class="hljs-built_in">var</span>(--header-height); }
</code></pre><h3>Tab으로 이동한 포커스가 헤더 뒤에 숨을 때</h3><p>키보드로 아래쪽 링크·버튼에 포커스를 옮기거나 Shift+Tab으로 거슬러 올라갈 때, 포커스된 요소가 고정 헤더 뒤에 가려질 수 있습니다. 스크롤 상자에 <code>scroll-padding-top</code>을 지정해 두면 포커스 이동 스크롤에도 반영되는 경우가 많지만, 브라우저·버전에 따라 다를 수 있으니 실제 환경에서 키보드로 확인하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-tag">html</span> {
  <span class="hljs-attribute">scroll-padding-top</span>: <span class="hljs-number">80px</span>; <span class="hljs-comment">/* 헤더 높이 */</span>
}
</code></pre><h3>스크립트로 이동할 때</h3><p><code>scrollIntoView()</code>는 <code>scroll-margin-top</code>과 <code>scroll-padding-top</code>을 반영합니다. 반면 <code>window.scrollTo()</code>에 좌표를 직접 계산해 넘기면 두 속성이 반영되지 않으므로 헤더 높이를 직접 빼야 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 반영됨</span>
<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#usage&#39;</span>).<span class="hljs-title function_">scrollIntoView</span>({ <span class="hljs-attr">block</span>: <span class="hljs-string">&#39;start&#39;</span> })

<span class="hljs-comment">// 반영되지 않음: 좌표에서 헤더 높이를 직접 뺍니다.</span>
<span class="hljs-variable language_">window</span>.<span class="hljs-title function_">scrollTo</span>({ <span class="hljs-attr">top</span>: target.<span class="hljs-title function_">getBoundingClientRect</span>().<span class="hljs-property">top</span> + <span class="hljs-variable language_">window</span>.<span class="hljs-property">scrollY</span> - <span class="hljs-number">80</span> })
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>헤더 높이와 값을 맞춥니다.</strong> 헤더 높이가 바뀌면 여백도 바꿔야 합니다. 높이가 화면 크기별로 다르면 미디어쿼리나 CSS 변수로 함께 관리하고, 필요하면 몇 px 여유를 더합니다.</li><li><strong>두 속성을 겹쳐 쓰지 않습니다.</strong> <code>scroll-padding-top</code>과 <code>scroll-margin-top</code>을 함께 지정하면 값이 더해집니다. 한 프로젝트 안에서는 한 가지 방법으로 통일하세요.</li><li><strong>부드러운 이동은 움직임 줄이기 설정을 존중합니다.</strong> <code>scroll-behavior: smooth</code>는 <code>@media (prefers-reduced-motion: no-preference)</code> 안에서만 적용해, 움직임 줄이기를 켠 사용자에게는 바로 이동하게 합니다.</li><li><strong>포커스가 가려지지 않게 합니다.</strong> WCAG 2.2의 2.4.11(Focus Not Obscured, Minimum)은 키보드 포커스를 받은 요소가 작성자가 만든 고정 콘텐츠에 완전히 가려지지 않도록 요구합니다. 여백을 지정한 뒤 Tab 키로 페이지를 끝까지 이동해 확인하세요.</li></ul></section>`,2),a(`section`,R,[i[26]||=a(`h2`,null,[a(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(_,null,{default:r(()=>[...i[25]||=[a(`p`,null,`위 예제에서 목차 버튼을 ‘1. 소개’ → ‘2. 사용법’ → ‘3. 주의’ 순서로 눌러 보세요.`,-1),a(`ul`,{class:`checklist`},[a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`문제 상태에서는 제목 위치가 음수(헤더에 가려짐)로 표시된다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`해결 상태에서는 제목이 헤더 바로 아래에 보이고 위치가 양수로 표시된다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},[c(`해결 방법을 `),a(`code`,null,`scroll-padding-top`),c(`으로 바꿔도 해결 상태의 제목 위치가 같다.`)])])])],-1)]]),_:1})])])}}};export{ne as default,Y as duration,G as group,z as id,Z as keyProperty,W as lead,J as level,H as navTitle,B as order,X as prerequisites,te as references,ee as related,Q as status,U as summary,q as tags,V as title,K as topic,$ as updated};