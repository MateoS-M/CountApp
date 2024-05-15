const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;

increase.onclick = function() {
    count++;
    labelDisplay.textContent = count;
}
decrease.onclick = function() {
    count--;
    labelDisplay.textContent = count;
}
reset.onclick = function() {
    count = 0;
    labelDisplay.textContent = count;
}