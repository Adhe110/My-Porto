// ================================
// STATIC DATA (tanpa Spreadsheet)
// ================================
const DATA = {
  profile: {
    headline: "The One Who Codes, Creates, and Conquers.",
    subheadline: "Frontend Developer - UIUX Designer",
    description:
      "Frontend Developer & UI/UX Designer crafting sleek, functional experiences. Passionate about clean code, bold design, and exploring the fun side of tech.",
    image: "assets/img/Profile/My.jpg",
    resume: "assets/resume.pdf" // kalau belum ada, ganti jadi "#"
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
    { name: "IoT", icon: "assets/img/skills/iot.png" },
    { name: "HTML5", icon: "assets/img/skills/html.png" },
    { name: "CSS3", icon: "assets/img/skills/css.png" },
    { name: "PHP", icon: "assets/img/skills/php.png" },
    { name: "Laravel", icon: "assets/img/skills/laravel.png" },
    { name: "MySQL", icon: "assets/img/skills/mysql.png" }
  ],

  projects: [
    {
      title: "Hostify Property",
      headline: "Property Marketplace",
      description:
        "Platform jual beli properti dengan fitur real-time chat dan peta interaktif. Membantu user menemukan hunian impian.",
      image_url: "assets/img/Projects/Hostify.png",
      tags: "HTML, Laravel",
      repo_link: "https://github.com/dhea"
    },
    {
      title: "Bansos System",
      headline: "SPK Bansos Web",
      description:
        "Sistem pendukung keputusan penerima bantuan sosial menggunakan metode SAW dan TOPSIS.",
      image_url: "assets/img/projects/bansos.png",
      tags: "PHP, MySQL, SPK",
      repo_link: "https://github.com/dhea"
    },
    {
      title: "ST-DBSCAN",
      headline: "Transjakarta Analysis",
      description:
        "Implementasi algoritma ST-DBSCAN untuk menganalisis pola perjalanan penumpang Transjakarta.",
      image_url: "assets/img/projects/stdbscan.png",
      tags: "Python, Flask",
      repo_link: "https://github.com/dhea"
    }
  ]
};

// ================================
// RENDER FUNCTIONS
// ================================
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
    const itemHTML = `
<div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-400 transition-all duration-300">
  
  <div class="flex items-center justify-between gap-3"> <div class="flex items-center gap-3 flex-1 min-w-0">
      
      <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg p-1">
        <img src="${item.logo}" alt="${item.organization}" class="max-w-full max-h-full object-contain">
      </div>

      <div class="flex-1 min-w-0"> <h4 class="font-bold text-gray-900 text-[11px] sm:text-sm whitespace-nowrap">
          ${item.organization}
        </h4>
        <p class="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">
          ${item.role}
        </p>
      </div>
    </div>

    <div class="flex-shrink-0">
      <span class="inline-block bg-white text-gray-500 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full border border-gray-200 whitespace-nowrap">
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
    container.innerHTML += `
      <div class="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300" title="${skill.name}">
        <img src="${skill.icon}" alt="${skill.name}" class="w-8 h-8 md:w-10 md:h-10">
      </div>
    `;
  });
}

function renderProjects(data) {
  const container = document.getElementById("project-grid");
  container.innerHTML = "";

  data.forEach((project) => {
    const tags = (project.tags || "")
      .split(",")
      .filter(Boolean)
      .map(
        (t) =>
          `<span class="border border-gray-300 rounded-full px-3 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wide">${t.trim()}</span>`
      )
      .join("");

    container.innerHTML += `
      <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col h-full group">
        <div class="h-48 p-8 flex items-center justify-center bg-white border-b border-gray-50 relative overflow-hidden">
          <img src="${project.image_url}" alt="${project.title}" class="max-h-full max-w-full object-contain z-10 relative">
          <div class="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-10 transition"></div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-gray-900">${project.title}</h3>
          <p class="text-xs font-bold text-brand mb-3 uppercase tracking-wider">${project.headline}</p>
          <p class="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
            ${project.description}
          </p>
          <div class="flex flex-wrap gap-2 mb-6">${tags}</div>
          <div class="mt-auto border-t border-gray-100 pt-4">
            <a href="${project.repo_link}" target="_blank" class="inline-flex items-center text-gray-800 hover:text-brand font-medium text-sm transition">
              <i class="fab fa-github text-lg mr-2"></i> View Code
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

// ================================
// INIT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  renderProfile(DATA.profile);
  renderTimeline(DATA.timeline);
  renderSkills(DATA.skills);
  renderProjects(DATA.projects);
});
