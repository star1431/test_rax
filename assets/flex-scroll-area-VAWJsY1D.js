import{D as e,G as t,H as n,R as r,c as i,d as a,ft as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as _}from"./index-Dxflp_jg.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=`.demo-scroll-panel {
  display: flex;
  flex-direction: column;
  height: 260px; /* 스크롤이 생기려면 컨테이너 높이가 정해져 있어야 합니다. */
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-scroll-head,
.demo-scroll-foot {
  flex-shrink: 0;
  padding: 10px 12px;
}
.demo-scroll-head {
  border-bottom: 1px solid #e2e8f1;
  font-weight: 700;
}
.demo-scroll-foot {
  border-top: 1px solid #e2e8f1;
  text-align: right;
}
.demo-scroll-main {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* 중첩된 flex item도 내용보다 작아질 수 있게 허용합니다. */
}
.demo-scroll-body {
  flex: 1;
  overflow-y: auto; /* 남은 높이를 넘는 내용만 스크롤합니다. */
  padding: 10px 12px;
}
.demo-scroll-body p {
  margin: 0 0 8px;
}
.demo-scroll-button {
  padding: 4px 14px;
  border: 1px solid #315bc2;
  border-radius: 4px;
  background: #315bc2;
  color: #fff;
  font-size: 12px;
}
/* 비교를 위한 문제 상태: 중첩된 항목의 기본 최소 높이를 복원합니다. */
.is-problem .demo-scroll-main { min-height: auto; }
`,b=[`레이어 본문 첫 번째 문단입니다.`,`내용이 늘어나면 본문 영역의 높이도 함께 늘어납니다.`,`헤더와 푸터는 항상 레이어 안에 보여야 합니다.`,`본문만 스크롤되면 버튼을 언제든 누를 수 있습니다.`,`중첩된 flex item은 자동 최소 높이를 따로 가집니다.`,`부모 항목이 줄어들지 않으면 스크롤 영역도 줄어들지 않습니다.`],x=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<div class="demo-scroll-panel">
  <div class="demo-scroll-head">레이어 제목</div>
  <div class="demo-scroll-main">
    <div class="demo-scroll-body" tabindex="0" aria-label="레이어 본문">
      <p>긴 본문 내용…</p>
    </div>
  </div>
  <div class="demo-scroll-foot">
    <button type="button" class="demo-scroll-button">확인</button>
  </div>
</div>`}],S={for:`demo-scroll-height`},C={for:`demo-scroll-count`},w={class:`demo-scroll-main`},T=[`tabindex`,`aria-label`],E={__name:`FlexScrollAreaDemo`,setup(t){let s=n(260),l=n(5),f=h(()=>b.slice(0,l.value));return(t,n)=>(e(),d(v,{problem:{code:`min-height: auto`,note:`본문이 늘어나면 푸터가 레이어 밖으로 밀려납니다.`},solved:{code:`min-height: 0`,note:`헤더와 푸터는 고정되고 본문만 스크롤됩니다.`}},{controls:r(()=>[i(`label`,S,[n[2]||=c(`레이어 높이 `,-1),i(`strong`,null,p(s.value)+`px`,1)]),g(i(`input`,{id:`demo-scroll-height`,"onUpdate:modelValue":n[0]||=e=>s.value=e,type:`range`,min:`200`,max:`360`,step:`20`},null,512),[[_,s.value,void 0,{number:!0}]]),i(`label`,C,[n[3]||=c(`본문 문단 수 `,-1),i(`strong`,null,p(l.value)+`개`,1)]),g(i(`input`,{id:`demo-scroll-count`,"onUpdate:modelValue":n[1]||=e=>l.value=e,type:`range`,min:`1`,max:`6`,step:`1`},null,512),[[_,l.value,void 0,{number:!0}]])]),default:r(({solved:t})=>[i(`div`,{class:`demo-scroll-panel`,style:o({height:s.value+`px`})},[n[4]||=i(`div`,{class:`demo-scroll-head`},`레이어 제목`,-1),i(`div`,w,[i(`div`,{class:`demo-scroll-body`,tabindex:t?0:void 0,"aria-label":t?`해결 상태 레이어 본문`:void 0},[(e(!0),a(m,null,u(f.value,t=>(e(),a(`p`,{key:t},p(t),1))),128))],8,T)]),n[5]||=i(`div`,{class:`demo-scroll-foot`},[i(`button`,{type:`button`,class:`demo-scroll-button`,tabindex:`-1`},`확인`)],-1)],4)]),caption:r(()=>[...n[6]||=[c(` 해결 상태의 본문은 Tab으로 이동한 뒤 방향키로 스크롤할 수 있습니다. ‘확인’ 버튼은 배치 확인용이며 동작하지 않습니다. `,-1)]]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-7`},P=`flex-scroll-area`,F=3,I=`헤더·푸터 사이 본문만 스크롤하기`,L=`본문 영역 스크롤`,R=`높이가 정해진 레이어에서 본문이 길어질 때, 중첩된 flex item의 최소 높이를 풀어 본문만 스크롤되게 합니다.`,z=`본문이 길어지면 푸터가 레이어 밖으로 밀려난다면?
스크롤 영역보다 먼저, 그 영역을 감싼 항목의 최소 높이를 확인하세요.
`,B=`레이아웃`,V=`스크롤`,H=[`Flex`,`스크롤`,`min-height`,`overflow`,`모달`,`레이어`],U=`기초`,W=`약 12분`,G=[`flex item`,`overflow`,`높이`],K=`min-height: 0`,q=`published`,J=`2026-11-13`,Y=[`flex-ellipsis`,`fixed-transform`],X=[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`},{title:`MDN — min-height`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/min-height`}],Z={__name:`flex-scroll-area`,setup(n,{expose:o}){return o({frontmatter:{id:`flex-scroll-area`,order:3,title:`헤더·푸터 사이 본문만 스크롤하기`,navTitle:`본문 영역 스크롤`,summary:`높이가 정해진 레이어에서 본문이 길어질 때, 중첩된 flex item의 최소 높이를 풀어 본문만 스크롤되게 합니다.`,lead:`본문이 길어지면 푸터가 레이어 밖으로 밀려난다면?
스크롤 영역보다 먼저, 그 영역을 감싼 항목의 최소 높이를 확인하세요.
`,group:`레이아웃`,topic:`스크롤`,tags:[`Flex`,`스크롤`,`min-height`,`overflow`,`모달`,`레이어`],level:`기초`,duration:`약 12분`,prerequisites:[`flex item`,`overflow`,`높이`],keyProperty:`min-height: 0`,status:`published`,updated:`2026-11-13`,related:[`flex-ellipsis`,`fixed-transform`],references:[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`},{title:`MDN — min-height`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/min-height`}]}}),(n,o)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`DocPractice`);return e(),a(`div`,D,[i(`section`,O,[o[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),o[3]||=i(`p`,null,[c(`높이가 정해진 레이어(모달, 사이드 패널)에 헤더·본문·푸터를 세로로 배치했습니다. 본문에 `),i(`code`,null,`overflow-y: auto`),c(`도 넣었는데, 내용이 길어지면 본문이 스크롤되지 않고 푸터가 레이어 밖으로 밀려납니다.`)],-1),o[4]||=i(`p`,null,`짧은 예시 문구로는 드러나지 않다가, 약관처럼 긴 내용이 연결된 뒤 작은 화면의 QA에서 이런 형태로 돌아옵니다.`,-1),s(u,{title:`약관 동의 레이어: 내용이 길면 '확인' 버튼이 보이지 않음`,env:`모바일 브라우저 · 360×640 화면, 약관 전문 표시`,expected:`헤더와 '확인' 버튼은 고정되고 약관 본문만 스크롤됨`,actual:`본문이 스크롤되지 않고 '확인' 버튼이 화면 아래로 밀려 누를 수 없음`},{default:r(()=>[...o[0]||=[i(`ol`,null,[i(`li`,null,`360×640 화면에서 회원가입을 시작합니다.`),i(`li`,null,`'서비스 이용약관 전문 보기’를 누릅니다.`),i(`li`,null,`레이어 하단의 ‘확인’ 버튼을 찾습니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...o[1]||=[i(`p`,null,[c(`스크롤 영역을 감싼 `),i(`strong`,null,`중첩된 flex item`),c(`에 `),i(`code`,null,`min-height: 0`),c(`을 적용하세요.`)],-1)]]),_:1})]),i(`section`,k,[o[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),o[6]||=i(`p`,null,`레이어 높이와 본문 문단 수를 바꾸면서 푸터의 위치와 스크롤 여부를 비교해 보세요.`,-1),s(E)]),i(`section`,A,[o[8]||=f(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>세로 방향 Flex에서 항목의 기본 <code>min-height: auto</code>는 내용 높이만큼의 자동 최소 높이를 적용할 수 있습니다. 그래서 본문을 감싼 <code>.demo-scroll-main</code>이 내용보다 작아지지 않고, 그만큼 푸터가 밀려납니다.</p><p><code>overflow</code>가 <code>visible</code>이 아닌 항목은 자동 최소 높이가 0이 됩니다. 그래서 <code>.demo-scroll-body</code>처럼 스크롤 영역이 컨테이너의 <strong>직접 자식</strong>이면 <code>overflow-y: auto</code>만으로도 동작합니다. 실무에서는 탭·폼 등으로 본문을 한 번 더 감싸는 경우가 많고, 이때 <strong>중간 항목</strong>에 <code>min-height: 0</code>이 필요합니다.</p>`,3),s(p,null,{default:r(()=>[...o[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`컨테이너 높이를 확정하고`),c(),i(`code`,null,`height`)]),i(`li`,null,[i(`strong`,null,`중첩 항목이 줄어들게`),c(),i(`code`,null,`min-height: 0`)]),i(`li`,null,[i(`strong`,null,`본문만 스크롤`),c(),i(`code`,null,`overflow-y: auto`)])],-1)]]),_:1})]),i(`section`,j,[o[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),o[11]||=i(`p`,null,[c(`본문이 스크롤되지 않을 때는 스크롤 영역보다 `),i(`strong`,null,`그 영역을 감싼 항목이 줄어드는지`),c(`부터 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),s(m,null,{default:r(()=>[...o[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`레이어 높이 확인`),c(` Elements 패널에서 `),i(`code`,null,`.demo-scroll-panel`),c(`을 선택하고 Styles 탭에 `),i(`code`,null,`height`),c(`나 `),i(`code`,null,`max-height`),c(` 선언이 있는지 봅니다. 높이가 정해져 있지 않으면 레이어 전체가 내용만큼 늘어납니다.`)]),i(`li`,null,[i(`strong`,null,`flex 배지로 항목 경계 표시`),c(` 레이어 옆의 `),i(`code`,null,`flex`),c(` 배지를 누르면 항목 경계가 표시됩니다. `),i(`code`,null,`.demo-scroll-main`),c(`의 경계가 레이어 아래로 넘어가 있다면 줄어들지 못한 것입니다.`)]),i(`li`,null,[i(`strong`,null,`부모를 거슬러 최소 높이 확인`),i(`code`,null,`.demo-scroll-body`),c(`부터 레이어까지 부모를 하나씩 선택합니다. Computed 탭에서 `),i(`code`,null,`Show all`),c(`을 켜고 `),i(`code`,null,`min-height`),c(`와 `),i(`code`,null,`overflow`),c(`를 검색해, `),i(`code`,null,`auto`),c(`와 `),i(`code`,null,`visible`),c(`이 함께 있는 항목을 찾습니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 바로 시험`),c(` 찾은 항목(예제에서는 `),i(`code`,null,`.demo-scroll-main`),c(`)에 `),i(`code`,null,`min-height: 0`),c(`을 추가해 봅니다. 푸터가 레이어 안으로 돌아오고 본문에 스크롤이 생기면 원인이 확정됩니다.`)])],-1)]]),_:1})]),i(`section`,M,[o[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),o[13]||=i(`p`,null,[c(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),i(`code`,null,`.demo-scroll-main`),c(`의 `),i(`code`,null,`min-height: 0`),c(`과 `),i(`code`,null,`.demo-scroll-body`),c(`의 `),i(`code`,null,`overflow-y: auto`),c(`를 확인하세요.`)],-1),s(h,{tabs:t(x)},null,8,[`tabs`]),o[14]||=f(`<p>Grid로 같은 배치를 만들 때는 본문 행을 <code>minmax(0, 1fr)</code>로 지정합니다. <code>1fr</code>만 쓰면 행의 최소 크기가 내용 높이(auto)가 되어 같은 문제가 생깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.panel</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-rows</span>: auto <span class="hljs-built_in">minmax</span>(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>fr) auto;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">260px</span>;
}
</code></pre>`,2)]),o[17]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 원인(자동 최소 크기)이 방향이나 높이 지정 방식만 바뀌어 다시 나타납니다. 함께 헷갈리는 스크롤 문제도 확인하세요.</p><h3>가로 스크롤 영역</h3><p>탭 메뉴나 칩 목록을 가로로 스크롤할 때도 같습니다. 가로 Flex에서는 스크롤 영역을 감싼 항목에 <code>min-width: 0</code>이 필요합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.toolbar</span> { <span class="hljs-attribute">display</span>: flex; }
<span class="hljs-selector-class">.toolbar-tabs</span> { <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>; <span class="hljs-attribute">min-width</span>: <span class="hljs-number">0</span>; } <span class="hljs-comment">/* 감싼 flex item */</span>
<span class="hljs-selector-class">.toolbar-tabs-inner</span> {
  <span class="hljs-attribute">overflow-x</span>: auto;
  <span class="hljs-attribute">white-space</span>: nowrap;
}
</code></pre><h3>높이를 max-height로 정할 때</h3><p>내용이 짧으면 레이어도 작아야 할 때는 <code>height</code> 대신 <code>max-height</code>를 씁니다. 본문 항목은 기본 <code>flex-shrink: 1</code>로 줄어들므로, 최소 높이만 풀어 주면 됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.modal</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">80vh</span>; <span class="hljs-comment">/* dvh를 모르는 브라우저용 */</span>
  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">80</span>dvh; <span class="hljs-comment">/* 짧으면 내용만큼, 길면 80dvh까지 */</span>
}
<span class="hljs-selector-class">.modal-body</span> {
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">overflow-y</span>: auto;
}
</code></pre><h3>뒤 페이지까지 함께 스크롤될 때</h3><p>본문 끝까지 스크롤한 뒤 계속 스크롤하면 뒤 페이지가 움직일 수 있습니다. <code>overscroll-behavior: contain</code>으로 스크롤이 이어지지 않게 합니다. 배경 스크롤 자체를 막으려면 별도의 잠금 처리가 필요합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.demo-scroll-body</span> {
  <span class="hljs-attribute">overflow-y</span>: auto;
  <span class="hljs-attribute">overscroll-behavior</span>: contain; <span class="hljs-comment">/* 끝에 닿아도 뒤 페이지로 넘기지 않음 */</span>
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>컨테이너 높이가 정해져야 합니다.</strong> <code>height</code>나 <code>max-height</code>가 없으면 줄어들 기준이 없어 레이어 전체가 늘어납니다.</li><li><strong>스크롤 영역까지 이어지는 모든 flex item을 확인합니다.</strong> 중첩이 여러 단계면 각 단계마다 <code>min-height: 0</code>(또는 <code>overflow</code> 지정)이 필요합니다.</li><li><strong>모바일 전체 높이는 <code>100dvh</code>를 사용합니다.</strong> <code>100vh</code>는 주소창 높이를 포함해 하단 버튼이 가려질 수 있습니다.</li><li><strong>키보드로도 스크롤할 수 있어야 합니다.</strong> 스크롤 영역에 포커스할 수 있는 요소가 없다면 <code>tabindex=&quot;0&quot;</code>과 <code>aria-label</code>을 지정하세요.</li></ul></section>`,2),i(`section`,N,[o[16]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(g,null,{default:r(()=>[...o[15]||=[i(`p`,null,`위 예제에서 레이어 높이를 200px로, 본문 문단 수를 6개로 바꿔보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태에서 ‘확인’ 버튼이 레이어 안에 남아 있다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태의 본문만 스크롤된다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문단을 1개로 줄이면 스크롤이 사라진다.`)])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};