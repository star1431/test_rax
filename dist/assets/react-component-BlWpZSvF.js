import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-0`},u={id:`section-1`},d={id:`section-2`},f={id:`section-3`},p={id:`section-4`},m={id:`section-6`},h=`react-component`,g=7,_=`React 컴포넌트 작성 규칙`,v=`React 컴포넌트`,y=`함수 컴포넌트와 props, 상태·이벤트·ref, Hooks 규칙, className 작성, 상태 위치를 JSX·TSX 예제로 함께 정리합니다. Vue와 대응되는 개념은 빠른 복습 대응표로 이어집니다.`,b=`예제는 JSX(.jsx)와 TypeScript(.tsx) 탭으로 함께 제공합니다. 투입된 프로젝트에 맞는 탭을 고르세요.
컴포넌트를 나누고 상태를 두는 기준은 Vue와 같고, TSX는 props와 상태에 타입을 붙이는 방법만 더 익히면 됩니다.
`,x=`React`,S=`프레임워크`,C=`컴포넌트`,w=[`React`,`JSX`,`TypeScript`,`TSX`,`props`,`Hooks`,`useState`,`useRef`,`useEffect`,`className`,`Context`],T=`약 12분`,E=`Hooks는 최상위에서`,D=`published`,O=`2026-11-12`,k=[`vue-component`,`javascript`],A=[{title:`React — TypeScript 사용하기`,url:`https://ko.react.dev/learn/typescript`},{title:`React — Hook의 규칙`,url:`https://ko.react.dev/reference/rules/rules-of-hooks`},{title:`React — 컴포넌트 간 State 공유하기`,url:`https://ko.react.dev/learn/sharing-state-between-components`}],j={__name:`react-component`,setup(h,{expose:g}){return g({frontmatter:{id:`react-component`,order:7,title:`React 컴포넌트 작성 규칙`,navTitle:`React 컴포넌트`,summary:`함수 컴포넌트와 props, 상태·이벤트·ref, Hooks 규칙, className 작성, 상태 위치를 JSX·TSX 예제로 함께 정리합니다. Vue와 대응되는 개념은 빠른 복습 대응표로 이어집니다.`,lead:`예제는 JSX(.jsx)와 TypeScript(.tsx) 탭으로 함께 제공합니다. 투입된 프로젝트에 맞는 탭을 고르세요.
컴포넌트를 나누고 상태를 두는 기준은 Vue와 같고, TSX는 props와 상태에 타입을 붙이는 방법만 더 익히면 됩니다.
`,category:`React`,group:`프레임워크`,topic:`컴포넌트`,tags:[`React`,`JSX`,`TypeScript`,`TSX`,`props`,`Hooks`,`useState`,`useRef`,`useEffect`,`className`,`Context`],duration:`약 12분`,keyProperty:`Hooks는 최상위에서`,status:`published`,updated:`2026-11-12`,related:[`vue-component`,`javascript`],references:[{title:`React — TypeScript 사용하기`,url:`https://ko.react.dev/learn/typescript`},{title:`React — Hook의 규칙`,url:`https://ko.react.dev/reference/rules/rules-of-hooks`},{title:`React — 컴포넌트 간 State 공유하기`,url:`https://ko.react.dev/learn/sharing-state-between-components`}]}}),(h,g)=>{let _=o(`DocTab`),v=o(`DocTabs`),y=o(`DocDont`),b=o(`DocDo`),x=o(`DocDoDont`),S=o(`RouterLink`);return e(),r(`div`,c,[n(`section`,l,[g[2]||=s(`<h2><span class="section-no">01</span> 함수 컴포넌트와 파일</h2><p>컴포넌트는 <strong>함수 컴포넌트</strong>로 작성합니다. 파일명과 컴포넌트 이름은 <strong>PascalCase</strong>이며, 한 파일에는 하나의 컴포넌트를 내보냅니다. 확장자는 JavaScript 프로젝트면 <code>.jsx</code>, TypeScript 프로젝트면 <code>.tsx</code>입니다.</p><p>아래 코드 탭에서 고른 언어는 이 문서와 실무 노트 React 문서 전체에서 함께 유지됩니다.</p>`,3),i(v,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(_,{label:`JSX`},{default:t(()=>[...g[0]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// NoticeList.jsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`NoticeList`),a(`(`),n(`span`,{class:`hljs-params`},`{ notices, onSelect }`),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`ul`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"notice-list"`),a(`>`)]),a(`
      {notices.map((notice) => (
        `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`li`),a(),n(`span`,{class:`hljs-attr`},`key`),a(`=`),n(`span`,{class:`hljs-string`},`{notice.id}`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"notice-list-item"`),a(`>`)]),a(`
          `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(),n(`span`,{class:`hljs-attr`},`onClick`),a(`=`),n(`span`,{class:`hljs-string`},`{()`),a(` =>`)]),a(` onSelect(notice.id)}>
            {notice.title}
          `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
        `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`li`),a(`>`)]),a(`
      ))}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`ul`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1}),i(_,{label:`TSX`},{default:t(()=>[...g[1]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// NoticeList.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`Notice`),a(` = {
  `),n(`span`,{class:`hljs-attr`},`id`),a(`: `),n(`span`,{class:`hljs-built_in`},`number`),a(`
  `),n(`span`,{class:`hljs-attr`},`title`),a(`: `),n(`span`,{class:`hljs-built_in`},`string`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`NoticeListProps`),a(` = {
  `),n(`span`,{class:`hljs-attr`},`notices`),a(`: `),n(`span`,{class:`hljs-title class_`},`Notice`),a(`[]
  `),n(`span`,{class:`hljs-attr`},`onSelect`),a(`: `),n(`span`,{class:`hljs-function`},[a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`id`),a(`: `),n(`span`,{class:`hljs-built_in`},`number`)]),a(`) =>`)]),a(),n(`span`,{class:`hljs-built_in`},`void`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`NoticeList`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ notices, onSelect }: `),n(`span`,{class:`hljs-title class_`},`NoticeListProps`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`ul`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"notice-list"`),a(`>`)]),a(`
      {notices.map((notice) => (
        `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`li`),a(),n(`span`,{class:`hljs-attr`},`key`),a(`=`),n(`span`,{class:`hljs-string`},`{notice.id}`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"notice-list-item"`),a(`>`)]),a(`
          `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(),n(`span`,{class:`hljs-attr`},`onClick`),a(`=`),n(`span`,{class:`hljs-string`},`{()`),a(` =>`)]),a(` onSelect(notice.id)}>
            {notice.title}
          `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`button`),a(`>`)]),a(`
        `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`li`),a(`>`)]),a(`
      ))}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`ul`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1})]),_:1}),g[3]||=s(`<ul><li>props는 매개변수에서 <strong>구조 분해</strong>합니다. TSX는 바로 뒤에 <code>: 타입 이름</code>을 붙입니다.</li><li>부모에게 알리는 함수 props는 <code>on</code>으로, 컴포넌트 안의 처리 함수는 <code>handle</code>로 시작합니다. 예) <code>onSelect</code> / <code>handleSelect</code></li><li>화면을 그리는 <code>return</code>은 <code>return ( … )</code> 여러 줄 형태로 씁니다.</li></ul>`,1)]),n(`section`,u,[g[8]||=n(`h2`,null,[n(`span`,{class:`section-no`},`02`),a(` props 정의`)],-1),g[9]||=n(`p`,null,[a(`받을 props와 기본값은 매개변수의 구조 분해 자리에 모아 둡니다. TSX는 컴포넌트 바로 위에 `),n(`code`,null,`컴포넌트명 + Props`),a(` 타입을 정의합니다.`)],-1),i(v,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(_,{label:`JSX`},{default:t(()=>[...g[4]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Badge.jsx`),a(`
`),n(`span`,{class:`hljs-comment`},`// tone: 'default' | 'primary' | 'danger'`),a(`
`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Badge`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ tone = `),n(`span`,{class:`hljs-string`},`'default'`),a(`, icon, children }`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`span`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`badge`),a(),n(`span`,{class:`hljs-attr`},`badge-`),a("${"),n(`span`,{class:`hljs-attr`},`tone`),a("}`}>")]),a(`
      {icon}
      {children}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`span`),a(`>`)])]),a(`
  )
}
`)])],-1),n(`p`,null,[a(`JSX에는 타입이 없으므로 `),n(`strong`,null,`기본값`),a(`(`),n(`code`,null,`tone = 'default'`),a(`)과 `),n(`strong`,null,`주석`),a(`으로 받을 값을 드러냅니다. 정해진 값이 있으면 주석에 적어 둡니다.`)],-1)]]),_:1}),i(_,{label:`TSX`},{default:t(()=>[...g[5]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Badge.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-keyword`},`type`),a(` { `),n(`span`,{class:`hljs-title class_`},`ReactNode`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`

`),n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`BadgeProps`),a(` = {
  `),n(`span`,{class:`hljs-attr`},`tone`),a(`?: `),n(`span`,{class:`hljs-string`},`'default'`),a(` | `),n(`span`,{class:`hljs-string`},`'primary'`),a(` | `),n(`span`,{class:`hljs-string`},`'danger'`),a(),n(`span`,{class:`hljs-comment`},`// 정해진 값만 받습니다.`),a(`
  `),n(`span`,{class:`hljs-attr`},`icon`),a(`?: `),n(`span`,{class:`hljs-title class_`},`ReactNode`),a(),n(`span`,{class:`hljs-comment`},`// 선택 props는 ?를 붙입니다.`),a(`
  `),n(`span`,{class:`hljs-attr`},`children`),a(`: `),n(`span`,{class:`hljs-title class_`},`ReactNode`),a(),n(`span`,{class:`hljs-comment`},`// 태그 사이 내용`),a(`
}

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Badge`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ tone = `),n(`span`,{class:`hljs-string`},`'default'`),a(`, icon, children }: `),n(`span`,{class:`hljs-title class_`},`BadgeProps`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`span`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`badge`),a(),n(`span`,{class:`hljs-attr`},`badge-`),a("${"),n(`span`,{class:`hljs-attr`},`tone`),a("}`}>")]),a(`
      {icon}
      {children}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`span`),a(`>`)])]),a(`
  )
}
`)])],-1),n(`div`,{class:`table-wrap`},[n(`table`,null,[n(`thead`,null,[n(`tr`,null,[n(`th`,null,`항목`),n(`th`,null,`작성 방법`)])]),n(`tbody`,null,[n(`tr`,null,[n(`td`,null,`선택 props`),n(`td`,null,[a(`이름 뒤 `),n(`code`,null,`?`),a(`, 기본값은 구조 분해 자리에서 `),n(`code`,null,`tone = 'default'`)])]),n(`tr`,null,[n(`td`,null,`정해진 값`),n(`td`,null,[a(`문자열 유니온 `),n(`code`,null,`'default' | 'primary'`),a(` — 클래스 변형(`),n(`code`,null,`badge-primary`),a(`)과 그대로 연결됩니다`)])]),n(`tr`,null,[n(`td`,null,`태그 사이 내용`),n(`td`,null,[n(`code`,null,`children: ReactNode`)])]),n(`tr`,null,[n(`td`,null,`함수 props`),n(`td`,null,[n(`code`,null,`onSelect: (id: number) => void`)])]),n(`tr`,null,[n(`td`,null,`타입만 가져올 때`),n(`td`,null,[n(`code`,null,`import type { ReactNode } from 'react'`)])])])])],-1),n(`p`,null,[n(`code`,null,`type`),a(`과 `),n(`code`,null,`interface`),a(` 중 `),n(`strong`,null,`한 프로젝트 안에서는 한 가지로 통일`),a(`합니다. 이 문서는 유니온 타입을 함께 쓰기 쉬운 `),n(`code`,null,`type`),a(`을 기준으로 합니다. `),n(`code`,null,`React.FC`),a(`(`),n(`code`,null,`const Badge: React.FC<BadgeProps> = ...`),a(`)는 쓰지 않습니다. 매개변수에 타입을 직접 붙이는 방식이 기본값·제네릭을 쓰기 쉽고, React 공식 문서의 예제도 이 방식입니다.`)],-1)]]),_:1})]),_:1}),g[10]||=n(`h3`,null,`기본 태그 속성 이어받기`,-1),g[11]||=n(`p`,null,[a(`버튼·입력창처럼 기본 태그를 감싸는 컴포넌트는 나머지 props(`),n(`code`,null,`...rest`),a(`)를 그대로 넘겨 원래 속성(`),n(`code`,null,`type`),a(`, `),n(`code`,null,`disabled`),a(`, `),n(`code`,null,`aria-*`),a(` 등)을 모두 받을 수 있게 합니다.`)],-1),i(v,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(_,{label:`JSX`},{default:t(()=>[...g[6]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Button.jsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`Button`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ variant = `),n(`span`,{class:`hljs-string`},`'primary'`),a(`, className = `),n(`span`,{class:`hljs-string`},`''`),a(`, ...rest }`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`button`),a(`
      `),n(`span`,{class:`hljs-attr`},`type`),a(`=`),n(`span`,{class:`hljs-string`},`"button"`),a(`
      `),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`"),n(`span`,{class:`hljs-attr`},`button`),a(),n(`span`,{class:`hljs-attr`},`button-`),a("${"),n(`span`,{class:`hljs-attr`},`variant`),a("} ${"),n(`span`,{class:`hljs-attr`},`className`),a("}`"),n(`span`,{class:`hljs-attr`},`.trim`),a(`()}
      {`),n(`span`,{class:`hljs-attr`},`...rest`),a(`}
    />`)])]),a(`
  )
}
`)])],-1)]]),_:1}),i(_,{label:`TSX`},{default:t(()=>[...g[7]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// Button.tsx`),a(`
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
`)])],-1),n(`p`,null,[n(`code`,null,`ComponentPropsWithoutRef<'button'>`),a(`는 `),n(`code`,null,`button`),a(` 태그가 받는 모든 속성의 타입입니다. 오타나 없는 속성은 편집기에서 바로 오류로 표시됩니다.`)],-1)]]),_:1})]),_:1}),g[12]||=n(`p`,null,[n(`code`,null,`<Button disabled aria-label="닫기" onClick={handleClose}>`),a(`처럼 쓰면 원래 `),n(`code`,null,`button`),a(`의 속성이 그대로 전달됩니다.`)],-1)]),n(`section`,d,[g[34]||=n(`h2`,null,[n(`span`,{class:`section-no`},`03`),a(` 상태·이벤트·ref`)],-1),i(v,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(_,{label:`JSX`},{default:t(()=>[...g[13]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` [keyword, setKeyword] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [notices, setNotices] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`([])
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [selected, setSelected] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-comment`},`// 없을 수 있는 값은 null로 시작`),a(`

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleChange`),a(`(`),n(`span`,{class:`hljs-params`},`event`),a(`) {
  `),n(`span`,{class:`hljs-title function_`},`setKeyword`),a(`(event.`),n(`span`,{class:`hljs-property`},`target`),a(`.`),n(`span`,{class:`hljs-property`},`value`),a(`)
}

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleSubmit`),a(`(`),n(`span`,{class:`hljs-params`},`event`),a(`) {
  event.`),n(`span`,{class:`hljs-title function_`},`preventDefault`),a(`()
}

`),n(`span`,{class:`hljs-comment`},`// DOM 요소는 useRef로 가져옵니다. 그려지기 전에는 null이므로 ?.로 접근합니다.`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` inputRef = `),n(`span`,{class:`hljs-title function_`},`useRef`),a(`(`),n(`span`,{class:`hljs-literal`},`null`),a(`)

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`focusInput`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  inputRef.`),n(`span`,{class:`hljs-property`},`current`),a(`?.`),n(`span`,{class:`hljs-title function_`},`focus`),a(`()
}
`)])],-1)]]),_:1}),i(_,{label:`TSX`},{default:t(()=>[g[16]||=n(`p`,null,[a(`초기값만으로 타입을 알 수 있으면 타입을 생략하고, `),n(`strong`,null,[a(`빈 배열이나 `),n(`code`,null,`null`),a(`로 시작할 때만`)]),a(` 제네릭으로 타입을 적습니다.`)],-1),g[17]||=n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` [keyword, setKeyword] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`) `),n(`span`,{class:`hljs-comment`},`// string으로 추론`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [notices, setNotices] = useState<`),n(`span`,{class:`hljs-title class_`},`Notice`),a(`[]>([]) `),n(`span`,{class:`hljs-comment`},`// 빈 배열은 타입을 적습니다.`),a(`
`),n(`span`,{class:`hljs-keyword`},`const`),a(` [selected, setSelected] = useState<`),n(`span`,{class:`hljs-title class_`},`Notice`),a(` | `),n(`span`,{class:`hljs-literal`},`null`),a(`>(`),n(`span`,{class:`hljs-literal`},`null`),a(`) `),n(`span`,{class:`hljs-comment`},`// 없을 수 있는 값`),a(`
`)])],-1),g[18]||=n(`p`,null,[n(`code`,null,`useState([])`),a(`처럼 타입 없이 빈 배열로 시작하면 `),n(`code`,null,`never[]`),a(`로 추론되어, 나중에 데이터를 넣을 때 오류가 납니다.`)],-1),g[19]||=n(`p`,null,[a(`이벤트 처리 함수는 `),n(`code`,null,`react`),a(`의 이벤트 타입에 `),n(`strong`,null,`요소 종류`),a(`를 함께 적습니다.`)],-1),g[20]||=n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-keyword`},`type`),a(` { `),n(`span`,{class:`hljs-title class_`},`ChangeEvent`),a(`, `),n(`span`,{class:`hljs-title class_`},`FormEvent`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleChange`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`event`),a(`: `),n(`span`,{class:`hljs-title class_`},`ChangeEvent`),a(`<`),n(`span`,{class:`hljs-title class_`},`HTMLInputElement`),a(`>`)]),a(`) {
  `),n(`span`,{class:`hljs-title function_`},`setKeyword`),a(`(event.`),n(`span`,{class:`hljs-property`},`target`),a(`.`),n(`span`,{class:`hljs-property`},`value`),a(`)
}

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`handleSubmit`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`event`),a(`: `),n(`span`,{class:`hljs-title class_`},`FormEvent`),a(`<`),n(`span`,{class:`hljs-title class_`},`HTMLFormElement`),a(`>`)]),a(`) {
  event.`),n(`span`,{class:`hljs-title function_`},`preventDefault`),a(`()
}
`)])],-1),g[21]||=n(`div`,{class:`table-wrap`},[n(`table`,null,[n(`thead`,null,[n(`tr`,null,[n(`th`,null,`이벤트`),n(`th`,null,`타입`)])]),n(`tbody`,null,[n(`tr`,null,[n(`td`,null,`입력값 변경`),n(`td`,null,[n(`code`,null,`ChangeEvent<HTMLInputElement>`),a(` (select는 `),n(`code`,null,`HTMLSelectElement`),a(`)`)])]),n(`tr`,null,[n(`td`,null,`폼 전송`),n(`td`,null,[n(`code`,null,`FormEvent<HTMLFormElement>`)])]),n(`tr`,null,[n(`td`,null,`클릭`),n(`td`,null,[n(`code`,null,`MouseEvent<HTMLButtonElement>`)])]),n(`tr`,null,[n(`td`,null,`키보드`),n(`td`,null,[n(`code`,null,`KeyboardEvent<HTMLInputElement>`)])])])])],-1),g[22]||=n(`p`,null,[a(`이벤트 함수를 JSX 안에 바로 쓰면(`),n(`code`,null,`onChange={(event) => ...}`),a(`) 타입이 자동으로 붙으므로 따로 적지 않아도 됩니다.`)],-1),g[23]||=n(`p`,null,[a(`DOM 요소를 다룰 때는 `),n(`code`,null,`useRef`),a(`에 요소 타입을 적고 `),n(`code`,null,`null`),a(`로 시작합니다.`)],-1),g[24]||=n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`const`),a(` inputRef = useRef<`),n(`span`,{class:`hljs-title class_`},`HTMLInputElement`),a(`>(`),n(`span`,{class:`hljs-literal`},`null`),a(`)

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`focusInput`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  inputRef.`),n(`span`,{class:`hljs-property`},`current`),a(`?.`),n(`span`,{class:`hljs-title function_`},`focus`),a(`()
}
`)])],-1),i(x,null,{default:t(()=>[i(y,null,{default:t(()=>[...g[14]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`NoticeItem`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`props`),a(`: `),n(`span`,{class:`hljs-built_in`},`any`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` box = `),n(`span`,{class:`hljs-variable language_`},`document`),a(`.`),n(`span`,{class:`hljs-title function_`},`querySelector`),a(`(`),n(`span`,{class:`hljs-string`},`'.notice'`),a(`) `),n(`span`,{class:`hljs-keyword`},`as`),a(),n(`span`,{class:`hljs-title class_`},`HTMLDivElement`),a(`
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` title = props.`),n(`span`,{class:`hljs-property`},`notice`),a(`!.`),n(`span`,{class:`hljs-property`},`title`),a(`
}
`)])],-1),n(`p`,null,[n(`code`,null,`any`),a(`, 타입 단언(`),n(`code`,null,`as`),a(`), 강제 단언(`),n(`code`,null,`!`),a(`)으로 오류를 감추면 타입 검사가 의미 없어집니다.`)],-1)]]),_:1}),i(b,null,{default:t(()=>[...g[15]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`type`),a(),n(`span`,{class:`hljs-title class_`},`NoticeItemProps`),a(` = { `),n(`span`,{class:`hljs-attr`},`notice`),a(`?: `),n(`span`,{class:`hljs-title class_`},`Notice`),a(` }

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`NoticeItem`),a(`(`),n(`span`,{class:`hljs-params`},[a(`{ notice }: `),n(`span`,{class:`hljs-title class_`},`NoticeItemProps`)]),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` boxRef = useRef<`),n(`span`,{class:`hljs-title class_`},`HTMLDivElement`),a(`>(`),n(`span`,{class:`hljs-literal`},`null`),a(`)
  `),n(`span`,{class:`hljs-keyword`},`if`),a(` (!notice) `),n(`span`,{class:`hljs-keyword`},`return`),a(),n(`span`,{class:`hljs-literal`},`null`),a(`
  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`div`),a(),n(`span`,{class:`hljs-attr`},`ref`),a(`=`),n(`span`,{class:`hljs-string`},`{boxRef}`),a(`>`)]),a(`
      {notice.title}
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`div`),a(`>`)])]),a(`
  )
}
`)])],-1),n(`p`,null,[a(`타입을 정의하고, 값이 없을 수 있으면 조건문으로 먼저 걸러 냅니다. 요소는 `),n(`code`,null,`useRef`),a(`로 가져옵니다.`)],-1)]]),_:1})]),_:1})]),_:1})]),_:1}),n(`p`,null,[g[26]||=a(`React 19부터는 부모가 넘긴 `,-1),g[27]||=n(`code`,null,`ref`,-1),g[28]||=a(`를 일반 props처럼 받을 수 있습니다. React 18 이하 프로젝트에서는 `,-1),g[29]||=n(`code`,null,`forwardRef`,-1),g[30]||=a(`로 감싸야 하므로 프로젝트의 React 버전(`,-1),g[31]||=n(`code`,null,`package.json`,-1),g[32]||=a(`)을 먼저 확인합니다. 입력값을 상태로 다루는 방법은 `,-1),i(S,{to:`/pub/react/controlled-input`},{default:t(()=>[...g[25]||=[a(`제어 입력`,-1)]]),_:1}),g[33]||=a(`에서 실행 예제로 확인할 수 있습니다.`,-1)])]),n(`section`,f,[g[42]||=n(`h2`,null,[n(`span`,{class:`section-no`},`04`),a(` Hooks 규칙`)],-1),n(`ul`,null,[g[39]||=s(`<li>Hook(<code>useState</code>, <code>useEffect</code> 등)은 <strong>컴포넌트 최상위에서만</strong> 호출합니다. 조건문·반복문·중첩 함수 안에서 호출하지 않습니다.</li><li>직접 만든 Hook은 이름을 <code>use</code>로 시작하고, 파일도 <code>useScrollLock.js</code>(TSX 프로젝트는 <code>.ts</code>)처럼 Hook 이름으로 짓습니다. 화면을 그리지 않으므로 <code>.jsx</code>·<code>.tsx</code>가 아닙니다.</li>`,2),n(`li`,null,[g[36]||=n(`code`,null,`useEffect`,-1),g[37]||=a(`의 의존성 배열에는 효과 안에서 쓰는 값을 빠짐없이 넣고, 등록한 이벤트는 정리 함수에서 해제합니다. (`,-1),i(S,{to:`/pub/react/effect-cleanup`},{default:t(()=>[...g[35]||=[a(`useEffect 정리 함수`,-1)]]),_:1}),g[38]||=a(`)`,-1)])]),g[43]||=n(`p`,null,`아래 예는 타입 표기가 없어 JSX·TSX에 같이 적용됩니다.`,-1),i(x,null,{default:t(()=>[i(y,null,{default:t(()=>[...g[40]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`SearchBox`),a(`(`),n(`span`,{class:`hljs-params`},`{ isOpen }`),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`if`),a(` (isOpen) {
    `),n(`span`,{class:`hljs-keyword`},`const`),a(` [keyword, setKeyword] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)
  }
  `),n(`span`,{class:`hljs-title function_`},`useEffect`),a(`(`),n(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-title function_`},`addEventListener`),a(`(`),n(`span`,{class:`hljs-string`},`'resize'`),a(`, handleResize)
  })
}
`)])],-1),n(`p`,null,`조건 안에서 Hook을 호출하고, 등록한 이벤트를 해제하지 않습니다.`,-1)]]),_:1}),i(b,null,{default:t(()=>[...g[41]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`SearchBox`),a(`(`),n(`span`,{class:`hljs-params`},`{ isOpen }`),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` [keyword, setKeyword] = `),n(`span`,{class:`hljs-title function_`},`useState`),a(`(`),n(`span`,{class:`hljs-string`},`''`),a(`)

  `),n(`span`,{class:`hljs-title function_`},`useEffect`),a(`(`),n(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),n(`span`,{class:`hljs-keyword`},`const`),a(),n(`span`,{class:`hljs-title function_`},`handleResize`),a(` = (`),n(`span`,{class:`hljs-params`}),a(`) => { `),n(`span`,{class:`hljs-comment`},`/* ... */`),a(` }
    `),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-title function_`},`addEventListener`),a(`(`),n(`span`,{class:`hljs-string`},`'resize'`),a(`, handleResize)
    `),n(`span`,{class:`hljs-keyword`},`return`),a(),n(`span`,{class:`hljs-function`},`() =>`),a(),n(`span`,{class:`hljs-variable language_`},`window`),a(`.`),n(`span`,{class:`hljs-title function_`},`removeEventListener`),a(`(`),n(`span`,{class:`hljs-string`},`'resize'`),a(`, handleResize)
  }, [])
}
`)])],-1)]]),_:1})]),_:1})]),n(`section`,p,[g[61]||=n(`h2`,null,[n(`span`,{class:`section-no`},`05`),a(` className과 스타일`)],-1),n(`p`,null,[g[45]||=a(`JSX에서는 `,-1),g[46]||=n(`code`,null,`class`,-1),g[47]||=a(` 대신 `,-1),g[48]||=n(`code`,null,`className`,-1),g[49]||=a(`을 씁니다. 클래스명 규칙은 HTML과 같습니다(하이픈, 변형 `,-1),g[50]||=n(`code`,null,`btn btn-primary`,-1),g[51]||=a(`, 상태 `,-1),g[52]||=n(`code`,null,`is-`,-1),g[53]||=a(`). 조건부 클래스는 참인 값만 잇는 함수(`,-1),g[54]||=n(`code`,null,`cx`,-1),g[55]||=a(`, 또는 `,-1),g[56]||=n(`code`,null,`clsx`,-1),g[57]||=a(` 라이브러리)로 만듭니다. (`,-1),i(S,{to:`/pub/react/class-name`},{default:t(()=>[...g[44]||=[a(`조건부 className`,-1)]]),_:1}),g[58]||=a(`)`,-1)]),i(x,null,{default:t(()=>[i(y,null,{default:t(()=>[...g[59]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[a(`<div `),n(`span`,{class:`hljs-keyword`},`class`),a(`=`),n(`span`,{class:`hljs-string`},`"accordion"`),a(` style=`),n(`span`,{class:`hljs-string`},`"margin-top: 10px"`),a(`>
`),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`div`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a(`'`),n(`span`,{class:`hljs-attr`},`accordion`),a(` ' + (`),n(`span`,{class:`hljs-attr`},`isOpen`),a(` && '`),n(`span`,{class:`hljs-attr`},`is-open`),a(`')}>`)]),a(`
`)])])],-1),n(`p`,null,[n(`code`,null,`class`),a(`·문자열 style은 JSX에서 동작하지 않고, `),n(`code`,null,`&&`),a(`로 이은 클래스에는 `),n(`code`,null,`false`),a(`가 글자로 들어갑니다.`)],-1)]]),_:1}),i(b,null,{default:t(()=>[...g[60]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[a(`<div className={`),n(`span`,{class:`hljs-title function_`},`cx`),a(`(`),n(`span`,{class:`hljs-string`},`'accordion'`),a(`, isOpen && `),n(`span`,{class:`hljs-string`},`'is-open'`),a(`)}>
`),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`div`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"accordion"`),a(),n(`span`,{class:`hljs-attr`},`style`),a(`=`),n(`span`,{class:`hljs-string`},`{{`),a(),n(`span`,{class:`hljs-attr`},`marginTop:`),a(),n(`span`,{class:`hljs-attr`},`10`),a(` }}>`)]),a(`
`)])])],-1),n(`p`,null,`인라인 style은 객체로 쓰고, 속성 이름은 camelCase입니다. 가능하면 클래스로 처리합니다.`,-1)]]),_:1})]),_:1})]),g[66]||=s(`<section id="section-5"><h2><span class="section-no">06</span> 상태는 필요한 가장 가까운 곳에</h2><div class="table-wrap"><table><thead><tr><th>범위</th><th>위치</th></tr></thead><tbody><tr><td>한 컴포넌트 안</td><td><code>useState</code></td></tr><tr><td>형제 컴포넌트가 함께 사용</td><td>공통 부모로 올리고 props로 전달</td></tr><tr><td>여러 단계 아래까지 필요</td><td>Context (테마, 로그인 정보 등)</td></tr></tbody></table></div><p>props를 여러 단계 그대로 전달해야 한다면 Context나 상태 관리 도구를 검토합니다. TSX에서는 Context도 <code>createContext&lt;Theme | null&gt;(null)</code>처럼 값의 타입을 적습니다.</p></section>`,1),n(`section`,m,[g[65]||=n(`h2`,null,[n(`span`,{class:`section-no`},`07`),a(` Vue와 대응되는 개념`)],-1),n(`p`,null,[g[63]||=s(`Vue에서 쓰던 문법(<code>defineProps</code>, <code>emit</code>, <code>ref</code>, <code>computed</code>, <code>watch</code>, <code>slot</code>, <code>v-model</code>, <code>Teleport</code> 등)이 React에서 무엇에 해당하는지는 `,17),i(S,{to:`/pub/recap/vue-react-map`},{default:t(()=>[...g[62]||=[a(`Vue ↔ React 대응표와 자주 틀리는 것`,-1)]]),_:1}),g[64]||=a(`에 한 장 표로 정리했습니다. 같은 화면을 두 프레임워크로 작성한 코드와 TSX에서 타입이 붙는 위치도 함께 볼 수 있습니다.`,-1)])])])}}};export{x as category,j as default,T as duration,S as group,h as id,E as keyProperty,b as lead,v as navTitle,g as order,A as references,k as related,D as status,y as summary,w as tags,_ as title,C as topic,O as updated};