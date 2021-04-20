import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import DinoGame from './dino.js'
import DinoService from './dino-service.js'

let dinoGame;

$(document).ready(function() {
  $('#get-dino').click(function() {
    let promise = DinoService.getDino();
    promise.then(function(response) {
      const body = JSON.parse(response);
      dinoGame = new DinoGame(body[0]);
      $('#display-string').text(`${dinoGame.getDisplayString()}`)
      $('#input').show();
      $('#input').submit(function(event) {
        event.preventDefault();
        const letter = $('#letter').val()
        dinoGame.processUserGuess(letter);
        $('#display-string').text(`${dinoGame.getDisplayString()}`)
      })
    })
  })
})

console.log(DinoGame);

