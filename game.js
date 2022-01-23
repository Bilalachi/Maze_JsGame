window.onload = function () {

    /*Once the cursor leaves the start div the game starts */
    var start = document.getElementById("start");
    start.onmouseover = startGame;
    start.onmouseleave = startGame;
    start.onclick = newGame;

    /*Once the cursor reaches the end div without touching borders the game end with a win */
    var end = document.getElementById("end");
    end.onmouseover = win;

    /*Once the cursor touches the wall the game ends with a loss */
    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = lose;
    }

    /*In case the cursor was outside the maze the game stops until player reaches start div */
    var game = document.getElementById("game");
    game.onmouseleave = outOfBound;

    /*Using the boundary example div to keep scores */
    var score = 0;
    var scores = document.getElementsByClassName("boundary example")[0];
    scores.innerHTML = `${score}`;

    /*Touch the start div to change the status and in case of previous loss reset the game by removing the red color starting the game for a new try */
    function startGame() {


        if (document.getElementById("status").innerText != "Dont Hit The Boundaries") {
            document.getElementById("status").innerText = "Dont Hit The Boundaries";
        }
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("youlose")
        }


    }

    /*Press the start div to reset the scores and reset the game */
    function newGame() {
        document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\".";
        score = 0;
        scores.innerHTML = score;

    }

    /*Changin the bounderies colors and status signaling the player's loss and deductating 10 from his score */
    function lose() {
        if (document.getElementById("status").innerText != "You Lost!" && document.getElementById("status").innerText != "You Won!" && document.getElementById("status").innerText != "You're Out of Bound! Go Back to start") {
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].classList.add("youlose");

            }
            document.getElementById("status").innerText = "You Lost!";

            score = score - 10;
            scores.innerHTML = `${score}`
        }
    }

    /*Changin status signaling the player's win and adding 5 to his score */
    function win() {
        if (document.getElementById("status").innerText != "You Lost!" && document.getElementById("status").innerText != "You Won!" && document.getElementById("status").innerText != "You're Out of Bound! Go Back to start") {
            document.getElementById("status").innerText = "You Won!";
            score = score + 5;
            scores.innerHTML = `${score}`;
        }

    }

    /*Notifying the player that he is out of bound and must go back to the start in order to play */
    function outOfBound() {
        document.getElementById("status").innerText = "You're Out of Bound! Go Back to start";

    }


}