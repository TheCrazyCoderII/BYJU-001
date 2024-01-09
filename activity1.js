//JS// #python my deal #
numeral= 0

function UpdateScore(){
    numeral= numeral+1
    document.getElementById("Score").innerHTML = "Score: " + numeral;
}
function SaveScore(){
    localStorage.setItem("Score", numeral)
}
function NextPage(){
    window.location="activity_2.html";
}

