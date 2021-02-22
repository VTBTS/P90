player1NAME="";
player2name="";

function add(){
    player1NAME= document.getElementById("Player1");
    player1NAME= document.getElementById("Player2");

    localStorage.setItem("player1NAME", player1NAME);
    localStorage.setItem("player2name", player2name);

    window.location.replace("game2.html");
}