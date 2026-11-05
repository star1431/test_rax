import{E as e,F as t,H as n,O as r,f as i,m as a,ot as o,p as s,r as c,s as l,u,w as d,z as f}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{t as p}from"./highlight-DI8AeOIq.js";var m={class:`demo-shell`},h={class:`demo-controls`},g={class:`sample-buttons`,role:`group`,"aria-labelledby":`compare-view`},_=[`aria-pressed`],v=[`aria-pressed`],y={class:`comparison`},b={class:`comparison-heading`},x=[`aria-label`],S=[`innerHTML`],C={__name:`OutputCompare`,props:{items:{type:Array,required:!0}},setup(t){let r=f(`css`),i=e=>e.trim().split(`
`).length;return(a,s)=>(d(),u(`div`,m,[l(`div`,h,[s[2]||=l(`span`,{class:`demo-label`,id:`compare-view`},`보기`,-1),l(`div`,g,[l(`button`,{type:`button`,"aria-pressed":r.value===`css`,onClick:s[0]||=e=>r.value=`css`},`CSS 결과`,8,_),l(`button`,{type:`button`,"aria-pressed":r.value===`source`,onClick:s[1]||=e=>r.value=`source`},`SCSS 원문`,8,v)])]),l(`div`,y,[(d(!0),u(c,null,e(t.items,e=>(d(),u(`div`,{key:e.key,class:`comparison-card demo-output-card`},[l(`div`,b,[l(`strong`,null,o(e.label),1),l(`code`,null,o(i(r.value===`css`?e.css:e.source))+`줄`,1)]),l(`pre`,{class:`demo-output`,tabindex:`0`,"aria-label":`${e.label} ${r.value===`css`?`CSS 결과`:`SCSS 원문`}`},[l(`code`,{class:`hljs`,innerHTML:r.value===`css`?n(p)(e.css,`css`):n(p)(e.source,`scss`)},null,8,S)],8,x),l(`p`,null,o(e.note),1)]))),128))])]))}},w=`.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 760px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}`,T=`// @content: 믹스인이 블록을 감싸게 합니다. (미디어 쿼리 믹스인)
@use 'sass:map';

$breakpoints: (
  tablet: 1150px,
  mobile: 760px,
);

@mixin mq($name) {
  @media (max-width: map.get($breakpoints, $name)) {
    @content;
  }
}

.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @include mq(mobile) {
    grid-template-columns: 1fr;
  }
}
`,E=`.notice-card {
  padding: 16px;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}

.event-card {
  padding: 24px;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}

.faq-card {
  padding: 16px;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}`,D=`// mixin으로 카드 스타일 공유 (실무 노트 SCSS 02)
// @include한 자리마다 선언이 복사됩니다. 인수로 값을 바꿀 수 있습니다.
@mixin card($padding: 16px) {
  padding: $padding;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}

.notice-card {
  @include card;
}

.event-card {
  @include card(24px);
}

.faq-card {
  @include card;
}
`,O=`.faq-card, .event-card, .notice-card {
  padding: 16px;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}

.event-card {
  padding: 24px;
}`,k=`// placeholder로 카드 스타일 공유 (실무 노트 SCSS 02)
// %card는 그 자체로는 출력되지 않고, @extend한 선택자들이 한 규칙으로 묶입니다.
%card {
  padding: 16px;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}

.notice-card {
  @extend %card;
}

.event-card {
  @extend %card;
  padding: 24px;
}

.faq-card {
  @extend %card;
}
`,A=[{key:`mixin`,label:`@include (mixin)`,source:D,css:E,note:`쓴 자리마다 선언이 복사됩니다. 순서는 작성한 순서 그대로입니다.`},{key:`placeholder`,label:`@extend (placeholder)`,source:k,css:O,note:`선택자가 %card 자리에 묶이고, 순서가 작성 순서와 다릅니다.`}],j=[{label:`mixin`,language:`scss`,code:D},{label:`placeholder`,language:`scss`,code:k},{label:`@content (미디어 쿼리)`,language:`scss`,code:T},{label:`@content CSS 결과`,language:`css`,code:w}],M={class:`doc-body`},N={id:`section-0`},ee={id:`section-1`},P={id:`section-3`},F={id:`section-4`},I={id:`section-5`},L=`include-extend`,R=2,z=`include와 extend 선택 기준`,B=`include와 extend`,V=`같은 스타일을 @include(mixin)와 @extend(placeholder)로 공유했을 때의 컴파일 결과를 비교하고, 미디어 쿼리 제약과 선택자 순서 문제를 바탕으로 무엇을 쓸지 정합니다.`,H=`공통 스타일을 @include로 쓸지, @extend로 쓸지 고민된다면?
기본은 @include, @extend는 조건이 맞을 때만 쓰세요.
`,U=`문법`,W=`재사용`,G=[`SCSS`,`@mixin`,`@include`,`@extend`,`placeholder`,`%`,`@content`,`미디어 쿼리`],K=`중급`,q=`약 7분`,J=[`믹스인`,`선택자 우선순위`],Y=`기본은 @include`,X=`published`,Z=`2026-11-05`,Q=[`each-utility`,`use-forward`],$=[{title:`Sass — @mixin과 @include`,url:`https://sass-lang.com/documentation/at-rules/mixin/`},{title:`Sass — @extend`,url:`https://sass-lang.com/documentation/at-rules/extend/`}],te={__name:`include-extend`,setup(e,{expose:o}){return o({frontmatter:{id:`include-extend`,order:2,title:`include와 extend 선택 기준`,navTitle:`include와 extend`,summary:`같은 스타일을 @include(mixin)와 @extend(placeholder)로 공유했을 때의 컴파일 결과를 비교하고, 미디어 쿼리 제약과 선택자 순서 문제를 바탕으로 무엇을 쓸지 정합니다.`,lead:`공통 스타일을 @include로 쓸지, @extend로 쓸지 고민된다면?
기본은 @include, @extend는 조건이 맞을 때만 쓰세요.
`,group:`문법`,topic:`재사용`,tags:[`SCSS`,`@mixin`,`@include`,`@extend`,`placeholder`,`%`,`@content`,`미디어 쿼리`],level:`중급`,duration:`약 7분`,prerequisites:[`믹스인`,`선택자 우선순위`],keyProperty:`기본은 @include`,status:`published`,updated:`2026-11-05`,related:[`each-utility`,`use-forward`],references:[{title:`Sass — @mixin과 @include`,url:`https://sass-lang.com/documentation/at-rules/mixin/`},{title:`Sass — @extend`,url:`https://sass-lang.com/documentation/at-rules/extend/`}]}}),(e,o)=>{let c=r(`DocTakeaway`),f=r(`CodePanel`),p=r(`DocSteps`),m=r(`DocPractice`);return d(),u(`div`,M,[l(`section`,N,[o[1]||=l(`h2`,null,[l(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),o[2]||=l(`p`,null,[s(`공지·이벤트·FAQ 카드가 같은 테두리와 여백을 씁니다. 중복을 줄이려고 `),l(`code`,null,`@extend`),s(`로 바꿨더니 결과 CSS의 선택자 순서가 바뀌었고, 모바일 미디어 쿼리 안에서 같은 방법을 쓰자 `),l(`strong`,null,`빌드가 실패`),s(`했습니다.`)],-1),o[3]||=l(`pre`,null,[l(`code`,{class:`language-terminal`},[l(`figure`,{"v-pre":``,class:`doc-terminal`},[l(`figcaption`,{class:`doc-terminal-bar`},[l(`span`,{"aria-hidden":`true`}),l(`span`,{"aria-hidden":`true`}),l(`span`,{"aria-hidden":`true`}),s(`터미널`)]),l(`pre`,{tabindex:`0`},[l(`code`,{"v-pre":``},[l(`span`,{class:`terminal-line terminal-line--cmd`},[l(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),s(`npx sass styles/extend.scss`)]),s(`
`),l(`span`,{class:`terminal-line terminal-line--red`},`Error: You may not @extend selectors across media queries.`),s(`
`),l(`span`,{class:`terminal-line`},`    ╷`),s(`
`),l(`span`,{class:`terminal-line`},`1   │ %card {`),s(`
`),l(`span`,{class:`terminal-line`},`    │ ━━━━━ extended selector`),s(`
`),l(`span`,{class:`terminal-line`},`... │`),s(`
`),l(`span`,{class:`terminal-line`},`5   │ @media (max-width: 760px) {`),s(`
`),l(`span`,{class:`terminal-line`},`    │        ━━━━━━━━━━━━━━━━━━ extension @media`),s(`
`),l(`span`,{class:`terminal-line`},`... │`),s(`
`),l(`span`,{class:`terminal-line`},`7   │     @extend %card;`),s(`
`),l(`span`,{class:`terminal-line`},`    │     ^^^^^^^^^^^^^ extension`),s(`
`),l(`span`,{class:`terminal-line`},`    ╵`),s(`
`),l(`span`,{class:`terminal-line`},`  styles/extend.scss 7:5  root stylesheet`)])])])])],-1),a(c,null,{default:t(()=>[...o[0]||=[l(`p`,null,[s(`공통 스타일은 `),l(`strong`,null,[l(`code`,null,`@mixin`),s(` + `),l(`code`,null,`@include`),s(`를`)]),s(` 기본으로 쓰세요. `),l(`code`,null,`@extend`),s(`는 미디어 쿼리 안에서 쓸 수 없고, 선택자를 예상하지 못한 위치로 묶습니다.`)],-1)]]),_:1})]),l(`section`,ee,[o[4]||=l(`h2`,null,[l(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`)],-1),o[5]||=l(`p`,null,[s(`같은 카드 스타일을 두 방법으로 공유한 `),l(`strong`,null,`실제 컴파일 결과`),s(`입니다. 줄 수와 선택자 순서를 비교해 보세요.`)],-1),a(C,{items:n(A)},null,8,[`items`])]),o[13]||=i(`<section id="section-2"><h2><span class="section-no">03</span> 두 방법의 차이</h2><div class="table-wrap"><table><thead><tr><th>구분</th><th><code>@mixin</code> + <code>@include</code></th><th><code>%placeholder</code> + <code>@extend</code></th></tr></thead><tbody><tr><td>결과</td><td>쓴 자리마다 선언을 <strong>복사</strong></td><td>쓴 선택자를 <code>%placeholder</code> 자리에 <strong>묶음</strong></td></tr><tr><td>값 바꾸기</td><td>인수로 가능 <code>card(24px)</code></td><td>불가, 뒤에 선언을 덧붙여 덮어씀</td></tr><tr><td>미디어 쿼리 안</td><td>사용 가능</td><td><strong>사용 불가</strong>(빌드 오류)</td></tr><tr><td>선택자 순서</td><td>작성한 순서 그대로</td><td><code>%placeholder</code> 위치로 이동, 순서도 바뀔 수 있음</td></tr><tr><td>CSS 크기</td><td>쓴 만큼 늘어남</td><td>줄어듦</td></tr></tbody></table></div><p>CSS 크기 차이는 생각보다 작습니다. 서버가 CSS를 gzip 등으로 압축해 보내면 반복되는 선언은 매우 작게 줄어듭니다. 반면 <code>@extend</code>로 묶인 선택자는 <strong>다른 파일의 규칙과 순서가 얽혀</strong> 우선순위 문제를 찾기 어렵게 만듭니다.</p></section>`,1),l(`section`,P,[o[6]||=l(`h2`,null,[l(`span`,{class:`section-no`},`04`),s(` 해결 코드`)],-1),o[7]||=l(`p`,null,[s(`카드처럼 값이 조금씩 다른 스타일은 인수가 있는 mixin으로, 미디어 쿼리처럼 블록을 감싸는 공통 처리는 `),l(`code`,null,`@content`),s(` mixin으로 만듭니다. 이 사이트의 `),l(`code`,null,`@include mq(mobile) { … }`),s(`도 같은 방식입니다.`)],-1),a(f,{tabs:n(j)},null,8,[`tabs`])]),l(`section`,F,[o[9]||=l(`h2`,null,[l(`span`,{class:`section-no`},`05`),s(` 선택 기준`)],-1),a(p,null,{default:t(()=>[...o[8]||=[l(`ol`,null,[l(`li`,null,[l(`strong`,null,`값이 달라지거나 미디어 쿼리 안에서 쓴다`),s(),l(`code`,null,`@include`)]),l(`li`,null,[l(`strong`,null,`블록을 감싸는 처리(미디어 쿼리, 상태 선택자)`),s(),l(`code`,null,`@include + @content`)]),l(`li`,null,[l(`strong`,null,`완전히 같은 스타일을 같은 파일·같은 미디어 범위에서만 공유`),s(),l(`code`,null,`@extend %placeholder`)])],-1)]]),_:1}),o[10]||=i(`<ul><li><strong>팀에서 하나로 정했다면 그 규칙을 따릅니다.</strong> 이미 <code>@extend</code>를 쓰는 프로젝트라면 새 코드에서 갑자기 섞지 말고, 같은 파일 안에서만 쓰는지 확인합니다.</li><li><strong>일반 클래스는 <code>@extend</code>하지 않습니다.</strong> <code>.button</code>을 <code>@extend</code>하면 다른 파일의 <code>.button</code> 관련 규칙(<code>.header .button</code> 등)까지 따라 묶일 수 있습니다. 공유용이라면 출력되지 않는 <code>%placeholder</code>를 씁니다.</li><li><strong>mixin에 선언이 많다면 클래스로 뺍니다.</strong> 여러 화면에서 그대로 반복되는 스타일은 mixin보다 <code>.card</code> 같은 공통 클래스 하나를 HTML에 붙이는 편이 CSS도 작고 수정도 쉽습니다.</li></ul>`,1)]),l(`section`,I,[o[12]||=l(`h2`,null,[l(`span`,{class:`section-no`},`06`),s(` 짧은 실습`)],-1),a(m,null,{default:t(()=>[...o[11]||=[l(`p`,null,`위 비교 예제와 해결 코드를 보며 답해 보세요.`,-1),l(`ul`,{class:`checklist`},[l(`li`,null,[l(`label`,null,[l(`input`,{type:`checkbox`}),l(`span`,{class:`checklist-text`},[s(`placeholder 결과에서 `),l(`code`,null,`.event-card`),s(`의 `),l(`code`,null,`padding`),s(`이 24px이 되는 이유를 규칙 순서로 설명할 수 있다.`)])])]),l(`li`,null,[l(`label`,null,[l(`input`,{type:`checkbox`}),l(`span`,{class:`checklist-text`},[s(`모바일에서만 카드 여백을 바꾸려면 `),l(`code`,null,`@include`),s(`와 `),l(`code`,null,`@extend`),s(` 중 무엇을 써야 하는지 답할 수 있다.`)])])]),l(`li`,null,[l(`label`,null,[l(`input`,{type:`checkbox`}),l(`span`,{class:`checklist-text`},[l(`code`,null,`@content`),s(` 탭의 SCSS가 CSS 결과에서 `),l(`code`,null,`@media`),s(` 블록으로 바뀐 위치를 찾을 수 있다.`)])])])],-1)]]),_:1})])])}}};export{te as default,q as duration,U as group,L as id,Y as keyProperty,H as lead,K as level,B as navTitle,R as order,J as prerequisites,$ as references,Q as related,X as status,V as summary,G as tags,z as title,W as topic,Z as updated};