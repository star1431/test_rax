import{A as e,C as t,D as n,G as r,H as i,R as a,c as o,d as s,dt as c,g as l,h as u,j as d,k as f,l as p,m,p as h,pt as g,r as _,s as v,u as y,ut as b}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{y as ee}from"./index-Dxflp_jg.js";import{t as x}from"./DemoCompare-Bd6h8ThJ.js";var S={class:`demo-slot-card`},C={class:`demo-slot-head`},w={key:0,class:`demo-slot-icon`,"aria-hidden":`true`},T={class:`demo-slot-title`},E={key:1,class:`demo-slot-badge`},D={class:`demo-slot-body`},O={key:0,class:`demo-slot-actions`},k={__name:`SlotCardProps`,props:{title:{type:String,default:``},desc:{type:String,default:``},badgeText:{type:String,default:``},badgeColor:{type:String,default:`blue`},isNew:{type:Boolean,default:!1},iconName:{type:String,default:``},showButton:{type:Boolean,default:!1},buttonText:{type:String,default:`자세히 보기`},buttonType:{type:String,default:`default`}},setup(e){return(t,r)=>(n(),s(`div`,S,[o(`div`,C,[e.iconName?(n(),s(`span`,w,g(e.iconName),1)):y(``,!0),o(`h3`,T,g(e.title),1),e.isNew?(n(),s(`span`,E,`N`)):y(``,!0),e.badgeText?(n(),s(`span`,{key:2,class:b([`demo-slot-badge`,{"demo-slot-badge-red":e.badgeColor===`red`}])},g(e.badgeText),3)):y(``,!0)]),o(`div`,D,[o(`p`,null,g(e.desc),1)]),e.showButton?(n(),s(`div`,O,[o(`button`,{type:`button`,class:b([`demo-slot-button`,{"demo-slot-button-primary":e.buttonType===`primary`}])},g(e.buttonText),3)])):y(``,!0)]))}},A={class:`demo-slot-card`},j={class:`demo-slot-head`},M={class:`demo-slot-title`},N={class:`demo-slot-body`},P={key:0,class:`demo-slot-actions`},F={__name:`SlotCardSlots`,props:{title:{type:String,default:``},badgeText:{type:String,default:``},badgeTone:{type:String,default:`blue`}},setup(t){return(r,i)=>(n(),s(`div`,A,[o(`div`,j,[e(r.$slots,`header`,{},()=>[o(`h3`,M,g(t.title),1)]),t.badgeText?(n(),s(`span`,{key:0,class:b([`demo-slot-badge`,{"demo-slot-badge-red":t.badgeTone===`red`}])},g(t.badgeText),3)):y(``,!0)]),o(`div`,N,[e(r.$slots,`default`)]),r.$slots.actions?(n(),s(`div`,P,[e(r.$slots,`actions`)])):y(``,!0)]))}},I=`/* Vue 08 실행 예제: 공지 카드 (props만 쓰는 카드 vs 슬롯을 여는 카드) */
.demo-slot-card {
  max-width: 320px;
  padding: 14px 16px;
  border: 1px solid var(--color-border-strong);
  border-radius: 8px;
  background: var(--color-bg);
  color: var(--color-text-body);
  font-size: 14px;
}

.demo-slot-head {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.demo-slot-title {
  margin: 0;
  color: var(--color-heading);
  font-size: 15px;
  font-weight: 700;
}

.demo-slot-badge {
  padding: 1px 7px;
  border-radius: 10px;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 700;
}

.demo-slot-badge-red {
  background: var(--color-problem);
  color: var(--color-bg);
}

.demo-slot-body {
  margin-top: 8px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.demo-slot-body p {
  margin: 0;
}

/* 슬롯으로 넣은 링크·강조 */
.demo-slot-body a {
  color: var(--color-primary);
  text-decoration: underline;
}

.demo-slot-body strong {
  color: var(--color-heading);
}

/* actions 슬롯이 있을 때만 그려지는 버튼 영역 */
.demo-slot-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.demo-slot-button {
  padding: 5px 12px;
  font-size: 13px;
}

.demo-slot-button-primary {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: var(--color-bg);
}

/* 카드 아래: 지금 카드에 쓰인 props·슬롯 개수 */
.demo-slot-api {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  margin: 12px 0 0;
  padding: 0;
  font-size: 12px;
  list-style: none;
}

.demo-slot-api-count {
  margin-right: 2px;
  font-weight: 700;
}

.demo-slot-api code {
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--color-code-inline-bg);
}

/* 다음 시안을 위해 더 늘려야 하는 props */
.demo-slot-api code.is-missing {
  border: 1px dashed var(--color-problem);
  background: transparent;
  color: var(--color-problem);
}
`,L=[{key:`notice`,label:`기본 공지`,problemProps:{title:`11월 정기 점검 안내`,desc:`11월 20일 02:00~04:00에는 서비스를 이용할 수 없습니다.`,badgeText:`공지`,showButton:!0,buttonText:`자세히 보기`},missing:[],solvedApi:{props:[`title`,`badgeText`],slots:[`default`,`#actions`]}},{key:`link`,label:`설명 안에 링크·강조`,problemProps:{title:`개인정보 처리방침 변경`,desc:`<strong>12월 1일</strong>부터 적용됩니다. 변경 내용은 <a href="/privacy">전문 보기</a>에서 확인하세요.`,badgeText:`안내`},missing:[`descLinkText`,`descLinkHref`,`descStrongText`],solvedApi:{props:[`title`,`badgeText`],slots:[`default`]}},{key:`actions`,label:`버튼 두 개 + 배지`,problemProps:{title:`하반기 직무 교육 신청`,desc:`신청은 11월 30일까지 받습니다.`,badgeText:`마감 임박`,badgeColor:`red`,isNew:!0,showButton:!0,buttonText:`신청하기`,buttonType:`primary`},missing:[`subButtonText`,`subButtonType`],solvedApi:{props:[`badgeText`,`badgeTone`],slots:[`#header`,`default`,`#actions`]}}],R=[{label:`NoticeCard.vue (슬롯)`,language:`xml`,code:`<!-- NoticeCard.vue -->
<template>
  <div class="notice-card">
    <div class="notice-card-head">
      <!-- 부모가 #header를 넣지 않으면 기본 내용(제목)을 그립니다. -->
      <slot name="header">
        <h3 class="notice-card-title">{{ title }}</h3>
      </slot>
      <span v-if="badgeText" class="notice-card-badge" :class="\`notice-card-badge-\${badgeTone}\`">
        {{ badgeText }}
      </span>
    </div>

    <!-- 설명: 링크·강조·목록 등 마크업을 부모가 그대로 넣습니다. -->
    <div class="notice-card-body">
      <slot />
    </div>

    <!-- 부모가 #actions를 넣었을 때만 감싸는 요소를 그립니다. -->
    <div v-if="$slots.actions" class="notice-card-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
// 글자 하나·상태 하나처럼 단순한 값만 props로 받습니다.
defineProps({
  title: { type: String, default: '' },
  badgeText: { type: String, default: '' },
  badgeTone: { type: String, default: 'blue' },
})
<\/script>

<style scoped>
/* 슬롯으로 받은 내용은 부모 범위로 컴파일됩니다. 자식에서 꾸밀 때는 :slotted()를 씁니다. */
.notice-card-body :slotted(a) {
  text-decoration: underline;
}
</style>`},{label:`부모에서 사용`,language:`xml`,code:`<template>
  <!-- 1) 기본 공지 -->
  <NoticeCard title="11월 정기 점검 안내" badge-text="공지">
    <p>11월 20일 02:00~04:00에는 서비스를 이용할 수 없습니다.</p>
    <template #actions>
      <a href="/notice/1120" class="btn">자세히 보기</a>
    </template>
  </NoticeCard>

  <!-- 2) 설명 안에 링크·강조: 마크업을 그대로 씁니다. #actions가 없으면 버튼 영역도 없습니다. -->
  <NoticeCard title="개인정보 처리방침 변경" badge-text="안내">
    <p>
      <strong>12월 1일</strong>부터 적용됩니다.
      변경 내용은 <a href="/privacy">전문 보기</a>에서 확인하세요.
    </p>
  </NoticeCard>

  <!-- 3) 버튼 두 개 + 배지: 제목 옆 N 표시는 #header로 바꿉니다. -->
  <NoticeCard badge-text="마감 임박" badge-tone="red">
    <template #header>
      <h3 class="notice-card-title">하반기 직무 교육 신청</h3>
      <span class="notice-card-new">N</span>
    </template>
    <p>신청은 11월 30일까지 받습니다.</p>
    <template #actions>
      <button type="button" class="btn btn-primary" @click="apply">신청하기</button>
      <button type="button" class="btn" @click="later">나중에</button>
    </template>
  </NoticeCard>
</template>

<script setup>
import NoticeCard from './NoticeCard.vue'

function apply() { /* 신청 처리 */ }
function later() { /* 닫기 처리 */ }
<\/script>`},{label:`목록 항목 (scoped slot)`,language:`xml`,code:`<!-- NoticeList.vue: 목록은 자식이 돌리고, 항목 모양은 부모가 정합니다. -->
<template>
  <ul class="notice-list">
    <li v-for="item in items" :key="item.id">
      <!-- 슬롯에 값을 넘깁니다(scoped slot). 부모가 비워 두면 제목만 그립니다. -->
      <slot name="item" :item="item">
        {{ item.title }}
      </slot>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] },
})
<\/script>

<!-- 부모에서 사용 -->
<NoticeList :items="notices">
  <template #item="{ item }">
    <a :href="\`/notice/\${item.id}\`">{{ item.title }}</a>
    <time :datetime="item.date">{{ item.date }}</time>
  </template>
</NoticeList>`},{label:`문제 코드`,language:`xml`,code:`<!-- 문제: 시안이 늘 때마다 props와 v-if가 함께 늘어납니다. -->
<template>
  <div class="notice-card">
    <div class="notice-card-head">
      <span v-if="iconName" class="notice-card-icon" aria-hidden="true">{{ iconName }}</span>
      <h3 class="notice-card-title">{{ title }}</h3>
      <span v-if="isNew" class="notice-card-new">N</span>
      <span v-if="badgeText" :class="\`notice-card-badge-\${badgeColor}\`">{{ badgeText }}</span>
    </div>

    <!-- 문자열 안의 <strong>, <a>는 글자로 그대로 보입니다. -->
    <p class="notice-card-desc">{{ desc }}</p>
    <!-- v-html="desc"로 바꾸면 태그는 그려지지만, 사용자 입력이 섞이면 XSS 위험이 생깁니다. -->

    <div v-if="showButton" class="notice-card-actions">
      <button type="button" :class="\`btn-\${buttonType}\`">{{ buttonText }}</button>
      <!-- 버튼이 두 개인 시안이 오면 subButtonText, subButtonType…를 또 추가해야 합니다. -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  badgeText: String,
  badgeColor: String,
  isNew: Boolean,
  iconName: String,
  showButton: Boolean,
  buttonText: String,
  buttonType: String,
})
<\/script>`},{label:`예제 CSS`,language:`css`,code:I}],z={class:`sample-buttons`,role:`radiogroup`,"aria-labelledby":`demo-slot-variant-label`},B=[`aria-checked`,`onClick`],V={class:`demo-slot-title`},H={key:0},U={key:1},W={key:2,class:`demo-slot-api`,"aria-label":`이 카드에 쓴 props와 슬롯`},te={class:`demo-slot-api-count`},G={key:3,class:`demo-slot-api`,"aria-label":`이 카드에 넘긴 props와 더 필요한 props`},K={class:`demo-slot-api-count`},q={class:`is-missing`},J={__name:`SlotMarkupDemo`,setup(e){let l=i(`notice`),d=v(()=>L.find(e=>e.key===l.value));return(e,i)=>(n(),p(x,{problem:{code:`props만 9개`,note:`글자로만 받으므로 링크·강조가 태그 글자로 보이고, 버튼은 하나까지만 그릴 수 있습니다.`},solved:{code:`<slot> + #header · #actions`,note:`마크업은 부모가 슬롯으로 넣고, props는 제목·배지 같은 단순한 값만 받습니다.`}},{controls:a(()=>[i[1]||=o(`span`,{id:`demo-slot-variant-label`,class:`demo-label`},`시안`,-1),o(`div`,z,[(n(!0),s(_,null,f(r(L),e=>(n(),s(`button`,{key:e.key,type:`button`,role:`radio`,"aria-checked":l.value===e.key,onClick:t=>l.value=e.key},g(e.label),9,B))),128))])]),default:a(({solved:e})=>[e?(n(),p(F,{key:0,title:l.value===`actions`?void 0:d.value.problemProps.title,"badge-text":d.value.problemProps.badgeText,"badge-tone":d.value.problemProps.badgeColor},h({default:a(()=>[l.value===`link`?(n(),s(`p`,H,[i[3]||=o(`strong`,null,`12월 1일`,-1),i[4]||=u(`부터 적용됩니다. 변경 내용은 `,-1),o(`a`,{href:`#`,onClick:i[0]||=ee(()=>{},[`prevent`])},`전문 보기`),i[5]||=u(`에서 확인하세요. `,-1)])):(n(),s(`p`,U,g(d.value.problemProps.desc),1))]),_:2},[l.value===`actions`?{name:`header`,fn:a(()=>[o(`h3`,V,g(d.value.problemProps.title),1),i[2]||=o(`span`,{class:`demo-slot-badge`},`N`,-1)]),key:`0`}:void 0,l.value===`notice`?{name:`actions`,fn:a(()=>[i[6]||=o(`button`,{type:`button`,class:`demo-slot-button`},`자세히 보기`,-1)]),key:`1`}:l.value===`actions`?{name:`actions`,fn:a(()=>[i[7]||=o(`button`,{type:`button`,class:`demo-slot-button demo-slot-button-primary`},`신청하기`,-1),i[8]||=o(`button`,{type:`button`,class:`demo-slot-button`},`나중에`,-1)]),key:`2`}:void 0]),1032,[`title`,`badge-text`,`badge-tone`])):(n(),p(k,c(t({key:1},d.value.problemProps)),null,16)),e?(n(),s(`ul`,W,[o(`li`,te,`props `+g(d.value.solvedApi.props.length)+`개 · 슬롯 `+g(d.value.solvedApi.slots.length)+`개`,1),(n(!0),s(_,null,f(d.value.solvedApi.props,e=>(n(),s(`li`,{key:e},[o(`code`,null,g(e),1)]))),128)),(n(!0),s(_,null,f(d.value.solvedApi.slots,e=>(n(),s(`li`,{key:e},[o(`code`,null,g(e),1)]))),128))])):(n(),s(`ul`,G,[o(`li`,K,`props `+g(r(9))+`개 중`,1),(n(!0),s(_,null,f(Object.keys(d.value.problemProps),e=>(n(),s(`li`,{key:e},[o(`code`,null,g(e),1)]))),128)),(n(!0),s(_,null,f(d.value.missing,e=>(n(),s(`li`,{key:e},[o(`code`,q,`+ `+g(e),1)]))),128))]))]),caption:a(()=>[...i[9]||=[u(` 점선 칩은 이 시안을 props만으로 그리려면 더 만들어야 하는 props입니다. 예제의 링크·버튼은 동작하지 않습니다. `,-1)]]),_:1}))}},Y={class:`doc-body`},X={id:`section-0`},Z={id:`section-1`},Q={id:`section-2`},ne={id:`section-3`},re={id:`section-4`},ie={id:`section-5`},ae={id:`section-7`},oe=`slot-markup`,se=8,ce=`카드 컴포넌트에 props가 계속 늘어날 때 (slot으로 마크업 열어 두기)`,le=`slot으로 마크업 열어 두기`,ue=`시안이 늘 때마다 props와 v-if가 늘어나는 카드 컴포넌트를 기본 슬롯·이름 있는 슬롯(#header,`,de=`카드 시안이 하나 늘 때마다 props를 또 추가하고 있다면?
글자 하나·상태 하나는 props로, 마크업이 들어가는 자리는 slot으로 열어 두세요.
`,fe=`컴포넌트`,pe=`slot`,$=[`Vue`,`slot`,`슬롯`,`이름 있는 슬롯`,`scoped slot`,`$slots`,`useSlots`,`props`,`v-html`,`카드 컴포넌트`],me=`기초`,he=`약 11분`,ge=[`Vue 컴포넌트`,`props`],_e=`<slot name="actions" />`,ve=`published`,ye=`2026-11-13`,be=[`scoped-deep`,`props-mutation`,`define-model`],xe=[{title:`Vue — 슬롯(Slots)`,url:`https://ko.vuejs.org/guide/components/slots.html`},{title:`Vue — 보안(v-html과 HTML 주입)`,url:`https://ko.vuejs.org/guide/best-practices/security.html`},{title:`Vue — SFC CSS 기능(:slotted)`,url:`https://ko.vuejs.org/api/sfc-css-features.html`}],Se={__name:`slot-markup`,setup(e,{expose:t}){return t({frontmatter:{id:`slot-markup`,order:8,title:`카드 컴포넌트에 props가 계속 늘어날 때 (slot으로 마크업 열어 두기)`,navTitle:`slot으로 마크업 열어 두기`,summary:`시안이 늘 때마다 props와 v-if가 늘어나는 카드 컴포넌트를 기본 슬롯·이름 있는 슬롯(#header,`,lead:`카드 시안이 하나 늘 때마다 props를 또 추가하고 있다면?
글자 하나·상태 하나는 props로, 마크업이 들어가는 자리는 slot으로 열어 두세요.
`,group:`컴포넌트`,topic:`slot`,tags:[`Vue`,`slot`,`슬롯`,`이름 있는 슬롯`,`scoped slot`,`$slots`,`useSlots`,`props`,`v-html`,`카드 컴포넌트`],level:`기초`,duration:`약 11분`,prerequisites:[`Vue 컴포넌트`,`props`],keyProperty:`<slot name="actions" />`,status:`published`,updated:`2026-11-13`,related:[`scoped-deep`,`props-mutation`,`define-model`],references:[{title:`Vue — 슬롯(Slots)`,url:`https://ko.vuejs.org/guide/components/slots.html`},{title:`Vue — 보안(v-html과 HTML 주입)`,url:`https://ko.vuejs.org/guide/best-practices/security.html`},{title:`Vue — SFC CSS 기능(:slotted)`,url:`https://ko.vuejs.org/api/sfc-css-features.html`}]}}),(e,t)=>{let i=d(`DocIssue`),c=d(`DocTakeaway`),f=d(`DocSteps`),p=d(`DocInspect`),h=d(`CodePanel`),g=d(`RouterLink`),_=d(`DocPractice`);return n(),s(`div`,Y,[o(`section`,X,[t[2]||=m(`<h2><span class="section-no">01</span> 문제 상황</h2><p>공지 카드 컴포넌트를 만들 때 제목·설명·배지·버튼을 모두 props로 받게 했습니다. 처음 시안은 잘 맞았는데, 시안이 올 때마다 <code>isNew</code>, <code>badgeColor</code>, <code>buttonType</code>처럼 <strong>props와 <code>v-if</code> 분기가 하나씩 늘어</strong> 지금은 9개가 되었습니다.</p><p>이번에 온 시안은 설명 안에 <strong>링크와 굵은 글자</strong>가 있고, 다른 카드는 <strong>버튼이 두 개</strong>입니다. 설명에 HTML 문자열을 넘겼더니 <code>&lt;strong&gt;</code>이 글자 그대로 보이고, 버튼은 하나밖에 그릴 수 없습니다. <code>v-html</code>로 바꾸면 되겠다는 생각이 들지만, 공지 내용이 관리자 입력이라 개발자가 막았습니다.</p><p>카드 하나는 잘 나오기 때문에 처음에는 문제가 없어 보이고, 시안이 추가된 뒤 디자인 검수에서 이런 형태로 돌아옵니다.</p>`,4),l(i,{label:`디자인 검수`,title:`공지 카드: 설명의 링크가 태그 글자로 보이고 두 번째 버튼이 없음`,env:`전체 브라우저 · 공통 NoticeCard를 쓰는 공지 목록`,expected:`12월 1일이 굵게, 전문 보기가 링크로 보이고 신청 카드에는 신청하기·나중에 버튼이 함께 보임`,actual:`설명에 strong, a 태그가 글자로 보임, 신청 카드에는 신청하기 버튼만 보임`},{default:a(()=>[...t[0]||=[o(`ol`,null,[o(`li`,null,`공지 목록에서 ‘개인정보 처리방침 변경’ 카드를 확인합니다.`),o(`li`,null,`설명 문장에 태그 글자가 보이는지 확인합니다.`),o(`li`,null,`‘하반기 직무 교육 신청’ 카드의 버튼 개수를 시안과 비교합니다.`)],-1)]]),_:1}),l(c,null,{default:a(()=>[...t[1]||=[o(`p`,null,[u(`글자 하나·상태 하나는 `),o(`strong`,null,`props로`),u(`, 마크업이 들어가는 자리는 `),o(`strong`,null,[o(`code`,null,`<slot>`),u(`으로`)]),u(` 열어 두세요. 버튼 영역처럼 있을 수도 없을 수도 있는 자리는 이름 있는 슬롯(`),o(`code`,null,`#actions`),u(`)으로 나눕니다.`)],-1)]]),_:1})]),o(`section`,Z,[t[3]||=o(`h2`,null,[o(`span`,{class:`section-no`},`02`),u(` 직접 비교하기`),o(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),t[4]||=o(`p`,null,`시안 세 가지를 같은 데이터로 두 카드에 그렸습니다. 시안을 바꾸면서 카드 아래의 props·슬롯 칩도 함께 보세요.`,-1),l(J)]),o(`section`,Q,[t[6]||=m(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>props는 <strong>값</strong>을 넘기는 통로입니다. 문자열 props를 템플릿의 이중 중괄호(텍스트 보간)로 출력하면 Vue는 그 값을 글자로 넣습니다. 그래서 문자열 안의 <code>&lt;strong&gt;</code>, <code>&lt;a&gt;</code>는 요소가 아니라 화면에 보이는 글자가 됩니다. <code>v-html</code>은 문자열을 HTML로 넣어 주지만, 그 문자열에 사용자가 입력한 내용이 섞이면 악성 스크립트가 들어갈 수 있어(XSS) 조심해서 써야 합니다.</p><p>마크업을 props로 흉내 내려면 <code>descLinkText</code>, <code>descLinkHref</code>처럼 <strong>조각마다 props를 만들고</strong> 카드 안에 그 조합을 <code>v-if</code>로 모두 그려야 합니다. 시안이 늘수록 카드는 모든 화면의 경우의 수를 알아야 하고, 하나를 고치면 다른 화면이 깨지기 쉽습니다.</p><p>슬롯은 방향이 반대입니다. 카드는 <strong>틀(테두리·간격·배치)만</strong> 정하고, 안에 들어갈 마크업은 쓰는 쪽(부모)이 템플릿으로 그대로 넣습니다. 부모의 템플릿이므로 링크·강조·버튼 몇 개든 평소처럼 쓸 수 있습니다.</p>`,4),l(f,null,{default:a(()=>[...t[5]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`본문은 기본 슬롯`),u(),o(`code`,null,`<slot />`)]),o(`li`,null,[o(`strong`,null,`위치가 정해진 자리는 이름 있는 슬롯`),u(),o(`code`,null,`<slot name="actions" />`)]),o(`li`,null,[o(`strong`,null,`비워 두면 기본 내용`),u(),o(`code`,null,`<slot name="header">`),u(` 안에 기본 제목`)]),o(`li`,null,[o(`strong`,null,`없으면 감싸는 요소도 빼기`),u(),o(`code`,null,`v-if="$slots.actions"`)])],-1)]]),_:1}),t[7]||=m(`<div class="table-wrap"><table><thead><tr><th>넘길 것</th><th>쓰는 방법</th><th>예</th></tr></thead><tbody><tr><td>글자 하나, 숫자, 켜고 끄는 상태</td><td>props</td><td><code>title</code>, <code>badgeText</code>, <code>badgeTone</code></td></tr><tr><td>링크·강조·목록이 섞인 내용</td><td>기본 슬롯</td><td>공지 설명</td></tr><tr><td>정해진 위치에 들어가는 마크업</td><td>이름 있는 슬롯</td><td><code>#header</code>, <code>#actions</code></td></tr><tr><td>자식의 데이터로 부모가 모양을 정함</td><td>scoped slot</td><td>목록 항목 <code>#item=&quot;{ item }&quot;</code></td></tr></tbody></table></div>`,1)]),o(`section`,ne,[t[9]||=o(`h2`,null,[o(`span`,{class:`section-no`},`04`),u(` 원인 찾기`)],-1),t[10]||=o(`p`,null,[u(`카드 컴포넌트가 복잡해졌다면 `),o(`strong`,null,`props가 값을 넘기고 있는지, 마크업을 흉내 내고 있는지`),u(`부터 봅니다. 아래 순서로 확인합니다(Vue DevTools 브라우저 확장 필요). Vue DevTools 단계는 내 프로젝트의 개발 서버(`),o(`code`,null,`npm run dev`),u(`)에서 확인하세요. 배포된 이 사이트의 예제에는 연결되지 않습니다.`)],-1),l(p,null,{default:a(()=>[...t[8]||=[o(`ol`,null,[o(`li`,null,[o(`strong`,null,`Components 탭에서 props 개수 확인`),u(` Vue DevTools의 Components 탭에서 카드 컴포넌트(예제의 `),o(`code`,null,`SlotCardProps`),u(`)를 선택합니다. props 목록에 `),o(`code`,null,`showButton`),u(`, `),o(`code`,null,`buttonText`),u(`, `),o(`code`,null,`buttonType`),u(`처럼 한 영역을 위한 props가 묶음으로 있다면 슬롯 후보입니다.`)]),o(`li`,null,[o(`strong`,null,`템플릿의 v-if 분기 세기`),u(` 카드 파일에서 `),o(`code`,null,`v-if`),u(`를 검색해 props 하나를 켜고 끄기 위한 분기가 몇 개인지 셉니다. 분기마다 다른 마크업을 그리고 있다면 그 자리는 부모가 넣게 하는 편이 단순합니다.`)]),o(`li`,null,[o(`strong`,null,`Elements 패널에서 설명 요소 펼치기`),u(` 문제 쪽 ‘설명 안에 링크·강조’ 카드의 설명 `),o(`code`,null,`p`),u(`를 펼쳐 봅니다. `),o(`code`,null,`strong`),u(`, `),o(`code`,null,`a`),u(`가 자식 요소로 없고 한 덩어리의 글자로 들어 있다면 HTML을 문자열 props로 넘긴 것입니다.`)]),o(`li`,null,[o(`strong`,null,`v-html 사용 위치 검색`),u(` 에디터의 전체 검색으로 `),o(`code`,null,`v-html`),u(`을 찾습니다. 관리자·사용자가 입력한 값을 넣는 곳이라면 슬롯이나 정해진 props로 바꿀 수 있는지 개발자와 확인합니다.`)]),o(`li`,null,[o(`strong`,null,`슬롯 내용의 data-v 확인`),o(`code`,null,`<style scoped>`),u(`를 쓰는 프로젝트라면 Elements 패널에서 슬롯으로 넣은 요소의 `),o(`code`,null,`data-v-…`),u(` 속성을 봅니다. 카드가 아니라 `),o(`strong`,null,`부모 컴포넌트의 값`),u(`이 붙어 있습니다. 슬롯 내용 스타일이 안 먹을 때 이 차이가 원인입니다(아래 ‘비슷한 상황’).`)])],-1)]]),_:1})]),o(`section`,re,[t[11]||=o(`h2`,null,[o(`span`,{class:`section-no`},`05`),u(` 해결 코드`)],-1),t[12]||=o(`p`,null,[u(`카드에는 단순한 값 props 3개와 슬롯 3개(`),o(`code`,null,`#header`),u(`, 기본, `),o(`code`,null,`#actions`),u(`)만 남겼습니다. `),o(`strong`,null,`부모에서 사용`),u(` 탭에서 시안 세 가지를 그리는 방법을 확인하세요.`)],-1),l(h,{tabs:r(R)},null,8,[`tabs`]),t[13]||=m(`<ul><li><strong>기본 내용(fallback)</strong>: <code>&lt;slot name=&quot;header&quot;&gt;</code> 안에 쓴 제목은 부모가 <code>#header</code>를 넣지 않을 때만 보입니다. 대부분의 카드는 <code>title</code> props로 충분하고, 제목 옆에 다른 요소가 필요한 카드만 <code>#header</code>를 씁니다.</li><li><strong><code>#</code>은 <code>v-slot:</code>의 줄임</strong>입니다. <code>&lt;template #actions&gt;</code>와 <code>&lt;template v-slot:actions&gt;</code>는 같습니다. 이름 없는 내용은 기본 슬롯(<code>#default</code>)으로 들어갑니다.</li><li><strong>스크립트에서 슬롯 확인</strong>: 템플릿에서는 <code>$slots.actions</code>, <code>&lt;script setup&gt;</code> 안에서는 <code>const slots = useSlots()</code> 후 <code>slots.actions</code>로 확인합니다.</li></ul>`,1)]),o(`section`,ie,[t[25]||=o(`h2`,null,[o(`span`,{class:`section-no`},`06`),u(` 비슷한 상황`)],-1),t[26]||=o(`p`,null,`슬롯을 쓰기 시작하면 아래 경우를 함께 만나게 됩니다.`,-1),t[27]||=o(`h3`,null,`슬롯 내용에 카드 스타일이 안 먹을 때`,-1),o(`p`,null,[t[15]||=u(`슬롯 내용은 `,-1),t[16]||=o(`strong`,null,`부모의 템플릿으로 컴파일`,-1),t[17]||=u(`되어 부모의 `,-1),t[18]||=o(`code`,null,`data-v`,-1),t[19]||=u(`가 붙습니다. 그래서 카드의 scoped 스타일 `,-1),t[20]||=o(`code`,null,`.notice-card-body a`,-1),t[21]||=u(`는 슬롯으로 들어온 링크에 적용되지 않습니다. 카드 쪽에서 꾸밀 때는 `,-1),t[22]||=o(`code`,null,`:slotted()`,-1),t[23]||=u(`를 씁니다. 자세한 원리는 `,-1),l(g,{to:`/pub/vue/scoped-deep`},{default:a(()=>[...t[14]||=[u(`scoped와 :deep()`,-1)]]),_:1}),t[24]||=u(` 문서를 참고하세요.`,-1)]),t[28]||=m(`<pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
<span class="hljs-selector-class">.notice-card-body</span> <span class="hljs-selector-pseudo">:slotted</span>(<span class="hljs-selector-tag">a</span>) {
  <span class="hljs-attribute">text-decoration</span>: underline;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>슬롯이 없을 때 감싸는 요소도 숨기기</h3><p><code>&lt;div class=&quot;actions&quot;&gt;&lt;slot name=&quot;actions&quot; /&gt;&lt;/div&gt;</code>만 쓰면 버튼이 없는 카드에도 빈 <code>div</code>가 남아 여백이 생깁니다. <code>$slots</code>로 슬롯을 넘겼는지 확인합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;$slots.actions&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-card-actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;actions&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h3>목록 항목 모양을 부모가 정할 때</h3><p>목록은 자식이 돌리고 항목 모양만 화면마다 다르다면, 슬롯에 데이터를 넘기는 scoped slot을 씁니다. 부모는 <code>#item=&quot;{ item }&quot;</code>으로 받아 씁니다(‘목록 항목’ 탭).</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">&lt;!-- 자식 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in items&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.id&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:item</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>{{ item.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 부모 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">NoticeList</span> <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;notices&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">item</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">:href</span>=<span class="hljs-string">&quot;\`/notice/\${item.id}\`&quot;</span>&gt;</span>{{ item.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">NoticeList</span>&gt;</span>
</code></pre><h3>React 프로젝트에서는</h3><p>React에는 슬롯 문법이 없고, 태그 사이에 넣은 내용은 <code>children</code> props로, 이름 있는 자리는 JSX를 값으로 받는 props로 같은 역할을 합니다.</p><pre class="doc-code" tabindex="0"><code class="hljs">&lt;<span class="hljs-title class_">NoticeCard</span> title=<span class="hljs-string">&quot;하반기 직무 교육 신청&quot;</span> actions={<span class="language-xml"><span class="hljs-tag">&lt;&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>신청하기<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>나중에<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/&gt;</span></span>}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>신청은 <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>11월 30일<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>까지 받습니다.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
&lt;/<span class="hljs-title class_">NoticeCard</span>&gt;
</code></pre>`,10)]),t[31]||=m(`<section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong>모든 것을 슬롯으로 바꾸지 않습니다.</strong> 제목 글자, 배지 색처럼 정해진 값은 props가 더 명확하고, 디자인 규칙(배지 색 종류 등)을 카드가 지킬 수 있습니다. 마크업이 들어가거나 화면마다 모양이 다른 자리만 슬롯으로 엽니다.</li><li><strong>슬롯을 넘겼어도 내용이 비어 있을 수 있습니다.</strong> <code>&lt;template #actions&gt;</code> 안의 요소가 모두 <code>v-if</code>로 빠지면 <code>$slots.actions</code>는 있지만 그려지는 버튼은 없어 빈 영역이 남습니다. 조건은 <code>&lt;template v-if=&quot;…&quot; #actions&gt;</code>처럼 슬롯 바깥에 둡니다.</li><li><strong>슬롯 안의 마크업도 접근성을 지킵니다.</strong> 동작은 <code>button type=&quot;button&quot;</code>, 이동은 <code>a href</code>로 쓰고, <code>#header</code>에서 제목을 바꿀 때는 화면의 제목 단계(<code>h2</code>·<code>h3</code>)에 맞춥니다. 카드가 정해 둔 기본 제목 단계와 다를 수 있습니다.</li><li><strong>슬롯 이름은 함께 쓰는 사람과 맞춥니다.</strong> 공통 컴포넌트의 슬롯 이름(<code>header</code>, <code>actions</code>, <code>footer</code> 등)과 각 슬롯에 넣을 내용을 컴포넌트 주석이나 가이드에 남겨 두어야 다른 화면에서도 같은 방식으로 씁니다.</li></ul></section>`,1),o(`section`,ae,[t[30]||=o(`h2`,null,[o(`span`,{class:`section-no`},`08`),u(` 짧은 실습`)],-1),l(_,null,{default:a(()=>[...t[29]||=[o(`p`,null,`위 예제에서 시안을 바꿔 가며 두 카드를 비교해 보세요.`,-1),o(`ul`,{class:`checklist`},[o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`‘설명 안에 링크·강조’에서 문제 쪽 카드에는 태그가 글자로 보이고, 해결 쪽에는 굵은 글자와 링크가 보인다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},`‘버튼 두 개 + 배지’에서 해결 쪽에만 ‘나중에’ 버튼이 있고, 문제 쪽 아래에는 더 필요한 props가 점선 칩으로 보인다.`)])]),o(`li`,null,[o(`label`,null,[o(`input`,{type:`checkbox`}),o(`span`,{class:`checklist-text`},[u(`‘설명 안에 링크·강조’의 해결 쪽 카드에는 버튼 영역(`),o(`code`,null,`.demo-slot-actions`),u(`)이 Elements 패널에 없다.`)])])])],-1)]]),_:1})])])}}};export{Se as default,he as duration,fe as group,oe as id,_e as keyProperty,de as lead,me as level,le as navTitle,se as order,ge as prerequisites,xe as references,be as related,ve as status,ue as summary,$ as tags,ce as title,pe as topic,ye as updated};