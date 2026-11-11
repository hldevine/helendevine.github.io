# helendevine.github.io

Personal academic website. Plain static files — no build step.

## Update content
Almost everything (publications, talks, news, CV entries, social links) lives in **`content.js`**. Edit it on github.com (pencil icon → Commit) and the site updates in ~1 minute.

- New paper → add an object to `publications` (newest dates sort to the top automatically).
- New talk/poster → add to `talks` (`kind`: `Talk`, `Poster`, or `Mentored`; optional `award` and `links`).
- News → add to `news`.
- New CV → replace `assets/Devine_CV.pdf` (keep the filename).
- Headshot → replace `assets/headshot.png`.

The About text and research-area descriptions are in `index.dc.html` (search for "About" / "Victims &amp; blame").

## Publish on GitHub Pages (one time)
1. Create a GitHub repo named **`<your-username>.github.io`** (public).
2. Upload every file and folder in this project (keep the folder structure: `index.html`, `index.dc.html`, `content.js`, `support.js`, `assets/`, `ds/`).
3. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
4. Your site is live at `https://<your-username>.github.io`.

Custom domain (optional): Settings → Pages → Custom domain.

## Documents (do this before going live)
All posters, slides and application PDFs now link to `assets/docs/`. Download each from your old site (or your computer), rename it exactly as below, and upload it into `assets/docs/`:

| File name | What it is | Old-site file |
| --- | --- | --- |
| `devine_spsp25_fear.pdf` | | media_files/12944 |
| `devine_spsp25_consent.pdf` | | media_files/12949 |
| `devine_apls25_gait.pdf` | | media_files/13207 |
| `devine_spsp26_truecrime.pdf` | | media_files/17792 |
| `devine_nsfgrfp.pdf` | | media_files/18446 |
| `devine_managerapp.pdf` | | media_files/18447 |
| `devine_cornell.pdf` | | media_files/18448 |
| `devine_ucla.pdf` | | media_files/18449 |
| `devine_yale.pdf` | | media_files/18450 |
| `devine_gradcv.pdf` | | media_files/18452 |

Also: `assets/Devine_CV.pdf` (main CV) is already in place.

If a file isn't a PDF (e.g. slides as .pptx), either export it to PDF or change the extension in `content.js` / `index.dc.html` to match.

## Links that stay external (fine as-is)
Google Drive talk video, post-bacc Google Doc, Slack invite, Substack, OSF, journal DOIs.
**Check sharing:** the Drive video and Google Doc must be set to *Anyone with the link → Viewer*.
