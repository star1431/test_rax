import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-0`},u={id:`section-2`},d={id:`section-3`},f={id:`section-5`},p={id:`section-6`},m=`restart-checklist`,h=1,g=`프로젝트 다시 시작 체크리스트 (Vite)`,_=`다시 시작 체크리스트`,v=`오랜만에 Vite 기반 Vue·React 프로젝트를 받았을 때 실행 명령, package.json, 폴더 구조, vite.config, 환경 변수, 스타일 위치를 순서대로 확인합니다.`,y=`오랜만에 받은 프로젝트, 어디부터 볼지 막막하다면?
실행 → package.json → main 파일 → vite.config 순서로 훑으면 금방 감이 돌아옵니다.
`,b=`시작하기`,x=`프로젝트 시작`,S=[`Vite`,`npm`,`package.json`,`vite.config`,`.env`,`폴더 구조`,`Vue`,`React`],C=`기초`,w=`약 9분`,T=`published`,E=`2026-11-12`,D=[`vue-basics`,`react-jsx`,`router-basics`],O=[{title:`Vite — 시작하기`,url:`https://vite.dev/guide/`},{title:`Vite — 설정하기`,url:`https://vite.dev/config/`},{title:`Vite — 환경 변수와 모드`,url:`https://vite.dev/guide/env-and-mode`},{title:`npm — npm ci`,url:`https://docs.npmjs.com/cli/commands/npm-ci`}],k={__name:`restart-checklist`,setup(m,{expose:h}){return h({frontmatter:{id:`restart-checklist`,order:1,title:`프로젝트 다시 시작 체크리스트 (Vite)`,navTitle:`다시 시작 체크리스트`,summary:`오랜만에 Vite 기반 Vue·React 프로젝트를 받았을 때 실행 명령, package.json, 폴더 구조, vite.config, 환경 변수, 스타일 위치를 순서대로 확인합니다.`,lead:`오랜만에 받은 프로젝트, 어디부터 볼지 막막하다면?
실행 → package.json → main 파일 → vite.config 순서로 훑으면 금방 감이 돌아옵니다.
`,group:`시작하기`,topic:`프로젝트 시작`,tags:[`Vite`,`npm`,`package.json`,`vite.config`,`.env`,`폴더 구조`,`Vue`,`React`],level:`기초`,duration:`약 9분`,status:`published`,updated:`2026-11-12`,related:[`vue-basics`,`react-jsx`,`router-basics`],references:[{title:`Vite — 시작하기`,url:`https://vite.dev/guide/`},{title:`Vite — 설정하기`,url:`https://vite.dev/config/`},{title:`Vite — 환경 변수와 모드`,url:`https://vite.dev/guide/env-and-mode`},{title:`npm — npm ci`,url:`https://docs.npmjs.com/cli/commands/npm-ci`}]}}),(m,h)=>{let g=o(`RouterLink`),_=o(`DocTab`),v=o(`DocTabs`),y=o(`DocPractice`),b=o(`DocTakeaway`);return e(),r(`div`,c,[h[30]||=n(`p`,null,`프로젝트를 받으면 바로 화면부터 고치지 말고, 실행 방법과 구조를 10분 정도 먼저 확인합니다. 이 문서는 Vite 기반 Vue·React 프로젝트에서 그 순서를 정리한 것입니다.`,-1),n(`section`,l,[h[2]||=s(`<h2><span class="section-no">01</span> 내려받고 실행하기</h2><p>먼저 Node 버전을 맞춥니다. 프로젝트 루트의 <code>.nvmrc</code>나 <code>package.json</code>의 <code>engines</code>에 버전이 적혀 있으면 그 버전을 씁니다. Vite는 버전마다 지원하는 최소 Node 버전이 있으므로, 실행 오류가 나면 Node 버전부터 의심합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">node -v          # 현재 Node 버전
nvm use          # .nvmrc가 있으면 그 버전으로 전환 (nvm 사용 시)
</code></pre><div class="table-wrap"><table><thead><tr><th>명령</th><th>언제</th><th>특징</th></tr></thead><tbody><tr><td><code>npm ci</code></td><td>처음 받았을 때, CI</td><td><code>package-lock.json</code> 그대로 설치. <code>node_modules</code>를 지우고 새로 설치</td></tr><tr><td><code>npm install</code></td><td>패키지를 추가·변경할 때</td><td>lock 파일이 갱신될 수 있음</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs">npm ci
npm run dev       # 개발 서버
npm run build     # 배포용 빌드 (기본 출력 폴더 dist)
npm run preview   # 빌드 결과를 로컬에서 확인
</code></pre><ul><li>명령 이름은 프로젝트마다 다릅니다. <code>package.json</code>의 <code>scripts</code>에서 실제 이름을 확인합니다(<code>serve</code>, <code>build:dev</code> 등).</li><li>개발 서버 기본 포트는 <strong>5173입니다</strong>. <code>vite.config</code>의 <code>server.port</code>나 scripts의 <code>--port</code>로 바뀔 수 있으니 터미널에 찍힌 주소를 그대로 엽니다.</li><li><code>npm install</code>로 lock 파일이 바뀌었다면, 의도한 변경이 아닐 때는 커밋하지 않습니다.</li></ul>`,6),n(`p`,null,[h[1]||=a(`자세히: `,-1),i(g,{to:`/prj/field-guide`},{default:t(()=>[...h[0]||=[a(`현장 업무 시작하기`,-1)]]),_:1})])]),h[31]||=s(`<section id="section-1"><h2><span class="section-no">02</span> package.json에서 먼저 볼 것</h2><p><code>dependencies</code>와 <code>devDependencies</code>만 훑어도 프로젝트의 도구 구성이 보입니다.</p><div class="table-wrap"><table><thead><tr><th>항목</th><th>무엇을 확인</th><th>예</th></tr></thead><tbody><tr><td>프레임워크</td><td>Vue인지 React인지, 메이저 버전</td><td><code>vue</code> 3.x / <code>react</code>·<code>react-dom</code> 19.x</td></tr><tr><td>빌드 도구</td><td>Vite 버전, 플러그인</td><td><code>vite</code>, <code>@vitejs/plugin-vue</code>, <code>@vitejs/plugin-react</code></td></tr><tr><td>라우터</td><td>화면 이동 방식</td><td><code>vue-router</code> / <code>react-router</code> 또는 <code>react-router-dom</code></td></tr><tr><td>상태 관리</td><td>있으면 store 폴더 위치도 확인</td><td><code>pinia</code> / <code>zustand</code>, <code>@reduxjs/toolkit</code></td></tr><tr><td>스타일</td><td>SCSS 사용 여부</td><td><code>sass</code> 또는 <code>sass-embedded</code></td></tr><tr><td>TypeScript</td><td>사용 여부</td><td><code>typescript</code>, <code>tsconfig.json</code>, <code>.ts</code>·<code>.tsx</code> 파일</td></tr><tr><td>UI 라이브러리</td><td>직접 만들지 말고 먼저 확인</td><td>Element Plus, Vuetify, MUI 등</td></tr><tr><td>코드 규칙</td><td>저장 시 자동 정리 여부</td><td><code>eslint</code>, <code>prettier</code>, <code>.prettierrc</code></td></tr></tbody></table></div><ul><li>TypeScript 프로젝트라면 <code>npm run build</code>에 타입 검사(<code>vue-tsc</code>, <code>tsc -b</code>)가 함께 들어 있는 경우가 많습니다. dev에서는 되는데 build에서 실패하면 타입 오류를 확인합니다.</li></ul></section>`,1),n(`section`,u,[h[16]||=n(`h2`,null,[n(`span`,{class:`section-no`},`03`),a(` 폴더 구조 지도`)],-1),h[17]||=n(`p`,null,[a(`전형적인 구조입니다. 프로젝트마다 이름과 위치가 다르니 `),n(`strong`,null,`main 파일부터 import를`),a(` 따라가며 확인합니다.`)],-1),i(v,{group:`framework`,label:`프레임워크`},{default:t(()=>[i(_,{label:`Vue`},{default:t(()=>[...h[3]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},`project/
├─ index.html            # <div id="app"> + main.js 불러옴
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.js            # createApp, router·store 연결, 전역 SCSS import
   ├─ App.vue            # <RouterView /> 가 있는 최상위
   ├─ router/index.js    # 주소 ↔ 화면 연결
   ├─ views/             # 화면(페이지) 컴포넌트
   ├─ components/        # 재사용 컴포넌트
   ├─ stores/            # pinia (있으면)
   ├─ api/               # 서버 요청 함수
   └─ assets/scss/       # main.scss 와 부분 파일
