
// Target the input using querySelector
const input = document.querySelector('#name');

// Add event listener for blur event
input.addEventListener('blur', function() {
  // Show a dialog when the input loses focus
  alert('Thank you for participating!');
});
