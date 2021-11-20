// Right side menu 
let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
  // console.log("button clicked");
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// gallery 

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {

    // reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // change current images to src of clicked images
   current.src = e.target.src;

   // Add fading class
   current.classList.add('fade-in');

   //Remove fade-in class after 0.5seconds
   setTimeout(() => current.classList.remove('fade-in'),500);

   //change the opacity to opacity variable
   e.target.style.opacity = opacity;
}