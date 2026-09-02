document.querySelectorAll("img").forEach((img) => {
img.dataset.loaded = img.complete;
img.addEventListener("load", () => {
img.dataset.loaded = img.complete;
});
});