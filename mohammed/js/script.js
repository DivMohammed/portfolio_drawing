var buttons = document.querySelectorAll('.button');
var cards = document.querySelectorAll('.card');


buttons.forEach((button)=>{
    button.addEventListener( 'click', event => {
        const cc = event.target.parentElement.parentElement
        cc.classList.add('is-flipped')
    });
  });

addEventListener("scroll", function() {
    cards.forEach((card)=>{
        card.classList.remove("is-flipped")
    })
}); 
