function validateForm(){
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var contrasena = document.getElementById("input-password").value;
    var nombre = document.getElementById("name").value;
    var withoutOpcion = document.querySelector("select").value;
    //Creando array para simplificar códigos:
 /*   var mensajes = ["Debe ingresar su nombre",
                    "La primera letra debe empezar con maýuscula",
                    "Debe ingresar su apellido",
                    "La primera letra debe empezar con maýuscula",
                    "Por favor llene un correo válido",
                    "Ingresa una contraseña válida"];

    var elementosId = ["name","name", "lastname", "lastname", "input-email", "input-password"]; */

      

    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        return span;
    }   else {
       var m = /^[a-zA-Z]*$/;
       if(!nombre.search(m)) {
            console.log("letra")
            m = /[a-z]/g;
        }    
        if(!nombre.search(m)){
            var span = document.createElement("span");
            var referencia= document.getElementById("name");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
        var span = document.createElement("span");
        var referencia= document.getElementById("lastname");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su apellido");
        span.appendChild(texto);
        return span;
    } else {
       var n = /^[a-zA-Z]*$/;
       if(!apellido.search(n)) {
            console.log("letra");
            n = /[a-z]/g;
        }    
        if(!apellido.search(n)){
            var span = document.createElement("span");
            var referencia= document.getElementById("lastname");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Por favor llene un correo válido");
        span.appendChild(texto);
        return span;
    } else if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresa una contraseña válida");
        span.appendChild(texto);
        return span;
    } 
    
    if((withoutOpcion == 0)){
            var span = document.createElement("span");
            var referencia = document.querySelector("select");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("Elige un tipo de bicicleta.");
            span.appendChild(texto);
            return span;
        }
/*    
    function creandoElementsPorId(elementosId, mensajes){
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        return span;
    }

    function iteracion(elementosId){
        for (var  i = 0; i < elementosId.length-1; i++) {
            console.log(elementosId[i]);
        };
    }
*/


    
}


