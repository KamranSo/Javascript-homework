
// Ex1


//  const barmenu = document.querySelector(".barmenu");
//  const barcolor = document.querySelector(".barcolor");
//  const btnMenu =document.querySelector(".btn");
 

//  btnMenu.onclick=function(){
//      barmenu.innerText = "";
//      barcolor.classList.remove("opacity");
//      barmenu.appendChild(barcolor)
//     let count = 0;
//     let interval = setInterval(() => { 
        
//         count=count + 5 ;
//         barcolor.style.width=count + "%"
//         if(count == 100){
            
//             barcolor.classList.add("opacity");
            
//              barmenu.innerText = "Successfully sent!"
//              clearInterval(interval)
//         }
        
        
//     }, 1000);
    
    
     
//  }

// Ex2
// let interval
// let count = 0;
// const barmenu = document.querySelector(".barmenu");
// const barcolor = document.querySelector(".barcolor");

// barmenu.addEventListener("mouseover", function(){
// barmenu.innerText ="Click on the bar to cancel send"
//     clearInterval(interval);
// });
// barmenu.addEventListener("mouseout", function(){
//     barmenu.innerText ="";
//     barmenu.appendChild(barcolor)
//     interval = setInterval(() => { 
        
//         count=count + 5 ;
//         barcolor.style.width=count + "%"
//         if(count >=100){

//            clearInterval(interval)
//             count = 95;
//                     }
//     }, 1000);
    
//     });



// Ex3

// let interval
// let count = 0;
// const barmenu = document.querySelector(".barmenu");
// const barcolor = document.querySelector(".barcolor");

// barmenu.addEventListener("mouseover", function(){
//     barmenu.onclick=function(){
     
//         return barmenu;
//     }


//     clearInterval(interval);
// });
// barmenu.addEventListener(`mouseout`, function(){
//         barmenu.innerText ="";
//         barmenu.appendChild(barcolor)
//         interval = setInterval(() => { 
            
//             count=count + 5 ;
//             barcolor.style.width=count + "%"  
//               clearInterval(interval)
//             if(count >=100){
    
           
//                 // return barmenu;
//                 console.log("barmenu");
                
//                 count = 95;
//                         }
//         }, 100);
     
//         });
        





//EX-5

// const userName = document.querySelector('.username');
// const userSurname = document.querySelector('.usersurname');
// const userEmail = document.querySelector('.useremail');
// const userPassword = document.querySelector('.userpassword');
// const confirmPassword = document.querySelector('.confirmpassword');
// const alertDiv = document.querySelector('.alert');
// document.querySelector('.send').addEventListener("click", function (){
//     alertDiv.innerText = "";
//     alertDiv.classList.add("d-none")
//     //check name/surname is longer 3?
//     if (userName.value.length < 3 || userSurname.value.length < 3 || userName.value[0] !== userName.value[0].toUpperCase() || userSurname.value[0] !== userSurname.value[0].toUpperCase()) {
//         alertDiv.classList.remove("d-none")
//         alertDiv.innerText = "Your name/surname is too short or is not a upper case"
//         return
//     }
//     CheckNameandSurnameisNaN(userName);
//     CheckNameandSurnameisNaN(userSurname);
//     //check email
//     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!re.test(String(userEmail.value).toLowerCase())) {
//         alertDiv.classList.remove("d-none")
//         alertDiv.innerText = "  Your email is not valid"
//         return false;
//     }
//     //check password
//     if (userPassword.value.length<8) {
//         alertDiv.classList.remove("d-none")
//         alertDiv.innerText = "Your passwword is short it must be longer than 8 character"
//         return
//     }
//     if (!userPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[@!#_])/)) {
//         alertDiv.classList.remove("d-none")
//         alertDiv.innerText = "Your password is not valid(Please check passwor must contain: min 1 letter and number,one of @!#_ these simvols)";
//         return
//     }
//     if (confirmPassword.value !== userPassword.value) {
//         alertDiv.classList.remove("d-none")
//         alertDiv.innerText = "Passwords are not match"
//         return
//     }
//     alertDiv.classList.remove("d-none")
//     alertDiv.innerText = "Sent"
// })
// function CheckNameandSurnameisNaN(input) {
//     for (let i = 0; i < input.value.length; i++) {
//         if (!isNaN(input.value[i])) {
//             alertDiv.classList.remove("d-none")
//             alertDiv.innerText = "Ur name/surname contains a number ?"
//             break
//         }
//     }
// }


//EX-6

const countries = ["Azerbaycan", "Turkiye", "Italiya", "Fransa",];
const cities = [{ name: "Baku", country: "Azerbaycan" }, { name: "Qazax", country: "Azerbaycan" }, { name: "Gence", country: "Azerbaycan" },
{ name: "Istanbul", country: "Turkiye" }, { name: "Ankara", country: "Turkiye" },{ name: "Trabzon", country: "Turkiye" },
{ name: "Roma", country: "Italiya" }, { name: "Turin", country: "Italiya" }, { name: "Napoli", country: "Italiya" },
{ name: "Paris", country: "Fransa" }, { name: "Nice", country: "Fransa" }, { name: "Lyon", country: "Fransa" }]
const countriesSelectBox = document.querySelector('#countries');
const citiesSelectBox = document.querySelector('#cities');
let option;
[...countries].map(country =>{
    option = document.createElement("option");
    option.append(country);
    countriesSelectBox.appendChild(option);
})
countriesSelectBox.addEventListener('mouseout', function(){
    citiesSelectBox.innerHTML = "";
    [...cities].map(city=>{
        if (city.country == countriesSelectBox.value) {
            option = document.createElement('option');
            option.append(city.name);
            citiesSelectBox.append(option);
        }
    })
});









