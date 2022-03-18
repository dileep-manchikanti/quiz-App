
//   await console.log(data);
  async function getData(){
    await getScores(db);
  }
  function sort(scores)
  {
      for(var i=0;i<scores.length;i++)
      {
          for(var j=0;j<scores.length-1-i;j++)
          {
              if(scores[j].score<scores[j+1].score)
              {
                  var temp = scores[j];
                  scores[j]=scores[j+1];
                  scores[j+1]=temp;
              }
          }
      }
  }
(function(){
    'use strict';
    angular.module('quiz')
    .controller('finalController',finalController);
    finalController.$inject=['quizService','scores'];
    function finalController(quizService,scores){
        var ctrl=this;
        console.log(scores);
        var service=quizService;    
        console.log(service.myScore);
        ctrl.myScore=service.myScore;
        sort(scores);
        ctrl.scores=scores;
}
})();