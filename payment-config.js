// ══════════════════════════════════════════════════════════════════════════════
//  CONFIGURATION PAIEMENTS — Modifie ce fichier pour activer les paiements
//
//  COMMENT OBTENIR LE CLIENT ID PAYPAL :
//  ────────────────────────────────────────────────────────────────────────────
//  1. Crée un compte PayPal Business sur https://business.paypal.com (gratuit)
//  2. Va sur https://developer.paypal.com → "My Apps & Credentials"
//  3. Clique sur "Create App" → donne un nom (ex: "Paroisse Regina Apostolorum")
//  4. Copie le "Client ID" de la section "Live" (pas Sandbox)
//  5. Colle-le ci-dessous à la place de "VOTRE_CLIENT_ID_ICI"
//
//  Méthodes acceptées automatiquement : Visa · Mastercard · Amex ·
//                                       PayPal · Google Pay · Apple Pay
//  Frais PayPal : ~1.9% + 0.35€/transaction (tarif associatif européen)
// ══════════════════════════════════════════════════════════════════════════════

const PAYMENT_CONFIG = {
  paypal: {
    clientId: "VOTRE_CLIENT_ID_ICI",   // ← Colle ici ton Client ID PayPal Live
    currency: "EUR"
  }
};
