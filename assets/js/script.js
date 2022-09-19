var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
var saveButton =$(".saveBtn");


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
    var currentTimeNumber = Number(currentTime);
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        console.log();
        if(currentTimeNumber === rowHour) {
            setColor(row, "#ff6961");
        }
        else if ((currentTimeNumber < rowHour) && (currentTime > rowHour -6)) {
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

// var value = $(this).siblings('.container').val();
// var time =$(this).parent().attr('id');

saveButton.on("click", function() {
    localStorage.setItem("input", "text");
    localStorage.getItem("text")
    console.log(localStorage)
    console.log(saveButton);
    });

// saveButton.addEventListener("click", function() {
//     var id = this.getAttribute("data-id");
//     var text = document.getElementById(id).value;
//     localStorage.setItem(id,text);
//     console.log(text);
// });



