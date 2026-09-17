const projects=[
{id:'kmr',no:'01',name:'한국경영인증원 통합플랫폼',company:'위드시스템',period:'2021.08 ~ 2023.04',role:'PM / 서비스기획',one:'분리된 업무를 웹 기반 통합플랫폼으로 재설계',tags:['업무시스템','통합플랫폼','레거시 전환'],summary:'분리되어 처리하던 업무를 웹 기반 통합플랫폼으로 재설계하고, 실적 등록과 전표 발행을 하나의 업무 흐름으로 연결했습니다.',background:['프로젝트 중간 인계','일부 화면설계는 있었으나 요구사항·업무 흐름·개발 범위가 충분히 정리되지 않은 상태','PowerBuilder 기반 레거시 업무시스템을 웹 기반 구조로 재설계'],objective:['요구사항·업무 흐름 재정리','화면 구조 재설계','데이터·후속 업무 연결 기준 정의','개발 협의·QA·운영 인계'],roles:['요구사항·업무 흐름 재정리','화면 구조 재설계','데이터·후속 업무 연결 기준 정의','개발 협의·QA·운영 인계'],visual:'compare',cases:[['Before','실적 등록','등록 완료','다른 업무로 이동','별도 전표 발행'],['After','실적 추가/수정','같은 화면에서 전표 전송','결과 확인']],policy:['회수된 금액: 회수금액 노출','동일 전표번호에 여러 회수금액: 합산하여 노출','미수 금액: 채권회수내역 리스트 미노출 / 해당 합계 0'],outcome:['분리된 실적 등록·전표 발행 절차를 하나의 업무 흐름으로 통합','프로젝트 기준 후속 업무와 데이터 연결','회수내역 표시 정책 구체화','구축·오픈 및 실제 운영'],deliverables:['화면설계','업무 프로세스','데이터 표시 정책','QA','운영 매뉴얼']},
{id:'cj',no:'02',name:'CJ프레시웨이 회원 전용 폐쇄몰',company:'위드시스템',period:'2023.01 ~ 2023.07',role:'서비스기획 / PM · 프론트 전체 + 백오피스 커스텀 기획 단독',one:'사용자 주문부터 운영자의 배송·반품까지 연결',tags:['커머스','B2B','다중배송'],summary:'기존 솔루션의 구조를 이해하고 필요한 기능을 선별해, 사용자 주문부터 운영자의 배송·반품까지 이어지는 커머스 구조를 설계했습니다.',background:['퍼스트몰 기반 회원 전용 커머스','사용자 프론트와 운영 백오피스 동시 설계','대량·다중배송의 출고·반품 단위 구체화 필요'],objective:['기본 기능·운영 설정·추가 커스터마이징 범위 구분','프론트와 백오피스 동일 거래 기준 연결','대량·다중배송 주문·출고·반품 기준 구체화'],roles:['요구사항·솔루션 분석','프론트 전체 기획','백오피스 커스텀 기획','주문·배송·반품 정책','이해관계자 조율','QA 및 오픈'],visual:'cj',cases:[['솔루션 활용 범위','기본 기능 활용','운영 설정 활용','추가 커스터마이징'],['배송지별 주문 구조','ORDER','배송지 A / B / C','상품·수량·상태·배송비·출고'],['반품','다중배송: 배송 건 선택 → 상품/수량 확인 → 반품 신청','단일배송: 배송 건 선택 생략 → 상품/수량 확인 → 반품 신청']],policy:['Back Office Scope: 주문/결제 → 배송/클레임 → 정산 → 지급','현재 서비스 규모(2026.09): 회원 약 1.4만 · 입점사 111개 · 상품 약 2만 개'],outcome:['대량·다중배송 주문을 배송지별로 출고·반품할 수 있는 구조 구현 및 서비스 오픈','솔루션 기반 구현 범위 구체화','프론트–백오피스 거래 흐름 연결','일정 내 구축·오픈'],deliverables:['요구사항 정의','프론트 화면설계','백오피스 화면설계','주문·배송 정책','반품 정책','프로세스','QA']},
{id:'daesung',no:'03',name:'대성 CRM',company:'위드시스템',period:'2021.03 ~ 2023.02',role:'서비스기획 단독 · 신규 구축',one:'대리점 주문·조회·AS·반품을 연결한 CRM',tags:['CRM','B2B','권한'],summary:'대리점·영업·본사의 주문과 출고 업무를 CRM 안에서 직접 처리할 수 있도록 업무 구조와 시스템 간 처리 기준을 설계했습니다.',background:['대리점·영업사원·본사·설치기사 등 사용자 유형 다양','CRM·EPICO·WMS 후속 업무 연결 필요','상태에 따라 취소·반품 등 가능한 후속 업무가 달라짐'],objective:['사용자 유형별 권한과 업무 범위 구분','주문·출고 프로세스 연결','App / Web 역할 구분','상태·예외·시스템 간 처리 기준 정의'],roles:['사용자·권한 구조','주문·출고 프로세스','App / Web 역할','상태·예외 정책','시스템 간 업무 연결'],visual:'roles',cases:[['대리점','직접 주문','주문/출고 조회','취소/반품 신청'],['영업사원','담당 대리점 기준 대리 주문','진행 현황 확인'],['본사','주문 진행 확인','취소/반품 후속 처리','운영 관리'],['시스템 흐름','CRM','EPICO','WMS','CRM']],policy:['출고 전','출고 진행','반품 필요','본사 처리'],outcome:['대리점 직접 주문·조회·취소·변경 신청 범위 확대','주요 현장 입력·처리 동선 단순화','사용자 유형별 업무 범위와 권한 명확화','신규 CRM 구축 및 실제 운영'],deliverables:['요구사항','사용자·권한','업무 프로세스','화면설계','상태값','App-Web 구조','QA']},
{id:'us-crm',no:'04',name:'대성 미주 CRM',company:'가비아CNS',period:'2025.05 ~ 2026.06',role:'서비스기획 · 신규 구축',one:'제조번호 중심 고객·제품·서비스 데이터 허브',tags:['CRM','Data Flow','Serial Number'],summary:'고객·제품·설치·서비스 이력을 제조번호 기준으로 연결하고, 현장 App과 관리자 Web의 역할을 구분해 서비스·반품 업무를 시스템화했습니다.',background:['고객·제품·서비스 정보가 담당자별 파일과 업무 방식에 따라 분산','기존 정보를 반복 입력','현장 사용자와 관리자 업무 차이'],objective:['제조번호 기반 데이터 연결','고객·제품·설치·서비스·반품 이력 연결','기존 데이터 조회·재사용','App / Web 역할 분리','권한·상태·승인 정책'],roles:['서비스·반품 업무 프로세스','제조번호 기반 데이터 구조','App / Web 역할 구분','권한·상태·승인 정책','화면설계·개발협의·QA'],visual:'hub',cases:[['설치 등록','Serial Number 입력','Verify','제품/설치정보 조회','등록 화면 반영'],['고객 조회','검색','기존 고객 선택','정보 자동 반영','필요 시 수정'],['App','현장 실행 중심'],['Web','관리·조회·승인 중심']],policy:['반품 접수 → 관리자 승인 → 승인/반려 → 처리 결과 반영'],outcome:['분산 서비스 이력을 제조번호 기반으로 통합 관리','현장 App / 관리자 Web 역할 분리','반품·승인 프로세스 시스템화'],deliverables:['요구사항','업무 프로세스','화면설계','데이터 흐름','권한','상태값','App-Web','QA']},
{id:'kr-crm',no:'05',name:'대성 국내 CRM',company:'가비아CNS',period:'2025.05 ~ 2026.06',role:'서비스기획 · 신규 구축',one:'상담·배정·이관·권한을 연결한 국내 CRM',tags:['CRM','AS','Workflow'],summary:'기사·컨설턴트·CS·관리자 등 여러 업무 주체가 상담·AS·기술지원 업무를 같은 기준으로 이어서 처리할 수 있도록 상태·배정·이관·권한 구조를 설계했습니다.',background:['한 고객 요청이 여러 담당자를 거침','상담 → 배정 → 방문 → 처리 → 기술지원 → 이관 → 반품/결재','현재 상태·다음 처리 주체·권한 명확화 필요'],objective:['여러 담당자가 같은 고객·서비스 건을 넘겨받아도 업무가 끊기지 않는 흐름','역할별 조회·처리 권한과 상태 기준 통일','고객·제품·AS 이력 연결'],roles:['사용자·권한','상담·AS 흐름','상태·이관','기술지원·반품·결재','데이터·Dashboard'],visual:'domestic',cases:[['하나의 서비스 건','상담 접수','담당자 배정','약속/방문','서비스 처리','기술지원/이관','반품/결재'],['상태 기준','기술지원 완료 ≠ 서비스 전체 완료'],['담당자 이관','이전 이력 유지','현재 담당자 변경','동일 서비스 건에 결과 연결'],['조회·처리 권한','기사','컨설턴트','CS·관리자','기안자·결재자']],policy:['데이터 연결: 고객 → 제품 → 설치/출고 → 보증 → AS 이력'],outcome:['상담부터 배정·방문·기술지원·이관·반품·결재까지 상태·처리 주체 기준으로 시스템화','역할별 업무 범위 명확화','상태 기반 후속 처리 구조화','고객·제품·AS 이력 연결','신규 구축 및 오픈'],deliverables:['요구사항','사용자·권한','업무 프로세스','상태값','이관 정책','화면설계','Dashboard 기준','QA']},
{id:'o2o',no:'06',name:'O2O 픽업 주문 서비스',company:'가비아CNS',period:'2026',role:'서비스기획 / PM · 기획 단독',one:'온라인 주문과 매장 운영을 연결한 픽업 서비스',tags:['O2O','Order','Store'],summary:'온라인 주문부터 매장 준비·고객 안내·바코드 수령·픽업 완료까지 고객·쇼핑몰·매장 운영 흐름을 연결했습니다.',background:['온라인 주문만으로 매장 준비·수령 처리 불가','픽업 매장 선택·준비 완료 시점·고객 안내·수령 확인 필요','재고·취소·반품·예외 연결 필요'],objective:['온라인 주문과 매장 준비·픽업 운영을 하나의 상태 흐름으로 연결','고객 안내와 바코드 노출 시점 정의','재고·취소·반품·예외 처리 기준 연결'],roles:['E2E 서비스 흐름','주문·픽업 상태','고객 화면','매장관리 기능','재고·취소·반품·예외'],visual:'swimlane',cases:[['고객','상품 선택','픽업 매장','주문','준비 완료 안내','방문','바코드','수령'],['쇼핑몰','픽업 주문 생성','상태 관리','알림','바코드 노출','완료 반영'],['매장','주문 확인','상품 준비','준비 완료','고객 확인','바코드 확인','픽업 완료']],policy:['바코드는 실제 수령 가능한 상태 이후 노출, 픽업 완료 이후 미노출','주문 취소 → 재고 복구','수령 후 반품 → 재고 반영'],outcome:['온라인 주문부터 매장 수령까지 O2O 서비스 구축·연동 완료','고객–매장 업무 연결','픽업 운영 기준 구체화','테스트 주문으로 전체 상태 흐름 검증'],deliverables:['서비스 정책','사용자 플로우','스윔레인','프론트 화면설계','매장관리 화면','상태','재고','예외','QA']},
{id:'campaign',no:'07',name:'캠페인 분석 CRM',company:'가비아CNS',period:'',role:'서비스기획',one:'분산 데이터를 통합·가공해 당일 확인',tags:['CRM','Data','Dashboard'],summary:'분산된 캠페인 데이터를 CRM에 통합하고 자동 가공되도록 구조를 개선해, 수일 걸리던 데이터 확인 작업을 당일 확인 가능한 흐름으로 단축했습니다.',background:['캠페인 데이터가 여러 곳에 분산','본사 확인 전 추가 가공 필요','팀별 관리 방식 상이'],objective:['CRM 등록 시 자동 가공·집계','본사에서 당일 결과 확인','데이터 처리 기준 표준화'],roles:['기존 데이터 흐름 분석','통합 데이터 구조','자동 가공 기준','대시보드 정보 구조'],visual:'campaign',cases:[['Before','분산 데이터 수집','개별 취합','추가 가공','본사 전달','결과 확인'],['After','CRM 등록','자동 가공·집계','본사 확인'],['Data Flow','Input','Process','Aggregate','Dashboard']],policy:[],outcome:['수일 → 당일','분산 데이터 통합','수작업 가공 축소','본사 확인 흐름 단순화'],deliverables:['AS-IS 분석','데이터 흐름','가공 규칙','대시보드 구조','화면설계','QA']}
];
const other={id:'other',no:'08',name:'Other Projects',one:'대표 프로젝트 밖 경험의 폭',tags:['Archive','Workflow','Policy']};
const esc=s=>String(s||'');
const chips=a=>`<div class="chips">${a.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div>`;
const flow=a=>`<div class="flow">${a.map((x,i)=>`${i?'<span class="flow-arrow">→</span>':''}<span class="flow-box">${esc(x)}</span>`).join('')}</div>`;
function headerSection(n,label,title,body='',classes=''){return `<section class="detail-section ${classes}"><div class="section-cap"><span class="num">${String(n).padStart(2,'0')}</span><span class="label">${label}</span></div><h2>${title}</h2>${body}</section>`}
function home(print=false){return `<div class="page ${print?'':'screen-only'}">
  <section class="hero" id="about">
    <div class="hero-copy"><p class="eyebrow">사람과 서비스, 운영을 연결하는</p><h1>서비스기획자<br><em>이혜인</em>입니다.</h1><p class="lead">사용자 화면부터 관리자 기능, 데이터 흐름, 운영 프로세스까지<br>일의 흐름을 연결하는 서비스를 기획합니다.</p>${chips(['Service Planning','Platform Planning','PM / PO','Product Planning'])}</div>
    <div class="hero-art" role="img" aria-label="노트북 앞에서 서비스를 기획하는 이혜인 캐릭터"></div>
    <p class="hero-note">막막할수록,<br>먼저 그려봅니다.<br>시작하면 다음 질문이 보여요. :)</p>
  </section>
  <section class="identity-row">
    <div class="identity-primary"><div class="identity-cell"><span class="line-icon">人</span><div><b>이혜인</b><span>7년차 서비스기획자</span></div></div><div class="identity-cell"><span class="line-icon">✉</span><div><b>gpdls6875@gmail.com</b><span>Contact</span></div></div></div>
    <div class="identity-contact"><span class="line-icon">↗</span><span>사용자 화면부터 운영 프로세스까지<br><b>일의 흐름을 연결하는 서비스기획자</b></span></div>
  </section>
  <section class="career-row">
    <div class="career-item"><span class="line-icon">▥</span><div><b>현) 가비아CNS　 <span style="display:inline">2024.09 ~ 재직 중 · 2년</span></b><span>서비스사업실 기획팀 · 매니저</span></div></div>
    <div class="career-item"><span class="line-icon">▥</span><div><b>전) 위드시스템　 <span style="display:inline">2019.01 ~ 2024.06 · 5년 6개월</span></b><span>서비스기획팀 · 팀장</span></div></div>
  </section>
  ${archive()}${print?'':skills()+contact()}
</div>`}
function archive(){const meta={kmr:{name:'한국경영인증원 통합플랫폼',desc:'분리된 업무를 웹 기반 통합플랫폼으로 재설계',tags:['업무시스템','통합플랫폼','레거시 전환'],icon:'▤'},cj:{name:'CJ프레시웨이 회원 전용 폐쇄몰',desc:'사용자 주문부터 운영자의 배송·반품까지 연결',tags:['커머스','B2B','다중배송'],icon:'▱'},daesung:{name:'대성 CRM',desc:'대리점 주문·출고·AS 업무를 연결한 CRM',tags:['CRM','B2B','권한'],icon:'▥'},'us-crm':{name:'대성 미주 CRM',desc:'제조번호 중심 고객·제품·서비스 데이터 허브',tags:['CRM','Data Flow','Serial Number'],icon:'◎'},'kr-crm':{name:'대성 국내 CRM',desc:'상담·배정·이관·권한을 연결한 국내 CRM',tags:['CRM','AS','Workflow'],icon:'⌘'},o2o:{name:'O2O 픽업 주문 서비스',desc:'온라인 주문과 매장 운영을 연결한 픽업 서비스',tags:['O2O','Order','Store'],icon:'⌂'},campaign:{name:'캠페인 분석 CRM',desc:'분산 데이터를 통합·가공해 당일 확인 가능한 흐름 구축',tags:['CRM','Data','Dashboard'],icon:'▥'},other:{name:'Other Projects',desc:'대표 프로젝트 밖 다양한 도메인 경험',tags:['Policy','Workflow','IA'],icon:'▤'}};const cards=[...projects,other].map((p,i)=>{const m=meta[p.id]||p;return `<a class="project-card" href="#project/${p.id}"><span class="project-no">${String(i+1).padStart(2,'0')}</span><span class="archive-icon" aria-hidden="true">${m.icon}</span><div class="archive-copy"><h3>${m.name}</h3><p>${m.desc||m.one}</p>${chips(m.tags)}</div><span class="arrow" aria-hidden="true">→</span></a>`}).join('');return `<section class="section archive" id="projects"><div class="section-head"><div><span class="section-kicker">Selected Work</span><h2>PROJECT ARCHIVE</h2></div><p>다양한 산업과 비즈니스 환경에서<br>사용자와 운영을 연결하는 서비스를 기획했습니다.</p></div><div class="project-grid">${cards}</div></section>`}
function skills(){
  const tools=[['P','PowerPoint','화면설계 · 기획서 · 제안서 · 포트폴리오'],['Fi','Figma','와이어프레임 · 화면 흐름 · 프로토타입'],['X','Excel','요구사항 · 정책표 · 데이터 검증 · 운영 자료'],['AI','AI Workflow','리서치 · 정보 구조화 · 문서 초안 · 검토 · 프로토타이핑 보조']];
  const domains=[['Commerce','B2C · B2B'],['CRM','고객관리 · 마케팅'],['O2O','주문 · 매장연동'],['Workflow System','내부 · 행정 · 운영'],['Back Office','관리자 · 운영툴'],['Admin','운영 기능'],['CMS','콘텐츠 관리'],['LMS','학습 운영']];
  const work=[['그려보기','확인 가능한 흐름부터 먼저 시작'],['질문 찾기','빠진 조건과 예외 확인'],['기준 만들기','정책·권한·상태·데이터 기준 정리'],['끝까지 연결하기','개발 협의·QA·오픈까지 같은 기준으로 확인']];
  return `<section class="home-bottom" id="skills"><div class="info-panel"><h2>SKILLS & TOOLS</h2><p class="panel-desc">기획과 자료 정리, 커뮤니케이션에 활용하는 도구입니다.</p><div class="tool-grid">${tools.map(x=>`<div class="tool-card"><span class="tool-mark">${x[0]}</span><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('')}</div><div class="certificate"><b>자격증</b>DAsP 데이터아키텍처 준전문가　|　한국데이터산업진흥원　|　2023.05</div></div><div class="info-panel"><h2>DOMAIN EXPERIENCE</h2><p class="panel-desc">다양한 도메인에서 서비스 기획 경험을 쌓아왔습니다.</p><div class="domain-grid">${domains.map(x=>`<div class="domain-card"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div></div><div class="work-style"><div class="work-style-head"><div><span class="section-kicker">MY WORK STYLE</span><h3>막막할수록, 먼저 그려봅니다.</h3></div><p>시작하면 다음 질문이 보이니까요.</p></div><div class="steps">${work.map((x,i)=>`<div class="step"><small>0${i+1}</small><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div></div></section>`}
function contact(){return `<section class="contact-band" id="contact"><div class="contact-face"></div><h2>더 나은 서비스를 만드는 여정에<br>함께하고 싶습니다.</h2><a class="contact-button" href="mailto:gpdls6875@gmail.com">Contact Me　→</a></section>`}
function projectVisual(p){
  if(p.visual==='hub')return `<div class="hub"><div class="hub-side">${['고객','제품','설치'].map(x=>`<div class="case-card"><b>◇　${x}</b></div>`).join('')}</div><div class="hub-center">▥<br>제조번호<br><small>Serial Number</small></div><div class="hub-side">${['출고정보','서비스 이력','반품'].map(x=>`<div class="case-card"><b>◇　${x}</b></div>`).join('')}</div></div>`;
  if(p.visual==='swimlane')return `<div class="swimlane">${p.cases.map(x=>`<div class="lane-name">${x[0]}</div><div class="lane-flow">${x.slice(1).map((y,i)=>`<span>${i?'→　':''}${y}</span>`).join('')}</div>`).join('')}</div>`;
  if(p.visual==='compare')return `<div class="comparison">${p.cases.map((x,i)=>`<div class="compare-box ${i?'after':''}"><b>${x[0]}</b>${flow(x.slice(1))}</div>`).join('')}</div>`;
  if(p.visual==='campaign')return `<div class="comparison">${p.cases.slice(0,2).map((x,i)=>`<div class="compare-box ${i?'after':''}"><b>${x[0]}</b>${flow(x.slice(1))}<div class="metric">${i?'당일':'수일 소요'}</div></div>`).join('')}</div><div style="margin-top:10px">${flow(p.cases[2].slice(1))}</div>`;
  if(p.visual==='domestic')return `<div class="status-rows"><div class="status-row"><b>하나의 서비스 건</b><div>${p.cases[0].slice(1).map(x=>`<span>${x}</span>`).join('')}</div></div><div class="status-row"><b>담당자 이관</b><div>${p.cases[2].slice(1).map(x=>`<span>${x}</span>`).join('')}</div></div></div><div class="card-grid" style="margin-top:9px">${p.cases.slice(1).filter((_,i)=>i!==1).map(x=>`<div class="case-card"><b>${x[0]}</b><p>${x.slice(1).join(' · ')}</p></div>`).join('')}</div>`;
  if(p.visual==='roles')return `<div class="card-grid">${p.cases.slice(0,3).map(x=>`<div class="case-card"><b>${x[0]}</b><ul class="clean">${x.slice(1).map(y=>`<li>${y}</li>`).join('')}</ul></div>`).join('')}</div><div class="system-flow" style="margin-top:10px">${['CRM','EPICO','WMS','CRM'].map(x=>`<div class="system-node">${x}</div>`).join('')}</div>`;
  return `<div class="card-grid">${p.cases.map(x=>`<div class="case-card"><b>${x[0]}</b><ul class="clean">${x.slice(1).map(y=>`<li>${y}</li>`).join('')}</ul></div>`).join('')}</div>`
}
const kmrIcon=(name)=>{const paths={company:'<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M8 7V4h8v3M8 11h2m4 0h2M8 15h2m4 0h2"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',project:'<path d="M4 5h6l2 2h8v12H4z"/><path d="M8 11h8m-8 4h5"/>',role:'<circle cx="12" cy="8" r="3"/><path d="M5 20c.6-4 2.9-6 7-6s6.4 2 7 6"/>',flow:'<path d="M5 5h6v6H5zM13 13h6v6h-6zM8 11v3h5m3-1V9h-5"/>',structure:'<rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="4" width="7" height="6" rx="1"/><rect x="8.5" y="15" width="7" height="6" rx="1"/><path d="M6.5 10v2h11v-2M12 12v3"/>',data:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',handoff:'<path d="M5 7h10l-2-2m2 2-2 2M19 17H9l2-2m-2 2 2 2"/><path d="M4 4v16m16-16v16"/>',aggregate:'<path d="M6 3h9l4 4v14H6zM15 3v5h5M9 12h7m-7 4h7"/>',hidden:'<path d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5z"/><path d="m4 4 16 16"/>',award:'<circle cx="12" cy="9" r="6"/><path d="m8 14-2 7 6-3 6 3-2-7"/>',screen:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',document:'<path d="M6 3h9l4 4v14H6zM15 3v5h5M9 12h6m-6 4h6"/>',manual:'<path d="M4 5c3-1 5 0 8 2v14c-3-2-5-3-8-2zm16 0c-3-1-5 0-8 2v14c3-2 5-3 8-2z"/>',tools:'<path d="m4 20 7-7m3-3 6-6M15 4l5 5M4 15l5 5"/><circle cx="12" cy="12" r="2"/>'};return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name]||paths.document}</svg>`};
function kmrDetail(print=false){
  const roles=[
    ['flow','요구사항 분석 및 업무 흐름 정리','기존 요구사항과 화면을 검토하고, 실제 업무 기준과 후속 처리 흐름을 다시 정리했습니다.'],
    ['structure','전체 서비스 구조 재설계','업무 목적을 기준으로 IA와 화면 흐름을 재구성하고, 메뉴·화면·프로세스를 연결했습니다.'],
    ['data','데이터·후속 업무 연결 기준 정의','앞 단계에서 입력한 정보가 후속 업무에서 조회·활용될 수 있도록 데이터 반영 기준을 정의했습니다.'],
    ['handoff','개발 협의·QA·운영 인계','개발 협의와 화면 검증, 테스트, 오픈 및 운영 인계까지 프로젝트 전 과정을 이어갔습니다.']
  ];
  const policies=[
    ['data','회수금액 노출 기준','회수가 완료된 금액은 채권회수내역에 노출하도록 정의했습니다.'],
    ['aggregate','동일 전표번호 중복 합산','같은 전표번호에 여러 회수금액이 있는 경우 합산하여 표시하도록 설계했습니다.'],
    ['hidden','미수 건 표시 기준','미수 건은 회수내역 리스트에서는 제외하고, 해당 합계는 0으로 표시하도록 정의했습니다.']
  ];
  const results=[
    ['업무 간 데이터가 연결된 통합 운영 구조 구축','앞 단계 입력 정보가 후속 업무까지 이어지도록 연결 기준을 설계했습니다.'],
    ['실제 운영에 필요한 데이터 처리 기준 정의','전표번호 합산, 미수 건 표시 등 운영에 필요한 기준을 구체화했습니다.'],
    ['구축 완료 후 실제 운영','통합플랫폼 구축·오픈 후 실제 업무시스템으로 운영되었습니다.']
  ];
  const deliverables=[
    ['screen','화면설계서','웹 화면설계서 및 상세 화면 정의'],
    ['document','업무 프로세스 문서','프로세스 매뉴얼 37p'],
    ['manual','상세 이용 매뉴얼','사용자 매뉴얼 199p'],
    ['tools','기타','요구사항 정리·테스트 시나리오 등']
  ];
  const cap=(n,en,ko)=>`<div class="kmr-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const check=a=>`<div class="kmr-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const flow=(items)=>`<div class="kmr-flow">${items.map((x,i)=>`${i?'<span class="kmr-flow-arrow">→</span>':''}<span class="kmr-flow-node">${x}</span>`).join('')}</div>`;
  return `<div class="page detail kmr-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　한국경영인증원 통합플랫폼</div>
    <section class="kmr-hero">
      <div class="kmr-hero-main"><div class="kmr-overline"><b>01</b>${chips(['업무시스템','통합플랫폼','레거시 전환','프로세스 설계'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>한국경영인증원 통합플랫폼</h1><p>분리되어 처리하던 업무를 웹 기반 통합플랫폼으로 재설계하고,<br>실적 등록과 전표 발행을 하나의 업무 흐름으로 연결했습니다.</p></div>
      <div class="kmr-meta">
        ${[['company','회사','위드시스템'],['calendar','기간','2021.08 ~ 2023.04'],['project','프로젝트 성격','PowerBuilder 기반 레거시 업무시스템 재설계'],['role','역할','PM / 서비스기획']].map(x=>`<div class="kmr-meta-row"><span class="kmr-icon">${kmrIcon(x[0])}</span><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('')}
      </div>
      <aside class="kmr-quote"><span>“</span><p>단순한 웹 전환이 아니라,<br>업무 구조와 데이터 흐름을<br>다시 설계하는 프로젝트였습니다.</p></aside>
    </section>
    <div class="kmr-two-col">
      <section class="kmr-section kmr-context">${cap('01','Background','왜 필요했을까요?')}<p>프로젝트를 중간에 인계받았을 당시 일부 화면설계는 존재했지만, 요구사항·업무 흐름·개발 범위가 충분히 정리되지 않은 상태였습니다. PowerBuilder 기반 레거시 업무시스템을 웹으로 전환하면서 단순 화면 이식이 아니라 실제 업무 흐름과 후속 처리 관계를 다시 정리할 필요가 있었습니다.</p>${check(['프로젝트 중간 인계','요구사항·업무 흐름·개발 범위 미정리','PowerBuilder 기반 레거시 업무시스템의 웹 전환'])}</section>
      <section class="kmr-section kmr-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>기존 업무를 그대로 웹으로 옮기는 것이 아니라, 실제 업무 목적을 기준으로 화면과 프로세스를 재정리하고, 앞 단계에서 입력한 정보가 후속 업무에서도 이어지도록 통합 구조를 설계하는 것을 목표로 했습니다.</p>${check(['요구사항·업무 흐름 재정리','화면 구조 재설계','데이터·후속 업무 연결 기준 정의','개발 협의·QA·운영 인계'])}</section>
    </div>
    <section class="kmr-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="kmr-role-grid">${roles.map(x=>`<article><span class="kmr-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="kmr-section kmr-process">${cap('04','Process','어떤 흐름으로 설계했나요?')}<p class="kmr-side-copy">실적 등록부터 전표 발행까지,<br>하나의 업무 흐름에서 처리할 수 있도록 재설계했습니다.</p><div class="kmr-process-grid"><article><div class="kmr-panel-head"><span>기존 구조</span><b>As-Is</b></div><p>실적 등록과 전표 발행이 분리되어 있어, 여러 단계를 거쳐 처리해야 했습니다.</p>${flow(['실적 등록','등록 완료','다른 메뉴로 이동','별도 전표 발행'])}</article><article class="is-tobe"><div class="kmr-panel-head"><span>개선 구조</span><b>To-Be</b></div><p>같은 업무 흐름 안에서 실적 처리와 전표 전송·결과 확인까지 이어지도록 설계했습니다.</p>${flow(['실적 추가·삭제','전표 전송','결과 확인'])}</article></div></section>
    <section class="kmr-section kmr-policy">${cap('05','Data Policy','데이터는 어떻게 처리했나요?')}<p class="kmr-side-copy">실제 운영에 필요한 데이터 표시 기준과<br>조회·연계 기준을 정의했습니다.</p><div class="kmr-policy-grid">${policies.map(x=>`<article><span class="kmr-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="kmr-section kmr-outcome">${cap('06','Outcome','어떤 결과를 만들었나요?')}<div class="kmr-outcome-grid"><article class="kmr-highlight"><span class="kmr-award">${kmrIcon('award')}</span><small>핵심 성과</small><h3>분리되어 있던 실적 등록·전표 발행 절차를 하나의 업무 흐름으로 통합했습니다.</h3><p>업무 목적을 기준으로 화면과 프로세스를 다시 구성하고, 앞 단계의 정보가 후속 업무로 이어질 수 있도록 통합 흐름을 설계했습니다.</p></article><div class="kmr-result-list">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></div></section>
    <section class="kmr-section kmr-deliverables">${cap('07','Deliverables','주요 산출물')}<div class="kmr-deliverable-grid">${deliverables.map(x=>`<article><span class="kmr-card-icon">${kmrIcon(x[0])}</span><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join('')}</div></section>
    ${print?'':`<nav class="kmr-pager"><a href="#home">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 목록으로 돌아가기</a><a href="#project/cj">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function cjDetail(print=false){
  const cap=(n,en,ko)=>`<div class="cj-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const checks=a=>`<div class="cj-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const flow=a=>`<div class="cj-flow">${a.map((x,i)=>`${i?'<span class="cj-flow-arrow">→</span>':''}<span class="cj-flow-node">${x}</span>`).join('')}</div>`;
  const roles=[
    ['project','요구사항 및 솔루션 분석','고객사 요구사항과 퍼스트몰 기본 기능을 비교해 기본 기능·운영 설정·추가 커스터마이징 범위를 구분했습니다.'],
    ['screen','프론트 전체 기획','회원·상품·장바구니·주문·결제·주문조회 등 사용자 커머스 전체 흐름을 설계했습니다.'],
    ['structure','백오피스 커스텀 기획','회원·상품·주문·배송·클레임 등 운영자가 처리하는 기능과 처리 기준을 설계했습니다.'],
    ['handoff','주문·배송·반품 정책 설계','대량·다중배송 주문의 배송지별 출고 단위와 반품 처리 기준을 운영 가능한 정책으로 구체화했습니다.'],
    ['flow','프로젝트 조율 및 검증','고객사·솔루션사·개발팀과 구현 범위를 조율하고 개발 협의·QA·오픈까지 진행했습니다.']
  ];
  const solutions=[
    ['project','기본 기능 활용','퍼스트몰에서 제공하는 표준 기능을 활용했습니다.','회원가입 · 장바구니 · 주문·결제'],
    ['structure','운영 설정 활용','관리자 설정으로 처리 가능한 영역은 별도 개발 없이 설정 기능을 활용했습니다.','배송비 · 카테고리'],
    ['flow','추가 커스터마이징 개발','회원 전용 정책, 외부 연동, 특수 주문·배송 정책 등 고객사에 필요한 영역을 추가 개발 범위로 정의했습니다.','']
  ];
  const results=[
    ['솔루션 기반 구현 범위 구체화','퍼스트몰 기본 기능·운영 설정·추가 개발 영역을 구분해 개발 범위를 정리했습니다.'],
    ['프론트와 백오피스의 흐름 연결','사용자 화면에서 운영자의 배송·반품 처리까지 같은 거래 기준으로 연결했습니다.'],
    ['구축 및 오픈 완료','요구사항 조율·개발 협의·QA를 거쳐 회원 전용 커머스 서비스를 오픈했습니다.']
  ];
  const deliverables=[
    ['document','요구사항 정의','고객사 요구사항과 솔루션 구현 범위 정리'],['screen','프론트 화면설계','회원·상품·주문·결제 등 사용자 화면 정의'],['structure','백오피스 화면설계','주문·배송·클레임 등 운영 화면 정의'],['project','주문·배송·반품 정책','다중배송의 출고·반품 처리 기준 정의'],['flow','프로세스 정의','프론트–백오피스 업무 흐름 정리'],['handoff','QA','정상·예외 케이스 검증 및 오픈 확인']
  ];
  return `<div class="page detail cj-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　CJ프레시웨이 회원 전용 폐쇄몰</div>
    <section class="cj-hero">
      <div class="cj-hero-main"><div class="cj-overline"><b>02</b>${chips(['Commerce','B2B','Firstmall','Multi Delivery','Back Office'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>CJ프레시웨이 회원 전용 폐쇄몰</h1><p>퍼스트몰 솔루션을 기반으로 회원 전용 커머스의 프론트와 백오피스를 함께 기획하고,<br>대량·다중배송 주문을 배송지별로 출고·반품할 수 있는 구조로 구체화했습니다.</p></div>
      <div class="cj-meta">${[['company','회사','위드시스템'],['calendar','기간','2023.01 ~ 2023.07'],['role','역할','서비스기획 / PM','프론트 전체 + 백오피스 커스텀 기획 단독'],['project','프로젝트','회원 전용 커머스 구축'],['structure','형태','퍼스트몰 기반 신규 구축']].map(x=>`<div class="cj-meta-row"><span>${kmrIcon(x[0])}</span><div><b>${x[1]}</b><em>${x[2]}</em>${x[3]?`<small>${x[3]}</small>`:''}</div></div>`).join('')}</div>
      <aside class="cj-scale"><div class="cj-scale-head"><b>Service Scale</b><span>2026.09 기준</span></div>${[['role','회원','약 1.4만 명'],['company','입점사','111개'],['project','상품','약 2만 개']].map(x=>`<div class="cj-stat"><span>${kmrIcon(x[0])}</span><small>${x[1]}</small><b>${x[2]}</b></div>`).join('')}</aside>
    </section>
    <div class="cj-two-col">
      <section class="cj-section cj-context">${cap('01','Background','어떤 프로젝트였나요?')}<p>CJ프레시웨이 회원 전용 커머스를 퍼스트몰 솔루션 기반으로 구축한 프로젝트입니다. 사용자가 상품을 탐색하고 주문·결제하는 프론트뿐 아니라, 상품·주문·배송·클레임을 처리하는 운영 백오피스까지 같은 거래 구조 안에서 함께 설계해야 했습니다.</p><p>특히 대량·다중배송 주문은 하나의 주문 안에서도 배송지별 상품과 출고·반품 단위가 달라 운영 가능한 처리 기준을 구체적으로 정의할 필요가 있었습니다.</p>${checks(['퍼스트몰 기반 회원 전용 커머스','사용자 프론트와 운영 백오피스를 동시에 설계','대량·다중배송 주문의 출고·반품 처리 기준 필요'])}</section>
      <section class="cj-section cj-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>퍼스트몰의 기존 기능을 활용하면서 고객사에 필요한 기능을 선별해 커스터마이징하고, 사용자 주문부터 운영자의 배송·반품까지 프론트와 백오피스가 같은 기준으로 이어지는 커머스 구조를 구축하는 것이 목표였습니다.</p>${checks(['솔루션 기본 기능 / 운영 설정 / 추가 개발 영역 구분','프론트와 백오피스의 거래 흐름 연결','대량·다중배송 주문·출고·반품 기준 구체화','고객사·솔루션사·개발팀 간 구현 범위 조율','QA 및 서비스 오픈'])}</section>
    </div>
    <section class="cj-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="cj-role-grid">${roles.map(x=>`<article><span class="cj-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="cj-section cj-solution">${cap('04','Solution','솔루션을 어떻게 활용했나요?')}<p class="cj-side-copy">퍼스트몰의 구조를 분석해<br>고객사 환경에 맞는 기능을 선별하고 커스터마이징했습니다.</p><div class="cj-solution-grid">${solutions.map(x=>`<article><span class="cj-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p>${x[3]?`<small>${x[3]}</small>`:''}</article>`).join('')}</div></section>
    <section class="cj-section cj-order">${cap('05','Order Structure','대량·다중배송 주문 구조를 어떻게 설계했나요?')}<p class="cj-side-copy">하나의 주문 안에서도 배송지별 각기 다른 상품과<br>출고·반품 단위를 관리할 수 있도록 구조화했습니다.</p><div class="cj-order-grid"><article class="cj-order-total"><span class="cj-card-icon">${kmrIcon('project')}</span><h3>주문 전체</h3><p>전체 상품</p><p>전체 주문 수량</p><p>주문 기본 정보</p></article><div class="cj-addresses">${[['배송지 A','상품 1, 상품 2'],['배송지 B','상품 3'],['배송지 C','상품 4, 상품 5']].map(x=>`<div class="cj-address"><b>${x[0]}</b><span>${x[1]}</span><span>수량</span><span>상태</span><span>배송비</span><em>출고 처리</em></div>`).join('')}</div><aside class="cj-order-note"><span>✓</span><p>한 주문 안에서도 배송지마다 구성 상품과 처리 상태가 다를 수 있어, 주문 전체 정보와 배송지별 처리 정보를 분리해 확인하도록 구성했습니다.</p></aside></div></section>
    <section class="cj-section cj-return">${cap('06','Return','반품 흐름은 어떻게 설계했나요?')}<p class="cj-side-copy">배송지별 출고 단위와 반품 대상 품목을<br>같은 기준으로 연결했습니다.</p><div class="cj-return-grid"><div>${flow(['다중배송 주문','반품할 배송 건 선택','해당 배송의 상품·수량 확인','반품 신청'])}</div><aside><p><span>✓</span>다중배송 주문은 먼저 배송된 배송 건을 특정한 뒤, 해당 상품만 한 번에 불러와 반품을 신청하도록 설계했습니다.</p><p><span>✓</span>단일배송 주문은 배송 건 선택 단계를 생략하고 바로 상품·수량 확인 후 반품을 신청합니다.</p></aside></div></section>
    <section class="cj-section cj-backoffice">${cap('07','Back Office','주문 이후 운영까지 함께 기획했습니다.')}<div class="cj-backoffice-grid"><div class="cj-bo-flow">${[['document','주문/결제'],['handoff','배송/클레임'],['aggregate','정산'],['flow','지급']].map((x,i)=>`${i?'<span>→</span>':''}<article><i>${kmrIcon(x[0])}</i><b>${x[1]}</b></article>`).join('')}</div><aside><span>✓</span><div><p>취소·교환·주문 상태별 정산, 지급요청 등 운영 백오피스 영역까지 함께 기획했습니다.</p><small>후불결제 · 주문/업체별 정산 · 지급요청</small></div></aside></div></section>
    <section class="cj-section cj-outcome">${cap('08','Outcome','어떤 결과를 만들었나요?')}<div class="cj-outcome-grid"><article class="cj-highlight"><span>${kmrIcon('award')}</span><small>핵심 성과</small><h3>대량·다중배송 주문을 배송지별로 출고하고 반품할 수 있는 구조를 구현해 서비스를 오픈했습니다.</h3><p>퍼스트몰 기반으로 프론트와 백오피스를 함께 설계하고, 사용자 주문부터 운영자의 배송·반품까지 같은 거래 기준으로 연결했습니다.</p></article><div class="cj-result-list">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></div></section>
    <section class="cj-section cj-deliverables">${cap('09','Deliverables','주요 산출물')}<div class="cj-deliverable-grid">${deliverables.map(x=>`<article><span class="cj-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    ${print?'':`<nav class="cj-pager"><a href="#project/kmr">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록으로 돌아가기</a><a href="#project/daesung">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function daesungDetail(print=false){
  const cap=(n,en,ko)=>`<div class="ds-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const checks=a=>`<div class="ds-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const roles=[
    ['role','사용자·권한 구조 설계','대리점·영업사원·본사·설치기사별 메뉴와 조회·처리 범위를 정의했습니다.'],
    ['handoff','주문·출고 프로세스 설계','대리점 직접 주문과 영업사원 대리주문, 주문 이후 출고 확인 흐름을 설계했습니다.'],
    ['screen','App / Web 역할 구분','현장 실행과 관리자 운영 특성에 맞춰 App과 Web의 기능 범위를 구분했습니다.'],
    ['flow','상태·예외 정책 정의','주문·출고 상태에 따라 취소·반품 등 가능한 후속 처리 기준을 정의했습니다.'],
    ['structure','시스템 간 업무 연결','CRM·EPICO·WMS의 역할을 구분하고 다음 업무로 이어지는 처리 구간을 정리했습니다.']
  ];
  const users=[
    ['project','대리점','상품·부품 주문을 직접 처리하고 주문·출고를 조회하며 취소·반품을 신청합니다.',['직접 주문','상품·부품 주문','주문 / 출고 조회','취소·반품 신청'],'직접 처리 범위 확대'],
    ['role','영업사원','담당 대리점의 업무를 지원하고 담당 범위의 주문과 출고 진행을 확인합니다.',['담당 대리점 기준 대리 주문','담당 범위 주문 확인','주문·출고 진행현황 확인'],'대리점 업무 지원'],
    ['company','본사','전체 주문 현황을 확인하고 취소·반품 등 후속 처리와 운영 관리를 담당합니다.',['전체 주문 상태 확인','취소·반품 후속 처리','운영 관리'],'전체 운영 및 후속 처리']
  ];
  const systems=[
    ['CRM','주문 등록 / 진행 확인','대리점·영업사원이 주문을 등록하고 진행 상태와 후속 처리 요청을 확인'],
    ['EPICO','주문 접수 / 후속 처리','CRM에서 전달된 주문을 접수하고 후속 업무를 처리'],
    ['WMS','출하 / 배송정보','출하와 배송 관련 정보를 처리하고 배송 상태를 전달'],
    ['CRM','진행 / 배송정보 확인','처리 결과를 다시 확인하고 사용자가 주문·배송 진행을 조회']
  ];
  const statuses=[
    ['calendar','출고 전','출고 이전 상태에서는 취소 가능 여부를 확인하고 후속 처리를 진행'],
    ['handoff','출고 진행','출고·배송 진행 정보를 확인하고 현재 주문 상태를 조회'],
    ['flow','반품 필요','대리점에서 반품을 요청하고 본사 후속 처리로 연결'],
    ['company','본사 처리','반품 대상과 처리 내용을 확인해 검수·승인 등 후속 업무 진행']
  ];
  const results=[
    ['사용자 유형별 업무 범위와 권한 명확화','대리점·영업사원·본사의 조회·처리 범위를 역할 기준으로 구분했습니다.'],
    ['CRM·EPICO·WMS 업무 역할 연결','시스템별 처리 역할과 주문 이후의 업무 연결 구간을 정리했습니다.'],
    ['신규 CRM 구축 및 실제 운영','개발·QA를 거쳐 신규 CRM을 구축하고 실제 업무에 적용했습니다.']
  ];
  const deliverables=[
    ['document','요구사항 정의','업무 요구사항과 구현 범위 정리'],['role','사용자·권한 정의','사용자 유형별 메뉴·조회·처리 범위 정의'],['flow','업무 프로세스','주문·출고 및 후속 처리 흐름 정리'],['screen','화면설계','App / Web 업무 화면 구조 및 상세 화면 정의'],['handoff','상태·후속 처리 정책','상태에 따른 취소·반품 등 처리 기준 정의'],['structure','App / Web 구조','현장과 운영 목적에 따른 기능 범위 구분'],['project','QA','기능·업무 흐름 검증 및 오픈 확인']
  ];
  return `<div class="page detail ds-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　대성 CRM</div>
    <section class="ds-hero">
      <div class="ds-hero-main"><div class="ds-overline"><b>03</b>${chips(['CRM','B2B','Permission','Order / Shipping','App / Web'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>대성 CRM</h1><p>대리점·영업·본사의 주문과 출고 업무를 CRM 안에서 직접 처리할 수 있도록,<br>사용자별 권한과 시스템 간 처리 기준을 설계했습니다.</p></div>
      <div class="ds-hero-side"><div class="ds-meta">${[['company','회사','위드시스템'],['calendar','기간','2021.03 ~ 2023.02'],['role','역할','서비스기획 · 기획 단독'],['project','프로젝트','신규 CRM 구축'],['structure','관련 시스템','CRM · EPICO · WMS']].map(x=>`<div class="ds-meta-row"><span>${kmrIcon(x[0])}</span><div><b>${x[1]}</b><em>${x[2]}</em></div></div>`).join('')}</div><aside class="ds-scope"><b>Project Scope</b><p><span>사용자</span>대리점 · 영업사원 · 본사 · 설치기사</p><p><span>시스템</span>CRM · EPICO · WMS</p></aside></div>
    </section>
    <div class="ds-two-col">
      <section class="ds-section ds-context">${cap('01','Background','왜 필요했을까요?')}<p>대리점·영업사원·본사·설치기사 등 여러 사용자가 주문과 출고 업무에 참여했고, CRM에서 등록된 주문은 EPICO와 WMS의 후속 처리로 이어지는 구조였습니다.</p><p>사용자마다 처리할 수 있는 업무 범위가 달랐고, 주문·출고 상태에 따라 취소·반품 등 가능한 다음 처리도 달라졌기 때문에 먼저 사용자 역할과 시스템별 처리 기준을 정리할 필요가 있었습니다.</p>${checks(['대리점·영업사원·본사·설치기사 등 사용자 유형 다양','CRM → EPICO → WMS 후속 업무 연결 필요','주문·출고 상태에 따라 가능한 후속 업무가 달라짐'])}</section>
      <section class="ds-section ds-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>영업담당자를 거쳐 처리하던 업무 중 대리점이 직접 처리할 수 있는 범위를 CRM으로 확대하고, 사용자별 권한과 주문 이후의 출고·취소·반품 업무가 각 시스템 사이에서 자연스럽게 이어지도록 업무 구조를 설계하는 것이 목표였습니다.</p>${checks(['사용자 유형별 조회·처리 권한 정의','대리점 직접 주문 / 영업사원 대리주문 구분','주문·출고 진행 상태 확인','취소·반품 및 본사 후속 처리 기준 정의','App / Web과 CRM·EPICO·WMS 역할 연결'])}</section>
    </div>
    <section class="ds-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="ds-role-grid">${roles.map(x=>`<article><span class="ds-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="ds-section ds-users">${cap('04','User / Permission','누가 어떤 업무를 처리했나요?')}<p class="ds-side-copy">사용자 유형에 따라<br>직접 처리할 수 있는 업무와 관리 범위를 구분했습니다.</p><div class="ds-user-grid">${users.map(x=>`<article><span class="ds-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p><ul>${x[3].map(y=>`<li>${y}</li>`).join('')}</ul><b>${x[4]}</b></article>`).join('')}</div></section>
    <section class="ds-section ds-system">${cap('05','System Flow','시스템 간 업무는 어떻게 이어졌나요?')}<p class="ds-side-copy">각 시스템의 역할을 유지하면서<br>주문 이후의 처리 결과가 다음 업무로 이어지도록 연결했습니다.</p><div class="ds-system-panel"><div class="ds-system-flow">${systems.map((x,i)=>`${i?'<span class="ds-arrow">→</span>':''}<article><strong>${x[0]}</strong><b>${x[1]}</b><p>${x[2]}</p></article>`).join('')}</div></div></section>
    <section class="ds-section ds-status">${cap('06','Status / Follow-up','상태에 따라 가능한 후속 처리를 구분했습니다.')}<p class="ds-side-copy">주문·출고 진행 상태를 기준으로<br>취소·반품 등 다음 처리 가능 여부를 판단하도록 설계했습니다.</p><div class="ds-status-grid">${statuses.map(x=>`<article><span class="ds-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="ds-section ds-appweb">${cap('07','App / Web','현장과 운영 업무 특성에 맞게 기능을 구분했습니다.')}<div class="ds-appweb-grid"><article><span class="ds-card-icon">${kmrIcon('role')}</span><div><h3>App</h3><p>현장 사용자 업무 중심</p></div></article><article><span class="ds-card-icon">${kmrIcon('screen')}</span><div><h3>Web</h3><p>관리·조회·운영 업무 중심</p></div></article></div></section>
    <section class="ds-section ds-outcome">${cap('08','Outcome','어떤 결과를 만들었나요?')}<div class="ds-outcome-grid"><article class="ds-highlight"><span>${kmrIcon('award')}</span><small>핵심 성과</small><h3>대리점이 직접 처리할 수 있는 주문·조회·취소·변경·반품 업무 범위를 확대했습니다.</h3><p>영업담당자를 거쳐 처리하던 일부 업무를 대리점이 CRM에서 직접 처리할 수 있도록 사용자 권한과 업무 흐름을 재설계했습니다.</p></article><div class="ds-result-list">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></div></section>
    <section class="ds-section ds-deliverables">${cap('09','Deliverables','주요 산출물')}<div class="ds-deliverable-grid">${deliverables.map(x=>`<article><span class="ds-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    ${print?'':`<nav class="ds-pager"><a href="#project/cj">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록으로 돌아가기</a><a href="#project/us-crm">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function usCrmDetail(print=false){
  const cap=(n,en,ko)=>`<div class="us-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const checks=a=>`<div class="us-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const roles=[
    ['flow','서비스·반품 업무 프로세스 기획','서비스 기록과 반품 신청·후속 처리 흐름을 업무 단계에 맞춰 화면과 프로세스로 구체화했습니다.'],
    ['data','제조번호 기반 데이터 연결','Serial Number 조회를 기준으로 제품·설치 정보와 서비스 기록이 이어지도록 구성했습니다.'],
    ['aggregate','데이터 조회·재사용 구조','기존 제품·고객 정보를 조회해 서비스 등록 화면에 다시 활용할 수 있도록 기획했습니다.'],
    ['screen','App / Web 역할 구분','현장 실행 업무와 관리자 운영·승인 업무를 App과 Web의 역할에 맞게 나누었습니다.'],
    ['tools','화면설계·개발 협의·QA','기획 내용을 화면으로 구체화하고 개발 협의와 QA를 통해 구축 결과를 검증했습니다.']
  ];
  const hubLeft=[['고객','서비스 대상 고객 정보'],['제품','제품 및 모델 정보'],['설치','설치 관련 정보']];
  const hubRight=[['출고정보','출고 및 배송 관련 정보'],['서비스 이력','기존 서비스 처리 기록'],['반품','반품 신청 및 후속 처리']];
  const reuse=[
    ['data','제조번호로 제품·설치 정보 조회','Serial Number 입력','Verify','제품 / 설치 정보 조회','등록 화면 자동 반영','필요 시 수정'],
    ['role','기존 고객 정보 검색·재사용','고객 검색','기존 고객 선택','고객 정보 자동 반영','필요 시 수정','서비스 등록']
  ];
  const platforms=[
    ['role','App · 현장 실행 중심','현장에서 서비스와 반품 업무를 빠르게 처리합니다.',['서비스 업무 처리','반품 접수','업무일지','필요 정보 조회']],
    ['screen','Web · 관리자 운영 중심','운영 이력과 승인 업무를 관리합니다.',['회원 관리','서비스 관리','반품 승인','운영 이력 확인','관리자 업무']]
  ];
  const results=[
    ['제조번호 중심 데이터 연결','고객·제품·설치·출고·서비스 정보를 Serial Number를 기준으로 확인할 수 있도록 구성했습니다.'],
    ['기존 정보 조회·재사용','제품·설치·고객 정보를 조회해 서비스 등록 과정에서 다시 활용할 수 있도록 했습니다.'],
    ['App / Web 반품·승인 흐름 시스템화','현장 접수와 관리자 확인·승인 업무를 App과 Web의 역할에 맞게 연결했습니다.']
  ];
  const deliverables=[
    ['document','요구사항 정의','서비스·반품·승인 관련 업무 요구사항 정리'],['flow','서비스·반품 프로세스','서비스 기록과 반품 후속 업무 흐름 정의'],['screen','화면설계','App / Web 서비스 화면 및 상세 interaction 정의'],['data','데이터 흐름','제조번호 기반 제품·고객·서비스 연결 구조 정의'],['structure','App / Web 구조','현장 업무와 관리자 운영·승인 기능 구분'],['tools','QA','조회·등록·반품·승인 흐름 검증']
  ];
  const flowNodes=['App|반품 신청','Web|반품 정보 확인','Decision|승인 / 반려','Result|결과 반영'];
  return `<div class="page detail us-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　대성 미주 CRM</div>
    <section class="us-hero">
      <div class="us-hero-main"><div class="us-overline"><b>04</b>${chips(['CRM','Data Flow','Serial Number','App / Web','Service'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>대성 미주 CRM</h1><p>고객·제품·설치·서비스 이력을 제조번호 기준으로 연결하고, 기존 정보를 서비스 업무에 재사용할 수 있도록 구성했으며,<br>현장 App과 관리자 Web의 역할을 구분해 서비스·반품 업무를 시스템화했습니다.</p></div>
      <div class="us-hero-side"><div class="us-meta">${[['company','회사','가비아CNS'],['calendar','기간','2025.05 ~ 2026.06'],['role','역할','서비스기획'],['project','프로젝트','미주 법인용 신규 CRM 구축'],['structure','범위','서비스 · 반품 · 승인 · 데이터 연결']].map(x=>`<div class="us-meta-row"><span>${kmrIcon(x[0])}</span><div><b>${x[1]}</b><em>${x[2]}</em></div></div>`).join('')}</div><aside class="us-focus"><b>Project Focus</b><div>${['Serial Number','Customer','Product','Installation','Service','Return'].map(x=>`<span>${x}</span>`).join('')}</div></aside></div>
    </section>
    <div class="us-two-col">
      <section class="us-section us-context">${cap('01','Background','왜 필요했을까요?')}<p>기존에는 고객·제품·서비스 관련 정보가 담당자별 파일과 업무 방식에 따라 분산되어 있어, 이전 처리 이력을 다시 확인하거나 후속 서비스 업무에 활용하기 어려웠습니다.</p><p>제품과 고객 정보를 서비스 업무에 다시 입력해야 하는 경우도 있었고, 현장 사용자와 관리자 업무 특성도 달라 하나의 화면 구조로 모든 업무를 처리하기 어려웠습니다.</p>${checks(['고객·제품·서비스 정보가 담당자별 방식으로 분산','기존 정보를 서비스 업무에 반복 입력','이전 서비스 이력 연결 및 조회 어려움','현장 사용자와 관리자 업무 목적 차이'])}</section>
      <section class="us-section us-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>제조번호를 중심으로 고객·제품·설치·서비스 정보를 연결하고, 기존 데이터를 조회해 신규 서비스 업무에 재사용할 수 있도록 하며, 현장 App과 관리자 Web이 같은 데이터를 활용하면서도 각자의 역할에 맞게 처리할 수 있는 CRM 구조를 만드는 것이 목표였습니다.</p>${checks(['제조번호 중심 데이터 연결','고객·제품·설치·서비스 이력 연결','기존 제품·고객 데이터 조회 및 재사용','App / Web 역할 분리','서비스·반품·승인 후속 처리 연결'])}</section>
    </div>
    <section class="us-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="us-role-grid">${roles.map(x=>`<article><span class="us-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="us-section us-hub">${cap('04','Data Hub','제조번호를 중심으로 고객·제품·서비스 정보를 연결했습니다.')}<p class="us-side-copy">서비스 처리에 필요한 정보를<br>Serial Number를 기준으로 확인하도록 구성했습니다.</p><div class="us-hub-grid"><div class="us-hub-side">${hubLeft.map(x=>`<article><b>${x[0]}</b><p>${x[1]}</p></article>`).join('')}</div><div class="us-hub-core"><span>${kmrIcon('data')}</span><b>Serial Number</b><small>제조번호</small></div><div class="us-hub-side">${hubRight.map(x=>`<article><b>${x[0]}</b><p>${x[1]}</p></article>`).join('')}</div></div></section>
    <section class="us-section">${cap('05','Data Reuse','기존 제품·고객 정보를 조회해 다시 입력하지 않도록 구성했습니다.')}<p class="us-side-copy">기존 데이터를 찾고 불러와<br>서비스 등록 화면에서 재사용하도록 설계했습니다.</p><div class="us-reuse-grid">${reuse.map(x=>`<article><span class="us-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><div class="us-mini-flow">${x.slice(2).map((y,i)=>`${i?'<i>→</i>':''}<span>${y}</span>`).join('')}</div></article>`).join('')}</div></section>
    <section class="us-section">${cap('06','App / Web','현장과 관리자 업무 특성에 맞게 기능을 구분했습니다.')}<p class="us-side-copy">같은 데이터를 사용하되,<br>실행 업무와 관리·승인 인터페이스를 분리했습니다.</p><div class="us-platform-grid">${platforms.map(x=>`<article><span class="us-platform-icon">${kmrIcon(x[0])}</span><div><h3>${x[1]}</h3><p>${x[2]}</p><div class="us-feature-list">${x[3].map(y=>`<span>${y}</span>`).join('')}</div></div></article>`).join('')}</div></section>
    <section class="us-section">${cap('07','Return / Approval','반품 접수부터 관리자 승인까지 후속 흐름을 연결했습니다.')}<p class="us-side-copy">현장 접수부터 관리자 확인과<br>승인·반려 결과 반영까지 연결했습니다.</p><div class="us-return-flow">${flowNodes.map((x,i)=>{const [a,b]=x.split('|');return `${i?'<i>→</i>':''}<article><small>0${i+1} · ${a}</small><b>${b}</b></article>`}).join('')}</div></section>
    <section class="us-section us-outcome">${cap('08','Outcome','어떤 결과를 만들었나요?')}<div class="us-outcome-grid"><article class="us-highlight"><span>${kmrIcon('award')}</span><small>핵심 성과</small><h3>개인별로 관리하던 고객·제품·서비스 기록을 제조번호 중심의 CRM 이력 관리 구조로 전환했습니다.</h3><p>제조번호를 기준으로 관련 정보를 조회하고, 기존 제품·고객 정보를 서비스 업무에 재사용할 수 있도록 구성해 분산된 기록을 하나의 시스템 안에서 이어서 확인할 수 있도록 했습니다.</p></article><div class="us-result-list">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></div></section>
    <section class="us-section">${cap('09','Deliverables','주요 산출물')}<div class="us-deliverable-grid">${deliverables.map(x=>`<article><span class="us-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    ${print?'':`<nav class="us-pager"><a href="#project/daesung">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록으로 돌아가기</a><a href="#project/kr-crm">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function krCrmDetail(print=false){
  const cap=(n,en,ko)=>`<div class="kr-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const checks=a=>`<div class="kr-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const roles=[
    ['role','사용자·권한 구조 설계','기사·컨설턴트·CS·관리자·결재자별 메뉴와 조회·처리 범위를 정의했습니다.'],
    ['flow','상담·AS 업무 흐름 설계','상담 접수부터 배정·방문·처리까지 하나의 서비스 건으로 이어지는 흐름을 구성했습니다.'],
    ['handoff','상태·이관 정책 정의','진행 상태와 담당자 변경에 따른 후속 처리·이관 기준을 정리했습니다.'],
    ['project','기술지원·반품·결재 구조','서비스 처리 중 발생하는 기술지원, 반품 및 승인·결재 흐름을 연결했습니다.'],
    ['data','데이터·Dashboard 기준','고객·제품·AS 이력을 연결하고, 사용자 역할별 우선 업무와 조회 기준을 정리했습니다.']
  ];
  const serviceFlow=[
    ['상담 접수','고객 · 제품 · 증상 · 주소 · 희망일시','CS 접수'],
    ['담당자 배정','컨설턴트 / 기사','처리 담당자 지정'],
    ['약속·방문','예약일시 · 방문 상태','현장 서비스 일정 관리'],
    ['서비스 처리','조치내용 · 부품 · 비용','현장 서비스 결과 입력'],
    ['기술지원·이관','지원 요청 · 담당자 변경','추가 지원 / 다른 담당자 연결'],
    ['반품·결재','반품 요청 · 승인 / 반려','본사 후속 업무']
  ];
  const roleCards=[
    ['role','기사','현장 서비스 처리',['배정된 서비스 건 확인','약속 / 방문','현장 처리','결과 입력','기술지원 요청']],
    ['tools','컨설턴트','기술지원·이관 처리',['접수 / 배정 건 확인','추가 기술지원','이관 건 처리','서비스 후속 대응']],
    ['company','CS · 관리자','접수·배정·운영 관리',['상담 접수','담당자 배정','전체 서비스 현황 조회','운영 관리']],
    ['award','기안자 · 결재자','반품·결재 처리',['반품 관련 확인','기안','승인 / 반려','후속 처리 확인']]
  ];
  const dataFlow=[['고객','서비스 접수 주체'],['제품','제품번호 / 모델'],['설치·출고','최초 설치처 / 출고지점'],['보증','기간 / 제품 조건'],['AS 이력','서비스 처리 기록']];
  const dashboards=[['calendar','기사','오늘 일정 / 배정 건'],['company','CS · 관리자','접수 / 배정 / 진행 현황'],['tools','컨설턴트','기술지원 / 이관 요청'],['award','결재자','결재 대기']];
  const results=[
    ['역할별 업무 범위 명확화','기사·컨설턴트·CS·관리자·결재자의 조회·처리 역할을 구분했습니다.'],
    ['상태 기반 후속 처리 구조화','서비스와 기술지원 상태를 분리하고, 각 상태에 따른 다음 처리를 정의했습니다.'],
    ['담당자 이관과 처리 이력 연결','담당자가 변경돼도 같은 서비스 건에서 기존 이력과 결과가 이어지도록 구성했습니다.'],
    ['고객·제품·AS 이력 연결','고객과 제품 정보를 기준으로 기존 서비스 이력을 계속 확인할 수 있도록 구성했습니다.']
  ];
  const deliverables=[
    ['document','요구사항 정의','상담·AS·반품 관련 요구사항 정리'],['role','사용자·권한','역할별 메뉴·조회·처리 범위 정의'],['flow','업무 프로세스','상담·배정·방문·후속 처리 흐름 설계'],['handoff','상태·이관 정책','서비스·기술지원 상태와 담당자 변경 기준'],['screen','화면설계','App / Web 상세 업무 화면 정의'],['aggregate','Dashboard 기준','역할별 조회·우선 업무·집계 기준'],['tools','QA','권한·상태·업무 흐름 검증']
  ];
  const status=(title,items,kind)=>`<article class="kr-status-card ${kind}"><h3>${title}</h3><div>${items.map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('')}</div></article>`;
  return `<div class="page detail kr-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　대성 국내 CRM</div>
    <section class="kr-hero">
      <div class="kr-hero-main"><div class="kr-overline"><b>05</b>${chips(['CRM','AS','Workflow','Permission','Back Office'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>대성 국내 CRM</h1><p>상담 접수부터 담당자 배정, 방문·기술지원, 이관,<br>반품·결재까지 여러 담당자가 이어서 처리하는 업무를 상태와 처리 주체 기준으로 구조화했습니다.</p></div>
      <div class="kr-hero-side"><div class="kr-meta">${[['company','회사','가비아CNS'],['calendar','기간','2025.05 ~ 2026.06'],['role','역할','서비스기획'],['project','프로젝트','국내 서비스 CRM 신규 구축'],['structure','주요 사용자','기사 · 컨설턴트 · CS · 관리자 · 기안자 · 결재자']].map(x=>`<div class="kr-meta-row"><span>${kmrIcon(x[0])}</span><div><b>${x[1]}</b><em>${x[2]}</em></div></div>`).join('')}</div><aside class="kr-focus"><b>Project Focus</b><div>${[['STATE','상태'],['ASSIGN','배정'],['HANDOFF','이관'],['PERMISSION','권한'],['APPROVAL','결재']].map(x=>`<span><b>${x[0]}</b><small>${x[1]}</small></span>`).join('')}</div></aside></div>
    </section>
    <div class="kr-two-col">
      <section class="kr-section kr-context">${cap('01','Background','왜 필요했을까요?')}<p>한 건의 상담·AS 업무가 CS 접수부터 담당자 배정, 방문, 처리, 기술지원·이관, 반품·결재까지 여러 담당자를 거쳐 이어지는 구조였습니다.</p><p>담당자와 상태가 바뀔 때마다 다음 처리 주체와 가능한 업무가 달라지기 때문에 단순한 기능 목록보다 상태·담당자·권한 기준을 먼저 정리할 필요가 있었습니다.</p>${checks(['하나의 업무를 여러 담당자가 이어서 처리','상담 → 배정 → 방문 → 기술지원·이관 → 반품·결재 연결','현재 상태에 따라 가능한 다음 업무가 달라짐','사용자별 조회·처리 권한이 다름'])}</section>
      <section class="kr-section kr-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>상담 접수 이후의 진행 상황을 하나의 서비스 건 안에서 계속 이어서 확인할 수 있도록 하고, 상태와 현재 처리 주체를 기준으로 다음 업무와 권한이 결정되는 CRM 구조를 만드는 것이 목표였습니다.</p>${checks(['역할별 메뉴·조회·처리 권한 정의','상담 접수 → 담당자 배정 구조','약속·방문·서비스 처리 상태 연결','기술지원 요청 및 담당자 이관 흐름','반품·결재 처리 연결','역할별 Dashboard 기준 정의'])}</section>
    </div>
    <section class="kr-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="kr-role-grid">${roles.map(x=>`<article><span class="kr-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="kr-section">${cap('04','Service Flow','상담 접수부터 완료까지 어떻게 이어졌나요?')}<p class="kr-side-copy">담당자가 바뀌어도 같은 서비스 건 안에서<br>진행 이력을 이어서 확인하도록 설계했습니다.</p><div class="kr-service-flow">${serviceFlow.map((x,i)=>`${i?'<i>→</i>':''}<article><small>0${i+1}</small><h3>${x[0]}</h3><p>${x[1]}</p><b>${x[2]}</b></article>`).join('')}</div></section>
    <section class="kr-section">${cap('05','Status','서비스와 기술지원 상태를 각각 구분했습니다.')}<p class="kr-side-copy">기술지원이 끝나도 서비스 전체 업무가<br>완료된 것으로 처리되지 않도록 분리했습니다.</p><div class="kr-status-grid">${status('서비스 상태',['접수','배정','방문 예정','처리 중','완료'],'service')}${status('기술지원 상태',['요청','담당자 확인','처리 중','기술지원 완료'],'support')}</div><aside class="kr-status-note"><b>기술지원 완료 ≠ 서비스 전체 완료</b><p>기술지원 업무가 완료돼도 원 서비스 건의 최종 완료 상태는 별도로 관리했습니다.</p></aside></section>
    <section class="kr-section">${cap('06','Handoff','추가 지원이 필요하면 담당자를 바꿔 이어서 처리했습니다.')}<p class="kr-side-copy">담당자가 변경돼도 기존 처리 이력은<br>같은 서비스 건 안에 남도록 구성했습니다.</p><div class="kr-handoff-flow">${['현재 담당자','추가 지원 필요','컨설턴트 / 다른 담당자','추가 처리','동일 서비스 이력에 결과 연결'].map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('')}</div><div class="kr-handoff-notes">${['기존 처리 이력 유지','현재 담당자 변경','같은 서비스 건에서 후속 결과 연결'].map(x=>`<article><span>✓</span>${x}</article>`).join('')}</div></section>
    <section class="kr-section">${cap('07','Role / Permission','역할에 따라 조회 범위와 처리 권한을 구분했습니다.')}<div class="kr-permission-grid">${roleCards.map(x=>`<article><span class="kr-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><b>${x[2]}</b><ul>${x[3].map(y=>`<li>${y}</li>`).join('')}</ul></article>`).join('')}</div></section>
    <section class="kr-section">${cap('08','Data Relationship','고객·제품·설치·AS 이력을 하나의 흐름으로 연결했습니다.')}<div class="kr-data-flow">${dataFlow.map((x,i)=>`${i?'<i>→</i>':''}<article><b>${x[0]}</b><p>${x[1]}</p></article>`).join('')}</div></section>
    <section class="kr-section kr-dashboard">${cap('09','Dashboard','역할마다 먼저 확인해야 할 업무가 달랐습니다.')}<p class="kr-side-copy">같은 화면을 모두에게 보여주지 않고<br>역할별 우선 업무와 조회 범위를 기준으로 구성했습니다.</p><div class="kr-dashboard-grid">${dashboards.map(x=>`<article><span class="kr-card-icon">${kmrIcon(x[0])}</span><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join('')}</div></section>
    <section class="kr-section kr-outcome">${cap('10','Outcome','어떤 결과를 만들었나요?')}<div class="kr-outcome-grid"><article class="kr-highlight"><span>${kmrIcon('award')}</span><small>핵심 성과</small><h3>상담 접수부터 배정·방문·기술지원·이관·반품·결재까지 이어지는 CRM 업무를 상태와 처리 주체 기준으로 시스템화했습니다.</h3><p>한 서비스 건을 여러 담당자가 이어서 처리하더라도 현재 상태와 담당자를 기준으로 다음 업무가 끊기지 않도록 구조화했습니다.</p></article><div class="kr-result-list">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></div></section>
    <section class="kr-section">${cap('11','Deliverables','주요 산출물')}<div class="kr-deliverable-grid">${deliverables.map(x=>`<article><span class="kr-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    ${print?'':`<nav class="kr-pager"><a href="#project/us-crm">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록으로 돌아가기</a><a href="#project/o2o">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function o2oDetail(print=false){
  const cap=(n,en,ko)=>`<div class="o2-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const checks=a=>`<div class="o2-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const roles=[
    ['flow','E2E 서비스 흐름 설계','온라인 주문부터 매장 준비·고객 방문·수령 완료까지 전체 처리 순서를 연결했습니다.'],
    ['handoff','주문·픽업 상태 정의','주문 접수·준비·픽업 대기·수령 완료 등 처리 단계별 상태와 다음 행동을 정리했습니다.'],
    ['screen','고객 화면·알림 정책','주문 상태에 따라 고객에게 보여줄 정보와 준비 완료 안내·바코드 노출 기준을 설계했습니다.'],
    ['company','매장 관리자 기능','매장에서 주문을 확인하고 상품 준비·고객 확인·픽업 완료를 처리하는 기능을 설계했습니다.'],
    ['data','재고·취소·반품·예외 정책','픽업 주문의 취소·반품과 재고 반영, 운영 중 발생할 수 있는 예외 상황을 정리했습니다.']
  ];
  const lanes=[
    ['CUSTOMER','고객',['상품 선택','픽업 매장 선택','주문','준비 완료 안내','매장 방문','바코드 확인','상품 수령']],
    ['SHOPPING MALL','쇼핑몰',['픽업 주문 생성','주문 상태 관리','준비 완료 반영','고객 안내','바코드 노출','픽업 완료 반영']],
    ['STORE','매장',['주문 확인','상품 준비','준비 완료 처리','고객 방문 확인','바코드 확인','픽업 완료']]
  ];
  const barcode=[
    ['01','주문 완료',['주문 정보','선택한 픽업 매장 정보'],'미노출','아직 실제 수령 가능한 상태가 아니므로 바코드를 먼저 노출하지 않습니다.','hidden'],
    ['02','준비 완료 · 픽업 대기',['준비 완료 안내','픽업 매장 위치','운영 시간','Barcode'],'노출','실제 상품을 수령할 수 있는 상태부터 바코드를 표시합니다.','visible'],
    ['03','픽업 완료',['수령 완료 상태'],'미노출','이미 사용된 바코드는 완료 이후 다시 사용할 필요가 없으므로 숨깁니다.','hidden']
  ];
  const inventory=[
    ['주문 취소',['픽업 주문','취소 가능 여부 확인','주문 취소','매장 재고 복구'],'주문만 취소하고 끝나는 것이 아니라 매장에서 다시 판매할 수 있도록 재고 상태까지 연결'],
    ['수령 후 반품',['픽업 완료','반품 처리','반품 결과 확인','매장 재고 반영'],'클레임 결과와 재고 상태를 함께 반영']
  ];
  const exceptions=[
    ['calendar','미수령','준비가 완료됐지만 고객이 방문하지 않은 경우 현재 주문 상태와 후속 처리 여부를 확인하도록 구성했습니다.'],
    ['data','재고 부족','매장 재고가 부족한 경우 정상 픽업이 진행되지 않도록 처리 기준을 구분했습니다.'],
    ['handoff','연동 실패','외부 연동 결과가 정상적으로 반영되지 않는 경우에도 매장 운영이 중단되지 않도록 대체 처리 가능성을 검토했습니다.'],
    ['flow','취소·반품','주문 상태뿐 아니라 픽업 매장 재고까지 후속 결과가 반영되도록 기준을 연결했습니다.']
  ];
  const admin=[
    ['document','주문 조회','신규 픽업 주문 확인'],['project','상품 준비','수령 예정 상품 준비'],['award','준비 완료','고객 수령 가능 상태로 변경'],['role','고객 확인','방문 고객·주문 확인'],['data','바코드 확인','수령 Barcode 확인'],['flow','픽업 완료','최종 상태 처리']
  ];
  const results=[
    ['고객과 매장 업무 연결','온라인 주문 이후의 매장 준비와 실제 수령 과정까지 같은 서비스 흐름으로 이어지도록 구성했습니다.'],
    ['픽업 운영 기준 구체화','상태·바코드·재고·취소·반품·예외 기준을 실제 매장 운영이 가능한 수준으로 정리했습니다.'],
    ['구축 및 전체 흐름 검증','서비스 구현과 연동을 완료하고 테스트 주문으로 주문부터 픽업 완료까지 전체 흐름을 검증했습니다.']
  ];
  const deliverables=[
    ['document','서비스 정책','픽업 주문과 매장 처리 기준 정의'],['role','사용자 Flow','주문부터 수령까지 고객 경험 흐름'],['flow','Swimlane','고객·쇼핑몰·매장 처리 순서'],['screen','프론트 화면설계','픽업 주문·매장 선택·수령 정보 화면'],['company','매장 관리자 화면','주문 확인·준비·바코드·완료 처리'],['handoff','상태 정의','주문·준비·픽업 처리 상태 기준'],['data','재고·예외 정책','취소·반품·재고 및 운영 예외 기준'],['tools','QA','정상·예외 시나리오와 전체 Flow 검증']
  ];
  const miniFlow=a=>`<div class="o2-mini-flow">${a.map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('')}</div>`;
  return `<div class="page detail o2-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　O2O 픽업 주문 서비스</div>
    <section class="o2-hero">
      <div class="o2-hero-main"><div class="o2-overline"><b>06</b>${chips(['O2O','Order','Pickup','Store','Back Office'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>O2O 픽업 주문 서비스</h1><p>온라인 주문부터 매장 준비·고객 안내·바코드 수령·픽업 완료까지<br>고객·쇼핑몰·매장 운영 흐름을 연결했습니다.</p><small>재고·취소·반품·예외까지 실제 매장 운영에 필요한 처리 기준을 함께 설계했습니다.</small></div>
      <div class="o2-hero-side"><div class="o2-meta">${[['company','회사','가비아CNS'],['calendar','기간','2026'],['role','역할','서비스기획 / PM · 기획 단독'],['project','프로젝트','O2O 픽업 주문 서비스 구축'],['structure','범위','주문 · 상태 · 바코드 · 매장 운영 · 재고 · 예외']].map(x=>`<div class="o2-meta-row"><span>${kmrIcon(x[0])}</span><div><b>${x[1]}</b><em>${x[2]}</em></div></div>`).join('')}</div><aside class="o2-focus"><b>Project Focus</b><div>${[['ORDER','주문'],['STATUS','픽업 상태'],['BARCODE','수령 확인'],['STORE','매장 운영'],['INVENTORY','재고'],['EXCEPTION','예외']].map(x=>`<span><b>${x[0]}</b><small>${x[1]}</small></span>`).join('')}</div></aside></div>
    </section>
    <div class="o2-two-col">
      <section class="o2-section o2-context">${cap('01','Background','왜 필요했을까요?')}<p>온라인 주문만으로는 실제 매장에서 상품을 준비하고 고객에게 전달하는 과정을 처리할 수 없었습니다.</p><p>고객이 픽업할 매장을 선택한 뒤, 매장에서 주문을 확인하고 상품을 준비하고, 수령 가능한 시점에 고객에게 안내한 후 실제 방문 고객을 확인해 상품을 전달하는 오프라인 운영 흐름까지 함께 연결해야 했습니다.</p>${checks(['온라인 주문과 매장 수령 업무 연결 필요','픽업 매장 선택 및 매장별 주문 처리 필요','준비 완료 시점과 고객 안내 기준 필요','고객 수령 확인 방식 필요','재고·취소·반품·예외 처리 연결 필요'])}</section>
      <section class="o2-section o2-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>고객의 온라인 주문이 실제 매장 준비와 수령 완료까지 끊기지 않도록, 고객·쇼핑몰·매장이 같은 주문 상태를 기준으로 처리할 수 있는 O2O 픽업 흐름을 만드는 것이 목표였습니다.</p>${checks(['온라인 주문부터 매장 수령까지 E2E Flow 연결','주문·픽업 상태 기준 정의','준비 완료 이후 고객 안내·바코드 노출','매장 관리자 처리 기능 설계','재고·취소·반품·예외 처리 기준 정의'])}</section>
    </div>
    <section class="o2-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="o2-role-grid">${roles.map(x=>`<article><span class="o2-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="o2-section">${cap('04','Pickup Flow','온라인 주문부터 매장 픽업까지 어떻게 이어졌나요?')}<p class="o2-side-copy">고객·쇼핑몰·매장이 같은 주문 상태를<br>기준으로 이어서 처리하도록 설계했습니다.</p><div class="o2-swimlane">${lanes.map((x,j)=>`<div class="o2-lane lane-${j}"><header><b>${x[0]}</b><span>${x[1]}</span></header><div>${x[2].map((y,i)=>`${i?'<i>→</i>':''}<span>${y}</span>`).join('')}</div></div>`).join('')}</div></section>
    <section class="o2-section">${cap('05','Barcode Policy','상태에 따라 고객 정보와 바코드 노출 기준을 달리했습니다.')}<p class="o2-side-copy">바코드는 주문 직후가 아니라 실제 상품을<br>수령할 수 있는 상태부터 노출하도록 설계했습니다.</p><div class="o2-barcode-grid">${barcode.map(x=>`<article class="${x[5]}"><small>${x[0]}</small><h3>${x[1]}</h3><ul>${x[2].map(y=>`<li>${y}</li>`).join('')}</ul><b>${x[3]}</b><p>${x[4]}</p></article>`).join('')}</div><aside class="o2-barcode-note"><b>BARCODE VISIBILITY</b><span>주문 시점이 아니라 ‘실제 수령 가능 상태’를 기준으로 노출</span></aside></section>
    <section class="o2-section">${cap('06','Inventory / Claim','취소·반품 시 매장 재고가 다시 연결되도록 설계했습니다.')}<div class="o2-inventory-grid">${inventory.map(x=>`<article><h3>${x[0]}</h3>${miniFlow(x[1])}<p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="o2-section">${cap('07','Exception','픽업 운영에서 발생할 수 있는 예외도 함께 정의했습니다.')}<p class="o2-side-copy">정상 Flow뿐 아니라 매장 운영이 중단될 수 있는<br>상황의 처리 기준까지 검토했습니다.</p><div class="o2-exception-grid">${exceptions.map(x=>`<article><span class="o2-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="o2-section">${cap('08','Store Admin','매장에서 픽업 주문을 직접 처리할 수 있는 관리 기능을 설계했습니다.')}<div class="o2-admin-grid">${admin.map((x,i)=>`<article><small>0${i+1}</small><span class="o2-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div><p class="o2-admin-note"><b>운영 범위</b> 취소 / 예외 처리까지 함께 고려했습니다.</p></section>
    <section class="o2-section o2-outcome">${cap('09','Outcome','어떤 결과를 만들었나요?')}<div class="o2-outcome-grid"><article class="o2-highlight"><span>${kmrIcon('award')}</span><small>핵심 성과</small><h3>온라인 주문부터 매장 준비·고객 안내·바코드 수령·픽업 완료까지 이어지는 O2O 주문 서비스를 구축하고 연동을 완료했습니다.</h3><p>고객 화면과 실제 매장 업무가 같은 주문 상태를 기준으로 움직이도록 연결하고, 재고·취소·반품·예외까지 운영 가능한 기준으로 구체화했습니다.</p></article><div class="o2-result-list">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></div></section>
    <section class="o2-section">${cap('10','Deliverables','주요 산출물')}<div class="o2-deliverable-grid">${deliverables.map(x=>`<article><span class="o2-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    ${print?'':`<nav class="o2-pager"><a href="#project/kr-crm">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록으로 돌아가기</a><a href="#project/campaign">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function campaignDetail(print=false){
  const cap=(n,en,ko)=>`<div class="cp-cap"><span>${n}</span><div><small>${en}</small><h2>${ko}</h2></div></div>`;
  const checks=a=>`<div class="cp-checks">${a.map(x=>`<p><span>✓</span>${x}</p>`).join('')}</div>`;
  const roles=[
    ['flow','기존 데이터 흐름 분석','분산된 데이터가 어디에서 생성되고 어떤 과정을 거쳐 본사 확인까지 이어지는지 AS-IS 흐름을 정리했습니다.'],
    ['data','통합 데이터 구조 설계','여러 곳에서 발생하는 캠페인 데이터를 CRM에서 같은 기준으로 등록·관리할 수 있도록 입력 구조를 정리했습니다.'],
    ['tools','자동 가공·집계 기준 정의','등록된 데이터를 어떤 기준으로 가공하고 집계할지 처리 규칙을 정의했습니다.'],
    ['aggregate','Dashboard 정보 구조 설계','본사 담당자가 가공된 결과를 빠르게 확인할 수 있도록 Dashboard 정보 구조를 설계했습니다.']
  ];
  const before=['분산 데이터 수집','개별 취합','추가 가공','본사 전달','결과 확인'];
  const after=['CRM 등록','자동 가공·집계','본사 확인'];
  const flow=[
    ['document','INPUT','캠페인 데이터 등록','분산 데이터를 CRM에 같은 기준으로 등록'],
    ['tools','PROCESS','자동 가공','등록 데이터를 정의된 기준에 따라 가공'],
    ['data','AGGREGATE','데이터 집계','분석에 필요한 단위로 가공 결과를 집계'],
    ['aggregate','DASHBOARD','본사 결과 확인','가공·집계된 캠페인 결과를 Dashboard에서 확인']
  ];
  const results=[
    ['분산 데이터 통합','여러 곳에서 발생하던 캠페인 데이터를 CRM 안의 공통 등록 구조로 정리했습니다.'],
    ['수작업 가공 축소','별도 취합 후 수작업으로 처리하던 가공·집계 기준을 시스템 구조로 옮겼습니다.'],
    ['본사 확인 흐름 단순화','CRM 등록부터 가공·집계·Dashboard 확인까지 같은 흐름 안에서 이어지도록 구성했습니다.']
  ];
  const deliverables=[
    ['flow','AS-IS 분석','기존 데이터 취합·가공·확인 흐름 분석'],['handoff','데이터 흐름','Input → Process → Aggregate → Dashboard 정의'],['tools','가공 기준','등록 데이터의 자동 처리·집계 규칙 정의'],['aggregate','Dashboard 구조','본사 결과 확인을 위한 정보 구조 설계'],['screen','화면설계','CRM 등록·조회 및 Dashboard 화면 정의'],['award','QA','데이터 등록·가공·결과 확인 Flow 검증']
  ];
  const nodes=a=>`<div class="cp-node-flow">${a.map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('')}</div>`;
  return `<div class="page detail cp-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　캠페인 분석 CRM</div>
    <section class="cp-hero">
      <div class="cp-hero-main"><div class="cp-overline"><b>07</b>${chips(['CRM','Data','Dashboard','Automation'])}</div><span class="section-kicker">PROJECT CASE STUDY</span><h1>캠페인 분석 CRM</h1><p>분산된 캠페인 데이터를 CRM에 통합하고 자동 가공되도록 구조를 개선해,<br>수일 걸리던 데이터 확인 작업을 당일 확인 가능한 흐름으로 단축했습니다.</p></div>
      <div class="cp-hero-side"><div class="cp-meta">${[['company','회사','가비아CNS'],['role','역할','서비스기획'],['project','프로젝트','캠페인 데이터 통합·분석 CRM 개선'],['calendar','핵심 변화','수일 → 당일']].map(x=>`<div class="cp-meta-row"><span>${kmrIcon(x[0])}</span><div><b>${x[1]}</b><em>${x[2]}</em></div></div>`).join('')}</div><aside class="cp-focus"><b>Project Focus</b><div>${[['INPUT','데이터 등록'],['PROCESS','자동 가공'],['AGGREGATE','집계'],['DASHBOARD','본사 확인']].map(x=>`<span><b>${x[0]}</b><small>${x[1]}</small></span>`).join('')}</div></aside></div>
    </section>
    <div class="cp-two-col">
      <section class="cp-section cp-context">${cap('01','Background','왜 필요했을까요?')}<p>캠페인 관련 데이터가 여러 곳에 분산되어 있어 본사에서 결과를 확인하려면 각 데이터를 모은 뒤 추가 가공하는 작업이 필요했습니다.</p><p>데이터 취합과 가공 과정이 담당자의 수작업에 의존해 본사에서 캠페인 결과를 확인하기까지 수일이 소요되는 구조였습니다.</p>${checks(['캠페인 데이터가 여러 곳에 분산','본사 확인 전 추가 가공 필요','데이터 취합·가공이 수작업에 의존','결과 확인까지 수일 소요'])}</section>
      <section class="cp-section cp-context">${cap('02','Objective','무엇을 목표로 했나요?')}<p>분산된 캠페인 데이터를 CRM에서 같은 기준으로 등록하고, 등록된 데이터를 정해진 기준에 따라 자동 가공·집계해 본사에서 별도의 수작업 없이 결과를 빠르게 확인할 수 있는 구조를 만드는 것이 목표였습니다.</p>${checks(['캠페인 데이터 등록 구조 통합','자동 가공 기준 정의','집계 기준 시스템화','Dashboard 확인 구조 설계','본사 데이터 확인 Lead Time 단축'])}</section>
    </div>
    <section class="cp-section">${cap('03','My Role','저는 이런 일을 했습니다.')}<div class="cp-role-grid">${roles.map(x=>`<article><span class="cp-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    <section class="cp-section">${cap('04','Before / After','데이터 확인 흐름을 어떻게 바꿨나요?')}<p class="cp-side-copy">분산 수집·수작업 가공 구조를<br>CRM 등록·자동 가공·집계 구조로 전환했습니다.</p><div class="cp-compare"><article class="before"><header><small>기존 방식</small><h3>Before</h3></header>${nodes(before)}<strong>수일 소요</strong></article><span class="cp-change">→</span><article class="after"><header><small>개선 방식</small><h3>After</h3></header>${nodes(after)}<strong>당일 확인</strong></article></div></section>
    <section class="cp-section">${cap('05','Data Flow','등록된 데이터는 어떻게 처리됐나요?')}<p class="cp-side-copy">입력된 캠페인 데이터를 가공·집계한 뒤<br>Dashboard에서 확인하도록 구성했습니다.</p><div class="cp-data-flow">${flow.map((x,i)=>`${i?'<i>→</i>':''}<article><span class="cp-card-icon">${kmrIcon(x[0])}</span><small>0${i+1} · ${x[1]}</small><h3>${x[2]}</h3><p>${x[3]}</p></article>`).join('')}</div><aside class="cp-flow-note">데이터를 ‘모으는 화면’이 아니라, 등록 이후의 가공·집계 과정까지 시스템 안에서 이어지도록 설계했습니다.</aside></section>
    <section class="cp-section cp-outcome">${cap('06','Outcome','어떤 결과를 만들었나요?')}<div class="cp-kpi"><small>DATA CHECK LEAD TIME</small><div><b>수일</b><span>→</span><strong>당일</strong></div><p>본사 캠페인 데이터 확인 흐름 단축</p></div><div class="cp-result-grid">${results.map(x=>`<article><span>✓</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></section>
    <section class="cp-section">${cap('07','Deliverables','주요 산출물')}<div class="cp-deliverable-grid">${deliverables.map(x=>`<article><span class="cp-card-icon">${kmrIcon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
    ${print?'':`<nav class="cp-pager"><a href="#project/o2o">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록으로 돌아가기</a><a href="#project/other">다음 프로젝트　→</a></nav>`}
  </div>`;
}
function detail(p,print=false){
  if(p.id==='kmr')return kmrDetail(print);
  if(p.id==='cj')return cjDetail(print);
  if(p.id==='daesung')return daesungDetail(print);
  if(p.id==='us-crm')return usCrmDetail(print);
  if(p.id==='kr-crm')return krCrmDetail(print);
  if(p.id==='o2o')return o2oDetail(print);
  if(p.id==='campaign')return campaignDetail(print);
  const idx=projects.findIndex(x=>x.id===p.id),prev=idx>0?projects[idx-1]:null,next=idx<projects.length-1?projects[idx+1]:other;
  const visualTitle=p.visual==='swimlane'?'온라인 주문과 매장 운영을 하나의 픽업 흐름으로 연결했습니다.':p.visual==='hub'?'제조번호를 중심으로 고객·제품·서비스 이력을 연결했습니다.':p.visual==='campaign'?'분산된 데이터 흐름을 통합하고 자동 가공되도록 개선했습니다.':p.visual==='domestic'?'하나의 서비스 건이 여러 담당자를 거쳐도 끊기지 않도록 설계했습니다.':'핵심 업무 구조와 처리 기준을 설계했습니다.';
  const outcomeLead=p.id==='campaign'?'<div class="metric">수일　→　당일 <small>데이터 확인 소요 시간 단축</small></div>':`<p class="outcome-lead">${p.outcome[0]}</p>`;
  const projectType={kmr:'레거시 업무시스템 재설계',cj:'회원 전용 커머스 구축',daesung:'신규 CRM 구축','us-crm':'신규 CRM 구축','kr-crm':'신규 CRM 구축',o2o:'O2O 서비스 구축',campaign:'데이터 흐름 개선'}[p.id];
  return `<div class="page detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　${p.name}</div>
    <section class="detail-hero">
      <div class="detail-title"><span class="section-kicker">PROJECT CASE STUDY</span><h1>${p.name}</h1><p class="summary">${p.summary}</p>${chips(p.tags)}</div>
      <aside class="meta"><div class="meta-row"><b>회사</b><span>${p.company}</span></div>${p.period?`<div class="meta-row"><b>기간</b><span>${p.period}</span></div>`:''}<div class="meta-row"><b>역할</b><span>${p.role}</span></div><div class="meta-row"><b>프로젝트</b><span>${projectType}</span></div></aside>
    </section>
    <div class="detail-layout">
      ${headerSection(1,'Background','왜 필요했을까요?',`<p>${p.background.join('<br>')}</p><div class="bullet-panel">${p.background.map(x=>`<p>${x}</p>`).join('')}</div>`,'compact')}
      ${headerSection(2,'Objective','무엇을 목표로 했나요?',`<div class="bullet-panel">${p.objective.map(x=>`<p>${x}</p>`).join('')}</div>`,'compact')}
      ${headerSection(3,'My Role','저는 이런 일을 했습니다.',`<div class="role-grid">${p.roles.map((x,i)=>`<div class="role-card"><span class="role-symbol">${['◇','▦','□','↔','✓'][i%5]}</span><b>${x}</b></div>`).join('')}</div>`,'full')}
      ${headerSection(4,'Case / Structure',visualTitle,`<div class="visual-heading"><span></span><p>프로젝트의 핵심 업무 흐름과 처리 기준을 구조화했습니다.</p></div>${projectVisual(p)}`,'full')}
      ${p.policy.length?headerSection(5,'Policy / Data Rule',p.id==='o2o'?'상태별 고객 정보와 바코드 노출 기준':'운영 기준과 예외를 구체화했습니다.',`<div class="card-grid">${p.policy.map(x=>`<div class="case-card"><b>${x}</b></div>`).join('')}</div>`,'full'):''}
      <section class="detail-section outcome full"><div class="section-cap"><span class="num">${p.policy.length?'06':'05'}</span><span class="label">Outcome</span></div><h2>어떤 결과를 만들었나요?</h2>${outcomeLead}<div class="card-grid">${p.outcome.slice(p.id==='campaign'?1:1).map(x=>`<div class="case-card"><b>✓　${x}</b></div>`).join('')}</div></section>
      ${headerSection(p.policy.length?7:6,'Deliverables','주요 산출물',`<div class="deliverables">${p.deliverables.map(x=>`<span>${x}</span>`).join('')}</div>`,'full')}
    </div>
    ${print?'':`<nav class="pager"><a href="${prev?'#project/'+prev.id:'#home'}">←　이전 프로젝트</a><a href="#projects">▦　프로젝트 목록으로 돌아가기</a><a href="#project/${next.id}">다음 프로젝트　→</a></nav>`}
  </div>`
}
function otherPage(print=false){
  const tags=a=>`<div class="op-tags">${a.map(x=>`<span>${x}</span>`).join('')}</div>`;
  const work=a=>`<div class="op-work">${a.map((x,i)=>`<div><b>0${i+1}</b><span>${x}</span></div>`).join('')}</div>`;
  const outcome=t=>`<aside class="op-outcome"><small>OUTCOME</small><strong>${t}</strong></aside>`;
  const competencies=[
    ['01','Requirements','요구사항 구체화','막연한 요청을 목적·대상·영향·예외 기준으로 나눠 구현 가능한 요구사항으로 정리'],
    ['02','User & Permission','사용자 유형·권한','사용자마다 무엇을 보고 무엇을 처리해야 하는지 역할 기준으로 구조화'],
    ['03','Policy & Workflow','정책·운영 프로세스','정상 흐름뿐 아니라 상태·예외·후속 처리까지 운영 가능한 기준으로 정의'],
    ['04','Information Structure','정보 구조·관리자 기능','프론트뿐 아니라 운영자·관리자의 정보 조회와 업무 처리 구조까지 함께 설계'],
    ['05','Delivery','개발 협의·예외·QA','기획 내용을 개발 가능한 수준으로 구체화하고 구현 이슈와 예외를 조율해 QA까지 연결']
  ];
  return `<div class="page detail op-detail ${print?'detail-page':''}">
    <div class="breadcrumbs">⌂　›　Projects　›　Other Projects</div>
    <section class="op-hero"><span class="section-kicker">PROJECT ARCHIVE</span><h1>Other Projects</h1><p>대표 프로젝트 밖에서도 커머스 운영·업무시스템·정보 아카이브·마이데이터 등<br>다양한 도메인의 문제를 구조화하고 서비스 기준으로 구체화해왔습니다.</p><strong>도메인은 달라도, 문제를 구조화하는 방식은 같았습니다.</strong></section>
    <div class="op-list">
      <section class="op-project op-commerce">
        <header><span>01</span><div><h2>강원더몰 운영 개선</h2><p>퍼스트몰 기반 커머스 운영·정책 개선</p></div>${tags(['Commerce Operation','Policy','Promotion','External Integration','QA'])}</header>
        <div class="op-grid"><div class="op-copy"><small>PROBLEM / CONTEXT</small><h3>운영 요청을 그대로 처리하지 않고,<br>먼저 ‘왜 필요한지’를 확인했습니다.</h3><p>프로모션·할인·라이브커머스·외부 연동 등 다양한 개선 요청이 지속적으로 발생했습니다. 요청 기능을 그대로 추가하기보다 상시 기능인지, 관리자 설정으로 해결 가능한지, 개발 시 어떤 사용자와 운영에 영향을 주는지를 먼저 확인했습니다.</p>${work(['요청 목적 / 적용 대상 확인','상시 기능 / 일회성 요청 구분','관리자 설정 / 추가 개발 영역 판단','영향도 / 운영 예외 / QA 기준 정리'])}</div>
          <div class="op-visual policy"><small>POLICY DECISION</small><h3>할인 정책 악용 가능성까지 검토</h3><div class="op-compare-flow"><div><em>기존 방식</em><span>환불 할인금액</span><i>↓</i><span>회원에게 유지</span><i>↓</i><span>반복 환불 가능</span><b>이벤트 예산 점유 위험</b></div><div class="preferred"><em>PREFERRED DIRECTION</em><span>재구매 시</span><i>↓</i><span>남은 예산 확인</span><i>↓</i><span>사용 횟수 확인</span><b>할인 가능 여부 재판단</b></div></div></div></div>
        <div class="op-decision"><small>KEY DECISION</small><strong>할인금액을 특정 회원에게 계속 보존하는 대신, 재구매 시점에 남은 예산과 사용 횟수를 다시 검증하도록 제안했습니다.</strong></div>${outcome('운영 요청을 단순 처리로 끝내지 않고, 악용 가능성과 운영 영향까지 검토해 지속 가능한 서비스 정책과 QA 기준으로 구체화했습니다.')}
      </section>
      <section class="op-project op-ngv">
        <header><span>02</span><div><h2>현대NGV L!NK</h2><p>내부 업무시스템 · 콘텐츠 운영 · 권한 구조</p></div>${tags(['Workflow','Permission','Freelancer','Content','PM'])}</header>
        <div class="op-grid"><div class="op-copy"><small>PROBLEM / CONTEXT</small><h3>사용자별 업무 범위와 접근 권한을<br>웹 기반 업무 구조로 정리했습니다.</h3><p>기존 업무 흐름과 사용자별 업무 범위를 확인한 뒤 내부 사용자가 어떤 정보를 보고 어떤 업무를 처리해야 하는지를 정리했습니다. 관리자·프리랜서·일반 사용자의 업무 목적과 접근 범위가 달라 권한과 화면 구조를 구분할 필요가 있었습니다.</p><div class="op-pm"><small>PROJECT LEADING</small><p>기존 Flow 분석 · 요구사항/업무 범위 정리 · 화면설계 · 디자인/개발 협업 · 해외 관계자 피드백 · 주간회의/Prototype 검토 · 일정 관리</p></div></div>
          <div class="op-visual roles"><small>ROLE / PERMISSION MATRIX</small><div class="op-role-matrix"><article><b>ADMIN</b><strong>관리자</strong><p>콘텐츠·운영 관리<br>사용자·업무 관리<br>전체 업무 범위 확인</p></article><article><b>FREELANCER</b><strong>프리랜서</strong><p>기사 번역 중심<br>필요 콘텐츠 접근<br>본인 업무 범위 처리</p></article><article><b>GENERAL USER</b><strong>일반 사용자</strong><p>소속사 관련 콘텐츠 조회<br>제한된 범위의 정보 이용</p></article></div></div></div>
        ${outcome('사용자 유형별 업무 범위와 권한을 정의하고, 기존 업무 흐름을 디자인·개발·외부 이해관계자가 공유할 수 있는 시스템 구현 기준으로 정리했습니다.')}
      </section>
      <section class="op-project op-cmf">
        <header><span>03</span><div><h2>CMF 통합정보 활용 컨설팅 지원 시스템</h2><p>디자인 소재 · 공법 정보 아카이브</p></div>${tags(['Archive','Information Architecture','Search','Filter','Consulting'])}</header>
        <div class="op-grid"><div class="op-copy"><small>PROBLEM / CONTEXT</small><h3>정보를 나열하기보다<br>찾는 기준부터 설계했습니다.</h3><p>CMF 소재·공법 정보는 종류와 탐색 기준이 다양해 단순한 콘텐츠 나열만으로는 필요한 정보를 찾기 어려웠습니다. 사용자와 전문가 의견을 바탕으로 정보를 어떤 기준으로 분류하고 어떻게 탐색하게 할지를 정리했습니다.</p>${work(['사용자 / 전문가 의견 정리','정보 구조(IA) 설계','검색 조건 / 필터 구조 정의','오프라인 컨설팅 Flow 온라인 연결'])}</div>
          <div class="op-visual ia"><small>INFORMATION ARCHITECTURE</small><div class="op-ia-root">CMF ARCHIVE</div><div class="op-ia-branches">${['Material','Process','Color','Category'].map(x=>`<span>${x}</span>`).join('')}</div><i>↓</i><div class="op-ia-flow">${['Search','Filter','Detail','Consulting'].map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('')}</div></div></div>
        <div class="op-decision"><small>KEY DECISION</small><strong>‘어떤 정보를 보여줄 것인가’보다 ‘사용자가 어떤 기준으로 찾을 것인가’를 먼저 정리했습니다.</strong><p>검색 조건과 필터 구조를 기준으로 사용자가 원하는 정보를 탐색할 수 있도록 IA를 설계했습니다.</p></div>${outcome('분산된 CMF 정보를 검색·필터 중심의 탐색 구조로 정리하고, 기존 오프라인 컨설팅 경험을 온라인 서비스 흐름으로 확장했습니다.')}
      </section>
      <section class="op-project op-mydata">
        <header><span>04</span><div><h2>마이데이터 원스톱 통합지원 서비스</h2><p>마이데이터 서비스 홍보 · 추천 웹 기획</p></div>${tags(['MyData','Content','Information Architecture','Web'])}</header>
        <div class="op-grid"><div class="op-copy"><small>PROBLEM / CONTEXT</small><h3>정보를 어떤 순서로<br>이해하게 할지 정리했습니다.</h3><p>마이데이터 관련 서비스를 사용자가 한곳에서 탐색하고 이해할 수 있도록 서비스 소개와 추천 콘텐츠의 정보 구조와 접근 흐름을 정리한 프로젝트입니다.</p>${work(['사용자 접근 Flow','콘텐츠 Information Architecture','화면별 정보 배치'])}</div>
          <div class="op-visual discovery"><small>CONTENT DISCOVERY FLOW</small><div>${['사용자 유입','서비스 소개','정보 탐색','추천 / 관련 콘텐츠','상세 확인'].map((x,i)=>`${i?'<i>↓</i>':''}<span>${x}</span>`).join('')}</div></div></div>
        <div class="op-decision"><small>KEY DECISION</small><strong>정보가 많은 서비스일수록 화면보다 먼저 ‘어떤 순서로 이해하게 할지’를 정리했습니다.</strong><p>콘텐츠를 단순 나열하지 않고 사용자가 필요한 정보를 찾아갈 수 있도록 우선순위와 화면 정보 구조를 정리했습니다.</p></div>${outcome('서비스 소개와 추천 콘텐츠를 사용자 탐색 흐름 기준으로 재구성해, 마이데이터 정보를 단계적으로 이해할 수 있는 웹 정보 구조로 구체화했습니다.')}
      </section>
    </div>
    <section class="op-across"><span class="section-kicker">ACROSS THESE PROJECTS</span><div class="op-across-head"><h2>프로젝트는 달라도,<br>반복해서 해온 일은 같습니다.</h2><p>처음 접하는 도메인에서도 실제 사용 방식과 업무 흐름을 먼저 확인하고,<br>빠진 기준을 찾아 서비스 구조로 구체화했습니다.</p></div><div class="op-competencies">${competencies.map(x=>`<article><span>${x[0]}</span><small>${x[1]}</small><h3>${x[2]}</h3><p>${x[3]}</p></article>`).join('')}</div><strong class="op-closing">처음 보는 도메인에서도 먼저 실제 사용 방식과 업무 흐름을 확인하고, 빠진 기준을 찾아 서비스 구조로 구체화합니다.</strong></section>
    ${print?'':`<nav class="op-pager"><a href="#project/campaign">←　이전 프로젝트</a><a href="#projects"><span>▦</span> 프로젝트 목록</a><a href="#home">Portfolio Top　↑</a></nav>`}
  </div>`
}
function printBook(){return `<div class="print-book" style="display:none">${home(true)}${projects.map(p=>detail(p,true)).join('')}${otherPage(true)}<div class="page detail-page">${skills()}${contact()}</div></div>`}
function render(){const hash=location.hash||'#home',app=document.querySelector('#app');if(hash.startsWith('#project/')){const id=hash.split('/')[1];app.innerHTML=id==='other'?otherPage():detail(projects.find(x=>x.id===id)||projects[0]);}else app.innerHTML=home();app.focus();if(hash==='#projects')setTimeout(()=>document.querySelector('#projects')?.scrollIntoView(),0);if(hash==='#skills')setTimeout(()=>document.querySelector('#skills')?.scrollIntoView(),0);if(hash==='#contact')setTimeout(()=>document.querySelector('#contact')?.scrollIntoView(),0)}
window.addEventListener('hashchange',render);document.querySelector('#pdfButton').addEventListener('click',()=>{const app=document.querySelector('#app');if(!app.querySelector('.print-book'))app.insertAdjacentHTML('beforeend',printBook());window.print()});window.addEventListener('afterprint',()=>document.querySelector('.print-book')?.remove());document.querySelector('.menu-button').addEventListener('click',()=>document.querySelector('.site-header').classList.toggle('open'));document.querySelector('.site-header nav').addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open'));render();
