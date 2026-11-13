import{D as e,G as t,H as n,R as r,V as i,c as a,d as o,g as s,h as c,j as l,k as u,l as d,m as f,pt as p,r as m,u as h,ut as g,w as _,z as v}from"./runtime-core.esm-bundler-ColWfbNJ.js";import{g as y,h as b}from"./index-Dxflp_jg.js";import{t as x}from"./DemoCompare-Bd6h8ThJ.js";var S=[{label:`빈 값으로`,values:{email:``,password:``,agree:!1}},{label:`잘못된 값 넣기`,values:{email:`user@`,password:`1234`,agree:!1}},{label:`올바른 값 넣기`,values:{email:`user@example.com`,password:`abcd1234`,agree:!0}}],C={email:`이메일을 입력해 주세요.`,password:`비밀번호를 입력해 주세요.`,agree:`약관에 동의해야 가입할 수 있습니다.`},w={email:`이메일`,password:`비밀번호`,agree:`약관 동의`};function T(e){let{validity:t}=e;return t.valueMissing?C[e.name]:t.typeMismatch?`이메일 형식이 아닙니다. 예: name@example.com`:e.minLength>0&&e.value!==``&&e.value.length<e.minLength?`비밀번호는 ${e.minLength}자 이상 입력해 주세요. (지금 ${e.value.length}자)`:t.valid?``:e.validationMessage}var E=[{label:`해결 코드`,language:`javascript`,code:`const form = document.querySelector('.signup-form')
const fields = [...form.querySelectorAll('input[name]')]
const summary = form.querySelector('.form-summary')

const REQUIRED = {
  email: '이메일을 입력해 주세요.',
  password: '비밀번호를 입력해 주세요.',
  agree: '약관에 동의해야 가입할 수 있습니다.',
}
const LABELS = { email: '이메일', password: '비밀번호', agree: '약관 동의' }

// 1. 판단은 브라우저(Constraint Validation)에 맡기고, 문구만 직접 정합니다.
function getMessage(field) {
  const { validity } = field
  if (validity.valueMissing) return REQUIRED[field.name]
  if (validity.typeMismatch) return '이메일 형식이 아닙니다. 예: name@example.com'
  // minlength(tooShort)는 사용자가 직접 입력해 바꾼 값에만 검사됩니다.
  // 스크립트로 넣은 값까지 잡으려면 길이를 직접 확인합니다.
  if (field.minLength > 0 && field.value !== '' && field.value.length < field.minLength) {
    return \`비밀번호는 \${field.minLength}자 이상 입력해 주세요. (지금 \${field.value.length}자)\`
  }
  if (!validity.valid) return field.validationMessage // 그 밖의 규칙은 브라우저 기본 문구
  return ''
}

// 2. 문구는 aria-describedby로 연결된 요소에 넣고, 상태는 aria-invalid로 알립니다.
function showError(field, message) {
  document.getElementById(\`\${field.id}-error\`).textContent = message
  if (message) field.setAttribute('aria-invalid', 'true')
  else field.removeAttribute('aria-invalid')
}

function validateField(field) {
  const message = getMessage(field)
  showError(field, message)
  return message === ''
}

// 3. 제출: 전부 검사 → 오류 요약 → 첫 오류 입력창으로 포커스
form.addEventListener('submit', (event) => {
  const invalid = fields.filter((field) => !validateField(field))
  if (invalid.length === 0) {
    summary.textContent = ''
    return // 통과하면 그대로 전송합니다.
  }

  event.preventDefault()
  summary.textContent = \`입력 내용 \${invalid.length}곳을 확인해 주세요: \${invalid.map((field) => LABELS[field.name]).join(', ')}\`
  invalid[0].focus()
})

// 4. 입력창을 떠날 때(blur) 검사합니다. 빈 입력창을 Tab으로 지나가기만 할 때는 검사하지 않습니다.
form.addEventListener('focusout', (event) => {
  const field = event.target
  if (!fields.includes(field) || field.type === 'checkbox') return
  if (field.value !== '' || field.hasAttribute('aria-invalid')) validateField(field)
})

// 5. 입력하는 동안에는 새 오류를 띄우지 않고, 고쳐진 오류만 지웁니다.
function clearIfFixed(event) {
  const field = event.target
  if (!field.hasAttribute('aria-invalid') || getMessage(field) !== '') return
  showError(field, '')
  if (!form.querySelector('[aria-invalid="true"]')) summary.textContent = ''
}

form.addEventListener('input', clearIfFixed)
form.addEventListener('change', clearIfFixed) // 체크박스`},{label:`문제 코드`,language:`javascript`,code:`// fields, getMessage()는 해결 코드와 같습니다.
// 오류를 찾는 것까지는 같지만, 화면에 빨간 글자와 테두리로만 보여 줍니다.
form.addEventListener('submit', (event) => {
  const invalid = fields.filter((field) => {
    const message = getMessage(field)
    const row = field.closest('.form-row')
    const error = row.querySelector('.form-error') // 입력창과 연결되지 않은 글자

    if (error) error.textContent = message // 약관 동의 줄에는 문구가 없고 글자색만 바뀝니다.
    row.classList.toggle('is-error', message !== '') // 색만 바뀜, aria-invalid 없음
    return message !== ''
  })

  if (invalid.length) event.preventDefault()
  // 포커스는 방금 누른 '가입하기' 버튼에 그대로 남습니다.
  // 스크린 리더 사용자는 오류가 났는지, 어디가 틀렸는지 들을 수 없습니다.
})`},{label:`HTML`,language:`xml`,code:`<!-- novalidate: 브라우저 기본 말풍선 대신 직접 만든 문구를 보여 줍니다. 검사 규칙(required 등)은 그대로 동작합니다. -->
<form class="signup-form" novalidate>
  <!-- 오류 요약: 미리 비어 있는 채로 두고 내용만 바꿔야 스크린 리더가 알립니다. -->
  <p class="form-summary" role="alert"></p>

  <div class="form-row">
    <label for="signup-email">이메일</label>
    <input id="signup-email" name="email" type="email" required autocomplete="email"
      aria-describedby="signup-email-error">
    <p id="signup-email-error" class="form-error"></p>
  </div>

  <div class="form-row">
    <label for="signup-password">비밀번호</label>
    <input id="signup-password" name="password" type="password" required minlength="8" autocomplete="new-password"
      aria-describedby="signup-password-hint signup-password-error">
    <p id="signup-password-hint" class="form-hint">8자 이상 입력</p>
    <p id="signup-password-error" class="form-error"></p>
  </div>

  <div class="form-row">
    <input id="signup-agree" name="agree" type="checkbox" required aria-describedby="signup-agree-error">
    <label for="signup-agree">[필수] 이용약관에 동의합니다</label>
    <p id="signup-agree-error" class="form-error"></p>
  </div>

  <button type="submit">가입하기</button>
</form>`},{label:`CSS`,language:`css`,code:`/* 오류 표시는 :invalid가 아니라 aria-invalid에 겁니다.
   :invalid는 입력 전(페이지를 열자마자)에도 빈 필수 입력창에 적용됩니다. */
.signup-form input[aria-invalid='true'] {
  border: 2px solid #d92d20;
}

/* 색만으로 구분하지 않도록 문구 앞에 아이콘을 붙입니다. 문구 자체가 오류 내용을 설명합니다. */
.form-error:not(:empty) {
  display: flex;
  gap: 6px;
  align-items: flex-start;
  margin: 4px 0 0;
  color: #b42318;
  font-size: 13px;
}

.form-error:not(:empty)::before {
  content: '';
  flex: none;
  width: 14px;
  height: 14px;
  margin-top: 2px;
  border-radius: 50%;
  background: #d92d20;
}

.form-summary {
  margin: 0;
  padding: 10px 12px;
  border: 1px solid #d92d20;
  border-radius: 6px;
  background: #fef3f2;
  color: #b42318;
}

/* 비었을 때 display: none으로 숨기지 않습니다. 접근성 트리에 남아 있어야 내용이 바뀔 때 알립니다. */
.form-summary:empty {
  padding: 0;
  border: 0;
}`}],D={class:`sample-buttons`},O=[`onClick`],k={class:`demo-valid-status`},A=[`onSubmit`,`onFocusin`,`onFocusout`,`onInput`,`onChange`],ee={key:0,class:`demo-valid-summary`,role:`alert`},te=[`for`],ne=[`id`,`aria-invalid`,`aria-describedby`],re=[`id`],ie=[`for`],ae=[`id`,`aria-invalid`,`aria-describedby`],oe=[`id`],se=[`id`],ce=[`id`,`aria-invalid`,`aria-describedby`],le=[`for`],ue=[`id`],de={class:`demo-valid-done`},j={class:`demo-valid-reader`},M={key:0,class:`demo-valid-reader-empty`},N={key:1},P={__name:`FormValidationDemo`,setup(s){let l=[`problem`,`solved`],f=e=>e?`solved`:`problem`,C=(e,t)=>`demo-valid-${f(e)}-${t}`,E={},P=()=>({email:``,password:``,agree:``}),F=i({email:``,password:``,agree:!1}),I=i({problem:P(),solved:P()}),L=i({problem:0,solved:0}),R=i({problem:`-`,solved:`-`}),z=i({problem:!1,solved:!1}),B=i({problem:null,solved:null}),V={problem:null,solved:null},H=n(``),U=e=>Object.values(I[f(e)]).filter(Boolean).length,W=e=>(e??``).replace(/\s+/g,` `).trim();function G(e){return{role:e.type===`checkbox`?`체크박스`:e.tagName===`BUTTON`?`버튼`:`입력창`,name:W(e.labels?.[0]?.textContent||e.textContent),description:(e.getAttribute(`aria-describedby`)??``).split(/\s+/).filter(Boolean).map(e=>W(document.getElementById(e)?.textContent)).filter(Boolean).join(` `),invalid:e.getAttribute(`aria-invalid`)===`true`}}let K=(e,t)=>{if(!t?.contains(e))return`예제 밖`;let n=G(e);return`${n.name} ${n.role}`};async function q(e){await _();let t=V[e];B[e]=t&&E[e]?.contains(t)?G(t):null}function J(e,t){let n=f(e);V[n]=t.target,q(n)}function Y(e,t){let n=f(e),r=t.target;E[n]?.contains(t.relatedTarget)||(V[n]=null),e&&r.name&&r.type!==`checkbox`&&(r.value!==``||I.solved[r.name])&&(I.solved[r.name]=T(r)),q(n)}function X(e,t){let n=t.target;e&&n.name&&I.solved[n.name]&&T(n)===``&&(I.solved[n.name]=``,U(!0)===0&&(H.value=``),q(`solved`))}async function Z(e,t){t.preventDefault();let n=f(e),r=E[n],i=[...r.querySelectorAll(`input[name]`)];L[n]+=1;let a=i.filter(e=>(I[n][e.name]=T(e),I[n][e.name]!==``));z[n]=a.length===0,e&&(H.value=a.length?`입력 내용 ${a.length}곳을 확인해 주세요: ${a.map(e=>w[e.name]).join(`, `)}`:``,await _(),a[0]?.focus()),await _(),R[n]=a.length?K(document.activeElement,r):`-`,q(n)}function Q(e){Object.assign(F,e.values),l.forEach(e=>{Object.assign(I[e],P()),L[e]=0,R[e]=`-`,z[e]=!1,q(e)}),H.value=``}return(n,i)=>(e(),d(x,{problem:{code:`빨간 글자 + 테두리만`,note:`제출해도 포커스는 가입하기 버튼에 남고, 입력창으로 가도 오류 문구가 함께 읽히지 않습니다.`},solved:{code:`aria-invalid + aria-describedby + focus()`,note:`제출하면 첫 오류 입력창으로 포커스가 가고, 이름과 함께 오류 문구가 설명으로 연결됩니다.`}},{controls:r(()=>[i[3]||=a(`span`,{class:`demo-label`},`입력값`,-1),a(`div`,D,[(e(!0),o(m,null,u(t(S),t=>(e(),o(`button`,{key:t.label,type:`button`,onClick:e=>Q(t)},p(t.label),9,O))),128))])]),default:r(({solved:t})=>[a(`p`,k,[i[4]||=c(` 제출 `,-1),a(`strong`,null,p(L[f(t)])+`회`,1),i[5]||=c(` · 오류 `,-1),a(`strong`,null,p(U(t))+`개`,1),i[6]||=c(` · 오류 후 포커스 위치 `,-1),a(`strong`,null,p(R[f(t)]),1)]),a(`form`,{ref:e=>E[f(t)]=e,class:`demo-valid-form`,novalidate:``,onSubmit:e=>Z(t,e),onFocusin:e=>J(t,e),onFocusout:e=>Y(t,e),onInput:e=>X(t,e),onChange:e=>X(t,e)},[t?(e(),o(`p`,ee,p(H.value),1)):h(``,!0),a(`div`,{class:g([`demo-valid-row`,{"is-error":!t&&I.problem.email}])},[a(`label`,{for:C(t,`email`)},`이메일`,8,te),v(a(`input`,{id:C(t,`email`),"onUpdate:modelValue":i[0]||=e=>F.email=e,class:`demo-valid-input`,name:`email`,type:`email`,required:``,autocomplete:`off`,"aria-invalid":t&&I.solved.email?`true`:null,"aria-describedby":t?`${C(t,`email`)}-error`:null},null,8,ne),[[y,F.email]]),a(`p`,{id:t?`${C(t,`email`)}-error`:null,class:`demo-valid-error`},p(I[f(t)].email),9,re)],2),a(`div`,{class:g([`demo-valid-row`,{"is-error":!t&&I.problem.password}])},[a(`label`,{for:C(t,`password`)},`비밀번호`,8,ie),v(a(`input`,{id:C(t,`password`),"onUpdate:modelValue":i[1]||=e=>F.password=e,class:`demo-valid-input`,name:`password`,type:`password`,required:``,minlength:`8`,autocomplete:`new-password`,"aria-invalid":t&&I.solved.password?`true`:null,"aria-describedby":t?`${C(t,`password`)}-hint ${C(t,`password`)}-error`:null},null,8,ae),[[y,F.password]]),a(`p`,{id:t?`${C(t,`password`)}-hint`:null,class:`demo-valid-hint`},`8자 이상 입력`,8,oe),a(`p`,{id:t?`${C(t,`password`)}-error`:null,class:`demo-valid-error`},p(I[f(t)].password),9,se)],2),a(`div`,{class:g([`demo-valid-row demo-valid-row-check`,{"is-error":!t&&I.problem.agree}])},[v(a(`input`,{id:C(t,`agree`),"onUpdate:modelValue":i[2]||=e=>F.agree=e,name:`agree`,type:`checkbox`,required:``,"aria-invalid":t&&I.solved.agree?`true`:null,"aria-describedby":t?`${C(t,`agree`)}-error`:null},null,8,ce),[[b,F.agree]]),a(`label`,{for:C(t,`agree`)},`[필수] 이용약관에 동의합니다`,8,le),t?(e(),o(`p`,{key:0,id:`${C(t,`agree`)}-error`,class:`demo-valid-error`},p(I.solved.agree),9,ue)):h(``,!0)],2),i[7]||=a(`button`,{type:`submit`,class:`demo-valid-submit`},`가입하기`,-1),a(`p`,de,p(z[f(t)]?`통과했습니다. (예제라 실제로 전송하지 않습니다.)`:``),1)],40,A),a(`div`,j,[i[12]||=a(`strong`,{class:`demo-valid-reader-title`},`스크린 리더가 읽는 정보(근사)`,-1),B[f(t)]?(e(),o(`dl`,N,[i[8]||=a(`dt`,null,`역할`,-1),a(`dd`,null,p(B[f(t)].role),1),i[9]||=a(`dt`,null,`이름`,-1),a(`dd`,null,p(B[f(t)].name),1),i[10]||=a(`dt`,null,`설명`,-1),a(`dd`,{class:g({"is-none":!B[f(t)].description})},p(B[f(t)].description||`없음`),3),i[11]||=a(`dt`,null,`오류 상태`,-1),a(`dd`,{class:g({"is-none":!B[f(t)].invalid})},p(B[f(t)].invalid?`잘못됨 (aria-invalid="true")`:`알리지 않음`),3)])):(e(),o(`p`,M,`이 폼 안의 입력창이나 버튼에 포커스를 두면 표시됩니다.`))])]),caption:r(()=>[...i[13]||=[c(` ‘잘못된 값 넣기’를 누른 뒤 각 폼의 가입하기를 눌러 보고, Tab으로 입력창을 오가며 아래 ‘스크린 리더가 읽는 정보’를 비교하세요. 이 정보는 실제 접근성 트리가 아니라 label 글자, aria-describedby로 연결된 글자, aria-invalid 값만 모아 보여 주는 근사치입니다. 실제 브라우저는 필수(required) 여부나 형식 오류를 스스로 알려 주기도 하므로, 정확한 결과는 DevTools의 Accessibility 탭이나 실제 스크린 리더로 확인하세요. 클릭해도 버튼에 포커스가 가지 않는 브라우저(Safari 등)에서는 문제 쪽 ‘오류 후 포커스 위치’가 ‘예제 밖’으로 표시될 수 있습니다. 예제는 통과해도 실제로 전송하지 않습니다. `,-1)]]),_:1}))}},F={class:`doc-body`},I={id:`section-0`},L={id:`section-1`},R={id:`section-2`},z={id:`section-3`},B={id:`section-4`},V={id:`section-7`},H=`form-validation`,U=10,W=`입력 오류 메시지가 화면에만 보이고 전달되지 않을 때 (입력 검증)`,G=`입력 검증 메시지`,K=`빨간 글자와 테두리로만 보여 준 입력 오류가 스크린 리더·키보드 사용자에게 전달되지 않는 이유를 이해하고, Constraint Validation으로 판단한 오류를 aria-describedby·aria-invalid로 연결하고 첫 오류 입력창으로 포커스를 옮겨 해결합니다.`,q=`가입하기를 누르면 빨간 글자가 뜨는데, 스크린 리더는 아무 말도 하지 않는다면?
오류 문구는 보이게만 하지 말고, 입력창에 연결하고 그 자리로 포커스를 옮기세요.
`,J=`접근성`,Y=`폼`,X=[`JavaScript`,`폼`,`입력 검증`,`Constraint Validation`,`validity`,`checkValidity`,`novalidate`,`aria-invalid`,`aria-describedby`,`오류 메시지`,`접근성`],Z=`중급`,Q=`약 12분`,fe=[`label`,`addEventListener`,`focus()`],pe=`aria-describedby + aria-invalid`,me=`published`,he=`2026-11-11`,ge=[`modal-focus-scroll`,`tab-keyboard`],$=[{title:`W3C WAI — Form Instructions · User Notification`,url:`https://www.w3.org/WAI/tutorials/forms/notifications/`},{title:`W3C — WCAG 2.2 이해하기 3.3.1 Error Identification`,url:`https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html`},{title:`MDN — 클라이언트 측 폼 유효성 검사`,url:`https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Forms/Form_validation`},{title:`MDN — ValidityState`,url:`https://developer.mozilla.org/en-US/docs/Web/API/ValidityState`},{title:`MDN — aria-invalid`,url:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid`}],_e={__name:`form-validation`,setup(n,{expose:i}){return i({frontmatter:{id:`form-validation`,order:10,title:`입력 오류 메시지가 화면에만 보이고 전달되지 않을 때 (입력 검증)`,navTitle:`입력 검증 메시지`,summary:`빨간 글자와 테두리로만 보여 준 입력 오류가 스크린 리더·키보드 사용자에게 전달되지 않는 이유를 이해하고, Constraint Validation으로 판단한 오류를 aria-describedby·aria-invalid로 연결하고 첫 오류 입력창으로 포커스를 옮겨 해결합니다.`,lead:`가입하기를 누르면 빨간 글자가 뜨는데, 스크린 리더는 아무 말도 하지 않는다면?
오류 문구는 보이게만 하지 말고, 입력창에 연결하고 그 자리로 포커스를 옮기세요.
`,group:`접근성`,topic:`폼`,tags:[`JavaScript`,`폼`,`입력 검증`,`Constraint Validation`,`validity`,`checkValidity`,`novalidate`,`aria-invalid`,`aria-describedby`,`오류 메시지`,`접근성`],level:`중급`,duration:`약 12분`,prerequisites:[`label`,`addEventListener`,`focus()`],keyProperty:`aria-describedby + aria-invalid`,status:`published`,updated:`2026-11-11`,related:[`modal-focus-scroll`,`tab-keyboard`],references:[{title:`W3C WAI — Form Instructions · User Notification`,url:`https://www.w3.org/WAI/tutorials/forms/notifications/`},{title:`W3C — WCAG 2.2 이해하기 3.3.1 Error Identification`,url:`https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html`},{title:`MDN — 클라이언트 측 폼 유효성 검사`,url:`https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Forms/Form_validation`},{title:`MDN — ValidityState`,url:`https://developer.mozilla.org/en-US/docs/Web/API/ValidityState`},{title:`MDN — aria-invalid`,url:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid`}]}}),(n,i)=>{let u=l(`DocIssue`),d=l(`DocTakeaway`),p=l(`DocSteps`),m=l(`DocInspect`),h=l(`CodePanel`),g=l(`DocPractice`);return e(),o(`div`,F,[a(`section`,I,[i[2]||=a(`h2`,null,[a(`span`,{class:`section-no`},`01`),c(` 문제 상황`)],-1),i[3]||=a(`p`,null,[c(`회원가입 화면에서 이메일을 잘못 넣고 ‘가입하기’를 누르면, 입력창 테두리가 빨갛게 바뀌고 아래에 빨간 글자로 오류 문구가 나옵니다. 화면으로 보면 문제가 없지만, `),a(`strong`,null,`스크린 리더로 확인하면 가입하기를 눌러도 아무 안내가 없고, 포커스는 가입하기 버튼에 그대로 있습니다.`),c(` 이메일 입력창으로 돌아가도 화면에 보이는 오류 문구는 읽어 주지 않습니다. 약관 동의는 아예 문구 없이 글자색만 빨간색으로 바뀝니다.`)],-1),i[4]||=a(`p`,null,`디자인 검수에서는 통과하고, 웹 접근성 점검이나 키보드·스크린 리더로 확인하는 QA에서 이런 형태로 돌아옵니다.`,-1),s(u,{title:`회원가입: 입력 오류가 스크린 리더에 전달되지 않음`,env:`전체 브라우저 · 스크린 리더(NVDA, VoiceOver 등) 또는 키보드만 사용`,expected:`가입하기를 누르면 오류가 있다는 안내를 듣고, 틀린 입력창으로 이동해 무엇이 틀렸는지 들을 수 있음`,actual:`오류가 화면에 빨간 글자로만 표시되고, 포커스는 가입하기 버튼에 남음. 입력창으로 이동해도 오류 문구를 읽지 않고, 약관 동의는 색만 바뀜`},{default:r(()=>[...i[0]||=[a(`ol`,null,[a(`li`,null,`회원가입 화면에서 스크린 리더를 켭니다.`),a(`li`,null,[c(`이메일에 `),a(`code`,null,`user@`),c(`, 비밀번호에 `),a(`code`,null,`1234`),c(`를 입력하고 약관 동의는 체크하지 않습니다.`)]),a(`li`,null,`가입하기 버튼을 누른 뒤, Shift+Tab으로 입력창을 거꾸로 이동하며 읽어 줍니다.`)],-1)]]),_:1}),s(d,null,{default:r(()=>[...i[1]||=[a(`p`,null,[c(`오류 판단은 브라우저의 `),a(`strong`,null,`Constraint Validation`),c(`(`),a(`code`,null,`required`),c(`, `),a(`code`,null,`type="email"`),c(`, `),a(`code`,null,`minlength`),c(`)에 맡기고, 문구는 `),a(`strong`,null,[a(`code`,null,`aria-describedby`),c(`로 입력창에 연결`)]),c(`하고 `),a(`strong`,null,[a(`code`,null,`aria-invalid="true"`),c(`로`)]),c(` 상태를 알리세요. 제출할 때는 `),a(`strong`,null,`첫 오류 입력창으로 포커스를 옮깁니다.`)],-1)]]),_:1})]),a(`section`,L,[i[5]||=a(`h2`,null,[a(`span`,{class:`section-no`},`02`),c(` 직접 비교하기`),a(`em`,{class:`live-label`},`● LIVE DEMO`)],-1),i[6]||=a(`p`,null,`‘잘못된 값 넣기’를 누른 뒤 두 폼의 가입하기를 각각 누르고, Tab으로 입력창을 오가며 아래 정보를 비교해 보세요.`,-1),s(P)]),a(`section`,R,[i[8]||=f(`<h2><span class="section-no">03</span> 왜 이런 일이 생길까요?</h2><p>스크린 리더는 화면을 보는 것이 아니라 브라우저가 만든 <strong>접근성 트리</strong>를 읽습니다. 입력창에 포커스가 가면 그 요소의 <strong>이름</strong>(연결된 <code>label</code>), <strong>설명</strong>(<code>aria-describedby</code>로 연결된 글자), <strong>상태</strong>(필수, 오류 등)를 읽어 줍니다. 입력창 아래에 빨간 글자를 넣기만 하면 화면에서는 가까이 있어 보여도 <strong>입력창과 아무 관계가 없는 글자</strong>입니다. 글자색과 테두리색은 접근성 트리에 전달되지 않습니다.</p><p>또 오류 문구를 그려 넣는 것만으로는 포커스가 움직이지 않습니다. 가입하기를 누른 순간 포커스는 버튼에 있으므로, 스크린 리더 사용자는 <strong>무언가 바뀌었는지조차 알 수 없습니다.</strong> 키보드 사용자도 틀린 입력창을 직접 찾아 거꾸로 이동해야 합니다.</p><div class="table-wrap"><table><thead><tr><th>화면에 보이는 것</th><th>스크린 리더에 전달하려면</th><th>예제에서</th></tr></thead><tbody><tr><td>입력창 아래 빨간 오류 문구</td><td>문구에 <code>id</code>를 주고 입력창 <code>aria-describedby</code>에 그 <code>id</code></td><td>이름 다음에 설명으로 읽힘</td></tr><tr><td>빨간 테두리</td><td>입력창에 <code>aria-invalid=&quot;true&quot;</code></td><td>‘잘못됨’ 상태로 읽힘</td></tr><tr><td>화면 위쪽의 오류 요약</td><td>미리 둔 <code>role=&quot;alert&quot;</code> 요소에 내용만 넣기</td><td>제출할 때 한 번 알림</td></tr><tr><td>(없음) 어디부터 고칠지</td><td>첫 오류 입력창에 <code>focus()</code></td><td>오류 후 포커스 위치가 입력창</td></tr></tbody></table></div>`,4),s(p,null,{default:r(()=>[...i[7]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`판단`),c(),a(`code`,null,`form`),c(`에 `),a(`code`,null,`novalidate`),c(`를 주고, 각 입력창의 `),a(`code`,null,`validity`),c(`로 오류 종류를 확인`)]),a(`li`,null,[a(`strong`,null,`문구`),c(` 오류 종류에 맞는 문구를 `),a(`code`,null,`aria-describedby`),c(`로 연결된 요소에 넣기`)]),a(`li`,null,[a(`strong`,null,`상태`),c(` 오류가 있으면 `),a(`code`,null,`aria-invalid="true"`),c(`, 고쳐지면 속성 제거`)]),a(`li`,null,[a(`strong`,null,`포커스`),c(` 제출할 때 오류가 있으면 전송을 막고 첫 오류 입력창으로 `),a(`code`,null,`focus()`)])],-1)]]),_:1}),i[9]||=a(`p`,null,[a(`code`,null,`novalidate`),c(`는 검사를 끄는 속성이 아닙니다. 제출할 때 브라우저가 기본 말풍선을 띄우고 전송을 막는 동작만 생략하고, `),a(`code`,null,`required`),c(`·`),a(`code`,null,`type="email"`),c(` 같은 규칙에 따른 `),a(`code`,null,`validity`),c(` 값은 그대로 계산됩니다. 그래서 판단은 브라우저에 맡기고, 디자인에 맞는 문구와 표시만 직접 만들 수 있습니다. 브라우저 기본 말풍선은 모양과 문구가 브라우저마다 달라 디자인과 맞추기 어렵습니다.`)],-1)]),a(`section`,z,[i[11]||=a(`h2`,null,[a(`span`,{class:`section-no`},`04`),c(` 원인 찾기`)],-1),i[12]||=a(`p`,null,[c(`오류가 난 입력창에서 `),a(`strong`,null,`이름·설명·오류 상태가 실제로 연결되어 있는지`),c(`를 확인합니다. 위 예제의 문제 쪽에서 ‘잘못된 값 넣기’ → 가입하기를 누른 뒤 따라 해 보세요.`)],-1),s(m,null,{default:r(()=>[...i[10]||=[a(`ol`,null,[a(`li`,null,[a(`strong`,null,`Accessibility 탭에서 Name·Description 확인`),c(` Elements 패널에서 오류가 난 `),a(`code`,null,`input`),c(`을 선택하고, 오른쪽의 Accessibility 탭에서 Computed Properties를 펼칩니다. Name에 라벨이 나오는지, Description에 오류 문구가 나오는지 봅니다. 화면에 문구가 보이는데 Description이 비어 있다면 연결되지 않은 것입니다. 오류 상태(invalid) 항목도 함께 확인합니다. 브라우저가 입력 규칙 위반을 스스로 오류 상태로 표시하기도 하지만, 무엇이 틀렸는지는 Description이 있어야 전달됩니다.`)]),a(`li`,null,[a(`strong`,null,`Elements에서 aria-describedby의 id 비교`),a(`code`,null,`aria-describedby`),c(` 값을 복사해 Elements 패널에서 Ctrl+F(macOS는 Cmd+F)로 검색합니다. 같은 `),a(`code`,null,`id`),c(`를 가진 오류 문구 요소가 하나 있어야 합니다. 오타가 있거나, 같은 폼을 두 번 그려 `),a(`code`,null,`id`),c(`가 겹치면 연결이 끊기거나 엉뚱한 문구가 읽힙니다.`)]),a(`li`,null,[a(`strong`,null,[c(`Console에서 `),a(`code`,null,`$0.validity`),c(` 확인`)]),c(` 입력창을 선택한 상태로 Console에 `),a(`code`,null,`$0.validity`),c(`를 입력하면 `),a(`code`,null,`valueMissing`),c(`, `),a(`code`,null,`typeMismatch`),c(`, `),a(`code`,null,`tooShort`),c(` 등 어떤 규칙에 걸렸는지 `),a(`code`,null,`true`),c(`로 보입니다. `),a(`code`,null,`$0.validationMessage`),c(`는 브라우저 기본 문구를 보여 주는데, 문구는 브라우저와 언어 설정에 따라 다릅니다.`)]),a(`li`,null,[a(`strong`,null,[c(`Console에서 `),a(`code`,null,`form.checkValidity()`),c(` 실행`)]),a(`code`,null,`document.querySelector('form').checkValidity()`),c(`가 `),a(`code`,null,`false`),c(`를 돌려주면 폼 안에 규칙을 통과하지 못한 입력창이 있다는 뜻입니다. JavaScript 검사 결과와 이 값이 다르면, HTML 속성(`),a(`code`,null,`required`),c(`, `),a(`code`,null,`type`),c(`)과 스크립트의 판단 기준이 서로 어긋난 것입니다.`)]),a(`li`,null,[a(`strong`,null,`마우스를 놓고 키보드만으로 제출`),c(` Tab으로 입력창을 옮겨 다니며 값을 넣고, 가입하기에서 Enter를 누릅니다. 제출 후 포커스가 어디에 있는지 보고(Console의 Live Expression에 `),a(`code`,null,`document.activeElement`),c(`), 어느 입력창부터 고쳐야 하는지 화면을 보지 않고도 알 수 있는지 확인합니다.`)])],-1)]]),_:1})]),a(`section`,B,[i[13]||=a(`h2`,null,[a(`span`,{class:`section-no`},`05`),c(` 해결 코드`)],-1),i[14]||=a(`p`,null,[c(`판단은 `),a(`code`,null,`validity`),c(`로, 문구는 직접 만들고, 연결은 `),a(`code`,null,`aria-describedby`),c(`로 합니다. 검사 시점은 제출할 때와 입력창을 떠날 때(blur)입니다.`)],-1),s(h,{tabs:t(E)},null,8,[`tabs`])]),i[17]||=f(`<section id="section-5"><h2><span class="section-no">06</span> 비슷한 상황</h2><p>입력 검증은 규칙보다 <strong>알려 주는 시점과 연결</strong>에서 자주 문제가 됩니다. 증상이 비슷하다면 아래를 함께 확인하세요.</p><h3>비밀번호 확인이 일치하지 않을 때</h3><p>두 입력창을 비교하는 규칙은 HTML 속성으로 표현할 수 없습니다. <code>setCustomValidity()</code>로 직접 오류를 넣으면 <code>validity.customError</code>가 <code>true</code>가 되어 <code>checkValidity()</code>와 같은 흐름으로 처리할 수 있습니다. 빈 문자열을 넣어야 오류가 풀립니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">checkConfirm</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> same = confirmInput.<span class="hljs-property">value</span> === passwordInput.<span class="hljs-property">value</span>
  confirmInput.<span class="hljs-title function_">setCustomValidity</span>(same ? <span class="hljs-string">&#39;&#39;</span> : <span class="hljs-string">&#39;비밀번호가 일치하지 않습니다.&#39;</span>)
}

passwordInput.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;input&#39;</span>, checkConfirm)
confirmInput.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;input&#39;</span>, checkConfirm)
</code></pre><h3>서버에서 돌아온 오류(이미 가입된 이메일)</h3><p>서버 응답으로 알게 된 오류도 같은 자리에 같은 방식으로 표시합니다. 입력창 오류 문구에 넣고 <code>aria-invalid</code>를 붙인 뒤 그 입력창으로 포커스를 옮깁니다. 화면 위쪽 토스트로만 띄우면 다시 ‘보이기만 하는 오류’가 됩니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> <span class="hljs-title function_">signup</span>(formData)
<span class="hljs-keyword">if</span> (result.<span class="hljs-property">code</span> === <span class="hljs-string">&#39;EMAIL_EXISTS&#39;</span>) {
  <span class="hljs-title function_">showError</span>(emailInput, <span class="hljs-string">&#39;이미 가입된 이메일입니다. 로그인하거나 다른 이메일을 입력해 주세요.&#39;</span>)
  emailInput.<span class="hljs-title function_">focus</span>()
}
</code></pre><h3>입력할 때마다 검사할 때</h3><p><code>input</code> 이벤트마다 검사하면 이메일을 다 쓰기도 전에 ‘형식이 아닙니다’가 뜨고, 스크린 리더가 바뀐 문구를 계속 읽을 수도 있습니다. 입력 중에는 <strong>고쳐진 오류를 지우기만</strong> 하고, 새 오류는 입력창을 떠날 때나 제출할 때 보여 줍니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-comment">// 입력 중: 고쳐졌으면 지우기만 합니다.</span>
form.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#39;input&#39;</span>, <span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> field = event.<span class="hljs-property">target</span>
  <span class="hljs-keyword">if</span> (field.<span class="hljs-title function_">hasAttribute</span>(<span class="hljs-string">&#39;aria-invalid&#39;</span>) &amp;&amp; <span class="hljs-title function_">getMessage</span>(field) === <span class="hljs-string">&#39;&#39;</span>) <span class="hljs-title function_">showError</span>(field, <span class="hljs-string">&#39;&#39;</span>)
})
</code></pre><h3>체크박스·라디오 묶음</h3><p>‘관심 분야를 하나 이상 선택’처럼 여러 항목에 걸친 오류는 <code>fieldset</code>과 <code>legend</code>로 묶고, 오류 문구를 <code>fieldset</code>에 연결합니다. 첫 오류로 포커스를 보낼 때는 묶음의 첫 항목으로 보냅니다.</p><pre class="doc-code" tabindex="0"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">&quot;interest-error&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">legend</span>&gt;</span>관심 분야 (하나 이상 선택)<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;interest&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;design&quot;</span>&gt;</span> 디자인<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;interest&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;dev&quot;</span>&gt;</span> 개발<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;interest-error&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-error&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span>
</code></pre></section><section id="section-6"><h2><span class="section-no">07</span> 적용 시 주의점</h2><ul><li><strong><code>minlength</code>는 사용자가 직접 입력해 바꾼 값에만 검사됩니다.</strong> HTML 표준에서 <code>tooShort</code>는 사용자의 입력으로 값이 바뀐 경우에만 <code>true</code>가 되므로, 스크립트로 채운 값(임시 저장 불러오기, 테스트용 값)은 짧아도 통과할 수 있습니다. 해결 코드처럼 길이를 직접 한 번 더 확인하면 안전합니다. <code>required</code>와 <code>type=&quot;email&quot;</code>에는 이런 조건이 없습니다.</li><li><strong>오류 스타일은 <code>:invalid</code>보다 <code>[aria-invalid=&#39;true&#39;]</code>에 겁니다.</strong> <code>:invalid</code>는 페이지를 열자마자 빈 필수 입력창에도 적용되어, 아무것도 하지 않았는데 빨간 테두리가 보입니다. 최신 브라우저는 사용자가 입력하거나 제출한 뒤에만 적용되는 <code>:user-invalid</code>도 지원하지만, JavaScript로 관리하는 상태와 맞추려면 속성 선택자가 확실합니다.</li><li><strong>색만으로 구분하지 않습니다.</strong> 빨간색은 색각 이상 사용자에게 구분되지 않을 수 있습니다. 오류 문구(텍스트)는 반드시 넣고, 아이콘·굵은 테두리처럼 색 외의 표시를 함께 씁니다. 문구 색도 배경과 4.5:1 이상 대비가 되는지 확인합니다.</li><li><strong>포커스 이동과 <code>role=&quot;alert&quot;</code> 요약은 겹쳐 읽힐 수 있습니다.</strong> 요약 알림과 포커스를 옮긴 입력창의 정보가 어떤 순서로, 어디까지 읽히는지는 스크린 리더와 브라우저에 따라 다를 수 있으니 실제 환경에서 확인하세요. 요약은 짧게 쓰고, <code>role=&quot;alert&quot;</code> 요소는 처음부터 문서에 둔 채 내용만 바꿉니다. 처음부터 <code>display: none</code>이거나 나중에 통째로 추가한 요소는 알리지 않을 수 있습니다.</li></ul></section>`,2),a(`section`,V,[i[16]||=a(`h2`,null,[a(`span`,{class:`section-no`},`08`),c(` 짧은 실습`)],-1),s(g,null,{default:r(()=>[...i[15]||=[a(`p`,null,`위 예제에서 ‘잘못된 값 넣기’를 누른 뒤 진행합니다.`,-1),a(`ul`,{class:`checklist`},[a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`두 폼의 가입하기를 누르면, 문제 쪽의 ‘오류 후 포커스 위치’는 가입하기 버튼, 해결 쪽은 이메일 입력창이다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`두 폼의 이메일 입력창에 포커스를 두면, 문제 쪽은 설명이 ‘없음’, 해결 쪽은 오류 문구가 설명으로 나오고 오류 상태가 ‘잘못됨’이다.`)])]),a(`li`,null,[a(`label`,null,[a(`input`,{type:`checkbox`}),a(`span`,{class:`checklist-text`},`해결 쪽 비밀번호에 8자 이상을 입력하면 입력하는 동안 오류 문구와 ‘잘못됨’ 상태가 바로 사라진다.`)])])],-1)]]),_:1})])])}}};export{_e as default,Q as duration,J as group,H as id,pe as keyProperty,q as lead,Z as level,G as navTitle,U as order,fe as prerequisites,$ as references,ge as related,me as status,K as summary,X as tags,W as title,Y as topic,he as updated};