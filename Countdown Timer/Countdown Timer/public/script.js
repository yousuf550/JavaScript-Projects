function updateTimer(){
    var future = Date.parse("Jan 31, 2022 00:00:00")
    var now = new Date()
    var diff = future - now
    
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor(diff / (1000 * 60));
    var secs = Math.floor(diff / 1000);
    
    var d = days;
    var h = hours - days * 24;
    var m = mins - hours * 60;
    var s = secs - mins * 60;
    
    document.getElementById("timer")
    .innerHTML =
    '<div>' + d + '<span>Days</span></div>' +
    '<div>' + h + '<span>Hours</span></div>' +
    '<div>' + m + '<span>Minutes</span></div>' +
    '<div>' + s + '<span>Seconds</span></div>';
}

setInterval('updateTimer()', 1000);
