const btnColorChange = document.querySelector('.change-color');

btnColorChange.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
