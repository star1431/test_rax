import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";var l=[{label:`use-forward.scss`,language:`scss`,code:`// @use·@forward로 모듈 나누기 (실무 노트 SCSS 03)
// ui 폴더(_index.scss)를 불러옵니다. 네임스페이스는 폴더 이름 ui, with()로 기본 색을 바꿉니다.
@use 'ui' with (
  $primary: #2a8668
);

.button {
  padding: ui.$space-2 ui.$space-4;
  border-radius: ui.$radius;
  background: ui.$primary;
  color: #fff;

  &:focus-visible {
    @include ui.focus-ring;
  }
}
`},{label:`ui/_index.scss`,language:`scss`,code:`// 모듈 묶음: 폴더 이름으로 한 번에 불러오게 합니다. (@use 'ui')
// @forward는 불러온 파일의 변수·믹스인을 이 파일을 쓰는 쪽에 그대로 넘겨줍니다.
@forward 'tokens';
@forward 'mixins';
`},{label:`ui/_tokens.scss`,language:`scss`,code:`// 색·간격 토큰
// !default: 불러오는 쪽에서 with()로 바꿀 수 있는 기본값입니다.
$primary: #3162d4 !default;
$radius: 6px !default;

// 이름이 -로 시작하면 비공개: 이 파일 밖에서는 쓸 수 없습니다.
$-base: 4px;
$space-2: $-base * 2;
$space-4: $-base * 4;
`},{label:`ui/_mixins.scss`,language:`scss`,code:`// 공통 믹스인: 같은 폴더의 토큰을 네임스페이스(tokens.)로 불러 씁니다.
@use 'tokens';

