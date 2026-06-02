// Edit the project cards here.
const portfolioProjects = [
  {
    title: "Dental Clinic CRM Onboarding Workflow",
    description:
      "A structured onboarding flow for new dental patients, connecting intake forms, internal follow-up tasks, and appointment coordination.",
    tools: "GoHighLevel, Google Forms, Zapier, SOP templates",
    outcome:
      "Created a clearer patient intake path, reduced manual follow-up gaps, and improved handoff consistency.",
    link: "#"
  },
  {
    title: "GoHighLevel Funnel and Automation System",
    description:
      "A lead capture and nurture system designed to route prospects into the right sequence based on form behavior and pipeline stage.",
    tools: "GoHighLevel, email automation, pipeline logic, landing pages",
    outcome:
      "Standardized lead tracking and made the follow-up process easier to manage at scale.",
    link: "#"
  },
  {
    title: "AI-Assisted Lead Intake Process",
    description:
      "A concept workflow for collecting inbound lead details, summarizing responses, and preparing structured CRM entries for faster review.",
    tools: "ChatGPT, automation tools, CRM fields, intake forms",
    outcome:
      "Reduced the time needed to review inquiries and improved the quality of captured lead context.",
    link: "#"
  },
  {
    title: "Operations Dashboard Concept",
    description:
      "A lightweight reporting dashboard concept focused on pipeline movement, response time, and key operational checkpoints.",
    tools: "Looker Studio, Google Sheets, KPI tracking, reporting structure",
    outcome:
      "Provided a clearer view of operational performance and where attention was needed week to week.",
    link: "#"
  },
  {
    title: "SOP Documentation System",
    description:
      "A central process library for recurring tasks, internal checklists, and onboarding references across admin and client support work.",
    tools: "Notion, Loom, process maps, documentation templates",
    outcome:
      "Made repeatable work easier to delegate, train, and maintain with fewer missed steps.",
    link: "#"
  }
];

// Edit the article cards here.
const articlePosts = [
  {
    title: "How AI Changes the Role of the Modern Business Operator",
    date: "2026-05-12",
    displayDate: "May 12, 2026",
    excerpt:
      "AI is changing execution work, but the operator's role is still about judgment, structure, and follow-through. The tools are new. The need for clear systems is not.",
    tag: "AI Operations",
    link: "#"
  },
  {
    title: "Why Small Businesses Need Better Workflows Before More Tools",
    date: "2026-04-28",
    displayDate: "April 28, 2026",
    excerpt:
      "More software does not fix a messy process. Before adding another tool, it helps to understand how work currently moves and where the bottlenecks really are.",
    tag: "Workflow Design",
    link: "#"
  },
  {
    title: "CRM Pipelines Explained Simply",
    date: "2026-04-10",
    displayDate: "April 10, 2026",
    excerpt:
      "A pipeline is not just a sales view. It is a decision system. Clear stages make it easier to know what should happen next, who owns it, and where leads stall.",
    tag: "CRM Systems",
    link: "#"
  },
  {
    title: "Using AI to Document Business Processes",
    date: "2026-03-19",
    displayDate: "March 19, 2026",
    excerpt:
      "AI can speed up SOP drafting, summarize messy notes, and help translate workflows into usable documentation when paired with real process knowledge.",
    tag: "Documentation",
    link: "#"
  },
  {
    title: "The Difference Between Automation and Operations",
    date: "2026-03-02",
    displayDate: "March 02, 2026",
    excerpt:
      "Automation is only one layer. Strong operations depend on ownership, visibility, process design, and the discipline to keep systems maintained.",
    tag: "Operations",
    link: "#"
  }
];

const portfolioGrid = document.querySelector("#portfolio-grid");
const articlesGrid = document.querySelector("#articles-grid");
const portfolioTemplate = document.querySelector("#portfolio-card-template");
const articleTemplate = document.querySelector("#article-card-template");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const yearElement = document.querySelector("#year");

function renderPortfolioCards() {
  portfolioProjects.forEach((project) => {
    const clone = portfolioTemplate.content.cloneNode(true);
    clone.querySelector(".project-title").textContent = project.title;
    clone.querySelector(".project-description").textContent = project.description;
    clone.querySelector(".project-tools").textContent = project.tools;
    clone.querySelector(".project-outcome").textContent = project.outcome;
    clone.querySelector(".card-button").href = project.link;
    portfolioGrid.appendChild(clone);
  });
}

function renderArticleCards() {
  articlePosts.forEach((post) => {
    const clone = articleTemplate.content.cloneNode(true);
    clone.querySelector(".article-title").textContent = post.title;
    clone.querySelector(".article-date").textContent = post.displayDate;
    clone.querySelector(".article-date").setAttribute("datetime", post.date);
    clone.querySelector(".article-excerpt").textContent = post.excerpt;
    clone.querySelector(".article-tag").textContent = post.tag;
    clone.querySelector(".card-button").href = post.link;
    articlesGrid.appendChild(clone);
  });
}

function toggleMenu(forceState) {
  const isExpanded =
    typeof forceState === "boolean"
      ? forceState
      : menuToggle.getAttribute("aria-expanded") !== "true";

  menuToggle.setAttribute("aria-expanded", String(isExpanded));
  navPanel.classList.toggle("is-open", isExpanded);
}

function setupMobileMenu() {
  menuToggle.addEventListener("click", () => {
    toggleMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      toggleMenu(false);
    }
  });
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setCurrentYear() {
  yearElement.textContent = new Date().getFullYear();
}

renderPortfolioCards();
renderArticleCards();
setupMobileMenu();
setupRevealAnimations();
setCurrentYear();
