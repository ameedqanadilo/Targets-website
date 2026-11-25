// ===== W7 week (26/11–2/12/2026): NEW style (dark/red motion), CLASSIC style (old W1–W6 light app + stickers), MIX =====
const TA={...T.ar,trial:'تجربة مجانية',wa:'عالواتساب',ctaBtn:'ابعتلنا كلمة «جرّب»'};
const step=(n,txt)=>el(330,`<div class="big" style="color:#fff">${n}</div>`,0,'zoom')+el(700,`<div class="title m">${txt}</div>`,0.35,'up');
const KB=`<div class="kb"><div>${'ض ص ث ق ف غ ع ه خ'.split(' ').map(c=>`<span>${c}</span>`).join('')}</div><div>${'ش س ي ب ل ا ت ن م'.split(' ').map(c=>`<span>${c}</span>`).join('')}</div></div>`;
const APP=(name,st,inner,o={})=>`<div class="app" data-t="${o.t||0}" data-k="up"><div class="sb"><span>${o.time||'21:40'}</span><span>●●● 4G</span></div><div class="ah"><div class="av">${o.av||(name==='متجرك'?'🛍️':'🙂')}</div><div><div class="nm">${name}</div><div class="st">${st}</div></div></div><div class="chat" style="flex:1">${inner}</div>${o.kb?KB:''}</div>`;
const STK=(top,a,b,t,s='')=>el(top,`<div style="text-align:center">${a?`<div class="stk ${s}">${a}</div>`:''}${b?`<br><div class="stkr ${s}">${b}</div>`:''}</div>`,t,'pop');
const REHK=(top,a,t=0.1,o=2.0)=>`<div class="el" style="top:${top}px" data-t="${t}" data-k="pop" data-o="${o}"><div style="text-align:center"><div class="stkr">${a}</div></div></div>`;
const NOTE=(top,t=0.3)=>el(top,`<div style="text-align:center"><span class="notep">* مثال توضيحي</span></div>`,t);
const ASK=(s,a,b,bg='bg-dark')=>({s,e:s+2.6,bg,html:el(560,`<div class="title m">${a}</div>`,0)+el(820,`<div class="title s"><span class="${bg==='bg-red'?'hlw':'hl'}">${b}</span></div>`,0.5,'zoom')});
const REHOOK=(s,a='بدك تشوف كيف بيرد؟',b='شوف كيف بيرد 👇')=>({s,e:s+2.6,bg:'bg-red',html:el(600,`<div class="title m">${a}</div>`,0)+el(880,`<div class="title"><span class="hlw">${b}</span></div>`,0.6,'zoom')});
const CTA=s=>({s,e:s+3.6,bg:'bg-dark',html:el(330,`<div class="title s">TARGETS بتركّبلك الرد الآلي على صفحتك</div>`,0)+el(620,`<div style="text-align:center"><span class="pill" style="font-size:40px">تجربة مجانية</span></div>`,0.3,'pop')+el(900,`<div class="cta"><i>💬</i>ابعتلنا كلمة «جرّب»</div><div class="note" style="margin-top:26px">عالواتساب</div>`,0.6,'pulse')});
const BOT=T.ar.bot;

