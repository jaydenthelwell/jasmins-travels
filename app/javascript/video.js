document.addEventListener("DOMContentLoaded", function () {
  let video = document.querySelector("video");
  video.muted = true;
  video.play().catch(error => console.log("Autoplay failed:", error));
});
