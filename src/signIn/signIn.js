import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_VoCR0JhYsGiZFXXrohpehk0tF8iICNU",
    authDomain: "angular-internship-e81b7.firebaseapp.com",
    projectId: "angular-internship-e81b7",
    storageBucket: "angular-internship-e81b7.appspot.com",
    messagingSenderId: "778128304817",
    appId: "1:778128304817:web:319b4860ac726c4b3fd090"
};

const app = initializeApp(firebaseConfig);
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth = getAuth(app);


(function(){
    'use strict';
    angular.module('quiz')
    .controller('signInController',signInController);
    signInController.$inject=['$location','quizService'];
    function signInController($location,quizService){
        var signIn=this;
        var service=quizService;
        signIn.logIn=function(){
            signInWithEmailAndPassword(auth, signIn.user.email, signIn.user.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    service.user=user;
                    console.log(service.user);
                    $location.path('/instructions');
                    // alert("Logged in sucessfully");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    alert("Invalid Username or Password!!!");
                });
    }
    }
}
)();