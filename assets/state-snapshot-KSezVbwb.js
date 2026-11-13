const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./StateSnapshotDemo-CzvQDZaD.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./StateSnapshotDemo-BRlwFGxZ.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-Dxflp_jg.js";import{t as u}from"./ReactIsland-tK0hPT1Q.js";var d=`// 수량 선택: 값은 부모가 가지고, 다음 값(next)을 계산해 부모에게 알립니다.
export default function QuantityStepper({ value, onChange, min = 1, max = 10 }) {
  function handleDecrease() {
    const next = Math.max(value - 1, min)
    onChange(next)
  }

  function handleIncrease() {
    const next = Math.min(value + 1, max)
    onChange(next)
  }

  return (
    <div className="quantity-stepper">
      <button type="button" onClick={handleDecrease} disabled={value <= min} aria-label="수량 빼기">
        −
      </button>
      <output aria-live="polite">{value}</output>
      <button type="button" onClick={handleIncrease} disabled={value >= max} aria-label="수량 더하기">
        +
      </button>
    </div>
  )
}`,f=`import { useEffect, useState } from 'react'

const LIMIT = 180

function formatTime(seconds) {
  const minute = Math.floor(seconds / 60)
  const second = String(seconds % 60).padStart(2, '0')
  return \`\${minute}:\${second}\`
}

// 인증번호 유효시간: 1초마다 줄이고, 0이 되면 멈춥니다.
export default function AuthTimer() {
  const [seconds, setSeconds] = useState(LIMIT)
  const expired = seconds === 0

  useEffect(() => {
    if (expired) return

    const timer = setInterval(() => {
      // seconds를 직접 쓰면 효과가 실행된 렌더의 값(180)에 머뭅니다.
      // 이전 값(prev)을 받아 계산합니다.
      setSeconds((prev) => Math.max(prev - 1, 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [expired])

  return (
    <div className="auth-timer">
      <p className={expired ? 'auth-timer-time is-expired' : 'auth-timer-time'}>
        {expired ? '입력 시간이 지났습니다.' : \`남은 시간 \${formatTime(seconds)}\`}
      </p>
      <button type="button" onClick={() => setSeconds(LIMIT)}>
        시간 연장
      </button>
    </div>
  )
}`,p=`import { useState } from 'react'
import QuantityStepper from './QuantityStepper'

const PRICE = 12000

function saveQuantity(quantity) {
  console.log('수량 저장 요청', quantity)
}

export default function OrderForm() {
  const [quantity, setQuantity] = useState(1)
  const total = quantity * PRICE

  function handleQuantityChange(next) {
    setQuantity(next)
    // quantity는 아직 이번 렌더의 값입니다. 바뀐 값은 next로 씁니다.
    saveQuantity(next)
  }

  function handleAddThree() {
    // 연속으로 바꿀 때는 이전 값을 받아 계산합니다.
    setQuantity((prev) => Math.min(prev + 1, 10))
    setQuantity((prev) => Math.min(prev + 1, 10))
    setQuantity((prev) => Math.min(prev + 1, 10))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ quantity, total })
  }

  return (
    <form onSubmit={handleSubmit}>
      <QuantityStepper value={quantity} onChange={handleQuantityChange} max={10} />
      <button type="button" onClick={handleAddThree}>3개 더 담기</button>
      <p>합계 {total.toLocaleString()}원</p>
      <button type="submit">주문하기</button>
    </form>
  )
}`,m=`type QuantityStepperProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

// 수량 선택: 값은 부모가 가지고, 다음 값(next)을 계산해 부모에게 알립니다.
export default function QuantityStepper({ value, onChange, min = 1, max = 10 }: QuantityStepperProps) {
  function handleDecrease() {
    const next = Math.max(value - 1, min)
    onChange(next)
  }

  function handleIncrease() {
    const next = Math.min(value + 1, max)
    onChange(next)
  }

  return (
    <div className="quantity-stepper">
      <button type="button" onClick={handleDecrease} disabled={value <= min} aria-label="수량 빼기">
        −
      </button>
      <output aria-live="polite">{value}</output>
      <button type="button" onClick={handleIncrease} disabled={value >= max} aria-label="수량 더하기">
        +
      </button>
    </div>
  )
}`,h=`import { useEffect, useState } from 'react'

const LIMIT = 180

function formatTime(seconds: number) {
  const minute = Math.floor(seconds / 60)
  const second = String(seconds % 60).padStart(2, '0')
  return \`\${minute}:\${second}\`
}

// 인증번호 유효시간: 1초마다 줄이고, 0이 되면 멈춥니다.
export default function AuthTimer() {
  const [seconds, setSeconds] = useState<number>(LIMIT)
  const expired = seconds === 0

  useEffect(() => {
    if (expired) return

    const timer = setInterval(() => {
      // seconds를 직접 쓰면 효과가 실행된 렌더의 값(180)에 머뭅니다.
      // 이전 값(prev)을 받아 계산합니다.
      setSeconds((prev) => Math.max(prev - 1, 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [expired])

  return (
    <div className="auth-timer">
      <p className={expired ? 'auth-timer-time is-expired' : 'auth-timer-time'}>
        {expired ? '입력 시간이 지났습니다.' : \`남은 시간 \${formatTime(seconds)}\`}
      </p>
      <button type="button" onClick={() => setSeconds(LIMIT)}>
        시간 연장
      </button>
    </div>
  )
}`,g=`import { useState, type FormEvent } from 'react'
import QuantityStepper from './QuantityStepper'

const PRICE = 12000

function saveQuantity(quantity: number) {
  console.log('수량 저장 요청', quantity)
}

export default function OrderForm() {
  const [quantity, setQuantity] = useState<number>(1)
  const total = quantity * PRICE

  function handleQuantityChange(next: number) {
    setQuantity(next)
    // quantity는 아직 이번 렌더의 값입니다. 바뀐 값은 next로 씁니다.
    saveQuantity(next)
  }

  function handleAddThree() {
    // 연속으로 바꿀 때는 이전 값을 받아 계산합니다.
    setQuantity((prev) => Math.min(prev + 1, 10))
    setQuantity((prev) => Math.min(prev + 1, 10))
    setQuantity((prev) => Math.min(prev + 1, 10))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ quantity, total })
  }

  return (
    <form onSubmit={handleSubmit}>
      <QuantityStepper value={quantity} onChange={handleQuantityChange} max={10} />
      <button type="button" onClick={handleAddThree}>3개 더 담기</button>
      <p>합계 {total.toLocaleString()}원</p>
      <button type="submit">주문하기</button>
    </form>
  )
}`,_=[{label:`OrderForm.jsx`,language:`javascript`,code:p},{label:`QuantityStepper.jsx`,language:`javascript`,code:d},{label:`AuthTimer.jsx`,language:`javascript`,code:f}],v=[{label:`OrderForm.tsx`,language:`typescript`,code:g},{label:`QuantityStepper.tsx`,language:`typescript`,code:m},{label:`AuthTimer.tsx`,language:`typescript`,code:h}],y={class:`doc-body`},b={id:`section-0`},x={id:`section-1`},S={id:`section-2`},C={id:`section-3`},w={id:`section-4`},T={id:`section-7`},E=`state-snapshot`,D=5,O=`값을 바꾼 직후 console에 이전 값이 찍힐 때 (state 스냅샷)`,k=`바꾼 직후 이전 값이 나올 때`,A=`setState 직후 console.log나 저장 요청에 이전 값이 들어가고, 세 번 더해도 1만 느는 이유(렌더마다 고정된 state 스냅샷)를 이해하고, 다음 값 변수·업데이터 함수·ref로 해결합니다. JSX·TSX 예제를 함께 제공합니다.`,j=`setCount를 불렀는데 바로 아래 console.log에 이전 값이 찍힌다면?
state는 이번 렌더의 사진입니다. 바뀐 값은 변수(next)로 계산해서 쓰세요.
`,M=`상태·입력`,N=`상태`,P=[`React`,`useState`,`state 스냅샷`,`업데이터 함수`,`setState`,`setTimeout`,`useRef`,`클로저`,`JSX`,`TSX`],F=`중급`,I=`약 12분`,L=[`useState`,`이벤트 처리 함수`],R=`setCount((prev) => prev + 1)`,z=`published`,B=`2026-11-11`,V=[`controlled-input`,`key-reset`,`effect-cleanup`],H=[{title:`React — 스냅샷으로서의 State`,url:`https://ko.react.dev/learn/state-as-a-snapshot`},{title:`React — State 업데이트 큐`,url:`https://ko.react.dev/learn/queueing-a-series-of-state-updates`},{title:`React — Effect가 필요하지 않을 수도 있습니다`,url:`https://ko.react.dev/learn/you-might-not-need-an-effect`},{title:`React — useState`,url:`https://ko.react.dev/reference/react/useState`}],U={__name:`state-snapshot`,setup(d,{expose:f}){f({frontmatter:{id:`state-snapshot`,order:5,title:`값을 바꾼 직후 console에 이전 값이 찍힐 때 (state 스냅샷)`,navTitle:`바꾼 직후 이전 값이 나올 때`,summary:`setState 직후 console.log나 저장 요청에 이전 값이 들어가고, 세 번 더해도 1만 느는 이유(렌더마다 고정된 state 스냅샷)를 이해하고, 다음 값 변수·업데이터 함수·ref로 해결합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`setCount를 불렀는데 바로 아래 console.log에 이전 값이 찍힌다면?
state는 이번 렌더의 사진입니다. 바뀐 값은 변수(next)로 계산해서 쓰세요.
`,group:`상태·입력`,topic:`상태`,tags:[`React`,`useState`,`state 스냅샷`,`업데이터 함수`,`setState`,`setTimeout`,`useRef`,`클로저`,`JSX`,`TSX`],level:`중급`,duration:`약 12분`,prerequisites:[`useState`,`이벤트 처리 함수`],keyProperty:`setCount((prev) => prev + 1)`,status:`published`,updated:`2026-11-11`,related:[`controlled-input`,`key-reset`,`effect-cleanup`],references:[{title:`React — 스냅샷으로서의 State`,url:`https://ko.react.dev/learn/state-as-a-snapshot`},{title:`React — State 업데이트 큐`,url:`https://ko.react.dev/learn/queueing-a-series-of-state-updates`},{title:`React — Effect가 필요하지 않을 수도 있습니다`,url:`https://ko.react.dev/learn/you-might-not-need-an-effect`},{title:`React — useState`,url:`https://ko.react.dev/reference/react/useState`}]}});let p=()=>l(()=>import(`./StateSnapshotDemo-CzvQDZaD.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocSteps`),g=s(`DocInspect`),E=s(`CodePanel`),D=s(`DocTab`),O=s(`DocTabs`),k=s(`DocPractice`);return e(),i(`div`,y,[r(`section`,b,[d[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),d[3]||=r(`p`,null,[o(`상품 주문 화면에 수량 선택 버튼을 만들고, 수량이 바뀌면 저장 요청을 보내도록 했습니다. 그런데 `),r(`strong`,null,`+를 눌러 수량을 2로 바꾸면 저장 요청에는 1이 담기고`),o(`, 확인용으로 넣은 `),r(`code`,null,`console.log`),o(`에도 한 단계 이전 값이 찍힙니다. ‘3개 더 담기’ 버튼은 `),r(`strong`,null,`3이 아니라 1만`),o(` 늘어납니다.`)],-1),d[4]||=r(`p`,null,`화면의 숫자는 맞게 바뀌기 때문에 마크업만 확인할 때는 지나치기 쉽고, 저장된 값을 확인하는 QA에서 이런 형태로 돌아옵니다.`,-1),a(f,{title:`상품 주문: 수량을 바꾸면 저장 요청에 한 단계 이전 수량이 담김`,env:`전체 브라우저 · 수량 선택 후 저장 요청을 보내는 화면`,expected:`수량을 2로 바꾸면 저장 요청과 로그에 2가 담기고, 3개 더 담기를 누르면 3이 늘어남`,actual:`저장 요청과 로그에는 이전 수량 1이 담기고, 3개 더 담기를 눌러도 1만 늘어남`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`상품 주문 화면에서 수량이 1인 것을 확인합니다.`),r(`li`,null,`Console을 열고 수량 + 버튼을 누릅니다.`),r(`li`,null,`Console의 로그와 Network 패널의 저장 요청 값을 확인합니다.`),r(`li`,null,`‘3개 더 담기’를 누르고 화면의 수량을 확인합니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[r(`code`,null,`setCount`),o(`는 `),r(`strong`,null,`지금 변수의 값을 바꾸지 않고 다음 렌더를 예약`),o(`합니다. 바뀐 값이 바로 필요하면 `),r(`code`,null,`const next = count + 1`),o(`처럼 변수로 계산해 쓰고, 연속으로 바꿀 때는 `),r(`code`,null,`setCount((prev) => prev + 1)`),o(`처럼 이전 값을 받아 계산하세요.`)],-1)]]),_:1})]),r(`section`,x,[d[5]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[6]||=r(`p`,null,`실제 React로 동작하는 예제입니다. 위쪽에서 상황을 고르고, 숫자와 ‘로그’에 찍힌 값을 비교해 보세요.`,-1),a(u,{load:p})]),r(`section`,S,[d[8]||=c(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>React는 컴포넌트 함수를 실행해 화면을 그립니다. 이때 <code>const [count, setCount] = useState(0)</code>의 <code>count</code>는 <strong>이번 렌더에서 고정된 값</strong>입니다. 사진처럼 찍힌 값이라 ‘스냅샷’이라고 부릅니다. 클릭 처리 함수도 이 렌더 안에서 만들어지므로, 함수 안의 <code>count</code>는 끝까지 같은 값입니다.</p><p><code>setCount(count + 1)</code>은 “다음 렌더에서는 이 값으로 그려 줘”라는 요청입니다. 요청은 쌓였다가 처리 함수가 끝난 뒤 한꺼번에 반영되고, 그다음 렌더에서야 새 <code>count</code>가 만들어집니다. 그래서 바로 아래 <code>console.log(count)</code>는 이전 값을 찍습니다.</p>`,3),a(h,null,{default:n(()=>[...d[7]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`렌더 1`),o(),r(`code`,null,`count`),o(`는 0으로 고정`)]),r(`li`,null,[r(`strong`,null,`클릭`),o(),r(`code`,null,`setCount(0 + 1)`),o(`을 세 번 요청 → 셋 다 “1로 바꿔 줘”`)]),r(`li`,null,[r(`strong`,null,`렌더 2`),o(),r(`code`,null,`count`),o(`는 1 (3이 아님)`)])],-1)]]),_:1}),d[9]||=c(`<div class="table-wrap"><table><thead><tr><th>쓰는 방법</th><th>세 번 부르면</th><th>언제 쓰나요?</th></tr></thead><tbody><tr><td><code>setCount(count + 1)</code></td><td>셋 다 같은 <code>count</code>로 계산 → +1</td><td>한 번만 바꿀 때</td></tr><tr><td><code>setCount((prev) =&gt; prev + 1)</code></td><td>앞 요청의 결과를 <code>prev</code>로 받음 → +3</td><td>연속으로 바꾸거나, 타이머처럼 오래된 함수 안에서 바꿀 때</td></tr><tr><td><code>const next = count + 1</code> 후 <code>setCount(next)</code></td><td>—</td><td>바뀐 값을 저장 요청·로그·부모 알림에 바로 쓸 때</td></tr></tbody></table></div><p><code>setTimeout</code>·<code>setInterval</code> 안의 함수도 만들어진 렌더의 <code>count</code>를 기억합니다. 3초 뒤에 실행되어도 버튼을 누른 순간의 값을 읽습니다. 이렇게 오래된 값을 붙잡고 있는 것을 흔히 <strong>오래된 클로저</strong>(stale closure)라고 합니다.</p>`,2)]),r(`section`,C,[d[11]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[12]||=r(`p`,null,[o(`이전 값이 나올 때는 `),r(`strong`,null,`값을 언제(어느 렌더에서) 읽었는지`),o(`를 확인합니다. 아래 순서로 보면 로그를 잘못 읽은 것인지, 실제로 값이 틀린 것인지 구분할 수 있습니다.`)],-1),a(g,null,{default:n(()=>[...d[10]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`console.log 위치 확인`),r(`code`,null,`set`),o(` 함수 바로 아래의 로그는 항상 이번 렌더의 값(이전 값)을 찍습니다. 같은 로그를 컴포넌트 함수 본문(`),r(`code`,null,`return`),o(` 위)으로 옮기면 다음 렌더에서 바뀐 값이 찍힙니다. 본문 로그가 맞다면 상태는 정상이고, 읽는 시점이 문제입니다.`)]),r(`li`,null,[r(`strong`,null,`Components 탭에서 State 확인`),o(` React Developer Tools의 Components 탭에서 컴포넌트를 선택하고 hooks의 State 값을 봅니다. 버튼을 누른 뒤 렌더가 끝나면 바뀐 값이 보입니다. 여기 값이 맞는데 저장 요청만 틀리다면 요청에 넣은 변수를 확인합니다.`)]),r(`li`,null,[r(`strong`,null,`중단점으로 처리 함수 안의 값 보기`),o(` Sources 패널에서 클릭 처리 함수의 `),r(`code`,null,`set`),o(` 다음 줄에 중단점을 걸고 버튼을 누릅니다. Scope에서 `),r(`code`,null,`count`),o(`를 보면 `),r(`code`,null,`set`),o(`을 부른 뒤에도 값이 그대로입니다. 처리 함수 안에서는 바뀌지 않는다는 것을 직접 확인할 수 있습니다.`)]),r(`li`,null,[r(`strong`,null,`로그가 두 번 찍히면 StrictMode 확인`),o(` 개발 환경에서 `),r(`code`,null,`<StrictMode>`),o(`로 감싸면 React가 컴포넌트 함수를 일부러 두 번 실행해, 본문의 로그가 두 번 찍힙니다. 값이 두 번 더해진 것이 아니니 혼동하지 않습니다. 배포 빌드에서는 한 번만 실행됩니다.`)])],-1)]]),_:1})]),r(`section`,w,[d[13]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[14]||=r(`p`,null,[o(`수량 선택은 다음 값(`),r(`code`,null,`next`),o(`)을 계산해 부모에게 알리고, 부모는 그 값을 저장 요청에 씁니다. 인증번호 타이머처럼 시간이 지나며 바뀌는 값은 업데이터 함수로 줄입니다.`)],-1),a(O,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(D,{label:`JSX`},{default:n(()=>[a(E,{tabs:t(_)},null,8,[`tabs`])]),_:1}),a(D,{label:`TSX`},{default:n(()=>[a(E,{tabs:t(v)},null,8,[`tabs`])]),_:1})]),_:1}),d[15]||=c(`<ul><li><strong>바뀐 값은 변수로</strong>: <code>handleQuantityChange(next)</code>에서 <code>setQuantity(next)</code> 다음 줄에 <code>quantity</code>가 아니라 <code>next</code>를 씁니다. 같은 값을 상태와 요청에 함께 쓰므로 어긋나지 않습니다.</li><li><strong>연속 변경은 업데이터 함수로</strong>: ‘3개 더 담기’처럼 한 처리 함수에서 여러 번 바꿀 때 <code>(prev) =&gt; …</code>를 넘깁니다. React가 요청을 순서대로 처리하며 앞 결과를 <code>prev</code>로 넘겨줍니다.</li><li><strong>합계는 상태로 따로 두지 않습니다.</strong> <code>total</code>은 <code>quantity</code>로 렌더 중에 계산합니다. 상태를 하나 더 만들면 둘 중 하나가 이전 값으로 남기 쉽습니다.</li><li><strong>효과는 외부와 맞출 때만</strong>: “수량이 바뀌면 저장”을 <code>useEffect(() =&gt; saveQuantity(quantity), [quantity])</code>로 쓰지 않습니다. 사용자의 클릭으로 일어나는 일은 처리 함수에서 처리합니다(React 문서 ‘Effect가 필요하지 않을 수도 있습니다’). 타이머처럼 화면에 있는 동안 계속 돌아야 하는 것만 효과에 둡니다.</li></ul>`,1)]),d[18]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p><code>set</code> 다음 줄에서 상태를 다시 읽는 코드는 모두 같은 원인입니다. 아래 경우도 같은 방법으로 고칩니다.</p><h3>같은 처리 함수에서 여러 번 바꿀 때</h3><p>반복문이나 여러 함수 호출로 같은 상태를 바꾸면 마지막 요청만 남는 것처럼 보입니다. 이전 값을 받아 계산합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">handleSelectAll</span>(<span class="hljs-params">ids</span>) {
  ids.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">id</span>) =&gt;</span> {
    <span class="hljs-comment">// setSelected([...selected, id])는 마지막 id만 남습니다.</span>
    <span class="hljs-title function_">setSelected</span>(<span class="hljs-function">(<span class="hljs-params">prev</span>) =&gt;</span> [...prev, id])
  })
}
</code></pre><h3>객체·배열을 바꾸고 바로 쓸 때</h3><p>새 객체를 변수로 만든 뒤 상태와 요청에 같은 변수를 씁니다. 원래 객체를 직접 고치면(<code>form.memo = …</code>) 화면이 다시 그려지지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">handleMemoChange</span>(<span class="hljs-params">memo</span>) {
  <span class="hljs-keyword">const</span> nextForm = { ...form, memo }
  <span class="hljs-title function_">setForm</span>(nextForm)
  <span class="hljs-title function_">saveDraft</span>(nextForm) <span class="hljs-comment">// form이 아니라 nextForm</span>
}
</code></pre><h3>setTimeout·setInterval 안의 오래된 값</h3><p>타이머 안에서 값을 바꿀 때는 업데이터 함수를, 최신 값을 읽기만 할 때는 <code>ref</code>를 씁니다. <code>ref</code>는 렌더마다 새로 만들어지지 않아 항상 마지막에 넣은 값을 돌려줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> countRef = <span class="hljs-title function_">useRef</span>(count)

<span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  countRef.<span class="hljs-property">current</span> = count
}, [count])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleNotice</span>(<span class="hljs-params"></span>) {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-title function_">alert</span>(<span class="hljs-string">\`현재 수량 <span class="hljs-subst">\${countRef.current}</span>개\`</span>)
  }, <span class="hljs-number">3000</span>)
}
</code></pre><h3>부모에게 바뀐 값을 알릴 때</h3><p>자식이 <code>setValue</code> 직후 <code>onChange(value)</code>를 부르면 부모는 이전 값을 받습니다. 다음 값을 계산해 양쪽에 넘깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">handleToggle</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> next = !open
  <span class="hljs-title function_">setOpen</span>(next)
  <span class="hljs-title function_">onToggle</span>(next)
}
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>업데이터 함수는 계산만 합니다.</strong> <code>(prev) =&gt; prev + 1</code> 안에서 요청을 보내거나 로그를 남기지 않습니다. 개발 환경의 StrictMode는 업데이터 함수도 두 번 실행하므로, 안에 넣은 요청은 두 번 나갑니다.</li><li><strong><code>await</code> 뒤에도 값은 그대로입니다.</strong> 처리 함수 안에서 <code>await</code>로 기다린 뒤 <code>count</code>를 읽어도 클릭한 렌더의 값입니다. 요청 결과로 바꿀 값은 변수에 담아 씁니다.</li><li><strong>ref 값은 화면에 쓰지 않습니다.</strong> <code>ref</code>를 바꿔도 다시 그려지지 않으므로, 화면에 보여 줄 값은 상태로 두고 <code>ref</code>는 타이머·이벤트 안에서 최신 값을 읽을 때만 씁니다.</li><li><strong>바뀐 값은 화면으로도 알립니다.</strong> 수량처럼 버튼으로 바뀌는 값은 <code>output</code>이나 <code>aria-live=&quot;polite&quot;</code> 영역에 두면 스크린 리더 사용자도 바뀐 값을 들을 수 있습니다.</li></ul></section>`,2),r(`section`,T,[d[17]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(k,null,{default:n(()=>[...d[16]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`‘+3 연속 더하기’에서 문제 쪽은 한 번 누를 때 1만 늘고, 로그에는 누르기 전 값이 찍힌다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`해결 쪽은 3이 늘고, 로그의 `),r(`code`,null,`next`),o(`가 화면 숫자와 같다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`‘3초 뒤 읽기’를 누르고 ‘+1’을 두 번 누르면, 문제 쪽 로그는 누른 순간의 값, 해결 쪽 로그는 최신 값을 찍는다.`)])])],-1)]]),_:1})])])}}};export{U as default,I as duration,M as group,E as id,R as keyProperty,j as lead,F as level,k as navTitle,D as order,L as prerequisites,H as references,V as related,z as status,A as summary,P as tags,O as title,N as topic,B as updated};