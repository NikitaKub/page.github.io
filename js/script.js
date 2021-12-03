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
}
function randoma(roundPoint1){
	switch (Number(Math.floor(Math.random() * (8 - 1) + 1))) {
        case 1:
            roundPoint1.setAttribute("style", "background-image:url(css/6.png)");
            break;
        case 2:
            roundPoint1.setAttribute("style", "background-image:url(css/7.png)");
            break;
        case 3:
            roundPoint1.setAttribute("style", "background-image:url(css/8.png)");
            break;
        case 4:
            roundPoint1.setAttribute("style", "background-image:url(css/9.png)");
            break;
        case 5:
            roundPoint1.setAttribute("style", "background-image:url(css/10.png)");
            break;
        case 6:
            roundPoint1.setAttribute("style", "background-image:url(css/11.png)");
            break;
        case 7:
            roundPoint1.setAttribute("style", "background-image:url(css/12.png)");
            break;
        default:
    }
}

function game() {
    document.getElementById("roll").classList.add("shake");
    setTimeout(function () {
        document.getElementById("roll").classList.remove("shake");
    }, 500);
    let roundPoint1 = document.getElementById("roundPoint1");
	let roundPoint2 = document.getElementById("roundPoint2");
	let roundPoint3 = document.getElementById("roundPoint3");
	let roundPoint4 = document.getElementById("roundPoint4");
	let roundPoint5 = document.getElementById("roundPoint5");
	let roundPoint6 = document.getElementById("roundPoint6");
	let roundPoint7 = document.getElementById("roundPoint7");
	let roundPoint8 = document.getElementById("roundPoint8");
	let roundPoint9 = document.getElementById("roundPoint9");
    let money = document.getElementById("money");


    randoma(roundPoint1);
	randoma(roundPoint2);
	randoma(roundPoint3);
	randoma(roundPoint4);
	randoma(roundPoint5);
	randoma(roundPoint6);
	randoma(roundPoint7);
	randoma(roundPoint8);
	randoma(roundPoint9);

    if (roundPoint2.style.backgroundImage == roundPoint5.style.backgroundImage && roundPoint5.style.backgroundImage == roundPoint8.style.backgroundImage) {
        
        money.textContent = Number(money.textContent) + 600;
        document.getElementById("Statist").textContent = "You win 600!";
    }
    else {
        if (roundPoint5.style.backgroundImage == roundPoint8.style.backgroundImage) {
            
            money.textContent = Number(money.textContent) + 200;
            document.getElementById("Statist").textContent = "You win 200!";
        }
        else {
            if (roundPoint2.style.backgroundImage == roundPoint5.style.backgroundImage) {
                
                money.textContent = Number(money.textContent) + 200;
                document.getElementById("Statist").textContent = "You win 200!";
            }
            else {
                money.textContent = Number(money.textContent) - 200;
                document.getElementById("Statist").textContent = "You lose 200!";
                if (Number(money.textContent) <= 0) {
                    document.getElementById("end1").style.display = "flex";
                    document.getElementById("roll").style.display = "none";
                }
            }
        }
    }
}

function restart() {

    let buttonR1 = document.getElementById("end1");
    
    buttonR1.style.display = "none";
    document.getElementById("roll").style.display = "inline-block";
    document.getElementById("money").textContent = 1000;
    document.getElementById("Statist").textContent = "";
}
