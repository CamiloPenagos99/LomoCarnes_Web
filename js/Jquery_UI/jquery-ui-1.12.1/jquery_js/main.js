$(document).ready(function(){
    $("#elemento").draggable(); //Mover por la pagina
    $("#elemento").resizable(); //Mover por la pagina
    //$(".listselect").selectable(); //Elemento seleccionable
    $(".listselect").sortable(); //Organizar elemento
    $("#movido").draggable();
    $("#cajon").droppable({ //Caja para soltar

        drop: function(){
            console.log("Soltar elemento");
            $("#cajon").css('background-color', '#E3DC7D');
        }
    });
    $("#mostrar").click(function(){
        $("#cajaefectos").toggle("slide"); //Efecto togle
        $("#popup").dialog(); //Lanzar cuadro dialogo
    })

    //Tooltips
    $(document).tooltip(); //Mostrar pop

    //Cuadros de dialogo
    
    //Calendar
    $("#calendar").datepicker(); //Mostrar pop

    //Tabs
    $("#mimenu").tabs();


    
})