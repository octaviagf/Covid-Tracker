"use stric";

//USING AJAX

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const renderCountry = function (data) {
  const html = `<h2 class="country_name">${data.Country_Region}</h2>
        <p class="confirmed">Confirmed cases: ${data.Confirmed}</p>
        <p class="deaths">Deaths: ${data.Deaths}</p>`;

  container.insertAdjacentHTML("beforeend", html);
};

const getCountryData = function (countryName) {
  const request = new XMLHttpRequest();

  request.open("GET", "https://coronavirus.m.pipedream.net/");
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(request.responseText);
    const countryData = data.rawData.find(
      (item) => item.Country_Region === countryName
    );

    if (countryData) {
      renderCountry(countryData);
      document.querySelector(".country").value = "";
    }
  });
};

btn.addEventListener("click", function () {
  const countryName = document.querySelector(".country").value;

  getCountryData(countryName);
});

/* USING FETCH

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const renderCountry = function (data) {
  const html = `<h2 class="country_name">${data.Country_Region}</h2>
        <p class="confirmed">Confirmed cases: ${data.Confirmed}</p>
        <p class="deaths">Deaths: ${data.Deaths}</p>`;

  container.insertAdjacentHTML("beforeend", html);
};

const getCountryData = async function (countryName) {
  await fetch("https://coronavirus.m.pipedream.net/")
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      renderCountry(
        response.rawData.find((item) => item.Country_Region === countryName)
      );
      document.querySelector(".country").value = "";
    });
};

btn.addEventListener("click", function () {
  const countryName = document.querySelector(".country").value;

  getCountryData(countryName);
});*/
