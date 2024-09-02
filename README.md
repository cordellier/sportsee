# SportSee 🎯

Bienvenue dans le projet **SportSee** ! 🏋️‍♂️ Ce projet a pour but de créer une page de profil utilisateur dynamique pour suivre les sessions d'activité et les calories brûlées. Le développement est réalisé avec **React** et intègre des graphiques interactifs. 📊

## 🚀 Objectifs du Projet

- 🖥️ **Créer** une page profil utilisateur avec **React**.
- 📈 **Afficher** des graphiques sur les sessions d'activité et les calories brûlées.
- 💻 **Optimiser** l'interface pour des écrans d'au moins **1024x780 pixels**.
- 🔄 **Permettre** le basculement entre données simulées et réelles via une **API**.

## 🛠 Prérequis

- 🟢 **Node.js** (v16 ou supérieur recommandé)
- 🧶 **Yarn** (ou npm)
- 🖌️ **Accès à la maquette** https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0-1&node-type=CANVAS&t=jxCIlryrvGFByDIB-0

## 📥 Installation

1. **Cloner le dépôt** 🛠️ :

   git clone https://github.com/cordellier/sportsee

2. **Accéder au répertoire du projet** 🗂️ :

   cd sportsee

3. **Installer les dépendances** 📦 :

   yarn install

## 🚀 Démarrage du Projet

### **Démarrer le Serveur de Développement** 🖥️

Pour lancer le serveur de développement et ouvrir le front-end dans votre navigateur :

yarn dev

## 🔄 Basculer entre Données Simulées et API Réelle

Le projet permet de basculer facilement entre les **données simulées** et les **données réelles** de l'API. Voici comment faire :

### Pour utiliser les données sur simulées 🧪 :

1. Ouvrez le fichier `./src/config.js`.
2. Modifiez la ligne suivante pour qu'elle soit définie sur `true` :

   export const USE_MOCK_DATA = true; // Changez ceci en false pour utiliser l'API réelle

### Pour utiliser les données réelles de l'API 🌐 :

1. Modifiez la ligne ci-dessus pour la définir sur `false` :

   export const USE_MOCK_DATA = false; // Changez ceci en true pour utiliser les données simulées

2. **Lancer le projet** :

   yarn dev
