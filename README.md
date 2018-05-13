# quetes_react
quêtes react non fil rouge

## 1 - Création de composant React
#### Challenge
Show me your property
Utilise le create-react-app pour démarrer un nouveau projet vide.
Créé un composant Author qui aura une propriété name
Au clic sur le composant <Author /> une alerte montrera le nom de l'auteur
Le composant <Author /> doit être appelé dans le composant <App />
Le code sera disponible sur un gist.

Critéres de validation
Le composant est dans une classe javascript ES6
L'appel du composant ressemble à <Author name="Bob" />
Au clic sur le composant le nom de l'auteur s'affiche

## 2 - Gestion d'état (state) et de formulaire
#### Challenge
Password complexity
Créer un composant Password qui affiche un texte en fonction de la complexité du mot de passe. Ce composant contient un formulaire avec un champ input, un bouton (de type submit) et une zone de texte (pour le texte sur la complexité).

Le texte à afficher est :

Mot de passe faible (< 6 caractères / tout en minuscule / pas de caractères spéciaux)
Mot de passe moyen (> 6 caractères / minuscules + majuscules / pas de caractères spéciaux)
Mot de passe fort (> 6 caractères / minuscules + majuscules / caractères spéciaux)
De plus, le formulaire ne pourra pas être envoyé si le mot de passe est faible, dans ce cas, une alerte s'affichera avec le message Votre mot de passe est trop faible.

Le composant <Password /> doit être appelé dans le composant <App />

Le code sera disponible sur un gist.

Critéres de validation
Le composant est dans une classe javascript ES6
L'appel du composant ressemble à <Password /> et affiche un input ainsi qu'un bouton
Si le mot de passe est trop faible le formulaire ne s'envoie pas
Le texte sur la complexité du mot de passe évolue en fonction de ce que tape l'utilisateur


## 3 - Cycle de vie
#### Challenge
C'est l'histoire de la vie, le cycle éternel !
Créer un composant React MyTimer qui affiche un timer en navigateur via le state (setInterval toutes les secondes faisant appel à this.setState()) seulement au moment où il est monté et prévient en console à chaque update effectué avec un texte du type : un update a eu lieu.

Le timer se mettra donc à jour toutes les secondes pour l'utilisateur et le un update a eu lieu sera visible toutes les secondes en console.

Pour la fonction dans le setInterval, préfère la syntaxe fléchée de l'ES6 pour conserver le this, sinon ta fonction this.setState() ne fonctionnera pas dans le setInterval.

Le ficher sera disponible via un gist.

Critéres de validation
Le composant écoute le montage du composant
Le composant écoute la mise à jour du composant

## 4 - React-Router
#### Challenge
On the route to React
Suite à la création d'un projet via le create-react-app, rajoute deux composants (Home, History) ; la navigation devra pouvoir s'effectuer sans rechargement entre ces deux pages. Il y a aura une navigation possible grâce à des liens (à la façon d'une barre de navigation), lorsque que l'URL actuelle coïncide avec le lien du bouton, le lien doit être rouge.

Le composant Home affiche Bienvenue sur l'accueil et le composant History affiche Notre histoire.

Les liens seront :

/ pour le composant Home
/notre-histoire pour le composant History
Le projet sera disponible sur Github.

Critéres de validation
La navigation se fait sans rafraichissement
Le lien de la page /notre-histoire est en rouge lorsqu'on est sur la page
