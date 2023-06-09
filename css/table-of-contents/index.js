const options = { rootMargin: "-75px" };
const observer = new IntersectionObserver(entries => {
  for(const entry of entries) {
    const id = entry.target.getAttribute("id");

    const anchor = document.querySelector(`nav ul li a#${id}-anchor`);
    if(entry.isIntersecting) {
      anchor.className = "highlight";
    } else {
      anchor.className = "";
    }
  }
}, options);

window.addEventListener("load", () => {
  document
    .querySelectorAll("article h1, article h2")
    .forEach(element => observer.observe(element));
});

window.addEventListener("unload", () => {
  observer.disconnect();
});
