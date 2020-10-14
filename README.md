# VueJs Module Federation  Microfrontend

Cet exemple montre l'utilisation du Module Federation en cas de partage de bundle Webpack, basant sur le process d'architecure Micro Frontend. 

## HOST AND REMOTE

L'application `microfrontend-app-one` dépend d'un composant `Header` exposé par l'application  ` microfrontend-app-two`.

---

# Running Demo

Run `yarn start` . Cela permet de build et serve  `microfrontend-app-one` et `microfrontend-app-two` à la fois via les ports 3001 et 3002 respectivement.

- HOST (microfrontend-app-one): [localhost:3001](http://localhost:3001/)
- REMOTE (microfrontend-app-two): [localhost:3002](http://localhost:3002/)
