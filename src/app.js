/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = [
    "Una nube solitaria",
    "Santa Claus",
    "SAT",
    "Mi abuelita",
    "Un ladrón",
    "El GITPOD"
  ];
  let accion = [
    "mojo",
    "se comío",
    "embargó",
    "despertó",
    "entro a robar",
    "explotó"
  ];
  let que = [
    "mi tarea",
    "el pastel",
    "mis cuentas",
    "a los vecinos",
    "solamente mi despertador"
  ];
  let cuando = [
    "antes de venir a clases y mi tarea se perdío",
    "cuando trajo los regalos",
    "cuando iba a ir a depositar mi deuda",
    "en la madrugada porque festejaba algo...",
    "cuando yo dormía",
    "cuando ya casi terminaba los ejercicios de javascript y se perdieron"
  ];

  let lastVar = localStorage.getItem("lastVar");
  let randomNum = Math.floor(Math.random() * quien.length);

  if (lastVar != null) {
    if (lastVar == randomNum) {
      while (lastVar == randomNum) {
        randomNum = Math.floor(Math.random() * quien.length);
      }
    }
    localStorage["lastVar"] = randomNum;
  }

  let excuse = "";

  for (let i = 0; i < quien.length; i++) {
    if (i == randomNum) {
      quien[i] != null ? (excuse += quien[i] + " ") : "";
      accion[i] != null ? (excuse += accion[i] + " ") : "";
      que[i] != null ? (excuse += que[i] + " ") : "";
      cuando[i] != null ? (excuse += cuando[i] + " ") : "";
    }
  }

  /*let excuse =
    accion[randomNum] +
      " " +
      que[randomNum] +
      " " +
      cuando[randomNum];*/
  document.getElementById("excuse-body").innerHTML = excuse;
};
