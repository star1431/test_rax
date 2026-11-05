import{E as e,F as t,H as n,I as r,O as i,c as a,f as o,it as s,m as c,o as l,ot as u,p as d,r as f,s as p,u as m,w as h,z as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{d as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y=`.demo-accordion {
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
}
.demo-accordion-head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  border: 0;
  background: none;
  font-weight: 700;
  text-align: left;
}
.demo-accordion-panel {
  display: grid;
  grid-template-rows: 0fr; /* 닫힘: 내용 높이의 0배 */
  visibility: hidden; /* 닫힌 내용은 Tab 이동과 스크린 리더에서 제외합니다. */
  transition: grid-template-rows 0.3s ease, visibility 0.3s;
}
.demo-accordion.is-open .demo-accordion-panel {
  grid-template-rows: 1fr; /* 열림: 내용 높이만큼 */
  visibility: visible;
}
.demo-accordion-inner {
  min-height: 0; /* 행이 0fr일 때 내용이 줄어들 수 있게 허용합니다. */
  overflow: hidden;
}
.demo-accordion-inner p {
  margin: 0;
  padding: 0 12px 10px;
}
@media (prefers-reduced-motion: reduce) {
  .demo-accordion-panel { transition: none; }
}
/* 비교를 위한 문제 상태: 흔히 쓰는 max-height 방식으로 되돌립니다. */
.is-problem .demo-accordion-panel {
  display: block;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease, visibility 0.6s;
}
.is-problem .demo-accordion.is-open .demo-accordion-panel { max-height: 120px; }
`,b=[`펼침 영역의 첫 번째 문단입니다.`,`내용 높이를 미리 알 수 없어도 열리고 닫힙니다.`,`문단이 늘어나면 펼침 높이도 함께 늘어납니다.`,`max-height 방식은 지정한 높이를 넘는 내용이 잘립니다.`,`닫을 때는 실제 높이와 max-height의 차이만큼 반응이 늦습니다.`,`Grid 방식은 행 크기를 0fr과 1fr 사이에서 전환합니다.`],x=[{label:`CSS`,language:`css`,code:y},{label:`HTML`,language:`xml`,code:`<div class="demo-accordion is-open">
  <button type="button" class="demo-accordion-head" aria-expanded="true" aria-controls="faq-1">
    자주 묻는 질문
  </button>
  <div id="faq-1" class="demo-accordion-panel">
    <div class="demo-accordion-inner">
      <p>펼침 내용…</p>
    </div>
  </div>
</div>`}],S={for:`demo-accordion-count`},C={class:`sample-buttons`},w=[`aria-pressed`],T=[`aria-expanded`,`aria-controls`],E={"aria-hidden":`true`},D=[`id`],O={class:`demo-accordion-inner`},k={__name:`GridAccordionDemo`,setup(n){let i=g(!1),o=g(4),c=l(()=>b.slice(0,o.value));return(n,l)=>(h(),a(v,{problem:{code:`max-height: 0 → 120px`,note:`긴 내용이 잘리고, 닫을 때 반응이 늦습니다.`},solved:{code:`grid-template-rows: 0fr → 1fr`,note:`내용 높이만큼 정확히 열리고 닫힙니다.`}},{controls:t(()=>[p(`label`,S,[l[3]||=d(`내용 문단 수 `,-1),p(`strong`,null,u(o.value)+`개`,1)]),r(p(`input`,{id:`demo-accordion-count`,"onUpdate:modelValue":l[0]||=e=>o.value=e,type:`range`,min:`1`,max:`6`,step:`1`},null,512),[[_,o.value,void 0,{number:!0}]]),l[4]||=p(`span`,null,`두 예제 함께`,-1),p(`div`,C,[p(`button`,{type:`button`,"aria-pressed":i.value,onClick:l[1]||=e=>i.value=!i.value},u(i.value?`모두 닫기`:`모두 펼치기`),9,w)])]),default:t(({solved:t})=>[p(`div`,{class:s([`demo-accordion`,{"is-open":i.value}])},[p(`button`,{type:`button`,class:`demo-accordion-head`,"aria-expanded":i.value,"aria-controls":`demo-accordion-${t?`solved`:`problem`}`,onClick:l[2]||=e=>i.value=!i.value},[l[5]||=d(` 자주 묻는 질문 `,-1),p(`span`,E,u(i.value?`−`:`+`),1)],8,T),p(`div`,{id:`demo-accordion-${t?`solved`:`problem`}`,class:`demo-accordion-panel`},[p(`div`,O,[(h(!0),m(f,null,e(c.value,e=>(h(),m(`p`,{key:e},u(e),1))),128))])],8,D)],2)]),caption:t(()=>[...l[6]||=[d(` 문단을 6개로 늘린 뒤 펼치고 닫아 보세요. 문제 상태는 120px 이후 내용이 잘리고, 닫힐 때 잠시 멈춘 듯 보입니다. `,-1)]]),_:1}))}},A={class:`doc-body`},j={id:`section-0`},M={id:`section-1`},N={id:`section-2`},P={id:`section-3`},F={id:`section-5`},I=`grid-accordion`,L=7,R=`높이를 모르는 아코디언 펼치기`,z=`아코디언 펼치기`,B=`height auto로는 전환되지 않는 펼침 영역을 grid-template-rows 0fr → 1fr 전환으로 내용 높이만큼 부드럽게 열고 닫습니다.`,V=`펼침 애니메이션 때문에 max-height에 큰 값을 넣고 있다면?
높이 대신 Grid 행의 비율을 전환해 보세요.
`,H=`모션`,U=`모션`,W=[`Grid`,`아코디언`,`transition`,`max-height`,`접근성`,`FAQ`],G=`중급`,K=`약 7분`,q=[`Grid 행`,`transition`,`overflow`],J=`grid-template-rows: 0fr`,Y=`published`,X=`2026-11-02`,Z=[`grid-flow`,`flex-scroll-area`],Q=[{title:`CSS Grid Layout — 트랙 크기 애니메이션(grid-template-rows)`,url:`https://www.w3.org/TR/css-grid-1/#track-sizing`},{title:`MDN — interpolate-size`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size`},{title:`WAI-ARIA APG — Accordion 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`}],$={__name:`grid-accordion`,setup(e,{expose:r}){return r({frontmatter:{id:`grid-accordion`,order:7,title:`높이를 모르는 아코디언 펼치기`,navTitle:`아코디언 펼치기`,summary:`height auto로는 전환되지 않는 펼침 영역을 grid-template-rows 0fr → 1fr 전환으로 내용 높이만큼 부드럽게 열고 닫습니다.`,lead:`펼침 애니메이션 때문에 max-height에 큰 값을 넣고 있다면?
높이 대신 Grid 행의 비율을 전환해 보세요.
`,group:`모션`,topic:`모션`,tags:[`Grid`,`아코디언`,`transition`,`max-height`,`접근성`,`FAQ`],level:`중급`,duration:`약 7분`,prerequisites:[`Grid 행`,`transition`,`overflow`],keyProperty:`grid-template-rows: 0fr`,status:`published`,updated:`2026-11-02`,related:[`grid-flow`,`flex-scroll-area`],references:[{title:`CSS Grid Layout — 트랙 크기 애니메이션(grid-template-rows)`,url:`https://www.w3.org/TR/css-grid-1/#track-sizing`},{title:`MDN — interpolate-size`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size`},{title:`WAI-ARIA APG — Accordion 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`}]}}),(e,r)=>{let a=i(`DocTakeaway`),s=i(`DocSteps`),l=i(`CodePanel`),u=i(`DocPractice`);return h(),m(`div`,A,[p(`section`,j,[r[1]||=p(`h2`,null,[p(`span`,{class:`section-no`},`01`),d(` 문제 상황`)],-1),r[2]||=p(`p`,null,[d(`FAQ 아코디언에 펼침 애니메이션을 넣으려고 했지만 `),p(`code`,null,`height: auto`),d(`는 전환되지 않습니다. 그래서 `),p(`code`,null,`max-height: 0`),d(`에서 충분히 큰 값으로 전환했더니, 큰 값보다 긴 내용은 잘리고 닫을 때는 잠시 멈춘 듯 늦게 반응합니다.`)],-1),c(a,null,{default:t(()=>[...r[0]||=[p(`p`,null,[d(`펼침 영역을 Grid로 만들고 `),p(`code`,null,`grid-template-rows`),d(`를 `),p(`strong`,null,`0fr → 1fr`),d(`로 전환하세요. 안쪽 요소에는 `),p(`code`,null,`min-height: 0`),d(`과 `),p(`code`,null,`overflow: hidden`),d(`이 필요합니다.`)],-1)]]),_:1})]),p(`section`,M,[r[3]||=p(`h2`,null,[p(`span`,{class:`section-no`},`02`),d(` 직접 비교하기`),p(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=p(`p`,null,`내용 문단 수를 바꾸고 두 예제를 함께 펼치고 닫아 보세요.`,-1),c(k)]),p(`section`,N,[r[6]||=o(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>전환(transition)은 시작 값과 끝 값 사이를 계산할 수 있을 때만 동작합니다. <code>auto</code>는 길이 값이 아니어서 <code>0</code>과 <code>auto</code> 사이를 계산할 수 없습니다.</p><p><code>max-height</code> 방식은 실제 높이가 아니라 <strong>지정한 최댓값</strong>까지 전환합니다. 최댓값이 내용보다 작으면 잘리고, 내용보다 크면 닫을 때 남는 차이만큼 아무 변화 없이 시간이 흐릅니다.</p><p>Grid의 <code>fr</code>은 남는 공간을 나누는 비율이고 숫자이므로 전환할 수 있습니다. 행을 <code>0fr</code>에서 <code>1fr</code>로 바꾸면 행 높이가 0에서 내용 높이까지 변합니다. 안쪽 요소는 행보다 작아질 수 있어야 하므로 <code>min-height: 0</code>으로 자동 최소 높이를 없애고, 넘친 내용은 <code>overflow: hidden</code>으로 가립니다.</p>`,4),c(s,null,{default:t(()=>[...r[5]||=[p(`ol`,null,[p(`li`,null,[p(`strong`,null,`펼침 영역을 Grid로`),d(),p(`code`,null,`display: grid`)]),p(`li`,null,[p(`strong`,null,`행 비율을 전환`),d(),p(`code`,null,`grid-template-rows: 0fr → 1fr`)]),p(`li`,null,[p(`strong`,null,`안쪽이 줄어들게`),d(),p(`code`,null,`min-height: 0`)])],-1)]]),_:1})]),p(`section`,P,[r[7]||=p(`h2`,null,[p(`span`,{class:`section-no`},`04`),d(` 해결 코드`)],-1),r[8]||=p(`p`,null,[d(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. 닫힌 상태의 `),p(`code`,null,`visibility: hidden`),d(`과 `),p(`code`,null,`prefers-reduced-motion`),d(` 처리도 함께 확인하세요.`)],-1),c(l,{tabs:n(x)},null,8,[`tabs`]),r[9]||=o(`<p>새 문법인 <code>interpolate-size: allow-keywords</code>를 사용하면 <code>height: auto</code> 자체를 전환할 수도 있습니다. Chromium 129부터 지원되며, 다른 브라우저의 지원 여부는 참고 자료의 MDN 호환성 표에서 확인하세요. 지원하지 않는 브라우저에서는 전환 없이 바로 열리고 닫히므로 점진적 개선으로 사용합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-pseudo">:root</span> {
  interpolate-size: allow-keywords;
}
<span class="hljs-selector-class">.panel</span> {
  <span class="hljs-attribute">height</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">overflow</span>: hidden;
  <span class="hljs-attribute">transition</span>: height <span class="hljs-number">0.3s</span> ease;
}
<span class="hljs-selector-class">.panel</span><span class="hljs-selector-class">.is-open</span> {
  <span class="hljs-attribute">height</span>: auto;
}
</code></pre>`,2)]),r[12]||=o(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>버튼에 상태를 알려줍니다.</strong> 펼침 버튼에 <code>aria-expanded</code>와 <code>aria-controls</code>를 지정합니다.</li><li><strong>닫힌 내용은 Tab 이동에서 빠져야 합니다.</strong> 높이만 0이면 안의 링크·버튼에 계속 포커스가 갑니다. <code>visibility: hidden</code>을 함께 전환하면 닫힘 전환이 끝난 뒤 제외됩니다.</li><li><strong>안쪽 요소에 패딩을 두지 않습니다.</strong> <code>.demo-accordion-inner</code>에 세로 패딩이 있으면 0fr에서도 그만큼 남습니다. 패딩은 그 안쪽 요소에 둡니다.</li><li><strong>움직임 줄이기 설정을 존중합니다.</strong> <code>prefers-reduced-motion: reduce</code>에서는 전환을 끕니다.</li></ul></section>`,1),p(`section`,F,[r[11]||=p(`h2`,null,[p(`span`,{class:`section-no`},`06`),d(` 짧은 실습`)],-1),c(u,null,{default:t(()=>[...r[10]||=[p(`p`,null,`위 예제에서 내용 문단 수를 6개로 바꾼 뒤 ‘모두 펼치기’와 ‘모두 닫기’를 눌러보세요.`,-1),p(`ul`,{class:`checklist`},[p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문제 상태는 일부 문단이 잘리고, 해결 상태는 모든 문단이 보인다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`문단을 1개로 줄이고 닫으면 문제 상태만 반응이 늦다.`)])]),p(`li`,null,[p(`label`,null,[p(`input`,{type:`checkbox`}),p(`span`,{class:`checklist-text`},`닫힌 상태에서 Tab을 누르면 펼침 영역 안으로 포커스가 들어가지 않는다.`)])])],-1)]]),_:1})])])}}};export{$ as default,K as duration,H as group,I as id,J as keyProperty,V as lead,G as level,z as navTitle,L as order,q as prerequisites,Q as references,Z as related,Y as status,B as summary,W as tags,R as title,U as topic,X as updated};