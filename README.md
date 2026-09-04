# 🎬 Jellyfin Customizations

*Mes personnalisations pour [Jellyfin](https://jellyfin.org/), un serveur multimédia open-source.*

---

## 📌 À propos de ce dépôt

Ce dépôt contient :
- **Mes thèmes CSS personnalisés** pour [ElegantFin](https://github.com/lscambo13/ElegantFin) et [Jellyfin Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced).
- **Mon JavaScript personnalisé** pour [ElegantFin](https://github.com/lscambo13/ElegantFin) et [Jellyfin Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced).
- **Mes scripts pour JellyFin**

> ⚠️ **Ce dépôt est destiné à un usage personnel**, mais tu es libre de t'en inspirer ou de l'utiliser pour tes propres besoins.

---

## 🎨 Thème principal : **Jellyfin-CSS-Custom**
Ce thème importe automatiquement **[ElegantFin](https://github.com/lscambo13/ElegantFin)**, et effectue des ajustements personnels pour :
- Les couleurs et les contrastes.
- Les tailles et les animations des éléments (boutons, cartes, menus).
- L'affichage des métadonnées (genres, notes, etc.).
- L'optimisation pour les écrans mobiles et TV.

> 🔹 *Merci à [@lscambo13](https://github.com/lscambo13) pour son travail sur ElegantFin et à [@n00bcodr](https://github.com/n00bcodr) pour son travail sur Jellyfin Enhanced et Javascript Injector !*

---

## 🚀 Installation du thème

---

### 1. **Installer le thème CSS personnalisé**
#### Méthode recommandée (via CDN) :

1. Installe les plugins [Jellyfin Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced) et [Javascript Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector)
1. Dans Jellyfin, va dans :
   **Tableau de bord > Apparence > Slogan > Code CSS personnalisé**.
2. Ajoute la ligne suivante :
   ```css
   @import url("https://cdn.jsdelivr.net/gh/SCNet-Dev/JellyCustom@main/CSS/Min/Jellyfin-CSS-Custom.min.css");
3. Dans Jellyfin, va dans :
   **Tableau de bord > JS Injector.
4. Ajoute un script, nomme-le selon ton désir et ajoute le contenu du fichier javascript.

> ⚠️ **Le thème custom importe automatiquement ElegantFin. L'installation manuelle de ce dernier n'est pas nécessaire.
> 
---

## 📂 Structure du dépôt
   Dossier/Fichier       | Description                                                                                     |
 |-----------------------|-------------------------------------------------------------------------------------------------|
 | `CSS/`                | Fichiers CSS sources pour personnaliser l'apparence de Jellyfin.                              |
 | `CSS/Min/`            | Versions minifiées des fichiers CSS (générées automatiquement via GitHub Actions).          |
 | `Javascript/`         | Javascript.                                               |
 | `Scripts/`            | Scripts utilitaires (ex: automatisation, backup, etc.).                                      |
