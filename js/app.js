// Data structure to represent all sections for the page
const sections = Array.from(document.getElementsByTagName("section")); 
//create, say, an unordered list (i.e., bulleted list) in HTML from this structure, and where you be placing that list.
const order = document.getElementById('navbar__list');
// All nav-links for the page
const nav = document.getElementById("navbar__list");
const navLink = nav.getElementsByClassName("menu__link");
//scroll to top of site
const toTop = document.querySelector(".to-top");
//Hide nav 
const header = document.querySelector('.page__header')

const createLi = () => {
    for(section of sections){
      const listItem = document.createElement('li');
      const listItemLink=document.createElement('a');
      // use the section data-nav to fill the <a> tag
      listItemLink.className='menu__link';
      listItemLink.href = '#'+section.id;
      listItemLink.textContent=section.dataset.nav;
      listItem.appendChild(listItemLink);
      order.appendChild(listItem);
    }
}
createLi();

function makeActive(e) {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate. 
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
        if (!section.classList.contains('your-active-class')) {
          section.classList.add('your-active-class');
        }
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove('your-active-class')
    }
  }
}


// Make sections active
document.addEventListener("scroll", function() {
  makeActive();
});

//Add smooth scrolling{got insp from codefoxx on youtube}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Add active class to the current nav-link to highlight it 
function navActive() {
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}}

document.addEventListener("scroll", function() {
  navActive();
});

//Scroll To Top
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("act");
    toTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,

        left: 0,
        behavior: 'smooth'
      });
    })
  } else {
    toTop.classList.remove("act");
  }
})


//Hide nav

const hideNav = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      header.style.display = "none";
    }else{
      header.style.display = "initial";
    }
  })
}

let scrollPos = false;
   window.addEventListener('scroll', function(){
      if( !scrollPos ) {
         scrollPos = true;
         (!window.requestAnimationFrame)
            ? setTimeout(hideNav, 250)
            : requestAnimationFrame(hideNav);
      }
});
