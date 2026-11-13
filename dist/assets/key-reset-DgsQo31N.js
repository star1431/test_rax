const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./KeyResetDemo-DTE6filk.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./KeyResetDemo-IxFjeyzP.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-DHgvQBhl.js";import{t as u}from"./ReactIsland-9-BhU6jW.js";var d=`import { useState } from 'react'
import TransactionMemo from './TransactionMemo'

export default function TransactionDetail({ transactions }) {
  const [currentId, setCurrentId] = useState(transactions[0].id)
  const current = transactions.find((item) => item.id === currentId)

  return (
    <>
      <div role="group" aria-label="거래 선택">
        {transactions.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === currentId}
            onClick={() => setCurrentId(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* key가 바뀌면 이전 컴포넌트를 버리고 상태가 비어 있는 새 컴포넌트를 만듭니다. */}
      {current && <TransactionMemo key={current.id} transaction={current} />}
    </>
  )
}`,f=`import { useState } from 'react'

export default function TransactionMemo({ transaction }) {
  const [memo, setMemo] = useState('')

  return (
    <div className="transaction-memo">
      <strong>{transaction.title}</strong>
      <label htmlFor="memo">메모</label>
      <input id="memo" type="text" value={memo} onChange={(event) => setMemo(event.target.value)} />
    </div>
  )
}`,p=`// 목록: 삭제·정렬이 있는 목록은 index가 아닌 고유 id를 key로 씁니다.
export function MemoList({ items, onRemove }) {
  return (
    <ul>
      {items.map((item) => (
        // key={index}면 첫 줄을 지웠을 때 둘째 줄의 입력값이 첫 줄 자리에 남습니다.
        <li key={item.id}>
          <input type="text" defaultValue={item.text} aria-label={\`\${item.label} 메모\`} />
          <button type="button" onClick={() => onRemove(item.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  )
}`,m=`import { useState } from 'react'
import TransactionMemo, { type Transaction } from './TransactionMemo'

type TransactionDetailProps = {
  transactions: Transaction[]
}

export default function TransactionDetail({ transactions }: TransactionDetailProps) {
  const [currentId, setCurrentId] = useState(transactions[0].id)
  const current = transactions.find((item) => item.id === currentId)

  return (
    <>
      <div role="group" aria-label="거래 선택">
        {transactions.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === currentId}
            onClick={() => setCurrentId(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* key가 바뀌면 이전 컴포넌트를 버리고 상태가 비어 있는 새 컴포넌트를 만듭니다. */}
      {current && <TransactionMemo key={current.id} transaction={current} />}
    </>
  )
}`,h=`import { useState } from 'react'

export type Transaction = {
  id: string
  title: string
}

type TransactionMemoProps = {
  transaction: Transaction
}

export default function TransactionMemo({ transaction }: TransactionMemoProps) {
  const [memo, setMemo] = useState('')

  return (
    <div className="transaction-memo">
      <strong>{transaction.title}</strong>
      <label htmlFor="memo">메모</label>
      <input id="memo" type="text" value={memo} onChange={(event) => setMemo(event.target.value)} />
    </div>
  )
}`,g=`type MemoItem = {
  id: string
  label: string
  text: string
}

type MemoListProps = {
  items: MemoItem[]
  onRemove: (id: string) => void
}

// 목록: 삭제·정렬이 있는 목록은 index가 아닌 고유 id를 key로 씁니다.
export function MemoList({ items, onRemove }: MemoListProps) {
  return (
    <ul>
      {items.map((item) => (
        // key={index}면 첫 줄을 지웠을 때 둘째 줄의 입력값이 첫 줄 자리에 남습니다.
        <li key={item.id}>
          <input type="text" defaultValue={item.text} aria-label={\`\${item.label} 메모\`} />
          <button type="button" onClick={() => onRemove(item.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  )
}`,_=[{label:`TransactionDetail.jsx`,language:`javascript`,code:d},{label:`TransactionMemo.jsx`,language:`javascript`,code:f},{label:`목록의 key`,language:`javascript`,code:p}],v=[{label:`TransactionDetail.tsx`,language:`typescript`,code:m},{label:`TransactionMemo.tsx`,language:`typescript`,code:h},{label:`목록의 key`,language:`typescript`,code:g}],y={class:`doc-body`},b={id:`section-0`},x={id:`section-1`},S={id:`section-2`},C={id:`section-4`},w={id:`section-5`},T={id:`section-8`},E=`key-reset`,D=2,O=`다른 항목으로 바꿨는데 입력값이 남아 있을 때 (key)`,k=`key로 상태 초기화`,A=`상세 화면에서 거래를 바꿔도 앞에서 쓴 메모가 남는 이유(같은 자리의 같은 컴포넌트는 상태 유지)를 이해하고, key로 상태를 초기화하는 방법과 목록에서 index를 key로 쓰면 안 되는 이유를 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,j=`다른 거래를 골랐는데 앞 거래의 메모가 그대로 보인다면?
항목이 바뀌면 key도 바뀌게 하세요. React가 새 컴포넌트로 다시 만듭니다.
`,M=`상태·입력`,N=`상태`,P=[`React`,`key`,`useState`,`상태 초기화`,`목록`,`index`,`JSX`,`TSX`],F=`중급`,I=`약 10분`,L=[`useState`,`목록 렌더링(map)`],R=`key={item.id}`,z=`published`,B=`2026-11-11`,V=[`effect-cleanup`,`controlled-input`],H=[{title:`React — State를 보존하고 초기화하기`,url:`https://ko.react.dev/learn/preserving-and-resetting-state`},{title:`React — 목록 렌더링(key)`,url:`https://ko.react.dev/learn/rendering-lists`}],U={__name:`key-reset`,setup(d,{expose:f}){f({frontmatter:{id:`key-reset`,order:2,title:`다른 항목으로 바꿨는데 입력값이 남아 있을 때 (key)`,navTitle:`key로 상태 초기화`,summary:`상세 화면에서 거래를 바꿔도 앞에서 쓴 메모가 남는 이유(같은 자리의 같은 컴포넌트는 상태 유지)를 이해하고, key로 상태를 초기화하는 방법과 목록에서 index를 key로 쓰면 안 되는 이유를 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`다른 거래를 골랐는데 앞 거래의 메모가 그대로 보인다면?
항목이 바뀌면 key도 바뀌게 하세요. React가 새 컴포넌트로 다시 만듭니다.
`,group:`상태·입력`,topic:`상태`,tags:[`React`,`key`,`useState`,`상태 초기화`,`목록`,`index`,`JSX`,`TSX`],level:`중급`,duration:`약 10분`,prerequisites:[`useState`,`목록 렌더링(map)`],keyProperty:`key={item.id}`,status:`published`,updated:`2026-11-11`,related:[`effect-cleanup`,`controlled-input`],references:[{title:`React — State를 보존하고 초기화하기`,url:`https://ko.react.dev/learn/preserving-and-resetting-state`},{title:`React — 목록 렌더링(key)`,url:`https://ko.react.dev/learn/rendering-lists`}]}});let p=()=>l(()=>import(`./KeyResetDemo-DTE6filk.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocSteps`),g=s(`DocInspect`),E=s(`CodePanel`),D=s(`DocTab`),O=s(`DocTabs`),k=s(`DocPractice`);return e(),i(`div`,y,[r(`section`,b,[d[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),d[3]||=r(`p`,null,[o(`거래 목록에서 하나를 고르면 아래에 상세와 메모 입력창이 나옵니다. 첫 거래에 메모를 쓰고 `),r(`strong`,null,`다른 거래를 골랐더니, 앞에서 쓴 메모가 그대로`),o(` 남아 있습니다. 그대로 저장하면 엉뚱한 거래에 메모가 붙습니다.`)],-1),d[4]||=r(`p`,null,`한 항목만 보고 확인하면 문제가 없어서, 여러 항목을 오가며 입력하는 QA 테스트에서 이런 형태로 돌아옵니다.`,-1),a(f,{title:`거래내역상세: 다른 거래를 골라도 앞 거래의 메모가 남음`,env:`전체 브라우저 · 거래 목록에서 거래를 바꿔 선택할 때`,expected:`거래를 바꾸면 메모 입력창이 비어 있음`,actual:`앞 거래에서 쓴 메모가 그대로 보이고, 저장하면 새로 고른 거래에 저장됨`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`거래 목록에서 ‘네이버페이’를 선택합니다.`),r(`li`,null,`메모 입력창에 ‘사무용품 구입’을 입력합니다.`),r(`li`,null,`저장하지 않고 ‘관리비 이체’를 선택합니다.`),r(`li`,null,`메모 입력창을 확인합니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`항목이 바뀌면 새로 시작해야 하는 컴포넌트에는 `),r(`strong`,null,[r(`code`,null,`key={항목.id}`),o(`를`)]),o(` 주세요. key가 바뀌면 React는 이전 컴포넌트를 지우고 상태가 비어 있는 새 컴포넌트를 만듭니다.`)],-1)]]),_:1})]),r(`section`,x,[d[5]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[6]||=r(`p`,null,`첫 거래에서 메모를 쓰고 다른 거래를 눌러 보세요. 두 쪽 모두 같은 컴포넌트이고, key만 다릅니다.`,-1),a(u,{load:p})]),r(`section`,S,[d[8]||=r(`h2`,null,[r(`span`,{class:`section-no`},`03`),o(` 왜 메모가 남을까요?`)],-1),d[9]||=r(`p`,null,[o(`React는 화면을 다시 그릴 때 `),r(`strong`,null,`같은 자리에 같은 종류의 컴포넌트`),o(`가 있으면 “같은 컴포넌트가 계속 있다”고 보고 상태(`),r(`code`,null,`useState`),o(`)를 그대로 둡니다. 거래를 바꾸면 `),r(`code`,null,`transaction`),o(` props만 새 값으로 바뀌고, 메모 상태는 유지됩니다.`)],-1),a(h,null,{default:n(()=>[...d[7]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`key 없음`),o(` 같은 자리·같은 컴포넌트 → 상태 유지`)]),r(`li`,null,[r(`strong`,null,`key 바뀜`),o(` 다른 컴포넌트로 판단 → 상태 새로 시작`)])],-1)]]),_:1}),d[10]||=r(`p`,null,[o(`props가 바뀔 때 `),r(`code`,null,`useEffect`),o(`로 메모를 비우는 방법도 있지만, 한 번 그려진 뒤 다시 비우는 것이라 순간적으로 이전 값이 보이고 코드도 길어집니다. `),r(`strong`,null,`처음부터 새로 만드는 key`),o(`가 간단하고 정확합니다.`)],-1)]),d[17]||=c(`<section id="section-3"><h2><span class="section-no">04</span> 목록에서도 같은 원리입니다</h2><p>목록의 <code>key</code>도 “이 줄이 어느 항목인지” 알려 주는 값입니다. <code>key={index}</code>를 쓰면 첫 줄을 지웠을 때 둘째 항목이 첫 번째 자리(index 0)를 물려받아, <strong>입력창 안의 글자는 그대로 남고 항목만 바뀌는</strong> 일이 생깁니다.</p><div class="table-wrap"><table><thead><tr><th>key</th><th>첫 줄 삭제 후</th></tr></thead><tbody><tr><td><code>key={index}</code></td><td>줄은 하나 줄지만 입력값이 한 칸씩 어긋남</td></tr><tr><td><code>key={item.id}</code></td><td>지운 줄만 정확히 사라짐</td></tr></tbody></table></div><p>삭제·추가·정렬이 없는 고정 목록이라면 index도 동작하지만, 서버에서 받은 항목처럼 바뀔 수 있는 목록은 고유 id를 씁니다.</p></section>`,1),r(`section`,C,[d[12]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 원인 찾기`)],-1),d[13]||=r(`p`,null,[o(`상태가 남을 때는 `),r(`strong`,null,`컴포넌트가 새로 만들어졌는지, 그대로 유지됐는지`),o(`를 확인합니다. React Developer Tools로 아래 순서대로 보세요.`)],-1),a(g,null,{default:n(()=>[...d[11]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`Components 탭에서 메모 컴포넌트 선택`),o(` Components 탭의 트리에서 `),r(`code`,null,`TransactionMemo`),o(`를 선택합니다. 오른쪽 hooks의 State에 입력한 메모가 들어 있는 것을 확인합니다.`)]),r(`li`,null,[r(`strong`,null,`거래를 바꾸며 props와 State 비교`),o(` 선택한 채로 다른 거래를 누릅니다. props의 `),r(`code`,null,`transaction`),o(`은 바뀌는데 State의 메모는 그대로라면, 같은 컴포넌트가 유지되고 있는 것입니다.`)]),r(`li`,null,[r(`strong`,null,`트리에서 key 확인`),o(` key가 있는 컴포넌트는 트리에서 이름 옆에 `),r(`code`,null,`key="tx-1"`),o(`처럼 표시됩니다. 아무것도 없다면 key가 없어 같은 자리의 같은 컴포넌트로 취급됩니다.`)]),r(`li`,null,[r(`strong`,null,`목록이라면 key 값 확인`),o(` 목록에서 key가 빠지면 Console에 `),r(`code`,null,`Each child in a list should have a unique "key" prop.`),o(` 경고가 나옵니다. 다만 `),r(`code`,null,`key={index}`),o(`는 경고가 나오지 않으므로 트리에서 key 값이 `),r(`code`,null,`0`),o(`, `),r(`code`,null,`1`),o(`, `),r(`code`,null,`2`),o(`처럼 순서 번호인지 직접 확인합니다.`)])],-1)]]),_:1})]),r(`section`,w,[d[14]||=r(`h2`,null,[r(`span`,{class:`section-no`},`06`),o(` 해결 코드`)],-1),a(O,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(D,{label:`JSX`},{default:n(()=>[a(E,{tabs:t(_)},null,8,[`tabs`])]),_:1}),a(D,{label:`TSX`},{default:n(()=>[a(E,{tabs:t(v)},null,8,[`tabs`])]),_:1})]),_:1})]),d[18]||=c(`<section id="section-6"><h2><span class="section-no">07</span> 비슷한 상황</h2><p>“같은 자리의 같은 컴포넌트는 상태를 유지한다”는 규칙 때문에 생기는 문제는 상세 화면 말고도 자주 나옵니다. 함께 확인해 두세요.</p><h3>props 값으로 상태를 시작할 때</h3><p><code>useState(transaction.memo)</code>의 처음 값은 컴포넌트가 처음 만들어질 때 한 번만 쓰입니다. 이후 <code>transaction</code>이 바뀌어도 상태는 그대로이므로, 여기서도 부모에서 key를 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">TransactionMemo</span>(<span class="hljs-params">{ transaction }</span>) {
  <span class="hljs-comment">// transaction이 바뀌어도 처음 값은 다시 쓰이지 않습니다.</span>
  <span class="hljs-keyword">const</span> [memo, setMemo] = <span class="hljs-title function_">useState</span>(transaction.<span class="hljs-property">memo</span>)
  <span class="hljs-comment">// ...</span>
}

&lt;<span class="hljs-title class_">TransactionMemo</span> key={transaction.<span class="hljs-property">id</span>} transaction={transaction} /&gt;
</code></pre><h3>조건에 따라 같은 컴포넌트를 바꿔 보여 줄 때</h3><p>삼항 연산자로 같은 컴포넌트를 바꿔 그리면, 자리와 종류가 같아서 입력값이 넘어옵니다. 탭마다 새로 시작해야 하면 key를 다르게 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">{tab === <span class="hljs-string">&#39;deposit&#39;</span> ? (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SearchForm</span> <span class="hljs-attr">key</span>=<span class="hljs-string">&quot;deposit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;deposit&quot;</span> /&gt;</span></span>
) : (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">SearchForm</span> <span class="hljs-attr">key</span>=<span class="hljs-string">&quot;withdraw&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;withdraw&quot;</span> /&gt;</span></span>
)}
</code></pre><h3>주소만 바뀌는 상세 화면</h3><p><code>/detail/1</code>에서 <code>/detail/2</code>로 이동하면 라우터는 같은 상세 컴포넌트를 그대로 쓰는 경우가 많습니다. 주소의 id가 바뀔 때 새로 시작해야 한다면 그 id를 key로 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">DetailPage</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> { id } = <span class="hljs-title function_">useParams</span>()
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TransactionDetailView</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{id}</span> <span class="hljs-attr">id</span>=<span class="hljs-string">{id}</span> /&gt;</span></span>
}
</code></pre></section><section id="section-7"><h2><span class="section-no">08</span> 적용 시 주의점</h2><ul><li><strong>key는 형제 사이에서만 고유하면 됩니다.</strong> 화면 전체에서 고유할 필요는 없지만, 같은 목록 안에서는 겹치면 안 됩니다.</li><li><strong>key는 props로 전달되지 않습니다.</strong> 자식 안에서 <code>props.key</code>는 없으므로, id가 필요하면 <code>id={item.id}</code>처럼 따로 넘깁니다.</li><li><strong>필요한 곳에만 씁니다.</strong> key를 바꾸면 그 아래 전체를 새로 만들므로, 유지해야 할 상태(펼침 상태, 스크롤 위치 등)도 함께 사라집니다. 초기화가 필요한 범위의 컴포넌트에만 줍니다.</li><li><strong>랜덤 값은 key로 쓰지 않습니다.</strong> <code>key={Math.random()}</code>은 그릴 때마다 바뀌어 매번 새로 만들므로 입력 중인 글자가 계속 지워집니다.</li></ul></section>`,2),r(`section`,T,[d[16]||=r(`h2`,null,[r(`span`,{class:`section-no`},`09`),o(` 짧은 실습`)],-1),a(k,null,{default:n(()=>[...d[15]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`문제 쪽은 거래를 바꿔도 메모가 남고, 해결 쪽은 비워진다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`해결 쪽에서 다시 첫 거래로 돌아오면 처음 쓴 메모도 사라진다(컴포넌트를 새로 만들기 때문).`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`거래마다 쓴 메모를 유지하려면 상태를 어디에 둬야 할지 설명할 수 있다(부모가 거래 id별로 보관).`)])])],-1)]]),_:1})])])}}};export{U as default,I as duration,M as group,E as id,R as keyProperty,j as lead,F as level,k as navTitle,D as order,L as prerequisites,H as references,V as related,z as status,A as summary,P as tags,O as title,N as topic,B as updated};