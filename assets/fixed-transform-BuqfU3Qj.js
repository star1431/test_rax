import{$ as e,A as t,C as n,L as r,P as i,T as a,a as o,c as s,d as c,et as l,f as u,i as d,n as f,o as p,s as m,t as h,u as g,x as _}from"./runtime-core.esm-bundler-_PXz1bcR.js";import{t as v}from"./DemoCompare-C7skMkLc.js";var y=`.demo-fixed-card {
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
</template>`}],S={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-fixed-label`},C=[`aria-checked`,`onClick`],w={class:`demo-screen-body`},T={key:0,id:`demo-fixed-root`},E={__name:`FixedTransformDemo`,setup(a){let u=i(b[0].label),g=d(()=>b.find(e=>e.label===u.value));return(i,a)=>(_(),p(v,{problem:{code:`레이어: 카드 안`,note:`레이어가 화면이 아닌 카드 하단에 붙습니다.`},solved:{code:`레이어: Teleport → 화면 직속`,note:`레이어가 화면 하단에 붙습니다.`},"viewport-class":`demo-viewport--screen`},{controls:t(()=>[a[0]||=o(`span`,{id:`demo-fixed-label`},`카드(조상)에 적용된 속성`,-1),o(`div`,S,[(_(!0),s(h,null,n(r(b),e=>(_(),s(`button`,{key:e.label,type:`button`,role:`radio`,"aria-checked":u.value===e.label,onClick:t=>u.value=e.label},l(e.label),9,C))),128))])]),default:t(({solved:t})=>[a[4]||=o(`div`,{class:`demo-screen-bar`},`가상 화면`,-1),o(`div`,w,[o(`div`,{class:`demo-fixed-card`,style:e(g.value.style)},[o(`p`,null,[a[1]||=c(`카드 내용입니다. 카드에 `,-1),o(`code`,null,l(u.value),1),a[2]||=c(` 속성이 있습니다.`,-1)]),(_(),p(f,{defer:``,to:`#demo-fixed-root`,disabled:!t},[a[3]||=o(`div`,{class:`demo-fixed-layer`,role:`status`},`저장했습니다.`,-1)],8,[`disabled`]))],4)]),t?(_(),s(`div`,T)):m(``,!0)]),caption:t(()=>[...a[5]||=[c(` 예제 화면 틀은 실제 화면을 덮지 않도록 transform으로 ‘가상 화면’을 만들었습니다. 본문에서 설명하는 원리를 그대로 이용한 것입니다. `,-1)]]),_:1}))}},D={class:`doc-body`},O={id:`section-0`},k={id:`section-1`},A={id:`section-2`},j={id:`section-3`},M={id:`section-5`},N=`fixed-transform`,P=4,F=`fixed 요소가 화면 기준으로 배치되지 않을 때`,I=`fixed 기준 오류`,L=`조상 요소의 transform·filter·will-change가 fixed 요소의 기준을 바꾸는 원리를 이해하고, 레이어를 body로 옮겨 해결합니다.`,R=`화면 하단에 붙어야 할 레이어가 카드 안에 붙는다면?
레이어의 속성보다 먼저, 조상 요소의 transform을 확인하세요.
`,z=`CSS`,B=`CSS · 레이아웃`,V=`위치`,H=[`position`,`fixed`,`transform`,`Teleport`,`레이어`,`토스트`],U=`중급`,W=`약 7분`,G=[`position`,`containing block`],K=`transform → 기준 변경`,q=`published`,J=`2026-11-02`,Y=[`flex-scroll-area`],X=[{title:`CSS Transforms — transform 속성과 containing block`,url:`https://www.w3.org/TR/css-transforms-1/#transform-rendering`},{title:`MDN — 컨테이닝 블록`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block`},{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport`}],Z={__name:`fixed-transform`,setup(e,{expose:n}){return n({frontmatter:{id:`fixed-transform`,order:4,title:`fixed 요소가 화면 기준으로 배치되지 않을 때`,navTitle:`fixed 기준 오류`,summary:`조상 요소의 transform·filter·will-change가 fixed 요소의 기준을 바꾸는 원리를 이해하고, 레이어를 body로 옮겨 해결합니다.`,lead:`화면 하단에 붙어야 할 레이어가 카드 안에 붙는다면?
레이어의 속성보다 먼저, 조상 요소의 transform을 확인하세요.
`,category:`CSS`,group:`CSS · 레이아웃`,topic:`위치`,tags:[`position`,`fixed`,`transform`,`Teleport`,`레이어`,`토스트`],level:`중급`,duration:`약 7분`,prerequisites:[`position`,`containing block`],keyProperty:`transform → 기준 변경`,status:`published`,updated:`2026-11-02`,related:[`flex-scroll-area`],references:[{title:`CSS Transforms — transform 속성과 containing block`,url:`https://www.w3.org/TR/css-transforms-1/#transform-rendering`},{title:`MDN — 컨테이닝 블록`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block`},{title:`Vue — Teleport`,url:`https://ko.vuejs.org/guide/built-ins/teleport`}]}}),(e,n)=>{let i=a(`DocTakeaway`),l=a(`DocTerm`),d=a(`DocSteps`),f=a(`CodePanel`),p=a(`DocPractice`);return _(),s(`div`,D,[o(`section`,O,[n[1]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),n[2]||=o(`p`,null,[c(`카드 안의 저장 버튼을 누르면 화면 하단에 알림 레이어(`),o(`code`,null,`position: fixed`),c(`)를 띄우려고 합니다. 그런데 레이어가 화면이 아니라 카드 하단에 붙고, 카드가 스크롤되면 함께 움직입니다.`)],-1),u(i,null,{default:t(()=>[...n[0]||=[o(`p`,null,[c(`조상에 `),o(`strong`,null,`transform`),c(` 계열 속성이 있으면, 레이어를 `),o(`code`,null,`body`),c(` 바로 아래로 옮기세요. Vue에서는 `),o(`code`,null,`<Teleport to="body">`),c(`를 사용합니다.`)],-1)]]),_:1})]),o(`section`,k,[n[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),n[4]||=o(`p`,null,`카드에 적용된 속성을 바꾸면서 레이어가 어디를 기준으로 붙는지 비교해 보세요. ‘없음’을 선택하면 두 상태가 같아집니다.`,-1),u(E)]),o(`section`,A,[n[10]||=o(`h2`,null,[o(`span`,{class:`section-no`},`03`),c(` 왜 이런 일이 생길까요?`)],-1),o(`p`,null,[n[6]||=o(`code`,null,`position: fixed`,-1),n[7]||=c(`는 보통 화면(`,-1),u(l,{term:`viewport`},{default:t(()=>[...n[5]||=[c(`뷰포트`,-1)]]),_:1}),n[8]||=g(`)을 기준으로 배치됩니다. 하지만 조상 요소에 <code>transform</code>, <code>filter</code>, <code>perspective</code>, <code>will-change: transform</code>, <code>contain: paint</code>, <code>backdrop-filter</code> 등이 있으면 그 조상이 <strong>fixed 요소의 기준</strong>(containing block)이 됩니다.`,15)]),n[11]||=o(`p`,null,[c(`이 속성들은 요소를 별도로 그리기 위한 기준을 만듭니다. 그래서 자손의 fixed 위치도 그 조상 안에서 계산되고, 조상의 `),o(`code`,null,`overflow: hidden`),c(`에 잘리기도 합니다. 레이어의 CSS를 아무리 바꿔도 해결되지 않는 이유입니다.`)],-1),u(d,null,{default:t(()=>[...n[9]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`조상에 transform 계열 속성`),c(),o(`code`,null,`transform`)]),o(`li`,null,[o(`strong`,null,`조상이 기준이 됨`),c(),o(`code`,null,`containing block`)]),o(`li`,null,[o(`strong`,null,`레이어를 기준 밖으로`),c(),o(`code`,null,`<Teleport to="body">`)])],-1)]]),_:1})]),o(`section`,j,[n[12]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),c(` 해결 코드`)],-1),n[13]||=o(`p`,null,[c(`CSS는 그대로 두고 `),o(`strong`,null,`DOM 위치`),c(`를 바꾸는 것이 핵심입니다. HTML 탭에서 문제·해결 구조를, Vue 탭에서 Teleport 사용법을 확인하세요.`)],-1),u(f,{tabs:r(x)},null,8,[`tabs`]),n[14]||=g(`<p>조상의 transform을 직접 제거할 수 있다면 그 방법도 가능합니다. 위치 이동 애니메이션은 <code>transform</code> 대신 <code>translate</code> 속성이나 다른 방식으로 바꿀 수 있는지 검토하세요. 다만 <code>translate</code>, <code>rotate</code>, <code>scale</code> 개별 속성도 <code>none</code>이 아니면 같은 기준을 만듭니다.</p>`,1)]),n[17]||=g(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>라이브러리가 넣는 속성을 확인합니다.</strong> 슬라이더·애니메이션 라이브러리가 조상에 <code>transform</code>이나 <code>will-change</code>를 인라인 스타일로 넣는 경우가 많습니다. 개발자 도구의 Computed 탭에서 확인하세요.</li><li><strong>Teleport 대상이 먼저 있어야 합니다.</strong> <code>to</code>로 지정한 요소가 렌더링 시점에 없으면 오류가 납니다. 같은 컴포넌트 안의 요소로 옮길 때는 <code>defer</code> 속성을 사용합니다.</li><li><strong>레이어 동작은 따로 구현합니다.</strong> 위치를 옮겨도 배경 스크롤 잠금, 포커스 가두기, Escape 닫기 같은 동작은 자동으로 생기지 않습니다.</li><li><strong>스크린 리더 순서를 확인합니다.</strong> body 끝으로 옮긴 레이어는 읽기 순서도 바뀝니다. 알림은 <code>role=&quot;status&quot;</code>, 대화상자는 <code>role=&quot;dialog&quot;</code>와 포커스 이동을 함께 적용하세요.</li></ul></section>`,1),o(`section`,M,[n[16]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),c(` 짧은 실습`)],-1),u(p,null,{default:t(()=>[...n[15]||=[o(`p`,null,`위 예제에서 카드 속성을 transform → filter → will-change → 없음 순서로 바꿔보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`transform, filter, will-change에서는 문제 상태의 레이어가 카드 하단에 붙는다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`해결 상태의 레이어는 속성과 관계없이 화면 하단에 붙는다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`‘없음’을 선택하면 두 상태의 레이어 위치가 같아진다.`)])])],-1)]]),_:1})])])}}};export{z as category,Z as default,W as duration,B as group,N as id,K as keyProperty,R as lead,U as level,I as navTitle,P as order,G as prerequisites,X as references,Y as related,q as status,L as summary,H as tags,F as title,V as topic,J as updated};