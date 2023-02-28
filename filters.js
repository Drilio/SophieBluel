// récuperation des pièces depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
const filters = await reponse.json();

function extractFiltre(filters){
    for (let i = 0; i < filters.length; i++) {
    
        const article = filters[i];
        const arrayFilters = [];
        const buttonElement = article.category.name
        arrayFilters.push(buttonElement);
        const setFilters = new Set();
        setFilters.add(arrayFilters[i]);
        console.log(setFilters);
}
}

function genererFilters(filters){

        for (let i = 0; i < filters.length; i++){
            const article = filters[i];
            // Récupération de l'élément du DOM accueillant les contenus générés
            const sectionGallery = document.querySelector(".filters");
            // Création d’une balise dédiée à un contenu
            const filtersElement = document.createElement("button");
            filtersElement.innerText = article.category.name;
           
            // On rattache les balises à la section gallery
            sectionGallery.appendChild(filtersElement);
        }

    }

extractFiltre(filters);
genererFilters(filters);
