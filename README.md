# Francore Davadi Portfolio Website

Static portfolio website for **Francore Davadi**, positioned as an **AI-Powered Business Operator**.

## Project structure

```text
my-website/
├── assets/
│   └── README.txt
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to run

Because this is a plain HTML/CSS/JavaScript site, you can open `index.html` directly in a browser.

If you want a local server instead, you can use one of these:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Then open `http://localhost:8000` or the URL shown by your local server.

## How to edit the website

### Main text and structure

Edit [index.html](./index.html).

Useful sections:

- Hero section: `#home`
- Services: `#services`
- Portfolio: `#portfolio`
- About: `#about`
- Articles: `#articles`
- Contact CTA: `#contact`

### Portfolio projects

Edit the `portfolioProjects` array in [script.js](./script.js).

Each project object contains:

- `title`
- `description`
- `tools`
- `outcome`
- `link`

### Articles

Edit the `articlePosts` array in [script.js](./script.js).

Each article object contains:

- `title`
- `date`
- `excerpt`
- `tag`
- `link`

### Colors and design

Edit the CSS variables at the top of [styles.css](./styles.css):

```css
:root {
  --bg: #07111f;
  --text: #ecf4ff;
  --muted: #96a9c4;
  --accent: #6ee7ff;
  --accent-strong: #3cbdf7;
  --accent-alt: #85ffbe;
}
```

### Contact links

Replace the placeholder links in the contact section inside [index.html](./index.html):

- `mailto:hello@example.com`
- `https://www.linkedin.com`

## Features included

- Responsive one-page layout
- Sticky navigation
- Mobile hamburger menu
- Smooth scrolling
- Animated reveal on scroll
- Portfolio and article cards rendered from JavaScript
- Easy-to-edit content structure

## Notes

- No backend is required.
- No external framework is used.
- Google Fonts are loaded from the `<head>` in `index.html`.
