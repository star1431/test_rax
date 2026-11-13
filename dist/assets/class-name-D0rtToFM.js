const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClassNameDemo-ChUCHpYR.js","./react-DlmbjZJV.js","./rolldown-runtime-XKyaHtl9.js","./DemoFrame-1ESt04Vz.js","./ClassNameDemo-CEflvXp_.css"])))=>i.map(i=>d[i]);
import{D as e,G as t,R as n,c as r,d as i,g as a,h as o,j as s,m as c}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{d as l}from"./index-DHgvQBhl.js";import{t as u}from"./ReactIsland-9-BhU6jW.js";var d=`// cx.js: 참인 값만 남기고 공백 하나로 잇는 작은 함수
export const cx = (...names) => names.filter(Boolean).join(' ')`,f=`import { cx } from './cx'

export default function Button({ active = false, disabled = false, size, children, onClick }) {
  return (
    <button
      type="button"
      className={cx(
        'button',
        active && 'is-active',
        disabled && 'is-disabled',
        size && \`button-\${size}\`,
      )}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`,p=`import { cx } from './cx'

// 팝업: 'popup full ' + (열림이면 is-active)
export default function Popup({ open, type = 'full', children }) {
  return (
    <div className={cx('popup', type, open && 'is-active')} role="dialog" aria-hidden={!open}>
      {children}
    </div>
  )
}`,m=`// cx.ts: 참인 값만 남기고 공백 하나로 잇는 작은 함수
type ClassValue = string | false | null | undefined

export const cx = (...names: ClassValue[]) => names.filter(Boolean).join(' ')`,h=`import type { ReactNode } from 'react'
import { cx } from './cx'

type ButtonProps = {
  active?: boolean
  disabled?: boolean
  size?: 'small' | 'large'
  children: ReactNode
  onClick?: () => void
}

export default function Button({ active = false, disabled = false, size, children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx(
        'button',
        active && 'is-active',
        disabled && 'is-disabled',
        size && \`button-\${size}\`,
      )}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`,g=`import type { ReactNode } from 'react'
import { cx } from './cx'

type PopupProps = {
  open: boolean
  type?: 'full' | 'bottom'
  children: ReactNode
}

// 팝업: 'popup full ' + (열림이면 is-active)
export default function Popup({ open, type = 'full', children }: PopupProps) {
  return (
    <div className={cx('popup', type, open && 'is-active')} role="dialog" aria-hidden={!open}>
      {children}
    </div>
  )
}`,_=[{label:`cx.js`,language:`javascript`,code:d},{label:`Button.jsx`,language:`javascript`,code:f},{label:`Popup.jsx`,language:`javascript`,code:p}],v=[{label:`cx.ts`,language:`typescript`,code:m},{label:`Button.tsx`,language:`typescript`,code:h},{label:`Popup.tsx`,language:`typescript`,code:g}],y={class:`doc-body`},b={id:`section-0`},x={id:`section-1`},S={id:`section-3`},C={id:`section-4`},w={id:`section-7`},T=`class-name`,E=4,D=`클래스에 false·공백이 섞일 때 (조건부 className)`,O=`조건부 className`,k=`문자열을 이어 붙여 만든 className에 false·undefined·겹친 공백이 들어가는 문제를 확인하고, 참인 값만 잇는 cx 함수(또는 clsx)로 상태·변형 클래스를 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,A=`개발자 도구에서 class="button false"를 본 적이 있다면?
조건부 클래스는 문자열로 잇지 말고, 배열로 모아 참인 값만 남기세요.
`,j=`스타일`,M=`스타일`,N=[`React`,`className`,`조건부 클래스`,`clsx`,`템플릿 문자열`,`is-active`,`JSX`,`TSX`],P=`기초`,F=`약 9분`,I=[`JSX 기본`,`클래스 네이밍`],L=`cx('button', on && 'is-active')`,R=`published`,z=`2026-11-11`,B=[`controlled-input`,`effect-cleanup`],V=[{title:`React — 조건부 렌더링`,url:`https://ko.react.dev/learn/conditional-rendering`},{title:`clsx (npm)`,url:`https://www.npmjs.com/package/clsx`}],H={__name:`class-name`,setup(d,{expose:f}){f({frontmatter:{id:`class-name`,order:4,title:`클래스에 false·공백이 섞일 때 (조건부 className)`,navTitle:`조건부 className`,summary:`문자열을 이어 붙여 만든 className에 false·undefined·겹친 공백이 들어가는 문제를 확인하고, 참인 값만 잇는 cx 함수(또는 clsx)로 상태·변형 클래스를 정리합니다. JSX·TSX 예제를 함께 제공합니다.`,lead:`개발자 도구에서 class="button false"를 본 적이 있다면?
조건부 클래스는 문자열로 잇지 말고, 배열로 모아 참인 값만 남기세요.
`,group:`스타일`,topic:`스타일`,tags:[`React`,`className`,`조건부 클래스`,`clsx`,`템플릿 문자열`,`is-active`,`JSX`,`TSX`],level:`기초`,duration:`약 9분`,prerequisites:[`JSX 기본`,`클래스 네이밍`],keyProperty:`cx('button', on && 'is-active')`,status:`published`,updated:`2026-11-11`,related:[`controlled-input`,`effect-cleanup`],references:[{title:`React — 조건부 렌더링`,url:`https://ko.react.dev/learn/conditional-rendering`},{title:`clsx (npm)`,url:`https://www.npmjs.com/package/clsx`}]}});let p=()=>l(()=>import(`./ClassNameDemo-ChUCHpYR.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return(l,d)=>{let f=s(`DocIssue`),m=s(`DocTakeaway`),h=s(`DocInspect`),g=s(`CodePanel`),T=s(`DocTab`),E=s(`DocTabs`),D=s(`DocPractice`);return e(),i(`div`,y,[r(`section`,b,[d[2]||=r(`h2`,null,[r(`span`,{class:`section-no`},`01`),o(` 문제 상황`)],-1),d[3]||=r(`p`,null,[o(`버튼의 상태(선택됨·비활성)와 크기에 따라 클래스를 붙이려고 문자열을 이어 붙였습니다. 화면은 대충 맞아 보이는데, 개발자 도구를 열어 보니 `),r(`code`,null,`class="button is-active false button-undefined"`),o(`처럼 `),r(`strong`,null,[r(`code`,null,`false`),o(`, `),r(`code`,null,`undefined`),o(`가 클래스 이름으로`)]),o(` 들어가 있습니다. 공백도 두 칸씩 겹쳐 있습니다.`)],-1),d[4]||=r(`p`,null,`화면이 대충 맞아 보여서 퍼블리싱 단계에서는 지나치기 쉽고, 다른 스타일 문제를 살피던 QA나 코드 리뷰에서 이런 형태로 돌아옵니다.`,-1),a(f,{title:`거래 목록: 필터 버튼 class에 false·undefined가 붙음`,env:`전체 브라우저 · 크기를 지정하지 않은 필터 버튼`,expected:`선택을 끄면 class가 button만 남음`,actual:`class가 button  false button-undefined처럼 표시되고 공백이 겹침`},{default:n(()=>[...d[0]||=[r(`ol`,null,[r(`li`,null,`거래 목록 화면에서 ‘입금’ 필터 버튼을 눌러 선택합니다.`),r(`li`,null,`같은 버튼을 다시 눌러 선택을 끕니다.`),r(`li`,null,[o(`개발자 도구에서 버튼의 `),r(`code`,null,`class`),o(` 속성을 확인합니다.`)])],-1)]]),_:1}),a(m,null,{default:n(()=>[...d[1]||=[r(`p`,null,[o(`조건부 클래스는 `),r(`strong`,null,[o(`배열에 모아 참인 값만 남기는 함수(`),r(`code`,null,`cx`),o(`)로`)]),o(` 만드세요. `),r(`code`,null,"cx('button', active && 'is-active', size && `button-${size}`)"),o(`는 조건이 거짓인 항목을 빼고 공백 하나로 잇습니다.`)],-1)]]),_:1})]),r(`section`,x,[d[5]||=r(`h2`,null,[r(`span`,{class:`section-no`},`02`),o(` 직접 비교하기`),r(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),d[6]||=r(`p`,null,[o(`상태와 크기를 바꿔 보세요. 버튼 아래는 실제 DOM의 `),r(`code`,null,`class`),o(` 속성을 그대로 읽은 값입니다.`)],-1),a(u,{load:p})]),d[14]||=c('<section id="section-2"><h2><span class="section-no">03</span> 왜 false가 들어갈까요?</h2><p>JavaScript에서 <code>조건 &amp;&amp; &#39;값&#39;</code>은 조건이 거짓이면 <strong><code>false</code> 자체</strong>를 돌려줍니다. 문자열에 <code>+</code>로 이으면 <code>false</code>가 글자 <code>&quot;false&quot;</code>로 바뀌어 들어갑니다. 값이 없는 변수(<code>size</code>)도 <code>&quot;undefined&quot;</code>라는 글자가 됩니다.</p><div class="table-wrap"><table><thead><tr><th>작성 방법</th><th>조건이 거짓일 때 결과</th></tr></thead><tbody><tr><td><code>&#39;button &#39; + (disabled &amp;&amp; &#39;is-disabled&#39;)</code></td><td><code>&quot;button false&quot;</code></td></tr><tr><td><code>&#39;button-&#39; + size</code> (size 없음)</td><td><code>&quot;button-undefined&quot;</code></td></tr><tr><td><code>`popup full ${open ? &#39;is-active&#39; : &#39;&#39;}`</code></td><td><code>&quot;popup full &quot;</code> (끝 공백)</td></tr><tr><td><code>cx(&#39;button&#39;, disabled &amp;&amp; &#39;is-disabled&#39;)</code></td><td><code>&quot;button&quot;</code></td></tr></tbody></table></div><p>삼항 연산자(<code>조건 ? &#39;값&#39; : &#39;&#39;</code>)로 쓰면 <code>false</code>는 들어가지 않지만, 조건이 여러 개면 빈 글자 사이의 공백이 겹치고 코드가 길어집니다. 현장 코드에서 자주 보는 <code>className={`popup full ${popup ? &#39;is_active&#39; : &#39;&#39;}`}</code>도 닫힌 상태에서 끝에 공백이 남는 같은 형태입니다. 동작에는 문제가 없지만 조건이 늘면 바로 <code>false</code>·공백 문제로 이어집니다.</p></section>',1),r(`section`,S,[d[8]||=r(`h2`,null,[r(`span`,{class:`section-no`},`04`),o(` 원인 찾기`)],-1),d[9]||=r(`p`,null,[o(`클래스가 이상할 때는 CSS보다 `),r(`strong`,null,`실제로 붙은 class 값`),o(`부터 확인합니다. 아래 순서로 보면 어느 조건이 문제인지 바로 좁힐 수 있습니다.`)],-1),a(h,null,{default:n(()=>[...d[7]||=[r(`ol`,null,[r(`li`,null,[r(`strong`,null,`Elements 패널에서 class 확인`),o(` 버튼을 선택하고 `),r(`code`,null,`class`),o(` 속성 값을 봅니다. `),r(`code`,null,`false`),o(`, `),r(`code`,null,`undefined`),o(`, `),r(`code`,null,`null`),o(` 같은 글자나 겹친 공백이 있으면 문자열 연결이 원인입니다.`)]),r(`li`,null,[r(`strong`,null,`Console에서 클래스 목록 보기`),o(` 요소를 선택한 상태에서 `),r(`code`,null,`$0.classList`),o(`를 입력합니다. 공백으로 나뉜 클래스가 하나씩 표시되어 `),r(`code`,null,`false`),o(`가 실제 클래스로 붙었는지 분명히 보입니다.`)]),r(`li`,null,[r(`strong`,null,`Components 탭에서 props 확인`),o(` React Developer Tools의 Components 탭에서 버튼 컴포넌트를 선택합니다. props의 `),r(`code`,null,`active`),o(`, `),r(`code`,null,`size`),o(` 값이 `),r(`code`,null,`false`),o(`·`),r(`code`,null,`undefined`),o(`인 항목이 class에 글자로 들어간 항목입니다.`)]),r(`li`,null,[r(`strong`,null,`코드에서 연결 방식 찾기`),r(`code`,null,`className`),o(`을 만드는 부분에서 `),r(`code`,null,`+`),o(`나 템플릿 문자열 안의 `),r(`code`,null,`&&`),o(`를 찾습니다. 그 자리를 `),r(`code`,null,`cx`),o(`(또는 `),r(`code`,null,`clsx`),o(`) 호출로 바꾸면 해결됩니다.`)])],-1)]]),_:1})]),r(`section`,C,[d[10]||=c(`<h2><span class="section-no">05</span> 해결 코드</h2><p><code>cx</code>처럼 짧은 함수를 공통 유틸로 두거나, 같은 일을 하는 <strong><code>clsx</code></strong> 라이브러리를 씁니다. 프로젝트에 이미 있다면 그것을 씁니다(<code>package.json</code>에서 <code>clsx</code>, <code>classnames</code> 확인).</p>`,2),a(E,{group:`react-lang`,label:`코드 언어`},{default:n(()=>[a(T,{label:`JSX`},{default:n(()=>[a(g,{tabs:t(_)},null,8,[`tabs`])]),_:1}),a(T,{label:`TSX`},{default:n(()=>[a(g,{tabs:t(v)},null,8,[`tabs`])]),_:1})]),_:1}),d[11]||=r(`p`,null,[o(`TSX에서는 크기처럼 정해진 값만 받는 props를 `),r(`code`,null,`'small' | 'large'`),o(`로 정하면, `),r(`code`,null,"button-${size}"),o(` 클래스도 그 값으로만 만들어집니다. 오타(`),r(`code`,null,`'larg'`),o(`)는 편집기에서 바로 오류로 표시됩니다.`)],-1)]),d[15]||=c(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p><code>&amp;&amp;</code>가 거짓 값을 그대로 돌려주는 성질 때문에 생기는 문제는 클래스 말고도 자주 나옵니다. 함께 확인해 두세요.</p><h3>화면에 0이 찍힐 때</h3><p><code>{count &amp;&amp; &lt;Badge /&gt;}</code>에서 <code>count</code>가 <code>0</code>이면 <code>0</code>이 그대로 화면에 표시됩니다. React는 <code>false</code>·<code>null</code>은 그리지 않지만 숫자 <code>0</code>은 그립니다. 조건을 참·거짓으로 만들어 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">{count &gt; <span class="hljs-number">0</span> &amp;&amp; <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;badge&quot;</span>&gt;</span>{count}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>}
</code></pre><h3>부모가 넘긴 className과 합칠 때</h3><p>공통 컴포넌트에서 <code>className={className}</code>만 쓰면 기본 클래스가 사라집니다. 기본 클래스와 바깥에서 받은 클래스를 <code>cx</code>로 함께 묶습니다. 받지 않았을 때(<code>undefined</code>)도 깔끔하게 빠집니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Card</span>(<span class="hljs-params">{ className, children }</span>) {
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{cx(</span>&#39;<span class="hljs-attr">card</span>&#39;, <span class="hljs-attr">className</span>)}&gt;</span>{children}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
}
</code></pre><h3>CSS Modules에서 없는 키를 읽을 때</h3><p><code>styles[size]</code>처럼 변수로 읽으면 해당 클래스가 없을 때 <code>undefined</code>가 됩니다. 문자열로 이으면 <code>&quot;undefined&quot;</code>가 붙으므로, 여기서도 <code>cx</code>로 묶어 빠지게 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">&lt;button className={<span class="hljs-title function_">cx</span>(styles.<span class="hljs-property">button</span>, active &amp;&amp; styles.<span class="hljs-property">active</span>, size &amp;&amp; styles[size])}&gt;
  확인
&lt;/button&gt;
</code></pre><h3>조건이 많을 때는 객체 형태로</h3><p><code>clsx</code>는 <code>{ 클래스명: 조건 }</code> 형태의 객체도 받습니다. 조건이 많으면 읽기 쉬워집니다. 위의 작은 <code>cx</code> 함수는 객체를 받지 않으므로, 이 형태가 필요하면 <code>clsx</code>를 씁니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">import</span> clsx <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;clsx&#39;</span>

&lt;li className={<span class="hljs-title function_">clsx</span>(<span class="hljs-string">&#39;tab&#39;</span>, { <span class="hljs-string">&#39;is-active&#39;</span>: active, <span class="hljs-string">&#39;is-disabled&#39;</span>: disabled })}&gt;
  {label}
&lt;/li&gt;
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>클래스 이름 규칙은 프로젝트를 따릅니다.</strong> 이 사이트는 하이픈(<code>is-active</code>, <code>button-large</code>)을 쓰지만, 현장에 따라 언더스코어(<code>is_active</code>, <code>popup_wrap</code>)를 쓰기도 합니다. 조합 방법(<code>cx</code>)은 같고, 이름만 프로젝트 규칙에 맞춥니다.</li><li><strong>상태 클래스와 속성을 함께 씁니다.</strong> 선택 상태는 <code>is-active</code>와 함께 <code>aria-pressed</code>·<code>aria-selected</code>를, 비활성은 <code>is-disabled</code>와 함께 <code>disabled</code> 속성을 둡니다. 클래스만으로는 스크린 리더와 키보드에 상태가 전달되지 않습니다.</li><li><strong>인라인 style 대신 클래스로 처리합니다.</strong> 상태마다 <code>style={{ … }}</code>을 바꾸기보다 클래스를 붙이고 CSS에서 꾸미면 디자인 변경이 쉽습니다.</li></ul></section>`,2),r(`section`,w,[d[13]||=r(`h2`,null,[r(`span`,{class:`section-no`},`08`),o(` 짧은 실습`)],-1),a(D,null,{default:n(()=>[...d[12]||=[r(`p`,null,`위 예제에서 확인해 보세요.`,-1),r(`ul`,{class:`checklist`},[r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`처음 상태에서 문제 쪽 class 값에 `),r(`code`,null,`false`),o(`와 `),r(`code`,null,`button-undefined`),o(`가 들어 있다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`‘선택됨’을 끄면 문제 쪽은 앞쪽에 공백이 겹치고, 해결 쪽은 `),r(`code`,null,`"button"`),o(`만 남는다.`)])])]),r(`li`,null,[r(`label`,null,[r(`input`,{type:`checkbox`}),r(`span`,{class:`checklist-text`},[o(`해결 코드의 `),r(`code`,null,`cx`),o(`에 `),r(`code`,null,`null`),o(`, `),r(`code`,null,`undefined`),o(`, `),r(`code`,null,`''`),o(`을 넣으면 어떻게 되는지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{H as default,F as duration,j as group,T as id,L as keyProperty,A as lead,P as level,O as navTitle,E as order,I as prerequisites,V as references,B as related,R as status,k as summary,N as tags,D as title,M as topic,z as updated};