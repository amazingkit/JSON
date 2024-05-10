$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<li class="astronaut"><p><strong>Name:</strong> ' + d['name'] + '</p><p><strong>Craft:</strong> ' + d['craft'] + '</p></li>');
    });
});




"message": "success",
"people": 
    [
    {
     "name": "Jasmin Moghbeli",
     "craft": "ISS"
     },
    {
    "name": "Andreas Mogensen",
    "craft": "ISS"
    },
    {
    "name": "Satoshi Furukawa",
    "craft": "ISS"
    },
    {
    "name": "Konstantin Borisov",
    "craft": "ISS"
    },
    {
    "name": "Oleg Kononenko",
    "craft": "ISS"
    },
    {
    "name": "Nikolai Chub",
    "craft": "ISS"
    },
    {
    "name": "Loral O'Hara",
    "craft": "ISS"
    }
    ],
"number": 7
}
