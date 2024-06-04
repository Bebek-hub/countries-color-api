document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-button');
  const body = document.body;

  toggleButton.addEventListener('click', function() {
      if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
      }
  });

// Save mode preference in localStorage
  if (localStorage.getItem('mode') === 'dark') {
      body.classList.add('dark-mode');
  } else {
      body.classList.add('light-mode');
  }

  toggleButton.addEventListener('click', function() {
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('mode', 'dark');
      } else {
          localStorage.setItem('mode', 'light');
      }
  });
});



const apiURL = "https://restcountries.com/v3.1/all";

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("data-container");

    data.forEach((item) => {
      const div = document.createElement("div");
      div.className = "data-item";
      div.innerHTML = `
      <img src="${item.flags.png}" alt="${item.flags.png}" />
        <h3>${item.name.common}</h3>
        <p>Population: ${item.population}</p>
        <p>Region: ${item.continents}</p>
        <p>Capital: ${item.capital}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });


