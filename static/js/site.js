const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#site-menu");
const themeToggle = document.querySelector(".theme-toggle");
const themeColour = document.querySelector('meta[name="theme-color"]');
const backToTop = document.querySelector(".back-to-top");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });
}

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute("aria-label", `Use ${theme === "dark" ? "light" : "dark"} mode`);
  themeColour?.setAttribute("content", theme === "dark" ? "#171916" : "#f7f6f2");
};

if (themeToggle) {
  applyTheme(document.documentElement.dataset.theme || "light");
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("colour-theme", next);
    applyTheme(next);
  });
}

const articleToc = document.querySelector(".article-toc");

if (articleToc) {
  const links = [...articleToc.querySelectorAll('a[href^="#"]')];
  const headings = links
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter(Boolean);
  let scheduled = false;

  const updateToc = () => {
    articleToc.classList.toggle("is-condensed", window.scrollY > 420);

    const current = [...headings].reverse().find((heading) => heading.getBoundingClientRect().top <= 150) || headings[0];
    links.forEach((link) => {
      const active = current && link.hash === `#${current.id}`;
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scheduled = false;
  };

  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateToc);
  }, { passive: true });
  updateToc();
}

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 700);
  };

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  backToTop.addEventListener("click", () => {
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
  updateBackToTop();
}

document.querySelectorAll("[data-copy-citation]").forEach((button) => {
  button.addEventListener("click", async () => {
    const citation = button.closest(".citation-block")?.querySelector("code")?.textContent;
    if (!citation) return;
    await navigator.clipboard.writeText(citation);
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy BibTeX";
    }, 1600);
  });
});
