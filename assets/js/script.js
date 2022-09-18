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
var currentTime = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let 
    rowIdString = row.id,
    rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        if(currentTime === rowHour) {
            setColor(row, "red");
        }
        else if ((currentTime < rowHour) && (currentTime > rowHour -6)) {
            setColor(row, "green");
        }
        else if ((currentTime > rowHour) && (currentTime < +6)) {
            setColor(row, "grey");
        }
        else {
            setColor(row, "white");
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