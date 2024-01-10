import {characters} from "./arr"
import { DOMSelectors } from "./dom"

function insert(arr) {
    arr.forEach((data) => DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
      <div class="card">
        <h4 class="name">${data.name}</h1>
        <img src="${arr.img}" alt="Image of ${arr.name}" class="card-img"/> <br>
      </div>
    </div>`
))}

insert(characters);