import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-0`},u={id:`section-1`},d={id:`section-2`},f={id:`section-3`},p={id:`section-4`},m={id:`section-5`},h={id:`section-6`},g={id:`section-7`},_=`react-jsx`,v=3,y=`React 한눈에 (JSX)`,b=`React 한눈에 (JSX)`,x=`React 프로젝트에 다시 들어갈 때 필요한 것만 모았습니다. 파일 골격, JSX 규칙, 조건·반복, 이벤트, useState, props, 입력 폼, useEffect·useRef를 JSX 코드로 빠르게 복습합니다.`,S=`함수 위쪽에서 상태·함수·계산을 끝내고, return 안에는 HTML처럼 JSX만.
이 순서와 몇 가지 함정만 떠올리면 React 프로젝트에 바로 다시 들어갈 수 있습니다.
`,C=`문법`,w=`React`,T=[`React`,`JSX`,`useState`,`useEffect`,`useRef`,`props`,`map`,`key`,`이벤트`,`제어 입력`],E=`기초`,D=`약 10분`,O=`published`,k=`2026-11-12`,A=[`react-tsx`,`vue-react-map`,`controlled-input`],j=[{title:`React — JSX로 마크업 작성하기`,url:`https://ko.react.dev/learn/writing-markup-with-jsx`},{title:`React — 리스트 렌더링`,url:`https://ko.react.dev/learn/rendering-lists`},{title:`React — 스냅샷으로서의 State`,url:`https://ko.react.dev/learn/state-as-a-snapshot`},{title:`React — useEffect`,url:`https://ko.react.dev/reference/react/useEffect`},{title:`React — useRef`,url:`https://ko.react.dev/reference/react/useRef`}],M={__name:`react-jsx`,setup(_,{expose:v}){return v({frontmatter:{id:`react-jsx`,order:3,title:`React 한눈에 (JSX)`,navTitle:`React 한눈에 (JSX)`,summary:`React 프로젝트에 다시 들어갈 때 필요한 것만 모았습니다. 파일 골격, JSX 규칙, 조건·반복, 이벤트, useState, props, 입력 폼, useEffect·useRef를 JSX 코드로 빠르게 복습합니다.`,lead:`함수 위쪽에서 상태·함수·계산을 끝내고, return 안에는 HTML처럼 JSX만.
이 순서와 몇 가지 함정만 떠올리면 React 프로젝트에 바로 다시 들어갈 수 있습니다.
`,group:`문법`,topic:`React`,tags:[`React`,`JSX`,`useState`,`useEffect`,`useRef`,`props`,`map`,`key`,`이벤트`,`제어 입력`],level:`기초`,duration:`약 10분`,status:`published`,updated:`2026-11-12`,related:[`react-tsx`,`vue-react-map`,`controlled-input`],references:[{title:`React — JSX로 마크업 작성하기`,url:`https://ko.react.dev/learn/writing-markup-with-jsx`},{title:`React — 리스트 렌더링`,url:`https://ko.react.dev/learn/rendering-lists`},{title:`React — 스냅샷으로서의 State`,url:`https://ko.react.dev/learn/state-as-a-snapshot`},{title:`React — useEffect`,url:`https://ko.react.dev/reference/react/useEffect`},{title:`React — useRef`,url:`https://ko.react.dev/reference/react/useRef`}]}}),(_,v)=>{let y=o(`RouterLink`),b=o(`DocTakeaway`);return e(),r(`div`,c,[n(`p`,null,[v[1]||=a(`React 19 + Vite 기준으로, 함수 컴포넌트를 JSX(`,-1),v[2]||=n(`code`,null,`.jsx`,-1),v[3]||=a(`)로 작성할 때 자주 쓰는 문법과 실수하기 쉬운 부분만 정리했습니다. TSX 프로젝트라면 타입을 붙이는 방법을 `,-1),i(y,{to:`/pub/recap/react-tsx`},{default:t(()=>[...v[0]||=[a(`React를 TSX로 쓸 때`,-1)]]),_:1}),v[4]||=a(`에서 함께 보세요.`,-1)]),n(`section`,l,[v[7]||=s(`<h2><span class="section-no">01</span> 파일 골격</h2><p>함수 하나가 컴포넌트입니다. <strong>위쪽에서 상태·함수·계산을 끝내고, 마지막 <code>return ( … )</code>에서 화면(JSX)을 그립니다.</strong></p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// ProductList.jsx</span>
<span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ProductCard</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./ProductCard&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">ProductList</span>(<span class="hljs-params">{ products }</span>) {
  <span class="hljs-comment">// 1. 상태: Hook은 항상 맨 위, 조건문 밖에서</span>
  <span class="hljs-keyword">const</span> [keyword, setKeyword] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> [cartIds, setCartIds] = <span class="hljs-title function_">useState</span>([])

  <span class="hljs-comment">// 2. 처리 함수: handle로 시작</span>
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleAdd</span>(<span class="hljs-params">id</span>) {
    <span class="hljs-title function_">setCartIds</span>(<span class="hljs-function">(<span class="hljs-params">prev</span>) =&gt;</span> [...prev, id])
  }

  <span class="hljs-comment">// 3. 계산 값: 상태에서 바로 계산 (Vue의 computed 자리)</span>
  <span class="hljs-keyword">const</span> filtered = products.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">product</span>) =&gt;</span> product.<span class="hljs-property">name</span>.<span class="hljs-title function_">includes</span>(keyword))

  <span class="hljs-comment">// 4. 화면</span>
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;product-list&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;input&quot;</span>
        <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;상품명 검색&quot;</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{keyword}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(event)</span> =&gt;</span> setKeyword(event.target.value)}
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;product-list-count&quot;</span>&gt;</span>장바구니 {cartIds.length}개<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;product-list-items&quot;</span>&gt;</span>
        {filtered.map((product) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{product.id}</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ProductCard</span>
              <span class="hljs-attr">product</span>=<span class="hljs-string">{product}</span>
              <span class="hljs-attr">isAdded</span>=<span class="hljs-string">{cartIds.includes(product.id)}</span>
              <span class="hljs-attr">onAdd</span>=<span class="hljs-string">{handleAdd}</span>
            /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></span>
  )
}
</code></pre><div class="table-wrap"><table><thead><tr><th>내보내기</th><th>선언</th><th>가져오기</th></tr></thead><tbody><tr><td>default (사이트 규칙)</td><td><code>export default function ProductList()</code></td><td><code>import ProductList from &#39;./ProductList&#39;</code></td></tr><tr><td>named</td><td><code>export function ProductList()</code></td><td><code>import { ProductList } from &#39;./ProductList&#39;</code></td></tr></tbody></table></div><ul><li>이 사이트 규칙은 한 파일에 컴포넌트 하나, <strong><code>export default</code>로 내보내기</strong>입니다. 파일명과 컴포넌트명은 PascalCase로 같게 짓습니다.</li><li><code>export function</code>(named)으로 쓰는 프로젝트도 많습니다. 투입된 프로젝트가 이미 named로 통일되어 있으면 그 방식을 따르고, 가져올 때 <code>{ }</code>를 빠뜨리지 않습니다.</li><li>계산 값은 상태로 따로 두지 않습니다. 렌더링마다 다시 계산되므로 항상 최신입니다.</li></ul>`,5),n(`p`,null,[v[6]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[5]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,u,[v[10]||=s(`<h2><span class="section-no">02</span> JSX 규칙</h2><div class="table-wrap"><table><thead><tr><th>HTML</th><th>JSX</th></tr></thead><tbody><tr><td>최상위 요소 여러 개</td><td>부모 하나로 감싸거나 Fragment <code>&lt;&gt;…&lt;/&gt;</code></td></tr><tr><td><code>class</code></td><td><code>className</code></td></tr><tr><td><code>for</code></td><td><code>htmlFor</code></td></tr><tr><td><code>style=&quot;margin-top: 8px&quot;</code></td><td><code>style={{ marginTop: 8 }}</code> (객체, camelCase, 숫자는 px)</td></tr><tr><td><code>&lt;img&gt;</code>, <code>&lt;br&gt;</code></td><td><code>&lt;img /&gt;</code>, <code>&lt;br /&gt;</code> (반드시 닫기)</td></tr><tr><td><code>&lt;!-- 주석 --&gt;</code></td><td><code>{/* 주석 */}</code></td></tr><tr><td><code>onclick</code>, <code>tabindex</code></td><td><code>onClick</code>, <code>tabIndex</code> (camelCase)</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">FieldRow</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      {/* 라벨과 입력창 */}
      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">htmlFor</span>=<span class="hljs-string">&quot;user-name&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-label&quot;</span>&gt;</span>이름<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;user-name&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">tabIndex</span>=<span class="hljs-string">{0}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/img/icon-info.svg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">marginLeft:</span> <span class="hljs-attr">4</span> }} /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><p><code>aria-*</code>, <code>data-*</code> 속성은 HTML 그대로 하이픈으로 씁니다(<code>aria-label</code>, <code>data-id</code>).</p>`,4),n(`p`,null,[v[9]||=a(`자세히: `,-1),i(y,{to:`/pub/react/class-name`},{default:t(()=>[...v[8]||=[a(`클래스에 false·공백이 섞일 때 (조건부 className)`,-1)]]),_:1})])]),n(`section`,d,[v[13]||=s(`<h2><span class="section-no">03</span> return 안에서: 값·조건·반복</h2><div class="table-wrap"><table><thead><tr><th>하고 싶은 것</th><th>JSX</th></tr></thead><tbody><tr><td>값 출력</td><td><code>{product.name}</code></td></tr><tr><td>속성에 값</td><td><code>src={product.image}</code>, <code>disabled={isAdded}</code></td></tr><tr><td>있을 때만 보이기</td><td><code>{isOpen &amp;&amp; &lt;Layer /&gt;}</code></td></tr><tr><td>둘 중 하나</td><td><code>{isLogin ? &lt;MyMenu /&gt; : &lt;LoginButton /&gt;}</code></td></tr><tr><td>반복</td><td><code>{items.map((item) =&gt; &lt;li key={item.id}&gt;…&lt;/li&gt;)}</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">CartSummary</span>(<span class="hljs-params">{ items, isLoading }</span>) {
  <span class="hljs-comment">// 아예 다른 화면이면 return을 먼저 끝냅니다 (early return)</span>
  <span class="hljs-keyword">if</span> (isLoading) <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>불러오는 중…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cart-summary&quot;</span>&gt;</span>
      {/* ✗ items.length가 0이면 화면에 0이 찍힘 */}
      {items.length &amp;&amp; <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>담은 상품이 있습니다.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>}

      {/* ✓ 비교식으로 true/false를 만듭니다 */}
      {items.length &gt; 0 ? (
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cart-list&quot;</span>&gt;</span>
          {items.map((item) =&gt; (
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.id}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cart-list-item&quot;</span>&gt;</span>{item.name}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
          ))}
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
      ) : (
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;empty&quot;</span>&gt;</span>담은 상품이 없습니다.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      )}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre><ul><li><code>&amp;&amp;</code> 왼쪽이 숫자 <code>0</code>이면 <code>0</code>이 그대로 출력됩니다. <code>length &gt; 0</code>, <code>!!count</code>처럼 불리언으로 만듭니다.</li><li><code>key</code>는 데이터의 <strong>고유 id</strong>를 씁니다. 순서가 바뀌거나 삭제되는 목록에서 index를 쓰면 입력값·상태가 엉뚱한 항목에 남습니다.</li><li><code>return</code> 안에는 <code>if</code>·<code>for</code>를 쓸 수 없습니다. 식(삼항, <code>&amp;&amp;</code>, <code>map</code>)만 됩니다.</li></ul>`,4),n(`p`,null,[v[12]||=a(`자세히: `,-1),i(y,{to:`/pub/react/key-reset`},{default:t(()=>[...v[11]||=[a(`다른 항목으로 바꿨는데 입력값이 남아 있을 때 (key)`,-1)]]),_:1})])]),n(`section`,f,[v[16]||=s(`<h2><span class="section-no">04</span> 이벤트</h2><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">handleSubmit</span>(<span class="hljs-params">event</span>) {
  event.<span class="hljs-title function_">preventDefault</span>() <span class="hljs-comment">// 폼 전송으로 새로고침되는 것을 막습니다</span>
}

