document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('.slider');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');
    let lengthItems = items.length - 1;
    let active = 0;
    let refreshInterval;
    function showSlider() {
        items.forEach(item => {
            item.classList.remove('active', 'prev', 'next');
        });
        let prevIndex = active - 1 < 0 ? lengthItems : active - 1;
        let nextIndex = active + 1 > lengthItems ? 0 : active + 1;
        items[active].classList.add('active');
        items[prevIndex].classList.add('prev');
        items[nextIndex].classList.add('next');
        let last_active_dot = document.querySelector('.slider .dots li.active');
        if(last_active_dot) last_active_dot.classList.remove('active');
        dots[active].classList.add('active');
    }
    function startAutoRun() {
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 3000);
    }
    next.onclick = function() {
        active = active + 1 > lengthItems ? 0 : active + 1;
        showSlider();
        startAutoRun();
    }
    prev.onclick = function() {
        active = active - 1 < 0 ? lengthItems : active - 1;
        showSlider();
        startAutoRun();
    }
    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
             active = key;
             showSlider();
             startAutoRun();
        })
    })
    showSlider();
    startAutoRun();
});