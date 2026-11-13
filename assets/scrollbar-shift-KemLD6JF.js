import{D as e,G as t,L as n,R as r,T as i,V as a,c as o,d as s,g as c,h as l,j as u,k as d,l as f,m as p,pt as m,r as h,u as g,ut as _,w as v}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as y}from"./DemoCompare-Bd6h8ThJ.js";var b=`/* 스크롤바 너비와 패널 좌우 여백입니다. 스크롤바 너비는 프로젝트에서 정한 값을 씁니다. */
.demo-ss-panel {
  --scrollbar-size: 12px;
  --panel-padding: 20px;
  display: flex;
  flex-direction: column;
  height: 240px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 13px;
}
.demo-ss-title {
  margin: 0;
  padding: 12px var(--panel-padding);
  border-bottom: 1px solid #e2e8f1;
  font-size: 14px;
}

/* 스크롤 영역: 항목을 펼쳐 내용이 넘치면 스크롤바가 생깁니다. (문제 상태는 이 상태 그대로) */
.demo-ss-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 var(--panel-padding);
}

/* 해결: 스크롤바 자리를 항상 잡아 두고(scrollbar-gutter), 그 너비만큼 오른쪽 padding을 줄입니다.
   스크롤바가 없을 때: 빈 자리(12px) + padding(8px) = 20px
   스크롤바가 있을 때: 스크롤바(12px) + padding(8px) = 20px → 내용 너비와 좌우 여백이 늘 같습니다. */
@supports (scrollbar-gutter: stable) {
  .demo-ss-body-stable {
    scrollbar-gutter: stable;
    padding-right: calc(var(--panel-padding) - var(--scrollbar-size));
  }
}

/* 아코디언 항목 */
.demo-ss-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.demo-ss-list li {
  border-bottom: 1px solid #e2e8f1;
}
.demo-ss-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.demo-ss-arrow {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background: #e8eef7;
  line-height: 22px;
  text-align: center;
  transition: transform 0.2s;
}
.demo-ss-question[aria-expanded='true'] .demo-ss-arrow {
  transform: rotate(180deg);
}
.demo-ss-answer {
  margin: 0;
  padding: 0 0 12px;
  color: #4b5b73;
  line-height: 1.6;
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

/* 프로젝트에서 스크롤바 모양을 정하는 부분입니다. 너비는 위 --scrollbar-size와 같은 값을 씁니다.
   (Chrome·Edge·Safari. Firefox는 ::-webkit-scrollbar를 지원하지 않습니다.) */
.demo-ss-body {
  scrollbar-width: auto; /* 표준 속성을 auto로 두어야 Chrome에서 ::-webkit-scrollbar가 적용됩니다. */
  scrollbar-color: auto;
}
.demo-ss-body::-webkit-scrollbar {
  width: var(--scrollbar-size);
}
.demo-ss-body::-webkit-scrollbar-track {
  background: #eef2f7;
}
.demo-ss-body::-webkit-scrollbar-thumb {
  border: 3px solid #eef2f7;
  border-radius: 6px;
  background: #9aabc2;
}
`,x=[{question:`주문을 취소하고 싶어요.`,answer:`배송 준비 전이라면 주문 내역에서 바로 취소할 수 있습니다. 배송이 시작된 뒤에는 반품으로 접수해 주세요.`},{question:`배송지를 바꿀 수 있나요?`,answer:`상품 준비 중 단계까지는 주문 상세에서 배송지를 바꿀 수 있습니다.`},{question:`쿠폰은 어디서 확인하나요?`,answer:`마이페이지 > 쿠폰함에서 사용 가능한 쿠폰과 기간을 확인할 수 있습니다.`},{question:`영수증을 받고 싶어요.`,answer:`주문 상세 화면 아래쪽 영수증 버튼으로 카드 영수증과 현금영수증을 출력할 수 있습니다.`}],S=[{label:`CSS`,language:`css`,code:b},{label:`부모 padding 구조`,language:`css`,code:`/* 부모가 좌우 padding을 갖고, 안쪽 스크롤 영역만 따로 있을 때
   스크롤 영역을 부모 오른쪽 끝까지 넓힌 뒤, 그 자리에서 스크롤바 너비만큼 padding을 줄입니다. */
.panel {
  padding: 0 var(--panel-padding);
}

@supports (scrollbar-gutter: stable) {
  .panel-scroll {
    scrollbar-gutter: stable;
    margin-right: calc(0px - var(--panel-padding)); /* 부모 오른쪽 padding만큼 끌어냄 */
    padding-right: calc(var(--panel-padding) - var(--scrollbar-size));
  }
}

/* margin 대신 width로 넓혀도 같습니다. 둘 중 하나만 씁니다.
   width: calc(100% + var(--panel-padding)); */`},{label:`HTML`,language:`xml`,code:`<div class="demo-ss-panel">
  <p class="demo-ss-title">자주 묻는 질문</p>
  <div class="demo-ss-body demo-ss-body-stable" tabindex="0" aria-label="질문 목록">
    <ul class="demo-ss-list">
      <li>
        <button type="button" class="demo-ss-question" aria-expanded="false">
          주문을 취소하고 싶어요.
          <span class="demo-ss-arrow" aria-hidden="true">▾</span>
        </button>
        <!-- 펼치면 답변이 들어가 내용이 패널 높이를 넘습니다. -->
      </li>
    </ul>
  </div>
</div>`}],C=[`aria-label`],w={class:`demo-ss-list`},T=[`aria-expanded`,`onClick`],E={key:0,class:`demo-ss-answer`},D={class:`demo-ss-meter`},O={__name:`ScrollbarShiftDemo`,setup(c){let u=a(x.map(()=>!1));function p(){u.fill(!0)}function b(){u.fill(!1)}let S={problem:null,solved:null},O={problem:null,solved:null},k=a({problem:0,solved:0});function A(){Object.entries(S).forEach(([e,t])=>{let n=t?.querySelector(`.demo-ss-arrow`);if(!n)return;let r=Math.round(t.getBoundingClientRect().right-n.getBoundingClientRect().right);(O[e]===null||u.every(e=>!e))&&(O[e]=r),k[e]=O[e]-r||0})}let j=typeof ResizeObserver>`u`?null:new ResizeObserver(A);function M(e,t){let n=e?`solved`:`problem`;S[n]!==t&&(S[n]&&j?.unobserve(S[n]),S[n]=t,t&&(j?.observe(t),v(A)))}return n(u,A,{flush:`post`}),i(()=>j?.disconnect()),(n,i)=>(e(),f(y,{problem:{code:`overflow-y: auto`,note:`항목을 펼쳐 스크롤바가 생기면 내용 너비가 줄어 오른쪽 화살표가 왼쪽으로 밀립니다.`},solved:{code:`scrollbar-gutter: stable`,note:`스크롤바 자리를 항상 잡아 두고 그만큼 padding-right를 줄여, 펼쳐도 좌우 여백이 그대로입니다.`}},{controls:r(()=>[i[0]||=o(`span`,{class:`demo-label`},`항목을 눌러 펼쳐 보세요. 두 화면이 함께 펼쳐집니다.`,-1),o(`div`,{class:`sample-buttons`},[o(`button`,{type:`button`,onClick:p},`모두 펼치기`),o(`button`,{type:`button`,onClick:b},`모두 접기`)])]),default:r(({solved:n})=>[o(`div`,{ref:e=>M(n,e),class:`demo-ss-panel`},[i[2]||=o(`p`,{class:`demo-ss-title`},`자주 묻는 질문`,-1),o(`div`,{class:_([`demo-ss-body`,{"demo-ss-body-stable":n}]),tabindex:`0`,"aria-label":n?`해결 상태 질문 목록`:`문제 상태 질문 목록`},[o(`ul`,w,[(e(!0),s(h,null,d(t(x),(t,n)=>(e(),s(`li`,{key:t.question},[o(`button`,{type:`button`,class:`demo-ss-question`,"aria-expanded":u[n],onClick:e=>u[n]=!u[n]},[l(m(t.question)+` `,1),i[1]||=o(`span`,{class:`demo-ss-arrow`,"aria-hidden":`true`},`▾`,-1)],8,T),u[n]?(e(),s(`p`,E,m(t.answer),1)):g(``,!0)]))),128))])],10,C)],512),o(`p`,D,[i[3]||=l(` 화살표 이동 `,-1),o(`b`,{class:_({"is-moved":k[n?`solved`:`problem`]!==0})},m(k[n?`solved`:`problem`])+`px`,3)])]),caption:r(()=>[...i[4]||=[l(` 화살표 오른쪽 끝과 패널 오른쪽 끝의 거리를 재서, 모두 접었을 때와의 차이를 ‘화살표 이동’으로 표시합니다. 이 예제는 어느 환경에서나 차이가 보이도록 `,-1),o(`code`,null,`::-webkit-scrollbar`,-1),l(`로 12px 스크롤바를 표시합니다(Chrome·Edge·Safari). Firefox는 운영체제 설정의 스크롤바를 쓰므로 해결 쪽 좌우 여백이 조금 다를 수 있고, 스크롤바가 겹쳐 보이는 환경이면 해결 쪽 오른쪽 여백이 스크롤바 너비만큼 좁게 보입니다. `,-1)]]),_:1}))}},k={class:`doc-body`},A={id:`section-0`},j={id:`section-1`},M={id:`section-2`},N={id:`section-3`},P={id:`section-4`},F={id:`section-5`},I={id:`section-7`},L=`scrollbar-shift`,R=18,z=`스크롤바가 생기거나 사라질 때 화면이 옆으로 흔들릴 때`,B=`스크롤바 화면 흔들림`,V=`스크롤바가 생기면서 내용 너비가 줄어드는 원리를 이해하고, scrollbar-gutter로 스크롤바 자리를 잡아 둔 뒤 padding·margin(width)으로 그 자리를 여백 안에 넣어 흔들림을 막습니다.`,H=`아코디언을 펼치거나 목록이 길어질 때 안쪽 요소가 옆으로 움찔한다면?
내용보다 먼저, 그 순간 스크롤바가 생기는지 확인하세요.
`,U=`레이어·스크롤`,W=`스크롤바`,G=[`스크롤바`,`레이아웃 흔들림`,`아코디언`,`scrollbar-gutter`,`padding-right`,`margin-right`,`@supports`,`overflow`],K=`중급`,q=`약 12분`,J=[`overflow`,`CSS 변수`,`calc()`],Y=`scrollbar-gutter: stable`,X=`published`,Z=`2026-11-13`,Q=[`modal-focus-scroll`,`overflow-x-mobile`,`scroll-margin`],$=[{title:`MDN — scrollbar-gutter`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter`},{title:`MDN — @supports`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/@supports`},{title:`MDN — ::-webkit-scrollbar`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar`}],ee={__name:`scrollbar-shift`,setup(n,{expose:i}){return i({frontmatter:{id:`scrollbar-shift`,order:18,title:`스크롤바가 생기거나 사라질 때 화면이 옆으로 흔들릴 때`,navTitle:`스크롤바 화면 흔들림`,summary:`스크롤바가 생기면서 내용 너비가 줄어드는 원리를 이해하고, scrollbar-gutter로 스크롤바 자리를 잡아 둔 뒤 padding·margin(width)으로 그 자리를 여백 안에 넣어 흔들림을 막습니다.`,lead:`아코디언을 펼치거나 목록이 길어질 때 안쪽 요소가 옆으로 움찔한다면?
내용보다 먼저, 그 순간 스크롤바가 생기는지 확인하세요.
`,group:`레이어·스크롤`,topic:`스크롤바`,tags:[`스크롤바`,`레이아웃 흔들림`,`아코디언`,`scrollbar-gutter`,`padding-right`,`margin-right`,`@supports`,`overflow`],level:`중급`,duration:`약 12분`,prerequisites:[`overflow`,`CSS 변수`,`calc()`],keyProperty:`scrollbar-gutter: stable`,status:`published`,updated:`2026-11-13`,related:[`modal-focus-scroll`,`overflow-x-mobile`,`scroll-margin`],references:[{title:`MDN — scrollbar-gutter`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter`},{title:`MDN — @supports`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/@supports`},{title:`MDN — ::-webkit-scrollbar`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar`}]}}),(n,i)=>{let a=u(`DocIssue`),d=u(`DocTakeaway`),f=u(`DocSteps`),m=u(`DocInspect`),h=u(`CodePanel`),g=u(`RouterLink`),_=u(`DocPractice`);return e(),s(`div`,k,[o(`section`,A,[i[2]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),l(` 문제 상황`)],-1),i[3]||=o(`p`,null,`높이가 정해진 ‘자주 묻는 질문’ 패널에서 질문을 펼치면, 오른쪽 끝의 화살표 아이콘과 항목 구분선이 몇 픽셀씩 왼쪽으로 밀립니다. 다시 접으면 제자리로 돌아옵니다. 맥북 트랙패드로 확인하면 보이지 않고, 마우스를 쓰는 Windows PC에서 검수할 때 드러납니다.`,-1),c(a,{label:`디자인 검수`,title:`FAQ 패널: 질문을 펼칠 때 오른쪽 화살표가 좌우로 흔들림`,env:`Windows PC 브라우저(스크롤바가 자리를 차지하는 환경) · 높이 고정 패널`,expected:`질문을 펼치거나 접어도 화살표와 내용의 좌우 위치가 그대로임`,actual:`질문을 펼쳐 패널에 스크롤바가 생기는 순간 화살표와 내용이 왼쪽으로 밀리고, 오른쪽 여백이 왼쪽보다 넓어짐`},{default:r(()=>[...i[0]||=[o(`ol`,null,[o(`li`,null,`Windows PC에서 자주 묻는 질문 패널을 엽니다.`),o(`li`,null,`질문을 하나씩 펼치면서 오른쪽 화살표 위치를 봅니다.`),o(`li`,null,`내용이 패널 높이를 넘는 순간 화살표가 왼쪽으로 움직입니다.`)],-1)]]),_:1}),c(d,null,{default:r(()=>[...i[1]||=[o(`p`,null,[l(`스크롤 영역에 `),o(`code`,null,`scrollbar-gutter: stable`),l(`로 `),o(`strong`,null,`스크롤바 자리를 항상 잡아 두고`),l(`, 그 너비만큼 `),o(`strong`,null,`오른쪽 padding을 줄이세요.`),l(` 스크롤바가 있든 없든 내용 너비와 좌우 여백이 같아집니다.`)],-1)]]),_:1})]),o(`section`,j,[i[4]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[5]||=o(`p`,null,`질문을 눌러 펼치거나 ‘모두 펼치기’를 누르고, 두 화면의 화살표 이동 값을 비교해 보세요.`,-1),c(O)]),o(`section`,M,[i[7]||=p(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>Windows의 기본 스크롤바처럼 <strong>자리를 차지하는 스크롤바</strong>(classic scrollbar)는 스크롤 영역 너비의 일부를 가져갑니다. <code>overflow-y: auto</code>인 영역은 내용이 넘칠 때만 스크롤바를 그리므로, 항목을 펼쳐 내용이 길어지는 순간 내용 너비가 스크롤바 너비만큼 줄어듭니다. 그래서 오른쪽에 붙은 화살표는 스크롤바 너비만큼 왼쪽으로 밀리고, 오른쪽 여백은 padding + 스크롤바로 왼쪽보다 넓어집니다.</p><p>macOS(트랙패드 사용 시 기본 설정)나 모바일 브라우저처럼 <strong>스크롤바가 내용 위에 겹쳐 표시되는</strong>(overlay scrollbar) 환경에서는 스크롤바가 자리를 차지하지 않아 흔들리지 않습니다. 작업자 화면에서는 멀쩡하고 검수 화면에서만 보이는 이유입니다.</p><p><code>scrollbar-gutter: stable</code>은 스크롤바가 없을 때도 <strong>스크롤바 자리를 비워 둡니다.</strong> 이것만 주면 흔들림은 사라지지만, 내용이 짧을 때 오른쪽에 빈 자리가 남아 좌우 여백이 달라 보입니다. 그래서 비워 둔 자리를 <strong>오른쪽 padding 안에 넣습니다.</strong> 좌우 여백이 20px이고 스크롤바가 12px이면 오른쪽 padding을 8px로 줄여, 빈 자리(또는 스크롤바) 12px + padding 8px = 20px이 되게 합니다.</p><div class="table-wrap"><table><thead><tr><th>상태</th><th>처리 없음 (오른쪽 여백)</th><th>gutter + padding 보정 (오른쪽 여백)</th></tr></thead><tbody><tr><td>내용이 짧음</td><td>padding 20px</td><td>빈 자리 12px + padding 8px = 20px</td></tr><tr><td>내용이 넘침</td><td>스크롤바 12px + padding 20px = 32px</td><td>스크롤바 12px + padding 8px = 20px</td></tr></tbody></table></div><p>이 계산이 맞으려면 <strong>스크롤바 너비를 알아야</strong> 합니다. 실무에서는 <code>::-webkit-scrollbar</code>로 스크롤바 모양과 너비를 정하는 경우가 많으므로, 그 너비를 CSS 변수(<code>--scrollbar-size</code>)로 두고 스크롤바와 padding 계산에 같이 씁니다.</p>`,6),c(f,null,{default:r(()=>[...i[6]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`스크롤바 자리를 항상 잡아 두기`),l(),o(`code`,null,`scrollbar-gutter: stable`)]),o(`li`,null,[o(`strong`,null,`그 너비만큼 오른쪽 padding 줄이기`),l(),o(`code`,null,`padding-right: calc(여백 - 스크롤바 너비)`)]),o(`li`,null,[o(`strong`,null,`부모가 padding을 가졌다면 스크롤 영역을 끝까지 끌어내기`),l(),o(`code`,null,`margin-right: calc(0px - 여백)`),l(` 또는 `),o(`code`,null,`width: calc(100% + 여백)`)])],-1)]]),_:1})]),o(`section`,N,[i[9]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),l(` 원인 찾기`)],-1),i[10]||=o(`p`,null,[l(`흔들림이 보이면 `),o(`strong`,null,`그 순간 스크롤바가 생기는지`),l(`부터 확인합니다. 스크롤바가 자리를 차지하는 환경(Windows PC 또는 스크롤바를 항상 표시하도록 설정한 macOS)에서 아래 순서로 봅니다.`)],-1),c(m,null,{default:r(()=>[...i[8]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`Rendering 패널에서 흔들린 영역 표시`),l(` DevTools 오른쪽 위의 점 세 개 메뉴 → More tools → Rendering을 열고 `),o(`strong`,null,`Layout Shift Regions`),l(`를 켭니다. 항목을 펼칠 때 움직인 영역이 잠시 강조되면 레이아웃이 실제로 이동한 것입니다.`)]),o(`li`,null,[o(`strong`,null,`Elements 패널에서 스크롤 영역 찾기`),l(` 화살표를 선택하고 위로 올라가며 `),o(`code`,null,`overflow-y: auto`),l(`(또는 `),o(`code`,null,`scroll`),l(`)인 상자를 찾습니다. 그 상자가 스크롤바가 생기는 영역입니다.`)]),o(`li`,null,[o(`strong`,null,`Console에서 스크롤바 너비 확인`),l(` 그 상자를 선택한 채 `),o(`code`,null,`$0.offsetWidth - $0.clientWidth`),l(`를 입력합니다(테두리가 없는 상자 기준). 접었을 때 0, 펼쳤을 때 0보다 큰 값이면 스크롤바가 원인입니다.`)]),o(`li`,null,[o(`strong`,null,`Styles 탭에서 바로 시험`),l(` 그 상자에 `),o(`code`,null,`scrollbar-gutter: stable`),l(`과 줄인 `),o(`code`,null,`padding-right`),l(`를 추가하고, 펼치고 접을 때 화살표 위치와 좌우 여백이 같은지 봅니다.`)])],-1)]]),_:1})]),o(`section`,P,[i[11]||=o(`h2`,null,[o(`span`,{class:`section-no`},`05`),l(` 해결 코드`)],-1),i[12]||=o(`p`,null,`‘CSS’ 탭은 위 실행 예제와 같은 파일입니다. 스크롤 영역 자체가 좌우 padding을 가질 때는 padding만 줄이면 되고, 부모가 padding을 갖고 안쪽 스크롤 영역이 따로 있을 때는 ‘부모 padding 구조’ 탭처럼 스크롤 영역을 부모 오른쪽 끝까지 끌어낸 뒤 줄입니다.`,-1),c(h,{tabs:t(S)},null,8,[`tabs`]),i[13]||=p(`<div class="table-wrap"><table><thead><tr><th>속성</th><th>하는 일</th></tr></thead><tbody><tr><td><code>scrollbar-gutter: stable</code></td><td>스크롤바가 없어도 그 자리를 비워 두어 내용 너비가 바뀌지 않게 함</td></tr><tr><td><code>padding-right: calc(여백 - 스크롤바 너비)</code></td><td>비워 둔 자리를 오른쪽 여백 안에 넣어 좌우 여백을 맞춤</td></tr><tr><td><code>margin-right: calc(0px - 여백)</code> 또는 <code>width: calc(100% + 여백)</code></td><td>부모 padding 안쪽에 있는 스크롤 영역을 부모 오른쪽 끝까지 넓힘(둘 중 하나만)</td></tr><tr><td><code>@supports (scrollbar-gutter: stable)</code></td><td>지원하지 않는 브라우저에서는 padding을 줄이지 않고 기존처럼 동작</td></tr></tbody></table></div>`,1)]),o(`section`,F,[i[20]||=p(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>스크롤바가 생기는 원리는 같고, 나타나는 모습만 다른 경우입니다.</p><h3>목록 길이가 바뀌는 패널</h3><p>필터나 탭으로 목록 개수가 바뀌는 높이 고정 패널도 같습니다. 짧은 목록에서는 스크롤바가 없다가 긴 목록에서 생기며 같은 흔들림이 납니다. 같은 코드로 해결합니다.</p><h3>스크롤 영역 안에 꽉 찬 띠가 있을 때</h3><p>스크롤 영역 안에 좌우 끝까지 닿아야 하는 띠(고정 제목 줄, 배경 띠)가 있으면, padding을 줄인 만큼 띠의 음수 margin과 너비도 함께 맞춰야 합니다. 띠가 스크롤바 아래로 들어가지 않도록 오른쪽 음수 margin은 줄인 padding 값까지만 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.panel-scroll</span> <span class="hljs-selector-class">.full-bar</span> {
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-built_in">calc</span>(<span class="hljs-built_in">var</span>(--scrollbar-size) - <span class="hljs-built_in">var</span>(--panel-padding)) <span class="hljs-number">0</span> <span class="hljs-built_in">calc</span>(<span class="hljs-number">0px</span> - <span class="hljs-built_in">var</span>(--panel-padding));
}
</code></pre><h3>100vw를 쓴 요소가 넘칠 때</h3>`,8),o(`p`,null,[i[15]||=o(`code`,null,`width: 100vw`,-1),i[16]||=l(`는 스크롤바 너비까지 포함해 계산되어, 스크롤바가 자리를 차지하는 환경에서 가로 스크롤을 만듭니다. 이 문서의 방법으로 해결되는 문제가 아니므로 부모 기준 `,-1),i[17]||=o(`code`,null,`100%`,-1),i[18]||=l(`를 씁니다. 자세한 내용은 `,-1),c(g,{to:`/pub/css/overflow-x-mobile`},{default:r(()=>[...i[14]||=[l(`모바일에서 가로 스크롤이 생길 때`,-1)]]),_:1}),i[19]||=l(`를 참고하세요.`,-1)])]),i[23]||=p(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>스크롤바 너비는 프로젝트에서 정한 값과 같아야 합니다.</strong> <code>::-webkit-scrollbar</code>의 <code>width</code>와 <code>--scrollbar-size</code>를 같은 변수로 묶어 두면 한쪽만 바뀌는 일을 막을 수 있습니다.</li><li><strong>여백이 스크롤바보다 넓어야 합니다.</strong> 여백보다 스크롤바가 넓으면 <code>padding-right</code> 계산값이 음수가 되어 적용되지 않습니다. 이때는 여백을 넓히거나 스크롤바를 얇게 정합니다.</li><li><strong>스크롤바가 겹쳐 보이는 환경에서는 오른쪽 여백이 좁아집니다.</strong> 스크롤바가 자리를 차지하지 않으면 <code>scrollbar-gutter</code>가 비워 두는 자리도 0이라, 오른쪽 여백이 줄인 padding 값만 남습니다(예: 왼쪽 20px, 오른쪽 8px). 흔들림은 생기지 않지만 좌우 대칭이 깨지므로, 스크롤바 너비를 얇게 정해 차이를 줄이고 모바일·macOS 실제 화면에서 확인합니다.</li><li><strong>Firefox는 <code>::-webkit-scrollbar</code>를 지원하지 않습니다.</strong> 운영체제 스크롤바(또는 <code>scrollbar-width</code>로 정한 두께)를 쓰므로 스크롤바 너비가 변수 값과 다를 수 있습니다. 흔들림은 <code>scrollbar-gutter</code>로 막히지만 좌우 여백이 조금 다를 수 있으니 실제 화면에서 확인합니다.</li><li><strong>지원하지 않는 브라우저를 위해 <code>@supports</code>로 감쌉니다.</strong> <code>scrollbar-gutter</code>를 모르는 브라우저에서 padding만 줄면 오른쪽 여백만 좁아지므로, 두 선언을 함께 <code>@supports</code> 안에 둡니다.</li><li><strong>페이지 전체(<code>html</code>)에는 신중히 씁니다.</strong> 짧은 페이지에도 오른쪽 자리가 비어 보이고, 페이지에는 줄일 padding이 없는 경우가 많습니다. 이 방법은 높이를 정한 패널·목록 같은 안쪽 스크롤 영역에 씁니다.</li></ul></section>`,1),o(`section`,I,[i[22]||=o(`h2`,null,[o(`span`,{class:`section-no`},`08`),l(` 짧은 실습`)],-1),c(_,null,{default:r(()=>[...i[21]||=[o(`p`,null,`위 예제에서 질문을 하나씩 펼치거나 ‘모두 펼치기’를 눌러 보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`문제 상태에서 내용이 패널 높이를 넘는 순간 화살표 이동 값이 음수(왼쪽)로 바뀐다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태에서는 펼치고 접어도 화살표 이동이 늘 0px이다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태에서 모두 접었을 때, 화살표 오른쪽 여백이 질문 글자 왼쪽 여백과 같아 보인다.`)])])],-1)]]),_:1})])])}}};export{ee as default,q as duration,U as group,L as id,Y as keyProperty,H as lead,K as level,B as navTitle,R as order,J as prerequisites,$ as references,Q as related,X as status,V as summary,G as tags,z as title,W as topic,Z as updated};