# VueJs Module Federation  Microfrontend

Cet exemple montre l'utilisation du Module Federation en cas de partage de bundle Webpack, basant sur le process d'architecture Micro Frontend. 

## HOST AND REMOTE

L'application `microfrontend-app-one` dépend d'un composant `Header` exposé par l'application  ` microfrontend-app-two`.

---

# Running Demo

Run `yarn start` . Cela permet de build et serve  `microfrontend-app-one` et `microfrontend-app-two` à la fois via les ports 3001 et 3002 respectivement.

- HOST (microfrontend-app-one): [localhost:3001](http://localhost:3001/)
- REMOTE (microfrontend-app-two): [localhost:3002](http://localhost:3002/)


# Axe d'amelioration et recherche 

- Combinaison de Webpack 5 avec la Vue CLI (Webpack 4) [webpack merge, webpack chain, vue-loader-plugin ](https://www.npmjs.com/package/vue-loader-plugin)
- Chargement dynamique Module Federation 
- Gestion des Fallback
- Consommé des composants Vue 3 vers Vue 2 vice versa....
- Autres ,...etc