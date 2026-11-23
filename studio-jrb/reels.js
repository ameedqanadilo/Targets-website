// Reel configs. Each scene: {s,e,bg,html}. data-t = seconds after scene start.
const ICON='icon.svg';
const B=(cls,txt,t,time,tag)=>`<div class="b ${cls}" data-t="${t}" data-k="pop">${tag?`<span class="tag">${tag}</span>`:''}${txt}<small>${time||''}</small></div>`;
const TYP=(t,o)=>`<div class="typing" data-t="${t}" data-o="${o}" data-k="pop"><span></span><span></span><span></span></div>`;
const phone=(top,h,name,status,inner,t=0.1)=>`<div class="phone" style="top:${top}px;height:${h}px" data-t="${t}" data-k="up"><div class="scr"><div class="hd"><div class="av"><img src="${ICON}"></div><div><div class="nm">${name}</div><div class="st">${status}</div></div></div><div class="chat">${inner}</div></div></div>`;
const el=(top,html,t,k='up',extra='')=>`<div class="el" style="top:${top}px;${extra}" data-t="${t}" data-k="${k}">${html}</div>`;
const notif=(top,m,t,L)=>el(top,`<div class="notif"><i>💬</i><div><div class="t">${L.newc} · ${L.now}</div><div class="m">${m}</div></div></div>`,t,'side');
const endCard=(s)=>({s,e:s+1.3,bg:'bg-light',html:`<div class="end"><div class="lg" data-t="0" data-k="pop" style="position:relative"><img src="${ICON}"><b>TARGETS</b></div><p data-t="0.2" style="position:relative">targetsagency.com</p></div>`});

const T={
 ar:{newc:'عميل جديد',now:'الآن',ex:'* مثال توضيحي',bot:'⚡ رد آلي',shop:'متجرك',auto:'⚡ الرد الآلي شغّال',online:'متصل الآن',
  ctaBtn:'أرسل كلمة «جرّب»',trial:'أسبوع تجربة مجانية',wa:'على واتساب'},
 en:{newc:'New customer',now:'now',ex:'* illustrative example',bot:'⚡ auto-reply',shop:'Your shop',auto:'⚡ auto-reply on',online:'online',
  ctaBtn:'Text us “TRY”',trial:'1-week free trial',wa:'on WhatsApp'}
};

function cta(s,L,c){ // CTA scene, c = {send, reply, head}
 return {s,e:s+3.6,bg:'bg-dark',html:
  el(170,`<div class="title s">${c.head}</div>`,0)+
  el(390,`<div style="text-align:center"><span class="pill">${L.trial}</span></div>`,0.25,'pop')+
  phone(540,880,'TARGETS',L.online,B('in',c.send,0.7,'')+TYP(1.0,1.5)+B('out',c.reply,1.5,'',L.bot),0.15)+
  el(1530,`<div class="cta"><i>💬</i>${c.btn||L.ctaBtn}</div><div class="note" style="margin-top:26px">${L.wa}</div>`,0.5,'pulse')};
}

