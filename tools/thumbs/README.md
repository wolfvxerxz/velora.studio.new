# Case films

`thumb.html` draws one 6-second loop per case (`?b=moss|atlas|junction|nightshift|youspot`); every frame is a function of `t`.

```
node render.mjs moss atlas            # frames into f-<brand>/ (needs puppeteer)
ffmpeg -framerate 30 -i f-moss/%03d.png -vf "scale=1440:900,format=yuv420p" -c:v libx264 -crf 22 -movflags +faststart -an ../../public/case/Moss/thumb.mp4
```

The poster (`thumb.webp`) is frame 120.
