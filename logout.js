export function logout(){
    let logout = document.getElementById('menu-log');
    let userToken = window.localStorage.getItem("responseToken");
    logout.addEventListener('click', function(e){
        if(userToken){
            e.preventDefault();
            localStorage.clear();
            document.location.reload()
        }
    })
}