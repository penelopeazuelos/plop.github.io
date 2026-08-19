(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll("[id^='paper-']");

    titles.forEach(title => {
      const id = title.getAttribute("id");
      const abstract = document.querySelector(`[id="${id}-abstract"]`);
      const arrow = document.querySelector(`[id="${id}-arrow"]`);
      if (!abstract) return;

      // Ensure hidden initially via JS (also do in CSS for safety)
      abstract.style.display = "none";

      title.addEventListener("click", () => {
        const isVisible = abstract.classList.contains("visible");

        // Cancel any pending timeout
        if (abstract.hideTimeout) clearTimeout(abstract.hideTimeout);

        if (isVisible) {
          abstract.classList.remove("visible");

          arrow.classList.remove("up");
          arrow.classList.add("down");
          
          abstract.hideTimeout = setTimeout(() => {
            abstract.style.display = "none";
          }, 300); // match CSS transition duration
        } else {
          abstract.style.display = "block";
          requestAnimationFrame(() => abstract.classList.add("visible"));
          arrow.classList.remove("down");
          arrow.classList.add("up");
        }
      });
      arrow.addEventListener("click", () => {
        const isVisible = abstract.classList.contains("visible");

        // Cancel any pending timeout
        if (abstract.hideTimeout) clearTimeout(abstract.hideTimeout);

        if (isVisible) {
          abstract.classList.remove("visible");

          arrow.classList.remove("up");
          arrow.classList.add("down");
          
          abstract.hideTimeout = setTimeout(() => {
            abstract.style.display = "none";
          }, 300); // match CSS transition duration
        } else {
          abstract.style.display = "block";
          requestAnimationFrame(() => abstract.classList.add("visible"));
          arrow.classList.remove("down");
          arrow.classList.add("up");
        }
      });
    });
  });
})();