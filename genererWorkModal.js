export async function genererWorkModal() {
    const reponse = await fetch("http://localhost:5678/api/works");
    let works = await reponse.json();
    function genererModalWork(works) {
    
            let userToken = window.localStorage.getItem("responseToken");
            if (userToken) {
                for (let work of works) {

                    const article = work;

                    // Récupération de l'élément du DOM accueillant les contenus générés
                    const sectionGallery = document.querySelector(".modal-img-portefolio");

                    // Création d’une balise dédiée à un contenu
                    const contenuElement = document.createElement("figure");
                    contenuElement.dataset.id = work.id;
                    contenuElement.setAttribute('class', "modal-figure")

                    // Création des balises 
                    const imageElement = document.createElement("img");
                    imageElement.src = article.imageUrl;
                    //création du bouton qui va contenir l'element à supprimer
                    const buttonTrash = document.createElement("button");
                    buttonTrash.setAttribute('data-id', work.id);
                    buttonTrash.setAttribute('class', "trash-button");
                    const trashElement = document.createElement("i");
                    trashElement.setAttribute('class', "fa-regular fa-trash-can delete");
                    const editerElement = document.createElement("button");
                    editerElement.innerText = "éditer";

                    // On rattache les balises à la section modal
                    sectionGallery.appendChild(contenuElement);
                    contenuElement.appendChild(imageElement);
                    contenuElement.appendChild(buttonTrash);
                    buttonTrash.appendChild(trashElement);
                    contenuElement.appendChild(editerElement);
                }
            
        }
    }
    genererModalWork(works);
}