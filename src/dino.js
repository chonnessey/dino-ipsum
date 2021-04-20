// Alaskacephale
export default class DinoGame {
  constructor (dino) {
    this.dino = dino;
    this.userGuess="";
    this.wrongGuess="";
    this.letterArray= this.dino[0].toLowerCase().split("");
  }

  getDisplayString() {
    let displayString = "";
    for(let i=0; i<this.letterArray.length; i++){
      if((this.userGuess).includes(this.letterArray[i])){
        displayString += ` ${this.letterArray[i]}`;
      }
      else {
        displayString += " _";
      }
    };
    return displayString;
  };

  processUserGuess(guess){
    if(this.letterArray.includes(guess)){
      this.userGuess += guess;
      return this.userGuess;
    } else {
      this.wrongGuess += `${guess} `;
      return this.wrongGuess;
    }
  }
}





// const array = [0,1,2,3,4,5];
// array.forEach(function(number) { 
//   console.log(number * 2);
// });
