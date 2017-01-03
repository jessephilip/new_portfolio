// initialize side-nav
$('.button-collapse').sideNav();

// initialize tabs
$('ul.tabs').tabs();

// Open side-nav on logo click
$(".brand-logo").on("click", openSideNav);

// function to open sideNav
function openSideNav() {
    // Initialize collapse button
    $(".button-collapse").sideNav("show");
}
