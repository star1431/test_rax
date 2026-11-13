import{D as e,G as t,H as n,R as r,c as i,d as a,g as o,h as s,j as c,k as l,l as u,m as d,pt as f,r as p,s as m,ut as h}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{t as g}from"./DemoCompare-Bd6h8ThJ.js";import{t as _}from"./OutputCompare-vjryNoqn.js";var v=`.side-menu {
  padding: 16px;
}
.side-menu .menu-list {
  margin: 0;
}
.side-menu .menu-list ul {
  padding: 0;
  list-style: none;
}
.side-menu .menu-list ul li {
  border-bottom: 1px solid #e3e8ef;
}
.side-menu .menu-list ul li a {
  display: block;
  padding: 10px 12px;
  color: #333;
  font-weight: 400;
}
.side-menu .menu-list ul li a:hover {
  background: #f3f6fb;
}
.side-menu .menu-list ul li a span {
  margin-left: 4px;
  color: #888;
  font-size: 12px;
}

.menu-link.is-active {
  background: #eaf1ff;
  color: #1f5fd6;
  font-weight: 700;
}`,y=`// 문제 코드: HTML 구조를 그대로 따라 중첩한 SCSS (실무 노트 SCSS 07)
// 컴파일은 되지만, 결과 선택자가 길어지고 명시도가 높아집니다.
.side-menu {
  padding: 16px;

  .menu-list {
    margin: 0;

    ul {
      padding: 0;
      list-style: none;

      li {
        border-bottom: 1px solid #e3e8ef;

        a {
          display: block;
          padding: 10px 12px;
          color: #333;
          font-weight: 400;

          &:hover {
            background: #f3f6fb;
          }

          span {
            margin-left: 4px;
            color: #888;
            font-size: 12px;
          }
        }
      }
    }
  }
}

// 다른 파일에서 추가한 선택 상태: 글자색·굵기가 적용되지 않습니다.
// .side-menu .menu-list ul li a (0,2,3) > .menu-link.is-active (0,2,0)
.menu-link.is-active {
  background: #eaf1ff;
  color: #1f5fd6;
  font-weight: 700;
}
`,b=`.side-menu {
  padding: 16px;
}

.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  border-bottom: 1px solid #e3e8ef;
}

.menu-link {
  display: block;
  padding: 10px 12px;
  color: #333;
  font-weight: 400;
}
.menu-link:hover {
  background: #f3f6fb;
}
.menu-link.is-active {
  background: #eaf1ff;
  color: #1f5fd6;
  font-weight: 700;
}
.menu-link-sub {
  padding-left: 24px;
}
@media (max-width: 760px) {
  .menu-link {
    padding-block: 14px;
  }
}

.menu-count {
  margin-left: 4px;
  color: #888;
  font-size: 12px;
}`,x=`// 해결 코드: 요소마다 클래스 하나로 선택하고, 중첩은 상태·변형·미디어 쿼리에만 씁니다. (실무 노트 SCSS 07)
// 모든 선택자의 명시도가 (0,1,0)~(0,2,0) 안에 있어, 상태 클래스가 작성 순서대로 덮어씁니다.
.side-menu {
  padding: 16px;
}

.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  border-bottom: 1px solid #e3e8ef;
}

.menu-link {
  display: block;
  padding: 10px 12px;
  color: #333;
  font-weight: 400;

  &:hover {
    background: #f3f6fb;
  }

  // 선택 상태: .menu-link.is-active (0,2,0)
  &.is-active {
    background: #eaf1ff;
    color: #1f5fd6;
    font-weight: 700;
  }

  // 변형: .menu-link-sub (하위 메뉴 들여쓰기)
  &-sub {
    padding-left: 24px;
  }

  // 모바일: 누르기 쉽게 위아래 여백만 늘립니다. (좌우를 바꾸면 -sub 들여쓰기를 덮으므로 건드리지 않음)
  @media (max-width: 760px) {
    padding-block: 14px;
  }
}

.menu-count {
  margin-left: 4px;
  color: #888;
  font-size: 12px;
}
`,S=[{key:`deep`,label:`HTML 구조대로 중첩`,source:y,css:v,note:`중첩 단계마다 조상 선택자가 앞에 붙어, a 규칙의 명시도가 (0,2,3)이 됩니다.`},{key:`flat`,label:`클래스 하나 + 필요한 곳만 &`,source:x,css:b,note:`선택자가 짧고 명시도가 (0,1,0)~(0,2,0)이라 상태 클래스가 바로 덮습니다.`}],C=[{key:`notice`,label:`공지사항`,count:3},{key:`faq`,label:`자주 묻는 질문`,count:12},{key:`qna`,label:`1:1 문의`,count:1}];function ee(e){let t=e.replace(/:where\([^)]*\)/g,` `),n=e=>{let n=t.match(e)||[];return t=t.replace(e,` `),n.length},r=n(/#[\w-]+/g),i=n(/::[\w-]+/g);return[r,n(/\.[\w-]+/g)+n(/\[[^\]]*\]/g)+n(/:[\w-]+/g),n(/[a-zA-Z][\w-]*/g)+i]}function w(e,t){for(let n=0;n<3;n+=1)if(e[n]!==t[n])return e[n]-t[n];return 0}var T=[{selector:`.side-menu .menu-list ul li a`,declaration:`color: #333`,active:!1},{selector:`.menu-link.is-active`,declaration:`color: #1f5fd6`,active:!0}],E=[{selector:`.menu-link`,declaration:`color: #333`,active:!1},{selector:`.menu-link.is-active`,declaration:`color: #1f5fd6`,active:!0}];function D(e,t){let n=e.map(e=>({...e,spec:ee(e.selector),matched:!e.active||t})),r=n.reduce((e,t)=>t.matched&&(!e||w(t.spec,e.spec)>=0)?t:e,null);return n.map(e=>({...e,state:e.matched?e===r?`win`:`lose`:`off`}))}var O=[{label:`nesting-specificity.scss`,language:`scss`,code:x},{label:`CSS 결과`,language:`css`,code:b},{label:`HTML`,language:`xml`,code:`<nav class="side-menu" aria-label="고객센터">
  <ul class="menu-list">
    <li class="menu-item">
      <a class="menu-link is-active" href="/notice" aria-current="page">
        공지사항 <span class="menu-count">3</span>
      </a>
    </li>
    <li class="menu-item">
      <a class="menu-link" href="/faq">자주 묻는 질문 <span class="menu-count">12</span></a>
    </li>
    <li class="menu-item">
      <a class="menu-link menu-link-sub" href="/faq/delivery">배송 문의</a>
    </li>
  </ul>
</nav>`}],k={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-nest-select`},A=[`aria-checked`],j=[`aria-checked`,`onClick`],M=[`aria-label`],N={class:`demo-nest-list`},P=[`aria-pressed`,`onClick`],F={class:`demo-nest-count`},I=[`aria-label`],L={class:`demo-nest-rule-spec`},R={__name:`NestingSpecificityDemo`,setup(o){let c={win:`적용`,lose:`덮임`,off:`맞지 않음`},d=n(`notice`),_=m(()=>C.find(e=>e.key===d.value)?.label??`선택하지 않은 메뉴`),v=e=>`${e.selector} { ${e.declaration} }`,y=m(()=>D(T,d.value!==``)),b=m(()=>D(E,d.value!==``));return(n,o)=>(e(),u(g,{problem:{code:`.side-menu .menu-list ul li a`,note:`선택한 메뉴에 배경은 바뀌지만, 글자색·굵기는 명시도가 높은 중첩 선택자에 덮입니다.`},solved:{code:`.menu-link · .menu-link.is-active`,note:`두 규칙이 모두 클래스 선택자라, 명시도가 높은 .is-active 규칙이 적용됩니다.`}},{controls:r(()=>[o[1]||=i(`span`,{id:`demo-nest-select`,class:`demo-label`},`선택한 메뉴`,-1),i(`div`,k,[i(`button`,{type:`button`,role:`radio`,"aria-checked":d.value===``,onClick:o[0]||=e=>d.value=``},`선택 없음`,8,A),(e(!0),a(p,null,l(t(C),t=>(e(),a(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":d.value===t.key,onClick:e=>d.value=t.key},f(t.label),9,j))),128))])]),default:r(({solved:n})=>[i(`nav`,{class:`demo-nest-menu`,"aria-label":`${n?`해결`:`문제`} 예제 메뉴`},[i(`ul`,N,[(e(!0),a(p,null,l(t(C),t=>(e(),a(`li`,{key:t.key,class:`demo-nest-item`},[i(`button`,{type:`button`,class:h([`demo-nest-link`,{"is-active":d.value===t.key}]),"aria-pressed":d.value===t.key,onClick:e=>d.value=t.key},[s(f(t.label)+` `,1),i(`span`,F,f(t.count),1)],10,P)]))),128))])],8,M),i(`ol`,{class:`demo-nest-rules`,"aria-label":`${_.value}의 color 규칙`},[(e(!0),a(p,null,l(n?b.value:y.value,t=>(e(),a(`li`,{key:t.selector,class:h([`demo-nest-rule`,`is-${t.state}`])},[i(`code`,null,f(v(t)),1),i(`span`,L,`명시도 (`+f(t.spec.join(`,`))+`)`,1),i(`b`,null,f(c[t.state]),1)],2))),128))],8,I)]),caption:r(()=>[o[2]||=s(` 규칙 목록은 `,-1),i(`strong`,null,f(_.value),1),o[3]||=s(`의 글자색을 정하는 규칙을 작성 순서대로 보여 주고, 명시도는 선택자 문자열로 계산했습니다. 예제 메뉴는 링크 대신 버튼(`,-1),o[4]||=i(`code`,null,`button.demo-nest-link`,-1),o[5]||=s(`)으로 만들었고, 문제 화면에는 같은 명시도 (0,2,3)의 선택자 `,-1),o[6]||=i(`code`,null,`.is-problem .demo-nest-menu ul li button`,-1),o[7]||=s(`을 걸어 재현했습니다. `,-1)]),_:1}))}},z={class:`doc-body`},B={id:`section-0`},V={id:`section-1`},H={id:`section-2`},U={id:`section-3`},te={id:`section-4`},W={id:`section-7`},G=`nesting-specificity`,K=7,q=`스타일을 덮으려는데 !important만 늘어날 때 (중첩 깊이와 명시도)`,J=`중첩 깊이와 명시도`,Y=`HTML 구조를 그대로 따라 깊게 중첩한 SCSS가 만드는 긴 선택자와 높은 명시도 때문에 상태 클래스가 적용되지 않는 문제를, 클래스 하나 선택자와 얕은 중첩으로 정리합니다.`,X=`.is-active를 붙였는데 색이 안 바뀌어 !important를 넣고 있다면?
선택자를 더 길게 쓰기 전에, 중첩 깊이부터 줄이세요.
`,Z=`구조`,Q=`중첩`,ne=[`SCSS`,`중첩`,`명시도`,`specificity`,`!important`,`상태 클래스`,`:where()`,`@layer`],re=`중급`,ie=`약 11분`,ae=[`선택자 우선순위`,`SCSS 중첩`,`& 부모 선택자`],oe=`중첩은 3단계까지`,$=`published`,se=`2026-11-13`,ce=[`include-extend`,`use-forward`,`sass-vs-css-variables`],le=[{title:`Sass — Style Rules (Nesting)`,url:`https://sass-lang.com/documentation/style-rules/`},{title:`Sass — Parent Selector`,url:`https://sass-lang.com/documentation/style-rules/parent-selector/`},{title:`Selectors Level 4 — Calculating a selector's specificity`,url:`https://www.w3.org/TR/selectors-4/#specificity-rules`},{title:`MDN — Specificity`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity`},{title:`MDN — :where()`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/:where`},{title:`MDN — @layer`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/@layer`},{title:`Chrome DevTools — CSS features reference`,url:`https://developer.chrome.com/docs/devtools/css/reference`}],ue={__name:`nesting-specificity`,setup(n,{expose:l}){return l({frontmatter:{id:`nesting-specificity`,order:7,title:`스타일을 덮으려는데 !important만 늘어날 때 (중첩 깊이와 명시도)`,navTitle:`중첩 깊이와 명시도`,summary:`HTML 구조를 그대로 따라 깊게 중첩한 SCSS가 만드는 긴 선택자와 높은 명시도 때문에 상태 클래스가 적용되지 않는 문제를, 클래스 하나 선택자와 얕은 중첩으로 정리합니다.`,lead:`.is-active를 붙였는데 색이 안 바뀌어 !important를 넣고 있다면?
선택자를 더 길게 쓰기 전에, 중첩 깊이부터 줄이세요.
`,group:`구조`,topic:`중첩`,tags:[`SCSS`,`중첩`,`명시도`,`specificity`,`!important`,`상태 클래스`,`:where()`,`@layer`],level:`중급`,duration:`약 11분`,prerequisites:[`선택자 우선순위`,`SCSS 중첩`,`& 부모 선택자`],keyProperty:`중첩은 3단계까지`,status:`published`,updated:`2026-11-13`,related:[`include-extend`,`use-forward`,`sass-vs-css-variables`],references:[{title:`Sass — Style Rules (Nesting)`,url:`https://sass-lang.com/documentation/style-rules/`},{title:`Sass — Parent Selector`,url:`https://sass-lang.com/documentation/style-rules/parent-selector/`},{title:`Selectors Level 4 — Calculating a selector's specificity`,url:`https://www.w3.org/TR/selectors-4/#specificity-rules`},{title:`MDN — Specificity`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity`},{title:`MDN — :where()`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/:where`},{title:`MDN — @layer`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/@layer`},{title:`Chrome DevTools — CSS features reference`,url:`https://developer.chrome.com/docs/devtools/css/reference`}]}}),(n,l)=>{let u=c(`DocIssue`),f=c(`DocTakeaway`),p=c(`DocSteps`),m=c(`DocInspect`),h=c(`CodePanel`),g=c(`DocPractice`);return e(),a(`div`,z,[i(`section`,B,[l[2]||=d(`<h2><span class="section-no">01</span> 문제 상황</h2><p>고객센터 왼쪽 메뉴의 SCSS를 HTML 구조 그대로 중첩해 작성했습니다. 이후 다른 작업자가 현재 페이지 메뉴를 파란색으로 표시하려고 <code>.menu-link.is-active</code>를 추가했는데, 배경만 바뀌고 글자색과 굵기는 그대로입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// _side-menu.scss</span>
<span class="hljs-selector-class">.side-menu</span> {
  <span class="hljs-selector-class">.menu-list</span> {
    <span class="hljs-selector-tag">ul</span> {
      <span class="hljs-selector-tag">li</span> {
        <span class="hljs-selector-tag">a</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>; <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">400</span>; }
      }
    }
  }
}

<span class="hljs-comment">// _state.scss</span>
<span class="hljs-selector-class">.menu-link</span><span class="hljs-selector-class">.is-active</span> { <span class="hljs-attribute">background</span>: <span class="hljs-number">#eaf1ff</span>; <span class="hljs-attribute">color</span>: <span class="hljs-number">#1f5fd6</span>; <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">700</span>; }
</code></pre><p>급한 대로 <code>color: #1f5fd6 !important</code>를 넣거나 <code>.side-menu .menu-list ul li a.is-active</code>처럼 선택자를 더 길게 쓰면 당장은 해결됩니다. 하지만 다음에 이 메뉴를 덮어야 하는 사람은 더 긴 선택자나 또 다른 <code>!important</code>를 써야 하고, 코드 리뷰나 유지보수 중에 이런 형태로 돌아옵니다.</p>`,4),o(u,{title:`고객센터 메뉴: 현재 페이지 메뉴의 글자색이 파란색으로 바뀌지 않음`,env:`전체 브라우저 · 중첩 SCSS로 작성한 사이드 메뉴`,expected:`is-active가 붙은 메뉴는 배경·글자색이 파란 계열, 글자는 굵게`,actual:`배경만 바뀌고 글자색은 #333, 굵기는 보통 그대로`},{default:r(()=>[...l[0]||=[i(`ol`,null,[i(`li`,null,`공지사항 페이지로 이동합니다.`),i(`li`,null,[s(`왼쪽 메뉴의 공지사항 링크에 `),i(`code`,null,`is-active`),s(` 클래스가 붙었는지 Elements 패널에서 확인합니다.`)]),i(`li`,null,`링크의 글자색과 굵기를 다른 메뉴와 비교합니다.`)],-1)]]),_:1}),o(f,null,{default:r(()=>[...l[1]||=[i(`p`,null,[s(`SCSS 중첩은 `),i(`strong`,null,`HTML 구조가 아니라 상태·변형·미디어 쿼리에만`),s(` 쓰세요. 요소는 클래스 하나로 선택하면 `),i(`code`,null,`.is-active`),s(`가 작성 순서대로 덮습니다.`)],-1)]]),_:1})]),i(`section`,V,[l[3]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),s(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),l[4]||=i(`p`,null,`선택한 메뉴를 바꾸면서, 두 화면에서 글자색을 정하는 규칙 중 어느 쪽이 적용되는지 확인해 보세요. 예제 메뉴 항목을 눌러도 선택이 바뀝니다.`,-1),o(R)]),i(`section`,H,[l[6]||=d(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>SCSS 중첩은 안쪽 선택자 앞에 바깥 선택자를 모두 붙여 컴파일합니다. 다섯 단계로 중첩한 <code>a</code>는 <code>.side-menu .menu-list ul li a</code>가 되고, 명시도는 클래스 2개·태그 3개인 <strong>(0,2,3) 값</strong>입니다. 덮으려는 <code>.menu-link.is-active</code>는 클래스 2개인 <strong>(0,2,0) 값</strong>이라, 가운데 자리가 같고 마지막 자리(태그 수)에서 집니다.</p><p>명시도는 (id, 클래스·속성·가상 클래스, 태그·가상 요소) 순서로 앞자리부터 비교하고, 모두 같을 때만 뒤에 쓴 규칙이 이깁니다. 그래서 <code>.is-active</code> 규칙을 파일 맨 끝에 두어도 소용이 없습니다. 반대로 중첩 선택자에 없는 <code>background</code>는 경쟁할 규칙이 없으니 그대로 적용되어, <strong>배경만 바뀌는</strong> 증상이 나타납니다.</p><p>같은 메뉴를 두 방법으로 쓴 <strong>실제 컴파일 결과</strong>입니다. 선택자 길이와 줄 수를 비교해 보세요.</p>`,4),o(_,{items:t(S)},null,8,[`items`]),o(p,null,{default:r(()=>[...l[5]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`중첩이 선택자를 늘림`),s(),i(`code`,null,`.side-menu .menu-list ul li a`)]),i(`li`,null,[i(`strong`,null,`명시도가 높아짐`),s(),i(`code`,null,`(0,2,3) > (0,2,0)`)]),i(`li`,null,[i(`strong`,null,`덮으려고 더 길게, 또는 !important`),s(),i(`code`,null,`ul li a.is-active`),s(` → `),i(`code`,null,`(0,3,3)`)])],-1)]]),_:1}),l[7]||=i(`p`,null,[s(`긴 선택자는 마크업에도 묶여 있습니다. `),i(`code`,null,`ul`),s(`을 `),i(`code`,null,`ol`),s(`로 바꾸거나 `),i(`code`,null,`.menu-list`),s(`를 감싸는 `),i(`code`,null,`div`),s(`를 빼면 선택자가 아예 맞지 않아 메뉴 스타일 전체가 사라집니다. 클래스 하나로 선택하면 HTML 구조가 바뀌어도 클래스가 붙어 있는 한 스타일이 유지됩니다.`)],-1)]),i(`section`,U,[l[9]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),s(` 원인 찾기`)],-1),l[10]||=i(`p`,null,[s(`상태 클래스가 안 먹을 때는 `),i(`strong`,null,`같은 속성을 놓고 어떤 선택자가 이겼는지`),s(`부터 확인합니다. 아래 순서로 보면 덮은 규칙과 그 규칙을 만든 SCSS를 바로 찾을 수 있습니다.`)],-1),o(m,null,{default:r(()=>[...l[8]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Elements 패널에서 클래스 확인`),s(` 글자색이 안 바뀐 `),i(`code`,null,`a`),s(`를 선택합니다. `),i(`code`,null,`class`),s(` 속성에 `),i(`code`,null,`is-active`),s(`가 실제로 붙어 있는지 먼저 확인합니다. 클래스가 없다면 스타일이 아니라 스크립트·템플릿 쪽 문제입니다.`)]),i(`li`,null,[i(`strong`,null,`Styles 탭에서 취소선 찾기`),i(`code`,null,`.menu-link.is-active`),s(` 규칙의 `),i(`code`,null,`color`),s(`에 취소선이 그어져 있다면 다른 규칙에 덮인 것입니다. 같은 속성이 취소선 없이 남아 있는 규칙(예: `),i(`code`,null,`.side-menu .menu-list ul li a`),s(`)이 이긴 규칙입니다.`)]),i(`li`,null,[i(`strong`,null,`선택자에 마우스를 올려 명시도 비교`),s(` Styles 탭의 선택자에 마우스를 올리면 `),i(`code`,null,`Specificity: (0,2,3)`),s(`처럼 명시도가 표시됩니다. 이 표시가 보이지 않는 버전이라면, 선택자에 들어간 클래스와 태그 개수를 직접 세어 비교합니다.`)]),i(`li`,null,[i(`strong`,null,`컴파일 결과에서 긴 선택자와 !important 검색`),s(` 빌드된 CSS에서 `),i(`code`,null,` ul li a`),s(`처럼 태그가 이어진 선택자와 `),i(`code`,null,`!important`),s(`를 검색해 개수를 봅니다. 소스 맵이 켜져 있으면 Styles 탭 규칙 옆 링크가 그 선택자를 만든 `),i(`code`,null,`.scss`),s(` 줄을 가리킵니다.`)])],-1)]]),_:1})]),i(`section`,te,[l[11]||=d(`<h2><span class="section-no">05</span> 해결 코드</h2><p>요소마다 클래스를 붙이고(<code>.menu-list</code>, <code>.menu-item</code>, <code>.menu-link</code>), 중첩은 <code>&amp;:hover</code>, <code>&amp;.is-active</code>, <code>&amp;-sub</code>, <code>@media</code>에만 썼습니다. <strong>CSS 결과</strong> 탭은 이 SCSS를 빌드할 때 실제로 컴파일한 출력입니다.</p>`,2),o(h,{tabs:t(O)},null,8,[`tabs`]),l[12]||=d(`<ul><li><strong>중첩은 3단계까지</strong>: 이 코드는 가장 깊은 곳이 2단계입니다. 3단계를 넘으면 선택자를 나눌 수 있는지 먼저 봅니다.</li><li><strong>선택자는 클래스 하나</strong>: 클래스 이름은 kebab-case, 변형은 하이픈 하나(<code>menu-link-sub</code>), 상태는 <code>is-</code>로 시작합니다. 중첩 안에서 <code>ul</code>, <code>li</code>, <code>a</code> 같은 태그 선택자는 쓰지 않습니다.</li><li><strong>선언 다음에 중첩 규칙</strong>: 선언을 중첩 규칙보다 먼저 씁니다. 중첩 규칙 뒤에 쓴 선언은 결과 CSS에서 별도 규칙으로 나뉘어 출력되고, Dart Sass 버전에 따라 경고가 표시되기도 합니다.</li></ul>`,1)]),l[15]||=d(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>명시도 다툼은 중첩 말고도 여러 곳에서 생깁니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>외부 라이브러리 스타일을 덮을 때</h3><p>라이브러리 선택자보다 길게 쓰거나 <code>!important</code>로 덮지 말고, 라이브러리와 <strong>같은 명시도의 선택자를 뒤에</strong> 씁니다. 라이브러리 CSS를 <code>@layer</code>로 묶을 수 있다면, 레이어에 넣지 않은 내 스타일이 명시도와 상관없이 이깁니다. 다만 <code>!important</code> 선언은 순서가 반대라서, 라이브러리 CSS가 <code>!important</code>를 쓴 선언은 레이어 밖의 내 스타일로 덮을 수 없습니다. 두 기능 모두 최신 주요 브라우저에서 지원하지만, 지원해야 하는 브라우저 범위는 MDN에서 확인하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@import</span> url(<span class="hljs-string">&#39;swiper.css&#39;</span>) layer(vendor); <span class="hljs-comment">// 라이브러리 CSS를 vendor 레이어에 넣음</span>

<span class="hljs-selector-class">.swiper-button-next</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#1f5fd6</span>; <span class="hljs-comment">// 레이어 밖이라 vendor의 어떤 선택자보다 우선</span>
}
</code></pre><h3>공통 스타일의 명시도를 낮추고 싶을 때</h3><p><code>:where()</code> 안의 선택자는 명시도를 0으로 셉니다. 영역 안에서만 적용하되 다른 클래스가 쉽게 덮게 하고 싶을 때 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// :where(.side-menu) .menu-link → (0,1,0)</span>
<span class="hljs-selector-pseudo">:where</span>(.side-menu) <span class="hljs-selector-class">.menu-link</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
}
</code></pre><h3>&amp; 연결로 만든 클래스가 검색되지 않을 때</h3><p><code>&amp;-title</code>은 컴파일하면 <code>.card-title</code>이 되지만, SCSS 파일에는 <code>card-title</code>이라는 글자가 없어 HTML의 클래스 이름으로 검색해도 나오지 않습니다. 팀에서 <code>&amp;-</code>를 쓴다면 완성된 이름을 주석으로 남깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span>;

  <span class="hljs-comment">// .card-title</span>
  &amp;-title {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  }
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>!important</code>는 덮을 방법이 <code>!important</code>뿐이게 만듭니다.</strong> 사용자가 글자 크기·색을 바꾸는 확장 프로그램이나 사용자 스타일과도 부딪힐 수 있으니, 유틸리티 클래스처럼 반드시 이겨야 하는 곳에만 정해서 씁니다.</li><li><strong>기존 화면을 한꺼번에 평평하게 바꾸지 않습니다.</strong> 선택자 명시도가 바뀌면 지금까지 이기던 규칙이 질 수 있습니다. 화면 단위로 나눠 바꾸고, 바꾼 화면의 상태(hover, 선택, 비활성)를 다시 확인합니다.</li><li><strong>상태 클래스와 접근성 속성을 함께 바꿉니다.</strong> 색만으로는 현재 위치를 알 수 없으므로, 예제처럼 <code>.is-active</code>와 함께 <code>aria-current=&quot;page&quot;</code>를 붙여 화면 낭독기에도 현재 메뉴를 알립니다.</li><li><strong>규칙은 도구로 지킵니다.</strong> stylelint의 <code>max-nesting-depth</code>, <code>selector-max-specificity</code>, <code>declaration-no-important</code> 규칙을 쓰면 깊은 중첩과 <code>!important</code>를 리뷰 전에 찾을 수 있습니다.</li></ul></section>`,2),i(`section`,W,[l[14]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),s(` 짧은 실습`)],-1),o(g,null,{default:r(()=>[...l[13]||=[i(`p`,null,`위 예제에서 ‘선택한 메뉴’ 버튼을 바꿔 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`'공지사항’을 선택하면 문제 화면은 배경만 바뀌고, 해결 화면은 글자색·굵기까지 바뀐다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`문제 화면의 규칙 목록에서 (0,2,3)이 (0,2,0)을 이겨 `),i(`code`,null,`.menu-link.is-active`),s(` 규칙이 '덮임’으로 표시된다.`)])])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},[s(`'선택 없음’으로 바꾸면 양쪽 모두 `),i(`code`,null,`.is-active`),s(` 규칙이 '맞지 않음’으로 바뀌는 이유를 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{ue as default,ie as duration,Z as group,G as id,oe as keyProperty,X as lead,re as level,J as navTitle,K as order,ae as prerequisites,le as references,ce as related,$ as status,Y as summary,ne as tags,q as title,Q as topic,se as updated};