Object.assign(REELS,{
 // ---------- NEW style (content-team W7 samples + 2 more) ----------
 'W7-TRY-RACE':L=>{L=TA;return{ltr:false,dur:15.1,scenes:[
  {s:0,e:2.6,html:
   el(220,`<div class="title m">الزبون بعت لـ3 محلات…</div>`,0,'up')+
   el(450,`<div class="title"><span class="hl">مين ردّ أول؟</span></div>`,0.3,'zoom')+
   notif(780,'محل 1: كم السعر؟',0.5,L)+notif(1000,'محل 2: كم السعر؟',0.7,L)+notif(1220,'محل 3: كم السعر؟',0.9,L)+
   el(1480,`<div class="note">${L.ex}</div>`,0.5)},
  {s:2.6,e:7.6,html:
   el(200,`<div class="title s">النتيجة:</div>`,0)+
   el(470,`<div class="notif"><i>1</i><div><div class="t">محل 1</div><div class="m">ردّ بعد 3 ساعات ❌</div></div></div>`,0.4,'side')+
   el(720,`<div class="notif"><i>2</i><div><div class="t">محل 2</div><div class="m">ما ردّ أبداً ❌</div></div></div>`,1.1,'side')+
   el(970,`<div class="notif" style="background:rgba(37,211,102,.25);border-color:#25D366"><i style="background:#25D366">3</i><div><div class="t">محل 3 · ${L.bot}</div><div class="m">ردّ بثواني ✅</div></div></div>`,1.8,'side')+
   el(1260,`<div class="title s"><span class="hl">وصار أقرب يشتري منه 🛍️</span></div>`,2.8,'pop')+
   el(1560,`<div class="note">${L.ex}</div>`,0.4)},
  REHOOK(7.6),CTA(10.2),endCard(13.8)]}},

 'W7-AB-PRICE':L=>{L=TA;return{ltr:false,dur:14.7,scenes:[
  {s:0,e:2.6,html:
   notif(260,'تعليق جديد: بكم؟',0.1,L)+
   el(560,`<div class="title m">«السعر عالخاص»…</div>`,0.3,'up')+
   el(820,`<div class="title"><span class="hl">ولا تكتب السعر؟</span></div>`,0.7,'zoom')},
  {s:2.6,e:7.4,html:
   `<div class="mini" style="top:190px;height:720px" data-t="0" data-k="up"><div class="lbl" style="background:#5a5a5a">A · «السعر عالخاص»</div><div class="chat">`+
     B('in','بكم؟',0.3,'')+B('out no','بعتنالك السعر عالخاص 📩',0.9,'')+B('in','…ما فتح الخاص 🤷',1.8,'')+`</div></div>`+
   `<div class="mini" style="top:970px;height:720px" data-t="0.2" data-k="up"><div class="lbl" style="background:#0a8f4a">B · السعر واضح</div><div class="chat">`+
     B('in','بكم؟',0.5,'')+B('out','25$ والتوصيل خلال يومين 🚚',1.1,'')+B('in','بدي واحد 🙏',2.0,'')+`</div></div>`+
   el(1760,`<div class="note">${L.ex}</div>`,0.4)},
  {s:7.4,e:10.6,bg:'bg-red',html:
   el(480,`<div class="title m">هون الفرق اللي بيبيع 👇</div>`,0)+
   el(720,`<div class="title s">الزبون بدّه يعرف السعر بسرعة.</div>`,0.5,'up')+
   el(1020,`<div class="title s"><span class="hlw">سعرك منافس؟ اكتبه.</span></div>`,1.3,'pop')},
  ASK(10.6,'إنت شو بتفضّل؟','واضح ولا عالخاص؟ 👇'),
  endCard(13.4)]}},

 'W7-FIRST-WEEK':L=>{L=TA;return{ltr:false,dur:14.9,scenes:[
  ASK(0,'أول إعلان إلك؟','لا تحرق ميزانيتك 🔥'),
  {s:2.6,e:5.6,bg:'bg-red',html:step('1','جهّز 2–3 أفكار مختلفة للإعلان')},
  {s:5.6,e:8.3,html:step('2','ميزانية صغيرة لكل فكرة… وخلّيهم يشتغلوا كم يوم')},
  {s:8.3,e:11.3,bg:'bg-red',html:el(200,`<div class="title s">هون أغلب الناس بتحرق الميزانية 👇</div>`,0,'pop')+step('3','بآخر الأسبوع: خلّي الأحسن ووقّف الباقي')},
  {s:11.3,e:13.6,html:el(480,`<div class="title m">أسبوع صبر…</div>`,0)+el(720,`<div class="title s"><span class="hl">ممكن يوفّر عليك كتير تخمين</span></div>`,0.4,'zoom')+el(1080,`<div class="title s">احفظ الفيديو لأول إعلان 📌</div>`,0.9,'pop')},
  endCard(13.6)]}},

 'W7-BLACK-FRIDAY':L=>{L=TA;return{ltr:false,dur:14.9,scenes:[
  ASK(0,'الجمعة السوداء بكرا…','إعلانك جاهز؟ ⏰'),
  {s:2.6,e:5.4,bg:'bg-red',html:step('1','العرض بجملة وحدة: قديش الخصم وعلى شو')},
  {s:5.4,e:8.2,html:step('2','موعد انتهاء حقيقي ومكتوب بالإعلان')},
  {s:8.2,e:11.2,bg:'bg-red',html:el(200,`<div class="title s">هون أغلب العروض بتخسر 👇</div>`,0,'pop')+step('3','جهّز ردود الرسائل قبل ما تنزّل الإعلان')},
  {s:11.2,e:13.6,html:el(480,`<div class="title m">العرض بيجيب رسائل…</div>`,0)+el(720,`<div class="title s"><span class="hl">والرد السريع بيجيب البيعة</span></div>`,0.4,'zoom')+el(1080,`<div class="title s">احفظ الفيديو لعرضك 📌</div>`,0.9,'pop')},
  endCard(13.6)]}},

 'W7-HOOK-3SEC':L=>{L=TA;return{ltr:false,dur:14.3,scenes:[
  ASK(0,'أول 3 ثواني بفيديوك…','شو بيشوف الزبون؟ 👀'),
  {s:2.6,e:7.4,html:
   `<div class="mini" style="top:190px;height:720px" data-t="0" data-k="up"><div class="lbl" style="background:#5a5a5a">A · بلّش بالسلام</div><div class="chat">`+
     B('out no','مرحبا متابعينا الكرام، اليوم رح نحكيلكم عن…',0.3,'')+B('in','👆 قلّب',1.6,'')+`</div></div>`+
   `<div class="mini" style="top:970px;height:720px" data-t="0.2" data-k="up"><div class="lbl" style="background:#0a8f4a">B · بلّش بالمشكلة</div><div class="chat">`+
     B('out','جاكيتك ما بيدفّي بالشتا؟ شوف هاد 👇',0.6,'')+B('in','👀 كمّل للآخر',1.9,'')+`</div></div>`+
   el(1760,`<div class="note">${L.ex}</div>`,0.4)},
  {s:7.4,e:10.4,bg:'bg-red',html:el(520,`<div class="title m">هون الفرق اللي بيخلّيهم يكمّلوا 👇</div>`,0)+el(780,`<div class="title s"><span class="hlw">ابدأ بالمشكلة… مش بالسلام</span></div>`,0.5,'zoom')},
  ASK(10.4,'آخر فيديو إلك بلّش بشو؟','اكتبلنا أول جملة 👇'),
  endCard(13)]}},

 // ---------- CLASSIC style (old look: light app screens + sticker headlines) ----------
 'W7-LAST-PRICE':L=>{L=TA;return{ltr:false,dur:15.9,scenes:[
  {s:0,e:3.2,bg:'bg-app',html:APP('زبونة','متصلة الآن',B('in','حلو كتير 😍 آخر سعر؟',0.3,'21:39'),{kb:true})+STK(1050,'الزبونة: «آخر سعر؟»','شو بترد؟',0.6)},
  {s:3.2,e:7.4,bg:'bg-app',html:APP('زبونة','متصلة الآن',B('in','آخر سعر؟',0,'21:39')+B('out no','هاد آخر سعر.',0.4,'21:40')+B('in','طيب، شكراً',1.3,'21:41'))+STK(1250,'ردّ زي هيك…','بيسكّر المحادثة ❌',2.0)+NOTE(1760)},
  {s:7.4,e:12,bg:'bg-app',html:APP('زبونة','متصلة الآن',B('in','آخر سعر؟',0,'21:39')+B('out','السعر 85₪ وشامل التوصيل 🚚 وإذا أخدتي قطعتين في هدية صغيرة معهم 🎁',0.4,'21:40')+B('in','تمام، بدي قطعتين 😍',1.8,'21:41'))+STK(1250,'وضّح شو بتاخد بالسعر','واعرض إشي زيادة ✅',2.4,'s')+NOTE(1760)+REHK(900,'الرد هون بيفرق 👇')},
  ASK(12,'وإنت شو بترد؟','اكتبلنا ردك بالتعليقات 👇'),
  endCard(14.6)]}},

 'W7-STORY-POLL':L=>{L=TA;return{ltr:false,dur:16.5,scenes:[
  {s:0,e:3,bg:'bg-app',html:`<div class="story"></div>`+el(560,`<div class="prodcard">👗</div>`,0,'zoom')+STK(170,'ستوري كلها صور منتجات…','والردود صفر؟',0.4)+NOTE(1300)},
  {s:3,e:8,bg:'bg-app',html:`<div class="story"></div>`+el(330,`<div class="prodcard" style="width:480px;height:480px;font-size:230px">👗</div>`,0,'up')+
   el(900,`<div class="poll"><div class="q">أي لون بتحبي أكثر؟</div><div class="o"><div>الأسود 🖤</div><div>البيج 🤍</div></div></div>`,0.8,'pop')+
   el(1130,`<div class="hand" style="left:650px">👆</div>`,1.8,'up')+STK(1400,'سؤال واحد بالستوري','بيفتح الحكي ✅',2.4)},
  {s:8,e:12.6,bg:'bg-app',html:APP('زبونة','رسالة جديدة',B('in','صوّتت للبيج 😍 في مقاس M؟',0.3,'20:12')+B('out','أكيد! بنحجزلك واحد؟',1.3,'20:13'))+STK(1250,'كل تصويت','ممكن يصير محادثة',1.9)+NOTE(1760)+REHK(900,'مش كل ستوري لازم تبيع…')},
  ASK(12.6,'جرّب اليوم: ستوري فيها سؤال','احفظ الفيديو لتتذكر 📌'),
  endCard(15.2)]}},

 'W7-CAPTION':L=>{L=TA;return{ltr:false,dur:15.3,scenes:[
  {s:0,e:3,bg:'bg-desk',html:STK(170,'الناس بتقرأ أول سطر…','وبتقلّب 👆',0.4)+el(640,`<div class="cap">صباح الخير متابعينا الكرام 🌸 نتمنى لكم يوماً سعيداً… <span class="dim">المزيد</span></div>`,0.2,'up')},
  {s:3,e:7.5,bg:'bg-desk',html:STK(170,'أول 5 كلمات','قول شو بتبيع',0.2)+el(640,`<div class="cap"><b>جاكيت شتوي دافي بـ120₪</b> — 3 ألوان والتوصيل لكل المناطق <span class="dim">المزيد</span></div>`,0.6,'up')+NOTE(1100,0.8)},
  {s:7.5,e:11.5,bg:'bg-desk',html:STK(170,'أول سطر مش واضح؟','خسرت القراءة 👇',0,'xs')+
   el(560,`<div class="notif" style="background:#fff;color:#111"><i>1</i><div><div class="m">شو المنتج</div></div></div>`,0.4,'side')+
   el(800,`<div class="notif" style="background:#fff;color:#111"><i>2</i><div><div class="m">السعر أو الفايدة</div></div></div>`,1.1,'side')+
   el(1040,`<div class="notif" style="background:#fff;color:#111"><i>3</i><div><div class="m">سؤال بالآخر</div></div></div>`,1.8,'side')},
  ASK(11.5,'افتح آخر بوست إلك…','أول سطر بيحكي شو بتبيع؟','bg-red'),
  endCard(14)]}},

 'W7-ORDER-CONFIRM':L=>{L=TA;return{ltr:false,dur:15.8,scenes:[
  {s:0,e:3,bg:'bg-app',html:APP('زبون','متصل الآن',B('in','تمام، بدي واحد 👍',0.3,'18:02'),{kb:true})+STK(1050,'الزبون طلب…','وبعدين ولا كلمة؟',0.6)},
  {s:3,e:7.5,bg:'bg-app',html:APP('زبون','آخر ظهور أمس',B('in','تمام، بدي واحد 👍',0,'الأحد')+B('in','طيب وصل الطلب؟ 🤔',0.8,'الثلاثاء')+B('in','خلص، لغيه',2.0,'الثلاثاء'))+STK(1250,'يومين بدون تأكيد','الزبون بيقلق وبيلغي ❌',2.4,'s')+NOTE(1760)},
  {s:7.5,e:12.4,bg:'bg-app',html:APP('زبون','متصل الآن',B('in','تمام، بدي واحد 👍',0,'18:02')+B('out','تم ✅ طلبك: جاكيت كحلي M — 120₪ — التوصيل الخميس 🚚',0.5,'18:03')+B('in','يسلمو 🙏',1.6,'18:03'))+STK(1250,'رسالة تأكيد وحدة','بتريّح الزبون ✅',2.0)+NOTE(1760)+REHK(900,'هون الفرق 👇')},
  ASK(12.4,'عندك رسالة تأكيد جاهزة؟','اكتب «آه» أو «لا» 👇'),
  endCard(14.5)]}},

 'W7-WA-LINK':L=>{L=TA;return{ltr:false,dur:15.3,scenes:[
  {s:0,e:3,bg:'bg-desk',html:STK(170,'رقم واتساب بالبايو…','لازم الزبون ينسخه؟',0.4)+el(640,`<div class="cap">👗 ملابس نسائية<br>📍 نابلس<br>للطلب: 0599 123 456</div>`,0.2,'up')+NOTE(1150,0.6)},
  {s:3,e:7.5,bg:'bg-desk',html:STK(170,'4 خطوات…','وبالنص بيطلع ❌',0)+
   el(560,`<div class="notif" style="background:#fff;color:#111"><i>1</i><div><div class="m">ينسخ الرقم</div></div></div>`,0.3,'side')+
   el(760,`<div class="notif" style="background:#fff;color:#111"><i>2</i><div><div class="m">يحفظه بجهات الاتصال</div></div></div>`,0.8,'side')+
   el(960,`<div class="notif" style="background:#fff;color:#111"><i>3</i><div><div class="m">يفتح واتساب</div></div></div>`,1.3,'side')+
   el(1160,`<div class="notif" style="background:#fff;color:#111"><i>4</i><div><div class="m">يدوّر عليك…</div></div></div>`,1.8,'side')},
  {s:7.5,e:11.5,bg:'bg-desk',html:STK(170,'الحل؟ رابط واتساب مباشر','كبسة وحدة ✅',0.2,'s')+el(640,`<div class="cap">👗 ملابس نسائية<br>📍 نابلس<br>للطلب واتساب 👇<br><b>wa.me/970599123456</b></div>`,0.4,'up')+el(1080,`<div class="hand" style="left:430px">👆</div>`,1.2,'up')+NOTE(1500,0.6)},
  ASK(11.5,'بايو صفحتك فيه رابط ولا رقم؟','احكيلنا بالتعليقات 👇','bg-red'),
  endCard(14)]}},

 // ---------- MIX (new hook/re-hook/CTA + classic app scene) — auto-reply ----------
 'W7-NIGHT-ORDER':L=>{L=TA;return{ltr:false,dur:15.5,scenes:[
  {s:0,e:2.6,html:el(220,`<div class="title m">الساعة 2 بالليل…</div>`,0)+el(450,`<div class="title"><span class="hl">زباين عم يبعتولك</span></div>`,0.3,'zoom')+
   notif(780,'في توصيل لرام الله؟',0.5,L)+notif(1000,'كم سعره؟',0.7,L)+notif(1220,'متوفر أسود؟',0.9,L)+el(1480,`<div class="note">${L.ex}</div>`,0.5)},
  {s:2.6,e:8,bg:'bg-app',html:APP('متجرك','⚡ الرد الآلي شغّال',
    B('in','في توصيل لرام الله؟',0.3,'02:04')+B('out','أكيد 🚚 التوصيل لرام الله خلال يومين. بتحب أسجّلك الطلب؟',0.9,'02:04',BOT)+B('in','آه 🙏',2.0,'02:05')+B('out','تم ✅ وصاحب المحل بيأكدلك الصبح',2.6,'02:05',BOT),{time:'02:05'})+STK(1430,'وإنت نايم','الطلب انسجّل ✅',3.4)+NOTE(1760)},
  REHOOK(8,'الرسائل ما بتستنى الصبح…','شوف كيف بيرد 👇'),CTA(10.6),endCard(14.2)]}},

 'W7-PHOTO-ASK':L=>{L=TA;return{ltr:false,dur:15.5,scenes:[
  ASK(0,'الزبون بعت صورة وكود…','«في منه؟» 📸'),
  {s:2.6,e:8,bg:'bg-app',html:APP('متجرك','⚡ الرد الآلي شغّال',
    `<div class="b in" data-t="0.3" data-k="pop"><div style="font-size:200px;text-align:center;background:#f3f3f3;border-radius:20px">👟</div>في منه؟ كود 214<small>17:20</small></div>`+
    B('out','أهلين 😍 كود 214 متوفر بالأبيض والأسود. شو مقاسك؟',1.1,'17:20',BOT)+B('in','42',2.2,'17:21')+B('out','تمام ✅ بحجزلك واحد؟',2.8,'17:21',BOT))+STK(1450,'سأل عن المقاس','وكمّل البيعة ✅',3.4)+NOTE(1760)},
  REHOOK(8),CTA(10.6),endCard(14.2)]}},

 'W7-ANGRY-HANDOFF':L=>{L=TA;return{ltr:false,dur:15.5,scenes:[
  ASK(0,'زبون معصّب…','الرد الآلي شو بيعمل؟ 😬'),
  {s:2.6,e:8,bg:'bg-app',html:APP('متجرك','⚡ الرد الآلي شغّال',
    B('in','طلبي اتأخر 3 أيام 😡',0.3,'13:10')+B('out','معك حق، بعتذر منك 🙏 بعتت رسالتك لصاحب المحل وبيرد عليك بأقرب وقت.',1.0,'13:10',BOT))+
   el(1050,`<div class="push"><i>🔔</i><div><div class="t">تنبيه لصاحب المحل · الآن</div><div class="m">زبون منزعج: طلب متأخر 3 أيام — رد عليه</div></div></div>`,2.2,'up')+
   STK(1400,'الشكوى بتوصل','لصاحب المحل فورًا ✅',3.2)+NOTE(1760)},
  REHOOK(8,'رد سريع… والشكوى بتوصل لإنسان','شوف كيف بيرد 👇'),CTA(10.6),endCard(14.2)]}},

 'W7-ORDER-TAKE':L=>{L=TA;return{ltr:false,dur:15.5,scenes:[
  ASK(0,'زبون بدّه يطلب الساعة 11 بالليل…','مين بياخد الطلب؟'),
  {s:2.6,e:8,bg:'bg-app',html:APP('متجرك','⚡ الرد الآلي شغّال',
    B('in','بدي أطلب الجاكيت الكحلي M',0.3,'23:02')+B('out','تمام 👌 ابعتلي اسمك والمدينة والعنوان',0.9,'23:02',BOT)+B('in','سارة — جنين، الحي الشرقي',1.9,'23:03')+B('out','وصل ✅ طلبك: جاكيت كحلي M — جنين. صاحب المحل بيأكدلك السعر والتوصيل الصبح.',2.5,'23:03',BOT),{time:'23:03'})+STK(1450,'الطلب كامل','جاهز عالصبح ✅',3.4)+NOTE(1760)},
  REHOOK(8,'بدل ما تضيع الرسالة بالليل…','شوف كيف بيرد 👇'),CTA(10.6),endCard(14.2)]}},
});
