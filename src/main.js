//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $('birthday').submit(function(event) {
    event.preventDefault();
    const inputMonth = $("#month").val();
    const inputDay = $("#day").val();
    const inputYear = $("#year").val();
    const inputTotal = new Userinput (inputMonth, inputDay, inputYear)
  });
});