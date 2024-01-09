function AddUser(){
    player1_name = document.getElementById("P1NI").value;
    player2_name = document.getElementById("P2NI").value;

        localStorage.setItem("player1_name", player1_name);
        localStorage.setItem("player2_name", player2_name);

        window.location = "game_page.html";
}
