import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as l}from"./OutputCompare-vjryNoqn.js";var u=`.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 760px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}`,d=`// @content: 믹스인이 블록을 감싸게 합니다. (미디어 쿼리 믹스인)
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
`,f=`.notice-card {
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
}`,p=`// mixin으로 카드 스타일 공유 (실무 노트 SCSS 02)
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
`,m=`.faq-card, .event-card, .notice-card {
  padding: 16px;
  border: 1px solid #dfe3ea;
  border-radius: 8px;
  background: #fff;
}

.event-card {
  padding: 24px;
}`,h=`// placeholder로 카드 스타일 공유 (실무 노트 SCSS 02)
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
`,g=[{key:`mixin`,label:`@include (mixin)`,source:p,css:f,note:`쓴 자리마다 선언이 복사됩니다. 순서는 작성한 순서 그대로입니다.`},{key:`placeholder`,label:`@extend (placeholder)`,source:h,css:m,note:`선택자가 %card 자리에 묶이고, 순서가 작성 순서와 다릅니다.`}],_=[{label:`mixin`,language:`scss`,code:p},{label:`placeholder`,language:`scss`,code:h},{label:`@content (미디어 쿼리)`,language:`scss`,code:d},{label:`@content CSS 결과`,language:`css`,code:u}],v={class:`doc-body`},y={id:`section-0`},b={id:`section-1`},x={id:`section-3`},S={id:`section-4`},C={id:`section-6`},w={id:`section-7`},T=`include-extend`,E=2,D=`include와 extend 선택 기준`,O=`include와 extend`,k=`같은 스타일을 @include(mixin)와 @extend(placeholder)로 공유했을 때의 컴파일 결과를 비교하고, 미디어 쿼리 제약과 선택자 순서 문제를 바탕으로 무엇을 쓸지 정합니다.`,A=`공통 스타일을 @include로 쓸지, @extend로 쓸지 고민된다면?
기본은 @include, @extend는 조건이 맞을 때만 쓰세요.
`,j=`문법`,M=`재사용`,N=[`SCSS`,`@mixin`,`@include`,`@extend`,`placeholder`,`%`,`@content`,`미디어 쿼리`],P=`중급`,F=`약 11분`,I=[`믹스인`,`선택자 우선순위`],L=`기본은 @include`,R=`published`,z=`2026-11-11`,B=[`each-utility`,`use-forward`],V=[{title:`Sass — @mixin과 @include`,url:`https://sass-lang.com/documentation/at-rules/mixin/`},{title:`Sass — @extend`,url:`https://sass-lang.com/documentation/at-rules/extend/`}],H={__name:`include-extend`,setup(u,{expose:d}){return d({frontmatter:{id:`include-extend`,order:2,title:`include와 extend 선택 기준`,navTitle:`include와 extend`,summary:`같은 스타일을 @include(mixin)와 @extend(placeholder)로 공유했을 때의 컴파일 결과를 비교하고, 미디어 쿼리 제약과 선택자 순서 문제를 바탕으로 무엇을 쓸지 정합니다.`,lead:`공통 스타일을 @include로 쓸지, @extend로 쓸지 고민된다면?
기본은 @include, @extend는 조건이 맞을 때만 쓰세요.
`,group:`문법`,topic:`재사용`,tags:[`SCSS`,`@mixin`,`@include`,`@extend`,`placeholder`,`%`,`@content`,`미디어 쿼리`],level:`중급`,duration:`약 11분`,prerequisites:[`믹스인`,`선택자 우선순위`],keyProperty:`기본은 @include`,status:`published`,updated:`2026-11-11`,related:[`each-utility`,`use-forward`],references:[{title:`Sass — @mixin과 @include`,url:`https://sass-lang.com/documentation/at-rules/mixin/`},{title:`Sass — @extend`,url:`https://sass-lang.com/documentation/at-rules/extend/`}]}}),(u,d)=>{let f=s(`DocIssue`),p=s(`DocTakeaway`),m=s(`DocInspect`),h=s(`CodePanel`),T=s(`DocSteps`),E=s(`DocPractice`);return e(),i(`div`,v,[r(`section`,y,[d[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),d[3]||=r(`p`,null,[o(`공지·이벤트·FAQ 카드가 같은 테두리와 여백을 씁니다. 중복을 줄이려고 `),r(`code`,null,`@extend`),o(`로 바꿨더니 결과 CSS의 선택자 순서가 바뀌었고, 모바일 미디어 쿼리 안에서 같은 방법을 쓰자 `),r(`strong`,null,`빌드가 실패`),o(`했습니다.`)],-1),d[4]||=r(`pre`,null,[r(`code`,{class:`language-terminal`},[r(`figure`,{"v-pre":``,class:`doc-terminal`},[r(`figcaption`,{class:`doc-terminal-bar`},[r(`span`,{"aria-hidden":`true`}),r(`span`,{"aria-hidden":`true`}),r(`span`,{"aria-hidden":`true`}),o(`터미널`)]),r(`pre`,{tabindex:`0`},[r(`code`,{"v-pre":``},[r(`span`,{class:`terminal-line terminal-line-cmd`},[r(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),o(`npx sass styles/extend.scss`)]),o(`
`),r(`span`,{class:`terminal-line terminal-line-red`},`Error: You may not @extend selectors across media queries.`),o(`
`),r(`span`,{class:`terminal-line`},`    ╷`),o(`
`),r(`span`,{class:`terminal-line`},`1   │ %card {`),o(`
`),r(`span`,{class:`terminal-line`},`    │ ━━━━━ extended selector`),o(`
`),r(`span`,{class:`terminal-line`},`... │`),o(`
`),r(`span`,{class:`terminal-line`},`5   │ @media (max-width: 760px) {`),o(`
`),r(`span`,{class:`terminal-line`},`    │        ━━━━━━━━━━━━━━━━━━ extension @media`),o(`
`),r(`span`,{class:`terminal-line`},`... │`),o(`
`),r(`span`,{class:`terminal-line`},`7   │     @extend %card;`),o(`
`),r(`span`,{class:`terminal-line`},`    │     ^^^^^^^^^^^^^ extension`),o(`
`),r(`span`,{class:`terminal-line`},`    ╵`),o(`
`),r(`span`,{class:`terminal-line`},`  styles/extend.scss 7:5  root stylesheet`)])])])])],-1),d[5]||=r(`p`,null,`공통 스타일을 정리하는 작업 뒤, 로컬에서는 지나쳤다가 배포 빌드나 코드 리뷰에서 이런 형태로 돌아옵니다.`,-1),a(f,{label:`빌드 오류`,title:`게시판 카드 SCSS: 모바일 미디어 쿼리에 @extend 추가 후 빌드 실패`,env:`Vite · sass 1.x(Dart Sass) · %card placeholder 사용`,expected:`모바일(760px 이하)에서 카드 여백만 바뀌고 빌드 성공`,actual:`You may not @extend selectors across media queries 오류로 빌드 중단`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,[r(`code`,null,`@media (max-width: 760px)`),o(` 블록 안에 `),r(`code`,null,`@extend %card;`),o(`를 추가합니다.`)]),r(`li`,null,`터미널에서 빌드를 실행합니다.`),r(`li`,null,`오류 메시지와 표시된 파일·줄 번호를 확인합니다.`)],-1)]]),_:1}),a(p,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`공통 스타일은 `),r(`strong`,null,[r(`code`,null,`@mixin`),o(` + `),r(`code`,null,`@include`),o(`를`)]),o(` 기본으로 쓰세요. `),r(`code`,null,`@extend`),o(`는 미디어 쿼리 안에서 쓸 수 없고, 선택자를 예상하지 못한 위치로 묶습니다.`)],-1)]]),_:1})]),r(`section`,b,[d[6]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`)],-1),d[7]||=r(`p`,null,[o(`같은 카드 스타일을 두 방법으로 공유한 `),r(`strong`,null,`실제 컴파일 결과`),o(`입니다. 줄 수와 선택자 순서를 비교해 보세요.`)],-1),a(l,{items:t(g)},null,8,[`items`])]),d[18]||=c(`<section id="section-2"><h2><span class="section-no">03</span> 두 방법의 차이</h2><div class="table-wrap"><table><thead><tr><th>구분</th><th><code>@mixin</code> + <code>@include</code></th><th><code>%placeholder</code> + <code>@extend</code></th></tr></thead><tbody><tr><td>결과</td><td>쓴 자리마다 선언을 <strong>복사</strong></td><td>쓴 선택자를 <code>%placeholder</code> 자리에 <strong>묶음</strong></td></tr><tr><td>값 바꾸기</td><td>인수로 가능 <code>card(24px)</code></td><td>불가, 뒤에 선언을 덧붙여 덮어씀</td></tr><tr><td>미디어 쿼리 안</td><td>사용 가능</td><td><strong>사용 불가</strong>(빌드 오류)</td></tr><tr><td>선택자 순서</td><td>작성한 순서 그대로</td><td><code>%placeholder</code> 위치로 이동, 순서도 바뀔 수 있음</td></tr><tr><td>CSS 크기</td><td>쓴 만큼 늘어남</td><td>줄어듦</td></tr></tbody></table></div><p>CSS 크기 차이는 생각보다 작습니다. 서버가 CSS를 gzip 등으로 압축해 보내면 반복되는 선언은 매우 작게 줄어듭니다. 반면 <code>@extend</code>로 묶인 선택자는 <strong>다른 파일의 규칙과 순서가 얽혀</strong> 우선순위 문제를 찾기 어렵게 만듭니다.</p></section>`,1),r(`section`,x,[d[9]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[10]||=r(`p`,null,[r(`code`,null,`@extend`),o(` 문제는 SCSS 파일보다 `),r(`strong`,null,`컴파일된 CSS에서`),o(` 더 잘 보입니다. 오류 메시지와 결과 CSS를 아래 순서로 확인합니다.`)],-1),a(m,null,{default:n(()=>[...d[8]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`오류 메시지의 표시 읽기`),o(` 빌드 오류에는 원래 선택자(`),r(`code`,null,`extended selector`),o(`), 미디어 쿼리(`),r(`code`,null,`extension @media`),o(`), `),r(`code`,null,`@extend`),o(` 줄이 함께 표시됩니다. 마지막 줄의 파일 이름과 줄 번호로 바로 이동합니다.`)]),r(`li`,null,[r(`strong`,null,`결과 CSS에서 묶인 선택자 찾기`),o(` 빌드 결과 CSS에서 `),r(`code`,null,`.event-card`),o(`를 검색합니다. `),r(`code`,null,`.notice-card, .event-card, .faq-card`),o(`처럼 쉼표로 묶인 규칙이 있다면 `),r(`code`,null,`@extend`),o(`가 만든 것입니다.`)]),r(`li`,null,[r(`strong`,null,`Styles 탭에서 규칙 순서 확인`),o(` Elements 패널에서 `),r(`code`,null,`.event-card`),o(`를 선택합니다. Styles 탭에 같은 요소에 걸린 규칙이 여러 개 보이고, 소스 맵이 켜져 있으면 각 규칙 옆 링크가 `),r(`code`,null,`%card`),o(`나 `),r(`code`,null,`.event-card`),o(`를 쓴 `),r(`code`,null,`.scss`),o(` 줄을 가리킵니다.`)]),r(`li`,null,[r(`strong`,null,`일반 클래스 @extend 검색`),o(` 프로젝트에서 `),r(`code`,null,`@extend .`),o(`를 검색합니다. placeholder가 아닌 클래스를 확장한 곳이 있으면, 그 클래스가 들어간 다른 선택자까지 묶였는지 결과 CSS에서 확인합니다.`)])],-1)]]),_:1})]),r(`section`,S,[d[11]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[12]||=r(`p`,null,[o(`카드처럼 값이 조금씩 다른 스타일은 인수가 있는 mixin으로, 미디어 쿼리처럼 블록을 감싸는 공통 처리는 `),r(`code`,null,`@content`),o(` mixin으로 만듭니다. 이 사이트의 `),r(`code`,null,`@include mq(mobile) { … }`),o(`도 같은 방식입니다.`)],-1),a(h,{tabs:t(_)},null,8,[`tabs`])]),d[19]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p><code>@extend</code>와 placeholder를 쓰다 보면 아래 오류도 자주 만납니다. 모두 <strong>선택자를 묶는 방식</strong>에서 생깁니다.</p><h3>확장할 대상이 없을 때</h3><p><code>@extend</code>한 선택자가 어디에도 없으면 <code>The target selector was not found.</code> 오류가 납니다. placeholder 이름 오타나, 정의된 파일을 <code>@use</code>하지 않은 경우가 대부분입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;card&#39;</span>; <span class="hljs-comment">// %card가 정의된 파일</span>

<span class="hljs-selector-class">.notice-card</span> {
  <span class="hljs-keyword">@extend</span> %card; <span class="hljs-comment">// 이름이 다르거나 @use가 없으면 오류</span>
}
</code></pre><h3>비공개 placeholder를 다른 파일에서 쓸 때</h3><p>이름이 <code>-</code>나 <code>_</code>로 시작하는 placeholder(<code>%-card</code>)는 정의한 파일 안에서만 쓸 수 있습니다. 다른 파일에서 <code>@extend</code>하면 대상을 찾지 못한다는 오류가 납니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// _card.scss</span>
%-card { <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span>; } <span class="hljs-comment">// 이 파일 안에서만 사용</span>

<span class="hljs-comment">// notice.scss</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;card&#39;</span>;
<span class="hljs-selector-class">.notice-card</span> { <span class="hljs-keyword">@extend</span> %-card; } <span class="hljs-comment">// 오류</span>
</code></pre><h3>모바일에서만 값을 바꿀 때</h3><p>미디어 쿼리 안에서는 바깥 placeholder를 확장할 수 없습니다. 값을 바꾸는 목적이라면 인수가 있는 mixin을 미디어 쿼리 안에서 <code>@include</code>합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.notice-card</span> {
  <span class="hljs-keyword">@include</span> card;

  <span class="hljs-keyword">@include</span> mq(mobile) {
    <span class="hljs-keyword">@include</span> card(<span class="hljs-number">12px</span>);
  }
}
</code></pre></section>`,1),r(`section`,C,[d[14]||=r(`h2`,null,[r(`span`,{class:`section-no`},`07`),o(` 선택 기준`)],-1),a(T,null,{default:n(()=>[...d[13]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`값이 달라지거나 미디어 쿼리 안에서 쓴다`),o(),r(`code`,null,`@include`)]),r(`li`,null,[r(`strong`,null,`블록을 감싸는 처리(미디어 쿼리, 상태 선택자)`),o(),r(`code`,null,`@include + @content`)]),r(`li`,null,[r(`strong`,null,`완전히 같은 스타일을 같은 파일·같은 미디어 범위에서만 공유`),o(),r(`code`,null,`@extend %placeholder`)])],-1)]]),_:1}),d[15]||=c(`<ul><li><strong>팀에서 하나로 정했다면 그 규칙을 따릅니다.</strong> 이미 <code>@extend</code>를 쓰는 프로젝트라면 새 코드에서 갑자기 섞지 말고, 같은 파일 안에서만 쓰는지 확인합니다.</li><li><strong>일반 클래스는 <code>@extend</code>하지 않습니다.</strong> <code>.button</code>을 <code>@extend</code>하면 다른 파일의 <code>.button</code> 관련 규칙(<code>.header .button</code> 등)까지 따라 묶일 수 있습니다. 공유용이라면 출력되지 않는 <code>%placeholder</code>를 씁니다.</li><li><strong>mixin에 선언이 많다면 클래스로 뺍니다.</strong> 여러 화면에서 그대로 반복되는 스타일은 mixin보다 <code>.card</code> 같은 공통 클래스 하나를 HTML에 붙이는 편이 CSS도 작고 수정도 쉽습니다.</li></ul>`,1)]),r(`section`,w,[d[17]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(E,null,{default:n(()=>[...d[16]||=[r(`p`,null,`위 비교 예제와 해결 코드를 보며 답해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`placeholder 결과에서 `),r(`code`,null,`.event-card`),o(`의 `),r(`code`,null,`padding`),o(`이 24px이 되는 이유를 규칙 순서로 설명할 수 있다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`모바일에서만 카드 여백을 바꾸려면 `),r(`code`,null,`@include`),o(`와 `),r(`code`,null,`@extend`),o(` 중 무엇을 써야 하는지 답할 수 있다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[r(`code`,null,`@content`),o(` 탭의 SCSS가 CSS 결과에서 `),r(`code`,null,`@media`),o(` 블록으로 바뀐 위치를 찾을 수 있다.`)])])])],-1)]]),_:1})])])}}};export{H as default,F as duration,j as group,T as id,L as keyProperty,A as lead,P as level,O as navTitle,E as order,I as prerequisites,V as references,B as related,R as status,k as summary,N as tags,D as title,M as topic,z as updated};