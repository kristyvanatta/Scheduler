var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
var saveButton =$(".saveBtn");


var now = currentTime;
console.log(now);
//sets the date for the scheduler
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(rightNow);
}

displayDate();

var rows = document.getElementsByClassName("row");
//sets the color for past, present, future
Array.from(rows).forEach(row => {
    let 
    rowIdString = row.id,
    rowHour;
    var currentTimeNumber = Number(currentTime);
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        console.log();
        if(currentTimeNumber === rowHour) {
            setColor(row, "#ff6961");
        }
        else if ((currentTimeNumber < rowHour) && (currentTime > rowHour -12)) {
            setColor(row, "#77dd77");
        }
        else {
            setColor(row, "#d3d3d3");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
    console.log();
}; 


var hourSaved = "";
//save buttons for each time block
saveButton.on("click", function(e) {
    console.log("click", e.target);
    const parent = e.target.parentElement;
    console.log("parent", parent);
    const hour =parent.children[0].textContent;
    const value =parent.children[1].value;
    console.log("hi", hour, value);
    localStorage.setItem(hour,value);
    
    
    console.log(hourSaved)
    console.log(saveButton);
});
console.log("getting",localStorage.getItem("09:00"));
//iterates through time blocks to display saved items
for (var i =0; i < 9; i++) {
    var tempNumber = i + 9;
    var tempIndex = JSON.stringify(tempNumber);
    console.log(tempIndex)
    document.getElementById("text-" + tempIndex).innerHTML =localStorage.getItem(tempIndex + ":00");

}


