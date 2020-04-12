$(document).ready(function () {
    $("#country").change(function () {
        var index = $(this).get(0).selectedIndex;
        $('.city').hide().eq(index).show();
    });
});