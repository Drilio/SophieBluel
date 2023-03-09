export function editMode(){
// On va chercher les infos sur le localStorage
let userToken = window.localStorage.getItem("responseToken");
//on regarde s'il existe bien un Token en local storage et si c'est le cas on active le mode édition
if(userToken){
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
    
}
}