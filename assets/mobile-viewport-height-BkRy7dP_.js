import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,u as h,ut as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as _}from"./DemoCompare-Bd6h8ThJ.js";var v=`/*
  시뮬레이션용 CSS입니다. 데스크톱에는 주소창이 접히는 동작이 없어 가상 휴대폰 틀로 재현합니다.
  - 틀 전체 높이 320px = 주소창·툴바가 숨었을 때의 큰 뷰포트(100vh, 100lvh)
  - 주소창 40px + 툴바 40px을 뺀 240px = 주소창·툴바가 보일 때의 작은 뷰포트(100svh)
  실제 코드는 '해결 CSS' 탭을 확인하세요.
*/
.demo-vh-phone {
  display: flex;
  flex-direction: column;
  box-sizing: content-box; /* 테두리를 뺀 안쪽 높이가 정확히 320px이 되게 합니다. */
  width: 200px;
  height: 320px; /* 큰 뷰포트 높이 */
  margin: 0 auto;
  overflow: hidden;
  border: 6px solid #23334b;
  border-radius: 18px;
  background: #fff;
  font-size: 12px;
}
.demo-vh-address,
.demo-vh-toolbar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 40px; /* 브라우저 UI 높이 */
  box-sizing: border-box;
  padding: 0 10px;
  background: #e9eef5;
}
.demo-vh-address {
  border-bottom: 1px solid #c9d4e3;
}
.demo-vh-address span {
  flex: 1;
  padding: 4px 8px;
  border-radius: 12px;
  background: #fff;
  color: #5b6b82;
}
.demo-vh-toolbar {
  justify-content: space-around;
  border-top: 1px solid #c9d4e3;
}
.demo-vh-toolbar span {
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background: #8696ad;
}
.demo-vh-page {
  flex: 1;
  min-height: 0;
  overflow-y: auto; /* 레이아웃이 보이는 높이보다 길면 페이지가 스크롤됩니다. */
}

/* 화면 높이를 채우는 레이아웃 */
.demo-vh-layout {
  display: flex;
  flex-direction: column;
  height: 100%; /* 100dvh 동작: 지금 보이는 높이(주소창이 보이면 240px, 숨으면 320px) */
}
.demo-vh-layout-svh {
  height: 240px; /* 100svh 동작: 주소창 상태와 관계없이 작은 뷰포트 높이 */
}
.demo-vh-header {
  flex-shrink: 0;
  padding: 10px 12px;
  border-bottom: 1px solid #e2e8f1;
  font-weight: 700;
}
.demo-vh-content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 10px 12px;
}
.demo-vh-content p {
  margin: 0 0 6px;
}
.demo-vh-footer {
  flex-shrink: 0;
  padding: 10px 12px;
  border-top: 1px solid #e2e8f1;
}
.demo-vh-button {
  width: 100%;
  padding: 8px 0;
  border: 1px solid #315bc2;
  border-radius: 4px;
  background: #315bc2;
  color: #fff;
  font-size: 12px;
}

/* 비교를 위한 문제 상태: 100vh처럼 항상 큰 뷰포트 높이를 사용합니다. */
.is-problem .demo-vh-layout {
  height: 320px;
}
`,y=[{label:`보임`,value:!0},{label:`숨김`,value:!1}],b=[{label:`100dvh`,value:`dvh`,code:`height: 100dvh`},{label:`100svh`,value:`svh`,code:`height: 100svh`}],x=[{label:`해결 CSS`,language:`css`,code:`.demo-vh-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;  /* 새 단위를 모르는 브라우저용(먼저 씁니다) */
  height: 100dvh; /* 주소창이 보이면 줄고, 숨으면 늘어납니다 */
}

/* 높이가 출렁이면 안 되는 화면이라면 dvh 대신
.demo-vh-layout {
  min-height: 100vh;
  min-height: 100svh;
}
*/

.demo-vh-header,
.demo-vh-footer {
  flex-shrink: 0;
}
.demo-vh-content {
  flex: 1;
  min-height: 0;
  overflow-y: auto; /* 남은 높이를 넘는 내용만 스크롤합니다 */
}`},{label:`HTML`,language:`xml`,code:`<!-- 뷰포트 메타는 기본 설정이면 충분합니다. -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<div class="demo-vh-layout">
  <header class="demo-vh-header">주문하기</header>
  <div class="demo-vh-content">
    <p>배송지와 결제 수단을 확인하세요.</p>
  </div>
  <div class="demo-vh-footer">
    <button type="button" class="demo-vh-button">확인</button>
  </div>
</div>`},{label:`예제(시뮬레이션) CSS`,language:`css`,code:v}],S={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-vh-bar-label`},C=[`aria-checked`,`onClick`],w={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-vh-unit-label`},T=[`aria-checked`,`onClick`],E={class:`demo-vh-phone`},D={key:0,class:`demo-vh-address`,"aria-hidden":`true`},O=[`aria-label`],k={key:1,class:`demo-vh-toolbar`,"aria-hidden":`true`},A={__name:`MobileViewportHeightDemo`,setup(o){let c=n(!0),d=n(b[0].value),v=m(()=>b.find(e=>e.value===d.value)),x=m(()=>c.value?`레이아웃이 보이는 높이보다 길어 확인 버튼이 툴바 아래로 내려갑니다.`:`주소창이 숨으면 높이가 맞아 버튼이 보입니다.`),A=m(()=>d.value===`svh`?c.value?`작은 뷰포트 높이라 버튼이 보입니다.`:`높이가 그대로라 버튼은 보이지만 아래에 빈 공간이 남습니다.`:c.value?`보이는 높이에 맞춰 줄어 버튼이 보입니다.`:`주소창이 숨으면 높이가 늘어 화면을 채웁니다.`);return(n,o)=>(e(),u(_,{problem:{code:`height: 100vh`,note:x.value},solved:{code:v.value.code,note:A.value}},{controls:r(()=>[o[0]||=i(`span`,{id:`demo-vh-bar-label`,class:`demo-label`},`주소창·툴바`,-1),i(`div`,S,[(e(!0),a(p,null,l(t(y),t=>(e(),a(`button`,{key:t.label,type:`button`,role:`radio`,"aria-checked":c.value===t.value,onClick:e=>c.value=t.value},f(t.label),9,C))),128))]),o[1]||=i(`span`,{id:`demo-vh-unit-label`,class:`demo-label`},`해결 쪽 단위`,-1),i(`div`,w,[(e(!0),a(p,null,l(t(b),t=>(e(),a(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":d.value===t.value,onClick:e=>d.value=t.value},f(t.label),9,T))),128))])]),default:r(({solved:t})=>[i(`div`,E,[c.value?(e(),a(`div`,D,[...o[2]||=[i(`span`,null,`example.com`,-1)]])):h(``,!0),i(`div`,{class:`demo-vh-page`,tabindex:`0`,"aria-label":t?`해결 상태 가상 화면`:`문제 상태 가상 화면`},[i(`div`,{class:g([`demo-vh-layout`,{"demo-vh-layout-svh":t&&d.value===`svh`}])},[...o[3]||=[i(`div`,{class:`demo-vh-header`},`주문하기`,-1),i(`div`,{class:`demo-vh-content`},[i(`p`,null,`배송지와 결제 수단을 확인하세요.`),i(`p`,null,`확인 버튼은 화면 맨 아래에 있습니다.`)],-1),i(`div`,{class:`demo-vh-footer`},[i(`button`,{type:`button`,class:`demo-vh-button`},`확인`)],-1)]],2)],8,O),c.value?(e(),a(`div`,k,[...o[4]||=[i(`span`,null,null,-1),i(`span`,null,null,-1),i(`span`,null,null,-1),i(`span`,null,null,-1)]])):h(``,!0)])]),caption:r(()=>[...o[5]||=[s(` 이 예제는 시뮬레이션입니다. 데스크톱 브라우저에는 주소창이 접히는 동작이 없어, 가상 휴대폰 높이 320px을 큰 뷰포트(`,-1),i(`code`,null,`100vh`,-1),s(`)로, 주소창과 툴바를 뺀 240px을 작은 뷰포트로 계산했습니다. 실제 동작은 휴대폰(iOS Safari, Android Chrome)에서 이 페이지를 열어 확인하세요. `,-1)]]),_:1},8,[`problem`,`solved`]))}},j={class:`doc-body`},M={id:`section-0`},N={id:`section-1`},P={id:`section-2`},F={id:`section-3`},I={id:`section-4`},L={id:`section-7`},ee=`mobile-viewport-height`,R=11,z=`모바일에서 100vh가 화면보다 길 때`,B=`모바일 100vh 높이 문제`,V=`모바일 브라우저에서 100vh가 주소창이 숨은 큰 화면 기준이라 하단 버튼이 가려지는 원리를 이해하고, dvh·svh 단위로 해결합니다.`,H=`화면을 꽉 채운 레이아웃의 하단 버튼이 휴대폰에서만 가려진다면?
레이아웃 구조보다 먼저, 100vh가 어느 높이를 가리키는지 확인하세요.
`,U=`모바일`,W=`뷰포트`,G=[`100vh`,`dvh`,`svh`,`lvh`,`뷰포트`,`주소창`,`모바일`,`safe-area`],K=`중급`,q=`약 12분`,J=[`뷰포트`,`flex item`,`높이`],Y=`height: 100dvh`,X=`published`,Z=`2026-11-11`,Q=[`flex-scroll-area`,`fixed-transform`],$=[{title:`CSS Values and Units Level 4 — 큰·작은·동적 뷰포트 단위`,url:`https://www.w3.org/TR/css-values-4/#viewport-relative-units`},{title:`MDN — length (뷰포트 단위)`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/length`},{title:`MDN — env()`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/env`},{title:`Chrome DevTools — Android 기기 원격 디버깅`,url:`https://developer.chrome.com/docs/devtools/remote-debugging`}],te={__name:`mobile-viewport-height`,setup(n,{expose:l}){return l({frontmatter:{id:`mobile-viewport-height`,order:11,title:`모바일에서 100vh가 화면보다 길 때`,navTitle:`모바일 100vh 높이 문제`,summary:`모바일 브라우저에서 100vh가 주소창이 숨은 큰 화면 기준이라 하단 버튼이 가려지는 원리를 이해하고, dvh·svh 단위로 해결합니다.`,lead:`화면을 꽉 채운 레이아웃의 하단 버튼이 휴대폰에서만 가려진다면?
레이아웃 구조보다 먼저, 100vh가 어느 높이를 가리키는지 확인하세요.
`,group:`모바일`,topic:`뷰포트`,tags:[`100vh`,`dvh`,`svh`,`lvh`,`뷰포트`,`주소창`,`모바일`,`safe-area`],level:`중급`,duration:`약 12분`,prerequisites:[`뷰포트`,`flex item`,`높이`],keyProperty:`height: 100dvh`,status:`published`,updated:`2026-11-11`,related:[`flex-scroll-area`,`fixed-transform`],references:[{title:`CSS Values and Units Level 4 — 큰·작은·동적 뷰포트 단위`,url:`https://www.w3.org/TR/css-values-4/#viewport-relative-units`},{title:`MDN — length (뷰포트 단위)`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/length`},{title:`MDN — env()`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/env`},{title:`Chrome DevTools — Android 기기 원격 디버깅`,url:`https://developer.chrome.com/docs/devtools/remote-debugging`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`DocPractice`);return e(),a(`div`,j,[i(`section`,M,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,[s(`주문 화면을 화면 높이에 꽉 차게 만들고, 확인 버튼을 맨 아래에 두었습니다. 레이아웃에는 `),i(`code`,null,`height: 100vh`),s(`를 주었습니다. PC와 개발자 도구의 모바일 화면에서는 정상인데, 실제 휴대폰에서 열면 확인 버튼이 브라우저 하단 툴바에 가려집니다.`)],-1),l[4]||=i(`p`,null,`개발자 도구로는 재현되지 않고 실기기 테스트나 사용자 문의에서 처음 발견되어, QA에서 이런 형태로 돌아옵니다.`,-1),o(u,{title:`주문하기: 휴대폰에서 첫 진입 시 확인 버튼이 보이지 않음`,env:`iOS Safari · Android Chrome 실기기 (PC, Device toolbar에서는 재현 안 됨)`,expected:`주문 화면 하단에 확인 버튼이 항상 보임`,actual:`확인 버튼이 하단 툴바에 가려지고, 조금 스크롤해야 나타남`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`휴대폰 브라우저에서 주문하기 화면을 새로 엽니다.`),i(`li`,null,`스크롤하지 않은 상태(주소창·툴바가 보이는 상태)로 화면 하단을 확인합니다.`),i(`li`,null,`아래로 조금 스크롤해 주소창이 접힌 뒤 다시 하단을 확인합니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`화면 높이를 채울 때는 `),i(`code`,null,`height: 100vh`),s(` 다음 줄에 `),i(`code`,null,`height: 100dvh`),s(`를 덧붙이세요. 높이가 바뀌면 안 되는 화면은 `),i(`strong`,null,`svh`),s(`를 사용합니다.`)],-1)]]),_:1})]),i(`section`,N,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[6]||=i(`p`,null,`주소창·툴바를 보이거나 숨기면서 레이아웃 높이가 어떻게 달라지는지 비교해 보세요. 데스크톱에서는 재현되지 않아 가상 휴대폰으로 흉내 낸 예제입니다.`,-1),o(A)]),i(`section`,P,[l[8]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>모바일 브라우저는 스크롤에 따라 주소창과 툴바를 접었다 폈다 합니다. 화면에 보이는 높이가 계속 바뀌는 셈입니다. 이때마다 <code>vh</code> 값이 바뀌면 레이아웃이 스크롤 중에 출렁이므로, iOS Safari와 Android Chrome은 <code>100vh</code>를 <strong>주소창·툴바가 모두 숨은 가장 큰 높이</strong>로 고정했습니다.</p><p>그래서 처음 페이지를 열어 주소창이 보이는 동안에는 <code>100vh</code> 요소가 보이는 영역보다 깁니다. 맨 아래에 둔 버튼은 툴바 아래, 즉 화면 밖에 놓입니다. PC에는 접히는 주소창이 없어 <code>100vh</code>와 보이는 높이가 항상 같으므로 문제가 드러나지 않습니다.</p><p>이 차이를 다루기 위해 세 가지 단위가 추가되었습니다. <code>svh</code>는 브라우저 UI가 보일 때의 작은 높이, <code>lvh</code>는 숨었을 때의 큰 높이(기존 <code>vh</code>와 같음), <code>dvh</code>는 지금 이 순간 보이는 높이로 UI가 접히고 펴질 때 함께 바뀝니다.</p>`,4),o(p,null,{default:r(()=>[...l[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`100vh는 큰 뷰포트`),s(),i(`code`,null,`100vh = 100lvh`)]),i(`li`,null,[i(`strong`,null,`주소창이 보이면 화면이 더 작음`),s(),i(`code`,null,`100svh`)]),i(`li`,null,[i(`strong`,null,`보이는 높이를 따라가는 단위로`),s(),i(`code`,null,`height: 100dvh`)])],-1)]]),_:1})]),i(`section`,F,[l[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[11]||=i(`p`,null,[s(`이 문제는 PC 개발자 도구의 Device toolbar로 확인할 수 없습니다. Device toolbar는 화면 크기만 바꿀 뿐 주소창이 접히는 동작은 흉내 내지 않아, `),i(`code`,null,`svh`),s(`·`),i(`code`,null,`lvh`),s(`·`),i(`code`,null,`dvh`),s(`가 모두 같은 값이 됩니다. `),i(`strong`,null,`실기기를 원격 디버깅`),s(`으로 연결해 확인합니다.`)],-1),o(m,null,{default:r(()=>[...l[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`실기기를 원격 디버깅으로 연결`),s(` Android는 개발자 옵션의 USB 디버깅을 켜고 PC Chrome 주소창에 `),i(`code`,null,`chrome://inspect`),s(`를 입력해 기기의 탭을 Inspect합니다. iOS는 기기의 설정 > Safari > 고급에서 웹 속성(Web Inspector)을 켜고, Mac Safari의 개발자용 메뉴에서 기기를 선택합니다.`)]),i(`li`,null,[i(`strong`,null,`Console에서 높이 비교`),s(` 주소창이 보이는 상태에서 `),i(`code`,null,`innerHeight`),s(`(지금 보이는 높이)와 레이아웃 요소의 `),i(`code`,null,`getBoundingClientRect().height`),s(`를 비교합니다. `),i(`code`,null,`document.documentElement.clientHeight`),s(`도 함께 찍어 봅니다. 요소 높이가 `),i(`code`,null,`innerHeight`),s(`보다 크면 툴바 아래로 내려간 만큼이 가려진 것입니다.`)]),i(`li`,null,[i(`strong`,null,`주소창을 접고 다시 비교`),s(` 기기에서 조금 스크롤해 주소창을 접은 뒤 같은 값을 다시 확인합니다. `),i(`code`,null,`innerHeight`),s(`는 커지고 `),i(`code`,null,`100vh`),s(` 요소의 높이는 그대로라면 원인이 `),i(`code`,null,`vh`),s(` 단위로 좁혀집니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 단위 바꿔 시험`),s(` 원격 디버깅 화면의 Styles 탭에서 `),i(`code`,null,`height: 100vh`),s(`를 `),i(`code`,null,`100dvh`),s(`로 바꿉니다. 기기 화면에서 확인 버튼이 바로 올라오면 원인이 확정됩니다.`)])],-1)]]),_:1})]),i(`section`,I,[l[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[13]||=i(`p`,null,[s(`레이아웃 구조는 그대로 두고 `),i(`strong`,null,`높이 단위`),s(`만 바꿉니다. 아래 ‘해결 CSS’ 탭이 실제로 쓰는 코드이고, ‘예제(시뮬레이션) CSS’ 탭은 위 실행 예제가 고정 높이로 같은 동작을 흉내 낸 코드입니다.`)],-1),o(h,{tabs:t(x)},null,8,[`tabs`]),l[14]||=i(`p`,null,[i(`code`,null,`height: 100vh`),s(`를 먼저, `),i(`code`,null,`height: 100dvh`),s(`를 다음 줄에 씁니다. 새 단위를 모르는 브라우저는 두 번째 줄을 무시하고 첫 줄을 사용합니다.`)],-1)]),l[17]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>화면 높이와 브라우저 UI가 엇갈리는 문제는 하단 고정 요소와 입력 화면에서도 생깁니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>하단 버튼이 홈 인디케이터에 겹칠 때</h3><p>iPhone처럼 화면 아래에 홈 인디케이터가 있는 기기에서 화면 끝까지 쓰려면 뷰포트 메타에 <code>viewport-fit=cover</code>를 추가합니다. 그러면 콘텐츠가 인디케이터 영역까지 그려지므로, 하단 여백에 <code>env(safe-area-inset-bottom)</code>을 더해 버튼을 띄웁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1, viewport-fit=cover&quot;</span>&gt;</span>
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.bottom-bar</span> {
  <span class="hljs-attribute">position</span>: fixed;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">12px</span> + <span class="hljs-built_in">env</span>(safe-area-inset-bottom)); <span class="hljs-comment">/* 지원하지 않으면 0 */</span>
}
</code></pre><h3>스크롤하면 높이가 출렁일 때</h3><p><code>dvh</code>는 주소창이 접히고 펴질 때마다 값이 바뀌어, 그 높이에 맞춘 요소와 아래 내용이 스크롤 중에 움직일 수 있습니다. 첫 화면 배너처럼 높이가 고정되어야 하는 영역은 <code>svh</code>로 작은 높이를 기준으로 잡습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.main-visual</span> {
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100vh</span>;
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100s</span>vh; <span class="hljs-comment">/* 주소창 상태와 관계없이 일정 */</span>
}
</code></pre><h3>입력창을 누르면 키보드가 화면을 가릴 때</h3><p>가상 키보드는 기본적으로 뷰포트 단위를 바꾸지 않습니다. <code>dvh</code>도 키보드 높이를 빼 주지 않으므로, 키보드 위에 붙여야 하는 요소는 JavaScript의 <code>visualViewport</code>로 보이는 높이를 확인합니다. Android Chrome은 뷰포트 메타의 <code>interactive-widget=resizes-content</code>로 키보드가 레이아웃 높이를 줄이게 할 수 있지만, iOS Safari는 지원하지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">visualViewport.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// 키보드가 열리면 visualViewport.height가 줄어듭니다.</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(visualViewport.<span class="hljs-property">height</span>, innerHeight)
})
</code></pre><h3>예전 --vh 해킹을 쓰고 있을 때</h3><p>새 단위가 나오기 전에는 <code>innerHeight</code>를 CSS 변수에 넣어 높이를 계산했습니다. 크기가 바뀔 때마다 스크립트가 실행되어야 하므로, 지원 범위가 맞다면 단위로 대체합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">/* 예전 방식: JS에서 --vh = innerHeight * 0.01px 을 넣음 */</span>
<span class="hljs-selector-class">.layout</span> { <span class="hljs-attribute">height</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-built_in">var</span>(--vh, <span class="hljs-number">1vh</span>) * <span class="hljs-number">100</span>); }

<span class="hljs-comment">/* 지금 방식 */</span>
<span class="hljs-selector-class">.layout</span> { <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>; <span class="hljs-attribute">height</span>: <span class="hljs-number">100</span>dvh; }
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>지원 범위를 확인합니다.</strong> <code>svh</code>·<code>lvh</code>·<code>dvh</code>는 Safari 15.4, Chrome 108, Firefox 101부터 지원합니다. 그보다 오래된 브라우저를 지원해야 하면 <code>100vh</code> 줄을 반드시 먼저 둡니다.</li><li><strong>선언 순서가 곧 대체 방식입니다.</strong> <code>height: 100dvh</code> 다음에 <code>height: 100vh</code>를 쓰면 지원하는 브라우저에서도 <code>vh</code>로 덮어써집니다. Sass·PostCSS가 중복 선언을 합치지 않는지도 빌드 결과에서 확인하세요.</li><li><strong>dvh는 스크롤 중에 바뀝니다.</strong> 높이가 자주 바뀌면 레이아웃이 움직여 읽던 위치를 놓치거나 화면이 버벅일 수 있습니다. 화면 전체를 쓰는 앱형 레이아웃은 <code>dvh</code>, 첫 화면 배너처럼 흐름 안의 영역은 <code>svh</code>로 나눠 씁니다.</li><li><strong>내용이 넘칠 때를 대비합니다.</strong> 글자 크기를 키우거나 가로로 돌려 높이가 작아지면 고정 높이 안의 내용이 잘릴 수 있습니다. 본문 영역에 <code>min-height: 0</code>과 <code>overflow-y: auto</code>를 주어 확인 버튼까지 닿을 수 있게 하세요.</li></ul></section>`,2),i(`section`,L,[l[16]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(g,null,{default:r(()=>[...l[15]||=[i(`p`,null,`위 예제에서 주소창·툴바를 ‘보임’과 ‘숨김’으로 번갈아 바꾸고, 해결 쪽 단위도 바꿔 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`‘보임’에서 문제 상태의 확인 버튼은 툴바 아래로 내려가 스크롤해야 보인다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태(100dvh)의 확인 버튼은 주소창 상태와 관계없이 화면 안에 보인다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`100svh를 선택하고 ‘숨김’으로 바꾸면 레이아웃 아래에 빈 공간이 남는다.`)])])],-1)]]),_:1})])])}}};export{te as default,q as duration,U as group,ee as id,Y as keyProperty,H as lead,K as level,B as navTitle,R as order,J as prerequisites,$ as references,Q as related,X as status,V as summary,G as tags,z as title,W as topic,Z as updated};