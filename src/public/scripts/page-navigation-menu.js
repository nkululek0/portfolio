$(document).ready(function () {
    const openMenuSelector = '.menu-icons-container .open-menu';
    const closeMenuSelector = '.menu-icons-container .close-menu';
    const navSelector = '.nav';

    // Open menu on click functionality
    $(openMenuSelector).click(function () {
        $(this).hide();
        $(closeMenuSelector).show();
        $(navSelector).show();
    });

    // Close menu on click functionality
    $(closeMenuSelector).click(function () {
        $(this).hide();
        $(openMenuSelector).show();
        $(navSelector).hide();
    });
});