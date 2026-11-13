const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./EffectCleanupDemo-CrQS8rGp.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./EffectCleanupDemo-DUPauAo3.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-Dxflp_jg.js";import{t as u}from"./ReactIsland-tK0hPT1Q.js";var d=`import { useEffect, useRef } from 'react'

export default function LayerPopup({ open, title, onClose, children }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handleKeydown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeydown)
    document.body.classList.add('is-scroll-lock')
    closeRef.current?.focus()

    // 정리 함수: 팝업이 닫히거나(open이 false로 바뀜) 화면에서 사라질 때 실행됩니다.
    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.body.classList.remove('is-scroll-lock')
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="layer-popup" role="dialog" aria-modal="true" aria-label={title}>
      <div className="layer-popup-dialog">
        <strong className="layer-popup-title">{title}</strong>
        {children}
        <button ref={closeRef} type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  )
}`,f=`import { useEffect, useRef, type ReactNode } from 'react'

type LayerPopupProps = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

export default function LayerPopup({ open, title, onClose, children }: LayerPopupProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeydown)
    document.body.classList.add('is-scroll-lock')
    closeRef.current?.focus()

    // 정리 함수: 팝업이 닫히거나(open이 false로 바뀜) 화면에서 사라질 때 실행됩니다.
    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.body.classList.remove('is-scroll-lock')
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="layer-popup" role="dialog" aria-modal="true" aria-label={title}>
      <div className="layer-popup-dialog">
        <strong className="layer-popup-title">{title}</strong>
        {children}
        <button ref={closeRef} type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  )
}`,p=`import { useCallback, useState } from 'react'
import LayerPopup from './LayerPopup'

export default function TransactionPage() {
  const [popupOpen, setPopupOpen] = useState(false)

  // 닫기는 토글(!popup)이 아니라 false로 분명하게 씁니다.
  const handleClose = useCallback(() => setPopupOpen(false), [])

  return (
    <>
      <button type="button" onClick={() => setPopupOpen(true)}>
        거래내역상세
      </button>
      <LayerPopup open={popupOpen} title="거래내역상세" onClose={handleClose}>
        <p>거래금액 1,280,000원</p>
      </LayerPopup>
    </>
  )
}`,m=p,h=`import { useEffect, useState } from 'react'

// 토스트: 3초 뒤 자동으로 닫힙니다. 먼저 닫히면 타이머도 함께 정리합니다.
export function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return <p className="toast" role="status">{message}</p>
}

// 목록 요청: 화면을 벗어나면 진행 중인 요청을 취소합니다.
export function NoticeList() {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/notices', { signal: controller.signal })
      .then((response) => response.json())
      .then(setNotices)
      .catch((error) => {
        // 취소(AbortError)만 무시하고, 다른 오류(네트워크·응답 형식)는 남깁니다.
        if (error.name !== 'AbortError') console.error(error)
      })
    return () => controller.abort()
  }, [])

  return (
    <ul>
      {notices.map((notice) => (
        <li key={notice.id}>{notice.title}</li>
      ))}
    </ul>
  )
}`,g=`import { useEffect, useState } from 'react'

type ToastProps = {
  message: string
  onClose: () => void
}

// 토스트: 3초 뒤 자동으로 닫힙니다. 먼저 닫히면 타이머도 함께 정리합니다.
export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return <p className="toast" role="status">{message}</p>
}

type Notice = {
  id: number
  title: string
}

