var playerName = prompt("Input your player name. Max size you player name 8 symbols.", "");
if (playerName == "") {
    playerName = "Player";
    alert("You dont inputed your player name, so now your player name will be 'Player'.");
}
if (playerName.length > 8) {
    playerName = "Player";
    alert("Your player name so long! And now your player name will be changed to 'Player'.");
}

function startGame() {
    document.getElementById("butStartGame").style.display = "none";
    document.getElementById("roll").style.display = "inline-block";

    let playerName1 = document.getElementById("playerName1");
    playerName1.textContent = playerName;
    let playerName2 = document.getElementById("playerName2");
    playerName2.textContent = "Computer";
}
function game() {
    document.getElementById("roll").classList.add("shake");
    setTimeout(function () {
        document.getElementById("roll").classList.remove("shake");
    }, 500);
    var currentPoint1 = document.getElementById("currentPoint1");
    var currentPoint2 = document.getElementById("currentPoint2");
    var roundPoint1 = document.getElementById("roundPoint1");
    var roundPoint2 = document.getElementById("roundPoint2");
    let button;
    let name;
    let button1 = document.getElementById("roll");

    currentPoint1.textContent = Number(Math.floor(Math.random() * (7 - 1) + 1));
    currentPoint2.textContent = Number(Math.floor(Math.random() * (7 - 1) + 1));

    if (Number(currentPoint1.textContent) > Number(currentPoint2.textContent)) {
        roundPoint1.textContent = Number(roundPoint1.textContent) + 1;
        if ((Number(roundPoint1.textContent) + Number(roundPoint2.textContent)) == 3) {
            if (Number(roundPoint1.textContent) > Number(roundPoint2.textContent)) {
                button1.style.display = "none";
                button = document.getElementById("end1");
                name = document.getElementById("name1");
                name.textContent = playerName + " Win";
                
                button.style.display = "flex";
            }
            else {
                button1.style.display = "none";
                button = document.getElementById("end2");
                name = document.getElementById("name2");
                name.textContent = "Computer Win";
                
                button.style.display = "flex";
            }
        }
    }
    if (Number(currentPoint1.textContent) < Number(currentPoint2.textContent)) {
        roundPoint2.textContent = Number(roundPoint2.textContent) + 1;
        if ((Number(roundPoint1.textContent) + Number(roundPoint2.textContent)) == 3) {
            if (Number(roundPoint1.textContent) < Number(roundPoint2.textContent)) {
                button1.style.display = "none";
                button = document.getElementById("end2");
                name = document.getElementById("name2");
                name.textContent = "Computer Win";
                
                button.style.display = "flex";
            }
            else {
                button1.style.display = "none";
                button = document.getElementById("end1");
                name = document.getElementById("name1");
                name.textContent = playerName + " Win";
                button.style.display = "flex";

            }
        }
    }
}
function restart() {

    let buttonR1 = document.getElementById("end1");
    let buttonR2 = document.getElementById("end2");
    let button = document.getElementById("roll");;
    
    currentPoint1.textContent = "0";
    currentPoint2.textContent = "0";
    roundPoint1.textContent = "0";
    roundPoint2.textContent = "0";
    buttonR1.style.display = "none";
    buttonR2.style.display = "none";
    button.style.display = "inline-block";
    
}