<span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form&quot;</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{handleSubmit}</span>&gt;</span>
    {/* ✓ 함수를 넘깁니다: 클릭할 때 실행 */}
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleOpen}</span>&gt;</span>열기<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    {/* ✗ 실행 결과를 넘깁니다: 렌더링할 때마다 바로 실행 */}
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleOpen()}</span>&gt;</span>열기<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    {/* 인자가 필요하면 화살표 함수로 감쌉니다 */}
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> handleDelete(item.id)}&gt;삭제<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></span>
)
</code></pre><div class="table-wrap"><table><thead><tr><th>상황</th><th>쓰는 법</th></tr></thead><tbody><tr><td>인자 없음 / 있음</td><td><code>onClick={handleOpen}</code> / <code>onClick={() =&gt; handleDelete(id)}</code></td></tr><tr><td>기본 동작 막기</td><td><code>event.preventDefault()</code> (<code>return false</code>는 동작하지 않음)</td></tr><tr><td>부모로 전파 막기</td><td><code>event.stopPropagation()</code></td></tr></tbody></table></div>`,3),n(`p`,null,[v[15]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[14]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,p,[v[19]||=s(`<h2><span class="section-no">05</span> 상태: useState</h2><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> [count, setCount] = <span class="hljs-title function_">useState</span>(<span class="hljs-number">0</span>)

