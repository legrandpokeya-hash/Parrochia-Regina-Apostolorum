document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const sections = document.querySelectorAll("main section[id]");
  const toast = document.getElementById("toast");

  let currentLang = localStorage.getItem("siteLang") || "it";

  const translations = {
    fr: {
      "brand.name": "Paroisse Regina Apostolorum",
      "nav.home": "Accueil",
      "nav.community": "Communauté",
      "nav.life": "Vie paroissiale",
      "nav.pastoral": "Services pastoraux",
      "nav.gallery": "Galerie",
      "nav.contact": "Contacts",
      "hero.kicker": "Paroisse Sainte-Marie",
      "hero.title": "Regina Apostolorum",
      "hero.subtitle": "Une communauté de foi et de service au cœur de Rome, Via Giuseppe Ferrari 1.",
      "hero.ctaMass": "Horaires des Messes",
      "hero.ctaContact": "Nous contacter",
      "hero.meta1": "Messes en semaine : 7h45 - 10h00 - 18h30",
      "hero.meta2": "Adoration et confessions chaque jour",
      "hero.meta3": "Via Giuseppe Ferrari, 1 - Rome",
      "community.title": "La communauté paroissiale",
      "community.intro": "Histoire, identité et service pastoral de la Paroisse Sainte-Marie Regina Apostolorum.",
      "community.aboutTitle": "Qui sommes-nous",
      "community.aboutP1": "La paroisse a été érigée le 18 avril 1936 et est confiée à la Société de l'Apostolat Catholique (Pallottins).",
      "community.aboutP2": "C'est un lieu de prière, de formation et de charité avec une présence pastorale constante pour les familles, les jeunes et les adultes.",
      "community.caption": "Via Giuseppe Ferrari, 1 - Rome",
      "community.clergy1Title": "Curé",
      "community.clergy1Text": "P. Nicola Gallucci",
      "community.clergy2Title": "Vicaire",
      "community.clergy2Text": "P. Alberto Houodanou Dagbedji",
      "community.clergy3Title": "Collaborateurs",
      "community.clergy3Text1": "P. Clément Sabi Baraga",
      "community.clergy3Text2": "P. Tomasz Gradzki",
      "community.clergy3Text3": "P. Constantin Legrand TALE POKEYA",
      "community.clergy3Text4": "Fr. Armand Dieudonné ONDOUA",
      "life.title": "Vie paroissiale",
      "life.intro": "Horaires liturgiques, activités, nouvelles et événements de la communauté.",
      "life.hoursTitle": "Horaires et services",
      "life.tabWinter": "Période hivernale",
      "life.tabSummer": "Juillet - Août",
      "life.tableDays": "Jours",
      "life.tableTimes": "Horaires",
      "life.wFer": "En semaine",
      "life.wPre": "Veille de fête",
      "life.wFes": "Dimanche",
      "life.confTitle": "Confessions :",
      "life.confText": "tous les jours 9h00-12h00 et 16h00-19h00",
      "life.act1Title": "Catéchisme",
      "life.act1Text": "Première Communion et Confirmation, dimanche à partir de 10h00.",
      "life.act2Title": "Catéchèse adultes",
      "life.act2Text": "Mardi 18h30-20h00, chemin synodal.",
      "life.act3Title": "Centre d'écoute",
      "life.act3Text": "Groupe Vincentien, mercredi 9h00-12h00.",
      "life.newsTitle": "Actualités et mises à jour",
      "life.filterAll": "Toutes",
      "life.filterLit": "Liturgie",
      "life.filterFor": "Formation",
      "life.filterCar": "Charité",
      "life.news1Title": "Messe pour la communauté paroissiale",
      "life.news1Text": "Célébration du soir pour les familles, les jeunes et les personnes âgées.",
      "life.news2Title": "Rencontre de catéchèse pour adultes",
      "life.news2Text": "Parcours d'approfondissement biblique et de dialogue communautaire.",
      "life.news3Title": "Collecte alimentaire mensuelle",
      "life.news3Text": "Soutien aux familles en difficulté par la distribution de vivres.",
      "life.ev1": "Fête de Notre-Dame",
      "life.ev2": "Retraite Spirituelle",
      "life.ev3": "Début du Catéchisme",
      "events.archiveTitle": "Archives des événements",
      "events.archiveIntro": "Consultez les événements passés de la communauté paroissiale.",
      "events.noUpcoming": "Aucun événement programmé pour le moment.",
      "events.noPast": "Aucun événement archivé.",
      "events.today": "Aujourd'hui !",
      "events.tomorrow": "Demain !",
      "events.days": "jours",
      "events.thisWeek": "Cette semaine",
      "events.thisMonth": "Ce mois",
      "events.concluded": "Passé",
      "events.seeGallery": "Photos",
      "events.watchVideo": "Vidéo",
      "event.tag": "Événement imminent",
      "event.cta": "Voir les horaires",
      "event.noshow": "Ne plus afficher",
      "pay.chooseAmount": "Choisissez un montant",
      "pay.custom": "Autre montant…",
      "pay.intentionLabel": "Intention ou motif",
      "pay.intentionPh": "Ex. Pour la santé de Marie…",
      "pay.loading": "Chargement du système de paiement…",
      "pay.notConfigured": "Insérez le Client ID PayPal dans script.js → PAYMENT_CONFIG pour activer les paiements.",
      "pay.secure": "Paiement géré par PayPal · Aucune donnée bancaire sauvegardée sur ce site",
      "pay.successTitle": "Merci pour votre générosité !",
      "pay.successTitleName": "Merci, {name} !",
      "pay.successMsg": "Le paiement a été reçu. La paroisse vous en est reconnaissante.",
      "pay.newDonation": "Faire un autre don",
      "pay.errorMsg": "Erreur de paiement. Réessayez ou contactez le secrétariat.",
      "pastoral.title": "Services pastoraux",
      "pastoral.intro": "Demandes d'intentions de messe, dons et accompagnement spirituel.",
      "pastoral.massTitle": "Intentions de Messe et Offrande",
      "pastoral.massIntro": "Indiquez votre intention ; la paroisse vous contactera pour la date et les détails.",
      "pastoral.donTitle": "Offrandes et Dons",
      "pastoral.donIntro": "Votre soutien aide la liturgie, la charité et les activités pastorales quotidiennes.",
      "pastoral.supportTitle": "Accompagnement et Écoute Spirituelle",
      "pastoral.supportIntro": "Demandez un entretien avec un prêtre ou un accompagnateur spirituel.",
      "bank.title": "Coordonnées bancaires",
      "bank.holderLabel": "Titulaire :",
      "bank.holderValue": "PARROCCHIA S.MARIA REGINA APOSTOLORUM",
      "bank.bankLabel": "Banque :",
      "bank.bankValue": "UNICREDIT",
      "bank.reasonLabel": "Motif :",
      "bank.reasonValue": "Offrande / Don paroissial",
      "bank.note": "Coordonnées mises à jour par le secrétariat paroissial.",
      "form.fullname": "Nom complet",
      "form.email": "E-mail",
      "form.massDate": "Date souhaitée",
      "form.massTime": "Horaire de Messe souhaité",
      "form.intention": "Intention",
      "form.sendRequest": "Envoyer la demande",
      "form.amount": "Montant (EUR)",
      "form.messageOptional": "Message (optionnel)",
      "form.sendDonation": "Envoyer la proposition de don",
      "form.phone": "Téléphone",
      "form.availability": "Disponibilité préférée",
      "form.availabilityPlaceholder": "Ex. mardi soir",
      "form.request": "Votre demande",
      "form.bookMeeting": "Demander un rendez-vous",
      "gallery.title": "Galerie",
      "gallery.intro": "Un aperçu de la vie de notre communauté.",
      "contact.title": "Contacts",
      "contact.intro": "Nous sommes disponibles pour des informations, des rendez-vous et des demandes pastorales.",
      "contact.addressTitle": "Adresse",
      "contact.addressText": "Via Giuseppe Ferrari, 1 - 00195 Rome",
      "contact.phoneTitle": "Téléphone",
      "contact.emailTitle": "Email",
      "contact.websiteTitle": "Site web",
      "contact.mapTitle": "Comment nous rejoindre",
      "contact.mapLink": "Ouvrir dans Google Maps",
      "footer.text": "Paroisse Regina Apostolorum - Rome",
      "a11y.skipLink": "Aller au contenu principal",
      "pwa.text": "Installez l'appli sur votre écran d'accueil",
      "pwa.install": "Installer",
      "pwa.dismiss": "✕",
      copyToast: "Copié",
      formSent: "envoyée. Nous vous contacterons bientôt.",
      fallbackRequest: "Demande"
    },
    it: {
      "brand.name": "Parrocchia Regina Apostolorum",
      "nav.home": "Inizio",
      "nav.community": "Comunità",
      "nav.life": "Vita parrocchiale",
      "nav.events": "Agenda",
      "nav.pastoral": "Servizi pastorali",
      "nav.gallery": "Galleria",
      "nav.contact": "Contatti",
      "hero.kicker": "Parrocchia Santa Maria",
      "hero.title": "Regina Apostolorum",
      "hero.subtitle": "Comunità di fede e servizio nel cuore di Roma, in Via Giuseppe Ferrari 1.",
      "hero.ctaMass": "Orari delle Messe",
      "hero.ctaContact": "Contattaci",
      "hero.meta1": "Messe feriali: 7:45 - 10:00 - 18:30",
      "hero.meta2": "Adorazione e confessioni ogni giorno",
      "hero.meta3": "Via Giuseppe Ferrari, 1 - Roma",
      "community.title": "La comunità parrocchiale",
      "community.intro": "Storia, identità e servizio pastorale della Parrocchia Santa Maria Regina Apostolorum.",
      "community.aboutTitle": "Chi siamo",
      "community.aboutP1": "La parrocchia è stata eretta il 18 aprile 1936 ed è affidata alla Società dell'Apostolato Cattolico (Pallottini).",
      "community.aboutP2": "È luogo di preghiera, formazione e carità con una presenza pastorale costante per famiglie, giovani e adulti.",
      "community.caption": "Via Giuseppe Ferrari, 1 - Roma",
      "community.clergy1Title": "Parroco",
      "community.clergy1Text": "Don Nicola Gallucci",
      "community.clergy2Title": "Vice Parroco",
      "community.clergy2Text": "Don Alberto Houodanou Dagbedji",
      "community.clergy3Title": "Collaboratori",
      "community.clergy3Text1": "Don Clemente Sabi Baraga",
      "community.clergy3Text2": "Don Tomasz Gradzki",
      "community.clergy3Text3": "Don Constantin Legrand TALE POKEYA",
      "community.clergy3Text4": "Fr Armand Dieudonné ONDOUA",
      "life.title": "Vita parrocchiale",
      "life.intro": "Orari liturgici, attività, notizie ed eventi della comunità.",
      "life.hoursTitle": "Orari e servizi",
      "life.tabWinter": "Periodo invernale",
      "life.tabSummer": "Luglio - Agosto",
      "life.tableDays": "Giorni",
      "life.tableTimes": "Orari",
      "life.wFer": "Feriale",
      "life.wPre": "Prefestivo",
      "life.wFes": "Festivo",
      "life.confTitle": "Confessioni:",
      "life.confText": "tutti i giorni 9:00-12:00 e 16:00-19:00",
      "life.act1Title": "Catechismo",
      "life.act1Text": "Prima Comunione e Cresima, domenica dalle 10:00.",
      "life.act2Title": "Catechesi adulti",
      "life.act2Text": "Martedì 18:30-20:00, cammino sinodale.",
      "life.act3Title": "Centro di ascolto",
      "life.act3Text": "Gruppo Vincenziane, mercoledì 9:00-12:00.",
      "life.newsTitle": "Notizie e aggiornamenti",
      "life.filterAll": "Tutte",
      "life.filterLit": "Liturgia",
      "life.filterFor": "Formazione",
      "life.filterCar": "Carità",
      "life.news1Title": "Messa per la comunità parrocchiale",
      "life.news1Text": "Celebrazione serale con intenzione per famiglie, giovani e anziani.",
      "life.news2Title": "Incontro di catechesi per adulti",
      "life.news2Text": "Percorso di approfondimento biblico e confronto comunitario.",
      "life.news3Title": "Raccolta alimentare mensile",
      "life.news3Text": "Supporto alle famiglie in difficoltà con distribuzione viveri.",
      "life.ev1": "Festa della Madonna",
      "life.ev2": "Ritiro Spirituale",
      "life.ev3": "Inizio Catechismo",
      "events.archiveTitle": "Archivio eventi",
      "events.archiveIntro": "Consulta gli eventi passati della comunità parrocchiale.",
      "events.noUpcoming": "Nessun evento programmato al momento.",
      "events.noPast": "Nessun evento archiviato.",
      "events.today": "Oggi!",
      "events.tomorrow": "Domani!",
      "events.days": "giorni",
      "events.thisWeek": "Questa settimana",
      "events.thisMonth": "Questo mese",
      "events.concluded": "Concluso",
      "events.seeGallery": "Foto",
      "events.watchVideo": "Video",
      "event.tag": "Evento imminente",
      "event.cta": "Vedi gli orari",
      "event.noshow": "Non mostrare più",
      "pay.chooseAmount": "Scegli un importo",
      "pay.custom": "Altro importo…",
      "pay.intentionLabel": "Intenzione o causale",
      "pay.intentionPh": "Es. Per la salute di Maria…",
      "pay.loading": "Caricamento sistema di pagamento…",
      "pay.notConfigured": "Inserisci il Client ID PayPal in script.js → PAYMENT_CONFIG per attivare i pagamenti.",
      "pay.secure": "Pagamento gestito da PayPal · Nessun dato bancario salvato su questo sito",
      "pay.successTitle": "Grazie per la tua generosità!",
      "pay.successTitleName": "Grazie, {name}!",
      "pay.successMsg": "Il pagamento è stato ricevuto. La parrocchia ti è riconoscente.",
      "pay.newDonation": "Effettuare un'altra offerta",
      "pay.errorMsg": "Errore nel pagamento. Riprova o contatta la segreteria.",
      "pastoral.title": "Servizi pastorali",
      "pastoral.intro": "Richieste di intenzioni di messa, donazioni e accompagnamento spirituale.",
      "pastoral.massTitle": "Intenzioni di Messa e Offerta",
      "pastoral.massIntro": "Indica la tua intenzione; la parrocchia ti contatterà per data e dettagli.",
      "pastoral.donTitle": "Offerte e Donazioni",
      "pastoral.donIntro": "Il tuo sostegno aiuta liturgia, carità e attività pastorali quotidiane.",
      "pastoral.supportTitle": "Accompagnamento e Ascolto Spirituale",
      "pastoral.supportIntro": "Richiedi un colloquio con un sacerdote o con un accompagnatore spirituale della parrocchia.",
      "bank.title": "Coordinate bancarie parrocchiali",
      "bank.holderLabel": "Intestatario:",
      "bank.holderValue": "PARROCCHIA S.MARIA REGINA APOSTOLORUM",
      "bank.bankLabel": "Banca:",
      "bank.bankValue": "UNICREDIT",
      "bank.reasonLabel": "Causale:",
      "bank.reasonValue": "Offerta / Donazione parrocchiale",
      "bank.note": "Coordinate aggiornate dalla segreteria parrocchiale.",
      "form.fullname": "Nome completo",
      "form.email": "E-mail",
      "form.massDate": "Data desiderata",
      "form.massTime": "Orario della Messa desiderato",
      "form.intention": "Intenzione",
      "form.sendRequest": "Invia la richiesta",
      "form.amount": "Importo (EUR)",
      "form.messageOptional": "Messaggio (opzionale)",
      "form.sendDonation": "Invia la proposta di donazione",
      "form.phone": "Telefono",
      "form.availability": "Disponibilità preferita",
      "form.availabilityPlaceholder": "Es. martedì sera",
      "form.request": "La tua richiesta",
      "form.bookMeeting": "Richiedi un appuntamento",
      "gallery.title": "Galleria",
      "gallery.intro": "Uno sguardo alla vita della nostra comunità.",
      "contact.title": "Contatti",
      "contact.intro": "Siamo disponibili per informazioni, appuntamenti e richieste pastorali.",
      "contact.addressTitle": "Indirizzo",
      "contact.addressText": "Via Giuseppe Ferrari, 1 - 00195 Roma",
      "contact.phoneTitle": "Telefono",
      "contact.emailTitle": "Email",
      "contact.websiteTitle": "Sito",
      "contact.mapTitle": "Come arrivare",
      "contact.mapLink": "Apri su Google Maps",
      "footer.text": "Parrocchia Regina Apostolorum - Roma",
      "a11y.skipLink": "Salta al contenuto principale",
      "pwa.text": "Installa l'app sulla tua schermata principale",
      "pwa.install": "Installa",
      "pwa.dismiss": "✕",
      copyToast: "Copiato",
      formSent: "inviata. Ti ricontatteremo al più presto.",
      fallbackRequest: "Richiesta"
    },
    en: {
      "brand.name": "Regina Apostolorum Parish",
      "nav.home": "Home",
      "nav.community": "Community",
      "nav.life": "Parish Life",
      "nav.pastoral": "Pastoral Services",
      "nav.gallery": "Gallery",
      "nav.contact": "Contacts",
      "hero.kicker": "Saint Mary Parish",
      "hero.title": "Regina Apostolorum",
      "hero.subtitle": "A community of faith and service in the heart of Rome, at Via Giuseppe Ferrari 1.",
      "hero.ctaMass": "Mass Times",
      "hero.ctaContact": "Contact Us",
      "hero.meta1": "Weekday Masses: 7:45 - 10:00 - 18:30",
      "hero.meta2": "Adoration and confessions every day",
      "hero.meta3": "Via Giuseppe Ferrari, 1 - Rome",
      "community.title": "The parish community",
      "community.intro": "History, identity and pastoral service of Santa Maria Regina Apostolorum Parish.",
      "community.aboutTitle": "Who we are",
      "community.aboutP1": "The parish was established on April 18, 1936 and is entrusted to the Society of the Catholic Apostolate (Pallottines).",
      "community.aboutP2": "It is a place of prayer, formation and charity, with steady pastoral care for families, youth and adults.",
      "community.caption": "Via Giuseppe Ferrari, 1 - Rome",
      "community.clergy1Title": "Parish Priest",
      "community.clergy1Text": "Fr. Nicola Gallucci",
      "community.clergy2Title": "Assistant Priest",
      "community.clergy2Text": "Fr. Alberto Houodanou Dagbedji",
      "community.clergy3Title": "Collaborators",
      "community.clergy3Text1": "Fr. Clement Sabi Baraga",
      "community.clergy3Text2": "Fr. Tomasz Gradzki",
      "community.clergy3Text3": "Fr. Constantin Legrand TALE POKEYA",
      "community.clergy3Text4": "Br. Armand Dieudonné ONDOUA",
      "life.title": "Parish life",
      "life.intro": "Liturgical times, activities, news and events of the community.",
      "life.hoursTitle": "Times and services",
      "life.tabWinter": "Winter schedule",
      "life.tabSummer": "July - August",
      "life.tableDays": "Days",
      "life.tableTimes": "Times",
      "life.wFer": "Weekday",
      "life.wPre": "Vigil",
      "life.wFes": "Sunday",
      "life.confTitle": "Confessions:",
      "life.confText": "every day 9:00-12:00 and 16:00-19:00",
      "life.act1Title": "Catechism",
      "life.act1Text": "First Communion and Confirmation, Sunday from 10:00.",
      "life.act2Title": "Adult catechesis",
      "life.act2Text": "Tuesday 18:30-20:00, synodal journey.",
      "life.act3Title": "Listening center",
      "life.act3Text": "Vincentian volunteers, Wednesday 9:00-12:00.",
      "life.newsTitle": "News and updates",
      "life.filterAll": "All",
      "life.filterLit": "Liturgy",
      "life.filterFor": "Formation",
      "life.filterCar": "Charity",
      "life.news1Title": "Mass for the parish community",
      "life.news1Text": "Evening celebration for families, youth and elderly parishioners.",
      "life.news2Title": "Adult catechesis meeting",
      "life.news2Text": "Biblical deepening and community discussion pathway.",
      "life.news3Title": "Monthly food collection",
      "life.news3Text": "Support for families in difficulty through food distribution.",
      "life.ev1": "Feast of Our Lady",
      "life.ev2": "Spiritual Retreat",
      "life.ev3": "Catechism Opening",
      "events.archiveTitle": "Events archive",
      "events.archiveIntro": "Browse past events of the parish community.",
      "events.noUpcoming": "No events scheduled at the moment.",
      "events.noPast": "No archived events.",
      "events.today": "Today!",
      "events.tomorrow": "Tomorrow!",
      "events.days": "days",
      "events.thisWeek": "This week",
      "events.thisMonth": "This month",
      "events.concluded": "Concluded",
      "events.seeGallery": "Photos",
      "events.watchVideo": "Video",
      "event.tag": "Upcoming Event",
      "event.cta": "See schedule",
      "event.noshow": "Don't show again",
      "pay.chooseAmount": "Choose an amount",
      "pay.custom": "Other amount…",
      "pay.intentionLabel": "Intention or reference",
      "pay.intentionPh": "e.g. For Mary's health…",
      "pay.loading": "Loading payment system…",
      "pay.notConfigured": "Insert the PayPal Client ID in script.js → PAYMENT_CONFIG to activate payments.",
      "pay.secure": "Payment managed by PayPal · No banking data stored on this site",
      "pay.successTitle": "Thank you for your generosity!",
      "pay.successTitleName": "Thank you, {name}!",
      "pay.successMsg": "Payment received. The parish is grateful.",
      "pay.newDonation": "Make another donation",
      "pay.errorMsg": "Payment error. Please try again or contact the parish office.",
      "pastoral.title": "Pastoral services",
      "pastoral.intro": "Requests for Mass intentions, donations and spiritual accompaniment.",
      "pastoral.massTitle": "Mass Intentions and Offering",
      "pastoral.massIntro": "Share your intention; the parish will contact you for date and details.",
      "pastoral.donTitle": "Offerings and Donations",
      "pastoral.donIntro": "Your support helps liturgy, charity and daily pastoral activities.",
      "pastoral.supportTitle": "Spiritual Accompaniment and Listening",
      "pastoral.supportIntro": "Request a meeting with a priest or spiritual companion.",
      "bank.title": "Parish bank details",
      "bank.holderLabel": "Account holder:",
      "bank.holderValue": "PARROCCHIA S.MARIA REGINA APOSTOLORUM",
      "bank.bankLabel": "Bank:",
      "bank.bankValue": "UNICREDIT",
      "bank.reasonLabel": "Payment reason:",
      "bank.reasonValue": "Parish offering / donation",
      "bank.note": "Details updated by the parish office.",
      "form.fullname": "Full name",
      "form.email": "Email",
      "form.massDate": "Preferred date",
      "form.massTime": "Preferred Mass time",
      "form.intention": "Intention",
      "form.sendRequest": "Send request",
      "form.amount": "Amount (EUR)",
      "form.messageOptional": "Message (optional)",
      "form.sendDonation": "Send donation proposal",
      "form.phone": "Phone",
      "form.availability": "Preferred availability",
      "form.availabilityPlaceholder": "Ex. Tuesday evening",
      "form.request": "Your request",
      "form.bookMeeting": "Request appointment",
      "gallery.title": "Gallery",
      "gallery.intro": "A glimpse into our parish life.",
      "contact.title": "Contacts",
      "contact.intro": "We are available for information, appointments and pastoral requests.",
      "contact.addressTitle": "Address",
      "contact.addressText": "Via Giuseppe Ferrari, 1 - 00195 Rome",
      "contact.phoneTitle": "Phone",
      "contact.emailTitle": "Email",
      "contact.websiteTitle": "Website",
      "contact.mapTitle": "How to reach us",
      "contact.mapLink": "Open in Google Maps",
      "footer.text": "Regina Apostolorum Parish - Rome",
      "a11y.skipLink": "Skip to main content",
      "pwa.text": "Install the app on your home screen",
      "pwa.install": "Install",
      "pwa.dismiss": "✕",
      copyToast: "Copied",
      formSent: "sent. We will contact you soon.",
      fallbackRequest: "Request"
    }
  };

  function setLanguage(lang) {
    const t = translations[lang] || translations.it;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("siteLang", lang);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  setLanguage(currentLang);

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("active", href === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -50% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  const tabs = document.querySelectorAll(".tab");
  const tabPanels = document.querySelectorAll(".tab-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.tab;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", String(active));
      });
      tabPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === `tab-${key}`);
      });
    });
  });

  const newsFilters = document.querySelectorAll(".news-filter");
  const newsCards = document.querySelectorAll(".news-card");
  newsFilters.forEach((filterBtn) => {
    filterBtn.addEventListener("click", () => {
      const selected = filterBtn.dataset.filter;
      newsFilters.forEach((btn) => {
        btn.classList.toggle("active", btn === filterBtn);
      });
      newsCards.forEach((card) => {
        const category = card.dataset.category;
        const visible = selected === "all" || selected === category;
        card.classList.toggle("hidden", !visible);
      });
    });
  });

  const galleryImages = Array.from(document.querySelectorAll(".gallery-grid img"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  let current = 0;

  function openLightbox(index) {
    current = index;
    lightboxImage.src = galleryImages[current].src;
    lightboxImage.alt = galleryImages[current].alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  function move(step) {
    current = (current + step + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[current].src;
    lightboxImage.alt = galleryImages[current].alt;
  }

  galleryImages.forEach((img, i) => {
    img.addEventListener("click", () => openLightbox(i));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => move(-1));
  lightboxNext.addEventListener("click", () => move(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === "ArrowRight") move(1);
  });

  const scrollTopBtn = document.getElementById("scroll-top");
  window.addEventListener(
    "scroll",
    () => {
      scrollTopBtn.classList.toggle("visible", window.scrollY > 450);
    },
    { passive: true }
  );
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const text = el.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        const t = translations[currentLang] || translations.it;
        toast.textContent = `${t.copyToast}: ${text}`;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2000);
      });
    });
  });

  const pastoralForms = document.querySelectorAll(".pastorale-form");
  pastoralForms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      const t      = translations[currentLang] || translations.it;
      const label  = form.dataset.formLabel || t.fallbackRequest;
      const action = form.dataset.formspree;

      if (action) {
        // Envoi réel via Formspree
        const btn = form.querySelector("[type=submit]");
        if (btn) btn.disabled = true;
        try {
          const res = await fetch(action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
          });
          if (res.ok) {
            toast.textContent = `✓ ${label} ${t.formSent}`;
            form.reset();
          } else {
            toast.textContent = t["form.error"] || "Errore nell'invio. Riprova.";
          }
        } catch {
          toast.textContent = t["form.error"] || "Errore di rete. Riprova.";
        } finally {
          if (btn) btn.disabled = false;
        }
      } else {
        // Formspree non configurato: mostra notifica
        toast.textContent = `${label} ${t.formSent}`;
        form.reset();
      }

      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // ── Tab keyboard navigation (←/→ arrows) ─────────────────────────────────
  const tabList = document.querySelector('[role="tablist"]');
  if (tabList) {
    tabList.addEventListener("keydown", (e) => {
      const allTabs = [...tabList.querySelectorAll('[role="tab"]')];
      const idx = allTabs.indexOf(document.activeElement);
      if (idx === -1) return;
      let next = -1;
      if (e.key === "ArrowRight") next = (idx + 1) % allTabs.length;
      if (e.key === "ArrowLeft")  next = (idx - 1 + allTabs.length) % allTabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End")  next = allTabs.length - 1;
      if (next !== -1) {
        e.preventDefault();
        allTabs[next].focus();
        allTabs[next].click();
      }
    });
  }

  // ── Lightbox — focus management & trap ───────────────────────────────────
  let triggerElement = null;

  const origOpen = openLightbox;
  function openLightbox(index) {
    triggerElement = document.activeElement;
    current = index;
    lightboxImage.src = galleryImages[current].src;
    lightboxImage.alt = galleryImages[current].alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
  }

  const origClose = closeLightbox;
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    if (triggerElement) { triggerElement.focus(); triggerElement = null; }
  }

  lightbox.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    const focusable = [...lightbox.querySelectorAll("button:not([disabled])")];
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // ── Dark mode toggle ──────────────────────────────────────────────────────
  const darkToggleBtn = document.getElementById("dark-toggle");
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  function applyTheme(dark) {
    root.classList.toggle("dark-mode", dark);
    if (darkToggleBtn) {
      darkToggleBtn.setAttribute("aria-pressed", String(dark));
      darkToggleBtn.setAttribute("aria-label",
        dark
          ? (translations[currentLang]["dark.off"] || "Disattiva modalità scura")
          : (translations[currentLang]["dark.on"]  || "Attiva modalità scura")
      );
      darkToggleBtn.textContent = dark ? "☀" : "◑";
    }
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);

  if (darkToggleBtn) {
    darkToggleBtn.addEventListener("click", () => {
      const isDark = !root.classList.contains("dark-mode");
      applyTheme(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) applyTheme(e.matches);
  });

  // ── PWA install banner ────────────────────────────────────────────────────
  const pwaBanner  = document.getElementById("pwa-banner");
  const pwaInstall = document.getElementById("pwa-install");
  const pwaDismiss = document.getElementById("pwa-dismiss");
  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (pwaBanner && !sessionStorage.getItem("pwaDismissed")) {
      setTimeout(() => pwaBanner.classList.add("show"), 2500);
    }
  });

  if (pwaInstall) {
    pwaInstall.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      pwaBanner.classList.remove("show");
    });
  }

  if (pwaDismiss) {
    pwaDismiss.addEventListener("click", () => {
      pwaBanner.classList.remove("show");
      sessionStorage.setItem("pwaDismissed", "1");
    });
  }

  // ── Service Worker registration ───────────────────────────────────────────
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(() => {});
  }

  // ── Widget de paiement PayPal embarqué ──────────────────────────────────
  (function initPayWidget() {
    const widget = document.getElementById("donation-widget");
    if (!widget) return;

    const loadingEl    = document.getElementById("pay-loading");
    const notConfEl    = document.getElementById("pay-not-configured");
    const successEl    = document.getElementById("pay-success");
    const btnContainer = document.getElementById("paypal-button-container");
    const resetBtn     = document.getElementById("pay-reset");
    const presets      = widget.querySelectorAll(".pay-preset");
    const customInput  = widget.querySelector("#pay-custom-amount");
    const intentionEl  = document.getElementById("pay-intention");

    let selectedAmount = 25;

    // — Sélection du montant
    presets.forEach(btn => {
      btn.addEventListener("click", () => {
        presets.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        customInput.value = "";
        selectedAmount = parseInt(btn.dataset.amount, 10);
      });
    });

    customInput.addEventListener("input", () => {
      const val = parseInt(customInput.value, 10);
      if (val > 0) {
        presets.forEach(b => b.classList.remove("active"));
        selectedAmount = val;
      }
    });

    // — Affichage succès / réinitialisation
    function showSuccess() {
      btnContainer.style.display = "none";
      loadingEl.style.display    = "none";
      successEl.style.display    = "block";
      widget.querySelectorAll(".pay-section").forEach(s => s.style.opacity = "0.4");
    }

    resetBtn?.addEventListener("click", () => {
      successEl.style.display = "none";
      btnContainer.style.display = "block";
      widget.querySelectorAll(".pay-section").forEach(s => s.style.opacity = "");
      presets.forEach(b => b.classList.toggle("active", b.dataset.amount === "25"));
      customInput.value = "";
      intentionEl.value = "";
      selectedAmount = 25;
    });

    // — Vérification de la configuration
    const cfg = PAYMENT_CONFIG.paypal;
    if (!cfg.clientId || cfg.clientId.includes("VOTRE_CLIENT_ID")) {
      loadingEl.style.display = "none";
      notConfEl.style.display = "block";
      return;
    }

    // — Chargement dynamique du SDK PayPal
    const sdkUrl = "https://www.paypal.com/sdk/js"
      + "?client-id=" + encodeURIComponent(cfg.clientId)
      + "&currency=" + (cfg.currency || "EUR")
      + "&intent=capture"
      + "&enable-funding=card,venmo"
      + "&disable-funding=credit"
      + "&locale=it_IT";

    const script = document.createElement("script");
    script.src = sdkUrl;
    script.setAttribute("data-namespace", "paypal");

    script.onload = function () {
      loadingEl.style.display = "none";

      if (!window.paypal) return;

      window.paypal.Buttons({
        style: {
          layout:  "vertical",
          color:   "gold",
          shape:   "rect",
          label:   "donate",
          height:  48
        },

        createOrder: function (data, actions) {
          const amount    = Math.max(1, selectedAmount || 1);
          const note      = (intentionEl?.value || "").trim();
          const desc      = note
            ? "Offerta — " + note
            : "Offerta parrocchiale Regina Apostolorum";

          return actions.order.create({
            purchase_units: [{
              amount: {
                value:         amount.toFixed(2),
                currency_code: cfg.currency || "EUR"
              },
              description: desc.slice(0, 127)
            }]
          });
        },

        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            showSuccess();
            // Mise à jour du message de remerciement avec le prénom du donateur
            const name = details?.payer?.name?.given_name || "";
            const t = translations[currentLang] || translations.it;
            const titleEl = successEl.querySelector("h4");
            if (titleEl && name) {
              titleEl.textContent = (t["pay.successTitleName"] || "Grazie, {name}!")
                .replace("{name}", name);
            }
          });
        },

        onError: function () {
          const t = translations[currentLang] || translations.it;
          toast.textContent = t["pay.errorMsg"] || "Errore nel pagamento. Riprova.";
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 3500);
        },

        onCancel: function () {
          // L'utilisateur a annulé — rien à faire
        }

      }).render("#paypal-button-container");
    };

    script.onerror = function () {
      loadingEl.style.display = "none";
      notConfEl.style.display = "block";
    };

    document.head.appendChild(script);
  })();

  // ── Moteur d'événements paroissiaux ──────────────────────────────────────
  if (typeof PARISH_EVENTS !== "undefined" && PARISH_EVENTS.length) {

    // Échappement HTML — prévient toute injection XSS dans les cartes d'événements
    function _esc(str) {
      return String(str ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    }

    // Valide qu'une URL est bien http/https (bloque javascript:, data:, etc.)
    function _safeUrl(url) {
      try {
        const u = new URL(url);
        return (u.protocol === "https:" || u.protocol === "http:") ? url : "";
      } catch { return ""; }
    }

    const _today = new Date();
    _today.setHours(0, 0, 0, 0);

    function _parseDate(str) { return new Date(str + "T00:00:00"); }

    function _daysUntil(dateStr) {
      return Math.ceil((_parseDate(dateStr) - _today) / 86400000);
    }

    function _fmtDate(dateStr, lang) {
      const locales = { it: "it-IT", fr: "fr-FR", en: "en-US" };
      return new Intl.DateTimeFormat(locales[lang] || "it-IT", {
        day: "numeric", month: "long", year: "numeric"
      }).format(_parseDate(dateStr));
    }

    function _urgency(days) {
      if (days < 0)   return "past";
      if (days === 0) return "today";
      if (days <= 3)  return "critique";
      if (days <= 7)  return "soon";
      if (days <= 30) return "upcoming";
      return "future";
    }

    function _urgencyLabel(urgency, days, lang) {
      const t = translations[lang] || translations.it;
      if (urgency === "past")    return t["events.concluded"];
      if (urgency === "today")   return t["events.today"];
      if (urgency === "critique") {
        const d = t["events.days"];
        return lang === "fr" ? `Dans ${days} ${d} !` : lang === "en" ? `In ${days} ${d}!` : `Tra ${days} ${d}!`;
      }
      if (urgency === "soon")    return t["events.thisWeek"];
      if (urgency === "upcoming") return t["events.thisMonth"];
      return "";
    }

    function _catLabel(cat, lang) {
      const m = {
        it: { liturgia: "Liturgia", formazione: "Formazione", carita: "Carità", comunita: "Comunità" },
        fr: { liturgia: "Liturgie", formazione: "Formation",  carita: "Charité", comunita: "Communauté" },
        en: { liturgia: "Liturgy",  formazione: "Formation",  carita: "Charity", comunita: "Community" }
      };
      return (m[lang] || m.it)[cat] || cat;
    }

    function _catIcon(cat) {
      return { liturgia: "✝", formazione: "📖", carita: "🤝", comunita: "👥" }[cat] || "•";
    }

    function _buildCard(ev, lang) {
      const days    = _daysUntil(ev.date);
      const urg     = _urgency(days);
      const urgLbl  = _esc(_urgencyLabel(urg, days, lang));
      const isPast  = days < 0;
      const title   = _esc(ev.title[lang]       || ev.title.it);
      const desc    = _esc(ev.description[lang] || ev.description.it);
      const tags    = ev.tags[lang]              || ev.tags.it || [];
      const dateStr = _esc(_fmtDate(ev.date, lang));
      const imgSrc  = _safeUrl(ev.image || "");
      const catCls  = _esc(ev.category);
      const evId    = _esc(ev.id);

      const imgHtml = imgSrc
        ? `<div class="ec-image">
             <img src="${imgSrc}" alt="${title}" loading="lazy">
             ${urgLbl ? `<span class="ec-badge urg-${_esc(urg)}">${urgLbl}</span>` : ""}
           </div>`
        : (urgLbl ? `<div class="ec-imageless"><span class="ec-badge urg-${_esc(urg)}">${urgLbl}</span></div>` : "");

      const tagsHtml = tags.length
        ? `<div class="ec-tags">${tags.map(g => `<span class="ec-tag">${_esc(g)}</span>`).join("")}</div>`
        : "";

      const galleryHtml = ev.gallery && ev.gallery.length
        ? `<div class="ec-gallery">${ev.gallery.slice(0, 4)
            .map(u => _safeUrl(u))
            .filter(Boolean)
            .map(u => `<img src="${_esc(u)}" alt="" loading="lazy" tabindex="0">`)
            .join("")}</div>`
        : "";

      let videoHtml = "";
      if (ev.video) {
        const ytId = ev.video.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([A-Za-z0-9_-]{6,15})/)?.[1];
        if (ytId) {
          videoHtml = `<div class="ec-video">
            <iframe src="https://www.youtube.com/embed/${ytId}" title="${title}"
                    loading="lazy" allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe></div>`;
        }
      }

      return `<article class="event-card ${isPast ? "is-past" : "is-upcoming"} urg-${_esc(urg)}"
                       data-event-id="${evId}" data-category="${catCls}">
        ${imgHtml}
        <div class="ec-body">
          <div class="ec-meta">
            <span class="ec-date">📅 ${dateStr}</span>
            ${ev.time ? `<span class="ec-time">⏰ ${_esc(ev.time)}</span>` : ""}
          </div>
          <span class="ec-cat cat-${catCls}">${_catIcon(ev.category)} ${_esc(_catLabel(ev.category, lang))}</span>
          <h3 class="ec-title">${title}</h3>
          <p class="ec-desc">${desc}</p>
          ${tagsHtml}
          ${galleryHtml}
          ${videoHtml}
        </div>
      </article>`;
    }

    function _populateModal(ev, lang) {
      const modal   = document.getElementById("event-modal");
      if (!modal) return;

      const days    = _daysUntil(ev.date);
      const urg     = _urgency(days);
      const urgLbl  = _urgencyLabel(urg, days, lang);
      const t       = translations[lang] || translations.it;

      modal.querySelector("#event-modal-tag").textContent   = urgLbl || t["event.tag"];
      modal.querySelector("#event-modal-title").textContent = ev.title[lang] || ev.title.it;
      modal.querySelector("#event-modal-date").innerHTML    =
        `<span class="event-modal-icon">📅</span> ${_fmtDate(ev.date, lang)}${ev.time ? " &mdash; " + ev.time : ""}`;
      modal.querySelector("#event-modal-desc").textContent  = ev.description[lang] || ev.description.it;
      const cta   = modal.querySelector("#event-modal-cta");
      const nosh  = modal.querySelector("#event-modal-noshow");
      if (cta)  { cta.textContent = t["event.cta"];    if (ev.cta) cta.href = ev.cta; }
      if (nosh)   nosh.textContent = t["event.noshow"];
    }

    function renderEvents(lang) {
      const now     = Date.now();
      const upcoming = PARISH_EVENTS
        .filter(ev => _daysUntil(ev.date) >= 0)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      const past = PARISH_EVENTS
        .filter(ev => _daysUntil(ev.date) < 0)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      const t = translations[lang] || translations.it;

      // Grille "à venir" dans #vita
      const upGrid = document.getElementById("upcoming-events-grid");
      if (upGrid) {
        upGrid.innerHTML = upcoming.length
          ? upcoming.map(ev => _buildCard(ev, lang)).join("")
          : `<p class="events-empty">${t["events.noUpcoming"]}</p>`;
      }

      // Grille archives dans #eventi
      const pastGrid = document.getElementById("past-events-grid");
      if (pastGrid) {
        pastGrid.innerHTML = past.length
          ? past.map(ev => _buildCard(ev, lang)).join("")
          : `<p class="events-empty">${t["events.noPast"]}</p>`;
      }

      // Modale : événement le plus proche avec showInModal et dans les 120 jours
      const forModal = upcoming.find(ev => ev.showInModal && _daysUntil(ev.date) <= 120);
      const modal    = document.getElementById("event-modal");
      if (!modal) return;

      if (!forModal) { modal.style.display = "none"; return; }

      _populateModal(forModal, lang);

      // Gestion affichage modale (une seule fois par événement)
      const SEEN  = "event-seen-"   + forModal.id;
      const NOSH  = "event-noshow-" + forModal.id;

      if (!modal._bound) {
        modal._bound = true;

        function openModal() {
          modal.classList.add("open");
          modal.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden";
          modal.querySelector("#event-modal-close")?.focus();
        }

        function closeModal(permanent) {
          modal.classList.remove("open");
          modal.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
          sessionStorage.setItem(SEEN, "1");
          if (permanent) localStorage.setItem(NOSH, "1");
        }

        if (!sessionStorage.getItem(SEEN) && !localStorage.getItem(NOSH)) {
          setTimeout(openModal, 900);
        }

        modal.querySelector("#event-modal-close")?.addEventListener("click", () => closeModal(false));
        modal.querySelector("#event-modal-noshow")?.addEventListener("click", () => closeModal(true));
        modal.querySelector("#event-modal-cta")?.addEventListener("click", () => closeModal(false));
        modal.addEventListener("click", e => { if (e.target === modal) closeModal(false); });
        document.addEventListener("keydown", e => {
          if (e.key === "Escape" && modal.classList.contains("open")) closeModal(false);
        });
        modal.addEventListener("keydown", e => {
          if (!modal.classList.contains("open") || e.key !== "Tab") return;
          const f = [...modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')];
          if (!f.length) return;
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
        });
      }

      // Lightbox pour les galeries d'événements (clic sur les images ec-gallery)
      document.querySelectorAll(".ec-gallery img").forEach((img) => {
        img.addEventListener("click", () => {
          const lb = document.getElementById("lightbox");
          const lbImg = document.getElementById("lightbox-image");
          if (lb && lbImg) { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
        });
      });
    }

    // Rendu initial
    renderEvents(currentLang);

    // Re-rendu à chaque changement de langue
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => renderEvents(btn.dataset.lang));
    });
  }
});