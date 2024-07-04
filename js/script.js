
const colorSection = document.querySelector('.color_sec');
const colorCloseButton = document.querySelector('.color_sec-close');
const colorSelectButton = document.getElementById('color_select');
const colorButtons = document.querySelectorAll('.color_sec span');
const bannerButtons = document.querySelectorAll('.main_container .btn,.selection_btns .btn,.iconList .list i');


//Refresh the local storage
localStorage.removeItem('selectedColor');

// Show color selection section on clicking 'Select color'
colorSelectButton.addEventListener('click', () => {
    colorSection.style.display = 'block';
});
colorCloseButton.addEventListener('click', () => {
    colorSection.style.display = 'none';
});

// Function to change button colors
const changeButtonColors = (color) => {
    bannerButtons.forEach(button => {
        button.style.backgroundColor = color;
    });
    iconListItems.forEach(button => {
        button.style.backgroundColor = color;
    });
};

// Load from local storage if it exists
const saveColor = localStorage.getItem('selectedColor');
if (saveColor) {
    changeButtonColors(saveColor);
}

// Event listeners for color buttons
colorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const color = button.getAttribute('data-color');
        changeButtonColors(color);
        localStorage.setItem('selectedColor', color);
    });
});


const headerSection = document.querySelector('.header_sec');
const headersSelectButton = document.querySelector('#header_select');
const headersCloseButton = document.querySelector('.header_sec-close');
const headers = document.querySelectorAll('.multiple_header>div');
const buttons = document.querySelectorAll('.header_sec-btns a');

// Show color selection section on clicking 'Select color'
headersSelectButton.addEventListener('click', () => {
    headerSection.style.display = 'block';
});
headersCloseButton.addEventListener('click', () => {
    headerSection.style.display = 'none';
});

const hideAllHeaders = () => {
    headers.forEach(header => {
        header.style.display = 'none';
    });
};

const showHeader = (index) => {
    hideAllHeaders();
    headers[index].style.display = 'flex';
};
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showHeader(index);
    });
});

showHeader(0);

