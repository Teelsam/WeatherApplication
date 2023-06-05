$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var printName = $('#locCheck');
    var townUI = $('#buttons');
    var town1 = $('#town1');
    var counter = 0;

    confirmBtn.on('click', function (event) {
        event.preventDefault();
        placeName = inputEl.val();
        localStorage.setItem('placeName', placeName);
        printSelected();
        searchHis();
        console.log('counter: ' + counter);
    });
    function printSelected() {
        var town = localStorage.getItem('placeName', placeName);
        console.log('town: ' + town);
        printName.empty();
        printName.text(town);

    }
    printSelected();
    function searchHis() {
        var town = localStorage.getItem('placeName', placeName);
        var newTown = $('<button>');
        newTown.text(town);
        newTown.attr('class', 'styled');
        console.log(newTown);
        townUI.append(newTown);
        $('#buttons').children().eq(1).attr('id', 'town1');
        $('#buttons').children().eq(2).attr('id', 'town2');
        $('#buttons').children().eq(3).attr('id', 'town3');
    }
    function loadfromHis() {

    }
    town1.on('click', loadfromHis);
    // var APIKey = '05f46a74c28156c7a4309df0e0f810d4';
    // fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + town + '&limit=5&appid=' + APIKey)
    //     .then(function (response) { return response.json() })
    //     .then(function (locationData) {
    //         var lat;
    //         var lon;

    //         // var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + town + '&appid=' + APIKey;

    //         // fetch(queryURL)
    //         //     .then(function (response) { return response.json(); })
    //         //     .then(function (locationData) {
    //         //         // var lat = locationData[0].lat;
    //         //         //idk from here
    //         //     })
    //     })
});
