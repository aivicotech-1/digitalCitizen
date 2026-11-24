// Original topic-specific SVG artwork. Run after editing the illustrations below.
import { mkdir, writeFile } from 'node:fs/promises';
const out = new URL('../assets/activity-art/', import.meta.url);
await mkdir(out, { recursive: true });
const ink = '#29443c', paper = '#faf4e6', green = '#91b49a', blue = '#a9c9d8', gold = '#e5b963', purple = '#b49ac3', coral = '#d68b77';
const r = (x,y,w,h,fill=paper,rx=8) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
const c = (x,y,radius,fill=paper) => `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}"/>`;
const p = (d,fill='none') => `<path d="${d}" fill="${fill}"/>`;
const t = (x,y,value,size=17) => `<text x="${x}" y="${y}" fill="${ink}" stroke="none" font-family="Verdana,Arial,sans-serif" font-size="${size}" font-weight="bold" text-anchor="middle">${value}</text>`;
const g = (x,y,s,body,angle=0) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(${angle})">${body}</g>`;
const tick = (x,y,s=1) => g(x,y,s,p('M-10 0l7 7 14-16'));
const person = (x,y,fill=green,s=1) => g(x,y,s,c(0,-15,11,fill)+p('M-20 25v-9a20 20 0 0 1 40 0v9Z',fill));
const lock = (x,y,s=1,fill=gold) => g(x,y,s,p('M-15-4v-17a15 15 0 0 1 30 0v17')+r(-24,-5,48,40,fill)+c(0,10,4,ink)+p('M0 14v8'));
const mail = (x,y,s=1,fill=paper) => g(x,y,s,r(-42,-28,84,56,fill)+p('M-39-24 0 6 39-24M-39 24l26-21m52 21L13 3'));
const lens = (x,y,s=1) => g(x,y,s,p('M22 22l23 26')+c(0,0,30,blue)+c(0,0,21,paper)+p('M-12-7q5-9 15-7'));
const phone = (x,y,s=1) => g(x,y,s,r(-35,-67,70,134,ink,13)+r(-28,-55,56,107,paper,5)+p('M-8-61H8')+c(0,59,3,paper));
const screen = (x,y,s=1,fill=blue) => g(x,y,s,r(-59,-42,118,76,paper)+r(-50,-33,100,57,fill,3)+p('M-16 35v15m32-15v15m-46 0h60'));
const bubble = (x,y,w,h,fill=paper) => p(`M${x+8} ${y}h${w-16}q8 0 8 8v${h-16}q0 8-8 8h-${w/3}l-18 16v-16H${x+8}q-8 0-8-8V${y+8}q0-8 8-8Z`,fill);
const photo = (x,y,s=1) => g(x,y,s,r(-48,-40,96,80,paper,5)+r(-39,-31,78,57,blue,1)+c(20,-15,8,gold)+p('M-39 26-13-8 8 16 20 3 39 26Z',green));
const spark = (x,y,s=1) => g(x,y,s,`<path d="M0-11 3-3 11 0 3 3 0 11-3 3-11 0-3-3Z" fill="${gold}" stroke="none"/>`);
const scenes = {
  'malware-lab': screen(110,113,1.05,purple)+p('M208 47h38m-29 0v48l-29 65q-7 18 11 18h56q18 0 11-18l-29-65V47',paper)+p('M202 130h49l15 30q7 18-11 18h-56q-18 0-11-18Z',green)+c(224,149,11,coral)+p('M224 130v8m0 22v8m-19-19h8m22 0h8')+c(106,100,17,gold)+p('M96 100h20m-10-10v20'),
  'phone-security-checkup': phone(131,113,1.08)+c(131,88,22,green)+tick(131,88)+p('M112 127h38m-38 14h28')+g(225,134,1,r(-33,-42,66,91,paper)+r(-15,-50,30,16,blue)+[0,24].map(y=>tick(-14,y,.6)+p(`M1 ${y}h17`)).join(''))+spark(210,57),
  'account-rescue': c(160,112,69,coral)+c(160,112,39,paper)+p('M111 63l21 21m56 56 21 21M111 161l21-21m56-56 21-21')+person(160,111,blue,.8)+g(240,153,.8,c(0,0,17,gold)+p('M-13 12l-32 33m7-7 9 9m1-19 9 9'))+spark(67,61),
  'hotspot-hunter': r(83,125,151,51,blue)+p('M99 125V96m119 29V96')+c(106,151,5,green)+c(125,151,5,gold)+p('M143 151h64M106 67q54-43 108 0m-90 19q36-30 72 0m-53 18q17-14 34 0')+lens(237,101,.7)+c(160,114,4,ink),
  'cyber-shield-challenge': p('M160 37q29 23 60 23v51q0 44-60 71-60-27-60-71V60q31 0 60-23Z',green)+p('M160 70l10 22 25 3-18 17 4 25-21-12-21 12 4-25-18-17 25-3Z',gold)+person(69,153,blue,.8)+person(251,153,purple,.8)+p('M88 165l20-8m104 0 20 8'),
  'my-balanced-day': r(76,46,128,126)+r(76,46,128,26,green)+p('M104 38v17m72-17v17M91 88h97M91 110h97M91 132h60')+c(216,144,38,gold)+p('M216 120v25l17 10')+tick(104,98,.6)+tick(104,120,.6),
  'pop-up-safety-simulator': screen(146,120,1.3)+g(199,94,1,r(-48,-35,96,75,gold)+p('M-48-14H48M29-28l11 11m0-11L29-17')+p('M0-3v20')+c(0,26,2,ink))+g(91,166,1,p('M0 0v-38q0-8 7-8t7 8v19l10-10q6-5 11 2l7 20-10 23Z',coral)),
  'smart-tech-habits-quiz': r(90,48,135,132)+r(122,38,70,22,gold)+[87,117,147].map(y=>r(106,y-10,18,18,green,3)+tick(115,y,.6)+p(`M139 ${y}h64`)).join('')+c(237,72,25,blue)+t(237,80,'?',25),
  'info-sorter': r(54,132,62,53,green)+r(129,132,62,53,gold)+r(204,132,62,53,coral)+g(108,80,1,r(-27,-28,54,46)+person(0,0,blue,.55),-12)+g(201,74,1,r(-27,-28,54,46)+t(0,3,'@',22),12)+p('M103 106l-19 16m75-28v28m42-16 28 16')+tick(84,159)+t(160,168,'?',24)+p('M225 150l19 19m0-19-19 19'),
  'share-circles': c(160,115,78,blue)+c(160,115,52,green)+c(160,115,26,paper)+person(160,112,gold,.65)+person(90,74,purple,.65)+person(220,76,coral,.65)+person(214,164,gold,.65)+p('M133 101l-24-13m77 14 20-14m-22 45 19 18'),
  'safe-username-maker': g(154,111,1,r(-83,-51,166,102)+c(-44,-8,23,blue)+person(-44,-10,green,.7)+t(23,-10,'@',25)+p('M-5 12h68m-68 16h46'),-5)+g(231,148,1,p('M-22 21 20-22 31-11-11 32-25 35Z',gold)+p('M14-16 25-5')),
  'password-lab': p('M119 45h46m-37 0v48l-39 66q-9 20 13 20h80q22 0 13-20l-39-66V45',paper)+p('M108 126h68l19 33q9 20-13 20h-80q-22 0-13-20Z',green)+c(125,147,6,gold)+c(158,160,8,blue)+c(145,115,4,purple)+g(211,77,1,r(-26,-24,52,45,purple)+t(0,6,'#',24),10)+g(72,94,1,r(-22,-21,44,42,gold)+t(0,7,'A',22),-12),
  'account-guard': r(63,69,146,101)+person(100,115,blue,.85)+p('M133 101h56m-56 19h39m-39 19h30')+p('M225 74l37 15v38q-2 33-37 51-35-18-37-51V89Z',green)+tick(225,124,1.5),
  'photo-clue-detective': photo(144,113,1.55)+g(208,150,1.1,lens(0,0,.9))+p('M110 92h27v25h-27Z',gold)+t(123,110,'?',15)+spark(67,70),
  'post-or-pause': r(71,54,105,126)+r(84,68,79,53,blue)+p('M90 138h65m-65 17h43')+p('M102 104 119 84 139 104Z',green)+c(219,128,44,gold)+r(199,106,12,44,ink,3)+r(227,106,12,44,ink,3),
  'privacy-champion-quiz': p('M127 52h66v45q0 40-33 43-33-3-33-43ZM127 63H99v21q0 31 32 31m62-52h28v21q0 31-32 31M160 140v27m-31 10h62',gold)+r(125,168,70,16,green,4)+lock(160,88,.55,paper)+p('M116 40l-9-13m97 13 9-13'),
  'cool-it-down': bubble(64,70,126,67,blue)+p('M84 94h83m-83 16h58')+g(225,114,1,p('M-12 32V-51a12 12 0 0 1 24 0v83a24 24 0 1 1-24 0Z',paper)+p('M0-10v61')+c(0,53,13,blue)+p('M20-33h12m-12 24h12m-12 24h12'))+p('M119 155v20m-10-10 10 10 10-10'),
  'message-makeover-studio': bubble(51,54,114,62,coral)+p('M70 78h73m-73 15h42')+bubble(164,121,105,55,green)+tick(214,146)+p('M112 143q-6 31 35 27m-8-10 9 10-11 7')+g(217,73,.9,p('M-29 18 18-29 30-17-17 30-32 33Z',gold)+p('M13-24 25-12')),
  'group-chat-sandbox': bubble(99,52,119,65,paper)+c(128,83,5,green)+c(158,83,5,gold)+c(188,83,5,purple)+person(78,151,green)+person(160,164,blue)+person(242,151,purple)+p('M92 123l21-18m94 0 21 18'),
  'sort-it-board': r(53,49,214,127)+p('M124 49v127m72-127v127M53 78h214')+c(88,64,7,green)+c(160,64,7,gold)+c(231,64,7,coral)+r(65,92,47,25,green,3)+r(136,128,47,25,gold,3)+r(207,92,47,25,coral,3)+p('M73 103h29m43 37h28m-28-29 9 9 16-15'),
  'red-flag-detective': bubble(63,76,137,83,paper)+p('M82 101h92m-92 17h65m-65 17h82')+p('M214 184V45m0 3 58 13-20 23 20 17-58-10Z',coral)+c(122,118,27,'none')+p('M140 140l24 25'),
  'encryption-machine': r(96,82,128,94,green)+r(111,97,98,31,paper)+t(160,119,'A → D',18)+c(122,149,7,gold)+c(197,149,7,blue)+r(122,42,76,40,paper,3)+t(160,68,'ABC',18)+p('M98 111H54v39h31m140-39h28v39h-28')+lock(254,65,.65),
  'decoder-machine': c(150,113,74,blue)+c(150,113,51,paper)+c(150,113,25,gold)+t(150,120,'A',22)+t(150,59,'D')+t(206,119,'E')+t(150,177,'F')+t(94,119,'G')+p('M150 76v12m-37 25h13m61 0h-13m-24 37v-13')+g(232,146,1,r(-28,-24,56,48,green)+t(0,6,'ABC',15),9),
  'cyber-castle': p('M75 181V78h22V52h23v26h23V48h34v30h23V52h23v26h22v103Z',blue)+p('M138 181v-39a22 22 0 0 1 44 0v39Z',paper)+p('M92 103h12v20H92Zm124 0h12v20h-12Z',gold)+p('M160 48V24l39 10-39 10',green)+lock(160,150,.5),
  'virus-outbreak': p('M99 78l61 53 65-53m-65 53v44')+screen(83,71,.65)+screen(237,71,.65)+screen(160,165,.65)+c(160,109,27,coral)+[0,60,120,180,240,300].map(a=>g(160,109,1,p('M0-28v-10m-6 0h12'),a)).join('')+c(151,105,3,ink)+c(170,105,3,ink)+p('M151 121q9-8 18 0'),
  'url-detective': r(53,60,211,109,paper)+r(53,60,211,29,blue)+c(68,74,3,ink)+c(80,74,3,ink)+p('M98 74h147')+t(141,124,'www.',24)+p('M78 144h101')+lens(224,143,.9),
  'beat-the-trickster': g(158,108,1,p('M-70-38q70-30 140 0l-10 57q-20 58-60 42-40 16-60-42Z',purple)+p('M-52-12q18-17 34 0-16 19-34 0Zm70 0q18-17 34 0-16 19-34 0Z',paper)+p('M-26 28q26 19 52 0'))+p('M225 146l34-49 8 14-32 44Z',gold)+c(76,54,18,gold)+t(76,61,'!',22),
  'app-permission-checker': phone(119,114,.95)+r(98,67,42,35,blue)+c(119,83,10,paper)+r(181,65,71,108,green)+[84,116,148].map((y,i)=>r(192,y-9,16,16,paper,3)+(i===1?p(`M195 ${y-5}l10 10m0-10-10 10`):tick(201,y,.6))+p(`M219 ${y}h19`)).join(''),
  'password-cracker': r(57,59,153,60,paper)+t(134,99,'• • • •',24)+r(70,135,127,38,purple)+t(133,160,'1 2 3 ?',19)+g(231,114,1,p('M-20 45 8-18 24-10-4 52Z',gold)+p('M-17-21 25-35 42-12 0 4Z',blue),12)+p('M202 63l16 4m-17-21 14 12'),
  'two-step-login': screen(110,115,1.05)+lock(110,103,.6)+phone(234,113,.85)+t(234,112,'6 2 9',13)+tick(234,143,.7)+p('M173 103h21m-9-8 9 8-9 8')+c(71,58,15,gold)+t(71,64,'1',16)+c(261,57,15,green)+t(261,63,'2',16),
  'network-explorer': p('M76 113h68m32 0h68M160 90V57m0 79v35')+screen(64,119,.6)+screen(256,119,.6)+r(133,90,54,43,green)+p('M141 81V67m38 14V67')+c(145,113,3,gold)+c(159,113,3,gold)+mail(160,47,.55)+r(139,167,43,25,blue)+p('M146 179h28')+p('M103 100l9 9-9 9m104-18 9 9-9 9'),
  'photo-edit-lab': g(100,112,1.05,photo(0,0,1),-9)+g(219,115,1.05,photo(0,0,1),9)+p('M159 67v107')+g(228,163,1,p('M-33 11 19-40 31-28-21 24Z',gold)+p('M-21 24q-10 21-25 13 12-2 13-26Z',purple))+spark(231,53),
  'rumour-spread-simulator': p('M98 111l58-48m-58 48 58 48m0-96 66 21m-66-21 66 80m-66 16 66-16')+bubble(48,85,70,46,gold)+t(83,115,'?',24)+person(164,60,green,.65)+person(164,160,blue,.65)+person(238,81,purple,.65)+person(238,151,coral,.65)+p('M109 69l14-14m-13 103 14 13'),
  'cyber-crime-scene': r(55,46,211,133,gold)+r(70,62,58,46,paper,2)+r(164,63,73,39,blue,2)+r(101,127,63,37,paper,2)+r(199,128,47,37,green,2)+p('M99 85l102-3-69 63 91 1')+c(99,85,4,coral)+c(201,82,4,coral)+c(132,145,4,coral)+c(223,146,4,coral)+lens(249,169,.55),
  'cyber-defence-hq': screen(160,105,1.45,green)+c(160,94,36,'none')+c(160,94,21,'none')+p('M160 58v36l30-20M124 94h72m-36 0v36')+c(147,79,4,gold)+c(178,103,4,coral)+r(91,171,138,21,paper,4)+p('M105 181h22m14 0h22m14 0h22')+spark(259,56),
  'inbox-inspector': r(68,93,184,84,blue)+p('M68 136h48l14 19h60l14-19h48')+g(160,78,1.05,mail(0,0,1,paper),-8)+c(241,151,25,green)+tick(241,151,1.2),
  'phone-trap': phone(148,116,1)+bubble(119,83,70,45,gold)+t(154,112,'!',23)+p('M215 43v53q0 24 22 24t22-24v-6m-13 5 13-5-2 14')+p('M224 59h-18m6-12 10 21')+c(89,154,22,coral)+p('M79 144l20 20m0-20-20 20'),
  'file-inspector': p('M58 81V61q0-9 9-9h62l17 20h107v103H58Z',gold)+p('M58 94h203l-15 81H58Z',paper)+g(154,94,1,p('M-30-45h39l21 21v67h-60Z',blue)+p('M9-45v21h21')+t(0,10,'.exe',15))+lens(222,146,.83),
  'firewall-gatekeeper': r(109,50,104,133,coral,2)+p('M109 78h104m-104 28h104m-104 28h104m-104 28h104M143 50v28m36 0v28m-36 0v28m36 0v28m-36 0v21')+p('M146 183v-53q0-24 29-24t29 24v53Z',paper)+p('M47 89h48m-10-10 10 10-10 10M226 139h43m-10-10 10 10-10 10')+c(66,149,17,green)+tick(66,149,.8)+c(250,75,17,gold)+t(250,81,'!',18),
  'ransomware-outbreak': screen(120,108,1.2,coral)+lock(120,96,.9,paper)+r(215,121,48,58,blue)+p('M226 135h26m-26 13h26')+c(239,165,3,green)+p('M190 98q49-4 49 17m-9-6 9 7 9-7M84 171l-11 16m27-13-4 18')+spark(239,63),
  'incident-room': r(69,43,180,113,paper)+p('M69 72h180')+r(84,86,35,23,green,3)+r(141,86,35,23,gold,3)+r(198,86,35,23,blue,3)+p('M119 97h22m35 0h22M158 109v27h-39m39 0h40')+person(86,165,green,.72)+person(160,173,purple,.72)+person(234,165,blue,.72)+r(58,186,205,12,gold,4)
};
for (const [id, scene] of Object.entries(scenes)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><ellipse cx="160" cy="192" rx="102" ry="8" fill="${ink}" opacity=".1"/><g stroke="${ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${spark(42,112,.7)}${spark(282,146,.8)}${scene}</g></svg>\n`;
  await writeFile(new URL(`${id}.svg`, out), svg);
}
console.log(`Built ${Object.keys(scenes).length} distinct activity illustrations.`);
