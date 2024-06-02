const apiURL = 'https://restcountries.com/v3.1/all';

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  function displayData(data) {
    const container = document.getElementById('data-container');
  
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'data-item';
      div.innerHTML = `
        <h3>${item.name/{name}}</h3>
        <p>${item.name/population}</p>
        <p>${item.region}</p>
        <p>${item.capital}</p>
      `;
      container.appendChild(div);
    });
  }