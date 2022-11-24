alert("Primera pre entrega");
    let nombreUsuario = prompt("Ingrese su nombre");
    while(nombreUsuario === ""){
        nombreUsuario = prompt("Ingrese su nombre")
    }

function solicitarNombre() {
    alert("Bienvenido " + nombreUsuario + ". Gracias por visitarnos.")
}

function elegirPrenda() {
    let prenda;
    do {
       prenda = parseInt(prompt("Ingrese la prenda que desea adquirir.\n\nEjemplo seleccione '1' para Remera.\n\n1- Remera\n2- Jeans\n3- Vestido \n4- Saco"));
    } while (prenda !=1 && prenda !=2 && prenda !=3 && prenda !=4);
    switch(prenda){
        case 1:
            return "Remera";
        case 2:
            return "Jeans";
        case 3:
            return "Vestido";
        case 4:
            return "Saco";
    }
}

function elegirColor() {
    let color;
    do {
        color = parseInt(prompt("Seleccione color.\n\nEjemplo seleccione '1' para Rojo.\n\n1- Rojo \n2- Verde \n3- Amarillo \n4- Azul"));
    } while (color !=1 && color !=2 && color !=3 && color !=4);
    switch(color){
        case 1:
            return "Rojo";
        case 2:
            return "Verde";
        case 3:
            return "Amarillo";
        case 4:
            return "Azul";
    }
}

function elegirTalle() {
    let talle;
    do {
        talle = parseInt(prompt("Seleccione el talle.\n\nEjemplo seleccione '1' Xs.\n\n1- Xs \n2- S \n3- M \n4- L \n5- Xl"));
    } while (talle !=1 && talle !=2 && talle !=3 && talle !=4 && talle !=5);
    switch(talle){
        case 1:
            return "Xs";
        case 2:
            return "S";
        case 3:
            return "M";
        case 4:
            return "L";
        case 5:
            return "Xl";
    }
}

