
const correctGrid = `
grid-template-areas:
"logo logo . search-bar search-bar"
". ice-cream-blue ice-cream-pink ice-cream-orange .";`

window.addEventListener('mousemove', () => {
    const width = window.innerWidth;
    const header = document.getElementsByTagName('header')[0];

    if(width > 425 && width < 843){
        header.style.cssText = correctGrid;
    }
})