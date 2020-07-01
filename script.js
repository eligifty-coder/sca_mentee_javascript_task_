// task2
// task 2 variables/constant
const bg_first = document.querySelector ('.bg');
const bg_second = document.querySelector ('.bg2');
window.onload = function () {
  setInterval ( ()=> {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor (Math.random () * 16)];
  }
  bg_first.style.backgroundColor = color;
}
, 2000);
  setInterval ( ()=> {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor (Math.random () * 16)];
  }
  bg_second.style.backgroundColor = color;
}
, 2000);
};


// end of task 2
