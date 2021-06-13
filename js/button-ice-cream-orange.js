const orangeButton = document.getElementById('ice-cream-orange');

orangeButton.addEventListener('click', () => {
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];
    header.style.cssText = "background: linear-gradient(180deg, var(--ORANGE-BACKGROUND) 44.17%, var(--SECOND-HEADER-COLOR) 100%);"
    footer.style.cssText = "background: var(--ORANGE-BACKGROUND); color: var(--MEDIUM-TEXT)"
});