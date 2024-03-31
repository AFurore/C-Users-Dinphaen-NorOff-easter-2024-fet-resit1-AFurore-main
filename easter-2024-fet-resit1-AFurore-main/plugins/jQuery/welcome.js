$(document).ready(function() {
    $('#liveToastBtn').click(function() {
        $('#liveToast').toast('show');
    });
});

$('#getGoingBtn').on('click', function() {
    $.get("https://www.boredapi.com/api/activity/", function(data) {
        console.log(data);
    });
});