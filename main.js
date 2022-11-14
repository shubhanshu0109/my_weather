function GetInfo(){
    const newName=document.getElementById("cityinput")
    const cityname=document.getElementById("cityname")
    cityname.innerHTML="--"+newName.value+"--"

fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=106b7f96bb7250342a5ad4a5aadc4bee")
.then(response => response.json())
.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"Min").innerHTML="Min" +Number(data.list[i].main.temp_min -301.84).toFixed(1)+".";
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"Max").innerHTML="Max" +Number(data.list[i].main.temp_max -302.08).toFixed(1)+".";
    }
    for(i=0;i<5;i++){
        document.getElementById("img"+(i+1)).src=" http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
})

.catch(err=>alert("something went wrong"))
}

function defaultscreen(){
    document.getElementById("cityinput").defaultvalue="delhi";
    GetInfo();
}
var d=new Date();
var weekday=["sunday","monday","tuesday","wednesday","thursday","friday","saturday",];

function checkday(day){
    if(day+d.getDay()>6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}
for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML=weekday[checkday(i)];
}