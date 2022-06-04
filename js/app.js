
// Data structure to represent all sections for the page
const sections = document.querySelectorAll('section');
//create, say, an unordered list (i.e., bulleted list) in HTML from this structure, and where you be placing that list.
const order = document.getElementById('navbar__list');
// All nav-links for the page
const nav = document.getElementById("navbar__list");
const navLink = nav.getElementsByClassName("menu__link");

const createLi = () => {
    // let sectionName = section.getAttribute('data-nav');
    // let sectionLink = section.getAttribute('id');
    //Creating the list items
    // creating a new <li> element
    let list1 = document.createElement('li');
    let list2 = document.createElement('li');
    let list3 = document.createElement('li');
    let list4 = document.createElement('li');
    list1.innerHTML = `<a href='#section1'  class=' active menu__link '>About Me</a>`;
    list2.innerHTML = `<a href='#section2'  class='menu__link'>Services</a>`;
    list3.innerHTML = `<a href='#section3'  class='menu__link'>Blog</a>`;
    list4.innerHTML = `<a href='#section4'  class='menu__link'>Contact</a>`;
    order.appendChild(list1);
    order.appendChild(list2);
    order.appendChild(list3);
    order.appendChild(list4);
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




