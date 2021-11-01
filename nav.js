const navSlide = () => {
    const navbutton = document.querySelector('.navbutton');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    navbutton.addEventListener('click', () => {
        nav.classList.toggle('navbar-active');

        navLinks.forEach((link, index)=> {
            if (link.style.animation){
                link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            console.log(index / 7);
            }
        })
    });
    
}
navSlide();