function dropdown() {
    const dropdown_parent = document.querySelector('.dropdown-container');

    children = dropdown_parent.children;

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

dropdown();