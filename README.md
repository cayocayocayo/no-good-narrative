# no-good narrative

One-page landing site linking to projects, writing and events. Plain HTML, no build step.

## Edit

Everything is in `index.html`. To turn a placeholder into a link, change
`<span class="soon">Writing</span>` to `<a href="https://...">Writing</a>`.

Fonts: "no-good" uses Gossip if a licensed webfont is added (put `gossip.woff2` in `fonts/` and add an `@font-face` named "Gossip"), otherwise Jacquard 24 from Google Fonts. So does "narrative"; the links use IBM Plex Sans.

## Deploy (Cloudflare Pages, free)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Production branch: `main`. Framework preset: None. Build command: blank. Output directory: `/`.
3. Every push to `main` publishes; other branches get preview URLs.
4. Custom domain: Pages project → Custom domains.
