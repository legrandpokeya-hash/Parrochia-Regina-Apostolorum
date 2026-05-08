// ══════════════════════════════════════════════════════════════════════════════
//  GESTIONE EVENTI PARROCCHIALI — Modifica SOLO questo file per gli eventi
//
//  STRUTTURA DI UN EVENTO:
//  ─────────────────────────────────────────────────────────────────────────
//  id          : stringa unica, es. "assunzione-2026" (NON ripetere mai)
//  date        : "YYYY-MM-DD" — data dell'evento
//  time        : orario come stringa, es. "10:00 & 18:30" (opzionale)
//  category    : "liturgia" | "formazione" | "carita" | "comunita"
//  showInModal : true = appare nella finestra d'annuncio all'apertura
//  title       : { it: "...", fr: "...", en: "..." }
//  description : { it: "...", fr: "...", en: "..." }
//  image       : URL immagine principale — "" se nessuna
//  gallery     : array di URL immagini aggiuntive — [] se nessuna
//  video       : URL YouTube completo — "" se nessuno
//  tags        : { it: [...], fr: [...], en: [...] }
//  cta         : link del pulsante nella modale, es. "#vita" o "#contact"
//
//  REGOLE:
//  • La modale mostra automaticamente l'evento più vicino con showInModal: true
//  • Gli eventi passati vanno nell'Archivio automaticamente
//  • Per disattivare un evento: commenta o elimina il suo blocco
//  • Per un nuovo evento: copia un blocco esistente e modifica i valori
// ══════════════════════════════════════════════════════════════════════════════

