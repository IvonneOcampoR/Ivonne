// object literal

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Liberty Av.",
        number:"362-G"
    },
    workingHours:{
        days:"Mon-Fri",
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

document.querySelector(".info").innerHTML=`<p> ${name} <br> ${street} , ${number} <br> ${days}  from ${open} to ${close} <br> ${phone}`;

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

//const pet1 = new Pet("Peluchin",11,"Chihuahua","Male","Shower","Ivonne","33547860");
//salon.pets.push(pet1);



var textname =document.getElementById('petName');
var textage =document.getElementById('petAge');
var textbreed =document.getElementById('petBreed');
var textgender =document.getElementById('petGender');
var textservice =document.getElementById('petService');
var textowner =document.getElementById('ownerName');
var textphone =document.getElementById('contactPhone');

function register(){
    const thePet = new Pet (textname.value,textage.value,textbreed.value,textgender.value,textservice.value,textowner.value,textphone.value);
    
    salon.pets.push(thePet);
    alert("Pet Registered");
    clean();
    displayPet(thePet);
}

function clean(){
   textname.value="";
   textage.value="";
   textbreed.value="";
   textgender.value="";
   textservice.value="";
   textowner.value="";
   textphone.value="";
}

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}">
                    <td>${aPet.name} </td>
                    <td>${aPet.age} </td>
                    <td>${aPet.breed} </td>
                    <td>${aPet.gender} </td>
                    <td>${aPet.service} </td>
                    <td>${aPet.ownerName} </td>
                    <td>${aPet.phoneContact} </td>
                    <td>
                    <button onclick='remove("${aPet.id}");'> Delete </button>
                    </td>`;

    tBody.innerHTML+=row;
}

function remove(petId){
    var tr = document.getElementById(petId);
    var indexDelete;
   
    for(var i=0;i<salon.pets.length;i++){
        var selectedPet = salon.pets[i];
        
        if(selectedPet.id == petId)
         {
             indexDelete=i;
         }
    }
    salon.pets.splice(indexDelete,1);
    tr.remove();
   
}