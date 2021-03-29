$(document).ready(function(){

   //Plugin de slider
   $(".slider").bxSlider({
       mode:"fade",
       captions: false,
       slideWidth: 1250,
   });
   
   $(".bx-wrapper").css("margin","0 auto"); //Centrar el slide con javascript


   //Articulos

   let posts = [
       {titulo:"Nuestra historia, Lomo Carnes",
        fecha: "Publicado: "+moment().format("MMMM Do YYYY"),
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
        ,
        {titulo:"Productos disponibles, Lomo Carnes",
        fecha: "Publicado: "+moment().format("MMMM Do YYYY"),
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},

        {titulo:"Información de contacto, Lomo Carnes",
        fecha: "Publicado: "+moment().format("MMMM Do YYYY"),
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
    ]

    

    posts.forEach((post)=>{
        var plantilla= `
        <div class="articulo">
            <article>
                <h2>${post.titulo}</h2>
                <br/>
                <p class="pfecha">${post.fecha}</p>
                <p>${post.contenido}</p>
            </article>
        </div>
        `;

        $("#content").append(plantilla); //Cargar los posts en el index
    })

    //Selector de tema--

    var temaweb = $("#theme");
    var orange = 'css/style1.css'; //Hoja de estilo
    var valor=$("#theme").attr("value"); //Cambiar valor del tema
    $("#changetheme").click(function(){
        //alert($("#theme").attr("value"));
       if($("#theme").attr("value")=="blue"){
        temaweb.attr("href","css\\style_orange.css");
        temaweb.attr("value","orange")
    }
     else{
        temaweb.attr("href","css\\style1.css");
        temaweb.attr("value","blue")
     }

    });


    //Scroll suavizado
    $(".up").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },1200)
    });

    //Renderizar formulario

    $("#abrir_form").click(function(){

        if($("#formulario").attr("key")=="d"){
            $("#formulario").css("display","block");
            $("#formulario").attr("key","a") //Mostrar formulario
        } else{
            $("#formulario").css("display","none");
            $("#formulario").attr("key","d") //Esconder formulario
        }    
    })

   //Registrar ingreso localstorage, LoginFalso

   $("#login").submit(function(){
     let name = $("#input_name").val();
    
     localStorage.setItem("input_name",name);
   })
    

    
})
