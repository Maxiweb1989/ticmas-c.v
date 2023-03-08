/*
document.getElementById("cambiar_color").addEventListener("click",function(){
   
    document.body.style.backgroundColor ="red";});
*/

document.getElementById("ocultar_boton").addEventListener("click",function(){
    document.getElementById("demo").style.display ="none";
    document.getElementById("text1").style.textAlign ="center";
    document.getElementById("text1").style.color ="white";
  
   });


//boton volver imagen
document.getElementById("text").addEventListener("click",function(){
    document.getElementById("demo").style.display ="block";
   
});
/*
document.getElementById("cambiar_tamaño").onclick = function(){
    document.getElementById("demo1").innerHTML ="MIS DATOS PERSONALES ";}
*/
//*evento cambiar tamaño de letra parrafo*/

    document.getElementById("cambiar_tamaño").addEventListener("click",function(){
       document.getElementById("demo1").style.fontSize="25px";       
       });


//*evento volver letra original
document.getElementById("volver_tamaño").addEventListener("click",function(){
document.getElementById("demo1").style.fontSize="20px";       
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//*evento cambiar fondo 
document.getElementById("cambiar_color").addEventListener("click",function(){
document.getElementById("color_fondo").style.backgroundColor ="white";       
});
//*evento volver fondo
document.getElementById("volver_color").addEventListener("click",function(){
document.getElementById("color_fondo").style.backgroundColor ="  rgb(151, 151, 151)";       
});
//* cambiar color verde verdadero (evento mouseover)
document.getElementById("cajatexto").addEventListener("mouseover",function(){
    document.getElementById("cajatexto").style.backgroundColor ="  rgb(138, 246, 105)";   
    document.getElementById("cajatexto1").style.backgroundColor ="  rgb(138, 246, 105)";   

    });
//*cambiar color rojo (ecvento mouseover)
document.getElementById("cajatexto2").addEventListener("mouseover",function(){
document.getElementById("cajatexto2").style.backgroundColor =" rgb(241, 96, 96)";   
document.getElementById("cajatexto3").style.backgroundColor =" rgb(241, 96, 96)";   

});

//*alerta boton enviar
document.getElementById("alert").addEventListener("click",function(){
alert("MUCHAS GRACIAS POR EL CURSO!!!!") ;      
});









/*evento cambiar color de la pantalla js.
document.getElementById("cambiar_color").addEventListener("click",function(){
document..style.backgroundColor ="#ff0000";

});
*/



