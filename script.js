// Get the elements
const leftAnchor = document.getElementById('left-anchor');
const rightAnchor = document.getElementById('right-anchor');
const topTriangle = document.getElementById('top-triangle');
const bottomTriangle = document.getElementById('bottom-triangle');

// Add event listeners for hover effect on the left and right anchors
leftAnchor.addEventListener('mouseenter', () => {
  topTriangle.classList.add('glow');  
  bottomTriangle.classList.remove('glow');  
});

rightAnchor.addEventListener('mouseenter', () => {
  bottomTriangle.classList.add('glow');  
  topTriangle.classList.remove('glow'); 
});


leftAnchor.addEventListener('mouseleave', () => {
  topTriangle.classList.remove('glow');
});

rightAnchor.addEventListener('mouseleave', () => {
  bottomTriangle.classList.remove('glow');
});
