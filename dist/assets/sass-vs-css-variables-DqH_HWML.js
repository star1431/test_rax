import{D as e,E as t,G as n,H as r,L as i,R as a,V as o,c as s,d as c,g as l,h as u,j as d,k as f,l as p,m,pt as h,r as g,ut as _,w as v}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as y}from"./DemoCompare-Bd6h8ThJ.js";import{t as b}from"./OutputCompare-vjryNoqn.js";var x=`.demo-var-screen {
  --color-bg: #fff;
  --color-text: #23334b;
  --color-muted: #5b6b82;
  --color-line: #c9d4e3;
  --color-primary: #3162d4;
  --color-primary-soft: #e6ecfa;
}
.demo-var-screen[data-theme=dark] {
  --color-bg: #172233;
  --color-text: #dce6f5;
  --color-muted: #9fb0c8;
  --color-line: #617895;
  --color-primary: #a4c3ff;
  --color-primary-soft: #33425c;
}

.demo-var-card {
  padding: 16px 18px;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  background: var(--color-bg);
  color: var(--color-text);
}
@media (max-width: 760px) {
  .demo-var-card {
    padding: 12px 14px;
  }
}
.demo-var-card-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 700;
}
.demo-var-card-title {
  display: block;
  margin: 8px 0 4px;
  font-size: 15px;
}
.demo-var-card-text {
  margin: 0 0 10px;
  color: var(--color-muted);
  font-size: 13px;
}
.demo-var-card-link {
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 700;
}`,S=`// Sass 변수와 CSS 변수 (실무 노트 SCSS 06) — 해결 코드
// 토큰 맵은 Sass로 관리하고, 테마마다 바뀌는 색은 CSS 변수로 출력합니다.
@use 'theme/tokens' as theme;

// 1. 토큰 → CSS 변수
// 실제 사이트에서는 :root와 :root[data-theme='dark']에 출력합니다.
// 이 예제는 문서 화면에 영향을 주지 않도록 예제 화면(.demo-var-screen) 안으로 범위를 좁혔습니다.
.demo-var-screen {
  @include theme.color-vars(theme.$light);

  &[data-theme='dark'] {
    @include theme.color-vars(theme.$dark);
  }
}

// 2. 컴포넌트는 var()로 씁니다. 다크 모드 규칙을 따로 쓰지 않습니다.
.demo-var-card {
  padding: 16px 18px;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  background: var(--color-bg);
  color: var(--color-text);

  // 브레이크포인트는 컴파일할 때 정해지는 값이므로 Sass 변수를 씁니다.
  @media (max-width: theme.$bp-mobile) {
    padding: 12px 14px;
  }

  &-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    background: var(--color-primary-soft);
    color: var(--color-primary);
    font-size: 12px;
    font-weight: 700;
  }

  &-title {
    display: block;
    margin: 8px 0 4px;
    font-size: 15px;
  }

  &-text {
    margin: 0 0 10px;
    color: var(--color-muted);
    font-size: 13px;
  }

  &-link {
    color: var(--color-primary);
    font-size: 13px;
    font-weight: 700;
  }
}
`,C=`.demo-var-sass-card {
  padding: 16px 18px;
  border: 1px solid #c9d4e3;
  border-radius: 8px;
  background: #fff;
  color: #23334b;
}
@media (max-width: 760px) {
  .demo-var-sass-card {
    padding: 12px 14px;
  }
}
.demo-var-sass-card-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  background: #e6ecfa;
  color: #3162d4;
  font-size: 12px;
  font-weight: 700;
}
.demo-var-sass-card-title {
  display: block;
  margin: 8px 0 4px;
  font-size: 15px;
}
.demo-var-sass-card-text {
  margin: 0 0 10px;
  color: #5b6b82;
  font-size: 13px;
}
.demo-var-sass-card-link {
  color: #3162d4;
  font-size: 13px;
  font-weight: 700;
}`,w=`// 문제 코드: 색을 Sass 변수로만 관리한 카드

$color-bg: #fff;
$color-text: #23334b;
$color-muted: #5b6b82;
$color-line: #c9d4e3;
$color-primary: #3162d4;
$color-primary-soft: #e6ecfa;
$bp-mobile: 760px;

// 다크 모드 값을 넣었지만 적용되지 않습니다.
// 블록 안에서 선언한 Sass 변수는 이 블록 안에서만 쓰는 지역 변수이고, 규칙이 없으니 아무것도 출력되지 않습니다.
[data-theme='dark'] {
  $color-bg: #172233;
  $color-text: #dce6f5;
  $color-muted: #9fb0c8;
  $color-line: #617895;
  $color-primary: #a4c3ff;
  $color-primary-soft: #33425c;
}

// 컴파일할 때 $color-* 자리에 위의 값이 그대로 들어갑니다.
.demo-var-sass-card {
  padding: 16px 18px;
  border: 1px solid $color-line;
  border-radius: 8px;
  background: $color-bg;
  color: $color-text;

  @media (max-width: $bp-mobile) {
    padding: 12px 14px;
  }

  &-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    background: $color-primary-soft;
    color: $color-primary;
    font-size: 12px;
    font-weight: 700;
  }

  &-title {
    display: block;
    margin: 8px 0 4px;
    font-size: 15px;
  }

  &-text {
    margin: 0 0 10px;
    color: $color-muted;
    font-size: 13px;
  }

  &-link {
    color: $color-primary;
    font-size: 13px;
    font-weight: 700;
  }
}
`,T=`// 색 토큰: 테마마다 이름은 같고 값만 다릅니다.

$light: (
  bg: #fff,
  text: #23334b,
  muted: #5b6b82,
  line: #c9d4e3,
  primary: #3162d4,
  primary-soft: #e6ecfa,
);

$dark: (
  bg: #172233,
  text: #dce6f5,
  muted: #9fb0c8,
  line: #617895,
  primary: #a4c3ff,
  primary-soft: #33425c,
);

// 컴파일할 때만 필요한 값은 Sass 변수로 둡니다. 미디어 쿼리 조건에는 CSS 변수를 쓸 수 없습니다.
$bp-mobile: 760px;

// 맵의 이름·값을 CSS 변수(--color-이름)로 출력합니다.
// CSS 변수의 값 자리는 Sass가 그대로 옮기므로, Sass 값을 넣으려면 #{}로 감싸야 합니다.
@mixin color-vars($colors) {
  @each $name, $value in $colors {
    --color-#{$name}: #{$value};
  }
}
`,E=[{value:`light`,label:`라이트`},{value:`dark`,label:`다크`}],D=[{key:`sass`,label:`Sass 변수만`,source:w,css:C,note:`결과에 $변수도, [data-theme] 규칙도 없습니다. 색은 고정값으로 굳었습니다.`},{key:`css-vars`,label:`Sass 맵 → CSS 변수`,source:`// ===== theme/_tokens.scss (토큰 맵 · color-vars mixin) =====\n${T.trim()}\n\n// ===== sass-vs-css-variables.scss =====\n${S.trim()}\n`,css:x,note:`테마별 --color-* 규칙이 남고, 카드는 var()로 그 값을 읽습니다.`}],O=[{label:`theme/_tokens.scss (mixin·토큰)`,language:`scss`,code:T},{label:`sass-vs-css-variables.scss`,language:`scss`,code:S},{label:`CSS 결과`,language:`css`,code:x}],k={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-var-theme`},A=[`aria-checked`,`onClick`],j=[`data-theme`],M={class:`demo-var-bar`},N={class:`demo-var-body`},P={class:`demo-var-readout`,role:`status`},F={__name:`SassVsCssVariablesDemo`,setup(l){let d=r(`dark`),m=e=>e?`demo-var-card`:`demo-var-sass-card`,b={},x=o({problem:``,solved:``});function S(e,t){b[e?`solved`:`problem`]=t}function C(){Object.entries(b).forEach(([e,t])=>{t&&(x[e]=getComputedStyle(t).backgroundColor)})}return t(C),i(d,()=>v(C)),(t,r)=>(e(),p(y,{problem:{code:`background: $color-bg`,note:`컴파일할 때 #fff로 굳어서, 테마를 바꿔도 카드만 흰색으로 남습니다.`},solved:{code:`background: var(--color-bg)`,note:`[data-theme] 값에 따라 --color-bg가 바뀌고, 카드가 그 값을 읽습니다.`}},{controls:a(()=>[r[0]||=s(`span`,{id:`demo-var-theme`,class:`demo-label`},`예제 화면 테마`,-1),s(`div`,k,[(e(!0),c(g,null,f(n(E),t=>(e(),c(`button`,{key:t.value,type:`button`,role:`radio`,"aria-checked":d.value===t.value,onClick:e=>d.value=t.value},h(t.label),9,A))),128))])]),default:a(({solved:e})=>[s(`div`,{class:`demo-var-screen`,"data-theme":d.value},[s(`div`,M,[r[1]||=s(`span`,null,`가상 화면`,-1),s(`code`,null,`data-theme="`+h(d.value)+`"`,1)]),s(`div`,N,[s(`article`,{ref:t=>S(e,t),class:_(m(e))},[s(`span`,{class:_(`${m(e)}-badge`)},`공지`,2),s(`strong`,{class:_(`${m(e)}-title`)},`11월 정기 점검 안내`,2),s(`p`,{class:_(`${m(e)}-text`)},`11월 20일 02:00~04:00에는 주문 조회를 이용할 수 없습니다.`,2),s(`span`,{class:_(`${m(e)}-link`)},`자세히 보기`,2)],2)]),s(`p`,P,[r[2]||=u(` 카드 background-color: `,-1),s(`code`,null,h(x[e?`solved`:`problem`]),1)])],8,j)]),caption:a(()=>[...r[3]||=[u(` 카드 스타일은 아래 코드 탭과 같은 SCSS 파일을 실제로 컴파일해 적용했습니다. 테마는 문서 화면이 아닌 예제 화면(`,-1),s(`code`,null,`.demo-var-screen`,-1),u(`)에만 적용되며, 맨 아래 줄은 브라우저가 계산한 카드 배경색(getComputedStyle)입니다. `,-1)]]),_:1}))}},I={class:`doc-body`},L={id:`section-0`},R={id:`section-1`},z={id:`section-2`},ee={id:`section-3`},B={id:`section-4`},V={id:`section-7`},H=`sass-vs-css-variables`,U=6,W=`다크 모드에서 색이 바뀌지 않을 때 (Sass 변수와 CSS 변수)`,G=`Sass 변수와 CSS 변수`,K=`Sass 변수는 컴파일할 때 고정값으로 바뀌어 다크 모드 전환을 따라가지 못합니다. 색 토큰은 Sass 맵에서 CSS 변수로 출력하고, 컴포넌트는 var()로 읽게 바꿉니다.`,q=`다크 모드로 바꿨는데 카드만 흰색으로 남는다면?
색을 $변수로 썼는지, var(--변수)로 썼는지부터 확인하세요.
`,J=`구조`,Y=`변수`,X=[`SCSS`,`CSS 변수`,`사용자 지정 속성`,`var()`,`다크 모드`,`data-theme`,`@each`,`디자인 토큰`],Z=`중급`,Q=`약 11분`,$=[`SCSS 변수`,`@each`,`속성 선택자`],te=`background: var(--color-bg)`,ne=`published`,re=`2026-11-12`,ie=[`use-forward`,`each-utility`,`responsive-mixin`],ae=[{title:`Sass — Variables`,url:`https://sass-lang.com/documentation/variables/`},{title:`Sass — Declarations (Custom Properties)`,url:`https://sass-lang.com/documentation/style-rules/declarations/#custom-properties`},{title:`CSS Custom Properties for Cascading Variables Module Level 1`,url:`https://www.w3.org/TR/css-variables-1/`},{title:`MDN — Using CSS custom properties (variables)`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`},{title:`MDN — var()`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/var`}],oe={__name:`sass-vs-css-variables`,setup(t,{expose:r}){return r({frontmatter:{id:`sass-vs-css-variables`,order:6,title:`다크 모드에서 색이 바뀌지 않을 때 (Sass 변수와 CSS 변수)`,navTitle:`Sass 변수와 CSS 변수`,summary:`Sass 변수는 컴파일할 때 고정값으로 바뀌어 다크 모드 전환을 따라가지 못합니다. 색 토큰은 Sass 맵에서 CSS 변수로 출력하고, 컴포넌트는 var()로 읽게 바꿉니다.`,lead:`다크 모드로 바꿨는데 카드만 흰색으로 남는다면?
색을 $변수로 썼는지, var(--변수)로 썼는지부터 확인하세요.
`,group:`구조`,topic:`변수`,tags:[`SCSS`,`CSS 변수`,`사용자 지정 속성`,`var()`,`다크 모드`,`data-theme`,`@each`,`디자인 토큰`],level:`중급`,duration:`약 11분`,prerequisites:[`SCSS 변수`,`@each`,`속성 선택자`],keyProperty:`background: var(--color-bg)`,status:`published`,updated:`2026-11-12`,related:[`use-forward`,`each-utility`,`responsive-mixin`],references:[{title:`Sass — Variables`,url:`https://sass-lang.com/documentation/variables/`},{title:`Sass — Declarations (Custom Properties)`,url:`https://sass-lang.com/documentation/style-rules/declarations/#custom-properties`},{title:`CSS Custom Properties for Cascading Variables Module Level 1`,url:`https://www.w3.org/TR/css-variables-1/`},{title:`MDN — Using CSS custom properties (variables)`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`},{title:`MDN — var()`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/var`}]}}),(t,r)=>{let i=d(`DocIssue`),o=d(`DocTakeaway`),f=d(`DocTerm`),p=d(`DocSteps`),h=d(`DocInspect`),g=d(`CodePanel`),_=d(`DocPractice`);return e(),c(`div`,I,[s(`section`,L,[r[2]||=m(`<h2><span class="section-no">01</span> 문제 상황</h2><p>헤더의 테마 버튼을 누르면 <code>html</code> 요소의 <code>data-theme</code> 속성이 <code>dark</code>로 바뀌는 사이트입니다. 공지 카드는 색을 Sass 변수로 관리하고 있어서, 다크 모드 값도 같은 이름의 변수로 다시 적었습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-variable">$color-bg</span>: <span class="hljs-number">#fff</span>;
<span class="hljs-variable">$color-primary</span>: <span class="hljs-number">#3162d4</span>;

<span class="hljs-selector-attr">[data-theme=<span class="hljs-string">&#39;dark&#39;</span>]</span> {
  <span class="hljs-variable">$color-bg</span>: <span class="hljs-number">#172233</span>;      <span class="hljs-comment">// 다크 모드 값을 넣었지만…</span>
  <span class="hljs-variable">$color-primary</span>: <span class="hljs-number">#a4c3ff</span>;
}

<span class="hljs-selector-class">.notice-card</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-variable">$color-bg</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-variable">$color-primary</span>;
}
</code></pre><p>빌드 오류도 경고도 없어서 지나치기 쉽고, 다크 모드 검수에서 이런 형태로 돌아옵니다.</p>`,4),l(i,{label:`디자인 검수`,title:`공지 카드: 다크 모드로 바꿔도 카드만 흰색으로 남음`,env:`전체 브라우저 · 테마 버튼이 html의 data-theme 값을 바꿈 · 카드 색은 Sass 변수`,expected:`다크 모드에서 카드 배경·글자·링크 색이 다크 팔레트로 바뀜`,actual:`페이지 배경만 어두워지고 카드는 흰 배경, 링크는 라이트 모드 파란색 그대로`},{default:a(()=>[...r[0]||=[s(`ol`,null,[s(`li`,null,`공지 카드가 있는 화면을 엽니다.`),s(`li`,null,`헤더의 테마 버튼으로 다크 모드로 바꿉니다.`),s(`li`,null,`카드의 배경색과 링크 색을 확인합니다.`)],-1)]]),_:1}),l(o,null,{default:a(()=>[...r[1]||=[s(`p`,null,[u(`화면을 보는 중에 바뀌어야 하는 값(테마 색)은 `),s(`strong`,null,`CSS 변수`),u(`(`),s(`code`,null,`--color-bg`),u(`)로 출력하고 컴포넌트는 `),s(`code`,null,`var()`),u(`로 읽으세요. `),s(`strong`,null,`Sass 변수`),u(`는 컴파일할 때 정해지는 값(브레이크포인트 등)에 씁니다.`)],-1)]]),_:1})]),s(`section`,R,[r[3]||=s(`h2`,null,[s(`span`,{class:`section-no`},`02`),u(` 직접 비교하기`),s(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),r[4]||=s(`p`,null,`예제 화면의 테마를 라이트·다크로 바꿔 보세요. 두 카드에는 같은 SCSS 파일을 실제로 컴파일한 스타일이 적용되어 있습니다.`,-1),l(F)]),s(`section`,z,[r[28]||=s(`h2`,null,[s(`span`,{class:`section-no`},`03`),u(` 왜 이런 일이 생길까요?`)],-1),s(`p`,null,[r[6]||=u(`Sass 변수는 `,-1),l(f,{term:`compile`},{default:a(()=>[...r[5]||=[u(`컴파일`,-1)]]),_:1}),r[7]||=u(`할 때만 존재합니다. Sass는 `,-1),r[8]||=s(`code`,null,`$color-bg`,-1),r[9]||=u(` 자리에 값을 넣어 `,-1),r[10]||=s(`code`,null,`#fff`,-1),r[11]||=u(`라는 글자로 바꾸고, 결과 CSS에는 변수 이름이 남지 않습니다. 브라우저가 받는 것은 `,-1),r[12]||=s(`code`,null,`background: #fff`,-1),r[13]||=u(`뿐이라, 화면을 보는 중에 `,-1),r[14]||=s(`code`,null,`data-theme`,-1),r[15]||=u(`이 바뀌어도 다시 계산할 대상이 없습니다.`,-1)]),r[29]||=s(`p`,null,[u(`문제 코드의 `),s(`code`,null,`[data-theme='dark'] { … }`),u(` 블록은 더 헷갈립니다. Sass에서 선택자 블록 안에 선언한 변수는 `),s(`strong`,null,`그 블록 안에서만 쓰는 지역 변수`),u(`라서, 바깥의 `),s(`code`,null,`$color-bg`),u(`를 바꾸지 않습니다. 블록 안에 CSS 규칙이 하나도 없으니 결과 CSS에는 `),s(`code`,null,`[data-theme='dark']`),u(`도 출력되지 않습니다. 아래에서 두 방법의 실제 컴파일 결과를 비교해 보세요.`)],-1),l(b,{items:n(D)},null,8,[`items`]),r[30]||=m(`<p>CSS 변수(사용자 지정 속성, <code>--color-bg</code>)는 결과 CSS에 그대로 남아 <strong>브라우저가</strong> 값을 정합니다. 선택자에 맞는 요소에 선언되고 자손에게 상속되므로, <code>[data-theme=&#39;dark&#39;]</code> 규칙이 값을 바꾸면 그 안의 모든 <code>var(--color-bg)</code>가 다시 계산됩니다.</p><div class="table-wrap"><table><thead><tr><th>구분</th><th>Sass 변수 <code>$color-bg</code></th><th>CSS 변수 <code>--color-bg</code></th></tr></thead><tbody><tr><td>값이 정해지는 때</td><td>컴파일할 때</td><td>브라우저가 화면을 그릴 때</td></tr><tr><td>결과 CSS</td><td>값만 남음(<code>#fff</code>)</td><td>선언과 <code>var()</code>가 남음</td></tr><tr><td>테마 속성·JS로 바꾸기</td><td>불가</td><td>가능</td></tr><tr><td>미디어 쿼리 조건</td><td>사용 가능</td><td>사용 불가</td></tr><tr><td>Sass 색 함수(<code>color.adjust</code> 등)에 넣기</td><td>사용 가능</td><td>컴파일 오류</td></tr></tbody></table></div><p>Sass 변수만으로 다크 모드를 만들려면 컴포넌트마다 다크용 규칙을 한 번 더 써야 합니다. 컴포넌트가 늘수록 빠뜨리는 곳이 생깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.notice-card</span> { <span class="hljs-attribute">background</span>: <span class="hljs-variable">$color-bg</span>; }
<span class="hljs-selector-attr">[data-theme=<span class="hljs-string">&#39;dark&#39;</span>]</span> <span class="hljs-selector-class">.notice-card</span> { <span class="hljs-attribute">background</span>: <span class="hljs-variable">$color-bg-dark</span>; } <span class="hljs-comment">// 컴포넌트마다 반복</span>
</code></pre>`,4),s(`p`,null,[r[17]||=u(`이 사이트도 같은 기준으로 나눕니다. `,-1),r[18]||=s(`code`,null,`src/assets/css/scss/common/_tokens.scss`,-1),r[19]||=u(`는 `,-1),r[20]||=s(`code`,null,`:root`,-1),r[21]||=u(`에 `,-1),r[22]||=s(`code`,null,`--color-bg`,-1),r[23]||=u(`, `,-1),r[24]||=s(`code`,null,`--color-primary`,-1),r[25]||=u(` 같은 `,-1),l(f,{term:`design-token`},{default:a(()=>[...r[16]||=[u(`디자인 토큰`,-1)]]),_:1}),r[26]||=m(`을 CSS 변수로 선언하고, <code>:root[data-theme=&#39;dark&#39;]</code>에서 값만 바꿉니다. 테마 버튼은 <code>html</code>의 <code>data-theme</code>만 바꾸고, 공통 컴포넌트는 색을 <code>var()</code>로 읽기 때문에 다크 모드 규칙을 따로 쓰지 않습니다. 반면 브레이크포인트는 <code>common/_variables.scss</code>의 Sass 맵(<code>$breakpoints</code>)에 두고 <code>mq()</code> mixin으로 미디어 쿼리를 만듭니다.`,15)]),l(p,null,{default:a(()=>[...r[27]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`값은 Sass 맵에`),u(),s(`code`,null,`$light`),u(`, `),s(`code`,null,`$dark`)]),s(`li`,null,[s(`strong`,null,`@each로 CSS 변수 출력`),u(),s(`code`,null,`--color-bg: #fff;`)]),s(`li`,null,[s(`strong`,null,`테마 규칙은 값만 교체`),u(),s(`code`,null,`[data-theme='dark']`)]),s(`li`,null,[s(`strong`,null,`컴포넌트는 var()로 읽기`),u(),s(`code`,null,`background: var(--color-bg)`)])],-1)]]),_:1})]),s(`section`,ee,[r[32]||=s(`h2`,null,[s(`span`,{class:`section-no`},`04`),u(` 원인 찾기`)],-1),r[33]||=s(`p`,null,[u(`색이 테마를 따라가지 않을 때는 `),s(`strong`,null,[u(`카드에 적용된 값이 고정값인지 `),s(`code`,null,`var()`),u(`인지`)]),u(`부터 봅니다. 아래 순서로 확인합니다.`)],-1),l(h,null,{default:a(()=>[...r[31]||=[s(`ol`,null,[s(`li`,null,[s(`strong`,null,`Styles 탭에서 값의 모양 확인`),u(` Elements 패널에서 카드를 선택하고 Styles 탭의 `),s(`code`,null,`background`),u(` 줄을 봅니다. `),s(`code`,null,`#fff`),u(`처럼 고정값이면 Sass 변수가 컴파일된 결과이고, 테마를 바꿔도 이 값은 바뀌지 않습니다. `),s(`code`,null,`var(--color-bg)`),u(`라면 CSS 변수를 쓰고 있는 것입니다.`)]),s(`li`,null,[s(`strong`,null,`테마 속성이 바뀌는지 확인`),u(` Elements 패널에서 `),s(`code`,null,`html`),u(` 요소(예제에서는 `),s(`code`,null,`.demo-var-screen`),u(`)를 보면서 테마를 바꿉니다. `),s(`code`,null,`data-theme`),u(` 값이 바뀌지 않는다면 CSS가 아니라 테마 전환 스크립트를 먼저 확인합니다.`)]),s(`li`,null,[s(`strong`,null,`변수 값이 테마에 맞는지 확인`),s(`code`,null,`var()`),u(`를 쓰고 있다면 Styles 탭 아래쪽의 `),s(`strong`,null,`Inherited from …`),u(` 묶음에서 `),s(`code`,null,`--color-bg`),u(`가 어느 규칙에서 왔는지 봅니다. 다크 모드인데 라이트 값이 적용되어 있다면 다크 모드 규칙이 없거나 선택자가 맞지 않는 것입니다.`)]),s(`li`,null,[s(`strong`,null,`결과 CSS에서 테마 규칙 검색`),u(` 빌드 결과 CSS(`),s(`code`,null,`dist/assets/*.css`),u(`)나 Sources 패널에서 `),s(`code`,null,`data-theme`),u(`과 `),s(`code`,null,`--color-`),u(`를 검색합니다. SCSS에 `),s(`code`,null,`[data-theme='dark']`),u(` 블록이 있는데 결과 CSS에 없다면, 블록 안에 Sass 변수만 다시 선언한 경우입니다.`)]),s(`li`,null,[s(`strong`,null,`Styles 탭에서 값을 바꿔 시험`),u(` 해결 쪽 카드를 선택하고 Inherited 묶음의 `),s(`code`,null,`--color-bg`),u(` 값을 다른 색으로 고쳐 봅니다. 카드가 바로 바뀌면 CSS 변수가 제대로 연결된 것입니다. 문제 쪽 카드도 같은 변수를 상속받지만, 카드가 변수를 읽지 않으므로 값을 고쳐도 바뀌지 않습니다.`)])],-1)]]),_:1})]),s(`section`,B,[r[34]||=s(`h2`,null,[s(`span`,{class:`section-no`},`05`),u(` 해결 코드`)],-1),r[35]||=s(`p`,null,[u(`색 토큰 맵과 CSS 변수 출력 mixin(`),s(`code`,null,`theme/_tokens.scss`),u(`), 이를 쓰는 카드입니다. `),s(`strong`,null,`CSS 결과`),u(` 탭은 빌드할 때 실제로 컴파일한 출력입니다. 테마별 `),s(`code`,null,`--color-*`),u(` 규칙과, 숫자로 바뀐 미디어 쿼리(`),s(`code`,null,`760px`),u(`)를 확인하세요.`)],-1),l(g,{tabs:n(O)},null,8,[`tabs`]),r[36]||=m(`<p>CSS 변수의 값 자리는 Sass가 식으로 계산하지 않고 글자 그대로 옮깁니다. Sass 값을 넣으려면 반드시 보간으로 감쌉니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-variable">$bg</span>: <span class="hljs-number">#fff</span>;

<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--color-bg</span>: <span class="hljs-variable">$bg</span>;     <span class="hljs-comment">// 결과: --color-bg: $bg;  (오류 없이 글자 그대로 출력)</span>
  <span class="hljs-attr">--color-bg</span>: #{<span class="hljs-variable">$bg</span>};  <span class="hljs-comment">// 결과: --color-bg: #fff;</span>
}
</code></pre>`,2)]),r[39]||=s(`section`,{id:`section-5`},[s(`h2`,null,[s(`span`,{class:`section-no`},`06`),u(` 비슷한 상황`)]),s(`p`,null,[u(`Sass 변수와 CSS 변수를 섞어 쓸 때 자주 만나는 경우입니다. 값이 `),s(`strong`,null,`언제 정해지는지`),u(`를 기준으로 고릅니다.`)]),s(`h3`,null,`미디어 쿼리 조건에 var()를 넣었을 때`),s(`p`,null,[u(`Sass는 `),s(`code`,null,`@media (max-width: var(--bp-mobile))`),u(`를 오류 없이 그대로 출력하지만, 브라우저는 미디어 쿼리 조건에서 `),s(`code`,null,`var()`),u(`를 해석하지 않아 이 규칙이 적용되지 않습니다. 브레이크포인트는 Sass 변수로 둡니다.`)]),s(`pre`,{class:`doc-code`,tabindex:`0`},[s(`code`,{class:`hljs`},[s(`span`,{class:`hljs-variable`},`$bp-mobile`),u(`: `),s(`span`,{class:`hljs-number`},`760px`),u(`;

`),s(`span`,{class:`hljs-keyword`},`@media`),u(` (`),s(`span`,{class:`hljs-attribute`},`max-width`),u(`: `),s(`span`,{class:`hljs-variable`},`$bp-mobile`),u(`) { … }          `),s(`span`,{class:`hljs-comment`},`// O: 결과는 (max-width: 760px)`),u(`
`),s(`span`,{class:`hljs-keyword`},`@media`),u(` (`),s(`span`,{class:`hljs-attribute`},`max-width`),u(`: var(--bp-mobile)) { … }    `),s(`span`,{class:`hljs-comment`},`// X: 브라우저가 적용하지 않음`),u(`
`)])]),s(`h3`,null,`Sass 색 함수에 var()를 넣었을 때`),s(`p`,null,[s(`code`,null,`color.adjust()`),u(` 같은 Sass 색 함수는 컴파일할 때 실제 색 값이 필요합니다. `),s(`code`,null,`var()`),u(`는 Sass에게 아직 값이 없는 글자일 뿐이라 빌드가 멈춥니다.`)]),s(`pre`,null,[s(`code`,{class:`language-terminal`},[s(`figure`,{"v-pre":``,class:`doc-terminal`},[s(`figcaption`,{class:`doc-terminal-bar`},[s(`span`,{"aria-hidden":`true`}),s(`span`,{"aria-hidden":`true`}),s(`span`,{"aria-hidden":`true`}),u(`터미널`)]),s(`pre`,{tabindex:`0`},[s(`code`,{"v-pre":``},[s(`span`,{class:`terminal-line terminal-line-cmd`},[s(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),u(`npx sass styles/button.scss`)]),u(`
`),s(`span`,{class:`terminal-line terminal-line-red`},`Error: $color: var(--color-primary) is not a color.`),u(`
`),s(`span`,{class:`terminal-line`},`  ╷`),u(`
`),s(`span`,{class:`terminal-line`},`4 │   background: color.adjust(var(--color-primary), $lightness: -10%);`),u(`
`),s(`span`,{class:`terminal-line`},`  │               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`),u(`
`),s(`span`,{class:`terminal-line`},`  ╵`),u(`
`),s(`span`,{class:`terminal-line`},`  styles/button.scss 4:15  root stylesheet`)])])])])]),s(`p`,null,[u(`테마마다 필요한 색을 맵에 미리 넣어 CSS 변수로 출력합니다. 브라우저에서 섞어야 한다면 CSS의 `),s(`code`,null,`color-mix()`),u(`를 쓸 수 있지만, 구형 브라우저는 지원하지 않으므로 지원 범위를 MDN 호환성 표에서 확인합니다.`)]),s(`pre`,{class:`doc-code`,tabindex:`0`},[s(`code`,{class:`hljs`},[s(`span`,{class:`hljs-variable`},`$light`),u(`: (primary: `),s(`span`,{class:`hljs-number`},`#3162d4`),u(`, primary-hover: `),s(`span`,{class:`hljs-number`},`#2550b8`),u(`);
`),s(`span`,{class:`hljs-variable`},`$dark`),u(`: (primary: `),s(`span`,{class:`hljs-number`},`#a4c3ff`),u(`, primary-hover: `),s(`span`,{class:`hljs-number`},`#c2d6ff`),u(`);

`),s(`span`,{class:`hljs-selector-class`},`.button`),s(`span`,{class:`hljs-selector-pseudo`},`:hover`),u(` { `),s(`span`,{class:`hljs-attribute`},`background`),u(`: `),s(`span`,{class:`hljs-built_in`},`var`),u(`(--color-primary-hover); }
`),s(`span`,{class:`hljs-comment`},`// 또는 background: color-mix(in srgb, var(--color-primary) 85%, black);`),u(`
`)])]),s(`h3`,null,`한 컴포넌트만 색을 바꿀 때`),s(`p`,null,[u(`CSS 변수는 선언한 요소와 그 자손에게만 적용됩니다. 컴포넌트에 변수를 다시 선언하면 그 안의 `),s(`code`,null,`var()`),u(`만 바뀌고, 다른 화면에는 영향이 없습니다.`)]),s(`pre`,{class:`doc-code`,tabindex:`0`},[s(`code`,{class:`hljs`},[s(`span`,{class:`hljs-comment`},`// 긴급 공지 카드: 카드 안의 강조색만 바꿉니다.`),u(`
`),s(`span`,{class:`hljs-selector-class`},`.notice-card-urgent`),u(` {
  `),s(`span`,{class:`hljs-attr`},`--color-primary`),u(`: `),s(`span`,{class:`hljs-number`},`#c62f2f`),u(`;
}
`)])]),s(`h3`,null,`JS에서 값을 읽거나 바꿀 때`),s(`p`,null,[u(`Sass 변수는 결과에 남지 않아 JS에서 읽을 수 없습니다. CSS 변수는 `),s(`code`,null,`getComputedStyle`),u(`로 읽고 `),s(`code`,null,`style.setProperty`),u(`로 바꿉니다. 테마 전체를 바꿀 때는 이 사이트처럼 `),s(`code`,null,`data-theme`),u(` 속성만 바꾸는 편이 관리하기 쉽습니다.`)]),s(`pre`,{class:`doc-code`,tabindex:`0`},[s(`code`,{class:`hljs`},[s(`span`,{class:`hljs-keyword`},`const`),u(` root = `),s(`span`,{class:`hljs-variable language_`},`document`),u(`.`),s(`span`,{class:`hljs-property`},`documentElement`),u(`
`),s(`span`,{class:`hljs-keyword`},`const`),u(` primary = `),s(`span`,{class:`hljs-title function_`},`getComputedStyle`),u(`(root).`),s(`span`,{class:`hljs-title function_`},`getPropertyValue`),u(`(`),s(`span`,{class:`hljs-string`},`'--color-primary'`),u(`).`),s(`span`,{class:`hljs-title function_`},`trim`),u(`()

root.`),s(`span`,{class:`hljs-property`},`style`),u(`.`),s(`span`,{class:`hljs-title function_`},`setProperty`),u(`(`),s(`span`,{class:`hljs-string`},`'--color-primary'`),u(`, `),s(`span`,{class:`hljs-string`},`'#2a8668'`),u(`) `),s(`span`,{class:`hljs-comment`},`// 값 하나만 바꾸기`),u(`
root.`),s(`span`,{class:`hljs-property`},`dataset`),u(`.`),s(`span`,{class:`hljs-property`},`theme`),u(` = `),s(`span`,{class:`hljs-string`},`'dark'`),u(`                          `),s(`span`,{class:`hljs-comment`},`// 테마 전체 바꾸기`),u(`
`)])])],-1),r[40]||=m(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>변수 이름 오타는 오류가 나지 않습니다.</strong> <code>var(--color-bgg)</code>처럼 없는 변수를 읽으면 빌드는 성공하고, 브라우저에서 그 선언이 적용되지 않습니다(배경이 투명해지는 식). 대체값 <code>var(--color-bg, #fff)</code>을 두거나 Styles 탭에서 값이 계산되는지 확인합니다.</li><li><strong>CSS 변수에 넣는 Sass 값은 보간으로 감쌉니다.</strong> 감싸지 않으면 <code>$bg</code>라는 글자가 그대로 출력되고, 경고도 나오지 않습니다.</li><li><strong>다크 팔레트도 명도 대비를 확인합니다.</strong> 테마마다 글자와 배경의 대비가 달라집니다. 본문 글자는 두 테마 모두 4.5:1 이상(WCAG AA)인지 확인합니다.</li><li><strong>브라우저 지원 범위를 확인합니다.</strong> CSS 변수는 Internet Explorer에서 동작하지 않습니다. IE를 지원해야 하는 프로젝트라면 CSS 변수로 테마를 바꾸는 방식을 쓸 수 없으므로 지원 범위부터 정합니다.</li></ul></section>`,1),s(`section`,V,[r[38]||=s(`h2`,null,[s(`span`,{class:`section-no`},`08`),u(` 짧은 실습`)],-1),l(_,null,{default:a(()=>[...r[37]||=[s(`p`,null,`위 예제에서 테마를 라이트와 다크로 번갈아 바꿔 보세요.`,-1),s(`ul`,{class:`checklist`},[s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},[u(`다크를 고르면 해결 쪽 카드 배경이 `),s(`code`,null,`rgb(23, 34, 51)`),u(`로 바뀌고, 문제 쪽은 `),s(`code`,null,`rgb(255, 255, 255)`),u(`로 남는다.`)])])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},`라이트를 고르면 두 카드의 배경과 링크 색이 같아진다.`)])]),s(`li`,null,[s(`label`,null,[s(`input`,{type:`checkbox`}),s(`span`,{class:`checklist-text`},[u(`개발자 도구에서 해결 쪽 카드를 선택하고 `),s(`code`,null,`--color-bg`),u(` 값을 고치면 카드 배경이 바로 바뀐다.`)])])])],-1)]]),_:1})])])}}};export{oe as default,Q as duration,J as group,H as id,te as keyProperty,q as lead,Z as level,G as navTitle,U as order,$ as prerequisites,ae as references,ie as related,ne as status,K as summary,X as tags,W as title,Y as topic,re as updated};