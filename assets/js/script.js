// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var headerDateEl = $('#currentDay'); // variable to select element to populate current date

var saveButton = $('.saveBtn'); // selector for save button


function displayCurrentDate() { // function to populate current date
    var currentDate = dayjs().format('dddd, MMMM MM, YYYY');
    headerDateEl.text(currentDate);
}


function handleSaves(event) {
    
    console.log("handleSaves function started"); // test function start
    var targetId= event.delegateTarget.id; // variable for time-block #id
  
                // logic to check what textarea to read from based on hour
        if (targetId == "hour-9") { var targetText = $('.textarea9').val(); }
        if (targetId == "hour-10") { var targetText = $('.textarea10').val(); }  
        if (targetId == "hour-11") { var targetText = $('.textarea11').val(); }  
        if (targetId == "hour-12") { var targetText = $('.textarea12').val(); } 
        if (targetId == "hour-13") { var targetText = $('.textarea13').val(); } 
        if (targetId == "hour-14") { var targetText = $('.textarea14').val(); } 
        if (targetId == "hour-15") { var targetText = $('.textarea15').val(); } 
        if (targetId == "hour-16") { var targetText = $('.textarea16').val(); } 
        if (targetId == "hour-17") { var targetText = $('.textarea17').val(); } 
                    
        console.log("Test targetId: " + targetId + "\nTest targetText: " + targetText); //test hour and textarea pairs

    

    console.log("Raw Event Data: " + JSON.stringify(event)); // test for content in object

    
}

$(function () {
    
    displayCurrentDate(); // run function to display current date to screen on page load

  

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

        // saveButton.on('click', handleSaves)

        $('.time-block').on('click', '.saveBtn', handleSaves); // listener for save buttons
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
