# React Hooks 🪝

> [Hooking]: A **hook**, in programming is a method that modifies an application's behaviour using callback functions. [Wikipedia](https://fr.wikipedia.org/wiki/Webhook)

There are many kinds of hooks in programming in many different contexts.

In React, before version [v16.8 (06/02/2019)](https://github.com/facebook/react/releases/tag/v16.8.0) components were created using classes or functions.
Classes components were mandatory when there was any kind of lifecycle or state management.
Nonetheless, class components are verbose and not very straightfoward to convert to and from function components in case of a refactoring.
The introduction of **Hooks**, in version `v16.8` allowed the complete remplacement of class based components to function based components.
The React team created some **hooks** to manage lifecycle components and many libraries introduced them in order to interact with the library.

This repo contains information on a few of the them.

## Contents

### Presentation

[Reveal.js](https://revealjs.com/) was used to create a presentation.

To launch the presentation:

0. Make sure [npm](https://nodejs.org/en/download/) is isntalled, by running `npm --version` on your terminal.
1. Execute the following commands

```sh
# Launch presentation

cd reveal.js
npm install
npm start
```

2. Next, open [the presentation](http://localhost:8000/) in `localhost:8000`.

### Examples

A few examples can ba found in the folder `/hooks`.
Each folder is an entire React application.
If you wish to launch it:

0. Make sure [npm](https://nodejs.org/en/download/) is installed.
1. Execute the following commands

```sh
# Launch React applications

cd hooks/<hook>
npm install
npm start
```

2. Next, you can open the application on `localhost:3000`.

Each **hook** implements a different fonctionality that can be observed in code, browser or in the console.

## Contributions

Any suggestions, corrections and questions are more than welcome in the issues tab.
