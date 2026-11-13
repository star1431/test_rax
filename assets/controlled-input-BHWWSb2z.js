const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ControlledInputDemo-DE4OlP74.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./ControlledInputDemo-Cgczmb3I.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-Dxflp_jg.js";import{t as u}from"./ReactIsland-tK0hPT1Q.js";var d=`import { useId } from 'react'

// 메모 입력: 값은 부모가 가지고(value), 바뀔 때 부모에게 알립니다(onChange).
export default function MemoField({ value, onChange, maxLength = 20 }) {
  const id = useId()

  return (
    <div className="memo-field">
      <label htmlFor={\`\${id}-memo\`}>메모</label>
      <textarea
        id={\`\${id}-memo\`}
        rows={5}
        maxLength={maxLength}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={\`\${id}-count\`}
      />
      {value && (
        <button type="button" className="memo-field-clear" onClick={() => onChange('')}>
          지우기
        </button>
      )}
      <p id={\`\${id}-count\`} className="memo-field-count">
        <strong>{value.length}자</strong> / {maxLength}자
      </p>
    </div>
  )
}`,f=`import { useId } from 'react'

// 분류 라디오: 선택값은 부모가 가지고, checked와 onChange를 함께 씁니다.
export default function CategoryRadio({ options, value, onChange }) {
  // 같은 화면에 두 번 그려도 라디오 묶음(name)이 겹치지 않게 합니다.
  const id = useId()

  return (
    <fieldset className="category-radio">
      <legend>분류</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={\`\${id}-category\`}
            value={option}
            checked={value === option}
            onChange={(event) => onChange(event.target.value)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  )
}`,p=`import { useState } from 'react'
import CategoryRadio from './CategoryRadio'
import MemoField from './MemoField'

const categories = ['임대료', '부가세', '물품대금', '회식비', '관리비', '급여']

export default function TransactionMemoForm() {
  const [category, setCategory] = useState(categories[0])
  const [memo, setMemo] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ category, memo })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CategoryRadio options={categories} value={category} onChange={setCategory} />
      <MemoField value={memo} onChange={setMemo} maxLength={20} />
      <button type="submit">확인</button>
    </form>
  )
}`,m=`import { useId } from 'react'

type MemoFieldProps = {
  value: string
  onChange: (value: string) => void
  maxLength?: number
}

// 메모 입력: 값은 부모가 가지고(value), 바뀔 때 부모에게 알립니다(onChange).
export default function MemoField({ value, onChange, maxLength = 20 }: MemoFieldProps) {
  const id = useId()

  return (
    <div className="memo-field">
      <label htmlFor={\`\${id}-memo\`}>메모</label>
      <textarea
        id={\`\${id}-memo\`}
        rows={5}
        maxLength={maxLength}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-describedby={\`\${id}-count\`}
      />
      {value && (
        <button type="button" className="memo-field-clear" onClick={() => onChange('')}>
          지우기
        </button>
      )}
      <p id={\`\${id}-count\`} className="memo-field-count">
        <strong>{value.length}자</strong> / {maxLength}자
      </p>
    </div>
  )
}`,h=`import { useId } from 'react'

type CategoryRadioProps = {
  options: string[]
  value: string
  onChange: (value: string) => void
}

// 분류 라디오: 선택값은 부모가 가지고, checked와 onChange를 함께 씁니다.
export default function CategoryRadio({ options, value, onChange }: CategoryRadioProps) {
  // 같은 화면에 두 번 그려도 라디오 묶음(name)이 겹치지 않게 합니다.
  const id = useId()

  return (
    <fieldset className="category-radio">
      <legend>분류</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={\`\${id}-category\`}
            value={option}
            checked={value === option}
            onChange={(event) => onChange(event.target.value)}
          />
          {option}
        </label>
      ))}
    </fieldset>
  )
}`,g=`import { useState, type FormEvent } from 'react'
import CategoryRadio from './CategoryRadio'
import MemoField from './MemoField'

const categories = ['임대료', '부가세', '물품대금', '회식비', '관리비', '급여']

export default function TransactionMemoForm() {
  const [category, setCategory] = useState(categories[0])
  const [memo, setMemo] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ category, memo })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CategoryRadio options={categories} value={category} onChange={setCategory} />
      <MemoField value={memo} onChange={setMemo} maxLength={20} />
      <button type="submit">확인</button>
    </form>
  )
}`,_=[{label:`MemoField.jsx`,language:`javascript`,code:d},{label:`CategoryRadio.jsx`,language:`javascript`,code:f},{label:`TransactionMemoForm.jsx`,language:`javascript`,code:p}],v=[{label:`MemoField.tsx`,language:`typescript`,code:m},{label:`CategoryRadio.tsx`,language:`typescript`,code:h},{label:`TransactionMemoForm.tsx`,language:`typescript`,code:g}],y={class:`doc-body`},b={id:`section-0`},x={id:`section-1`},S={id:`section-3`},C={id:`section-4`},w={id:`section-7`},T=`controlled-input`,E=3,D=`입력이 안 되거나 글자 수가 안 바뀔 때 (제어 입력)`,O=`제어 입력`,k=`value만 주고 onChange가 없어 읽기 전용이 되거나, defaultValue라 글자 수·지우기가 동작하지 않는 문제를 value + onChange 제어 입력으로 해결하고, 라디오 그룹과 글자 수 안내까지 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,A=`입력창에 글자가 안 써지거나, 써도 글자 수가 0자 그대로라면?
값은 상태(value)로 넣고, 바뀔 때마다 onChange로 상태를 갱신하세요.
`,j=`상태·입력`,M=`입력`,N=[`React`,`제어 컴포넌트`,`value`,`onChange`,`defaultValue`,`textarea`,`radio`,`글자 수`,`JSX`,`TSX`],P=`기초`,F=`약 11분`,I=[`useState`,`폼 요소`],L=`value + onChange`,R=`published`,z=`2026-11-13`,B=[`class-name`,`key-reset`],V=[{title:`React — input (제어 컴포넌트)`,url:`https://ko.react.dev/reference/react-dom/components/input`},{title:`React — textarea`,url:`https://ko.react.dev/reference/react-dom/components/textarea`}],H={__name:`controlled-input`,setup(d,{expose:f}){f({frontmatter:{id:`controlled-input`,order:3,title:`입력이 안 되거나 글자 수가 안 바뀔 때 (제어 입력)`,navTitle:`제어 입력`,summary:`value만 주고 onChange가 없어 읽기 전용이 되거나, defaultValue라 글자 수·지우기가 동작하지 않는 문제를 value + onChange 제어 입력으로 해결하고, 라디오 그룹과 글자 수 안내까지 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`입력창에 글자가 안 써지거나, 써도 글자 수가 0자 그대로라면?
값은 상태(value)로 넣고, 바뀔 때마다 onChange로 상태를 갱신하세요.
`,group:`상태·입력`,topic:`입력`,tags:[`React`,`제어 컴포넌트`,`value`,`onChange`,`defaultValue`,`textarea`,`radio`,`글자 수`,`JSX`,`TSX`],level:`기초`,duration:`약 11분`,prerequisites:[`useState`,`폼 요소`],keyProperty:`value + onChange`,status:`published`,updated:`2026-11-13`,related:[`class-name`,`key-reset`],references:[{title:`React — input (제어 컴포넌트)`,url:`https://ko.react.dev/reference/react-dom/components/input`},{title:`React — textarea`,url:`https://ko.react.dev/reference/react-dom/components/textarea`}]}});let p=()=>l(()=>import(`./ControlledInputDemo-DE4OlP74.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocInspect`),g=s(`CodePanel`),T=s(`DocTab`),E=s(`DocTabs`),D=s(`DocPractice`);return e(),i(`div`,y,[r(`section`,b,[d[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),d[3]||=r(`p`,null,[o(`거래내역상세 팝업의 메모 입력창에 글자 수(`),r(`code`,null,`0자 / 20자`),o(`)와 지우기 버튼을 붙였습니다. 그런데 글자를 써도 `),r(`strong`,null,`글자 수가 0자 그대로이고, 지우기를 눌러도 입력창이 비워지지 않습니다.`),o(` 분류 라디오는 눌러도 선택이 바뀌지 않습니다. 개발 서버 콘솔에는 이런 경고가 남습니다.`)],-1),d[4]||=r(`pre`,{class:`doc-code`,tabindex:`0`},[r(`code`,{class:`hljs`},"You provided a `checked` prop to a form field without an `onChange` handler.\nThis will render a read-only field. If the field should be mutable use `defaultChecked`.\nOtherwise, set either `onChange` or `readOnly`.\n")],-1),d[5]||=r(`p`,null,`마크업과 스타일만 확인할 때는 글자가 써지는 것만 보고 넘어가기 쉽고, 개발자가 저장 기능을 붙인 뒤 이런 형태로 돌아옵니다.`,-1),a(f,{title:`거래내역상세 팝업: 메모를 입력해도 글자 수가 0자로 고정`,env:`전체 브라우저 · 메모 입력창과 분류 라디오가 있는 팝업`,expected:`입력한 만큼 글자 수가 늘고, 지우기로 입력창이 비워지며, 분류 선택이 바뀜`,actual:`글자 수는 0자 그대로, 지우기를 눌러도 글자가 남고, 분류는 처음 선택에서 바뀌지 않음`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`거래 목록에서 거래를 눌러 거래내역상세 팝업을 엽니다.`),r(`li`,null,`메모 입력창에 ‘관리비 정산’을 입력하고 글자 수를 확인합니다.`),r(`li`,null,`‘지우기’를 누른 뒤 입력창을 확인합니다.`),r(`li`,null,`분류에서 ‘부가세’를 누릅니다.`)],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`화면에 보이는 값과 상태를 맞추려면 `),r(`strong`,null,[r(`code`,null,`value`),o(`(라디오는 `),r(`code`,null,`checked`),o(`)와 `),r(`code`,null,`onChange`),o(`를 함께`)]),o(` 쓰세요. 입력할 때마다 상태가 바뀌고, 글자 수·지우기·저장이 모두 그 상태를 기준으로 동작합니다.`)],-1)]]),_:1})]),r(`section`,x,[d[6]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[7]||=r(`p`,null,`메모를 입력하고 ‘지우기’와 분류를 눌러 보세요. 아래 ‘상태’는 컴포넌트가 알고 있는 값입니다.`,-1),a(u,{load:p})]),d[16]||=c(`<section id="section-2"><h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>입력 요소를 다루는 방법은 두 가지입니다.</p><div class="table-wrap"><table><thead><tr><th>방식</th><th>쓰는 속성</th><th>값을 가진 쪽</th><th>특징</th></tr></thead><tbody><tr><td>제어 입력</td><td><code>value</code> + <code>onChange</code> (라디오·체크박스는 <code>checked</code> + <code>onChange</code>)</td><td>React 상태</td><td>입력할 때마다 상태가 바뀜. 글자 수·지우기·검증을 상태로 처리</td></tr><tr><td>비제어 입력</td><td><code>defaultValue</code> (<code>defaultChecked</code>)</td><td>브라우저(DOM)</td><td>처음 값만 넣음. 이후 값은 제출할 때 <code>FormData</code>나 <code>ref</code>로 읽음</td></tr></tbody></table></div><p>예제의 문제 쪽은 두 방식이 섞여 있습니다.</p><ul><li><strong>메모(<code>defaultValue</code>)</strong>: 처음 값만 넣고 끝이라, 입력해도 상태(<code>memo</code>)는 <code>&#39;&#39;</code> 그대로입니다. 글자 수는 상태를 세므로 <code>0자</code>이고, 지우기는 상태만 비우므로 화면의 글자가 그대로입니다.</li><li><strong>분류(<code>checked</code>만)</strong>: React가 <code>checked</code> 값을 계속 화면에 맞추는데, 바꿀 방법(<code>onChange</code>)이 없으니 읽기 전용이 됩니다. 위 경고가 바로 이 경우입니다. (경고는 개발 환경에서만 나옵니다.)</li></ul></section>`,1),r(`section`,S,[d[9]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[10]||=r(`p`,null,[o(`입력값이 어긋날 때는 `),r(`strong`,null,`화면에 보이는 값과 컴포넌트 상태가 같은지`),o(`부터 비교합니다. 아래 순서로 보면 어느 입력 요소가 원인인지 좁힐 수 있습니다. React DevTools 단계는 내 프로젝트의 개발 서버(`),r(`code`,null,`npm run dev`),o(`)에서 확인하세요. 배포 빌드에서는 컴포넌트 이름이 짧게 바뀌어 이 사이트의 예제로는 따라 하기 어렵습니다.`)],-1),a(h,null,{default:n(()=>[...d[8]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`Console 경고 확인`),o(` 개발 서버에서 Console을 엽니다. `),r(`code`,null,`onChange`),o(` 없이 `),r(`code`,null,`value`),o(`·`),r(`code`,null,`checked`),o(`를 줬다는 경고나 `),r(`code`,null,`changing an uncontrolled input to be controlled`),o(` 경고가 있으면 해당 요소의 연결 방식이 원인입니다.`)]),r(`li`,null,[r(`strong`,null,`Components 탭에서 상태 확인`),o(` React Developer Tools의 Components 탭에서 폼 컴포넌트를 선택하고 hooks의 State 값을 봅니다. 글자를 입력해도 메모 상태가 `),r(`code`,null,`''`),o(` 그대로라면 입력이 상태로 전달되지 않는 것입니다.`)]),r(`li`,null,[r(`strong`,null,`Console에서 화면 값 확인`),o(` Elements 패널에서 입력창을 선택하고 Console에 `),r(`code`,null,`$0.value`),o(`를 입력합니다. 화면 값은 있는데 State는 비어 있다면 값을 브라우저가 따로 가진 비제어 입력입니다.`)]),r(`li`,null,[r(`strong`,null,`입력 컴포넌트의 props 확인`),o(` 공통 입력 컴포넌트를 쓴다면 Components 탭에서 그 컴포넌트를 선택해 props에 `),r(`code`,null,`value`),o(`와 `),r(`code`,null,`onChange`),o(`가 함께 넘어오는지 봅니다. 하나만 있거나 `),r(`code`,null,`defaultValue`),o(`만 있으면 연결을 고칩니다.`)])],-1)]]),_:1})]),r(`section`,C,[d[11]||=r(`h2`,null,[r(`span`,{class:`section-no`},`05`),o(` 해결 코드`)],-1),d[12]||=r(`p`,null,[o(`메모와 분류를 각각 컴포넌트로 만들고, 값은 부모 폼이 가집니다. 실무에서 자주 만드는 `),r(`strong`,null,`팝업 안 메모 + 분류 선택`),o(` 구조입니다.`)],-1),a(E,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(T,{label:`JSX`},{default:n(()=>[a(g,{tabs:t(_)},null,8,[`tabs`])]),_:1}),a(T,{label:`TSX`},{default:n(()=>[a(g,{tabs:t(v)},null,8,[`tabs`])]),_:1})]),_:1}),d[13]||=c(`<ul><li><strong>글자 수 연결</strong>: 글자 수 문단에 <code>id</code>를 주고 입력창의 <code>aria-describedby</code>로 연결하면, 스크린 리더가 입력창과 함께 “0자 / 20자”를 읽습니다. <code>useId()</code>로 화면마다 겹치지 않는 id를 만듭니다.</li><li><strong>라디오 그룹</strong>: <code>fieldset</code> + <code>legend</code>로 묶으면 그룹 이름(분류)이 함께 읽힙니다. 같은 그룹은 <code>name</code>을 같게 둡니다.</li><li><strong>최대 글자 수</strong>: <code>maxLength</code>로 입력 자체를 막고, 글자 수 표시로 남은 양을 알려 줍니다.</li></ul>`,1)]),d[17]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>값을 가진 쪽이 상태와 브라우저로 나뉘면 다른 입력 요소에서도 같은 증상이 나옵니다. 함께 확인해 두세요.</p><h3>서버 값이 늦게 도착할 때</h3><p>처음 상태가 <code>undefined</code>였다가 서버 값이 들어오면 비제어에서 제어로 바뀌었다는 경고가 납니다. <code>null</code>이 올 수 있는 값도 빈 문자열로 바꿔 넘깁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// useState()가 아니라 &#39;&#39;로 시작합니다.</span>
<span class="hljs-keyword">const</span> [memo, setMemo] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#39;&#39;</span>)

<span class="hljs-comment">// 서버 값이 null일 수 있으면 &#39;&#39;로 바꿔 넣습니다.</span>
<span class="hljs-title function_">setMemo</span>(data.<span class="hljs-property">memo</span> ?? <span class="hljs-string">&#39;&#39;</span>)
</code></pre><h3>defaultValue에 서버 값을 넣을 때</h3><p><code>defaultValue</code>는 처음 그릴 때 한 번만 반영됩니다. 데이터가 나중에 도착하거나 다른 항목으로 바뀌어도 입력창은 처음 값 그대로입니다. 바뀌는 값을 보여 줘야 하면 제어 입력으로 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 데이터가 바뀌어도 입력창은 그대로입니다.</span>
&lt;input defaultValue={detail.<span class="hljs-property">memo</span>} /&gt;

<span class="hljs-comment">// 상태로 넣고 onChange로 갱신합니다.</span>
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{memo}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(event)</span> =&gt;</span> setMemo(event.target.value)} /&gt;</span>
</code></pre><h3>체크박스</h3><p>체크박스는 <code>value</code>가 아니라 <code>checked</code>로 제어하고, 바뀐 값은 <code>event.target.checked</code>로 읽습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">&lt;input
  type=<span class="hljs-string">&quot;checkbox&quot;</span>
  checked={agree}
  onChange={<span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> <span class="hljs-title function_">setAgree</span>(event.<span class="hljs-property">target</span>.<span class="hljs-property">checked</span>)}
/&gt;
</code></pre><h3>select</h3><p>React에서는 <code>option</code>에 <code>selected</code>를 주지 않고, <code>select</code>에 <code>value</code>와 <code>onChange</code>를 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">&lt;select value={bank} onChange={<span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> <span class="hljs-title function_">setBank</span>(event.<span class="hljs-property">target</span>.<span class="hljs-property">value</span>)}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>은행 선택<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;kb&quot;</span>&gt;</span>국민<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;shinhan&quot;</span>&gt;</span>신한<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span></span>
&lt;/select&gt;
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>value</code>에 <code>undefined</code>·<code>null</code>을 넣지 않습니다.</strong> 처음에 <code>undefined</code>였다가 나중에 글자가 들어오면 비제어에서 제어로 바뀌었다는 경고가 납니다. 빈 값은 <code>&#39;&#39;</code>로 시작합니다.</li><li><strong>한 요소에 <code>value</code>와 <code>defaultValue</code>를 함께 쓰지 않습니다.</strong> 둘 중 하나만 씁니다. 저장할 때만 값이 필요한 단순 폼이라면 비제어(<code>defaultValue</code> + <code>FormData</code>)도 괜찮습니다.</li><li><strong>공통 입력 컴포넌트의 props를 확인합니다.</strong> <code>TextAreaBasic</code>처럼 프로젝트에 이미 만들어진 입력 컴포넌트가 있다면 <code>value</code>·<code>onChange</code>(또는 비슷한 이름)를 받는지 먼저 확인하고, 같은 방식으로 연결합니다.</li></ul></section>`,2),r(`section`,w,[d[15]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(D,null,{default:n(()=>[...d[14]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`문제 쪽 메모를 입력해도 글자 수와 ‘상태’의 `),r(`code`,null,`memo`),o(`가 바뀌지 않는다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`문제 쪽 분류를 눌러도 선택이 바뀌지 않는다.`)])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},`해결 쪽에서 ‘지우기’를 누르면 입력창·글자 수·상태가 함께 비워진다.`)])])],-1)]]),_:1})])])}}};export{H as default,F as duration,j as group,T as id,L as keyProperty,A as lead,P as level,O as navTitle,E as order,I as prerequisites,V as references,B as related,R as status,k as summary,N as tags,D as title,M as topic,z as updated};