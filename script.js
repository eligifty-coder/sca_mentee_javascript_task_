// task2
// task 2 variables/constant
window.onload = function () {
  setInterval (generateRandomColor_1, 2000);
  setInterval (generateRandomColor_2, 2000);
};
const bg_first = document.querySelector ('.bg');
const bg_second = document.querySelector ('.bg2');
function generateRandomColor_1 () {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor (Math.random () * 16)];
  }
  bg_first.style.backgroundColor = color;
}
function generateRandomColor_2 () {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor (Math.random () * 16)];
  }
  bg_second.style.backgroundColor = color;
}
// end of task 2
