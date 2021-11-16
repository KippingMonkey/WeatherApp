// /* GLOBAL VARIABELS
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
// let city = "";
// let apiKey = "";
// let cities = [];

// /* PROGRAM
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
// clearOnRefresh();

// /* EVENT HANDLERS
// –––––––––––––––––––––––––––––––––––––––––––––––––– */

// $("#api-form").submit((e) => {
//   e.preventDefault();
//   apiKey = $("#input-key").val();
//   $("#input-key").val("");
//   alert(`apiKey = ${apiKey}`);
// });

// $("#search-form").submit((e) => {
//   e.preventDefault();
//   if (apiKey === "") {
//     alert("You must enter a api key");
//     $("#input-city").val("");
//   } else {
//     city = $("#input-city").val();
//     $("#input-city").val("");
//     alert(`apiKey = ${apiKey} and city = ${city}`);
//     checkInputAgainstArray();
//     let result = getWeatherData();
//     displayCityWeatherCard(result);
//   }
// });

// /* FUNCTIONS
// –––––––––––––––––––––––––––––––––––––––––––––––––– */
// function clearOnRefresh() {
//   $("#input-key").val("");
//   $("#input-city").val("");
//   $("li").remove();
//   cities = [];
// }

// function checkInputAgainstArray() {
//   if (cities.length > 0) {
//     if (cities.includes(city)) {
//       $(".message").text(
//         "You already know what the weather is like there. You can also try to be more specifik in your search."
//       );
//       $("#input-city").val("");
//     }
//   } else {
//     cities.push(city);
//   }
// }

// async function getWeatherData() {
//   const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

//   const params = new URLSearchParams({
//     q: city,
//     appid: apiKey,
//     units: "metric",
//   });

//   let url = baseUrl + params.toString();

//   const response = await fetch(url);
//   const json = await response.json();

//   return json;
// }

// async function displayCityWeatherCard(result) {
//   let forecast = await result;
//   console.log(forecast);
//   const markup = `<li>${forecast.weather[0].icon} ${forecast.weather[0].description}
//   </li>`;

//   $(".result-list").append(markup);
// }
