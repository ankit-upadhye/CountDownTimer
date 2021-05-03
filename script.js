const newYears='1 Jan 2022';
function countDown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalseconds=Math.floor((newYearsDate-currentDate)/1000);
    const days= Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
    
    document.getElementById('days').innerHTML=formatTime(days);
    document.getElementById('hours').innerHTML=formatTime(hours);
    document.getElementById('minutes').innerHTML=formatTime(minutes);
    document.getElementById('seconds').innerHTML=formatTime(seconds);
}

function formatTime(time)
{
    return time<10?('0'+time):time;
}
//initial call
countDown();
//call countDown() after every second
setInterval(countDown,1000);