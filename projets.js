const projets = [
  {
    nom: "PIXYS+",
    objectif: "Développer des solutions robotiques pour l’agriculture et la pisciculture locale.",
    cahierCharge: "Conception de capteurs, automatisation de bassins, interface de contrôle.",
    avancement: 25
  },
  {
    nom: "ICARE",
    objectif: "Créer une plateforme éducative interactive pour les sciences.",
    cahierCharge: "Tablette dédiée, contenus pédagogiques, modules interactifs, suivi des élèves.",
    avancement: 35
  },
  {
    nom: "LE SLAM",
    objectif: "Plateforme de diffusion du slam et de la culture africaine à travers le numérique.",
    cahierCharge: "Site web, podcast, vidéos, textes poétiques, espace communautaire.",
    avancement: 5,
    video : "https://web.facebook.com/share/v/1CA8JYnui2/"
  },
  {
    nom: "Club d’échecs",
    objectif: "Connecter les membres du Douala Intellectual Sport Club via une app web.",
    cahierCharge: "Profils joueurs, tournois, classement, messagerie interne.",
    avancement: 50,
    lien: "https://disc-xi.vercel.app/#"
  },
  {
  nom: "Développement web",
  objectif: "Maîtriser les outils du web à travers des projets concrets (D-clic, Udemy).",
  cahierCharge: "Sites vitrines, portfolio, animations JS, responsive design.",
  avancement: 90,
  liens: [
    {
      titre: "Tips & Tricks JS",
      url: "https://tips-en-tricks-de-js-1gws.vercel.app"
    },
    {
      titre: "Quelques projets JS",
      url: "https://quelques-projets-js.vercel.app/"
    },
    {
      titre: "Élection présidentielle 2025",
      url: "http://election-presidentielle-2025-camero.vercel.app"
    }
  ]
}

];

const container = document.getElementById('projets-container');

projets.forEach(projet => {
  const card = document.createElement('div');
  card.className = 'projet-card';

  card.innerHTML = `
    <h3>${projet.nom}</h3>
    <p><strong>🎯 Objectif :</strong> ${projet.objectif}</p>
    <p><strong>📋 Cahier de charge :</strong> ${projet.cahierCharge}</p>
    <p><strong>📈 Taux d’avancement :</strong></p>
    <div class="progress-bar">
      <div class="progress" data-value="${projet.avancement}">${projet.avancement}%</div>
    </div>
  `;

  // Ajout des liens si présent
 if (projet.liens) {
  const liensBlock = document.createElement('div');
  liensBlock.className = 'liens-projet';

  const title = document.createElement('h4');
  title.textContent = "🔗 Projets associés";
  liensBlock.appendChild(title);

  const list = document.createElement('ul');
  projet.liens.forEach(lien => {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = lien.url;
    anchor.target = "_blank";
    anchor.textContent = lien.titre;
    anchor.className = "projet-lien";
    item.appendChild(anchor);
    list.appendChild(item);
  });

  liensBlock.appendChild(list);
  card.appendChild(liensBlock);
}


  if (projet.video) {
  const videoBlock = document.createElement('div');
  videoBlock.className = 'slam-video';

  const title = document.createElement('h4');
  title.textContent = "🎬 Vidéo de slam";

  const description = document.createElement('p');
  description.textContent = "Découvrez un extrait de mon univers poétique et engagé :";

  const link = document.createElement('a');
  link.href = projet.video;
  link.target = "_blank";
  link.textContent = "🔗 Voir la vidéo sur Facebook";
  link.className = "projet-lien";

  videoBlock.appendChild(title);
  videoBlock.appendChild(description);
  videoBlock.appendChild(link);
  card.appendChild(videoBlock);
}


  container.appendChild(card);
});

// Animation des jauges
document.querySelectorAll('.progress').forEach(bar => {
  const value = bar.getAttribute('data-value');
  setTimeout(() => {
    bar.style.width = value + '%';
  }, 300);
});
