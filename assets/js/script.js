const todaysHdrDate = dayjs().format('dddd, MMMM D, YYYY');
const todayYYYYMMDD = dayjs().format('YYYYMMDD');
const currentHour = Math.round(dayjs().format('HH'),0);

const currentDay = $('#currentDay');
const timeBlocks = $('.time-block');


// Function will return the local storage key for the time block
function buildStorageKey(timeBlockHour) {
  // wds = work day scheduler
  return "wds-" + todayYYYYMMDD + '-' + timeBlockHour;
}

// Setting up the current date and time after the page has been loaded
$(document).ready(function () {
  // Set the current day to Day Name, Month Nam Day Number and Year Number  
  currentDay.text(todaysHdrDate);

  // Setting up the time bloc  
  for(i=0; i< timeBlocks.length; i++) {
    
    // console.log(timeBlocks[i].id);
    // return the hour from the id to an integer 
    // Using the Math.Round function to ensure that the timeBlock function name is an integer
    var timeBlockHour = Math.round(timeBlocks[i].id.split('-')[1],0); 
    // push console.log(timeBlockHour);
 
    // removing any assigned color band class if present
    // to ensure we asssign the correct color band class

    if ($(timeBlocks[i]).hasClass('present')) {
      $(timeBlocks[i]).removeClass('present');
    };
    if ($(timeBlocks[i]).hasClass('past')) {
      $(timeBlocks[i]).removeClass('past');
    };
    if ($(timeBlocks[i]).hasClass('future')) {
      $(timeBlocks[i]).removeClass('future');
    };

    if(timeBlockHour < currentHour){
      $(timeBlocks[i]).addClass('past');
    } else if (timeBlockHour == currentHour){      
      $(timeBlocks[i]).addClass('present');
    } else if (timeBlockHour > currentHour){
      $(timeBlocks[i]).addClass('future');
    };

    // Populate the text area with the content from local storage
    timeBlocks[i].children[1].value = localStorage.getItem(buildStorageKey(timeBlockHour));
    
  };
});


function saveCalendarEntry(event) {
  const timeBlockHour = Math.round(this.parentElement.id.split('-')[1],0);
  const timeContent = this.previousElementSibling.value;
  
  // If there is no content in the text area, remove the entry from local storage
  if (timeContent.length == 0) {
    localStorage.removeItem(buildStorageKey(timeBlockHour));
  } 
  else 
  { localStorage.setItem(buildStorageKey(timeBlockHour), timeContent);
  };
  
}

$(document).on('click', '.saveBtn', saveCalendarEntry);



