const siteData = {
  members: [
    {
      id: "haiming-liu",
      name: "Dr Haiming Liu",
      role: "Associate Professor",
      affiliation: "University of Southampton",
      bio: "Research in user-centered interactive multimedia and multimodal information access, spanning information retrieval, user behaviour, interaction design, and inclusive search experiences.",
      initials: "HL",
      featured: true,
      photo: "assets/haiming-liu.jpg",
      photoAlt: "Portrait of Dr Haiming Liu",
      photoPosition: "28% 14%",
      badges: ["Lab Head"],
      tags: ["Information Retrieval", "User Information Need", "Multimodal Access", "HCI"],
      links: [
        {
          label: "Home Page",
          href: "https://sites.google.com/view/haimingliu/home"
        },
        {
          label: "Publications",
          href: "#pub-haiming-liu"
        }
      ]
    },
    {
      id: "maofeng-wei",
      name: "Dr Maofeng Wei",
      role: "PhD Researcher",
      affiliation: "EIRA Lab",
      bio: "Research focuses on user information need and AI, with particular interest in how intelligent systems can better support search, learning, and sense-making.",
      initials: "MW",
      photo: "assets/maofeng-wei.jpg",
      photoAlt: "Portrait of Dr Maofeng Wei",
      badges: ["Lab Member"],
      tags: ["User Information Need", "AI", "Search as Learning"],
      links: [
        {
          label: "Publications",
          href: "#pub-maofeng-wei"
        }
      ]
    },
    {
      id: "yue-zheng",
      name: "Dr Yue Zheng",
      role: "PhD Researcher",
      affiliation: "EIRA Lab",
      bio: "Research focuses on multimodal information retrieval and inclusive information access, combining text, image, and sensor data to build retrieval systems that adapt to the needs of neurodivergent users.",
      initials: "YZ",
      photo: "assets/yue-zheng.jpg",
      photoAlt: "Portrait of Yue Zheng",
      badges: ["Lab Member"],
      tags: ["Multimodal Information Retrieval", "Inclusive Information Access", "Neurodivergent Users"],
      links: [
        {
          label: "Home Page",
          href: "https://yue-homepage.vercel.app"
        },
        {
          label: "Publications",
          href: "#pub-yue-zheng"
        }
      ]
    },
    {
      id: "wenxiang-cai",
      name: "Dr Wenxiang Cai",
      role: "PhD Researcher",
      affiliation: "EIRA Lab",
      bio: "Research centered on interactive information retrieval and access in mixed reality, especially how user information needs emerge, evolve, and can be supported through context-aware and AR interaction.",
      initials: "WC",
      photo: "assets/wenxiang-cai.jpg",
      photoAlt: "Portrait of Dr Wenxiang Cai",
      badges: ["Lab Member"],
      tags: ["AR", "Information Needs"],
      links: [
        {
          label: "Publications",
          href: "#pub-wenxiang-cai"
        }
      ]
    },
    {
      id: "upcoming-members",
      name: "Group Members",
      role: "PhD Students, Researchers, Visitors",
      affiliation: "Profiles coming next",
      bio: "This area is ready for the rest of the group. Once you send names, roles, bios, and links, each person can get a dedicated profile and a matching publications section below.",
      initials: "EIRA",
      badges: [],
      tags: ["To be added", "Flexible layout", "GitHub Pages ready"],
      links: [
        {
          label: "Publications",
          href: "#pub-upcoming-members"
        }
      ]
    }
  ],
  publicationSections: [
    {
      id: "pub-haiming-liu",
      memberId: "haiming-liu",
      name: "Dr Haiming Liu",
      overline: "Lab Head",
      description: "There are many publications by Haiming Liu, so please refer directly to the full publications link below.",
      links: [
        {
          label: "View Full Publications",
          href: "https://sites.google.com/view/haimingliu/publications",
          external: true
        }
      ]
    },
    {
      id: "pub-maofeng-wei",
      memberId: "maofeng-wei",
      name: "Dr Maofeng Wei",
      overline: "Lab Member",
      description: "Research centered on user information need and AI, especially how search process data can inform learning support and intelligent assistance.",
      entries: [
        {
          title: "Search as learning: a bibliometric review",
          note: "Published in International Journal on Digital Libraries.",
          href: "https://www.researchgate.net/publication/400834545_Search_as_learning_a_bibliometric_review"
        },
        {
          title: "Designing AI Support for Engineering Project-Based Learning: What Search Process Data Shows",
          note: "Accepted conference paper. Public release will follow after the conference."
        }
      ],
      links: []
    },
    {
      id: "pub-yue-zheng",
      memberId: "yue-zheng",
      name: "Dr Yue Zheng",
      overline: "Lab Member",
      description: "Research centered on multimodal information retrieval and inclusive information access, with a focus on adaptive retrieval for neurodivergent users.",
      entries: [
        {
          title: "A Survey of Inclusive Information Access",
          note: "Published in Information Retrieval Research (IRRJ).",
          href: "https://irrj.org/article/view/21092"
        },
        {
          title: "Inclusive Design Insights from a Preliminary Image-Based Conversational Search Systems Evaluation",
          note: "Workshop paper at IR4U2@ECIR 2024 / BIR 2024.",
          href: "https://ceur-ws.org/Vol-3989/paper-08.pdf"
        }
      ],
      links: [
        {
          label: "View Home Page",
          href: "https://yue-homepage.vercel.app",
          external: true
        }
      ]
    },
    {
      id: "pub-wenxiang-cai",
      memberId: "wenxiang-cai",
      name: "Dr Wenxiang Cai",
      overline: "Lab Member",
      description: "Research centered on interactive information retrieval and access in mixed reality, especially how user information needs emerge, evolve, and can be supported through context-aware and AR interaction. No publications are listed yet.",
      entries: [],
      links: []
    },
    {
      id: "pub-upcoming-members",
      memberId: "upcoming-members",
      name: "Other Members",
      overline: "Coming Next",
      description: "Publication blocks for other members will appear here as soon as you send their information. Each member card already supports direct linking to its own section.",
      entries: [],
      links: []
    }
  ]
};

