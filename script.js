const loader = document.getElementById("loader");
const beginBtn = document.getElementById("beginBtn");
const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 650);
});

beginBtn.addEventListener("click", () => {
  document.querySelector(".reveal").scrollIntoView({behavior:"smooth"});
});

finalBtn.addEventListener("click", () => {
  finalMessage.classList.toggle("show");
  if(finalMessage.classList.contains("show")){
    finalMessage.scrollIntoView({behavior:"smooth", block:"center"});
    finalBtn.textContent = "Thank you for everything ✦";
  } else {
    finalBtn.textContent = "Open the final message ✦";
  }
});

// Subtle mouse glow
document.addEventListener("pointermove", e => {
  const hero = document.querySelector(".hero");
  hero.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #142943 0, #07111f 48%, #050c16 100%)`;
});
