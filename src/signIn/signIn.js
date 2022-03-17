(function(){
    'use strict';
    angular.module('quiz')
    .controller('signInController',signInController);
    signInController.$inject=['$location','quizService'];
    function signInController($location,quizService){
        var signIn=this;
        var service=quizService;
        console.log(service);
        signIn.logIn=function(){
        if(signIn.user.email===service.user.email && signIn.user.password===service.user.password){
            alert("Logged in sucessfully");
            $location.path('/instructions');
        }
        else{
            alert("Invalid Username or Password!!!");
        }
    }
    }
}
)();