// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var headerDateEl = $('#currentDay'); // variable to select element to populate current date

var saveButton = $('.saveBtn'); // selector for save button

var displaySave = document.getElementById('saveNote'); // selector for hidden/visible text save toggle




function displayCurrentDate() { // function to populate current date
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
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

        localStorage.setItem(targetId, targetText); // sets value of targetID as key, and targetText as value in local storage

            displaySave.classList.remove('d-none'); // removes hidden class value
             displaySave.classList.add('d-block');  // adds visible class value to reveal saved message
                setTimeout(() => {                  // timeout for 1 second while displaying save message
                    displaySave.classList.add('d-none'); // sets back to hidden after timeout
                     }, 1000)
    

    console.log("Raw Event Data: " + JSON.stringify(event)); // test for content in object

    
}

function initializeStorage() {  // if null exists initialize key/values to prevent issues
    if (localStorage.getItem("hour-9") === null) { localStorage.setItem("hour-9", ""); } 
    if (localStorage.getItem("hour-10") === null) { localStorage.setItem("hour-10", ""); } 
    if (localStorage.getItem("hour-11") === null) { localStorage.setItem("hour-11", ""); } 
    if (localStorage.getItem("hour-12") === null) { localStorage.setItem("hour-12", ""); } 
    if (localStorage.getItem("hour-13") === null) { localStorage.setItem("hour-13", ""); } 
    if (localStorage.getItem("hour-14") === null) { localStorage.setItem("hour-14", ""); } 
    if (localStorage.getItem("hour-15") === null) { localStorage.setItem("hour-15", ""); } 
    if (localStorage.getItem("hour-16") === null) { localStorage.setItem("hour-16", ""); } 
    if (localStorage.getItem("hour-17") === null) { localStorage.setItem("hour-17", ""); } 
            // pulls local storage values to populate textarea to keep data when page refreshes
        var h9 = localStorage.getItem("hour-9"); $('.textarea9').val(h9);
        var h10 = localStorage.getItem("hour-10"); $('.textarea10').val(h10);
        var h11 = localStorage.getItem("hour-11"); $('.textarea11').val(h11);
        var h12 = localStorage.getItem("hour-12"); $('.textarea12').val(h12);
        var h13 = localStorage.getItem("hour-13"); $('.textarea13').val(h13);
        var h14 = localStorage.getItem("hour-14"); $('.textarea14').val(h14);
        var h15 = localStorage.getItem("hour-15"); $('.textarea15').val(h15);
        var h16 = localStorage.getItem("hour-16"); $('.textarea16').val(h16);
        var h17 = localStorage.getItem("hour-17"); $('.textarea17').val(h17);
    
    
  
}



function timeColors() {
	
	var currentHour = dayjs().format('H'); // get the current hour specifically
	
		for (i = 0; i < 9; i++) 
		{ 	
			var idText2 = document.querySelectorAll(".time-block"); //selects all timeblock classes
			var idText = $(".time-block")[i].id; // selects all timeblock ids 
			var idHour = idText.match(/\d+/g); // converts idText from above to s number for conditional statements
			console.log("id text: " + idText + " id Hour: " + idHour + " current hour: " + currentHour); // test for number conversion pair
			var setAt = idText; console.log(setAt); 
			
				// checks current hour vs the hour of the timeblock to add appropriate color
			if (idHour < currentHour) { idText2[i].classList.add('past'); }
			if (idHour == currentHour) { idText2[i].classList.add('present'); }
			if (idHour > currentHour) { idText2[i].classList.add('future'); }
			console.log("idText2: " + JSON.stringify(idText2)); //test
		}  

}

$(function () {
    
    initializeStorage(); // 
	
		
    displayCurrentDate(); // run function to display current date to screen on page load

  
	timeColors(); // run function to apply colors to time blocks based on past, present, and future
   
       

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
