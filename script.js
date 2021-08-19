
function displayTime (){var currentTime = moment()
$("#currentTime").text(currentTime.format('MMMM Do YYYY, h:mm:ss a'));}

setInterval(displayTime, 1000)