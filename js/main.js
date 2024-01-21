

  document.addEventListener("DOMContentLoaded", function () {
    const longval = [
        4.904,32.859,12.945,23.727,-5.930,2.168,13.405,7.447,-2.935,4.357,19.040,18.068,-3.168,6.96,12.568,-8.475,-6.260,-3.188
        ,11.255,8.682,6.637,-16.908,11.974,9.987,24.938,1.482,30.523,10.466,-9.139,-0.127-3.703,3.017,-2.242,5.369,-15.586,9.190,11.582,14.268,-2.417,10.752,2.352,14.437,-21.942,24.603,12.496,-31.127,-16.251,-6.215,,23.321,18.068,24.753,16.373,21.012,-1.07,8.541,3.406448,3.327695,7.033611,8.516667,7.491302,7.429504,7.617144,3.939786,3.46667,55.96779000,37.618423,30.308611,104.2890
    ];
    const latval = [
      52.367,39.933,56.134,37.983,54.597,41.387,52.520,46.948,43.263,50.847,47.497,59.329,51.483,50.937,55.676,51.898,
      53.349,55.953,43.7696,50.110,43.254,32.650,57.708,53.548,60.169,39.020,50.450,61.115,38.722,51.507,40.416,39.695,53.480,43.296,27.760,45.464,48.135,40.851,43.034,59.913,48.856,50.075,64.146,56.879,41.902,39.453,28.463,57.273,42.697,59.329,59.437,18.208,52.229,53.961,47.376,6.465422,7.145244,4.824167,12.000000,9.072264,10.609319,12.985531,7.376736, 8.21667,54.74306000,55.751244,59.937500,52.2855  
    ];
    const citycountry = [
      'Amsterdam','Ankara','Åstorp','Athens','Belfast','Barcelona','Berlin','Bern','Bilbao','Brussels','Bucharest','Budapest','Cardiff','Cologne','Copenhagen','Cork','Dublin','Edinburgh','Florence','Frankfurt','French Riviera','Funchal','Gothenburg','Hamburg','Helsinki','Ibiza','Kyiv','Lillehammer', 'Lisbon','London','Madrid','Mallorca','Manchester','Marseille','Maspalomas','Milan','Munich','Naples','Oñati','Oslo','Paris','Prague','Reykjavík','Riga','Rome','Santa Cruz das Flores','Santa Cruz de Tenerife','Skye','Sofia','Stockholm','Tallinn','Vienna','Warsaw','York','Zurich','Lagos','Abeokuta','PortHarcourt','Kano','Abuja','Kaduna','Katsina','Ibadan','Okaka,Oyo State','Ufa','Moscow','Saint Petersburg','Irkutsk'
    ];
  
    const selector = document.querySelector("#citySelect");
    const weatherbox = document.querySelector(".Weather");
    const city = document.querySelector(".City");
    
  
    selector.addEventListener("change", function () {
      const selectedCityIndex = selector.value;
      if (selectedCityIndex > 0) {
        
        const apiUrl = `https://www.7timer.info/bin/civil.php?lon=${longval[selectedCityIndex - 1]}&lat=${latval[selectedCityIndex - 1]}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
  
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then((blobData) => {
            const blobUrl = URL.createObjectURL(blobData);
            weatherbox.src = blobUrl;
            URL.revokeObjectURL(blobUrl);
            city.innerHTML = `This is the weather forecast for today and for the next 7 days in ${citycountry[selectedCityIndex - 1]}`;
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } else {
        weatherbox.src = '../images/robot.png'; 
      }
    });
  }); 

  const info = document.querySelector(".INFO");
  const informer = document.querySelector(".inform");
info.addEventListener("click", function () {
  informer.classList.toggle("hidden");
  info.innerText = informer.classList.contains("hidden")? "Show Icon Info" : "Hide Icon Info";
});


  