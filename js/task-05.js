//const refs = {
//input: document.querySelector('[id="name-input"]'),
//output: document.querySelector('[id="name-output"]'),
//spanEl: document.querySelector('span'),
//};
//refs.input.addEventListener('input', onInputChange);
//function onInputChange(event) {
//if (event.currentTarget.value.trim() !== '') {
//refs.output.textContent = event.currentTarget.value;
//}
//}

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value.trim() !== '') {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
}
