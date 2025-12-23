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

// ================================
// UPDATE DI APP.JS
// ================================

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
      
      <div class="flex items-center justify-between gap-4"> 
        
        <div class="flex items-center gap-4 flex-1 min-w-0">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg p-2">
            <img src="${item.logo}" alt="${item.organization}" class="max-w-full max-h-full object-contain">
          </div>

          <div class="flex-1 min-w-0"> 
            <h4 class="font-bold text-gray-900 text-xs sm:text-sm md:text-base whitespace-nowrap">
              ${item.organization}
            </h4>
            <p class="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap mt-0.5">
              ${item.role}
            </p>
          </div>
        </div>

        <div class="flex-shrink-0">
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


// ================================
// UPDATE FUNGSI RENDER PROJECTS
// ================================
function renderProjects(data) {
  // 1. Cek apakah kita ada di Home (Preview)
  const homeContainer = document.getElementById("project-grid");
  
  // 2. Cek apakah kita ada di All Projects Page (Full)
  const allContainer = document.getElementById("all-project-grid");

  // Fungsi helper untuk merender ke dalam container tertentu
  const mountToContainer = (container, limit = 0) => {
    container.innerHTML = "";
    
    // Jika limit > 0, potong data. Jika 0, ambil semua.
    const projectsToShow = limit > 0 ? data.slice(0, limit) : data;

    projectsToShow.forEach((project) => {
      const tags = (project.tags || "")
        .split(",")
        .filter(Boolean)
        .map(t => `<span class="border border-gray-300 rounded-full px-3 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wide">${t.trim()}</span>`)
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
  };

  // EKSEKUSI
  if (homeContainer) {
    // Di Home: Tampilkan cuma 3 project teratas
    mountToContainer(homeContainer, 3);
  }

  if (allContainer) {
    // Di Halaman All: Tampilkan SEMUA project (limit 0)
    mountToContainer(allContainer, 0);
  }
}

// ================================
// INIT (Pastikan renderProfile dll tetap ada)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // Cek agar tidak error jika elemen tidak ada di halaman AllProject.html
  if(document.getElementById("hero-headline")) renderProfile(DATA.profile);
  if(document.getElementById("education-list")) renderTimeline(DATA.timeline);
  if(document.getElementById("skills-grid")) renderSkills(DATA.skills);
  
  // Render Project selalu dipanggil karena logikanya sudah aman di dalam fungsi
  renderProjects(DATA.projects);
});