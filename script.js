
$('#id_show').click(function() {
    var display = $('#id_rect').css('display');
    var textShow = $('#id_show').text();
    // console.log(display);
    // console.log(textShow);
    if (display == 'none') {
        $('#id_rect').slideDown();
        $('#id_show').text('Hide!');
    }else {
        $('#id_rect').slideUp();
        $('#id_show').text('Show!');
    }
});
