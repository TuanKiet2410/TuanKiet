const gifs = document.querySelectorAll(".hoverGif");
const links = document.querySelectorAll(".image-box a");

links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    const rect = e.target.getBoundingClientRect();

    gifs.forEach((gif, index) => {
      gif.style.display = "block";
    });
  });

  link.addEventListener("mouseleave", () => {
    gifs.forEach((gif) => {
      gif.style.display = "none";
    });
  });
});
