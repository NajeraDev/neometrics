import firebase from "firebase/app"
import "firebase/auth"

const fireapp = firebase.initializeApp({
    apiKey: "AIzaSyDaaH6nKhNtJTJabiQ7j04-3al_t8G6JcU",
    authDomain: "neometrics-64670.firebaseapp.com",
    databaseURL: "https://neometrics-64670-default-rtdb.firebaseio.com",
    projectId: "neometrics-64670",
    storageBucket: "neometrics-64670.appspot.com",
    messagingSenderId: "937317566051",
    appId: "1:937317566051:web:f99f602f8d7e5ee85b9a56",
    measurementId: "G-4Q4PM354FC"
})

export const auth = fireapp.auth()
export default fireapp