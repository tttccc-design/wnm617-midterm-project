

$(function(){
 

    $("#aa").sortable();


});

$(function(){


 $(".button").click(function(){

    	
 
 		 $("#display").val($("#display").val()+$(this).val());
 		
 });


    $("#clearButton").click(function(){
        $("#display").val("");
    });


    $("#equal").click(function(){

    	var result = $("#display").val();

        $("#display").val(eval(result));

    });


    $("#dialog-1").dialog({
       autoOpen:false,
      buttons:{
          OK:function(){

          	$(this).dialog("close");
          }

    	}
    });
    $("#laucher").click(function(){

    	$("#dialog-1").dialog("open");
    });

});
