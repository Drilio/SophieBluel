export function deleteWorkModal() {
    // on check si le token est bien généré
    let userToken = window.localStorage.getItem("responseToken");
    function deleteWork(e) {
        // on recupere le data id de l'element ciblé
        let categoryId = e.currentTarget.getAttribute("data-id");
        //si il y a bien un token on supprime l'element ciblé
        if (userToken) {
            fetch(`http://localhost:5678/api/works/${categoryId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${userToken}`
                }
            }).then()
            .then(() => {
                console.log(categoryId);
                //on supprime l'element de la modal et de la galerie
                let elementToRemove = document.querySelectorAll(`[data-item-id="${categoryId}"]`);
                console.log(elementToRemove);
                for(let element of elementToRemove){
                    element.remove();
                }
            })
        }
    }

    document.querySelectorAll(".trash-button").forEach(button => {
        button.addEventListener("click", deleteWork,);
    })
}