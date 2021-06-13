const testando = `
display: grid;
justify-content: center;
width: 100%;
gap: 3rem;
margin-top: 1.2rem;
grid-template-columns: auto 22rem auto 22rem;
grid-template-rows: repeat(2,auto);
grid-template-areas: 
    "left-principal-card left-first-card right-principal-card right-first-card"
    "left-principal-card left-second-card right-principal-card right-second-card";
margin-bottom: 8rem;`


const searchBar = document.querySelector('input');
const iceCreams = document.getElementsByClassName('ice-cream-box');
const mainSection = document.querySelector('main');

searchBar.addEventListener('keyup', (event) => {
    const written = event.target.value.toLowerCase();

    Array.from(iceCreams).forEach((iceCream) => {
        iceCreamName = iceCream.firstChild.nextSibling.alt.toLowerCase();
        if(iceCreamName.indexOf(written) != -1){
            iceCream.style.display = "flex"
            mainSection.style.display = "flex"
        } else if (iceCreamName.indexOf(written) == -1) {
            iceCream.style.display = "none"
        }
    })

    if(written == ""){
        mainSection.style.display = "grid";
    }
})
console.log(searchBar)