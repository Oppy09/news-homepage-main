let hamburgerButton = $(".hamburger-icon");
let closeButton = $(".close-icon");
let navMenu = $(".navigation-menu");
let navLinks = $(".links");


hamburgerButton.click(()=> {
    setTimeout(()=> {
        hamburgerButton.addClass("invisible");
        closeButton.removeClass("invisible");
        navMenu.removeClass("invisible");
    }, 250);
});

closeButton.click(()=> {
    setTimeout(()=> {
        hamburgerButton.removeClass("invisible");
        closeButton.addClass("invisible");
        navMenu.addClass("invisible");
        navMenu.addClass("invisible");
    }, 250);
});

navLinks.click(()=> {
    hamburgerButton.removeClass("invisible");
    closeButton.addClass("invisible");
    navMenu.addClass("invisible");
});