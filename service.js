import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

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
const db = getFirestore(app);
async function getScores(db) {
    const scoresCol = collection(db, 'scores');
    const scores = await getDocs(scoresCol);
    var scoreList =[]
    scores.forEach((score)=>
    {
        scoreList.push({id:score.id,...score.data()});
    })
    console.log(scoreList);
    return scoreList;
  }
(function(){
    'use strict';
    angular.module('quiz')
    .service('quizService',quizService);

    function quizService(){
        var service=this;
        service.myScore=0;
        service.getScores=function(){
            console.log(getScores(db));
            console.log("hi");
            return getScores(db).then(function (response) {
                console.log(response);
            return response;
    });
        }
    }
}
)();