// récuperation des pièces depuis l'API
const reponse = await fetch("http://localhost:5678/api/categories");
const filters = await reponse.json();

function genererFilters(filters){
    // Récupération de l'élément du DOM accueillant les contenus générés
    const sectionGallery = document.querySelector(".filters");
    //Generation du bouton "tous"
    const filterElementTous = document.createElement("button");
    filterElementTous.dataset.id = "0";
    filterElementTous.innerText = "Tous";
    sectionGallery.appendChild(filterElementTous)
    
    for (let filter of filters){
            // Création d’une balise dédiée à un element
            const filtersElement = document.createElement("button");
            //on lui donne un ID
            filtersElement.dataset.id = filter.id;
            //on itere le contenu de notre html avec le tableau le nom de l'element
            filtersElement.innerText = filter.name;
            // On rattache les balises à la section gallery
            sectionGallery.appendChild(filtersElement);
        }
    }

genererFilters(filters);
