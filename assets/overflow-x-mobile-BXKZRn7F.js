import{D as e,E as t,G as n,H as r,L as i,R as a,T as o,V as s,c,d as l,g as u,h as d,j as f,k as p,l as m,m as h,pt as g,r as _,s as v,ut as y,w as b}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as ee}from"./DemoCompare-Bd6h8ThJ.js";var x=`/* 가상 모바일 화면: 너비를 320px로 고정해 PC에서도 같은 상황을 재현합니다. */
.demo-ox-frame {
  width: 320px;
  overflow-x: auto; /* 실제 화면처럼 넓은 요소가 있으면 가로 스크롤이 생깁니다. */
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-ox-status {
  margin: 6px 0 0;
  font-size: 12px;
}
.demo-ox-page {
  padding: 12px;
}
.demo-ox-page h4 {
  margin: 0 0 6px;
  font-size: 14px;
}
.demo-ox-page p {
  margin: 0 0 8px;
}

/* 범인 1: 화면 너비만큼 채우는 배너 */
.demo-ox-banner {
  width: 100%; /* 100vw 대신 부모 기준 100% */
  padding: 10px 12px;
  border-radius: 4px;
  background: #23334b;
  color: #fff;
  box-sizing: border-box;
}

/* 범인 2: 시안 크기 그대로 고정한 쿠폰 */
.demo-ox-coupon {
  width: 400px;
  max-width: 100%; /* 화면보다 넓어지지 않게 제한 */
  padding: 10px 12px;
  border: 1px dashed #315bc2;
  border-radius: 4px;
  background: #eaf0ff;
  color: #315bc2;
  box-sizing: border-box;
}

/* 범인 3: 공백 없는 긴 URL·계좌번호·이메일 */
.demo-ox-url {
  overflow-wrap: anywhere; /* 공백이 없어도 화면 끝에서 줄바꿈 */
}

/* 범인 4: 원본 크기가 큰 이미지 */
.demo-ox-img {
  display: block;
  max-width: 100%; /* 부모보다 커지지 않게 */
  height: auto; /* 비율 유지 */
}

/* 범인 5: width: 100%에 padding을 더한 입력 영역 */
.demo-ox-box {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #aab8ce;
  border-radius: 4px;
  box-sizing: border-box; /* padding·border를 width 안에 포함 */
}

/* 디버깅용: 모든 요소에 외곽선을 그려 화면 밖으로 나간 요소를 찾습니다. outline은 레이아웃에 영향을 주지 않습니다. */
.demo-ox-frame.is-outline * {
  outline: 1px solid red;
}

/* 비교를 위한 문제 상태: 해결 전의 값을 복원합니다. */
.is-problem .demo-ox-banner { width: 100vw; }
.is-problem .demo-ox-coupon { max-width: none; }
.is-problem .demo-ox-url { overflow-wrap: normal; }
.is-problem .demo-ox-img { max-width: none; }
.is-problem .demo-ox-box { box-sizing: content-box; }
`,S=[{key:`vw`,label:`100vw 배너`,problem:`width: 100vw`,fix:`width: 100%`},{key:`fixed`,label:`고정 너비 400px`,problem:`width: 400px`,fix:`max-width: 100%`},{key:`url`,label:`긴 URL`,problem:`overflow-wrap: normal`,fix:`overflow-wrap: anywhere`},{key:`img`,label:`이미지`,problem:`원본 크기 480px`,fix:`max-width: 100%; height: auto`},{key:`box`,label:`padding + width 100%`,problem:`box-sizing: content-box`,fix:`box-sizing: border-box`}],C=`https://www.example.com/event/2026/winter/coupon?utm_source=app&utm_medium=push&code=WINTER2026`,w=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22480%22%20height%3D%22160%22%20viewBox%3D%220%200%20480%20160%22%3E%3Crect%20width%3D%22480%22%20height%3D%22160%22%20fill%3D%22%23dbe6f7%22%2F%3E%3Ctext%20x%3D%22240%22%20y%3D%2288%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20fill%3D%22%23315bc2%22%3E480%20%C3%97%20160%20%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EC%9D%B4%EB%AF%B8%EC%A7%80%3C%2Ftext%3E%3C%2Fsvg%3E`,T=[{label:`CSS`,language:`css`,code:x},{label:`HTML`,language:`xml`,code:`<!-- 화면 너비를 넘을 수 있는 요소들 -->
<div class="demo-ox-banner">겨울 이벤트 진행 중</div>

