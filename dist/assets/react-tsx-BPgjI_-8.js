import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-0`},u={id:`section-1`},d={id:`section-2`},f={id:`section-3`},p={id:`section-4`},m={id:`section-5`},h={id:`section-6`},g={id:`section-7`},_=`react-tsx`,v=4,y=`React를 TSX로 쓸 때 (타입만 더하기)`,b=`React를 TSX로`,x=`JSX로 쓰던 컴포넌트에 props·이벤트·useState·useRef·콜백 props 타입을 더하는 방법을 JSX·TSX 탭으로 나란히 비교해 정리합니다.`,S=`TSX 프로젝트에 들어갔다면? 새로 배울 것은 많지 않습니다.
JSX 코드는 그대로 두고, 값이 들어오고 나가는 자리에 타입만 붙이세요.
`,C=`문법`,w=`TypeScript`,T=[`React`,`TSX`,`TypeScript`,`props`,`ReactNode`,`ChangeEvent`,`useState`,`useRef`,`ComponentPropsWithoutRef`],E=`기초`,D=`약 10분`,O=`published`,k=`2026-11-12`,A=[`react-jsx`,`vue-react-map`,`use-ref-dom`],j=[{title:`React — TypeScript 사용하기`,url:`https://ko.react.dev/learn/typescript`},{title:`Vite — 시작하기`,url:`https://vite.dev/guide/`},{title:`React TypeScript Cheatsheet`,url:`https://react-typescript-cheatsheet.netlify.app/`}],M={__name:`react-tsx`,setup(_,{expose:v}){return v({frontmatter:{id:`react-tsx`,order:4,title:`React를 TSX로 쓸 때 (타입만 더하기)`,navTitle:`React를 TSX로`,summary:`JSX로 쓰던 컴포넌트에 props·이벤트·useState·useRef·콜백 props 타입을 더하는 방법을 JSX·TSX 탭으로 나란히 비교해 정리합니다.`,lead:`TSX 프로젝트에 들어갔다면? 새로 배울 것은 많지 않습니다.
JSX 코드는 그대로 두고, 값이 들어오고 나가는 자리에 타입만 붙이세요.
`,group:`문법`,topic:`TypeScript`,tags:[`React`,`TSX`,`TypeScript`,`props`,`ReactNode`,`ChangeEvent`,`useState`,`useRef`,`ComponentPropsWithoutRef`],level:`기초`,duration:`약 10분`,status:`published`,updated:`2026-11-12`,related:[`react-jsx`,`vue-react-map`,`use-ref-dom`],references:[{title:`React — TypeScript 사용하기`,url:`https://ko.react.dev/learn/typescript`},{title:`Vite — 시작하기`,url:`https://vite.dev/guide/`},{title:`React TypeScript Cheatsheet`,url:`https://react-typescript-cheatsheet.netlify.app/`}]}}),(_,v)=>{let y=o(`RouterLink`),b=o(`DocTab`),x=o(`DocTabs`),S=o(`DocTakeaway`);return e(),r(`div`,c,[n(`p`,null,[v[1]||=a(`TSX는 `,-1),i(y,{to:`/pub/recap/react-jsx`},{default:t(()=>[...v[0]||=[a(`JSX 문법`,-1)]]),_:1}),v[2]||=a(`에 타입을 더한 것입니다. 컴포넌트 모양·`,-1),v[3]||=n(`code`,null,`map`,-1),v[4]||=a(`·props 전달은 그대로이고, props·이벤트·상태·ref에 타입을 붙이는 자리만 익히면 됩니다. 아래 탭에서 같은 컴포넌트의 JSX와 TSX를 비교하세요.`,-1)]),n(`section`,l,[v[7]||=s(`<h2><span class="section-no">01</span> 파일과 설정</h2><div class="table-wrap"><table><thead><tr><th>항목</th><th>JSX 프로젝트</th><th>TSX 프로젝트</th></tr></thead><tbody><tr><td>컴포넌트 파일</td><td><code>Card.jsx</code></td><td><code>Card.tsx</code></td></tr><tr><td>화면 없는 파일(Hook·유틸)</td><td><code>useToggle.js</code></td><td><code>useToggle.ts</code></td></tr><tr><td>Vite 템플릿</td><td><code>react</code></td><td><code>react-ts</code></td></tr><tr><td>설정 파일</td><td>없음</td><td><code>tsconfig.json</code> (+ <code>tsconfig.app.json</code>)</td></tr></tbody></table></div>`,2),v[8]||=n(`pre`,null,[n(`code`,{class:`language-terminal`},[n(`figure`,{"v-pre":``,class:`doc-terminal`},[n(`figcaption`,{class:`doc-terminal-bar`},[n(`span`,{"aria-hidden":`true`}),n(`span`,{"aria-hidden":`true`}),n(`span`,{"aria-hidden":`true`}),a(`터미널`)]),n(`pre`,{tabindex:`0`},[n(`code`,{"v-pre":``},[n(`span`,{class:`terminal-line terminal-line-cmd`},[n(`span`,{class:`terminal-prompt`,"aria-hidden":`true`},`$`),a(`npm create vite@latest my-app -- --template react-ts`)])])])])])],-1),v[9]||=s(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;compilerOptions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;jsx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;react-jsx&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;strict&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">true</span></span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre><ul><li><code>&quot;jsx&quot;: &quot;react-jsx&quot;</code>: 파일마다 <code>import React from &#39;react&#39;</code>를 쓰지 않아도 JSX가 변환됩니다.</li><li><code>&quot;strict&quot;: true</code>: <code>null</code> 가능성, 빠진 타입을 엄격하게 검사합니다. 템플릿 기본값이므로 끄지 않습니다.</li><li>타입은 <strong>실행 전에 지워집니다</strong>. 빌드 결과는 JSX로 짠 것과 같은 JavaScript이고, 타입 때문에 화면 동작이 달라지지 않습니다.</li><li>Vite 개발 서버는 타입을 지우기만 하고 <strong>검사는 하지 않습니다</strong>. 오류는 편집기와 <code>npm run build</code>(템플릿의 <code>tsc -b &amp;&amp; vite build</code>)에서 확인합니다.</li></ul>`,2),n(`p`,null,[v[6]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[5]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,u,[v[14]||=n(`h2`,null,[n(`span`,{class:`section-no`},`02`),a(` props 타입`)],-1),v[15]||=n(`p`,null,[a(`컴포넌트 바로 위에 `),n(`code`,null,`컴포넌트명 + Props`),a(` 타입을 만들고, 구조 분해 뒤에 `),n(`code`,null,`: CardProps`),a(`를 붙입니다.`)],-1),i(x,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(b,{label:`JSX`},{default:t(()=>[...v[10]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Card.jsx`),a(`
`),n(`span`,{class:`hljs-comment`},`// size: 'sm' | 'md' | 'lg'`),a(`
`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Card`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ title, size = `),n(`span`,{class:`hljs-string`},`'md'`),a(`, children }`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`section`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`card`),a(),n(`span`,{class:`hljs-attr`},`card-`),a("${"),n(`span`,{class:`hljs-attr`},`size`),a("}`}>")]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`h3`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"card-title"`),a(`>`)]),a(`{title}`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`h3`),a(`>`)]),a(`
      {children}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`section`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1}),i(b,{label:`TSX`},{default:t(()=>[...v[11]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Card.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-keyword`},`type`),a(` { `),n(`span`,{class:`hljs-title class_`},`ReactNode`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`

`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`CardProps`),a(` = {
  `),n(`span`,{class:`hljs-attr`},`title`),a(`: `),n(`span`,{class:`hljs-built_in`},`string`),a(`
  `),n(`span`,{class:`hljs-attr`},`size`),a(`?: `),n(`span`,{class:`hljs-string`},`'sm'`),a(` | `),n(`span`,{class:`hljs-string`},`'md'`),a(` | `),n(`span`,{class:`hljs-string`},`'lg'`),a(),n(`span`,{class:`hljs-comment`},`// 선택 props는 ?`),a(`
  `),n(`span`,{class:`hljs-attr`},`children`),a(`: `),n(`span`,{class:`hljs-title class_`},`ReactNode`),a(),n(`span`,{class:`hljs-comment`},`// 태그 사이 내용`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Card`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ title, size = `),n(`span`,{class:`hljs-string`},`'md'`),a(`, children }: `),n(`span`,{class:`hljs-title class_`},`CardProps`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`section`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`card`),a(),n(`span`,{class:`hljs-attr`},`card-`),a("${"),n(`span`,{class:`hljs-attr`},`size`),a("}`}>")]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`h3`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"card-title"`),a(`>`)]),a(`{title}`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`h3`),a(`>`)]),a(`
      {children}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`section`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1})]),_:1}),v[16]||=s(`<div class="table-wrap"><table><thead><tr><th>항목</th><th>TSX 표기</th></tr></thead><tbody><tr><td>필수 props</td><td><code>title: string</code></td></tr><tr><td>선택 props</td><td><code>size?: &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td></tr><tr><td>기본값</td><td>타입이 아니라 구조 분해 자리에서 <code>size = &#39;md&#39;</code></td></tr><tr><td>태그 사이 내용</td><td><code>children: ReactNode</code> (<code>import type { ReactNode } from &#39;react&#39;</code>)</td></tr></tbody></table></div><ul><li><code>type</code>과 <code>interface</code>는 한 프로젝트에서 하나로 통일합니다. 사이트 규칙은 <code>type</code> 기준입니다.</li><li><code>React.FC</code>는 쓰지 않습니다. 매개변수에 타입을 바로 붙입니다.</li><li><code>React.ReactNode</code>처럼 import 없이 써도 동작하지만, 규칙은 <code>import type</code>으로 가져오는 방식입니다.</li></ul>`,2),n(`p`,null,[v[13]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[12]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,d,[v[21]||=n(`h2`,null,[n(`span`,{class:`section-no`},`03`),a(` 이벤트 타입`)],-1),v[22]||=n(`p`,null,[a(`따로 만든 처리 함수에는 `),n(`code`,null,`react`),a(`의 이벤트 타입에 `),n(`strong`,null,`요소 종류`),a(`를 함께 적습니다.`)],-1),i(x,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(b,{label:`JSX`},{default:t(()=>[...v[17]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// SearchForm.jsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { useState } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`SearchForm`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` [keyword, setKeyword] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)

  `),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleChange`),a(`(`),n(`span`,{class:`hljs-params`},`event`),a(`) {
    `),n(`span`,{class:`hljs-title function_`},`setKeyword`),a(`(event.`),n(`span`,{class:`hljs-property`},`target`),a(`.`),n(`span`,{class:`hljs-property`},`value`),a(`)
  }

  `),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleClear`),a(`(`),n(`span`,{class:`hljs-params`},`event`),a(`) {
    event.`),n(`span`,{class:`hljs-property`},`currentTarget`),a(`.`),n(`span`,{class:`hljs-title function_`},`blur`),a(`()
    `),n(`span`,{class:`hljs-title function_`},`setKeyword`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)
  }

  `),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleSubmit`),a(`(`),n(`span`,{class:`hljs-params`},`event`),a(`) {
    event.`),n(`span`,{class:`hljs-title function_`},`preventDefault`),a(`()
    `),n(`span`,{class:`hljs-variable language_`},`console`),a(`.`),n(`span`,{class:`hljs-title function_`},`log`),a(`(keyword)
  }

  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`form`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"search-form"`),a(),n(`span`,{class:`hljs-attr`},`onSubmit`),a(`=`),n(`span`,{class:`hljs-string`},`{handleSubmit}`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`input`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"search"`),a(),n(`span`,{class:`hljs-attr`},`value`),a(`=`),n(`span`,{class:`hljs-string`},`{keyword}`),a(),n(`span`,{class:`hljs-attr`},`onChange`),a(`=`),n(`span`,{class:`hljs-string`},`{handleChange}`),a(` />`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(),n(`span`,{class:`hljs-attr`},`onClick`),a(`=`),n(`span`,{class:`hljs-string`},`{handleClear}`),a(`>`)]),a(`지우기`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"submit"`),a(`>`)]),a(`검색`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`form`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1}),i(b,{label:`TSX`},{default:t(()=>[...v[18]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// SearchForm.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { useState } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-keyword`},`type`),a(` { `),n(`span`,{class:`hljs-title class_`},`ChangeEvent`),a(`, `),n(`span`,{class:`hljs-title class_`},`FormEvent`),a(`, `),n(`span`,{class:`hljs-title class_`},`MouseEvent`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`SearchForm`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` [keyword, setKeyword] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)

  `),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleChange`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`event`),a(`: `),n(`span`,{class:`hljs-title class_`},`ChangeEvent`),a(`<`),n(`span`,{class:`hljs-title class_`},`HTMLInputElement`),a(`>`)]),a(`) {
    `),n(`span`,{class:`hljs-title function_`},`setKeyword`),a(`(event.`),n(`span`,{class:`hljs-property`},`target`),a(`.`),n(`span`,{class:`hljs-property`},`value`),a(`)
  }

  `),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleClear`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`event`),a(`: `),n(`span`,{class:`hljs-title class_`},`MouseEvent`),a(`<`),n(`span`,{class:`hljs-title class_`},`HTMLButtonElement`),a(`>`)]),a(`) {
    event.`),n(`span`,{class:`hljs-property`},`currentTarget`),a(`.`),n(`span`,{class:`hljs-title function_`},`blur`),a(`()
    `),n(`span`,{class:`hljs-title function_`},`setKeyword`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)
  }

  `),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleSubmit`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`event`),a(`: `),n(`span`,{class:`hljs-title class_`},`FormEvent`),a(`<`),n(`span`,{class:`hljs-title class_`},`HTMLFormElement`),a(`>`)]),a(`) {
    event.`),n(`span`,{class:`hljs-title function_`},`preventDefault`),a(`()
    `),n(`span`,{class:`hljs-variable language_`},`console`),a(`.`),n(`span`,{class:`hljs-title function_`},`log`),a(`(keyword)
  }

  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`form`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"search-form"`),a(),n(`span`,{class:`hljs-attr`},`onSubmit`),a(`=`),n(`span`,{class:`hljs-string`},`{handleSubmit}`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`input`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"search"`),a(),n(`span`,{class:`hljs-attr`},`value`),a(`=`),n(`span`,{class:`hljs-string`},`{keyword}`),a(),n(`span`,{class:`hljs-attr`},`onChange`),a(`=`),n(`span`,{class:`hljs-string`},`{handleChange}`),a(` />`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(),n(`span`,{class:`hljs-attr`},`onClick`),a(`=`),n(`span`,{class:`hljs-string`},`{handleClear}`),a(`>`)]),a(`지우기`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"submit"`),a(`>`)]),a(`검색`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`form`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1})]),_:1}),v[23]||=s(`<div class="table-wrap"><table><thead><tr><th>이벤트</th><th>타입</th></tr></thead><tbody><tr><td>입력값 변경</td><td><code>ChangeEvent&lt;HTMLInputElement&gt;</code> (select는 <code>HTMLSelectElement</code>)</td></tr><tr><td>클릭</td><td><code>MouseEvent&lt;HTMLButtonElement&gt;</code></td></tr><tr><td>폼 전송</td><td><code>FormEvent&lt;HTMLFormElement&gt;</code></td></tr><tr><td>키보드</td><td><code>KeyboardEvent&lt;HTMLInputElement&gt;</code></td></tr></tbody></table></div><ul><li>JSX 안에 바로 쓴 함수는 타입이 <strong>추론되므로</strong> 적지 않습니다. 예) <code>onChange={(event) =&gt; setKeyword(event.target.value)}</code></li><li><code>MouseEvent</code>·<code>KeyboardEvent</code>는 브라우저 기본 타입과 이름이 같습니다. <code>react</code>에서 import하지 않으면 다른 타입이 되어 오류가 납니다.</li></ul>`,2),n(`p`,null,[v[20]||=a(`자세히: `,-1),i(y,{to:`/pub/react/controlled-input`},{default:t(()=>[...v[19]||=[a(`입력이 안 되거나 글자 수가 안 바뀔 때 (제어 입력)`,-1)]]),_:1})])]),n(`section`,f,[v[28]||=n(`h2`,null,[n(`span`,{class:`section-no`},`04`),a(` useState 타입`)],-1),v[29]||=n(`p`,null,[a(`초기값으로 타입을 알 수 있으면 그대로 두고, `),n(`strong`,null,[n(`code`,null,`null`),a(`이나 빈 배열로 시작할 때만`)]),a(),n(`code`,null,`useState<타입>`),a(`을 적습니다.`)],-1),i(x,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(b,{label:`JSX`},{default:t(()=>[...v[24]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` [page, setPage] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-number`},`1`),a(`)
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [isOpen, setIsOpen] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-literal`},`false`),a(`)
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [error, setError] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-comment`},`// 없을 수 있는 값은 null로 시작`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [notices, setNotices] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`([])

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleLoad`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-title function_`},`setNotices`),a(`([{ `),n(`span`,{class:`hljs-attr`},`id`),a(`: `),n(`span`,{class:`hljs-number`},`1`),a(`, `),n(`span`,{class:`hljs-attr`},`title`),a(`: `),n(`span`,{class:`hljs-string`},`'점검 안내'`),a(` }])
  `),n(`span`,{class:`hljs-title function_`},`setError`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`)
  `),n(`span`,{class:`hljs-title function_`},`setPage`),a(`(page + `),n(`span`,{class:`hljs-number`},`1`),a(`)
}
`)])],-1)]]),_:1}),i(b,{label:`TSX`},{default:t(()=>[...v[25]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` [page, setPage] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-number`},`1`),a(`) `),n(`span`,{class:`hljs-comment`},`// number로 추론`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [isOpen, setIsOpen] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-literal`},`false`),a(`) `),n(`span`,{class:`hljs-comment`},`// boolean으로 추론`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [error, setError] = useState<`),n(`span`,{class:`hljs-built_in`},`string`),a(` | `),n(`span`,{class:`hljs-literal`},`null`),a(`>(`),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-comment`},`// 없을 수 있는 값`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [notices, setNotices] = useState<`),n(`span`,{class:`hljs-title class_`},`Notice`),a(`[]>([]) `),n(`span`,{class:`hljs-comment`},`// 빈 배열은 타입을 적습니다.`),a(`

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleLoad`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-title function_`},`setNotices`),a(`([{ `),n(`span`,{class:`hljs-attr`},`id`),a(`: `),n(`span`,{class:`hljs-number`},`1`),a(`, `),n(`span`,{class:`hljs-attr`},`title`),a(`: `),n(`span`,{class:`hljs-string`},`'점검 안내'`),a(` }])
  `),n(`span`,{class:`hljs-title function_`},`setError`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`)
  `),n(`span`,{class:`hljs-title function_`},`setPage`),a(`(page + `),n(`span`,{class:`hljs-number`},`1`),a(`)
}
`)])],-1)]]),_:1})]),_:1}),v[30]||=s(`<div class="table-wrap"><table><thead><tr><th>초기값</th><th>쓰는 법</th><th>추론 결과</th></tr></thead><tbody><tr><td><code>0</code>, <code>&#39;&#39;</code>, <code>false</code></td><td><code>useState(0)</code></td><td><code>number</code>, <code>string</code>, <code>boolean</code></td></tr><tr><td>없을 수 있는 값</td><td><code>useState&lt;string | null&gt;(null)</code></td><td>적지 않으면 <code>null</code>만 들어감</td></tr><tr><td>빈 배열</td><td><code>useState&lt;Notice[]&gt;([])</code></td><td>적지 않으면 <code>never[]</code> → 데이터를 넣을 때 오류</td></tr></tbody></table></div><p><code>Notice</code>는 컴포넌트 위에 <code>type Notice = { id: number; title: string }</code>으로 정의해 둡니다. <code>error</code>는 <code>string | null</code>이므로 화면에서는 <code>error &amp;&amp; …</code>처럼 먼저 걸러 냅니다.</p>`,2),n(`p`,null,[v[27]||=a(`자세히: `,-1),i(y,{to:`/pub/react/state-snapshot`},{default:t(()=>[...v[26]||=[a(`값을 바꾼 직후 console에 이전 값이 찍힐 때 (state 스냅샷)`,-1)]]),_:1})])]),n(`section`,p,[v[35]||=n(`h2`,null,[n(`span`,{class:`section-no`},`05`),a(` useRef 타입`)],-1),v[36]||=n(`p`,null,[a(`DOM 요소는 `),n(`code`,null,`useRef<요소 타입>(null)`),a(`, 화면과 상관없는 값은 `),n(`code`,null,`useRef<값 타입 | null>(null)`),a(`로 만듭니다.`)],-1),i(x,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(b,{label:`JSX`},{default:t(()=>[...v[31]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` inputRef = `),n(`span`,{class:`hljs-title function_`},`useRef`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`)
`),n(`span`,{class:`hljs-keyword`},`const`),a(` timerRef = `),n(`span`,{class:`hljs-title function_`},`useRef`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`)

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleFocus`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  inputRef.`),n(`span`,{class:`hljs-property`},`current`),a(`?.`),n(`span`,{class:`hljs-title function_`},`focus`),a(`()
}

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleChange`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`if`),a(` (timerRef.`),n(`span`,{class:`hljs-property`},`current`),a(` !== `),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-built_in`},`clearTimeout`),a(`(timerRef.`),n(`span`,{class:`hljs-property`},`current`),a(`)
  timerRef.`),n(`span`,{class:`hljs-property`},`current`),a(` = `),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-built_in`},`setTimeout`),a(`(`),n(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),n(`span`,{class:`hljs-variable language_`},`console`),a(`.`),n(`span`,{class:`hljs-title function_`},`log`),a(`(inputRef.`),n(`span`,{class:`hljs-property`},`current`),a(`?.`),n(`span`,{class:`hljs-property`},`value`),a(`)
  }, `),n(`span`,{class:`hljs-number`},`300`),a(`)
}

`),n(`span`,{class:`hljs-comment`},`// return ( <input ref={inputRef} onChange={handleChange} /> )`),a(`
`)])],-1)]]),_:1}),i(b,{label:`TSX`},{default:t(()=>[...v[32]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` inputRef = useRef<`),n(`span`,{class:`hljs-title class_`},`HTMLInputElement`),a(`>(`),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-comment`},`// DOM 요소`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` timerRef = useRef<`),n(`span`,{class:`hljs-built_in`},`number`),a(` | `),n(`span`,{class:`hljs-literal`},`null`),a(`>(`),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-comment`},`// 화면과 상관없는 값 보관`),a(`

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleFocus`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  inputRef.`),n(`span`,{class:`hljs-property`},`current`),a(`?.`),n(`span`,{class:`hljs-title function_`},`focus`),a(`() `),n(`span`,{class:`hljs-comment`},`// 그려지기 전에는 null`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleChange`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`if`),a(` (timerRef.`),n(`span`,{class:`hljs-property`},`current`),a(` !== `),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-built_in`},`clearTimeout`),a(`(timerRef.`),n(`span`,{class:`hljs-property`},`current`),a(`)
  timerRef.`),n(`span`,{class:`hljs-property`},`current`),a(` = `),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-built_in`},`setTimeout`),a(`(`),n(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),n(`span`,{class:`hljs-variable language_`},`console`),a(`.`),n(`span`,{class:`hljs-title function_`},`log`),a(`(inputRef.`),n(`span`,{class:`hljs-property`},`current`),a(`?.`),n(`span`,{class:`hljs-property`},`value`),a(`)
  }, `),n(`span`,{class:`hljs-number`},`300`),a(`)
}

