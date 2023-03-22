// récuperation des pièces depuis l'API
export async function selectionUpload() {
    const reponse = await fetch("http://localhost:5678/api/categories");
    const options = await reponse.json();
    // Récupération de l'élément du DOM accueillant les contenus générés
    const optionSelection = document.querySelector("select");
    //on créé la première option vide
    const emptyOption = document.getElementById('placeholder');
    emptyOption.innerHTML= "";

    for (let option of options) {
        // Création d’une balise dédiée à un element
        const optionsElement = document.createElement("option");
        //on lui donne un ID
        optionsElement.dataset.id = option.id;
        //on itere le contenu de notre html avec le tableau le nom de l'element
        optionsElement.innerText = option.name;
        // On rattache les balises à la section select
        optionSelection.appendChild(optionsElement);
    }
}