<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleClick</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title function_">setCount</span>(count + <span class="hljs-number">1</span>)
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(count) <span class="hljs-comment">// 아직 이전 값 (이번 렌더링의 스냅샷)</span>
}

<span class="hljs-comment">// 이전 값을 기준으로 바꿀 때는 업데이터 함수 (연달아 호출해도 정확)</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleAddTwo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-title function_">setCount</span>(<span class="hljs-function">(<span class="hljs-params">prev</span>) =&gt;</span> prev + <span class="hljs-number">1</span>)
  <span class="hljs-title function_">setCount</span>(<span class="hljs-function">(<span class="hljs-params">prev</span>) =&gt;</span> prev + <span class="hljs-number">1</span>)
}
</code></pre><p>객체·배열은 <strong>고치지 말고 새로 만들어서 교체</strong>합니다. <code>user.name = &#39;…&#39;</code>, <code>items.push(…)</code>로 바꾸면 화면이 다시 그려지지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 객체: 스프레드로 복사 후 바꿀 값만 덮어쓰기</span>
<span class="hljs-title function_">setUser</span>({ ...user, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;김하나&#39;</span> })

<span class="hljs-comment">// 배열: 추가 / 삭제 / 수정</span>
<span class="hljs-title function_">setItems</span>([...items, newItem])
<span class="hljs-title function_">setItems</span>(items.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.<span class="hljs-property">id</span> !== id))
<span class="hljs-title function_">setItems</span>(items.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> (item.<span class="hljs-property">id</span> === id ? { ...item, <span class="hljs-attr">done</span>: !item.<span class="hljs-property">done</span> } : item)))
</code></pre><p><code>push</code>·<code>splice</code>·<code>sort</code>는 원본을 바꾸므로 그대로 쓰지 않습니다. 필요하면 복사본(<code>[...items].sort()</code>)에서 씁니다.</p>`,5),n(`p`,null,[v[18]||=a(`자세히: `,-1),i(y,{to:`/pub/react/state-snapshot`},{default:t(()=>[...v[17]||=[a(`값을 바꾼 직후 console에 이전 값이 찍힐 때 (state 스냅샷)`,-1)]]),_:1})])]),n(`section`,m,[v[22]||=s(`<h2><span class="section-no">06</span> 자식 컴포넌트에 props 주기</h2><p>부모는 <strong>값과 함수</strong>를 내려 주고, 자식은 받은 함수를 호출해서 부모에게 알립니다(Vue의 <code>emit</code> 자리).</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// ProductCard.jsx</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">ProductCard</span>(<span class="hljs-params">{ product, isAdded = <span class="hljs-literal">false</span>, onAdd }</span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">product-card</span> \${<span class="hljs-attr">isAdded</span> ? &#39;<span class="hljs-attr">is-added</span>&#39; <span class="hljs-attr">:</span> &#39;&#39;}\`<span class="hljs-attr">.trim</span>()}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">strong</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;product-card-name&quot;</span>&gt;</span>{product.name}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;product-card-price&quot;</span>&gt;</span>{product.price.toLocaleString()}원<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;btn btn-primary&quot;</span>
        <span class="hljs-attr">disabled</span>=<span class="hljs-string">{isAdded}</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> onAdd(product.id)}
      &gt;
        {isAdded ? &#39;담김&#39; : &#39;담기&#39;}
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre><p>태그 사이 내용은 <code>children</code>으로 받습니다(Vue의 <code>&lt;slot /&gt;</code> 자리).</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Panel.jsx</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Panel</span>(<span class="hljs-params">{ title, children }</span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;panel&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;panel-title&quot;</span>&gt;</span>{title}<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;panel-body&quot;</span>&gt;</span>{children}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span></span>
  )
}

