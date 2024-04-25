const powerBtn = document.getElementsByClassName('power-btn')[0];
const controlBtns = document.querySelectorAll('button');

powerBtn.addEventListener('click', (ele) => {
   controlBtns.forEach(btn => {
      btn.classList.toggle('active-icon');
      btn.classList.toggle('active-icon-border');
   });

});