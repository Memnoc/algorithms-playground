import "./style.css";
import minMax from "./minMax";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Algorithm playground</h1>
    <p class="read-the-docs">
      Open you your dev console and click on the buttons to see the algorithms in action
    </p>
    <div class="card">
      <button id="minmax" type="button">min-max</button>
    </div>
  </div>
`;
minMax(document.querySelector("#minmax"));
