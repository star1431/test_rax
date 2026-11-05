import{E as e,F as t,H as n,I as r,O as i,at as a,c as o,f as s,m as c,o as l,ot as u,p as d,r as f,s as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{d as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y=`.demo-scroll-panel {
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
</div>`}],S={for:`demo-scroll-height`},C={for:`demo-scroll-count`},w={class:`demo-scroll-main`},T=[`tabindex`,`aria-label`],E={__name:`FlexScrollAreaDemo`,setup(n){let i=g(260),s=g(5),c=l(()=>b.slice(0,s.value));return(n,l)=>(h(),o(v,{problem:{code:`min-height: auto`,note:`본문이 늘어나면 푸터가 레이어 밖으로 밀려납니다.`},solved:{code:`min-height: 0`,note:`헤더와 푸터는 고정되고 본문만 스크롤됩니다.`}},{controls:t(()=>[p(`label`,S,[l[2]||=d(`레이어 높이 `,-1),p(`strong`,null,u(i.value)+`px`,1)]),r(p(`input`,{id:`demo-scroll-height`,"onUpdate:modelValue":l[0]||=e=>i.value=e,type:`range`,min:`200`,max:`360`,step:`20`},null,512),[[_,i.value,void 0,{number:!0}]]),p(`label`,C,[l[3]||=d(`본문 문단 수 `,-1),p(`strong`,null,u(s.value)+`개`,1)]),r(p(`input`,{id:`demo-scroll-count`,"onUpdate:modelValue":l[1]||=e=>s.value=e,type:`range`,min:`1`,max:`6`,step:`1`},null,512),[[_,s.value,void 0,{number:!0}]])]),default:t(({solved:t})=>[p(`div`,{class:`demo-scroll-panel`,style:a({height:i.value+`px`})},[l[4]||=p(`div`,{class:`demo-scroll-head`},`레이어 제목`,-1),p(`div`,w,[p(`div`,{class:`demo-scroll-body`,tabindex:t?0:void 0,"aria-label":t?`해결 상태 레이어 본문`:void 0},[(h(!0),m(f,null,e(c.value,e=>(h(),m(`p`,{key:e},u(e),1))),128))],8,T)]),l[5]||=p(`div`,{class:`demo-scroll-foot`},[p(`button`,{type:`button`,class:`demo-scroll-button`,tabindex:`-1`},`확인`)],-1)],4)]),caption:t(()=>[...l[6]||=[d(` 해결 상태의 본문은 Tab으로 이동한 뒤 방향키로 스크롤할 수 있습니다. ‘확인’ 버튼은 배치 확인용이며 동작하지 않습니다. `,-1)]]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`flex-scroll-area`,P=3,F=`헤더·푸터 사이 본문만 스크롤하기`,I=`본문 영역 스크롤`,L=`높이가 정해진 레이어에서 본문이 길어질 때, 중첩된 flex item의 최소 높이를 풀어 본문만 스크롤되게 합니다.`,R=`본문이 길어지면 푸터가 레이어 밖으로 밀려난다면?
스크롤 영역보다 먼저, 그 영역을 감싼 항목의 최소 높이를 확인하세요.
`,z=`레이아웃`,B=`스크롤`,V=[`Flex`,`스크롤`,`min-height`,`overflow`,`모달`,`레이어`],H=`기초`,U=`약 7분`,W=[`flex item`,`overflow`,`높이`],G=`min-height: 0`,K=`published`,q=`2026-11-02`,J=[`flex-ellipsis`,`fixed-transform`],Y=[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`},{title:`MDN — min-height`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/min-height`}],X={__name:`flex-scroll-area`,setup(e,{expose:r}){return r({frontmatter:{id:`flex-scroll-area`,order:3,title:`헤더·푸터 사이 본문만 스크롤하기`,navTitle:`본문 영역 스크롤`,summary:`높이가 정해진 레이어에서 본문이 길어질 때, 중첩된 flex item의 최소 높이를 풀어 본문만 스크롤되게 합니다.`,lead:`본문이 길어지면 푸터가 레이어 밖으로 밀려난다면?
스크롤 영역보다 먼저, 그 영역을 감싼 항목의 최소 높이를 확인하세요.
`,group:`레이아웃`,topic:`스크롤`,tags:[`Flex`,`스크롤`,`min-height`,`overflow`,`모달`,`레이어`],level:`기초`,duration:`약 7분`,prerequisites:[`flex item`,`overflow`,`높이`],keyProperty:`min-height: 0`,status:`published`,updated:`2026-11-02`,related:[`flex-ellipsis`,`fixed-transform`],references:[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`},{title:`MDN — min-height`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/min-height`}]}}),(e,r)=>{let a=i(`DocTakeaway`),o=i(`DocSteps`),l=i(`CodePanel`),u=i(`DocPractice`);return h(),m(`div`,D,[p(`section`,O,[r[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[2]||=p(`p`,null,[d(`높이가 정해진 레이어(모달, 사이드 패널)에 헤더·본문·푸터를 세로로 배치했습니다. 본문에 `),p(`code`,null,`overflow-y: auto`),d(`도 넣었는데, 내용이 길어지면 본문이 스크롤되지 않고 푸터가 레이어 밖으로 밀려납니다.`)],-1),c(a,null,{default:t(()=>[...r[0]||=[p(`p`,null,[d(`스크롤 영역을 감싼 `),p(`strong`,null,`중첩된 flex item`),d(`에 `),p(`code`,null,`min-height: 0`),d(`을 적용하세요.`)],-1)]]),_:1})]),p(`section`,k,[r[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=p(`p`,null,`레이어 높이와 본문 문단 수를 바꾸면서 푸터의 위치와 스크롤 여부를 비교해 보세요.`,-1),c(E)]),p(`section`,A,[r[6]||=s(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>세로 방향 Flex에서 항목의 기본 <code>min-height: auto</code>는 내용 높이만큼의 자동 최소 높이를 적용할 수 있습니다. 그래서 본문을 감싼 <code>.demo-scroll-main</code>이 내용보다 작아지지 않고, 그만큼 푸터가 밀려납니다.</p><p><code>overflow</code>가 <code>visible</code>이 아닌 항목은 자동 최소 높이가 0이 됩니다. 그래서 <code>.demo-scroll-body</code>처럼 스크롤 영역이 컨테이너의 <strong>직접 자식</strong>이면 <code>overflow-y: auto</code>만으로도 동작합니다. 실무에서는 탭·폼 등으로 본문을 한 번 더 감싸는 경우가 많고, 이때 <strong>중간 항목</strong>에 <code>min-height: 0</code>이 필요합니다.</p>`,3),c(o,null,{default:t(()=>[...r[5]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`컨테이너 높이를 확정하고`),d(),p(`code`,null,`height`)]),p(`li`,null,[p(`strong`,null,`중첩 항목이 줄어들게`),d(),p(`code`,null,`min-height: 0`)]),p(`li`,null,[p(`strong`,null,`본문만 스크롤`),d(),p(`code`,null,`overflow-y: auto`)])],-1)]]),_:1})]),p(`section`,j,[r[7]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 해결 코드`)],-1),r[8]||=p(`p`,null,[d(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),p(`code`,null,`.demo-scroll-main`),d(`의 `),p(`code`,null,`min-height: 0`),d(`과 `),p(`code`,null,`.demo-scroll-body`),d(`의 `),p(`code`,null,`overflow-y: auto`),d(`를 확인하세요.`)],-1),c(l,{tabs:n(x)},null,8,[`tabs`]),r[9]||=s(`<p>Grid로 같은 배치를 만들 때는 본문 행을 <code>minmax(0, 1fr)</code>로 지정합니다. <code>1fr</code>만 쓰면 행의 최소 크기가 내용 높이(auto)가 되어 같은 문제가 생깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.panel</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-rows</span>: auto <span class="hljs-built_in">minmax</span>(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>fr) auto;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">260px</span>;
}
</code></pre>`,2)]),r[12]||=s(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>컨테이너 높이가 정해져야 합니다.</strong> <code>height</code>나 <code>max-height</code>가 없으면 줄어들 기준이 없어 레이어 전체가 늘어납니다.</li><li><strong>스크롤 영역까지 이어지는 모든 flex item을 확인합니다.</strong> 중첩이 여러 단계면 각 단계마다 <code>min-height: 0</code>(또는 <code>overflow</code> 지정)이 필요합니다.</li><li><strong>모바일 전체 높이는 <code>100dvh</code>를 사용합니다.</strong> <code>100vh</code>는 주소창 높이를 포함해 하단 버튼이 가려질 수 있습니다.</li><li><strong>키보드로도 스크롤할 수 있어야 합니다.</strong> 스크롤 영역에 포커스할 수 있는 요소가 없다면 <code>tabindex=&quot;0&quot;</code>과 <code>aria-label</code>을 지정하세요.</li></ul></section>`,1),p(`section`,M,[r[11]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),d(` 짧은 실습`)],-1),c(u,null,{default:t(()=>[...r[10]||=[p(`p`,null,`위 예제에서 레이어 높이를 200px로, 본문 문단 수를 6개로 바꿔보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`해결 상태에서 ‘확인’ 버튼이 레이어 안에 남아 있다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`해결 상태의 본문만 스크롤된다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문단을 1개로 줄이면 스크롤이 사라진다.`)])])],-1)]]),_:1})])])}}};export{X as default,U as duration,z as group,N as id,G as keyProperty,R as lead,H as level,I as navTitle,P as order,W as prerequisites,Y as references,J as related,K as status,L as summary,V as tags,F as title,B as topic,q as updated};