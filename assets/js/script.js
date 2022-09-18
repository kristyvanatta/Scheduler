var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
var saveButton = getElemetByClassName("saveBtn");
var past = past < currentTime;
var present = currentTime;
var future = future > currentTime;
//var textInput = document.querySelector(".text");
var event = document.getElementsByClassName('text');

    
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(rightNow);
}

displayDate();

var now = currentTime;
console.log(now);

function saveEvent() {
    var event = {
        event: event.value
    };
    localStorage.setItem("event");
}

function renderEvent() {
    var event = JSON.parse(localStorage.getItem("event"));
    if (event !== null) {
        document.getElementById("saved-event").innerHTML = event;
    }
    else {
        return;
    }
}


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderEvent();
});

function init() {
    renderEvent();
}
init();

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