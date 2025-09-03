const parcours = [
  {
    titre: "Les années collège",
    debut: "septembre 2006",
    fin: "mai 2013",
    description: "Découverte des sciences, premières passions pour la technologie et le slam."
  },
  {
    titre: "IUT de Douala",
    debut: "octobre 2013",
    fin: "juillet 2016",
    description: "Formation en génie mécanique et productique. Début des projets techniques."
  },
  {
    titre: "La petite pause",
    debut: "juillet 2016",
    fin: "novembre 2018",
    description: "Réflexion, exploration personnelle, engagement culturel et associatif."
  },
  {
    titre: "École Nationale Polytechnique de Douala",
    debut: "novembre 2018",
    fin: "juillet 2021",
    description: "Approfondissement en robotique, électronique et innovation locale."
  },
  {
    titre: "ESSEC de Douala",
    debut: "octobre 2022",
    fin: "décembre 2024",
    description: "Formation en intelligence économique et économie du développement."
  },
  {
    titre: "Orange Cameroun SA",
    debut: "juillet 2023",
    fin: "mai 2024",
    description: "Expérience professionnelle en entreprise, gestion de projet et innovation."
  }
];

const timeline = document.getElementById('timeline');

parcours.forEach(item => {
  const bloc = document.createElement('div');
  bloc.className = 'timeline-item';
  bloc.innerHTML = `
    <h3>${item.titre}</h3>
    <span>${item.debut} – ${item.fin}</span>
    <p>${item.description}</p>
  `;
  timeline.appendChild(bloc);
});
