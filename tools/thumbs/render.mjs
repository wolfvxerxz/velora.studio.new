import puppeteer from "/Users/vuk/freport-app/tools/render/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js"
import { mkdirSync } from "fs"
const b = await puppeteer.launch(); const p = await b.newPage(); await p.setViewport({ width: 1920, height: 1200 })
for (const br of process.argv.slice(2)) {
  mkdirSync(`f-${br}`, { recursive: true })
  await p.goto(`file://${process.cwd()}/thumb.html?b=${br}`, { waitUntil: "networkidle0" }); await p.evaluate(() => window.ready)
  for (let f = 0; f < 180; f++) { await p.evaluate((t) => seek(t), f / 30); await p.screenshot({ path: `f-${br}/${String(f).padStart(3, "0")}.png` }) }
  console.log("rendered", br)
}
await b.close()
