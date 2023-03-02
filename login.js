function userConexion(){
    //On cible le bouton conexion
    let conexionElement = document.querySelectorAll("section .connect button");
    //On met un evenement au click ou sur la touche "entrée"
    conexionElement.addEventListener("submit", function(event){
        //on récupere les infos
        let user = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=password]").value
        };
        // Création de la charge utile au format JSON
        let chargeUtile = JSON.stringify(user);
         // Appel de la fonction fetch avec toutes les informations nécessaires
         fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: chargeUtile
         });
    });   
}