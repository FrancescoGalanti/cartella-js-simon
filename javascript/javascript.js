/*
**javascript
**/




 // lavorazione dom di dropdown menu //

 $(document).ready(function(){
   // Variabile per il dropdown //
   var dropLinks = $(".with-dropwon > a");
   var dropMenu = $(".with-dropwon > .dropdown-menu");

   // evento click dropdown //
   dropLinks.click(function(){
    // variabile per hide and show multipli //
    var actualmenu = $(this).next(".dropdown-menu");
    // funzione attiva disattiva menu //
    dropMenu.not(actualmenu).hide();


    // click dell evento show and hide //
    actualmenu.toggle();
   });


 }); //<-- end here//
