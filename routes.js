(function(){
    'use strict';
    angular.module('quiz')
    .config(routesConfig);
    routesConfig.$inject=['$urlRouterProvider','$stateProvider'];
    function routesConfig($urlRouterProvider,$stateProvider){
        $urlRouterProvider.otherwise('/signUp');
        $stateProvider
        .state('signUp',{
            url:'/signUp',
            templateUrl:"src/signUp/signUp.html",
            controller:'signUpController',
            controllerAs:"signUpCtrl"
        })
        .state('signIn',{
            url:'/signIn',
            templateUrl:'src/signIn/signIn.html',
            controller:"signInController",
            controllerAs:"signInCtrl"
        })
        .state('instructions',{
            url:'/instructions',
            templateUrl:'src/instructions/instructions.html',
            // controller:"instructionsController",
            // controllerAs:"Ctrl"
        })
        .state('question',{
            url:'/question',
            templateUrl:'src/quiz/questions.html',
            controller:'questionsController',
            controllerAs:'ctrl'
        })
        .state('finalPage',{
            url:'/finalPage',
            templateUrl:'src/finalPage/finalPage.html',
            controller:'finalController',
            controllerAs:'finalCtrl',
            resolve: {
                scores: ['quizService', function (quizService) {
                  return quizService.getScores();
                }]
              }
        });
    }
})();