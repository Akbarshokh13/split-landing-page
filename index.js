const left = document.querySelector('.left');
// selecting the right class to right variable; 
const right = document.querySelector('right');
const container = document.querySelector('.container');

// after selecting we are adding an event listener to mouseover to the hover-left css property
left.addEventListener('mouseover', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// the same is for the right position of the layout           
right.addEventListener('mouseover', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));