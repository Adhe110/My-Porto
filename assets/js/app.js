const DATA = {
  profile: {
    headline: "The One Who Codes, Creates, and Conquers.",
    subheadline: " IoT & Programming Enthusiast",
    description:
      "Hello! I’m passionate about IoT and programming. Here you’ll find my projects, ideas, and the journey of combining hardware and software into working innovations.",
    image: "assets/img/Profile/My.jpg",
    resume: "#"
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
    { name: "IoT", icon: "assets/img/Skills/iot.png" },
    { name: "HTML5", icon: "assets/img/Skills/html.png" },
    { name: "CSS3", icon: "assets/img/Skills/css.png" },
    { name: "PHP", icon: "assets/img/Skills/php.png" },
    { name: "Laravel", icon: "assets/img/Skills/laravel.png" },
    { name: "MySQL", icon: "assets/img/Skills/mysql.png" }
  ],

projects: [
    {
      title: "IOT",
      headline: "(Personal Projects)",
      description: "Prototipe proyek IoT yang menghubungkan ESP32 dengan aplikasi Android untuk mengontrol lampu secara jarak jauh melalui Firebase Realtime Database secara real-time.",
      image_url: "assets/img/Projects/IoT.jpg", 
      repo_link: "https://github.com/Adhe110/IoT_Switch.git"
    },
    {
      title: "KOSTIFY",
      headline: "(Final Project – Mobile Programming)",
      description: "Aplikasi mobile yang dibangun dengan Android Studio untuk menampilkan daftar kost, menggunakan Firebase Realtime Database dan Firebase Storage untuk mengelola data dan gambar kost secara efisien.",
      image_url: "assets/img/Projects/Hostify.jpg",
      repo_link: "https://github.com/Adhe110/Aplikasi_Mobile_Hostify.git"
    },
    {
      title: "C-Book",
      headline: "(Final Project – Web Programming)",
      description: "Toko buku online yang dikembangkan menggunakan framework Laravel, dengan fitur-fitur seperti daftar buku, manajemen kategori, keranjang belanja, dan panel admin.",
      image_url: "assets/img/Projects/C-Book.png", 
      repo_link: "https://github.com/Adhe110/C-Book.git"
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

document.addEventListener("DOMContentLoaded", () => {
  renderProfile(DATA.profile);
  renderTimeline(DATA.timeline);
  renderSkills(DATA.skills);
  renderProjects(DATA.projects);
});

function renderProjects(data) {

  const homeContainer = document.getElementById("project-grid");
  

  const allContainer = document.getElementById("all-project-grid");


  const mountToContainer = (container, limit = 0) => {
    container.innerHTML = "";
    

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

  if (homeContainer) {

    mountToContainer(homeContainer, 3);
  }

  if (allContainer) {

    mountToContainer(allContainer, 0);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Cek agar tidak error jika elemen tidak ada di halaman AllProject.html
  if(document.getElementById("hero-headline")) renderProfile(DATA.profile);
  if(document.getElementById("education-list")) renderTimeline(DATA.timeline);
  if(document.getElementById("skills-grid")) renderSkills(DATA.skills);
  

  renderProjects(DATA.projects);
});


document.addEventListener('click', (e) => {
  createFirework(e.clientX, e.clientY);
});

function createFirework(x, y) {
  const count = 10;
  const container = document.createElement('div');
  container.classList.add('cursor-firework');
  
  container.style.left = x + 'px';
  container.style.top = y + 'px';
  
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const line = document.createElement('div');
    line.classList.add('firework-line');
    
    const angle = (360 / count) * i;
    
    line.style.transform = `rotate(${angle}deg) translateY(0)`;
    
    container.appendChild(line);

    line.animate([
      { transform: `rotate(${angle}deg) translateY(0) scale(1)`, opacity: 1 },
      { transform: `rotate(${angle}deg) translateY(-25px) scale(0.5)`, opacity: 0 }
    ], {
      duration: 500,
      easing: 'ease-out',
      fill: 'forwards'
    });
  }


  setTimeout(() => {
    container.remove();
  }, 500);
}