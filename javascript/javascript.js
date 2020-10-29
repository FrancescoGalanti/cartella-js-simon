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

setTimeout(myfunction, 3000);

  // intervallo di 30 secondi //

  // funzione asincrona //
  function myfunction(){

    while( listaRandomNumber.length < contatore)
      var num = parseInt(prompt("Scegli un numero") );



      if(listaRandomNumber.includes(num) === true){
        alert("Complimenti hai azzecato il numero");

      } else{
        alert("Mi dispiace il numero non e quello della lista");
      }

      console.log(num)



  };




 }); //<-- end here//
