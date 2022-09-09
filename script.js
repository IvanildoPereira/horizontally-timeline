const containerTimeline = document.getElementsByClassName('container_timeline_full')[0];
const timeline = containerTimeline.getElementsByClassName('timeline')[0];
const rectGradient = containerTimeline.getElementsByClassName("rect_gradient")[0];
const cardsContainer = containerTimeline.getElementsByClassName("container_cards_timeline")[0]
const cardsTimeline = timeline.getElementsByClassName('timeline_card');
const dotContainer = containerTimeline.getElementsByClassName("dot_container")[0];
const prevButton = containerTimeline.getElementsByClassName("button-prev")[0];
const nextButton = containerTimeline.getElementsByClassName("button-next")[0];
let dotsBtn;
let selectedCard = 0;


const createDots = () =>{
    let cardLength = cardsTimeline.length;
    for(let index = 0; index < cardLength; index++){
        let newDot = document.createElement("button");
        newDot.className = "dot_btn";
        dotContainer.appendChild(newDot);
    } 

    dotsBtn = document.querySelectorAll('.dot_btn');
    dotsBtn[selectedCard].classList.add("active_dot")  
}

document.addEventListener("DOMContentLoaded", () => {
    createDots();
    rectGradient.style.width = cardsContainer.scrollWidth + "px";
    dotsBtn.forEach((dotBtn, index) =>{
        dotBtn.addEventListener('click', () => setDotSelected(dotBtn, index)) 
    })
});



prevButton.addEventListener("click", () => {
    let previousCard = selectedCard - 1;
    selectedCard = previousCard <= 0 ? 0 : previousCard;
    scrollContainer();
    setDotSelected(dotsBtn[selectedCard], selectedCard);
})

nextButton.addEventListener("click", () => {
    let nextCard = selectedCard + 1;
    let cardsLength = (cardsTimeline.length - 1);
    selectedCard = nextCard >= cardsLength ? cardsLength : nextCard;
    scrollContainer();
    setDotSelected(dotsBtn[selectedCard], selectedCard);
})

const scrollContainer = () =>{
    timeline.scroll({
        left: cardsTimeline[selectedCard].offsetLeft,
        behavior: "smooth"
    })
}

const setDotSelected = (selectedDot, indexDot) => {
    dotsBtn.forEach((dotBtn) => {
        dotBtn.classList.remove("active_dot")
    }); 

    selectedCard = indexDot;   
    scrollContainer();

	selectedDot.classList.add("active_dot")
}