`),n(`span`,{class:`hljs-comment`},`// return ( <input ref={inputRef} onChange={handleChange} /> )`),a(`
`)])],-1)]]),_:1})]),_:1}),v[37]||=s(`<ul><li>요소 ref는 그려지기 전에 <code>null</code>이므로 <strong><code>?.</code>로</strong> 접근합니다. <code>!</code>로 단언하지 않습니다.</li><li>타이머 id는 <code>window.setTimeout</code>을 쓰면 <code>number</code>로 정해집니다. 컴포넌트가 사라질 때는 <code>useEffect</code> 정리 함수에서 <code>clearTimeout</code> 합니다.</li><li>ref 값을 바꿔도 다시 그려지지 않습니다. 화면에 보일 값은 <code>useState</code>로 둡니다.</li><li>React 19 타입에서는 <code>useRef()</code>에 <strong>초기값이 필수</strong>입니다. 비워 두지 말고 <code>null</code>을 넣습니다.</li></ul>`,1),n(`p`,null,[v[34]||=a(`자세히: `,-1),i(y,{to:`/pub/react/use-ref-dom`},{default:t(()=>[...v[33]||=[a(`입력창에 포커스를 주거나 크기를 재야 할 때 (useRef)`,-1)]]),_:1})])]),n(`section`,m,[v[42]||=n(`h2`,null,[n(`span`,{class:`section-no`},`06`),a(` 콜백 props 타입`)],-1),v[43]||=n(`p`,null,[a(`부모에게 알리는 함수 props는 `),n(`code`,null,`(매개변수: 타입) => void`),a(`로 적습니다. 없어도 되는 콜백은 `),n(`code`,null,`?`),a(`를 붙이고 `),n(`code`,null,`?.()`),a(`로 호출합니다.`)],-1),i(x,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(b,{label:`JSX`},{default:t(()=>[...v[38]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// OptionList.jsx`),a(`
`),n(`span`,{class:`hljs-comment`},`// onChange(value), onSelect(id) — onSelect는 없어도 됩니다.`),a(`
`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`OptionList`),a(`(`),n(`span`,{class:`hljs-params`},`{ options, keyword, onChange, onSelect }`),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`div`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"option-list"`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`input`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"search"`),a(),n(`span`,{class:`hljs-attr`},`value`),a(`=`),n(`span`,{class:`hljs-string`},`{keyword}`),a(),n(`span`,{class:`hljs-attr`},`onChange`),a(`=`),n(`span`,{class:`hljs-string`},`{(event)`),a(` =>`)]),a(` onChange(event.target.value)} />
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`ul`),a(`>`)]),a(`
        {options.map((option) => (
          `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`li`),a(),n(`span`,{class:`hljs-attr`},`key`),a(`=`),n(`span`,{class:`hljs-string`},`{option.id}`),a(`>`)]),a(`
            `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(),n(`span`,{class:`hljs-attr`},`onClick`),a(`=`),n(`span`,{class:`hljs-string`},`{()`),a(` =>`)]),a(` onSelect?.(option.id)}>
              {option.label}
            `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
          `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`li`),a(`>`)]),a(`
        ))}
      `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`ul`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`div`),a(`>`)])]),a(`
  )
}

`)])],-1)]]),_:1}),i(b,{label:`TSX`},{default:t(()=>[...v[39]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// OptionList.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`Option`),a(` = {
  `),n(`span`,{class:`hljs-attr`},`id`),a(`: `),n(`span`,{class:`hljs-built_in`},`number`),a(`
  `),n(`span`,{class:`hljs-attr`},`label`),a(`: `),n(`span`,{class:`hljs-built_in`},`string`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`OptionListProps`),a(` = {
  `),n(`span`,{class:`hljs-attr`},`options`),a(`: `),n(`span`,{class:`hljs-title class_`},`Option`),a(`[]
  `),n(`span`,{class:`hljs-attr`},`keyword`),a(`: `),n(`span`,{class:`hljs-built_in`},`string`),a(`
  `),n(`span`,{class:`hljs-attr`},`onChange`),a(`: `),n(`span`,{class:`hljs-function`},[a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`value`),a(`: `),n(`span`,{class:`hljs-built_in`},`string`)]),a(`) =>`)]),a(),n(`span`,{class:`hljs-built_in`},`void`),a(),n(`span`,{class:`hljs-comment`},`// 필수 콜백`),a(`
  `),n(`span`,{class:`hljs-attr`},`onSelect`),a(`?: `),n(`span`,{class:`hljs-function`},[a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`id`),a(`: `),n(`span`,{class:`hljs-built_in`},`number`)]),a(`) =>`)]),a(),n(`span`,{class:`hljs-built_in`},`void`),a(),n(`span`,{class:`hljs-comment`},`// 선택 콜백`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`OptionList`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ options, keyword, onChange, onSelect }: `),n(`span`,{class:`hljs-title class_`},`OptionListProps`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`div`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"option-list"`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`input`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"search"`),a(),n(`span`,{class:`hljs-attr`},`value`),a(`=`),n(`span`,{class:`hljs-string`},`{keyword}`),a(),n(`span`,{class:`hljs-attr`},`onChange`),a(`=`),n(`span`,{class:`hljs-string`},`{(event)`),a(` =>`)]),a(` onChange(event.target.value)} />
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`ul`),a(`>`)]),a(`
        {options.map((option) => (
          `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`li`),a(),n(`span`,{class:`hljs-attr`},`key`),a(`=`),n(`span`,{class:`hljs-string`},`{option.id}`),a(`>`)]),a(`
            `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(),n(`span`,{class:`hljs-attr`},`onClick`),a(`=`),n(`span`,{class:`hljs-string`},`{()`),a(` =>`)]),a(` onSelect?.(option.id)}>
              {option.label}
            `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
          `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`li`),a(`>`)]),a(`
        ))}
      `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`ul`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`div`),a(`>`)])]),a(`
  )
}

