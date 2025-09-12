const meetingsBtn = document.getElementById("meetingsBtn");
const meetingsMenu = document.getElementById("meetingsMenu");
const caret = meetingsBtn.querySelector(".meeting-dropdown-caret");

meetingsBtn.addEventListener("click", () => {
  const isOpen = meetingsMenu.style.display === "block";
  meetingsMenu.style.display = isOpen ? "none" : "block";
  caret.classList.toggle("rotate", !isOpen);
});

window.addEventListener("click", (e) => {
  if (!meetingsBtn.contains(e.target) && !meetingsMenu.contains(e.target)) {
    meetingsMenu.style.display = "none";
    caret.classList.remove("rotate");
  }
});
