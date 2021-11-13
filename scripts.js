let user = [
  {
      nameOf: '',
      score: ''
  }
 
]

var score = 22

var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")






var localize = function(){
user[0].nameOf = userInput.value;
user[0].score = score;

user.push({nameOf:userInput.value , score:score})







console.log(user)

localStorage.setItem('score', JSON.stringify(user));

var storageScore = JSON.parse(localStorage.getItem('score', score[0]));
var storageNameof = JSON.parse(localStorage.getItem('nameOf', nameOf[0]));

console.log(storageNameof[0].nameOf);
console.log(storageScore[0].score);
}






var newPara = function(){
  $(document).ready(function(){
    var p1 = $("<p>" + user[0]+  "</p>")
    $("#results").append(p1)
  }
)}













var getInfo = function(){
userInfo = userInput.value
console.log(userInfo + " " + score)
localize()
newPara()
}