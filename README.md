# React Hooks 🪝

> [Hooking]: Un **lien de rappel HTTP** ou **point d'ancrage Web**(**webhook** ), est en programmation une méthode permettant d'accroître ou de modifier le comportement d'une page ou application avec des fonctions de rappels personnalisées. [Wikipedia](https://fr.wikipedia.org/wiki/Webhook)

Différents bibliothèques dans la programmation utilisent des hooks pour changer le comportement d'une application.

Avant [v16.8 (06/02/2019)](https://github.com/facebook/react/releases/tag/v16.8.0) les composants React pouvaient être crées avec des classes ou des fonctions. Le besoin de gérer le cycle de vie d'un composant React demandait l'utilisation des composants en classe, par contre le code n'était pas si claire ni consis comme pour les composants en fonction. L'introduction des **Hooks** dans la `v16.8` a permis le complet remplacement des composant en classe par des composants en fonction, ce qui rend le code plus lisible, plus consis et évite le besoin de convertir les composant de classe à fonction (ou l'inverse) en cas de refactoring. Des **Hooks** ont été introduit aussi pour améliorer la performance des applications et ont été aussi adopté par les créateurs de bibliothèques.

Ce dépôt a pour objectif d'introduire les différents Hooks de la bibliothèque [React](https://reactjs.org/docs/hooks-intro.html) :

- Pour la gestion du cycle de vie d'un composant
- Pour l'amélioration de la performance d'une application

## Contenu

L'ensemble de resources disponibles lors du dérroulement de la formation.

### Diaporamas

Pour lancer les diapos:

0. S'assurer que [npm](https://nodejs.org/en/download/) est installé, avec `node --version` qui retourne une valeur
1. Exécuter les commandes suivantes

```sh
cd reveal.js
npm install
npm start
```

2. En suite ouvrir [la presentation](http://localhost:8000/) dans `localhost:8000`.

### Examples

Quelques examples de l'utilisation des Hooks se trouvent dans le dossier `/hooks`.
Chaque dossier est une application React complète, donc pour la lancer :

0. S'assurer que [npm](https://nodejs.org/en/download/) est installé, avec `node --version` qui retourne une valeur

1. Exécuter les commandes suivantes

```sh
cd hooks/<hook>
npm install
npm start
```

2. En suite ouvrir [l'application](http://localhost:8000/) dans `localhost:3000`.

Chaque **Hook** implémente une fonctionnalité distancte qui peut être aperçu dans le code, dans le navigateur ou dans la console du navigateur.
