import{E as e,F as t,H as n,O as r,at as i,c as a,f as o,i as s,l as c,m as l,o as u,ot as d,p as f,r as p,s as m,u as h,w as g,z as _}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y=`.demo-fixed-card {
  padding: 12px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
  transform: translateX(0); /* 예: 애니메이션 라이브러리가 넣은 transform */
}
.demo-fixed-card p {
  margin: 0 0 6px;
}
.demo-fixed-layer {
  position: fixed; /* 기준: 화면(뷰포트) — 조상에 transform이 있으면 그 조상 */
  right: 12px;
  bottom: 12px;
  left: 12px;
  padding: 10px 12px;
  border-radius: 6px;
  background: #23334b;
  color: #fff;
  font-size: 12px;
}
`,b=[{label:`transform`,style:{transform:`translateX(0)`}},{label:`filter`,style:{transform:`none`,filter:`blur(0)`}},{label:`will-change`,style:{transform:`none`,willChange:`transform`}},{label:`없음`,style:{transform:`none`}}],x=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<!-- 문제: 레이어가 transform이 있는 카드 안에 있습니다. -->
<div class="demo-fixed-card">
  <p>카드 내용</p>
  <div class="demo-fixed-layer" role="status">저장했습니다.</div>
</div>

<!-- 해결: 레이어를 body 바로 아래로 옮깁니다. -->
<body>
  <div class="demo-fixed-card">
    <p>카드 내용</p>
  </div>
  <div class="demo-fixed-layer" role="status">저장했습니다.</div>
</body>`},{label:`Vue`,language:`xml`,code:`<template>
  <div class="demo-fixed-card">
    <p>카드 내용</p>
    <!-- 컴포넌트 안에서 작성하되, 렌더링 위치는 body로 옮깁니다. -->
    <Teleport to="body">
      <div v-if="saved" class="demo-fixed-layer" role="status">저장했습니다.</div>
    </Teleport>
  </div>
