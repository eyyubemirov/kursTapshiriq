import inquirer from "inquirer";
async function seherAxtar(city){
  const cavab = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city +'&appid=13ca0c89d8cd04873921fbc32a542965&units=metric'
  );
  if(cavab.status!=200){
    return;
  }
  const hava=await cavab.json();
  console.log("tempratur :" + hava.main.temp );
  
  console.log("description :"+hava.weather[0].description);

}
const prompt=inquirer.createPromptModule();
prompt([
    {
      message: 'Enter a city name:',
      type: 'input',
      name: 'city'
     
    }
  ])
  .then((cavab => {
    seherAxtar(cavab.city); 
  }));