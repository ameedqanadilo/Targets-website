const fs=require('fs');eval(fs.readFileSync('/home/claude/reels/reels.js','utf8')+fs.readFileSync('/home/claude/reels/reels2.js','utf8'));
const [,,n,l]=process.argv;const c=getReel(n,l);const ev={dur:c.dur,pops:[],whoosh:[]};
c.scenes.forEach(s=>{ev.whoosh.push(s.s);const re=/class="(b [^"]*|notif[^"]*)"[^>]*data-t="([\d.]+)"|data-t="([\d.]+)"[^>]*>\s*<div class="notif/g;let m;
 const re2=/<div class="b [^"]*" data-t="([\d.]+)"/g;while((m=re2.exec(s.html)))ev.pops.push(+(s.s+ +m[1]).toFixed(2));
 const re3=/data-t="([\d.]+)" data-k="side"/g;while((m=re3.exec(s.html)))ev.pops.push(+(s.s+ +m[1]).toFixed(2));});
const OFF=+(process.env.OFFSET||0.9);ev.dur=+(ev.dur-OFF).toFixed(2);ev.pops=ev.pops.map(x=>+(x-OFF).toFixed(2)).filter(x=>x>=0);ev.whoosh=ev.whoosh.map(x=>+(x-OFF).toFixed(2)).filter(x=>x>0);console.log(JSON.stringify(ev));
