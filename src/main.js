import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import dinoGame from './dino.js'
import DinoService from './dino-service.js'

$(document).ready(function() {
  $('#get-dino').click(function() {
    let promise = DinoService.getDino();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#display-string').text(`${body.main[0]}`)
    })
  })
})
