import{F as e,O as t,f as n,m as r,p as i,s as a,u as o,w as s}from"./runtime-core.esm-bundler-DaAiWlfC.js";var c={class:`doc-body`},l={id:`section-2`},u={id:`section-3`},d={id:`section-4`},f=`react-component`,p=7,m=`React 컴포넌트 작성 규칙`,h=`React 컴포넌트`,g=`TypeScript(TSX) 기준으로 함수 컴포넌트와 props 타입, 상태·이벤트·ref 타입, Hooks 규칙, className 작성, 상태 위치를 정리하고 Vue와 대응되는 개념을 비교합니다.`,_=`React 프로젝트는 TypeScript(.tsx)를 기준으로 작성합니다.
컴포넌트를 나누고 상태를 두는 기준은 Vue와 같고, props와 상태에 타입을 붙이는 방법만 더 익히면 됩니다.
`,v=`React`,y=`프레임워크`,b=`컴포넌트`,x=[`React`,`TypeScript`,`TSX`,`props`,`Hooks`,`useState`,`useRef`,`useEffect`,`className`,`Context`],S=`약 12분`,C=`props는 type으로`,w=`published`,T=`2026-11-05`,E=[`vue-component`,`javascript`],D=[{title:`React — TypeScript 사용하기`,url:`https://ko.react.dev/learn/typescript`},{title:`React — Hook의 규칙`,url:`https://ko.react.dev/reference/rules/rules-of-hooks`},{title:`React — 컴포넌트 간 State 공유하기`,url:`https://ko.react.dev/learn/sharing-state-between-components`}],O={__name:`react-component`,setup(f,{expose:p}){return p({frontmatter:{id:`react-component`,order:7,title:`React 컴포넌트 작성 규칙`,navTitle:`React 컴포넌트`,summary:`TypeScript(TSX) 기준으로 함수 컴포넌트와 props 타입, 상태·이벤트·ref 타입, Hooks 규칙, className 작성, 상태 위치를 정리하고 Vue와 대응되는 개념을 비교합니다.`,lead:`React 프로젝트는 TypeScript(.tsx)를 기준으로 작성합니다.
컴포넌트를 나누고 상태를 두는 기준은 Vue와 같고, props와 상태에 타입을 붙이는 방법만 더 익히면 됩니다.
`,category:`React`,group:`프레임워크`,topic:`컴포넌트`,tags:[`React`,`TypeScript`,`TSX`,`props`,`Hooks`,`useState`,`useRef`,`useEffect`,`className`,`Context`],duration:`약 12분`,keyProperty:`props는 type으로`,status:`published`,updated:`2026-11-05`,related:[`vue-component`,`javascript`],references:[{title:`React — TypeScript 사용하기`,url:`https://ko.react.dev/learn/typescript`},{title:`React — Hook의 규칙`,url:`https://ko.react.dev/reference/rules/rules-of-hooks`},{title:`React — 컴포넌트 간 State 공유하기`,url:`https://ko.react.dev/learn/sharing-state-between-components`}]}}),(f,p)=>{let m=t(`DocDont`),h=t(`DocDo`),g=t(`DocDoDont`);return s(),o(`div`,c,[p[10]||=n(`<section id="section-0"><h2><span class="section-no">01</span> 함수 컴포넌트와 파일</h2><p>컴포넌트는 <strong>함수 컴포넌트</strong>로 작성합니다. 파일 확장자는 <code>.tsx</code>, 파일명과 컴포넌트 이름은 <strong>PascalCase</strong>이며, 한 파일에는 하나의 컴포넌트를 내보냅니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// NoticeList.tsx</span>
<span class="hljs-keyword">type</span> <span class="hljs-title class_">Notice</span> = {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>
  <span class="hljs-attr">title</span>: <span class="hljs-built_in">string</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">NoticeListProps</span> = {
  <span class="hljs-attr">notices</span>: <span class="hljs-title class_">Notice</span>[]
  <span class="hljs-attr">onSelect</span>: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">NoticeList</span>(<span class="hljs-params">{ notices, onSelect }: <span class="hljs-title class_">NoticeListProps</span></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;notice-list&quot;</span>&gt;</span>
      {notices.map((notice) =&gt; (
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{notice.id}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;notice-list-item&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onSelect(notice.id)}&gt;
            {notice.title}
          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      ))}
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
  )
}
</code></pre><ul><li>props는 매개변수에서 <strong>구조 분해</strong>하고, 타입은 바로 뒤에 <code>: 타입 이름</code>으로 붙입니다.</li><li>부모에게 알리는 함수 props는 <code>on</code>으로, 컴포넌트 안의 처리 함수는 <code>handle</code>로 시작합니다. 예) <code>onSelect</code> / <code>handleSelect</code></li><li>JavaScript(.jsx) 프로젝트라면 이 문서의 코드에서 <strong>타입 부분만 빼면</strong> 같은 규칙으로 쓸 수 있습니다.</li></ul></section><section id="section-1"><h2><span class="section-no">02</span> props 타입 정의</h2><p>props 타입은 컴포넌트 바로 위에 <code>type</code>으로 정의하고, 이름은 <code>컴포넌트명 + Props</code>로 짓습니다. <code>interface</code>도 쓸 수 있지만 <strong>한 프로젝트 안에서는 한 가지로 통일</strong>합니다. 이 문서는 유니온 타입을 함께 쓰기 쉬운 <code>type</code>을 기준으로 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Badge.tsx</span>
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ReactNode</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">BadgeProps</span> = {
  <span class="hljs-attr">tone</span>?: <span class="hljs-string">&#39;default&#39;</span> | <span class="hljs-string">&#39;primary&#39;</span> | <span class="hljs-string">&#39;danger&#39;</span> <span class="hljs-comment">// 정해진 값만 받습니다.</span>
  <span class="hljs-attr">icon</span>?: <span class="hljs-title class_">ReactNode</span> <span class="hljs-comment">// 선택 props는 ?를 붙입니다.</span>
  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ReactNode</span> <span class="hljs-comment">// 태그 사이 내용</span>
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Badge</span>(<span class="hljs-params">{ tone = <span class="hljs-string">&#39;default&#39;</span>, icon, children }: <span class="hljs-title class_">BadgeProps</span></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">badge</span> <span class="hljs-attr">badge--</span>\${<span class="hljs-attr">tone</span>}\`}&gt;</span>
      {icon}
      {children}
    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
  )
}
</code></pre><div class="table-wrap"><table><thead><tr><th>항목</th><th>작성 방법</th></tr></thead><tbody><tr><td>선택 props</td><td>이름 뒤 <code>?</code>, 기본값은 구조 분해 자리에서 <code>tone = &#39;default&#39;</code></td></tr><tr><td>정해진 값</td><td>문자열 유니온 <code>&#39;default&#39; | &#39;primary&#39;</code> — 클래스 변형(<code>badge--primary</code>)과 그대로 연결됩니다</td></tr><tr><td>태그 사이 내용</td><td><code>children: ReactNode</code></td></tr><tr><td>함수 props</td><td><code>onSelect: (id: number) =&gt; void</code></td></tr><tr><td>타입만 가져올 때</td><td><code>import type { ReactNode } from &#39;react&#39;</code></td></tr></tbody></table></div><p><code>React.FC</code>(<code>const Badge: React.FC&lt;BadgeProps&gt; = ...</code>)는 쓰지 않습니다. 매개변수에 타입을 직접 붙이는 방식이 기본값·제네릭을 쓰기 쉽고, React 공식 문서의 예제도 이 방식입니다.</p><h3>기본 태그 속성 이어받기</h3><p>버튼·입력창처럼 기본 태그를 감싸는 컴포넌트는 <code>ComponentPropsWithoutRef&lt;&#39;태그&#39;&gt;</code>로 원래 속성(<code>type</code>, <code>disabled</code>, <code>aria-*</code> 등)을 모두 받을 수 있게 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Button.tsx</span>
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ComponentPropsWithoutRef</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>

<span class="hljs-keyword">type</span> <span class="hljs-title class_">ButtonProps</span> = <span class="hljs-title class_">ComponentPropsWithoutRef</span>&lt;<span class="hljs-string">&#39;button&#39;</span>&gt; &amp; {
  <span class="hljs-attr">variant</span>?: <span class="hljs-string">&#39;primary&#39;</span> | <span class="hljs-string">&#39;line&#39;</span>
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Button</span>(<span class="hljs-params">{ variant = <span class="hljs-string">&#39;primary&#39;</span>, className = <span class="hljs-string">&#39;&#39;</span>, ...rest }: <span class="hljs-title class_">ButtonProps</span></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">button</span> <span class="hljs-attr">button--</span>\${<span class="hljs-attr">variant</span>} \${<span class="hljs-attr">className</span>}\`<span class="hljs-attr">.trim</span>()}
      {<span class="hljs-attr">...rest</span>}
    /&gt;</span></span>
  )
}
</code></pre><p><code>&lt;Button disabled aria-label=&quot;닫기&quot; onClick={handleClose}&gt;</code>처럼 쓰면 원래 <code>button</code>의 속성이 그대로 전달되고, 오타나 없는 속성은 편집기에서 바로 오류로 표시됩니다.</p></section>`,2),a(`section`,l,[p[2]||=n(`<h2><span class="section-no">03</span> 상태·이벤트·ref 타입</h2><p>초기값만으로 타입을 알 수 있으면 타입을 생략하고, <strong>빈 배열이나 <code>null</code>로 시작할 때만</strong> 제네릭으로 타입을 적습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> [keyword, setKeyword] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#39;&#39;</span>) <span class="hljs-comment">// string으로 추론</span>
<span class="hljs-keyword">const</span> [notices, setNotices] = useState&lt;<span class="hljs-title class_">Notice</span>[]&gt;([]) <span class="hljs-comment">// 빈 배열은 타입을 적습니다.</span>
<span class="hljs-keyword">const</span> [selected, setSelected] = useState&lt;<span class="hljs-title class_">Notice</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>) <span class="hljs-comment">// 없을 수 있는 값</span>
</code></pre><p><code>useState([])</code>처럼 타입 없이 빈 배열로 시작하면 <code>never[]</code>로 추론되어, 나중에 데이터를 넣을 때 오류가 납니다.</p><p>이벤트 처리 함수는 <code>react</code>의 이벤트 타입에 <strong>요소 종류</strong>를 함께 적습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ChangeEvent</span>, <span class="hljs-title class_">FormEvent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>

<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleChange</span>(<span class="hljs-params"><span class="hljs-attr">event</span>: <span class="hljs-title class_">ChangeEvent</span>&lt;<span class="hljs-title class_">HTMLInputElement</span>&gt;</span>) {
  <span class="hljs-title function_">setKeyword</span>(event.<span class="hljs-property">target</span>.<span class="hljs-property">value</span>)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleSubmit</span>(<span class="hljs-params"><span class="hljs-attr">event</span>: <span class="hljs-title class_">FormEvent</span>&lt;<span class="hljs-title class_">HTMLFormElement</span>&gt;</span>) {
  event.<span class="hljs-title function_">preventDefault</span>()
}
</code></pre><div class="table-wrap"><table><thead><tr><th>이벤트</th><th>타입</th></tr></thead><tbody><tr><td>입력값 변경</td><td><code>ChangeEvent&lt;HTMLInputElement&gt;</code> (select는 <code>HTMLSelectElement</code>)</td></tr><tr><td>폼 전송</td><td><code>FormEvent&lt;HTMLFormElement&gt;</code></td></tr><tr><td>클릭</td><td><code>MouseEvent&lt;HTMLButtonElement&gt;</code></td></tr><tr><td>키보드</td><td><code>KeyboardEvent&lt;HTMLInputElement&gt;</code></td></tr></tbody></table></div><p>이벤트 함수를 JSX 안에 바로 쓰면(<code>onChange={(event) =&gt; ...}</code>) 타입이 자동으로 붙으므로 따로 적지 않아도 됩니다.</p><p>DOM 요소를 직접 다룰 때는 <code>useRef</code>에 요소 타입을 적고 <code>null</code>로 시작합니다. 화면에 그려지기 전에는 <code>null</code>이므로 <code>?.</code>로 접근합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> inputRef = useRef&lt;<span class="hljs-title class_">HTMLInputElement</span>&gt;(<span class="hljs-literal">null</span>)

<span class="hljs-keyword">function</span> <span class="hljs-title function_">focusInput</span>(<span class="hljs-params"></span>) {
  inputRef.<span class="hljs-property">current</span>?.<span class="hljs-title function_">focus</span>()
}

<span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{inputRef}</span> /&gt;</span></span>
)
</code></pre><p>React 19부터는 부모가 넘긴 <code>ref</code>를 일반 props처럼 받을 수 있습니다. React 18 이하 프로젝트에서는 <code>forwardRef</code>로 감싸야 하므로 프로젝트의 React 버전을 먼저 확인합니다.</p>`,11),r(g,null,{default:e(()=>[r(m,null,{default:e(()=>[...p[0]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-keyword`},`function`),i(),a(`span`,{class:`hljs-title function_`},`NoticeItem`),i(`(`),a(`span`,{class:`hljs-params`},[a(`span`,{class:`hljs-attr`},`props`),i(`: `),a(`span`,{class:`hljs-built_in`},`any`)]),i(`) {
  `),a(`span`,{class:`hljs-keyword`},`const`),i(` box = `),a(`span`,{class:`hljs-variable language_`},`document`),i(`.`),a(`span`,{class:`hljs-title function_`},`querySelector`),i(`(`),a(`span`,{class:`hljs-string`},`'.notice'`),i(`) `),a(`span`,{class:`hljs-keyword`},`as`),i(),a(`span`,{class:`hljs-title class_`},`HTMLDivElement`),i(`
  `),a(`span`,{class:`hljs-keyword`},`const`),i(` title = props.`),a(`span`,{class:`hljs-property`},`notice`),i(`!.`),a(`span`,{class:`hljs-property`},`title`),i(`
}
`)])],-1),a(`p`,null,[a(`code`,null,`any`),i(`, 타입 단언(`),a(`code`,null,`as`),i(`), 강제 단언(`),a(`code`,null,`!`),i(`)으로 오류를 감추면 타입 검사가 의미 없어집니다.`)],-1)]]),_:1}),r(h,null,{default:e(()=>[...p[1]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-keyword`},`type`),i(),a(`span`,{class:`hljs-title class_`},`NoticeItemProps`),i(` = { `),a(`span`,{class:`hljs-attr`},`notice`),i(`?: `),a(`span`,{class:`hljs-title class_`},`Notice`),i(` }

`),a(`span`,{class:`hljs-keyword`},`function`),i(),a(`span`,{class:`hljs-title function_`},`NoticeItem`),i(`(`),a(`span`,{class:`hljs-params`},[i(`{ notice }: `),a(`span`,{class:`hljs-title class_`},`NoticeItemProps`)]),i(`) {
  `),a(`span`,{class:`hljs-keyword`},`const`),i(` boxRef = useRef<`),a(`span`,{class:`hljs-title class_`},`HTMLDivElement`),i(`>(`),a(`span`,{class:`hljs-literal`},`null`),i(`)
  `),a(`span`,{class:`hljs-keyword`},`if`),i(` (!notice) `),a(`span`,{class:`hljs-keyword`},`return`),i(),a(`span`,{class:`hljs-literal`},`null`),i(`
  `),a(`span`,{class:`hljs-keyword`},`return`),i(` (
    `),a(`span`,{class:`language-xml`},[a(`span`,{class:`hljs-tag`},[i(`<`),a(`span`,{class:`hljs-name`},`div`),i(),a(`span`,{class:`hljs-attr`},`ref`),i(`=`),a(`span`,{class:`hljs-string`},`{boxRef}`),i(`>`)]),i(`
      {notice.title}
    `),a(`span`,{class:`hljs-tag`},[i(`</`),a(`span`,{class:`hljs-name`},`div`),i(`>`)])]),i(`
  )
}
`)])],-1),a(`p`,null,[i(`타입을 정의하고, 값이 없을 수 있으면 조건문으로 먼저 걸러 냅니다. 요소는 `),a(`code`,null,`useRef`),i(`로 가져옵니다.`)],-1)]]),_:1})]),_:1})]),a(`section`,u,[p[5]||=n(`<h2><span class="section-no">04</span> Hooks 규칙</h2><ul><li>Hook(<code>useState</code>, <code>useEffect</code> 등)은 <strong>컴포넌트 최상위에서만</strong> 호출합니다. 조건문·반복문·중첩 함수 안에서 호출하지 않습니다.</li><li>직접 만든 Hook은 이름을 <code>use</code>로 시작하고, 파일도 <code>useScrollLock.ts</code>처럼 Hook 이름으로 짓습니다. JSX가 없으면 확장자는 <code>.ts</code>입니다.</li><li><code>useEffect</code>의 의존성 배열에는 효과 안에서 쓰는 값을 빠짐없이 넣고, 등록한 이벤트는 정리 함수에서 해제합니다.</li></ul>`,2),r(g,null,{default:e(()=>[r(m,null,{default:e(()=>[...p[3]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-keyword`},`function`),i(),a(`span`,{class:`hljs-title function_`},`SearchBox`),i(`(`),a(`span`,{class:`hljs-params`},[i(`{ isOpen }: `),a(`span`,{class:`hljs-title class_`},`SearchBoxProps`)]),i(`) {
  `),a(`span`,{class:`hljs-keyword`},`if`),i(` (isOpen) {
    `),a(`span`,{class:`hljs-keyword`},`const`),i(` [keyword, setKeyword] = `),a(`span`,{class:`hljs-title function_`},`useState`),i(`(`),a(`span`,{class:`hljs-string`},`''`),i(`)
  }
  `),a(`span`,{class:`hljs-title function_`},`useEffect`),i(`(`),a(`span`,{class:`hljs-function`},`() =>`),i(` {
    `),a(`span`,{class:`hljs-variable language_`},`window`),i(`.`),a(`span`,{class:`hljs-title function_`},`addEventListener`),i(`(`),a(`span`,{class:`hljs-string`},`'resize'`),i(`, handleResize)
  })
}
`)])],-1),a(`p`,null,`조건 안에서 Hook을 호출하고, 등록한 이벤트를 해제하지 않습니다.`,-1)]]),_:1}),r(h,null,{default:e(()=>[...p[4]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-keyword`},`function`),i(),a(`span`,{class:`hljs-title function_`},`SearchBox`),i(`(`),a(`span`,{class:`hljs-params`},[i(`{ isOpen }: `),a(`span`,{class:`hljs-title class_`},`SearchBoxProps`)]),i(`) {
  `),a(`span`,{class:`hljs-keyword`},`const`),i(` [keyword, setKeyword] = `),a(`span`,{class:`hljs-title function_`},`useState`),i(`(`),a(`span`,{class:`hljs-string`},`''`),i(`)

  `),a(`span`,{class:`hljs-title function_`},`useEffect`),i(`(`),a(`span`,{class:`hljs-function`},`() =>`),i(` {
    `),a(`span`,{class:`hljs-keyword`},`const`),i(),a(`span`,{class:`hljs-title function_`},`handleResize`),i(` = (`),a(`span`,{class:`hljs-params`}),i(`) => { `),a(`span`,{class:`hljs-comment`},`/* ... */`),i(` }
    `),a(`span`,{class:`hljs-variable language_`},`window`),i(`.`),a(`span`,{class:`hljs-title function_`},`addEventListener`),i(`(`),a(`span`,{class:`hljs-string`},`'resize'`),i(`, handleResize)
    `),a(`span`,{class:`hljs-keyword`},`return`),i(),a(`span`,{class:`hljs-function`},`() =>`),i(),a(`span`,{class:`hljs-variable language_`},`window`),i(`.`),a(`span`,{class:`hljs-title function_`},`removeEventListener`),i(`(`),a(`span`,{class:`hljs-string`},`'resize'`),i(`, handleResize)
  }, [])
}
`)])],-1)]]),_:1})]),_:1})]),a(`section`,d,[p[8]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),i(` className과 스타일`)],-1),p[9]||=a(`p`,null,[i(`JSX에서는 `),a(`code`,null,`class`),i(` 대신 `),a(`code`,null,`className`),i(`을 씁니다. 클래스명 규칙은 HTML과 같습니다(하이픈, 변형 `),a(`code`,null,`--`),i(`, 상태 `),a(`code`,null,`is-`),i(`).`)],-1),r(g,null,{default:e(()=>[r(m,null,{default:e(()=>[...p[6]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[i(`<div `),a(`span`,{class:`hljs-keyword`},`class`),i(`=`),a(`span`,{class:`hljs-string`},`"accordion"`),i(` style=`),a(`span`,{class:`hljs-string`},`"margin-top: 10px"`),i(`>
`),a(`span`,{class:`language-xml`},[a(`span`,{class:`hljs-tag`},[i(`<`),a(`span`,{class:`hljs-name`},`div`),i(),a(`span`,{class:`hljs-attr`},`className`),i(`=`),a(`span`,{class:`hljs-string`},`{`),i(`'`),a(`span`,{class:`hljs-attr`},`accordion`),i(`' + (`),a(`span`,{class:`hljs-attr`},`open`),i(` ? ' `),a(`span`,{class:`hljs-attr`},`is-open`),i(`' `),a(`span`,{class:`hljs-attr`},`:`),i(` '')}>`)]),i(`
`)])])],-1)]]),_:1}),r(h,null,{default:e(()=>[...p[7]||=[a(`pre`,{class:`doc-code`,tabindex:`0`},[a(`code`,{class:`hljs`},[i(`<div className={`),a(`span`,{class:`hljs-string`},[i("`accordion "),a(`span`,{class:`hljs-subst`},[i("${isOpen ? "),a(`span`,{class:`hljs-string`},`'is-open'`),i(` : `),a(`span`,{class:`hljs-string`},`''`),i(`}`)]),i("`")]),i(`}>
`),a(`span`,{class:`language-xml`},[a(`span`,{class:`hljs-tag`},[i(`<`),a(`span`,{class:`hljs-name`},`div`),i(),a(`span`,{class:`hljs-attr`},`className`),i(`=`),a(`span`,{class:`hljs-string`},`"accordion"`),i(),a(`span`,{class:`hljs-attr`},`style`),i(`=`),a(`span`,{class:`hljs-string`},`{{`),i(),a(`span`,{class:`hljs-attr`},`marginTop:`),i(),a(`span`,{class:`hljs-attr`},`10`),i(` }}>`)]),i(`
`)])])],-1),a(`p`,null,`인라인 style은 객체로 쓰고, 속성 이름은 camelCase입니다. TypeScript가 속성 이름과 값을 검사해 줍니다. 가능하면 클래스로 처리합니다.`,-1)]]),_:1})]),_:1})]),p[11]||=n(`<section id="section-5"><h2><span class="section-no">06</span> 상태는 필요한 가장 가까운 곳에</h2><div class="table-wrap"><table><thead><tr><th>범위</th><th>위치</th></tr></thead><tbody><tr><td>한 컴포넌트 안</td><td><code>useState</code></td></tr><tr><td>형제 컴포넌트가 함께 사용</td><td>공통 부모로 올리고 props로 전달</td></tr><tr><td>여러 단계 아래까지 필요</td><td>Context (테마, 로그인 정보 등)</td></tr></tbody></table></div><p>props를 여러 단계 그대로 전달해야 한다면 Context나 상태 관리 도구를 검토합니다. Context도 <code>createContext&lt;Theme | null&gt;(null)</code>처럼 값의 타입을 적습니다.</p></section><section id="section-6"><h2><span class="section-no">07</span> Vue와 대응되는 개념</h2><div class="table-wrap"><table><thead><tr><th>Vue 3</th><th>React (TSX)</th></tr></thead><tbody><tr><td><code>defineProps&lt;Props&gt;()</code></td><td><code>function Item({ ... }: ItemProps)</code></td></tr><tr><td><code>defineEmits&lt;{ select: [id: number] }&gt;()</code></td><td><code>onSelect: (id: number) =&gt; void</code> 함수 props</td></tr><tr><td><code>ref</code>, <code>reactive</code></td><td><code>useState</code> (빈 배열·<code>null</code>이면 <code>useState&lt;타입&gt;()</code>)</td></tr><tr><td><code>computed</code></td><td>렌더링 중 계산, 비용이 크면 <code>useMemo</code></td></tr><tr><td><code>watch</code>, <code>onMounted</code></td><td><code>useEffect</code></td></tr><tr><td>템플릿 ref <code>useTemplateRef&lt;HTMLInputElement&gt;(&#39;input&#39;)</code></td><td><code>useRef&lt;HTMLInputElement&gt;(null)</code></td></tr><tr><td><code>&lt;slot /&gt;</code></td><td><code>children: ReactNode</code></td></tr><tr><td>composables (<code>useToc</code>)</td><td>커스텀 Hook (<code>useToc</code>)</td></tr><tr><td><code>v-if</code>, <code>v-for</code></td><td><code>&amp;&amp;</code>·삼항 연산자, <code>map</code></td></tr><tr><td><code>class</code></td><td><code>className</code></td></tr></tbody></table></div></section>`,2)])}}};export{v as category,O as default,S as duration,y as group,f as id,C as keyProperty,_ as lead,h as navTitle,p as order,D as references,E as related,w as status,g as summary,x as tags,m as title,b as topic,T as updated};