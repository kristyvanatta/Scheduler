var dateDisplayEl = $('#currentDay');
var currentTime = moment().format('H');
    console.log(currentTime);
function displayDate() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(rightNow);
}

displayDate();

//use a simular function from above to get current time to work for the past present future stuff possible querysellector for the itme

//write a save to local storage button
//funcrtion within a function for the input box and the save to local storage button