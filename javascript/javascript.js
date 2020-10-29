/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){
  // funzione sincrona //
  setTimeout(myfunction, 3000);
  console.log("ciao");

  // intervallo di 30 secondi //

  // funzione asincrona //
  function myfunction() {
   console.log("ciao dopo 3 secondi");
  }


 }); //<-- end here//
