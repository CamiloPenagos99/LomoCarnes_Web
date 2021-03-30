$(document).ready(function(){
   // alert("Cargada contactos")

   //Ajustar pie
$(".pie").css({
    position: "fixed",
    bottom: "1px"
});

//Plugin de calendario jquery

$("form input[name='date']").datepicker({
    dateFormat: "dd-mm-yy"
});

//Validar el formulario con Jquery
//$.validate({lang: "es"});


$("#contact_form").submit(function(e){
    e.preventDefault();
    alert("Gracias, Registro Enviado");
    console.log("Submit");
});


});
