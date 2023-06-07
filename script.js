$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var printName = $('#locCheck');
    var townUI = $('#buttons');
    var town1 = $('#town1');
    var counter = 0;
    var town = localStorage.getItem('placeName', placeName);
    var date1 = $('#date1');
    var date2 = $('#date2');
    var date3 = $('#date3');
    var date4 = $('#date4');
    var date5 = $('#date5');
    var time = dayjs().format("MMM DD,");
    var displayTime = $('#time');

    confirmBtn.on('click', function (event) { //stores searched location
        event.preventDefault();//keeps page from reloading
        placeName = inputEl.val();//reads inputed search to placeName var
        localStorage.setItem('placeName', placeName);//stores placeName to browser storage
        if (placeName = localStorage.getItem('placeName', placeName)) {//sets limits to num of cities
            console.log('place searched is already in history');
            if (counter < 4) { //limits to 4 cities
                counter++;
                printSelected();
                searchHis();
            }
        }
        else if (counter > 4) {//limits to 4 cities WARNING
            console.log('Only four cities at a time please');
        }
        console.log('counter: ' + counter);//checks counters val
    });
    function printSelected() {//places town name in green header
        var town = localStorage.getItem('placeName', placeName);
        console.log('town: ' + town);
        printName.empty();//removes previous name
        printName.text(town + " " + time);//names city from storage

    }
    printSelected();//calls naming function
    function searchHis() { //loads buttons of cities
        var town = localStorage.getItem('placeName', placeName);
        var newTown = $('<button>');//creates button element
        newTown.text(town);
        newTown.attr('class', 'styled');
        console.log(newTown);
        townUI.append(newTown);
        $('#buttons').children().eq(1).attr('id', 'town1');//gives created button El ids
        $('#buttons').children().eq(2).attr('id', 'town2');
        $('#buttons').children().eq(3).attr('id', 'town3');
        $('#buttons').children().eq(4).attr('id', 'town4');
    }
    function loadfromHis() {

    }
    town1.on('click', function () {
        printName.empty();//removes previous name
        printName.text(town);//names city from storage
    });
    var APIKey = 'a0a1f894d727c1a84e8a59473f677e27';
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + town + '&limit=5&appid=' + APIKey)
        .then(function (response) { return response.json() })
        .then(function (locationData) {
            var lat = locationData[0].lat;
            console.log(locationData);
            var lon = locationData[0].lon;

            var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + town + '&appid=' + APIKey;

            fetch(queryURL)
                .then(function (response) { return response.json(); })
                .then(function (weatherData) {
                    console.log(weatherData);
                    date1.text(time);
                    date2.text(time)

                })
        })
});
