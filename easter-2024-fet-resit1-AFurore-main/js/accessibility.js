function toggleTableColors() {
    var table = document.getElementsByClassName('table');
    var toggleSwitch = document.getElementById('accessToggle');

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            table.style.backgroundColor = 'black';
            table.style.color = 'white';
        } else {
            table.style.backgroundColor = 'white';
            table.style.color = 'black';
        }
    });
}