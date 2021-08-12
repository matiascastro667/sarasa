function mostrar()
{
	let nombre;
	let tipo;
	let sangre;
	let edad;
	let sexo;
	//a
	let acumEdadReptiles = 0;
	let contReptiles = 0;
	let promedioEdadReptiles = 0;
	//b
	let mascotaMasJovenEdad;
	let mascotaMasJovenTipo;
	let flagMascota = 1;
	//c
	let contMascotas =0;
	let contAves = 0;
	let porcentajeAves = 0;
	//d
	let contMamifero = 0;
	let mayorTipo;
	
	let seguir;
	
	seguir = "si";

	do{
		nombre = prompt("Ingrese nombre");
		while ( nombre.length < 3 || nombre.length > 8 ) {
			nombre = prompt("error, reingrese nombre");
		} 
		//nombre
		edad = parseInt(prompt("ingrese edad"));
		while (isNaN(edad) || edad < 0 ) {
			edad = parseInt(prompt("error, reingrese edad"));
		}
		//edad
		tipo = prompt("ingrese tipo: (mamifero/reptil/ave) ").toLocaleLowerCase();
			while(tipo != "mamifero" && tipo != "ave" && tipo != "reptil" ) {
				tipo = prompt("error, reingrese tipo: (mamifero/reptil/ave)").toLocaleLowerCase();
			} if (tipo != "mamifero" && tipo != "ave") {
			sangre = prompt("los reptiles son de sangre fria, ingrese tipo de sangre").toLocaleLowerCase();
			while(sangre != "fria") {
				sangre = prompt("error, reingrese tipo de sangre (fria)").toLocaleLowerCase();
				}
			} else{
			sangre = prompt("ingrese tipo de sangre (fria/caliente)").toLocaleLowerCase();
			while( sangre != "fria" && sangre != "caliente" ) {
				sangre = prompt("error, reingrese tipo de sangre (fria/caliente)").toLocaleLowerCase();
			}
			}
			//tipo y sangre
		sexo = prompt("ingrese sexo de su mascota (m/h)").toLocaleLowerCase();
		while(sexo != "m" && sexo != "h"){
			sexo = prompt("error, reingrese sexo de su mascota (m/h)").toLocaleLowerCase();	
		}
		//sexo
		
		switch(tipo){
			case "ave":
				contAves++;
			break;

			case "mamifero":
				contMamifero++;
			break;

			case "reptil":
				contReptiles++;
				acumEdadReptiles += edad;
			break;
		}

		if(flagMascota || edad < mascotaMasJovenEdad ) {
			mascotaMasJovenEdad = edad;
			mascotaMasJovenTipo = tipo;
			flagMascota = 0;
		}

		contMascotas++;


		seguir = prompt("desea seguir ingresando mascotas? (si/no)");
	} while(seguir == "si");
	//////////////////////////////TERMINA BULCE///////////////////////////////////////
//document.write(edad + "<br>" + nombre + "<br>" + tipo + "<br>" + sangre+ "<br>" + sexo);
 
//a 
if(contReptiles != 0 ){
  promedioEdadReptiles = acumEdadReptiles / contReptiles;
  document.write("A) promedio de edad de reptiles es " + promedioEdadReptiles + " años" +"<br>" );
}else{
	document.write("A) promedio de edad de reptiles es " + promedioEdadReptiles + "años" +"<br>" );

}

document.write("B) la mascota mas joven es un " + mascotaMasJovenTipo + " y tiene " + mascotaMasJovenEdad + " años" + "<br>" );

if(contAves !=0){
	porcentajeAves =  contAves * 100 / contMascotas ;
	document.write("C) el porcentaje de Aves es " + porcentajeAves + "%" + "<br>" );
} else {
	document.write("C) el porcentaje de Aves es " + porcentajeAves + "%" + "<br>" );
}

if(contAves > contMamifero && contAves > contReptiles  ){
	mayorTipo = "AVES";
document.write("D) el tipo de mascota con mas cantidad es " + mayorTipo);
} else if ( contReptiles >= contMamifero && contReptiles >= contAves){
	mayorTipo = "REPTILES";
	document.write("D) el tipo de mascota con mas cantidad es " + mayorTipo);
	
}else {
	mayorTipo = "MAMIFERO";
	document.write("D) el tipo de mascota con mas cantidad es " + mayorTipo);
}



}
/*Ejercicio 1 Recu

Se necesita llevar la gestión de una veterinaria. Para ello se
            podrán registrar los datos de cada mascota mientras el usuario
            quiera.			//DO WHILE
            De cada mascota se solicita: 
-nombre (entre 3 y 8 caracteres) 
-tipo (“mamifero”, “ave”, “reptil”) 
-sangre( "fria", "calida") Si es de tipo reptil solo puede tener sangre fria             
-edad (mayor a cero) 
-sexo(“m” de macho o “h” de hembra )

            Informar:
            a- Promedio de edad de los reptiles
            b- tipo y sexo de la mascota mas joven
            c- Del total de mascotas que porcentaje son aves
            d- De que tipo de mascota hay mas cantidad
---------------------------------------------------------------------------
1. DECLARACION D VARIABLES			
-nombre (length >= 3 && length <=8)
-tipo (“mamifero”, “ave”, “reptil”) 
-sangre( "fria", "calida") Si es de tipo reptil solo puede tener sangre fria
-edad (edad > 0) 
--sexo(“m” de macho o “h” de hembra )
_____________________________________________________
2. CREAR EL BUCLE ---- DO WHILE
2.1 DENTRO DEL BUCLE
-pedir datos y validar
-contar cant de reptiles y su edad
-contar tipo y sexo de la mascota mas joven
-contar total de aves
-contar total de mascotas
_____________________________________________________
3. FUERA DEL BUCLE
-Promedio de edad de los reptiles Y MOSTRAR
-tipo y sexo de la mascota mas joven Y MOSTRAR
-calcular porcentaje de aves Y MOSTRAR
-calcular de q tipo hasy mas cantidad Y MOSTRAR



*/