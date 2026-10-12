

const getDreams = async () => {
    const baseURL = "https://breadwards88.github.io/dream.json";

    try{
        const response = await fetch(baseURL);
        return await response.json();
    }
    catch(error){
        console.log(error);
    }
}

const listDreams = async () => {
    let dreams = await getDreams();
    let dreamBoard = document.getElementById("dreamboard");

    dreams.forEach((dream) => {
        dreamBoard.append(getDreamSection(dream));
    });
}

const getDreamSection = (dream) => {
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    h3.innerText= dream.title;
    let h4 = document.createElement("h4");
    h4.innerText = dream.type;
    section.append(h3);
    section.append(h4);
    if (dream.type === "Destination") {
        let iframe = document.createElement("iframe");
        iframe.src= dream.img_name;
        section.append(iframe);
    }
    else{
        let img = document.createElement("img")
        img.src= dream.img_name;
        section.append(img);
    }
    let p = document.createElement("p");
    p.innerText= dream.description;
    section.append(p);
    let input = document.createElement("input");
    return section;
}

/* For Later
const getDreamRating = (dream) => {
    let dreamRating = (dream.yes_count - dream.no_count);
    return dreamRating;
}
*/
window.onload = () => listDreams();