$(function () {
    $("div.item").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.item:hidden").slice(0, 4).fadeIn();
        if ($("div:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});
