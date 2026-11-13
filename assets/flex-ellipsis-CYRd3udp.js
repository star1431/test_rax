import{D as e,G as t,H as n,R as r,c as i,d as a,ft as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,u as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as _}from"./index-Dxflp_jg.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=`.demo-ellipsis-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px dashed #aab8ce;
  background: #fff;
}
.demo-ellipsis-content {
  flex: 1;
  min-width: 0; /* 내용 너비보다 작아질 수 있도록 허용합니다. */
}
.demo-ellipsis-title {
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.demo-ellipsis-badge {
  flex-shrink: 0; /* 배지의 너비를 유지합니다. */
  padding: 3px 8px;
  border-radius: 4px;
  background: #eaf0ff;
  color: #315bc2;
  font-size: 12px;
}
/* 비교를 위한 문제 상태: 부모 항목의 기본 최소 너비를 복원합니다. */
.is-problem .demo-ellipsis-content { min-width: auto; }
`,b=`퍼블리싱 실무에서 만나는 아주 긴 제목입니다. 옆의 필수 배지는 남아 있어야 해요.`,x={"긴 한글":b,"짧은 제목":`교육 자료`,"공백 없는 영문":`PublishingTrainingFlexboxLongTitleWithoutAnySpaces1234567890`},S=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<div class="demo-ellipsis-row">
  <div class="demo-ellipsis-content">
    <p class="demo-ellipsis-title">퍼블리싱 실무에서 만나는 아주 긴 제목입니다</p>
  </div>
  <span class="demo-ellipsis-badge">필수</span>
</div>`}],C={for:`demo-width`},w={class:`sample-buttons`},T=[`onClick`],E={class:`demo-ellipsis-content`},D={class:`demo-ellipsis-title`},O=[`aria-expanded`],k={key:0,class:`full-title`},A={__name:`FlexEllipsisDemo`,setup(s){let l=n(320),f=n(b),y=n(!1);return(n,s)=>(e(),d(v,{problem:{code:`min-width: auto`,note:`제목이 길면 배지가 오른쪽으로 밀립니다.`},solved:{code:`min-width: 0`,note:`제목만 줄어들고, 배지는 유지됩니다.`}},{controls:r(()=>[i(`label`,C,[s[3]||=c(`행 너비 `,-1),i(`strong`,null,p(l.value)+`px`,1)]),g(i(`input`,{id:`demo-width`,"onUpdate:modelValue":s[0]||=e=>l.value=e,type:`range`,min:`240`,max:`480`,step:`10`},null,512),[[_,l.value,void 0,{number:!0}]]),s[4]||=i(`label`,{for:`demo-text`},`제목 바꿔보기`,-1),g(i(`input`,{id:`demo-text`,"onUpdate:modelValue":s[1]||=e=>f.value=e,type:`text`},null,512),[[_,f.value]]),i(`div`,w,[(e(!0),a(m,null,u(t(x),(t,n)=>(e(),a(`button`,{key:n,onClick:e=>f.value=t},p(n),9,T))),128))])]),caption:r(()=>[s[6]||=c(` 좁은 화면에서는 예제 안을 가로로 스크롤할 수 있습니다. `,-1),i(`button`,{"aria-expanded":y.value,onClick:s[2]||=e=>y.value=!y.value},`전체 제목 `+p(y.value?`접기`:`보기`),9,O),y.value?(e(),a(`p`,k,p(f.value||`(제목 없음)`),1)):h(``,!0)]),default:r(()=>[i(`div`,{class:`demo-ellipsis-row`,style:o({width:l.value+`px`})},[i(`div`,E,[i(`p`,D,p(f.value),1)]),s[5]||=i(`span`,{class:`demo-ellipsis-badge`},`필수`,-1)],4)]),_:1}))}},j={class:`doc-body`},M={id:`section-0`},N={id:`section-1`},P={id:`section-2`},F={id:`section-3`},I={id:`section-4`},ee={id:`section-7`},L=`flex-ellipsis`,R=1,z=`Flex 안에서 말줄임이 안 될 때`,B=`Flex 내부 말줄임`,V=`긴 제목이 옆 요소를 밀어낼 때, 텍스트를 감싼 flex item의 최소 너비를 풀어 말줄임을 적용합니다.`,H=`긴 제목이 옆 요소를 밀어낸다면?
텍스트보다 먼저, 텍스트를 감싼 항목의 최소 너비를 확인하세요.
`,U=`레이아웃`,W=`Flexbox`,G=[`Flex`,`말줄임`,`min-width`,`ellipsis`],K=`기초`,q=`약 10분`,J=[`flex item`,`overflow`],Y=`min-width: 0`,X=`published`,Z=`2026-11-11`,Q=[`flex-bottom-action`],$=[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`}],te={__name:`flex-ellipsis`,setup(n,{expose:o}){return o({frontmatter:{id:`flex-ellipsis`,order:1,title:`Flex 안에서 말줄임이 안 될 때`,navTitle:`Flex 내부 말줄임`,summary:`긴 제목이 옆 요소를 밀어낼 때, 텍스트를 감싼 flex item의 최소 너비를 풀어 말줄임을 적용합니다.`,lead:`긴 제목이 옆 요소를 밀어낸다면?
텍스트보다 먼저, 텍스트를 감싼 항목의 최소 너비를 확인하세요.
`,group:`레이아웃`,topic:`Flexbox`,tags:[`Flex`,`말줄임`,`min-width`,`ellipsis`],level:`기초`,duration:`약 10분`,prerequisites:[`flex item`,`overflow`],keyProperty:`min-width: 0`,status:`published`,updated:`2026-11-11`,related:[`flex-bottom-action`],references:[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`}]}}),(n,o)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`DocPractice`);return e(),a(`div`,j,[i(`section`,M,[o[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),o[3]||=i(`p`,null,`제목과 배지가 나란히 있는 행입니다. 제목에 말줄임 속성을 모두 넣었는데도 긴 문장을 입력하면 배지가 영역 밖으로 밀려납니다.`,-1),o[4]||=i(`p`,null,`퍼블리싱할 때는 짧은 예시 문구로 확인해서 지나치기 쉽고, 실제 데이터가 연결된 뒤 QA에서 이런 형태로 돌아옵니다.`,-1),s(u,{title:`상품 목록: 상품명이 길면 '필수' 배지가 보이지 않음`,env:`전체 브라우저 · 모바일(360px) 및 PC 좁은 카드`,expected:`상품명이 한 줄 말줄임(…)되고 배지는 오른쪽에 보임`,actual:`배지가 카드 밖으로 밀려 잘림, 상품명에 말줄임표 없음`},{default:r(()=>[...o[0]||=[i(`ol`,null,[i(`li`,null,`상품명이 30자 이상인 상품을 등록합니다.`),i(`li`,null,`목록 화면을 360px 너비로 엽니다.`),i(`li`,null,`해당 상품 카드의 오른쪽 끝을 확인합니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...o[1]||=[i(`p`,null,[c(`텍스트를 감싼 `),i(`strong`,null,`flex item`),c(`에 `),i(`code`,null,`min-width: 0`),c(`을 적용하세요.`)],-1)]]),_:1})]),i(`section`,N,[o[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),o[6]||=i(`p`,null,`너비와 제목을 바꾸면서, 같은 구조에서 속성 하나가 만드는 차이를 확인해 보세요.`,-1),s(A)]),i(`section`,P,[o[8]||=i(`h2`,null,[i(`span`,{class:`section-no`},`03`),c(` 왜 이런 일이 생길까요?`)],-1),o[9]||=i(`p`,null,[c(`Flex 항목의 기본 `),i(`code`,null,`min-width: auto`),c(`는 내용에 따른 자동 최소 너비를 적용할 수 있습니다. 이 예제에서는 줄바꿈하지 않는 긴 제목 때문에 부모 항목이 충분히 줄어들지 않습니다.`)],-1),o[10]||=i(`p`,null,[i(`code`,null,`text-overflow: ellipsis`),c(`는 넘친 텍스트의 표시 방법입니다. 부모의 축소 제한까지 해제하지는 않습니다. `),i(`code`,null,`min-width: 0`),c(`으로 부모 항목이 내용보다 작아질 수 있게 해야 제목 안에서 말줄임이 발생합니다.`)],-1),s(p,null,{default:r(()=>[...o[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`부모가 줄어들고`),c(),i(`code`,null,`min-width: 0`)]),i(`li`,null,[i(`strong`,null,`넘친 글자를 숨기고`),c(),i(`code`,null,`overflow: hidden`)]),i(`li`,null,[i(`strong`,null,`끝을 …로 표시`),c(),i(`code`,null,`text-overflow: ellipsis`)])],-1)]]),_:1})]),i(`section`,F,[o[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),o[13]||=i(`p`,null,[c(`말줄임이 안 될 때는 텍스트 요소보다 `),i(`strong`,null,`텍스트를 감싼 요소가 줄어드는지`),c(`부터 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),s(m,null,{default:r(()=>[...o[11]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 요소 선택`),c(` 제목 `),i(`code`,null,`p`),c(`가 아니라 그 부모인 `),i(`code`,null,`.demo-ellipsis-content`),c(`를 선택합니다. 이 요소가 flex item입니다.`)]),i(`li`,null,[i(`strong`,null,`flex 배지로 영역 표시`),c(` 부모 행 옆의 `),i(`code`,null,`flex`),c(` 배지를 누르면 항목 경계가 표시됩니다. 제목 항목이 행 밖까지 이어져 있다면 줄어들지 못한 것입니다.`)]),i(`li`,null,[i(`strong`,null,`Computed 탭에서 최소 너비 확인`),i(`strong`,null,`Show all`),c(`을 켜고 `),i(`code`,null,`min-width`),c(`를 검색합니다. 기본값은 이 옵션을 켜야 보입니다. 값이 `),i(`code`,null,`auto`),c(`이면 내용 길이만큼 최소 너비가 잡힐 수 있습니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 바로 시험`),c(` 선택한 요소에 `),i(`code`,null,`min-width: 0`),c(`을 추가해 봅니다. 배지가 돌아오고 말줄임표가 생기면 원인이 확정됩니다.`)])],-1)]]),_:1})]),i(`section`,I,[o[14]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),o[15]||=i(`p`,null,[c(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),i(`code`,null,`min-width: 0`),c(`이 적용되는 위치를 확인하세요.`)],-1),s(h,{tabs:t(S)},null,8,[`tabs`])]),o[18]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 원인(자동 최소 너비)이 다른 레이아웃에서도 나타납니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>Flex가 여러 겹일 때</h3><p>말줄임할 텍스트까지 가는 길에 있는 <strong>모든 flex item</strong>이 줄어들 수 있어야 합니다. 안쪽에만 <code>min-width: 0</code>을 주면 바깥 항목이 그대로 버팁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-body</span> { <span class="hljs-attribute">display</span>: flex; }
<span class="hljs-selector-class">.card-main</span> { <span class="hljs-attribute">min-width</span>: <span class="hljs-number">0</span>; }          <span class="hljs-comment">/* 바깥 flex item */</span>
<span class="hljs-selector-class">.card-title-row</span> { <span class="hljs-attribute">display</span>: flex; }
<span class="hljs-selector-class">.card-title-wrap</span> { <span class="hljs-attribute">min-width</span>: <span class="hljs-number">0</span>; }    <span class="hljs-comment">/* 안쪽 flex item */</span>
</code></pre><h3>Grid 안에서</h3><p>Grid 항목도 기본 최소 너비가 <code>auto</code>입니다. 또 <code>1fr</code>은 <code>minmax(auto, 1fr)</code>과 같아서 긴 글자가 열 너비를 넓힙니다. 열을 <code>minmax(0, 1fr)</code>로 지정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.list-row</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">minmax</span>(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>fr) auto; <span class="hljs-comment">/* 1fr auto 대신 */</span>
}
</code></pre><h3>표 셀(td) 안에서</h3><p>표는 기본적으로 내용에 맞춰 열 너비를 넓힙니다. <code>table-layout: fixed</code>와 표 너비를 지정해야 셀 안에서 말줄임이 생깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.board-table</span> { <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>; <span class="hljs-attribute">table-layout</span>: fixed; }
<span class="hljs-selector-class">.board-table</span> <span class="hljs-selector-class">.subject</span> {
  <span class="hljs-attribute">overflow</span>: hidden;
  <span class="hljs-attribute">white-space</span>: nowrap;
  <span class="hljs-attribute">text-overflow</span>: ellipsis;
}
</code></pre><h3>두 줄 이상 말줄임</h3><p>여러 줄은 <code>-webkit-line-clamp</code>를 씁니다. Flex 안에 있다면 이 경우에도 감싼 항목에 <code>min-width: 0</code>이 필요합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-desc</span> {
  <span class="hljs-attribute">display</span>: -webkit-box;
  -webkit-<span class="hljs-attribute">box-orient</span>: vertical;
  -webkit-<span class="hljs-selector-tag">line</span>-clamp: <span class="hljs-number">2</span>;
  <span class="hljs-attribute">overflow</span>: hidden;
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>텍스트를 감싼 flex item에 적용합니다.</strong> 중첩 Flex에서는 조상 항목의 최소 너비도 확인하세요.</li><li><strong>고정 요소의 너비를 확보합니다.</strong> 배지에는 <code>flex-shrink: 0</code>을 적용합니다. 고정 요소 자체가 영역보다 크면 별도 대응이 필요합니다.</li><li><strong>전체 내용을 확인할 수 있어야 합니다.</strong> 말줄임은 화면 표시만 줄입니다. 예제의 펼치기처럼 전체 제목을 읽을 수 있는 수단을 제공하세요.</li><li><strong><code>overflow: hidden</code>으로도 풀리지만 권장하지 않습니다.</strong> flex item에 <code>overflow</code>를 주면 자동 최소 너비가 0이 되어 말줄임은 되지만, 안쪽 요소의 포커스 테두리·그림자도 함께 잘립니다. 의도가 드러나는 <code>min-width: 0</code>을 쓰세요.</li></ul></section>`,2),i(`section`,ee,[o[17]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(g,null,{default:r(()=>[...o[16]||=[i(`p`,null,`위 예제에서 ‘공백 없는 영문’을 선택하고 너비를 240px로 줄여보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태에서 ‘필수’ 배지가 영역 안에 남아 있다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`긴 제목에는 말줄임표가 표시된다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`짧은 제목으로 바꾸면 말줄임표가 사라진다.`)])])],-1)]]),_:1})])])}}};export{te as default,q as duration,U as group,L as id,Y as keyProperty,H as lead,K as level,B as navTitle,R as order,J as prerequisites,$ as references,Q as related,X as status,V as summary,G as tags,z as title,W as topic,Z as updated};