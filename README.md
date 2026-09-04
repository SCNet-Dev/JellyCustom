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

> 🔹 *Merci à [@lscambo13](https://github.com/lscambo13) pour son travail sur ElegantFin !*
> 🔹 *Merci à [@n00bcodr](https://github.com/n00bcodr) pour son travail sur Jellyfin Enhanced !*

---

## 📂 Structure du dépôt
   Dossier/Fichier       | Description                                                                                     |
 |-----------------------|-------------------------------------------------------------------------------------------------|
 | `CSS/`                | Fichiers CSS sources pour personnaliser l'apparence de Jellyfin.                              |
 | `CSS/Min/`            | Versions minifiées des fichiers CSS (générées automatiquement via GitHub Actions).          |
 | `Javascript/`         | Plugins personnalisés ou modifiés pour Jellyfin.                                               |
 | `Scripts/`            | Scripts utilitaires (ex: automatisation, backup, etc.).                                      |

---

## 🚀 Installation du thème

---

### 1. **Installer le thème CSS personnalisé**
#### Méthode recommandée (via CDN) :
1. Dans Jellyfin, va dans :
   **Tableau de bord > Apparence > Slogan > Code CSS personnalisé**.
2. Ajoute la ligne suivante :
   ```css
   @import url("https://cdn.jsdelivr.net/gh/SCNet-Dev/JellyCustom@main/CSS/Min/Jellyfin-CSS-Custom.min.css");
