fetch("https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true.")
.then(response => response.json())
.then(data => {
    console.log(data)
    const resultados = data.regionData.filter((region) => {
        const country = region.country;
        return (["World", "Argentina", "South America"].includes(country))
    })
    console.log(resultados);

    resultados.forEach((element) => {
        $("#countryTest").append(`
              <h5>
                  País o región: ${element.country}
              </h5>
              <ul>
                  <li>
                      Número de casos activos: ${element.activeCases}
                  </li>
                  <li>
                      Número de casos nuevos: ${element.newCases}
                  </li>
                  <li>
                  Número de casos críticos: ${element.seriousCritical}
              </li>
              <li>
              Número de decesos total: ${element.totalDeaths}
          </li>
          <li>
          Número de nuevos decesos: ${element.newDeaths}
      </li>
              </ul>
          `);
      });
});
