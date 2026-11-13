const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CreatePortalDemo-CDf3Q9do.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./react-dom-1flDk5uq.js","./DemoFrame-1ESt04Vz.js","./CreatePortalDemo-q8hGn6LQ.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-DHgvQBhl.js";import{t as u}from"./ReactIsland-9-BhU6jW.js";var d=`import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'

// 공통 팝업: 어느 컴포넌트 안에서 쓰든 화면에는 body 바로 아래에 그립니다.
// CSS 예) .modal { position: fixed; inset: 0; z-index: 1000; }
export default function Modal({ open, title, onClose, children }) {
  const titleId = useId()
  const titleRef = useRef(null)

  // 열려 있는 동안: 뒤 화면 막기, 포커스 이동, 닫히면 연 버튼으로 포커스 복귀
  useEffect(() => {
    if (!open) return

    const opener = document.activeElement
    // 팝업은 body 아래에 있으므로 앱 영역(#root)만 inert로 막으면 됩니다.
    const appRoot = document.getElementById('root')
    if (appRoot) appRoot.inert = true
    titleRef.current?.focus()

    return () => {
      if (appRoot) appRoot.inert = false
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [open])

  // Escape로 닫기
  useEffect(() => {
    if (!open) return

    const handleKeydown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [open, onClose])

  if (!open) return null

  // createPortal(그릴 내용, 그릴 DOM 위치)
  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="modal-dimmed" onClick={onClose} />
      <div className="modal-dialog">
        <strong ref={titleRef} id={titleId} className="modal-title" tabIndex={-1}>
          {title}
        </strong>
        {children}
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>,
    document.body,
  )
}`,f=`import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

// 공통 팝업: 어느 컴포넌트 안에서 쓰든 화면에는 body 바로 아래에 그립니다.
// CSS 예) .modal { position: fixed; inset: 0; z-index: 1000; }
export default function Modal({ open, title, onClose, children }: ModalProps) {
  const titleId = useId()
  const titleRef = useRef<HTMLElement>(null)

  // 열려 있는 동안: 뒤 화면 막기, 포커스 이동, 닫히면 연 버튼으로 포커스 복귀
  useEffect(() => {
    if (!open) return

    const opener = document.activeElement
    // 팝업은 body 아래에 있으므로 앱 영역(#root)만 inert로 막으면 됩니다.
    const appRoot = document.getElementById('root')
    if (appRoot) appRoot.inert = true
    titleRef.current?.focus()

    return () => {
      if (appRoot) appRoot.inert = false
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [open])

  // Escape로 닫기
  useEffect(() => {
    if (!open) return

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [open, onClose])

  if (!open) return null

  // createPortal(그릴 내용, 그릴 DOM 위치)
  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="modal-dimmed" onClick={onClose} />
      <div className="modal-dialog">
        <strong ref={titleRef} id={titleId} className="modal-title" tabIndex={-1}>
          {title}
        </strong>
        {children}
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>,
    document.body,
  )
}`,p=`import { useState } from 'react'
import Modal from './Modal'

// 슬라이드 안의 카드(overflow: hidden, transform)에서 팝업을 엽니다.
export default function NoticeCard() {
  const [open, setOpen] = useState(false)
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="notice-card">
      <p>거래 알림 · {enabled ? '켜짐' : '꺼짐'}</p>
      <button type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}>
        알림 설정
      </button>

      {/* 코드는 카드 안에 있지만 화면에는 body 아래에 그려집니다. 상태(enabled)는 그대로 함께 씁니다. */}
      <Modal open={open} title="거래 알림 설정" onClose={() => setOpen(false)}>
        <p>알림을 켜면 입출금이 생길 때마다 바로 알려 드립니다.</p>
        <button type="button" aria-pressed={enabled} onClick={() => setEnabled((value) => !value)}>
          {enabled ? '알림 켜짐' : '알림 켜기'}
        </button>
      </Modal>
    </div>
  )
}`,m=p,h=[{label:`Modal.jsx`,language:`javascript`,code:d},{label:`NoticeCard.jsx`,language:`javascript`,code:p}],g=[{label:`Modal.tsx`,language:`typescript`,code:f},{label:`NoticeCard.tsx`,language:`typescript`,code:m}],_={class:`doc-body`},v={id:`section-0`},y={id:`section-1`},b={id:`section-2`},x={id:`section-3`},S={id:`section-4`},C={id:`section-5`},w={id:`section-6`},T={id:`section-7`},E=`create-portal`,D=8,O=`팝업이 부모 영역에 잘리거나 가려질 때 (createPortal)`,k=`팝업이 잘릴 때(createPortal)`,A=`transform·overflow가 있는 카드 안에서 연 팝업이 카드 크기에 갇혀 잘리거나 다음 카드에 가려지는 문제를 createPortal로 해결합니다. 포털 안의 클릭이 React 트리를 따라 조상 컴포넌트로 전달되는 동작과 포커스·Escape·inert 처리도 함께 봅니다. JSX·TSX 예제를 함께 제공합니다.`,j=`position: fixed로 만든 팝업이 카드 안에서만 열린다면?
팝업은 createPortal로 카드 밖(document.body)에 그리세요.
`,M=`레이어`,N=`portal`,P=[`React`,`createPortal`,`포털`,`팝업`,`모달`,`overflow`,`transform`,`z-index`,`이벤트 버블링`,`inert`,`접근성`,`JSX`,`TSX`],F=`중급`,I=`약 12분`,L=[`useState`,`useRef`,`useEffect`,`position fixed`],R=`createPortal(children, domNode)`,z=`published`,B=`2026-11-11`,V=[`effect-cleanup`,`use-ref-dom`,`teleport-layer`,`z-index-context`],H=[{title:`React — createPortal`,url:`https://ko.react.dev/reference/react-dom/createPortal`},{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`},{title:`MDN — 쌓임 맥락`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context`}],U={__name:`create-portal`,setup(d,{expose:f}){f({frontmatter:{id:`create-portal`,order:8,title:`팝업이 부모 영역에 잘리거나 가려질 때 (createPortal)`,navTitle:`팝업이 잘릴 때(createPortal)`,summary:`transform·overflow가 있는 카드 안에서 연 팝업이 카드 크기에 갇혀 잘리거나 다음 카드에 가려지는 문제를 createPortal로 해결합니다. 포털 안의 클릭이 React 트리를 따라 조상 컴포넌트로 전달되는 동작과 포커스·Escape·inert 처리도 함께 봅니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`position: fixed로 만든 팝업이 카드 안에서만 열린다면?
팝업은 createPortal로 카드 밖(document.body)에 그리세요.
`,group:`레이어`,topic:`portal`,tags:[`React`,`createPortal`,`포털`,`팝업`,`모달`,`overflow`,`transform`,`z-index`,`이벤트 버블링`,`inert`,`접근성`,`JSX`,`TSX`],level:`중급`,duration:`약 12분`,prerequisites:[`useState`,`useRef`,`useEffect`,`position fixed`],keyProperty:`createPortal(children, domNode)`,status:`published`,updated:`2026-11-11`,related:[`effect-cleanup`,`use-ref-dom`,`teleport-layer`,`z-index-context`],references:[{title:`React — createPortal`,url:`https://ko.react.dev/reference/react-dom/createPortal`},{title:`WAI-ARIA APG — Dialog (Modal) 패턴`,url:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`},{title:`MDN — inert 속성`,url:`https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inert`},{title:`MDN — 쌓임 맥락`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context`}]}});let p=()=>l(()=>import(`./CreatePortalDemo-CDf3Q9do.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),E=s(`RouterLink`),D=s(`DocSteps`),O=s(`DocInspect`),k=s(`CodePanel`),A=s(`DocTab`),j=s(`DocTabs`),M=s(`DocPractice`);return e(),i(`div`,_,[r(`section`,v,[d[2]||=c(`<h2><span class="section-no">01</span> 문제 상황</h2><p>거래 카드를 좌우로 넘기는 슬라이드 안에 ‘알림 설정’ 버튼이 있고, 누르면 공통 <code>Modal</code> 컴포넌트가 열립니다. 팝업은 <code>position: fixed; inset: 0</code>으로 화면 전체를 덮도록 만들었는데, <strong>카드 영역만 어두워지고 대화상자의 위아래가 잘립니다.</strong> 등장 애니메이션만 붙은 카드 목록에서는 잘리지는 않지만 대화상자 아래쪽이 <strong>다음 카드에 가려져</strong> 버튼을 누를 수 없습니다.</p><p>팝업 화면만 따로 만들어 확인할 때는 문제가 없다가, 슬라이드·애니메이션 카드 안에 버튼을 넣은 화면에서만 생겨 QA에서 이런 형태로 돌아옵니다.</p>`,3),a(f,{title:`거래 카드: 알림 설정 팝업이 카드 안에서 잘리고 다음 카드에 가려짐`,env:`전체 브라우저 · transform(슬라이드·등장 애니메이션)이 있는 카드 안의 버튼`,expected:`팝업이 화면 전체를 어둡게 덮고 대화상자가 화면 가운데에 온전히 열림`,actual:`카드 영역만 어두워지고 대화상자 위아래가 잘림, overflow hidden이 없는 카드에서는 대화상자 아래쪽이 다음 카드에 가려짐`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`거래 카드 슬라이드에서 첫 번째 카드의 ‘알림 설정’을 누릅니다.`),r(`li`,null,`어두운 배경이 덮는 범위와 대화상자가 보이는 범위를 확인합니다.`),r(`li`,null,`슬라이드가 아닌 거래 목록(등장 애니메이션 카드)에서 같은 버튼을 누르고 대화상자 아래쪽 버튼을 확인합니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`팝업은 `),r(`strong`,null,[r(`code`,null,`createPortal(팝업, document.body)`),o(`로`)]),o(` 카드 밖에 그리세요. 바뀌는 것은 DOM 위치뿐이고, props·상태·context·React 이벤트 전달은 컴포넌트를 쓴 자리 그대로입니다.`)],-1)]]),_:1})]),r(`section`,y,[d[3]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[4]||=r(`p`,null,`실제 React로 동작하는 예제입니다. 카드에 적용된 속성을 바꿔 가며 ‘알림 설정’을 눌러 보고, 팝업 안을 눌렀을 때 아래 두 횟수가 어떻게 달라지는지도 비교해 보세요.`,-1),a(u,{load:p})]),r(`section`,b,[d[23]||=r(`h2`,null,[r(`span`,{class:`section-no`},`03`),o(` 왜 이런 일이 생길까요?`)],-1),r(`p`,null,[d[7]||=o(`React는 JSX를 쓴 자리 그대로 DOM을 만듭니다. 카드 컴포넌트 안에서 `,-1),d[8]||=r(`code`,null,`<Modal />`,-1),d[9]||=o(`을 쓰면 팝업의 DOM도 카드 요소 안에 생기고, 카드에 걸린 CSS의 영향을 그대로 받습니다. 카드에 `,-1),d[10]||=r(`code`,null,`transform`,-1),d[11]||=o(`이 있으면 `,-1),d[12]||=r(`code`,null,`position: fixed`,-1),d[13]||=o(`의 기준이 화면이 아니라 카드가 되어 팝업이 카드 크기로 줄어듭니다. 여기에 `,-1),d[14]||=r(`code`,null,`overflow: hidden`,-1),d[15]||=o(`이 있으면 카드 밖으로 나간 부분이 잘립니다. `,-1),d[16]||=r(`code`,null,`transform`,-1),d[17]||=o(`은 쌓임 맥락도 만들기 때문에 팝업의 `,-1),d[18]||=r(`code`,null,`z-index`,-1),d[19]||=o(`는 카드 안에서만 비교되고, 같은 단계의 다음 카드가 HTML에서 뒤에 나오므로 앞 카드를 팝업째 덮습니다. 원인별 설명은 `,-1),a(E,{to:`/pub/vue/teleport-layer`},{default:n(()=>[...d[5]||=[o(`Vue 문서의 Teleport 레이어`,-1)]]),_:1}),d[20]||=o(`와 `,-1),a(E,{to:`/pub/css/z-index-context`},{default:n(()=>[...d[6]||=[o(`z-index가 안 먹을 때`,-1)]]),_:1}),d[21]||=o(`에 정리되어 있습니다.`,-1)]),d[24]||=c(`<p><code>createPortal(children, domNode)</code>는 <code>children</code>을 <strong>다른 DOM 요소(<code>domNode</code>) 아래에</strong> 그립니다. React 공식 문서의 설명대로 포털은 DOM 노드의 물리적 위치만 바꿉니다. 그 밖에는 포털로 그린 JSX도 그것을 렌더링한 컴포넌트의 자식처럼 동작해서, 부모의 상태·props를 그대로 쓰고 부모 트리가 제공하는 context도 읽을 수 있습니다.</p><p>이벤트도 React 트리를 따릅니다. 포털 안을 클릭하면 DOM에서는 카드 밖이지만, React 트리에서 포털을 감싼 카드의 <code>onClick</code>이 실행됩니다. 반면 <code>addEventListener</code>로 카드 DOM에 직접 건 이벤트는 DOM 트리를 따르므로 포털 안 클릭을 받지 않습니다. 예제 해결 쪽에서 ‘카드 onClick’ 횟수만 늘어나는 이유입니다.</p>`,2),a(D,null,{default:n(()=>[...d[22]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`그릴 DOM 위치 정하기`),o(),r(`code`,null,`document.body`),o(` 또는 `),r(`code`,null,`#modal-root`)]),r(`li`,null,[r(`strong`,null,`포털로 그리기`),o(),r(`code`,null,`return createPortal(<div className="modal">…</div>, document.body)`)]),r(`li`,null,[r(`strong`,null,`쓰는 자리는 그대로`),o(),r(`code`,null,`<Modal open={open} onClose={handleClose}>…</Modal>`)])],-1)]]),_:1})]),r(`section`,x,[d[26]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[27]||=r(`p`,null,[o(`팝업이 잘리거나 가려지면 CSS 값보다 `),r(`strong`,null,`팝업 DOM이 어디에 있는지`),o(`부터 확인합니다. 위 예제에서 팝업을 연 상태로 따라 해 보세요.`)],-1),a(O,null,{default:n(()=>[...d[25]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`Elements에서 팝업 DOM 위치 확인`),o(` Elements 패널에서 Ctrl+F(Mac은 Cmd+F)를 누르고 `),r(`code`,null,`.demo-portal-layer`),o(`를 입력합니다. 문제 쪽 팝업은 카드(`),r(`code`,null,`.demo-portal-card`),o(`) 안에, 해결 쪽 팝업은 카드 밖의 포털 대상(`),r(`code`,null,`.demo-portal-root`),o(`) 안에 있습니다. 실제 화면에서는 `),r(`code`,null,`body`),o(` 바로 아래(또는 `),r(`code`,null,`#modal-root`),o(` 안)에 있어야 합니다.`)]),r(`li`,null,[r(`strong`,null,`조상의 transform·overflow 확인`),o(` 팝업에서 부모 요소를 하나씩 선택하며 Computed 탭에서 `),r(`code`,null,`transform`),o(`, `),r(`code`,null,`overflow`),o(`, `),r(`code`,null,`z-index`),o(`를 검색합니다. 기본값인 속성은 `),r(`strong`,null,`Show all`),o(`을 켜야 보입니다. `),r(`code`,null,`transform`),o(`이 `),r(`code`,null,`none`),o(`, `),r(`code`,null,`overflow`),o(`가 `),r(`code`,null,`visible`),o(`이 아닌 조상이 팝업을 가두는 원인입니다.`)]),r(`li`,null,[r(`strong`,null,`React DevTools에서는 원래 자리에 보임`),o(` React Developer Tools 확장의 Components 탭에서는 두 쪽 모두 `),r(`code`,null,`NoticeLayer`),o(`가 `),r(`code`,null,`CardScreen`),o(` 아래에 보입니다. 컴포넌트 트리는 DOM 위치와 관계없이 JSX를 쓴 자리 기준이므로, DOM 위치는 반드시 Elements 패널에서 확인합니다.`)]),r(`li`,null,[r(`strong`,null,`Console에서 DOM 포함 관계 확인`),o(` 해결 쪽 팝업만 연 상태에서 Elements 패널로 해결 쪽 카드를 선택하고 Console에 `),r(`code`,null,`$0.contains(document.querySelector('.demo-portal-layer'))`),o(`를 입력하면 `),r(`code`,null,`false`),o(`가 나옵니다. DOM으로는 카드 밖이지만 팝업 안을 누르면 ‘카드 onClick’ 횟수가 늘어, React 이벤트가 React 트리를 따라 전달된다는 것을 확인할 수 있습니다.`)])],-1)]]),_:1})]),r(`section`,S,[d[28]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[29]||=r(`p`,null,`JSX와 TSX 중 프로젝트에 맞는 탭을 고르세요. 고른 탭은 다른 React 문서에서도 유지됩니다.`,-1),a(j,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(A,{label:`JSX`},{default:n(()=>[a(k,{tabs:t(h)},null,8,[`tabs`])]),_:1}),a(A,{label:`TSX`},{default:n(()=>[a(k,{tabs:t(g)},null,8,[`tabs`])]),_:1})]),_:1}),d[30]||=c(`<ul><li><strong>포털 대상은 렌더링 전에 문서에 있어야 합니다.</strong> <code>document.body</code>는 항상 있으므로 가장 안전합니다. <code>#modal-root</code>를 쓰려면 <code>index.html</code>에 <code>&lt;div id=&quot;modal-root&quot;&gt;&lt;/div&gt;</code>를 미리 둡니다.</li><li><strong>팝업은 <code>body</code> 아래에 있으므로 앱 영역만 <code>inert</code>로 막습니다.</strong> Vite 기본 템플릿의 앱 영역은 <code>#root</code>입니다. 프로젝트의 앱 영역 id를 확인해 바꿉니다.</li><li><strong>TSX는 요소 타입을 확인하고 씁니다.</strong> <code>document.activeElement</code>는 <code>Element</code> 타입이라 <code>focus()</code>가 없습니다. <code>instanceof HTMLElement</code>로 확인한 뒤 포커스를 돌려줍니다.</li></ul>`,1)]),r(`section`,C,[d[41]||=c(`<h2><span class="section-no">06</span> 비슷한 상황</h2><p>조상 요소에 갇히는 레이어는 모달만이 아닙니다. 아래 경우도 포털로 해결하거나 함께 확인하세요.</p><h3>드롭다운·툴팁 위치 계산</h3><p>스크롤 영역이나 카드 안의 드롭다운도 포털로 <code>body</code>에 그리면 잘리지 않지만, 위치는 직접 정해야 합니다. 버튼의 <code>getBoundingClientRect()</code> 값으로 <code>position: fixed</code> 좌표를 정합니다. 열린 채로 스크롤하면 버튼과 위치가 어긋나므로 다시 계산하거나 닫습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> [position, setPosition] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">null</span>)

<span class="hljs-keyword">const</span> <span class="hljs-title function_">handleOpen</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-keyword">const</span> rect = buttonRef.<span class="hljs-property">current</span>.<span class="hljs-title function_">getBoundingClientRect</span>()
  <span class="hljs-title function_">setPosition</span>({ <span class="hljs-attr">top</span>: rect.<span class="hljs-property">bottom</span> + <span class="hljs-number">4</span>, <span class="hljs-attr">left</span>: rect.<span class="hljs-property">left</span> })
}

{position &amp;&amp; <span class="hljs-title function_">createPortal</span>(
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;sort-options&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">position:</span> &#39;<span class="hljs-attr">fixed</span>&#39;, <span class="hljs-attr">top:</span> <span class="hljs-attr">position.top</span>, <span class="hljs-attr">left:</span> <span class="hljs-attr">position.left</span> }}&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span>,
)}
</code></pre><h3>팝업 위에 팝업을 열 때</h3><p>같은 대상(<code>body</code>)에 그리면 나중에 연 팝업의 DOM이 뒤에 붙어, 같은 <code>z-index</code>라면 위에 보입니다. 다만 해결 코드의 <code>Modal</code>을 겹쳐 열면 Escape 한 번에 모두 닫히고, 위 팝업이 닫힐 때 <code>#root</code>의 <code>inert</code>가 풀립니다. 겹쳐 쓰는 화면이 있다면 열린 팝업 목록을 함께 관리해 맨 위 팝업만 처리합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">&lt;<span class="hljs-title class_">Modal</span> open={listOpen} title=<span class="hljs-string">&quot;계좌 목록&quot;</span> onClose={closeList}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setConfirmOpen(true)}&gt;삭제<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Modal</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{confirmOpen}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;삭제할까요?&quot;</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{closeConfirm}</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span></span>
&lt;/<span class="hljs-title class_">Modal</span>&gt;
</code></pre><h3>서버 렌더링(SSR) 환경</h3><p>서버에서 HTML을 만드는 프레임워크에서는 서버에 <code>document</code>가 없어 렌더링 중에 <code>document.body</code>를 읽으면 오류가 납니다. 화면에 붙은 뒤(효과 실행 후)에 포털을 그립니다. 프레임워크마다 권장 방법이 다를 수 있으니 해당 문서도 확인하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> [mounted, setMounted] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)

