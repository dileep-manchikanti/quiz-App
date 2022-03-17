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
console.log(app);
// const db = getFirestore(app);
// console.log(db);
// const auth = getAuth(app);

(function(){
    'use strict';
    angular.module('quiz')
    .controller('signUpController',signUpController);
    signUpController.$inject=['$location','quizService'];
    function signUpController($location,quizService){
        var signUp=this;
        var service=quizService;
        if(signUp.user!=undefined && signUp.user.email!=undefined)signUp.invalidMail=signUp.user.email.indexOf('@')==-1;
        if( signUp.user!=undefined && signUp.user.password!=undefined && signUp.user.confirmPassword!=undefined)signUp.mismatch=(signUp.user.password!==signUp.user.confirmPassword);
        signUp.submit=function(){
            if(signUp.user.password===signUp.user.confirmPassword){
                service.user=signUp.user;
                alert("Signed Up succesfully.your credentials are saved sucessfully...");
                $location.path('/signIn');
            }
            else{
                alert("confirm password mismatched with password!!! Try again..");
            }
        }
    }
})();