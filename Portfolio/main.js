// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 
// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
// submit
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  // prevent the default form submission
  event.preventDefault();

  // get the values of the input elements
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // create a mailto: link with the values
  const mailtoLink = `mailto:sbt5731@gmail.com?subject=Contact Form Submission&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}`;

  // open the mailto: link in a new window or tab
  window.open(mailtoLink);
});


