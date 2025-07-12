/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if(navToggle){
  navToggle.addEventListener('click',() =>{
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if(navClose){
  navClose.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const  navLink = document.querySelectorAll('.nav_link');

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav_link,we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header');
  // Add a class if the bottom offset is greater than 50 of the v.p
  this.scrollY>= 50? header.classList.add('shadow-header'): header.classList.remove('shadow-header');
}
window.addEventListener('scroll',shadowHeader)

/*=============== SWIPER FAVORITES ===============*/ 

const swiperFavorite = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView :'3',
  centeredSlides: 'true',
})


/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {
  const scrollup = document.getElementById('scroll-up')
// when the scroll is higher than 350 v.p height,add the show-scroll class to the tag with scrollup class
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id')

const scrollActive =() =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

          if(scrollDown > scrollTop && scrollDown <= sectionTop+ sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
  })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay : 300,
  reset:true, //Animations repeat
})

sr.reveal(`.home_data,.favorite_container,.footer_container`)
sr.reveal(`.home_circle,.home_img`,{delay: 600, scale: .5})
sr.reveal(`.home_chips-1,.home_chips-2,.home_chips-3`,{delay: 1000,interval: 100})
sr.reveal(`.home_leaf`,{delay: 1200})
sr.reveal(`.home_tomato-1,.home_tomato-2`,{delay: 1400,interval: 100})
sr.reveal(`.care_img,.contact_img`,{origin: 'left'})
sr.reveal(`.care_list,.contact_data`,{origin: 'right'})
sr.reveal(`.banner_item,.products_card`,{interval: 100})