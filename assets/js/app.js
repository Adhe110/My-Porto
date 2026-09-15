const DATA = {
  profile: {
    headline: "The One Who Codes, Creates, and Conquers.",
    subheadline: " IoT & Programming Enthusiast",
    description:
      "Hello! I’m passionate about IoT and programming. Here you’ll find my projects, ideas, and the journey of combining hardware and software into working innovations.",
    image: "assets/img/Profile/My.jpg",
    resume: "https://drive.google.com/file/d/1WxAqan7cDX_59ASB6FekIlmT3xGszrLu/view?usp=sharing"
  },

  timeline: [
    {
      category: "Education",
      organization: "Universitas Negeri Makassar",
      role: "Computer Engineering",
      date: "Aug 2023 - Present",
      logo: "assets/img/Education&Experience/unm.webp"
    },
    {
      category: "Education",
      organization: "SMK 2 MAKASSAR",
      role: "Audio Video",
      date: "July 2020 - May 2023",
      logo: "assets/img/Education&Experience/smk2.png"
    },
    {
      category: "Experience",
      organization: "Telkom Regional 5 KTI",
      role: "Intern",
      date: "Juli 2026 - September 2026",
      logo: "assets/img/Education&Experience/telkom.png"
    },
    {
      category: "Experience",
      organization: "CV Pallaka Techno",
      role: "Intern",
      date: "Dec 2025 - Feb 2026",
      logo: "assets/img/Education&Experience/Cv_Pallaka_Techno.png"
    },
    {
      category: "Experience",
      organization: "GDoC Universitas Negeri Makassar",
      role: "Research And Development",
      date: "Oct 2023 - Present",
      logo: "assets/img/Education&Experience/gdgoc.jpg"
    },
    {
      category: "Experience",
      organization: "Micro Computer",
      role: "IT Technician Intern",
      date: "Aug 2022 - Present",
      logo: "assets/img/Education&Experience/MicroComputer.png"
    }
  ],

  skills: [
    { name: "IoT", icon: "assets/img/Skills/iot.png" },
    { name: "HTML5", icon: "assets/img/Skills/html.png" },
    { name: "CSS3", icon: "assets/img/Skills/css.png" },
    { name: "PHP", icon: "assets/img/Skills/php.png" },
    { name: "Laravel", icon: "assets/img/Skills/laravel.png" },
    { name: "MySQL", icon: "assets/img/Skills/mysql.png" },
    { name: "N8N", icon: "assets/img/Skills/n8n.png" }
  ],

  projects: [
    {
      title: "BOT AUTOMATION",
      headline: "(Internship Project)",
      description: "Tiga bot Telegram berbasis n8n untuk mengotomatisasi pengingat langganan, pemesanan makan siang, dan pencatatan keuangan dengan bantuan Gemini API dan OCR.",
      image_url: "assets/img/Projects/Bot.png",
      repo_link: "#",
      tags: "n8n, Telegram, Gemini API, OCR"
    },
    {
      title: "IOT",
      headline: "(Personal Projects)",
      description: "Prototipe proyek IoT yang menghubungkan ESP32 dengan aplikasi Android untuk mengontrol lampu secara jarak jauh melalui Firebase Realtime Database secara real-time.",
      image_url: "assets/img/Projects/IoT.jpg", 
      repo_link: "https://github.com/Adhe110/IoT_Switch.git",
      tags: "ESP32, Android, Firebase"
    },
    {
      title: "KOSTIFY",
      headline: "(Final Project – Mobile Programming)",
      description: "Aplikasi mobile yang dibangun dengan Android Studio untuk menampilkan daftar kost, menggunakan Firebase Realtime Database dan Firebase Storage untuk mengelola data dan gambar kost secara efisien.",
      image_url: "assets/img/Projects/Hostify.jpg",
      repo_link: "https://github.com/Adhe110/Aplikasi_Mobile_Hostify.git",
      tags: "Android Studio, Firebase"
    },
    {
      title: "C-Book",
      headline: "(Final Project – Web Programming)",
      description: "Toko buku online yang dikembangkan menggunakan framework Laravel, dengan fitur-fitur seperti daftar buku, manajemen kategori, keranjang belanja, dan panel admin.",
      image_url: "assets/img/Projects/C-Book.png", 
      repo_link: "https://github.com/Adhe110/C-Book.git",
      tags: "Laravel, PHP, MySQL"
    }
  ]
};

function renderProfile(data) {
  if (!data) return;
  document.getElementById("hero-headline").innerText = data.headline;
  document.getElementById("hero-subheadline").innerText = data.subheadline;
  document.getElementById("hero-description").innerText = data.description;

  const heroImg = document.getElementById("hero-image");
  heroImg.src = data.image;

  const heroBtn = document.getElementById("hero-btn");
  heroBtn.href = data.resume || "#";
}

