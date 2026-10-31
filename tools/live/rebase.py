# Fix paths in a static export served under a base path.
# Public files (plain <img>, CSS url(), template strings) get the base prefix everywhere.
# Routes that weren't exported point to the landing: in JS/RSC data Next's <Link> adds the base itself,
# so they become "/"; in HTML they become the base.
# usage: rebase.py <out dir> <base> <public dir> <removed,routes>
import os, re, sys
out, base, pub = sys.argv[1], sys.argv[2], sys.argv[3]
dead = [d for d in sys.argv[4].split(",") if d]
names = sorted([n for n in os.listdir(pub) if not n.startswith(".")], key=len, reverse=True)
asset = re.compile(r'(?<=["\'(`])/(' + "|".join(map(re.escape, names)) + r')(?=[/"\'?#)\\`$])') if names else None
q = r'(?<=["\'])'
if dead:
    alt = "|".join(map(re.escape, dead))
    bare = re.compile(q + r'/(' + alt + r')/?(\?[^"\']*)?(#[^"\']*)?(?=["\'])')
    based = re.compile(q + re.escape(base) + r'/(' + alt + r')/?(\?[^"\']*)?(#[^"\']*)?(?=["\'])')
for root, _, files in os.walk(out):
    for f in files:
        if not f.endswith((".html", ".txt", ".js", ".css")): continue
        p = os.path.join(root, f); s = open(p, encoding="utf-8", errors="ignore").read(); t = s
        if dead:
            t = based.sub(base + "/", t)
            t = bare.sub(base + "/" if f.endswith(".html") else "/", t)
        if asset: t = asset.sub(lambda m: base + "/" + m.group(1), t)
        if t != s: open(p, "w", encoding="utf-8").write(t)

# Keep visitors inside the preview: any same-site link that leaves the base goes to the landing instead.
guard = '<script>addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a)return;var u=new URL(a.href,location.href);if(u.origin===location.origin&&u.pathname.indexOf("%s/")!==0){e.preventDefault();e.stopPropagation();location.href="%s/"+u.hash}},true)</script>' % (base, base)
for root, _, files in os.walk(out):
    for f in files:
        if f.endswith(".html"):
            p = os.path.join(root, f); s = open(p, encoding="utf-8").read()
            if "%s/\")!==0" % base not in s: open(p, "w", encoding="utf-8").write(s.replace("<head>", "<head>" + guard, 1))
