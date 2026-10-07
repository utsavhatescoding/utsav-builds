document.body.classList.add("js");

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const closeMenu = () => {
  toggle.setAttribute("aria-expanded", "false");
  toggle.querySelector(".menu-label").textContent = "Menu";
  nav.classList.remove("open");
};
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
  nav.classList.toggle("open", open);
});
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(max-width: 700px)").addEventListener("change", closeMenu);

const processCaptions = {
  research: "Find the signal. Ask a better question.",
  build: "Turn an insight into something you can use.",
  share: "Put it into the world. Learn from what happens.",
};
document.querySelectorAll(".lab-controls button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".lab-controls button")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    document.querySelector(".signal-stage").dataset.mode = button.dataset.mode;
    document.querySelector(".lab-caption").textContent =
      processCaptions[button.dataset.mode];
  });
});

const previews = {
  website: {
    image: "assets/tradepulse-website.webp",
    url: "https://tradepulsenepal.com/",
    label: "TradePulse Nepal website showing Nepal import and export data",
    address: "tradepulsenepal.com",
  },
  dashboard: {
    image: "assets/tradepulse-dashboard.webp",
    url: "https://app.tradepulsenepal.com/",
    label: "TradePulse Nepal dashboard for exploring Nepal foreign trade data",
    address: "app.tradepulsenepal.com",
  },
};
document.querySelectorAll(".preview-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".preview-tabs button")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    const preview = previews[button.dataset.preview];
    const image = document.querySelector("#trade-screen");
    image.src = preview.image;
    image.alt = preview.label;
    const link = document.querySelector("#preview-link");
    link.href = preview.url;
    link.setAttribute(
      "aria-label",
      `Visit the ${button.dataset.preview === "website" ? "TradePulse Nepal website" : "TradePulse Nepal dashboard"}`,
    );
    document.querySelector("#preview-url").textContent = preview.address;
  });
});

const nepalClock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kathmandu",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
const updateClock = () => {
  const now = new Date();
  document.querySelector(".nepal-time").textContent =
    `${nepalClock.format(now)} NPT`;
  document.querySelector("#year").textContent = now.getFullYear();
};
updateClock();
setInterval(updateClock, 60000);

const progress = document.querySelector(".scroll-progress");
const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
const trackedSections = sectionLinks.map((link) =>
  document.querySelector(link.hash),
);
let scrollScheduled = false;
const updateProgress = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const fraction =
    height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
  progress.style.transform = `scaleX(${fraction})`;
  const activeSection = trackedSections
    .filter((section) => section.getBoundingClientRect().top <= 180)
    .at(-1);
  sectionLinks.forEach((link) => {
    if (activeSection && link.hash === `#${activeSection.id}`)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollScheduled = false;
};
window.addEventListener(
  "scroll",
  () => {
    if (!scrollScheduled) {
      requestAnimationFrame(updateProgress);
      scrollScheduled = true;
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateProgress, { passive: true });
updateProgress();

document.querySelector(".copy-email").addEventListener("click", async () => {
  const status = document.querySelector(".copy-status");
  try {
    await navigator.clipboard.writeText("utsavkphuyal@gmail.com");
    status.textContent = "Email copied. Talk soon!";
  } catch {
    status.textContent =
      "Select the email address to copy, or tap it to write.";
  }
});
