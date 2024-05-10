document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
    var number = data['number'];
    document.getElementById('SpacePeople').textContent = number;

    data['people'].forEach(function (d) {
    var astronautInfo = '<li class="astronaut"><p><strong>Name:</strong> ' + d['name'] + '</p><p><strong>Craft:</strong> ' + d['craft'] + '</p></li>';
    document.getElementById('astroNames').innerHTML += astronautInfo;
    });
    })
    .catch(error => console.error('Error fetching data:', error));
    });





