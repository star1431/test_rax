const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./EffectDependenciesDemo-GJh3H08Q.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./EffectDependenciesDemo-D33yQU4C.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-Dxflp_jg.js";import{t as u}from"./ReactIsland-tK0hPT1Q.js";var d=`import { useEffect, useId, useState } from 'react'

const PAGE_SIZE = 10

export default function ProductList() {
  const memoId = useId()
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [keyword, setKeyword] = useState('')
  const [memo, setMemo] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    // 요청에 쓸 객체는 효과 안에서 만듭니다. 의존성에는 원시값(page, keyword)만 넣습니다.
    const params = new URLSearchParams({ page: String(page), size: String(PAGE_SIZE), keyword })
    const controller = new AbortController()

    fetch(\`/api/products?\${params}\`, { signal: controller.signal })
      .then((response) => response.json())
      .then(setProducts)
      .catch((error) => {
        // 취소(AbortError)만 무시하고, 다른 오류(네트워크·응답 형식)는 남깁니다.
        if (error.name !== 'AbortError') console.error(error)
      })

    return () => controller.abort()
  }, [page, keyword])

  // 검색어는 입력할 때가 아니라 검색 버튼을 누를 때 확정합니다.
  function handleSearch(event) {
    event.preventDefault()
    setKeyword(query.trim())
    setPage(1)
  }

  return (
    <section className="product-list">
      <form className="product-search" onSubmit={handleSearch}>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="상품 검색" />
        <button type="submit">검색</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <div className="product-pager">
        <button type="button" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          이전
        </button>
        <span>{page}페이지</span>
        <button type="button" onClick={() => setPage((prev) => prev + 1)}>
          다음
        </button>
      </div>

      {/* 메모는 목록 요청과 관계없으므로, 입력해도 효과가 다시 실행되지 않습니다. */}
      <label htmlFor={memoId}>관리자 메모</label>
      <textarea id={memoId} value={memo} onChange={(event) => setMemo(event.target.value)} />
    </section>
  )
}`,f=`import { useEffect, useId, useState, type FormEvent } from 'react'

type Product = {
  id: number
  name: string
}

const PAGE_SIZE = 10

export default function ProductList() {
  const memoId = useId()
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [keyword, setKeyword] = useState('')
  const [memo, setMemo] = useState('')
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // 요청에 쓸 객체는 효과 안에서 만듭니다. 의존성에는 원시값(page, keyword)만 넣습니다.
    const params = new URLSearchParams({ page: String(page), size: String(PAGE_SIZE), keyword })
    const controller = new AbortController()

    fetch(\`/api/products?\${params}\`, { signal: controller.signal })
      .then((response) => response.json() as Promise<Product[]>)
      .then(setProducts)
      .catch((error) => {
        // 취소(AbortError)만 무시하고, 다른 오류(네트워크·응답 형식)는 남깁니다.
        if (error.name !== 'AbortError') console.error(error)
      })

    return () => controller.abort()
  }, [page, keyword])

  // 검색어는 입력할 때가 아니라 검색 버튼을 누를 때 확정합니다.
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setKeyword(query.trim())
    setPage(1)
  }

  return (
    <section className="product-list">
      <form className="product-search" onSubmit={handleSearch}>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="상품 검색" />
        <button type="submit">검색</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <div className="product-pager">
        <button type="button" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          이전
        </button>
        <span>{page}페이지</span>
        <button type="button" onClick={() => setPage((prev) => prev + 1)}>
          다음
        </button>
      </div>

      {/* 메모는 목록 요청과 관계없으므로, 입력해도 효과가 다시 실행되지 않습니다. */}
      <label htmlFor={memoId}>관리자 메모</label>
      <textarea id={memoId} value={memo} onChange={(event) => setMemo(event.target.value)} />
    </section>
  )
}`,p=`import { useEffect, useState } from 'react'

// 자식: 부모가 준 객체(filters)와 함수(onLoaded)를 효과에서 씁니다.
export default function SearchResult({ filters, onLoaded }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const params = new URLSearchParams(filters)
    const controller = new AbortController()

    fetch(\`/api/search?\${params}\`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        onLoaded(data.length)
      })
      .catch((error) => {
        // 취소(AbortError)만 무시하고, 다른 오류(네트워크·응답 형식)는 남깁니다.
        if (error.name !== 'AbortError') console.error(error)
      })

    return () => controller.abort()
  }, [filters, onLoaded])

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}`,m=`import { useEffect, useState } from 'react'

export type Filters = {
  category: string
  sort: string
}

type Item = {
  id: number
  name: string
}

type SearchResultProps = {
  filters: Filters
  onLoaded: (count: number) => void
}

// 자식: 부모가 준 객체(filters)와 함수(onLoaded)를 효과에서 씁니다.
export default function SearchResult({ filters, onLoaded }: SearchResultProps) {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const params = new URLSearchParams(filters)
    const controller = new AbortController()

    fetch(\`/api/search?\${params}\`, { signal: controller.signal })
      .then((response) => response.json() as Promise<Item[]>)
      .then((data) => {
        setItems(data)
        onLoaded(data.length)
      })
      .catch((error) => {
        // 취소(AbortError)만 무시하고, 다른 오류(네트워크·응답 형식)는 남깁니다.
        if (error.name !== 'AbortError') console.error(error)
      })

    return () => controller.abort()
  }, [filters, onLoaded])

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}`,h=`import { useCallback, useMemo, useState } from 'react'
import SearchResult from './SearchResult'

export default function SearchPage() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('recent')
  const [total, setTotal] = useState(0)

  // 객체·함수를 자식 효과의 의존성으로 넘길 때만 고정합니다.
  // 그냥 { category, sort }로 넘기면 부모가 그릴 때마다 자식의 요청이 다시 나갑니다.
  const filters = useMemo(() => ({ category, sort }), [category, sort])
  const handleLoaded = useCallback((count) => setTotal(count), [])

  return (
    <>
      <div className="search-filter">
        <button type="button" onClick={() => setCategory('all')}>전체</button>
        <button type="button" onClick={() => setCategory('digital')}>디지털</button>
        <button type="button" onClick={() => setSort(sort === 'recent' ? 'price' : 'recent')}>
          {sort === 'recent' ? '가격순으로' : '최신순으로'}
        </button>
      </div>
      <p>검색 결과 {total}건</p>
      <SearchResult filters={filters} onLoaded={handleLoaded} />
    </>
  )
}`,g=`import { useCallback, useMemo, useState } from 'react'
import SearchResult, { type Filters } from './SearchResult'

export default function SearchPage() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('recent')
  const [total, setTotal] = useState(0)

  // 객체·함수를 자식 효과의 의존성으로 넘길 때만 고정합니다.
  // 그냥 { category, sort }로 넘기면 부모가 그릴 때마다 자식의 요청이 다시 나갑니다.
  const filters = useMemo<Filters>(() => ({ category, sort }), [category, sort])
  const handleLoaded = useCallback((count: number) => setTotal(count), [])

  return (
    <>
      <div className="search-filter">
        <button type="button" onClick={() => setCategory('all')}>전체</button>
        <button type="button" onClick={() => setCategory('digital')}>디지털</button>
        <button type="button" onClick={() => setSort(sort === 'recent' ? 'price' : 'recent')}>
          {sort === 'recent' ? '가격순으로' : '최신순으로'}
        </button>
      </div>
      <p>검색 결과 {total}건</p>
      <SearchResult filters={filters} onLoaded={handleLoaded} />
    </>
  )
}`,_=`import { useEffect, useState } from 'react'

// 1) 다른 값으로 계산할 수 있는 값은 state에 복사하지 않고 렌더 중에 계산합니다.
export function CartSummary({ items }) {
  // ✗ const [total, setTotal] = useState(0)
  //   useEffect(() => setTotal(...), [items])  → 한 번 더 그리고, 빠뜨리면 이전 합계가 남습니다.
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return <p className="cart-total">합계 {total.toLocaleString()}원</p>
}

// 2) 업데이터 함수를 쓰면 state를 의존성에 넣지 않아도 됩니다.
export function SessionTimer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // setSeconds(seconds + 1)이면 [seconds]가 필요하고, 1초마다 타이머를 지웠다 다시 만듭니다.
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  return <p className="session-timer">접속 {seconds}초</p>
}`,v=`import { useEffect, useState } from 'react'

type CartItem = {
  id: number
  price: number
  quantity: number
}

type CartSummaryProps = {
  items: CartItem[]
}

// 1) 다른 값으로 계산할 수 있는 값은 state에 복사하지 않고 렌더 중에 계산합니다.
export function CartSummary({ items }: CartSummaryProps) {
  // ✗ const [total, setTotal] = useState(0)
  //   useEffect(() => setTotal(...), [items])  → 한 번 더 그리고, 빠뜨리면 이전 합계가 남습니다.
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return <p className="cart-total">합계 {total.toLocaleString()}원</p>
}

// 2) 업데이터 함수를 쓰면 state를 의존성에 넣지 않아도 됩니다.
export function SessionTimer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // setSeconds(seconds + 1)이면 [seconds]가 필요하고, 1초마다 타이머를 지웠다 다시 만듭니다.
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  return <p className="session-timer">접속 {seconds}초</p>
}`,y=[{label:`ProductList.jsx`,language:`javascript`,code:d},{label:`SearchPage.jsx`,language:`javascript`,code:h},{label:`SearchResult.jsx`,language:`javascript`,code:p},{label:`렌더 중 계산·업데이터`,language:`javascript`,code:_}],b=[{label:`ProductList.tsx`,language:`typescript`,code:f},{label:`SearchPage.tsx`,language:`typescript`,code:g},{label:`SearchResult.tsx`,language:`typescript`,code:m},{label:`렌더 중 계산·업데이터`,language:`typescript`,code:v}],x={class:`doc-body`},S={id:`section-0`},C={id:`section-1`},w={id:`section-2`},T={id:`section-3`},E={id:`section-4`},D={id:`section-7`},O=`effect-dependencies`,k=7,A=`useEffect가 계속 다시 실행될 때 (의존성 배열)`,j=`useEffect가 계속 실행될 때`,M=`렌더 중에 만든 객체·함수를 의존성에 넣거나 의존성 배열을 빠뜨려 useEffect가 렌더마다 다시 실행되는 문제를, 원시값 의존성·효과 안에서 객체 만들기·useMemo/useCallback·렌더 중 계산으로 해결합니다. JSX·TSX 예제를 함께 제공합니다.`,N=`관계없는 입력란에 글자를 칠 때마다 목록 요청이 다시 나간다면?
의존성 배열에 렌더마다 새로 만들어지는 객체가 들어 있는지 확인하세요.
`,P=`Hooks`,F=`useEffect`,I=[`React`,`useEffect`,`의존성 배열`,`무한 반복`,`useMemo`,`useCallback`,`exhaustive-deps`,`JSX`,`TSX`],L=`중급`,R=`약 12분`,z=[`useState`,`useEffect`,`정리 함수`],B=`useEffect(…, [page])`,V=`published`,H=`2026-11-13`,U=[`effect-cleanup`,`state-snapshot`,`use-ref-dom`],W=[{title:`React — useEffect`,url:`https://ko.react.dev/reference/react/useEffect`},{title:`React — Effect의 의존성 제거하기`,url:`https://ko.react.dev/learn/removing-effect-dependencies`},{title:`React — Effect가 필요하지 않을 수도 있습니다`,url:`https://ko.react.dev/learn/you-might-not-need-an-effect`},{title:`React — useMemo`,url:`https://ko.react.dev/reference/react/useMemo`},{title:`React — useCallback`,url:`https://ko.react.dev/reference/react/useCallback`},{title:`eslint-plugin-react-hooks`,url:`https://www.npmjs.com/package/eslint-plugin-react-hooks`}],G={__name:`effect-dependencies`,setup(d,{expose:f}){f({frontmatter:{id:`effect-dependencies`,order:7,title:`useEffect가 계속 다시 실행될 때 (의존성 배열)`,navTitle:`useEffect가 계속 실행될 때`,summary:`렌더 중에 만든 객체·함수를 의존성에 넣거나 의존성 배열을 빠뜨려 useEffect가 렌더마다 다시 실행되는 문제를, 원시값 의존성·효과 안에서 객체 만들기·useMemo/useCallback·렌더 중 계산으로 해결합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`관계없는 입력란에 글자를 칠 때마다 목록 요청이 다시 나간다면?
의존성 배열에 렌더마다 새로 만들어지는 객체가 들어 있는지 확인하세요.
`,group:`Hooks`,topic:`useEffect`,tags:[`React`,`useEffect`,`의존성 배열`,`무한 반복`,`useMemo`,`useCallback`,`exhaustive-deps`,`JSX`,`TSX`],level:`중급`,duration:`약 12분`,prerequisites:[`useState`,`useEffect`,`정리 함수`],keyProperty:`useEffect(…, [page])`,status:`published`,updated:`2026-11-13`,related:[`effect-cleanup`,`state-snapshot`,`use-ref-dom`],references:[{title:`React — useEffect`,url:`https://ko.react.dev/reference/react/useEffect`},{title:`React — Effect의 의존성 제거하기`,url:`https://ko.react.dev/learn/removing-effect-dependencies`},{title:`React — Effect가 필요하지 않을 수도 있습니다`,url:`https://ko.react.dev/learn/you-might-not-need-an-effect`},{title:`React — useMemo`,url:`https://ko.react.dev/reference/react/useMemo`},{title:`React — useCallback`,url:`https://ko.react.dev/reference/react/useCallback`},{title:`eslint-plugin-react-hooks`,url:`https://www.npmjs.com/package/eslint-plugin-react-hooks`}]}});let p=()=>l(()=>import(`./EffectDependenciesDemo-GJh3H08Q.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocSteps`),g=s(`RouterLink`),_=s(`DocInspect`),v=s(`CodePanel`),O=s(`DocTab`),k=s(`DocTabs`),A=s(`DocPractice`);return e(),i(`div`,x,[r(`section`,S,[d[2]||=c(`<h2><span class="section-no">01</span> 문제 상황</h2><p>상품 목록 화면에서 페이지가 바뀌면 목록을 다시 불러오도록 <code>useEffect</code>를 썼습니다. 요청 조건을 <code>const options = { page, size: 10 }</code>로 묶어 의존성 배열에 넣었더니, <strong>목록과 관계없는 메모 입력란에 글자를 칠 때마다 같은 목록 요청이 다시 나갑니다.</strong> 요청 결과를 state에 넣는 코드에서는 요청이 <strong>멈추지 않고 계속 반복</strong>되기도 합니다.</p><p>화면에는 같은 목록이 보여 겉으로는 정상처럼 보이고, Network 패널을 열어 본 개발자나 서버 요청량을 확인한 담당자에게서 이런 형태로 돌아옵니다.</p>`,3),a(f,{title:`상품 목록: 메모를 입력할 때마다 목록 요청이 다시 나감`,env:`전체 브라우저 · 페이지 이동과 메모 입력이 있는 상품 목록 화면`,expected:`페이지가 바뀔 때만 목록 요청이 한 번 나가고, 메모 입력은 요청과 관계없음`,actual:`메모를 한 글자 입력할 때마다 같은 목록 요청이 반복되고, 응답을 state에 넣으면 요청이 계속 이어짐`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,[o(`상품 목록 화면을 열고 Network 패널에서 `),r(`code`,null,`Fetch/XHR`),o(`만 보이게 거릅니다.`)]),r(`li`,null,`관리자 메모 입력란에 다섯 글자를 입력합니다.`),r(`li`,null,[o(`목록 요청(`),r(`code`,null,`/api/products`),o(`)이 몇 번 나갔는지 확인합니다.`)]),r(`li`,null,`페이지 버튼을 한 번 누르고, 요청이 한 번에 끝나는지 확인합니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`의존성 배열에는 `),r(`strong`,null,`렌더마다 새로 만들어지는 객체·배열·함수 대신 원시값`),o(`(`),r(`code`,null,`page`),o(`, `),r(`code`,null,`keyword`),o(`)을 넣으세요. 요청에 쓸 객체는 효과 안에서 만들면 됩니다.`)],-1)]]),_:1})]),r(`section`,C,[d[3]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[4]||=r(`p`,null,`실제 React로 동작하는 예제입니다. ‘0으로’를 누른 뒤 메모를 입력하고 페이지를 바꾸면서 두 쪽의 실행 횟수를 비교해 보세요.`,-1),a(u,{load:p})]),r(`section`,w,[d[11]||=c(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>React는 렌더가 끝날 때마다 의존성 배열의 값을 <strong>이전 렌더의 값과 하나씩 <code>Object.is</code>로 비교</strong>합니다. 하나라도 다르면 효과를 다시 실행합니다. 숫자·문자열 같은 원시값은 값이 같으면 같다고 판단하지만, 객체·배열·함수는 <strong>같은 곳에서 만든 같은 것인지</strong>를 봅니다. 컴포넌트 함수 안에서 <code>const options = { page }</code>라고 쓰면 렌더할 때마다 새 객체가 만들어지므로, 내용이 같아도 항상 “바뀌었다”고 판단합니다.</p><p>그래서 메모 입력처럼 <strong>아무 state나 바뀌어 다시 그려지기만 해도</strong> 효과가 다시 실행됩니다. 효과 안에서 state를 바꾸면 더 나빠집니다. 요청 결과를 <code>setProducts</code>로 넣으면 다시 그려지고, 다시 그리면 새 <code>options</code>가 만들어져 효과가 또 실행되는 순환이 생깁니다. 응답이 매번 새 배열이면 이 순환은 끝나지 않습니다.</p>`,3),a(h,null,{default:n(()=>[...d[5]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`렌더`),o(),r(`code`,null,`options = { page }`),o(` 새 객체 생성`)]),r(`li`,null,[r(`strong`,null,`효과 실행`),o(` 이전 `),r(`code`,null,`options`),o(`와 다름 → 요청 → `),r(`code`,null,`setProducts(새 배열)`)]),r(`li`,null,[r(`strong`,null,`다시 렌더`),o(` 또 새 `),r(`code`,null,`options`),o(` → 2번으로 돌아감`)])],-1)]]),_:1}),d[12]||=c(`<p>이 순환이 응답을 기다리지 않고 바로 이어지면(예: 효과 안에서 바로 <code>setState</code>), 개발 환경의 Console에 <code>Maximum update depth exceeded</code>로 시작하는 메시지가 찍힙니다. React 19 기준으로 useEffect에서 생긴 반복은 오류를 던지지 않고 Console에 경고(<code>console.error</code>)로만 남기므로, 메시지가 찍힌 뒤에도 효과는 계속 실행됩니다. 메시지가 나오면 멈춰 준다고 기대하지 말고 원인을 고쳐야 합니다.</p><div class="table-wrap"><table><thead><tr><th>쓰는 방법</th><th>언제 다시 실행되나요?</th><th>흔한 문제</th></tr></thead><tbody><tr><td><code>useEffect(fn)</code> (배열 없음)</td><td>렌더할 때마다</td><td>효과에서 state를 바꾸면 계속 반복</td></tr><tr><td><code>useEffect(fn, [options])</code> (렌더 중 만든 객체)</td><td>사실상 렌더할 때마다</td><td>배열 없음과 같은 결과</td></tr><tr><td><code>useEffect(fn, [])</code> 안에서 <code>page</code> 사용</td><td>처음 한 번만</td><td>페이지를 바꿔도 첫 페이지 값으로 남음</td></tr><tr><td><code>useEffect(fn, [page, keyword])</code></td><td><code>page</code>나 <code>keyword</code>가 바뀔 때</td><td>의도한 동작</td></tr></tbody></table></div>`,2),r(`p`,null,[d[7]||=o(`반대로 효과에서 쓰는 값을 배열에서 빠뜨리면, 효과는 처음 만들어진 렌더의 값을 계속 씁니다(`,-1),a(g,{to:`/pub/react/state-snapshot`},{default:n(()=>[...d[6]||=[o(`state 스냅샷`,-1)]]),_:1}),d[8]||=o(`). 반복을 멈추려고 배열을 비우는 것은 해결이 아닙니다. `,-1),d[9]||=r(`strong`,null,`쓰는 값은 모두 넣고, 넣을 값이 렌더마다 바뀌지 않게`,-1),d[10]||=o(` 만드는 것이 해결입니다.`,-1)])]),r(`section`,T,[d[22]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[23]||=r(`p`,null,[o(`효과가 자꾸 실행될 때는 `),r(`strong`,null,`어떤 의존성이 바뀌었다고 판단되는지`),o(`를 찾습니다. 아래 순서로 확인하세요.`)],-1),a(_,null,{default:n(()=>[r(`ol`,null,[d[18]||=r(`li`,null,[r(`strong`,null,`효과 안에서 실행 횟수 세기`),o(` 효과 첫 줄에 `),r(`code`,null,`console.count('목록 요청')`),o(`을 넣고 메모를 입력해 봅니다. 숫자가 글자마다 늘어나면 관계없는 렌더에도 효과가 다시 실행되는 것입니다. Network 패널의 `),r(`code`,null,`Fetch/XHR`),o(` 목록에서도 같은 요청이 반복되는지 함께 봅니다.`)],-1),d[19]||=r(`li`,null,[r(`strong`,null,`의존성을 하나씩 비교하기`),o(` 효과 밖(컴포넌트 본문)에 `),r(`code`,null,`const prevRef = useRef(options)`),o(`를 두고, 효과 안에서 `),r(`code`,null,`console.log(prevRef.current === options)`),o(` 다음에 `),r(`code`,null,`prevRef.current = options`),o(`로 바꿔 넣어 봅니다. 내용이 같은데 `),r(`code`,null,`false`),o(`가 찍히면 렌더마다 새로 만들어지는 값입니다. 확인이 끝나면 지웁니다.`)],-1),d[20]||=r(`li`,null,[r(`strong`,null,`React DevTools로 다시 그린 이유 보기`),o(` React Developer Tools의 Components 탭에서 컴포넌트를 선택해 props와 hooks의 State 값을 봅니다. Profiler 탭 설정에서 ‘컴포넌트가 다시 그려진 이유를 기록’하는 옵션을 켜고 기록하면, 어떤 props·state 때문에 다시 그려졌는지 함께 볼 수 있습니다. 메뉴 이름은 DevTools 버전에 따라 다를 수 있습니다.`)],-1),r(`li`,null,[d[14]||=r(`strong`,null,`처음 한 번 더 실행되는 것은 StrictMode인지 구분하기`,-1),d[15]||=r(`code`,null,`<StrictMode>`,-1),d[16]||=o(`로 감싼 개발 환경에서는 컴포넌트가 처음 나타날 때 효과 → 정리 → 효과가 한 번 더 실행됩니다(`,-1),a(g,{to:`/pub/react/effect-cleanup`},{default:n(()=>[...d[13]||=[o(`useEffect 정리 함수`,-1)]]),_:1}),d[17]||=o(`). 처음 2번은 정상입니다. 그 뒤로도 입력할 때마다 늘어난다면 의존성 문제입니다.`,-1)]),d[21]||=r(`li`,null,[r(`strong`,null,`ESLint 경고 확인`),r(`code`,null,`eslint-plugin-react-hooks`),o(`의 `),r(`code`,null,`react-hooks/exhaustive-deps`),o(` 규칙을 켜 두면, 효과에서 쓰는데 배열에 빠진 값과 렌더마다 바뀌는 객체·함수 의존성을 편집기에서 경고로 알려 줍니다. 경고를 끄는 주석을 달기 전에 원인부터 고칩니다.`)],-1)])]),_:1})]),r(`section`,E,[d[24]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[25]||=r(`p`,null,[o(`목록 요청은 원시값(`),r(`code`,null,`page`),o(`, `),r(`code`,null,`keyword`),o(`)만 의존성에 넣고 요청 조건은 효과 안에서 만듭니다. 객체·함수를 자식 효과에 넘겨야 할 때는 `),r(`code`,null,`useMemo`),o(`·`),r(`code`,null,`useCallback`),o(`으로 고정하고, 계산으로 얻을 수 있는 값은 효과 없이 렌더 중에 계산합니다.`)],-1),a(k,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(O,{label:`JSX`},{default:n(()=>[a(v,{tabs:t(y)},null,8,[`tabs`])]),_:1}),a(O,{label:`TSX`},{default:n(()=>[a(v,{tabs:t(b)},null,8,[`tabs`])]),_:1})]),_:1}),d[26]||=c(`<ul><li><strong>원시값을 의존성으로</strong>: <code>[options]</code> 대신 <code>[page, keyword]</code>를 넣습니다. 숫자·문자열은 값이 같으면 같다고 판단하므로 메모 입력으로는 효과가 다시 실행되지 않습니다.</li><li><strong>객체는 효과 안에서 만듭니다.</strong> <code>URLSearchParams</code>처럼 요청에만 쓰는 객체는 효과 안에서 만들면 의존성에 넣을 필요가 없습니다.</li><li><strong><code>useMemo</code>·<code>useCallback</code>은 필요할 때만</strong>: 자식의 효과가 부모의 객체·함수를 의존성으로 받는 경우처럼, 같은 것을 유지해야 할 이유가 있을 때 씁니다. 모든 객체를 감쌀 필요는 없습니다.</li><li><strong>정리 함수도 함께</strong>: 페이지를 빠르게 바꾸면 이전 요청이 늦게 도착할 수 있습니다. <code>AbortController</code>로 이전 요청을 취소해 마지막 페이지의 결과만 남깁니다.</li></ul>`,1)]),d[29]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>“렌더마다 새로 만들어지는 값이 의존성에 들어 있다”거나 “효과가 필요 없는 일을 효과로 했다”는 같은 원인입니다. 아래 경우도 함께 확인하세요.</p><h3>함수를 의존성에 넣었을 때</h3><p>컴포넌트 안에서 만든 함수도 렌더마다 새로 만들어집니다. 효과에서만 쓰는 함수는 효과 안으로 옮기고, 다른 곳에서도 써야 하면 <code>useCallback</code>으로 고정합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// 효과 안으로 옮기면 함수가 아니라 page만 의존성에 넣으면 됩니다.</span>
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">loadProducts</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-title function_">fetch</span>(<span class="hljs-string">\`/api/products?page=<span class="hljs-subst">\${page}</span>\`</span>)
  }
  <span class="hljs-title function_">loadProducts</span>()
}, [page])
</code></pre><h3>계산할 수 있는 값을 state에 복사할 때</h3><p>목록을 걸러 다시 state에 넣는 효과는 렌더를 한 번 더 일으키고, 의존성을 빠뜨리면 이전 결과가 남습니다. 렌더 중에 바로 계산합니다. 계산이 무거울 때만 <code>useMemo</code>를 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// ✗ useEffect(() =&gt; setVisible(items.filter((item) =&gt; item.stock &gt; 0)), [items])</span>
<span class="hljs-keyword">const</span> visibleItems = items.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.<span class="hljs-property">stock</span> &gt; <span class="hljs-number">0</span>)
</code></pre><h3>클릭으로 할 일을 효과로 처리할 때</h3><p>“저장 버튼을 누르면 <code>saved</code>를 <code>true</code>로 바꾸고, 효과에서 <code>saved</code>를 보고 요청”하는 식이면 실행 시점을 따라가기 어렵습니다. 사용자의 동작으로 일어나는 일은 처리 함수에서 바로 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">handleSave</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title function_">saveDraft</span>(form)
  <span class="hljs-title function_">setToast</span>(<span class="hljs-string">&#39;저장했습니다.&#39;</span>)
}
</code></pre><h3>부모가 넘긴 객체 props에 의존할 때</h3><p>자식이 <code>filters</code> 객체를 의존성으로 쓰면 부모가 그릴 때마다 다시 실행됩니다. 부모에서 <code>useMemo</code>로 고정하거나, 자식이 원시값만 의존성에 넣습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 자식: 객체 대신 안에 든 원시값을 의존성으로</span>
<span class="hljs-keyword">const</span> { category, sort } = filters
<span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-title function_">fetch</span>(<span class="hljs-string">\`/api/search?category=<span class="hljs-subst">\${category}</span>&amp;sort=<span class="hljs-subst">\${sort}</span>\`</span>)
}, [category, sort])
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>경고를 끄는 대신 원인을 고칩니다.</strong> <code>// eslint-disable-next-line react-hooks/exhaustive-deps</code>로 값을 배열에서 빼면 반복은 멈춰도 오래된 값을 쓰는 문제가 생깁니다.</li><li><strong>효과 안의 state 변경은 조건을 확인합니다.</strong> 효과에서 state를 바꾼다면 그 state가 다시 같은 효과를 실행시키지 않는지 확인합니다. 응답을 state에 넣는 효과의 의존성에 그 state나 렌더 중 만든 객체가 있으면 반복됩니다.</li><li><strong>요청 반복은 화면에 드러나지 않을 수 있습니다.</strong> 같은 데이터가 다시 그려지면 겉보기에는 정상입니다. 목록·검색 화면을 만들면 Network 패널에서 요청 횟수를 한 번씩 확인합니다.</li><li><strong>로딩 표시가 반복되면 접근성에도 영향이 있습니다.</strong> 요청마다 로딩 문구를 <code>aria-live</code> 영역에 넣는 화면이라면, 불필요한 요청이 반복될 때 스크린 리더가 같은 안내를 계속 읽을 수 있습니다.</li></ul></section>`,2),r(`section`,D,[d[28]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(A,null,{default:n(()=>[...d[27]||=[r(`p`,null,`위 예제에서 ‘0으로’를 누른 뒤 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`메모에 다섯 글자를 입력하면 문제 쪽 effect 실행 횟수는 5번 늘고, 해결 쪽은 0번 그대로다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`페이지 버튼을 한 번 누르면 문제 쪽은 2번(요청 → 응답으로 다시 그림 → 또 요청), 해결 쪽은 1번 늘어난다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`문제 쪽 코드에서 `),r(`code`,null,`options`),o(`를 효과 안으로 옮기고 의존성을 `),r(`code`,null,`[page]`),o(`로 바꾸면 해결 쪽과 같아지는 이유를 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{G as default,R as duration,P as group,O as id,B as keyProperty,N as lead,L as level,j as navTitle,k as order,z as prerequisites,W as references,U as related,V as status,M as summary,I as tags,A as title,F as topic,H as updated};