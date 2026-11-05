import{E as e,F as t,H as n,O as r,f as i,l as a,m as o,o as s,ot as c,p as l,r as u,s as d,u as f,w as p,z as m}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{t as h}from"./highlight-DI8AeOIq.js";var g=`.mt-0 {
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

.badge--primary {
  color: #3162d4;
}

.badge--danger {
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
  .badge--#{$tone} {
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
`,b=[0,4,8,12,16,20,24,32,40],x={t:[`top`],b:[`bottom`],l:[`left`],r:[`right`],x:[`left`,`right`],y:[`top`,`bottom`]};function ee(e,t){return e.flatMap(e=>t.map(t=>({selector:`.m${e}-${t}`,declarations:x[e].map(e=>`margin-${e}: ${t?`${t}px`:0};`)})))}var S=e=>e.map(({selector:e,declarations:t})=>`${e} {\n${t.map(e=>`  ${e}`).join(`
`)}\n}`).join(`

`),C=[{label:`SCSS`,language:`scss`,code:_},{label:`CSS 결과`,language:`css`,code:g}],w=[{label:`SCSS`,language:`scss`,code:y},{label:`CSS 결과`,language:`css`,code:v}],T={class:`demo-shell`},E={class:`demo-controls`},D={class:`demo-label`,id:`each-steps`},O={class:`sample-buttons`,role:`group`,"aria-labelledby":`each-steps`},k=[`aria-pressed`,`onClick`],A={class:`demo-label`,id:`each-sides`},j={class:`sample-buttons`,role:`group`,"aria-labelledby":`each-sides`},M=[`aria-pressed`,`onClick`],N={class:`demo-each`},P={class:`demo-each-formula`,role:`status`},F={key:0,class:`demo-each-warn`},I={class:`demo-each-classes`,"aria-label":`생성되는 클래스`},L={class:`demo-each-css`,tabindex:`0`,"aria-label":`생성되는 CSS`},R=[`innerHTML`],z={__name:`EachUtilityDemo`,setup(t){let r=m([0,8,16]),i=m([`t`,`b`,`x`]),o=(e,t)=>t.filter(t=>e.includes(t)),g=s(()=>ee(o(i.value,Object.keys(x)),o(r.value,b))),_=s(()=>S(g.value)),v=s(()=>_.value?_.value.split(`
`).length:0),y=s(()=>h(_.value||`/* 단계와 방향을 하나 이상 고르세요. */`,`css`));function C(e,t){let n=e.indexOf(t);n>-1?e.splice(n,1):e.push(t)}return(t,o)=>(p(),f(`div`,T,[d(`div`,E,[d(`span`,D,[o[0]||=l(`간격 단계 `,-1),d(`strong`,null,c(r.value.length)+`개`,1)]),d(`div`,O,[(p(!0),f(u,null,e(n(b),e=>(p(),f(`button`,{key:e,type:`button`,"aria-pressed":r.value.includes(e),onClick:t=>C(r.value,e)},c(e),9,k))),128))]),d(`span`,A,[o[1]||=l(`방향 `,-1),d(`strong`,null,c(i.value.length)+`개`,1)]),d(`div`,j,[(p(!0),f(u,null,e(n(x),(e,t)=>(p(),f(`button`,{key:t,type:`button`,"aria-pressed":i.value.includes(t),onClick:e=>C(i.value,t)},[l(c(t)+` `,1),d(`small`,null,c(e.join(`·`)),1)],8,M))),128))])]),d(`div`,N,[d(`p`,P,[l(` 방향 `+c(i.value.length)+` × 단계 `+c(r.value.length)+` = `,1),d(`strong`,null,`클래스 `+c(g.value.length)+`개`,1),l(`, CSS `+c(v.value)+`줄 `,1)]),g.value.length>n(40)?(p(),f(`p`,F,` 클래스가 `+c(n(40))+`개를 넘었습니다. 화면에서 쓰지 않는 클래스도 CSS 파일에 모두 들어갑니다. `,1)):a(``,!0),d(`ul`,I,[(p(!0),f(u,null,e(g.value,e=>(p(),f(`li`,{key:e.selector},c(e.selector),1))),128))]),d(`pre`,L,[d(`code`,{class:`hljs`,innerHTML:y.value},null,8,R)])])]))}},B={class:`doc-body`},V={id:`section-0`},te={id:`section-1`},H={id:`section-2`},U={id:`section-3`},W={id:`section-4`},G={id:`section-6`},K=`each-utility`,q=1,J=`반복문으로 유틸 클래스 만들기`,Y=`반복문으로 유틸 클래스`,X=`간격·말줄임·상태 색처럼 값만 다른 클래스를 @each·@for 반복문과 맵으로 만들고, 필요한 만큼만 생성하는 기준을 정리합니다.`,Z=`.mt-8, .mt-16, .mb-8…처럼 값만 다른 클래스를 하나씩 쓰고 있다면?
값은 맵에 모으고, 클래스는 반복문으로 만드세요.
`,Q=`문법`,ne=`반복문`,re=[`SCSS`,`@each`,`@for`,`맵`,`map.get`,`보간`,`유틸 클래스`,`간격`],ie=`기초`,ae=`약 6분`,oe=[`SCSS 변수`,`클래스 네이밍`],$=`@each $key, $value in $map`,se=`published`,ce=`2026-11-05`,le=[`use-forward`,`include-extend`],ue=[{title:`Sass — @each`,url:`https://sass-lang.com/documentation/at-rules/control/each/`},{title:`Sass — @for`,url:`https://sass-lang.com/documentation/at-rules/control/for/`},{title:`Sass — sass:map 모듈`,url:`https://sass-lang.com/documentation/modules/map/`}],de={__name:`each-utility`,setup(e,{expose:a}){return a({frontmatter:{id:`each-utility`,order:1,title:`반복문으로 유틸 클래스 만들기`,navTitle:`반복문으로 유틸 클래스`,summary:`간격·말줄임·상태 색처럼 값만 다른 클래스를 @each·@for 반복문과 맵으로 만들고, 필요한 만큼만 생성하는 기준을 정리합니다.`,lead:`.mt-8, .mt-16, .mb-8…처럼 값만 다른 클래스를 하나씩 쓰고 있다면?
값은 맵에 모으고, 클래스는 반복문으로 만드세요.
`,group:`문법`,topic:`반복문`,tags:[`SCSS`,`@each`,`@for`,`맵`,`map.get`,`보간`,`유틸 클래스`,`간격`],level:`기초`,duration:`약 6분`,prerequisites:[`SCSS 변수`,`클래스 네이밍`],keyProperty:`@each $key, $value in $map`,status:`published`,updated:`2026-11-05`,related:[`use-forward`,`include-extend`],references:[{title:`Sass — @each`,url:`https://sass-lang.com/documentation/at-rules/control/each/`},{title:`Sass — @for`,url:`https://sass-lang.com/documentation/at-rules/control/for/`},{title:`Sass — sass:map 모듈`,url:`https://sass-lang.com/documentation/modules/map/`}]}}),(e,a)=>{let s=r(`DocTakeaway`),c=r(`CodePanel`),u=r(`DocTerm`),m=r(`DocPractice`);return p(),f(`div`,B,[d(`section`,V,[a[1]||=i(`<h2><span class="section-no">01</span> 문제 상황</h2><p>간격 유틸 클래스를 손으로 작성하고 있습니다. 값이 하나 늘 때마다 <code>.mt-</code>, <code>.mb-</code>, <code>.mx-</code> 규칙을 모두 찾아 추가해야 하고, 한 곳만 빠뜨려도 클래스가 없는 상태로 배포됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.mt-8</span> { <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8px</span>; }
<span class="hljs-selector-class">.mt-16</span> { <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">16px</span>; }
<span class="hljs-selector-class">.mb-8</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">8px</span>; }
<span class="hljs-selector-class">.mb-16</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">16px</span>; }
<span class="hljs-comment">// 24px이 추가되면? 방향마다 다시 한 줄씩…</span>
</code></pre>`,3),o(s,null,{default:t(()=>[...a[0]||=[d(`p`,null,[l(`값은 `),d(`strong`,null,`맵`),l(`(`),d(`code`,null,`$spaces`),l(`)에 한 번만 적고, 클래스는 `),d(`strong`,null,[d(`code`,null,`@each`),l(` 반복문`)]),l(`으로 만드세요. 값을 추가할 때는 맵에 한 줄만 넣으면 됩니다.`)],-1)]]),_:1})]),d(`section`,te,[a[2]||=d(`h2`,null,[d(`span`,{class:`section-no`},`02`),l(` 직접 비교하기`),d(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),a[3]||=d(`p`,null,[l(`간격 단계와 방향을 골라 보세요. 반복문은 `),d(`strong`,null,`방향 수 × 단계 수`),l(`만큼 클래스를 만듭니다.`)],-1),o(z)]),d(`section`,H,[a[4]||=d(`h2`,null,[d(`span`,{class:`section-no`},`03`),l(` 가장 간단한 반복: 4단위 @for`)],-1),a[5]||=d(`p`,null,[l(`간격이 4px, 8px, 12px…처럼 `),d(`strong`,null,`일정한 단위로 늘어난다면`),l(` 맵 없이 `),d(`code`,null,`@for`),l(` 하나로 충분합니다. 1부터 5까지 반복하면서 4를 곱해 클래스 이름과 값을 만듭니다.`)],-1),o(c,{tabs:n(w)},null,8,[`tabs`]),a[6]||=i(`<ul><li><code>$i * 4</code>: 이름에는 숫자(<code>4</code>, <code>8</code>…)로, <code>$i * 4px</code>: 값에는 단위가 붙은 길이(<code>4px</code>, <code>8px</code>…)로 들어갑니다.</li><li>단위가 일정하지 않거나(<code>0, 8, 16, 40</code>), 방향이 여러 개면 아래처럼 <strong>맵 + <code>@each</code>가</strong> 더 읽기 쉽습니다.</li></ul>`,1)]),d(`section`,U,[a[14]||=d(`h2`,null,[d(`span`,{class:`section-no`},`04`),l(` 왜 반복문을 쓸까요?`)],-1),d(`p`,null,[a[8]||=l(`SCSS는 `,-1),o(u,{term:`compile`},{default:t(()=>[...a[7]||=[l(`컴파일`,-1)]]),_:1}),a[9]||=l(`할 때 반복문을 풀어 일반 CSS로 바꿉니다. 브라우저는 반복문을 모르고, 완성된 `,-1),a[10]||=d(`code`,null,`.mt-8 { … }`,-1),a[11]||=l(` 규칙만 받습니다. 그래서 반복문은 `,-1),a[12]||=d(`strong`,null,`CSS를 대신 써 주는 도구`,-1),a[13]||=l(`이고, 결과 CSS의 양은 직접 쓴 것과 같습니다.`,-1)]),a[15]||=i(`<div class="table-wrap"><table><thead><tr><th>문법</th><th>반복 대상</th><th>예</th></tr></thead><tbody><tr><td><code>@each $item in $list</code></td><td>리스트의 값</td><td><code>(primary, danger)</code></td></tr><tr><td><code>@each $key, $value in $map</code></td><td>맵의 이름과 값</td><td><code>(8: 8px, 16: 16px)</code></td></tr><tr><td><code>@for $i from 1 through 3</code></td><td>1부터 3까지 숫자(3 포함)</td><td>말줄임 1~3줄</td></tr><tr><td><code>#{$변수}</code></td><td>선택자·속성 이름에 값 넣기(보간)</td><td><code>.mt-#{$step}</code>, <code>margin-#{$prop}</code></td></tr><tr><td><code>map.get($map, $key)</code></td><td>맵에서 값 하나 꺼내기</td><td><code>map.get($tone-colors, primary)</code></td></tr></tbody></table></div><p><code>@for</code>의 <code>through</code>는 끝 숫자를 포함하고, <code>to</code>는 포함하지 않습니다. <code>@for $i from 1 to 3</code>은 1, 2만 만듭니다.</p>`,2)]),d(`section`,W,[a[16]||=d(`h2`,null,[d(`span`,{class:`section-no`},`05`),l(` 해결 코드`)],-1),a[17]||=d(`p`,null,[l(`간격(맵 × 맵), 말줄임(`),d(`code`,null,`@for`),l(`), 상태 색(리스트 + `),d(`code`,null,`map.get`),l(`) 세 가지 패턴입니다. `),d(`strong`,null,`CSS 결과`),l(` 탭은 이 SCSS를 빌드할 때 실제로 컴파일한 출력입니다.`)],-1),o(c,{tabs:n(C)},null,8,[`tabs`]),a[18]||=d(`p`,null,[d(`code`,null,`x: (left, right)`),l(`처럼 값 자리에 리스트를 넣으면, 안쪽 `),d(`code`,null,`@each $prop in $props`),l(`가 속성을 두 줄 만듭니다. 값이 하나(`),d(`code`,null,`top`),l(`)여도 길이 1인 리스트로 취급되어 같은 반복문을 그대로 씁니다.`)],-1)]),a[21]||=i(`<section id="section-5"><h2><span class="section-no">06</span> 적용 시 주의점</h2><ul><li><strong>쓰는 값만 만듭니다.</strong> 위 예제에서 단계 9개와 방향 6개를 모두 고르면 클래스가 54개가 됩니다. 화면에서 쓰지 않는 클래스도 CSS 파일에 전부 들어가므로, 디자인 가이드에 있는 간격 단계만 맵에 넣으세요.</li><li><strong>이름 규칙은 팀 규칙을 따릅니다.</strong> <code>.mt-8</code>처럼 값을 이름에 넣을지, <code>.mt-sm</code>처럼 단계를 넣을지는 프로젝트의 클래스 네이밍 규칙을 먼저 확인합니다.</li><li><strong>유틸 클래스는 보조 수단입니다.</strong> 컴포넌트마다 반복되는 스타일은 컴포넌트 클래스로 묶고, 유틸 클래스는 화면별 미세 조정에 씁니다.</li><li><strong><code>map.get</code>은 <code>@use &#39;sass:map&#39;</code>이 필요합니다.</strong> 예전 전역 함수 <code>map-get()</code>은 지금 빌드하면 폐기 예정 경고(<code>global-builtin</code>)가 나오고 Dart Sass 3.0에서 제거됩니다. 새 코드는 모듈 함수(<code>map.get</code>)로 씁니다.</li></ul></section>`,1),d(`section`,G,[a[20]||=d(`h2`,null,[d(`span`,{class:`section-no`},`07`),l(` 짧은 실습`)],-1),o(m,null,{default:t(()=>[...a[19]||=[d(`p`,null,[l(`위 예제에서 단계 `),d(`code`,null,`0, 8, 16`),l(`과 방향 `),d(`code`,null,`t, b, x`),l(`를 고른 상태로 시작합니다.`)],-1),d(`ul`,{class:`checklist`},[d(`li`,null,[d(`label`,null,[d(`input`,{type:`checkbox`}),d(`span`,{class:`checklist-text`},[l(`방향에 `),d(`code`,null,`y`),l(`를 추가하면 클래스가 3개 늘고, `),d(`code`,null,`.my-8`),l(`에 `),d(`code`,null,`margin-top`),l(`과 `),d(`code`,null,`margin-bottom`),l(`이 함께 생긴다.`)])])]),d(`li`,null,[d(`label`,null,[d(`input`,{type:`checkbox`}),d(`span`,{class:`checklist-text`},`단계를 모두 고르고 방향을 모두 고르면 경고 문구가 나타난다.`)])]),d(`li`,null,[d(`label`,null,[d(`input`,{type:`checkbox`}),d(`span`,{class:`checklist-text`},[l(`해결 코드의 `),d(`code`,null,`$spaces`),l(`에 `),d(`code`,null,`24: 24px`),l(`를 추가하면 `),d(`code`,null,`.mt-24`),l(`, `),d(`code`,null,`.mb-24`),l(`, `),d(`code`,null,`.mx-24`),l(`가 생긴다고 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{de as default,ae as duration,Q as group,K as id,$ as keyProperty,Z as lead,ie as level,Y as navTitle,q as order,oe as prerequisites,ue as references,le as related,se as status,X as summary,re as tags,J as title,ne as topic,ce as updated};