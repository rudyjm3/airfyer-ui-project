const powerBtn = document.getElementsByClassName('power-btn')[0];
const controlBtns = document.querySelectorAll('button');
const menuIcons = document.querySelectorAll('.menu-icon');
const menuBtn = document.getElementsByClassName('menu-btn')[0];
const digitalDisplayContent = document.getElementsByClassName('digital-readout')[0];
const tempSymbol = document.getElementsByClassName('temp-symbol')[0];
const timeSymbol = document.getElementsByClassName('time-symbol')[0];


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
      digitalDisplayContent.innerText = this.temperature;
      tempSymbol.classList.add('active-temp-symbol');
      controlBtns.forEach(btn => {
         btn.classList.add('active-icon');
         btn.classList.add('active-icon-border');
      });
   },

   powerOff: function() {  
      this.power = false;
      digitalDisplayContent.innerText = '---';
      tempSymbol.classList.remove('active-temp-symbol');
      controlBtns.forEach(btn => {
         btn.classList.remove('active-icon');
         btn.classList.remove('active-icon-border');
      });
   },
   
   iteratePreprogrammedTemps: function() {
      // Get all keys (food types) from preprogramedTemps object
      let foodTypes = Object.keys(this.preprogrammedTemps);
   
      // Check if currentIndex is within bounds
      if (this.currentIndex >= foodTypes.length) {
         this.currentIndex = 0; // Reset index if out of bounds
      }
      
      // Get the current food type based on currentIndex
      let currentFoodType = foodTypes[this.currentIndex];
      console.log("Food: " + currentFoodType + '<br> </br>' + "Index: " + this.currentIndex);
      // Retrieve the corresponding preprogrammed temperature
      let selectedTemp = this.preprogrammedTemps[currentFoodType].temperature;
      console.log(selectedTemp);

      let selectedCookTime = this.preprogrammedTemps[currentFoodType].timer;
      console.log(selectedCookTime);
      this.temperature = selectedTemp;
      this.timer = selectedCookTime;

// WORKING ON THIS SECTION TO LOOP BETWEEN TEMP AND TIME EVERY 5 SECONDS
      // Update the digital display
      function UpdateDisplay() {
         
         // digitalDisplayContent.innerText = selectedTemp;
         // tempSymbol.classList.add('active-temp-symbol');

         // digitalDisplayContent.innerText = selectedCookTime;
         // timeSymbol.classList.add('active-time-symbol');
         let displayState = 0; // Initial display state (0 or 1)
    
         function toggleDisplay() {
            if (displayState === 0) {
                  // Display first block of code
                  digitalDisplayContent.innerText = this.temperature;
                  tempSymbol.classList.add('active-temp-symbol');
                  timeSymbol.classList.remove('active-time-symbol');
                  displayState = 1; // Switch to next display state
            } else {
                  // Display second block of code
                  digitalDisplayContent.innerText = this.timer;
                  tempSymbol.classList.remove('active-temp-symbol');
                  timeSymbol.classList.add('active-time-symbol');
                  displayState = 0; // Switch back to initial display state
            }
         };
         
         function loopUpdate() {
            toggleDisplay(); // Toggle display initially

            setInterval(() => {
                  toggleDisplay(); // Toggle display every 5 seconds
            }, 5000); // Interval set to 5000 milliseconds (5 seconds)
         };
         
      };
      UpdateDisplay();
// ======================================================================
      
      console.log(this);
      const menuIconSelection = () => {
         // Remove active-menu-icon class from all menu icons
         menuIcons.forEach(icon => {
            icon.classList.remove('active-menu-icon');
            
         });
         // Illuminate the active menu icon
            menuIcons[this.currentIndex].classList.add('active-menu-icon');
            console.log(menuIcons[this.currentIndex]);

      };
      menuIconSelection(this.currentIndex);

      // Increment currentIndex for next click
      this.currentIndex++;
      
      // Log or use the selected temperature (for demonstration, let's log it)
      console.log(`Selected ${currentFoodType}: Temperature ${selectedTemp.temperature}, Timer ${selectedTemp.timer}`);
   }
};

// -- BELOW COMMENTED OUT NOT NEEDED SINCE iteratePreprogrammedTemps:
// // Method to cycle through the preprogrammed temperatures
// let numberOfPreprogrammedTemps = Object.keys(airfyerUnit.preprogrammedTemps).length;
// // Log the number of preprogrammed temperatures
// console.log(numberOfPreprogrammedTemps);

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

