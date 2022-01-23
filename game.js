window.onload = function() {
    
    var start = document.getElementById("start")
    start.onmouseover = startGame;
    start.onclick = newGame;


    function startGame() {

        document.getElementById("status").innerText = "Dont Hit The Boundaries";
    }

    function newGame() {
        document.getElementById("status").innerText = "Dont Hit The Boundaries";
    }
}