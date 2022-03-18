import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
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
// async function getScores(db) {
//     const scoresCol = collection(db, 'scores');
//     const scores = await getDocs(scoresCol);
//     var scoreList =[]
//     scores.forEach((score)=>
//     {
//         scoreList.push({id:score.id,...score.data()});
//     })
//     return scoreList;
//   }
(function(){
    'use strict';
    angular.module('quiz')
    .controller('questionsController',questionsController);
    questionsController.$inject=['$location','quizService'];
    function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }
    function questionsController($location,quizService){
        var ctrl=this;
        var service=quizService;
        if(service.user===undefined){
            alert("SignIn First to attempt quiz");
            $location.path('/signIn');
        }
        ctrl.index=0;
        ctrl.questions=[
            {
                question:" How many days are there in a week?",
                options:["7","10","5","15"],
                correct:"1"
            },
            {
                question:"How many hours are there in a day?",
                options:["30","24","20","15"],
                correct:"2"
            },
            {
                question:"How many letters are there in the English alphabet?",
                options:["20","22","26","28"],
                correct:"3",
            },
            {
                question:"Rainbow consist of how many colours?",
                options:["5","7","9","6"],
                correct:"2"
            },
            {
                question:"How many days are there in a year?",
                options:["355","325","365","385"],
                correct:"3"
            }
    ];
        ctrl.question=ctrl.questions[ctrl.index];
        console.log(ctrl.question);
        var score=0;
        ctrl.submit=function(num){
            ctrl.index+=1;
            console.log(ctrl.index);
            // document.getElementById(ctrl.question.correct)
            for(var i=0;i<4;i++){
                document.getElementById(i).classList.remove('correct');
                document.getElementById(i).classList.remove('wrong');
            }
            if(num===ctrl.question.correct-1){
                score+=4;
                document.getElementById('result').style.display="visible"
                // document.getElementById(ctrl.question.correct-1).classList.add('correct');
                // console.log(document.getElementById(num).classList);
                // console.log(document.getElementsByClassName('correct'));
            }
            else {
                score-=1;
                // document.getElementById(ctrl.question.correct-1).classList.add('correct');
                // document.getElementById(num).classList.add('wrong');

            }
            // sleep(1000);
            var correct=ctrl.question.options[ctrl.question.correct-1];
            if(num===ctrl.question.correct-1){
                alert("YES, Your Answer is Correct");
            }
            else{
                alert("Your Answer is wrong!!! Correct Answer is: "+ correct);
            }
            console.log(score);
            console.log(service);
            if(ctrl.index===ctrl.questions.length){
                service.myScore=score;
                 addDoc(collection(db, "scores"),{
                    score:score,
                    username:service.user.email
                 });
                $location.path('/finalPage');
            }
            ctrl.question=ctrl.questions[ctrl.index];
            console.log(ctrl.question);
        }
    
    }
})();