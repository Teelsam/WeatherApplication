$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var printName = $('#locCheck');
    var townUI = $('#buttons');
    var town1 = $('#town1');
    var counter = 0;
    var town = localStorage.getItem('placeName', placeName);
    var bigWeather = $('#bigWeather');
    var bigDate = $('#bigDate');
    var symbol0 = $('symbol0');
    var temp0 = $('#temp0');
    var wind0 = $('#wind0');
    var hum0 = $('#hum0');
    var temp1 = $('#temp0');
    var wind1 = $('#wind0');
    var hum1 = $('#hum0');
    var temp2 = $('#temp0');
    var wind2 = $('#wind0');
    var hum2 = $('#hum0');
    var temp3 = $('#temp0');
    var wind3 = $('#wind0');
    var hum3 = $('#hum0');
    var temp4 = $('#temp0');
    var wind4 = $('#wind0');
    var hum4 = $('#hum0');
    var temp5 = $('#temp0');
    var wind5 = $('#wind0');
    var hum5 = $('#hum0');
    var date1 = $('#date1');
    var date2 = $('#date2');
    var date3 = $('#date3');
    var date4 = $('#date4');
    var date5 = $('#date5');
    var time = dayjs().format("MMM DD");
    var fullTime = dayjs().format('MMM DD, YYYY');
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
        printName.text(town);//names city from storage

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

            var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + town + '&units=metric&appid=' + APIKey;

            fetch(queryURL)
                .then(function (response) { return response.json(); })
                .then(function (weatherData) {
                    console.log(weatherData);
                    bigDate.text(town + ', ' + fullTime);
                    var icon = (weatherData.weather[0].icon);
                    console.log('this is icon: ' + icon);
                    symbol0.attr('src', './icon/{icon}.png'); //loads the icon
                    temp0.text('Temp: ' + weatherData.main.temp + '°C');
                    wind0.text('Wind: ' + weatherData.wind.speed + "MPH");
                    hum0.text('Humidity: ' + weatherData.main.humidity + '%');




                })
        })
});
