// mobile nav
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

// active nav on scroll
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const y = window.scrollY + 90;

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (y >= top && y < top + height) {
      const id = sec.getAttribute("id");
      navAnchors.forEach((a) => a.classList.remove("active"));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  });
});

// footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// // ===== Contact modal logic =====
// const contactTrigger = document.querySelector(".contact-trigger");
// const contactModal = document.getElementById("contact-modal");
// const modalCloseBtn = contactModal?.querySelector(".modal-close");
// const modalBackdrop = contactModal?.querySelector(".modal-backdrop");

// function openContactModal(event) {
//   if (event) event.preventDefault();     // prevent #contact scroll
//   if (!contactModal) return;

//   contactModal.classList.add("open");
//   document.body.style.overflow = "hidden";   // prevent background scroll
// }

// function closeContactModal() {
//   if (!contactModal) return;

//   contactModal.classList.remove("open");
//   document.body.style.overflow = "";
// }

// if (contactTrigger && contactModal) {
//   contactTrigger.addEventListener("click", openContactModal);
// }

// if (modalCloseBtn) {
//   modalCloseBtn.addEventListener("click", closeContactModal);
// }

// if (modalBackdrop) {
//   modalBackdrop.addEventListener("click", closeContactModal);
// }

// // close on Esc
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     closeContactModal();
//   }
// });

const contactTriggers = document.querySelectorAll(".contact-trigger");
const contactModal = document.getElementById("contact-modal");
const modalCloseBtn = contactModal?.querySelector(".modal-close");
const modalBackdrop = contactModal?.querySelector(".modal-backdrop");

function openContactModal(event) {
  if (event) event.preventDefault();
  if (!contactModal) return;

  contactModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  if (!contactModal) return;

  contactModal.classList.remove("open");
  document.body.style.overflow = "";
}

if (contactTriggers && contactTriggers.length && contactModal) {
  contactTriggers.forEach((el) =>
    el.addEventListener("click", openContactModal)
  );
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeContactModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", closeContactModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeContactModal();
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const heroHeading = document.querySelector('.hero-text h1 .highlight');
    if (heroHeading) {
        const text = heroHeading.textContent;
        heroHeading.textContent = '';
        heroHeading.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroHeading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroHeading.style.borderRight = 'none';
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const certSection = document.querySelector("#certificates");
  if (!certSection) return;

  const certCards = certSection.querySelectorAll(".cert-grid .cert-card");
  const toggleBtn = document.getElementById("certToggleBtn");

  const SHOW_COUNT = 6;
  let expanded = false;

  // If 6 or fewer, hide the button
  if (!toggleBtn || certCards.length <= SHOW_COUNT) {
    if (toggleBtn) toggleBtn.style.display = "none";
    return;
  }

  // Hide all cards after first 6
  certCards.forEach((card, index) => {
    if (index >= SHOW_COUNT) card.classList.add("cert-hidden");
  });

  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    certCards.forEach((card, index) => {
      if (index >= SHOW_COUNT) {
        card.classList.toggle("cert-hidden", !expanded);
      }
    });

    toggleBtn.textContent = expanded ? "Show less" : "View all certificates";

    // Optional: smooth scroll so user stays oriented
    if (!expanded) {
      certSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

