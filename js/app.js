/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// sections global variable
const parts = document.querySelectorAll('section');
// nav global variables
const navBar = document.getElementById('navbar__list');
const items = document.querySelectorAll('ul.navbar__list > li');
let listItemsNo = parts.length
const toTop = document.querySelector(".to-top");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createList() {
    for (section of parts) {
        partName = section.getAttribute('data-nav');
        partLink = section.getAttribute('id');
        // create each list item
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class='menu__link' data-nav='${partLink}' href='#${partLink}'> ${partName}  </a>`
        // Add listItem to navBar
        navBar.appendChild(listItem);
    }
}

function viewportPart (sec) {
    let partPosition = sec.getBoundingClientRect()
    return (
        partPosition.top >= 0 &&
        partPosition.left >= 0 &&
        partPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        partPosition.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
}


// Changes background of section viewed

function toggleActive(){
    for (section of parts) {
        if (viewportPart(section)) {
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
            }
        } else {
            section.classList.remove('your-active-class')
        }
    }
}

// nav-items active
function navActive(){
    for (li of items) {
        if (viewportPart(li)) {
            if (!li.classList.contains('nav-active-class')) {
                li.classList.add('nav-active-class')
            }
        } else {
            li.classList.remove('nav-active-class')
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createList();
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActive, navActive);
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to top on click


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Set sections as active


