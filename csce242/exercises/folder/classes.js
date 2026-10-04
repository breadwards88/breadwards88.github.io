class Dog {
    constructor (title, breed, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");
        section.classList.add("project-card");

        section.append(this.dogname());
        section.append(this.dogImage());
        
        const moreInfo = this.moreInfo();
        section.append(moreInfo);
        moreInfo.classList.add("hidden");

        return section;
    }

    title() {
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        h3.append(a);
        a.textContent = this.title;
        a.href="#";

        return h3;
    }
    
    dogImage() {
        const img= document.createElement("img");
        img.src= "images/classes$(thispic)";

    }

    dogName() {
        const h3 = document.createElement("h3");
        const a = document.createElement("")
    }
}



const dogs = [];

// coco = new Dog("coco", "yorkie", 5, "small", "yorkie.jpg");
//dogs.push(coco)

dogs.push(new Dog("coco", "yorkie", 5, "small", "yorkie.jpg"));



const dogDiv = document.querySelector(".dogs");

dogs.forEach(())