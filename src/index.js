// dropdown logic

function dropdown(dropdown_parent) {
    
    let children = dropdown_parent.children;

    for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
    }

    dropdown_parent.children[0].style.display = 'block';

    dropdown_parent.addEventListener('mouseenter', () => {
        for (let i = 1; i < children.length; i++) {
            children[i].style.display = 'block';
        }
    });
    
    dropdown_parent.addEventListener('mouseleave', () => {
        for (let i = 1; i < children.length; i++) {
            children[i].style.display = 'none';
        }
    });
}

const all_drop_downs = document.querySelectorAll('.dropdown-container');

for (let i = 0; i < all_drop_downs.length; i++) {
    dropdown(all_drop_downs[i]);
}


//carousel logic
let img_amount = 5;
let img_width = 600;
let auto_advance_time = 5000;

const left_arrow = document.querySelector('.left');
const right_arrow = document.querySelector('.right');
const carousel = document.getElementById('carousel');

right_arrow.addEventListener('click', () => {
    move_right();
    updateIndicator();
});

left_arrow.addEventListener('click', () => {
    move_left();
    updateIndicator();
});

function move_right() {
    left = Number(carousel.style.left.slice(0, -2));
    if (left > -(img_amount-1)*img_width) {
        carousel.style.left = left - img_width;
    } else {
        carousel.style.left = 0;
    }
}

function move_left() {
    left = Number(carousel.style.left.slice(0, -2));
    if (left < 0) {
        carousel.style.left = left + img_width;
    } else {
        carousel.style.left = -(img_amount-1)*img_width;
    }
}

const indicator = document.getElementById('carousel-indicator');

function updateIndicator() {
    let children = indicator.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('selected');
    }
    let position = -Number(carousel.style.left.slice(0, -2)) / img_width;
    children[position].classList.add('selected');
}

setInterval(() => {
    move_right();
    updateIndicator();
}, auto_advance_time);