let years=document.getElementById("years")
let months=document.getElementById("months")
let days=document.getElementById("days")
let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

setInterval(()=>{
    let date = new Date()
    years.innerHTML=date.getFullYear()
    months.innerHTML=date.getMonth()+1
    days.innerHTML=date.getDate()
    hours.innerHTML=date.getHours()
    minutes.innerHTML=date.getMinutes()
    seconds.innerHTML=date.getSeconds()
},1000)