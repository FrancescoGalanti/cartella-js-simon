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


 }

   alert("memorizza i seguenti numeri: " + listaRandomNumber);

 console.log(listaRandomNumber)

 // intervallo di 30 secondi //

 // funzione asincrona /

 setTimeout(myfunction, 3000)
 console.log("ciao");

 function myfunction(){
   var scelta = [];
   var azzeccati = 0;
   var listanumeriazzecati = []

   while( scelta.length < contatore){
     var num = parseInt(prompt("Scegli un numero") );


     while(isNaN(num)){
       var num = parseInt(prompt("Scegli un numero non una lettera"));

     }

     if(! scelta.includes(num)){
       scelta.push(num);
       if(listaRandomNumber.includes(num) === true){
         alert("Complimenti hai azzecato il numero");
         azzeccati = azzeccati + 1;
         listanumeriazzecati.push(num);
       } else{
         alert("Mi dispiace il numero non e quello della lista");
       }
     } else{
       alert("non ripetere i numeri")
     }






   }

   console.log(scelta);

   console.log("hai azzeccato: " + azzeccati + " numeri")
   console.log("i numeri chei hai azzeccato sono: " + listanumeriazzecati)

 }















 }); //<-- end here//
