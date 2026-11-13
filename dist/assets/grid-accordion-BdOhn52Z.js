import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,ut as h,z as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as _}from"./index-DHgvQBhl.js";import{t as v}from"./DemoCompare-Bd6h8ThJ.js";var y=`.demo-accordion {
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
</div>`}],S={for:`demo-accordion-count`},C={class:`sample-buttons`},w=[`aria-pressed`],T=[`aria-expanded`,`aria-controls`],E={"aria-hidden":`true`},D=[`id`],O={class:`demo-accordion-inner`},k={__name:`GridAccordionDemo`,setup(t){let o=n(!1),c=n(4),d=m(()=>b.slice(0,c.value));return(t,n)=>(e(),u(v,{problem:{code:`max-height: 0 → 120px`,note:`긴 내용이 잘리고, 닫을 때 반응이 늦습니다.`},solved:{code:`grid-template-rows: 0fr → 1fr`,note:`내용 높이만큼 정확히 열리고 닫힙니다.`}},{controls:r(()=>[i(`label`,S,[n[3]||=s(`내용 문단 수 `,-1),i(`strong`,null,f(c.value)+`개`,1)]),g(i(`input`,{id:`demo-accordion-count`,"onUpdate:modelValue":n[0]||=e=>c.value=e,type:`range`,min:`1`,max:`6`,step:`1`},null,512),[[_,c.value,void 0,{number:!0}]]),n[4]||=i(`span`,null,`두 예제 함께`,-1),i(`div`,C,[i(`button`,{type:`button`,"aria-pressed":o.value,onClick:n[1]||=e=>o.value=!o.value},f(o.value?`모두 닫기`:`모두 펼치기`),9,w)])]),default:r(({solved:t})=>[i(`div`,{class:h([`demo-accordion`,{"is-open":o.value}])},[i(`button`,{type:`button`,class:`demo-accordion-head`,"aria-expanded":o.value,"aria-controls":`demo-accordion-${t?`solved`:`problem`}`,onClick:n[2]||=e=>o.value=!o.value},[n[5]||=s(` 자주 묻는 질문 `,-1),i(`span`,E,f(o.value?`−`:`+`),1)],8,T),i(`div`,{id:`demo-accordion-${t?`solved`:`problem`}`,class:`demo-accordion-panel`},[i(`div`,O,[(e(!0),a(p,null,l(d.value,t=>(e(),a(`p`,{key:t},f(t),1))),128))])],8,D)],2)]),caption:r(()=>[...n[6]||=[s(` 문단을 6개로 늘린 뒤 펼치고 닫아 보세요. 문제 상태는 120px 이후 내용이 잘리고, 닫힐 때 잠시 멈춘 듯 보입니다. `,-1)]]),_:1}))}},A={class:`doc-body`},j={id:`section-0`},M={id:`section-1`},N={id:`section-2`},ee={id:`section-3`},P={id:`section-4`},F={id:`section-7`},I=`grid-accordion`,L=7,R=`높이를 모르는 아코디언 펼치기`,z=`아코디언 펼치기`,B=`height auto로는 전환되지 않는 펼침 영역을 grid-template-rows 0fr → 1fr 전환으로 내용 높이만큼 부드럽게 열고 닫습니다.`,V=`펼침 애니메이션 때문에 max-height에 큰 값을 넣고 있다면?
높이 대신 Grid 행의 비율을 전환해 보세요.
`,H=`모션`,U=`모션`,W=[`Grid`,`아코디언`,`transition`,`max-height`,`접근성`,`FAQ`],G=`중급`,K=`약 11분`,q=[`Grid 행`,`transition`,`overflow`],J=`grid-template-rows: 0fr`,Y=`published`,X=`2026-11-11`,Z=[`grid-flow`,`flex-scroll-area`],Q=[{title:`CSS Grid Layout — 트랙 크기 애니메이션(grid-template-rows)`,url:`https://www.w3.org/TR/css-grid-1/#track-sizing`},{title:`MDN — interpolate-size`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size`},{title:`WAI-ARIA APG — Accordion 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`}],$={__name:`grid-accordion`,setup(n,{expose:l}){return l({frontmatter:{id:`grid-accordion`,order:7,title:`높이를 모르는 아코디언 펼치기`,navTitle:`아코디언 펼치기`,summary:`height auto로는 전환되지 않는 펼침 영역을 grid-template-rows 0fr → 1fr 전환으로 내용 높이만큼 부드럽게 열고 닫습니다.`,lead:`펼침 애니메이션 때문에 max-height에 큰 값을 넣고 있다면?
높이 대신 Grid 행의 비율을 전환해 보세요.
`,group:`모션`,topic:`모션`,tags:[`Grid`,`아코디언`,`transition`,`max-height`,`접근성`,`FAQ`],level:`중급`,duration:`약 11분`,prerequisites:[`Grid 행`,`transition`,`overflow`],keyProperty:`grid-template-rows: 0fr`,status:`published`,updated:`2026-11-11`,related:[`grid-flow`,`flex-scroll-area`],references:[{title:`CSS Grid Layout — 트랙 크기 애니메이션(grid-template-rows)`,url:`https://www.w3.org/TR/css-grid-1/#track-sizing`},{title:`MDN — interpolate-size`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size`},{title:`WAI-ARIA APG — Accordion 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`DocPractice`);return e(),a(`div`,A,[i(`section`,j,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,[s(`FAQ 아코디언에 펼침 애니메이션을 넣으려고 했지만 `),i(`code`,null,`height: auto`),s(`는 전환되지 않습니다. 그래서 `),i(`code`,null,`max-height: 0`),s(`에서 충분히 큰 값으로 전환했더니, 큰 값보다 긴 내용은 잘리고 닫을 때는 잠시 멈춘 듯 늦게 반응합니다.`)],-1),l[4]||=i(`p`,null,`짧은 샘플 답변으로 확인할 때는 문제가 없다가, 실제 답변이 등록된 뒤 QA에서 이런 형태로 돌아옵니다.`,-1),o(u,{title:`FAQ: 긴 답변의 아래쪽이 잘리고 닫기가 늦게 반응함`,env:`전체 브라우저 · 답변이 6문단 이상인 FAQ 항목`,expected:`답변 전체가 펼쳐지고, 닫기를 누르면 바로 접히기 시작함`,actual:`답변 아래쪽이 보이지 않음, 닫기를 누르면 잠시 멈췄다가 접힘`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`답변이 6문단 이상인 FAQ 항목을 등록합니다.`),i(`li`,null,`FAQ 화면에서 해당 질문을 눌러 펼칩니다.`),i(`li`,null,`답변 마지막 문단을 확인한 뒤 다시 눌러 닫습니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`펼침 영역을 Grid로 만들고 `),i(`code`,null,`grid-template-rows`),s(`를 `),i(`strong`,null,`0fr → 1fr`),s(`로 전환하세요. 안쪽 요소에는 `),i(`code`,null,`min-height: 0`),s(`과 `),i(`code`,null,`overflow: hidden`),s(`이 필요합니다.`)],-1)]]),_:1})]),i(`section`,M,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[6]||=i(`p`,null,`내용 문단 수를 바꾸고 두 예제를 함께 펼치고 닫아 보세요.`,-1),o(k)]),i(`section`,N,[l[8]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>전환(transition)은 시작 값과 끝 값 사이를 계산할 수 있을 때만 동작합니다. <code>auto</code>는 길이 값이 아니어서 <code>0</code>과 <code>auto</code> 사이를 계산할 수 없습니다.</p><p><code>max-height</code> 방식은 실제 높이가 아니라 <strong>지정한 최댓값</strong>까지 전환합니다. 최댓값이 내용보다 작으면 잘리고, 내용보다 크면 닫을 때 남는 차이만큼 아무 변화 없이 시간이 흐릅니다.</p><p>Grid의 <code>fr</code>은 남는 공간을 나누는 비율이고 숫자이므로 전환할 수 있습니다. 행을 <code>0fr</code>에서 <code>1fr</code>로 바꾸면 행 높이가 0에서 내용 높이까지 변합니다. 안쪽 요소는 행보다 작아질 수 있어야 하므로 <code>min-height: 0</code>으로 자동 최소 높이를 없애고, 넘친 내용은 <code>overflow: hidden</code>으로 가립니다.</p>`,4),o(p,null,{default:r(()=>[...l[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`펼침 영역을 Grid로`),s(),i(`code`,null,`display: grid`)]),i(`li`,null,[i(`strong`,null,`행 비율을 전환`),s(),i(`code`,null,`grid-template-rows: 0fr → 1fr`)]),i(`li`,null,[i(`strong`,null,`안쪽이 줄어들게`),s(),i(`code`,null,`min-height: 0`)])],-1)]]),_:1})]),i(`section`,ee,[l[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[11]||=i(`p`,null,[s(`펼침 영역이 잘리거나 늦게 닫힐 때는 `),i(`strong`,null,`전환되는 속성이 실제 높이인지, 지정한 최댓값인지`),s(`부터 확인합니다. 문제 상태 예제를 펼친 채로 아래 순서를 따라 해 보세요.`)],-1),o(m,null,{default:r(()=>[...l[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 펼침 영역 선택`),s(` 버튼이 아니라 `),i(`code`,null,`.demo-accordion-panel`),s(`을 선택합니다. 이 요소에 높이 전환이 걸려 있습니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 전환 속성 확인`),i(`code`,null,`transition`),s(`에 적힌 속성을 봅니다. `),i(`code`,null,`max-height`),s(`가 전환되고 있다면 실제 높이가 아니라 지정한 최댓값까지 움직이는 것입니다.`)]),i(`li`,null,[i(`strong`,null,`안쪽 요소의 실제 높이와 비교`),i(`code`,null,`.demo-accordion-inner`),s(`를 선택하고 Computed 탭의 `),i(`code`,null,`height`),s(`를 확인합니다. 이 값이 `),i(`code`,null,`max-height`),s(`(120px)보다 크면 그 차이만큼 잘립니다.`)]),i(`li`,null,[i(`strong`,null,`Animations 패널에서 닫힘을 느리게 재생`),s(` More tools에서 Animations 패널을 열고 재생 속도를 25%로 낮춥니다. 문단을 1개로 줄여 펼쳤다 닫으면, 전환이 시작돼도 한동안 높이가 변하지 않는 구간이 보입니다.`)]),i(`li`,null,[i(`strong`,null,`해결 상태는 grid 오버레이로 확인`),s(` 해결 예제의 `),i(`code`,null,`.demo-accordion-panel`),s(` 옆 `),i(`code`,null,`grid`),s(` 배지를 누르면 행 영역이 표시됩니다. 열린 상태에서 Computed 탭의 `),i(`code`,null,`grid-template-rows`),s(`는 내용 높이와 같은 px 값으로 보입니다.`)])],-1)]]),_:1})]),i(`section`,P,[l[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[13]||=i(`p`,null,[s(`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. 닫힌 상태의 `),i(`code`,null,`visibility: hidden`),s(`과 `),i(`code`,null,`prefers-reduced-motion`),s(` 처리도 함께 확인하세요.`)],-1),o(h,{tabs:t(x)},null,8,[`tabs`]),l[14]||=d(`<p>새 문법인 <code>interpolate-size: allow-keywords</code>를 사용하면 <code>height: auto</code> 자체를 전환할 수도 있습니다. Chromium 129부터 지원되며, 다른 브라우저의 지원 여부는 참고 자료의 MDN 호환성 표에서 확인하세요. 지원하지 않는 브라우저에서는 전환 없이 바로 열리고 닫히므로 점진적 개선으로 사용합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-pseudo">:root</span> {
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
</code></pre>`,2)]),l[17]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>같은 원인(<code>auto</code>는 전환할 수 없음)이 다른 펼침 UI에서도 나타납니다. 증상이 같다면 아래를 함께 확인하세요.</p><h3>가로로 펼치는 패널</h3><p>사이드 메뉴처럼 너비를 펼칠 때도 <code>width: auto</code>는 전환되지 않습니다. 같은 원리로 <code>grid-template-columns</code>를 <strong>0fr → 1fr</strong>로 전환하고, 안쪽 요소에 <code>min-width: 0</code>을 지정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.side-panel</span> {
  <span class="hljs-attribute">display</span>: grid;
  <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">0</span>fr;
  <span class="hljs-attribute">transition</span>: grid-template-columns <span class="hljs-number">0.3s</span> ease;
}
<span class="hljs-selector-class">.side-panel</span><span class="hljs-selector-class">.is-open</span> { <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">1</span>fr; }
<span class="hljs-selector-class">.side-panel-inner</span> { <span class="hljs-attribute">min-width</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">overflow</span>: hidden; }
</code></pre><h3>details 요소로 만든 아코디언</h3><p><code>details</code>는 닫힐 때 내용이 바로 숨겨지므로, 안쪽에 Grid를 넣어도 닫힘 전환이 보이지 않습니다. Chromium 131부터 지원되는 <code>::details-content</code>와 <code>interpolate-size</code>를 함께 쓰면 전환할 수 있습니다. 다른 브라우저의 지원 여부는 MDN 호환성 표에서 확인하고, 점진적 개선으로 사용합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-pseudo">:root</span> { interpolate-size: allow-keywords; }
<span class="hljs-selector-tag">details</span>::details-content {
  <span class="hljs-attribute">block-size</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">overflow</span>: hidden;
  <span class="hljs-attribute">transition</span>: block-size <span class="hljs-number">0.3s</span> ease, content-visibility <span class="hljs-number">0.3s</span> allow-discrete;
}
<span class="hljs-selector-tag">details</span><span class="hljs-selector-attr">[open]</span>::details-content { <span class="hljs-attribute">block-size</span>: auto; }
</code></pre><h3>스크립트로 높이를 재서 넣는 방식</h3><p><code>scrollHeight</code>를 읽어 px 높이를 넣는 방식도 자주 쓰입니다. 펼친 뒤 내용이 바뀌면 저장한 높이가 맞지 않아 다시 잘리므로, 변경될 때마다 다시 재야 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 펼친 뒤 이미지가 로드되거나 문단이 늘어나면 이 값은 맞지 않습니다.</span>
panel.<span class="hljs-property">style</span>.<span class="hljs-property">height</span> = <span class="hljs-string">\`<span class="hljs-subst">\${panel.scrollHeight}</span>px\`</span>
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>버튼에 상태를 알려줍니다.</strong> 펼침 버튼에 <code>aria-expanded</code>와 <code>aria-controls</code>를 지정합니다.</li><li><strong>닫힌 내용은 Tab 이동에서 빠져야 합니다.</strong> 높이만 0이면 안의 링크·버튼에 계속 포커스가 갑니다. <code>visibility: hidden</code>을 함께 전환하면 닫힘 전환이 끝난 뒤 제외됩니다.</li><li><strong>안쪽 요소에 패딩을 두지 않습니다.</strong> <code>.demo-accordion-inner</code>에 세로 패딩이 있으면 0fr에서도 그만큼 남습니다. 패딩은 그 안쪽 요소에 둡니다.</li><li><strong>움직임 줄이기 설정을 존중합니다.</strong> <code>prefers-reduced-motion: reduce</code>에서는 전환을 끕니다.</li><li><strong>펼침 영역의 자식은 하나로 감쌉니다.</strong> 지정한 행은 <code>0fr</code> 하나뿐이라, 자식이 여럿이면 두 번째부터는 자동 행에 놓여 접히지 않습니다.</li></ul></section>`,2),i(`section`,F,[l[16]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(g,null,{default:r(()=>[...l[15]||=[i(`p`,null,`위 예제에서 내용 문단 수를 6개로 바꾼 뒤 ‘모두 펼치기’와 ‘모두 닫기’를 눌러보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문제 상태는 일부 문단이 잘리고, 해결 상태는 모든 문단이 보인다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문단을 1개로 줄이고 닫으면 문제 상태만 반응이 늦다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`닫힌 상태에서 Tab을 누르면 펼침 영역 안으로 포커스가 들어가지 않는다.`)])])],-1)]]),_:1})])])}}};export{$ as default,K as duration,H as group,I as id,J as keyProperty,V as lead,G as level,z as navTitle,L as order,q as prerequisites,Q as references,Z as related,Y as status,B as summary,W as tags,R as title,U as topic,X as updated};