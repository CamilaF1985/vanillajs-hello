/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays para las diferentes partes de la excusa
  let quien = ["Mi perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let accion = ["se comió", "mojó", "aplastó", "quemó"];
  let que = ["mi tarea", "las llaves", "el auto"];
  let cuando = [
    "antes de la clase",
    "cuando iba saliendo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras me duchaba"
  ]; //Valores random, lo que importa es que funcione y la función no se caiga

  // Función para generar una excusa aleatoria
  function generarExcusa() {
    let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
    let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    let queAleatoria = que[Math.floor(Math.random() * que.length)];
    let cuandoAleatoria = cuando[Math.floor(Math.random() * cuando.length)];

    return `${quienAleatorio} ${accionAleatoria} ${queAleatoria} ${cuandoAleatoria}`;
  }

  // Agregar un evento al botón (se hace click en el botón y este genera una excusa random)
  document.getElementById("generate").addEventListener("click", function() {
    let excusa = generarExcusa();
    document.getElementById("excuse").textContent = excusa;
  });

  //Dejé el mismo log, su única función es corroborar que esté cargando correctamente el script
  console.log("Hola Rigo desde la consola!");
};