const membersGrid = document.querySelector("#members-grid");
const publicationsGrid = document.querySelector("#publications-grid");

function createChipRow(items = [], className = "chip-row") {
  const chipRow = document.createElement("div");
  chipRow.className = className;

  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    chipRow.appendChild(chip);
  });

  return chipRow;
}

function createLink(label, href, className, external = false) {
  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.href = href;
  anchor.textContent = label;

  if (external) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }

  return anchor;
}

function renderMembers() {
  siteData.members.forEach((member) => {
    const card = document.createElement("article");
    card.className = `member-card reveal${member.featured ? " member-card--featured" : ""}`;

    const top = document.createElement("div");
    top.className = "member-top";

    const avatar = document.createElement("div");
    avatar.className = "member-avatar";

    if (member.photo) {
      const photo = document.createElement("img");
      photo.className = "member-photo";
      photo.src = member.photo;
      photo.alt = member.photoAlt || `${member.name} portrait`;
      if (member.photoPosition) {
        photo.style.objectPosition = member.photoPosition;
      }
      avatar.appendChild(photo);
    } else {
      avatar.textContent = member.initials;
    }

    const details = document.createElement("div");

    if (member.badges.length) {
      details.appendChild(createChipRow(member.badges, "member-badges"));
    }

    const name = document.createElement("h3");
    name.className = "member-name";
    name.textContent = member.name;

    const role = document.createElement("span");
    role.className = "member-role";
    role.textContent = member.role;

    const affiliation = document.createElement("p");
    affiliation.className = "member-affiliation";
    affiliation.textContent = member.affiliation;

    details.append(name, role, affiliation);
    top.append(avatar, details);

    const bio = document.createElement("p");
    bio.className = "member-bio";
    bio.textContent = member.bio;

    card.append(top, bio, createChipRow(member.tags));

    if (member.links.length) {
      const linkRow = document.createElement("div");
      linkRow.className = "member-links";

      member.links.forEach((link) => {
        const isExternal = /^https?:\/\//.test(link.href);
        linkRow.appendChild(createLink(link.label, link.href, "member-link", isExternal));
      });

      card.appendChild(linkRow);
    }

    membersGrid.appendChild(card);
  });
}

function renderPublicationSections() {
  siteData.publicationSections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "publication-member reveal";
    article.id = section.id;

    const overline = document.createElement("span");
    overline.className = "card-overline";
    overline.textContent = section.overline;

    const title = document.createElement("h3");
    title.className = "publication-member-title";
    title.textContent = section.name;

    const description = document.createElement("p");
    description.className = "publication-member-text";
    description.textContent = section.description;

    article.append(overline, title, description);

    if (section.entries && section.entries.length) {
      const list = document.createElement("div");
      list.className = "publication-entry-list";

      section.entries.forEach((entry) => {
        const item = document.createElement("div");
        item.className = "publication-entry";

        const itemTitle = document.createElement("h4");
        itemTitle.className = "publication-entry-title";
        itemTitle.textContent = entry.title;

        const itemNote = document.createElement("p");
        itemNote.className = "publication-entry-note";
        itemNote.textContent = entry.note;

        item.append(itemTitle, itemNote);

        if (entry.href) {
          item.appendChild(createLink("Open publication", entry.href, "card-link", true));
        }

        list.appendChild(item);
      });

      article.appendChild(list);
    }

    if (section.links.length) {
      const actions = document.createElement("div");
      actions.className = "publication-actions";

      section.links.forEach((link) => {
        actions.appendChild(
          createLink(link.label, link.href, "button button--ghost", Boolean(link.external))
        );
      });

      article.appendChild(actions);
    }

    publicationsGrid.appendChild(article);
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupActiveNav() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  renderMembers();
  renderPublicationSections();
  setupMobileNav();
  setupReveal();
  setupActiveNav();

  document.querySelector("#year").textContent = new Date().getFullYear();
}

init();
