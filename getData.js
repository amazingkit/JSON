$.getJSON('https://raw.githubusercontent.com/unnamedActant/Example_JSON/main/astros.json', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<li class="astronaut"><p><strong>Name:</strong> ' + d['name'] + '</p><p><strong>Craft:</strong> ' + d['craft'] + '</p></li>');
    });
});





