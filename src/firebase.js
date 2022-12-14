// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBv6Nh9ozOXCGNDxZqLN9F7_fSpr2EwIJM',
  authDomain: 'todo-backend-14e98.firebaseapp.com',
  projectId: 'todo-backend-14e98',
  storageBucket: 'todo-backend-14e98.appspot.com',
  messagingSenderId: '995383050650',
  appId: '1:995383050650:web:2377ad9eb489cfa142fa23',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
