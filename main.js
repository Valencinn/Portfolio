/* main.js — Valentin Portfolio */

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
    revealObserver.observe(el);
});

/* ── Sticky header scroll state ── */
const header = document.querySelector(".site-header");
if (header) {
    const onScroll = () => {
        header.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

/* ── Active nav link ── */
const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
    }
});

/* ── Footer year ── */
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/* ── Orb cursor parallax (landing hero) ── */
const orb = document.querySelector(".orb-ring");
if (orb) {
    window.addEventListener("mousemove", (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        orb.style.transform = `rotate(var(--orb-rotation,0deg)) translate(${dx * 10}px, ${dy * 10}px)`;
    }, { passive: true });
}

/* ── Hover tilt on cards ── */
document.querySelectorAll(".cat-card, .work-card, .sound-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = ((e.clientY - cy) / (rect.height / 2)) * -4;
        const ry = ((e.clientX - cx) / (rect.width / 2)) * 4;
        card.style.transform = `translateY(-5px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        card.style.transformOrigin = "center";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

/* ── Play button mock interaction (sound page) ── */
document.querySelectorAll(".play-btn").forEach((btn) => {
    let playing = false;
    btn.addEventListener("click", () => {
        playing = !playing;
        btn.textContent = playing ? "⏸" : "▶";
        btn.style.background = playing ? "var(--amber)" : "var(--lime)";
        // Find sibling wave spans and change animation state
        const card = btn.closest(".sound-card");
        if (card) {
            const spans = card.querySelectorAll(".mini-wave span, .waveform span");
            spans.forEach((s) => {
                s.style.animationPlayState = playing ? "running" : "paused";
            });
        }
    });
});