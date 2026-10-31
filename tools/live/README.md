Live previews: a client's landing page exported as static files into public/live/<slug>, shown running on its case page.

    zsh tools/live/export.sh ~/youspot-app youspot /tmp/live
    cp -R /tmp/live/youspot/out public/live/youspot

export.sh copies the app, keeps only the landing route, builds it with basePath /live/<slug>, then rebase.py
fixes paths Next leaves alone and keeps links inside the preview. Set `live: "/live/<slug>/"` on the case.
