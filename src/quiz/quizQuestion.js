(function(){
    'use strict';
    angular.module('quiz')
    .component('quizQuestion',{
        templateUrl:'src/quiz/quizQuestion.html',
        bindings:{
            question:"<"
        },
        controller:questionController
    });
    questionController.$inject=['quizService'];
    function questionController(quizService){
        var ctrl=this;
        var service=''
        console.log(ctrl.question);
        if(ctrl.question==undefined)console.log("hello");
    }
})();