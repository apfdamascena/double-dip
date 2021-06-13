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
        } else {
            iceCream.style.display = "none"
        }
    })

    if(written == ""){
        mainSection.style.display = "grid";
    }
})