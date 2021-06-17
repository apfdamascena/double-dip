orangeButton.addEventListener('click', () => {
    const header = document.getElementsByTagName('header')[0];
    const footer = document.getElementsByTagName('footer')[0];
    header.style.cssText = "background: linear-gradient(180deg, var(--ORANGE-BACKGROUND) 44.17%, var(--SECOND-HEADER-COLOR) 100%);";
    footer.style.cssText = "background: var(--ORANGE-BACKGROUND); color: var(--MEDIUM-TEXT)";

    allButtons.forEach((button) => {
        const icon = button.getElementsByTagName('img')[0];
        
        if(icon.classList.contains('up')){
            icon.classList.toggle('up');
        }
    })

    const icon = orangeButton.getElementsByTagName('img')[0];
    icon.classList.toggle('up');
});