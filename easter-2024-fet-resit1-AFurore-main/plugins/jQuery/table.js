const names = ['The Hard One', 'The Easy One', 'The Good One', 'The Ugly One', 'The Bad One'];
const descriptions = ['Long and hard project', 'Short and easy project', 'Very Good Project', 'Very Ugly Project', 'This was bad project']
const images= ['./images/proj1.jpg','./images/proj2.jpg','./images/proj3.jpg','./images/proj4.jpg','./images/proj5.jpg'];

let clickCount = 0;

function addRow() {
  clickCount++;
  
  if (clickCount <= 5) {
    let table = document.querySelector('.table tbody');
    let newRow = table.insertRow(btnAdd1);
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    
        cell1.textContent = clickCount;
        cell2.textContent = names[clickCount - 1];
        cell3.textContent = descriptions[clickCount - 1];
        cell4.innerHTML = '<img src="' + images[clickCount - 1] + '">';
        cell4.querySelector('img').style.maxWidth = '200px';
        cell4.querySelector('img').style.maxHeight = '200px';
  }
  
  if (clickCount === 5) {
    let buttons = document.querySelectorAll('btn btn-primary');
    buttons.forEach(button => {
      button.disabled = true;
    });
  }
}

document.getElementById('btnAdd1').addEventListener('click', addRow);
document.getElementById('btnAdd2').addEventListener('click', addRow);
document.getElementById('btnAdd3').addEventListener('click', addRow);
document.getElementById('btnAdd4').addEventListener('click', addRow);
document.getElementById('btnAdd5').addEventListener('click', addRow);

//jQuery
$(document).ready(function() {
    $(document).on('click', 'img', function() {
        var imageUrl = $(this).attr('src');
        window.open(imageUrl, '_blank');
    });
});
$(document).ready(function() {
    $(document).on('mouseenter', '#table tr:odd', function() {
        $(this).css('color', 'pink');
    }).on('mouseleave', '#table tr:odd', function() {
        $(this).css('color', '');
    });
});
$('#btn btn-primary').on('click', function() {
    $('#table tr:odd').trigger('mouseenter');
});