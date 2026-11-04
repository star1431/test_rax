import{$ as e,A as t,C as n,L as r,P as i,T as a,a as o,c as s,d as c,et as l,f as u,j as d,o as f,s as p,t as m,u as h,x as g}from"./runtime-core.esm-bundler-_PXz1bcR.js";import{o as _}from"./index-PSRmlYcm.js";import{t as v}from"./DemoCompare-C7skMkLc.js";var y=`.demo-ellipsis-row {
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
</div>`}],C={for:`demo-width`},w={class:`sample-buttons`},T=[`onClick`],E={class:`demo-ellipsis-content`},D={class:`demo-ellipsis-title`},O=[`aria-expanded`],k={key:0,class:`full-title`},A={__name:`FlexEllipsisDemo`,setup(a){let u=i(320),h=i(b),y=i(!1);return(i,a)=>(g(),f(v,{problem:{code:`min-width: auto`,note:`제목이 길면 배지가 오른쪽으로 밀립니다.`},solved:{code:`min-width: 0`,note:`제목만 줄어들고, 배지는 유지됩니다.`}},{controls:t(()=>[o(`label`,C,[a[3]||=c(`행 너비 `,-1),o(`strong`,null,l(u.value)+`px`,1)]),d(o(`input`,{id:`demo-width`,"onUpdate:modelValue":a[0]||=e=>u.value=e,type:`range`,min:`240`,max:`480`,step:`10`},null,512),[[_,u.value,void 0,{number:!0}]]),a[4]||=o(`label`,{for:`demo-text`},`제목 바꿔보기`,-1),d(o(`input`,{id:`demo-text`,"onUpdate:modelValue":a[1]||=e=>h.value=e,type:`text`},null,512),[[_,h.value]]),o(`div`,w,[(g(!0),s(m,null,n(r(x),(e,t)=>(g(),s(`button`,{key:t,onClick:t=>h.value=e},l(t),9,T))),128))])]),caption:t(()=>[a[6]||=c(` 좁은 화면에서는 예제 안을 가로로 스크롤할 수 있습니다. `,-1),o(`button`,{"aria-expanded":y.value,onClick:a[2]||=e=>y.value=!y.value},`전체 제목 `+l(y.value?`접기`:`보기`),9,O),y.value?(g(),s(`p`,k,l(h.value||`(제목 없음)`),1)):p(``,!0)]),default:t(()=>[o(`div`,{class:`demo-ellipsis-row`,style:e({width:u.value+`px`})},[o(`div`,E,[o(`p`,D,l(h.value),1)]),a[5]||=o(`span`,{class:`demo-ellipsis-badge`},`필수`,-1)],4)]),_:1}))}},j={class:`doc-body`},M={id:`section-0`},N={id:`section-1`},P={id:`section-2`},ee={id:`section-3`},F={id:`section-5`},I=`flex-ellipsis`,L=1,R=`Flex 안에서 말줄임이 안 될 때`,z=`Flex 내부 말줄임`,B=`긴 제목이 옆 요소를 밀어낼 때, 텍스트를 감싼 flex item의 최소 너비를 풀어 말줄임을 적용합니다.`,V=`긴 제목이 옆 요소를 밀어낸다면?
텍스트보다 먼저, 텍스트를 감싼 항목의 최소 너비를 확인하세요.
`,H=`CSS`,U=`CSS · 레이아웃`,W=`Flexbox`,G=[`Flex`,`말줄임`,`min-width`,`ellipsis`],K=`기초`,q=`약 5분`,J=[`flex item`,`overflow`],Y=`min-width: 0`,X=`published`,Z=`2026-10-30`,Q=[`flex-bottom-action`],$=[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`}],te={__name:`flex-ellipsis`,setup(e,{expose:n}){return n({frontmatter:{id:`flex-ellipsis`,order:1,title:`Flex 안에서 말줄임이 안 될 때`,navTitle:`Flex 내부 말줄임`,summary:`긴 제목이 옆 요소를 밀어낼 때, 텍스트를 감싼 flex item의 최소 너비를 풀어 말줄임을 적용합니다.`,lead:`긴 제목이 옆 요소를 밀어낸다면?
텍스트보다 먼저, 텍스트를 감싼 항목의 최소 너비를 확인하세요.
`,category:`CSS`,group:`CSS · 레이아웃`,topic:`Flexbox`,tags:[`Flex`,`말줄임`,`min-width`,`ellipsis`],level:`기초`,duration:`약 5분`,prerequisites:[`flex item`,`overflow`],keyProperty:`min-width: 0`,status:`published`,updated:`2026-10-30`,related:[`flex-bottom-action`],references:[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`}]}}),(e,n)=>{let i=a(`DocTakeaway`),l=a(`DocSteps`),d=a(`CodePanel`),f=a(`DocPractice`);return g(),s(`div`,j,[o(`section`,M,[n[1]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),n[2]||=o(`p`,null,`제목과 배지가 나란히 있는 행입니다. 제목에 말줄임 속성을 모두 넣었는데도 긴 문장을 입력하면 배지가 영역 밖으로 밀려납니다.`,-1),u(i,null,{default:t(()=>[...n[0]||=[o(`p`,null,[c(`텍스트를 감싼 `),o(`strong`,null,`flex item`),c(`에 `),o(`code`,null,`min-width: 0`),c(`을 적용하세요.`)],-1)]]),_:1})]),o(`section`,N,[n[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),n[4]||=o(`p`,null,`너비와 제목을 바꾸면서, 같은 구조에서 속성 하나가 만드는 차이를 확인해 보세요.`,-1),u(A)]),o(`section`,P,[n[6]||=o(`h2`,null,[o(`span`,{class:`section-no`},`03`),c(` 왜 이런 일이 생길까요?`)],-1),n[7]||=o(`p`,null,[c(`Flex 항목의 기본 `),o(`code`,null,`min-width: auto`),c(`는 내용에 따른 자동 최소 너비를 적용할 수 있습니다. 이 예제에서는 줄바꿈하지 않는 긴 제목 때문에 부모 항목이 충분히 줄어들지 않습니다.`)],-1),n[8]||=o(`p`,null,[o(`code`,null,`text-overflow: ellipsis`),c(`는 넘친 텍스트의 표시 방법입니다. 부모의 축소 제한까지 해제하지는 않습니다. `),o(`code`,null,`min-width: 0`),c(`으로 부모 항목이 내용보다 작아질 수 있게 해야 제목 안에서 말줄임이 발생합니다.`)],-1),u(l,null,{default:t(()=>[...n[5]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`부모가 줄어들고`),c(),o(`code`,null,`min-width: 0`)]),o(`li`,null,[o(`strong`,null,`넘친 글자를 숨기고`),c(),o(`code`,null,`overflow: hidden`)]),o(`li`,null,[o(`strong`,null,`끝을 …로 표시`),c(),o(`code`,null,`text-overflow: ellipsis`)])],-1)]]),_:1})]),o(`section`,ee,[n[9]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),c(` 해결 코드`)],-1),n[10]||=o(`p`,null,[c(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),o(`code`,null,`min-width: 0`),c(`이 적용되는 위치를 확인하세요.`)],-1),u(d,{tabs:r(S)},null,8,[`tabs`])]),n[13]||=h(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>텍스트를 감싼 flex item에 적용합니다.</strong> 중첩 Flex에서는 조상 항목의 최소 너비도 확인하세요.</li><li><strong>고정 요소의 너비를 확보합니다.</strong> 배지에는 <code>flex-shrink: 0</code>을 적용합니다. 고정 요소 자체가 영역보다 크면 별도 대응이 필요합니다.</li><li><strong>전체 내용을 확인할 수 있어야 합니다.</strong> 말줄임은 화면 표시만 줄입니다. 예제의 펼치기처럼 전체 제목을 읽을 수 있는 수단을 제공하세요.</li></ul></section>`,1),o(`section`,F,[n[12]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),c(` 짧은 실습`)],-1),u(f,null,{default:t(()=>[...n[11]||=[o(`p`,null,`위 예제에서 ‘공백 없는 영문’을 선택하고 너비를 240px로 줄여보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태에서 ‘필수’ 배지가 영역 안에 남아 있다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`긴 제목에는 말줄임표가 표시된다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`짧은 제목으로 바꾸면 말줄임표가 사라진다.`)])])],-1)]]),_:1})])])}}};export{H as category,te as default,q as duration,U as group,I as id,Y as keyProperty,V as lead,K as level,z as navTitle,L as order,J as prerequisites,$ as references,Q as related,X as status,B as summary,G as tags,R as title,W as topic,Z as updated};