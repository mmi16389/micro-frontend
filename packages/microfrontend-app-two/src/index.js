// Ce «bootstrap» donne à Webpack la possibilité de traiter le reste des importations
// avant d'exécuter l'application et évitera les conditions
// de concurrence potentielles lors de l'importation de tous les code.s

import('./main')
