import Firebase from 'firebase';

var firebaseApp = Firebase.initializeApp({
	apiKey: "AIzaSyANclIA45Qi7kJDkZb5TQyMc02_GLdR2Cw",
    authDomain: "vuejs-webpack-da2b9.firebaseapp.com",
    databaseURL: "https://vuejs-webpack-da2b9.firebaseio.com",
    projectId: "vuejs-webpack-da2b9",
    storageBucket: "vuejs-webpack-da2b9.appspot.com",
    messagingSenderId: "678922233711"
});

export default firebaseApp.database();