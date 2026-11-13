import{D as e,R as t,c as n,d as r,g as i,h as a,j as o,m as s}from"./runtime-core.esm-bundler-ColWfbNJ.js";var c={class:`doc-body`},l={id:`section-1`},u={id:`section-2`},d={id:`section-3`},f=`css-units`,p=4,m=`단위와 글자 크기, z-index`,h=`단위와 글자 크기`,g=`px·rem·%·fr·vh/dvh를 쓰는 기준, rem 62.5% 기준, 정해진 단계로만 쓰는 글자 크기, 단위 없는 line-height, 이름으로 관리하는 z-index를 정리합니다.`,_=`같은 값을 매번 다른 단위로 쓰면 화면이 조금씩 어긋납니다.
용도별 단위와 정해진 단계를 기준으로 작성하세요.
`,v=`CSS`,y=`마크업·스타일`,b=`단위`,x=[`px`,`rem`,`em`,`62.5%`,`fr`,`dvh`,`font-size`,`line-height`,`z-index`],S=`약 6분`,C=`용도별 단위`,w=`published`,T=`2026-11-04`,E=[`scss-structure`],D=[{title:`MDN — CSS 값과 단위`,url:`https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units`},{title:`MDN — z-index와 쌓임 맥락`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context`}],O={__name:`css-units`,setup(f,{expose:p}){return p({frontmatter:{id:`css-units`,order:4,title:`단위와 글자 크기, z-index`,navTitle:`단위와 글자 크기`,summary:`px·rem·%·fr·vh/dvh를 쓰는 기준, rem 62.5% 기준, 정해진 단계로만 쓰는 글자 크기, 단위 없는 line-height, 이름으로 관리하는 z-index를 정리합니다.`,lead:`같은 값을 매번 다른 단위로 쓰면 화면이 조금씩 어긋납니다.
용도별 단위와 정해진 단계를 기준으로 작성하세요.
`,category:`CSS`,group:`마크업·스타일`,topic:`단위`,tags:[`px`,`rem`,`em`,`62.5%`,`fr`,`dvh`,`font-size`,`line-height`,`z-index`],duration:`약 6분`,keyProperty:`용도별 단위`,status:`published`,updated:`2026-11-04`,related:[`scss-structure`],references:[{title:`MDN — CSS 값과 단위`,url:`https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units`},{title:`MDN — z-index와 쌓임 맥락`,url:`https://developer.mozilla.org/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context`}]}}),(f,p)=>{let m=o(`DocDont`),h=o(`DocDo`),g=o(`DocDoDont`);return e(),r(`div`,c,[p[13]||=s(`<section id="section-0"><h2><span class="section-no">01</span> 용도별 단위</h2><div class="table-wrap"><table><thead><tr><th>용도</th><th>단위</th><th>이유</th></tr></thead><tbody><tr><td>테두리, 그림자, 아이콘 크기</td><td><code>px</code></td><td>정확한 픽셀 표현이 필요합니다.</td></tr><tr><td>여백, 간격</td><td><code>px</code></td><td>글자 확대와 관계없이 화면 구성을 유지합니다.</td></tr><tr><td>글자 크기</td><td>프로젝트 기준(<code>px</code> 또는 <code>rem</code>)</td><td>한 프로젝트 안에서는 한 가지로 통일합니다.</td></tr><tr><td>글자에 비례하는 간격</td><td><code>em</code></td><td>아이콘과 글자 사이처럼 글자 크기를 따라가야 할 때 씁니다.</td></tr><tr><td>레이아웃 너비</td><td><code>%</code>, <code>fr</code>, <code>minmax()</code></td><td>화면 폭에 따라 나눠야 합니다.</td></tr><tr><td>화면 높이</td><td><code>dvh</code></td><td>모바일 주소창 높이 변화를 반영합니다.</td></tr></tbody></table></div><ul><li><code>rem</code>은 사용자가 브라우저 글자 크기를 키우면 함께 커집니다. 글자 확대 대응이 중요한 서비스라면 <code>rem</code> 기준을 검토합니다. 모바일 프로젝트에서 많이 쓰는 62.5% 기준은 아래에서 다룹니다.</li><li>모바일 전체 높이는 <code>100vh</code> 대신 <code>100dvh</code>를 사용합니다. <code>100vh</code>는 주소창을 포함한 높이라 하단 버튼이 가려질 수 있습니다.</li></ul></section>`,1),n(`section`,l,[p[2]||=s(`<h2><span class="section-no">02</span> rem 기준: html 62.5%</h2><p>모바일 프로젝트에서는 <code>html</code>의 글자 크기를 <strong>62.5%로 두고</strong> <code>rem</code>으로 작성하는 경우가 많습니다. 브라우저 기본 글자 크기 16px의 62.5%는 10px이라, <strong>1rem = 10px</strong>이 되어 시안의 글자 크기(px)를 10으로 나누기만 하면 됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-tag">html</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">62.5%</span>; <span class="hljs-comment">// 16px × 62.5% = 10px → 1rem = 10px</span>
}

<span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.4rem</span>; <span class="hljs-comment">// 14px: 기본 글자 크기를 다시 지정합니다.</span>
}

