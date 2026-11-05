import{E as e,F as t,H as n,I as r,O as i,at as a,c as o,f as s,l as c,m as l,ot as u,p as d,r as f,s as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{d as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y=`.demo-ellipsis-row {
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
</div>`}],C={for:`demo-width`},w={class:`sample-buttons`},T=[`onClick`],E={class:`demo-ellipsis-content`},D={class:`demo-ellipsis-title`},O=[`aria-expanded`],k={key:0,class:`full-title`},A={__name:`FlexEllipsisDemo`,setup(i){let s=g(320),l=g(b),y=g(!1);return(i,g)=>(h(),o(v,{problem:{code:`min-width: auto`,note:`제목이 길면 배지가 오른쪽으로 밀립니다.`},solved:{code:`min-width: 0`,note:`제목만 줄어들고, 배지는 유지됩니다.`}},{controls:t(()=>[p(`label`,C,[g[3]||=d(`행 너비 `,-1),p(`strong`,null,u(s.value)+`px`,1)]),r(p(`input`,{id:`demo-width`,"onUpdate:modelValue":g[0]||=e=>s.value=e,type:`range`,min:`240`,max:`480`,step:`10`},null,512),[[_,s.value,void 0,{number:!0}]]),g[4]||=p(`label`,{for:`demo-text`},`제목 바꿔보기`,-1),r(p(`input`,{id:`demo-text`,"onUpdate:modelValue":g[1]||=e=>l.value=e,type:`text`},null,512),[[_,l.value]]),p(`div`,w,[(h(!0),m(f,null,e(n(x),(e,t)=>(h(),m(`button`,{key:t,onClick:t=>l.value=e},u(t),9,T))),128))])]),caption:t(()=>[g[6]||=d(` 좁은 화면에서는 예제 안을 가로로 스크롤할 수 있습니다. `,-1),p(`button`,{"aria-expanded":y.value,onClick:g[2]||=e=>y.value=!y.value},`전체 제목 `+u(y.value?`접기`:`보기`),9,O),y.value?(h(),m(`p`,k,u(l.value||`(제목 없음)`),1)):c(``,!0)]),default:t(()=>[p(`div`,{class:`demo-ellipsis-row`,style:a({width:s.value+`px`})},[p(`div`,E,[p(`p`,D,u(l.value),1)]),g[5]||=p(`span`,{class:`demo-ellipsis-badge`},`필수`,-1)],4)]),_:1}))}},j={class:`doc-body`},M={id:`section-0`},N={id:`section-1`},P={id:`section-2`},F={id:`section-3`},ee={id:`section-5`},I=`flex-ellipsis`,L=1,R=`Flex 안에서 말줄임이 안 될 때`,z=`Flex 내부 말줄임`,B=`긴 제목이 옆 요소를 밀어낼 때, 텍스트를 감싼 flex item의 최소 너비를 풀어 말줄임을 적용합니다.`,V=`긴 제목이 옆 요소를 밀어낸다면?
텍스트보다 먼저, 텍스트를 감싼 항목의 최소 너비를 확인하세요.
`,H=`레이아웃`,U=`Flexbox`,W=[`Flex`,`말줄임`,`min-width`,`ellipsis`],G=`기초`,K=`약 5분`,q=[`flex item`,`overflow`],J=`min-width: 0`,Y=`published`,X=`2026-10-30`,Z=[`flex-bottom-action`],Q=[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`}],$={__name:`flex-ellipsis`,setup(e,{expose:r}){return r({frontmatter:{id:`flex-ellipsis`,order:1,title:`Flex 안에서 말줄임이 안 될 때`,navTitle:`Flex 내부 말줄임`,summary:`긴 제목이 옆 요소를 밀어낼 때, 텍스트를 감싼 flex item의 최소 너비를 풀어 말줄임을 적용합니다.`,lead:`긴 제목이 옆 요소를 밀어낸다면?
텍스트보다 먼저, 텍스트를 감싼 항목의 최소 너비를 확인하세요.
`,group:`레이아웃`,topic:`Flexbox`,tags:[`Flex`,`말줄임`,`min-width`,`ellipsis`],level:`기초`,duration:`약 5분`,prerequisites:[`flex item`,`overflow`],keyProperty:`min-width: 0`,status:`published`,updated:`2026-10-30`,related:[`flex-bottom-action`],references:[{title:`CSS Flexbox — Automatic Minimum Size`,url:`https://www.w3.org/TR/css-flexbox-1/#min-size-auto`}]}}),(e,r)=>{let a=i(`DocTakeaway`),o=i(`DocSteps`),c=i(`CodePanel`),u=i(`DocPractice`);return h(),m(`div`,j,[p(`section`,M,[r[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[2]||=p(`p`,null,`제목과 배지가 나란히 있는 행입니다. 제목에 말줄임 속성을 모두 넣었는데도 긴 문장을 입력하면 배지가 영역 밖으로 밀려납니다.`,-1),l(a,null,{default:t(()=>[...r[0]||=[p(`p`,null,[d(`텍스트를 감싼 `),p(`strong`,null,`flex item`),d(`에 `),p(`code`,null,`min-width: 0`),d(`을 적용하세요.`)],-1)]]),_:1})]),p(`section`,N,[r[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=p(`p`,null,`너비와 제목을 바꾸면서, 같은 구조에서 속성 하나가 만드는 차이를 확인해 보세요.`,-1),l(A)]),p(`section`,P,[r[6]||=p(`h2`,null,[p(`span`,{class:`section-no`},`03`),d(` 왜 이런 일이 생길까요?`)],-1),r[7]||=p(`p`,null,[d(`Flex 항목의 기본 `),p(`code`,null,`min-width: auto`),d(`는 내용에 따른 자동 최소 너비를 적용할 수 있습니다. 이 예제에서는 줄바꿈하지 않는 긴 제목 때문에 부모 항목이 충분히 줄어들지 않습니다.`)],-1),r[8]||=p(`p`,null,[p(`code`,null,`text-overflow: ellipsis`),d(`는 넘친 텍스트의 표시 방법입니다. 부모의 축소 제한까지 해제하지는 않습니다. `),p(`code`,null,`min-width: 0`),d(`으로 부모 항목이 내용보다 작아질 수 있게 해야 제목 안에서 말줄임이 발생합니다.`)],-1),l(o,null,{default:t(()=>[...r[5]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`부모가 줄어들고`),d(),p(`code`,null,`min-width: 0`)]),p(`li`,null,[p(`strong`,null,`넘친 글자를 숨기고`),d(),p(`code`,null,`overflow: hidden`)]),p(`li`,null,[p(`strong`,null,`끝을 …로 표시`),d(),p(`code`,null,`text-overflow: ellipsis`)])],-1)]]),_:1})]),p(`section`,F,[r[9]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 해결 코드`)],-1),r[10]||=p(`p`,null,[d(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),p(`code`,null,`min-width: 0`),d(`이 적용되는 위치를 확인하세요.`)],-1),l(c,{tabs:n(S)},null,8,[`tabs`])]),r[13]||=s(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>텍스트를 감싼 flex item에 적용합니다.</strong> 중첩 Flex에서는 조상 항목의 최소 너비도 확인하세요.</li><li><strong>고정 요소의 너비를 확보합니다.</strong> 배지에는 <code>flex-shrink: 0</code>을 적용합니다. 고정 요소 자체가 영역보다 크면 별도 대응이 필요합니다.</li><li><strong>전체 내용을 확인할 수 있어야 합니다.</strong> 말줄임은 화면 표시만 줄입니다. 예제의 펼치기처럼 전체 제목을 읽을 수 있는 수단을 제공하세요.</li></ul></section>`,1),p(`section`,ee,[r[12]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),d(` 짧은 실습`)],-1),l(u,null,{default:t(()=>[...r[11]||=[p(`p`,null,`위 예제에서 ‘공백 없는 영문’을 선택하고 너비를 240px로 줄여보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`해결 상태에서 ‘필수’ 배지가 영역 안에 남아 있다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`긴 제목에는 말줄임표가 표시된다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`짧은 제목으로 바꾸면 말줄임표가 사라진다.`)])])],-1)]]),_:1})])])}}};export{$ as default,K as duration,H as group,I as id,J as keyProperty,V as lead,G as level,z as navTitle,L as order,q as prerequisites,Q as references,Z as related,Y as status,B as summary,W as tags,R as title,U as topic,X as updated};