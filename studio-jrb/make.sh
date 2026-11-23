#!/bin/bash
set -e; cd /home/claude/reels
for n in ${ONLY:-JRB-ASK JRB-5H JRB-AUDIT}; do for l in ar en; do
  N=AD-$(echo $l|tr a-z A-Z)-$n
  node render.mjs $n $l out/$N.v.mp4 30
  python3 audio.py "$(node events.js $n $l)" out/$N.wav
  ffmpeg -v error -y -i out/$N.v.mp4 -i out/$N.wav -c:v copy -c:a aac -b:a 128k -shortest -movflags +faststart out/$N.mp4
  node render.mjs $n $l out/thumb_$N 30 1.8 && mv out/thumb_${N}_1.8.jpg out/thumb_$N.jpg
  rm out/$N.v.mp4 out/$N.wav; echo done $N
done; done
