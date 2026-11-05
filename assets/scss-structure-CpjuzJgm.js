import{F as e,O as t,f as n,m as r,p as i,s as a,u as o,w as s}from"./runtime-core.esm-bundler-DaAiWlfC.js";var c={class:`doc-body`},l={id:`section-1`},u={id:`section-2`},d={id:`section-3`},f={id:`section-4`},p=`scss-structure`,m=3,h=`SCSS 구조와 작성 규칙`,g=`SCSS 구조와 작성`,_=`폴더별 역할과 불러오는 순서, 토큰(CSS 변수)만 쓰는 색상, 반응형 믹스인, 중첩 깊이와 속성 순서를 정리합니다.`,v=`스타일 파일은 어디에 무엇을 둘지부터 정해야 커져도 찾기 쉽습니다.
값은 직접 쓰지 말고 정해진 토큰과 믹스인을 사용하세요.
`,y=`CSS`,b=`마크업·스타일`,x=`SCSS`,S=[`SCSS`,`Sass`,`폴더 구조`,`토큰`,`CSS 변수`,`믹스인`,`중첩`],C=`약 8분`,w=`var(--color-*)`,T=`published`,E=`2026-11-02`,D=[`class-naming`,`css-units`],O=[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`MDN — CSS 사용자 지정 속성(변수)`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties`}],k={__name:`scss-structure`,setup(p,{expose:m}){return m({frontmatter:{id:`scss-structure`,order:3,title:`SCSS 구조와 작성 규칙`,navTitle:`SCSS 구조와 작성`,summary:`폴더별 역할과 불러오는 순서, 토큰(CSS 변수)만 쓰는 색상, 반응형 믹스인, 중첩 깊이와 속성 순서를 정리합니다.`,lead:`스타일 파일은 어디에 무엇을 둘지부터 정해야 커져도 찾기 쉽습니다.
값은 직접 쓰지 말고 정해진 토큰과 믹스인을 사용하세요.
`,category:`CSS`,group:`마크업·스타일`,topic:`SCSS`,tags:[`SCSS`,`Sass`,`폴더 구조`,`토큰`,`CSS 변수`,`믹스인`,`중첩`],duration:`약 8분`,keyProperty:`var(--color-*)`,status:`published`,updated:`2026-11-02`,related:[`class-naming`,`css-units`],references:[{title:`Sass — @use`,url:`https://sass-lang.com/documentation/at-rules/use/`},{title:`MDN — CSS 사용자 지정 속성(변수)`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties`}]}}),(p,m)=>{let h=t(`DocDont`),g=t(`DocDo`),_=t(`DocDoDont`),v=t(`DocTerm`);return s(),o(`div`,c,[m[21]||=n(`<section id="section-0"><h2><span class="section-no">01</span> 폴더별 역할</h2><div class="table-wrap"><table><thead><tr><th>폴더</th><th>담는 것</th><th>예</th></tr></thead><tbody><tr><td><code>common/</code></td><td>토큰(색상 변수), Sass 변수, 믹스인, 요소 기본값</td><td><code>_tokens.scss</code>, <code>_mixins.scss</code>, <code>_base.scss</code></td></tr><tr><td><code>templates/</code></td><td>여러 화면이 공유하는 레이아웃</td><td>헤더, 좌측 메뉴, 본문, 목차</td></tr><tr><td><code>components/</code></td><td>재사용 UI 조각</td><td>검색창, 카드, 코드 패널</td></tr><tr><td><code>pages/{메뉴}/</code></td><td>특정 화면에만 쓰는 스타일</td><td><code>pages/com/_home.scss</code></td></tr></tbody></table></div><ul><li>파일 하나에는 <strong>하나의 블록</strong>(예: <code>.doc-card</code>)과 그 하위 요소만 둡니다.</li><li>부분 파일은 이름 앞에 <code>_</code>를 붙입니다. 예) <code>_doc-card.scss</code></li></ul></section>`,1),a(`section`,l,[m[2]||=a(`h2`,null,[a(`span`,{class:`section-no`},`02`),i(` 불러오는 순서가 곧 우선순위입니다`)],-1),m[3]||=a(`p`,null,[i(`진입 파일(`),a(`code`,null,`main.scss`),i(`)에서 `),a(`strong`,null,`공통 → 레이아웃 → 컴포넌트 → 화면`),i(` 순서로 불러옵니다. 같은 명시도라면 나중에 불러온 규칙이 이기므로, 범위가 좁은 스타일일수록 뒤에 둡니다.`)],-1),r(_,null,{default:e(()=>[r(h,null,{default:e(()=>[...m[0]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-keyword`},`@import`),i(),a(`span`,{class:`hljs-string`},`'pages/home'`),i(`;
`),a(`span`,{class:`hljs-keyword`},`@import`),i(),a(`span`,{class:`hljs-string`},`'common/base'`),i(`;
`),a(`span`,{class:`hljs-keyword`},`@import`),i(),a(`span`,{class:`hljs-string`},`'components/card'`),i(`;
`)])],-1),a(`p`,null,[a(`code`,null,`@import`),i(`는 Sass에서 더 이상 권장하지 않으며, 순서도 뒤섞여 있습니다.`)],-1)]]),_:1}),r(g,null,{default:e(()=>[...m[1]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-keyword`},`@use`),i(),a(`span`,{class:`hljs-string`},`'common/tokens'`),i(`;
`),a(`span`,{class:`hljs-keyword`},`@use`),i(),a(`span`,{class:`hljs-string`},`'common/base'`),i(`;
`),a(`span`,{class:`hljs-keyword`},`@use`),i(),a(`span`,{class:`hljs-string`},`'templates/header'`),i(`;
`),a(`span`,{class:`hljs-keyword`},`@use`),i(),a(`span`,{class:`hljs-string`},`'components/doc-card'`),i(`;
`),a(`span`,{class:`hljs-keyword`},`@use`),i(),a(`span`,{class:`hljs-string`},`'pages/com/home'`),i(`;
`)])],-1)]]),_:1})]),_:1})]),a(`section`,u,[m[11]||=a(`h2`,null,[a(`span`,{class:`section-no`},`03`),i(` 색상은 토큰으로만 씁니다`)],-1),a(`p`,null,[m[5]||=i(`색상 값을 직접 쓰면 다크모드나 브랜드 변경 때 파일 전체를 고쳐야 합니다. `,-1),m[6]||=a(`strong`,null,`역할 이름의 CSS 변수`,-1),m[7]||=i(`(`,-1),r(v,{term:`design-token`},{default:e(()=>[...m[4]||=[i(`토큰`,-1)]]),_:1}),m[8]||=i(`)를 사용하고, 테마별 값은 토큰 파일 한 곳에서만 바꿉니다.`,-1)]),r(_,null,{default:e(()=>[r(h,null,{default:e(()=>[...m[9]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-selector-class`},`.doc-card`),i(` {
  `),a(`span`,{class:`hljs-attribute`},`border`),i(`: `),a(`span`,{class:`hljs-number`},`1px`),i(` solid `),a(`span`,{class:`hljs-number`},`#e4e9f0`),i(`;
  `),a(`span`,{class:`hljs-attribute`},`color`),i(`: `),a(`span`,{class:`hljs-number`},`#5a6c86`),i(`;
}
`),a(`span`,{class:`hljs-selector-attr`},[i(`[data-theme=`),a(`span`,{class:`hljs-string`},`'dark'`),i(`]`)]),i(),a(`span`,{class:`hljs-selector-class`},`.doc-card`),i(` {
  `),a(`span`,{class:`hljs-attribute`},`border-color`),i(`: `),a(`span`,{class:`hljs-number`},`#334156`),i(`;
  `),a(`span`,{class:`hljs-attribute`},`color`),i(`: `),a(`span`,{class:`hljs-number`},`#b3c2d6`),i(`;
}
`)])],-1)]]),_:1}),r(g,null,{default:e(()=>[...m[10]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-selector-class`},`.doc-card`),i(` {
  `),a(`span`,{class:`hljs-attribute`},`border`),i(`: `),a(`span`,{class:`hljs-number`},`1px`),i(` solid `),a(`span`,{class:`hljs-built_in`},`var`),i(`(--color-border);
  `),a(`span`,{class:`hljs-attribute`},`color`),i(`: `),a(`span`,{class:`hljs-built_in`},`var`),i(`(--color-text-body);
}
`),a(`span`,{class:`hljs-comment`},`// 다크모드 값은 _tokens.scss에서만 바꿉니다.`),i(`
`)])],-1)]]),_:1})]),_:1})]),a(`section`,d,[m[14]||=a(`h2`,null,[a(`span`,{class:`section-no`},`04`),i(` 반응형은 믹스인을 사용합니다`)],-1),m[15]||=a(`p`,null,[i(`기준점(px)을 파일마다 쓰면 값이 조금씩 달라집니다. 정해진 이름의 믹스인을 사용하고, `),a(`strong`,null,`넓은 화면 → 좁은 화면`),i(` 순서로 작성합니다.`)],-1),r(_,null,{default:e(()=>[r(h,null,{default:e(()=>[...m[12]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-selector-class`},`.article`),i(` {
  `),a(`span`,{class:`hljs-attribute`},`padding`),i(`: `),a(`span`,{class:`hljs-number`},`36px`),i(),a(`span`,{class:`hljs-number`},`54px`),i(`;
}
`),a(`span`,{class:`hljs-keyword`},`@media`),i(` (`),a(`span`,{class:`hljs-attribute`},`max-width`),i(`: `),a(`span`,{class:`hljs-number`},`768px`),i(`) {
  `),a(`span`,{class:`hljs-selector-class`},`.article`),i(` { `),a(`span`,{class:`hljs-attribute`},`padding`),i(`: `),a(`span`,{class:`hljs-number`},`25px`),i(),a(`span`,{class:`hljs-number`},`20px`),i(`; }
}
`)])],-1)]]),_:1}),r(g,null,{default:e(()=>[...m[13]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-selector-class`},`.article`),i(` {
  `),a(`span`,{class:`hljs-attribute`},`padding`),i(`: `),a(`span`,{class:`hljs-number`},`36px`),i(),a(`span`,{class:`hljs-variable`},`$content-padding`),i(`;

  `),a(`span`,{class:`hljs-keyword`},`@include`),i(` mq(tablet) {
    `),a(`span`,{class:`hljs-attribute`},`padding`),i(`: `),a(`span`,{class:`hljs-number`},`32px`),i(),a(`span`,{class:`hljs-variable`},`$content-padding-tablet`),i(`;
  }

  `),a(`span`,{class:`hljs-keyword`},`@include`),i(` mq(mobile) {
    `),a(`span`,{class:`hljs-attribute`},`padding`),i(`: `),a(`span`,{class:`hljs-number`},`25px`),i(),a(`span`,{class:`hljs-number`},`20px`),i(`;
  }
}
`)])],-1)]]),_:1})]),_:1})]),a(`section`,f,[m[18]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),i(` 중첩은 3단계 이하`)],-1),m[19]||=a(`p`,null,[i(`중첩이 깊으면 셀렉터가 길어지고 명시도가 올라가 덮어쓰기 어려워집니다. 클래스 하나로 대상을 정할 수 있도록 이름을 짓고, 중첩은 `),a(`strong`,null,`3단계 이하`),i(`로 유지합니다.`)],-1),r(_,null,{default:e(()=>[r(h,null,{default:e(()=>[...m[16]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-selector-class`},`.layout-header`),i(` {
  `),a(`span`,{class:`hljs-selector-class`},`.nav`),i(` {
    `),a(`span`,{class:`hljs-selector-tag`},`ul`),i(` {
      `),a(`span`,{class:`hljs-selector-tag`},`li`),i(` {
        `),a(`span`,{class:`hljs-selector-tag`},`a`),i(` { `),a(`span`,{class:`hljs-attribute`},`color`),i(`: blue; }
      }
    }
  }
}
`)])],-1)]]),_:1}),r(g,null,{default:e(()=>[...m[17]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-selector-class`},`.layout-header-nav`),i(` {
  `),a(`span`,{class:`hljs-selector-tag`},`a`),i(` {
    `),a(`span`,{class:`hljs-attribute`},`color`),i(`: `),a(`span`,{class:`hljs-built_in`},`var`),i(`(--color-text-body);

    &`),a(`span`,{class:`hljs-selector-class`},`.is-active`),i(` {
      `),a(`span`,{class:`hljs-attribute`},`color`),i(`: `),a(`span`,{class:`hljs-built_in`},`var`),i(`(--color-primary);
    }
  }
}
`)])],-1)]]),_:1})]),_:1}),m[20]||=a(`ul`,null,[a(`li`,null,[a(`code`,null,`&`),i(`는 변형(`),a(`code`,null,`&--primary`),i(`), 상태(`),a(`code`,null,`&.is-open`),i(`), 가상 클래스(`),a(`code`,null,`&:hover`),i(`)에 사용합니다.`)]),a(`li`,null,[a(`code`,null,`&-title`),i(`처럼 이름을 이어 붙이는 방식은 검색이 어려워 쓰지 않습니다. 클래스명 전체를 적습니다.`)])],-1)]),m[22]||=n(`<section id="section-5"><h2><span class="section-no">06</span> 속성 순서</h2><div class="table-wrap"><table><thead><tr><th>순서</th><th>묶음</th><th>예</th></tr></thead><tbody><tr><td>1</td><td>위치</td><td><code>position</code>, <code>top</code>, <code>z-index</code></td></tr><tr><td>2</td><td>배치</td><td><code>display</code>, <code>flex</code>, <code>grid</code>, <code>gap</code></td></tr><tr><td>3</td><td>크기·여백</td><td><code>width</code>, <code>height</code>, <code>margin</code>, <code>padding</code></td></tr><tr><td>4</td><td>글자</td><td><code>font</code>, <code>line-height</code>, <code>color</code>, <code>text-align</code></td></tr><tr><td>5</td><td>꾸밈</td><td><code>border</code>, <code>background</code>, <code>box-shadow</code></td></tr><tr><td>6</td><td>기타</td><td><code>transition</code>, <code>cursor</code></td></tr></tbody></table></div></section>`,1)])}}};export{y as category,k as default,C as duration,b as group,p as id,w as keyProperty,v as lead,g as navTitle,m as order,O as references,D as related,T as status,_ as summary,S as tags,h as title,x as topic,E as updated};