function validarPrecio (prenda, color, talle) {

    if (prenda === "Remera" && color === "Rojo" && talle === "Xs") {
                return 500;
    } else if (prenda === "Remera" && color === "Rojo" && talle === "S") {
                return 550;
    } else if (prenda === "Remera" && color === "Rojo" && talle === "L") {
                return 600;
    } else if (prenda === "Remera" && color === "Rojo" && talle === "M") {
                return 650;     
    } else if (prenda === "Remera" && color === "Rojo" && talle === "Xl") {
                return 700;
    } else if (prenda === "Remera" && color === "Verde" && talle === "Xs") {
                return 500;
    } else if (prenda === "Remera" && color === "Verde" && talle === "S") {
                return 550;
    } else if (prenda === "Remera" && color === "Verde" && talle === "L") {
                return 600;
    } else if (prenda === "Remera" && color === "Verde" && talle === "M") {
                return 650;     
    } else if (prenda === "Remera" && color === "Verde" && talle === "Xl") {
            return 700;
    } else if (prenda === "Remera" && color === "Amarillo" && talle === "Xs") {
            return 500;
    } else if (prenda === "Remera" && color === "Amarillo" && talle === "S") {
            return 550;
    } else if (prenda === "Remera" && color === "Amarillo" && talle === "L") {
            return 600;
    } else if (prenda === "Remera" && color === "Amarillo" && talle === "M") {
            return 650;     
    } else if (prenda === "Remera" && color === "Amarillo" && talle === "Xl") {
        return 700;
    } else if (prenda === "Remera" && color === "Azul" && talle === "Xs") {
        return 500;
    } else if (prenda === "Remera" && color === "Azul" && talle === "S") {
        return 550;
    } else if (prenda === "Remera" && color === "Azul" && talle === "L") {
        return 600;
    } else if (prenda === "Remera" && color === "Azul" && talle === "M") {
        return 650;     
    } else if (prenda === "Remera" && color === "Azul" && talle === "Xl") {
    return 700;

    //jeans
    
    } if (prenda === "Jeans" && color === "Rojo" && talle === "Xs") {
        return 1500;
    } else if (prenda === "Jeans" && color === "Rojo" && talle === "S") {
        return 1550;
    } else if (prenda === "Jeans" && color === "Rojo" && talle === "L") {
        return 1600;
    } else if (prenda === "Jeans" && color === "Rojo" && talle === "M") {
        return 1650;     
    } else if (prenda === "Jeans" && color === "Rojo" && talle === "Xl") {
        return 1700;
    } else if (prenda === "Jeans" && color === "Verde" && talle === "Xs") {
        return 1500;
    } else if (prenda === "Jeans" && color === "Verde" && talle === "S") {
        return 1550;
    } else if (prenda === "Jeans" && color === "Verde" && talle === "L") {
        return 1600;
    } else if (prenda === "Jeans" && color === "Verde" && talle === "M") {
        return 1650;     
    } else if (prenda === "Jeans" && color === "Verde" && talle === "Xl") {
        return 1700;
    } else if (prenda === "Jeans" && color === "Amarillo" && talle === "Xs") {
        return 1500;
    } else if (prenda === "Jeans" && color === "Amarillo" && talle === "S") {
        return 1550;
    } else if (prenda === "Jeans" && color === "Amarillo" && talle === "L") {
        return 1600;
    } else if (prenda === "Jeans" && color === "Amarillo" && talle === "M") {
        return 1650;     
    } else if (prenda === "Jeans" && color === "Amarillo" && talle === "Xl") {
        return 1700;
    } else if (prenda === "Jeans" && color === "Azul" && talle === "Xs") {
        return 1500;
    } else if (prenda === "Jeans" && color === "Azul" && talle === "S") {
        return 1550;
    } else if (prenda === "Jeans" && color === "Azul" && talle === "L") {
        return 1600;
    } else if (prenda === "Jeans" && color === "Azul" && talle === "M") {
        return 1650;     
    } else if (prenda === "Jeans" && color === "Azul" && talle === "Xl") {
        return 1700;
    }

    //vestidos

     else if (prenda === "Vestido" && color === "Rojo" && talle === "Xs") {
        return 3500;
    } else if (prenda === "Vestido" && color === "Rojo" && talle === "S") {
        return 3550;
    } else if (prenda === "Vestido" && color === "Rojo" && talle === "L") {
        return 3600;
    } else if (prenda === "Vestido" && color === "Rojo" && talle === "M") {
        return 3650;     
    } else if (prenda === "Vestido" && color === "Rojo" && talle === "Xl") {
        return 3700;
    } else if (prenda === "Vestido" && color === "Verde" && talle === "Xs") {
        return 3500;
    } else if (prenda === "Vestido" && color === "Verde" && talle === "S") {
        return 3550;
    } else if (prenda === "Vestido" && color === "Verde" && talle === "L") {
        return 3600;
    } else if (prenda === "Vestido" && color === "Verde" && talle === "M") {
        return 3650;     
    } else if (prenda === "Vestido" && color === "Verde" && talle === "Xl") {
        return 3700;
    } else if (prenda === "Vestido" && color === "Amarillo" && talle === "Xs") {
        return 3500;
    } else if (prenda === "Vestido" && color === "Amarillo" && talle === "S") {
        return 3550;
    } else if (prenda === "Vestido" && color === "Amarillo" && talle === "L") {
        return 3600;
    } else if (prenda === "Vestido" && color === "Amarillo" && talle === "M") {
        return 3650;     
    } else if (prenda === "Vestido" && color === "Amarillo" && talle === "Xl") {
        return 3700;
    } else if (prenda === "Vestido" && color === "Azul" && talle === "Xs") {
        return 3500;
    } else if (prenda === "Vestido" && color === "Azul" && talle === "S") {
        return 3550;
    } else if (prenda === "Vestido" && color === "Azul" && talle === "L") {
        return 3600;
    } else if (prenda === "Vestido" && color === "Azul" && talle === "M") {
        return 3650;     
    } else if (prenda === "Vestido" && color === "Azul" && talle === "Xl") {
        return 3700;

    //Sacos

    } else if (prenda === "Saco" && color === "Rojo" && talle === "Xs") {
        return 4500;
    } else if (prenda === "Saco" && color === "Rojo" && talle === "S") {
        return 4550;
    } else if (prenda === "Saco" && color === "Rojo" && talle === "L") {
        return 4600;
    } else if (prenda === "Saco" && color === "Rojo" && talle === "M") {
        return 4650;     
    } else if (prenda === "Saco" && color === "Rojo" && talle === "Xl") {
        return 4700;
    } else if (prenda === "Saco" && color === "Verde" && talle === "Xs") {
        return 4500;
    } else if (prenda === "Saco" && color === "Verde" && talle === "S") {
        return 4550;
    } else if (prenda === "Saco" && color === "Verde" && talle === "L") {
        return 4600;
    } else if (prenda === "Saco" && color === "Verde" && talle === "M") {
        return 4650;     
    } else if (prenda === "Saco" && color === "Verde" && talle === "Xl") {
        return 4700;
    } else if (prenda === "Saco" && color === "Amarillo" && talle === "Xs") {
        return 4500;
    } else if (prenda === "Saco" && color === "Amarillo" && talle === "S") {
        return 4550;
    } else if (prenda === "Saco" && color === "Amarillo" && talle === "L") {
        return 4600;
    } else if (prenda === "Saco" && color === "Amarillo" && talle === "M") {
        return 4650;     
    } else if (prenda === "Saco" && color === "Amarillo" && talle === "Xl") {
        return 4700;
    } else if (prenda === "Saco" && color === "Azul" && talle === "Xs") {
        return 4500;
    } else if (prenda === "Saco" && color === "Azul" && talle === "S") {
        return 4550;
    } else if (prenda === "Saco" && color === "Azul" && talle === "L") {
        return 4600;
    } else if (prenda === "Saco" && color === "Azul" && talle === "M") {
        return 4650;     
    } else if (prenda === "Saco" && color === "Azul" && talle === "Xl") {
        return 4700;

}
}

function presupuesto (nombre, color, talle, precio){
    alert("El precio de " + nombre + " de color " + color + " y de talle " + talle + "\nes de $" + precio)
}

function cobrar (nombre, precio){
    alert(nombreUsuario + ". Usted lleva el siguiente producto " + nombre + "\nPrecio: $" + precio);
    let pago = parseInt(prompt("Con cuanto pagas?"));
    if(() => precio) {
        alert("Gracias, " + nombreUsuario + ". Su vuelto es " + (pago - precio))
    }else{
        alert("No te alcanza!")
    }
}

function saludoFinal (){
    alert("Gracias por su compra, " + nombreUsuario);{
    }
}

solicitarNombre();
let prendaNombre = elegirPrenda();
let colorNombre = elegirColor();
let talleNombre = elegirTalle();
let precioProducto = validarPrecio(prendaNombre, colorNombre, talleNombre);
presupuesto(prendaNombre, colorNombre, talleNombre, precioProducto);
cobrar(prendaNombre, precioProducto);
saludoFinal();