//Shows a message when a button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
}

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
}

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//when you change the number of days since you watered your plant
//show a message and change the image
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays =parseInt.target.value;
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");
    
    if(numDays <= 2) {
        pMessage.innerHTML = `Let your plant rest it's only been $(numDays) day(s).`;
        plantImage.src="https://dummyimage.com/150x150/556B2f/fff&text=Happy+Plant";
    }
    else if(numDays <=5) {
        pMessage.innerHTML = `Time to water it's been $(numDays) days.`; 
    }
    else if (numDays <=7){
        pMessage.innerHTML = `Oh no your plant is wilting it's been $(numDays) days`;
    }
    else {
        pMessage.innerHTML = `Your plant is a goner.`;
    }
}

//counting
let countInterval;
let count=0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause")
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

document.getElementById("btn-start").onclick = () => {
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
},500);
}

document.getElementById("btn-pause").onclick = () => {
    clearInterval(countInterval);
}

document.getElementById("btn-stop").onclick = () => {
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
}

//date display
setInterval(()=>{
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const seconds = today.getSeconds();
    pDisplay.innerHTML = seconds;
}, 1000);