<span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-title function_">setMounted</span>(<span class="hljs-literal">true</span>)
}, [])

<span class="hljs-keyword">if</span> (!mounted) <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>
<span class="hljs-keyword">return</span> <span class="hljs-title function_">createPortal</span>(children, <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span>)
</code></pre><h3>네이티브 dialog 요소</h3>`,12),r(`p`,null,[d[32]||=r(`code`,null,`<dialog>`,-1),d[33]||=o(`를 `,-1),d[34]||=r(`code`,null,`showModal()`,-1),d[35]||=o(`로 열면 브라우저의 맨 위 레이어(top layer)에 그려져 조상의 `,-1),d[36]||=r(`code`,null,`z-index`,-1),d[37]||=o(`를 신경 쓸 필요가 없고, Escape 닫기와 배경 `,-1),d[38]||=r(`code`,null,`inert`,-1),d[39]||=o(`도 기본으로 제공됩니다. 자세한 동작과 배경 스크롤 처리는 `,-1),a(E,{to:`/pub/js/modal-focus-scroll`},{default:n(()=>[...d[31]||=[o(`팝업 포커스·스크롤 잠금`,-1)]]),_:1}),d[40]||=o(`을 참고하세요. React에서는 ref로 요소를 받아 효과에서 엽니다.`,-1)]),d[42]||=c(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> dialogRef = <span class="hljs-title function_">useRef</span>(<span class="hljs-literal">null</span>)

<span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> dialog = dialogRef.<span class="hljs-property">current</span>
  <span class="hljs-keyword">if</span> (!dialog) <span class="hljs-keyword">return</span>
  <span class="hljs-keyword">if</span> (open &amp;&amp; !dialog.<span class="hljs-property">open</span>) dialog.<span class="hljs-title function_">showModal</span>()
  <span class="hljs-keyword">if</span> (!open &amp;&amp; dialog.<span class="hljs-property">open</span>) dialog.<span class="hljs-title function_">close</span>()
}, [open])

&lt;dialog ref={dialogRef} onClose={onClose}&gt;…&lt;/dialog&gt;
</code></pre>`,1)]),r(`section`,w,[d[63]||=r(`h2`,null,[r(`span`,{class:`section-no`},`07`),o(` 적용 시 주의점`)],-1),r(`ul`,null,[d[61]||=r(`li`,null,[r(`strong`,null,`포털 안 클릭도 조상의 React 이벤트로 전달됩니다.`),o(` 카드 전체에 `),r(`code`,null,`onClick`),o(`(상세 이동 등)이 있으면 팝업 안을 눌러도 실행됩니다. React 문서의 안내대로 포털 안에서 `),r(`code`,null,`event.stopPropagation()`),o(`으로 막거나, `),r(`code`,null,`<Modal />`),o(`을 카드 바깥(React 트리의 위쪽)으로 옮깁니다.`)],-1),r(`li`,null,[d[44]||=r(`strong`,null,`바깥 클릭 판정은 DOM 기준입니다.`,-1),d[45]||=o(),a(E,{to:`/pub/react/effect-cleanup`},{default:n(()=>[...d[43]||=[o(`useEffect 정리 함수`,-1)]]),_:1}),d[46]||=o(`의 드롭다운처럼 `,-1),d[47]||=r(`code`,null,`boxRef.current.contains(event.target)`,-1),d[48]||=o(`로 바깥 클릭을 판정하면, 포털로 옮긴 목록은 DOM상 박스 밖이라 목록 안을 눌러도 닫힙니다. 버튼 영역과 포털 내용의 ref를 둘 다 확인합니다.`,-1)]),d[62]||=r(`li`,null,[r(`strong`,null,`CSS는 DOM 위치를 따릅니다.`),o(),r(`code`,null,`.notice-card .modal`),o(`처럼 조상 선택자에 기대는 규칙은 맞지 않게 되고, 카드에 지정한 글자색·CSS 변수 같은 상속 값도 팝업에 내려오지 않습니다. 팝업 스타일은 팝업 자신의 클래스로 완결되게 작성합니다.`)],-1),r(`li`,null,[d[51]||=r(`strong`,null,`포털은 위치만 옮기고 접근성은 처리하지 않습니다.`,-1),d[52]||=o(),d[53]||=r(`code`,null,`role="dialog"`,-1),d[54]||=o(`, `,-1),d[55]||=r(`code`,null,`aria-modal`,-1),d[56]||=o(`, 제목 연결, 열 때 포커스 이동, Escape 닫기, 배경 `,-1),d[57]||=r(`code`,null,`inert`,-1),d[58]||=o(`, 닫은 뒤 포커스 복귀를 함께 챙깁니다. 포커스 트랩과 배경 스크롤 잠금은 `,-1),a(E,{to:`/pub/js/modal-focus-scroll`},{default:n(()=>[...d[49]||=[o(`팝업 포커스·스크롤 잠금`,-1)]]),_:1}),d[59]||=o(`, Vue와 비교는 `,-1),a(E,{to:`/pub/vue/teleport-layer`},{default:n(()=>[...d[50]||=[o(`Teleport 레이어`,-1)]]),_:1}),d[60]||=o(`를 참고하세요.`,-1)])])]),r(`section`,T,[d[65]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(M,null,{default:n(()=>[...d[64]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`‘transform + overflow: hidden’에서 문제 쪽은 카드만 어두워지고 대화상자 위아래가 잘리며, ‘transform’에서는 대화상자 아래쪽이 다음 카드에 가려진다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`해결 쪽 팝업 안을 누르면 ‘카드 onClick’ 횟수만 늘고 ‘카드 addEventListener’ 횟수는 0으로 남는다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`‘없음’을 고르면 문제 쪽 팝업도 가상 화면 전체에 열리는 이유를 설명할 수 있다.`)])])],-1)]]),_:1})])])}}};export{U as default,I as duration,M as group,E as id,R as keyProperty,j as lead,F as level,k as navTitle,D as order,L as prerequisites,H as references,V as related,z as status,A as summary,P as tags,O as title,N as topic,B as updated};