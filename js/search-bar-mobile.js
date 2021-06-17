
const gridTemplateAreaAfterTouch = `
grid-template-areas:
"logo logo . search-bar search-bar"
". ice-cream-blue ice-cream-pink ice-cream-orange .";
`

const searchBarMobile = document.querySelector('.search-bar');

searchBarMobile.addEventListener('touchstart', (event)=> {
    searchBar.style.display = "block";
    searchBarMobile.style.width = "26rem";

    const header = document.getElementsByTagName('header')[0]
    header.style.cssText = gridTemplateAreaAfterTouch;
})