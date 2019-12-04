const weather = document.querySelector('.js-weather');

const API_KEY = '049e77411f0a31b8b2a4e2653b968699';
const COORDS_LS = 'coords';

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  )
    .then(function(respose) {
      return respose.json();
    })
    .then(function(json) {
      const temperatue = json.main.temp;
      const place = json.name;

      weather.innerText = `${temperatue} @ ${place}`;
    });
}

function handleError() {
  console.log(`Cant access geo location`);
}

function handleSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
    //latitude: latitude,
    //longitude: longitude,
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleSucces, handleError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
