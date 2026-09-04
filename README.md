# 🎬 Jellyfin Customizations

*Mes personnalisations et plugins pour [Jellyfin](https://jellyfin.org/), un serveur multimédia open-source.*

---

## 📌 À propos de ce dépôt

Ce dépôt contient :
- **Mes thèmes CSS personnalisés** pour Jellyfin.
- **Mes plugins personnalisés** ou modifiés.
- **Mes configurations** (ex: métadonnées, scripts, ou fichiers de configuration).
- **Mes ajustements UI/UX** pour améliorer l'expérience utilisateur.

> ⚠️ **Ce dépôt est destiné à un usage personnel**, mais tu es libre de t'en inspirer ou de l'utiliser pour tes propres besoins.

---

## 📂 Structure du dépôt
   Dossier/Fichier       | Description                                                                                     |
 |-----------------------|-------------------------------------------------------------------------------------------------|
 | `CSS/`                | Fichiers CSS pour personnaliser l'apparence de Jellyfin (thèmes, couleurs, etc.).          |
 | `CSS/Min/`            | Versions minifiées des fichiers CSS (générées automatiquement via GitHub Actions).          |
 | `Plugins/`            | Plugins personnalisés ou modifiés pour Jellyfin.                                               |
 | `Config/`             | Fichiers de configuration (ex: `system.xml`, `plugins/`).                                    |
 | `Scripts/`            | Scripts utilitaires (ex: automatisation, backup, etc.).                                      |
 | `README.md`           | Ce fichier.                                                                                     |

---

## 🎨 Personnalisations incluses

### 1. **Thèmes CSS**
- **`ElegantFin-theme.css`** : Un thème inspiré de [ElegantFin](https://github.com/lscambo13/ElegantFin), avec des ajustements personnels (couleurs, tailles, animations).
- **`custom-ui.css`** : Modifications de l'interface utilisateur (ex: boutons, cartes, menus).

> 🔹 *Les fichiers CSS sont automatiquement minifiés via [GitHub Actions](#-automatisation) et stockés dans `CSS/Min/`.*

### 2. **Plugins**
- **`Plugin1/`** : Description courte du plugin (ex: "Ajoute une fonctionnalité X").
- **`Plugin2/`** : Autre plugin personnalisé.

> 🔹 *Les plugins sont conçus pour fonctionner avec Jellyfin **v10.8.0+** (à adapter selon ta version).*

### 3. **Configurations**
- **`system.xml`** : Exemple de configuration système.
- **`plugins/`** : Configuration des plugins (ex: chemins, permissions).

---

## 🚀 Installation

### 1. **Utiliser un thème CSS**
1. Copie le fichier CSS de ton choix depuis `CSS/` (ex: `ElegantFin-theme.css`).
2. Dans Jellyfin :
   - Va dans **Tableau de bord > Apparence**.
   - Ajoute le CSS personnalisé dans le champ dédié ou via un plugin comme **Custom CSS**.
3. (Optionnel) Si tu utilises la version minifiée, prends le fichier dans `CSS/Min/`.

### 2. **Installer un plugin personnalisé**
1. Copie le dossier du plugin (ex: `Plugins/Plugin1/`) dans le dossier des plugins de Jellyfin :
   - **Chemin par défaut** : `/var/lib/jellyfin/plugins/` (Linux) ou `C:\Program Files\Jellyfin Server\plugins\` (Windows).
2. Redémarre Jellyfin :
   ```bash
   sudo systemctl restart jellyfin
