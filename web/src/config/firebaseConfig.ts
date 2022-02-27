import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyDSzlTA7oH_KHxQO6lcCbDoNEXoKLNL0ug',
  authDomain: 'heart2heart-7d75e.firebaseapp.com',
  databaseURL:
    'https://heart2heart-7d75e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'heart2heart-7d75e',
  storageBucket: 'heart2heart-7d75e.appspot.com',
  messagingSenderId: '720833604463',
  appId: '1:720833604463:web:8c99fb923be77043f2969a',
  measurementId: 'G-62VHJ51CQW',
}

const app = initializeApp(firebaseConfig, 'heart2heart')

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

export const googleLogin = () => {
  signInWithPopup(auth, provider).then(() => {
    window.location.href = '/register-complete'
  })
}