<span class="hljs-comment">// 사용하는 쪽</span>
&lt;<span class="hljs-title class_">Panel</span> title=<span class="hljs-string">&quot;배송 안내&quot;</span>&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>평일 오후 2시 전 주문은 당일 출고됩니다.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
&lt;/<span class="hljs-title class_">Panel</span>&gt;
</code></pre><ul><li>props는 매개변수 자리에서 구조 분해하고, 기본값도 그 자리에서 줍니다(<code>isAdded = false</code>).</li><li>함수 props는 <code>on</code>으로(<code>onAdd</code>), 내 처리 함수는 <code>handle</code>로(<code>handleAdd</code>) 시작합니다.</li><li>자식은 props를 직접 바꾸지 않습니다. 바꿀 값은 부모의 상태이고, 자식은 <code>onAdd</code>처럼 알리기만 합니다.</li></ul>`,6),n(`p`,null,[v[21]||=a(`자세히: `,-1),i(y,{to:`/std/react-component`},{default:t(()=>[...v[20]||=[a(`React 컴포넌트 작성 규칙 — props 정의`,-1)]]),_:1})])]),n(`section`,h,[v[25]||=s(`<h2><span class="section-no">07</span> 입력 폼</h2><p>입력값을 상태로 들고 있는 <strong>제어 입력</strong>이 기본입니다. <code>value</code>만 주고 <code>onChange</code>를 빠뜨리면 글자가 입력되지 않습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> [form, setForm] = <span class="hljs-title function_">useState</span>({ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;normal&#39;</span>, <span class="hljs-attr">memo</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">agree</span>: <span class="hljs-literal">false</span> })

<span class="hljs-keyword">function</span> <span class="hljs-title function_">handleChange</span>(<span class="hljs-params">event</span>) {
  <span class="hljs-keyword">const</span> { name, value, type, checked } = event.<span class="hljs-property">target</span>
  <span class="hljs-title function_">setForm</span>({ ...form, [name]: type === <span class="hljs-string">&#39;checkbox&#39;</span> ? checked : value })
}

<span class="hljs-keyword">return</span> (
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form&quot;</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{handleSubmit}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.name}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.type}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;normal&quot;</span>&gt;</span>일반<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;urgent&quot;</span>&gt;</span>긴급<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;memo&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.memo}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;check&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;agree&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{form.agree}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span> /&gt;</span>
      동의합니다
    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-count&quot;</span>&gt;</span>{form.memo.length}/200<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></span>
)
</code></pre><div class="table-wrap"><table><thead><tr><th>요소</th><th>값 속성</th><th>이벤트에서 읽는 값</th></tr></thead><tbody><tr><td><code>input</code>, <code>textarea</code></td><td><code>value</code></td><td><code>event.target.value</code></td></tr><tr><td><code>select</code></td><td><code>value</code> (<code>selected</code> 대신)</td><td><code>event.target.value</code></td></tr><tr><td><code>checkbox</code></td><td><code>checked</code></td><td><code>event.target.checked</code></td></tr><tr><td><code>radio</code></td><td><code>checked={form.type === &#39;a&#39;}</code></td><td><code>event.target.value</code></td></tr></tbody></table></div><ul><li><code>textarea</code>는 태그 사이가 아니라 <code>value</code>로 값을 줍니다.</li><li>처음 값이 <code>undefined</code>이면 비제어로 시작했다가 경고가 나옵니다. 빈 문자열 <code>&#39;&#39;</code>로 시작합니다.</li></ul>`,5),n(`p`,null,[v[24]||=a(`자세히: `,-1),i(y,{to:`/pub/react/controlled-input`},{default:t(()=>[...v[23]||=[a(`입력이 안 되거나 글자 수가 안 바뀔 때 (제어 입력)`,-1)]]),_:1})])]),n(`section`,g,[v[33]||=s(`<h2><span class="section-no">08</span> useEffect와 useRef</h2><p><code>useEffect</code>는 렌더링이 끝난 뒤 실행할 <strong>부수 효과</strong>(이벤트 등록, 타이머, 데이터 요청)를 둡니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">import</span> { useEffect, useRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">SearchLayer</span>(<span class="hljs-params">{ isOpen, onClose }</span>) {
  <span class="hljs-keyword">const</span> inputRef = <span class="hljs-title function_">useRef</span>(<span class="hljs-literal">null</span>)

  <span class="hljs-comment">// 열릴 때 입력창에 포커스</span>
  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (isOpen) inputRef.<span class="hljs-property">current</span>?.<span class="hljs-title function_">focus</span>()
  }, [isOpen])

  <span class="hljs-comment">// ESC로 닫기: 등록하고, 정리 함수에서 해제</span>
  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleKeyDown</span>(<span class="hljs-params">event</span>) {
      <span class="hljs-keyword">if</span> (event.<span class="hljs-property">key</span> === <span class="hljs-string">&#39;Escape&#39;</span>) <span class="hljs-title function_">onClose</span>()
    }
    <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;keydown&#39;</span>, handleKeyDown)
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">removeEventListener</span>(<span class="hljs-string">&#39;keydown&#39;</span>, handleKeyDown)
  }, [onClose])

  <span class="hljs-keyword">if</span> (!isOpen) <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;search-layer&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{inputRef}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;검색어&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre><div class="table-wrap"><table><thead><tr><th>의존성 배열</th><th>실행 시점</th></tr></thead><tbody><tr><td><code>[]</code></td><td>처음 그려질 때 한 번</td></tr><tr><td><code>[isOpen]</code></td><td>처음 + <code>isOpen</code>이 바뀔 때마다</td></tr><tr><td>없음</td><td>렌더링될 때마다 (거의 쓰지 않음)</td></tr></tbody></table></div><ul><li>효과 안에서 쓰는 props·상태는 의존성 배열에 빠짐없이 넣습니다.</li><li><code>return () =&gt; { … }</code> 정리 함수는 다음 실행 전과 컴포넌트가 사라질 때 실행됩니다. 등록한 이벤트·타이머는 여기서 해제합니다.</li><li>개발 모드(<code>StrictMode</code>)에서는 효과가 한 번 더 실행됩니다(실행 → 정리 → 실행). 정리 함수가 맞게 작성됐는지 확인하는 동작입니다.</li><li><code>useRef(null)</code>로 만들고 <code>ref={inputRef}</code>로 연결하면 <code>inputRef.current</code>가 그 DOM 요소입니다. 그려지기 전에는 <code>null</code>이라 <code>?.</code>로 접근합니다. <code>current</code>를 바꿔도 화면은 다시 그려지지 않습니다.</li></ul>`,5),n(`p`,null,[v[29]||=a(`자세히: `,-1),i(y,{to:`/pub/react/effect-cleanup`},{default:t(()=>[...v[26]||=[a(`팝업을 열고 닫을수록 이벤트가 쌓일 때 (useEffect 정리 함수)`,-1)]]),_:1}),v[30]||=a(` · `,-1),i(y,{to:`/pub/react/effect-dependencies`},{default:t(()=>[...v[27]||=[a(`useEffect가 계속 다시 실행될 때 (의존성 배열)`,-1)]]),_:1}),v[31]||=a(` · `,-1),i(y,{to:`/pub/react/use-ref-dom`},{default:t(()=>[...v[28]||=[a(`입력창에 포커스를 주거나 크기를 재야 할 때 (useRef)`,-1)]]),_:1})]),i(b,null,{default:t(()=>[...v[32]||=[n(`p`,null,[a(`위에서 상태·함수·계산, `),n(`code`,null,`return`),a(` 안에는 식만. 상태는 `),n(`strong`,null,`새 값으로 교체`),a(`하고, 이벤트에는 `),n(`strong`,null,`함수를 넘깁니다`),a(`.`)],-1)]]),_:1})])])}}};export{M as default,D as duration,C as group,_ as id,S as lead,E as level,b as navTitle,v as order,j as references,A as related,O as status,x as summary,T as tags,y as title,w as topic,k as updated};