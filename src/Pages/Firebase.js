import firebase from "firebase";

//here we are using this firebase api to get access the database....
const config={
apiKey:"AIzaSyDjqsPb7_HQTQktq6xl-fDGiCVBF2dPUQY",
authDomain: "mapp-auth-class-ahmed.firebaseapp.com",
databaseURL: "https://mapp-auth-class-ahmed.firebaseio.com",
projectId: "mapp-auth-class-ahmed",
      storageBucket: "mapp-auth-class-ahmed.appspot.com",
      messagingSenderId: "407294186543"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;
