# Paradise Nursery

A React + Redux Toolkit shopping app for houseplants. Browse plants by category,
add them to a cart, adjust quantities, and review the total cost.

## Features
- Landing page with background image, company name, About Us paragraph and a **Get Started** button
- Product listing: 18 houseplants in 3 categories (Air Purifying, Aromatic, Low Light), each with thumbnail, name, price and **Add to Cart** (disabled once added)
- Navbar on the Plants and Cart pages with Home / Plants / Cart links and a live cart-count icon
- Cart page: total plants, total cost, per-item thumbnail/name/unit price/subtotal, increase / decrease / delete buttons, Continue Shopping and Checkout ("Coming Soon")

## Tech
React 18, Vite, Redux Toolkit, React-Redux, GitHub Pages (`gh-pages`)

## Run locally
```
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Set the production `base` in `vite.config.js` to your GitHub repository name
   (for example, `/my-repository/`). Keep the trailing slash.
2. Push the project to GitHub and run `npm run deploy`.
3. In GitHub, open **Settings → Pages** and select the `gh-pages` branch.

The Vite development server uses `/` as its base path, so `npm run dev` works
at the local URL without the GitHub repository path.
