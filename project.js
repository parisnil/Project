document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const meny = document.getElementById("mobilmeny");

  hamburger.addEventListener("click", () => {
	meny.classList.toggle("visa");
  });
});
