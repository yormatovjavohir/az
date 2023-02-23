// const part1 = document.querySelector("#part1");
// const part2 = document.querySelector("#part2");
// const part3 = document.querySelector("#part3");

// part2.style.color = "red";
// part3.style.display = "none";
// part1.onclick = function () {
//   part1.textContent = part1.textContent * 1 + 1;
// };
const son = document.querySelector("div");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
plus.onclick = function () {
  son.textContent = son.textContent * 1 + 1;
  if (son.textContent * 1 > 0) {
    son.style.color = "red";
  }
};
minus.onclick = function () {
  son.textContent = son.textContent * 1 - 1;
  if (son.textContent * 1 < 0) {
    son.style.color = "white";
  }
};
const svg = document.querySelector("svg");
svg.onclick = function () {
  svg.classList.toggle("like");
};
