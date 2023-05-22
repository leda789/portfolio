//moving ladybug
const ladybug = document.querySelector('.ladybug');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', _ => {
  const currentScrollPos = window.scrollY;
  if(currentScrollPos > prevScrollPos) {
    ladybug.style.transform = 'translateY(-' + currentScrollPos/1.6 +'px) translateX(' + (-currentScrollPos * 3) + 'px)'
  }
  else {
    ladybug.style.transform = 'scaleX(-1) translateY(-' + currentScrollPos/1.6 +'px) translateX(' + currentScrollPos * 3 + 'px)';
  }
  prevScrollPos = currentScrollPos;
  
//reveal item when scrolled to
  let revealLength = document.querySelector('header').clientHeight + document.querySelector('nav').clientHeight - (window.innerHeight/2);
  if(currentScrollPos > revealLength) {
    document.querySelector('#intro').style.opacity = 1;
  }
  console.log(window.innerHeight);
})


//modal window
const modalOverlay = document.querySelector('.modalOverlay'),
      modalBtn = document.querySelector('#modalButton'),
      closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', _ => {
  modalOverlay.style.display= "block";
})
closeBtn.addEventListener('click', _ => {
  modalOverlay.style.display = "none";
})
window.addEventListener('click', e => {
  if(e.target == modalOverlay) {
    modalOverlay.style.display = "none";
  }
})

//mobile nav
const navMenu = document.querySelector('.navMenu');
const navLinks = document.querySelector('.links');
const navLinksHeight = navLinks.clientHeight;

if(window.innerWidth < 600) {
  navLinks.style.height = '0';
}
navMenu.addEventListener('click', _ => {
  if(window.innerWidth < 600) {
    if (navLinks.classList.contains('open')) {
      navLinks.style.height = "0";
      navLinks.classList.remove('open');
    }
    else {
      navLinks.style.height = navLinksHeight + 'px';
      navLinks.classList.add('open');
    }
  }
})

//copy phone number
const phoneCopy = document.querySelector('.phone');
const phoneBtn = document.querySelector('.phoneNum');
const phoneNum = phoneBtn.innerHTML;
phoneCopy.addEventListener ('click', _ => {
  navigator.clipboard.writeText(phoneNum);
  phoneBtn.innerHTML = "Copied!";
  
  setTimeout(_ => {
    phoneBtn.innerHTML = phoneNum;
  }, 3000)
})