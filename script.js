var counter = 0;

$('#id_show').click(function() {
    var display = $('#id_rect').css('display');
    var textShow = $('#id_show').text();
    if (display == 'none') {
        $('#id_rect').slideDown();
        $('#id_show').text('Hide');
        $('.message').hide();
        $('#id_hint').text('Change color');
        counter += 1;
        $('#id_counter').text(counter);
    } else {
        $('#id_rect').slideUp();
        $('#id_show').text('Show');
        $('#id_hint').text('Hint');
    }
});

$('#id_hint').click(function() {
    var display = $('#id_rect').css('display');
    if (display == 'none') {
        $('.message').show();
    } else {
        var background = $('#id_rect').css('background-color');
        var color = getColor(background);
        $('#id_rect').css('background-color', color);
    }
});

function getColor(background) {
    var number = Math.random() * 100;
    var color;
    if (number < 33.33) {
        color = 'rgb(255, 0, 0)';
    } else if (number > 66.67) {
        color = 'rgb(255, 165, 0)';
    } else {
        color = 'rgb(0, 128, 0)';
    }
    if (color === background) {
        color = getColor(background);
    }
    return color;
}
