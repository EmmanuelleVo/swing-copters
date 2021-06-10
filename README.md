# Examen de MMI - Septembre 2020

## Énoncé
L’examen consiste en la réalisation du jeu Swing-Copters.
Ce jeu est une création des studios .gears, déjà responsables de Flappy Bird.
Une [vidéo](https://www.youtube.com/watch?v=zthLYafrgsE) vous montre le jeu en fonctionnement.

Construct, un éditeur d’un environnement de développement Wysiwig de jeux a [un tutoriel complet](https://www.construct.net/en/tutorials/swing-copters-from-ground-1325) sur son site, vous y trouverez sans doute des indications utiles à la réalisation de votre jeu, comme par exemple, la taille du canvas, 432 x 768.

Le présent dossier contient un sous-dossier avec les images et les sons nécessaires. Attention, les images ne sont pas reprises en un seul sprite comme c’était le cas avec Flappy Bird. C’est plus simple pour le rendu, mais ça demande un peu d’adaptation.

Il est peu probable que vous réalisiez ce jeu _complètement_ en 4 heures. Essayez donc d’aller le plus loin possible. Au minimum, il faut parvenir à faire monter le personnage en le maintenant dans l’écran (donc, aussi, de détecter les collisions avec les bords), conformément à la physique et à l’animation montrées dans la vidéo d’exemple. En pratique, le personnage reste toujours à la même hauteur, ce sont les éléments du décor qui défilent vers le bas qui donnent l’impression que le personnage va vers le haut. Avant toute chose, je vous suggère d’afficher le sol visible au début du jeu et une fois que le clic initial lance le jeu, de faire l’animation des nuages qui traversent l’écran du haut vers le bas à intervalle régulier, afin d’avoir cette impression de mouvement vers le haut du personnage.

Au début du jeu, le personnage s’envole et une accélération le pousse vers la droite. Pour le maintenir dans les limites de l’écran, le joueur doit simplement cliquer, n’importe où. Le clic inverse l’accélération appliquée au personnage. En multipliant les clics, le personnage est maintenu dans le jeu. Si on tarde à recliquer pour inverser l’accélération, sa vitesse grandit et le risque augmente qu’il cogne un des bords. Sa vitesse verticale subit aussi dans les premières secondes une accélération (il passe de 0 à y), mais il est limité très vite à une vitesse maximale.

De manière périodique des obstacles apparaissent dans le jeu, comme les tubes de Flappy Bird. Ceux-ci sont animés.

Votre objectif est d’arriver à réaliser la version la plus conforme au modèle, sans vous soucier de gérer les scores et les écrans qui constituent habituellement le [HUD](https://en.wikipedia.org/wiki/Heads-up_display_(video_games)).
