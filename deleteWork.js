export function deleteWorkModal() {

    let userToken = window.localStorage.getItem("responseToken");
    function deleteWork(e) {
        let categoryId = e.currentTarget.getAttribute("data-id");
        if (userToken) {
            fetch(`http://localhost:5678/api/works/${categoryId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${userToken}`
                }
            }).then()
            .then(() => {
                console.log(categoryId);
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