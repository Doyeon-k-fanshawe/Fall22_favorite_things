
import { getData } from "./modules/dataMiner.js";
//imports always go at the top the file
//this is called a IIFE
//it's a pretty common Javascript programming pattern
//also called 

(() => {
  
  let theSongs = document.querySelector('#love-section'),
      theTemplate = document.querySelector('#bio-template').content,
      slideWrapper = document.querySelector('.container'),
      slides = document.querySelectorAll('.item'),
      slider = document.querySelector('.slider'),
      faveData;
      // btnTarget = document.querySelector("")
      
  const totalSlides = slides.length;

  var sliderWidth = slideWrapper.clientWidth,
      slideIndex = 0;

  slider.style.width = sliderWidth * totalSlides + 'px';

  showSlides()

  function showSlides() {
      for(var i = 0; i < slides.length; i++){
          slider.style.left = -(sliderWidth * slideIndex) + 'px';
      }
      slideIndex++;
      if (slideIndex === totalSlides) {
          slideIndex = 0;
      }
      setTimeout(showSlides, 3000);
  }



  function buildSong(data) {

    faveData = data;

    const song = Object.keys(data); // Object.keys creats an array

    song.forEach (songs => {

      let panel = theTemplate.cloneNode(true);
      let containers = panel.firstElementChild.children;

      containers[0].querySelector('img').src= `images/${data[songs].pict}`;
      // save a reference to the top-level keys of the data object here, so we can retrieve it on a 
      containers[0].querySelector('img').id = thing;
      containers[0].querySelector('img').addEventHandler("click", showThing);

      containers[1].textContent = data[songs].title;
      containers[2].textContent = data[songs].singer;
      containers[3].textContent = data[songs].description;

      theSongs.appendChild(panel);
    })

  }

  getData(`./data.json`, buildSong);
})();