//Show the details then the picture is clicked
const menuCoffeeItems = document.querySelector('.menu__items')
const menuFoodItems = document.querySelector('.menu__items:last-child')
const span = document.querySelectorAll('.menu__items span')

function showDetails(e) {
  const target = e.target;
  target.classList.toggle('active'); 
  const parent = target.parentNode; 
  const image = parent.children[0];
  image.classList.toggle('flip')
}

menuCoffeeItems.addEventListener('click', (event)=>{
  showDetails(event)
});
menuFoodItems.addEventListener('click', (event)=>{
  showDetails(event)
});

//Fade out home by scrolling down


//Show about-me-card when it is shown more than 30%


// Show the menu when the toggle button is clicked
  const toggleBtn = document.querySelector('.navbar__toggle-btn'); 
  const navbarMenu = document.querySelector('.navbar__menu');

  toggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
  });