$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var printName = $('#locCheck');
    var APIKey = '05f46a74c28156c7a4309df0e0f810d4';
    var town = localStorage.getItem('placeName', placeName);


    confirmBtn.on('click', function (event) {
        event.preventDefault();
        placeName = inputEl.val();
        console.log('placeName: ' + placeName);
        localStorage.setItem('placeName', placeName);
    });
    function printSelected() {
        var town = localStorage.getItem('placeName', placeName);
        console.log('town: ' + town);
        printName.empty();
        printName.text(town);

    }
    printSelected();
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + town + '&appid=' + APIKey;

    fetch(queryURL)
});
