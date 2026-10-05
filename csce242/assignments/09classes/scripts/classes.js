class Vacation {
    constructor(title, type, description, to_do, image, map){
        this.title = title;
        this.type = type;
        this.description = description;
        this.to_do = to_do;
        this.image = image;
        this.map = map;
    }

    get location() {
        const section = document.createElement("section");
        section.classList.add("vac");
        section.classList.add("one");

        section.append(this.vacTitle());
        section.append(this.vacType());
        section.append(this.vacImage());

        const modal = this.modal();
        section.append(modal);
        modal.classList.add("hidden");

        section.onclick = () => {
            modal.classList.toggle("hidden");
        }

        return section;
    }

    vacName() {
        const h3 = document.createElement("h3");
        h3.textContent = this.title;

        return h3;
    }

    vacImage() {
        const img = document.createElement("img");
        img.src= this.image;
        img.alt= `Picture of ${this.title}`;
        img.width= 250;
        img.height= 250;

        return img;
    }
    vacType() {
        const p = document.createElement("p");
        p.textContent= this.type;

        return p;
    }

    modal() {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        div1.append(div2);
        const div3 = document.createElement("div");
        div2.append(div3);
        const div4 = document.createElement("div");
        div2.append(div4);
        const header = document.createElement("header");
        const span = document.createElement("span");
        div4.append(header);
        div4.append(span);
        const map = document.createElement("iframe");
        div3.append(map);
        const h3 = document.createElement("h3");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        div4.append(h3, p1, p2, p3)

        div1.classList.add("w3-modal");
        div2.classList.add("w3-modal-content");
        div3.classList.add("one");
        div4.classList.add("one");
        div4.classList.add("column");
        span.classList.add("w3-button", "w3-display-topright");

        span.innerHTML = `X`;
        map.src=`${this.map}`;
        h3.innerHTML = `${this.title}`;
        p1.innerHTML = `<strong>Type</strong>: ${this.type}`;
        p2.innerHTML = `<strong>Description</strong>: ${this.description}`;
        p3.innerHTML = `<strong>Things To Do</strong>: ${this.to_do}`;
        
        return div1;
    }

    vacTitle() {
        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        
        return h3;
    }
}

const vacs = [];

