const tenLoop = () => {
    const loopWords = document.getElementById("loop-result");
    let counter = 0;

    for (let i=0; i<10; i++){
        let p = document.createElement("p");
        p.innerHTML=i;
        loopResult.append(p);
        p.onclick = () => {
            console.log('You clicked the ${i}`th element')
        }
    }
    for (let i=0; i<10;i++){

    }

}

//Looping through a range
document.getElementById("btn-looprange").onclick = () => {
    const startNum = pareseInt(document.getElementById("txt-start").value);
    const endNum = pareseInt(document.getElementById("txt-end").value);
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    error.endclassList.add("hidden");
    const ul = document.getElementById("range-list");

    if(isNaN(startNum) || startNum < 0 || starNum > 5){
        errorStart.innerHTML = "* Invalid";
        errorStart.classList.remove("hidden");
    }
    if(isNaN(endText) || endText < 10 || endText > 20 || endText < startText){
        errorEnd.innerHTML = "* Invalid";
        errorEnd.classList.remove("hidden");
    }

    ul.innerHTML= "";

    for(let i = parseInt(startText); i <parseInt(endText); i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
}

//first array example
document.getElementById("btn-show-toys").onclick = () => {
    const toys = ("doll", "skate board", "mini car", "board game", "bracelets");
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    for(let i =0; i< toys.length; i++){
        const p = document.createElement("p");
        toyList.append(p);

    }
}