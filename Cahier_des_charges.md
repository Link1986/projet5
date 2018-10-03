
Cahier des charges
Projet 5


1/ Présentation globale du projet

Présentation du projet

Le projet consistera à créer un site internet, ayant pour objectif premier, la création d'un gestionnaire de liste de tâches. 
A travers ce gestionnaire, le but sera de reprendre les acquis du Projet 4 du parcours développeur web junior.
C'est à dire l'utilisation du PHP, et du modèle MVC, mais de manière plus professionnelle, à l'aide d'un framework PHP. 
Le choix du Framework s'est porté sur SYMFONY.

Les objectifs du site

L'un des objectif premier, est de créer un gestionnaire de tâches, permettant au visiteur ou au membre de pouvoir créer une liste et de suivre  celle-ci à travers une interface réalisé.
Ainsi il est possible de créer une liste de tâche et de la modifier au fur et à mesure de son exécution, grâce à une combinaison de langages web.
La structure est un CRUD (Create – Read - Update  - Delete).
 Le second objectif sera de compléter mon apprentissage et renforcer mes compétences en PHP et MVC.

Les objectifs qualitatifs

L'objectif au niveau design sera d'obtenir un site de qualité, si possible ; c'est à dire un design simple et intuitif, répondant aux exigences actuelles des sites web, ceci grâce à l'utilisation de Bootstrap, du CSS, mais aussi en essayant de respecter au mieux, les règles de conception de site internet vues précédemment dans le parcours.

Les langages mis en œuvre

Utilisation du langage HTML, pour la structure du site, ensuite utilisation du Framework Bootstrap et du langage CSS pour le graphisme, utilisation de Javascript, pour la création d'éléments interactifs.
Concernant l'utilisation de PHP, elle se fera suivant le modèle MVC

Périmètre du projet

L'objectif est de créer un site fonctionnel, et répondant au cahier des charges, chaque aspect du site doit être abordé, et mis en place du mieux possible ; cependant, il faut calibrer le site, sur un certain nombre d'heures et de temps, pour éviter de se perdre dans un projet énorme, dès le départ, il faudra donc juger les fonctionnalités nécessaires, et celle qui ne le sont pas, pour ne pas déborder de ses compétences.





2/Organisation et mise en place du site

La charte graphique

Le site sera le plus simple possible au départ, avec possibilité, d'image et de visuel, si possible présence d'exemples, montrant comment créer un projet et son affichage, le site en lui même restera classique, c'est à dire une séparation avec un menu et des sections, possibilité d'effets en CSS ou Javascript si nécessaire, selon les délais.

La séparation du site

La séparation du site se fera dans un premier temps, avec une partie Frontend, celle-ci comportera, une page d'accueil, le visiteur sera considéré comme un invité, il  aura un accès limité au site.
Il existera sur le site un espace d'inscription permettant au visiteur de créer un compte membre ; ainsi il faudra créer un espace membre dédié, afin que le membre une fois connecté puisse avoir accès à des fonctionnalités, lui permettant de créer, sauvegarder et modifier ses listes de tâches.
De plus, il faudra mettre en place un espace d'administration, afin de faciliter la gestion du site pour l'administration, c'est à dire qu'il faudra créer des cheminements, qui faciliterons les tâches d'administrations, comme cela a été fait dans le projet 4.

Mise en place du travail

Il faudra mettre en place un travail préparatoire, c'est à dire s'organiser pour mettre en place une ébauche du site, et prévoir un temps nécessaire à la prise en main de SYMFONY, il faudra aussi élaborer le graphisme du site avec une phase de test, ainsi la meilleure méthode sera de découper le travail si possible en partie, et créer une séparation du travail.





3/Mise en place des pages du site

La page d'accueil

Structure classique pour le site :

1. Menu
2. Contenu
3. Sections
4. Footer
5. Possibilité d'ajout d'images correspondant au menu

La partie invité

1. Exemple de création sur la page d'accueil
2. Pas de possibilité de sauvegarder 
3. Pas de suivi 
4. Pas de console membre

La partie membre

1. Peut créer un nouvelle liste
2. Limitation du nombre de listes
3. Peut modifier la liste
4. Peut sauvegarder la liste sur le BDD
5. CRUD sur la liste
6. Affichage des tâches dans l'espace membre

La partie admin

1. Console admin
2. peut voir les projets
3. possibilité de stats
4. création de diverses fonctionnalités
