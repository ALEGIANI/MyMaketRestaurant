var PrimaryHidden = document.getElementById("hidden")
function FcnHidden(){
    if(PrimaryHidden.style.display=="none") {
        PrimaryHidden.style.display="flex"
        document.getElementById("btn-hidden").style.display="none"
    } else {
        PrimaryHidden.style.display="none"
    }
}