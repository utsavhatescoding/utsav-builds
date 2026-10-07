# Utsav Phuyal

An independent portfolio for economics, research and digital products, served at **https://utsavphuyal.com.np/**.

The design uses a warm paper background, cobalt accents, editorial typography and an interactive illustration of the research → build → share process. TradePulse Nepal is the featured project, with distinct website and dashboard previews. SANGAI and GuideConnect retain their existing demo links and development statuses.

## Run locally

No install or build step is needed. From the repository root:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The site is also readable with JavaScript disabled.

## Files and editing

- `index.html`: content, links, SEO and structured data.
- `styles.css`: layout, typography, responsive styles and reduced-motion support.
- `script.js`: mobile menu, process illustration, product-preview switcher, Nepal clock, section navigation and email copy.
- `assets/`: optimized portrait images, real TradePulse product screenshots and self-hosted fonts.
- `favicon.svg`, `preview.png`: browser icon and social sharing image.
- `CNAME`, `robots.txt`, `sitemap.xml`: existing domain and search engine configuration.

TradePulse links: https://tradepulsenepal.com/ and https://app.tradepulsenepal.com/. Screenshots are static previews, not a live data feed. Update them when the product UI changes. The process illustration is decorative and does not represent financial data.

Contact: `utsavkphuyal@gmail.com`. To change it, update both `index.html` and `script.js`.

## Deployment

This remains a static GitHub Pages site. Merge changes into the configured Pages branch (`main`) to publish through the existing hosting setup. Preserve `CNAME` to keep the custom domain.

## Accessibility

Native links, buttons and disclosure controls; keyboard focus indicators; an accessible mobile menu; meaningful image alternatives; reduced-motion support; and visible content without JavaScript. Fonts and images are served locally, with no analytics or third-party scripts.

## Font licenses

DM Sans and DM Serif Display are distributed under the SIL Open Font License. License files are in `assets/fonts/`.
