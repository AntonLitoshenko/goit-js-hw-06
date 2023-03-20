const input = document.getElementById('font-size-control');
const span = document.getElementById('text');

input.addEventListener('input', onFontChangeInput);

function onFontChangeInput(event) {
  //const size = input.value;
  span.style.fontSize = `${input.value}px`;
}
