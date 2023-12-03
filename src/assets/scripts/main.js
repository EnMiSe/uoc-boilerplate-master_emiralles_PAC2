/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.general__sec__form');

  form.addEventListener('submit', function (e) {
    var isValid = true;
    var inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(function (input) {
      if (!input.value) {
        isValid = false;
        input.classList.add('is-invalid'); 
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (!isValid) {
      e.preventDefault(); 
      alert('Si us plau, ompli tots els camps requerits.');
    }
  });
});
