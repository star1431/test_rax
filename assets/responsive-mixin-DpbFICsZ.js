import{D as e,G as t,H as n,R as r,c as i,d as a,ft as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,ut as g,z as _}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as v}from"./index-Dxflp_jg.js";import{t as y}from"./DemoCompare-Bd6h8ThJ.js";var b=`.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 1150px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 760.02px) {
  .card-list {
    gap: 20px;
  }
}

.card {
  display: flex;
  flex-direction: column;
}
@media (max-width: 760px) {
  .card {
    flex-direction: row;
  }
}`,x=`// 반응형 미디어 쿼리를 mixin으로 관리하기 (실무 노트 SCSS 04)
// 경계 숫자는 bp/_breakpoints.scss의 맵에만 있고, 각 파일은 구간 이름으로 씁니다.
@use 'bp/breakpoints' as bp;

// 카드 목록: PC 3열 → 태블릿(1150px 이하) 2열 → 모바일(760px 이하) 1열
// 좁은 구간을 뒤에 써야 겹치는 너비에서 좁은 화면 값이 우선합니다.
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @include bp.mq(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp.mq(mobile) {
    grid-template-columns: 1fr;
  }

  // 모바일보다 넓을 때만: 경계가 mq(mobile)과 정확히 맞물립니다.
  @include bp.mq(mobile, up) {
    gap: 20px;
  }
}

// 카드: 모바일에서만 이미지와 글을 가로로 놓습니다. 목록과 같은 이름(mobile)을 씁니다.
.card {
  display: flex;
  flex-direction: column;

  @include bp.mq(mobile) {
    flex-direction: row;
  }
}
`,S=`// 반응형 구간: 경계 숫자는 이 맵에만 적습니다.
// 값은 '이 너비 이하가 이 구간'이라는 뜻입니다. (mobile: 760px → 760px 이하가 모바일)
@use 'sass:map';

$breakpoints: (
  mobile: 760px,
  tablet: 1150px,
) !default;

// @include mq(mobile) { ... }        → 760px 이하
// @include mq(mobile, up) { ... }    → 760px 초과 (760.02px 이상)
@mixin mq($name, $dir: down) {
  $bp: map.get($breakpoints, $name);

  // 맵에 없는 이름은 null이 됩니다. 조용히 넘어가지 않도록 빌드를 멈춥니다.
  @if not $bp {
    @error 'mq(): \`#{$name}\`은(는) 없는 구간입니다. 사용할 수 있는 이름: #{map.keys($breakpoints)}';
  }

  @if $dir == down {
    @media (max-width: $bp) {
      @content;
    }
  } @else if $dir == up {
    // 소수점 너비(화면 배율 등)에서도 빈틈이 없도록 0.02px만 더합니다.
    @media (min-width: $bp + 0.02px) {
      @content;
    }
  } @else {
    @error 'mq(): 방향은 down 또는 up만 쓸 수 있습니다. 받은 값: #{$dir}';
  }
}
`,C={min:700,max:820},ee=[760,761,767,768,769],w=[{file:`_card-list.scss`,query:`(max-width: 760px)`,label:`1열`,match:e=>e<=760,set:{columns:1}},{file:`_card.scss`,query:`(max-width: 768px)`,label:`가로형 카드`,match:e=>e<=768,set:{layout:`row`}},{file:`_card-list.scss`,query:`(min-width: 768px) and (max-width: 1150px)`,label:`2열`,match:e=>e>=768&&e<=1150,set:{columns:2}}],T=[{file:`mq(tablet)`,query:`(max-width: 1150px)`,label:`2열`,match:e=>e<=1150,set:{columns:2}},{file:`mq(mobile)`,query:`(max-width: 760px)`,label:`1열`,match:e=>e<=760,set:{columns:1}},{file:`mq(mobile)`,query:`(max-width: 760px)`,label:`가로형 카드`,match:e=>e<=760,set:{layout:`row`}}],E={columns:3,layout:`column`};function D(e,t){let n=e.map(e=>e.match(t)),r=e.reduce((e,t,r)=>n[r]?{...e,...t.set}:e,{...E}),i=e.map((t,r)=>{if(!n[r])return`off`;let i=Object.keys(t.set),a=e.slice(r+1).filter((e,t)=>n[r+1+t]);return i.every(e=>a.some(t=>e in t.set))?`overridden`:`on`}),a=e.filter((e,t)=>n[t]&&`columns`in e.set).length;return{...r,states:i,columnRules:a,broken:r.layout===`row`&&r.columns>1}}var O=[`봄 신상품`,`주간 특가`,`회원 혜택`,`이벤트 안내`],k=[{label:`responsive-mixin.scss`,language:`scss`,code:x},{label:`bp/_breakpoints.scss`,language:`scss`,code:S},{label:`CSS 결과`,language:`css`,code:b}],A={for:`demo-bp-width`},j=[`min`,`max`],M={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-bp-preset`},N=[`aria-checked`,`onClick`],P={class:`demo-screen-bar`},F={class:`demo-bp-title`},I={class:`demo-bp-rules`,"aria-label":`적용된 규칙`},L={class:`demo-bp-rule-meta`},R=.4,z={__name:`ResponsiveMixinDemo`,setup(s){let l={on:`적용`,off:`미적용`,overridden:`적용 → 뒤 규칙이 덮음`},f=n(765),b=h(()=>D(w,f.value)),x=h(()=>D(T,f.value)),S=e=>e?T:w,E=e=>e?x.value:b.value;function k({columns:e,layout:t,columnRules:n,broken:r}){let i=`${e}열 · ${t===`row`?`가로형`:`세로형`} 카드`;return r?`${i} — 깨짐: ${n===0?`열 규칙이 하나도 맞지 않아 기본 3열로 돌아감`:`2열 규칙과 가로형 카드 규칙이 함께 적용됨`}`:`${i} — 정상`}return(n,s)=>(e(),d(y,{problem:{code:`760 · 768 직접 입력`,note:`761~767px에서는 열 규칙이 하나도 맞지 않고, 768px에서는 두 규칙이 겹칩니다.`},solved:{code:`mq(mobile) · mq(tablet)`,note:`모든 규칙이 같은 경계(760px)를 써서 빈틈도 겹침도 없습니다.`}},{controls:r(()=>[i(`label`,A,[s[1]||=c(`화면 너비 `,-1),i(`strong`,null,p(f.value)+`px`,1)]),_(i(`input`,{id:`demo-bp-width`,"onUpdate:modelValue":s[0]||=e=>f.value=e,type:`range`,min:t(C).min,max:t(C).max,step:`1`},null,8,j),[[v,f.value,void 0,{number:!0}]]),s[2]||=i(`span`,{id:`demo-bp-preset`,class:`demo-label`},`경계값 바로 가기`,-1),i(`div`,M,[(e(!0),a(m,null,u(t(ee),t=>(e(),a(`button`,{key:t,type:`button`,role:`radio`,"aria-checked":f.value===t,onClick:e=>f.value=t},p(t)+`px `,9,N))),128))])]),default:r(({solved:n})=>[i(`div`,{class:`demo-bp-screen`,style:o({width:Math.round(f.value*R)+`px`})},[i(`div`,P,`가상 화면 `+p(f.value)+`px`,1),i(`ul`,{class:g([`demo-bp-list`,`demo-bp-list-col${E(n).columns}`]),"aria-label":`카드 목록`},[(e(!0),a(m,null,u(t(O),t=>(e(),a(`li`,{key:t,class:g([`demo-bp-card`,{"demo-bp-card-row":E(n).layout===`row`}])},[s[3]||=i(`span`,{class:`demo-bp-thumb`,"aria-hidden":`true`},null,-1),i(`span`,F,p(t),1)],2))),128))],2)],4),i(`p`,{class:g([`demo-bp-result`,{"is-broken":E(n).broken}]),role:`status`},p(k(E(n))),3),i(`ol`,I,[(e(!0),a(m,null,u(S(n),(t,r)=>(e(),a(`li`,{key:r,class:g([`demo-bp-rule`,`is-${E(n).states[r]}`])},[i(`code`,null,`@media `+p(t.query),1),i(`span`,L,p(t.file)+` → `+p(t.label),1),i(`b`,null,p(l[E(n).states[r]]),1)],2))),128))])]),caption:r(()=>[...s[4]||=[c(` 실제 미디어 쿼리는 브라우저 창 너비로 판정하므로, 이 예제는 슬라이더 값으로 판정을 흉내 낸 `,-1),i(`strong`,null,`시뮬레이션`,-1),c(`입니다. 가상 화면은 40%로 줄여 그렸고, 규칙은 위에서부터 작성 순서대로 적용됩니다. `,-1)]]),_:1}))}},B={class:`doc-body`},V={id:`section-0`},H={id:`section-1`},te={id:`section-2`},U={id:`section-3`},W={id:`section-4`},G={id:`section-7`},K=`responsive-mixin`,q=4,J=`반응형 미디어 쿼리를 mixin으로 관리하기`,Y=`반응형 mixin 만들기`,X=`파일마다 다르게 적힌 미디어 쿼리 숫자(760·767·768px)가 만드는 빈틈과 겹침을, 브레이크포인트 맵 하나와 mq() mixin으로 정리합니다.`,Z=`특정 너비에서만 레이아웃이 깨진다면?
미디어 쿼리 숫자를 파일마다 쓰지 말고, 맵 하나와 mixin으로 모으세요.
`,Q=`문법`,ne=`mixin`,re=[`SCSS`,`@mixin`,`@content`,`미디어 쿼리`,`브레이크포인트`,`map.get`,`@error`],ie=`중급`,ae=`약 11분`,oe=[`미디어 쿼리`,`믹스인`,`sass:map`],$=`@include mq(mobile)`,se=`published`,ce=`2026-11-13`,le=[`each-utility`,`include-extend`,`use-forward`],ue=[{title:`Sass — @mixin과 @include`,url:`https://sass-lang.com/documentation/at-rules/mixin/`},{title:`Sass — @error`,url:`https://sass-lang.com/documentation/at-rules/error/`},{title:`Sass — sass:map 모듈`,url:`https://sass-lang.com/documentation/modules/map/`},{title:`Media Queries Level 4 — Range Context`,url:`https://www.w3.org/TR/mediaqueries-4/#mq-range-context`},{title:`MDN — Using media queries`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries`}],de={__name:`responsive-mixin`,setup(n,{expose:o}){return o({frontmatter:{id:`responsive-mixin`,order:4,title:`반응형 미디어 쿼리를 mixin으로 관리하기`,navTitle:`반응형 mixin 만들기`,summary:`파일마다 다르게 적힌 미디어 쿼리 숫자(760·767·768px)가 만드는 빈틈과 겹침을, 브레이크포인트 맵 하나와 mq() mixin으로 정리합니다.`,lead:`특정 너비에서만 레이아웃이 깨진다면?
미디어 쿼리 숫자를 파일마다 쓰지 말고, 맵 하나와 mixin으로 모으세요.
`,group:`문법`,topic:`mixin`,tags:[`SCSS`,`@mixin`,`@content`,`미디어 쿼리`,`브레이크포인트`,`map.get`,`@error`],level:`중급`,duration:`약 11분`,prerequisites:[`미디어 쿼리`,`믹스인`,`sass:map`],keyProperty:`@include mq(mobile)`,status:`published`,updated:`2026-11-13`,related:[`each-utility`,`include-extend`,`use-forward`],references:[{title:`Sass — @mixin과 @include`,url:`https://sass-lang.com/documentation/at-rules/mixin/`},{title:`Sass — @error`,url:`https://sass-lang.com/documentation/at-rules/error/`},{title:`Sass — sass:map 모듈`,url:`https://sass-lang.com/documentation/modules/map/`},{title:`Media Queries Level 4 — Range Context`,url:`https://www.w3.org/TR/mediaqueries-4/#mq-range-context`},{title:`MDN — Using media queries`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries`}]}}),(n,o)=>{let u=l(`DocTerm`),d=l(`DocIssue`),p=l(`DocTakeaway`),m=l(`DocSteps`),h=l(`DocInspect`),g=l(`CodePanel`),_=l(`DocPractice`);return e(),a(`div`,B,[i(`section`,V,[o[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),i(`p`,null,[o[1]||=c(`카드 목록은 PC 3열, 태블릿 2열, 모바일 1열이고, 모바일에서는 카드가 가로형(이미지 왼쪽, 제목 오른쪽)으로 바뀝니다. 목록과 카드를 다른 사람이 작업하면서 `,-1),s(u,{term:`media-query`},{default:r(()=>[...o[0]||=[c(`미디어 쿼리`,-1)]]),_:1}),o[2]||=c(` 숫자를 각자 적었습니다.`,-1)]),o[6]||=f(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// _card-list.scss</span>
<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">760px</span>) {
  <span class="hljs-selector-class">.card-list</span> { <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-number">1</span>fr; }
}
<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">768px</span>) <span class="hljs-keyword">and</span> (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">1150px</span>) {
  <span class="hljs-selector-class">.card-list</span> { <span class="hljs-attribute">grid-template-columns</span>: <span class="hljs-built_in">repeat</span>(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>fr); }
}

