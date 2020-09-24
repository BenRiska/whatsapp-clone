import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-mohXROTsPp3PmWWMYOgCAz5E7vDUw9M",
  authDomain: "whatsapp-clone-9c6d8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9c6d8.firebaseio.com",
  projectId: "whatsapp-clone-9c6d8",
  storageBucket: "whatsapp-clone-9c6d8.appspot.com",
  messagingSenderId: "108565520988",
  appId: "1:108565520988:web:88603d38ddc69d531dbc99",
  measurementId: "G-Q79FMV9R6B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