`)],-1)]]),_:1}),i(_,{label:`React`},{default:t(()=>[...h[4]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},`project/
├─ index.html            # <div id="root"> + main.jsx 불러옴
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.jsx           # createRoot, 전역 SCSS import  (TS: main.tsx)
   ├─ App.jsx            # 라우터·레이아웃 최상위
   ├─ router/            # 라우트 정의 (App 안에 있기도 함)
   ├─ pages/             # 화면(페이지) 컴포넌트
   ├─ components/        # 재사용 컴포넌트
   ├─ store/             # zustand·redux (있으면)
   ├─ api/               # 서버 요청 함수
   └─ assets/scss/       # main.scss 와 부분 파일
`)],-1)]]),_:1})]),_:1}),n(`p`,null,[h[6]||=a(`흐름은 같습니다. `,-1),h[7]||=n(`strong`,null,`index.html → main → App → router → 화면 컴포넌트`,-1),h[8]||=a(` 순서입니다. 수정할 화면을 찾을 때는 브라우저 주소를 router 파일에서 검색해 연결된 컴포넌트를 엽니다. 라우터 문법은 `,-1),i(g,{to:`/pub/recap/router-basics`},{default:t(()=>[...h[5]||=[a(`라우터 한눈에`,-1)]]),_:1}),h[9]||=a(`에서 정리합니다.`,-1)]),h[18]||=s(`<p>main 파일에서는 앱을 붙이는 요소와 전역 스타일을 확인합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// Vue: src/main.js</span>
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> router <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./router&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./assets/scss/main.scss&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>

