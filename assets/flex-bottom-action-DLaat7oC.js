import{D as e,G as t,H as n,R as r,c as i,d as a,ft as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as _}from"./index-Dxflp_jg.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=`.demo-action-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.demo-action-card {
  display: flex;
  flex-direction: column;
  min-height: 240px;
  padding: 12px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-action-title {
  margin-bottom: 6px;
}
.demo-action-card p {
  margin: 0 0 6px;
}
.demo-action-area {
  margin-top: auto; /* 남는 세로 공간을 위쪽 여백으로 흡수합니다. */
  padding-top: 12px; /* 공간이 없어도 본문과의 최소 간격을 확보합니다. */
}
.demo-action-button {
  width: 100%;
  padding: 6px 0;
  border: 1px solid #315bc2;
  border-radius: 4px;
  background: #eaf0ff;
  color: #315bc2;
  font-size: 12px;
}
/* 비교를 위한 문제 상태: 자동 여백을 제거합니다. */
.is-problem .demo-action-area { margin-top: 0; }
`,b=[`세로 Flex의 남는 공간을 확인하는 카드입니다.`,`설명이 늘어나면 카드 안의 본문 영역도 함께 길어집니다.`,`자동 여백은 남는 공간이 있을 때만 늘어납니다.`,`공간이 모자라면 버튼 영역은 본문 바로 다음에 이어집니다.`],x=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<article class="demo-action-card">
  <strong class="demo-action-title">카드 제목</strong>
  <p>카드 설명입니다.</p>
  <div class="demo-action-area">
    <button type="button" class="demo-action-button">자세히 보기</button>
  </div>
</article>`}],S={for:`demo-count`},C={for:`demo-height`},w={class:`demo-action-cards`},T={class:`demo-action-title`},E={__name:`FlexBottomActionDemo`,setup(t){let s=n(3),l=n(240),f=h(()=>[{title:`짧은 카드`,texts:b.slice(0,1)},{title:`긴 카드`,texts:b.slice(0,s.value)}]);return(t,n)=>(e(),d(v,{problem:{code:`margin-top: 0`,note:`버튼 위치가 설명 길이를 따라 달라집니다.`},solved:{code:`margin-top: auto`,note:`버튼 영역이 카드 하단에 맞춰집니다.`}},{controls:r(()=>[i(`label`,S,[n[2]||=c(`긴 카드 문단 수 `,-1),i(`strong`,null,p(s.value)+`개`,1)]),g(i(`input`,{id:`demo-count`,"onUpdate:modelValue":n[0]||=e=>s.value=e,type:`range`,min:`1`,max:`4`,step:`1`},null,512),[[_,s.value,void 0,{number:!0}]]),i(`label`,C,[n[3]||=c(`카드 최소 높이 `,-1),i(`strong`,null,p(l.value)+`px`,1)]),g(i(`input`,{id:`demo-height`,"onUpdate:modelValue":n[1]||=e=>l.value=e,type:`range`,min:`160`,max:`320`,step:`20`},null,512),[[_,l.value,void 0,{number:!0}]])]),caption:r(()=>[...n[5]||=[c(` 예제의 ‘자세히 보기’ 버튼은 배치 확인용이며 동작하지 않습니다. `,-1)]]),default:r(()=>[i(`div`,w,[(e(!0),a(m,null,u(f.value,t=>(e(),a(`article`,{key:t.title,class:`demo-action-card`,style:o({minHeight:l.value+`px`})},[i(`strong`,T,p(t.title),1),(e(!0),a(m,null,u(t.texts,t=>(e(),a(`p`,{key:t},p(t),1))),128)),n[4]||=i(`div`,{class:`demo-action-area`},[i(`button`,{type:`button`,class:`demo-action-button`,tabindex:`-1`},`자세히 보기`)],-1)],4))),128))])]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-4`},N={id:`section-7`},P=`flex-bottom-action`,F=2,I=`내용 길이가 달라도 버튼을 하단에 배치하기`,L=`버튼 하단 배치`,R=`세로 Flex에서 버튼 영역에 margin-top auto를 적용해 남는 공간을 흡수하고, 카드마다 버튼을 하단에 맞춥니다.`,z=`카드마다 버튼 높이가 제각각이라면?
버튼을 밀어내는 대신, 버튼 앞의 남는 공간을 자동 여백으로 채우세요.
`,B=`레이아웃`,V=`Flexbox`,H=[`Flex`,`margin`,`auto`,`카드`],U=`기초`,W=`약 10분`,G=[`주축`,`margin`],K=`margin-top: auto`,q=`published`,J=`2026-11-13`,Y=[`flex-ellipsis`],X=[{title:`CSS Flexbox — Aligning with auto margins`,url:`https://www.w3.org/TR/css-flexbox-1/#auto-margins`}],Z={__name:`flex-bottom-action`,setup(n,{expose:o}){return o({frontmatter:{id:`flex-bottom-action`,order:2,title:`내용 길이가 달라도 버튼을 하단에 배치하기`,navTitle:`버튼 하단 배치`,summary:`세로 Flex에서 버튼 영역에 margin-top auto를 적용해 남는 공간을 흡수하고, 카드마다 버튼을 하단에 맞춥니다.`,lead:`카드마다 버튼 높이가 제각각이라면?
버튼을 밀어내는 대신, 버튼 앞의 남는 공간을 자동 여백으로 채우세요.
`,group:`레이아웃`,topic:`Flexbox`,tags:[`Flex`,`margin`,`auto`,`카드`],level:`기초`,duration:`약 10분`,prerequisites:[`주축`,`margin`],keyProperty:`margin-top: auto`,status:`published`,updated:`2026-11-13`,related:[`flex-ellipsis`],references:[{title:`CSS Flexbox — Aligning with auto margins`,url:`https://www.w3.org/TR/css-flexbox-1/#auto-margins`}]}}),(n,o)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`DocPractice`);return e(),a(`div`,D,[i(`section`,O,[o[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),o[3]||=i(`p`,null,`같은 행에 놓인 카드들의 설명 분량이 달라, 카드 안의 버튼 높이가 제각각입니다. 설명은 위에 두고 버튼 영역만 카드 하단에 맞추고 싶습니다.`,-1),o[4]||=i(`p`,null,`시안은 같은 길이의 문구로 그려져 있어 지나치기 쉽고, 운영 데이터가 들어온 뒤 QA에서 이런 형태로 돌아옵니다.`,-1),s(u,{title:`이벤트 목록: 카드마다 '자세히 보기' 버튼 높이가 다름`,env:`전체 브라우저 · PC 2열 카드 목록`,expected:`같은 행 카드의 버튼이 카드 하단에 나란히 정렬됨`,actual:`설명이 짧은 카드의 버튼이 위로 올라가 높이가 어긋남`},{default:r(()=>[...o[0]||=[i(`ol`,null,[i(`li`,null,`설명이 한 줄인 이벤트와 네 줄 이상인 이벤트를 나란히 등록합니다.`),i(`li`,null,`PC 화면에서 이벤트 목록을 엽니다.`),i(`li`,null,`같은 행에 놓인 두 카드의 버튼 위치를 비교합니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...o[1]||=[i(`p`,null,[c(`카드를 `),i(`strong`,null,`세로 Flex`),c(`로 만들고, 버튼 영역에 `),i(`code`,null,`margin-top: auto`),c(`를 적용하세요.`)],-1)]]),_:1})]),i(`section`,k,[o[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),o[6]||=i(`p`,null,`긴 카드의 문단 수와 카드 최소 높이를 바꾸면서 버튼 위치를 비교해 보세요.`,-1),s(E)]),i(`section`,A,[o[8]||=i(`h2`,null,[i(`span`,{class:`section-no`},`03`),c(` 왜 이런 일이 생길까요?`)],-1),o[9]||=i(`p`,null,`블록 흐름에서 버튼은 설명 바로 다음에 놓입니다. 카드 높이가 같아도 남는 공간은 마지막 요소 아래에 생기므로, 설명이 짧은 카드일수록 버튼이 위로 올라갑니다.`,-1),o[10]||=i(`p`,null,[c(`세로 방향 Flex에서는 주축이 세로입니다. 주축 방향의 `),i(`code`,null,`auto`),c(` 여백은 남는 공간을 모두 흡수하므로, 버튼 영역 위쪽 여백이 늘어나 버튼이 하단으로 이동합니다.`)],-1),s(p,null,{default:r(()=>[...o[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`카드를 세로 Flex로`),c(),i(`code`,null,`flex-direction: column`)]),i(`li`,null,[i(`strong`,null,`남는 공간을 확보하고`),c(),i(`code`,null,`min-height`)]),i(`li`,null,[i(`strong`,null,`버튼 앞 여백이 흡수`),c(),i(`code`,null,`margin-top: auto`)])],-1)]]),_:1})]),i(`section`,j,[o[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),o[13]||=i(`p`,null,[c(`버튼이 하단에 붙지 않을 때는 `),i(`strong`,null,`버튼 영역 위에 남는 공간이 있는지`),c(`와 그 공간이 어디로 가는지부터 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),s(m,null,{default:r(()=>[...o[11]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 카드 선택`),i(`code`,null,`.demo-action-card`),c(`를 선택하고 옆에 `),i(`code`,null,`flex`),c(` 배지가 있는지 봅니다. 배지가 없으면 카드가 Flex 컨테이너가 아니어서 위쪽 `),i(`code`,null,`auto`),c(` 여백이 0으로 계산됩니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 방향 확인`),i(`code`,null,`flex-direction`),c(`이 `),i(`code`,null,`column`),c(`인지 확인합니다. `),i(`code`,null,`display: flex`),c(` 옆의 Flexbox 편집기 아이콘을 누르면 방향을 바로 바꿔 볼 수 있습니다.`)]),i(`li`,null,[i(`strong`,null,`버튼 영역의 여백 확인`),i(`code`,null,`.demo-action-area`),c(`에 마우스를 올리면 margin 영역이 주황색으로 표시됩니다. Computed 탭의 상자 모델에서 위쪽 margin이 0이면 자동 여백이 없거나 남는 공간이 없는 것입니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 바로 시험`),i(`code`,null,`.demo-action-area`),c(`에 `),i(`code`,null,`margin-top: auto`),c(`를 추가해 봅니다. 버튼이 내려가지 않는다면 카드 높이가 내용 높이와 같은지 확인합니다.`)])],-1)]]),_:1})]),i(`section`,M,[o[14]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),o[15]||=i(`p`,null,[c(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),i(`code`,null,`.demo-action-area`),c(`의 자동 여백과 최소 간격을 확인하세요.`)],-1),s(h,{tabs:t(x)},null,8,[`tabs`])]),o[18]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>주축 방향의 <code>auto</code> 여백이 남는 공간을 흡수하는 원리는 다른 배치에도 그대로 쓰입니다. 자주 헷갈리는 경우와 함께 확인하세요.</p><h3>space-between과의 차이</h3><p><code>justify-content: space-between</code>은 모든 항목 사이를 벌립니다. 항목이 셋 이상이면 설명 문단까지 가운데로 흩어집니다. 특정 항목 앞에만 공간을 넣으려면 그 항목에 자동 여백을 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">/* 제목·설명·버튼 사이가 모두 벌어짐 */</span>
<span class="hljs-selector-class">.card</span> { <span class="hljs-attribute">display</span>: flex; <span class="hljs-attribute">flex-direction</span>: column; <span class="hljs-attribute">justify-content</span>: space-between; }

<span class="hljs-comment">/* 버튼 앞에만 공간이 생김 */</span>
<span class="hljs-selector-class">.card-action</span> { <span class="hljs-attribute">margin-top</span>: auto; }
</code></pre><h3>가로 방향에서 마지막 항목만 오른쪽으로</h3><p>가로 Flex에서는 <code>margin-left: auto</code>가 같은 역할을 합니다. 헤더의 유틸 메뉴를 오른쪽 끝으로 보낼 때 자주 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.header</span> { <span class="hljs-attribute">display</span>: flex; <span class="hljs-attribute">align-items</span>: center; }
<span class="hljs-selector-class">.header-util</span> { <span class="hljs-attribute">margin-left</span>: auto; } <span class="hljs-comment">/* 로고·메뉴는 왼쪽, 유틸은 오른쪽 */</span>
</code></pre><h3>페이지 푸터를 화면 하단에</h3><p>내용이 짧은 페이지에서도 푸터를 화면 하단에 두려면, 페이지 전체를 세로 Flex로 만들고 푸터에 자동 여백을 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.page</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">flex-direction</span>: column;
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100vh</span>; <span class="hljs-comment">/* dvh를 모르는 브라우저용 */</span>
  <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100</span>dvh;
}
<span class="hljs-selector-class">.page-footer</span> { <span class="hljs-attribute">margin-top</span>: auto; }
</code></pre><h3>카드 높이가 서로 다를 때</h3><p>카드 자체의 높이가 다르면 버튼도 맞지 않습니다. Grid나 Flex 행의 기본값(<code>align-items: normal</code>, 일반 항목에서는 <code>stretch</code>처럼 동작)이 같은 행 카드의 높이를 맞춥니다. <code>align-items: start</code>를 지정하면 이 늘이기가 사라집니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-list</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">3</span>, <span class="hljs-built_in">minmax</span>(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>fr));
  <span class="hljs-comment">/* align-items: start; 를 넣으면 카드 높이가 제각각이 됨 */</span>
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>버튼 영역은 세로 Flex 컨테이너의 직접 자식이어야 합니다.</strong> 중간에 감싸는 요소가 있으면 그 요소에 Flex를 적용하세요.</li><li><strong>남는 공간이 없으면 자동 여백은 0이 됩니다.</strong> 카드 높이를 맞추려면 <code>min-height</code>나 같은 Grid 행의 늘이기(stretch)를 사용합니다.</li><li><strong>고정 <code>height</code> 대신 <code>min-height</code>를 사용합니다.</strong> 내용이 늘어날 때 카드가 함께 커져야 버튼과 본문이 겹치지 않습니다.</li><li><strong>최소 간격을 따로 확보합니다.</strong> 자동 여백은 0까지 줄어들 수 있으므로 <code>padding-top</code>으로 본문과의 간격을 유지하세요.</li><li><strong>화면 하단 고정과는 다릅니다.</strong> 이 방법은 카드 안에서의 정렬입니다. 화면에 고정하려면 <code>position: sticky</code>나 <code>fixed</code>를 검토하세요.</li></ul></section>`,2),i(`section`,N,[o[17]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(g,null,{default:r(()=>[...o[16]||=[i(`p`,null,`위 예제에서 긴 카드의 문단 수를 4개로, 카드 최소 높이를 160px로 바꿔보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태에서 두 카드의 버튼이 같은 높이에 정렬된다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문단이 많아 공간이 모자라면 버튼이 본문 다음에 이어진다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`버튼과 본문 사이에 최소 간격이 유지된다.`)])])],-1)]]),_:1})])])}}};export{Z as default,W as duration,B as group,P as id,K as keyProperty,z as lead,U as level,L as navTitle,F as order,G as prerequisites,X as references,Y as related,q as status,R as summary,H as tags,I as title,V as topic,J as updated};