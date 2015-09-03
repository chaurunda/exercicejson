/*
* Après une soirée organisée chez vous, vos invités ont décidé, pour s'amuser de vous noter
* sur l'ensemble de la soirée. Ils vous ont attribué une note de 0 à 20 en laissant chacun
* son prénom. Regardez comment a été mis en place la première note (en dur sur le fichier
* index.html) et reproduisez le même schéma afin d'afficher tous les utilisateurs ainsi que leur note.
*
* Instructions :
* 1 : Faire en sorte que notre script commence une fois le DOM chargé
* 2 : Effectuer une requête AJAX qui va appeler le fichier index.json
* 3 : Dans le success de notre requête, faites une boucle sur votre résultat afin de l'afficher
*     ligne par ligne (Voir l'aide plus bas).
* 4 : Insérer les résultats à la suite du résultat déjà affiché.
* 5 : Vous remarquerez qu'il y as un petit malin qui à hacké la matrice et qui a mis une note supérieure à 20.
*     Avec une condition, empêchez d'afficher cette note.
* ---------------
* AIDE :
* Voici à quoi devrait ressembler ce que vous insérez dans le DOM :
* '<li class="list-group-item"> <span class="badge">' + data[i].note + '</span>' + data[i].name + '</li>';
*
*
* N'oubliez pas de regarder la documentation que j'ai écrite. N'hésitez pas non plus à aller faire
* un tour sur la doc de jQuery.
* -- Fin du deuxième exercice --
*/
