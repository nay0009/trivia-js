
alert("!Hola, bienvenido a Trivia Universal!")
var name = prompt("¿Cual es tu nombre?");
document.getElementById("encabezado").innerHTML = "Bienvenido a Trivia Universal " + name;
var correctAnswer = 0

var game = prompt("¿Quieres jugar Trivia Universal? \n Elige el numero de tu respuesta. \n 1.- Si \n 2.- No")
if (game == "1") {
  alert("Comencemos TRIVIA UNIVERSAL");

  document.getElementById("tabla-resultados").classList.remove("invisible");
  var quizz = prompt("¿Cual es el tercer planeta del Sistema Solar? \n 1.- Tierra \n 2.- Marte");
  if (quizz == "1") {
    correctAnswer++;
    document.getElementById("correct1").innerHTML = "Respuesta 1, correcta.";
    document.getElementById("correct11").classList.remove("invisible");
  }
  else {
    alert("Lo siento, tu respuesta es INCORRECTA. \nLos ocho planetas que componen el sistema solar son, de menor a mayor distancia respecto al Sol, los siguientes: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno.")
    document.getElementById("incorrect1").innerHTML = "1.- La respuesta correcta es Tierra";
    document.getElementById("incorrect11").classList.remove("invisible");
  }

  var quizz2 = prompt("¿Cuantas patas tiene una araña? \n 1.- 8 patas \n 2.- 6 patas");
  if (quizz2 == "1") {
    correctAnswer++;
    document.getElementById("correct2").innerHTML = "Respuesta 2, correcta.";
    document.getElementById("correct22").classList.remove("invisible");
  }
  else {
    alert("Lo siento, tu respuesta es INCORRECTA. \nLa anatomía de las arañas las describe con cuerpo dividido en dos regiones o tagmas, es decir, un par de quelíceros, un par de pedipalpos y cuatro pares de patas locomotoras. Ocho patas totales.")
    document.getElementById("incorrect2").innerHTML = "2.- La respuesta correcta es 8 patas";
    document.getElementById("incorrect22").classList.remove("invisible");
  }

  var quizz3 = prompt("¿Cual es la ciudad de los Rascacielos? \n 1.- New York \n 2.- Dubai");
  if (quizz3 == "1") {
    correctAnswer++;
    document.getElementById("correct3").innerHTML = "Respuesta 3, correcta.";
    document.getElementById("correct33").classList.remove("invisible");
  }
  else {
    alert("Lo siento, tu respuesta es INCORRECTA. \nNueva York ha sido, es y será la ciudad de los rascacielos, ha concentrado a muchos de los edificios más altos del mundo, entre los que se encuentran el edificio Empire State y las torres gemelas del World Trade Center, que fueron derribadas en los atentados del 11 de septiembre de 2001.")
    document.getElementById("incorrect3").innerHTML = "3.- La respuesta correcta es New york";
    document.getElementById("incorrect33").classList.remove("invisible");
  }

  document.getElementById("respuestas").innerHTML = " Tus respuestas correctas son " + correctAnswer;
}

else { alert("Sera para la proxima " + name + ", hastaluego.") }
