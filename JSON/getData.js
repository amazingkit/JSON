$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<li class="astronaut"><p><strong>Name:</strong> ' + d['name'] + '</p><p><strong>Craft:</strong> ' + d['craft'] + '</p></li>');
    });
});