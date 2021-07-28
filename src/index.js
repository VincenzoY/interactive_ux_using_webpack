function dropdown(dropdown_parent) {
    
    let children = dropdown_parent.children;

    for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
        // Do stuff
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