document.querySelector('.arrow-left').addEventListener('click', function() {
    const container = document.querySelector('.logos-container');
    container.scrollBy({
        left: -120, 
        behavior: 'smooth'
    });
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    const container = document.querySelector('.logos-container');
    container.scrollBy({
        left: 120, 
        behavior: 'smooth'
    });
});