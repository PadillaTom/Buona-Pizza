import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCxCSnNwbFODFbT4coa-18xS0oILrsI-GY',
  authDomain: 'buona-pizza-b85d5.firebaseapp.com',
  databaseURL: 'https://buona-pizza-b85d5.firebaseio.com',
  projectId: 'buona-pizza-b85d5',
  storageBucket: 'buona-pizza-b85d5.appspot.com',
  messagingSenderId: '549910355168',
  appId: '1:549910355168:web:2aab09f14fd70fe2ae8485',
  measurementId: 'G-P7N52X2YFH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
