import{D as e,G as t,H as n,R as r,c as i,d as a,ft as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,s as h,u as g,ut as _,z as v}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as y}from"./index-Dxflp_jg.js";import{t as b}from"./DemoCompare-Bd6h8ThJ.js";var x=`.demo-clamp-card {
  box-sizing: border-box;
  padding: 14px 16px;
  border: 1px solid #c9d4e3;
  border-radius: 6px;
  background: #fff;
  color: #23334b;
  font-size: 14px;
}
.demo-clamp-title {
  margin: 0 0 6px;
  font-weight: 700;
}
.demo-clamp-desc {
  margin: 0; /* 아래 여백이 필요하면 padding-bottom 대신 margin을 씁니다. */
  line-height: 1.8;
  word-break: keep-all; /* 한글은 어절(띄어쓰기) 단위로 줄바꿈합니다. */
  overflow-wrap: anywhere; /* 한 줄에 들어가지 않는 긴 단어·URL만 중간에서 줄바꿈합니다. */
  /* 여러 줄 말줄임: 아래 네 줄을 함께 씁니다. */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 보여 줄 줄 수 */
  overflow: hidden;
}
/* 전체 보기: 줄 수 제한을 풉니다. */
.demo-clamp-desc.is-expanded {
  -webkit-line-clamp: unset;
}
.demo-clamp-more {
  margin-top: 6px;
  padding: 0;
  border: 0;
  background: none;
  color: #315bc2;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
}
/* 비교를 위한 문제 상태: 줄 수 대신 높이로 자릅니다. (줄 높이 1.5를 가정해 1.5em × 3줄) */
.is-problem .demo-clamp-desc {
  display: block;
  -webkit-line-clamp: unset;
  max-height: 4.5em;
}
`,S=`겨울 한정 니트 카디건`,C=[{key:`ko`,label:`긴 한글`,text:`부드러운 램스울 혼방 원사로 짠 겨울 한정 니트 카디건입니다. 어깨선이 자연스럽게 떨어지는 오버핏이라 셔츠나 원피스 위에 걸치기 좋고, 단추를 모두 채우면 단독으로도 입을 수 있습니다. 세탁할 때는 뒤집어서 울 전용 세제로 손세탁해 주세요.`},{key:`url`,label:`긴 영문 단어·URL`,text:`사이즈 안내 https://shop.example.com/products/winter-knit-cardigan/size-guide?color=ivory&utm_source=newsletter 와 WinterKnitCardiganLimitedEditionIvory 같은 긴 단어도 카드 안에서 줄바꿈되어야 합니다.`},{key:`short`,label:`짧은 글`,text:`가볍게 걸치기 좋은 니트 카디건입니다.`}],ee=[1,2,3,4],w=[1.3,1.5,1.8],T=[{label:`CSS`,language:`css`,code:x},{label:`HTML`,language:`xml`,code:`<div class="demo-clamp-card">
  <p class="demo-clamp-title">겨울 한정 니트 카디건</p>
  <p id="product-desc" class="demo-clamp-desc">부드러운 램스울 혼방 원사로 짠 …</p>
  <!-- 말줄임된 글 전체를 볼 수 있는 버튼 -->
  <button type="button" class="demo-clamp-more" aria-controls="product-desc" aria-expanded="false">
    전체 보기
  </button>
</div>`},{label:`Vue`,language:`xml`,code:`<template>
  <div class="demo-clamp-card">
    <p class="demo-clamp-title">{{ title }}</p>
    <p id="product-desc" class="demo-clamp-desc" :class="{ 'is-expanded': expanded }">
      {{ desc }}
    </p>
    <button
      type="button"
      class="demo-clamp-more"
      aria-controls="product-desc"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      {{ expanded ? '접기' : '전체 보기' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ title: String, desc: String })
const expanded = ref(false)
<\/script>`}],E={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-clamp-lines-label`},D=[`aria-checked`,`onClick`],O={for:`demo-clamp-width`},k={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-clamp-lh-label`},A=[`aria-checked`,`onClick`],j={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-clamp-text-label`},M=[`aria-checked`,`onClick`],N={class:`demo-clamp-title`},P=[`id`],F=[`aria-expanded`],I={__name:`LineClampDemo`,setup(s){let l=n(3),f=n(280),x=n(1.8),T=n(C[0].key),I=n(!1),L=h(()=>C.find(e=>e.key===T.value));function R(e){let t={lineHeight:x.value};return e?I.value?t:{...t,"-webkit-line-clamp":l.value}:{...t,maxHeight:`${l.value*1.5}em`}}return(n,s)=>(e(),d(b,{problem:{code:`max-height: ${l.value*1.5}em`,note:`정해진 높이에서 잘릴 뿐 말줄임표가 없고, 줄 높이에 따라 줄 중간이 잘립니다.`},solved:{code:`-webkit-line-clamp: ${l.value}`,note:`정한 줄 수만큼 보이고, 마지막 줄 끝에 …가 붙습니다.`}},{controls:r(()=>[s[3]||=i(`span`,{id:`demo-clamp-lines-label`,class:`demo-label`},`보여 줄 줄 수`,-1),i(`div`,E,[(e(!0),a(m,null,u(t(ee),t=>(e(),a(`button`,{key:t,type:`button`,role:`radio`,"aria-checked":l.value===t,onClick:e=>l.value=t},p(t)+`줄 `,9,D))),128))]),i(`label`,O,[s[2]||=c(`카드 너비 `,-1),i(`strong`,null,p(f.value)+`px`,1)]),v(i(`input`,{id:`demo-clamp-width`,"onUpdate:modelValue":s[0]||=e=>f.value=e,type:`range`,min:`200`,max:`400`,step:`10`},null,512),[[y,f.value,void 0,{number:!0}]]),s[4]||=i(`span`,{id:`demo-clamp-lh-label`,class:`demo-label`},`줄 높이(line-height)`,-1),i(`div`,k,[(e(!0),a(m,null,u(t(w),t=>(e(),a(`button`,{key:t,type:`button`,role:`radio`,"aria-checked":x.value===t,onClick:e=>x.value=t},p(t),9,A))),128))]),s[5]||=i(`span`,{id:`demo-clamp-text-label`,class:`demo-label`},`설명 글`,-1),i(`div`,j,[(e(!0),a(m,null,u(t(C),t=>(e(),a(`button`,{key:t.key,type:`button`,role:`radio`,"aria-checked":T.value===t.key,onClick:e=>T.value=t.key},p(t.label),9,M))),128))])]),default:r(({solved:n})=>[i(`div`,{class:`demo-clamp-card`,style:o({width:f.value+`px`})},[i(`p`,N,p(t(S)),1),i(`p`,{id:n?`demo-clamp-desc-solved`:void 0,class:_([`demo-clamp-desc`,{"is-expanded":n&&I.value}]),style:o(R(n))},p(L.value.text),15,P),n?(e(),a(`button`,{key:0,type:`button`,class:`demo-clamp-more`,"aria-controls":`demo-clamp-desc-solved`,"aria-expanded":I.value,onClick:s[1]||=e=>I.value=!I.value},p(I.value?`접기`:`전체 보기`),9,F)):g(``,!0)],4)]),caption:r(()=>[...s[6]||=[c(` 문제 상태의 높이는 줄 높이 1.5를 가정해 ‘1.5em × 줄 수’로 계산했습니다. 줄 높이를 1.5로 바꾸면 잘리는 위치는 맞지만 말줄임표는 여전히 생기지 않습니다. 좁은 화면에서는 예제 안을 가로로 스크롤할 수 있습니다. `,-1)]]),_:1},8,[`problem`,`solved`]))}},L={class:`doc-body`},R={id:`section-0`},z={id:`section-1`},te={id:`section-2`},B={id:`section-3`},V={id:`section-4`},H={id:`section-5`},U={id:`section-7`},W=`line-clamp`,G=15,K=`두세 줄까지만 보이고 말줄임하기 (line-clamp)`,q=`여러 줄 말줄임`,J=`높이로 글을 자르면 줄 중간이 잘리고 말줄임표가 없습니다. -webkit-line-clamp로 줄 수를 기준으로 자르고 끝에 …를 표시합니다.`,Y=`상품 설명이 줄 중간에서 잘리고 …도 없다면?
높이(max-height)가 아니라 줄 수로 자르고 있는지 확인하세요.
`,X=`텍스트·미디어`,Z=`말줄임`,Q=[`line-clamp`,`말줄임`,`ellipsis`,`overflow`,`word-break`],ne=`기초`,re=`약 10분`,ie=[`text-overflow`,`overflow`],ae=`-webkit-line-clamp`,oe=`published`,$=`2026-11-11`,se=[`flex-ellipsis`],ce=[{title:`CSS Overflow Module Level 4 — line-clamp`,url:`https://www.w3.org/TR/css-overflow-4/#line-clamp`},{title:`MDN — -webkit-line-clamp`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp`},{title:`MDN — overflow-wrap`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap`}],le={__name:`line-clamp`,setup(n,{expose:o}){return o({frontmatter:{id:`line-clamp`,order:15,title:`두세 줄까지만 보이고 말줄임하기 (line-clamp)`,navTitle:`여러 줄 말줄임`,summary:`높이로 글을 자르면 줄 중간이 잘리고 말줄임표가 없습니다. -webkit-line-clamp로 줄 수를 기준으로 자르고 끝에 …를 표시합니다.`,lead:`상품 설명이 줄 중간에서 잘리고 …도 없다면?
높이(max-height)가 아니라 줄 수로 자르고 있는지 확인하세요.
`,group:`텍스트·미디어`,topic:`말줄임`,tags:[`line-clamp`,`말줄임`,`ellipsis`,`overflow`,`word-break`],level:`기초`,duration:`약 10분`,prerequisites:[`text-overflow`,`overflow`],keyProperty:`-webkit-line-clamp`,status:`published`,updated:`2026-11-11`,related:[`flex-ellipsis`],references:[{title:`CSS Overflow Module Level 4 — line-clamp`,url:`https://www.w3.org/TR/css-overflow-4/#line-clamp`},{title:`MDN — -webkit-line-clamp`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp`},{title:`MDN — overflow-wrap`,url:`https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap`}]}}),(n,o)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`RouterLink`),_=l(`DocPractice`);return e(),a(`div`,L,[i(`section`,R,[o[2]||=i(`h2`,null,[i(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),o[3]||=i(`p`,null,[c(`상품 카드의 설명을 세 줄까지만 보여 주려고 합니다. `),i(`code`,null,`text-overflow: ellipsis`),c(`를 넣었더니 한 줄로만 나와서, 대신 `),i(`code`,null,`max-height`),c(`와 `),i(`code`,null,`overflow: hidden`),c(`으로 높이를 잘랐습니다. 그런데 세 번째 줄의 글자 아랫부분이 잘려 보이고, 끝에 말줄임표도 없습니다.`)],-1),o[4]||=i(`p`,null,`시안의 예시 문구와 줄 높이로 맞출 때는 괜찮아 보이다가, 줄 높이가 바뀌거나 실제 데이터가 들어간 뒤 QA에서 이런 형태로 돌아옵니다.`,-1),s(u,{title:`상품 목록: 설명 세 번째 줄이 반쯤 잘려 보임`,env:`전체 브라우저 · 상품 목록 카드(PC·모바일)`,expected:`설명이 세 줄까지 보이고 마지막 줄 끝에 말줄임(…) 표시`,actual:`세 번째 줄 글자 아래가 잘려 보이고, 글이 더 있는지 알 수 없음`},{default:r(()=>[...o[0]||=[i(`ol`,null,[i(`li`,null,`설명이 네 줄 이상인 상품을 등록합니다.`),i(`li`,null,`상품 목록 화면에서 해당 상품 카드를 찾습니다.`),i(`li`,null,`설명 마지막 줄의 글자 모양과 끝부분을 확인합니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...o[1]||=[i(`p`,null,[c(`높이 대신 `),i(`strong`,null,`줄 수로 자르세요.`),c(),i(`code`,null,`display: -webkit-box`),c(`, `),i(`code`,null,`-webkit-box-orient: vertical`),c(`, `),i(`code`,null,`-webkit-line-clamp`),c(`, `),i(`code`,null,`overflow: hidden`),c(`을 함께 씁니다.`)],-1)]]),_:1})]),i(`section`,z,[o[5]||=i(`h2`,null,[i(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),i(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),o[6]||=i(`p`,null,`줄 수와 줄 높이를 바꾸면서, 높이로 자를 때와 줄 수로 자를 때의 차이를 확인해 보세요.`,-1),s(I)]),i(`section`,te,[o[8]||=f(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p><code>text-overflow: ellipsis</code>는 글이 줄 상자 밖으로 <strong>가로로 넘칠 때</strong> 넘친 부분을 …로 표시합니다. 그래서 <code>white-space: nowrap</code>으로 줄바꿈을 막은 한 줄에서만 동작합니다. 여러 줄로 줄바꿈되는 글은 가로로 넘치는 줄이 없으므로 …가 생기지 않습니다.</p><p><code>max-height</code>와 <code>overflow: hidden</code>은 상자를 정한 높이에서 자를 뿐, 줄이 어디서 끝나는지 모릅니다. 높이가 줄 높이(line-height) × 줄 수와 조금만 어긋나도 줄 중간이 잘리고, 정확히 맞춰도 말줄임표는 생기지 않습니다. 줄 높이나 글자 크기가 바뀌면 높이도 다시 계산해야 합니다.</p><p><code>-webkit-line-clamp</code>는 <strong>줄 수를 세어</strong> 정한 줄까지만 상자 높이를 잡고, 글이 더 있으면 마지막 줄 끝에 …를 붙입니다. 명세(CSS Overflow Level 4)에는 접두어 없는 <code>line-clamp</code>도 있지만, 실무에서는 아래 <code>-webkit-</code> 조합을 씁니다.</p>`,4),s(p,null,{default:r(()=>[...o[7]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`줄 방향 상자로 만들고`),c(),i(`code`,null,`display: -webkit-box; -webkit-box-orient: vertical;`)]),i(`li`,null,[i(`strong`,null,`줄 수를 정하고`),c(),i(`code`,null,`-webkit-line-clamp: 3`)]),i(`li`,null,[i(`strong`,null,`나머지 줄을 숨김`),c(),i(`code`,null,`overflow: hidden`)])],-1)]]),_:1})]),i(`section`,B,[o[10]||=i(`h2`,null,[i(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),o[11]||=i(`p`,null,[c(`여러 줄 말줄임이 안 될 때는 `),i(`strong`,null,`무엇으로 자르고 있는지`),c(`와 `),i(`strong`,null,`네 선언이 모두 적용됐는지`),c(`를 확인합니다. 아래 순서로 보면 원인을 바로 좁힐 수 있습니다.`)],-1),s(m,null,{default:r(()=>[...o[9]||=[i(`ol`,null,[i(`li`,null,[i(`strong`,null,`Styles 탭에서 자르는 방식 확인`),c(` 설명 요소(`),i(`code`,null,`.demo-clamp-desc`),c(`)를 선택합니다. `),i(`code`,null,`max-height`),c(`나 `),i(`code`,null,`height`),c(`와 `),i(`code`,null,`overflow: hidden`),c(`으로 자르고 있다면 줄 수가 아니라 높이로 자르는 것입니다. 예제의 문제 상태에서는 맨 위 `),i(`code`,null,`element.style`),c(`에 `),i(`code`,null,`max-height`),c(`가 보입니다.`)]),i(`li`,null,[i(`strong`,null,`Computed 탭에서 display 확인`),i(`code`,null,`display`),c(`가 `),i(`code`,null,`-webkit-box`),c(`인지 봅니다. `),i(`code`,null,`block`),c(`이나 `),i(`code`,null,`flex`),c(`라면 다른 규칙이 덮어쓴 것입니다. 속성 왼쪽 화살표를 펼치면 어느 규칙이 값을 정했는지 보입니다.`)]),i(`li`,null,[i(`strong`,null,`나머지 선언 확인`),c(` 같은 탭에서 `),i(`code`,null,`-webkit-box-orient`),c(`가 `),i(`code`,null,`vertical`),c(`인지, `),i(`code`,null,`overflow`),c(`가 `),i(`code`,null,`hidden`),c(`인지 검색합니다. 기본값은 `),i(`strong`,null,`Show all`),c(`을 켜야 보입니다. 빌드 과정에서 선언이 빠지는 경우도 있으니 배포된 CSS 기준으로 확인하세요.`)]),i(`li`,null,[i(`strong`,null,`높이 계산해 보기`),c(` Computed 탭의 `),i(`code`,null,`height`),c(`가 `),i(`code`,null,`line-height`),c(` × 줄 수와 같은지 봅니다. `),i(`code`,null,`line-height`),c(`가 배수로 보이면 `),i(`code`,null,`font-size`),c(`를 곱해 계산합니다. 맞지 않으면 줄 중간이 잘리거나 다음 줄이 비칩니다.`)]),i(`li`,null,[i(`strong`,null,`padding-bottom 확인`),c(` Computed 탭 위쪽의 상자 모델 그림에서 아래 padding 값을 봅니다. `),i(`code`,null,`overflow: hidden`),c(`은 padding 안쪽까지 보여 주므로, 숨긴 다음 줄의 윗부분이 padding 영역에 비칠 수 있습니다.`)])],-1)]]),_:1})]),i(`section`,V,[o[12]||=i(`h2`,null,[i(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),o[13]||=i(`p`,null,`아래 CSS는 위 실행 예제와 같은 파일을 사용합니다. 여러 줄 말줄임에 필요한 네 줄과, 긴 단어 줄바꿈 설정을 함께 확인하세요.`,-1),s(h,{tabs:t(T)},null,8,[`tabs`])]),i(`section`,H,[o[21]||=i(`h2`,null,[i(`span`,{class:`section-no`},`06`),c(` 비슷한 상황`)],-1),o[22]||=i(`p`,null,`말줄임은 줄 수와 위치에 따라 쓰는 방법이 다릅니다. 증상이 비슷하다면 아래를 함께 확인하세요.`,-1),o[23]||=i(`h3`,null,`한 줄만 말줄임할 때`,-1),i(`p`,null,[o[15]||=c(`한 줄이면 `,-1),o[16]||=i(`code`,null,`text-overflow: ellipsis`,-1),o[17]||=c(`를 씁니다. 줄바꿈을 막는 `,-1),o[18]||=i(`code`,null,`white-space: nowrap`,-1),o[19]||=c(`이 꼭 필요합니다. Flex 안에서 안 된다면 `,-1),s(g,{to:`/pub/css/flex-ellipsis`},{default:r(()=>[...o[14]||=[c(`Flex 안에서 말줄임이 안 될 때`,-1)]]),_:1}),o[20]||=c(`를 참고하세요.`,-1)]),o[24]||=f(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-title</span> {
  <span class="hljs-attribute">overflow</span>: hidden;
  <span class="hljs-attribute">white-space</span>: nowrap;
  <span class="hljs-attribute">text-overflow</span>: ellipsis;
}
</code></pre><h3>화면마다 줄 수가 다를 때</h3><p>줄 수만 미디어 쿼리에서 바꾸면 됩니다. <code>max-height</code>로 자를 때처럼 높이를 다시 계산할 필요가 없습니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-desc</span> {
  <span class="hljs-attribute">display</span>: -webkit-box;
  -webkit-<span class="hljs-attribute">box-orient</span>: vertical;
  -webkit-<span class="hljs-selector-tag">line</span>-clamp: <span class="hljs-number">2</span>;
  <span class="hljs-attribute">overflow</span>: hidden;
}
<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">768px</span>) {
  <span class="hljs-selector-class">.card-desc</span> { -webkit-<span class="hljs-selector-tag">line</span>-clamp: <span class="hljs-number">3</span>; }
}
</code></pre><h3>말줄임된 글 전체 보기</h3><p><code>title</code> 속성은 마우스를 올려야만 보여서 키보드·터치 사용자는 읽기 어렵습니다. 예제처럼 버튼으로 줄 수 제한을 풀거나, <code>details</code>로 전체 글을 따로 제공합니다. 실제로 잘렸을 때만 버튼을 보여 주려면 <code>scrollHeight</code>와 <code>clientHeight</code>를 비교하는 방법을 많이 쓰니, 실제 환경에서 확인하고 적용하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-selector-class">.card-desc</span><span class="hljs-selector-class">.is-expanded</span> {
  -webkit-<span class="hljs-selector-tag">line</span>-clamp: unset; <span class="hljs-comment">/* 줄 수 제한 해제 */</span>
}
</code></pre><h3>안에 여러 문단(p)이 있을 때</h3><p>말줄임 상자 안에 블록 요소가 여러 개 있으면 줄 수 계산과 …의 위치가 예상과 다를 수 있고, 브라우저에 따라 결과가 다를 수 있습니다. 글 하나가 들어 있는 요소에 적용하세요.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- 권장: 글 하나에 적용 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-desc&quot;</span>&gt;</span>설명 글 …<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
</code></pre>`,10)]),o[27]||=f(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>네 선언을 함께 쓰고, display가 덮이지 않게 합니다.</strong> <code>overflow: hidden</code>이 없으면 숨길 줄이 상자 밖으로 그대로 보이고, 반응형 규칙 등에서 <code>display</code>를 <code>flex</code>나 <code>block</code>으로 바꾸면 말줄임이 풀립니다. 이 <code>-webkit-</code> 조합은 주요 최신 브라우저에서 동작하지만, 접두어 없는 <code>line-clamp</code>만 쓰는 경우 지원 여부가 브라우저·버전에 따라 다를 수 있으니 실제 환경에서 확인하세요.</li><li><strong>아래 여백은 padding 대신 margin으로 줍니다.</strong> 말줄임 요소에 <code>padding-bottom</code>을 주면 숨긴 다음 줄의 윗부분이 그 영역에 비칠 수 있습니다. 여백은 바깥 요소나 <code>margin</code>으로 만드세요.</li><li><strong>긴 단어·URL은 overflow-wrap으로 줄바꿈합니다.</strong> 공백 없는 긴 단어는 줄바꿈되지 않아 가로로 잘립니다. <code>overflow-wrap: anywhere</code>는 한 줄에 들어가지 않는 단어만 끊으므로 한글 어절을 지키는 <code>word-break: keep-all</code>과 함께 쓸 수 있습니다. <code>word-break: break-all</code>은 한글 단어도 중간에서 끊고, 같은 속성이라 <code>keep-all</code>과 함께 쓸 수 없습니다.</li><li><strong>전체 내용을 볼 수 있어야 합니다.</strong> 말줄임은 화면 표시만 줄이고 글은 그대로 남아 있습니다. 화면을 보는 사용자도 전체 글을 읽을 수 있게 예제처럼 ‘전체 보기’ 버튼을 제공하고, 버튼에는 <code>aria-expanded</code>로 펼침 상태를 알려 주세요.</li></ul></section>`,1),i(`section`,U,[o[26]||=i(`h2`,null,[i(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(_,null,{default:r(()=>[...o[25]||=[i(`p`,null,`위 예제에서 줄 높이를 1.8로 두고 줄 수를 2줄 → 3줄 → 4줄로 바꿔 본 뒤, ‘긴 영문 단어·URL’을 선택하고 너비를 200px로 줄여 보세요.`,-1),i(`ul`,{class:`checklist`},[i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`문제 상태는 줄 수마다 마지막 줄이 잘리는 정도가 달라지고, 말줄임표가 없다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`해결 상태는 정한 줄 수만큼 보이고, 마지막 줄 끝에 …가 표시된다.`)])]),i(`li`,null,[i(`label`,null,[i(`input`,{type:`checkbox`}),i(`span`,{class:`checklist-text`},`200px에서도 URL이 카드 안에서 줄바꿈되고, ‘전체 보기’를 누르면 전체 글이 보인다.`)])])],-1)]]),_:1})])])}}};export{le as default,re as duration,X as group,W as id,ae as keyProperty,Y as lead,ne as level,q as navTitle,G as order,ie as prerequisites,ce as references,se as related,oe as status,J as summary,Q as tags,K as title,Z as topic,$ as updated};