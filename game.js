window.onload = function () {

    var start = document.getElementById("start");
    start.onmouseover = startGame;
    start.onclick = newGame;

    var end = document.getElementById("end");
    end.onmouseover = win;

    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++){
        boundaries[i].onmouseover = lose;
    }


    var score = 0;
    var scores =  document.getElementsByClassName("boundary example")[0];
    scores.innerHTML = `${score}`;

    function startGame() {

        document.getElementById("status").innerText = "Dont Hit The Boundaries";
    }

    function newGame() {
        document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\".";
        score = 0;
        scores.innerHTML = score;
    }

    function lose() {
        if (document.getElementById("status").innerText != "You Lost!" && document.getElementById("status").innerText != "You Won!" ) {
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].classList.add("youlose");
                console.log("You Lose!")
            }
            document.getElementById("status").innerText = "You Lost!";
            score = score - 10;
            scores.innerHTML = `${score}`
        }
    }

    function win() {
        if (document.getElementById("status").innerText != "You Lost!" && document.getElementById("status").innerText != "You Won!" ) {
            document.getElementById("status").innerText = "You Won!";
            score = score + 5;
            scores.innerHTML = `${score}`;
        }

    }

}