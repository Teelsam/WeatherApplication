$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var inputAddCity = $('#secLoc');
    var firstSearch = inputAddCity.textContent;
    var printName = $('#locCheck');
    var askLoc = $('#askLoc');
    var townUI = $('#buttons');
    var town1 = $('#town1');
    var counter = 0;
    var town = localStorage.getItem('placeName', placeName);
    var bigDate = $('#bigDate');

    //Here we pull structures from index to load weather panels 
    var symbol0 = $('#symbol0');
    var temp0 = $('#temp0');
    var wind0 = $('#wind0');
    var hum0 = $('#hum0');

    var dateHead1 = $('#dateHead1');
    var symbol1 = $('#symbol1');
    var temp1 = $('#temp1');
    var wind1 = $('#wind1');
    var hum1 = $('#hum1');

    var dateHead2 = $('#dateHead2');
    var symbol2 = $('#symbol2');
    var temp2 = $('#temp2');
    var wind2 = $('#wind2');
    var hum2 = $('#hum2');

    var dateHead3 = $('#dateHead3');
    var symbol3 = $('#symbol3');
    var temp3 = $('#temp3');
    var wind3 = $('#wind3');
    var hum3 = $('#hum3');

    var dateHead4 = $('#dateHead4');
    var symbol4 = $('#symbol4');
    var temp4 = $('#temp4');
    var wind4 = $('#wind4');
    var hum4 = $('#hum4');

    var dateHead5 = $('#dateHead5');
    var symbol5 = $('#symbol5');
    var temp5 = $('#temp5');
    var wind5 = $('#wind5');
    var hum5 = $('#hum5');
    //sets up dayjs time portions
    var time = dayjs().format("MMM DD");
    var fullTime = dayjs().format('MMM DD, YYYY');
    var displayTime = $('#time');

    confirmBtn.on('click', function (event) { //stores searched location
        //event.preventDefault();//keeps page from reloading
        weatherFetch();
        placeName = inputEl.val();//reads inputed search to placeName var
        localStorage.setItem('placeName', placeName);//stores placeName to browser storage
        if (placeName = localStorage.getItem('placeName', placeName)) {//sets limits to num of cities
            console.log('place searched is already in history');
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
    var lastTown = localStorage.getItem('Search1', firstSearch);
    function searchHis() { //loads buttons of cities
        town1.text(lastTown);

    }

    searchHis();
    weatherFetch();
    function weatherFetch() {
        console.log('town in fetch is set to: ' + town);
        var APIKey = 'a0a1f894d727c1a84e8a59473f677e27';
        fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + town + '&limit=5&appid=' + APIKey)
            .then(function (response) { return response.json() })
            .then(function (locationData) {
                var lat = locationData[0].lat; //lattitude of city
                console.log(locationData);
                var lon = locationData[0].lon; // longitude of city
                var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + town + '&units=metric&appid=' + APIKey;
                //This is todays weather
                fetch(queryURL)
                    .then(function (response) { return response.json(); })
                    .then(function (weatherData) {
                        console.log('WeatherData below:');
                        console.log(weatherData);
                        bigDate.text(town + ', ' + fullTime);
                        var icon = (weatherData.weather[0].icon);
                        symbol0.attr("src", "./icons/" + icon + ".png");//loads the icon
                        temp0.text('Temp: ' + weatherData.main.temp + '°C');//loads temp
                        wind0.text('Wind: ' + weatherData.wind.speed + "MPH");//loads windspeed
                        hum0.text('Humidity: ' + weatherData.main.humidity + '%');//loads humidity

                        // this is the five-day forecast
                        var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + APIKey;
                        fetch(forecastURL)
                            .then(function (response) { return response.json(); })
                            .then(function (forecastData) {
                                console.log('Forecast below: ');
                                console.log(forecastData);

                                var forecastIcon = (forecastData.list[7].weather[0].icon);//loads icon name to search our icon folder

                                dateHead1.text(forecastData.list[7].dt_txt);
                                symbol1.attr('src', './icons/' + forecastIcon + '.png'); //loads the icon
                                temp1.text('Temp: ' + forecastData.list[7].main.temp + '°C');//loads temp
                                wind1.text('Wind: ' + forecastData.list[7].wind.speed + "MPH");//loads windspeed
                                hum1.text('Humidity: ' + forecastData.list[7].main.humidity + '%');//loads humidity

                                dateHead2.text(forecastData.list[15].dt_txt);
                                symbol2.attr('src', './icons/' + forecastIcon + '.png'); //loads the icon
                                temp2.text('Temp: ' + forecastData.list[15].main.temp + '°C');//loads temp
                                wind2.text('Wind: ' + forecastData.list[15].wind.speed + "MPH");//loads windspeed
                                hum2.text('Humidity: ' + forecastData.list[15].main.humidity + '%');//loads humidity

                                dateHead3.text(forecastData.list[23].dt_txt);
                                symbol3.attr('src', './icons/' + forecastIcon + '.png'); //loads the icon
                                temp3.text('Temp: ' + forecastData.list[23].main.temp + '°C');//loads temp
                                wind3.text('Wind: ' + forecastData.list[23].wind.speed + "MPH");//loads windspeed
                                hum3.text('Humidity: ' + forecastData.list[23].main.humidity + '%');//loads humidity

                                dateHead4.text(forecastData.list[31].dt_txt);
                                symbol4.attr('src', './icons/' + forecastIcon + '.png'); //loads the icon
                                temp4.text('Temp: ' + forecastData.list[31].main.temp + '°C');//loads temp
                                wind4.text('Wind: ' + forecastData.list[31].wind.speed + "MPH");//loads windspeed
                                hum4.text('Humidity: ' + forecastData.list[31].main.humidity + '%');//loads humidity

                                dateHead5.text(forecastData.list[39].dt_txt);
                                symbol5.attr('src', './icons/' + forecastIcon + '.png'); //loads the icon
                                temp5.text('Temp: ' + forecastData.list[39].main.temp + '°C');//loads temp
                                wind5.text('Wind: ' + forecastData.list[39].wind.speed + "MPH");//loads windspeed
                                hum5.text('Humidity: ' + forecastData.list[39].main.humidity + '%');//loads humidity
                            })
                    })
            });
    }
})
