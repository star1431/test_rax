import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-0`},u={id:`section-3`},d={id:`section-8`},f={id:`section-9`},p=`router-basics`,m=5,h=`라우터 한눈에 (Vue Router · React Router)`,g=`라우터 한눈에`,_=`라우트 정의, 링크와 화면 자리, 주소 값 읽기, 코드로 이동, 중첩 레이아웃, 나눠 불러오기, 404·리디렉션, 가드, 배포 때 막히는 것까지 Vue Router와 React Router를 나란히 비교해 정리합니다.`,v=`주소를 하나 더 붙이거나 메뉴 활성 표시를 고쳐야 하는데 라우터 문법이 가물가물하다면?
Vue Router와 React Router에서 같은 일을 하는 코드를 한 조각씩 맞대어 모았습니다.
`,y=`라우터`,b=`라우터`,x=[`Vue Router`,`React Router`,`RouterLink`,`RouterView`,`NavLink`,`Outlet`,`useRoute`,`useParams`,`useNavigate`,`beforeEach`,`createBrowserRouter`],S=`기초`,C=`약 12분`,w=`published`,T=`2026-11-12`,E=[`vue-basics`,`react-jsx`,`restart-checklist`],D=[{title:`Vue Router — 시작하기`,url:`https://router.vuejs.org/guide/`},{title:`Vue Router — 활성 링크`,url:`https://router.vuejs.org/guide/essentials/active-links.html`},{title:`Vue Router — 내비게이션 가드`,url:`https://router.vuejs.org/guide/advanced/navigation-guards.html`},{title:`Vue Router — History 모드`,url:`https://router.vuejs.org/guide/essentials/history-mode.html`},{title:`Vue Router — v5로 옮기기`,url:`https://router.vuejs.org/guide/migration/v4-to-v5.html`},{title:`React Router — 모드 고르기`,url:`https://reactrouter.com/start/modes`},{title:`React Router — 라우팅(Data 모드)`,url:`https://reactrouter.com/start/data/routing`},{title:`React Router — 라우트 객체(lazy 포함)`,url:`https://reactrouter.com/start/data/route-object`},{title:`React Router — NavLink`,url:`https://reactrouter.com/api/components/NavLink`},{title:`React Router — v7에서 올리기`,url:`https://reactrouter.com/upgrading/v7`}],O={__name:`router-basics`,setup(p,{expose:m}){return m({frontmatter:{id:`router-basics`,order:5,title:`라우터 한눈에 (Vue Router · React Router)`,navTitle:`라우터 한눈에`,summary:`라우트 정의, 링크와 화면 자리, 주소 값 읽기, 코드로 이동, 중첩 레이아웃, 나눠 불러오기, 404·리디렉션, 가드, 배포 때 막히는 것까지 Vue Router와 React Router를 나란히 비교해 정리합니다.`,lead:`주소를 하나 더 붙이거나 메뉴 활성 표시를 고쳐야 하는데 라우터 문법이 가물가물하다면?
Vue Router와 React Router에서 같은 일을 하는 코드를 한 조각씩 맞대어 모았습니다.
`,group:`라우터`,topic:`라우터`,tags:[`Vue Router`,`React Router`,`RouterLink`,`RouterView`,`NavLink`,`Outlet`,`useRoute`,`useParams`,`useNavigate`,`beforeEach`,`createBrowserRouter`],level:`기초`,duration:`약 12분`,status:`published`,updated:`2026-11-12`,related:[`vue-basics`,`react-jsx`,`restart-checklist`],references:[{title:`Vue Router — 시작하기`,url:`https://router.vuejs.org/guide/`},{title:`Vue Router — 활성 링크`,url:`https://router.vuejs.org/guide/essentials/active-links.html`},{title:`Vue Router — 내비게이션 가드`,url:`https://router.vuejs.org/guide/advanced/navigation-guards.html`},{title:`Vue Router — History 모드`,url:`https://router.vuejs.org/guide/essentials/history-mode.html`},{title:`Vue Router — v5로 옮기기`,url:`https://router.vuejs.org/guide/migration/v4-to-v5.html`},{title:`React Router — 모드 고르기`,url:`https://reactrouter.com/start/modes`},{title:`React Router — 라우팅(Data 모드)`,url:`https://reactrouter.com/start/data/routing`},{title:`React Router — 라우트 객체(lazy 포함)`,url:`https://reactrouter.com/start/data/route-object`},{title:`React Router — NavLink`,url:`https://reactrouter.com/api/components/NavLink`},{title:`React Router — v7에서 올리기`,url:`https://reactrouter.com/upgrading/v7`}]}}),(p,m)=>{let h=o(`RouterLink`),g=o(`DocTab`),_=o(`DocTabs`),v=o(`DocTakeaway`);return e(),r(`div`,c,[m[26]||=n(`p`,null,[a(`주소와 화면을 잇는 방법은 두 라우터가 거의 같습니다. 라우트 목록을 만들고, 링크로 이동하고, 정해 둔 자리에 화면을 그립니다. 코드를 고치기 전에 `),n(`strong`,null,`패키지와 버전부터`),a(` 확인하세요.`)],-1),n(`section`,l,[m[2]||=s(`<h2><span class="section-no">01</span> 먼저 확인할 것</h2><div class="table-wrap"><table><thead><tr><th>항목</th><th>Vue</th><th>React</th></tr></thead><tbody><tr><td>패키지</td><td><code>vue-router</code></td><td><code>react-router</code> 또는 <code>react-router-dom</code></td></tr><tr><td>버전</td><td>4.x · 5.x (모두 Vue 3용, 일반 사용 코드는 같음)</td><td>v6 · v7 · v8마다 가져오는 패키지가 다름(아래)</td></tr><tr><td>설정 위치</td><td><code>src/router/index.js</code>(<code>.ts</code>) + main의 <code>app.use(router)</code></td><td>main 또는 App의 <code>RouterProvider</code>나 <code>BrowserRouter</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs">npm ls vue-router                      # Vue
npm ls react-router react-router-dom   # React: 설치된 버전 확인
</code></pre><ul><li><strong>Vue Router 5</strong>는 파일 기반 라우팅을 본체에 합친 전환 버전입니다. 4에서 쓰던 코드(파일 기반 라우팅 없이)는 그대로 동작합니다. <code>vite.config</code>에 <code>vue-router/vite</code> 플러그인이 있으면 폴더 구조로 라우트를 만드는 프로젝트이니 router 파일 대신 페이지 폴더를 봅니다.</li><li><strong>React Router v6</strong>: 모두 <code>react-router-dom</code>에서 가져옵니다.</li><li><strong>v7</strong>: 공식 문서는 <code>react-router</code>에서 가져오고, <code>RouterProvider</code>는 <code>react-router/dom</code>에서 가져옵니다. <code>react-router-dom</code>은 호환용으로 남아 같은 것을 다시 내보냅니다.</li><li><strong>v8</strong>: <code>react-router-dom</code>이 없어졌습니다. <code>react-router</code>와 <code>react-router/dom</code>만 씁니다.</li><li>이 문서의 React 코드는 v7·v8 방식입니다. v6 프로젝트는 import 경로를 <code>react-router-dom</code>으로 바꿔 읽습니다.</li><li><code>react-router.config.ts</code>·<code>app/routes.ts</code>가 있으면 Framework 모드입니다. 이 문서는 Vite 앱에 붙이는 Data·Declarative 모드만 다룹니다.</li></ul>`,4),n(`p`,null,[m[1]||=a(`자세히: `,-1),i(h,{to:`/pub/recap/restart-checklist`},{default:t(()=>[...m[0]||=[a(`프로젝트 다시 시작 체크리스트`,-1)]]),_:1})])]),m[27]||=s(`<section id="section-1"><h2><span class="section-no">02</span> 라우트 정의</h2><div class="table-wrap"><table><thead><tr><th></th><th>Vue</th><th>React (Data 모드)</th><th>React (Declarative 모드)</th></tr></thead><tbody><tr><td>만들기</td><td><code>createRouter({ history, routes })</code></td><td><code>createBrowserRouter([...])</code></td><td><code>&lt;BrowserRouter&gt;</code> + <code>&lt;Routes&gt;</code></td></tr><tr><td>한 줄</td><td><code>{ path, name, component }</code></td><td><code>{ path, element }</code></td><td><code>&lt;Route path element /&gt;</code></td></tr><tr><td>연결</td><td>main에서 <code>app.use(router)</code></td><td><code>&lt;RouterProvider router={router} /&gt;</code></td><td>App을 감싸기</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/router/index.js</span>
<span class="hljs-keyword">import</span> { createRouter, createWebHistory } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">HomeView</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/views/HomeView.vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">NoticeListView</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/views/NoticeListView.vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">NoticeDetailView</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/views/NoticeDetailView.vue&#39;</span>

