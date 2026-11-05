import{C as e,E as t,F as n,H as r,I as i,O as a,R as o,S as s,c,f as l,m as u,ot as d,p as f,r as p,s as m,u as h,w as g}from"./runtime-core.esm-bundler-DaAiWlfC.js";import{f as _}from"./index-CQ21ZCHZ.js";import{t as v}from"./DemoCompare-WCDBpe2Q.js";var y={class:`demo-so-status`,role:`status`},b=[`aria-label`],x={class:`demo-so-top`,"aria-hidden":`true`},S={__name:`ScrollObserverDemo`,setup(r){let a=e=>e?`solved`:`problem`,l={},u={},S=o({problem:0,solved:0}),C=o({problem:!1,solved:!1}),w=null;function T(){S.problem+=1;let e=l.problem.getBoundingClientRect(),t=u.problem.getBoundingClientRect();C.problem=t.bottom<e.top}e(()=>{l.problem.addEventListener(`scroll`,T),w=new IntersectionObserver(([e])=>{S.solved+=1,C.solved=!e.isIntersecting},{root:l.solved}),w.observe(u.solved)}),s(()=>{l.problem?.removeEventListener(`scroll`,T),w?.disconnect()});function E(){l.problem.scrollTop=0,l.solved.scrollTop=0,requestAnimationFrame(()=>requestAnimationFrame(()=>{S.problem=0,S.solved=0}))}return(e,r)=>(g(),c(v,{problem:{code:`scroll마다 getBoundingClientRect()`,note:`스크롤하는 동안 계속 위치를 계산합니다.`},solved:{code:`IntersectionObserver`,note:`기준선이 보이거나 사라질 때만 알려 줍니다.`}},{controls:n(()=>[r[0]||=m(`span`,{class:`demo-label`},`조작`,-1),m(`div`,{class:`sample-buttons`},[m(`button`,{type:`button`,onClick:E},`처음으로`)])]),default:n(({solved:e})=>[m(`p`,y,[r[1]||=f(` 위치 판정 `,-1),m(`strong`,null,d(S[a(e)])+`회`,1),r[2]||=f(` · 맨 위로 버튼 `,-1),m(`strong`,null,d(C[a(e)]?`보임`:`숨김`),1)]),m(`div`,{ref:t=>l[a(e)]=t,class:`demo-so-box`,tabindex:`0`,"aria-label":`${e?`해결`:`문제`} 예제 스크롤 영역`},[m(`div`,{ref:t=>u[a(e)]=t,class:`demo-so-sentinel`},`기준선: 이 줄이 사라지면 버튼 표시`,512),(g(),h(p,null,t(24,e=>m(`p`,{key:e,class:`demo-so-item`},`목록 `+d(e),1)),64)),i(m(`span`,x,`↑ 맨 위로`,512),[[_,C[a(e)]]])],8,b)]),caption:n(()=>[...r[3]||=[f(` 두 영역을 각각 끝까지 스크롤해 보세요. 버튼이 나타나는 시점은 같고, 판정 횟수만 다릅니다. `,-1)]]),_:1}))}},C=[{label:`해결 코드`,language:`javascript`,code:`// 페이지 맨 위의 기준선이 화면에서 사라지면 '맨 위로' 버튼을 보입니다.
const sentinel = document.querySelector('.top-sentinel')
const topButton = document.querySelector('.top-button')

const observer = new IntersectionObserver(([entry]) => {
  topButton.hidden = entry.isIntersecting
})
observer.observe(sentinel)

// 화면에 들어오면 한 번만 등장 효과를 주고 감시를 끝냅니다.
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    obs.unobserve(entry.target)
  })
}, { rootMargin: '0px 0px -10% 0px' })

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))`},{label:`문제 코드`,language:`javascript`,code:`// 스크롤할 때마다 요소 위치를 계산합니다.
window.addEventListener('scroll', () => {
  const rect = sentinel.getBoundingClientRect()
  topButton.hidden = rect.bottom > 0

  document.querySelectorAll('.reveal').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add('is-visible')
    }
  })
})`},{label:`scroll이 필요한 경우`,language:`javascript`,code:`// 스크롤 진행 막대처럼 스크롤 값 자체가 필요할 때는 scroll 이벤트를 씁니다.
// 위치 계산(getBoundingClientRect) 없이 scrollY만 읽고, 그리기는 transform으로 합니다.
const bar = document.querySelector('.progress-bar')

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight
  bar.style.transform = \`scaleX(\${max > 0 ? window.scrollY / max : 0})\`
})

// 터치·휠 이벤트는 passive로 등록해 스크롤이 기다리지 않게 합니다.
window.addEventListener('touchmove', handleTouch, { passive: true })`},{label:`HTML`,language:`xml`,code:`<body>
  <div class="top-sentinel" aria-hidden="true"></div>
  <header>…</header>
  <main>
    <section class="reveal">…</section>
  </main>
  <button type="button" class="top-button" hidden>맨 위로</button>
</body>`}],w={class:`doc-body`},T={id:`section-0`},E={id:`section-1`},D={id:`section-3`},O={id:`section-5`},k=`scroll-observer`,A=4,j=`스크롤할 때마다 위치를 계산하지 않기 (IntersectionObserver)`,M=`스크롤 위치 감지`,N=`맨 위로 버튼, 등장 효과처럼 요소가 보이는지 판단하는 일을 scroll 이벤트 대신 IntersectionObserver로 처리해, 스크롤 중 반복 계산을 없앱니다.`,P=`스크롤할 때 화면이 버벅이고, scroll 이벤트 안에서 위치를 계산하고 있다면?
'보이는가'를 판단하는 일은 IntersectionObserver에 맡기세요.
`,F=`성능`,I=`스크롤`,L=[`JavaScript`,`scroll`,`IntersectionObserver`,`getBoundingClientRect`,`맨 위로`,`등장 효과`,`passive`,`성능`],R=`중급`,z=`약 7분`,B=[`addEventListener`,`getBoundingClientRect`],V=`IntersectionObserver`,H=`published`,U=`2026-11-05`,W=[`event-delegation`,`hidden-size`],G=[{title:`MDN — Intersection Observer API`,url:`https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API`},{title:`MDN — scroll 이벤트`,url:`https://developer.mozilla.org/ko/docs/Web/API/Document/scroll_event`},{title:`MDN — addEventListener의 passive 옵션`,url:`https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener`}],K={__name:`scroll-observer`,setup(e,{expose:t}){return t({frontmatter:{id:`scroll-observer`,order:4,title:`스크롤할 때마다 위치를 계산하지 않기 (IntersectionObserver)`,navTitle:`스크롤 위치 감지`,summary:`맨 위로 버튼, 등장 효과처럼 요소가 보이는지 판단하는 일을 scroll 이벤트 대신 IntersectionObserver로 처리해, 스크롤 중 반복 계산을 없앱니다.`,lead:`스크롤할 때 화면이 버벅이고, scroll 이벤트 안에서 위치를 계산하고 있다면?
'보이는가'를 판단하는 일은 IntersectionObserver에 맡기세요.
`,group:`성능`,topic:`스크롤`,tags:[`JavaScript`,`scroll`,`IntersectionObserver`,`getBoundingClientRect`,`맨 위로`,`등장 효과`,`passive`,`성능`],level:`중급`,duration:`약 7분`,prerequisites:[`addEventListener`,`getBoundingClientRect`],keyProperty:`IntersectionObserver`,status:`published`,updated:`2026-11-05`,related:[`event-delegation`,`hidden-size`],references:[{title:`MDN — Intersection Observer API`,url:`https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API`},{title:`MDN — scroll 이벤트`,url:`https://developer.mozilla.org/ko/docs/Web/API/Document/scroll_event`},{title:`MDN — addEventListener의 passive 옵션`,url:`https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener`}]}}),(e,t)=>{let i=a(`DocTakeaway`),o=a(`CodePanel`),s=a(`DocPractice`);return g(),h(`div`,w,[m(`section`,T,[t[1]||=m(`h2`,null,[m(`span`,{class:`section-no`},`01`),f(` 문제 상황`)],-1),t[2]||=m(`p`,null,[f(`메인 화면에 ‘맨 위로’ 버튼과 섹션 등장 효과를 넣었습니다. 둘 다 `),m(`code`,null,`scroll`),f(` 이벤트 안에서 요소 위치를 계산하는데, 섹션이 많아질수록 `),m(`strong`,null,`스크롤이 끊기고`),f(` 저사양 기기에서는 더 심해집니다.`)],-1),u(i,null,{default:n(()=>[...t[0]||=[m(`p`,null,[f(`“요소가 화면에 보이는가”는 `),m(`strong`,null,[m(`code`,null,`IntersectionObserver`),f(`에`)]),f(` 맡기세요. 스크롤할 때마다 계산하지 않고, 보이는 상태가 `),m(`strong`,null,`바뀔 때만`),f(` 알려 줍니다.`)],-1)]]),_:1})]),m(`section`,E,[t[3]||=m(`h2`,null,[m(`span`,{class:`section-no`},`02`),f(` 직접 비교하기`),m(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),t[4]||=m(`p`,null,`두 영역을 끝까지 스크롤했다가 다시 위로 올려 보세요. 버튼이 보이는 결과는 같고, 위치를 판정한 횟수만 다릅니다.`,-1),u(S)]),t[9]||=l(`<section id="section-2"><h2><span class="section-no">03</span> 왜 느려질까요?</h2><p><code>scroll</code> 이벤트는 스크롤하는 동안 화면을 다시 그릴 때마다(보통 1초에 수십 번) 발생합니다. 그 안에서 <code>getBoundingClientRect()</code>로 위치를 읽으면 브라우저가 매번 배치 결과를 확인해야 하고, 확인할 요소가 많을수록 한 번의 처리가 길어집니다. 처리가 다음 그리기 시간을 넘기면 화면이 끊깁니다.</p><p><code>IntersectionObserver</code>는 브라우저가 화면을 그리는 과정에서 겹침 여부를 직접 확인하고, <strong>상태가 바뀐 요소만</strong> 모아 알려 줍니다. 스크롤 중 내가 실행하는 코드가 거의 없습니다.</p><div class="table-wrap"><table><thead><tr><th>하고 싶은 일</th><th>쓰는 방법</th></tr></thead><tbody><tr><td>맨 위로 버튼 표시, 고정 헤더 그림자</td><td>기준 요소를 <code>IntersectionObserver</code>로 감시</td></tr><tr><td>섹션 등장 효과, 이미지 늦게 불러오기</td><td><code>IntersectionObserver</code> (한 번 보이면 <code>unobserve</code>)</td></tr><tr><td>스크롤 진행 막대처럼 스크롤 값 자체가 필요</td><td><code>scroll</code> 이벤트 + <code>scrollY</code>만 읽기</td></tr><tr><td>이미지 늦게 불러오기만 필요</td><td><code>&lt;img loading=&quot;lazy&quot;&gt;</code> (JavaScript 불필요)</td></tr></tbody></table></div></section>`,1),m(`section`,D,[t[5]||=m(`h2`,null,[m(`span`,{class:`section-no`},`04`),f(` 해결 코드`)],-1),u(o,{tabs:r(C)},null,8,[`tabs`]),t[6]||=l(`<ul><li><strong><code>rootMargin</code></strong>: 감시 영역을 늘리거나 줄입니다. <code>&#39;0px 0px -10% 0px&#39;</code>은 화면 아래 10%를 빼고, 조금 더 들어왔을 때 보인 것으로 판단합니다.</li><li><strong><code>root</code></strong>: 기본은 화면(뷰포트)입니다. 예제처럼 스크롤 영역 안에서 감시하려면 그 영역을 지정합니다.</li><li><strong>처음 한 번 실행</strong>: <code>observe()</code>를 시작하면 현재 상태를 알려 주기 위해 한 번 실행됩니다. 예제의 해결 쪽 횟수가 1부터 시작하는 이유입니다.</li></ul>`,1)]),t[10]||=l(`<section id="section-4"><h2><span class="section-no">05</span> 적용 시 주의점</h2><ul><li><strong>등장 효과는 끝나면 감시를 멈춥니다.</strong> <code>unobserve()</code>로 해제하지 않으면 보였다 사라질 때마다 다시 실행됩니다.</li><li><strong>scroll 이벤트가 꼭 필요하면 가볍게 씁니다.</strong> 위치 계산 없이 <code>scrollY</code> 같은 값만 읽고, 움직임은 <code>transform</code>으로 그립니다.</li><li><strong><code>passive</code>는 터치·휠 이벤트에 붙입니다.</strong> <code>touchmove</code>·<code>wheel</code> 처리 함수가 스크롤을 막을 수 있으면 브라우저가 처리를 기다리느라 스크롤이 늦어집니다. <code>{ passive: true }</code>로 막지 않겠다고 알려 줍니다. (<code>scroll</code> 이벤트는 원래 막을 수 없어 해당하지 않습니다.)</li><li><strong>움직임을 줄이는 설정을 존중합니다.</strong> 등장 효과는 <code>prefers-reduced-motion: reduce</code>일 때 바로 보이게 합니다.</li></ul></section>`,1),m(`section`,O,[t[8]||=m(`h2`,null,[m(`span`,{class:`section-no`},`06`),f(` 짧은 실습`)],-1),u(s,null,{default:n(()=>[...t[7]||=[m(`p`,null,`위 예제에서 각 영역을 끝까지 내렸다가 맨 위로 올립니다.`,-1),m(`ul`,{class:`checklist`},[m(`li`,null,[m(`label`,null,[m(`input`,{type:`checkbox`}),m(`span`,{class:`checklist-text`},`문제 쪽 판정 횟수는 수십 회 이상, 해결 쪽은 몇 회에 그친다.`)])]),m(`li`,null,[m(`label`,null,[m(`input`,{type:`checkbox`}),m(`span`,{class:`checklist-text`},`해결 쪽 횟수가 늘어나는 순간이 ‘기준선’이 사라지거나 나타날 때뿐인 것을 확인한다.`)])]),m(`li`,null,[m(`label`,null,[m(`input`,{type:`checkbox`}),m(`span`,{class:`checklist-text`},[f(`해결 코드의 등장 효과에서 `),m(`code`,null,`obs.unobserve(entry.target)`),f(`을 지우면 어떻게 동작할지 설명할 수 있다.`)])])])],-1)]]),_:1})])])}}};export{K as default,z as duration,F as group,k as id,V as keyProperty,P as lead,R as level,M as navTitle,A as order,B as prerequisites,G as references,W as related,H as status,N as summary,L as tags,j as title,I as topic,U as updated};