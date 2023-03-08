import { Filtre } from "./filters.js";
import { editMode } from "./edit.js";
import { modalMode } from "./modal.js";
//on appelle notre fonction qui créé nos filtres
await Filtre();
//on appelle notre fonction qui vérifie si on est connecté et active le mode edition de la page
editMode();
//on appelle notre fonction qui permet d'ouvrir la boite modal
modalMode();

// récuperation des works depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();


function genererWork(works){
    console.log(works);

    for (let i = 0; i <works.length; i++) {

        const article = works[i];

        // Récupération de l'élément du DOM accueillant les contenus générés
        const sectionGallery = document.querySelector(".gallery");

        // Création d’une balise dédiée à un contenu
        const contenuElement = document.createElement("figure");

         // Création des balises 
         const imageElement = document.createElement("img");
         imageElement.setAttribute("class", "modalImg");
         imageElement.src = article.imageUrl;
         const titleElement = document.createElement("figcaption")
         titleElement.innerText = article.title;

         // On rattache les balises à la section gallery
         sectionGallery.appendChild(contenuElement);
         contenuElement.appendChild(imageElement);
         contenuElement.appendChild(titleElement);
    }
}

genererWork(works);
//On cible le bouton Objets
const boutonFilters = document.querySelectorAll(".filters button");
console.log(boutonFilters);
boutonFilters.forEach(function(button){
    button.addEventListener("click",function(event){
        let categoryId = event.currentTarget.getAttribute("data-id");  
        // On met une réaction au clic utilisateur avec une condition déstiné au bouton "Tous" qui nous permet d'afficher la page avec tous les éléments
        if(categoryId == "0"){
            document.querySelector(".gallery").innerHTML ="";
            return genererWork(works);
        }
        // On met une réaction au click utilisateur qui ressort uniquement les "works" faisant partie de la catégorie ciblé
        const worksFilterObjets = works.filter(function(works){
            return works.category.id == categoryId;
        });
        document.querySelector(".gallery").innerHTML ="";
        genererWork(worksFilterObjets);
    })
});