`)])],-1)]]),_:1})]),_:1}),v[44]||=s(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 부모 (JSX·TSX 같음)</span>
<span class="hljs-keyword">const</span> [keyword, setKeyword] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#39;&#39;</span>)

<span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">OptionList</span>
    <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
    <span class="hljs-attr">keyword</span>=<span class="hljs-string">{keyword}</span>
    <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setKeyword}</span>
    <span class="hljs-attr">onSelect</span>=<span class="hljs-string">{(id)</span> =&gt;</span> console.log(id)}
  /&gt;</span>
)
</code></pre><ul><li><code>onChange={setKeyword}</code>처럼 상태 변경 함수를 그대로 넘겨도 <code>(value: string) =&gt; void</code>에 맞습니다.</li><li>부모 쪽 인라인 함수 <code>(id) =&gt; …</code>의 <code>id</code>는 <code>number</code>로 추론됩니다.</li></ul>`,2),n(`p`,null,[v[41]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[40]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,h,[v[49]||=n(`h2`,null,[n(`span`,{class:`section-no`},`07`),a(` 기본 태그 속성 이어받기`)],-1),v[50]||=n(`p`,null,[a(`버튼·입력창을 감싸는 컴포넌트는 원래 태그의 속성 타입을 이어받고, 나머지 props(`),n(`code`,null,`...rest`),a(`)를 그대로 넘깁니다.`)],-1),i(x,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(b,{label:`JSX`},{default:t(()=>[...v[45]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Button.jsx`),a(`
`),n(`span`,{class:`hljs-comment`},`// variant: 'primary' | 'line'`),a(`
`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Button`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ variant = `),n(`span`,{class:`hljs-string`},`'primary'`),a(`, className = `),n(`span`,{class:`hljs-string`},`''`),a(`, ...rest }`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(`
      `),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(`
      `),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`button`),a(),n(`span`,{class:`hljs-attr`},`button-`),a("${"),n(`span`,{class:`hljs-attr`},`variant`),a("} ${"),n(`span`,{class:`hljs-attr`},`className`),a("}`"),n(`span`,{class:`hljs-attr`},`.trim`),a(`()}
      {`),n(`span`,{class:`hljs-attr`},`...rest`),a(`}
    />`)])]),a(`
  )
}

`)])],-1)]]),_:1}),i(b,{label:`TSX`},{default:t(()=>[...v[46]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Button.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-keyword`},`type`),a(` { `),n(`span`,{class:`hljs-title class_`},`ComponentPropsWithoutRef`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`

`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`ButtonProps`),a(` = `),n(`span`,{class:`hljs-title class_`},`ComponentPropsWithoutRef`),a(`<`),n(`span`,{class:`hljs-string`},`'button'`),a(`> & {
  `),n(`span`,{class:`hljs-attr`},`variant`),a(`?: `),n(`span`,{class:`hljs-string`},`'primary'`),a(` | `),n(`span`,{class:`hljs-string`},`'line'`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Button`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ variant = `),n(`span`,{class:`hljs-string`},`'primary'`),a(`, className = `),n(`span`,{class:`hljs-string`},`''`),a(`, ...rest }: `),n(`span`,{class:`hljs-title class_`},`ButtonProps`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(`
      `),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(`
      `),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`button`),a(),n(`span`,{class:`hljs-attr`},`button-`),a("${"),n(`span`,{class:`hljs-attr`},`variant`),a("} ${"),n(`span`,{class:`hljs-attr`},`className`),a("}`"),n(`span`,{class:`hljs-attr`},`.trim`),a(`()}
      {`),n(`span`,{class:`hljs-attr`},`...rest`),a(`}
    />`)])]),a(`
  )
}

`)])],-1)]]),_:1})]),_:1}),v[51]||=s(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 사용하는 쪽 (JSX·TSX 같음)</span>
&lt;<span class="hljs-title class_">Button</span> variant=<span class="hljs-string">&quot;line&quot;</span> aria-label=<span class="hljs-string">&quot;닫기&quot;</span> onClick={handleClose}&gt;닫기&lt;/<span class="hljs-title class_">Button</span>&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>저장<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
</code></pre><div class="table-wrap"><table><thead><tr><th>타입</th><th>내용</th></tr></thead><tbody><tr><td><code>ComponentPropsWithoutRef&lt;&#39;button&#39;&gt;</code></td><td><code>button</code>의 모든 속성(<code>type</code>, <code>disabled</code>, <code>aria-*</code>, <code>onClick</code>, <code>children</code> …), <code>ref</code> 제외 — 사이트 규칙 기준</td></tr><tr><td><code>ComponentProps&lt;&#39;button&#39;&gt;</code></td><td>위 속성 + <code>ref</code>. React 19에서 <code>ref</code>를 props로 받아 넘길 때</td></tr></tbody></table></div><p><code>variant=&quot;xl&quot;</code>처럼 없는 값이나 오타 속성은 편집기에서 바로 오류로 표시됩니다.</p>`,3),n(`p`,null,[v[48]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[47]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,g,[v[53]||=s(`<h2><span class="section-no">08</span> JSX ↔ TSX 대응표</h2><div class="table-wrap"><table><thead><tr><th>하는 일</th><th>JSX</th><th>TSX에서 더하는 것</th></tr></thead><tbody><tr><td>파일</td><td><code>Card.jsx</code></td><td><code>Card.tsx</code>, <code>tsconfig.json</code></td></tr><tr><td>props 받기</td><td><code>function Card({ title })</code></td><td><code>({ title }: CardProps)</code> + <code>type CardProps = { … }</code></td></tr><tr><td>선택 props·기본값</td><td><code>size = &#39;md&#39;</code></td><td><code>size?: &#39;sm&#39; | &#39;md&#39;</code> + 기본값은 그대로</td></tr><tr><td>children</td><td><code>{children}</code></td><td><code>children: ReactNode</code></td></tr><tr><td>이벤트 함수</td><td><code>handleChange(event)</code></td><td><code>event: ChangeEvent&lt;HTMLInputElement&gt;</code></td></tr><tr><td>인라인 이벤트</td><td><code>onClick={(event) =&gt; …}</code></td><td>그대로(추론)</td></tr><tr><td>상태(값 있음)</td><td><code>useState(0)</code></td><td>그대로(추론)</td></tr><tr><td>상태(null·빈 배열)</td><td><code>useState(null)</code>, <code>useState([])</code></td><td><code>useState&lt;string | null&gt;(null)</code>, <code>useState&lt;Notice[]&gt;([])</code></td></tr><tr><td>DOM ref</td><td><code>useRef(null)</code></td><td><code>useRef&lt;HTMLInputElement&gt;(null)</code></td></tr><tr><td>값 보관 ref</td><td><code>useRef(null)</code></td><td><code>useRef&lt;number | null&gt;(null)</code></td></tr><tr><td>콜백 props</td><td><code>onSelect(id)</code> 호출</td><td><code>onSelect?: (id: number) =&gt; void</code></td></tr><tr><td>기본 태그 감싸기</td><td><code>{...rest}</code></td><td><code>ComponentPropsWithoutRef&lt;&#39;button&#39;&gt; &amp; { … }</code></td></tr></tbody></table></div>`,2),i(S,null,{default:t(()=>[...v[52]||=[n(`p`,null,[a(`TSX는 JSX 코드를 그대로 두고, props·이벤트·`),n(`code`,null,`null`),a(`·빈 배열로 시작하는 상태·ref에만 타입을 더합니다.`)],-1)]]),_:1})])])}}};export{M as default,D as duration,C as group,_ as id,S as lead,E as level,b as navTitle,v as order,j as references,A as related,O as status,x as summary,T as tags,y as title,w as topic,k as updated};