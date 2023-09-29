import "./style.css";
import "./app.css";

import logo from "./assets/images/logo-universal.png";
import { Greet } from "../wailsjs/go/main/App";

document.querySelector("#app").innerHTML = `
    <video controls width="500" >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
`;
document.getElementById("logo").src = logo;

let nameElement = document.getElementById("name");
nameElement.focus();
let resultElement = document.getElementById("result");

// Setup the greet function
window.greet = function () {
  // Get name
  let name = nameElement.value;

  // Check if the input is empty
  if (name === "") return;

  // Call App.Greet(name)
  try {
    Greet(name)
      .then((result) => {
        // Update result with data back from App.Greet()
        resultElement.innerText = result;
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err);
  }
};
