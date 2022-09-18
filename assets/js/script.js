var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
var saveButtonArray = $(".saveBtn");
var saveButton =$(".saveBtn");
// var past = past < currentTime;
// var present = currentTime;
// var future = future > currentTime;
//var textInput = document.querySelector(".text");
var activity = document.getElementsByClassName('text');

    
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(rightNow);
}

displayDate();

var now = currentTime;
console.log(now);

function saveEvent() {
    var activity = {
        activity: activity.value
    };
    localStorage.setItem("activity");
}

function renderEvent() {
    var activity = JSON.parse(localStorage.getItem("activity"));
    if (activity !== null) {
        document.getElementById("saved-event").innerHTML = activity;
    }
    else {
        return;
    }
}

saveButtonArray.forEach((saveButton) => {
    saveButton.addEventListener("click", function (_event) {
    console.log(saveButton);
    });
});

// saveButton.addEventListener("click", function(activity) {
//     console.log(saveButton);
//     activity.preventDefault();
//     saveEvent();
//     renderEvent();
// });

// function init() {
//     renderEvent();
// }
// init();

// function backgroundColor(){
//     if (now === currentTime){
//         document.getElementsByClassName(present);
//     }
//     else if (now < currentTime){
//         document.getElementsByClassName(past);
//     }
//     else {
//         document.getElementsByClassName(future);
//     }
// }
// saveButtonEl.on('click', function(event) {
//     event.preventDefault();

//     var text = document.querySelector(".text").value;
//     localStorage.setItem("text", text);
//     console.log(value);
// })
// $(".text").click(function() {
//     var storage = $(".text").val();
//     if(localStorage.getItem("local", storage)) {
//         localStorage.setItem("local", storage);
//         console.log(storage);
//     }
// });

//use a simular function from above to get current time to work for the past present future stuff possible querysellector for the itme

//write a save to local storage button
//funcrtion within a function for the input box and the save to local storage button