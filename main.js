let count = document.querySelector(".count");
let prog = document.querySelector(".prog");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
  prog.style.width = `${(this.value.length * 100) / maxLength}%`;
};
