function mostrar() {
  let tipo;
  let respuesta;
  let origen;
  let precio;
  let contMuñeca = 0;
  let contPelota = 0;
  let contRompecabezas = 0;
  let flagMasBarato = 1;
  let precioRompeMasBarato;
  let precioflagMasBarato;
  let contImportados = 0;
  let acumPrecioImportados = 0;
  let PrecioImportados;
  let precioTotal = 0;
  let iva;

  do {
    tipo = prompt("Ingrese jugete tipo (muñeca/rompecabezas/pelota)"
    ).toLowerCase();
    while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota") {
      tipo = prompt("error, Reingrese jugete muñeca , rompecabezas , pelota "
      ).toLowerCase();
    }

    origen = prompt("Ingrese origen del jugete (importado /nacional)").toLowerCase();
    while (origen != "importado" && origen != "nacional") {
      origen = prompt("error, Reingrese origen del jugete (importado /nacional)").toLowerCase();
    }

    precio = parseInt(prompt("Ingrese el precio del jugete entre 1000 y 5000: "));
    while (precio < 1000 || precio > 5000 || isNaN(precio)) {
      precio = parseInt( prompt("error, reingrese el precio del jugete entre 1000 y 5000"));
    }

    precioTotal = precioTotal + precio;

    switch (tipo) {
      case "muñeca":
        contMuñeca++;
        break;
      case "pelota":
        contPelota++;
        break;
      case "rompecabezas":
        contRompecabezas++;
        break;
    }

    // A
    if (contMuñeca > contRompecabezas && contMuñeca > contPelota) {
      jugueteMasVendido = "muñeca";
    } else if (
      contRompecabezas >= contMuñeca &&
      contRompecabezas > contPelota
    ) {
      jugueteMasVendido = "rompecabezas";
    } else {
      jugueteMasVendido = "pelotas";
    }

    // B
    if (origen == "importado") {
      contImportados++;
      acumPrecioImportados = acumPrecioImportados + precio;
    }

    // D
    if (tipo == "rompecabezas" && origen == "nacional") {
      if (flagMasBarato || precio < precioRompeMasBarato) {
        precioflagMasBarato = precio;
        flagMasBarato = 0;
      }
    }

    respuesta = prompt("¿Desea seguir ingresando datos? (SI/NO)").toLowerCase();
    while (respuesta != "si" && respuesta != "no") {
      respuesta = prompt("error ¿Desea seguir ingresando ventas? (Si/No)").toLowerCase();
    }
    
  } while (respuesta == "s");
//FUERA DEL BUCLE

  // B
  PrecioImportados = acumPrecioImportados / contImportados;

  iva = precioTotal * 0.21;

  document.write(
    "A) El tipo de juguete mas vendido" + jugueteMasVendido + "<br>");

  document.write(
    "B) El promedio de precio de los juguetes importados" + PrecioImportados +"<br>");

  document.write("C) La recaudacion total : " + precioTotal + "<br>");

  document.write("D )Cual es el precio del rompecabezas nacional mas barato : " + precioflagMasBarato +"<br>" );

  document.write("e )   Cuanto se percibio de iva en total (es el 21% de las ventas): " + iva +"<br>");
} 
/**Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas) */
