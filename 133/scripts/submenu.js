$(function () {
    // Script for submenu:
    $('.hwParts').hide();
    $('#overview').show();
    $('#overviewButton').addClass('activeSubMenuButton');

    $('.showSingle').click(function () {
        $('.hwParts').hide();
        $('.showSingle').removeClass('activeSubMenuButton');
        $('#' + $(this).attr('target')).show();
        $($(this)).addClass('activeSubMenuButton');
    });
});
