document.addEventListener('DOMContentLoaded', (event) => {

    let topBar = document.querySelector('.top');
    let hamburgerMenuClicked = document.querySelector('.top__hamburger-menu');
    let foooterClicked = document.querySelectorAll('.footer__column-title');

    const scrollFunction = () => {
        if (window.pageYOffset > topBar.offsetTop) {
            topBar.classList.add("top--navigation-scroll");
        } else {
            topBar.classList.remove("top--navigation-scroll");
        }
    };

    window.addEventListener('scroll', scrollFunction);

    hamburgerMenuClicked.addEventListener('click', function () {
        topBar.classList.toggle('hamburger-menu--clicked');
    });

    foooterClicked.forEach((e) => {
        e.addEventListener('click', function () {
            this.classList.toggle('footer--clicked');
        })
    });

});