@mixin focus-ring($color: tokens.$primary) {
  outline: 2px solid $color;
  outline-offset: 2px;
}
`},{label:`CSS 결과`,language:`css`,code:`.button {
  padding: 8px 16px;
  border-radius: 6px;
  background: #2a8668;
  color: #fff;
}
.button:focus-visible {
  outline: 2px solid #2a8668;
  outline-offset: 2px;
}`}],u={class:`doc-body`},d={id:`section-0`},f={id:`section-1`},p={id:`section-2`},m={id:`section-3`},h={id:`section-4`},g={id:`section-8`},_=`use-forward`,v=3,y=`@use·@forward로 모듈 나누기`,b=`@use·@forward`,x=`폐기 예정인 @import 대신 @use로 파일을 불러오고, @forward로 폴더를 하나의 모듈로 묶어 네임스페이스·비공개 변수·기본값 설정(with)을 활용합니다.`,S=`빌드할 때마다 @import 경고가 쌓이고 있다면?
파일은 @use로 불러오고, 여러 파일은 @forward로 묶어 한 번에 불러오세요.
`,C=`구조`,w=`모듈`,T=[`SCSS`,`@use`,`@forward`,`@import`,`네임스페이스`,`with`,`!default`,`_index.scss`],E=`중급`,D=`약 12분`,O=[`SCSS 변수`,`믹스인`],k=`@use 'ui'`,A=`published`,j=`2026-11-11`,M=[`each-utility`,`include-extend`],N=[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`Sass — @forward`,url:`https://sass-lang.com/documentation/at-rules/forward/`},{title:`Sass — @import 폐기 안내와 자동 변환 도구`,url:`https://sass-lang.com/d/import`}],P={__name:`use-forward`,setup(_,{expose:v}){return v({frontmatter:{id:`use-forward`,order:3,title:`@use·@forward로 모듈 나누기`,navTitle:`@use·@forward`,summary:`폐기 예정인 @import 대신 @use로 파일을 불러오고, @forward로 폴더를 하나의 모듈로 묶어 네임스페이스·비공개 변수·기본값 설정(with)을 활용합니다.`,lead:`빌드할 때마다 @import 경고가 쌓이고 있다면?
파일은 @use로 불러오고, 여러 파일은 @forward로 묶어 한 번에 불러오세요.
`,group:`구조`,topic:`모듈`,tags:[`SCSS`,`@use`,`@forward`,`@import`,`네임스페이스`,`with`,`!default`,`_index.scss`],level:`중급`,duration:`약 12분`,prerequisites:[`SCSS 변수`,`믹스인`],keyProperty:`@use 'ui'`,status:`published`,updated:`2026-11-11`,related:[`each-utility`,`include-extend`],references:[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`Sass — @forward`,url:`https://sass-lang.com/documentation/at-rules/forward/`},{title:`Sass — @import 폐기 안내와 자동 변환 도구`,url:`https://sass-lang.com/d/import`}]}}),(_,v)=>{let y=s(`DocIssue`),b=s(`DocTakeaway`),x=s(`DocDont`),S=s(`DocDo`),C=s(`DocDoDont`),w=s(`DocFlow`),T=s(`DocInspect`),E=s(`CodePanel`),D=s(`DocPractice`);return e(),i(`div`,u,[r(`section`,d,[v[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),v[3]||=r(`p`,null,[o(`변수 파일을 `),r(`code`,null,`@import`),o(`로 불러오는 기존 코드를 빌드하면 터미널에 경고가 나옵니다. 지금은 CSS가 정상으로 만들어지지만, Dart Sass 3.0부터는 `),r(`code`,null,`@import`),o(`가 제거되어 `),r(`strong`,null,`빌드가 실패`),o(`합니다.`)],-1),v[4]||=r(`pre`,null,[r(`code`,{class:`language-terminal`},[r(`figure`,{"v-pre":``,class:`doc-terminal`},[r(`figcaption`,{class:`doc-terminal-bar`},[r(`span`,{"aria-hidden":`true`}),r(`span`,{"aria-hidden":`true`}),r(`span`,{"aria-hidden":`true`}),o(`터미널`)]),r(`pre`,{tabindex:`0`},[r(`code`,{"v-pre":``},[r(`span`,{class:`terminal-line terminal-line-cmd`},[r(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),o(`npx sass styles/main.scss`)]),o(`
`),r(`span`,{class:`terminal-line terminal-line-yellow`},`DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.`),o(`
`),r(`span`,{class:`terminal-line`},` `),o(`
`),r(`span`,{class:`terminal-line`},`More info and automated migrator: https://sass-lang.com/d/import`),o(`
`),r(`span`,{class:`terminal-line`},` `),o(`
`),r(`span`,{class:`terminal-line`},`  ╷`),o(`
`),r(`span`,{class:`terminal-line`},`1 │ @import "variables";`),o(`
`),r(`span`,{class:`terminal-line`},`  │         ^^^^^^^^^^^`),o(`
`),r(`span`,{class:`terminal-line`},`  ╵`),o(`
`),r(`span`,{class:`terminal-line`},`    styles/main.scss 1:9  root stylesheet`)])])])])],-1),v[5]||=r(`p`,null,`화면은 정상이라 미뤄 두기 쉽고, 경고가 터미널을 가득 채우면서 개발자 문의로 돌아옵니다.`,-1),a(y,{label:`개발 문의`,title:`공통 SCSS: 개발 서버를 켤 때마다 @import 폐기 경고가 반복 출력됨`,env:`Vite · sass 1.x(Dart Sass) · 공통 변수 파일을 @import로 불러옴`,expected:`경고 없이 빌드되고 다른 경고를 바로 확인할 수 있음`,actual:`DEPRECATION WARNING [import]가 파일마다 출력됨, CSS 결과는 정상`},{default:n(()=>[...v[0]||=[r(`ol`,null,[r(`li`,null,`개발 서버를 실행합니다.`),r(`li`,null,`SCSS를 쓰는 화면을 열거나 파일을 저장합니다.`),r(`li`,null,`터미널에 출력되는 경고와 표시된 파일 위치를 확인합니다.`)],-1)]]),_:1}),a(b,null,{default:n(()=>[...v[1]||=[r(`p`,null,[o(`파일은 `),r(`strong`,null,[r(`code`,null,`@use`),o(`로`)]),o(` 불러와 `),r(`code`,null,`ui.$primary`),o(`처럼 `),r(`strong`,null,`네임스페이스`),o(`로 쓰고, 여러 파일은 폴더의 `),r(`code`,null,`_index.scss`),o(`에서 `),r(`strong`,null,[r(`code`,null,`@forward`),o(`로`)]),o(` 묶으세요.`)],-1)]]),_:1})]),r(`section`,f,[v[8]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` @import와 @use 비교`)],-1),a(C,null,{default:n(()=>[a(x,null,{default:n(()=>[...v[6]||=[r(`pre`,{class:`doc-code`,tabindex:`0`},[r(`code`,{class:`hljs`},[r(`span`,{class:`hljs-keyword`},`@import`),o(),r(`span`,{class:`hljs-string`},`'variables'`),o(`;
`),r(`span`,{class:`hljs-keyword`},`@import`),o(),r(`span`,{class:`hljs-string`},`'mixins'`),o(`;

