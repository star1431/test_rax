import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,u as h,ut as g}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as _}from"./DemoCompare-Bd6h8ThJ.js";import{t as v}from"./highlight-DI8AeOIq.js";/* empty css                    */var y=`.card {
  padding: 8px;
  margin-bottom: 16px;
  font: 14px/1.5 sans-serif;
  grid-area: 1/1/2/3;
  width: calc(100% - 24px);
}

.button {
  padding: 8px 16px;
  background: #3366cc;
}
.button:hover {
  background: rgb(16%, 32%, 64%);
}

.progress-bar {
  width: 75%;
}

.notice {
  padding: 16px;
  border-left: 4px solid #3366cc;
}`,b=`// 빌드할 때마다 Sass 경고가 쏟아질 때 (실무 노트 SCSS 05)
// 경고 이름별로 고친 파일을 모읍니다. 이 파일을 컴파일하면 경고 없이 CSS가 만들어집니다.
// [slash-div] 나눗셈 → math.div
@use 'deprecation/division';
// [global-builtin] map-get·darken·percentage → map.get·color.adjust·math.percentage
@use 'deprecation/functions';
// [import] @import → @use
@use 'deprecation/modules';
`,ee=`.card {
  padding: 8px;
  margin-bottom: 16px;
  font: 14px/1.5 sans-serif;
  grid-area: 1/1/2/3;
  width: calc(100% - 24px);
}`,x=`// [slash-div] 나눗셈은 math.div로, 구분 기호 /는 그대로 둡니다.
@use 'sass:math';

$space: 16px;
$gutter: 24px;

.card {
  padding: math.div($space, 2);
  margin-bottom: math.div($gutter, 3) * 2;
  font: 14px/1.5 sans-serif; // 글자 크기/줄 높이 구분
  grid-area: 1 / 1 / 2 / 3; // 시작/끝 줄 구분
  width: calc(100% - #{$gutter}); // calc() 안은 브라우저가 계산
}
`,S=`.button {
  padding: 8px 16px;
  background: #3366cc;
}
.button:hover {
  background: rgb(16%, 32%, 64%);
}

.progress-bar {
  width: 75%;
}`,C=`// [global-builtin] 전역 함수는 내장 모듈을 불러와 모듈 함수로 씁니다.
@use 'sass:color';
@use 'sass:map';
@use 'sass:math';

$primary: #3366cc;
$spaces: (sm: 8px, md: 16px);

.button {
  padding: map.get($spaces, sm) map.get($spaces, md);
  background: $primary;

  &:hover {
    background: color.adjust($primary, $lightness: -10%); // darken() 대신
  }
}

.progress-bar {
  width: math.percentage(0.75);
}
`,w=`.notice {
  padding: 16px;
  border-left: 4px solid #3366cc;
}`,T=`// [import] @import 대신 @use로 불러오고, 네임스페이스로 씁니다.
@use 'variables';

.notice {
  padding: variables.$space;
  border-left: 4px solid variables.$primary;
}
`,E=`// 공통 변수: 여러 화면 파일이 함께 씁니다.
$space: 16px;
$primary: #3366cc;
`,D=[{key:`division`,label:`나눗셈`,name:`slash-div`,file:`styles/division.scss`,fix:`$a / 2 → math.div($a, 2)`,count:2,problemSource:`$space: 16px;
$gutter: 24px;

.card {
  padding: $space / 2;
  margin-bottom: $gutter / 3 * 2;
  font: 14px/1.5 sans-serif;
  grid-area: 1 / 1 / 2 / 3;
  width: calc(100% - #{$gutter});
}
`,solvedSource:x,css:ee,warnings:`@yellow DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.
Recommendation: math.div($space, 2) or calc($space / 2)
    styles/division.scss 5:12  root stylesheet

@yellow DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.
Recommendation: math.div($gutter, 3) or calc($gutter / 3)
    styles/division.scss 6:18  root stylesheet`,note:`font·grid-area·calc() 안의 /는 경고가 없습니다. 나눗셈인 두 곳만 경고합니다.`},{key:`functions`,label:`전역 함수`,name:`global-builtin`,file:`styles/functions.scss`,fix:`map-get() → map.get()`,count:5,problemSource:`$primary: #3366cc;
$spaces: (sm: 8px, md: 16px);

.button {
  padding: map-get($spaces, sm) map-get($spaces, md);
  background: $primary;

  &:hover {
    background: darken($primary, 10%);
  }
}

.progress-bar {
  width: percentage(0.75);
}
`,solvedSource:C,css:S,warnings:`@yellow DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.
    styles/functions.scss 5:12  root stylesheet

@yellow DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.
    styles/functions.scss 5:33  root stylesheet

@yellow DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use color.adjust instead.
    styles/functions.scss 9:17  root stylesheet

@yellow DEPRECATION WARNING [color-functions]: darken() is deprecated. Suggestions:
color.scale($color, $lightness: -20%)
color.adjust($color, $lightness: -10%)
    styles/functions.scss 9:17  root stylesheet

@yellow DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use math.percentage instead.
    styles/functions.scss 14:10  root stylesheet`,note:`darken()은 경고가 두 개([global-builtin], [color-functions])입니다. 경고마다 바꿀 함수 이름(Use … instead)이 나옵니다.`},{key:`import`,label:`@import`,name:`import`,file:`styles/import.scss`,fix:`@import → @use 'variables'`,count:1,problemSource:`@import 'variables';

.notice {
  padding: $space;
  border-left: 4px solid $primary;
}
`,solvedSource:T,css:w,warnings:`@yellow DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
    styles/import.scss 1:9  root stylesheet`,note:`@use로 바꾸면 변수 앞에 네임스페이스(variables.)를 붙입니다. 자세한 방법은 @use·@forward 문서를 보세요.`}],O=e=>e.startsWith(`$ `)?{kind:`cmd`,text:e.slice(2)}:e.startsWith(`# `)?{kind:`comment`,text:e}:e.startsWith(`@yellow `)?{kind:`yellow`,text:e.slice(8)}:{kind:``,text:e};function k(e,t){let n=[`$ npx sass ${e.file}`];return t?n.push(`# 경고 없이 CSS만 출력됩니다.`):n.push(e.warnings,``),n.push(e.css),n.join(`
`).split(`
`).map(O)}var A=[{label:`sass-deprecation.scss`,language:`scss`,code:b},{label:`_division.scss`,language:`scss`,code:x},{label:`_functions.scss`,language:`scss`,code:C},{label:`_modules.scss`,language:`scss`,code:T},{label:`_variables.scss`,language:`scss`,code:E},{label:`CSS 결과`,language:`css`,code:y}],j={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-deprecation-type`},M=[`aria-checked`,`onClick`],N={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-deprecation-view`},P=[`aria-checked`,`onClick`],F=[`aria-label`],I=[`innerHTML`],L={key:1,class:`doc-terminal`},R=[`aria-label`],z={key:0,class:`terminal-prompt`,"aria-hidden":`true`},B={__name:`SassDeprecationDemo`,setup(o){let c={terminal:`빌드 결과`,source:`SCSS 원문`},d=n(D[0].key),y=n(`terminal`),b=m(()=>D.find(e=>e.key===d.value));return(n,o)=>(e(),u(_,{problem:{code:`[${b.value.name}] 경고 ${b.value.count}개`,note:`경고는 나지만 CSS는 만들어집니다. ${b.value.note}`},solved:{code:`경고 0개`,note:`같은 CSS가 경고 없이 만들어집니다. 고친 곳: ${b.value.fix}`}},{controls:r(()=>[o[0]||=i(`span`,{id:`demo-deprecation-type`,class:`demo-label`},`경고 종류`,-1),i(`div`,j,[(e(!0),a(p,null,l(t(D),t=>(e(),a(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":d.value===t.key,onClick:e=>d.value=t.key},[s(f(t.label)+` `,1),i(`small`,null,`[`+f(t.name)+`]`,1)],8,M))),128))]),o[1]||=i(`span`,{id:`demo-deprecation-view`,class:`demo-label`},`보기`,-1),i(`div`,N,[(e(),a(p,null,l(c,(e,t)=>i(`button`,{key:t,type:`button`,role:`radio`,"aria-checked":y.value===t,onClick:e=>y.value=t},f(e),9,P)),64))])]),default:r(({solved:n})=>[y.value===`source`?(e(),a(`pre`,{key:0,class:`demo-output`,tabindex:`0`,"aria-label":`${n?`해결`:`문제`} SCSS 원문`},[i(`code`,{class:`hljs`,innerHTML:t(v)(n?b.value.solvedSource:b.value.problemSource,`scss`)},null,8,I)],8,F)):(e(),a(`figure`,L,[o[3]||=i(`figcaption`,{class:`doc-terminal-bar`},[i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),s(`터미널 `)],-1),i(`pre`,{tabindex:`0`,"aria-label":`${n?`해결`:`문제`} 코드 빌드 결과`},[i(`code`,null,[(e(!0),a(p,null,l(t(k)(b.value,n),(t,n)=>(e(),a(p,{key:n},[i(`span`,{class:g([`terminal-line`,t.kind&&`terminal-line-${t.kind}`])},[t.kind===`cmd`?(e(),a(`span`,z,`$`)):h(``,!0),s(f(t.text||` `),1)],2),o[2]||=s(f(`
`),-1)],64))),128))])],8,R)]))]),caption:r(()=>[...o[4]||=[s(` 경고 문구는 sass 1.107로 문제 코드를 실제 컴파일한 출력입니다(코드 표시 줄은 생략). 해결 쪽 CSS는 빌드할 때 실제로 컴파일한 결과이며, 문제 코드의 CSS도 이와 같습니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},V={class:`doc-body`},H={id:`section-0`},U={id:`section-1`},te={id:`section-2`},W={class:`table-wrap`},G={id:`section-3`},K={id:`section-4`},q={id:`section-7`},J=`sass-deprecation`,Y=5,X=`빌드할 때마다 Sass 경고가 쏟아질 때 (나눗셈·@import·전역 함수)`,Z=`나눗셈·@import 경고 해결`,Q=`터미널을 채우는 Sass 폐기 예정 경고를 경고 이름([slash-div]·[global-builtin]·[import])으로 구분하고, 결과 CSS는 그대로 둔 채 math.div·내장 모듈 함수·@use로 고칩니다.`,ne=`빌드할 때마다 노란 경고가 수십 줄씩 나온다면?
경고 이름을 먼저 읽고, 이름마다 정해진 방법으로 고치세요.
`,re=`오류·경고`,ie=`경고`,ae=[`SCSS`,`Deprecation Warning`,`slash-div`,`global-builtin`,`@import`,`math.div`,`sass-migrator`,`quietDeps`],oe=`중급`,$=`약 11분`,se=[`SCSS 변수`,`@use`],ce=`math.div($a, 2)`,le=`published`,ue=`2026-11-11`,de=[`use-forward`,`each-utility`,`include-extend`],fe=[{title:`Sass — Breaking Change - Slash as Division`,url:`https://sass-lang.com/d/slash-div`},{title:`Sass — @import와 전역 내장 함수 폐기 안내`,url:`https://sass-lang.com/d/import`},{title:`Sass — Breaking Change - Color Functions`,url:`https://sass-lang.com/d/color-functions`},{title:`Sass — Built-In Modules`,url:`https://sass-lang.com/documentation/modules/`},{title:`Sass — Migrator`,url:`https://sass-lang.com/documentation/cli/migrator/`}],pe={__name:`sass-deprecation`,setup(n,{expose:l}){return l({frontmatter:{id:`sass-deprecation`,order:5,title:`빌드할 때마다 Sass 경고가 쏟아질 때 (나눗셈·@import·전역 함수)`,navTitle:`나눗셈·@import 경고 해결`,summary:`터미널을 채우는 Sass 폐기 예정 경고를 경고 이름([slash-div]·[global-builtin]·[import])으로 구분하고, 결과 CSS는 그대로 둔 채 math.div·내장 모듈 함수·@use로 고칩니다.`,lead:`빌드할 때마다 노란 경고가 수십 줄씩 나온다면?
경고 이름을 먼저 읽고, 이름마다 정해진 방법으로 고치세요.
`,group:`오류·경고`,topic:`경고`,tags:[`SCSS`,`Deprecation Warning`,`slash-div`,`global-builtin`,`@import`,`math.div`,`sass-migrator`,`quietDeps`],level:`중급`,duration:`약 11분`,prerequisites:[`SCSS 변수`,`@use`],keyProperty:`math.div($a, 2)`,status:`published`,updated:`2026-11-11`,related:[`use-forward`,`each-utility`,`include-extend`],references:[{title:`Sass — Breaking Change - Slash as Division`,url:`https://sass-lang.com/d/slash-div`},{title:`Sass — @import와 전역 내장 함수 폐기 안내`,url:`https://sass-lang.com/d/import`},{title:`Sass — Breaking Change - Color Functions`,url:`https://sass-lang.com/d/color-functions`},{title:`Sass — Built-In Modules`,url:`https://sass-lang.com/documentation/modules/`},{title:`Sass — Migrator`,url:`https://sass-lang.com/documentation/cli/migrator/`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`RouterLink`),m=c(`DocSteps`),h=c(`DocInspect`),g=c(`CodePanel`),_=c(`DocPractice`);return e(),a(`div`,V,[i(`section`,H,[l[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),s(` 문제 상황`)],-1),l[3]||=i(`p`,null,`몇 년 전에 만든 공통 SCSS를 새 프로젝트로 옮겼습니다. 화면은 정상인데, 개발 서버를 켜거나 파일을 저장할 때마다 터미널에 노란 경고가 쏟아집니다. 아래는 그중 한 파일(6줄)에서 나온 출력입니다.`,-1),l[4]||=i(`pre`,null,[i(`code`,{class:`language-terminal`},[i(`figure`,{"v-pre":``,class:`doc-terminal`},[i(`figcaption`,{class:`doc-terminal-bar`},[i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),s(`터미널`)]),i(`pre`,{tabindex:`0`},[i(`code`,{"v-pre":``},[i(`span`,{class:`terminal-line terminal-line-cmd`},[i(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),s(`npx sass styles/main.scss`)]),s(`
`),i(`span`,{class:`terminal-line terminal-line-yellow`},`DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`More info and automated migrator: https://sass-lang.com/d/import`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`  ╷`),s(`
`),i(`span`,{class:`terminal-line`},`1 │ @import 'variables';`),s(`
`),i(`span`,{class:`terminal-line`},`  │         ^^^^^^^^^^^`),s(`
`),i(`span`,{class:`terminal-line`},`  ╵`),s(`
`),i(`span`,{class:`terminal-line`},`    styles/main.scss 1:9  root stylesheet`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line terminal-line-yellow`},`DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`Recommendation: math.div($space, 2) or calc($space / 2)`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`More info and automated migrator: https://sass-lang.com/d/slash-div`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`  ╷`),s(`
`),i(`span`,{class:`terminal-line`},`4 │   padding: $space / 2;`),s(`
`),i(`span`,{class:`terminal-line`},`  │            ^^^^^^^^^^`),s(`
`),i(`span`,{class:`terminal-line`},`  ╵`),s(`
`),i(`span`,{class:`terminal-line`},`    styles/main.scss 4:12  root stylesheet`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line terminal-line-yellow`},`DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.`),s(`
`),i(`span`,{class:`terminal-line`},`Use math.percentage instead.`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`More info and automated migrator: https://sass-lang.com/d/import`),s(`
`),i(`span`,{class:`terminal-line`},` `),s(`
`),i(`span`,{class:`terminal-line`},`  ╷`),s(`
`),i(`span`,{class:`terminal-line`},`5 │   width: percentage(0.75);`),s(`
`),i(`span`,{class:`terminal-line`},`  │          ^^^^^^^^^^^^^^^^`),s(`
`),i(`span`,{class:`terminal-line`},`  ╵`),s(`
`),i(`span`,{class:`terminal-line`},`    styles/main.scss 5:10  root stylesheet`)])])])])],-1),l[5]||=i(`p`,null,`CSS가 정상으로 만들어지니 그대로 두기 쉽습니다. 그러다 경고 사이에 묻힌 진짜 오류를 놓치거나, Sass를 올린 뒤 빌드가 실패하면서 개발 문의로 돌아옵니다.`,-1),o(u,{label:`빌드 경고`,title:`공통 SCSS: 개발 서버를 켤 때마다 DEPRECATION WARNING이 수십 줄 출력됨`,env:`Vite 8 · sass 1.107(Dart Sass) · 이전 프로젝트에서 옮긴 공통 SCSS와 외부 UI 패키지`,expected:`경고 없이 빌드되어 새로 생긴 경고·오류를 바로 알아볼 수 있음`,actual:`slash-div·global-builtin·import 경고가 파일마다 반복 출력됨, CSS 결과는 정상`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,[s(`개발 서버를 실행하거나 `),i(`code`,null,`npx sass`),s(`로 공통 SCSS를 컴파일합니다.`)]),i(`li`,null,[s(`터미널에서 `),i(`code`,null,`DEPRECATION WARNING`),s(` 뒤의 대괄호 이름을 확인합니다.`)]),i(`li`,null,`각 경고의 마지막 줄에 표시된 파일과 줄 번호를 확인합니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`경고는 `),i(`strong`,null,`대괄호 안의 이름으로`),s(` 읽습니다. `),i(`code`,null,`[slash-div]`),s(`는 `),i(`code`,null,`math.div()`),s(`, `),i(`code`,null,`[global-builtin]`),s(`은 내장 모듈 함수, `),i(`code`,null,`[import]`),s(`는 `),i(`code`,null,`@use`),s(`로 고치면 `),i(`strong`,null,`결과 CSS는 그대로`),s(` 경고만 사라집니다.`)],-1)]]),_:1})]),i(`section`,U,[l[6]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[7]||=i(`p`,null,`경고 종류를 바꾸며 문제 코드의 경고와, 고친 코드의 빌드 결과를 비교해 보세요. 두 쪽 모두 아래에 나오는 CSS가 같습니다.`,-1),o(B)]),i(`section`,te,[l[18]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>DEPRECATION WARNING</code>은 오류가 아니라 <strong>예고</strong>입니다. 지금 버전은 예전 문법을 그대로 처리해 CSS를 만들지만, 경고 문구에 적힌 버전(나눗셈은 Dart Sass 2.0.0, <code>@import</code>와 전역 함수는 3.0.0)부터는 그 문법이 사라져 빌드가 실패합니다. 그래서 고칠 때도 <strong>결과 CSS가 바뀌면 안 되고</strong>, 쓰는 방법만 바뀌어야 합니다.</p><p>나눗셈 경고가 생긴 이유는 CSS가 <code>/</code>를 구분 기호로 쓰기 때문입니다. <code>font: 14px/1.5</code>, <code>grid-area: 1 / 3</code>, <code>aspect-ratio: 16 / 9</code>는 나누라는 뜻이 아닙니다. Sass는 그동안 앞뒤를 보고 나눗셈인지 추측했고, 이 추측을 없애기 위해 나눗셈은 <code>math.div()</code>로 분명히 쓰게 했습니다. 숫자만 쓴 <code>/</code>는 그대로 출력되므로 경고가 나지 않고, 변수·함수 인수처럼 <strong>실제로 나눗셈을 한 곳</strong>만 경고가 납니다.</p><p>전역 함수 경고는 Sass의 모듈 방식 때문입니다. <code>map-get()</code>, <code>percentage()</code>, <code>darken()</code>처럼 어디서나 쓰던 함수는 <code>sass:map</code>, <code>sass:math</code>, <code>sass:color</code> 같은 내장 모듈로 옮겨졌고, <code>@use</code>로 불러온 뒤 <code>map.get()</code>처럼 씁니다. CSS 함수와 이름이 겹치는 <code>rgba()</code>, <code>min()</code>, <code>calc()</code>는 그대로 써도 경고가 없습니다.</p>`,4),i(`div`,W,[i(`table`,null,[l[16]||=i(`thead`,null,[i(`tr`,null,[i(`th`,null,`경고 이름`),i(`th`,null,`경고가 나는 코드`),i(`th`,null,`고치는 방법`)])],-1),i(`tbody`,null,[l[13]||=i(`tr`,null,[i(`td`,null,[i(`code`,null,`slash-div`)]),i(`td`,null,[i(`code`,null,`$space / 2`)]),i(`td`,null,[i(`code`,null,`math.div($space, 2)`),s(` (`),i(`code`,null,`@use 'sass:math'`),s(`)`)])],-1),l[14]||=i(`tr`,null,[i(`td`,null,[i(`code`,null,`global-builtin`)]),i(`td`,null,[i(`code`,null,`map-get()`),s(`, `),i(`code`,null,`percentage()`),s(`, `),i(`code`,null,`darken()`)]),i(`td`,null,[i(`code`,null,`map.get()`),s(`, `),i(`code`,null,`math.percentage()`),s(`, `),i(`code`,null,`color.adjust()`)])],-1),l[15]||=i(`tr`,null,[i(`td`,null,[i(`code`,null,`color-functions`)]),i(`td`,null,[i(`code`,null,`darken()`),s(`, `),i(`code`,null,`lighten()`)]),i(`td`,null,[i(`code`,null,`color.adjust($c, $lightness: -10%)`)])],-1),i(`tr`,null,[l[11]||=i(`td`,null,[i(`code`,null,`import`)],-1),l[12]||=i(`td`,null,[i(`code`,null,`@import 'variables'`)],-1),i(`td`,null,[l[9]||=i(`code`,null,`@use 'variables'`,-1),l[10]||=s(` → `,-1),o(p,{to:`/pub/scss/use-forward`},{default:r(()=>[...l[8]||=[s(`@use·@forward 문서`,-1)]]),_:1})])])])])]),o(m,null,{default:r(()=>[...l[17]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`경고 이름 읽기`),s(),i(`code`,null,`[slash-div]`)]),i(`li`,null,[i(`strong`,null,`이름에 맞게 바꾸기`),s(),i(`code`,null,`math.div($space, 2)`)]),i(`li`,null,[i(`strong`,null,`결과 CSS 비교`),s(),i(`code`,null,`diff before.css after.css`)])],-1)]]),_:1})]),i(`section`,G,[l[20]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[21]||=i(`p`,null,[s(`경고가 수십 줄이어도 원인은 `),i(`strong`,null,`경고 이름 몇 종류`),s(`와 `),i(`strong`,null,`몇 개의 줄`),s(`로 정리됩니다. 브라우저 대신 터미널과 편집기에서 아래 순서로 좁힙니다.`)],-1),o(h,null,{default:r(()=>[...l[19]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`대괄호 안의 경고 이름 읽기`),i(`code`,null,`DEPRECATION WARNING [slash-div]`),s(`처럼 대괄호 안의 이름이 고칠 방법을 정합니다. 바로 아래 `),i(`code`,null,`Recommendation:`),s(`이나 `),i(`code`,null,`Use math.percentage instead.`),s(` 줄에 바꿀 코드가 그대로 나옵니다.`)]),i(`li`,null,[i(`strong`,null,`마지막 줄의 파일과 줄:칸 따라가기`),i(`code`,null,`styles/main.scss 4:12`),s(`는 4번째 줄 12번째 칸입니다. 위치가 여러 줄이면 맨 윗줄이 경고가 난 파일이고, 아래 줄은 그 파일을 불러온 곳(`),i(`code`,null,`@use`),s(`, `),i(`code`,null,`root stylesheet`),s(`)입니다.`)]),i(`li`,null,[i(`strong`,null,`경고가 node_modules에서 오는지 확인`),s(` 맨 윗줄 경로가 `),i(`code`,null,`node_modules/`),s(`로 시작하면 외부 패키지 코드입니다. 직접 고치지 않고 패키지를 업데이트하거나 아래 `),i(`code`,null,`quietDeps`),s(`를 씁니다. 같은 경고가 많으면 `),i(`code`,null,`WARNING: 2 repetitive deprecation warnings omitted.`),s(`처럼 일부가 생략되므로, CLI에서는 `),i(`code`,null,`--verbose`),s(`로 전부 출력합니다.`)]),i(`li`,null,[i(`strong`,null,`같은 패턴을 프로젝트 전체에서 검색`),s(` 편집기의 정규식 검색으로 `),i(`code`,null,`map-get\\(|darken\\(|lighten\\(|percentage\\(`),s(`, `),i(`code`,null,`\\$[\\w-]+ / `),s(`, `),i(`code`,null,`@import ['"]`),s(`를 찾습니다. Vue 파일의 `),i(`code`,null,`<style lang="scss">`),s(`도 포함합니다. 호출하지 않은 mixin 안의 코드는 경고가 나지 않으므로 검색으로만 찾을 수 있습니다.`)]),i(`li`,null,[i(`strong`,null,`고친 뒤 결과 CSS 비교`),s(` 고치기 전에 `),i(`code`,null,`npx sass styles/main.scss before.css`),s(`로 결과를 저장하고, 고친 뒤 `),i(`code`,null,`after.css`),s(`와 `),i(`code`,null,`diff`),s(`로 비교합니다. 아무것도 출력되지 않아야 맞게 고친 것입니다.`)])],-1)]]),_:1})]),i(`section`,K,[l[22]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 해결 코드`)],-1),l[23]||=i(`p`,null,[s(`경고 이름별로 고친 파일과, 이 파일들을 모은 진입 파일입니다. `),i(`strong`,null,`CSS 결과`),s(` 탭은 빌드할 때 실제로 컴파일한 출력이며, 경고 없이 만들어집니다.`)],-1),o(g,{tabs:t(A)},null,8,[`tabs`]),l[24]||=d(`<ul><li><strong><code>math.div($gutter, 3) * 2</code></strong>: 나눗셈만 <code>math.div</code>로 바꾸고 곱셈 <code>*</code>는 그대로 둡니다.</li><li><strong><code>font</code>·<code>grid-area</code>·<code>calc()</code>의 <code>/</code></strong>: 구분 기호이거나 브라우저가 계산하는 값이라 바꾸지 않습니다.</li><li><strong><code>color.adjust($primary, $lightness: -10%)</code></strong>: <code>darken($primary, 10%)</code>와 같은 값입니다. 숫자의 부호만 반대가 됩니다.</li></ul>`,1)]),l[27]||=i(`section`,{id:`section-5`},[i(`h2`,null,[i(`span`,{class:`section-no`},`06`),s(` 비슷한 상황`)]),i(`p`,null,[s(`경고를 정리하다 보면 함께 만나는 경우입니다. 숨기는 방법은 `),i(`strong`,null,`고치는 방법이 아니라는 점`),s(`을 기억하세요.`)]),i(`h3`,null,[s(`나눗셈이 아닌 `),i(`code`,null,`/`)]),i(`p`,null,[s(`아래 `),i(`code`,null,`/`),s(`는 모두 CSS 구분 기호라 경고가 없고, 바꾸면 안 됩니다. 변수끼리 나눌 때는 `),i(`code`,null,`math.div()`),s(` 대신 `),i(`code`,null,`calc()`),s(`를 써도 됩니다. 단위가 같으면 Sass가 계산해 `),i(`code`,null,`8px`),s(`처럼 출력합니다.`)]),i(`pre`,{class:`doc-code`,tabindex:`0`},[i(`code`,{class:`hljs`},[i(`span`,{class:`hljs-selector-class`},`.title`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`font`),s(`: `),i(`span`,{class:`hljs-number`},`14px`),s(`/`),i(`span`,{class:`hljs-number`},`1.5`),s(` sans-serif;       `),i(`span`,{class:`hljs-comment`},`// 크기/줄 높이`),s(`
  `),i(`span`,{class:`hljs-attribute`},`grid-area`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` / `),i(`span`,{class:`hljs-number`},`1`),s(` / `),i(`span`,{class:`hljs-number`},`2`),s(` / `),i(`span`,{class:`hljs-number`},`3`),s(`;        `),i(`span`,{class:`hljs-comment`},`// 시작/끝 줄`),s(`
  `),i(`span`,{class:`hljs-attribute`},`aspect-ratio`),s(`: `),i(`span`,{class:`hljs-number`},`16`),s(` / `),i(`span`,{class:`hljs-number`},`9`),s(`;            `),i(`span`,{class:`hljs-comment`},`// 가로/세로 비율`),s(`
  `),i(`span`,{class:`hljs-attribute`},`padding`),s(`: `),i(`span`,{class:`hljs-built_in`},`calc`),s(`(`),i(`span`,{class:`hljs-variable`},`$space`),s(` / `),i(`span`,{class:`hljs-number`},`2`),s(`);       `),i(`span`,{class:`hljs-comment`},`// 결과: 8px`),s(`
}
`)])]),i(`h3`,null,`외부 패키지(node_modules)의 경고`),i(`p`,null,[s(`직접 고칠 수 없는 패키지의 경고는 Vite 설정의 `),i(`code`,null,`quietDeps`),s(`로 숨깁니다. `),i(`code`,null,`node_modules`),s(`처럼 불러온 패키지 파일의 경고만 숨기고, 우리 프로젝트 파일의 경고는 그대로 보여 줍니다.`)]),i(`pre`,{class:`doc-code`,tabindex:`0`},[i(`code`,{class:`hljs`},[i(`span`,{class:`hljs-comment`},`// vite.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(),i(`span`,{class:`hljs-title function_`},`defineConfig`),s(`({
  `),i(`span`,{class:`hljs-attr`},`css`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`preprocessorOptions`),s(`: {
      `),i(`span`,{class:`hljs-attr`},`scss`),s(`: {
        `),i(`span`,{class:`hljs-attr`},`quietDeps`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`, `),i(`span`,{class:`hljs-comment`},`// 의존 패키지의 경고만 숨김`),s(`
      },
    },
  },
})
`)])]),i(`h3`,null,`경고 이름으로 숨기기`),i(`p`,null,[i(`code`,null,`silenceDeprecations`),s(`는 지정한 이름의 경고를 `),i(`strong`,null,`우리 코드까지 모두`),s(` 숨깁니다. 옮기는 동안 잠시 쓰더라도, 숨긴 이유와 정리 계획을 주석으로 남깁니다.`)]),i(`pre`,{class:`doc-code`,tabindex:`0`},[i(`code`,{class:`hljs`},[i(`span`,{class:`hljs-attr`},`scss`),s(`: {
  `),i(`span`,{class:`hljs-comment`},[s(`// `),i(`span`,{class:`hljs-doctag`},`TODO:`),s(` @use로 옮긴 뒤 삭제 (공통 SCSS 정리 작업)`)]),s(`
  `),i(`span`,{class:`hljs-attr`},`silenceDeprecations`),s(`: [`),i(`span`,{class:`hljs-string`},`'import'`),s(`],
}
`)])]),i(`h3`,null,`자동 변환 도구(sass-migrator)`),i(`p`,null,[s(`파일이 많으면 공식 도구로 한꺼번에 바꿉니다. `),i(`code`,null,`division`),s(`은 나눗셈을, `),i(`code`,null,`module --built-in-only`),s(`는 `),i(`code`,null,`@import`),s(`는 그대로 두고 전역 함수만 바꿉니다. `),i(`code`,null,`division`),s(`은 `),i(`code`,null,`$space / 2`),s(`를 `),i(`code`,null,`$space * 0.5`),s(`처럼 곱셈으로 바꾸기도 합니다.`)]),i(`pre`,null,[i(`code`,{class:`language-terminal`},[i(`figure`,{"v-pre":``,class:`doc-terminal`},[i(`figcaption`,{class:`doc-terminal-bar`},[i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),s(`터미널`)]),i(`pre`,{tabindex:`0`},[i(`code`,{"v-pre":``},[i(`span`,{class:`terminal-line terminal-line-cmd`},[i(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),s(`npx sass-migrator division --migrate-deps styles/main.scss`)]),s(`
`),i(`span`,{class:`terminal-line terminal-line-cmd`},[i(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),s(`npx sass-migrator module --built-in-only --migrate-deps styles/main.scss`)]),s(`
`),i(`span`,{class:`terminal-line terminal-line-comment`},`# @import까지 바꿀 때: npx sass-migrator module --migrate-deps styles/main.scss`)])])])])])],-1),l[28]||=d(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>숨기기는 고치기가 아닙니다.</strong> <code>quietDeps</code>·<code>silenceDeprecations</code>는 출력만 막습니다. 해당 문법이 제거되는 버전으로 Sass를 올리면 숨긴 곳에서 빌드가 실패하므로, 외부 패키지는 업데이트 일정을, 우리 코드는 정리 일정을 함께 잡습니다.</li><li><strong><code>/</code>를 일괄 치환하지 않습니다.</strong> <code>/</code>를 모두 <code>math.div()</code>로 바꾸면 <code>grid-area: 1 / 3</code>이 <code>0.3333333333</code>이 되는 식으로 CSS가 바뀝니다. 경고가 가리킨 줄만 고치고, 고친 뒤 결과 CSS를 비교합니다.</li><li><strong><code>darken()</code>은 <code>color.adjust()</code>로 같은 숫자를 옮깁니다.</strong> 경고가 제안하는 <code>color.scale()</code>의 값(예: <code>-20%</code>)은 지금 색을 기준으로 계산한 값이라, 변수 색이 바뀌면 결과가 달라질 수 있습니다.</li><li><strong>경고는 실행된 코드에서만 나옵니다.</strong> 호출하지 않은 mixin·function 안의 나눗셈과 전역 함수는 경고가 없다가, 나중에 쓰는 순간 경고가 납니다. 경고가 사라졌어도 전체 검색으로 한 번 더 확인합니다.</li></ul></section>`,1),i(`section`,q,[l[26]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(_,null,{default:r(()=>[...l[25]||=[i(`p`,null,`위 예제에서 경고 종류와 보기를 바꿔 가며 확인해 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`‘나눗셈’에서 `),i(`code`,null,`font`),s(`와 `),i(`code`,null,`grid-area`),s(`의 `),i(`code`,null,`/`),s(`에는 경고가 없는 이유를 설명할 수 있다.`)])])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`‘전역 함수’의 경고 5개가 각각 SCSS 원문의 어느 줄(`),i(`code`,null,`5:12`),s(`, `),i(`code`,null,`9:17`),s(` 등)을 가리키는지 찾을 수 있다.`)])])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`세 경고 종류 모두 문제 쪽과 해결 쪽의 CSS 출력이 같음을 확인했다.`)])])],-1)]]),_:1})])])}}};export{pe as default,$ as duration,re as group,J as id,ce as keyProperty,ne as lead,oe as level,Z as navTitle,Y as order,se as prerequisites,fe as references,de as related,le as status,Q as summary,ae as tags,X as title,ie as topic,ue as updated};