export function addWork() {
    //On cible bouton valider du formulaire
    let myForm = document.getElementById('formulaire-ajout-id');
    //On met un evenement au click ou sur la touche "entrée"
    myForm.addEventListener("submit", function (event) {
        let inputs = document.getElementsByClassName(".js-form-add-work");
        let myError;
        let userToken = window.localStorage.getItem("responseToken");
        //on vérifie que les champs sont remplies
        for (let input of inputs) {
            console.log(inputs)
            if (!input.value) {
                myError = "Veuillez renseigner tous les champs";
            }
        }
        //on retourne une erreur si les champs sont
        if (myError) {
            event.preventDefault()
            document.getElementById("error").innerHTML = myError;
            document.getElementById("error").style.color = "red";
            return false;
        }
        else {
            event.preventDefault()
            let mySelection = document.getElementById('categorie');
            let myCategoryId = mySelection.options[mySelection.selectedIndex].getAttribute('data-id');
            // Création de la charge utile au bon format
            let formData = new FormData(myForm);
            formData.set("category", myCategoryId);
            
            // Appel de la fonction fetch avec toutes les informations nécessaires
            fetch("http://localhost:5678/api/works", {
                method: "post",
                headers: {"Authorization": `Bearer ${userToken}`},
                body: formData
            })
                //verifier qu'il a une réponse et la renvoie en json
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                })
                //traitement de la réponse
                .then(function (contenu) {
                    console.log(contenu);
                    const article = contenu;
                    console.log(article)

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

                    const sectionGalleryModal = document.querySelector('.modal-img-portefolio')
                    // Création d’une balise dédiée à un contenu Modal
                    const contenuModalElement = document.createElement("figure");
                    contenuModalElement.dataset.id = article.id;
                    contenuModalElement.setAttribute('class', "modal-figure")
                    // Création des balises 
                    const imageModalElement = document.createElement("img");
                    imageModalElement.src = article.imageUrl;
                    // création de la div qui va contenir les buttons
                    const divButton = document.createElement('div');
                    divButton.setAttribute('class', 'div-button')
                    //création du bouton qui va contenir l'element à supprimer
                    const buttonTrash = document.createElement("button");
                    buttonTrash.setAttribute('data-id', article.id);
                    buttonTrash.setAttribute('class', "trash-button");
                    const trashElement = document.createElement("i");
                    // création du bouton flêche
                    trashElement.setAttribute('class', "fa-regular fa-trash-can delete");
                    const arrowElement = document.createElement("i");
                    arrowElement.setAttribute('class','fa-solid fa-arrows-up-down-left-right')
                    const editerElement = document.createElement("button");
                    editerElement.innerText = "éditer";
                    // On rattache les balises à la section modal
                    sectionGalleryModal.appendChild(contenuModalElement);
                    contenuModalElement.appendChild(imageModalElement);
                    contenuModalElement.appendChild(divButton)
                    divButton.appendChild(arrowElement);
                    divButton.appendChild(buttonTrash);
                    buttonTrash.appendChild(trashElement);
                    contenuModalElement.appendChild(editerElement);

                    //on nettoie le formulaire
                    myForm.reset();
                
                })
                // si l'authentification n'a pas fonctionné
                .catch(function (error) {
                    console.log(error);
                    window.alert("Un problème est survenue lors de l'ajout, veuillez reessayer.")
                });
        }
    });
}