const REELS={
 'JRB-ASK':L=>{const ar=L===T.ar;return{ltr:!ar,dur:15.4,scenes:[
  {s:0,e:2.6,html:
   el(220,`<div class="title m">${ar?'عميلك يسأل نفس السؤال…':'Customers ask the same question…'}</div>`,0,'up')+
   el(470,`<div class="title"><span class="hl">${ar?'50 مرة باليوم؟':'50 times a day?'}</span></div>`,0.3,'zoom')+
   notif(820,ar?'كم السعر؟':'How much is it?',0.5,L)+notif(1040,ar?'في توصيل؟':'Do you deliver?',0.8,L)+notif(1260,ar?'متوفر؟':'Is it in stock?',1.1,L)+
   el(1500,`<div class="note">${L.ex}</div>`,0.5)},
  {s:2.6,e:8.1,bg:'bg-red',html:
   el(160,`<div class="title s">${ar?'الرد الآلي يجاوب بثواني':'Auto-reply answers in seconds'}</div>`,0)+
   el(370,`<div class="note">${L.ex}</div>`,0.2)+
   phone(450,1320,L.shop,L.auto,
    B('in',ar?'كم السعر؟ وفي توصيل؟':'How much? Do you deliver?',0.4,'23:04')+TYP(0.8,1.4)+
    B('out',ar?'أهلاً 👋 السعر 45$ والتوصيل خلال يومين. أحجز لك؟':'Hi 👋 It’s $45 and delivery takes 2 days. Shall I book one for you?',1.4,'23:04',L.bot)+
    B('in',ar?'أكيد 🙏':'Yes please 🙏',2.8,'23:05')+TYP(3.2,3.7)+
    B('out',ar?'تم ✅ حجزنا لك':'Done ✅ booked for you',3.7,'23:05',L.bot))},
  {s:8.1,e:10.7,html:
   el(640,`<div class="title m">${ar?'لا تصدقنا…':'Don’t take our word for it…'}</div>`,0)+
   el(900,`<div class="title"><span class="hl">${ar?'جرّبه بنفسك 👇':'Try it yourself 👇'}</span></div>`,0.7,'zoom')},
  cta(10.7,L,{head:ar?'جرّب الرد الآلي بنفسك':'Try the auto-reply now',send:ar?'جرّب':'TRY',reply:ar?'أهلاً 👋 اكتب لنا نوع شغلك ونوريك كيف يرد على عملائك. وعندك أسبوع تجربة مجانية 🎁':'Hi 👋 Tell us your business and we’ll show you how it answers your customers. You also get a 1-week free trial 🎁'}),
  endCard(14.1)]}},

 'JRB-5H':L=>{const ar=L===T.ar;return{ltr:!ar,dur:15.0,scenes:[
  {s:0,e:2.6,html:
   el(560,`<div class="title m">${ar?'رديت بعد 5 ساعات…':'You replied 5 hours later…'}</div>`,0)+
   el(820,`<div class="title"><span class="hl">${ar?'وممكن العميل راح لغيرك 💸':'and they may have bought elsewhere 💸'}</span></div>`,0.6,'zoom')},
  {s:2.6,e:7.7,html:
   `<div class="mini" style="top:190px;height:740px" data-t="0" data-k="up"><div class="lbl" style="background:#5a5a5a">${ar?'بدون رد آلي ❌':'Without auto-reply ❌'}</div><div class="chat">`+
     B('in',ar?'كم السعر؟':'How much?',0.3,'10:02')+`<div class="clock" data-t="0.7" data-clock="602-910">10:02</div>`+
     B('out no',ar?'أهلاً، السعر 45$':'Hi, it’s $45',2.4,'15:10')+B('in',ar?'شكراً، حصلته عند غيركم':'Thanks, found it elsewhere',3.0,'15:11')+`</div></div>`+
   `<div class="mini" style="top:990px;height:740px" data-t="0.2" data-k="up"><div class="lbl" style="background:#0a8f4a">${ar?'مع الرد الآلي ✅':'With auto-reply ✅'}</div><div class="chat">`+
     B('in',ar?'كم السعر؟':'How much?',0.5,'10:02')+B('out',ar?'أهلاً 👋 السعر 45$ والتوصيل خلال يومين':'Hi 👋 $45, delivery in 2 days',1.0,'10:02',L.bot)+B('in',ar?'أطلب 2 🙏':'I’ll take 2 🙏',1.8,'10:03')+`</div></div>`+
   el(1780,`<div class="note">${L.ex}</div>`,0.4)},
  {s:7.7,e:10.3,html:
   el(520,`<div class="title m">${ar?'الفرق؟':'The difference?'}</div>`,0)+
   el(760,`<div class="big" style="font-size:200px">${ar?'ثواني':'Seconds'}</div>`,0.5,'zoom')+
   el(1060,`<div class="title s">${ar?'رد خلال ثواني ⚡':'A reply within seconds ⚡'}</div>`,0.9,'pop')},
  cta(10.3,L,{head:ar?'جرّب بنفسك الحين':'Try it yourself now',send:ar?'جرّب':'TRY',reply:ar?'أهلاً 👋 اكتب لنا نوع شغلك ونوريك كيف يرد على عملائك. وعندك أسبوع تجربة مجانية 🎁':'Hi 👋 Tell us your business and we’ll show you how it answers your customers. You also get a 1-week free trial 🎁'}),
  endCard(13.7)]}},

 'JRB-AUDIT':L=>{const ar=L===T.ar;return{ltr:!ar,dur:15.6,scenes:[
  {s:0,e:2.6,html:
   el(520,`<div class="title m">${ar?'صفحتك فيها متابعين…':'Your page has followers…'}</div>`,0)+
   el(800,`<div class="title"><span class="hl">${ar?'بس ما فيه رسائل؟':'but no messages?'}</span></div>`,0.6,'zoom')},
  {s:2.6,e:8.7,bg:'bg-red',html:
   el(160,`<div class="title s">${ar?'أرسل لنا رابط صفحتك 🔗':'Send your page link 🔗'}</div>`,0)+
   el(370,`<div class="note">${L.ex}</div>`,0.2)+
   phone(450,1320,'TARGETS',L.online,
    B('in','instagram.com/yourshop',0.3,'')+TYP(0.7,1.3)+
    B('out',ar?'شفت صفحتك 👀 3 ملاحظات سريعة:':'Checked your page 👀 3 quick notes:',1.3,'',L.bot)+
    B('out',ar?'1) البايو ما فيه طريقة طلب واضحة':'1) Your bio has no clear way to order',2.2,'')+
    B('out',ar?'2) آخر منشور قبل 12 يوم':'2) Last post was 12 days ago',3.0,'')+
    B('out',ar?'3) فيديوهين بس من آخر 12 منشور':'3) Only 2 videos in your last 12 posts',3.8,''))},
  {s:8.7,e:10.9,html:
   el(640,`<div class="title m">${ar?'تحليل سريع…':'A quick check…'}</div>`,0)+
   el(900,`<div class="title"><span class="hl">${ar?'ومجاني':'and free'}</span></div>`,0.6,'zoom')},
  cta(10.9,L,{head:ar?'أرسل «جرّب» مع رابط صفحتك':'Text “TRY” + page link',send:ar?'جرّب instagram.com/yourshop':'TRY instagram.com/yourshop',reply:ar?'تمام 👌 لحظة نفحص صفحتك…':'Great 👌 checking your page now…',btn:ar?'أرسل «جرّب» + رابط صفحتك':'Text “TRY” + page link'}),
  endCard(14.3)]}},
};
function getReel(name,lang){return REELS[name](T[lang])}
