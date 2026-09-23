const nations=[
{id:'draken',name:'드라켄펠스',english:'DRAKENFELS',tag:'얼음과 강철의 제국',color:'#adc2da',type:'북부 제국 · 여제',resource:'강철 · 원목',army:'상비군 70만',desc:'북방의 마경을 마주한 강대한 제국. 마법과 마검술을 둘러싼 두 명가의 경쟁은, 제국이 어디로 나아가야 하는가에 대한 논쟁이기도 하다.',politics:'남쪽으로 영토를 넓혀 마경의 위협에 대비하려는 대공가와, 주변국과 협력하여 마경에 집중하려는 후작가가 대립한다.',people:[['아델하이트','여제',38,'드라켄펠스의 군주. 마경의 위협과 제국 내부의 노선 대립을 마주한다.'],['에델린','황녀',19,'북부 제국의 황녀. 황실의 일원으로 제국의 미래와 연결되어 있다.'],['콘라트','대공',52,'마법을 중시하는 남진파 대공가의 중심 인물.','8서클'],['레온하르트','후작',27,'마검술을 지지하며 주변국과의 협력, 마경 대응에 무게를 두는 후작.','소드마스터 상'],['카타리나','총사령관',29,'드라켄펠스의 군을 이끄는 총사령관.','그랜드마스터 하']]},
{id:'elysion',name:'엘리시온',english:'ELYSION',tag:'검과 풍요가 지키는 대륙의 중심',color:'#7faacb',type:'중앙 왕국 · 국왕',resource:'곡물 · 양조품',army:'상비군 60만',desc:'비옥한 곡창과 검술의 전통을 가진 중앙 왕국. 북부 제국의 위협 앞에서, 먼저 검을 뽑을 것인가 국경을 지킬 것인가를 고민한다.',politics:'선제 대응을 주장하는 검술명가 백작가와 방어에 전념하려는 후작가가 서로 다른 해법을 내놓는다.',people:[['알베르트','국왕',48,'온화한 인상과 카리스마를 지닌 엘리시온의 국왕.'],['세실리아','왕녀',19,'엘리시온 왕실의 왕녀. 왕국의 정치와 외교 한가운데 서 있다.'],['에드윈','백작',27,'북부의 위협에 선제 대응하려는 검술명가의 인물.'],['리에나','후작',26,'먼저 전쟁을 일으키기보다 방어에 집중하려는 후작.']]},
{id:'solaria',name:'솔라리아',english:'SOLARIA',tag:'멸망의 잿빛 위에 세워진 신앙',color:'#d9c27d',type:'신성왕국 · 성녀',resource:'치유 · 헌금',army:'상비군 20만',desc:'케메트 대멸망에서 살아남은 극소수의 생존자들이 세운 나라. 고대에도 섬겼던 유일신 솔에 대한 신앙을 이어 간다.',politics:'세속적 부패와 지나친 광신. 서로 다른 두 극단 사이에서 신성왕국의 신앙과 통치가 시험받는다.',people:[['아우렐리아','성녀',22,'솔라리아를 이끄는 성녀이자 신앙의 중심.'],['세라피나','성녀 보좌',25,'성녀를 보좌하는 인물.'],['마테오','세속파 가주',53,'세속적 이해관계와 부패에 얽힌 가문의 수장.'],['이사벨라','광신파 가주',28,'극단적으로 강한 신앙을 가진 가문의 수장.'],['베아트리체','이단심문관',26,'솔라리아의 신앙 질서를 담당하는 이단심문관.']]},
{id:'sylvan',name:'실바니아',english:'SYLVANIA',tag:'세계수 아래 이어지는 오랜 지혜',color:'#91bba0',type:'엘프의 숲 · 원로원',resource:'연금술 · 약초',army:'상비군 10만',desc:'세계수를 중심으로 살아가는 엘프들의 나라. 숲의 자원과 연금술, 원로원의 통치가 실바니아의 질서를 이룬다.',politics:'원로원이 국가의 의사 결정을 맡는다. 주요 장로와 정령궁병단이 국가를 구성한다.',people:[]},
{id:'bestia',name:'베스티아',english:'BESTIA',tag:'강함으로 증명하고, 부족으로 이어지다',color:'#ca9c73',type:'수인왕국 · 부족연합',resource:'가죽 · 유제품 · 노동력',army:'상비군 15만',desc:'여러 수인 부족이 모인 왕국. 최강자를 중심으로 결속하지만, 부족마다 주변국을 바라보는 태도와 미래의 방향은 다르다.',politics:'힘에 의한 확장을 주장하는 강경파와 불필요한 전쟁을 경계하는 세력이 공존한다.',people:[['레오니스','사자수인 후계자',21,'험악한 인상과 달리 조금 소심한 성격. 강함만큼은 확실한 후계자.'],['우르간','곰수인 족장',32,'다혈질의 강경파. 주변국을 불신하고 힘에 의한 확장을 주장하지만 뒤끝은 없다.'],['라샤','호랑이수인 족장',26,'승부욕이 강하고 다혈질이지만 비교적 이성적이다. 불필요한 전쟁에 반대한다.']]},
{id:'goyo',name:'고요',english:'GOYO',tag:'오래된 전통, 푸르게 타오르는 마공학',color:'#81bdcc',type:'동방 제국 · 여제',resource:'마공학 도구 · 차',army:'상비군 100만',desc:'조선풍의 문화와 마법공학이 공존하는 동방 제국. 대사막의 위협을 마주하며, 기술의 힘을 방어에 쓸지 개척에 쓸지 논쟁한다.',politics:'서방과의 교류로 마물을 막으려는 개벽당과, 우월한 마법공학을 앞세워 대사막을 점령하려는 천공당이 대립한다.',people:[['이연화','여제',37,'고요 제국을 통치하는 여제.'],['이서린','황녀',19,'고요 황실의 황녀.'],['윤태겸','좌의정',68,'고요 조정의 좌의정.'],['백무진','우의정',71,'고요 조정의 우의정.'],['강철무','총사령관',31,'고요 제국의 군을 지휘하는 총사령관.'],['설화','대착호장',25,'마수 토벌을 맡는 착호갑사를 이끄는 대착호장.','그랜드마스터 상']]},
{id:'blackwater',name:'블랙워터',english:'BLACKWATER',tag:'깃발보다 계약이 먼저인 섬',color:'#a7a5bd',type:'용병섬 · 의회',resource:'용병 계약',army:'용병단별 편제',desc:'여러 용병단이 활동하는 섬. 국가의 혈통보다 계약과 실력이 중요한 곳이며, 용병단들의 이해관계가 의회의 질서를 만든다.',politics:'여러 용병단과 그 지도자들이 섬의 세력 균형을 이룬다.',people:[['카일 로웬','흑철용병단장',29,'중장보병·정면전·공성 전문. 무뚝뚝하고 현실적이며, 계약과 신뢰를 중시하고 배신을 혐오한다.']]},
{id:'kemet',name:'케메트',english:'KEMET',tag:'황금빛 모래에 묻힌 고대 제국',color:'#d6ae79',type:'고대 제국 · 멸망',resource:'고대 유적 · 거대 호수',army:'현존 국가 아님',desc:'대사막 중앙의 거대한 호수를 중심으로 번성했던 고대 제국. 마경과 연결된 지하 수맥을 통해 이질적인 마력이 유입되며 대멸망을 맞았다.',politics:'현재는 대사막과 유적의 땅이다. 생존자들은 솔라리아를 세웠고, 사막에는 마물과 재해종의 위협이 남았다.',people:[]}
];
const beasts=[['샤이 훌루드','재해종','사해충 · 거대 샌드웜','케메트 대사막을 위협하는 거대한 사막의 존재.','케메트 대사막'],['바르가노스','재해종','거대 사족보행체','초원을 가로지르는 공룡을 연상시키는 거대한 사족보행 재해종.','초원'],... [['카르그','늑대'],['바르칸','멧돼지'],['그라울','곰'],['두라한','코뿔소'],['스카른','독수리'],['가르마','말']].map(([n,s])=>[n,'마수',s+'형 변이 생물',s+'가 이질적인 마력에 오염·변이된 마수.','세부 출몰 지역 미등록'])];
applyCanon(nations,beasts);
const portraits={
 '아델하이트 폰 드라켄펠스':'adelheid',
 '에델린 폰 드라켄펠스':'edelin',
 '레온하르트 폰 슈바르츠하임':'leonhardt',
 '콘라트 폰 아이젠발트':'konrad',
 '카타리나 바이스':'katarina',
 '이서린':'iseorin',
 '이연화':'iyeonhwa',
 '강철무':'gangcheolmu',
 '설화':'seolhwa',
 '백무진':'baekmujin',
 '윤태겸':'yuntaegyeom',
 '알베르트 에르 엘리시온':'albert',
 '세실리아 에르 엘리시온':'cecilia',
 '리에나 폰 벨로아':'riena',
 '에드윈 폰 아르덴':'edwin',
 '엘라리엘 실베인':'ellariel',
 '테르바인':'tervain',
 '리시에라':'lisiera',
 '아르웬나':'arwenna',
 '라샤':'rasha',
 '레오니스':'leonis',
 '우르간':'urgan',
 '스카디':'skadi',
 '아우렐리아':'aurelia',
 '세라피나':'seraphina',
 '마테오 디 벨몬테':'matteo',
 '이사벨라 디 산크타':'isabella',
 '베아트리체':'beatrice',
 '가브리엘':'gabriel',
 '레베카':'rebecca',
 '카일 로웬':'kyle',
 '발터':'walter',
 '에일린':'aileen'
};
function portrait(p,detail=false){const key=portraits[p[0]];return key?'<img class="'+(detail?'detail-portrait':'card-portrait')+'" src="assets/'+key+'.webp" alt="'+p[0]+'" loading="lazy" decoding="async" width="1632" height="1232">':'';}
const beastArt={'모르가르':'morgar','니플하임':'niflheim','샤이 훌루드':'shai-hulud','바르가노스':'varganos','아퀼라':'aquila','가르마':'garma','스카른':'skarn','두라한':'durahan','그라울':'graul','바르칸':'varkan','카르그':'karg'};
function beastImage(b,detail=false){const key=beastArt[b[0]];return key?'<img class="'+(detail?'detail-portrait':'beast-image')+'" src="assets/'+key+'.webp" alt="'+b[0]+'의 모습" loading="lazy" decoding="async" width="1632" height="1232">':'';}
const $=s=>document.querySelector(s);
function extraNation(n){return '<details class="lore"><summary>주요 지역 · 군사 기록</summary>'+(n.units?'<h3>대표 병종</h3><p>'+n.units+'</p><p>'+n.logistics+'</p><p class="detail-note">병력 수는 전투력과 같지 않습니다. 동원에는 시간·생산·재정·치안 부담이 따릅니다.</p>':'')+'<dl class="regions">'+n.regions.map(r=>'<div><dt>'+r[0]+'</dt><dd>'+r[1]+'</dd></div>').join('')+'</dl></details>';}
let nationIndex=0;
function showNation(i){nationIndex=i;const n=nations[i];document.documentElement.style.setProperty('--accent',n.color);$('#nation-list').innerHTML=nations.map((x,j)=>'<button data-nation="'+j+'" aria-pressed="'+(i===j)+'"><span>0'+(j+1)+'</span>'+x.name+'</button>').join('');const focused=document.activeElement?.dataset?.nation;$('#nation-detail').innerHTML='<div class="nation-banner"><span class="serial" aria-hidden="true">0'+(i+1)+'</span><p class="eyebrow">'+n.english+'</p><h3>'+n.name+'</h3><p class="subtitle">'+n.tag+'</p><p class="description">'+n.desc+'</p></div><dl class="facts"><div><dt>체제</dt><dd>'+n.type+'</dd></div><div><dt>주요 자원 · 기반</dt><dd>'+n.resource+'</dd></div><div><dt>평시 / 최대 총동원</dt><dd>'+n.army+'</dd></div></dl><section class="politics"><h3>국가의 쟁점</h3><p>'+n.politics+'</p></section>'+extraNation(n)+'<div class="roster-heading"><h3>소속 인물</h3><span>'+n.people.length+'명의 인물 기록</span></div><div class="roster">'+n.people.map((p,j)=>'<button class="person-card '+(portraits[p[0]]?'with-portrait':'')+'" data-person="'+j+'">'+portrait(p)+'<span class="person-copy"><small>'+p[1]+'</small><strong>'+p[0]+'</strong><span class="meta">'+p[2]+'세'+(p[4]?' · '+p[4]:'')+'</span><span class="arrow" aria-hidden="true">↗</span></span></button>').join('')+'</div>'+(!n.people.length?'<p class="empty-record">'+(n.id==='kemet'?'멸망한 제국으로, 현존 통치 인물 기록은 없습니다.':'원로원 장로들과 정령궁병단의 개별 인물 기록은 추후 추가됩니다.')+'</p>':'');if(focused!==undefined)document.querySelector('[data-nation="'+focused+'"]').focus();}
function showBeasts(filter='all'){document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.filter===filter));$('#beast-list').innerHTML=beasts.map((b,i)=>({b,i})).filter(({b})=>filter==='all'||b[1]===filter).map(({b,i})=>'<button class="beast-card '+(b[1]==='재해종'?'catastrophe':'')+(beastArt[b[0]]?' with-art':'')+'" data-beast="'+i+'">'+beastImage(b)+'<div class="beast-copy"><span class="beast-type"><span>'+b[1]+'</span><span>NO. '+String(i+1).padStart(2,'0')+'</span></span><h3>'+b[0]+'</h3><p>'+b[2]+'</p><span class="read">기록 열기 ↗</span></div></button>').join('');}
function openDetail(html){$('#detail-body').innerHTML=html;$('#detail-dialog').showModal();}
function route(){const route=location.hash.slice(1).split('/')[0];const active=['home','nations','bestiary'].includes(route)?route:'home';document.querySelectorAll('.view').forEach(v=>v.hidden=v.id!==active);document.body.dataset.view=active;document.querySelectorAll('#menu-dialog nav a').forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=({home:'알데라 대륙경영록',nations:'국가와 인물',bestiary:'마수와 재해종'})[active]+' · 대륙 기록관';window.scrollTo(0,0);}
$('#menu-open').addEventListener('click',()=>$('#menu-dialog').showModal());
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
$('#menu-dialog nav').addEventListener('click',e=>{if(e.target.closest('a'))$('#menu-dialog').close();});
$('#nation-list').addEventListener('click',e=>{const b=e.target.closest('[data-nation]');if(b)showNation(Number(b.dataset.nation));});
$('#nation-detail').addEventListener('click',e=>{const b=e.target.closest('[data-person]');if(!b)return;const n=nations[nationIndex],p=n.people[Number(b.dataset.person)];openDetail(portrait(p,true)+'<p class="eyebrow">'+n.english+' / CHARACTER RECORD</p><h2 id="detail-title">'+p[0]+'</h2><p class="detail-sub">'+p[1]+'</p><dl><div><dt>소속</dt><dd>'+n.name+'</dd></div><div><dt>나이</dt><dd>'+p[2]+'세</dd></div>'+(p[4]?'<div><dt>전투 등급</dt><dd>'+p[4]+'</dd></div>':'')+'</dl><p class="detail-description">'+p[3]+'</p>');});
$('#beast-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)showBeasts(b.dataset.filter);});
$('#beast-list').addEventListener('click',e=>{const t=e.target.closest('[data-beast]');if(!t)return;const b=beasts[Number(t.dataset.beast)],cat=b[1]==='재해종';openDetail(beastImage(b,true)+'<p class="eyebrow">BESTIARY / '+b[1]+'</p><h2 id="detail-title">'+b[0]+'</h2><p class="detail-sub">'+b[2]+'</p><p class="detail-description">'+b[3]+'</p><dl><div><dt>출몰 지역</dt><dd>'+b[4]+'</dd></div><div><dt>'+(cat?'위협 규모':'교감')+'</dt><dd>'+(cat?'도시 · 지역 단위':'교감·테이밍 가능 / 대화 불가')+'</dd></div><div><dt>'+(cat?'대응 원칙':'공통 특징')+'</dt><dd>'+(cat?'정찰 · 대피 · 전문 토벌전력':'검은 경질부 · 연보랏빛')+'</dd></div><div><dt>'+(cat?'분류':'남기는 자원')+'</dt><dd>'+(cat?'재해종':'마석')+'</dd></div></dl>');});
window.addEventListener('hashchange',route);showNation(0);showBeasts();route();
