import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-1`},u={id:`section-2`},d={id:`section-3`},f={id:`section-4`},p=`scss-structure`,m=3,h=`SCSS 구조와 작성 규칙`,g=`SCSS 구조와 작성`,_=`폴더별 역할과 불러오는 순서, 토큰(CSS 변수)만 쓰는 색상, 반응형 믹스인, 중첩 깊이와 속성 순서를 정리합니다.`,v=`스타일 파일은 어디에 무엇을 둘지부터 정해야 커져도 찾기 쉽습니다.
값은 직접 쓰지 말고 정해진 토큰과 믹스인을 사용하세요.
`,y=`CSS`,b=`마크업·스타일`,x=`SCSS`,S=[`SCSS`,`Sass`,`폴더 구조`,`토큰`,`CSS 변수`,`믹스인`,`중첩`],C=`약 8분`,w=`var(--color-*)`,T=`published`,E=`2026-11-02`,D=[`class-naming`,`css-units`],O=[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`MDN — CSS 사용자 지정 속성(변수)`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties`}],k={__name:`scss-structure`,setup(p,{expose:m}){return m({frontmatter:{id:`scss-structure`,order:3,title:`SCSS 구조와 작성 규칙`,navTitle:`SCSS 구조와 작성`,summary:`폴더별 역할과 불러오는 순서, 토큰(CSS 변수)만 쓰는 색상, 반응형 믹스인, 중첩 깊이와 속성 순서를 정리합니다.`,lead:`스타일 파일은 어디에 무엇을 둘지부터 정해야 커져도 찾기 쉽습니다.
값은 직접 쓰지 말고 정해진 토큰과 믹스인을 사용하세요.
`,category:`CSS`,group:`마크업·스타일`,topic:`SCSS`,tags:[`SCSS`,`Sass`,`폴더 구조`,`토큰`,`CSS 변수`,`믹스인`,`중첩`],duration:`약 8분`,keyProperty:`var(--color-*)`,status:`published`,updated:`2026-11-02`,related:[`class-naming`,`css-units`],references:[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`MDN — CSS 사용자 지정 속성(변수)`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties`}]}}),(p,m)=>{let h=o(`DocDont`),g=o(`DocDo`),_=o(`DocDoDont`),v=o(`DocTerm`);return e(),r(`div`,c,[m[21]||=s(`<section id="section-0"><h2><span class="section-no">01</span> 폴더별 역할</h2><div class="table-wrap"><table><thead><tr><th>폴더</th><th>담는 것</th><th>예</th></tr></thead><tbody><tr><td><code>common/</code></td><td>토큰(색상 변수), Sass 변수, 믹스인, 요소 기본값</td><td><code>_tokens.scss</code>, <code>_mixins.scss</code>, <code>_base.scss</code></td></tr><tr><td><code>templates/</code></td><td>여러 화면이 공유하는 레이아웃</td><td>헤더, 좌측 메뉴, 본문, 목차</td></tr><tr><td><code>components/</code></td><td>재사용 UI 조각</td><td>검색창, 카드, 코드 패널</td></tr><tr><td><code>pages/{메뉴}/</code></td><td>특정 화면에만 쓰는 스타일</td><td><code>pages/com/_home.scss</code></td></tr></tbody></table></div><ul><li>파일 하나에는 <strong>하나의 블록</strong>(예: <code>.doc-card</code>)과 그 하위 요소만 둡니다.</li><li>부분 파일은 이름 앞에 <code>_</code>를 붙입니다. 예) <code>_doc-card.scss</code></li></ul></section>`,1),n(`section`,l,[m[2]||=n(`h2`,null,[n(`span`,{class:`section-no`},`02`),a(` 불러오는 순서가 곧 우선순위입니다`)],-1),m[3]||=n(`p`,null,[a(`진입 파일(`),n(`code`,null,`main.scss`),a(`)에서 `),n(`strong`,null,`공통 → 레이아웃 → 컴포넌트 → 화면`),a(` 순서로 불러옵니다. 같은 명시도라면 나중에 불러온 규칙이 이기므로, 범위가 좁은 스타일일수록 뒤에 둡니다.`)],-1),i(_,null,{default:t(()=>[i(h,null,{default:t(()=>[...m[0]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`@import`),a(),n(`span`,{class:`hljs-string`},`'pages/home'`),a(`;
`),n(`span`,{class:`hljs-keyword`},`@import`),a(),n(`span`,{class:`hljs-string`},`'common/base'`),a(`;
`),n(`span`,{class:`hljs-keyword`},`@import`),a(),n(`span`,{class:`hljs-string`},`'components/card'`),a(`;
`)])],-1),n(`p`,null,[n(`code`,null,`@import`),a(`는 Sass에서 더 이상 권장하지 않으며, 순서도 뒤섞여 있습니다.`)],-1)]]),_:1}),i(g,null,{default:t(()=>[...m[1]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`@use`),a(),n(`span`,{class:`hljs-string`},`'common/tokens'`),a(`;
`),n(`span`,{class:`hljs-keyword`},`@use`),a(),n(`span`,{class:`hljs-string`},`'common/base'`),a(`;
`),n(`span`,{class:`hljs-keyword`},`@use`),a(),n(`span`,{class:`hljs-string`},`'templates/header'`),a(`;
`),n(`span`,{class:`hljs-keyword`},`@use`),a(),n(`span`,{class:`hljs-string`},`'components/doc-card'`),a(`;
`),n(`span`,{class:`hljs-keyword`},`@use`),a(),n(`span`,{class:`hljs-string`},`'pages/com/home'`),a(`;
`)])],-1)]]),_:1})]),_:1})]),n(`section`,u,[m[11]||=n(`h2`,null,[n(`span`,{class:`section-no`},`03`),a(` 색상은 토큰으로만 씁니다`)],-1),n(`p`,null,[m[5]||=a(`색상 값을 직접 쓰면 다크모드나 브랜드 변경 때 파일 전체를 고쳐야 합니다. `,-1),m[6]||=n(`strong`,null,`역할 이름의 CSS 변수`,-1),m[7]||=a(`(`,-1),i(v,{term:`design-token`},{default:t(()=>[...m[4]||=[a(`토큰`,-1)]]),_:1}),m[8]||=a(`)를 사용하고, 테마별 값은 토큰 파일 한 곳에서만 바꿉니다.`,-1)]),i(_,null,{default:t(()=>[i(h,null,{default:t(()=>[...m[9]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.doc-card`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`border`),a(`: `),n(`span`,{class:`hljs-number`},`1px`),a(` solid `),n(`span`,{class:`hljs-number`},`#e4e9f0`),a(`;
  `),n(`span`,{class:`hljs-attribute`},`color`),a(`: `),n(`span`,{class:`hljs-number`},`#5a6c86`),a(`;
}
`),n(`span`,{class:`hljs-selector-attr`},[a(`[data-theme=`),n(`span`,{class:`hljs-string`},`'dark'`),a(`]`)]),a(),n(`span`,{class:`hljs-selector-class`},`.doc-card`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`border-color`),a(`: `),n(`span`,{class:`hljs-number`},`#334156`),a(`;
  `),n(`span`,{class:`hljs-attribute`},`color`),a(`: `),n(`span`,{class:`hljs-number`},`#b3c2d6`),a(`;
}
`)])],-1)]]),_:1}),i(g,null,{default:t(()=>[...m[10]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.doc-card`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`border`),a(`: `),n(`span`,{class:`hljs-number`},`1px`),a(` solid `),n(`span`,{class:`hljs-built_in`},`var`),a(`(--color-border);
  `),n(`span`,{class:`hljs-attribute`},`color`),a(`: `),n(`span`,{class:`hljs-built_in`},`var`),a(`(--color-text-body);
}
`),n(`span`,{class:`hljs-comment`},`// 다크모드 값은 _tokens.scss에서만 바꿉니다.`),a(`
`)])],-1)]]),_:1})]),_:1})]),n(`section`,d,[m[14]||=n(`h2`,null,[n(`span`,{class:`section-no`},`04`),a(` 반응형은 믹스인을 사용합니다`)],-1),m[15]||=n(`p`,null,[a(`기준점(px)을 파일마다 쓰면 값이 조금씩 달라집니다. 정해진 이름의 믹스인을 사용하고, `),n(`strong`,null,`넓은 화면 → 좁은 화면`),a(` 순서로 작성합니다.`)],-1),i(_,null,{default:t(()=>[i(h,null,{default:t(()=>[...m[12]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.article`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`padding`),a(`: `),n(`span`,{class:`hljs-number`},`36px`),a(),n(`span`,{class:`hljs-number`},`54px`),a(`;
}
`),n(`span`,{class:`hljs-keyword`},`@media`),a(` (`),n(`span`,{class:`hljs-attribute`},`max-width`),a(`: `),n(`span`,{class:`hljs-number`},`768px`),a(`) {
  `),n(`span`,{class:`hljs-selector-class`},`.article`),a(` { `),n(`span`,{class:`hljs-attribute`},`padding`),a(`: `),n(`span`,{class:`hljs-number`},`25px`),a(),n(`span`,{class:`hljs-number`},`20px`),a(`; }
}
`)])],-1)]]),_:1}),i(g,null,{default:t(()=>[...m[13]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.article`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`padding`),a(`: `),n(`span`,{class:`hljs-number`},`36px`),a(),n(`span`,{class:`hljs-variable`},`$content-padding`),a(`;

  `),n(`span`,{class:`hljs-keyword`},`@include`),a(` mq(tablet) {
    `),n(`span`,{class:`hljs-attribute`},`padding`),a(`: `),n(`span`,{class:`hljs-number`},`32px`),a(),n(`span`,{class:`hljs-variable`},`$content-padding-tablet`),a(`;
  }

  `),n(`span`,{class:`hljs-keyword`},`@include`),a(` mq(mobile) {
    `),n(`span`,{class:`hljs-attribute`},`padding`),a(`: `),n(`span`,{class:`hljs-number`},`25px`),a(),n(`span`,{class:`hljs-number`},`20px`),a(`;
  }
}
`)])],-1)]]),_:1})]),_:1})]),n(`section`,f,[m[18]||=n(`h2`,null,[n(`span`,{class:`section-no`},`05`),a(` 중첩은 3단계 이하`)],-1),m[19]||=n(`p`,null,[a(`중첩이 깊으면 셀렉터가 길어지고 명시도가 올라가 덮어쓰기 어려워집니다. 클래스 하나로 대상을 정할 수 있도록 이름을 짓고, 중첩은 `),n(`strong`,null,`3단계 이하`),a(`로 유지합니다.`)],-1),i(_,null,{default:t(()=>[i(h,null,{default:t(()=>[...m[16]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.layout-header`),a(` {
  `),n(`span`,{class:`hljs-selector-class`},`.nav`),a(` {
    `),n(`span`,{class:`hljs-selector-tag`},`ul`),a(` {
      `),n(`span`,{class:`hljs-selector-tag`},`li`),a(` {
        `),n(`span`,{class:`hljs-selector-tag`},`a`),a(` { `),n(`span`,{class:`hljs-attribute`},`color`),a(`: blue; }
      }
    }
  }
}
`)])],-1)]]),_:1}),i(g,null,{default:t(()=>[...m[17]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.layout-header-nav`),a(` {
  `),n(`span`,{class:`hljs-selector-tag`},`a`),a(` {
    `),n(`span`,{class:`hljs-attribute`},`color`),a(`: `),n(`span`,{class:`hljs-built_in`},`var`),a(`(--color-text-body);

    &`),n(`span`,{class:`hljs-selector-class`},`.is-active`),a(` {
      `),n(`span`,{class:`hljs-attribute`},`color`),a(`: `),n(`span`,{class:`hljs-built_in`},`var`),a(`(--color-primary);
    }
  }
}
`)])],-1)]]),_:1})]),_:1}),m[20]||=s(`<ul><li><code>&amp;</code>는 변형(<code>&amp;-primary</code> → <code>.btn-primary</code>), 상태(<code>&amp;.is-open</code>), 가상 클래스(<code>&amp;:hover</code>)에 사용합니다.</li><li><code>&amp;-title</code>처럼 이름을 이어 붙이는 방식은 검색이 어려워 쓰지 않습니다. 클래스명 전체를 적습니다.</li></ul>`,1)]),m[22]||=s(`<section id="section-5"><h2><span class="section-no">06</span> 속성 순서</h2><div class="table-wrap"><table><thead><tr><th>순서</th><th>묶음</th><th>예</th></tr></thead><tbody><tr><td>1</td><td>위치</td><td><code>position</code>, <code>top</code>, <code>z-index</code></td></tr><tr><td>2</td><td>배치</td><td><code>display</code>, <code>flex</code>, <code>grid</code>, <code>gap</code></td></tr><tr><td>3</td><td>크기·여백</td><td><code>width</code>, <code>height</code>, <code>margin</code>, <code>padding</code></td></tr><tr><td>4</td><td>글자</td><td><code>font</code>, <code>line-height</code>, <code>color</code>, <code>text-align</code></td></tr><tr><td>5</td><td>꾸밈</td><td><code>border</code>, <code>background</code>, <code>box-shadow</code></td></tr><tr><td>6</td><td>기타</td><td><code>transition</code>, <code>cursor</code></td></tr></tbody></table></div></section>`,1)])}}};export{y as category,k as default,C as duration,b as group,p as id,w as keyProperty,v as lead,g as navTitle,m as order,O as references,D as related,T as status,_ as summary,S as tags,h as title,x as topic,E as updated};