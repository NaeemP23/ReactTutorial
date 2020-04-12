import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAA9k0-jW8fY2K8TWXNu7T0STdAXxHKCVo",
    authDomain: "course-scheduler-tutorial.firebaseapp.com",
    databaseURL: "https://course-scheduler-tutorial.firebaseio.com",
    projectId: "course-scheduler-tutorial",
    storageBucket: "course-scheduler-tutorial.appspot.com",
    messagingSenderId: "990475496189",
    appId: "1:990475496189:web:9274ac0dec3cf28bfc6c94",
    measurementId: "G-RDBDHSR001"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
