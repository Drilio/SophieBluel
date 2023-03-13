import {deleteWorkModal} from "./deleteWork.js";



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
                    // contenuElement.dataset.id = work.id;
                    contenuElement.setAttribute('class', "modal-figure")

                    // Création des balises 
                    const imageElement = document.createElement("img");
                    imageElement.src = article.imageUrl;
                    // création de la div qui va contenir les buttons
                    const divButton = document.createElement('div');
                    divButton.setAttribute('class', 'div-button')

                    //création du bouton qui va contenir l'element à supprimer
                    const buttonTrash = document.createElement("button");
                    buttonTrash.setAttribute('data-id', work.id);
                    buttonTrash.setAttribute('class', "trash-button");
                    const trashElement = document.createElement("i");
                    // création du bouton flêche
                    trashElement.setAttribute('class', "fa-regular fa-trash-can delete");
                    const arrowElement = document.createElement("i");
                    arrowElement.setAttribute('class','fa-solid fa-arrows-up-down-left-right')
                    const editerElement = document.createElement("button");
                    editerElement.innerText = "éditer";

                    // On rattache les balises à la section modal
                    sectionGallery.appendChild(contenuElement);
                    contenuElement.appendChild(imageElement);
                    contenuElement.appendChild(divButton)
                    divButton.appendChild(arrowElement);
                    divButton.appendChild(buttonTrash);
                    buttonTrash.appendChild(trashElement);
                    contenuElement.appendChild(editerElement);
                }            
        } 

        //on appelle notre fonction qui permet de supprimer des elements
        deleteWorkModal();
    }
    genererModalWork(works);
}


