const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onColorChange);

function onColorChange(event) {
  const condition = event.currentTarget.value.length;
  const dataLength = inputEl.dataset.length;

  if (Number(dataLength == condition)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
