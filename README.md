<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=FF008C&height=200&section=header&text=Happy%20Father's%20Day&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Interactive%20Web%20Application%20%7C%20Seal%20%26%20Share%20Messages&descAlignY=60&descAlign=50" width="100%"/>
</p>

<p align="center">
  <a href="https://father-s-day-366f2.web.app">
    <img src="LIVE%30APP-Visit%20Site-FF008C?style=for-the-badge&logoColor=white" alt="Live app"/>
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status"/>
  &nbsp;
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License"/>
</p>

<br/>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=FF008C&center=true&vCenter=true&width=700&lines=Seal+Special+Father's+Day+Messages;Create+Interactive+3D+Envelopes;Share+Beautiful+Personalized+Greetings;Firebase+Powered+Web+Application" alt="Typing SVG" />
</p>

---

## About This Project

> *A stunning, interactive web application to seal and share special Father's Day messages with beautiful animations and secure cloud storage.*

A modern, fully responsive web application built with vanilla HTML, CSS, and JavaScript that allows you to create personalized Father's Day messages, seal them in interactive 3D envelopes, and share them via unique links. Features Firebase backend, particle effects, and smooth animations without any frameworks.

---

## Features

| Feature | Description |
|---------|-------------|
| **Photo Upload** | Smart image compression with automatic quality optimization |
| **Secure Sealing** | Firestore database storage with unique shareable links |
| **3D Animations** | Aurora background effects, envelope flip animations, confetti celebrations |
| **Interactive Envelope** | Click to reveal beautiful personalized messages with smooth transitions |
| **Easy Sharing** | One-click WhatsApp sharing or copy unique message links |
| **Fully Responsive** | Perfect experience on desktop, tablet, and mobile devices |
| **Particle Effects** | Dynamic hearts, stars, and circles with tsParticles library |
| **Aurora Background** | Mesmerizing animated wave patterns with gradient overlays |

---

## Built With

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white"/>
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
</p>

---

## Project Structure

```
fathers-day-web/
├── index.html              # Create and seal messages
├── view.html               # View sealed messages
├── pixelforge-logo.png     # Brand logo
├── README.md               # Project documentation
│
└── CDN Dependencies:
    ├── Font Awesome Icons
    ├── Google Fonts (Orbitron, Inter, Caveat)
    ├── Firebase SDK
    └── TSParticles Library
```

---

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Firebase account (free tier available)
- Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/PixelForge-Tech/fathers-day-web.git

# Navigate to project directory
cd fathers-day-web

# Open in browser - no installation needed!
open index.html
```

### Configure Firebase

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Get your Firebase config credentials
3. Update `index.html` and `view.html` with your config:

```javascript
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

### Deploy

**Option A: Vercel (Recommended)**
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
2. Go to Settings → Pages
3. Select main branch as source
4. Site will be live at `https://yourusername.github.io/repo-name`

---

## How It Works

### Creating a Message
1. Enter your personalized Father's Day message
2. Optionally upload a photo (auto-compressed)
3. Click "Seal Message"
4. Get a unique shareable link

### Sharing a Message
1. Copy the unique link or share directly via WhatsApp
2. Recipient opens the link
3. Beautiful animations load with the sealed envelope
4. Click envelope to reveal your special message

---

## Core Features Explained

**Smart Image Processing** - Automatic compression ensures optimal file sizes while maintaining visual quality for Firestore limits.

**Aurora Background** - Animated wave patterns with multiple overlaying gradients create a stunning visual experience.

**3D Envelope Animation** - Interactive flip effects reveal messages with smooth CSS transitions.

**Unique Message Links** - Each sealed message gets a unique ID stored securely in Firestore with built-in error handling.

**Particle Effects** - Dynamic animation system with hearts, stars, and circles that react to user interaction.

**Responsive Design** - Mobile-first approach ensures perfect experience across all device sizes.

---

## Technology Deep Dive

- **HTML5**: Semantic markup with meta tags for sharing
- **CSS3**: Gradient animations, 3D transforms, media queries
- **Vanilla JavaScript**: ES6+, async/await, DOM manipulation
- **Firebase**: Firestore for message storage, Cloud Storage for images
- **TSParticles**: Advanced particle effects library
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Orbitron, Inter, Caveat for typography

---

## Security Best Practices

Never commit Firebase credentials to repositories. Use environment variables instead:

```
.env (add to .gitignore)
FIREBASE_API_KEY=your_api_key
FIREBASE_PROJECT_ID=your_project_id
```

Enable Firestore security rules to protect your database.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contact & Community

**PixelForge Tech**

<p align="left">
  <a href="https://whatsapp.com/channel/0029Vb6rpEcBVJl1VDOy323z">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
  </a>
  <a href="https://github.com/PixelForge-Tech">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="mailto:support@pixelforgetech.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

---

## License

This project is licensed under the **MIT License** - free to use and modify for personal and commercial projects.

---

## Acknowledgments

Built with passion by **PixelForge Tech**

Making the web beautiful, one project at a time.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=FF008C&height=120&section=footer&animation=fadeIn" width="100%"/>
</p>

<p align="center">
  <sub>Designed & built with passion by PixelForge Tech © 2024</sub>
</p>
