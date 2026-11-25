#!/bin/bash
set -e; cd /home/claude/reels; mkdir -p out7
for n in ${ONLY:-W7-BLACK-FRIDAY W7-NIGHT-ORDER W7-LAST-PRICE W7-TRY-RACE W7-STORY-POLL W7-AB-PRICE W7-FIRST-WEEK W7-PHOTO-ASK W7-CAPTION W7-ANGRY-HANDOFF W7-HOOK-3SEC W7-ORDER-CONFIRM W7-WA-LINK W7-ORDER-TAKE}; do
  node render.mjs $n ar out7/$n.v.mp4 30
  python3 audio.py "$(node events.js $n ar)" out7/$n.wav
  ffmpeg -v error -y -i out7/$n.v.mp4 -i out7/$n.wav -c:v copy -c:a aac -b:a 128k -shortest -movflags +faststart out7/$n.mp4
  node render.mjs $n ar out7/c_$n 30 1.8 && mv out7/c_${n}_1.8.jpg out7/$n-cover.jpg
  rm out7/$n.v.mp4 out7/$n.wav; echo done $n
done
