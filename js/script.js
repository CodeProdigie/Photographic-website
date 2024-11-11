/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header')

    header.classList.toggle('sticky',window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ====================== swiper js =======================
const swiper=new Swiper('.swiper',{
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
})

/*==================== typed js ====================*/

const typed=new Typed('.multiple-text',{
    strings:['Take Quality Photos & Videos','With your Love Ones','And Your Entire Family'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

/*==================== scroll reveal ====================*/

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-content h1',{ origin:'left'});
ScrollReveal().reveal('.home-content p',{ origin:'right'});


// const form=document.querySelector('form');
// const fullname=document.getElementById('name');
// const email=document.getElementById('email');
// const subject=document.getElementById('subject');
// const phone=document.getElementById('phone');
// const mess=document.getElementById('message');

// function sendemail(){
//     const bodyMessage=`Full Name: ${fullname.value}<br> 
//                        Email: ${email.value}<br> 
//                        Phone Number: ${phone.value}<br>
//                        Subject: ${subject.value}<br>
//                        Message: ${message.value}`;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "brandonngeh65@gmail.com",
//         Password : "E4C64CF5051475721CA325B9FCDF3A8A22A2",
//         To : ' b90033909@gmail.com',
//         From : "email.value",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message =>{
//         if(message == "OK"){
//             Swal.fire({
//                 icon: "success",
//                 title: "Sucess",
//                 text: "Message Sent Succesfully",
               
//               });
//         }
//       }
//     );
//     }


function sendwhatsapp(){
    var phonenumber="+23774766654";
    
var fullname=document.getElementById('name').value;
var email=document.getElementById('email').value;
var subject=document.getElementById('subject').value;
var mess=document.getElementById('message').value;

var url="https://wa.me/" + phonenumber + "?text="
+"My name is  :"+fullname+"%0a"
+"and my email is  :"+email+"%0a"
+"this chat is based on   :"+subject+"%0a"
+"  "+mess;


window.open(url, '_blank').focus();
}


// function checkInputs(){
//     const items=document.querySelectorAll(".item");

//     for (const item of items){
//         if(item.value == ""){
//             item.parentElement.classList.add("error")
//         }
//     }
// }

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendemail();
});
 
// window.addEventListener("load",()=>{
//     document.querySelector(".loader").classList.add("loader--hidden")
//     document.querySelector(".loader").addEventListener("transitionened",()=>{
//         document.body.removeChild(document.querySelector(".loader"))
//     })
//    })






