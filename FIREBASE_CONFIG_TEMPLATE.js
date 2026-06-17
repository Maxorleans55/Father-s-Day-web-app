/**
 * Firebase Configuration Template
 * 
 * IMPORTANT: Never commit this file with real API keys to GitHub
 * This is a template to guide you through the setup process
 * 
 * To get your Firebase configuration:
 * 1. Go to https://firebase.google.com
 * 2. Create a new project
 * 3. Go to Project Settings > Your apps > Web app
 * 4. Copy the firebaseConfig object
 * 5. Replace the placeholders below with your actual values
 */

const firebaseConfig = {
    // Get this from Firebase Console
    apiKey: "YOUR_API_KEY_HERE",
    
    // Example: "your-project-id.firebaseapp.com"
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    
    // Example: "your-project-id"
    projectId: "YOUR_PROJECT_ID_HERE",
    
    // Example: "your-project-id.appspot.com"
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    
    // Long numeric ID found in your Firebase config
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    
    // Example: "1:123456789:web:abcdef1234567890"
    appId: "YOUR_APP_ID_HERE",
    
    // Optional: For Google Analytics
    measurementId: "YOUR_MEASUREMENT_ID_HERE"
};

/**
 * Where to add this configuration:
 * 
 * 1. In index.html (around line 387):
 *    Replace the firebaseConfig object in the script section
 * 
 * 2. In view.html (around line 327):
 *    Replace the firebaseConfig object in the script section
 * 
 * These are the only two files that need Firebase configuration.
 */

/**
 * Security Rules for Firestore:
 * 
 * Go to Firestore Database > Rules and replace with:
 * 
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     match /wishes/{docId} {
 *       allow read: if true;
 *       allow create: if request.resource.size < 1000000;
 *       allow update: if false;
 *       allow delete: if false;
 *     }
 *   }
 * }
 * 
 * This allows anyone to:
 * - Read all wishes (public viewing)
 * - Create new wishes (under 1MB)
 * - Prevents modification and deletion
 */

/**
 * Firestore Collection Setup:
 * 
 * The app will automatically create the "wishes" collection
 * when you save the first message.
 * 
 * Collection name: "wishes"
 * 
 * Document structure:
 * {
 *   name: string,           // User's name
 *   message: string,        // The Father's Day message
 *   photo: string,          // Base64 encoded JPEG image
 *   createdAt: timestamp    // Server timestamp
 * }
 */
