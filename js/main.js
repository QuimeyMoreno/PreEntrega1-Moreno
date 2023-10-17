//  Ejercicio integral para el proyecto final

let boletaElectronica = Number(prompt("Ingrese la operacion que desea realizar. 1) Realizar boleta electronica. 2) Añadir nuevo cliente. 3) Para SALIR"));




function eleccionOperacion(boletaElectronica) {
    while (boletaElectronica != 3){
        switch(boletaElectronica){
            case 1:
                pedidoCliente();
                break;
            
            case 2:
                nuevoCliente();
            
            default:
                alert("El numero que selecciono no corresponde a ninguna operacion");
                break;
        }

        boletaElectronica = Number(prompt("Ingrese la operacion que desea realizar. 1) Realizar boleta electronica. 2)Añadir nuevo cliente. 3) Para SALIR"));
    }
   
    
}


function pedidoCliente() {
    let producto = prompt("Ingrese el producto. Para salir escriba SALIR");
    let total_2 = 0;
    let total = 0;

    while (producto !== "SALIR") {
        let cantidad = parseInt(prompt("Seleccione la cantidad"));

        switch (producto) {
            case "1":
                total_2 = calcularSubtotal(400, cantidad);
                alert(cantidad + " " + "panchos " + " a $400 da un total de: $ " + total_2);
                total += total_2 
                mostrarFactura(total);
                break;
            case "2":
                total_2 = calcularSubtotal(500, cantidad);
                alert(cantidad + "  " + "hamburguesas" + " a $500 da un total de: $ " +  total_2);
                total += total_2 
                mostrarFactura(total);
                break;
            default:
                alert("Producto incorrecto");
                break;
        }

        producto = prompt("Ingrese el producto. Para salir escriba SALIR");
    }

    alert("Total a pagar: $" + total);
}


function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function mostrarFactura(total) {
    alert("La suma de su factura es de $" + total);
}


function nuevoCliente(){
    let agregarCliente = prompt("Ingrese el nombre del cliente. Para regresar a la opcion anterior escriba SALIR");

    while (agregarCliente != "SALIR"){
        let dataCliente ="Usted a añadido a el cliente: " + agregarCliente; 
        alert(dataCliente);
      
        agregarCliente = prompt("Ingrese el nombre del cliente. Para regresar a la opcion anterior escriba SALIR");
    }
}



eleccionOperacion(boletaElectronica);

alert("Gracias por confiar en boletas Quimey");