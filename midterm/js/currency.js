
$(function(){





   var gbp = document.getElementById("GBP");
   var usd = document.getElementById("USD");
   var eur = document.getElementById("EUR");
   var cad = document.getElementById("CAD");
   var aud = document.getElementById("AUD");

   $("#GBP").on('change',function(){

    usd.value = parseFloat(gbp.value) * 0.49246;
    eur.value = parseFloat(gbp.value) * 0.69714;
    cad.value = parseFloat(gbp.value) * 0.50221;
    aud.value = parseFloat(gbp.value) * 0.43497;

   });

   $("#EUR").on('change',function(){
   gbp.value = parseFloat(eur.value) * 1.43448;
    usd.value = parseFloat(eur.value) * 0.70641;
    cad.value = parseFloat(eur.value) * 0.72037;
    aud.value = parseFloat(eur.value) * 0.62382;


   });
  
  
   $("#CAD").on('change',function(){


    gbp.value = parseFloat(cad.value) * 1.99169;
    usd.value = parseFloat(cad.value) * 0.98054;
    eur.value = parseFloat(cad.value) * 1.38814;
    aud.value = parseFloat(cad.value) * 0.86613;
});
    
     $("#AUD").on('change',function(){

    gbp.value = parseFloat(aud.value) * 2.29964;
    usd.value = parseFloat(aud.value) * 1.13262;
    eur.value = parseFloat(aud.value) * 1.60329;
    cad.value = parseFloat(aud.value) * 0.88297;    
});
   
    $("#USD").on('change',function(){

    gbp.value = parseFloat(usd.value) * 2.03032;
    eur.value = parseFloat(usd.value) * 1.41544;
    cad.value = parseFloat(usd.value) * 1.01941;
    aud.value = parseFloat(usd.value) * 0.88297;
    
});



   

   
 


});
