let h1 = document.querySelector("h1");

let letters = ["B","o","n","n","a","d","i","c","a"];

letters.forEach(letter => {
  let span = document.createElement("span");
  span.textContent = letter;
  h1.appendChild(span);
})
