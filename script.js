let hide_bar = true;
function bars() {
    document.querySelector("#bars").addEventListener("click", () => {
        if (hide_bar) {
            document.querySelector("aside").style.display = "flex";
            hide_bar=false
        }
        else {
            document.querySelector("aside").style.display = "none";
            hide_bar = true;
        }
    })
}
bars();   //caling the parent bars funtion for default use
