import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyC8xKGzBVbsh0DGh4JqXOla4bMqiFDt1dY",
    authDomain: "linkedin-clone-dd3ac.firebaseapp.com",
    projectId: "linkedin-clone-dd3ac",
    storageBucket: "linkedin-clone-dd3ac.appspot.com",
    messagingSenderId: "356580110787",
    appId: "1:356580110787:web:3722db3b794da8c99c4d76"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const storage = firebaseApp.storage()

  export {auth , provider ,storage} ; 
  export default db ;