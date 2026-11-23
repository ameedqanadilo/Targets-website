import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import { spawn } from 'child_process';
const [,,name,lang,out,fpsArg,stillsArg]=process.argv; const fps=+(fpsArg||30);
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--font-render-hinting=none']});
const page=await browser.newPage({viewport:{width:1080,height:1920}});
await page.goto('file:///home/claude/reels/engine.html');
await page.addScriptTag({path:'/home/claude/reels/reels.js'});
const dur=await page.evaluate(([n,l])=>{const c=getReel(n,l);build(c);return c.dur},[name,lang]);
await page.evaluate(()=>document.fonts.ready);
if(stillsArg){ for(const t of stillsArg.split(',')){await page.evaluate(x=>render(x),+t);await page.screenshot({path:`${out}_${t}.jpg`,type:'jpeg',quality:85});} await browser.close(); process.exit(0);}
const ff=spawn('ffmpeg',['-v','error','-y','-f','image2pipe','-framerate',String(fps),'-i','-','-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-r',String(fps),out],{stdio:['pipe','inherit','inherit']});
const n=Math.round(dur*fps);
for(let i=0;i<n;i++){await page.evaluate(x=>render(x),i/fps);const buf=await page.screenshot({type:'jpeg',quality:90});if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end(); await new Promise(r=>ff.on('close',r)); await browser.close(); console.log('ok',out,n,'frames');
