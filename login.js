function userConexion(){
    //On cible le bouton conexion
    let myForm = document.getElementById("myForm");
    //On met un evenement au click ou sur la touche "entrée"
    myForm.addEventListener("submit", function(event){

        let inputs = document.getElementsByTagName("input");
        let myError;
        //on vérifie que les champs sont remplies
        for(let input of inputs){
            if (!input.value){
                 myError = "Veuillez renseigner tous les champs";
            }
        }
        //on retourne une erreur si les champs sont
        if(myError) {
            event.preventDefault()
            document.getElementById("error").innerHTML = myError;
            document.getElementById("error").style.color = "red";
            return false;
        }
        else{
            event.preventDefault()
        //on récupere les infos dans le but de les envoyer
        let user = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=password]").value
        };
        // Création de la charge utile au format JSON
        let chargeUtile = JSON.stringify(user);
        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:5678/api/users/login", {
            method: "post",
            headers:{"Content-Type": "application/json", "accept": "application/json"},
            body: chargeUtile
        }).then(async function(response){
            if(response.ok){
                let contenu = await response.json();
                localStorage.setItem("responseID", contenu.token);
                document.location.href="./index.html";
            }else{
                window.alert("Veuillez entrez des id corrects BANDE DE MECHANTS")
            }
        });
        }
    });   
}

userConexion();