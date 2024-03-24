// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  $('#currentDay').text(currentDate.toDateString() + ' ' + strTime);
  console.log(currentDate.toDateString() + ' ' + strTime);


  //This code checks the time from the time-blocks and compares it to the current 
  //time. If the time block is less than the current time, it will add the class 
  //'past' to the time block. If the time block is equal to the current time, 
  //it will add 'present' to the current class.  If the time block is greater than 
  //the current time, it will add 'future' to the time block.
  $('.time-block').each(function () {
    var id = $(this).attr('id');
    var splitId = id.split('-');
    var time = parseInt(splitId[1]);
    var ampm = splitId[2];
    time = ampm === 'p' && time !== 12 ? time + 12 : time;
    var currentHour = new Date().getHours();
    $(this).removeClass('past present future');
    if (time < currentHour) {
      $(this).addClass('past');
    } else if (time === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

      //This code block will use the save button to save the user input to local storage.
  $('.saveBtn').on('click', function () {
    var timeBlock = $(this).parent().attr('id');
    var textArea = $(this).siblings('.description').val();
    localStorage.setItem(timeBlock, textArea);
  });

  //Pull all the data from local store as json and then store it display it in the test area.
  $('.time-block').each(function () {
    var id = $(this).attr('id');
    var textArea = localStorage.getItem(id);
    if (textArea) {
      $(this).children('.description').val(textArea);
    }
  });


});