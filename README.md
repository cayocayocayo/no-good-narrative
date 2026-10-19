# no-good narrative

One-page landing site linking to projects, writing and events. Plain HTML, no build step.

## Edit

Everything is in `index.html`. To turn a placeholder into a link, change
`<span class="soon">Writing</span>` to `<a href="https://...">Writing</a>`.

Fonts: the wordmark is Gossip High Pixel by Deborah Khodanovich, self-hosted from `fonts/` under the SIL Open Font License (`fonts/OFL.txt`; keep that file and the on-page credit with the fonts). The links use EB Garamond from Google Fonts.

## Deploy (Cloudflare Pages, free)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Production branch: `main`. Framework preset: None. Build command: blank. Output directory: `/`.
3. Every push to `main` publishes; other branches get preview URLs.
4. Custom domain: Pages project → Custom domains.
