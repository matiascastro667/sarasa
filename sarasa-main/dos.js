function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantMaterias;
  let notaPromAlumno;
  let edad;
  //a
  let mejorPromFisicaNota;
  let mejorPromFisicaNombre;
  let flagMejorPromFisica = 1;
  //b
  let alumnaMasJovenEdad;
	let alumnaMasJovenNombre;
	let flagAlumnaJoven = 1;
  //c
  let contQuimica = 0;
  let contSistemas = 0;
  let contFisica = 0;
  let contMateriasFis = 0;
  let porcQuimica = 0;
  let porcSistemas = 0;
  let porcFisica = 0;
  //D
  let flagMasMateriasFis = 1;
  let flagMasMateriasSist = 1;
  let masMateriasNombre;
  let masMateriasEdad;
  let masMateriasFisCant = 0;
  let masMateriasSistCant = 0;

  for( let i = 0; i < 2;i++)
  {
    nombre = prompt("Ingrese nombre").toLocaleLowerCase();
	
    carrera = prompt("ingrese carrera: (quimica/fisica/sistemas) ").toLocaleLowerCase();
			while(carrera != "quimica" && carrera != "sistemas" && carrera != "fisica" ) {
				carrera = prompt("error, reingrese carrera: (quimica/fisica/sistemas)").toLocaleLowerCase();
      }
      sexo = prompt("ingrese sexo (masculino/femenino/no binario)").toLocaleLowerCase();
      while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
        sexo = prompt("error, reingrese sexo (masculino/femenino/no binario)").toLocaleLowerCase();	
      }

      cantMaterias = parseInt(prompt("ingrese la cantidad de materias cursadas (no puede exdecer las 5 materias)"));
      while((isNaN(cantMaterias) || cantMaterias < 1 || cantMaterias > 5) ) {
        cantMaterias = parseInt(prompt("Error, reingrese la cantidad de materias cursadas (no puede exdecer las 5 materias)"));
      }
      notaPromAlumno = parseFloat(prompt("ingrese la nota promedio"));
      while((isNaN(notaPromAlumno) || notaPromAlumno < 0 || notaPromAlumno > 10) ) {
        notaPromAlumno = parseFloat(prompt("Error, reingrese la nota promedio"));
      }
      edad = parseInt(prompt("ingrese edad"));
        while (isNaN(edad) || edad < 0 ) {
        edad = parseInt(prompt("error, reingrese edad"));
      }

      switch(carrera){
        case"quimica":
        contQuimica++;
        break;


        case"fisica":
          contFisica++;
          if(flagMasMateriasFis || cantMaterias < masMateriasFisCant){
            masMateriasNombre = nombre;
             masMateriasEdad = edad;
          }
        break;


        case"sistemas":
        contSistemas++;
        if(flagMasMateriasSist || cantMaterias < masMateriasFisCant){
            masMateriasNombre = nombre;
            masMateriasEdad = edad;
        }
        break;
      }

  //A
      if (sexo == "femenino")
       {
          if(flagAlumnaJoven || edad < alumnaMasJovenEdad ) {
            alumnaMasJovenEdad = edad;
            alumnaMasJovenNombre = nombre;
            flagAlumnaJoven = 0;
          }
       }
  //B
      if (carrera == "fisica"){
        if(flagMejorPromFisica || notaPromAlumno > mejorPromFisicaNota){
          mejorPromFisicaNombre = nombre;
          mejorPromFisicaNota = notaPromAlumno;
          flagMejorPromFisica = 0;
        }
      }
//D 
  if (carrera == "fisica" && carrera == "sistemas") {

    if(flagMasMaterias || materias){
      let masMateriasNombre;
      let masMateriasEdad;
    }

  }


  }


          ///////////////////////  FUERA DEL FOR \\\\\\\\\\\\\\\\\\\\\\\\

if (contFisica < 1 ){
document.write("A) El alumno con mejor promedio en la carrera Fisica es " + mejorPromFisicaNombre + " con un promedio de " + mejorPromFisicaNota + "<br>");
} else {
  document.write("A) No se inscribieron alumnos a la carrera Fisica" + "<br>");
}

if (sexo == "femenino"){
  document.write("B) la alumna mas joven es " + alumnaMasJovenNombre + " y tiene " + alumnaMasJovenEdad + " años" + "<br>" );
}else{
  document.write("B) No se registraron alumnas" + "<br>" );
}

//C
if(contfisica !=0){
	porcFisica =  contfisica * 100 / 500 ;
	
} else {
	document.write("C) el porcentaje de alumnos de la UTN FRA cursando fisica es " + contfisica + "%" + "<br>" );
}

if(contQuimica !=0){
porcQuimica = contQuimica * 100/500;
} else {
  document.write("C) el porcentaje de alumnos de la UTN FRA cursando Quimica es " + contQuimica + "%" + "<br>" );
}

if(contSistemas !=0 ){
porcSistemas = contSistemas * 100 / 500;
}else  {
  document.write("C) el porcentaje de alumnos de la UTN FRA cursando Sistemas es " + contSistemas + "%" + "<br>");
}

document.write("C) El promedio de alumnos de la UTN FRA cursando Quimica es " + porcQuimica + "%" + "<br>" + "el promedio de alumnos cursando Fisica es de " + porcFisica + "%" + "<br>" + "el promedio de alumnos cursando Sistemas es de " + porcSistemas + "%" + "<br>");

//D
}























/**Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. 
------------------------------------------------------------------------------------------------------------------------------
RESOLUCION
1) declarar variables
-nombre
-carrera("Quimica";"Fisica";"Sistemas")
-sexo (masculino - femenino -no binario)
-cantidad de materias(entre 1 y 5)
-Nota promedio del alumno(entre 0 y 10),
-edad (validar).


2)Crear el bucle FOR(500 vueltas)
          DENTRO DEL BUCLE
2,1)pedir datos y validar */
