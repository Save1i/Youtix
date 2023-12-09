const button = document.getElementById("myButton");

button.addEventListener("mousedown", () => {
  button.classList.add("clicked");
});

button.addEventListener("mouseup", () => {
  button.classList.remove("clicked");
});
