const pinkButton = document.getElementById('ice-cream-pink');

pinkButton.addEventListener('click', () => {
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];
    header.style.cssText = "background: linear-gradient(180deg, var(--FIRST-HEADER-COLOR) 44.17%, var(--SECOND-HEADER-COLOR) 100%);"
    footer.style.cssText = "background: var(--FOOTER-COLOR); color: var(--TEXT)"
});