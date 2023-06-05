$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var printName = $('#locCheck');
    var town = localStorage.getItem('placeName', placeName);


    confirmBtn.on('click', function (event) {
        event.preventDefault();
        placeName = inputEl.val();
        console.log('placeName: ' + placeName);
        localStorage.setItem('placeName', placeName);
        printSelected();
    });
    function printSelected() {
        var town = localStorage.getItem('placeName', placeName);
        console.log('town: ' + town);
        printName.empty();
        printName.text(town);

    }
    printSelected();

    var APIKey = '05f46a74c28156c7a4309df0e0f810d4';
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + town + '&limit=5&appid=' + APIKey)
        .then(function (response) { return response.json() })
        .then(function (locationData) {
            var lat;
            var lon;

            var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + town + '&appid=' + APIKey;

            fetch(queryURL)
                .then(function (response) { return response.json(); })
                .then(function (locationData) {
                    // var lat = locationData[0].lat;
                    //idk from here
                })
        })
});
