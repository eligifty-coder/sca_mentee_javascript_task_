// task 1  variables/constant
const output_para = document.querySelector ('#output p');
const output_author = document.querySelector ('#output q');
const url = 'https://api.quotable.io/random';
// task 1 source code
const clicked = () => {
   setInterval (() => {
      fetch (url)
      .then (data => {
         return data.json ();
      })
      .then (data => {
         output_para.innerHTML = data.content;
         output_author.innerHTML = data.author;
      })
      .catch (err => {
         console.log (err);
      });
   }, 5000);
};
// end of tasK 1