// 목록 요청: 화면을 벗어나면 진행 중인 요청을 취소합니다.
export function NoticeList() {
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/notices', { signal: controller.signal })
      .then((response) => response.json() as Promise<Notice[]>)
      .then(setNotices)
      .catch((error) => {
        // 취소(AbortError)만 무시하고, 다른 오류(네트워크·응답 형식)는 남깁니다.
        if (error.name !== 'AbortError') console.error(error)
      })
    return () => controller.abort()
  }, [])

  return (
    <ul>
      {notices.map((notice) => (
        <li key={notice.id}>{notice.title}</li>
      ))}
    </ul>
  )
}`,_=[{label:`LayerPopup.jsx`,language:`javascript`,code:d},{label:`TransactionPage.jsx`,language:`javascript`,code:p},{label:`타이머·요청`,language:`javascript`,code:h}],v=[{label:`LayerPopup.tsx`,language:`typescript`,code:f},{label:`TransactionPage.tsx`,language:`typescript`,code:m},{label:`타이머·요청`,language:`typescript`,code:g}],y={class:`doc-body`},b={id:`section-0`},x={id:`section-1`},S={id:`section-2`},C={id:`section-3`},w={id:`section-4`},T={id:`section-7`},E=`effect-cleanup`,D=1,O=`팝업을 열고 닫을수록 이벤트가 쌓일 때 (useEffect 정리 함수)`,k=`useEffect 정리 함수`,A=`팝업을 열 때 등록한 키보드 이벤트·스크롤 잠금이 닫아도 남아 쌓이는 문제를 useEffect 정리 함수로 해결하고, 타이머·요청 취소와 StrictMode의 두 번 실행을 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,j=`팝업을 몇 번 열고 닫았더니 Escape 한 번에 여러 번 반응한다면?
useEffect에서 등록한 것은 return 정리 함수에서 반드시 해제하세요.
`,M=`Hooks`,N=`Hooks`,P=[`React`,`useEffect`,`정리 함수`,`cleanup`,`addEventListener`,`팝업`,`StrictMode`,`JSX`,`TSX`],F=`중급`,I=`약 12분`,L=[`useState`,`useEffect`],R=`return () => { … }`,z=`published`,B=`2026-11-13`,V=[`key-reset`,`controlled-input`],H=[{title:`React — Effect로 동기화하기`,url:`https://ko.react.dev/learn/synchronizing-with-effects`},{title:`React — useEffect`,url:`https://ko.react.dev/reference/react/useEffect`}],U={__name:`effect-cleanup`,setup(d,{expose:f}){f({frontmatter:{id:`effect-cleanup`,order:1,title:`팝업을 열고 닫을수록 이벤트가 쌓일 때 (useEffect 정리 함수)`,navTitle:`useEffect 정리 함수`,summary:`팝업을 열 때 등록한 키보드 이벤트·스크롤 잠금이 닫아도 남아 쌓이는 문제를 useEffect 정리 함수로 해결하고, 타이머·요청 취소와 StrictMode의 두 번 실행을 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`팝업을 몇 번 열고 닫았더니 Escape 한 번에 여러 번 반응한다면?
useEffect에서 등록한 것은 return 정리 함수에서 반드시 해제하세요.
`,group:`Hooks`,topic:`Hooks`,tags:[`React`,`useEffect`,`정리 함수`,`cleanup`,`addEventListener`,`팝업`,`StrictMode`,`JSX`,`TSX`],level:`중급`,duration:`약 12분`,prerequisites:[`useState`,`useEffect`],keyProperty:`return () => { … }`,status:`published`,updated:`2026-11-13`,related:[`key-reset`,`controlled-input`],references:[{title:`React — Effect로 동기화하기`,url:`https://ko.react.dev/learn/synchronizing-with-effects`},{title:`React — useEffect`,url:`https://ko.react.dev/reference/react/useEffect`}]}});let p=()=>l(()=>import(`./EffectCleanupDemo-CrQS8rGp.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocSteps`),g=s(`DocInspect`),E=s(`CodePanel`),D=s(`DocTab`),O=s(`DocTabs`),k=s(`DocPractice`);return e(),i(`div`,y,[r(`section`,b,[d[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),d[3]||=r(`p`,null,[o(`거래내역상세 팝업에 Escape로 닫기와 배경 스크롤 잠금을 넣었습니다. 처음에는 잘 동작하는데, `),r(`strong`,null,`팝업을 몇 번 열고 닫으면`),o(` Escape 한 번에 닫기 처리가 여러 번 실행되고, 팝업을 닫아도 `),r(`strong`,null,`페이지 스크롤이 계속 잠겨 있습니다.`)],-1),d[4]||=r(`p`,null,`팝업을 한 번만 열어 확인하면 문제가 없어 보여서, 여러 번 열고 닫는 QA 테스트에서 이런 형태로 돌아옵니다.`,-1),a(f,{title:`거래내역상세 팝업: 여러 번 열고 닫으면 스크롤이 잠기고 Escape가 중복 실행`,env:`전체 브라우저 · 팝업을 2회 이상 열고 닫은 뒤`,expected:`팝업을 닫으면 페이지가 스크롤되고, Escape는 열린 팝업을 한 번만 닫음`,actual:`닫은 뒤에도 페이지 스크롤이 잠겨 있고, Escape 한 번에 닫기 처리가 여러 번 실행됨`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`거래 목록에서 거래를 눌러 거래내역상세 팝업을 엽니다.`),r(`li`,null,`‘닫기’ 버튼으로 팝업을 닫습니다. 이 과정을 3번 반복합니다.`),r(`li`,null,`페이지를 스크롤해 봅니다.`),r(`li`,null,`팝업을 다시 열고 Escape를 누릅니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[r(`code`,null,`useEffect`),o(` 안에서 등록하거나 켠 것은 `),r(`strong`,null,[r(`code`,null,`return () => { … }`),o(` 정리 함수에서`)]),o(` 해제하세요. React는 팝업이 닫히거나 값이 바뀌어 효과를 다시 실행하기 전에 정리 함수를 먼저 실행합니다.`)],-1)]]),_:1})]),r(`section`,x,[d[5]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[6]||=r(`p`,null,`실제 React로 동작하는 예제입니다. 팝업을 3번 열고 닫은 뒤 ‘팝업 열기’ 버튼에 포커스를 둔 채 Escape를 눌러 보세요.`,-1),a(u,{load:p})]),r(`section`,S,[d[8]||=r(`h2`,null,[r(`span`,{class:`section-no`},`03`),o(` 왜 쌓일까요?`)],-1),d[9]||=r(`p`,null,[r(`code`,null,`useEffect`),o(`는 화면이 그려진 뒤 실행됩니다. 팝업 컴포넌트가 나타날 때마다 효과가 실행되어 `),r(`code`,null,`addEventListener`),o(`가 `),r(`strong`,null,`한 번씩 더`),o(` 호출됩니다. 그런데 팝업이 사라져도 브라우저에 등록한 이벤트는 React가 대신 지워 주지 않습니다. 해제 코드가 없으면 열 때마다 하나씩 쌓입니다.`)],-1),a(h,null,{default:n(()=>[...d[7]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`팝업 열림`),o(` 효과 실행 → 등록·잠금`)]),r(`li`,null,[r(`strong`,null,`팝업 닫힘`),o(` 정리 함수 실행 → 해제·잠금 풀기`)]),r(`li`,null,[r(`strong`,null,`다시 열림`),o(` 효과 실행 → 다시 1개`)])],-1)]]),_:1}),d[10]||=c(`<div class="table-wrap"><table><thead><tr><th>효과에서 한 일</th><th>정리 함수에서 할 일</th></tr></thead><tbody><tr><td><code>addEventListener</code></td><td><code>removeEventListener</code> (같은 함수)</td></tr><tr><td><code>setTimeout</code> · <code>setInterval</code></td><td><code>clearTimeout</code> · <code>clearInterval</code></td></tr><tr><td><code>body</code>에 클래스 추가(스크롤 잠금)</td><td>클래스 제거</td></tr><tr><td><code>fetch</code> 요청</td><td><code>AbortController</code>로 취소</td></tr><tr><td><code>IntersectionObserver</code> 등 감시</td><td><code>disconnect()</code></td></tr></tbody></table></div><p><strong>개발 중에는 효과가 두 번 실행됩니다.</strong> <code>&lt;StrictMode&gt;</code>로 감싼 개발 환경에서 React는 컴포넌트를 처음 그릴 때 <strong>효과 → 정리 → 효과</strong>를 일부러 한 번 더 실행합니다. 정리 함수를 빠뜨리면 개발 중에 바로 두 개가 등록되어 문제를 일찍 발견할 수 있습니다. 배포 빌드에서는 한 번만 실행됩니다.</p>`,2)]),r(`section`,C,[d[12]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[13]||=r(`p`,null,[o(`쌓이는 문제는 `),r(`strong`,null,`열고 닫을 때마다 무엇이 늘어나는지`),o(` 세어 보면 바로 드러납니다. 아래 순서로 확인하세요.`)],-1),a(g,null,{default:n(()=>[...d[11]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`Event Listeners 탭에서 keydown 확인`),o(` Elements 패널에서 아무 요소나 선택하고 오른쪽의 Event Listeners 탭을 엽니다. `),r(`code`,null,`Ancestors`),o(`가 켜진 상태에서 `),r(`code`,null,`keydown`),o(`을 펼치면 `),r(`code`,null,`document`),o(`에 등록된 처리가 보입니다. 팝업을 열고 닫을 때마다 늘어난다면 해제가 빠진 것입니다.`)]),r(`li`,null,[r(`strong`,null,`Console에서 개수 세기`),o(` Chrome Console에 `),r(`code`,null,`getEventListeners(document).keydown`),o(`을 입력합니다. 배열의 길이가 등록된 처리 개수입니다. 등록된 것이 없으면 `),r(`code`,null,`undefined`),o(`가 나옵니다.`)]),r(`li`,null,[r(`strong`,null,`body의 class 확인`),o(` 팝업을 닫은 뒤 Elements 패널에서 `),r(`code`,null,`body`),o(`를 봅니다. `),r(`code`,null,`is-scroll-lock`),o(` 클래스가 남아 있다면 잠금을 푸는 코드가 실행되지 않은 것입니다.`)]),r(`li`,null,[r(`strong`,null,`개발 환경에서 첫 열기 확인`),r(`code`,null,`StrictMode`),o(`를 쓰는 개발 환경에서는 컴포넌트가 처음 나타날 때 효과 → 정리 → 효과 순서로 한 번 더 실행됩니다. 열 때 새로 그려지는 팝업인데 처음 연 직후 이미 처리가 2개라면 정리 함수가 없는 것입니다.`)])],-1)]]),_:1})]),r(`section`,w,[d[14]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[15]||=r(`p`,null,`JSX와 TSX 중 프로젝트에 맞는 탭을 고르세요. 고른 탭은 다른 React 문서에서도 유지됩니다.`,-1),a(O,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(D,{label:`JSX`},{default:n(()=>[a(E,{tabs:t(_)},null,8,[`tabs`])]),_:1}),a(D,{label:`TSX`},{default:n(()=>[a(E,{tabs:t(v)},null,8,[`tabs`])]),_:1})]),_:1}),d[16]||=c(`<ul><li><strong>의존성 배열</strong>: 효과 안에서 쓰는 <code>open</code>, <code>onClose</code>를 배열에 넣습니다. 값이 바뀌면 이전 효과를 정리하고 새 값으로 다시 등록합니다.</li><li><strong><code>onClose</code>는 <code>useCallback</code>으로 고정합니다.</strong> 부모가 그릴 때마다 새 함수를 만들면 효과도 매번 다시 실행됩니다(정리 함수가 있으면 동작은 맞지만 불필요한 재등록이 생깁니다).</li><li><strong>닫기는 <code>false</code>로 씁니다.</strong> <code>setPopup(!popup)</code>처럼 토글로 닫으면 이미 닫힌 상태에서 한 번 더 호출될 때 다시 열립니다. 여는 함수와 닫는 함수를 나눠 <code>true</code>·<code>false</code>로 분명하게 씁니다.</li></ul>`,1)]),d[19]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>컴포넌트 바깥(브라우저, 타이머, 외부 라이브러리)에 무언가를 걸어 두는 코드는 모두 같은 원인으로 쌓입니다. 아래 경우도 정리 함수를 함께 씁니다.</p><h3>창 크기·스크롤 이벤트</h3><p><code>window</code>에 거는 <code>resize</code>, <code>scroll</code> 이벤트도 컴포넌트가 사라져도 남습니다. 등록한 함수를 그대로 해제합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handleResize</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">setMobile</span>(<span class="hljs-variable language_">window</span>.<span class="hljs-property">innerWidth</span> &lt; <span class="hljs-number">768</span>)
  <span class="hljs-title function_">handleResize</span>()
  <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, handleResize)
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">removeEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, handleResize)
}, [])
</code></pre><h3>자동으로 넘어가는 배너</h3><p><code>setInterval</code>을 정리하지 않으면 화면을 다시 들어올 때마다 타이머가 늘어 배너가 점점 빨리 넘어갑니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-title function_">setIndex</span>(<span class="hljs-function">(<span class="hljs-params">prev</span>) =&gt;</span> (prev + <span class="hljs-number">1</span>) % total)
  }, <span class="hljs-number">3000</span>)
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">clearInterval</span>(timer)
}, [total])
</code></pre><h3>바깥을 누르면 닫히는 드롭다운</h3><p>열려 있을 때만 <code>document</code>에 클릭 감지를 걸고, 닫히면 해제합니다. 팝업과 같은 구조입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">if</span> (!open) <span class="hljs-keyword">return</span>

  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handlePointerDown</span> = (<span class="hljs-params">event</span>) =&gt; {
    <span class="hljs-keyword">if</span> (!boxRef.<span class="hljs-property">current</span>?.<span class="hljs-title function_">contains</span>(event.<span class="hljs-property">target</span>)) <span class="hljs-title function_">setOpen</span>(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;pointerdown&#39;</span>, handlePointerDown)
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">removeEventListener</span>(<span class="hljs-string">&#39;pointerdown&#39;</span>, handlePointerDown)
}, [open])
</code></pre><h3>외부 라이브러리 인스턴스</h3><p>슬라이더·차트처럼 DOM에 직접 붙는 라이브러리는 만들 때 돌려받은 객체를 정리 함수에서 없앱니다. 메서드 이름(<code>destroy</code>, <code>dispose</code> 등)은 라이브러리 문서에서 확인합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> slider = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Slider</span>(sliderRef.<span class="hljs-property">current</span>, { <span class="hljs-attr">loop</span>: <span class="hljs-literal">true</span> })
  <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> slider.<span class="hljs-title function_">destroy</span>()
}, [])
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>등록과 해제는 같은 함수여야 합니다.</strong> <code>removeEventListener</code>에 새로 만든 화살표 함수를 넘기면 아무것도 지워지지 않습니다. 효과 안에서 함수를 변수로 만들고 그 변수를 양쪽에 씁니다.</li><li><strong>효과가 꼭 필요한지 먼저 봅니다.</strong> 버튼 클릭 결과로 일어나는 일은 효과가 아니라 클릭 처리 함수에 씁니다. 효과는 “화면에 있는 동안 외부(브라우저 이벤트, 타이머, 서버)와 맞춰야 하는 일”에 씁니다.</li><li><strong>공통 팝업이 있으면 그것을 씁니다.</strong> 프로젝트에 팝업 컴포넌트가 있다면 정리 함수가 들어 있는지 확인하고, 빠져 있으면 담당자와 공유합니다.</li></ul></section>`,2),r(`section`,T,[d[18]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(k,null,{default:n(()=>[...d[17]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`문제 쪽은 팝업을 열고 닫을 때마다 ‘등록된 Escape 처리’가 늘고, 배경 잠금이 계속 ‘켜짐’이다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`3번 열고 닫은 뒤 Escape를 누르면 문제 쪽은 등록된 개수만큼(3번), 해결 쪽은 0번 실행된다(해결 쪽은 닫혀 있으면 등록된 처리가 없음).`)])])],-1),r(`p`,null,[o(`로컬 개발 서버(`),r(`code`,null,`npm run dev`),o(`)에서 보면 문제 쪽 숫자가 2씩 늘어 6번이 됩니다. 위 ‘왜 쌓일까요?’에서 본 `),r(`code`,null,`StrictMode`),o(`의 두 번 실행 때문이고, 배포된 이 사이트에서는 1씩 늘어납니다.`)],-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`해결 코드의 정리 함수에서 `),r(`code`,null,`document.body.classList.remove`),o(`를 지우면 어떤 일이 생길지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{U as default,I as duration,M as group,E as id,R as keyProperty,j as lead,F as level,k as navTitle,D as order,L as prerequisites,H as references,V as related,z as status,A as summary,P as tags,O as title,N as topic,B as updated};