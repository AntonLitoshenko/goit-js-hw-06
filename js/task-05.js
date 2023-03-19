const refs = {
  input: document.querySelector('[id="name-input"]'),
  output: document.querySelector('[id="name-output"]'),
  spanEl: document.querySelector('span'),
};
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value.trim() !== '') {
    refs.output.textContent = event.currentTarget.value;
  }
}
