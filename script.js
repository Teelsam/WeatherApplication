$(function () {
    var inputEl = $('#subLoc');//content in inputEl
    var confirmBtn = $('#confirmBtn');
    var placeName = inputEl.textContent;
    var printName = $('#locCheck');


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


});
