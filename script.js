var inputEl = $('#subLoc');//content in inputEl
var confirmBtn = $('#confirmBtn');
var pickedLoc = $('#locCheck');
var placeName = inputEl.val();


confirmBtn.on('click', function (event) {
    event.preventDefault();
    placeName = inputEl.val();
    console.log('placeName');
    localStorage.setItem('placeName', placeName);

});

function printSelected() {
    var town = localStorage.getItem('placeName', placeName);
    console.log('town: ' + town);
    pickedLoc.innerHTML = town;
}
printSelected();