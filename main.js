/* GLOBAL VARIABELS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
let city = "";
let apiKey = "";
let cities = [];

/* PROGRAM
–––––––––––––––––––––––––––––––––––––––––––––––––– */
clearOnRefresh();

/* EVENT HANDLERS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

$("#api-form").submit((e) => {
  e.preventDefault();
  apiKey = $("#input-key").val();
  // $("#input-key").val(""); //clears input after submit
});

$("#search-form").submit((e) => {
  e.preventDefault();
  if (apiKey === "") {
    alert("You must enter a api key");
    $("#input-city").val("");
  } else {
    city = $("#input-city").val();
    // $("#input-city").val("");//clears input after submit
    let duplicate = checkInputAgainstArray();
    if (duplicate){

    }
    else{
      let result = getWeatherData();
    displayCityWeatherCard(result);
    }
    
  }
});

/* FUNCTIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function cardClick(){
  alert(`you clicked the city of ${city} you mofo!`)
}

function clearOnRefresh() {
  $("#input-key").val("");
  $("#input-city").val("");
  $("li").remove();
  cities = [];
}

function checkInputAgainstArray() {
  let duplicate;
  if (cities.length > 0) {
    if (cities.includes(city)) {
      $(".message").text(
        "You already know what the weather is like there."
      );
      $("#input-city").val("");
      duplicate = true
    }
  } else {
    cities.push(city);
    duplicate = false
  }
  return duplicate;
}

async function getWeatherData() {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

  const params = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: "metric",
  });

  let url = baseUrl + params.toString();

  const response = await fetch(url);
  const json = await response.json();

  return json;
}

async function displayCityWeatherCard(result) {
  let forecast = await result;
  const markup = `<li class="grid-item">
                <div class="result-card">
                    <h2><span>${city}</span><sup class="sup-city">${forecast.sys.country}</sup></h2>
                    <div class="city-temp">${forecast.main.temp}<sup class="sup-celcius">°C</sup></div>
                    <figure>
                        <img class="city-icon" src="icons/02d.png" alt="weathericon">
                        <figcaption>${forecast.weather[0].description}</figcaption>
                        <p>Feels like ${forecast.main.feels_like}<sup class="sup-celcius">°C</sup></p>
                    </figure>
                </div>
            </li>`;

  $(".grid-container").append(markup)
}
