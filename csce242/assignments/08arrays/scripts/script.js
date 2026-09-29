const forests = [
    {name:"Swamp Rabbit Trail", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.5960006439!2d-82.39554692444739!3d34.84124887287003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8858302b96ab9c3d%3A0x8b0ce471e686c99d!2sSwamp%20Rabbit%20trail!5e0!3m2!1sen!2sus!4v1790652903406!5m2!1sen!2sus"},
    {name:"Sierra National Forest", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.992756817661!2d-119.22694132432844!3d37.34268017209737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8095ce27467ae327%3A0xd727209a76455d8f!2sSierra%20National%20Forest!5e0!3m2!1sen!2sus!4v1790652646448!5m2!1sen!2sus"},
    {name:"White Mountain National Forest", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.0241308405302!2d-71.6724615239888!3d43.81385887109497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3c4d1e99f0edf%3A0xe8598f7ba299c815!2sWhite%20Mountain%20National%20Forest!5e0!3m2!1sen!2sus!4v1790652850624!5m2!1sen!2sus"},
    {name:"Francis Marion National Forest", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.3118878923387!2d-79.76771021778642!3d33.07457840531742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe39d9b3ca7b6f%3A0xa36f0dc6f5a1aea5!2sFrancis%20Marion%20National%20Forest!5e0!3m2!1sen!2sus!4v1790652823792!5m2!1sen!2sus"}];

const beaches = [
    {name:"Folly Beach", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107463.55979625786!2d-80.03255884817231!3d32.679762870803664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fdd7c752411441%3A0x8608c6d0749993c2!2sFolly%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790651410212!5m2!1sen!2sus"},
    {name:"Hilton Head Island", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108056.08166936223!2d-80.82463037080687!3d32.18394678859318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc79dc8ed319ad%3A0x2ce5a67aeba2283d!2sHilton%20Head%20Island%2C%20SC!5e0!3m2!1sen!2sus!4v1790653100082!5m2!1sen!2sus"},
    {name:"Clearwater Beach", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56369.39217126361!2d-82.86063532643134!3d27.99123421108367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e948cae1c0d5%3A0xa2a27a0b28eb9f12!2sClearwater%20Beach%2C%20Clearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1790653131552!5m2!1sen!2sus"},
    {name:"Ruby Beach", iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10738.5505315043!2d-124.425702132337!3d47.71087233918993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548ddf3b68ebcbbd%3A0x6b94341955be96e3!2sRuby%20Beach!5e0!3m2!1sen!2sus!4v1790653157616!5m2!1sen!2sus"}];

const setDestinations = () => {
    const selection = document.getElementById("dd").value;
    const linkOne = document.getElementById("link1");
    const linkTwo = document.getElementById("link2");
    const linkThree = document.getElementById("link3");
    const linkFour = document.getElementById("link4");
        if (selection === "Forests"){
            linkOne.innerHTML= forests[0].name;
            linkTwo.innerHTML= forests[1].name;
            linkThree.innerHTML= forests[2].name;
            linkFour.innerHTML= forests[3].name;
            toggleList(linkOne);
            toggleList(linkTwo);
            toggleList(linkThree);
            toggleList(linkFour);
        }
        else if (selection === "Beaches"){
            linkOne.innerHTML= beaches[0].name;
            linkTwo.innerHTML= beaches[1].name;
            linkThree.innerHTML= beaches[2].name;
            linkFour.innerHTML= beaches[3].name;
            toggleList(linkOne);
            toggleList(linkTwo);
            toggleList(linkThree);
            toggleList(linkFour);
        }
        else{
            
        }
    document.getElementById("link1").onclick =setFrame("link1");
    document.getElementById("link2").onclick =setFrame("link2");
    document.getElementById("link3").onclick =setFrame("link3");
    document.getElementById("link4").onclick =setFrame("link4");
}
const setFrame = (element) => {
    const iFrame = document.getElementById("frame");
    if (document.getElementById("dd").value === "Forests"){
        if (element === "link1"){
            iFrame.src= forests[0].iframe;
        }
        else if (element === "link2"){
            iFrame.src= forests[1].iframe;
        }
        else if (element === "link3"){
            iFrame.src= forests[2].iframe;
        }
        else if (element === "link4"){
            iFrame.src= forests[3].iframe;
        }
        toggleList(iFrame);
    }
    else if (document.getElementById("dd").value === "Beaches"){
        if (element === "link1"){
            iFrame.src= beaches[0].iframe;
        }
        else if (element === "link2"){
            iFrame.src= beaches[1].iframe;
        }
        else if (element === "link3"){
            iFrame.src= beaches[2].iframe;
        }
        else if (element === "link4"){
            iFrame.src= beaches[3].iframe;
        }
        toggleList(iFrame);
    }
    else{

    }
}

const toggleList = (link) => {
    link.classList.remove("hidden");
}
window.onload = () => {
    document.getElementById("dd").onchange= setDestinations;
}
