const elements = document.querySelectorAll('#about, #about2');
Array.from(elements).forEach(element => {
    element.textContent = "All work and no play makes Jack a dull boy";
});

const updatedContent = document.querySelectorAll('#about, #about2');
updatedContent.forEach(element => {
    element.addEventListener('click', function() {
        this.style.backgroundColor = 'powderblue';
        this.style.color = 'white';
    });
});