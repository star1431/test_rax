import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,m as u,pt as d,r as f,s as p,u as m}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as h}from"./highlight-DI8AeOIq.js";var g=`.mt-0 {
  margin-top: 0;
}

.mt-8 {
  margin-top: 8px;
}

.mt-16 {
  margin-top: 16px;
}

.mb-0 {
  margin-bottom: 0;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-16 {
  margin-bottom: 16px;
}

.mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.mx-8 {
  margin-left: 8px;
  margin-right: 8px;
}

.mx-16 {
  margin-left: 16px;
  margin-right: 16px;
}

.ellipsis-1 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.ellipsis-3 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.badge-primary {
  color: #3162d4;
}

.badge-danger {
  color: #d43c3c;
}`,_=`// 반복문으로 유틸 클래스 만들기 (실무 노트 SCSS 01)
// 간격 단계(맵) × 방향(맵)을 반복해 .mt-8, .mx-16 같은 클래스를 만듭니다.
@use 'sass:map';

// 간격 단계: 클래스 이름 → 값
$spaces: (
  0: 0,
  8: 8px,
  16: 16px,
);

// 방향: 클래스 접미사 → 속성 (x·y는 속성 두 개)
$sides: (
  t: top,
  b: bottom,
  x: (left, right),
);

@each $key, $props in $sides {
  @each $step, $value in $spaces {
    .m#{$key}-#{$step} {
      @each $prop in $props {
        margin-#{$prop}: $value;
      }
    }
  }
}

// 말줄임 줄 수: @for로 1~3줄 클래스를 만듭니다.
@for $line from 1 through 3 {
  .ellipsis-#{$line} {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $line;
  }
}

// 상태 배지: 리스트를 반복하고 map.get으로 색을 꺼냅니다.
$tone-colors: (
  primary: #3162d4,
  danger: #d43c3c,
);

@each $tone in (primary, danger) {
  .badge-#{$tone} {
    color: map.get($tone-colors, $tone);
  }
}
`,v=`.mt-4 {
  margin-top: 4px;
}

.mt-8 {
  margin-top: 8px;
}

.mt-12 {
  margin-top: 12px;
}

.mt-16 {
  margin-top: 16px;
}

.mt-20 {
  margin-top: 20px;
}`,y=`// 4단위 간격 (실무 노트 SCSS 01)
// 1~5를 반복하면서 4를 곱해 .mt-4 ~ .mt-20 클래스를 만듭니다.
@for $i from 1 through 5 {
  .mt-#{$i * 4} {
    margin-top: $i * 4px;
  }
}
`,b=[0,4,8,12,16,20,24,32,40],x={t:[`top`],b:[`bottom`],l:[`left`],r:[`right`],x:[`left`,`right`],y:[`top`,`bottom`]};function S(e,t){return e.flatMap(e=>t.map(t=>({selector:`.m${e}-${t}`,declarations:x[e].map(e=>`margin-${e}: ${t?`${t}px`:0};`)})))}var ee=e=>e.map(({selector:e,declarations:t})=>`${e} {\n${t.map(e=>`  ${e}`).join(`
`)}\n}`).join(`

`),C=[{label:`SCSS`,language:`scss`,code:_},{label:`CSS 결과`,language:`css`,code:g}],w=[{label:`SCSS`,language:`scss`,code:y},{label:`CSS 결과`,language:`css`,code:v}],T={class:`demo-shell`},E={class:`demo-controls`},D={class:`demo-label`,id:`each-steps`},O={class:`sample-buttons`,role:`group`,"aria-labelledby":`each-steps`},k=[`aria-pressed`,`onClick`],A={class:`demo-label`,id:`each-sides`},j={class:`sample-buttons`,role:`group`,"aria-labelledby":`each-sides`},M=[`aria-pressed`,`onClick`],N={class:`demo-each`},P={class:`demo-each-formula`,role:`status`},F={key:0,class:`demo-each-warn`},I={class:`demo-each-classes`,"aria-label":`생성되는 클래스`},L={class:`demo-each-css`,tabindex:`0`,"aria-label":`생성되는 CSS`},R=[`innerHTML`],z={__name:`EachUtilityDemo`,setup(r){let o=n([0,8,16]),c=n([`t`,`b`,`x`]),u=(e,t)=>t.filter(t=>e.includes(t)),g=p(()=>S(u(c.value,Object.keys(x)),u(o.value,b))),_=p(()=>ee(g.value)),v=p(()=>_.value?_.value.split(`
`).length:0),y=p(()=>h(_.value||`/* 단계와 방향을 하나 이상 고르세요. */`,`css`));function C(e,t){let n=e.indexOf(t);n>-1?e.splice(n,1):e.push(t)}return(n,r)=>(e(),a(`div`,T,[i(`div`,E,[i(`span`,D,[r[0]||=s(`간격 단계 `,-1),i(`strong`,null,d(o.value.length)+`개`,1)]),i(`div`,O,[(e(!0),a(f,null,l(t(b),t=>(e(),a(`button`,{key:t,type:`button`,"aria-pressed":o.value.includes(t),onClick:e=>C(o.value,t)},d(t),9,k))),128))]),i(`span`,A,[r[1]||=s(`방향 `,-1),i(`strong`,null,d(c.value.length)+`개`,1)]),i(`div`,j,[(e(!0),a(f,null,l(t(x),(t,n)=>(e(),a(`button`,{key:n,type:`button`,"aria-pressed":c.value.includes(n),onClick:e=>C(c.value,n)},[s(d(n)+` `,1),i(`small`,null,d(t.join(`·`)),1)],8,M))),128))])]),i(`div`,N,[i(`p`,P,[s(` 방향 `+d(c.value.length)+` × 단계 `+d(o.value.length)+` = `,1),i(`strong`,null,`클래스 `+d(g.value.length)+`개`,1),s(`, CSS `+d(v.value)+`줄 `,1)]),g.value.length>t(40)?(e(),a(`p`,F,` 클래스가 `+d(t(40))+`개를 넘었습니다. 화면에서 쓰지 않는 클래스도 CSS 파일에 모두 들어갑니다. `,1)):m(``,!0),i(`ul`,I,[(e(!0),a(f,null,l(g.value,t=>(e(),a(`li`,{key:t.selector},d(t.selector),1))),128))]),i(`pre`,L,[i(`code`,{class:`hljs`,innerHTML:y.value},null,8,R)])])]))}},B={class:`doc-body`},V={id:`section-0`},H={id:`section-1`},te={id:`section-2`},U={id:`section-3`},W={id:`section-4`},G={id:`section-5`},K={id:`section-8`},q=`each-utility`,J=1,Y=`반복문으로 유틸 클래스 만들기`,X=`반복문으로 유틸 클래스`,Z=`간격·말줄임·상태 색처럼 값만 다른 클래스를 @each·@for 반복문과 맵으로 만들고, 필요한 만큼만 생성하는 기준을 정리합니다.`,Q=`.mt-8, .mt-16, .mb-8…처럼 값만 다른 클래스를 하나씩 쓰고 있다면?
값은 맵에 모으고, 클래스는 반복문으로 만드세요.
`,ne=`문법`,re=`반복문`,ie=[`SCSS`,`@each`,`@for`,`맵`,`map.get`,`보간`,`유틸 클래스`,`간격`],ae=`기초`,oe=`약 10분`,$=[`SCSS 변수`,`클래스 네이밍`],se=`@each $key, $value in $map`,ce=`published`,le=`2026-11-11`,ue=[`use-forward`,`include-extend`],de=[{title:`Sass — @each`,url:`https://sass-lang.com/documentation/at-rules/control/each/`},{title:`Sass — @for`,url:`https://sass-lang.com/documentation/at-rules/control/for/`},{title:`Sass — sass:map 모듈`,url:`https://sass-lang.com/documentation/modules/map/`}],fe={__name:`each-utility`,setup(n,{expose:l}){return l({frontmatter:{id:`each-utility`,order:1,title:`반복문으로 유틸 클래스 만들기`,navTitle:`반복문으로 유틸 클래스`,summary:`간격·말줄임·상태 색처럼 값만 다른 클래스를 @each·@for 반복문과 맵으로 만들고, 필요한 만큼만 생성하는 기준을 정리합니다.`,lead:`.mt-8, .mt-16, .mb-8…처럼 값만 다른 클래스를 하나씩 쓰고 있다면?
값은 맵에 모으고, 클래스는 반복문으로 만드세요.
`,group:`문법`,topic:`반복문`,tags:[`SCSS`,`@each`,`@for`,`맵`,`map.get`,`보간`,`유틸 클래스`,`간격`],level:`기초`,duration:`약 10분`,prerequisites:[`SCSS 변수`,`클래스 네이밍`],keyProperty:`@each $key, $value in $map`,status:`published`,updated:`2026-11-11`,related:[`use-forward`,`include-extend`],references:[{title:`Sass — @each`,url:`https://sass-lang.com/documentation/at-rules/control/each/`},{title:`Sass — @for`,url:`https://sass-lang.com/documentation/at-rules/control/for/`},{title:`Sass — sass:map 모듈`,url:`https://sass-lang.com/documentation/modules/map/`}]}}),(n,l)=>{let d=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`CodePanel`),m=c(`DocTerm`),h=c(`DocInspect`),g=c(`DocPractice`);return e(),a(`div`,B,[i(`section`,V,[l[2]||=u(`<h2><span class="section-no">01</span> 문제 상황</h2><p>간격 유틸 클래스를 손으로 작성하고 있습니다. 값이 하나 늘 때마다 <code>.mt-</code>, <code>.mb-</code>, <code>.mx-</code> 규칙을 모두 찾아 추가해야 하고, 한 곳만 빠뜨려도 클래스가 없는 상태로 배포됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.mt-8</span> { <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8px</span>; }
<span class="hljs-selector-class">.mt-16</span> { <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">16px</span>; }
<span class="hljs-selector-class">.mb-8</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>; }
<span class="hljs-selector-class">.mb-16</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">16px</span>; }
<span class="hljs-comment">// 24px이 추가되면? 방향마다 다시 한 줄씩…</span>
</code></pre><p>마크업에는 클래스를 넣었는데 CSS에는 규칙이 없어서, 화면 QA에서 &quot;여백이 적용되지 않는다&quot;는 이슈로 돌아옵니다.</p>`,4),o(d,{title:`회원가입 화면: 약관 영역 아래 여백이 적용되지 않음`,env:`전체 브라우저 · 공통 utils.scss에 간격 클래스 직접 작성`,expected:`약관 박스 아래에 24px 여백(.mb-24)이 생김`,actual:`여백 없이 다음 버튼이 바로 붙음, 같은 화면의 .mt-24는 정상`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`회원가입 화면을 엽니다.`),i(`li`,null,`약관 박스와 그 아래 버튼 사이 간격을 확인합니다.`),i(`li`,null,[s(`Elements 패널에서 약관 박스에 `),i(`code`,null,`mb-24`),s(` 클래스가 있는지 확인합니다.`)])],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`값은 `),i(`strong`,null,`맵`),s(`(`),i(`code`,null,`$spaces`),s(`)에 한 번만 적고, 클래스는 `),i(`strong`,null,[i(`code`,null,`@each`),s(` 반복문`)]),s(`으로 만드세요. 값을 추가할 때는 맵에 한 줄만 넣으면 됩니다.`)],-1)]]),_:1})]),i(`section`,H,[l[3]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[4]||=i(`p`,null,[s(`간격 단계와 방향을 골라 보세요. 반복문은 `),i(`strong`,null,`방향 수 × 단계 수`),s(`만큼 클래스를 만듭니다.`)],-1),o(z)]),i(`section`,te,[l[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`03`),s(` 가장 간단한 반복: 4단위 @for`)],-1),l[6]||=i(`p`,null,[s(`간격이 4px, 8px, 12px…처럼 `),i(`strong`,null,`일정한 단위로 늘어난다면`),s(` 맵 없이 `),i(`code`,null,`@for`),s(` 하나로 충분합니다. 1부터 5까지 반복하면서 4를 곱해 클래스 이름과 값을 만듭니다.`)],-1),o(p,{tabs:t(w)},null,8,[`tabs`]),l[7]||=u(`<ul><li><code>$i * 4</code>: 이름에는 숫자(<code>4</code>, <code>8</code>…)로, <code>$i * 4px</code>: 값에는 단위가 붙은 길이(<code>4px</code>, <code>8px</code>…)로 들어갑니다.</li><li>단위가 일정하지 않거나(<code>0, 8, 16, 40</code>), 방향이 여러 개면 아래처럼 <strong>맵 + <code>@each</code>가</strong> 더 읽기 쉽습니다.</li></ul>`,1)]),i(`section`,U,[l[15]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 왜 반복문을 쓸까요?`)],-1),i(`p`,null,[l[9]||=s(`SCSS는 `,-1),o(m,{term:`compile`},{default:r(()=>[...l[8]||=[s(`컴파일`,-1)]]),_:1}),l[10]||=s(`할 때 반복문을 풀어 일반 CSS로 바꿉니다. 브라우저는 반복문을 모르고, 완성된 `,-1),l[11]||=i(`code`,null,`.mt-8 { … }`,-1),l[12]||=s(` 규칙만 받습니다. 그래서 반복문은 `,-1),l[13]||=i(`strong`,null,`CSS를 대신 써 주는 도구`,-1),l[14]||=s(`이고, 결과 CSS의 양은 직접 쓴 것과 같습니다.`,-1)]),l[16]||=u(`<div class="table-wrap"><table><thead><tr><th>문법</th><th>반복 대상</th><th>예</th></tr></thead><tbody><tr><td><code>@each $item in $list</code></td><td>리스트의 값</td><td><code>(primary, danger)</code></td></tr><tr><td><code>@each $key, $value in $map</code></td><td>맵의 이름과 값</td><td><code>(8: 8px, 16: 16px)</code></td></tr><tr><td><code>@for $i from 1 through 3</code></td><td>1부터 3까지 숫자(3 포함)</td><td>말줄임 1~3줄</td></tr><tr><td><code>#{$변수}</code></td><td>선택자·속성 이름에 값 넣기(보간)</td><td><code>.mt-#{$step}</code>, <code>margin-#{$prop}</code></td></tr><tr><td><code>map.get($map, $key)</code></td><td>맵에서 값 하나 꺼내기</td><td><code>map.get($tone-colors, primary)</code></td></tr></tbody></table></div><p><code>@for</code>의 <code>through</code>는 끝 숫자를 포함하고, <code>to</code>는 포함하지 않습니다. <code>@for $i from 1 to 3</code>은 1, 2만 만듭니다.</p>`,2)]),i(`section`,W,[l[18]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),s(` 원인 찾기`)],-1),l[19]||=i(`p`,null,[s(`유틸 클래스가 듣지 않을 때는 `),i(`strong`,null,`결과 CSS에 그 클래스가 있는지`),s(`부터 확인합니다. 아래 순서로 보면 마크업 문제인지, SCSS 문제인지 바로 나뉩니다.`)],-1),o(h,null,{default:r(()=>[...l[17]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Styles 탭에서 규칙 확인`),s(` Elements 패널에서 요소를 선택하고 Styles 탭을 봅니다. `),i(`code`,null,`mb-24`),s(` 클래스가 있는데 `),i(`code`,null,`.mb-24`),s(` 규칙이 목록에 없다면 CSS가 만들어지지 않은 것입니다.`)]),i(`li`,null,[i(`strong`,null,`결과 CSS에서 선택자 검색`),s(` 빌드 결과 CSS(`),i(`code`,null,`dist/assets/*.css`),s(`)나 개발 서버의 Sources 패널에서 `),i(`code`,null,`.mb-24`),s(`를 검색합니다. 검색되지 않으면 원인은 SCSS 쪽입니다.`)]),i(`li`,null,[i(`strong`,null,`소스 맵으로 SCSS 위치 찾기`),s(` 소스 맵이 켜져 있으면(Vite 개발 서버는 `),i(`code`,null,`css.devSourcemap: true`),s(`) 같은 반복문에서 만든 `),i(`code`,null,`.mt-24`),s(` 규칙 옆 링크가 `),i(`code`,null,`.scss`),s(` 파일과 줄 번호를 보여 줍니다. 그 줄이 클래스를 만든 반복문입니다.`)]),i(`li`,null,[i(`strong`,null,`맵과 반복 범위 확인`),s(` 직접 쓴 규칙이라면 빠진 줄을 찾습니다. 반복문이라면 `),i(`code`,null,`$spaces`),s(`에 `),i(`code`,null,`24: 24px`),s(`가 있는지, `),i(`code`,null,`$sides`),s(`에 `),i(`code`,null,`b`),s(`가 있는지 봅니다. `),i(`code`,null,`@for`),s(`라면 `),i(`code`,null,`to`),s(`를 써서 마지막 숫자가 빠지지 않았는지도 확인합니다.`)])],-1)]]),_:1})]),i(`section`,G,[l[20]||=i(`h2`,null,[i(`span`,{class:`section-no`},`06`),s(` 해결 코드`)],-1),l[21]||=i(`p`,null,[s(`간격(맵 × 맵), 말줄임(`),i(`code`,null,`@for`),s(`), 상태 색(리스트 + `),i(`code`,null,`map.get`),s(`) 세 가지 패턴입니다. `),i(`strong`,null,`CSS 결과`),s(` 탭은 이 SCSS를 빌드할 때 실제로 컴파일한 출력입니다.`)],-1),o(p,{tabs:t(C)},null,8,[`tabs`]),l[22]||=i(`p`,null,[i(`code`,null,`x: (left, right)`),s(`처럼 값 자리에 리스트를 넣으면, 안쪽 `),i(`code`,null,`@each $prop in $props`),s(`가 속성을 두 줄 만듭니다. 값이 하나(`),i(`code`,null,`top`),s(`)여도 길이 1인 리스트로 취급되어 같은 반복문을 그대로 씁니다.`)],-1)]),l[25]||=u(`<section id="section-6"><h2><span class="section-no">07</span> 비슷한 상황</h2><p>반복문으로 만든 클래스가 기대와 다를 때 자주 만나는 경우입니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>선택자에 <code>#{}</code>를 빠뜨렸을 때</h3><p>선택자와 속성 이름에는 변수를 그대로 쓸 수 없습니다. <code>.mt-$step</code>처럼 쓰면 <code>expected selector.</code> 오류로 빌드가 멈춥니다. 반드시 보간으로 감쌉니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@each</span> <span class="hljs-variable">$step</span>, <span class="hljs-variable">$value</span> in <span class="hljs-variable">$spaces</span> {
  <span class="hljs-selector-class">.mt-</span>#{<span class="hljs-variable">$step</span>} { <span class="hljs-attribute">margin-top</span>: <span class="hljs-variable">$value</span>; }   <span class="hljs-comment">// .mt-$step 은 오류</span>
}
</code></pre><h3>맵에 없는 키를 <code>map.get</code>으로 꺼낼 때</h3><p>없는 키는 오류 없이 <code>null</code>을 돌려줍니다. 값이 <code>null</code>인 선언은 출력되지 않아서, 클래스가 <strong>조용히 사라집니다.</strong> 리스트와 맵의 이름이 같은지 확인하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-variable">$tone-colors</span>: (primary: <span class="hljs-number">#3162d4</span>, danger: <span class="hljs-number">#d43c3c</span>);

<span class="hljs-keyword">@each</span> <span class="hljs-variable">$tone</span> in (primary, danger, warning) {
  <span class="hljs-selector-class">.badge-</span>#{<span class="hljs-variable">$tone</span>} {
    <span class="hljs-attribute">color</span>: map.<span class="hljs-built_in">get</span>(<span class="hljs-variable">$tone-colors</span>, <span class="hljs-variable">$tone</span>); <span class="hljs-comment">// warning은 null → 규칙 없음</span>
  }
}
</code></pre><h3>값을 나눠서 만들 때</h3><p>반 단계 간격처럼 값을 나눌 때 <code>/</code>를 쓰면 폐기 예정 경고(<code>slash-div</code>)가 나옵니다. <code>sass:math</code> 모듈의 <code>math.div</code>를 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;sass:math&#39;</span>;

