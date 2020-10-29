/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){
  // funzione sincrona //
  setTimeout(myfunction, 3000);
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

  // funzione asincrona //
  function myfunction() {
    // test//
   console.log("ciao dopo 3 secondi");
  }


 }); //<-- end here//
