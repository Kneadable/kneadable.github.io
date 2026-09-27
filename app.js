/* =========================================================
   FrontDesk Website JavaScript
   Interactive tour tabs, FAQ accordion, and the header shadow on scroll
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Showcase Tab Switching
  const tabs = document.querySelectorAll(".showcase-tab");
  const panels = document.querySelectorAll(".showcase-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");

      // Update active tab buttons
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Update active viewport panels
      panels.forEach(panel => {
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  });

  // 2. FAQ Accordion Interaction
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      // Close all items
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        const q = i.querySelector(".faq-question");
        if (q) q.setAttribute("aria-expanded", "false");
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // 3. Header Shadow on Scroll
  const header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = "0 4px 12px rgba(15, 23, 42, 0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }
});
