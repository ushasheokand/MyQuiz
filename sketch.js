var canva , gameState=0 , contestant,contestantCount,allContestants;
var database , quiz,question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}



function draw(){
  background("pink");  
  if(contestantCount === 4)
  {
    quiz.update(1);
  }
  if(gameState ===1){
    clear();
    quiz.play();
  }
  
}


