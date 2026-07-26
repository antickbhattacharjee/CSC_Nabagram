# CSC NABAGRAM - TATHYA MITRA KENDRA

This is a modern, fully responsive, SEO-friendly static website for CSC Nabagram, designed to represent a trusted Government Digital Service Centre under the Common Service Centre (CSC) ecosystem.

## Features

- **5-Page Structure:**
  - Home (`index.html`)
  - About Us (`about.html`)
  - Services (`services.html`)
  - Contact Us (`contact.html`)
  - Terms & Policies (`terms.html`)
- **Design:** Government-inspired theme with Green, Saffron, White, and Navy Blue. Soft shadows, rounded cards, and smooth hover animations.
- **Tech Stack:** HTML5, CSS3, Vanilla JavaScript (No frameworks).
- **Responsive:** Fully responsive across mobile, tablet, and desktop viewports.
- **SEO & Accessibility:** Semantic HTML, Open Graph tags, Schema.org LocalBusiness structured data, descriptive meta tags, and accessible markup.
- **Icons:** Powered by [Phosphor Icons](https://phosphoricons.com/).
- **Animations:** Intersection Observer API used for scroll-triggered fade-in animations.

## Directory Structure

```
/
│
├── index.html        # Home Page
├── about.html        # About Us Page
├── services.html     # Services Page
├── contact.html      # Contact Us Page
├── terms.html        # Terms & Policies Page
│
├── css/
│   └── style.css     # Global Styles, Theme Variables & Component CSS
│
├── js/
│   └── script.js     # Mobile Menu, Scroll Animations, UI Logic
│
├── assets/
│   ├── images/       # Store image files here
│   ├── icons/        # Store custom icons here
│   └── logos/        # Store brand logos here
│
└── README.md         # Project Documentation
```

## Setup & Execution

Since this is a purely static website (HTML, CSS, JS), no build process or backend server is required. 

1. Simply open the `index.html` file in any modern web browser to view the website.
2. For local development, you can use a simple HTTP server (e.g., VS Code Live Server, or Python's `python -m http.server`) to ensure all relative paths resolve perfectly.

## Customization

- **Colors & Typography:** You can modify the CSS variables in the `:root` pseudo-class at the top of `css/style.css`.
- **Content:** The HTML files are clearly sectioned and commented for easy content updates.
- **Map Embed:** The Google Map iframe in `contact.html` is a placeholder. Update the `src` attribute with the actual Google Maps embed link for CSC Nabagram.

## Author
Generated for CSC Nabagram - Tathya Mitra Kendra.
