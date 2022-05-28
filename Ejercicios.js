function Menu() {
  let nro_ejercicio = parseInt(
    prompt(
      "Ingrese el numero de ejercicio que quiere ejecutar:\r\n 1.Sumar dos numeros \r\n 2.Promedio de Examenes \r\n 3.Calcular área de un rectángulo \r\n 4.Calcular área de un triángulo \r\n 5.área de una circunferencia \r\n 6. Sueldo Semanal \r\n 7.Convertir metros en pulgadas \r\n 8. Cambio de Dolares a Soles \r\n 9.Edad de los Trabajadores \r\n 10.Persona Menor \r\n11.Bono por antiguedad"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("por favor ingresa valores");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("Ingrese el valor a sumar"));
      let valor2 = parseFloat(prompt("Ingrese el valor a sumar"));
      alert("La suma es:  " + ej1_sumarValores(valor1, valor2));
      break;
    case 2:
      let nota1 = parseFloat(prompt("Ingrese Nota 1"));
      let nota2 = parseFloat(prompt("Ingrese Nota 2"));
      let nota3 = parseFloat(prompt("Ingrese Nota 3"));
      let nota4 = parseFloat(prompt("Ingrese Nota 4"));
      alert(
        "El promedio de notas es:  " +
          ej2_promedioNotas(nota1, nota2, nota3, nota4)
      );
      break;
    case 3:
      let lado1 = parseFloat(prompt("Ingresar Altura"));
      let lado2 = parseFloat(prompt("Ingrese Ancho"));
      alert("El area del Rectangulo es:  " + ej3_areaRectangulo(lado1, lado2));
      break;
    case 4:
      let cat1 = parseFloat(prompt("Ingrese Nota 1"));
      let cat2 = parseFloat(prompt("Ingrese Nota 2"));
      alert("El area del Rectangulo es:  " + ej4_areaTriangulo(cat1, cat2));
      break;
    case 5:
      let radio = parseFloat(prompt("Ingrese radio"));
      alert(
        "El área de la circunferencia es:  " + ej5_areaCircunferencia(radio)
      );
      break;
    case 6:
      let horas = parseFloat(prompt("Ingrese horas trabajadas"));
      let salario = parseFloat(prompt("Ingrese salario por hora"));
      alert("El salario semanal es:  " + ej6_sueldoSemanal(horas, salario));
      break;
    case 7:
      let metros = parseFloat(prompt("Cantidad en metros:"));
      alert("cantidad en pulgadas:  " + ej7_convertirMetrosPulgadas(metros));
      break;
    case 8:
      let dolares = parseFloat(prompt("Ingrese cantidad en dolares"));
      let tipoCambio = parseFloat(prompt("Ingrese tipo de cambio"));
      alert("En soles es:  " + ej8_cambioDolaresSoles(dolares, tipoCambio));
      break;
    case 9:
      let año = parseFloat(prompt("ingresa el año de nacimiento: "));
      alert("La edad del Trabajador es: " + eje9_cnacimiento(año));
      break;

    case 10:
      let nombre1 = prompt("ingresa el nombre: ");
      let edad1 = parseFloat(prompt("ingresa la edade: "));
      let nombre2 = prompt("ingresa el nombre: ");
      let edad2 = parseFloat(prompt("ingresa la edade: "));
      let nombre3 = prompt("ingresa el nombre: ");
      let edad3 = parseFloat(prompt("ingresa la edad: "));
      alert(eje10_c_datos(nombre1, edad1, nombre2, edad2, nombre3, edad3));
      break;

    case 11:
      let tiempo = parseFloat(
        prompt("Cuantos años tienes trabajando con nuestra empresa? ")
      );
      alert(eje11_Bono(tiempo));
      break;
  }
}

function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor ingresa valor";
  } else {
    return a + b;
  }
}

function ej2_promedioNotas(a, b, c, d) {
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    return "Por favor ingresa notas";
  } else {
    return (a + b + c + d) / 4;
  }
}

function ej3_areaRectangulo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor ingresar valores";
  } else {
    return a * b;
  }
}

function ej4_areaTriangulo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor ingresar valores";
  } else {
    return (a * b) / 2;
  }
}

function ej5_areaCircunferencia(a) {
  if (isNaN(a)) {
    return "Por favor ingresar valor";
  } else {
    const pi = 3.1416;
    return 2 * pi * a;
  }
}

function ej6_sueldoSemanal(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor ingresar valores";
  } else {
    return a * b;
  }
}

function ej7_convertirMetrosPulgadas(a) {
  if (isNaN(a)) {
    return "Por favor ingresar valor";
  } else {
    return (a / 0.0254).toFixed(2);
  }
}

function ej8_cambioDolaresSoles(a) {
  if (isNaN(a)) {
    return "Por favor ingresar valor";
  } else {
    return a * 3.66;
  }
}

//ejercio 9
let eje9_cnacimiento = (año) => {
  if (isNaN(año)) {
    return "por favor ingresa valor";
  }
  let date = new Date();
  let year = date.getFullYear();
  return year - año;
};

//Ejercicio 10
let eje10_c_datos = (n1, e1, n2, e2, n3, e3) => {
  if (isNaN(e1) || isNaN(e2) || isNaN(e3)) {
    return "por favor ingresa valor";
  } else if (e1 < e2 && e1 < e3) {
    return (
      "La persona de menor edad tiene: " + e1 + " años y su nombre es: " + n1
    );
  } else if (e2 < e1 && e2 < e3) {
    return (
      "La persona de menor edad tiene: " + e2 + " años y su nombre es: " + n2
    );
  } else {
    return (
      "La persona de menor edad tiene: " + e3 + " años y su nombre es: " + n3
    );
  }
};
//ejercio 11
let eje11_Bono = (año) => {
  if (isNaN(año)) {
    return "por favor ingresa valor";
  }
  if (año == 1) {
    return "El bono que te corresponde es $100";
  } else if (año == 2) {
    return "El bono que te corresponde es $200";
  } else if (año == 3) {
    return "El bono que te corresponde es $300";
  } else if (año == 4) {
    return "El bono que te corresponde es $400";
  } else if (año == 5) {
    return "El bono que te corresponde es $500";
  } else {
    return "El bono que te corresponde es $1000";
  }
};
