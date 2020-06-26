const fecha = document.querySelector("#Date")
const casosnuevos = document.querySelector("#nuevoscasos")
const totalcasos = document.querySelector("#Total")


 fetch ('https://api.covid19api.com/summary')
 .then(user =>{
      
   return user.json()
  
  })



  .then(date =>{


   const vzla = date.Countries['180']
   console.log(vzla)

 
    fecha.innerHTML += `<h3>Date: ${vzla.Date} </h3>`
  casosnuevos.innerHTML += `<h3>NewConfirmed: ${vzla.NewConfirmed}</h3>`
  totalcasos.innerHTML += `<h3>TotalConfirmed:${vzla.TotalConfirmed}</h3>`

   
 
  
  	   
  })




 













