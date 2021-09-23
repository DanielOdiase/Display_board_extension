

let enterEl = document.getElementById("sub-btn")
let container=document.getElementById("currency")
let crypInp= document.getElementById("cryptInp")
let timeEl=document.getElementById("time")
let clearBtn=document.getElementById("clear-btn")
let weatherEl=document.getElementById("weather-cont")
let tBEl= document.getElementById("bibleV")
let removal
let currentPrice=0
let newData={}

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

    enterEl.addEventListener('click',function(){
        fetch(`https://api.coingecko.com/api/v3/coins/${crypInp.value.toLowerCase()}`)
     .then(res=>res.json())
     .then(data=>{ 
         newData=data
    
        currentPrice=newData.market_data.current_price.cad
      container.innerHTML+=`<p id ="tbr">🎯:$${currentPrice}</p>
     <p id ="tbr">👆: $${newData.market_data.high_24h.cad}</p>
     <p id="tbr">👇: $${newData.market_data.low_24h.cad}</p>`
         console.log(newData.market_data.current_price.cad)
     }) 
     .catch(err=>alert("No crypto found"))
     })
    
     clearBtn.addEventListener('click',function(){
         removal=document.getElementById("tbr")
     removal.parentNode.removeChild(removal)

     })

setInterval(() => {const today = new Date();
    timeEl.textContent=today.toLocaleTimeString("en-us",{timeStyle: "short"})
    
}, 1000);


fetch("https://bible-api.com/jeremiah 29:11")
.then(res=>res.json())
.then(data=>{
    tBEl.textContent += `${data.reference} -${data.text}`

})
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1a8f0a37d0052dc04a7f306f76f4b7ea&units=metric`)
.then(res=> {
    if(!res.ok){
        throw Error ("Weather data not available")
    }
    return res.json()
})
.then(data=>{
    weatherEl.innerHTML=`<h3>${data.name}</h3>
   <p> ${data.weather[0].description}</p>
   <h4> ${data.main.temp} °C</h4>`
   
})
.catch(err=>console.error(err))
});