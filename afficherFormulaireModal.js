export function afficherFormulaireModal(){

    const openForm = function(e){
        let divModal =document.querySelector('.centerModal');
        divModal.style.display = "none";

        let divForm = document.querySelector('.ajout-photo-formulaire');
        divForm.style.display = null;

        let arrowBack = document.querySelector('.fa-arrow-left');
        arrowBack.style.display = null;
        let divClosingBack = document.querySelector('.closing')
        divClosingBack.querySelector('.goback').addEventListener('click', returnModal);
    }

    const returnModal = function(e){

        let divModal =document.querySelector('.centerModal');
        divModal.style.display = null;

        let divForm = document.querySelector('.ajout-photo-formulaire');
        divForm.style.display = "none";

        let arrowBack = document.querySelector('.fa-arrow-left');
        arrowBack.style.display = "none";
        
        let divClosingBack = document.querySelector('.closing')
        divClosingBack.querySelector('.goback').removeEventListener('click', returnModal);
    }

    document.querySelectorAll('.ajout').forEach(button => {
        button.addEventListener("click", openForm);
    })

    
}