<span class="hljs-comment">// _card.scss</span>
<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">768px</span>) {
  <span class="hljs-selector-class">.card</span> { <span class="hljs-attribute">flex-direction</span>: row; }
}
</code></pre><p>PC와 휴대폰에서는 모두 정상이라 지나치기 쉽고, 특정 태블릿이나 브라우저 창을 애매한 너비로 줄였을 때만 깨져 QA에서 이런 형태로 돌아옵니다.</p>`,2),s(d,{title:`카드 목록: 태블릿 세로(768px)에서 카드 제목이 옆 카드로 넘침`,env:`iPad 세로(768px) · PC 브라우저 창 761~767px`,expected:`760px 초과는 2열 세로형 카드, 760px 이하는 1열 가로형 카드`,actual:`768px에서 2열에 가로형 카드가 들어가 제목이 넘침, 761~767px에서는 3열 가로형 카드로 바뀜`},{default:r(()=>[...o[3]||=[i(`ol`,null,[i(`li`,null,`개발자 도구의 Device toolbar에서 너비를 768px로 맞춥니다.`),i(`li`,null,`카드 목록의 열 수와 카드 형태를 확인합니다.`),i(`li`,null,`너비를 765px, 760px로 바꿔 가며 다시 확인합니다.`)],-1)]]),_:1}),s(p,null,{default:r(()=>[...o[4]||=[i(`p`,null,[c(`경계 숫자는 `),i(`strong`,null,`맵 하나`),c(`(`),i(`code`,null,`$breakpoints`),c(`)에만 적고, 미디어 쿼리는 `),i(`strong`,null,[i(`code`,null,`mq()`),c(` mixin으로`)]),c(` 구간 이름을 불러 쓰세요. 모든 파일이 같은 경계를 쓰게 됩니다.`)],-1)]]),_:1})]),i(`section`,H,[o[7]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),o[8]||=i(`p`,null,`경계값 버튼이나 슬라이더로 화면 너비를 바꾸면서, 양쪽에서 어떤 규칙이 적용되는지 확인해 보세요.`,-1),s(z)]),i(`section`,te,[o[15]||=f(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>max-width: 760px</code>는 <strong>760px 이하</strong>, <code>min-width: 768px</code>는 <strong>768px 이상</strong>에서 맞습니다. 두 숫자 사이인 761~767px에서는 열을 정하는 규칙이 하나도 맞지 않아 미디어 쿼리 밖의 기본값(3열)이 그대로 쓰입니다. 반대로 카드 규칙은 <code>max-width: 768px</code>이고 목록의 태블릿 규칙은 <code>min-width: 768px</code>이라, <strong>768px 딱 한 너비</strong>에서는 두 규칙이 함께 적용됩니다.</p><div class="table-wrap"><table><thead><tr><th>화면 너비</th><th>열 규칙</th><th>카드 규칙</th><th>결과</th></tr></thead><tbody><tr><td>760px 이하</td><td>1열</td><td>가로형</td><td>정상</td></tr><tr><td>761~767px</td><td>없음(기본 3열)</td><td>가로형</td><td>3열 가로형 — 깨짐</td></tr><tr><td>768px</td><td>2열</td><td>가로형</td><td>2열 가로형 — 깨짐</td></tr><tr><td>769~1150px</td><td>2열</td><td>없음(세로형)</td><td>정상</td></tr><tr><td>1151px 이상</td><td>없음(기본 3열)</td><td>없음(세로형)</td><td>정상</td></tr></tbody></table></div>`,3),i(`p`,null,[o[10]||=c(`숫자를 직접 쓰는 한 이런 차이는 계속 생깁니다. 디자인 가이드의 `,-1),s(u,{term:`breakpoint`},{default:r(()=>[...o[9]||=[c(`브레이크포인트`,-1)]]),_:1}),o[11]||=c(`를 바꿀 때도 `,-1),o[12]||=i(`code`,null,`@media`,-1),o[13]||=c(`가 있는 파일을 모두 찾아 고쳐야 하고, 하나만 빠뜨려도 같은 문제가 다시 생깁니다. mixin을 쓰면 숫자는 맵에만 있고, 각 파일은 이름만 씁니다.`,-1)]),s(m,null,{default:r(()=>[...o[14]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`구간 이름으로 호출`),c(),i(`code`,null,`@include mq(mobile)`)]),i(`li`,null,[i(`strong`,null,`맵에서 숫자 꺼내기`),c(),i(`code`,null,`map.get($breakpoints, mobile)`),c(` → `),i(`code`,null,`760px`)]),i(`li`,null,[i(`strong`,null,`@content를 @media로 감싸기`),c(),i(`code`,null,`@media (max-width: 760px) { … }`)])],-1)]]),_:1}),o[16]||=i(`p`,null,[i(`code`,null,`mq(mobile, up)`),c(`처럼 반대 방향이 필요할 때도 숫자를 따로 적지 않습니다. mixin이 같은 760px에 `),i(`code`,null,`0.02px`),c(`만 더해 `),i(`code`,null,`min-width: 760.02px`),c(`를 만듭니다. `),i(`code`,null,`min-width: 761px`),c(`로 쓰면 브라우저 확대 등으로 화면 너비가 760.5px처럼 소수가 될 때 다시 빈틈이 생기기 때문입니다.`)],-1)]),i(`section`,U,[o[18]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),o[19]||=i(`p`,null,[c(`특정 너비에서만 깨질 때는 `),i(`strong`,null,`경계 숫자 근처의 너비를 1px 단위로`),c(` 확인합니다. 아래 순서로 보면 어떤 숫자가 어긋났는지 바로 드러납니다.`)],-1),s(h,null,{default:r(()=>[...o[17]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Device toolbar로 경계값 입력`),c(` Device toolbar(Ctrl+Shift+M, Mac은 Cmd+Shift+M)를 켜고 Dimensions를 Responsive로 둡니다. 너비 칸에 `),i(`code`,null,`760`),c(`, `),i(`code`,null,`761`),c(`, `),i(`code`,null,`767`),c(`, `),i(`code`,null,`768`),c(`, `),i(`code`,null,`769`),c(`를 차례로 입력하며 레이아웃이 바뀌는 너비를 적어 둡니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 @media 조건 확인`),c(` Elements 패널에서 `),i(`code`,null,`.card-list`),c(`와 `),i(`code`,null,`.card`),c(`를 각각 선택합니다. Styles 탭에는 지금 너비에서 맞는 규칙만 나오고, 미디어 쿼리 안의 규칙은 위에 `),i(`code`,null,`@media (max-width: 768px)`),c(`처럼 조건이 표시됩니다. 765px에서 `),i(`code`,null,`.card-list`),c(`에 `),i(`code`,null,`@media`),c(` 규칙이 하나도 없다면 빈틈 구간입니다. 다른 규칙에 덮인 선언은 취소선으로 표시됩니다.`)]),i(`li`,null,[i(`strong`,null,[c(`프로젝트 전체에서 `),i(`code`,null,`@media`),c(` 검색`)]),c(` 에디터의 전체 검색에서 `),i(`code`,null,`@media`),c(`를 검색해 나온 숫자를 목록으로 만듭니다. `),i(`code`,null,`760px`),c(`, `),i(`code`,null,`767px`),c(`, `),i(`code`,null,`768px`),c(`이 섞여 있거나, 같은 구간을 `),i(`code`,null,`max-width`),c(`와 `),i(`code`,null,`min-width`),c(`로 각각 쓴 파일이 있으면 원인입니다.`)]),i(`li`,null,[i(`strong`,null,`소스 맵으로 SCSS 위치 확인`),c(` 소스 맵이 켜져 있으면(Vite 개발 서버는 `),i(`code`,null,`css.devSourcemap: true`),c(`) Styles 탭 규칙 옆 링크가 `),i(`code`,null,`.scss`),c(` 파일과 줄 번호를 보여 줍니다. 그 줄의 숫자를 `),i(`code`,null,`mq()`),c(` 호출로 바꿉니다.`)])],-1)]]),_:1})]),i(`section`,W,[o[20]||=f(`<h2><span class="section-no">05</span> 해결 코드</h2><p>브레이크포인트 맵과 <code>mq()</code> mixin을 <code>bp</code> 폴더에 두고, 카드 목록과 카드가 같은 이름(<code>mobile</code>, <code>tablet</code>)을 씁니다. <strong>CSS 결과</strong> 탭은 이 SCSS를 빌드할 때 실제로 컴파일한 출력입니다.</p>`,2),s(g,{tabs:t(k)},null,8,[`tabs`]),o[21]||=f(`<ul><li><strong><code>$dir: down</code>이 기본값입니다.</strong> <code>mq(mobile)</code>은 <code>max-width: 760px</code>, <code>mq(mobile, up)</code>은 <code>min-width: 760.02px</code>가 되어 두 구간이 빈틈 없이 맞물립니다.</li><li><strong><code>!default</code></strong>: 맵을 <code>@use &#39;bp/breakpoints&#39; with ($breakpoints: (…))</code>로 프로젝트에 맞게 바꿀 수 있습니다. 자세한 내용은 ‘@use·@forward로 모듈 나누기’ 문서를 참고하세요.</li><li><strong><code>@content</code></strong>: <code>@include</code> 뒤 블록이 <code>@media</code> 안에 들어갑니다. 블록을 감싸는 mixin은 ‘include와 extend 선택 기준’ 문서에서 다뤘습니다.</li></ul>`,1)]),o[24]||=i(`section`,{id:`section-5`},[i(`h2`,null,[i(`span`,{class:`section-no`},`06`),c(` 비슷한 상황`)]),i(`p`,null,`미디어 쿼리를 mixin으로 모은 뒤 자주 만나는 경우입니다. 증상이 비슷하다면 아래를 함께 확인하세요.`),i(`h3`,null,`구간 이름을 잘못 썼을 때`),i(`p`,null,[c(`맵에 없는 이름은 `),i(`code`,null,`map.get`),c(`이 `),i(`code`,null,`null`),c(`을 돌려주고, 그대로 두면 엉뚱한 미디어 쿼리가 만들어집니다. 해결 코드의 mixin은 `),i(`code`,null,`@error`),c(`로 빌드를 멈추고 쓸 수 있는 이름을 알려 줍니다.`)]),i(`pre`,null,[i(`code`,{class:`language-terminal`},[i(`figure`,{"v-pre":``,class:`doc-terminal`},[i(`figcaption`,{class:`doc-terminal-bar`},[i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),i(`span`,{"aria-hidden":`true`}),c(`터미널`)]),i(`pre`,{tabindex:`0`},[i(`code`,{"v-pre":``},[i(`span`,{class:`terminal-line terminal-line-cmd`},[i(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),c(`npx sass styles/card.scss`)]),c(`
`),i(`span`,{class:`terminal-line terminal-line-red`},'Error: "mq(): `moblie`은(는) 없는 구간입니다. 사용할 수 있는 이름: mobile, tablet"'),c(`
`),i(`span`,{class:`terminal-line`},`  ╷`),c(`
`),i(`span`,{class:`terminal-line`},`4 │   @include bp.mq(moblie) {`),c(`
`),i(`span`,{class:`terminal-line`},`  │   ^^^^^^^^^^^^^^^^^^^^^^`),c(`
`),i(`span`,{class:`terminal-line`},`  ╵`),c(`
`),i(`span`,{class:`terminal-line`},`  styles/card.scss 4:3  root stylesheet`)])])])])]),i(`h3`,null,`화면이 아니라 들어갈 자리의 너비가 기준일 때`),i(`p`,null,[c(`같은 카드가 넓은 본문과 좁은 사이드바에 모두 들어간다면, 화면 너비로는 카드 형태를 정할 수 없습니다. 카드를 감싼 영역 너비로 판단하는 컨테이너 쿼리(`),i(`code`,null,`@container`),c(`)가 더 맞습니다. 이때는 브레이크포인트 맵과 별개로 관리합니다.`)]),i(`pre`,{class:`doc-code`,tabindex:`0`},[i(`code`,{class:`hljs`},[i(`span`,{class:`hljs-selector-class`},`.card-area`),c(` {
  `),i(`span`,{class:`hljs-attribute`},`container-type`),c(`: inline-size;
}

`),i(`span`,{class:`hljs-keyword`},`@container`),c(` (`),i(`span`,{class:`hljs-attribute`},`max-width`),c(`: `),i(`span`,{class:`hljs-number`},`400px`),c(`) {
  `),i(`span`,{class:`hljs-selector-class`},`.card`),c(` { `),i(`span`,{class:`hljs-attribute`},`flex-direction`),c(`: row; }
}
`)])]),i(`h3`,null,`마우스가 있는 기기에서만 hover 효과를 줄 때`),i(`p`,null,[c(`화면 너비로 터치 기기를 구분하면 큰 태블릿이나 터치 노트북에서 어긋납니다. hover 가능 여부는 너비가 아니라 `),i(`code`,null,`hover`),c(` 미디어 특성으로 확인합니다.`)]),i(`pre`,{class:`doc-code`,tabindex:`0`},[i(`code`,{class:`hljs`},[i(`span`,{class:`hljs-selector-class`},`.card`),c(` {
  `),i(`span`,{class:`hljs-keyword`},`@media`),c(` (`),i(`span`,{class:`hljs-attribute`},`hover`),c(`: `),i(`span`,{class:`hljs-attribute`},`hover`),c(`) {
    &`),i(`span`,{class:`hljs-selector-pseudo`},`:hover`),c(` { `),i(`span`,{class:`hljs-attribute`},`box-shadow`),c(`: `),i(`span`,{class:`hljs-number`},`0`),c(),i(`span`,{class:`hljs-number`},`4px`),c(),i(`span`,{class:`hljs-number`},`12px`),c(),i(`span`,{class:`hljs-built_in`},`rgb`),c(`(`),i(`span`,{class:`hljs-number`},`0`),c(),i(`span`,{class:`hljs-number`},`0`),c(),i(`span`,{class:`hljs-number`},`0`),c(` / `),i(`span`,{class:`hljs-number`},`12%`),c(`); }
  }
}
`)])])],-1),o[25]||=f(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>좁은 구간을 뒤에 씁니다.</strong> <code>max-width</code> 방식에서는 760px 이하가 <code>mq(tablet)</code>과 <code>mq(mobile)</code> 모두에 맞습니다. <code>mq(tablet)</code> 다음에 <code>mq(mobile)</code>을 써야 모바일 값이 우선합니다. 예제의 해결 상태에서 760px 이하일 때 <code>mq(tablet)</code> 규칙이 덮이는 이유입니다.</li><li><strong>범위 문법은 지원 브라우저를 확인합니다.</strong> <code>(width &lt;= 760px)</code>, <code>(width &gt; 760px)</code>처럼 쓰면 경계가 정확히 맞물려 <code>0.02px</code>이 필요 없고, Dart Sass도 그대로 출력합니다. 다만 Chrome 104, Firefox 63, Safari 16.4 이상에서만 동작하므로, 그보다 낮은 iOS를 지원해야 하면 <code>min-width</code>·<code>max-width</code>를 씁니다.</li><li><strong>맵의 숫자를 바꾸면 모든 화면이 함께 바뀝니다.</strong> 한 곳만 고치면 되는 장점이지만, 바꾼 뒤에는 새 경계값 앞뒤 너비(예: 759·760·761px)에서 주요 화면을 다시 확인합니다.</li><li><strong>확대한 PC 화면도 모바일 구간에 들어갑니다.</strong> 브라우저를 200%로 확대하면 CSS 기준 화면 너비가 절반이 되어 PC에서도 <code>mq(mobile)</code> 규칙이 적용됩니다. 모바일 레이아웃의 메뉴·버튼도 키보드로 동작하는지 확인하세요.</li></ul></section>`,1),i(`section`,G,[o[23]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(_,null,{default:r(()=>[...o[22]||=[i(`p`,null,`위 예제에서 ‘경계값 바로 가기’ 버튼이나 슬라이더로 너비를 바꿔 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`765px에서 문제 상태는 '열 규칙이 하나도 맞지 않아 기본 3열로 돌아감’이 표시되고, 해결 상태는 2열 세로형 카드로 정상이다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[c(`768px에서 문제 상태는 규칙 두 개가 함께 적용되고, 해결 상태는 `),i(`code`,null,`mq(tablet)`),c(` 규칙 하나만 적용된다.`)])])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[c(`760px에서 해결 상태의 `),i(`code`,null,`mq(tablet)`),c(` 규칙이 '뒤 규칙이 덮음’으로 바뀌는 이유를 작성 순서로 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{de as default,ae as duration,Q as group,K as id,$ as keyProperty,Z as lead,ie as level,Y as navTitle,q as order,oe as prerequisites,ue as references,le as related,se as status,X as summary,re as tags,J as title,ne as topic,ce as updated};