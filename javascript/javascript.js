/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){
  // funzione sincrona //

  // test//

  // console.log("ciao")

 var listaRandomNumber = [];
 var contatore = 5;

 while(listaRandomNumber.length < contatore){
      var number = Math.floor(Math.random() * 20 ) + 1;

      if(! listaRandomNumber.includes(number)){
        listaRandomNumber.push(number);
      }

      alert(number);
 }

 console.log(listaRandomNumber)

 // intervallo di 30 secondi //

 // funzione asincrona /

 setTimeout(myfunction, 3000)
 console.log("ciao");

 function myfunction(){
   var scelta = [];

   while( scelta.length < contatore){
     var num = parseInt(prompt("Scegli un numero") );
     scelta.push(num);


     if(listaRandomNumber.includes(num) === true){
       alert("Complimenti hai azzecato il numero");

     } else{
       alert("Mi dispiace il numero non e quello della lista");
     }

     console.log(num);

   }
   // console.log("ciao dopo 3 secondi")

 }

   console.log(listaRandomNumber)













 }); //<-- end here//
