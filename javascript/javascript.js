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

      alert("memorizza i seguenti numeri: " + number);
 }

 console.log(listaRandomNumber)

 // intervallo di 30 secondi //

 // funzione asincrona /

 setTimeout(myfunction, 30000)
 console.log("ciao");

 function myfunction(){
   var scelta = [];
   var azzeccati = 0;
   var listanumeriazzecati = []

   while( scelta.length < contatore){
     var num = parseInt(prompt("Scegli un numero") );
     scelta.push(num);


     if(listaRandomNumber.includes(num) === true){
       alert("Complimenti hai azzecato il numero");
       azzeccati = azzeccati + 1;
       listanumeriazzecati.push(num);
     } else{
       alert("Mi dispiace il numero non e quello della lista");
     }



   }

   console.log("hai azzeccato: " + azzeccati + " numeri")
   console.log("i numeri chei hai azzeccato sono: " + listanumeriazzecati)

 }















 }); //<-- end here//
