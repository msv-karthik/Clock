window.addEventListener('load',calcTime);

function calcTime(){
    let date = new Date();
    let dayNum = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let am_pm = hour>=12?'PM' : 'AM';
    var dayName = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    hour = hour%12;
    hour = hour?hour:'12';
    hour = hour<10?'0'+ hour:hour;
    min = min < 10?'0' + min:min;

    document.getElementById('day').innerText= dayName[dayNum];
    document.getElementById('time').innerText = hour+" :";
    document.getElementById('min').innerText = min;
    document.getElementById('am-pm').innerText = am_pm;

    setTimeout(calcTime,200);
}