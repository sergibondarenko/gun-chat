var gun = Gun('https://gunjs.herokuapp.com/gun').get('tutorial/chat/app');
$('form').on('submit', function(event) {
    event.preventDefault();
    var message = {};
    message.who = $('form').find('input').val();
    message.what = $('form').find('textarea').val();
    message.when = new Date().getTime();
    gun.set(message);
    $('form').find('textarea').val('');
});
gun.map().val(function(message, id) {
    if (!message) {
        return;
    }
    var $li = $(
        $('#' + id).get(0) ||
        $('.model').find('.message').clone(true).attr('id', id).appendTo('ul')
    );
    $li.find('.who').text(message.who);
    $li.find('.what').text(message.what);
    $li.find('.when').text(message.when);
});
