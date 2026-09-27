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
/*
    for(let i =0; i< toys.length; i++){
        const p = document.createElement("p");
        toyList.append(p);

    }
        */
toys.forEach(()=>{
    const p =document.createElement("p").innerHTML;
    p.innerHTML = toy;
    toysList.append(p);
});
};

//show a table of toys and prices
document.getElementById("btn-show-toy-prices").onclick = () => {
    const div = document.getElementById("toy-info");
    div.innerHTML = "";

    const toyMap= [];
    toyMap["doll"]=129.99;
    toyMap["skate board"] = 200.00;
    toyMap["mini car"]=1.99;
    toyMap["board game"]=20.99;
    toyMap["bracelettes"]=19.24;

    const table = document.createElement("table");
    div.append(table);
    let tr = document.createElement("tr");
    table.append(header);
    let th =document.createElement("th");
    tr.append(headerCol1);
    headerCol1.innerHTML="Name";
    th = document.createElement("th");
    tr.append(headerCol2);
    th.innerHTML="Price";

    for(let toy in toyMap) {
        let tr=document.createElement("tr");
        table.append(tr);
        let td = document.createElement("td");
        td.innerHTML = toy;
        tr.append(td);
        td = document.createElement("td");
        td.innerHTML = `$$(toyMap[toy])`;
        tr.append(td);
    }
};

const createTD = (data) => {
    const td = document.createElement("td");
    td.innerHTML = data;
    return td;
}

const createTR = () => {
    const tr = document.createElement("tr");
    
}
    