// Alaskacephale
export default function getDisplayString(){
  const dino = "Alaskacephale";
  const letterArray = dino.split("");
  let userGuess = "a";
  let displayString = "";
  letterArray.forEach(function(letter) {
    displayString += letter;
  });
  return displayString;
}






// const array = [0,1,2,3,4,5];
// array.forEach(function(number) { 
//   console.log(number * 2);
// });
