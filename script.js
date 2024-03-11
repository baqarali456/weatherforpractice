let data;
const mainfunc = async(city) =>{
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7773722499msh404627f43301981p10a33djsn3b076d3a7747',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        data = {...result,cityname:city};
        iterate();
    } catch (error) {
        console.error(error);
    }

}
mainfunc("haldwani");

let str = "";
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

const iterate = () =>{
    str = `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
   <h1 id="cityname">${data.cityname.capitalize()}</h1>
    <h5 class="card-title">Temperature  ${data.temp}<span>&#8451;</span></h5>
     <p class="card-text">max Temp ${data.max_temp}</p>
    <p class="card-text">min Temp ${data.min_temp}</p>
  </div>
</div> 
`
 
 mainbox.innerHTML = str

}

document.querySelector('.btn').addEventListener('click',(e)=>{
   e.preventDefault();
   mainfunc(city.value);
})

