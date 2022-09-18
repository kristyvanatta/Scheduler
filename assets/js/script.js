var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
var saveButtonEl = $('.saveBtn');
var past = past < currentTime;
var present = currentTime;
var future = future > currentTime;
//var textInput = document.querySelector(".text");

    
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(rightNow);
}

displayDate();


var now = currentTime;
console.log(now);
function backgroundColor(){
    if (now === currentTime){
        document.getElementsByClassName(present);
    }
    else if (now < currentTime){
        document.getElementsByClassName(past);
    }
    else {
        document.getElementsByClassName(future);
    }
}
saveButtonEl.on('click', function(event) {
    event.preventDefault();

    var text = document.querySelector(".text").value;
    localStorage.setItem("text", text);
    console.log(value);
})


//use a simular function from above to get current time to work for the past present future stuff possible querysellector for the itme

//write a save to local storage button
//funcrtion within a function for the input box and the save to local storage button