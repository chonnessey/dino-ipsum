// Alaskacephale
export default class DinoGame {
  constructor (dino) {
    this.dino = dino;
    this.userGuess="";
  }

  getDisplayString() {
    const letterArray = this.dino[0].toLowerCase().split("");
    let displayString = "";
    for(let i=0; i<letterArray.length; i++){
      if((this.userGuess).includes(letterArray[i])){
        displayString += ` ${letterArray[i]}`;
      }
      else {
        displayString += " _";
      }
    };
    return displayString;
  };
  processUserGuess(guess){
    this.userGuess += guess;
    return this.userGuess;
  }
}






// const array = [0,1,2,3,4,5];
// array.forEach(function(number) { 
//   console.log(number * 2);
// });