<span class="hljs-keyword">@for</span> <span class="hljs-variable">$i</span> from <span class="hljs-number">1</span> through <span class="hljs-number">3</span> {
  <span class="hljs-selector-class">.gap-half-</span>#{<span class="hljs-variable">$i</span>} {
    <span class="hljs-attribute">gap</span>: math.<span class="hljs-built_in">div</span>(<span class="hljs-variable">$i</span> * <span class="hljs-number">8px</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">// $i * 8px / 2 대신</span>
  }
}
</code></pre></section><section id="section-7"><h2><span class="section-no">08</span> 적용 시 주의점</h2><ul><li><strong>쓰는 값만 만듭니다.</strong> 위 예제에서 단계 9개와 방향 6개를 모두 고르면 클래스가 54개가 됩니다. 화면에서 쓰지 않는 클래스도 CSS 파일에 전부 들어가므로, 디자인 가이드에 있는 간격 단계만 맵에 넣으세요.</li><li><strong>이름 규칙은 팀 규칙을 따릅니다.</strong> <code>.mt-8</code>처럼 값을 이름에 넣을지, <code>.mt-sm</code>처럼 단계를 넣을지는 프로젝트의 클래스 네이밍 규칙을 먼저 확인합니다.</li><li><strong>유틸 클래스는 보조 수단입니다.</strong> 컴포넌트마다 반복되는 스타일은 컴포넌트 클래스로 묶고, 유틸 클래스는 화면별 미세 조정에 씁니다.</li><li><strong><code>map.get</code>은 <code>@use &#39;sass:map&#39;</code>이 필요합니다.</strong> 예전 전역 함수 <code>map-get()</code>은 지금 빌드하면 폐기 예정 경고(<code>global-builtin</code>)가 나오고 Dart Sass 3.0에서 제거됩니다. 새 코드는 모듈 함수(<code>map.get</code>)로 씁니다.</li></ul></section>`,2),i(`section`,K,[l[24]||=i(`h2`,null,[i(`span`,{class:`section-no`},`09`),s(` 짧은 실습`)],-1),o(g,null,{default:r(()=>[...l[23]||=[i(`p`,null,[s(`위 예제에서 단계 `),i(`code`,null,`0, 8, 16`),s(`과 방향 `),i(`code`,null,`t, b, x`),s(`를 고른 상태로 시작합니다.`)],-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`방향에 `),i(`code`,null,`y`),s(`를 추가하면 클래스가 3개 늘고, `),i(`code`,null,`.my-8`),s(`에 `),i(`code`,null,`margin-top`),s(`과 `),i(`code`,null,`margin-bottom`),s(`이 함께 생긴다.`)])])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`단계를 모두 고르고 방향을 모두 고르면 경고 문구가 나타난다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`해결 코드의 `),i(`code`,null,`$spaces`),s(`에 `),i(`code`,null,`24: 24px`),s(`를 추가하면 `),i(`code`,null,`.mt-24`),s(`, `),i(`code`,null,`.mb-24`),s(`, `),i(`code`,null,`.mx-24`),s(`가 생긴다고 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{fe as default,oe as duration,ne as group,q as id,se as keyProperty,Q as lead,ae as level,X as navTitle,J as order,$ as prerequisites,de as references,ue as related,ce as status,Z as summary,ie as tags,Y as title,re as topic,le as updated};