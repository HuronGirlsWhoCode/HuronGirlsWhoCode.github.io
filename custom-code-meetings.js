document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".meeting-wrapper .meeting-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const caret = header.querySelector(".meeting-caret");

      content.classList.toggle("active");
      caret.classList.toggle("rotate");
    });
  });
});
