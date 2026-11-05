import{F as e,H as t,O as n,f as r,m as i,p as a,s as o,u as s,w as c}from"./runtime-core.esm-bundler-DaAiWlfC.js";var l=[{label:`use-forward.scss`,language:`scss`,code:`// @use·@forward로 모듈 나누기 (실무 노트 SCSS 03)
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
}`}],u={class:`doc-body`},d={id:`section-0`},f={id:`section-1`},p={id:`section-2`},m={id:`section-3`},h={id:`section-6`},g=`use-forward`,_=3,v=`@use·@forward로 모듈 나누기`,y=`@use·@forward`,b=`폐기 예정인 @import 대신 @use로 파일을 불러오고, @forward로 폴더를 하나의 모듈로 묶어 네임스페이스·비공개 변수·기본값 설정(with)을 활용합니다.`,x=`빌드할 때마다 @import 경고가 쌓이고 있다면?
파일은 @use로 불러오고, 여러 파일은 @forward로 묶어 한 번에 불러오세요.
`,S=`구조`,C=`모듈`,w=[`SCSS`,`@use`,`@forward`,`@import`,`네임스페이스`,`with`,`!default`,`_index.scss`],T=`중급`,E=`약 8분`,D=[`SCSS 변수`,`믹스인`],O=`@use 'ui'`,k=`published`,A=`2026-11-05`,j=[`each-utility`,`include-extend`],M=[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`Sass — @forward`,url:`https://sass-lang.com/documentation/at-rules/forward/`},{title:`Sass — @import 폐기 안내와 자동 변환 도구`,url:`https://sass-lang.com/d/import`}],N={__name:`use-forward`,setup(g,{expose:_}){return _({frontmatter:{id:`use-forward`,order:3,title:`@use·@forward로 모듈 나누기`,navTitle:`@use·@forward`,summary:`폐기 예정인 @import 대신 @use로 파일을 불러오고, @forward로 폴더를 하나의 모듈로 묶어 네임스페이스·비공개 변수·기본값 설정(with)을 활용합니다.`,lead:`빌드할 때마다 @import 경고가 쌓이고 있다면?
파일은 @use로 불러오고, 여러 파일은 @forward로 묶어 한 번에 불러오세요.
`,group:`구조`,topic:`모듈`,tags:[`SCSS`,`@use`,`@forward`,`@import`,`네임스페이스`,`with`,`!default`,`_index.scss`],level:`중급`,duration:`약 8분`,prerequisites:[`SCSS 변수`,`믹스인`],keyProperty:`@use 'ui'`,status:`published`,updated:`2026-11-05`,related:[`each-utility`,`include-extend`],references:[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`Sass — @forward`,url:`https://sass-lang.com/documentation/at-rules/forward/`},{title:`Sass — @import 폐기 안내와 자동 변환 도구`,url:`https://sass-lang.com/d/import`}]}}),(g,_)=>{let v=n(`DocTakeaway`),y=n(`DocDont`),b=n(`DocDo`),x=n(`DocDoDont`),S=n(`DocFlow`),C=n(`CodePanel`),w=n(`DocPractice`);return c(),s(`div`,u,[o(`section`,d,[_[1]||=o(`h2`,null,[o(`span`,{class:`section-no`},`01`),a(` 문제 상황`)],-1),_[2]||=o(`p`,null,[a(`변수 파일을 `),o(`code`,null,`@import`),a(`로 불러오는 기존 코드를 빌드하면 터미널에 경고가 나옵니다. 지금은 CSS가 정상으로 만들어지지만, Dart Sass 3.0부터는 `),o(`code`,null,`@import`),a(`가 제거되어 `),o(`strong`,null,`빌드가 실패`),a(`합니다.`)],-1),_[3]||=o(`pre`,null,[o(`code`,{class:`language-terminal`},[o(`figure`,{"v-pre":``,class:`doc-terminal`},[o(`figcaption`,{class:`doc-terminal-bar`},[o(`span`,{"aria-hidden":`true`}),o(`span`,{"aria-hidden":`true`}),o(`span`,{"aria-hidden":`true`}),a(`터미널`)]),o(`pre`,{tabindex:`0`},[o(`code`,{"v-pre":``},[o(`span`,{class:`terminal-line terminal-line--cmd`},[o(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),a(`npx sass styles/main.scss`)]),a(`
`),o(`span`,{class:`terminal-line terminal-line--yellow`},`DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.`),a(`
`),o(`span`,{class:`terminal-line`},` `),a(`
`),o(`span`,{class:`terminal-line`},`More info and automated migrator: https://sass-lang.com/d/import`),a(`
`),o(`span`,{class:`terminal-line`},` `),a(`
`),o(`span`,{class:`terminal-line`},`  ╷`),a(`
`),o(`span`,{class:`terminal-line`},`1 │ @import "variables";`),a(`
`),o(`span`,{class:`terminal-line`},`  │         ^^^^^^^^^^^`),a(`
`),o(`span`,{class:`terminal-line`},`  ╵`),a(`
`),o(`span`,{class:`terminal-line`},`    styles/main.scss 1:9  root stylesheet`)])])])])],-1),i(v,null,{default:e(()=>[..._[0]||=[o(`p`,null,[a(`파일은 `),o(`strong`,null,[o(`code`,null,`@use`),a(`로`)]),a(` 불러와 `),o(`code`,null,`ui.$primary`),a(`처럼 `),o(`strong`,null,`네임스페이스`),a(`로 쓰고, 여러 파일은 폴더의 `),o(`code`,null,`_index.scss`),a(`에서 `),o(`strong`,null,[o(`code`,null,`@forward`),a(`로`)]),a(` 묶으세요.`)],-1)]]),_:1})]),o(`section`,f,[_[6]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),a(` @import와 @use 비교`)],-1),i(x,null,{default:e(()=>[i(y,null,{default:e(()=>[..._[4]||=[o(`pre`,{class:`doc-code`,tabindex:`0`},[o(`code`,{class:`hljs`},[o(`span`,{class:`hljs-keyword`},`@import`),a(),o(`span`,{class:`hljs-string`},`'variables'`),a(`;
`),o(`span`,{class:`hljs-keyword`},`@import`),a(),o(`span`,{class:`hljs-string`},`'mixins'`),a(`;

`),o(`span`,{class:`hljs-selector-class`},`.button`),a(` {
  `),o(`span`,{class:`hljs-attribute`},`background`),a(`: `),o(`span`,{class:`hljs-variable`},`$primary`),a(`;
}
`)])],-1),o(`p`,null,[a(`불러온 모든 변수가 전역에 섞입니다. `),o(`code`,null,`$primary`),a(`가 어느 파일에서 왔는지 알 수 없고, 같은 이름이 있으면 나중 파일이 조용히 덮어씁니다.`)],-1)]]),_:1}),i(b,null,{default:e(()=>[..._[5]||=[o(`pre`,{class:`doc-code`,tabindex:`0`},[o(`code`,{class:`hljs`},[o(`span`,{class:`hljs-keyword`},`@use`),a(),o(`span`,{class:`hljs-string`},`'ui'`),a(`;

`),o(`span`,{class:`hljs-selector-class`},`.button`),a(` {
  `),o(`span`,{class:`hljs-attribute`},`background`),a(`: ui.`),o(`span`,{class:`hljs-variable`},`$primary`),a(`;
}
`)])],-1),o(`p`,null,[o(`code`,null,`ui.`),a(`으로 출처가 드러나고, 같은 이름이 있어도 네임스페이스가 달라 충돌하지 않습니다. 몇 번을 불러와도 한 번만 포함됩니다.`)],-1)]]),_:1})]),_:1}),_[7]||=r(`<div class="table-wrap"><table><thead><tr><th>구분</th><th><code>@import</code></th><th><code>@use</code></th></tr></thead><tbody><tr><td>변수 범위</td><td>전역에 모두 섞임</td><td>불러온 파일 안에서만, <code>네임스페이스.$변수</code></td></tr><tr><td>여러 번 불러오기</td><td>불러온 만큼 CSS가 중복 출력될 수 있음</td><td>한 번만 포함</td></tr><tr><td>비공개 변수</td><td>없음</td><td>이름이 <code>-</code>·<code>_</code>로 시작하면 파일 밖에서 사용 불가</td></tr><tr><td>기본값 바꾸기</td><td>불러오기 전에 변수를 먼저 선언</td><td><code>with ($primary: …)</code></td></tr><tr><td>앞으로</td><td>Dart Sass 3.0에서 제거</td><td>표준 방식</td></tr></tbody></table></div>`,1)]),o(`section`,p,[_[8]||=o(`h2`,null,[o(`span`,{class:`section-no`},`03`),a(` 모듈로 묶는 구조`)],-1),_[9]||=o(`p`,null,[a(`폴더 안 파일을 `),o(`code`,null,`_index.scss`),a(`에서 `),o(`code`,null,`@forward`),a(`로 모으면, 사용하는 쪽은 `),o(`strong`,null,`폴더 이름 한 줄`),a(`로 전부 불러옵니다. 네임스페이스는 마지막 경로 이름(`),o(`code`,null,`ui`),a(`)이 됩니다.`)],-1),i(S,{steps:[{title:`_tokens.scss · _mixins.scss`,desc:`변수·믹스인 정의`},{title:`ui/_index.scss`,desc:`폴더를 하나의 모듈로`},{title:`use-forward.scss`,desc:`ui.$primary로 사용`},{title:`CSS`,desc:`브라우저가 읽는 결과`}],arrows:[`@forward`,`@use 'ui'`,`컴파일`]})]),o(`section`,m,[_[10]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),a(` 해결 코드`)],-1),_[11]||=o(`p`,null,[o(`code`,null,`ui`),a(` 폴더(토큰·믹스인·묶음 파일)와, 이를 불러와 버튼을 만드는 파일입니다. `),o(`strong`,null,`CSS 결과`),a(` 탭은 빌드할 때 실제로 컴파일한 출력입니다. `),o(`code`,null,`with()`),a(`로 바꾼 색(`),o(`code`,null,`#2a8668`),a(`)이 믹스인의 기본값까지 반영된 것을 확인하세요.`)],-1),i(C,{tabs:t(l)},null,8,[`tabs`]),_[12]||=r(`<ul><li><strong><code>!default</code></strong>: <code>with()</code>로 바꿀 수 있는 기본값 표시입니다. <code>!default</code>가 없는 변수는 <code>with()</code>로 바꿀 수 없습니다.</li><li><strong><code>$-base</code></strong>: 이름이 <code>-</code>로 시작하는 비공개 변수입니다. 토큰 계산에만 쓰고, 밖에서 <code>ui.$-base</code>로 쓰면 빌드 오류가 납니다.</li><li><strong><code>as</code></strong>: 네임스페이스 이름을 바꿉니다. <code>@use &#39;ui&#39; as u</code> → <code>u.$primary</code></li></ul>`,1)]),_[15]||=o(`section`,{id:`section-4`},[o(`h2`,null,[o(`span`,{class:`section-no`},`05`),a(` 자주 만나는 오류`)]),o(`p`,null,[o(`code`,null,`@use`),a(`로 바꾼 뒤 네임스페이스 없이 변수를 쓰면 `),o(`strong`,null,`변수가 없다는 오류`),a(`가 납니다. `),o(`code`,null,`@import`),a(`와 달리 전역에 풀리지 않기 때문입니다.`)]),o(`pre`,null,[o(`code`,{class:`language-terminal`},[o(`figure`,{"v-pre":``,class:`doc-terminal`},[o(`figcaption`,{class:`doc-terminal-bar`},[o(`span`,{"aria-hidden":`true`}),o(`span`,{"aria-hidden":`true`}),o(`span`,{"aria-hidden":`true`}),a(`터미널`)]),o(`pre`,{tabindex:`0`},[o(`code`,{"v-pre":``},[o(`span`,{class:`terminal-line terminal-line--cmd`},[o(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),a(`npx sass styles/use.scss`)]),a(`
`),o(`span`,{class:`terminal-line terminal-line--red`},`Error: Undefined variable.`),a(`
`),o(`span`,{class:`terminal-line`},`  ╷`),a(`
`),o(`span`,{class:`terminal-line`},`4 │   color: $primary;`),a(`
`),o(`span`,{class:`terminal-line`},`  │          ^^^^^^^^`),a(`
`),o(`span`,{class:`terminal-line`},`  ╵`),a(`
`),o(`span`,{class:`terminal-line`},`  styles/use.scss 4:10  root stylesheet`)])])])])]),o(`p`,null,[o(`code`,null,`variables.$primary`),a(`처럼 네임스페이스를 붙이거나, 공통 변수 파일처럼 거의 모든 파일이 쓰는 경우에는 `),o(`code`,null,`@use 'variables' as *`),a(`로 네임스페이스 없이 불러옵니다. 이 사이트의 SCSS도 공통 변수·믹스인은 `),o(`code`,null,`@use '../common/variables' as *`),a(`로 불러옵니다.`)])],-1),_[16]||=r(`<section id="section-5"><h2><span class="section-no">06</span> 적용 시 주의점</h2><ul><li><strong><code>as *</code>는 공통 파일에만 씁니다.</strong> 네임스페이스를 없애면 <code>@import</code>처럼 출처가 다시 흐려집니다. 변수·믹스인처럼 모든 파일이 쓰는 기반 파일에만 사용합니다.</li><li><strong><code>@use</code>는 파일 맨 위에 둡니다.</strong> <code>@forward</code>를 제외한 다른 규칙보다 먼저 와야 합니다.</li><li><strong><code>with()</code>는 처음 불러올 때 한 번만</strong> 설정할 수 있습니다. 진입 파일(<code>main.scss</code> 등)에서 설정하고, 나머지 파일은 설정 없이 불러옵니다.</li><li><strong>기존 코드는 자동 변환 도구를 씁니다.</strong> <code>npx sass-migrator module --migrate-deps main.scss</code>로 <code>@import</code>를 <code>@use</code>로 바꿀 수 있습니다. 변환 후에는 반드시 빌드 결과 CSS를 비교합니다.</li></ul></section>`,1),o(`section`,h,[_[14]||=o(`h2`,null,[o(`span`,{class:`section-no`},`07`),a(` 짧은 실습`)],-1),i(w,null,{default:e(()=>[..._[13]||=[o(`p`,null,`해결 코드의 파일을 보며 답해 보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[o(`code`,null,`use-forward.scss`),a(`에서 `),o(`code`,null,`with()`),a(`를 지우면 버튼 배경과 포커스 테두리가 `),o(`code`,null,`#3162d4`),a(`로 바뀌는 이유를 설명할 수 있다.`)])])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[o(`code`,null,`ui.$-base`),a(`를 쓰면 왜 오류가 나는지 설명할 수 있다.`)])])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[o(`code`,null,`@use 'ui' as u`),a(`로 바꿨을 때 `),o(`code`,null,`.button`),a(` 안에서 고쳐야 할 곳을 모두 찾을 수 있다.`)])])])],-1)]]),_:1})])])}}};export{N as default,E as duration,S as group,g as id,O as keyProperty,x as lead,T as level,y as navTitle,_ as order,D as prerequisites,M as references,j as related,k as status,b as summary,w as tags,v as title,C as topic,A as updated};