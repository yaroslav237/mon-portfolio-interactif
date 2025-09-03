// script.js

// Menu responsive
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Projets dynamiques
const projets = [
  {
    nom: "PIXYS+",
    domaine: "Robotique & électronique",
    description: "Startup dédiée à l’innovation locale en électronique et robotique appliqué aux secteurs de la pisciculture et de l'agriculture.",
    logo: "asset/img/logo_pixys.jpg"
  },
  {
    nom: "ICARE",
    domaine: "Éducation numérique",
    description: "Plateforme interactive et tablette dédiées pour l’apprentissage des sciences au Cameroun et en Afrique.",
    logo: "asset/img/logo_icare.png"
  },
  {
    nom: "SLAM",
    domaine: "Slam & culture",
    description: "Projet de diffusion poétique et artistique à travers le numérique.",
    logo: "asset/img/slam.webp"
  },
  {
    nom: "Club d’échecs",
    domaine: "Sport & Web",
    description: "Développement d’une application web pour les membres du Douala Intellectual Sport Club.",
    logo: "asset/img/logo_disc.jpg"
 
  },
  {
    nom: "Développement web",
    domaine: "Tech",
    description: "Diverses réalisations réalisées lors de mon parcours d'apprentissage en développement web. Il y a notamment mes projets D-clic et Udemy. Cliquez sur le titre ci dessus : mes projets pour les visiter.",
    logo: "asset/img/logo_dev_web.webp",
       sousLogos: [
    { src: "asset/img/logo_udemy.webp", alt: "Logo Udemy", link: "https://www.udemy.com/user/oscar-otele" },
    { src: "asset/img/logo_dclic.webp", alt: "Logo D-clic", link: "https://dclic.example.com/oscar" }
  ]
  }
];


const container = document.getElementById('projets-container');
projets.forEach(projet => {
  const card = document.createElement('div');
  card.className = 'projet-card';
  card.style.border = "1px solid #003366";
  card.style.backgroundColor = "#ffffff";
  card.style.color = "#003366";
  card.style.padding = "15px";
  card.style.marginBottom = "15px";
  card.style.borderRadius = "8px";
  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

   card.innerHTML = `
    <div class="projet-header">
      <img src="${projet.logo}" alt="Logo ${projet.nom}" class="projet-logo" />
      <h3>${projet.nom}</h3>
    </div>
    <p><strong>Domaine :</strong> ${projet.domaine}</p>
    <p>${projet.description}</p>
  `;
  container.appendChild(card);
  if (projet.sousLogos) {
  const logosContainer = document.createElement('div');
  logosContainer.className = 'sous-logos';

  projet.sousLogos.forEach(logo => {
    const link = document.createElement('a');
    link.href = logo.link;
    link.target = "_blank";

    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.className = 'sous-logo';

    link.appendChild(img);
    logosContainer.appendChild(link);
  });

  card.appendChild(logosContainer);
}

});
