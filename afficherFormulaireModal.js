export function afficherFormulaireModal(){

    const openForm = function(e){
        let divModal =document.querySelector('.centerModal');
        divModal.style.display = "none";

        let divForm = document.querySelector('.ajout-photo-formulaire');
        divForm.style.display = null;

        let arrowBack = document.querySelector('.fa-arrow-left');
        arrowBack.style.display = null;
        let divClosingBack = document.querySelector('.closing');
        divClosingBack.querySelector('.goback').addEventListener('click', returnModal);

        let uploadImageField = document.getElementById('upload-image').addEventListener('input',showPreview);

    }

    const returnModal = function(e){

        let divModal =document.querySelector('.centerModal');
        divModal.style.display = null;

        let divForm = document.querySelector('.ajout-photo-formulaire');
        divForm.style.display = "none";

        let arrowBack = document.querySelector('.fa-arrow-left');
        arrowBack.style.display = "none";
        
        let divClosingBack = document.querySelector('.closing');
        divClosingBack.querySelector('.goback').removeEventListener('click', returnModal);
    }

    let ajoutWork = document.querySelector('.ajout');
        if(ajoutWork){
            ajoutWork.addEventListener("click", openForm);
    }

    function showPreview(event){
        if(event.target.files.length > 0){
          let src = URL.createObjectURL(event.target.files[0]);
          let preview = document.getElementById("img-preview");
          preview.src = src;
          let iconUpload = document.getElementById('upload-icone');
          iconUpload.style.display = 'none';
          let inputUpload = document.getElementById('ajout-photo-form');
          inputUpload.style.display ='none';
          let textUpload = document.getElementById('text-img-upload-form');
          textUpload.style.display ='none';
        }
      }
      
        
}