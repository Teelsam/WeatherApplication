var confirmBtn = $('#confirmBtn');
var inputLocation = $('#inputLocal');

confirmBtn.on('click', function () {
    var typedLocal = inputLocation.val();
    localStorage.setItem('typedLocal', typedLocal);

});