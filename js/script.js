var playerName = prompt("Input your player name. Max size you player name 8 symbols.", "");
if (playerName == "") {
    playerName = "Player";
    alert("You dont inputed your player name, so now your player name will be 'Player'.");
}
if (playerName.length > 8) {
    playerName = "Player";
    alert("Your player name so long! And now your player name will be changed to 'Player'.");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function startGame() {
    document.getElementById("butStartGame").style.display = "none";
    document.getElementById("roll").style.display = "inline-block";

    let playerName1 = document.getElementById("playerName1");
    playerName1.textContent = playerName;
    let playerName2 = document.getElementById("playerName2");
    playerName2.textContent = "Computer";
    document.getElementById("stop").style.display = "inline-block";
}
function game() {
    document.getElementById("roll").classList.add("shake");
    setTimeout(function () {
        document.getElementById("roll").classList.remove("shake");
    }, 500);
    let currentPoint1 = document.getElementById("currentPoint1");
    let roundPoint1 = document.getElementById("roundPoint1");

    switch (Number(Math.floor(Math.random() * (10 - 1) + 1))) {
        case 1:
            roundPoint1.setAttribute("style", "background-image:url(css/6.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 6;
            break;
        case 2:
            roundPoint1.setAttribute("style", "background-image:url(css/7.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 7;
            break;
        case 3:
            roundPoint1.setAttribute("style", "background-image:url(css/8.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 8;
            break;
        case 4:
            roundPoint1.setAttribute("style", "background-image:url(css/9.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 9;
            break;
        case 5:
            roundPoint1.setAttribute("style", "background-image:url(css/10.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 10;
            break;
        case 6:
            roundPoint1.setAttribute("style", "background-image:url(css/11.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 2;
            break;
        case 7:
            roundPoint1.setAttribute("style", "background-image:url(css/12.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 3;
            break;
        case 8:
            roundPoint1.setAttribute("style", "background-image:url(css/13.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 4;
            break;
        case 9:
            roundPoint1.setAttribute("style", "background-image:url(css/14.png)");
            currentPoint1.textContent = Number(currentPoint1.textContent) + 11;
            break;
        default:
    }

    if (Number(currentPoint1.textContent) > 21) {
        button2.style.display = "none";
        document.getElementById("name2").textContent = "Computer Win";

        document.getElementById("end2").style.display = "flex";
    }
    if (Number(currentPoint1.textContent) == 21) {
        button2.style.display = "none";
        document.getElementById("name1").textContent = playerName + " Win";

        document.getElementById("end1").style.display = "flex";
    }
}

function stop() {
    document.getElementById("stop").classList.add("shake");
    setTimeout(function () {
        document.getElementById("stop").classList.remove("shake");
    }, 500);
    let currentPoint2 = document.getElementById("currentPoint2");
    let roundPoint2 = document.getElementById("roundPoint2");
    let currentPoint1 = document.getElementById("currentPoint1");
    let button3 = document.getElementById("roll");
    button3.display = "none";
    let button2 = document.getElementById("stop");

    while (Number(currentPoint1.textContent) > Number(currentPoint2.textContent) && Number(currentPoint2.textContent) <= 21) {
        switch (Number(Math.floor(Math.random() * (10 - 1) + 1))) {
            case 1:
                roundPoint2.setAttribute("style", "background-image:url(css/6.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 6;
                break;
            case 2:
                roundPoint2.setAttribute("style", "background-image:url(css/7.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 7;
                break;
            case 3:
                roundPoint2.setAttribute("style", "background-image:url(css/8.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 8;
                break;
            case 4:
                roundPoint2.setAttribute("style", "background-image:url(css/9.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 9;
                break;
            case 5:
                roundPoint2.setAttribute("style", "background-image:url(css/10.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 10;
                break;
            case 6:
                roundPoint2.setAttribute("style", "background-image:url(css/11.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 2;
                break;
            case 7:
                roundPoint2.setAttribute("style", "background-image:url(css/12.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 3;
                break;
            case 8:
                roundPoint2.setAttribute("style", "background-image:url(css/13.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 6;
                break;
            case 9:
                roundPoint2.setAttribute("style", "background-image:url(css/14.png)");
                currentPoint2.textContent = Number(currentPoint2.textContent) + 11;
                break;
            default:
        }
    }
    if (Number(currentPoint2.textContent) > 21) {
        button2.style.display = "none";
        document.getElementById("name1").textContent = playerName + " Win";

        document.getElementById("end1").style.display = "flex";
    }
    else {
        if (Number(currentPoint2.textContent) > Number(currentPoint1.textContent)) {
            button2.style.display = "none";
            document.getElementById("name2").textContent = "Computer Win";

            document.getElementById("end2").style.display = "flex";
        }
        else {
            switch (Number(Math.floor(Math.random() * (10 - 1) + 1))) {
                case 1:
                    roundPoint2.setAttribute("style", "background-image:url(css/6.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 6;
                    break;
                case 2:
                    roundPoint2.setAttribute("style", "background-image:url(css/7.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 7;
                    break;
                case 3:
                    roundPoint2.setAttribute("style", "background-image:url(css/8.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 8;
                    break;
                case 4:
                    roundPoint2.setAttribute("style", "background-image:url(css/9.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 9;
                    break;
                case 5:
                    roundPoint2.setAttribute("style", "background-image:url(css/10.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 10;
                    break;
                case 6:
                    roundPoint2.setAttribute("style", "background-image:url(css/11.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 2;
                    break;
                case 7:
                    roundPoint2.setAttribute("style", "background-image:url(css/12.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 3;
                    break;
                case 8:
                    roundPoint2.setAttribute("style", "background-image:url(css/13.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 6;
                    break;
                case 9:
                    roundPoint2.setAttribute("style", "background-image:url(css/14.png)");
                    currentPoint2.textContent = Number(currentPoint2.textContent) + 11;
                    break;
                default:
            }
        }
    }
}

function restart() {

    let buttonR1 = document.getElementById("end1");
    let buttonR2 = document.getElementById("end2");
    let button = document.getElementById("roll");
    let button1 = document.getElementById("stop");
    
    currentPoint1.textContent = "0";
    currentPoint2.textContent = "0";
    roundPoint1.setAttribute("style", "background-image:none");
    roundPoint2.setAttribute("style", "background-image:none");
    buttonR1.style.display = "none";
    buttonR2.style.display = "none";
    button.style.display = "inline-block";
    button1.style.display = "inline-block";
    
}