import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOSJmtVMmQ_mXDk5M-Ad_KD7MVZOz0-cU',
  authDomain: 'react-redux-sb-auth.firebaseapp.com',
  projectId: 'react-redux-sb-auth',
  storageBucket: 'react-redux-sb-auth.appspot.com',
  messagingSenderId: '686523490821',
  appId: '1:686523490821:web:b309947595ca4650d3326c',
  measurementId: 'G-F0P8B1XPHZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