<span class="hljs-keyword">const</span> routes = [
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;home&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">HomeView</span> },
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/notice&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;notice-list&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">NoticeListView</span> },
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/notice/:id&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;notice-detail&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">NoticeDetailView</span> },
]

<span class="hljs-keyword">const</span> router = <span class="hljs-title function_">createRouter</span>({
  <span class="hljs-attr">history</span>: <span class="hljs-title function_">createWebHistory</span>(<span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-property">env</span>.<span class="hljs-property">BASE_URL</span>),
  routes,
})

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> router
<span class="hljs-comment">// main.js: createApp(App).use(router).mount(&#39;#app&#39;)</span>
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/main.jsx (React Data 모드)</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">StrictMode</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> { createRoot } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-dom/client&#39;</span>
<span class="hljs-keyword">import</span> { createBrowserRouter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router/dom&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Home</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./pages/Home&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">NoticeList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./pages/NoticeList&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">NoticeDetail</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./pages/NoticeDetail&#39;</span>

<span class="hljs-keyword">const</span> router = <span class="hljs-title function_">createBrowserRouter</span>([
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Home</span> /&gt;</span></span> },
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/notice&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NoticeList</span> /&gt;</span></span> },
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/notice/:id&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NoticeDetail</span> /&gt;</span></span> },
])

