# Birthday Wishes Web App 🎉

A beautiful web application to collect birthday messages from friends with real-time updates.

## Features ✨

- 📝 Leave personalized birthday messages
- 🔄 Real-time comment updates
- 🔒 Secure authentication
- ✏️ Edit/delete your own messages
- 🎈 Festive birthday theme
- 📱 Responsive design

## Live Demo 🌐

Access the live version here:  
[https://eloquent-platypus-890c00.netlify.app](https://eloquent-platypus-890c00.netlify.app/index.html)

## Technologies Used 🛠️

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Firebase (Firestore, Authentication)
- **Hosting**: Netlify

## Project Structure 📂
birthday-wishes/
├── index.html # Main landing page
├── friends.html # Friends comment page
├── celebration.html # Birthday person's view
└── assets/ # Images and other assets


## Firebase Setup 🔥

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
2. Enable Firestore Database and Anonymous Authentication
3. Add your web app and copy the config
4. Update security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /comments/{commentId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
