const powerBtn = document.getElementsByClassName('power-btn')[0];
const controlBtns = document.querySelectorAll('button');
const menuIcons = document.querySelectorAll('.menu-icon');
const menuBtn = document.getElementsByClassName('menu-btn')[0];


// Airfyer Object
let airfyerUnit = {
   power: false,
   temperature: 350,
   timer: 15,
   currentIndex: 0, // Track the index of the currently selected preprogrammed temperature
   preprogrammedTemps: {
      fries: {
         temperature: 390,
         timer: 20
      },
      lamb: {
         temperature: 360,
         timer: 15
      },
      shrimp: {
         temperature: 320,
         timer: 20
      },
      bake: {
         temperature: 320,
         timer: 40
      },
      chicken: {
         temperature: 360,
         timer: 25
      },
      steak: {
         temperature: 320,
         timer: 20
      },
      fish: {
         temperature: 360,
         timer: 20
      }
   },
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
   
   iteratePreprogrammedTemps: function() {
      // Get all keys (food types) from preprogramedTemps object
      let foodTypes = Object.keys(this.preprogrammedTemps);
      // console.log(foodTypes);
      // Check if currentIndex is within bounds
      if (this.currentIndex >= foodTypes.length) {
         this.currentIndex = 0; // Reset index if out of bounds
      }
      
      // Get the current food type based on currentIndex
      let currentFoodType = foodTypes[this.currentIndex];
      
      // Retrieve the corresponding preprogrammed temperature
      let selectedTemp = this.preprogrammedTemps[currentFoodType];
      
      // Increment currentIndex for next click
      this.currentIndex++;
      
      // Log or use the selected temperature (for demonstration, let's log it)
      console.log(`Selected ${currentFoodType}: Temperature ${selectedTemp.temperature}, Timer ${selectedTemp.timer}`);
   }
};

// Method to cycle through the preprogrammed temperatures
let numberOfPreprogrammedTemps = Object.keys(airfyerUnit.preprogrammedTemps).length;
// Log the number of preprogrammed temperatures
console.log(numberOfPreprogrammedTemps);

// Event Listeners
powerBtn.addEventListener('click', (ele) => {
   if(airfyerUnit.power === true){
      airfyerUnit.powerOff();
   } else {
      airfyerUnit.powerOn();
   }
});
// Add event listener to menuButton to iterate through preprogrammedTemps
menuBtn.addEventListener('click', function() {
   if(airfyerUnit.power === true){
      airfyerUnit.iteratePreprogrammedTemps();
   } else {
      alert('Turn on air fryer first before selecting preset');
   };
});

