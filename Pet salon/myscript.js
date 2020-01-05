// object literal

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Liberty Av.",
        number:"362-G"
    },
    workingHours:{
        days:"Mon-Fris",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[],
    count: function(){
      alert("We have : " + salon.pets.length + " pets registered. ");
    }
}

// onject destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.getElementById("col1").innerHTML=`<h2 class="h2"> ${name} </h2> <p class="lead"> Phone number: ${phone} </p>`;

document.getElementById("col2").innerHTML=`<p class="lead"> Addres Information </p> <p class="lead"> Street: ${street} ${number} </p>`;

document.getElementById("col3").innerHTML=`<p class="lead"> It's open from ${days} ${open} to ${close}. </p>`;

//object constructor

class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo = function(){
        console.log("owner name: " + this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
    }
    feed = function() {
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding ... ");
    }
    status = function(){
        console.log("Hunger: " + this.hunger + "\n" + this.happiness);
    }
   
}

const pet1 = new Pet("Peluchin",11,"Chihuahua","Male","Shower","Ivonne","33547860");
const pet2 = new Pet("Scoby",5,"Great Dane","Male","Nail cut","Marcus","88976504");
const pet3 = new Pet("Leila",2,"French Puddle","Female","Haircut","Sabrina","378937810");

console.log(salon);

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

console.table(salon.pets);

//display an alert message the number of pets

salon.count();

var text = " ";
for(var i=0;i<salon.pets.length;i++)
{
   text += `<p> Name: ${salon.pets[i].name} </p> <br> Age: ${salon.pets[i].age} </br> <br> Gender: ${salon.pets[i].gender} </br> <br> Breed: ${salon.pets[i].breed} </br>`;
}

document.getElementById("content").innerHTML=text;