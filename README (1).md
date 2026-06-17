# Happy Father's Day Web App

A stunning, interactive web application to create, seal, and share special Father's Day messages. Built with vanilla JavaScript, Firebase, and beautiful animations.

---

## Overview

This project is a heartfelt digital experience crafted by PixelForge Tech. It allows users to upload a photo, write a personalized message, and send a beautifully sealed envelope to their fathers. The entire experience is wrapped in smooth animations, particle effects, and interactive UI elements.

---

## Features

- **Photo Upload & Processing**: Automatic image compression with intelligent resizing
- **Secure Message Sealing**: Store messages in Firebase Firestore with unique shareable links
- **Beautiful Animations**: Aurora background, particle effects, confetti celebrations
- **Interactive Envelope**: 3D flip animation revealing personalized messages
- **Easy Sharing**: One-click sharing via WhatsApp, messaging apps, or direct links
- **Fully Responsive**: Perfect experience on desktop, tablet, and mobile devices
- **No Backend Required**: Pure frontend solution with Firebase integration

---

## Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced animations, gradients, and effects
- **JavaScript (ES6+)** - Vanilla JS with no external dependencies for logic
- **Firebase** - Firestore database for message storage
- **TSParticles** - Dynamic particle system with heart, star, and circle shapes
- **Font Awesome 6.5** - Icon library
- **Google Fonts** - Orbitron, Inter, and Caveat typefaces

---

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/PixelForge-Tech/fathers-day-web.git
cd fathers-day-web
```

### 2. Configure Firebase

Create a Firebase project and obtain your configuration credentials:

1. Go to https://firebase.google.com
2. Create a new project
3. Enable Firestore Database
4. Get your configuration from Project Settings

Edit both `index.html` and `view.html`, replacing the Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE",
    measurementId: "YOUR_MEASUREMENT_ID_HERE"
};
```

### 3. Add Your Logo

Place your PixelForge logo (or your brand logo) as `pixelforge-logo.png` in the project root:

```
pixelforge-logo.png  (recommended: 512x512 pixels, PNG format)
```

### 4. Deploy

Choose your hosting platform:

#### Vercel
```bash
npm install -g vercel
vercel deploy
```

#### Netlify
```bash
netlify deploy --prod
```

#### GitHub Pages
Push to GitHub and enable Pages in repository settings.

#### Traditional Hosting
Upload all files (index.html, view.html, README.html, pixelforge-logo.png) to your web server.

---

## File Structure

```
fathers-day-web/
|
+-- index.html              # Create and seal messages page
+-- view.html               # View sealed messages page
+-- README.html             # Beautiful interactive documentation
+-- pixelforge-logo.png     # Brand logo (add your own)
+-- README.md               # This file
|
# CDN-hosted libraries:
# - Font Awesome Icons (6.5.2)
# - Google Fonts (Orbitron, Inter, Caveat)
# - Animate.css (4.1.1)
# - TSParticles (2.12.0)
# - Firebase SDK (12.14.0)
```

---

## How It Works

### Step 1: Create Message
- User uploads a photo of their dad
- Photo is automatically compressed to fit Firestore limits
- User enters their name and writes a heartfelt message
- Confirmation with beautiful animations

### Step 2: Seal Message
- Click "Send Love" button
- Message is sealed with a beautiful 3D envelope animation
- Data is saved to Firestore with a server timestamp
- Unique shareable link is generated

### Step 3: Share Message
- Click "Share Link with Dad"
- One-click sharing via WhatsApp, SMS, email, or copy link
- Dad receives the link and opens view.html with the unique ID

### Step 4: Reveal Message
- Dad opens the sealed envelope
- Beautiful 3D flip animation
- Message and photo are revealed with confetti celebration
- Personalized gratitude tags and footer

---

## Image Compression Details

The app uses a smart compression system to ensure files stay within Firestore limits:

1. Original image is loaded into HTML5 Canvas
2. Progressive compression attempts:
   - 1000px max dimension at 75% quality
   - 800px max dimension at 60% quality
   - 600px max dimension at 50% quality
   - 450px max dimension at 40% quality (fallback)

3. First successful compression under 700KB is used
4. Base64 string is stored directly in Firestore document

---

## Firebase Firestore Structure

Collection: `wishes`

Document structure:
```json
{
  "name": "John",
  "message": "Dad, thank you for everything...",
  "photo": "data:image/jpeg;base64,...",
  "createdAt": "2024-06-17T12:00:00Z"
}
```

---

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 13+)
- IE11: Not supported

---

## Animation Features

- **Aurora Background**: Layered wave patterns with smooth gradients
- **Particle System**: 26 particles with hearts, stars, and circles
- **Gratitude Strip**: Continuously scrolling appreciation messages
- **Sparkle Effect**: Twinkling sparkles over uploaded photos
- **Envelope Animation**: 3D flip with seal pulsing effects
- **Confetti**: 80 confetti pieces falling with rotation
- **Smooth Transitions**: All interactions have buttery smooth animations

---

## Customization

### Change Colors
Edit the CSS variables in the style section:
```css
:root {
    --pink:  #ff6b9d;
    --deep:  #c44569;
    --teal:  #00c9a7;
    --gold:  #FFD700;
    --white: #ffffff;
}
```

### Modify Gratitude Messages
Edit the gratitude strip content in the JavaScript section:
```javascript
const words = [
    { icon: 'fa-heart', text: 'Custom message' },
    // Add more...
];
```

### Adjust Animation Speeds
Change animation durations in CSS:
```css
animation: scrollLeft 26s linear infinite;  /* Change 26s to desired duration */
```

---

## Performance Optimization

- All images are automatically compressed
- CSS animations use GPU acceleration (transform, opacity)
- Lazy loading for particle effects
- Minimal JavaScript footprint (vanilla JS)
- CDN delivery for external libraries

---

## Privacy & Security

- Messages are stored encrypted in Firestore
- Unique document IDs prevent unauthorized access
- No tracking or analytics by default
- No third-party data collection
- Full GDPR compliant (no cookies, no analytics)

---

## Troubleshooting

### Firebase Configuration Error
Ensure all configuration values are correct and Firestore is enabled in your Firebase project.

### Photo Upload Fails
Check file size (should be under 5MB) and format (JPG, PNG, WebP).

### Sharing Links Don't Work
Verify the view.html is accessible at the same domain and the document ID in the URL is valid.

### Animations Not Working
Check browser compatibility and ensure JavaScript is enabled.

---

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

### Areas for Contribution
- Additional animation effects
- Theme customizations
- Localization support
- Accessibility improvements
- Performance optimizations

---

## License

This project is licensed under the MIT License - feel free to use it for personal and commercial projects.

---

## Connect With Us

Join the PixelForge Tech community on WhatsApp for updates, new features, and special events.

**WhatsApp Channel**: https://whatsapp.com/channel/0029Vb6rpEcBVJl1VDOy323z

---

## Credits

Built with love by PixelForge Tech

- Design & Development: PixelForge Team
- Animations: CSS3 + tsParticles
- Database: Firebase Firestore
- Hosting: Ready for any platform

---

## Support

For questions, issues, or feature requests, please open an issue on GitHub or reach out via our WhatsApp channel.

---

**Made with Heart by PixelForge Tech**

*Making the web beautiful, one project at a time*
