$(function () {
    // Script for submenu:
    $('.hwParts').hide();
    $('#overview').show();
    $('#overviewButton').addClass('activeSubMenuButton');

    $('.showSingle').click(function () {
        $('.hwParts').hide();
        $('.showSingle').removeClass('activeSubMenuButton');
        $('#' + $(this).attr('data-target')).show();
        $($(this)).addClass('activeSubMenuButton');
    });
});