</template>`}],S={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-fixed-label`},C=[`aria-checked`,`onClick`],w={class:`demo-screen-body`},T={key:0,id:`demo-fixed-root`},E={__name:`FixedTransformDemo`,setup(r){let o=_(b[0].label),l=u(()=>b.find(e=>e.label===o.value));return(r,u)=>(g(),a(v,{problem:{code:`레이어: 카드 안`,note:`레이어가 화면이 아닌 카드 하단에 붙습니다.`},solved:{code:`레이어: Teleport → 화면 직속`,note:`레이어가 화면 하단에 붙습니다.`},"viewport-class":`demo-viewport--screen`},{controls:t(()=>[u[0]||=m(`span`,{id:`demo-fixed-label`},`카드(조상)에 적용된 속성`,-1),m(`div`,S,[(g(!0),h(p,null,e(n(b),e=>(g(),h(`button`,{key:e.label,type:`button`,role:`radio`,"aria-checked":o.value===e.label,onClick:t=>o.value=e.label},d(e.label),9,C))),128))])]),default:t(({solved:e})=>[u[4]||=m(`div`,{class:`demo-screen-bar`},`가상 화면`,-1),m(`div`,w,[m(`div`,{class:`demo-fixed-card`,style:i(l.value.style)},[m(`p`,null,[u[1]||=f(`카드 내용입니다. 카드에 `,-1),m(`code`,null,d(o.value),1),u[2]||=f(` 속성이 있습니다.`,-1)]),(g(),a(s,{defer:``,to:`#demo-fixed-root`,disabled:!e},[u[3]||=m(`div`,{class:`demo-fixed-layer`,role:`status`},`저장했습니다.`,-1)],8,[`disabled`]))],4)]),e?(g(),h(`div`,T)):c(``,!0)]),caption:t(()=>[...u[5]||=[f(` 예제 화면 틀은 실제 화면을 덮지 않도록 transform으로 ‘가상 화면’을 만들었습니다. 본문에서 설명하는 원리를 그대로 이용한 것입니다. `,-1)]]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`fixed-transform`,P=4,F=`fixed 요소가 화면 기준으로 배치되지 않을 때`,I=`fixed 기준 오류`,L=`조상 요소의 transform·filter·will-change가 fixed 요소의 기준을 바꾸는 원리를 이해하고, 레이어를 body로 옮겨 해결합니다.`,R=`화면 하단에 붙어야 할 레이어가 카드 안에 붙는다면?
레이어의 속성보다 먼저, 조상 요소의 transform을 확인하세요.
`,z=`레이아웃`,B=`위치`,V=[`position`,`fixed`,`transform`,`Teleport`,`레이어`,`토스트`],H=`중급`,U=`약 7분`,W=[`position`,`containing block`],G=`transform → 기준 변경`,K=`published`,q=`2026-11-02`,J=[`flex-scroll-area`],Y=[{title:`CSS Transforms — transform 속성과 containing block`,url:`https://www.w3.org/TR/css-transforms-1/#transform-rendering`},{title:`MDN — 컨테이닝 블록`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block`},{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport`}],X={__name:`fixed-transform`,setup(e,{expose:i}){return i({frontmatter:{id:`fixed-transform`,order:4,title:`fixed 요소가 화면 기준으로 배치되지 않을 때`,navTitle:`fixed 기준 오류`,summary:`조상 요소의 transform·filter·will-change가 fixed 요소의 기준을 바꾸는 원리를 이해하고, 레이어를 body로 옮겨 해결합니다.`,lead:`화면 하단에 붙어야 할 레이어가 카드 안에 붙는다면?
레이어의 속성보다 먼저, 조상 요소의 transform을 확인하세요.
`,group:`레이아웃`,topic:`위치`,tags:[`position`,`fixed`,`transform`,`Teleport`,`레이어`,`토스트`],level:`중급`,duration:`약 7분`,prerequisites:[`position`,`containing block`],keyProperty:`transform → 기준 변경`,status:`published`,updated:`2026-11-02`,related:[`flex-scroll-area`],references:[{title:`CSS Transforms — transform 속성과 containing block`,url:`https://www.w3.org/TR/css-transforms-1/#transform-rendering`},{title:`MDN — 컨테이닝 블록`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block`},{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport`}]}}),(e,i)=>{let a=r(`DocTakeaway`),s=r(`DocTerm`),c=r(`DocSteps`),u=r(`CodePanel`),d=r(`DocPractice`);return g(),h(`div`,D,[m(`section`,O,[i[1]||=m(`h2`,null,[m(`span`,{class:`section-no`},`01`),f(` 문제 상황`)],-1),i[2]||=m(`p`,null,[f(`카드 안의 저장 버튼을 누르면 화면 하단에 알림 레이어(`),m(`code`,null,`position: fixed`),f(`)를 띄우려고 합니다. 그런데 레이어가 화면이 아니라 카드 하단에 붙고, 카드가 스크롤되면 함께 움직입니다.`)],-1),l(a,null,{default:t(()=>[...i[0]||=[m(`p`,null,[f(`조상에 `),m(`strong`,null,`transform`),f(` 계열 속성이 있으면, 레이어를 `),m(`code`,null,`body`),f(` 바로 아래로 옮기세요. Vue에서는 `),m(`code`,null,`<Teleport to="body">`),f(`를 사용합니다.`)],-1)]]),_:1})]),m(`section`,k,[i[3]||=m(`h2`,null,[m(`span`,{class:`section-no`},`02`),f(` 직접 비교하기`),m(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[4]||=m(`p`,null,`카드에 적용된 속성을 바꾸면서 레이어가 어디를 기준으로 붙는지 비교해 보세요. ‘없음’을 선택하면 두 상태가 같아집니다.`,-1),l(E)]),m(`section`,A,[i[10]||=m(`h2`,null,[m(`span`,{class:`section-no`},`03`),f(` 왜 이런 일이 생길까요?`)],-1),m(`p`,null,[i[6]||=m(`code`,null,`position: fixed`,-1),i[7]||=f(`는 보통 화면(`,-1),l(s,{term:`viewport`},{default:t(()=>[...i[5]||=[f(`뷰포트`,-1)]]),_:1}),i[8]||=o(`)을 기준으로 배치됩니다. 하지만 조상 요소에 <code>transform</code>, <code>filter</code>, <code>perspective</code>, <code>will-change: transform</code>, <code>contain: paint</code>, <code>backdrop-filter</code> 등이 있으면 그 조상이 <strong>fixed 요소의 기준</strong>(containing block)이 됩니다.`,15)]),i[11]||=m(`p`,null,[f(`이 속성들은 요소를 별도로 그리기 위한 기준을 만듭니다. 그래서 자손의 fixed 위치도 그 조상 안에서 계산되고, 조상의 `),m(`code`,null,`overflow: hidden`),f(`에 잘리기도 합니다. 레이어의 CSS를 아무리 바꿔도 해결되지 않는 이유입니다.`)],-1),l(c,null,{default:t(()=>[...i[9]||=[m(`ol`,null,[m(`li`,null,[m(`strong`,null,`조상에 transform 계열 속성`),f(),m(`code`,null,`transform`)]),m(`li`,null,[m(`strong`,null,`조상이 기준이 됨`),f(),m(`code`,null,`containing block`)]),m(`li`,null,[m(`strong`,null,`레이어를 기준 밖으로`),f(),m(`code`,null,`<Teleport to="body">`)])],-1)]]),_:1})]),m(`section`,j,[i[12]||=m(`h2`,null,[m(`span`,{class:`section-no`},`04`),f(` 해결 코드`)],-1),i[13]||=m(`p`,null,[f(`CSS는 그대로 두고 `),m(`strong`,null,`DOM 위치`),f(`를 바꾸는 것이 핵심입니다. HTML 탭에서 문제·해결 구조를, Vue 탭에서 Teleport 사용법을 확인하세요.`)],-1),l(u,{tabs:n(x)},null,8,[`tabs`]),i[14]||=o(`<p>조상의 transform을 직접 제거할 수 있다면 그 방법도 가능합니다. 위치 이동 애니메이션은 <code>transform</code> 대신 <code>translate</code> 속성이나 다른 방식으로 바꿀 수 있는지 검토하세요. 다만 <code>translate</code>, <code>rotate</code>, <code>scale</code> 개별 속성도 <code>none</code>이 아니면 같은 기준을 만듭니다.</p>`,1)]),i[17]||=o(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>라이브러리가 넣는 속성을 확인합니다.</strong> 슬라이더·애니메이션 라이브러리가 조상에 <code>transform</code>이나 <code>will-change</code>를 인라인 스타일로 넣는 경우가 많습니다. 개발자 도구의 Computed 탭에서 확인하세요.</li><li><strong>Teleport 대상이 먼저 있어야 합니다.</strong> <code>to</code>로 지정한 요소가 렌더링 시점에 없으면 오류가 납니다. 같은 컴포넌트 안의 요소로 옮길 때는 <code>defer</code> 속성을 사용합니다.</li><li><strong>레이어 동작은 따로 구현합니다.</strong> 위치를 옮겨도 배경 스크롤 잠금, 포커스 가두기, Escape 닫기 같은 동작은 자동으로 생기지 않습니다.</li><li><strong>스크린 리더 순서를 확인합니다.</strong> body 끝으로 옮긴 레이어는 읽기 순서도 바뀝니다. 알림은 <code>role=&quot;status&quot;</code>, 대화상자는 <code>role=&quot;dialog&quot;</code>와 포커스 이동을 함께 적용하세요.</li></ul></section>`,1),m(`section`,M,[i[16]||=m(`h2`,null,[m(`span`,{class:`section-no`},`06`),f(` 짧은 실습`)],-1),l(d,null,{default:t(()=>[...i[15]||=[m(`p`,null,`위 예제에서 카드 속성을 transform → filter → will-change → 없음 순서로 바꿔보세요.`,-1),m(`ul`,{class:`checklist`},[m(`li`,null,[m(`label`,null,[m(`input`,{type:`checkbox`}),m(`span`,{class:`checklist-text`},`transform, filter, will-change에서는 문제 상태의 레이어가 카드 하단에 붙는다.`)])]),m(`li`,null,[m(`label`,null,[m(`input`,{type:`checkbox`}),m(`span`,{class:`checklist-text`},`해결 상태의 레이어는 속성과 관계없이 화면 하단에 붙는다.`)])]),m(`li`,null,[m(`label`,null,[m(`input`,{type:`checkbox`}),m(`span`,{class:`checklist-text`},`‘없음’을 선택하면 두 상태의 레이어 위치가 같아진다.`)])])],-1)]]),_:1})])])}}};export{X as default,U as duration,z as group,N as id,G as keyProperty,R as lead,H as level,I as navTitle,P as order,W as prerequisites,Y as references,J as related,K as status,L as summary,V as tags,F as title,B as topic,q as updated};