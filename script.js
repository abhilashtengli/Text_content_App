const addButton = document.getElementById("addButton");
const outputSol = document.getElementById("output");

addButton.addEventListener("click", function () {
  const textBox = document.getElementById("textbox");
  const text = textBox.value;

  if (text.trim() !== "") {
    const newPara = document.createElement("p");
    newPara.textContent = text;
    outputSol.appendChild(newPara);
    textBox.value = "";
  }
});
