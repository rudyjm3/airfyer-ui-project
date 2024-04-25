let airfyerUnit = {
   power: false,
   temperature: 180,
   timer: 30,

   powerOn: function() {
      this.power = true;
      let digitalDisplyContent = document.getElementsByClassName('digital-readout')[0].innerText = '350';
      let tempSymbol = document.getElementsByClassName('temp-symbol')[0];
      tempSymbol.classList.add('active-temp-symbol');
      controlBtns.forEach(btn => {
         btn.classList.add('active-icon');
         btn.classList.add('active-icon-border');
      });
   },

   powerOff: function() {  
      this.power = false;
      let digitalDisplyContent = document.getElementsByClassName('digital-readout')[0].innerText = '---';
      let tempSymbol = document.getElementsByClassName('temp-symbol')[0];
      tempSymbol.classList.remove('active-temp-symbol');
      controlBtns.forEach(btn => {
         btn.classList.remove('active-icon');
         btn.classList.remove('active-icon-border');
      });
   },
};

const powerBtn = document.getElementsByClassName('power-btn')[0];
const controlBtns = document.querySelectorAll('button');

powerBtn.addEventListener('click', (ele) => {
   if(airfyerUnit.power === true){
      airfyerUnit.powerOff();
   } else {
      airfyerUnit.powerOn();
   }

});