<span class="hljs-selector-class">.page-title</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">2rem</span>; <span class="hljs-comment">// 20px</span>
}
</code></pre><ul><li><code>body</code>에 기본 글자 크기를 <strong>꼭 다시 지정</strong>합니다. 빠뜨리면 크기를 정하지 않은 글자가 모두 10px로 보입니다.</li><li><code>html { font-size: 10px; }</code>처럼 <strong>px로 고정하지 않습니다.</strong> 사용자가 브라우저 글자 크기를 키워도 따라 커지지 않아 <code>rem</code>을 쓰는 이유가 사라집니다.</li><li>외부 라이브러리·위젯이 <code>1rem = 16px</code>을 전제로 만들어졌다면 크기가 작게 보일 수 있습니다. 도입 전에 확인합니다.</li><li><code>rem</code>은 <strong>글자 크기에만</strong> 씁니다. 여백·간격과 테두리(1px)처럼 정확한 픽셀이 필요한 값은 그대로 <code>px</code>을 씁니다.</li></ul>`,4),i(g,null,{default:t(()=>[i(m,null,{default:t(()=>[...p[0]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// 사용자 글자 크기 설정을 무시합니다.`),a(`
`),n(`span`,{class:`hljs-selector-tag`},`html`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`10px`),a(`; }
`)])],-1)]]),_:1}),i(h,null,{default:t(()=>[...p[1]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// 사용자 설정에 비례합니다.`),a(`
`),n(`span`,{class:`hljs-selector-tag`},`html`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`62.5%`),a(`; }
`),n(`span`,{class:`hljs-selector-tag`},`body`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`1.4rem`),a(`; }
`)])],-1)]]),_:1})]),_:1}),p[3]||=s(`<p><code>html</code>을 100%로 그대로 두고 변환 함수를 쓰는 방법도 있습니다. 어느 쪽이든 <strong>프로젝트 안에서는 한 가지 방식으로 통일</strong>합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;sass:math&#39;</span>;

<span class="hljs-comment">// 시안의 글자 크기(px)를 rem으로 바꿉니다. (브라우저 기본 16px 기준)</span>
<span class="hljs-keyword">@function</span> rem(<span class="hljs-variable">$px</span>) {
  <span class="hljs-keyword">@return</span> math.div(<span class="hljs-variable">$px</span>, <span class="hljs-number">16px</span>) * <span class="hljs-number">1rem</span>;
}

<span class="hljs-selector-class">.page-title</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-built_in">rem</span>(<span class="hljs-number">20px</span>); <span class="hljs-comment">// 1.25rem</span>
}
</code></pre>`,2)]),n(`section`,u,[p[6]||=n(`h2`,null,[n(`span`,{class:`section-no`},`03`),a(` 글자 크기는 정해진 단계로만`)],-1),p[7]||=n(`p`,null,[a(`화면마다 13px, 13.5px, 14px처럼 조금씩 다른 값을 쓰면 위계가 흐려집니다. 프로젝트에서 `),n(`strong`,null,`글자 크기 단계`),a(`를 정하고 그 값만 사용합니다.`)],-1),i(g,null,{default:t(()=>[i(m,null,{default:t(()=>[...p[4]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.card-title`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`17px`),a(`; }
`),n(`span`,{class:`hljs-selector-class`},`.list-title`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`16.5px`),a(`; }
`),n(`span`,{class:`hljs-selector-class`},`.desc`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`13.5px`),a(`; }
`)])],-1)]]),_:1}),i(h,null,{default:t(()=>[...p[5]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-comment`},`// _variables.scss에 단계를 정의합니다.`),a(`
`),n(`span`,{class:`hljs-variable`},`$font-size-lg`),a(`: `),n(`span`,{class:`hljs-number`},`16px`),a(`;   `),n(`span`,{class:`hljs-comment`},`// 제목`),a(`
`),n(`span`,{class:`hljs-variable`},`$font-size-base`),a(`: `),n(`span`,{class:`hljs-number`},`14px`),a(`; `),n(`span`,{class:`hljs-comment`},`// 본문`),a(`
`),n(`span`,{class:`hljs-variable`},`$font-size-sm`),a(`: `),n(`span`,{class:`hljs-number`},`13px`),a(`;   `),n(`span`,{class:`hljs-comment`},`// 보조`),a(`
`),n(`span`,{class:`hljs-variable`},`$font-size-desc`),a(`: `),n(`span`,{class:`hljs-number`},`12px`),a(`; `),n(`span`,{class:`hljs-comment`},`// 설명`),a(`

`),n(`span`,{class:`hljs-selector-class`},`.card-title`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-variable`},`$font-size-lg`),a(`; }
`),n(`span`,{class:`hljs-selector-class`},`.list-title`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-variable`},`$font-size-lg`),a(`; }
`),n(`span`,{class:`hljs-selector-class`},`.desc`),a(` { `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-variable`},`$font-size-desc`),a(`; }
`)])],-1)]]),_:1})]),_:1}),p[8]||=s(`<p>단계마다 쓰는 곳을 정해 두면 고민 없이 고를 수 있습니다.</p><div class="table-wrap"><table><thead><tr><th>단계</th><th>크기</th><th>쓰는 곳</th></tr></thead><tbody><tr><td>제목 <code>lg</code></td><td>16px</td><td>카드·목록 제목</td></tr><tr><td>본문 <code>base</code></td><td>14px</td><td>본문, 표, 메뉴, 버튼</td></tr><tr><td>보조 <code>sm</code></td><td>13px</td><td>칩, 코드, 안내 상자</td></tr><tr><td>설명 <code>desc</code></td><td>12px</td><td>번호, 날짜, 배지, 캡션</td></tr></tbody></table></div><p>rem 기준(html 62.5%) 프로젝트라면 같은 단계를 <code>rem</code>으로 정의합니다. 쓰는 쪽 코드는 그대로입니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-variable">$font-size-lg</span>: <span class="hljs-number">1.6rem</span>;   <span class="hljs-comment">// 16px</span>
<span class="hljs-variable">$font-size-base</span>: <span class="hljs-number">1.4rem</span>; <span class="hljs-comment">// 14px</span>
<span class="hljs-variable">$font-size-sm</span>: <span class="hljs-number">1.3rem</span>;   <span class="hljs-comment">// 13px</span>
<span class="hljs-variable">$font-size-desc</span>: <span class="hljs-number">1.2rem</span>; <span class="hljs-comment">// 12px</span>
</code></pre><ul><li>이 사이트는 <code>px</code> 기준이며, 단계는 <code>src/assets/css/scss/common/_variables.scss</code>에 있습니다.</li></ul>`,5)]),n(`section`,d,[p[11]||=n(`h2`,null,[n(`span`,{class:`section-no`},`04`),a(` line-height는 단위 없이`)],-1),p[12]||=n(`p`,null,[n(`code`,null,`line-height: 24px`),a(`처럼 고정하면 글자 크기가 바뀌어도 줄 간격이 그대로라 겹치거나 벌어집니다. `),n(`strong`,null,`단위 없는 배수`),a(`로 쓰면 글자 크기에 비례합니다.`)],-1),i(g,null,{default:t(()=>[i(m,null,{default:t(()=>[...p[9]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.desc`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`14px`),a(`;
  `),n(`span`,{class:`hljs-attribute`},`line-height`),a(`: `),n(`span`,{class:`hljs-number`},`24px`),a(`;
}
`)])],-1)]]),_:1}),i(h,null,{default:t(()=>[...p[10]||=[n(`pre`,{class:`doc-code`,tabindex:`0`},[n(`code`,{class:`hljs`},[n(`span`,{class:`hljs-selector-class`},`.desc`),a(` {
  `),n(`span`,{class:`hljs-attribute`},`font-size`),a(`: `),n(`span`,{class:`hljs-number`},`14px`),a(`;
  `),n(`span`,{class:`hljs-attribute`},`line-height`),a(`: `),n(`span`,{class:`hljs-number`},`1.7`),a(`;
}
`)])],-1)]]),_:1})]),_:1})]),p[14]||=s(`<section id="section-4"><h2><span class="section-no">05</span> z-index는 이름으로 관리합니다</h2><p><code>z-index: 9999</code>처럼 큰 값을 경쟁적으로 쓰면 어떤 레이어가 위인지 알 수 없습니다. 쓰는 층을 표로 정하고 변수 이름으로 사용합니다.</p><div class="table-wrap"><table><thead><tr><th>층</th><th>값</th><th>예</th></tr></thead><tbody><tr><td>기본</td><td><code>auto</code></td><td>일반 콘텐츠</td></tr><tr><td>떠 있는 버튼</td><td><code>8</code></td><td>우측 하단 퀵영역</td></tr><tr><td>배경 덮개</td><td><code>9</code></td><td>모바일 메뉴 뒤 반투명 배경</td></tr><tr><td>고정 헤더</td><td><code>10</code></td><td>상단 헤더</td></tr><tr><td>최상단</td><td><code>99</code></td><td>본문 바로가기 링크</td></tr></tbody></table></div><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-variable">$z-index</span>: (
  quick: <span class="hljs-number">8</span>,
  backdrop: <span class="hljs-number">9</span>,
  header: <span class="hljs-number">10</span>,
  skip: <span class="hljs-number">99</span>,
);

<span class="hljs-selector-class">.site-header</span> {
  <span class="hljs-attribute">z-index</span>: map.<span class="hljs-built_in">get</span>(<span class="hljs-variable">$z-index</span>, header);
}
</code></pre><ul><li>z-index는 <strong>같은 쌓임 맥락 안에서만</strong> 비교됩니다. 부모가 쌓임 맥락을 만들면(<code>position</code>과 함께 쓴 <code>z-index</code>, 1 미만의 <code>opacity</code>, <code>transform</code> 등) 자식의 값이 아무리 커도 부모보다 위로 올라오지 못합니다.</li></ul></section>`,1)])}}};export{v as category,O as default,S as duration,y as group,f as id,C as keyProperty,_ as lead,h as navTitle,p as order,D as references,E as related,w as status,g as summary,x as tags,m as title,b as topic,T as updated};