`),r(`span`,{class:`hljs-selector-class`},`.button`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-variable`},`$primary`),o(`;
}
`)])],-1),r(`p`,null,[o(`불러온 모든 변수가 전역에 섞입니다. `),r(`code`,null,`$primary`),o(`가 어느 파일에서 왔는지 알 수 없고, 같은 이름이 있으면 나중 파일이 조용히 덮어씁니다.`)],-1)]]),_:1}),a(S,null,{default:n(()=>[...v[7]||=[r(`pre`,{class:`doc-code`,tabindex:`0`},[r(`code`,{class:`hljs`},[r(`span`,{class:`hljs-keyword`},`@use`),o(),r(`span`,{class:`hljs-string`},`'ui'`),o(`;

`),r(`span`,{class:`hljs-selector-class`},`.button`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: ui.`),r(`span`,{class:`hljs-variable`},`$primary`),o(`;
}
`)])],-1),r(`p`,null,[r(`code`,null,`ui.`),o(`으로 출처가 드러나고, 같은 이름이 있어도 네임스페이스가 달라 충돌하지 않습니다. 몇 번을 불러와도 한 번만 포함됩니다.`)],-1)]]),_:1})]),_:1}),v[9]||=c(`<div class="table-wrap"><table><thead><tr><th>구분</th><th><code>@import</code></th><th><code>@use</code></th></tr></thead><tbody><tr><td>변수 범위</td><td>전역에 모두 섞임</td><td>불러온 파일 안에서만, <code>네임스페이스.$변수</code></td></tr><tr><td>여러 번 불러오기</td><td>불러온 만큼 CSS가 중복 출력될 수 있음</td><td>한 번만 포함</td></tr><tr><td>비공개 변수</td><td>없음</td><td>이름이 <code>-</code>·<code>_</code>로 시작하면 파일 밖에서 사용 불가</td></tr><tr><td>기본값 바꾸기</td><td>불러오기 전에 변수를 먼저 선언</td><td><code>with ($primary: …)</code></td></tr><tr><td>앞으로</td><td>Dart Sass 3.0에서 제거</td><td>표준 방식</td></tr></tbody></table></div>`,1)]),r(`section`,p,[v[10]||=r(`h2`,null,[r(`span`,{class:`section-no`},`03`),o(` 모듈로 묶는 구조`)],-1),v[11]||=r(`p`,null,[o(`폴더 안 파일을 `),r(`code`,null,`_index.scss`),o(`에서 `),r(`code`,null,`@forward`),o(`로 모으면, 사용하는 쪽은 `),r(`strong`,null,`폴더 이름 한 줄`),o(`로 전부 불러옵니다. 네임스페이스는 마지막 경로 이름(`),r(`code`,null,`ui`),o(`)이 됩니다.`)],-1),a(w,{steps:[{title:`_tokens.scss · _mixins.scss`,desc:`변수·믹스인 정의`},{title:`ui/_index.scss`,desc:`폴더를 하나의 모듈로`},{title:`use-forward.scss`,desc:`ui.$primary로 사용`},{title:`CSS`,desc:`브라우저가 읽는 결과`}],arrows:[`@forward`,`@use 'ui'`,`컴파일`]})]),r(`section`,m,[v[13]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),v[14]||=r(`p`,null,[o(`경고가 많아 보여도 원인은 `),r(`strong`,null,[r(`code`,null,`@import`),o(`를 쓴 몇 줄`)]),o(`인 경우가 대부분입니다. 아래 순서로 그 줄을 모두 찾습니다.`)],-1),a(T,null,{default:n(()=>[...v[12]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`경고의 마지막 줄 확인`),o(` 경고 아래 `),r(`code`,null,`styles/main.scss 1:9`),o(`처럼 파일 이름과 줄·칸 번호가 나옵니다. 같은 경고가 많으면 일부만 출력될 수 있으므로, 처음 몇 개만 보고 끝내지 않습니다.`)]),r(`li`,null,[r(`strong`,null,[o(`프로젝트 전체에서 `),r(`code`,null,`@import`),o(` 검색`)]),r(`code`,null,`.scss`),o(` 파일과 Vue 파일의 `),r(`code`,null,`<style lang="scss">`),o(`에서 `),r(`code`,null,`@import`),o(`를 검색합니다. `),r(`code`,null,`@import url(…)`),o(`이나 `),r(`code`,null,`.css`),o(`로 끝나는 경로는 일반 CSS 가져오기로 남으므로 이 경고와 관계없습니다.`)]),r(`li`,null,[r(`strong`,null,`Vite 설정의 자동 주입 확인`),r(`code`,null,`vite.config`),o(`의 `),r(`code`,null,`css.preprocessorOptions.scss.additionalData`),o(`에 `),r(`code`,null,`@import`),o(`가 있으면, 모든 SCSS 파일 앞에 붙어 파일마다 경고가 납니다.`)]),r(`li`,null,[r(`strong`,null,`바꾼 뒤 결과 CSS 비교`),r(`code`,null,`@use`),o(`로 바꾼 뒤 빌드 결과 CSS를 이전 결과와 비교합니다. `),r(`code`,null,`@import`),o(`로 여러 번 불러와 중복 출력되던 규칙이 줄었는지, 빠진 규칙은 없는지 확인합니다.`)])],-1)]]),_:1})]),r(`section`,h,[v[15]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),v[16]||=r(`p`,null,[r(`code`,null,`ui`),o(` 폴더(토큰·믹스인·묶음 파일)와, 이를 불러와 버튼을 만드는 파일입니다. `),r(`strong`,null,`CSS 결과`),o(` 탭은 빌드할 때 실제로 컴파일한 출력입니다. `),r(`code`,null,`with()`),o(`로 바꾼 색(`),r(`code`,null,`#2a8668`),o(`)이 믹스인의 기본값까지 반영된 것을 확인하세요.`)],-1),a(E,{tabs:t(l)},null,8,[`tabs`]),v[17]||=c(`<ul><li><strong><code>!default</code></strong>: <code>with()</code>로 바꿀 수 있는 기본값 표시입니다. <code>!default</code>가 없는 변수는 <code>with()</code>로 바꿀 수 없습니다.</li><li><strong><code>$-base</code></strong>: 이름이 <code>-</code>로 시작하는 비공개 변수입니다. 토큰 계산에만 쓰고, 밖에서 <code>ui.$-base</code>로 쓰면 빌드 오류가 납니다.</li><li><strong><code>as</code></strong>: 네임스페이스 이름을 바꿉니다. <code>@use &#39;ui&#39; as u</code> → <code>u.$primary</code></li></ul>`,1)]),v[20]||=r(`section`,{id:`section-5`},[r(`h2`,null,[r(`span`,{class:`section-no`},`06`),o(` 자주 만나는 오류`)]),r(`p`,null,[r(`code`,null,`@use`),o(`로 바꾼 뒤 네임스페이스 없이 변수를 쓰면 `),r(`strong`,null,`변수가 없다는 오류`),o(`가 납니다. `),r(`code`,null,`@import`),o(`와 달리 전역에 풀리지 않기 때문입니다.`)]),r(`pre`,null,[r(`code`,{class:`language-terminal`},[r(`figure`,{"v-pre":``,class:`doc-terminal`},[r(`figcaption`,{class:`doc-terminal-bar`},[r(`span`,{"aria-hidden":`true`}),r(`span`,{"aria-hidden":`true`}),r(`span`,{"aria-hidden":`true`}),o(`터미널`)]),r(`pre`,{tabindex:`0`},[r(`code`,{"v-pre":``},[r(`span`,{class:`terminal-line terminal-line-cmd`},[r(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),o(`npx sass styles/use.scss`)]),o(`
`),r(`span`,{class:`terminal-line terminal-line-red`},`Error: Undefined variable.`),o(`
`),r(`span`,{class:`terminal-line`},`  ╷`),o(`
`),r(`span`,{class:`terminal-line`},`4 │   color: $primary;`),o(`
`),r(`span`,{class:`terminal-line`},`  │          ^^^^^^^^`),o(`
`),r(`span`,{class:`terminal-line`},`  ╵`),o(`
`),r(`span`,{class:`terminal-line`},`  styles/use.scss 4:10  root stylesheet`)])])])])]),r(`p`,null,[r(`code`,null,`variables.$primary`),o(`처럼 네임스페이스를 붙이거나, 공통 변수 파일처럼 거의 모든 파일이 쓰는 경우에는 `),r(`code`,null,`@use 'variables' as *`),o(`로 네임스페이스 없이 불러옵니다. 이 사이트의 SCSS도 공통 변수·믹스인은 `),r(`code`,null,`@use '../common/variables' as *`),o(`로 불러옵니다.`)])],-1),v[21]||=c(`<section id="section-6"><h2><span class="section-no">07</span> 비슷한 상황</h2><p><code>@import</code>를 정리할 때 함께 보이는 경고와 오류입니다. 모두 <strong>모듈 방식으로 옮기면서</strong> 해결합니다.</p><h3><code>/</code> 나누기 경고</h3><p><code>$a / 2</code>처럼 <code>/</code>로 나누면 폐기 예정 경고(<code>slash-div</code>)가 나옵니다. <code>sass:math</code> 모듈을 불러와 <code>math.div</code>를 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;sass:math&#39;</span>;

<span class="hljs-selector-class">.title</span> {
  <span class="hljs-attribute">margin-bottom</span>: math.<span class="hljs-built_in">div</span>(<span class="hljs-variable">$space</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">// $space / 2 대신</span>
}
</code></pre><h3>전역 내장 함수 경고</h3><p><code>map-get()</code>, <code>darken()</code> 같은 전역 함수는 <code>global-builtin</code> 경고가 나옵니다. 내장 모듈을 <code>@use</code>로 불러와 모듈 함수로 바꿉니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;sass:color&#39;</span>;
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;sass:map&#39;</span>;

<span class="hljs-selector-class">.button</span><span class="hljs-selector-pseudo">:hover</span> {
  <span class="hljs-attribute">background</span>: color.<span class="hljs-built_in">adjust</span>(<span class="hljs-variable">$primary</span>, <span class="hljs-variable">$lightness</span>: -<span class="hljs-number">10%</span>); <span class="hljs-comment">// darken() 대신</span>
  <span class="hljs-attribute">padding</span>: map.<span class="hljs-built_in">get</span>(<span class="hljs-variable">$spaces</span>, <span class="hljs-number">8</span>);                         <span class="hljs-comment">// map-get() 대신</span>
}
</code></pre><h3>묶은 파일끼리 이름이 겹칠 때</h3><p><code>_index.scss</code>에서 <code>@forward</code>한 두 파일에 같은 이름(<code>$size</code>)이 있으면 <code>Two forwarded modules both define a variable named $size.</code> 오류가 납니다. 한쪽에 접두사를 붙여 넘깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// ui/_index.scss</span>
<span class="hljs-keyword">@forward</span> <span class="hljs-string">&#39;tokens&#39;</span>;
<span class="hljs-keyword">@forward</span> <span class="hljs-string">&#39;icon&#39;</span> as icon-*; <span class="hljs-comment">// ui.$icon-size로 사용</span>
</code></pre></section><section id="section-7"><h2><span class="section-no">08</span> 적용 시 주의점</h2><ul><li><strong><code>as *</code>는 공통 파일에만 씁니다.</strong> 네임스페이스를 없애면 <code>@import</code>처럼 출처가 다시 흐려집니다. 변수·믹스인처럼 모든 파일이 쓰는 기반 파일에만 사용합니다.</li><li><strong><code>@use</code>는 파일 맨 위에 둡니다.</strong> <code>@forward</code>를 제외한 다른 규칙보다 먼저 와야 합니다.</li><li><strong><code>with()</code>는 처음 불러올 때 한 번만</strong> 설정할 수 있습니다. 진입 파일(<code>main.scss</code> 등)에서 설정하고, 나머지 파일은 설정 없이 불러옵니다.</li><li><strong>기존 코드는 자동 변환 도구를 씁니다.</strong> <code>npx sass-migrator module --migrate-deps main.scss</code>로 <code>@import</code>를 <code>@use</code>로 바꿀 수 있습니다. 변환 후에는 반드시 빌드 결과 CSS를 비교합니다.</li></ul></section>`,2),r(`section`,g,[v[19]||=r(`h2`,null,[r(`span`,{class:`section-no`},`09`),o(` 짧은 실습`)],-1),a(D,null,{default:n(()=>[...v[18]||=[r(`p`,null,`해결 코드의 파일을 보며 답해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[r(`code`,null,`use-forward.scss`),o(`에서 `),r(`code`,null,`with()`),o(`를 지우면 버튼 배경과 포커스 테두리가 `),r(`code`,null,`#3162d4`),o(`로 바뀌는 이유를 설명할 수 있다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[r(`code`,null,`ui.$-base`),o(`를 쓰면 왜 오류가 나는지 설명할 수 있다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[r(`code`,null,`@use 'ui' as u`),o(`로 바꿨을 때 `),r(`code`,null,`.button`),o(` 안에서 고쳐야 할 곳을 모두 찾을 수 있다.`)])])])],-1)]]),_:1})])])}}};export{P as default,D as duration,C as group,_ as id,k as keyProperty,S as lead,E as level,b as navTitle,v as order,O as prerequisites,N as references,M as related,A as status,x as summary,T as tags,y as title,w as topic,j as updated};