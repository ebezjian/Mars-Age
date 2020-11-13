//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('birthday').submit(function(event) {
    event.preventDefault();
    const inputAge = $("#myAge").val();

  });
});