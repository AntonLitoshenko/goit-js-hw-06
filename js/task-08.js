const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onLoginFormSub);

function onLoginFormSub(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const email = formElements.email;
  const password = formElements.password;
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((name, value) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
  } else {
    alert('The form has been submitted!');
  }
}