<span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>).<span class="hljs-title function_">use</span>(router).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre>`,2),i(v,{group:`react-lang`,label:`코드 언어`},{default:t(()=>[i(_,{label:`JSX`},{default:t(()=>[...h[10]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// React: src/main.jsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { `),n(`span`,{class:`hljs-title class_`},`StrictMode`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { createRoot } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react-dom/client'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-string`},`'./assets/scss/main.scss'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-title class_`},`App`),a(),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'./App.jsx'`),a(`

`),n(`span`,{class:`hljs-title function_`},`createRoot`),a(`(`),n(`span`,{class:`hljs-variable language_`},`document`),a(`.`),n(`span`,{class:`hljs-title function_`},`getElementById`),a(`(`),n(`span`,{class:`hljs-string`},`'root'`),a(`)).`),n(`span`,{class:`hljs-title function_`},`render`),a(`(
  `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`StrictMode`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`App`),a(` />`)]),a(`
  `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`StrictMode`),a(`>`)])]),a(`
)
`)])],-1)]]),_:1}),i(_,{label:`TSX`},{default:t(()=>[...h[11]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// React: src/main.tsx`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { `),n(`span`,{class:`hljs-title class_`},`StrictMode`),a(` } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(` { createRoot } `),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'react-dom/client'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-string`},`'./assets/scss/main.scss'`),a(`
`),n(`span`,{class:`hljs-keyword`},`import`),a(),n(`span`,{class:`hljs-title class_`},`App`),a(),n(`span`,{class:`hljs-keyword`},`from`),a(),n(`span`,{class:`hljs-string`},`'./App'`),a(`

`),n(`span`,{class:`hljs-comment`},`// getElementById는 null일 수 있어 타입상 !로 "반드시 있음"을 표시합니다.`),a(`
`),n(`span`,{class:`hljs-title function_`},`createRoot`),a(`(`),n(`span`,{class:`hljs-variable language_`},`document`),a(`.`),n(`span`,{class:`hljs-title function_`},`getElementById`),a(`(`),n(`span`,{class:`hljs-string`},`'root'`),a(`)!).`),n(`span`,{class:`hljs-title function_`},`render`),a(`(
  `),n(`span`,{class:`language-xml`},[n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`StrictMode`),a(`>`)]),a(`
    `),n(`span`,{class:`hljs-tag`},[a(`<`),n(`span`,{class:`hljs-name`},`App`),a(` />`)]),a(`
  `),n(`span`,{class:`hljs-tag`},[a(`</`),n(`span`,{class:`hljs-name`},`StrictMode`),a(`>`)])]),a(`
)
`)])],-1)]]),_:1})]),_:1}),n(`p`,null,[h[14]||=a(`자세히: `,-1),i(g,{to:`/std/vue-component`},{default:t(()=>[...h[12]||=[a(`Vue 3 컴포넌트 작성 규칙`,-1)]]),_:1}),h[15]||=a(` · `,-1),i(g,{to:`/std/react-component`},{default:t(()=>[...h[13]||=[a(`React 컴포넌트 작성 규칙`,-1)]]),_:1})])]),n(`section`,d,[h[21]||=s(`<h2><span class="section-no">04</span> vite.config에서 볼 것</h2><div class="table-wrap"><table><thead><tr><th>키</th><th>의미</th><th>확인할 것</th></tr></thead><tbody><tr><td><code>plugins</code></td><td>프레임워크 플러그인</td><td><code>vue()</code> / <code>react()</code></td></tr><tr><td><code>resolve.alias</code></td><td>경로 별칭</td><td><code>@/components/...</code>의 <code>@</code>가 어디인지</td></tr><tr><td><code>server.proxy</code></td><td>개발 중 API 요청 전달</td><td>API가 어느 서버로 가는지</td></tr><tr><td><code>server.port</code></td><td>개발 서버 포트</td><td>기본 5173에서 바뀌었는지</td></tr><tr><td><code>base</code></td><td>배포 경로</td><td>하위 경로(<code>/admin/</code>)에 배포하는지</td></tr><tr><td><code>css.preprocessorOptions</code></td><td>SCSS 공통 주입</td><td>변수·믹스인이 자동으로 들어가는지</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// vite.config.js (Vue 예시. React는 plugin-react의 react())</span>
<span class="hljs-keyword">import</span> { fileURLToPath, <span class="hljs-variable constant_">URL</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;node:url&#39;</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [<span class="hljs-title function_">vue</span>()],
  <span class="hljs-attr">base</span>: <span class="hljs-string">&#39;/&#39;</span>,
  <span class="hljs-attr">resolve</span>: {
    <span class="hljs-attr">alias</span>: {
      <span class="hljs-string">&#39;@&#39;</span>: <span class="hljs-title function_">fileURLToPath</span>(<span class="hljs-keyword">new</span> <span class="hljs-title function_">URL</span>(<span class="hljs-string">&#39;./src&#39;</span>, <span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-property">url</span>)),
    },
  },
  <span class="hljs-attr">server</span>: {
    <span class="hljs-attr">port</span>: <span class="hljs-number">5173</span>,
    <span class="hljs-attr">proxy</span>: {
      <span class="hljs-comment">// /api/... 요청을 백엔드 서버로 전달</span>
      <span class="hljs-string">&#39;/api&#39;</span>: {
        <span class="hljs-attr">target</span>: <span class="hljs-string">&#39;http://localhost:8080&#39;</span>,
        <span class="hljs-attr">changeOrigin</span>: <span class="hljs-literal">true</span>,
      },
    },
  },
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">preprocessorOptions</span>: {
      <span class="hljs-attr">scss</span>: {
        <span class="hljs-comment">// 모든 SCSS 파일 앞에 붙는 코드: 변수·믹스인을 import 없이 사용</span>
        <span class="hljs-attr">additionalData</span>: <span class="hljs-string">\`@use &quot;@/assets/scss/abstracts&quot; as *;\`</span>,
      },
    },
  },
})
</code></pre><ul><li><code>server.proxy</code>는 <strong>개발 서버(<code>npm run dev</code>)에서만</strong> 동작합니다. 배포 환경의 API 주소는 서버 설정이나 환경 변수로 정합니다.</li><li><code>additionalData</code>가 있으면 SCSS 파일에서 변수를 import 없이 쓰고 있을 수 있습니다. 새 SCSS 파일을 만들 때 같은 방식인지 확인합니다.</li><li>TypeScript 프로젝트는 별칭을 <code>tsconfig</code>의 <code>paths</code>에도 함께 적어 둡니다.</li></ul>`,4),n(`p`,null,[h[20]||=a(`자세히: `,-1),i(g,{to:`/prj/environments`},{default:t(()=>[...h[19]||=[a(`개발계·검증계·운영계`,-1)]]),_:1})])]),h[32]||=s(`<section id="section-4"><h2><span class="section-no">05</span> 환경 변수(.env)</h2><div class="table-wrap"><table><thead><tr><th>파일</th><th>언제 읽힘</th></tr></thead><tbody><tr><td><code>.env</code></td><td>항상</td></tr><tr><td><code>.env.development</code></td><td><code>npm run dev</code> (development 모드)</td></tr><tr><td><code>.env.production</code></td><td><code>npm run build</code> (production 모드)</td></tr><tr><td><code>.env.local</code>, <code>.env.[mode].local</code></td><td>내 PC 전용. 보통 git에 올리지 않음</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"># .env.development
VITE_API_URL=http://localhost:8080
DB_PASSWORD=secret   # VITE_ 가 없으므로 화면 코드에서 읽히지 않음
</code></pre><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 화면 코드에서 읽기</span>
<span class="hljs-keyword">const</span> apiUrl = <span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-property">env</span>.<span class="hljs-property">VITE_API_URL</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-property">env</span>.<span class="hljs-property">MODE</span>) <span class="hljs-comment">// &#39;development&#39; 또는 &#39;production&#39;</span>
</code></pre><ul><li>화면 코드에서는 <strong><code>VITE_</code>로 시작하는 변수만</strong> 읽을 수 있습니다(<code>envPrefix</code> 기본값).</li><li><code>VITE_</code> 변수는 빌드 결과 JS에 그대로 들어갑니다. 비밀번호·키 같은 비밀 값은 넣지 않습니다.</li><li><code>.env</code> 값을 바꾸면 개발 서버를 다시 시작해야 반영됩니다.</li><li><code>--mode staging</code>처럼 scripts에서 모드를 바꾸면 <code>.env.staging</code>을 읽습니다. 개발계·검증계 빌드가 나뉘어 있는지 scripts에서 확인합니다.</li></ul></section>`,1),n(`section`,f,[h[26]||=s(`<h2><span class="section-no">06</span> 스타일은 어디에</h2><ol><li>main 파일에서 전역 SCSS import 줄을 찾습니다(<code>import &#39;./assets/scss/main.scss&#39;</code>).</li><li>그 진입 파일(<code>main.scss</code>)에서 <code>@use</code> 순서를 보고 공통·레이아웃·컴포넌트·화면 파일 위치를 파악합니다.</li><li>수정할 화면의 스타일 파일을 찾아 그 안에서 작업합니다.</li></ol><div class="table-wrap"><table><thead><tr><th></th><th>Vue</th><th>React</th></tr></thead><tbody><tr><td>기본 방식</td><td>SCSS 파일로 분리해 main.scss에서 불러옴</td><td>SCSS 파일을 main 또는 컴포넌트에서 import</td></tr><tr><td>컴포넌트 전용</td><td>필요할 때만 <code>&lt;style scoped&gt;</code></td><td>CSS Modules(<code>*.module.scss</code>) 사용 여부 확인</td></tr><tr><td>클래스 작성</td><td><code>class=&quot;btn btn-primary&quot;</code></td><td><code>className=&quot;btn btn-primary&quot;</code></td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// React CSS Modules를 쓰는 프로젝트라면: 클래스가 객체 속성으로 바뀜</span>
<span class="hljs-keyword">import</span> styles <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./NoticeList.module.scss&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">NoticeList</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{styles.list}</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
}
</code></pre><ul><li>CSS Modules는 클래스 이름이 빌드 때 바뀌므로, 다른 파일의 전역 SCSS로는 덮어쓰기 어렵습니다. 어떤 방식인지 먼저 확인하고 같은 방식으로 작업합니다.</li><li>기존 컴포넌트가 <code>scoped</code>를 쓰고 있다면 하위 컴포넌트 스타일이 적용되지 않을 수 있습니다.</li></ul>`,5),n(`p`,null,[h[24]||=a(`자세히: `,-1),i(g,{to:`/std/scss-structure`},{default:t(()=>[...h[22]||=[a(`SCSS 구조와 작성 규칙`,-1)]]),_:1}),h[25]||=a(` · `,-1),i(g,{to:`/pub/vue/scoped-deep`},{default:t(()=>[...h[23]||=[a(`부모 scoped 스타일이 자식에 적용되지 않을 때`,-1)]]),_:1})])]),n(`section`,p,[h[29]||=n(`h2`,null,[n(`span`,{class:`section-no`},`07`),a(` 작업 전 체크리스트`)],-1),i(y,{label:`CHECKLIST`},{default:t(()=>[...h[27]||=[n(`p`,null,`화면 작업을 시작하기 전에 확인하세요.`,-1),n(`ul`,{class:`checklist`},[n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[a(`Node 버전을 `),n(`code`,null,`.nvmrc`),a(`·`),n(`code`,null,`engines`),a(`에 맞췄는지 (`),n(`code`,null,`node -v`),a(`)`)])])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[n(`code`,null,`npm ci`),a(`로 설치하고 `),n(`code`,null,`npm run dev`),a(`로 화면이 뜨는지`)])])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[n(`code`,null,`scripts`),a(`에서 dev·build·preview 실제 명령 이름을 확인했는지`)])])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[a(`Vue인지 React인지, JS인지 TS인지(`),n(`code`,null,`.jsx`),a(`·`),n(`code`,null,`.tsx`),a(`) 확인했는지`)])])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},`라우터·상태 관리·UI 라이브러리가 무엇인지 알고 있는지`)])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},`main 파일 → App → router 순서로 수정할 화면 파일을 찾았는지`)])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[n(`code`,null,`vite.config`),a(`의 `),n(`code`,null,`@`),a(` 별칭, proxy, `),n(`code`,null,`base`),a(`를 확인했는지`)])])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[n(`code`,null,`.env`),a(` 파일 종류와 `),n(`code`,null,`VITE_`),a(` 변수 용도를 확인했는지`)])])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},`전역 SCSS 진입 파일과 스타일 작성 방식(분리·scoped·CSS Modules)을 확인했는지`)])]),n(`li`,null,[n(`label`,null,[n(`input`,{type:`checkbox`}),n(`span`,{class:`checklist-text`},[n(`code`,null,`npm run build`),a(`가 통과하는지 작업 전후로 확인했는지`)])])])],-1)]]),_:1}),i(b,null,{default:t(()=>[...h[28]||=[n(`p`,null,`막히면 main 파일을 여세요. 앱이 붙는 곳, 전역 스타일, 라우터가 모두 거기서 시작합니다.`,-1)]]),_:1})])])}}};export{k as default,w as duration,b as group,m as id,y as lead,C as level,_ as navTitle,h as order,O as references,D as related,T as status,v as summary,S as tags,g as title,x as topic,E as updated};