
import { getData } from "./modules/dataMiner.js";
//imports always go at the top the file
//this is called a IIFE
//it's a pretty common Javascript programming pattern
//also called 

(() => {

  // audio
  const audioContainer = document.querySelector('.audioBox'),
        playBtn = document.querySelector('.playBtn'),
        stopBtn = document.querySelector('.stopBtn'),
        audioNextBtn = document.querySelector('.nextBtn');
  
  const MUSIC_COUNT = 3;

  let currentAudio = 1;

  function playAudio() {
    audioContainer.volume = 0.2;
    audioContainer.loop = true;
    audioContainer.play();  
  }
  
  function stopAudio() {
    audioContainer.pause();  
  }
  
  
  function loadAudio() {
    const source = document.querySelector('#audioSource');
    source.src = `./audio/${currentAudio}.mp3`;
    audioContainer.load();
    playAudio();
  }
  
  function handleNextButton() { 
  
    if (currentAudio < MUSIC_COUNT) {
      currentAudio += 1;
    } else {
      currentAudio = 1;
    }
    
    audioContainer.pause();
    loadAudio();
  }
  
  playBtn.addEventListener('click', loadAudio);
  stopBtn.addEventListener('click', stopAudio);
  audioNextBtn.addEventListener('click', handleNextButton);


  // Slide
  const slideWrapper = document.querySelector('.container'),
        slides = document.querySelectorAll('.item'),
        slider = document.querySelector('.slider'),
        totalSlides = slides.length;

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

  // Bio-panel

  let theSongs = document.querySelector('#love-section'),
      theTemplate = document.querySelector('#bio-template').content,
      faveData;

  function buildThings(data) {

    faveData = data;

    const things = Object.keys(data); // Object.keys creats an array

    things.forEach (thing => {

      let panel = theTemplate.cloneNode(true);
      let containers = panel.firstElementChild.children;

      containers[0].querySelector('img').src= `images/${data[thing].pict}`;
      // save a reference to the top-level keys of the data object here, so we can retrieve it on a click
      containers[0].querySelector('img').id = thing;
      containers[0].querySelector('img').addEventListener("click", showThing);

      containers[1].textContent = data[thing].title;
      containers[2].textContent = data[thing].singer;
      containers[3].textContent = data[thing].description;

      theSongs.appendChild(panel);
    })

  }

  function showThing() {

    let currentThing = faveData[this.id]; // this retrieves the object that matches the key we saved

    // lightBoxImg.src = `images/${currentThing.pict}`
  }

  getData(`./data.json`, buildThings);

  // popBox
  window.onload = function() {
    function onClick() {
      document.querySelector('.popWrap').style.display = 'block';
    }

    function offClick() {
      document.querySelector('.popWrap').style.display = 'none';
    }

    document.querySelector('.openBtn').addEventListener('click', onClick);
    document.querySelector('.btn_close').addEventListener('click', offClick);
  }


})();