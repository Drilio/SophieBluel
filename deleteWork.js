export function deleteWorkModal() {

    let userToken = window.localStorage.getItem("responseToken");
    function deleteWork(e) {
        let categoryId = e.currentTarget.getAttribute("data-id")
        if (userToken) {
            console.log(categoryId)
            fetch(`http://localhost:5678/api/works/${categoryId}`, {
                method: "DELETE",
                headers: {
                    "accept": "*/*",
                    "Authorization": `Bearer ${userToken}`
                }
            }).then()
            .then(() => {
            document.getElementById(categoryId).innerHTML = "";
            home.remove();
            })
        }
    }

    document.querySelectorAll(".trash-button").forEach(button => {
        button.addEventListener("click", deleteWork,);
    })
}