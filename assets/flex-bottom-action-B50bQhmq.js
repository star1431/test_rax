import{$ as e,A as t,C as n,L as r,P as i,T as a,a as o,c as s,d as c,et as l,f as u,i as d,j as f,o as p,t as m,u as h,x as g}from"./runtime-core.esm-bundler-_PXz1bcR.js";import{o as _}from"./index-DhNIXVN4.js";import{t as v}from"./DemoCompare-C7skMkLc.js";var y=`.demo-action-cards {
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
</article>`}],S={for:`demo-count`},C={for:`demo-height`},w={class:`demo-action-cards`},T={class:`demo-action-title`},E={__name:`FlexBottomActionDemo`,setup(r){let a=i(3),u=i(240),h=d(()=>[{title:`짧은 카드`,texts:b.slice(0,1)},{title:`긴 카드`,texts:b.slice(0,a.value)}]);return(r,i)=>(g(),p(v,{problem:{code:`margin-top: 0`,note:`버튼 위치가 설명 길이를 따라 달라집니다.`},solved:{code:`margin-top: auto`,note:`버튼 영역이 카드 하단에 맞춰집니다.`}},{controls:t(()=>[o(`label`,S,[i[2]||=c(`긴 카드 문단 수 `,-1),o(`strong`,null,l(a.value)+`개`,1)]),f(o(`input`,{id:`demo-count`,"onUpdate:modelValue":i[0]||=e=>a.value=e,type:`range`,min:`1`,max:`4`,step:`1`},null,512),[[_,a.value,void 0,{number:!0}]]),o(`label`,C,[i[3]||=c(`카드 최소 높이 `,-1),o(`strong`,null,l(u.value)+`px`,1)]),f(o(`input`,{id:`demo-height`,"onUpdate:modelValue":i[1]||=e=>u.value=e,type:`range`,min:`160`,max:`320`,step:`20`},null,512),[[_,u.value,void 0,{number:!0}]])]),caption:t(()=>[...i[5]||=[c(` 예제의 ‘자세히 보기’ 버튼은 배치 확인용이며 동작하지 않습니다. `,-1)]]),default:t(()=>[o(`div`,w,[(g(!0),s(m,null,n(h.value,t=>(g(),s(`article`,{key:t.title,class:`demo-action-card`,style:e({minHeight:u.value+`px`})},[o(`strong`,T,l(t.title),1),(g(!0),s(m,null,n(t.texts,e=>(g(),s(`p`,{key:e},l(e),1))),128)),i[4]||=o(`div`,{class:`demo-action-area`},[o(`button`,{type:`button`,class:`demo-action-button`,tabindex:`-1`},`자세히 보기`)],-1)],4))),128))])]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`flex-bottom-action`,P=2,F=`내용 길이가 달라도 버튼을 하단에 배치하기`,I=`버튼 하단 배치`,L=`세로 Flex에서 버튼 영역에 margin-top auto를 적용해 남는 공간을 흡수하고, 카드마다 버튼을 하단에 맞춥니다.`,R=`카드마다 버튼 높이가 제각각이라면?
버튼을 밀어내는 대신, 버튼 앞의 남는 공간을 자동 여백으로 채우세요.
`,z=`CSS`,B=`CSS · 레이아웃`,V=`Flexbox`,H=[`Flex`,`margin`,`auto`,`카드`],U=`기초`,W=`약 5분`,G=[`주축`,`margin`],K=`margin-top: auto`,q=`published`,J=`2026-10-30`,Y=[`flex-ellipsis`],X=[{title:`CSS Flexbox — Aligning with auto margins`,url:`https://www.w3.org/TR/css-flexbox-1/#auto-margins`}],Z={__name:`flex-bottom-action`,setup(e,{expose:n}){return n({frontmatter:{id:`flex-bottom-action`,order:2,title:`내용 길이가 달라도 버튼을 하단에 배치하기`,navTitle:`버튼 하단 배치`,summary:`세로 Flex에서 버튼 영역에 margin-top auto를 적용해 남는 공간을 흡수하고, 카드마다 버튼을 하단에 맞춥니다.`,lead:`카드마다 버튼 높이가 제각각이라면?
버튼을 밀어내는 대신, 버튼 앞의 남는 공간을 자동 여백으로 채우세요.
`,category:`CSS`,group:`CSS · 레이아웃`,topic:`Flexbox`,tags:[`Flex`,`margin`,`auto`,`카드`],level:`기초`,duration:`약 5분`,prerequisites:[`주축`,`margin`],keyProperty:`margin-top: auto`,status:`published`,updated:`2026-10-30`,related:[`flex-ellipsis`],references:[{title:`CSS Flexbox — Aligning with auto margins`,url:`https://www.w3.org/TR/css-flexbox-1/#auto-margins`}]}}),(e,n)=>{let i=a(`DocTakeaway`),l=a(`DocSteps`),d=a(`CodePanel`),f=a(`DocPractice`);return g(),s(`div`,D,[o(`section`,O,[n[1]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),n[2]||=o(`p`,null,`같은 행에 놓인 카드들의 설명 분량이 달라, 카드 안의 버튼 높이가 제각각입니다. 설명은 위에 두고 버튼 영역만 카드 하단에 맞추고 싶습니다.`,-1),u(i,null,{default:t(()=>[...n[0]||=[o(`p`,null,[c(`카드를 `),o(`strong`,null,`세로 Flex`),c(`로 만들고, 버튼 영역에 `),o(`code`,null,`margin-top: auto`),c(`를 적용하세요.`)],-1)]]),_:1})]),o(`section`,k,[n[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),n[4]||=o(`p`,null,`긴 카드의 문단 수와 카드 최소 높이를 바꾸면서 버튼 위치를 비교해 보세요.`,-1),u(E)]),o(`section`,A,[n[6]||=o(`h2`,null,[o(`span`,{class:`section-no`},`03`),c(` 왜 이런 일이 생길까요?`)],-1),n[7]||=o(`p`,null,`블록 흐름에서 버튼은 설명 바로 다음에 놓입니다. 카드 높이가 같아도 남는 공간은 마지막 요소 아래에 생기므로, 설명이 짧은 카드일수록 버튼이 위로 올라갑니다.`,-1),n[8]||=o(`p`,null,[c(`세로 방향 Flex에서는 주축이 세로입니다. 주축 방향의 `),o(`code`,null,`auto`),c(` 여백은 남는 공간을 모두 흡수하므로, 버튼 영역 위쪽 여백이 늘어나 버튼이 하단으로 이동합니다.`)],-1),u(l,null,{default:t(()=>[...n[5]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`카드를 세로 Flex로`),c(),o(`code`,null,`flex-direction: column`)]),o(`li`,null,[o(`strong`,null,`남는 공간을 확보하고`),c(),o(`code`,null,`min-height`)]),o(`li`,null,[o(`strong`,null,`버튼 앞 여백이 흡수`),c(),o(`code`,null,`margin-top: auto`)])],-1)]]),_:1})]),o(`section`,j,[n[9]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),c(` 해결 코드`)],-1),n[10]||=o(`p`,null,[c(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. `),o(`code`,null,`.demo-action-area`),c(`의 자동 여백과 최소 간격을 확인하세요.`)],-1),u(d,{tabs:r(x)},null,8,[`tabs`])]),n[13]||=h(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>버튼 영역은 세로 Flex 컨테이너의 직접 자식이어야 합니다.</strong> 중간에 감싸는 요소가 있으면 그 요소에 Flex를 적용하세요.</li><li><strong>남는 공간이 없으면 자동 여백은 0이 됩니다.</strong> 카드 높이를 맞추려면 <code>min-height</code>나 같은 Grid 행의 늘이기(stretch)를 사용합니다.</li><li><strong>고정 <code>height</code> 대신 <code>min-height</code>를 사용합니다.</strong> 내용이 늘어날 때 카드가 함께 커져야 버튼과 본문이 겹치지 않습니다.</li><li><strong>최소 간격을 따로 확보합니다.</strong> 자동 여백은 0까지 줄어들 수 있으므로 <code>padding-top</code>으로 본문과의 간격을 유지하세요.</li><li><strong>화면 하단 고정과는 다릅니다.</strong> 이 방법은 카드 안에서의 정렬입니다. 화면에 고정하려면 <code>position: sticky</code>나 <code>fixed</code>를 검토하세요.</li></ul></section>`,1),o(`section`,M,[n[12]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),c(` 짧은 실습`)],-1),u(f,null,{default:t(()=>[...n[11]||=[o(`p`,null,`위 예제에서 긴 카드의 문단 수를 4개로, 카드 최소 높이를 160px로 바꿔보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태에서 두 카드의 버튼이 같은 높이에 정렬된다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`문단이 많아 공간이 모자라면 버튼이 본문 다음에 이어진다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`버튼과 본문 사이에 최소 간격이 유지된다.`)])])],-1)]]),_:1})])])}}};export{z as category,Z as default,W as duration,B as group,N as id,K as keyProperty,R as lead,U as level,I as navTitle,P as order,G as prerequisites,X as references,Y as related,q as status,L as summary,H as tags,F as title,V as topic,J as updated};