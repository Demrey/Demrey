import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyBBJQdHuZCt5UVlioyy8ZyR9nF2rCnwL68",
  authDomain: "mobilephonebase-a764f.firebaseapp.com",
  projectId: "mobilephonebase-a764f",
  storageBucket: "mobilephonebase-a764f.appspot.com",
  messagingSenderId: "667886103166",
  appId: "1:667886103166:web:48518d72f4da7af7b7062f"
};

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')