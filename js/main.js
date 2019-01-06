document.addEventListener('DOMContentLoaded', function () {

  const modal = document.getElementByClassName('modal');

  // When the user presses the .signin button, display the modal window

  const signIn = document.getElementByClassName('signin');

  signIn.addEventListener('click', function() {
    modal.style.display = 'inline-block';
  });

  // When the user presses the .close button, hide the modal window

  const close = document.getElementByClassName('close');

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // When the user presses the .submit button, add an .error class to both input elements

  const submit = document.getElementByClassName('submit');

  submit.addEventListener('click', function() {
    document.getElementById('user').classList.add('error');
    document.getElementById('pass').classList.add('error');
  });

  // When the user puts their cursor in one of the input fields, remove the .error class

  const user = document.querySelector('#user');
  const password = document.querySelector('#pass');

  user.addEventListener('click', function(event) {
    if (user.classList.contains('error') === true) {
      user.classList.remove('error');
    }});

  password.addEventListener('click', function(event) {
    if (password.classList.contains('error') === true) {
      password.classList.remove('error');
    }});

});