vacs.push(new Vacation("Folly Beach", "Beach", "Folly Beach is a city on Folly Island, in South Carolina, just south of Charleston. It’s home to Folly Beach Pier, stretching more than 1,000 feet into the ocean.", "Surf, Go Shop, Go to the pelican rookery.", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpxT75juC44iSHtpcYUj9RYuf24hMHnEscfb1Fuq9VM1zvzw1MPE2e10m4LuivWKqt7Fis1upa5V6jKDaz9qOrU25ScPxIZuHlwKzh0B4FwkOx4NBAebMe9yHK7SZ-5kbUv50j_A=w408-h839-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107463.55979625786!2d-80.03255884817231!3d32.679762870803664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fdd7c752411441%3A0x8608c6d0749993c2!2sFolly%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790651410212!5m2!1sen!2sus"));
vacs.push(new Vacation("Rocky Mountains", "Mountain", "Iconic mountain range from central New Mexico to Canada & extending 3000 miles through six states.", "Go Hiking, See the Beautiful Skyline", "https://lh3.googleusercontent.com/grass-cs/ACvplmPE-JhiHdzTYRIP9n7mVENAgrnMEu3E-qhSLmNAqxJLQ-Sg5eWv-GtIp63tWnvIzYYhts3k8-tMKFPgpT2BW2BlpeD3XBCBCpXEbvMOIb7soJ2FLD3jMnDtaksoWIt-gSoDRFNVjPkpdCc=w253-h336-p-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22900568.19503902!2d-136.6793882156344!3d45.52055523425406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5353ab66ebd1785d%3A0x51d0a39c77375f60!2sRocky%20Mountains!5e0!3m2!1sen!2sus!4v1791161209118!5m2!1sen!2sus"));
vacs.push(new Vacation("Hilton Head Island", "Beach", "Hilton Head Island is part of the Lowcountry region in the U.S. state of South Carolina. It's known for Atlantic Ocean beaches and golf courses.", "See Themed Gardens, See Wildlife, Relax in Hotels", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmytQgmnJXPocMUprgvplxhyEXw6kOcgw-IU07ZrtqZDAUPwmJGV9tM3-Lpu9CW7VW8Et-lksawK1SUj8QBhMh11AJX5HlKlVxVjN_GcaxMm5PMaJqhJDgmkVVYjmtT3uFS-2K4=w408-h306-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108056.08166936223!2d-80.82463037080687!3d32.18394678859318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc79dc8ed319ad%3A0x2ce5a67aeba2283d!2sHilton%20Head%20Island%2C%20SC!5e0!3m2!1sen!2sus!4v1790653100082!5m2!1sen!2sus"));
vacs.push(new Vacation("Appalachian Mountains", "Mountain", "Running along the East Coast from Newfoundland to Alabama, these are among the oldest mountains in the world.", "See The Mountain Range, See Wildlife", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmQ2b4-DFLbuOiMV1SUVuUZE7WZcma7KG_hDdMycPE3jXltGM-q7pN6EOxl6CZPwE8956bU6p55X5za7lhXYIqdsW2ZTa5lSA5DN6W3dFPKGaYQf-2ry_qmW36W8fM4eSSZypfnPg=w426-h240-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12437520.160568818!2d-86.94115471520196!3d40.44198184485598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca2b4629e7979d%3A0x53c4965d33ec02ad!2sAppalachian%20Mountains!5e0!3m2!1sen!2sus!4v1791161440627!5m2!1sen!2sus"));
vacs.push(new Vacation("Clearwater Beach", "Beach", "Laid-back Clearwater Beach is known for its namesake stretch of soft, white sand, which draws visitors year-round for jet-skiing, parasailing, and stand-up paddleboarding in its calm waters.", "Go Cycling, Go Rollerblading, Go Paddleboarding, Go Shopping", "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rub-x9oipzCB11nZ7n0oYya02ijcbZYUZB1caEE08V4iNc2XIrsQHfBZ3tpHIWdSP_AwUwB3BEXitypwR1qCGMMyanc3j6DrQdO1_54buvUogvCi2yWstvGxiG96BynwvPKCLe=w523-h240-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56369.39217126361!2d-82.86063532643134!3d27.99123421108367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e948cae1c0d5%3A0xa2a27a0b28eb9f12!2sClearwater%20Beach%2C%20Clearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1790653131552!5m2!1sen!2sus"));
vacs.push(new Vacation("Cascade Range", "Mountain", "Located in the Pacific Northwest, this volcanic range includes iconic peaks like Mount Rainier and Mount St. Helens.", "Take Scenic Walks, See The Crater Lakes","https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QwuAHYe3EiRytz5-eA52LdGAJS-7wTR8sDH2Vh8GJ2csmBfbeM2cZNtkxoMtp06662Vmyy3wISrOdPJhm3Z305lMPztVHuuC7L2iy-yL6ueYEJBN3h3sMPKm-i_86c6PjQVmE=w408-h272-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11543270.638703002!2d-131.616688758577!3d45.06183300907012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490d191a8c606fd%3A0x680c527a3962993a!2sCascade%20Range!5e0!3m2!1sen!2sus!4v1791161528007!5m2!1sen!2sus"));
vacs.push(new Vacation("Ruby Beach", "Beach", "Beyond its striking sunset views, this rugged beach also features trails, campsites & a lodge.", "Go Camping, Go Hiking, Go Fishing", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmRT8yevCcDAwJ1fVWX1RnMM8g3WlJj8omDDR3Dl9YeNaK-SkvZzB_1FpAHEH9fJHoIBtSJg8od7IulwvDlB3_d8qrjEHoj7vRgy0CfA5d1jjdpCHdTuYrFglfED8bptvSvCvmz=w408-h299-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10738.5505315043!2d-124.425702132337!3d47.71087233918993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548ddf3b68ebcbbd%3A0x6b94341955be96e3!2sRuby%20Beach!5e0!3m2!1sen!2sus!4v1790653157616!5m2!1sen!2sus"));
vacs.push(new Vacation("Alaska Range", "Mountain", "Home to Denali, this range is characterized by extreme altitudes and glacial landscapes.", "See The Snowy Peaks, Experience Nature", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlMjnQ6rHPXyN0qfLFTE9xeVp9IvMb5yQLwVC8h8aRgWATW0oOpDdAfZvmuRafapLEflKiY7KCpM39eHYN3r9IUAmPSaIK-kInEm3Nu-HJxN-GRlXSEwG833waWGbnmYBhIDHAh=w408-h544-k-no", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7228.118545757486!2d-151.01752161603073!3d63.06944317618314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56cde6033026d70d%3A0x16b684692731226!2sAlaska%20Range!5e0!3m2!1sen!2sus!4v1791161674535!5m2!1sen!2sus"));
const vacsDiv = document.querySelector(".vacs");

vacs.forEach((vac)=>{
    vacsDiv.append(vac.location);
});