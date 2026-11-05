import{E as e,F as t,H as n,I as r,O as i,at as a,c as o,f as s,m as c,o as l,ot as u,p as d,r as f,s as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{d as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y=`.demo-action-cards {
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
</article>`}],S={for:`demo-count`},C={for:`demo-height`},w={class:`demo-action-cards`},T={class:`demo-action-title`},E={__name:`FlexBottomActionDemo`,setup(n){let i=g(3),s=g(240),c=l(()=>[{title:`짧은 카드`,texts:b.slice(0,1)},{title:`긴 카드`,texts:b.slice(0,i.value)}]);return(n,l)=>(h(),o(v,{problem:{code:`margin-top: 0`,note:`버튼 위치가 설명 길이를 따라 달라집니다.`},solved:{code:`margin-top: auto`,note:`버튼 영역이 카드 하단에 맞춰집니다.`}},{controls:t(()=>[p(`label`,S,[l[2]||=d(`긴 카드 문단 수 `,-1),p(`strong`,null,u(i.value)+`개`,1)]),r(p(`input`,{id:`demo-count`,"onUpdate:modelValue":l[0]||=e=>i.value=e,type:`range`,min:`1`,max:`4`,step:`1`},null,512),[[_,i.value,void 0,{number:!0}]]),p(`label`,C,[l[3]||=d(`카드 최소 높이 `,-1),p(`strong`,null,u(s.value)+`px`,1)]),r(p(`input`,{id:`demo-height`,"onUpdate:modelValue":l[1]||=e=>s.value=e,type:`range`,min:`160`,max:`320`,step:`20`},null,512),[[_,s.value,void 0,{number:!0}]])]),caption:t(()=>[...l[5]||=[d(` 예제의 ‘자세히 보기’ 버튼은 배치 확인용이며 동작하지 않습니다. `,-1)]]),default:t(()=>[p(`div`,w,[(h(!0),m(f,null,e(c.value,t=>(h(),m(`article`,{key:t.title,class:`demo-action-card`,style:a({minHeight:s.value+`px`})},[p(`strong`,T,u(t.title),1),(h(!0),m(f,null,e(t.texts,e=>(h(),m(`p`,{key:e},u(e),1))),128)),l[4]||=p(`div`,{class:`demo-action-area`},[p(`button`,{type:`button`,class:`demo-action-button`,tabindex:`-1`},`자세히 보기`)],-1)],4))),128))])]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`flex-bottom-action`,P=2,F=`내용 길이가 달라도 버튼을 하단에 배치하기`,I=`버튼 하단 배치`,L=`세로 Flex에서 버튼 영역에 margin-top auto를 적용해 남는 공간을 흡수하고, 카드마다 버튼을 하단에 맞춥니다.`,R=`카드마다 버튼 높이가 제각각이라면?
버튼을 밀어내는 대신, 버튼 앞의 남는 공간을 자동 여백으로 채우세요.
`,z=`레이아웃`,B=`Flexbox`,V=[`Flex`,`margin`,`auto`,`카드`],H=`기초`,U=`약 5분`,W=[`주축`,`margin`],G=`margin-top: auto`,K=`published`,q=`2026-10-30`,J=[`flex-ellipsis`],Y=[{title:`CSS Flexbox — Aligning with auto margins`,url:`https://www.w3.org/TR/css-flexbox-1/#auto-margins`}],X={__name:`flex-bottom-action`,setup(e,{expose:r}){return r({frontmatter:{id:`flex-bottom-action`,order:2,title:`내용 길이가 달라도 버튼을 하단에 배치하기`,navTitle:`버튼 하단 배치`,summary:`세로 Flex에서 버튼 영역에 margin-top auto를 적용해 남는 공간을 흡수하고, 카드마다 버튼을 하단에 맞춥니다.`,lead:`카드마다 버튼 높이가 제각각이라면?
버튼을 밀어내는 대신, 버튼 앞의 남는 공간을 자동 여백으로 채우세요.
`,group:`레이아웃`,topic:`Flexbox`,tags:[`Flex`,`margin`,`auto`,`카드`],level:`기초`,duration:`약 5분`,prerequisites:[`주축`,`margin`],keyProperty:`margin-top: auto`,status:`published`,updated:`2026-10-30`,related:[`flex-ellipsis`],references:[{title:`CSS Flexbox — Aligning with auto margins`,url:`https://www.w3.org/TR/css-flexbox-1/#auto-margins`}]}}),(e,r)=>{let a=i(`DocTakeaway`),o=i(`DocSteps`),l=i(`CodePanel`),u=i(`DocPractice`);return h(),m(`div`,D,[p(`section`,O,[r[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[2]||=p(`p`,null,`같은 행에 놓인 카드들의 설명 분량이 달라, 카드 안의 버튼 높이가 제각각입니다. 설명은 위에 두고 버튼 영역만 카드 하단에 맞추고 싶습니다.`,-1),c(a,null,{default:t(()=>[...r[0]||=[p(`p`,null,[d(`카드를 `),p(`strong`,null,`세로 Flex`),d(`로 만들고, 버튼 영역에 `),p(`code`,null,`margin-top: auto`),d(`를 적용하세요.`)],-1)]]),_:1})]),p(`section`,k,[r[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=p(`p`,null,`긴 카드의 문단 수와 카드 최소 높이를 바꾸면서 버튼 위치를 비교해 보세요.`,-1),c(E)]),p(`section`,A,[r[6]||=p(`h2`,null,[p(`span`,{class:`section-no`},`03`),d(` 왜 이런 일이 생길까요?`)],-1),r[7]||=p(`p`,null,`블록 흐름에서 버튼은 설명 바로 다음에 놓입니다. 카드 높이가 같아도 남는 공간은 마지막 요소 아래에 생기므로, 설명이 짧은 카드일수록 버튼이 위로 올라갑니다.`,-1),r[8]||=p(`p`,null,[d(`세로 방향 Flex에서는 주축이 세로입니다. 주축 방향의 `),p(`code`,null,`auto`),d(` 여백은 남는 공간을 모두 흡수하므로, 버튼 영역 위쪽 여백이 늘어나 버튼이 하단으로 이동합니다.`)],-1),c(o,null,{default:t(()=>[...r[5]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`카드를 세로 Flex로`),d(),p(`code`,null,`flex-direction: column`)]),p(`li`,null,[p(`strong`,null,`남는 공간을 확보하고`),d(),p(`code`,null,`min-height`)]),p(`li`,null,[p(`strong`,null,`버튼 앞 여백이 흡수`),d(),p(`code`,null,`margin-top: auto`)])],-1)]]),_:1})]),p(`section`,j,[r[9]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 해결 코드`)],-1),r[10]||=p(`p`,null,[d(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),p(`code`,null,`.demo-action-area`),d(`의 자동 여백과 최소 간격을 확인하세요.`)],-1),c(l,{tabs:n(x)},null,8,[`tabs`])]),r[13]||=s(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>버튼 영역은 세로 Flex 컨테이너의 직접 자식이어야 합니다.</strong> 중간에 감싸는 요소가 있으면 그 요소에 Flex를 적용하세요.</li><li><strong>남는 공간이 없으면 자동 여백은 0이 됩니다.</strong> 카드 높이를 맞추려면 <code>min-height</code>나 같은 Grid 행의 늘이기(stretch)를 사용합니다.</li><li><strong>고정 <code>height</code> 대신 <code>min-height</code>를 사용합니다.</strong> 내용이 늘어날 때 카드가 함께 커져야 버튼과 본문이 겹치지 않습니다.</li><li><strong>최소 간격을 따로 확보합니다.</strong> 자동 여백은 0까지 줄어들 수 있으므로 <code>padding-top</code>으로 본문과의 간격을 유지하세요.</li><li><strong>화면 하단 고정과는 다릅니다.</strong> 이 방법은 카드 안에서의 정렬입니다. 화면에 고정하려면 <code>position: sticky</code>나 <code>fixed</code>를 검토하세요.</li></ul></section>`,1),p(`section`,M,[r[12]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),d(` 짧은 실습`)],-1),c(u,null,{default:t(()=>[...r[11]||=[p(`p`,null,`위 예제에서 긴 카드의 문단 수를 4개로, 카드 최소 높이를 160px로 바꿔보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`해결 상태에서 두 카드의 버튼이 같은 높이에 정렬된다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문단이 많아 공간이 모자라면 버튼이 본문 다음에 이어진다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`버튼과 본문 사이에 최소 간격이 유지된다.`)])])],-1)]]),_:1})])])}}};export{X as default,U as duration,z as group,N as id,G as keyProperty,R as lead,H as level,I as navTitle,P as order,W as prerequisites,Y as references,J as related,K as status,L as summary,V as tags,F as title,B as topic,q as updated};