<span class="hljs-title function_">createRoot</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#39;root&#39;</span>)).<span class="hljs-title function_">render</span>(
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">StrictMode</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RouterProvider</span> <span class="hljs-attr">router</span>=<span class="hljs-string">{router}</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">StrictMode</span>&gt;</span></span>,
)
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/App.jsx (React Declarative 모드: main은 &lt;App /&gt;만 그림, 화면 import 생략)</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BrowserRouter</span>, <span class="hljs-title class_">Route</span>, <span class="hljs-title class_">Routes</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">BrowserRouter</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Routes</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">&quot;/&quot;</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Home</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">&quot;/notice&quot;</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">NoticeList</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">&quot;/notice/:id&quot;</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">NoticeDetail</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">Routes</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">BrowserRouter</span>&gt;</span></span>
  )
}
</code></pre><ul><li>한 프로젝트는 두 모드 중 <strong>하나만</strong> 씁니다. <code>createBrowserRouter</code>가 보이면 Data 모드입니다. <code>loader</code>, 라우트 <code>lazy</code>, <code>&lt;ScrollRestoration /&gt;</code>은 Data 모드 전용입니다.</li><li>TSX의 main은 <code>document.getElementById(&#39;root&#39;)!</code>처럼 <code>!</code>를 붙이는 것만 다릅니다(결과가 <code>HTMLElement | null</code>).</li><li>Vue <code>name</code>은 이동할 때 주소 대신 쓰는 이름입니다. React에는 이름이 없고 주소로 이동합니다.</li></ul></section><section id="section-2"><h2><span class="section-no">03</span> 링크와 화면 자리</h2><div class="table-wrap"><table><thead><tr><th>하는 일</th><th>Vue</th><th>React</th></tr></thead><tbody><tr><td>링크</td><td><code>&lt;RouterLink to=&quot;/notice&quot;&gt;</code></td><td><code>&lt;Link to=&quot;/notice&quot;&gt;</code></td></tr><tr><td>활성 표시가 필요한 메뉴</td><td><code>&lt;RouterLink&gt;</code> 그대로</td><td><code>&lt;NavLink&gt;</code></td></tr><tr><td>화면이 그려질 자리</td><td><code>&lt;RouterView /&gt;</code></td><td><code>&lt;Outlet /&gt;</code> (부모 레이아웃 안)</td></tr><tr><td>활성 클래스</td><td><code>router-link-active</code>, <code>router-link-exact-active</code></td><td><code>active</code> (<code>className</code>이 문자열일 때)</td></tr><tr><td>정확히 일치할 때만</td><td><code>router-link-exact-active</code>로 스타일</td><td><code>&lt;NavLink end&gt;</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- src/App.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;site-header&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;gnb&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RouterLink</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;gnb-link&quot;</span>&gt;</span>홈<span class="hljs-tag">&lt;/<span class="hljs-name">RouterLink</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RouterLink</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ name: &#39;notice-list&#39; }&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;gnb-link&quot;</span>&gt;</span>공지<span class="hljs-tag">&lt;/<span class="hljs-name">RouterLink</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;site-main&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RouterView</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/layouts/Layout.jsx (라우트에서 부모로 쓰는 레이아웃)</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NavLink</span>, <span class="hljs-title class_">Outlet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router&#39;</span>

<span class="hljs-keyword">const</span> <span class="hljs-title function_">linkClass</span> = (<span class="hljs-params">{ isActive }</span>) =&gt; (isActive ? <span class="hljs-string">&#39;gnb-link is-active&#39;</span> : <span class="hljs-string">&#39;gnb-link&#39;</span>)

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Layout</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;site-header&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;gnb&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">NavLink</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{linkClass}</span>&gt;</span>홈<span class="hljs-tag">&lt;/<span class="hljs-name">NavLink</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">NavLink</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/notice&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{linkClass}</span>&gt;</span>공지<span class="hljs-tag">&lt;/<span class="hljs-name">NavLink</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;site-main&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Outlet</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><ul><li>링크에 <code>&lt;a href&gt;</code>를 쓰면 페이지 전체를 다시 불러옵니다. <code>RouterLink</code>·<code>Link</code>를 씁니다.</li><li><code>className</code>에 함수를 주면 기본 <code>active</code> 클래스는 붙지 않고 함수가 돌려준 값만 씁니다. TSX는 함수를 따로 뺄 때 <code>({ isActive }: { isActive: boolean })</code>처럼 타입을 적습니다(속성 안에 바로 쓰면 자동으로 잡힘).</li><li><code>NavLink</code>는 <code>/notice/3</code>에서도 <code>/notice</code> 링크를 활성으로 봅니다(주소 앞부분 기준). <code>to=&quot;/&quot;</code>는 예외로 루트에서만 활성입니다.</li><li>Vue <code>router-link-active</code>는 <strong>주소가 아니라 라우트 기준</strong>입니다. <code>/notice/:id</code>를 위처럼 따로 정의하면 <code>/notice/3</code>에서 공지 링크는 활성이 아닙니다. 상세에서도 켜려면 아래 &#39;중첩 라우트’로 묶습니다.</li><li>쿼리(<code>?page=2</code>)는 두 라우터 모두 활성 판단에 쓰지 않습니다.</li></ul></section>`,2),n(`section`,u,[m[9]||=s(`<h2><span class="section-no">04</span> 주소 값 읽기</h2><p><code>/notice/3?page=2</code>에서 <code>3</code>(경로 값)과 <code>2</code>(쿼리)를 읽습니다.</p><div class="table-wrap"><table><thead><tr><th>값</th><th>Vue</th><th>React</th></tr></thead><tbody><tr><td>경로 값 <code>:id</code></td><td><code>useRoute().params.id</code></td><td><code>useParams().id</code></td></tr><tr><td>쿼리 <code>?page=</code></td><td><code>route.query.page</code></td><td><code>useSearchParams()</code> → <code>searchParams.get(&#39;page&#39;)</code></td></tr><tr><td>쿼리 바꾸기</td><td><code>router.push({ query: { page: 3 } })</code></td><td><code>setSearchParams({ page: &#39;3&#39; })</code></td></tr><tr><td>값의 형태</td><td>문자열(없는 쿼리는 <code>undefined</code>, 같은 키가 여럿이면 배열)</td><td><code>id</code>는 문자열 또는 <code>undefined</code>, <code>get</code>은 문자열 또는 <code>null</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- src/views/NoticeDetailView.vue --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">article</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-detail&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>공지 {{ route.params.id }}번 · 목록 {{ page }}쪽<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RouterLink</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ name: &#39;notice-list&#39;, query: { page } }&quot;</span>&gt;</span>목록으로<span class="hljs-tag">&lt;/<span class="hljs-name">RouterLink</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> { computed, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { useRoute } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>

<span class="hljs-keyword">const</span> route = <span class="hljs-title function_">useRoute</span>()
<span class="hljs-keyword">const</span> page = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title class_">Number</span>(route.<span class="hljs-property">query</span>.<span class="hljs-property">page</span>) || <span class="hljs-number">1</span>) <span class="hljs-comment">// 문자열 → 숫자</span>

<span class="hljs-comment">// /notice/3 → /notice/4는 같은 컴포넌트를 재사용 → setup이 다시 실행되지 않음</span>
<span class="hljs-title function_">watch</span>(
  <span class="hljs-function">() =&gt;</span> route.<span class="hljs-property">params</span>.<span class="hljs-property">id</span>,
  <span class="hljs-function">(<span class="hljs-params">id</span>) =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;공지 불러오기&#39;</span>, id),
  { <span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span> },
)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>`,4),i(_,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(g,{label:`JSX`},{default:t(()=>[...m[3]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// src/pages/NoticeDetail.jsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { useEffect } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { `),n(`span`,{class:`hljs-title class_`},`Link`),a(`, useParams, useSearchParams } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react-router'`),a(`

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`NoticeDetail`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` { id } = `),n(`span`,{class:`hljs-title function_`},`useParams`),a(`()
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` [searchParams] = `),n(`span`,{class:`hljs-title function_`},`useSearchParams`),a(`()
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` page = `),n(`span`,{class:`hljs-title class_`},`Number`),a(`(searchParams.`),n(`span`,{class:`hljs-title function_`},`get`),a(`(`),n(`span`,{class:`hljs-string`},`'page'`),a(`)) || `),n(`span`,{class:`hljs-number`},`1`),a(`

  `),n(`span`,{class:`hljs-comment`},`// /notice/3 → /notice/4: 컴포넌트는 그대로, id만 바뀜`),a(`
  `),n(`span`,{class:`hljs-title function_`},`useEffect`),a(`(`),n(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),n(`span`,{class:`hljs-keyword`},`if`),a(` (!id) `),n(`span`,{class:`hljs-keyword`},`return`),a(`
    `),n(`span`,{class:`hljs-variable language_`},`console`),a(`.`),n(`span`,{class:`hljs-title function_`},`log`),a(`(`),n(`span`,{class:`hljs-string`},`'공지 불러오기'`),a(`, id)
  }, [id])

  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`article`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"notice-detail"`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`p`),a(`>`)]),a(`공지 {id}번 · 목록 {page}쪽`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`p`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`Link`),a(),n(`span`,{class:`hljs-attr`},`to`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`/"),n(`span`,{class:`hljs-attr`},`notice`),a(`?`),n(`span`,{class:`hljs-attr`},`page`),a(`=`),n(`span`,{class:`hljs-string`},"${page}"),a("`}>")]),a(`목록으로`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`Link`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`article`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1}),i(g,{label:`TSX`},{default:t(()=>[...m[4]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// src/pages/NoticeDetail.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { useEffect } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { `),n(`span`,{class:`hljs-title class_`},`Link`),a(`, useParams, useSearchParams } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react-router'`),a(`

`),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`loadNotice`),a(`(`),n(`span`,{class:`hljs-params`},[n(`span`,{class:`hljs-attr`},`noticeId`),a(`: `),n(`span`,{class:`hljs-built_in`},`string`)]),a(`) {
  `),n(`span`,{class:`hljs-variable language_`},`console`),a(`.`),n(`span`,{class:`hljs-title function_`},`log`),a(`(`),n(`span`,{class:`hljs-string`},`'공지 불러오기'`),a(`, noticeId)
}

`),n(`span`,{class:`hljs-keyword`},`export`),a(),n(`span`,{class:`hljs-keyword`},`default`),a(),n(`span`,{class:`hljs-keyword`},`function`),a(),n(`span`,{class:`hljs-title function_`},`NoticeDetail`),a(`(`),n(`span`,{class:`hljs-params`}),a(`) {
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` { id } = `),n(`span`,{class:`hljs-title function_`},`useParams`),a(`() `),n(`span`,{class:`hljs-comment`},`// id: string | undefined`),a(`
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` [searchParams] = `),n(`span`,{class:`hljs-title function_`},`useSearchParams`),a(`()
  `),n(`span`,{class:`hljs-keyword`},`const`),a(` page = `),n(`span`,{class:`hljs-title class_`},`Number`),a(`(searchParams.`),n(`span`,{class:`hljs-title function_`},`get`),a(`(`),n(`span`,{class:`hljs-string`},`'page'`),a(`)) || `),n(`span`,{class:`hljs-number`},`1`),a(),n(`span`,{class:`hljs-comment`},`// get: string | null`),a(`

  `),n(`span`,{class:`hljs-title function_`},`useEffect`),a(`(`),n(`span`,{class:`hljs-function`},`() =>`),a(` {
    `),n(`span`,{class:`hljs-keyword`},`if`),a(` (!id) `),n(`span`,{class:`hljs-keyword`},`return`),a(),n(`span`,{class:`hljs-comment`},`// 여기서 걸러야 아래 id가 string`),a(`
    `),n(`span`,{class:`hljs-title function_`},`loadNotice`),a(`(id)
  }, [id])

  `),n(`span`,{class:`hljs-keyword`},`return`),a(` (
    `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`article`),a(),n(`span`,{class:`hljs-attr`},`className`),a(`=`),n(`span`,{class:`hljs-string`},`"notice-detail"`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`p`),a(`>`)]),a(`공지 {id}번 · 목록 {page}쪽`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`p`),a(`>`)]),a(`
      `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`Link`),a(),n(`span`,{class:`hljs-attr`},`to`),a(`=`),n(`span`,{class:`hljs-string`},`{`),a("`/"),n(`span`,{class:`hljs-attr`},`notice`),a(`?`),n(`span`,{class:`hljs-attr`},`page`),a(`=`),n(`span`,{class:`hljs-string`},"${page}"),a("`}>")]),a(`목록으로`),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`Link`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`article`),a(`>`)])]),a(`
  )
}
`)])],-1)]]),_:1})]),_:1}),m[10]||=n(`ul`,null,[n(`li`,null,[a(`주소에서 온 값은 `),n(`strong`,null,`항상 문자열`),a(`입니다. 계산·비교 전에 `),n(`code`,null,`Number()`),a(`로 바꿉니다.`)]),n(`li`,null,[a(`같은 라우트에서 값만 바뀌면 화면 컴포넌트는 새로 만들어지지 않습니다. Vue는 `),n(`code`,null,`watch`),a(`, React는 `),n(`code`,null,`useEffect`),a(` 의존성으로 다시 불러옵니다.`)])],-1),n(`p`,null,[m[7]||=a(`자세히: `,-1),i(h,{to:`/pub/react/effect-dependencies`},{default:t(()=>[...m[5]||=[a(`effect 의존성 배열`,-1)]]),_:1}),m[8]||=a(` · `,-1),i(h,{to:`/pub/react/key-reset`},{default:t(()=>[...m[6]||=[a(`key로 상태 초기화`,-1)]]),_:1})])]),m[28]||=s(`<section id="section-4"><h2><span class="section-no">05</span> 코드로 이동</h2><div class="table-wrap"><table><thead><tr><th>하는 일</th><th>Vue (<code>const router = useRouter()</code>)</th><th>React (<code>const navigate = useNavigate()</code>)</th></tr></thead><tbody><tr><td>주소로 이동</td><td><code>router.push(&#39;/notice&#39;)</code></td><td><code>navigate(&#39;/notice&#39;)</code></td></tr><tr><td>이름·값으로 이동</td><td><code>router.push({ name: &#39;notice-detail&#39;, params: { id } })</code></td><td><code>navigate(\`/notice/\${id}\`)</code></td></tr><tr><td>쿼리 붙여 이동</td><td><code>router.push({ path: &#39;/notice&#39;, query: { page: 2 } })</code></td><td><code>navigate(&#39;/notice?page=2&#39;)</code></td></tr><tr><td>기록 안 남기고 교체</td><td><code>router.replace(&#39;/login&#39;)</code></td><td><code>navigate(&#39;/login&#39;, { replace: true })</code></td></tr><tr><td>뒤로</td><td><code>router.back()</code></td><td><code>navigate(-1)</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/components/NoticeForm.jsx</span>
<span class="hljs-keyword">import</span> { useNavigate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">NoticeForm</span>(<span class="hljs-params">{ noticeId }</span>) {
  <span class="hljs-keyword">const</span> navigate = <span class="hljs-title function_">useNavigate</span>()

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleSave</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// 저장 요청 뒤</span>
    <span class="hljs-title function_">navigate</span>(<span class="hljs-string">\`/notice/<span class="hljs-subst">\${noticeId}</span>\`</span>, { <span class="hljs-attr">replace</span>: <span class="hljs-literal">true</span> })
  }

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;form-actions&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;btn&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> navigate(-1)}&gt;취소<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;btn btn-primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleSave}</span>&gt;</span>저장<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre><ul><li>Vue <code>useRouter()</code>(이동하는 쪽)와 <code>useRoute()</code>(지금 주소 정보)를 헷갈리지 않습니다.</li><li>Vue에서 <code>params</code>는 <code>name</code>과 함께 씁니다. <code>path</code>와 <code>params</code>를 같이 주면 <code>params</code>는 무시됩니다.</li><li>React <code>navigate</code>는 이벤트·effect 안에서 부릅니다. 그리는 중에 보내야 하면 <code>&lt;Navigate to=&quot;...&quot; /&gt;</code>를 반환합니다.</li></ul></section><section id="section-5"><h2><span class="section-no">06</span> 중첩 라우트와 레이아웃</h2><p>헤더·메뉴는 두고 본문만 바꾸려면 레이아웃 라우트에 <code>children</code>을 둡니다. 부모의 <code>&lt;RouterView /&gt;</code>·<code>&lt;Outlet /&gt;</code> 자리에 자식 화면이 그려집니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/router/index.js (routes 부분)</span>
<span class="hljs-keyword">const</span> routes = [
  {
    <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span>,
    <span class="hljs-attr">component</span>: <span class="hljs-title class_">DefaultLayout</span>, <span class="hljs-comment">// 헤더 + &lt;RouterView /&gt;</span>
    <span class="hljs-attr">children</span>: [
      { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;home&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">HomeView</span> }, <span class="hljs-comment">// &#39;/&#39;</span>
      { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;notice&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;notice-list&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">NoticeListView</span> },
      { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;notice/:id&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;notice-detail&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">NoticeDetailView</span> },
    ],
  },
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/login&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;login&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">LoginView</span> }, <span class="hljs-comment">// 레이아웃 없는 화면</span>
]
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/main.jsx (router 부분, Data 모드)</span>
<span class="hljs-keyword">const</span> router = <span class="hljs-title function_">createBrowserRouter</span>([
  {
    <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span>,
    <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> /&gt;</span></span>, <span class="hljs-comment">// 헤더 + &lt;Outlet /&gt;</span>
    <span class="hljs-attr">children</span>: [
      { <span class="hljs-attr">index</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Home</span> /&gt;</span></span> }, <span class="hljs-comment">// &#39;/&#39;</span>
      { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;notice&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NoticeList</span> /&gt;</span></span> },
      { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;notice/:id&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NoticeDetail</span> /&gt;</span></span> },
    ],
  },
  { <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/login&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Login</span> /&gt;</span></span> },
])
</code></pre><ul><li>자식 <code>path</code>는 <code>/</code> 없이 씁니다. 부모 주소 그대로일 때 보일 화면은 Vue <code>path: &#39;&#39;</code>, React <code>index: true</code>입니다.</li><li>이 구조면 App.vue에는 <code>&lt;RouterView /&gt;</code> 하나만 남고, 헤더는 <code>DefaultLayout.vue</code>로 옮깁니다.</li><li>Declarative 모드는 <code>&lt;Route element={&lt;Layout /&gt;}&gt;</code> 안에 <code>&lt;Route index element={&lt;Home /&gt;} /&gt;</code>처럼 겹쳐 씁니다.</li></ul></section><section id="section-6"><h2><span class="section-no">07</span> 화면 나눠 불러오기</h2><p>처음에 모든 화면 코드를 받지 않고, 그 주소에 갈 때 받습니다. Vite가 화면마다 파일을 나눠 빌드합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Vue routes</span>
{ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;notice/:id&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;notice-detail&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#39;@/views/NoticeDetailView.vue&#39;</span>) },
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// React Data 모드: 라우트 lazy</span>
{
  <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;notice/:id&#39;</span>,
  <span class="hljs-attr">lazy</span>: <span class="hljs-title function_">async</span> () =&gt; {
    <span class="hljs-keyword">const</span> { <span class="hljs-attr">default</span>: <span class="hljs-title class_">Component</span> } = <span class="hljs-keyword">await</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#39;./pages/NoticeDetail&#39;</span>)
    <span class="hljs-keyword">return</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-comment">// element 대신 Component로 돌려줌</span>
  },
},
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// React Declarative 모드: React.lazy + Suspense</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">NoticeDetail</span> = <span class="hljs-title function_">lazy</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#39;./pages/NoticeDetail&#39;</span>)) <span class="hljs-comment">// import { lazy, Suspense } from &#39;react&#39;</span>

&lt;<span class="hljs-title class_">Route</span>
  path=<span class="hljs-string">&quot;notice/:id&quot;</span>
  element={
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Suspense</span> <span class="hljs-attr">fallback</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>불러오는 중…<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>}&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">NoticeDetail</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Suspense</span>&gt;</span></span>
  }
/&gt;
</code></pre><ul><li>Vue 라우트에는 <code>defineAsyncComponent</code>를 쓰지 않고 <code>() =&gt; import()</code>를 그대로 넣습니다.</li><li>라우트 <code>lazy</code>는 이동할 때 코드를 받는 동안 이전 화면을 보여 줍니다. <code>React.lazy</code>는 <code>fallback</code>을 보여 줍니다.</li><li><code>React.lazy</code>는 <code>export default</code> 컴포넌트를 받습니다. 사이트 규칙(<code>export default function</code>)과 맞습니다.</li></ul></section><section id="section-7"><h2><span class="section-no">08</span> 없는 주소와 리디렉션</h2><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Vue routes 끝에</span>
{ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/board&#39;</span>, <span class="hljs-attr">redirect</span>: <span class="hljs-string">&#39;/notice&#39;</span> }, <span class="hljs-comment">// 옛 주소 → 새 주소</span>
{ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/:pathMatch(.*)*&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;not-found&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">NotFoundView</span> },
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// React: Layout의 children 끝에</span>
{ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;board&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Navigate</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/notice&quot;</span> <span class="hljs-attr">replace</span> /&gt;</span></span> },
{ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;*&#39;</span>, <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NotFound</span> /&gt;</span></span> },
</code></pre><ul><li>두 라우터 모두 적힌 순서가 아니라 <strong>더 구체적인 주소를</strong> 먼저 고릅니다. 그래도 읽기 쉽게 404는 맨 끝에 둡니다.</li><li><code>&lt;Navigate&gt;</code>에 <code>replace</code>를 빼면 뒤로 가기 때 옛 주소로 돌아가 다시 이동하게 됩니다.</li></ul></section>`,4),n(`section`,d,[m[19]||=s(`<h2><span class="section-no">09</span> 이동 전 확인(가드)</h2><p>로그인이 필요한 화면에 들어가기 전에 확인하고, 안 되면 로그인 화면으로 보냅니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/router/index.js (Vue)</span>
{ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;mypage&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;mypage&#39;</span>, <span class="hljs-attr">component</span>: <span class="hljs-title class_">MyPageView</span>, <span class="hljs-attr">meta</span>: { <span class="hljs-attr">requiresAuth</span>: <span class="hljs-literal">true</span> } },

router.<span class="hljs-title function_">beforeEach</span>(<span class="hljs-function">(<span class="hljs-params">to</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (to.<span class="hljs-property">meta</span>.<span class="hljs-property">requiresAuth</span> &amp;&amp; !<span class="hljs-title function_">isLoggedIn</span>()) {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;login&#39;</span>, <span class="hljs-attr">query</span>: { <span class="hljs-attr">redirect</span>: to.<span class="hljs-property">fullPath</span> } }
  }
  <span class="hljs-comment">// 아무것도 반환하지 않으면 그대로 이동</span>
})
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// src/components/RequireAuth.jsx (두 모드 공통)</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Navigate</span>, useLocation } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router&#39;</span>
<span class="hljs-keyword">import</span> { isLoggedIn } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../auth&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">RequireAuth</span>(<span class="hljs-params">{ children }</span>) {
  <span class="hljs-keyword">const</span> location = <span class="hljs-title function_">useLocation</span>()

  <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isLoggedIn</span>()) {
    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Navigate</span> <span class="hljs-attr">to</span>=<span class="hljs-string">{</span>\`/<span class="hljs-attr">login</span>?<span class="hljs-attr">redirect</span>=<span class="hljs-string">\${encodeURIComponent(location.pathname)}</span>\`} <span class="hljs-attr">replace</span> /&gt;</span></span>
  }
  <span class="hljs-keyword">return</span> children
}
<span class="hljs-comment">// 라우트: { path: &#39;mypage&#39;, element: &lt;RequireAuth&gt;&lt;MyPage /&gt;&lt;/RequireAuth&gt; }</span>
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Data 모드는 loader로도 가능: 화면을 그리기 전에 실행 (import { redirect } from &#39;react-router&#39;)</span>
{
  <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;mypage&#39;</span>,
  <span class="hljs-attr">element</span>: <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">MyPage</span> /&gt;</span></span>,
  <span class="hljs-attr">loader</span>: <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (!<span class="hljs-title function_">isLoggedIn</span>()) <span class="hljs-keyword">return</span> <span class="hljs-title function_">redirect</span>(<span class="hljs-string">&#39;/login&#39;</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>
  },
},
</code></pre>`,5),n(`ul`,null,[m[16]||=n(`li`,null,[a(`Vue `),n(`code`,null,`to.meta`),a(`는 부모부터 자식까지의 `),n(`code`,null,`meta`),a(`를 합친 값입니다. 레이아웃 라우트에 `),n(`code`,null,`meta: { requiresAuth: true }`),a(`를 두면 children 전체에 적용됩니다.`)],-1),n(`li`,null,[m[12]||=a(`TSX는 `,-1),m[13]||=n(`code`,null,`children: ReactNode`,-1),m[14]||=a(` 타입만 더합니다(`,-1),i(h,{to:`/pub/recap/react-tsx`},{default:t(()=>[...m[11]||=[a(`React를 TSX로`,-1)]]),_:1}),m[15]||=a(` 참고).`,-1)]),m[17]||=n(`li`,null,[a(`React도 레이아웃 자리를 감싸면(`),n(`code`,null,`element: <RequireAuth><Layout /></RequireAuth>`),a(`) 아래 화면 전체가 보호됩니다.`)],-1),m[18]||=n(`li`,null,`가드는 화면 이동을 막는 편의 기능입니다. 실제 권한 확인은 서버가 합니다.`,-1)])]),n(`section`,f,[m[25]||=s(`<h2><span class="section-no">10</span> 퍼블리셔가 자주 막히는 것</h2><div class="table-wrap"><table><thead><tr><th>증상</th><th>원인</th><th>해결</th></tr></thead><tbody><tr><td>배포 후 새로고침하면 404</td><td>서버에 <code>/notice/3</code> 파일이 없음</td><td>없는 경로에 <code>index.html</code>을 주도록 서버 설정</td></tr><tr><td>하위 경로(<code>/app/</code>) 배포 후 화면이 비거나 링크가 틀림</td><td>라우터가 기준 경로를 모름</td><td>Vite <code>base</code>와 라우터 기준 경로 맞추기</td></tr><tr><td>메뉴 활성 표시가 안 맞음</td><td>클래스 이름·활성 판단 기준 차이</td><td>클래스 이름 바꾸기, ‘링크와 화면 자리’ 참고</td></tr><tr><td>이동 뒤 스크롤이 중간에 있음</td><td>SPA는 문서를 새로 열지 않음</td><td>Vue <code>scrollBehavior</code>, React <code>&lt;ScrollRestoration /&gt;</code></td></tr></tbody></table></div><ul><li><strong>새로고침 404</strong>: <code>createWebHistory</code>·<code>createBrowserRouter</code>는 진짜 주소를 씁니다. 개발 서버는 알아서 <code>index.html</code>을 주지만 운영 서버는 설정이 필요합니다(nginx 예: <code>try_files $uri $uri/ /index.html;</code>). 서버를 못 바꾸면 해시 방식(<code>/#/notice/3</code>)인 Vue <code>createWebHashHistory()</code>, React <code>createHashRouter</code>·<code>&lt;HashRouter&gt;</code>로 바꿉니다.</li><li><strong>하위 경로</strong>: <code>vite.config</code>의 <code>base: &#39;/app/&#39;</code>에 맞춰 Vue는 <code>createWebHistory(import.meta.env.BASE_URL)</code>, React는 <code>createBrowserRouter(routes, { basename: &#39;/app&#39; })</code> 또는 <code>&lt;BrowserRouter basename=&quot;/app&quot;&gt;</code>. 앱 안 링크는 기준 경로 없이 <code>/notice</code>로 씁니다.</li><li><strong>활성 링크</strong>: Vue는 정확히 일치하는 링크에, React <code>NavLink</code>는 활성 링크에 <code>aria-current=&quot;page&quot;</code>도 붙입니다.</li><li><strong>스크롤</strong>: <code>&lt;ScrollRestoration /&gt;</code>은 Data 모드 전용입니다. Declarative 모드는 <code>pathname</code>이 바뀔 때 <code>window.scrollTo(0, 0)</code>을 부르는 effect를 레이아웃에 둡니다.</li></ul><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Vue: src/router/index.js</span>
<span class="hljs-keyword">const</span> router = <span class="hljs-title function_">createRouter</span>({
  <span class="hljs-attr">history</span>: <span class="hljs-title function_">createWebHistory</span>(<span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-property">env</span>.<span class="hljs-property">BASE_URL</span>), <span class="hljs-comment">// vite.config의 base</span>
  routes,
  <span class="hljs-attr">linkActiveClass</span>: <span class="hljs-string">&#39;is-active&#39;</span>, <span class="hljs-comment">// 정확히 일치: linkExactActiveClass</span>
  <span class="hljs-title function_">scrollBehavior</span>(<span class="hljs-params">to, <span class="hljs-keyword">from</span>, savedPosition</span>) {
    <span class="hljs-keyword">return</span> savedPosition || { <span class="hljs-attr">top</span>: <span class="hljs-number">0</span> } <span class="hljs-comment">// 뒤로 가기면 이전 위치, 아니면 맨 위</span>
  },
})
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// React Data 모드: src/layouts/Layout.jsx (헤더 생략, ScrollRestoration 한 줄 추가)</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Outlet</span>, <span class="hljs-title class_">ScrollRestoration</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react-router&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Layout</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;site-main&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Outlet</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ScrollRestoration</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><ul><li>환경(개발계·검증계·운영계)마다 배포 경로가 다르면 <code>base</code>·<code>basename</code>도 달라집니다. 배포 주소를 먼저 확인합니다.</li></ul>`,6),n(`p`,null,[m[22]||=a(`자세히: `,-1),i(h,{to:`/prj/environments`},{default:t(()=>[...m[20]||=[a(`개발계·검증계·운영계`,-1)]]),_:1}),m[23]||=a(` · `,-1),i(h,{to:`/pub/recap/restart-checklist`},{default:t(()=>[...m[21]||=[a(`프로젝트 다시 시작 체크리스트`,-1)]]),_:1})]),i(v,null,{default:t(()=>[...m[24]||=[n(`p`,null,[a(`먼저 `),n(`strong`,null,`패키지와 버전을`),a(` 봅니다. 링크는 `),n(`code`,null,`RouterLink`),a(`·`),n(`code`,null,`Link`),a(`, 화면 자리는 `),n(`code`,null,`RouterView`),a(`·`),n(`code`,null,`Outlet`),a(`이고, 주소 값은 `),n(`strong`,null,`문자열이며`),a(` 같은 화면에서 바뀌면 `),n(`code`,null,`watch`),a(`·`),n(`code`,null,`useEffect`),a(`로 다시 불러옵니다.`)],-1)]]),_:1})])])}}};export{O as default,C as duration,y as group,p as id,v as lead,S as level,g as navTitle,m as order,D as references,E as related,w as status,_ as summary,x as tags,h as title,b as topic,T as updated};