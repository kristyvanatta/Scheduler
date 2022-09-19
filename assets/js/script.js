var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
var saveButton =$(".saveBtn");
var activity = document.getElementsByClassName('text');

var now = currentTime;
console.log(now);
    
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(rightNow);
}

displayDate();

var rows = document.getElementsByClassName("row");

Array.from(rows).forEach(row => {
    let 
    rowIdString = row.id,
    rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        if(currentTime === rowHour) {
            setColor(row, "#ff6961");
        }
        else if ((currentTime < rowHour) && (currentTime > rowHour -6)) {
            setColor(row, "#77dd77");
        }
        else {
            setColor(row, "#d3d3d3");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

// var value = $(this).siblings('.description').val();
// var time =$(this).parent().attr('id');

saveButton.on("click", function() {
    console.log(saveButton);
    });




//write a save to local storage button
//function within a function for the input box and the save to local storage button