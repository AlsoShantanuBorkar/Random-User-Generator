const  nameDiv = document.querySelector('.name span')
const  locationDiv = document.querySelector('.location span')
const  emailDiv = document.querySelector('.email span')
const  ageDiv = document.querySelector('.dob span')
const  phoneDiv = document.querySelector('.phone span')
const imageDiv = document.querySelector('.image');


async function getUser(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json()
    console.log(data.results);

    const user =data.results[0];
    
    imageDiv.setAttribute('src',user.picture.large)
    
    nameDiv.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;

    locationDiv.innerHTML = user.location.country;

    emailDiv.innerHTML = user.email;

    ageDiv.innerHTML = user.dob.age;

    phoneDiv.innerHTML = user.phone;

}

getUser();
