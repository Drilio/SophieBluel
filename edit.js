export function editMode(){
// On va chercher les infos sur le localStorage
let userToken = window.localStorage.getItem("responseToken");

// on verifie que ça fait - de 24h00 que l'utilisateur c'est connecté 
let lastConexion = window.localStorage.getItem('DerniereConnexion');
let now = new Date();
let createdAt = new Date(Date.parse(lastConexion.toString()));
let oneDay = 24*60*60*1000;
if((now - createdAt) > oneDay){
    const errors = {
        User: 'Session has expired, please reconect',
      };
      throw new HttpException({ errors }, HttpStatus.UNPROCESSABLE_ENTITY);

    } else if(userToken){
    //on regarde s'il existe bien un Token en local storage et si c'est le cas on active le mode édition
    // On fait apparaitre la partie edition du haut de la page
    let sectionEdit = document.querySelector(".edit");
    sectionEdit.setAttribute("style", "display : flex");
    // on supprime la marge audessus de la partie edition
    let header = document.querySelector("header");
    header.setAttribute("style", "margin-top : 0px");
    // on fait disparaitre les filtres
    let filters = document.querySelector(".filters");
    filters.setAttribute("style", "display: none;");
    // on fait apparaitre la partie modification
    let modifier = document.querySelector(".modifier");
    modifier.setAttribute("style","display:flex;")
    //on transforme login en logout
    let logout = document.getElementById('menu-log');
    logout.innerHTML='logout' 
    
}
}