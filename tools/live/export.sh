#!/bin/zsh
# export.sh <app dir> <slug> <out> [keep,routes] : static-export the app's landing page (and any routes named in keep) into $OUT/<slug>
set -e
APP=$1; SLUG=$2; W=$3/$SLUG; KEEP=",${4:-},"
rm -rf $W && mkdir -p $W
rsync -a --exclude node_modules --exclude .next --exclude out $APP/ $W/
cp -Rc $APP/node_modules $W/node_modules
cat > $W/next.config.ts <<CFG
import type { NextConfig } from "next";
const config: NextConfig = { devIndicators: false, output: "export", basePath: "/live/$SLUG", images: { unoptimized: true }, trailingSlash: true };
export default config;
CFG
cd $W/app
DEAD=$(for p in */; do [ -f "$p/page.tsx" ] && [[ $KEEP != *",${p%/},"* ]] && echo ${p%/}; done | tr '\n' ',' | sed 's/,$//')
for p in ${(s:,:)DEAD}; do rm -rf $p; done
cd $W && npx next build > build.log 2>&1 || { tail -30 build.log; exit 1; }
python3 "${0:A:h}/rebase.py" out /live/$SLUG public "$DEAD" "${4:-}"
echo "dead: $DEAD"; du -sh out
