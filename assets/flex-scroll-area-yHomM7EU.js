import{$ as e,A as t,C as n,L as r,P as i,T as a,a as o,c as s,d as c,et as l,f as u,i as d,j as f,o as p,t as m,u as h,x as g}from"./runtime-core.esm-bundler-_PXz1bcR.js";import{o as _}from"./index-Cm6OyzZD.js";import{t as v}from"./DemoCompare-C7skMkLc.js";var y=`.demo-scroll-panel {
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
</div>`}],S={for:`demo-scroll-height`},C={for:`demo-scroll-count`},w={class:`demo-scroll-main`},T=[`tabindex`,`aria-label`],E={__name:`FlexScrollAreaDemo`,setup(r){let a=i(260),u=i(5),h=d(()=>b.slice(0,u.value));return(r,i)=>(g(),p(v,{problem:{code:`min-height: auto`,note:`본문이 늘어나면 푸터가 레이어 밖으로 밀려납니다.`},solved:{code:`min-height: 0`,note:`헤더와 푸터는 고정되고 본문만 스크롤됩니다.`}},{controls:t(()=>[o(`label`,S,[i[2]||=c(`레이어 높이 `,-1),o(`strong`,null,l(a.value)+`px`,1)]),f(o(`input`,{id:`demo-scroll-height`,"onUpdate:modelValue":i[0]||=e=>a.value=e,type:`range`,min:`200`,max:`360`,step:`20`},null,512),[[_,a.value,void 0,{number:!0}]]),o(`label`,C,[i[3]||=c(`본문 문단 수 `,-1),o(`strong`,null,l(u.value)+`개`,1)]),f(o(`input`,{id:`demo-scroll-count`,"onUpdate:modelValue":i[1]||=e=>u.value=e,type:`range`,min:`1`,max:`6`,step:`1`},null,512),[[_,u.value,void 0,{number:!0}]])]),default:t(({solved:t})=>[o(`div`,{class:`demo-scroll-panel`,style:e({height:a.value+`px`})},[i[4]||=o(`div`,{class:`demo-scroll-head`},`레이어 제목`,-1),o(`div`,w,[o(`div`,{class:`demo-scroll-body`,tabindex:t?0:void 0,"aria-label":t?`해결 상태 레이어 본문`:void 0},[(g(!0),s(m,null,n(h.value,e=>(g(),s(`p`,{key:e},l(e),1))),128))],8,T)]),i[5]||=o(`div`,{class:`demo-scroll-foot`},[o(`button`,{type:`button`,class:`demo-scroll-button`,tabindex:`-1`},`확인`)],-1)],4)]),caption:t(()=>[...i[6]||=[c(` 해결 상태의 본문은 Tab으로 이동한 뒤 방향키로 스크롤할 수 있습니다. ‘확인’ 버튼은 배치 확인용이며 동작하지 않습니다. `,-1)]]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`flex-scroll-area`,P=3,F=`헤더·푸터 사이 본문만 스크롤하기`,I=`본문 영역 스크롤`,L=`높이가 정해진 레이어에서 본문이 길어질 때, 중첩된 flex item의 최소 높이를 풀어 본문만 스크롤되게 합니다.`,R=`본문이 길어지면 푸터가 레이어 밖으로 밀려난다면?
스크롤 영역보다 먼저, 그 영역을 감싼 항목의 최소 높이를 확인하세요.
`,z=`CSS`,B=`CSS · 레이아웃`,V=`스크롤`,H=[`Flex`,`스크롤`,`min-height`,`overflow`,`모달`,`레이어`],U=`기초`,W=`약 7분`,G=[`flex item`,`overflow`,`높이`],K=`min-height: 0`,q=`published`,J=`2026-11-02`,Y=[`flex-ellipsis`,`fixed-transform`],X=[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`},{title:`MDN — min-height`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/min-height`}],Z={__name:`flex-scroll-area`,setup(e,{expose:n}){return n({frontmatter:{id:`flex-scroll-area`,order:3,title:`헤더·푸터 사이 본문만 스크롤하기`,navTitle:`본문 영역 스크롤`,summary:`높이가 정해진 레이어에서 본문이 길어질 때, 중첩된 flex item의 최소 높이를 풀어 본문만 스크롤되게 합니다.`,lead:`본문이 길어지면 푸터가 레이어 밖으로 밀려난다면?
스크롤 영역보다 먼저, 그 영역을 감싼 항목의 최소 높이를 확인하세요.
`,category:`CSS`,group:`CSS · 레이아웃`,topic:`스크롤`,tags:[`Flex`,`스크롤`,`min-height`,`overflow`,`모달`,`레이어`],level:`기초`,duration:`약 7분`,prerequisites:[`flex item`,`overflow`,`높이`],keyProperty:`min-height: 0`,status:`published`,updated:`2026-11-02`,related:[`flex-ellipsis`,`fixed-transform`],references:[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`},{title:`MDN — min-height`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/min-height`}]}}),(e,n)=>{let i=a(`DocTakeaway`),l=a(`DocSteps`),d=a(`CodePanel`),f=a(`DocPractice`);return g(),s(`div`,D,[o(`section`,O,[n[1]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),n[2]||=o(`p`,null,[c(`높이가 정해진 레이어(모달, 사이드 패널)에 헤더·본문·푸터를 세로로 배치했습니다. 본문에 `),o(`code`,null,`overflow-y: auto`),c(`도 넣었는데, 내용이 길어지면 본문이 스크롤되지 않고 푸터가 레이어 밖으로 밀려납니다.`)],-1),u(i,null,{default:t(()=>[...n[0]||=[o(`p`,null,[c(`스크롤 영역을 감싼 `),o(`strong`,null,`중첩된 flex item`),c(`에 `),o(`code`,null,`min-height: 0`),c(`을 적용하세요.`)],-1)]]),_:1})]),o(`section`,k,[n[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),n[4]||=o(`p`,null,`레이어 높이와 본문 문단 수를 바꾸면서 푸터의 위치와 스크롤 여부를 비교해 보세요.`,-1),u(E)]),o(`section`,A,[n[6]||=h(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>세로 방향 Flex에서 항목의 기본 <code>min-height: auto</code>는 내용 높이만큼의 자동 최소 높이를 적용할 수 있습니다. 그래서 본문을 감싼 <code>.demo-scroll-main</code>이 내용보다 작아지지 않고, 그만큼 푸터가 밀려납니다.</p><p><code>overflow</code>가 <code>visible</code>이 아닌 항목은 자동 최소 높이가 0이 됩니다. 그래서 <code>.demo-scroll-body</code>처럼 스크롤 영역이 컨테이너의 <strong>직접 자식</strong>이면 <code>overflow-y: auto</code>만으로도 동작합니다. 실무에서는 탭·폼 등으로 본문을 한 번 더 감싸는 경우가 많고, 이때 <strong>중간 항목</strong>에 <code>min-height: 0</code>이 필요합니다.</p>`,3),u(l,null,{default:t(()=>[...n[5]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`컨테이너 높이를 확정하고`),c(),o(`code`,null,`height`)]),o(`li`,null,[o(`strong`,null,`중첩 항목이 줄어들게`),c(),o(`code`,null,`min-height: 0`)]),o(`li`,null,[o(`strong`,null,`본문만 스크롤`),c(),o(`code`,null,`overflow-y: auto`)])],-1)]]),_:1})]),o(`section`,j,[n[7]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),c(` 해결 코드`)],-1),n[8]||=o(`p`,null,[c(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),o(`code`,null,`.demo-scroll-main`),c(`의 `),o(`code`,null,`min-height: 0`),c(`과 `),o(`code`,null,`.demo-scroll-body`),c(`의 `),o(`code`,null,`overflow-y: auto`),c(`를 확인하세요.`)],-1),u(d,{tabs:r(x)},null,8,[`tabs`]),n[9]||=h(`<p>Grid로 같은 배치를 만들 때는 본문 행을 <code>minmax(0, 1fr)</code>로 지정합니다. <code>1fr</code>만 쓰면 행의 최소 크기가 내용 높이(auto)가 되어 같은 문제가 생깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.panel</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-rows</span>: auto <span class="hljs-built_in">minmax</span>(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>fr) auto;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">260px</span>;
}
</code></pre>`,2)]),n[12]||=h(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>컨테이너 높이가 정해져야 합니다.</strong> <code>height</code>나 <code>max-height</code>가 없으면 줄어들 기준이 없어 레이어 전체가 늘어납니다.</li><li><strong>스크롤 영역까지 이어지는 모든 flex item을 확인합니다.</strong> 중첩이 여러 단계면 각 단계마다 <code>min-height: 0</code>(또는 <code>overflow</code> 지정)이 필요합니다.</li><li><strong>모바일 전체 높이는 <code>100dvh</code>를 사용합니다.</strong> <code>100vh</code>는 주소창 높이를 포함해 하단 버튼이 가려질 수 있습니다.</li><li><strong>키보드로도 스크롤할 수 있어야 합니다.</strong> 스크롤 영역에 포커스할 수 있는 요소가 없다면 <code>tabindex=&quot;0&quot;</code>과 <code>aria-label</code>을 지정하세요.</li></ul></section>`,1),o(`section`,M,[n[11]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),c(` 짧은 실습`)],-1),u(f,null,{default:t(()=>[...n[10]||=[o(`p`,null,`위 예제에서 레이어 높이를 200px로, 본문 문단 수를 6개로 바꿔보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태에서 ‘확인’ 버튼이 레이어 안에 남아 있다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태의 본문만 스크롤된다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`문단을 1개로 줄이면 스크롤이 사라진다.`)])])],-1)]]),_:1})])])}}};export{z as category,Z as default,W as duration,B as group,N as id,K as keyProperty,R as lead,U as level,I as navTitle,P as order,G as prerequisites,X as references,Y as related,q as status,L as summary,H as tags,F as title,V as topic,J as updated};