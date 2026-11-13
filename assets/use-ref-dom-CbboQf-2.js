const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./UseRefDomDemo-NPVCNlpu.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./UseRefDomDemo-Bk54G3Ur.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-Dxflp_jg.js";import{t as u}from"./ReactIsland-tK0hPT1Q.js";var d=`import { useId, useRef, useState } from 'react'

export default function SearchBox({ label, placeholder, onSearch }) {
  const id = useId()
  const inputRef = useRef(null)
  const [keyword, setKeyword] = useState('')

  const handleClear = () => {
    setKeyword('')
    // 이 컴포넌트가 그린 input에만 포커스합니다. 화면에 두 번 그려도 각자 자기 것을 씁니다.
    inputRef.current?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(keyword)
  }

  return (
    <form className="search-box" role="search" onSubmit={handleSubmit}>
      {/* id는 고정 문자열 대신 useId로 만듭니다. */}
      <label htmlFor={\`\${id}-keyword\`}>{label}</label>
      <div className="search-box-row">
        <input
          ref={inputRef}
          id={\`\${id}-keyword\`}
          type="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder={placeholder}
        />
        {keyword && (
          <button type="button" className="search-box-clear" onClick={handleClear}>
            지우기
          </button>
        )}
        <button type="submit">검색</button>
      </div>
    </form>
  )
}`,f=`import { useId, useRef, useState, type FormEvent } from 'react'

type SearchBoxProps = {
  label: string
  placeholder?: string
  onSearch: (keyword: string) => void
}

export default function SearchBox({ label, placeholder, onSearch }: SearchBoxProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [keyword, setKeyword] = useState('')

  const handleClear = () => {
    setKeyword('')
    // 이 컴포넌트가 그린 input에만 포커스합니다. 화면에 두 번 그려도 각자 자기 것을 씁니다.
    inputRef.current?.focus()
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(keyword)
  }

  return (
    <form className="search-box" role="search" onSubmit={handleSubmit}>
      {/* id는 고정 문자열 대신 useId로 만듭니다. */}
      <label htmlFor={\`\${id}-keyword\`}>{label}</label>
      <div className="search-box-row">
        <input
          ref={inputRef}
          id={\`\${id}-keyword\`}
          type="search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder={placeholder}
        />
        {keyword && (
          <button type="button" className="search-box-clear" onClick={handleClear}>
            지우기
          </button>
        )}
        <button type="submit">검색</button>
      </div>
    </form>
  )
}`,p=`import { useState } from 'react'
import SearchBox from './SearchBox'

// 같은 SearchBox를 두 번 그려도 ref·id가 인스턴스마다 따로 생깁니다.
export default function SearchPage() {
  const [keyword, setKeyword] = useState('')

  return (
    <>
      <header className="page-header">
        <SearchBox label="통합검색" placeholder="메뉴 검색" onSearch={setKeyword} />
      </header>
      <main className="page-body">
        <p>‘{keyword}’ 검색 결과</p>
        <SearchBox label="결과 내 재검색" placeholder="거래처 검색" onSearch={setKeyword} />
      </main>
    </>
  )
}`,m=p,h=`import { useLayoutEffect, useRef, useState } from 'react'

// 하단 고정 버튼 영역: 실제 높이를 재서 같은 높이의 빈 자리를 만들어 본문이 가려지지 않게 합니다.
export default function FixedBottomBar({ children }) {
  const barRef = useRef(null)
  const [height, setHeight] = useState(0)

  // 그려진 직후, 화면에 칠하기 전에 잽니다. (재고 바로 레이아웃을 바꾸므로 깜빡임 방지)
  useLayoutEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => setHeight(bar.getBoundingClientRect().height)
    update()

    // 글자 크기·줄바꿈으로 높이가 바뀌면 다시 잽니다.
    const observer = new ResizeObserver(update)
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="fixed-bottom-space" style={{ height }} aria-hidden="true" />
      <div ref={barRef} className="fixed-bottom-bar">
        {children}
      </div>
    </>
  )
}`,g=`import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

type FixedBottomBarProps = {
  children: ReactNode
}

// 하단 고정 버튼 영역: 실제 높이를 재서 같은 높이의 빈 자리를 만들어 본문이 가려지지 않게 합니다.
export default function FixedBottomBar({ children }: FixedBottomBarProps) {
  const barRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // 그려진 직후, 화면에 칠하기 전에 잽니다. (재고 바로 레이아웃을 바꾸므로 깜빡임 방지)
  useLayoutEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => setHeight(bar.getBoundingClientRect().height)
    update()

    // 글자 크기·줄바꿈으로 높이가 바뀌면 다시 잽니다.
    const observer = new ResizeObserver(update)
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="fixed-bottom-space" style={{ height }} aria-hidden="true" />
      <div ref={barRef} className="fixed-bottom-bar">
        {children}
      </div>
    </>
  )
}`,_=[{label:`SearchBox.jsx`,language:`javascript`,code:d},{label:`SearchPage.jsx`,language:`javascript`,code:p},{label:`FixedBottomBar.jsx`,language:`javascript`,code:h}],v=[{label:`SearchBox.tsx`,language:`typescript`,code:f},{label:`SearchPage.tsx`,language:`typescript`,code:m},{label:`FixedBottomBar.tsx`,language:`typescript`,code:g}],y={class:`doc-body`},b={id:`section-0`},x={id:`section-1`},S={id:`section-2`},C={id:`section-3`},w={id:`section-4`},T={id:`section-7`},E=`use-ref-dom`,D=6,O=`입력창에 포커스를 주거나 크기를 재야 할 때 (useRef)`,k=`DOM에 직접 접근(useRef)`,A=`React 컴포넌트 안에서 document.querySelector로 요소를 찾다가 같은 컴포넌트를 두 번 그렸을 때 엉뚱한 입력창에 포커스가 가는 문제를 useRef로 해결하고, useLayoutEffect·ResizeObserver로 크기 재기, useId로 중복 id 막기까지 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,j=`아래 검색창의 지우기를 눌렀는데 커서가 위쪽 검색창으로 간다면?
React에서는 요소를 찾지 말고, useRef로 자기 요소를 직접 받아 쓰세요.
`,M=`Hooks`,N=`ref`,P=[`React`,`useRef`,`ref`,`focus`,`querySelector`,`getBoundingClientRect`,`useLayoutEffect`,`ResizeObserver`,`useId`,`JSX`,`TSX`],F=`중급`,I=`약 12분`,L=[`useState`,`useEffect`,`이벤트 처리`],R=`ref={inputRef}`,z=`published`,B=`2026-11-13`,V=[`effect-cleanup`,`controlled-input`,`state-snapshot`],H=[{title:`React — useRef`,url:`https://ko.react.dev/reference/react/useRef`},{title:`React — Ref로 DOM 조작하기`,url:`https://ko.react.dev/learn/manipulating-the-dom-with-refs`},{title:`React — useLayoutEffect`,url:`https://ko.react.dev/reference/react/useLayoutEffect`},{title:`React — useId`,url:`https://ko.react.dev/reference/react/useId`},{title:`MDN — ResizeObserver`,url:`https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver`}],U={__name:`use-ref-dom`,setup(d,{expose:f}){f({frontmatter:{id:`use-ref-dom`,order:6,title:`입력창에 포커스를 주거나 크기를 재야 할 때 (useRef)`,navTitle:`DOM에 직접 접근(useRef)`,summary:`React 컴포넌트 안에서 document.querySelector로 요소를 찾다가 같은 컴포넌트를 두 번 그렸을 때 엉뚱한 입력창에 포커스가 가는 문제를 useRef로 해결하고, useLayoutEffect·ResizeObserver로 크기 재기, useId로 중복 id 막기까지 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`아래 검색창의 지우기를 눌렀는데 커서가 위쪽 검색창으로 간다면?
React에서는 요소를 찾지 말고, useRef로 자기 요소를 직접 받아 쓰세요.
`,group:`Hooks`,topic:`ref`,tags:[`React`,`useRef`,`ref`,`focus`,`querySelector`,`getBoundingClientRect`,`useLayoutEffect`,`ResizeObserver`,`useId`,`JSX`,`TSX`],level:`중급`,duration:`약 12분`,prerequisites:[`useState`,`useEffect`,`이벤트 처리`],keyProperty:`ref={inputRef}`,status:`published`,updated:`2026-11-13`,related:[`effect-cleanup`,`controlled-input`,`state-snapshot`],references:[{title:`React — useRef`,url:`https://ko.react.dev/reference/react/useRef`},{title:`React — Ref로 DOM 조작하기`,url:`https://ko.react.dev/learn/manipulating-the-dom-with-refs`},{title:`React — useLayoutEffect`,url:`https://ko.react.dev/reference/react/useLayoutEffect`},{title:`React — useId`,url:`https://ko.react.dev/reference/react/useId`},{title:`MDN — ResizeObserver`,url:`https://developer.mozilla.org/ko/docs/Web/API/ResizeObserver`}]}});let p=()=>l(()=>import(`./UseRefDomDemo-NPVCNlpu.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocSteps`),g=s(`DocInspect`),E=s(`CodePanel`),D=s(`DocTab`),O=s(`DocTabs`),k=s(`DocPractice`);return e(),i(`div`,y,[r(`section`,b,[d[2]||=c(`<h2><span class="section-no">01</span> 문제 상황</h2><p>통합검색 결과 페이지에 검색창 컴포넌트(<code>SearchBox</code>)를 두 번 넣었습니다. 위에는 헤더의 <strong>통합검색</strong>, 결과 목록 위에는 <strong>결과 내 재검색</strong>입니다. 지우기 버튼을 누르면 입력을 비우고 커서를 입력창에 두도록 jQuery 때처럼 <code>document.querySelector(&#39;#searchKeyword&#39;).focus()</code>를 썼습니다. 그런데 <strong>결과 내 재검색에서 지우기를 누르면 커서가 헤더 검색창으로 올라갑니다.</strong> 라벨을 눌러도 마찬가지입니다.</p><p>검색창이 하나뿐인 페이지에서는 문제가 없어서, 같은 컴포넌트를 두 군데 쓴 화면의 QA에서 이런 형태로 돌아옵니다.</p>`,3),a(f,{title:`통합검색 결과: 결과 내 재검색의 지우기를 누르면 헤더 검색창으로 커서 이동`,env:`전체 브라우저 · SearchBox를 한 화면에 두 번 쓴 페이지`,expected:`지우기를 누른 검색창의 입력이 비워지고 그 입력창에 커서가 놓임`,actual:`입력은 비워지지만 커서가 헤더의 통합검색 입력창으로 이동하고, 라벨을 눌러도 헤더 입력창이 선택됨`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`통합검색에서 ‘관리비’를 검색해 결과 페이지로 이동합니다.`),r(`li`,null,`결과 내 재검색 입력창에 ‘임대료’를 입력합니다.`),r(`li`,null,`결과 내 재검색의 ‘지우기’를 누르고 커서 위치를 확인합니다.`),r(`li`,null,`‘결과 내 재검색’ 라벨을 눌러 봅니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`컴포넌트 안에서는 `),r(`code`,null,`document.querySelector`),o(`로 요소를 찾지 말고 `),r(`strong`,null,[r(`code`,null,`useRef`),o(`로 만든 ref를 요소에 연결해서`)]),o(` 씁니다. `),r(`code`,null,`inputRef.current`),o(`는 항상 이 컴포넌트가 그린 그 요소입니다.`)],-1)]]),_:1})]),r(`section`,x,[d[3]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[4]||=r(`p`,null,`실제 React로 동작하는 예제입니다. 같은 검색 패널을 두 번 그렸습니다. 두 번째 패널에서 ‘지우기’와 ‘높이 재기’를 눌러 보세요.`,-1),a(u,{load:p})]),r(`section`,S,[d[6]||=c(`<h2><span class="section-no">03</span> 왜 엉뚱한 요소를 잡을까요?</h2><p><code>document.querySelector</code>는 <strong>문서 전체에서 조건에 맞는 첫 번째 요소</strong> 하나만 돌려줍니다. 컴포넌트는 같은 마크업을 여러 번 찍어 내는 틀이라, 고정 id나 클래스로 찾으면 몇 번째 컴포넌트에서 호출하든 맨 앞의 요소가 잡힙니다. 같은 id가 둘이면 HTML 자체가 잘못된 것이어서 <code>label</code>의 <code>for</code>도 첫 번째 입력창으로 연결됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 문제: 어느 SearchBox에서 눌러도 문서의 첫 번째 #searchKeyword</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">handleClear</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-title function_">setKeyword</span>(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#searchKeyword&#39;</span>).<span class="hljs-title function_">focus</span>()
}
</code></pre><p>찾는 시점도 문제입니다. 컴포넌트 함수가 실행되는 동안(렌더 중)에는 요소가 아직 화면에 없을 수 있고, 조건부로 그리는 요소는 사라졌다 다시 생기면 다른 요소가 됩니다. 또 다른 컴포넌트의 요소까지 마음대로 찾을 수 있어 어디서 무엇을 바꾸는지 추적하기 어려워집니다.</p><p><code>useRef</code>로 만든 ref를 <code>ref={inputRef}</code>로 연결하면, React가 요소를 화면에 붙일 때 <code>inputRef.current</code>에 그 요소를 넣고 뗄 때 <code>null</code>로 되돌립니다. 컴포넌트를 두 번 그리면 ref도 두 개가 따로 생깁니다.</p>`,5),a(h,null,{default:n(()=>[...d[5]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`ref 만들기`),o(),r(`code`,null,`const inputRef = useRef(null)`)]),r(`li`,null,[r(`strong`,null,`요소에 연결`),o(),r(`code`,null,`<input ref={inputRef} />`)]),r(`li`,null,[r(`strong`,null,`이벤트·효과에서 사용`),o(),r(`code`,null,`inputRef.current?.focus()`)])],-1)]]),_:1}),d[7]||=r(`p`,null,[o(`크기를 잴 때도 같습니다. `),r(`code`,null,`panelRef.current.getBoundingClientRect()`),o(`로 자기 요소를 잽니다. 잰 값으로 바로 레이아웃을 바꿔야 하면 `),r(`code`,null,`useLayoutEffect`),o(`에서 잽니다. 이 효과는 화면에 칠하기 전에 실행되어, 잘못된 위치로 한 번 그려졌다가 움직이는 깜빡임이 없습니다. 그 밖의 경우는 `),r(`code`,null,`useEffect`),o(`로 충분합니다.`)],-1)]),r(`section`,C,[d[9]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[10]||=r(`p`,null,[o(`엉뚱한 요소가 잡힐 때는 `),r(`strong`,null,`같은 id·클래스가 몇 개인지`),o(`, `),r(`strong`,null,`실제로 포커스가 어디 있는지`),o(`를 확인합니다. React DevTools 단계는 내 프로젝트의 개발 서버(`),r(`code`,null,`npm run dev`),o(`)에서 확인하세요. 배포 빌드에서는 컴포넌트 이름이 짧게 바뀌어 이 사이트의 예제로는 따라 하기 어렵습니다.`)],-1),a(g,null,{default:n(()=>[...d[8]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`Console에서 중복 id 세기`),o(` Console에 `),r(`code`,null,`document.querySelectorAll('#searchKeyword').length`),o(`를 입력합니다. 1보다 크면 같은 id가 여러 개입니다. 위 예제의 문제 쪽은 `),r(`code`,null,`#demo-ref-keyword`),o(`로 확인하면 2가 나옵니다.`)]),r(`li`,null,[r(`strong`,null,`Elements에서 같은 id 찾기`),o(` Elements 패널에서 Ctrl+F(Mac은 Cmd+F)를 누르고 `),r(`code`,null,`#searchKeyword`),o(`를 입력하면 일치하는 요소 수가 표시되고 하나씩 이동할 수 있습니다.`)]),r(`li`,null,[r(`strong`,null,`실제 포커스 위치 확인`),o(` Console 위의 눈 모양 아이콘(Create live expression)을 눌러 `),r(`code`,null,`document.activeElement`),o(`를 추가합니다. 지우기를 누른 뒤 표시된 요소에 마우스를 올리면 화면에서 강조되어, 어느 입력창에 포커스가 갔는지 바로 보입니다.`)]),r(`li`,null,[r(`strong`,null,`React DevTools에서 ref 확인`),o(` React Developer Tools 확장의 Components 탭에서 SearchBox를 선택하면 오른쪽 hooks 목록에 `),r(`code`,null,`Ref`),o(`가 보입니다. 값이 `),r(`code`,null,`input`),o(` 요소로 표시되면 연결된 것이고, `),r(`code`,null,`null`),o(`이면 `),r(`code`,null,`ref={…}`),o(`가 빠졌거나 요소가 아직 없는 것입니다.`)])],-1)]]),_:1})]),r(`section`,w,[d[11]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[12]||=r(`p`,null,`JSX와 TSX 중 프로젝트에 맞는 탭을 고르세요. 고른 탭은 다른 React 문서에서도 유지됩니다.`,-1),a(O,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(D,{label:`JSX`},{default:n(()=>[a(E,{tabs:t(_)},null,8,[`tabs`])]),_:1}),a(D,{label:`TSX`},{default:n(()=>[a(E,{tabs:t(v)},null,8,[`tabs`])]),_:1})]),_:1}),d[13]||=c(`<ul><li><strong>ref는 이벤트 처리 함수나 효과 안에서 씁니다.</strong> 이때는 요소가 화면에 붙어 있으므로 <code>inputRef.current</code>가 요소입니다. 조건부로 그리는 요소도 있으니 <code>?.</code>로 접근합니다.</li><li><strong>id는 <code>useId</code>로 만듭니다.</strong> 컴포넌트마다 다른 값이 만들어져 <code>label</code>의 <code>htmlFor</code>, <code>aria-describedby</code>가 자기 입력창에 연결됩니다.</li><li><strong>TSX는 요소 타입을 적습니다.</strong> <code>useRef&lt;HTMLInputElement&gt;(null)</code>처럼 쓰면 <code>inputRef.current?.focus()</code>, <code>value</code> 등이 타입 검사를 받습니다.</li></ul>`,1)]),d[16]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>요소를 직접 다뤄야 하는 경우는 모두 ref로 해결합니다. 아래 경우도 같은 방법을 씁니다.</p><h3>자식 컴포넌트의 입력창에 포커스</h3><p>React 19부터는 함수 컴포넌트가 <code>ref</code>를 일반 props처럼 받아 안쪽 요소에 넘길 수 있습니다. React 18 이하는 <code>forwardRef</code>로 감싸야 하며, React 19에서도 <code>forwardRef</code>는 그대로 동작합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// React 19: ref를 props로 받습니다.</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">TextField</span>(<span class="hljs-params">{ label, ref, ...rest }</span>) {
  <span class="hljs-keyword">const</span> id = <span class="hljs-title function_">useId</span>()
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">htmlFor</span>=<span class="hljs-string">{id}</span>&gt;</span>{label}<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{ref}</span> <span class="hljs-attr">id</span>=<span class="hljs-string">{id}</span> {<span class="hljs-attr">...rest</span>} /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}

<span class="hljs-comment">// 부모: 저장 실패 시 이름 입력창으로 이동</span>
<span class="hljs-keyword">const</span> nameRef = <span class="hljs-title function_">useRef</span>(<span class="hljs-literal">null</span>)
&lt;<span class="hljs-title class_">TextField</span> label=<span class="hljs-string">&quot;이름&quot;</span> ref={nameRef} /&gt;
nameRef.<span class="hljs-property">current</span>?.<span class="hljs-title function_">focus</span>()
</code></pre><h3>목록의 여러 요소</h3><p>항목 수만큼 <code>useRef</code>를 만들 수는 없으니, ref 콜백으로 <code>Map</code>에 모읍니다. React 19에서는 ref 콜백이 돌려준 함수가 요소가 사라질 때 실행됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> itemsRef = <span class="hljs-title function_">useRef</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>())

&lt;li
  key={item.<span class="hljs-property">id</span>}
  ref={<span class="hljs-function">(<span class="hljs-params">node</span>) =&gt;</span> {
    itemsRef.<span class="hljs-property">current</span>.<span class="hljs-title function_">set</span>(item.<span class="hljs-property">id</span>, node)
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> itemsRef.<span class="hljs-property">current</span>.<span class="hljs-title function_">delete</span>(item.<span class="hljs-property">id</span>)
  }}
&gt;
  {item.<span class="hljs-property">name</span>}
&lt;/li&gt;

<span class="hljs-comment">// 선택한 항목으로 스크롤</span>
itemsRef.<span class="hljs-property">current</span>.<span class="hljs-title function_">get</span>(selectedId)?.<span class="hljs-title function_">scrollIntoView</span>({ <span class="hljs-attr">block</span>: <span class="hljs-string">&#39;nearest&#39;</span> })
</code></pre><h3>크기가 바뀔 때 다시 재기</h3><p>처음 한 번만 재면 글자 크기·창 크기가 바뀐 뒤 값이 틀립니다. <code>ResizeObserver</code>로 감시하고 정리 함수에서 <code>disconnect()</code>합니다(해결 코드의 FixedBottomBar).</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> observer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ResizeObserver</span>(<span class="hljs-function">(<span class="hljs-params">[entry]</span>) =&gt;</span> {
    <span class="hljs-title function_">setWidth</span>(entry.<span class="hljs-property">contentRect</span>.<span class="hljs-property">width</span>)
  })
  observer.<span class="hljs-title function_">observe</span>(boxRef.<span class="hljs-property">current</span>)
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> observer.<span class="hljs-title function_">disconnect</span>()
}, [])
</code></pre><h3>화면과 상관없는 값 보관</h3><p>타이머 id처럼 바뀌어도 화면을 다시 그릴 필요가 없는 값은 상태 대신 ref에 둡니다. <code>ref.current</code>를 바꿔도 다시 렌더링되지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> timerRef = <span class="hljs-title function_">useRef</span>(<span class="hljs-literal">null</span>)

<span class="hljs-keyword">const</span> <span class="hljs-title function_">showToast</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-title function_">setToast</span>(<span class="hljs-literal">true</span>)
  <span class="hljs-built_in">clearTimeout</span>(timerRef.<span class="hljs-property">current</span>)
  timerRef.<span class="hljs-property">current</span> = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">setToast</span>(<span class="hljs-literal">false</span>), <span class="hljs-number">2000</span>)
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>렌더 중에는 <code>ref.current</code>를 읽거나 바꾸지 않습니다.</strong> 컴포넌트 함수 본문(return 위)에서는 요소가 아직 없거나 이전 요소일 수 있습니다. 화면에 보여 줄 값이면 상태를 쓰고, ref는 이벤트 처리 함수와 효과에서만 씁니다.</li><li><strong>조건부로 그리는 요소는 <code>null</code>일 수 있습니다.</strong> <code>{open &amp;&amp; &lt;input ref={inputRef} /&gt;}</code>처럼 숨겨진 동안에는 <code>inputRef.current</code>가 <code>null</code>이므로 <code>?.</code>로 접근합니다. 열자마자 포커스하려면 효과에서 처리합니다.</li><li><strong>포커스 이동은 사용자 동작에 맞춰서 합니다.</strong> 지우기·팝업 열기·오류 항목 이동처럼 사용자가 기대하는 때만 옮깁니다. 페이지 진입 때 마음대로 옮기면 스크린 리더 사용자가 위치를 잃습니다.</li><li><strong>id가 필요하면 <code>useId</code>로 만듭니다.</strong> 고정 id는 컴포넌트를 두 번 쓰는 순간 중복됩니다. <code>useId</code> 값은 CSS 선택자나 목록 <code>key</code>로 쓰지 않습니다.</li></ul></section>`,2),r(`section`,T,[d[15]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(k,null,{default:n(()=>[...d[14]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`‘결과 내 재검색’의 지우기를 누르면 문제 쪽은 ‘상단 검색’ 입력창에, 해결 쪽은 자기 입력창에 포커스가 간다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`문제 쪽에서 ‘결과 내 재검색’ 라벨을 누르면 첫 번째 입력창이 선택되는 이유를 설명할 수 있다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`‘패널 높이 재기’에서 두 번째 패널을 재면 문제 쪽은 첫 번째 패널 높이가, 해결 쪽은 더 큰 자기 높이가 나온다.`)])])],-1)]]),_:1})])])}}};export{U as default,I as duration,M as group,E as id,R as keyProperty,j as lead,F as level,k as navTitle,D as order,L as prerequisites,H as references,V as related,z as status,A as summary,P as tags,O as title,N as topic,B as updated};