// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const currentDay = $('#currentDay');
const todaysDate = dayjs().format('dddd, MMMM D, YYYY');

// Get all the time blocks
const timeBlocks = $('.time-block');

// Using the Math.Round function to ensure that the current hour is an integer
var currentHour = Math.round(dayjs().format('HH'),0);

// Setting up the current date and time after the page has been loaded
$(document).ready(function () {
  // Set the current day to Day Name, Month Nam Day Number and Year Number  
  currentDay.text(todaysDate);

  // Setting up the time bloc  
  for(i=0; i<timeBlocks.length; i++) {
    
    // console.log(timeBlocks[i].id);
    // return the hour from the id to an integer 
    // Using the Math.Round function to ensure that the timeBlock function name is an integer
    var timeBlockHour = Math.round(timeBlocks[i].id.split('-')[1],0);
    
    console.log(timeBlockHour);
   
    if(timeBlockHour < currentHour){
      // apply the grey color to the time block
      $(timeBlocks[i]).addClass('past');
      // console.log("past");
    } else if (timeBlockHour == currentHour){      
      $(timeBlocks[i]).addClass('present');
      // console.log("present");
    } else if (timeBlockHour > currentHour){
      $(timeBlocks[i]).addClass('future');
      // console.log("future");
    };
 
  };
});


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