function renderTimeline(data) {
  const eduContainer = document.getElementById("education-list");
  const expContainer = document.getElementById("experience-list");
  eduContainer.innerHTML = "";
  expContainer.innerHTML = "";

  data.forEach((item) => {
    // PERUBAHAN DISINI:
    // 1. p-4 diubah menjadi p-6 md:p-7 (Kartu lebih tebal/lega)
    // 2. Teks tetap kecil (text-[11px]) agar muat 1 baris, tapi wadahnya besar.
    const itemHTML = `
    <div class="bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-400 transition-all duration-300">
      
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"> 
        
        <div class="flex items-center gap-4 flex-1 min-w-0 w-full sm:w-auto">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg p-2">
            <img src="${item.logo}" alt="${item.organization}" class="max-w-full max-h-full object-contain">
          </div>

          <div class="flex-1 min-w-0"> 
            <h4 class="font-bold text-gray-900 text-xs sm:text-sm md:text-base">
              ${item.organization}
            </h4>
            <p class="text-[10px] sm:text-xs text-gray-500 mt-0.5">
              ${item.role}
            </p>
          </div>
        </div>

        <div class="flex-shrink-0 self-start sm:self-auto ml-16 sm:ml-0">
          <span class="inline-block bg-white text-gray-500 text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 whitespace-nowrap">
            ${item.date}
          </span>
        </div>

      </div>
    </div>
    `;

    if ((item.category || "").toLowerCase().includes("education")) {
      eduContainer.innerHTML += itemHTML;
    } else {
      expContainer.innerHTML += itemHTML;
    }
  });
}

function renderSkills(data) {
  const container = document.getElementById("skills-grid");
  container.innerHTML = "";

  data.forEach((skill) => {
    // PERUBAHAN DISINI:
    // 1. w-16 h-16 (kecil) DIUBAH JADI w-24 h-24 md:w-28 md:h-28 (Besar)
    // 2. Icon di dalam juga diperbesar jadi w-12 h-12
    container.innerHTML += `
      <div class="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl border border-gray-200 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-orange-400 transition duration-300 group" title="${skill.name}">
        <img src="${skill.icon}" alt="${skill.name}" class="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform">
        <span class="text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-orange-500">${skill.name}</span>
      </div>
    `;
  });
}

function renderProjects(data) {
  const renderCard = (project, index) => {
    const tags = (project.tags || "")
      .split(",")
      .filter(Boolean)
      .map((tag) => `<span class="tech-badge">${tag.trim()}</span>`)
      .join("");
    const demo = project.demo_link
      ? `<a href="${project.demo_link}" target="_blank" rel="noopener noreferrer" class="project-link">Live demo <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
      : "";

    return `
      <article class="project-card" style="--card-index: ${index}">
        <div class="project-media"><img src="${project.image_url}" alt="Screenshot proyek ${project.title}" loading="lazy"></div>
        <div class="project-body">
          <p class="eyebrow">${project.headline}</p>
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="tech-list">${tags}</div>
          <div class="project-actions">${demo}<a href="${project.repo_link}" target="_blank" rel="noopener noreferrer" class="project-link project-link-dark"><i class="fab fa-github" aria-hidden="true"></i> Source code</a></div>
        </div>
      </article>`;
  };

  const homeContainer = document.getElementById("project-grid");
  const allContainer = document.getElementById("all-project-grid");
  if (homeContainer) homeContainer.innerHTML = data.slice(0, 3).map(renderCard).join("");
  if (allContainer) allContainer.innerHTML = data.map(renderCard).join("");
}

function setupScrollAnimations() {
  const revealItems = document.querySelectorAll("main section:not(#home), .project-card, #education-list > div, #experience-list > div, #skills-grid > div");
  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, animationObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      animationObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

  revealItems.forEach((item) => observer.observe(item));
}

function createFirework(x, y) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const container = document.createElement("div");
  container.className = "cursor-firework";
  container.setAttribute("aria-hidden", "true");
  document.body.appendChild(container);

  const particleCount = 12;
  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    particle.className = "firework-line";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty("--spark-angle", `${(360 / particleCount) * index}deg`);
    particle.style.setProperty("--spark-distance", `${22 + Math.random() * 18}px`);
    particle.style.setProperty("--spark-delay", `${Math.random() * 50}ms`);
    container.appendChild(particle);
  }

  window.setTimeout(() => container.remove(), 800);
}

document.addEventListener("DOMContentLoaded", () => {
  // Cek agar tidak error jika elemen tidak ada di halaman AllProject.html
  if(document.getElementById("hero-headline")) renderProfile(DATA.profile);
  if(document.getElementById("education-list")) renderTimeline(DATA.timeline);
  if(document.getElementById("skills-grid")) renderSkills(DATA.skills);
  

  renderProjects(DATA.projects);
  setupScrollAnimations();

  // Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  document.addEventListener("pointerdown", (event) => {
    createFirework(event.clientX, event.clientY);
  }, { passive: true });
});