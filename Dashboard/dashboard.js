const slideMenu  = document.querySelector('aside');
const menuBtn = document.getElementById('menu--btn--right') ;
const closeBtn =  document.getElementById('icon--btn--close') ;


console.log(menuBtn) ;
console.log (closeBtn);
menuBtn.addEventListener('click', () => {
    slideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    slideMenu.style.display = 'none';
}) ;

