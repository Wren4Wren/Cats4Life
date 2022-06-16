import "../App";
const modal = document.getElementsById("catButton");
const btn = document.getElementsById("openModal");
const span = document.getElementsByClassName("closeButton")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
