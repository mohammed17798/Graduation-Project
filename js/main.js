const links = document.querySelector(".links");
const icon = document.querySelector(".icon");
const body = document.getElementsByTagName("body");
console.log(links);

function drop_links() {
  links.classList.add("expand-link");
}
icon.addEventListener("click", drop_links);
