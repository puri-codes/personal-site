# Premium Personal Portfolio - React App

This is a React conversion of the premium personal portfolio website, maintaining exact pixel-perfect styling and positioning from the original HTML.

## Features

- ✨ Premium modern design
- 🎨 Dark mode compatible
- 📱 Fully responsive
- ⚡ Built with React + Vite
- 🎯 Tailwind CSS for styling
- 🔥 Scroll animations
- 💫 Smooth transitions and hover effects

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Cloudflare

```bash
npm run deploy:cf
```

This builds the app and deploys the `dist` directory using Wrangler.

## Project Structure

```
personal-portfolio/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Google Fonts (Inter & Plus Jakarta Sans)
- Material Symbols Icons

## Customization

- Colors can be adjusted in `tailwind.config.js`
- Fonts are loaded from Google Fonts
- All sections are modular and easy to modify
- Animations and transitions are CSS-based

## License

This is a personal portfolio template. Feel free to use and modify as needed.
