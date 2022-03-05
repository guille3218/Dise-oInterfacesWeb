// Api: https://botw-compendium.herokuapp.com/api/v2/entry/{id} id debe de ser de 1 a 389

let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = inicio;

function inicio() {
  generar_datos();
}

function generar_datos() {
  let idList = [];
  for (let i = 0; i < 20; i++) {
    let random = Math.floor(Math.random() * (389 - 1));
    idList.push(random);
  }
  console.log(idList);

  for (let id of idList) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (
        xhr.readyState === READY_STATE_COMPLETE &&
        xhr.status === HTTP_STATUS_OK
      ) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        insertar_dato(data);
      }
    };
    xhr.open(
      "GET",
      "https://botw-compendium.herokuapp.com/api/v2/entry/".concat(
        id.toString()
      )
    );
    xhr.send();
  }
}

function insertar_dato(dato) {
  let datos = document.getElementById("datos");

  let div = document.createElement("div");
  div.setAttribute("class", "col m12 valign-wrapper");

  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "col m2 green");
  let img = document.createElement("img");
  img.setAttribute("src", dato.data.image);
  img.setAttribute("class", "circle responsive-img ");
  imgDiv.appendChild(img);
  div.appendChild(imgDiv);

  let nombreDiv = document.createElement("div");
  nombreDiv.setAttribute("class", "col m2 green lighten-2");
  let nombre = document.createElement("p");
  nombre.innerHTML = dato.data.name;
  nombreDiv.appendChild(nombre);
  div.appendChild(nombreDiv);

  let categoriaDiv = document.createElement("div");
  categoriaDiv.setAttribute("class", "col m2 green");
  let categoria = document.createElement("p");
  categoria.innerHTML = dato.data.category;
  categoriaDiv.appendChild(categoria);
  div.appendChild(categoriaDiv);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "col m6 green lighten-2");
  let description = document.createElement("p");
  description.innerHTML = dato.data.description;
  descriptionDiv.appendChild(description);
  div.appendChild(descriptionDiv);

  datos.appendChild(div);
}
