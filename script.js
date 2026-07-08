// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// WhatsApp-connected contact form
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get("name") || "Customer").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const baseText = `New enquiry from Tyagi Telecom website:%0A%0AName: ${encodeURIComponent(
      name
    )}%0APhone: ${encodeURIComponent(phone)}%0AQuery: ${encodeURIComponent(message)}`;

    // Main WhatsApp number for Tyagi Telecom
    const whatsappNumber = "919719201922"; // without + sign
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${baseText}`;

    window.open(whatsappUrl, "_blank");
    form.reset();
  });
}