const PARISH_EVENTS = [

  // ── EVENTI A VENIRE ────────────────────────────────────────────────────────

  {
    id: "assunzione-2026",
    date: "2026-08-15",
    time: "10:00 & 18:30",
    category: "liturgia",
    showInModal: true,
    title: {
      it: "Festa dell'Assunzione della Madonna",
      fr: "Fête de l'Assomption de la Vierge Marie",
      en: "Feast of the Assumption of the Virgin Mary"
    },
    description: {
      it: "Celebrazione solenne con processione e Santa Messa festiva. Tutti i fedeli sono cordialmente invitati a partecipare!",
      fr: "Célébration solennelle avec procession et Sainte Messe festive. Tous les fidèles sont cordialement invités à participer !",
      en: "Solemn celebration with procession and festive Holy Mass. All the faithful are warmly invited!"
    },
    image: "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/6.jpg",
    gallery: [
      "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/7.jpg",
      "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/8.jpg"
    ],
    video: "",
    tags: {
      it: ["Liturgia", "Maria", "Solennità"],
      fr: ["Liturgie", "Marie", "Solennité"],
      en: ["Liturgy", "Mary", "Solemnity"]
    },
    cta: "#vita"
  },

  {
    id: "ritiro-settembre-2026",
    date: "2026-09-10",
    time: "09:00 – 18:00",
    category: "formazione",
    showInModal: true,
    title: {
      it: "Ritiro Spirituale",
      fr: "Retraite Spirituelle",
      en: "Spiritual Retreat"
    },
    description: {
      it: "Giornata di preghiera e riflessione per adulti e giovani della comunità parrocchiale. Iscrizione in segreteria.",
      fr: "Journée de prière et de réflexion pour les adultes et les jeunes de la communauté paroissiale. Inscription au secrétariat.",
      en: "A day of prayer and reflection for adults and youth of the parish community. Register at the parish office."
    },
    image: "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/9.jpg",
    gallery: [],
    video: "",
    tags: {
      it: ["Formazione", "Ritiro", "Preghiera"],
      fr: ["Formation", "Retraite", "Prière"],
      en: ["Formation", "Retreat", "Prayer"]
    },
    cta: "#contact"
  },

  {
    id: "catechismo-2026",
    date: "2026-10-01",
    time: "10:00",
    category: "formazione",
    showInModal: false,
    title: {
      it: "Inizio Anno Catechistico",
      fr: "Début de l'Année Catéchétique",
      en: "Catechism Year Opening"
    },
    description: {
      it: "Avvio del nuovo anno di catechismo per bambini e ragazzi: Prima Comunione e Cresima.",
      fr: "Lancement de la nouvelle année de catéchisme pour les enfants et les jeunes : Première Communion et Confirmation.",
      en: "Start of the new catechism year for children and youth: First Communion and Confirmation."
    },
    image: "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/10.jpg",
    gallery: [],
    video: "",
    tags: {
      it: ["Formazione", "Catechismo", "Bambini"],
      fr: ["Formation", "Catéchisme", "Enfants"],
      en: ["Formation", "Catechism", "Children"]
    },
    cta: "#vita"
  },

  // ── EVENTI PASSATI (archivio) ──────────────────────────────────────────────

  {
    id: "pasqua-2026",
    date: "2026-04-05",
    time: "10:00 & 18:30",
    category: "liturgia",
    showInModal: false,
    title: {
      it: "Pasqua di Risurrezione 2026",
      fr: "Pâques de Résurrection 2026",
      en: "Easter Sunday 2026"
    },
    description: {
      it: "Solenne celebrazione della Pasqua con tutta la comunità parrocchiale. Veglia pasquale e Messa del giorno.",
      fr: "Célébration solennelle de Pâques avec toute la communauté paroissiale. Vigile pascale et Messe du jour.",
      en: "Solemn Easter celebration with the entire parish community. Easter Vigil and morning Mass."
    },
    image: "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/11.jpg",
    gallery: [
      "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/12.jpg",
      "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/13.jpg"
    ],
    video: "",
    tags: {
      it: ["Liturgia", "Pasqua", "Solennità"],
      fr: ["Liturgie", "Pâques", "Solennité"],
      en: ["Liturgy", "Easter", "Solemnity"]
    },
    cta: ""
  },

  {
    id: "raccolta-aprile-2026",
    date: "2026-04-27",
    time: "09:00 – 12:00",
    category: "carita",
    showInModal: false,
    title: {
      it: "Raccolta Alimentare di Aprile",
      fr: "Collecte Alimentaire d'Avril",
      en: "April Food Collection"
    },
    description: {
      it: "Raccolta mensile di alimenti per le famiglie in difficoltà del quartiere. La carità in azione.",
      fr: "Collecte mensuelle d'aliments pour les familles en difficulté du quartier. La charité en action.",
      en: "Monthly food collection for families in need in the neighborhood. Charity in action."
    },
    image: "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/12.jpg",
    gallery: [],
    video: "",
    tags: {
      it: ["Carità", "Solidarietà"],
      fr: ["Charité", "Solidarité"],
      en: ["Charity", "Solidarity"]
    },
    cta: ""
  },

  {
    id: "catechesi-adulti-2026",
    date: "2026-04-22",
    time: "18:30 – 20:00",
    category: "formazione",
    showInModal: false,
    title: {
      it: "Incontro di Catechesi per Adulti",
      fr: "Rencontre de Catéchèse pour Adultes",
      en: "Adult Catechesis Meeting"
    },
    description: {
      it: "Percorso di approfondimento biblico e confronto comunitario nel cammino sinodale.",
      fr: "Parcours d'approfondissement biblique et de dialogue communautaire dans le chemin synodal.",
      en: "Biblical deepening and community discussion pathway in the synodal journey."
    },
    image: "https://www.reginadegliapostoli.it/RDA/Multimedia/Content/9.jpg",
    gallery: [],
    video: "",
    tags: {
      it: ["Formazione", "Adulti", "Sinodalità"],
      fr: ["Formation", "Adultes", "Synodalité"],
      en: ["Formation", "Adults", "Synodality"]
    },
    cta: ""
  }

];