<div class="demo-ox-coupon">첫 구매 10% 할인 쿠폰</div>

<p class="demo-ox-url">https://www.example.com/event/2026/winter/coupon?utm_source=app</p>

<img class="demo-ox-img" src="event.jpg" width="480" height="160" alt="겨울 이벤트">

<input class="demo-ox-box" type="text" placeholder="쿠폰 번호 입력">`}],E={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-ox-label`},D=[`aria-checked`,`onClick`],O={class:`sample-buttons`},k=[`aria-pressed`],A={class:`demo-ox-page`},j={key:0,class:`demo-ox-banner`},M={key:1,class:`demo-ox-coupon`},N={key:2,class:`demo-ox-url`},P=[`src`],F={key:4,class:`demo-ox-box`,type:`text`,placeholder:`쿠폰 번호 입력`,"aria-label":`쿠폰 번호`},I={class:`demo-ox-status`},L={__name:`OverflowXMobileDemo`,setup(u){let f=r(S[0].key),h=r(!1),x=v(()=>S.find(e=>e.key===f.value)),T={},L=s({problem:{scroll:0,client:0},solved:{scroll:0,client:0}});function R(e,t){T[t?`solved`:`problem`]=e}function z(e){return L[e?`solved`:`problem`]}function B(){Object.entries(T).forEach(([e,t])=>{t&&(L[e]={scroll:t.scrollWidth,client:t.clientWidth})})}return i(f,()=>b(B)),t(()=>{b(B),document.fonts?.ready.then(B),window.addEventListener(`resize`,B)}),o(()=>window.removeEventListener(`resize`,B)),(t,r)=>(e(),m(ee,{problem:{code:x.value.problem,note:`한 요소가 화면보다 넓어 화면 전체가 가로로 스크롤됩니다.`},solved:{code:x.value.fix,note:`범인을 고쳐 모든 요소가 화면 너비 안에 들어옵니다.`}},{controls:a(()=>[r[1]||=c(`span`,{id:`demo-ox-label`,class:`demo-label`},`범인 고르기`,-1),c(`div`,E,[(e(!0),l(_,null,p(n(S),t=>(e(),l(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":f.value===t.key,onClick:e=>f.value=t.key},g(t.label),9,D))),128))]),r[2]||=c(`span`,{class:`demo-label`},`디버깅`,-1),c(`div`,O,[c(`button`,{type:`button`,"aria-pressed":h.value,onClick:r[0]||=e=>h.value=!h.value},` 범인 표시 (* { outline }) `,8,k)])]),default:a(({solved:t})=>[c(`div`,{ref:e=>R(e,t),class:y([`demo-ox-frame`,{"is-outline":h.value}])},[c(`div`,A,[r[3]||=c(`h4`,null,`겨울 이벤트`,-1),r[4]||=c(`p`,null,`모바일 화면 너비 안에 모든 내용이 들어와야 합니다.`,-1),f.value===`vw`?(e(),l(`div`,j,`겨울 이벤트 진행 중`)):f.value===`fixed`?(e(),l(`div`,M,`첫 구매 10% 할인 쿠폰`)):f.value===`url`?(e(),l(`p`,N,g(n(C)),1)):f.value===`img`?(e(),l(`img`,{key:3,class:`demo-ox-img`,src:n(w),width:`480`,height:`160`,alt:`겨울 이벤트 이미지`},null,8,P)):(e(),l(`input`,F)),r[5]||=c(`p`,null,`이벤트 기간: 12월 1일 ~ 12월 31일`,-1)])],2),c(`p`,I,[r[6]||=d(` 내용 너비 `,-1),c(`strong`,null,g(z(t).scroll)+`px`,1),d(` / 화면 `+g(z(t).client)+`px → `+g(z(t).scroll>z(t).client?`가로 스크롤 생김`:`가로 스크롤 없음`),1)])]),caption:a(()=>[...r[7]||=[d(` 가상 화면은 너비를 320px로 고정해 PC에서도 재현됩니다. 단, `,-1),c(`code`,null,`100vw`,-1),d(`는 가상 화면이 아니라 실제 브라우저 창 너비를 따르므로 배너가 창 너비만큼 넓어집니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},R={class:`doc-body`},z={id:`section-0`},B={id:`section-1`},V={id:`section-2`},te={id:`section-3`},H={id:`section-4`},U={id:`section-5`},W={id:`section-7`},G=`overflow-x-mobile`,K=10,q=`모바일에서 가로 스크롤이 생길 때`,J=`모바일 가로 스크롤 찾기`,Y=`화면보다 넓은 요소 하나가 페이지 전체에 가로 스크롤을 만듭니다. overflow-x로 가리지 않고 범인을 찾아 고칩니다.`,X=`모바일에서 화면이 좌우로 흔들린다면?
body를 가리기 전에, 화면보다 넓은 요소 하나를 찾으세요.
`,Z=`레이아웃`,Q=`반응형`,ne=[`반응형`,`가로 스크롤`,`overflow-x`,`100vw`,`overflow-wrap`,`box-sizing`],re=`기초`,ie=`약 12분`,ae=[`box model`,`overflow`],oe=`max-width: 100%`,$=`published`,se=`2026-11-11`,ce=[`flex-ellipsis`,`sticky-overflow`],le=[{title:`CSS Values and Units Level 4 — 뷰포트 단위`,url:`https://www.w3.org/TR/css-values-4/#viewport-relative-lengths`},{title:`MDN — overflow-wrap`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/overflow-wrap`},{title:`MDN — box-sizing`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing`},{title:`WCAG 2.2 Understanding — 1.4.10 Reflow`,url:`https://www.w3.org/WAI/WCAG22/Understanding/reflow.html`}],ue={__name:`overflow-x-mobile`,setup(t,{expose:r}){return r({frontmatter:{id:`overflow-x-mobile`,order:10,title:`모바일에서 가로 스크롤이 생길 때`,navTitle:`모바일 가로 스크롤 찾기`,summary:`화면보다 넓은 요소 하나가 페이지 전체에 가로 스크롤을 만듭니다. overflow-x로 가리지 않고 범인을 찾아 고칩니다.`,lead:`모바일에서 화면이 좌우로 흔들린다면?
body를 가리기 전에, 화면보다 넓은 요소 하나를 찾으세요.
`,group:`레이아웃`,topic:`반응형`,tags:[`반응형`,`가로 스크롤`,`overflow-x`,`100vw`,`overflow-wrap`,`box-sizing`],level:`기초`,duration:`약 12분`,prerequisites:[`box model`,`overflow`],keyProperty:`max-width: 100%`,status:`published`,updated:`2026-11-11`,related:[`flex-ellipsis`,`sticky-overflow`],references:[{title:`CSS Values and Units Level 4 — 뷰포트 단위`,url:`https://www.w3.org/TR/css-values-4/#viewport-relative-lengths`},{title:`MDN — overflow-wrap`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/overflow-wrap`},{title:`MDN — box-sizing`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing`},{title:`WCAG 2.2 Understanding — 1.4.10 Reflow`,url:`https://www.w3.org/WAI/WCAG22/Understanding/reflow.html`}]}}),(t,r)=>{let i=f(`DocIssue`),o=f(`DocTakeaway`),s=f(`DocSteps`),p=f(`DocInspect`),m=f(`CodePanel`),g=f(`RouterLink`),_=f(`DocPractice`);return e(),l(`div`,R,[c(`section`,z,[r[2]||=c(`h2`,null,[c(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[3]||=c(`p`,null,[d(`이벤트 페이지를 모바일에서 열면 화면을 위아래로 스크롤할 때 좌우로도 흔들리고, 옆으로 밀면 오른쪽에 빈 공간이 나타납니다. 페이지 전체가 아니라 그 안의 `),c(`strong`,null,`요소 하나`),d(`가 화면보다 넓기 때문입니다.`)],-1),r[4]||=c(`p`,null,`PC 브라우저 창을 넓게 두고 작업하면 보이지 않다가, 실제 문구·이미지가 들어간 뒤 모바일 QA에서 이런 형태로 돌아옵니다.`,-1),u(i,{title:`이벤트 페이지: 모바일에서 화면이 좌우로 흔들리고 오른쪽에 빈 공간이 생김`,env:`모바일(360px) · Android Chrome, iOS Safari`,expected:`화면 너비 안에 모든 내용이 들어오고 가로 스크롤이 없음`,actual:`화면을 옆으로 밀면 오른쪽에 빈 영역이 보이고, 세로 스크롤 중에도 화면이 좌우로 움직임`},{default:a(()=>[...r[0]||=[c(`ol`,null,[c(`li`,null,`모바일 기기에서 이벤트 페이지를 엽니다.`),c(`li`,null,`화면을 왼쪽으로 밀어 봅니다.`),c(`li`,null,`오른쪽 끝에 빈 공간과 잘린 요소가 있는지 확인합니다.`)],-1)]]),_:1}),u(o,null,{default:a(()=>[...r[1]||=[c(`p`,null,[c(`code`,null,`overflow-x: hidden`),d(`으로 가리지 말고, `),c(`strong`,null,`화면보다 넓은 요소`),d(`를 찾아 그 요소의 너비를 고치세요.`)],-1)]]),_:1})]),c(`section`,B,[r[5]||=c(`h2`,null,[c(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),c(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[6]||=c(`p`,null,`범인을 하나씩 바꾸면서 ‘범인 표시’를 켜 보세요. 빨간 외곽선이 화면 밖까지 이어지는 요소가 가로 스크롤을 만든 요소입니다.`,-1),u(L)]),c(`section`,V,[r[8]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>페이지의 가로 스크롤은 문서 안의 어떤 요소든 오른쪽 끝이 화면 너비를 넘으면 생깁니다. 부모가 화면 너비에 맞아도 <code>overflow</code>가 기본값 <code>visible</code>이면 넘친 자식이 그대로 보이고, 그만큼 페이지를 스크롤할 수 있게 됩니다.</p><p>넘치는 이유는 대부분 다음 중 하나입니다. 스크롤바 너비까지 포함하는 <code>width: 100vw</code>, 시안 크기 그대로 넣은 고정 너비(<code>width: 400px</code>), 오른쪽으로 밀어낸 음수 margin·<code>translateX</code>, 공백이 없어 줄바꿈되지 않는 URL·계좌번호·이메일, <code>max-width</code> 없이 원본 크기로 들어간 이미지, <code>box-sizing: content-box</code>에서 <code>width: 100%</code>에 더해진 padding입니다.</p><p>그래서 해결은 <strong>범인을 찾아 그 요소만 고치는 것</strong>입니다. body를 가리면 스크롤은 사라지지만 넘친 내용이 잘린 채 남습니다.</p>`,4),u(s,null,{default:a(()=>[...r[7]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`넘친 요소 찾기`),d(),c(`code`,null,`getBoundingClientRect().right`)]),c(`li`,null,[c(`strong`,null,`원인 속성 확인`),d(),c(`code`,null,`width`),d(),c(`code`,null,`margin`),d(),c(`code`,null,`box-sizing`)]),c(`li`,null,[c(`strong`,null,`그 요소만 고치기`),d(),c(`code`,null,`max-width: 100%`)])],-1)]]),_:1})]),c(`section`,te,[r[10]||=c(`h2`,null,[c(`span`,{class:`section-no`},`04`),d(` 원인 찾기`)],-1),r[11]||=c(`p`,null,[d(`가로 스크롤은 `),c(`strong`,null,`오른쪽 끝이 화면을 넘는 요소`),d(`를 찾으면 해결의 절반이 끝납니다. 아래 순서로 범인을 좁힙니다.`)],-1),u(p,null,{default:a(()=>[...r[9]||=[c(`ol`,null,[c(`li`,null,[c(`strong`,null,`Device toolbar로 360px 화면 만들기`),d(` Device toolbar(Ctrl+Shift+M, Mac은 Cmd+Shift+M)를 켜고 Dimensions를 Responsive로 둔 채 너비를 360으로 입력합니다. 페이지를 가로로 끝까지 스크롤해 오른쪽에 무엇이 튀어나와 있는지 눈으로 먼저 봅니다.`)]),c(`li`,null,[c(`strong`,null,`Console에서 화면보다 넓은 요소 찾기`),d(` 가로 스크롤을 맨 왼쪽에 둔 상태에서 `),c(`code`,null,`[...document.querySelectorAll('*')].filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth)`),d(`를 실행합니다. 결과 목록의 요소에 마우스를 올리면 페이지에 표시됩니다. 여러 개가 나오면 가장 바깥 요소(목록 앞쪽)부터 확인합니다. 의도한 가로 스크롤 영역(표·탭)의 내용도 함께 나오니 구분합니다.`)]),c(`li`,null,[c(`strong`,null,`Styles 탭에 임시 외곽선 규칙 추가`),d(` Styles 탭의 New Style Rule(+) 버튼으로 규칙을 만들고 선택자를 `),c(`code`,null,`*`),d(`로 바꾼 뒤 `),c(`code`,null,`outline: 1px solid red`),d(`를 입력합니다. outline은 크기에 영향을 주지 않으므로, 화면 오른쪽 밖으로 이어지는 외곽선이 범인입니다.`)]),c(`li`,null,[c(`strong`,null,`Computed 탭에서 너비 원인 확인`),d(` 찾은 요소를 선택하고 Computed 탭 위쪽 박스 모델 그림에서 content·padding·margin 크기를 봅니다. 그다음 `),c(`code`,null,`width`),d(`, `),c(`code`,null,`margin`),d(`, `),c(`code`,null,`box-sizing`),d(`, `),c(`code`,null,`transform`),d(`을 검색해 값을 확인하고, 펼침 화살표로 어느 CSS 규칙에서 왔는지 따라갑니다. Styles 탭에서 그 선언을 끄면 가로 스크롤이 사라지는지 확인해 확정합니다.`)])],-1)]]),_:1})]),c(`section`,H,[r[12]||=c(`h2`,null,[c(`span`,{class:`section-no`},`05`),d(` 해결 코드`)],-1),r[13]||=c(`p`,null,[d(`범인마다 고치는 속성이 다릅니다. 아래 CSS는 위 실행 예제와 같은 파일이며, 맨 아래 `),c(`code`,null,`.is-problem`),d(` 규칙이 해결 전 값입니다.`)],-1),u(m,{tabs:n(T)},null,8,[`tabs`])]),c(`section`,U,[r[21]||=h(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>화면보다 넓은 요소가 생기는 경우는 레이아웃 안에서도 자주 만납니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>가로 스크롤이 꼭 필요한 표·탭</h3><p>넓은 표나 탭 목록은 가로 스크롤이 필요합니다. 이때도 body가 아니라 <strong>표를 감싸는 요소</strong>에 <code>overflow-x: auto</code>를 줘서 그 영역 안에서만 스크롤되게 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.table-wrap</span> {
  <span class="hljs-attribute">overflow-x</span>: auto; <span class="hljs-comment">/* 이 영역만 가로 스크롤 */</span>
}
<span class="hljs-selector-class">.table-wrap</span> <span class="hljs-selector-tag">table</span> {
  <span class="hljs-attribute">min-width</span>: <span class="hljs-number">600px</span>;
}
</code></pre><h3>화면 끝까지 닿는 배너</h3><p>부모의 padding을 넘어 배너를 화면 끝까지 늘릴 때 <code>width: 100vw</code>를 쓰면, 스크롤바가 자리를 차지하는 PC 브라우저에서 그 너비만큼 넘칩니다. <code>100dvw</code>도 같은 방식으로 계산되므로 해결되지 않습니다. 부모 padding만큼 음수 margin을 주면 됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.page</span> { <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">16px</span>; }
<span class="hljs-selector-class">.full-banner</span> {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> -<span class="hljs-number">16px</span>; <span class="hljs-comment">/* width: 100vw 대신 */</span>
}
</code></pre><h3>Flex 항목이 줄어들지 않을 때</h3>`,9),c(`p`,null,[r[15]||=d(`Flex 항목의 기본 `,-1),r[16]||=c(`code`,null,`min-width: auto`,-1),r[17]||=d(` 때문에 긴 글자를 가진 항목이 줄어들지 않고 행 전체를 화면 밖으로 밀어낼 수 있습니다. 감싼 항목에 `,-1),r[18]||=c(`code`,null,`min-width: 0`,-1),r[19]||=d(`을 줍니다. 자세한 내용은 `,-1),u(g,{to:`/pub/css/flex-ellipsis`},{default:a(()=>[...r[14]||=[d(`Flex 안에서 말줄임이 안 될 때`,-1)]]),_:1}),r[20]||=d(`를 참고하세요.`,-1)]),r[22]||=h(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-row</span> { <span class="hljs-attribute">display</span>: flex; }
<span class="hljs-selector-class">.card-main</span> { <span class="hljs-attribute">min-width</span>: <span class="hljs-number">0</span>; } <span class="hljs-comment">/* 내용보다 작아질 수 있게 */</span>
</code></pre><h3>Grid 열이 내용만큼 넓어질 때</h3><p><code>1fr</code>은 <code>minmax(auto, 1fr)</code>과 같아서, 긴 URL이나 넓은 이미지가 있으면 열이 그만큼 넓어집니다. 열을 <code>minmax(0, 1fr)</code>로 지정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.layout</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">minmax</span>(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>fr); <span class="hljs-comment">/* 1fr 대신 */</span>
}
</code></pre>`,4)]),r[25]||=h(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>body·html에 <code>overflow-x: hidden</code>을 주지 않습니다.</strong> 넘친 내용이 잘려 사용자가 볼 수 없게 됩니다. <code>html, body</code>에 함께 지정하면 body가 스크롤 컨테이너가 되어 그 안의 <code>position: sticky</code>가 동작하지 않습니다. <code>overflow-x: clip</code>은 sticky를 깨지 않지만 범인을 숨길 뿐이라는 점은 같습니다.</li><li><strong>100vw 문제는 환경에 따라 보이지 않습니다.</strong> 모바일 브라우저나 트랙패드를 쓰는 macOS는 스크롤바가 내용 위에 겹쳐 표시되어 넘치지 않고, Windows PC처럼 스크롤바가 자리를 차지하는 환경에서만 드러납니다. 부모 기준 너비는 <code>100%</code>로 지정하세요.</li><li><strong>실제 기기에서 확인합니다.</strong> Device toolbar는 너비만 흉내 냅니다. 기기 글꼴, 글자 크기 설정, 브라우저 UI에 따라 줄바꿈 위치가 달라지므로 최종 확인은 실제 기기에서 합니다.</li><li><strong>320px 너비에서도 내용을 읽을 수 있어야 합니다.</strong> WCAG 1.4.10(Reflow)은 320 CSS px 너비에서 가로·세로 두 방향 스크롤 없이 내용을 볼 수 있도록 요구합니다. 화면 확대(400%)를 쓰는 사용자도 같은 너비로 보게 됩니다.</li></ul></section>`,1),c(`section`,W,[r[24]||=c(`h2`,null,[c(`span`,{class:`section-no`},`08`),d(` 짧은 실습`)],-1),u(_,null,{default:a(()=>[...r[23]||=[c(`p`,null,`위 예제에서 범인을 하나씩 바꾸고 ‘범인 표시’를 켜 보세요.`,-1),c(`ul`,{class:`checklist`},[c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`문제 상태에서는 내용 너비가 화면 너비보다 크고 ‘가로 스크롤 생김’이 표시된다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`빨간 외곽선이 화면 오른쪽 밖으로 이어지는 요소가 고른 범인과 같다.`)])]),c(`li`,null,[c(`label`,null,[c(`input`,{type:`checkbox`}),c(`span`,{class:`checklist-text`},`해결 상태에서는 다섯 범인 모두 ‘가로 스크롤 없음’이 표시된다.`)])])],-1)]]),_:1})])])}}};export{ue as default,ie as duration,Z as group,G as id,oe as keyProperty,X as lead,re as level,J as navTitle,K as order,ae as prerequisites,le as references,ce as related,$ as status,Y as summary,ne as tags,q as title,Q as topic,se as updated};