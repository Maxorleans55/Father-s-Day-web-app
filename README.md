# Happy Father's Day

> A stunning, interactive web application to seal and share special Father's Day messages

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with](https://img.shields.io/badge/Built%20with-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)](https://github.com/PixelForge-Tech/fathers-day-web)

---

## What Makes It Special

### Photo Upload
Automatically compress and optimize photos with smart image processing to keep file sizes manageable.

### Secure Sealing
Messages are securely stored in Firestore database with unique shareable links protected by IDs.

### Stunning Animations
Aurora background effects, particle animations, confetti celebrations, and smooth interactive transitions.

### Interactive Envelope
Sealed envelopes with 3D flip animations that reveal beautiful messages with personalized styling.

### Easy Sharing
One-click sharing via WhatsApp, messaging apps, or copy unique links to send to your loved ones.

### Fully Responsive
Perfect experience on desktop, tablet, and mobile devices with adaptive layouts and touch interactions.

---

## Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Firebase account
- Code editor (VS Code recommended)

### Installation Guide

#### 1. Clone the Repository
Get the code from GitHub and set up your local environment.

```bash
git clone https://github.com/PixelForge-Tech/fathers-day-web.git
cd fathers-day-web
```

#### 2. Configure Firebase
Create a Firebase project and add your configuration credentials to both HTML files.

```javascript
// In index.html and view.html, replace:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID_HERE",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

#### 3. Add Assets
Place your PixelForge logo image file in the project root as `pixelforge-logo.png`

```
pixelforge-logo.png  (recommended size: 512x512 pixels)
```

#### 4. Deploy
Host on Vercel, Netlify, GitHub Pages, or your preferred hosting platform.

**Option A: Vercel**
```bash
npm install -g vercel
vercel deploy
```

**Option B: Netlify**
```bash
netlify deploy --prod
```

**Option C: GitHub Pages**
1. Push code to GitHub
2. Go to repository Settings → Pages
3. Set source to main branch
4. Your site will be live at `https://yourusername.github.io/repo-name`

---

## Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic Markup |
| **CSS3** | Animations & Effects |
| **JavaScript** | Vanilla JS (ES6+) |
| **Firebase** | Firestore Database |
| **TSParticles** | Particle Effects |
| **Font Awesome** | Icon Library |
| **Google Fonts** | Typography (Orbitron, Inter, Caveat) |

---

## Project Structure

```
fathers-day-web/
│
├── index.html              # Create and seal messages
├── view.html               # View sealed messages
├── pixelforge-logo.png     # Brand logo
├── README.md               # Project documentation
│
└── CDN Dependencies:
    ├── Font Awesome Icons
    ├── Google Fonts
    ├── Animate.css
    ├── tsParticles Library
    └── Firebase SDK
```

---

## Core Features Explained

### Smart Image Processing
Automatic compression with progressive quality reduction ensures optimal file sizes while maintaining visual quality for Firestore storage limits.

### Aurora Background
Beautiful animated wave patterns with multiple overlaying gradients create a stunning, mesmerizing background effect.

### Gratitude Strip
Continuously scrolling display of appreciation messages creates an emotional connection and sets the perfect tone.

### 3D Envelope
Interactive 3D flip animation reveals messages with smooth transitions and visual delights on user interaction.

### Unique Links
Each sealed message gets a unique, shareable link stored in Firestore with built-in error handling and validation.

### Particle System
tsParticles library creates dynamic particle effects with hearts, stars, and circles that react to user interactions.

---

## User Experience

### Creating a Message
1. Open `index.html` in your browser
2. Enter a personalized Father's Day message
3. (Optional) Add a photo
4. Click "Seal Message"
5. Copy the unique link and share via WhatsApp, email, or messaging apps

### Viewing a Message
1. Open the unique link from `view.html`
2. The page loads with beautiful animations
3. Click the envelope to reveal the sealed message
4. Enjoy the interactive experience!

---

## Design Features

- **Dark Theme**: Eye-friendly dark background with vibrant neon accents
- **Gradient Text**: Modern gradient typography for visual impact
- **Smooth Animations**: CSS animations and JavaScript transitions
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: Semantic HTML and WCAG considerations

---

## Dependencies (via CDN)

```html
<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">

<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"></script>

<!-- TSParticles -->
<script src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"></script>
```

---

## Security Best Practices

**Important:** 
- Never commit your Firebase credentials to public repositories
- Use environment variables or `.env` files (add to `.gitignore`)
- Enable Firebase security rules to protect your Firestore database
- Use HTTPS for all deployments

---

## Environment Variables

Create a `.env` file (or use your hosting platform's environment variable settings):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

## Join Our Community

Stay updated with new features, special events, and connect with other PixelForge Tech enthusiasts!

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029Vb6rpEcBVJl1VDOy323z)

---

## License

This project is licensed under the **MIT License** - Free to use and modify for personal and commercial projects.

See the LICENSE file for more details.

---

## Learning Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Tricks - Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [TSParticles Documentation](https://particles.js.org/)

---

## Contributing

We'd love your contributions! 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Support

Have questions or need help? 

- Email: support@pixelforgetech.com
- WhatsApp: [Join our community](https://whatsapp.com/channel/0029Vb6rpEcBVJl1VDOy323z)
- GitHub Issues: [Report a bug](https://github.com/PixelForge-Tech/fathers-day-web/issues)

---

## Acknowledgments

Crafted with love by **PixelForge Tech**

Making the web beautiful, one project at a time!

---

<div align="center">

**[Back to Top](#happy-fathers-day)**

Made with love | Licensed under MIT | © 2024 PixelForge Tech

</div>
