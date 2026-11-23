import json,sys,numpy as np,wave
ev=json.loads(sys.argv[1]); out=sys.argv[2]; sr=44100; n=int(ev['dur']*sr); a=np.zeros(n)
def add(sig,t):
    i=int(t*sr); j=min(n,i+len(sig)); a[i:j]+=sig[:j-i]
bpm=104; beat=60/bpm; rng=np.random.default_rng(1)
tk=np.arange(int(.18*sr))/sr; kick=np.sin(2*np.pi*(55+90*np.exp(-tk*30))*tk)*np.exp(-tk*18)*0.5
th=np.arange(int(.05*sr))/sr; hat=rng.standard_normal(len(th))*np.exp(-th*90)*0.06
for k in range(int(ev['dur']/beat)+1):
    t=k*beat
    if ev['dur']-t<1.2: break
    add(kick if k%2==0 else kick*0.55,t); add(hat,t+beat/2)
# pad chord
tt=np.arange(n)/sr
pad=sum(np.sin(2*np.pi*f*tt) for f in (220,277.18,329.63))*0.035*(0.6+0.4*np.sin(2*np.pi*tt/4))
pad*=np.minimum(1,tt/1.0)*np.minimum(1,(ev['dur']-tt)/0.8); a+=pad
tp=np.arange(int(.09*sr))/sr; pop=np.sin(2*np.pi*(900+600*np.exp(-tp*40))*tp)*np.exp(-tp*45)*0.35
for t in ev['pops']: add(pop,t)
tw=np.arange(int(.35*sr))/sr; w=rng.standard_normal(len(tw)); w=np.convolve(w,np.ones(40)/40,'same')*np.sin(np.pi*tw/.35)*0.25
for t in ev['whoosh'][1:]: add(w,max(0,t-0.15))
a=a/np.max(np.abs(a))*0.8; d=(a*32767).astype(np.int16)
f=wave.open(out,'wb'); f.setnchannels(1); f.setsampwidth(2); f.setframerate(sr); f.writeframes(d.tobytes()); f.close()
