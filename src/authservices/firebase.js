import "firebase/auth";
import "firebase/database";
import firebase from 'firebase/app'

const app = firebase.initializeApp({

});

export const auth = app.auth()
export default app;