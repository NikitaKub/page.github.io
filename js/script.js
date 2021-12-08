var playerName = prompt("Input your player name. Max size you player name 8 symbols.", "");
if (playerName == "" || playerName == null) {
    playerName = "Player";
    alert("You dont inputed your player name, so now your player name will be 'Player'.");
}
if (playerName.length > 8) {
    playerName = "Player";
    alert("Your player name so long! And now your player name will be changed to 'Player'.");
}

function getStarted() {
    document.getElementById("playerName1").textContent = playerName;
    document.getElementById("cartPlayerName1").textContent = playerName;
    document.getElementById("cartPlayerName2").textContent = "Computer";
    document.getElementById("casinoPlayerName1").textContent = playerName;
}

function ochkoGaming() {
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

function ochkoRestart() {

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

function twentyOneGaming() {
    document.getElementById("cartRoll").classList.add("shake");
    setTimeout(function () {
        document.getElementById("cartRoll").classList.remove("shake");
    }, 500);
    let cartPoint1 = document.getElementById("cartPoint1");
    let cart1 = document.getElementById("cart1");
    let button1 = document.getElementById("cartRoll");

    switch (Number(Math.floor(Math.random() * (10 - 1) + 1))) {
        case 1:
            cart1.setAttribute("style", "background-image:url(css/6.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 6;
            break;
        case 2:
            cart1.setAttribute("style", "background-image:url(css/7.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 7;
            break;
        case 3:
            cart1.setAttribute("style", "background-image:url(css/8.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 8;
            break;
        case 4:
            cart1.setAttribute("style", "background-image:url(css/9.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 9;
            break;
        case 5:
            cart1.setAttribute("style", "background-image:url(css/10.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 10;
            break;
        case 6:
            cart1.setAttribute("style", "background-image:url(css/11.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 2;
            break;
        case 7:
            cart1.setAttribute("style", "background-image:url(css/12.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 3;
            break;
        case 8:
            cart1.setAttribute("style", "background-image:url(css/13.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 4;
            break;
        case 9:
            cart1.setAttribute("style", "background-image:url(css/14.png)");
            cartPoint1.textContent = Number(cartPoint1.textContent) + 11;
            break;
        default:
    }

    if (Number(cartPoint1.textContent) > 21) {
        button1.style.display = "none";

        document.getElementById("cartName2").textContent = "Computer Win";

        document.getElementById("cartEnd2").style.display = "flex";
    }
    if (Number(cartPoint1.textContent) == 21) {
        button1.style.display = "none";

        document.getElementById("cartName1").textContent = playerName + " Win";;

        document.getElementById("cartEnd1").style.display = "flex";
    }
}

function twentyOneStop() {
    document.getElementById("cartStop").classList.add("shake");
    setTimeout(function () {
        document.getElementById("cartStop").classList.remove("shake");
    }, 500);
    let cartPoint2 = document.getElementById("cartPoint2");
    let cart2 = document.getElementById("cart2");
    let cartPoint1 = document.getElementById("cartPoint1");
    let button3 = document.getElementById("cartRoll");
    button3.display = "none";
    let button2 = document.getElementById("cartStop");

    while (Number(cartPoint1.textContent) > Number(cartPoint2.textContent) && Number(cartPoint2.textContent) <= 21) {
        switch (Number(Math.floor(Math.random() * (10 - 1) + 1))) {
            case 1:
                cart2.setAttribute("style", "background-image:url(css/6.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 6;
                break;
            case 2:
                cart2.setAttribute("style", "background-image:url(css/7.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 7;
                break;
            case 3:
                cart2.setAttribute("style", "background-image:url(css/8.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 8;
                break;
            case 4:
                cart2.setAttribute("style", "background-image:url(css/9.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 9;
                break;
            case 5:
                cart2.setAttribute("style", "background-image:url(css/10.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 10;
                break;
            case 6:
                cart2.setAttribute("style", "background-image:url(css/11.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 2;
                break;
            case 7:
                cart2.setAttribute("style", "background-image:url(css/12.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 3;
                break;
            case 8:
                cart2.setAttribute("style", "background-image:url(css/13.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 6;
                break;
            case 9:
                cart2.setAttribute("style", "background-image:url(css/14.png)");
                cartPoint2.textContent = Number(cartPoint2.textContent) + 11;
                break;
            default:
        }
    }
    if (Number(cartPoint2.textContent) > 21) {
        button2.style.display = "none";
        document.getElementById("cartName1").textContent = playerName + " Win";

        document.getElementById("cartEnd1").style.display = "flex";
    }
    else {
        if (Number(cartPoint2.textContent) > Number(cartPoint1.textContent) && Number(cartPoint1.textContent) == 0) {
            button2.style.display = "none";
            document.getElementById("cartName2").textContent = "Computer Win";

            document.getElementById("cartEnd2").style.display = "flex";
        }
        else {
            switch (Number(Math.floor(Math.random() * (10 - 1) + 1))) {
                case 1:
                    cart2.setAttribute("style", "background-image:url(css/6.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 6;
                    break;
                case 2:
                    cart2.setAttribute("style", "background-image:url(css/7.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 7;
                    break;
                case 3:
                    cart2.setAttribute("style", "background-image:url(css/8.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 8;
                    break;
                case 4:
                    cart2.setAttribute("style", "background-image:url(css/9.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 9;
                    break;
                case 5:
                    cart2.setAttribute("style", "background-image:url(css/10.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 10;
                    break;
                case 6:
                    cart2.setAttribute("style", "background-image:url(css/11.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 2;
                    break;
                case 7:
                    cart2.setAttribute("style", "background-image:url(css/12.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 3;
                    break;
                case 8:
                    cart2.setAttribute("style", "background-image:url(css/13.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 6;
                    break;
                case 9:
                    cart2.setAttribute("style", "background-image:url(css/14.png)");
                    cartPoint2.textContent = Number(cartPoint2.textContent) + 11;
                    break;
                default:
                    break;
            }
            if (Number(cartPoint2.textContent) > 21) {
                button2.style.display = "none";
                document.getElementById("cartName1").textContent = playerName + " Win";

                document.getElementById("cartEnd1").style.display = "flex";
            }
            else {
                if (Number(cartPoint2.textContent) > Number(cartPoint1.textContent)) {
                    button2.style.display = "none";
                    document.getElementById("cartName2").textContent = "Computer Win";

                    document.getElementById("cartEnd2").style.display = "flex";
                }
            }
        }
    }
}

function twentyOneRestart() {

    let buttonR1 = document.getElementById("cartEnd1");
    let buttonR2 = document.getElementById("cartEnd2");
    let button = document.getElementById("cartRoll");
    let button1 = document.getElementById("cartStop");

    document.getElementById("cartPoint1").textContent = "0";
    document.getElementById("cartPoint2").textContent = "0";
    document.getElementById("cart1").setAttribute("style", "background-image:none");
    document.getElementById("cart2").setAttribute("style", "background-image:none");
    buttonR1.style.display = "none";
    buttonR2.style.display = "none";
    button.style.display = "inline-block";
    button1.style.display = "inline-block";
}

function randoma(roundPoint1) {
    switch (Number(Math.floor(Math.random() * (8 - 1) + 1))) {
        case 1:
            roundPoint1.setAttribute("style", "background-image:url(css/rat1.png)");
            break;
        case 2:
            roundPoint1.setAttribute("style", "background-image:url(css/rat2.png)");
            break;
        case 3:
            roundPoint1.setAttribute("style", "background-image:url(css/rat3.png)");
            break;
        case 4:
            roundPoint1.setAttribute("style", "background-image:url(css/rat4.png)");
            break;
        case 5:
            roundPoint1.setAttribute("style", "background-image:url(css/rat5.png)");
            break;
        case 6:
            roundPoint1.setAttribute("style", "background-image:url(css/rat6.png)");
            break;
        case 7:
            roundPoint1.setAttribute("style", "background-image:url(css/rat7.png)");
            break;
        default:
    }
}

function casinoGaming() {
    document.getElementById("casinoRoll").classList.add("shake");
    setTimeout(function () {
        document.getElementById("casinoRoll").classList.remove("shake");
    }, 500);
    let casinoPoint1 = document.getElementById("casinoPoint1");
    let casinoPoint2 = document.getElementById("casinoPoint2");
    let casinoPoint3 = document.getElementById("casinoPoint3");
    let casinoPoint4 = document.getElementById("casinoPoint4");
    let casinoPoint5 = document.getElementById("casinoPoint5");
    let casinoPoint6 = document.getElementById("casinoPoint6");
    let casinoPoint7 = document.getElementById("casinoPoint7");
    let casinoPoint8 = document.getElementById("casinoPoint8");
    let casinoPoint9 = document.getElementById("casinoPoint9");
    let money = document.getElementById("money");


    randoma(casinoPoint1);
    randoma(casinoPoint2);
    randoma(casinoPoint3);
    randoma(casinoPoint4);
    randoma(casinoPoint5);
    randoma(casinoPoint6);
    randoma(casinoPoint7);
    randoma(casinoPoint8);
    randoma(casinoPoint9);

    if (casinoPoint2.style.backgroundImage == casinoPoint5.style.backgroundImage && casinoPoint5.style.backgroundImage == casinoPoint8.style.backgroundImage) {

        money.textContent = Number(money.textContent) + 600;
        document.getElementById("Statist").textContent = "You win 600!";
    }
    else {
        if (casinoPoint5.style.backgroundImage == casinoPoint8.style.backgroundImage) {

            money.textContent = Number(money.textContent) + 200;
            document.getElementById("Statist").textContent = "You win 200!";
        }
        else {
            if (casinoPoint2.style.backgroundImage == casinoPoint5.style.backgroundImage) {

                money.textContent = Number(money.textContent) + 200;
                document.getElementById("Statist").textContent = "You win 200!";
            }
            else {
                money.textContent = Number(money.textContent) - 200;
                document.getElementById("Statist").textContent = "You lose 200!";
                if (Number(money.textContent) <= 0) {
                    document.getElementById("casinoEnd1").style.display = "flex";
                    document.getElementById("casinoRoll").style.display = "none";
                }
            }
        }
    }
}

function casinoRestart() {

    let buttonR1 = document.getElementById("casinoEnd1");

    buttonR1.style.display = "none";
    document.getElementById("casinoRoll").style.display = "inline-block";
    document.getElementById("money").textContent = 1000;
    document.getElementById("Statist").textContent = "";
}

function sharGame() {
    document.getElementById("conteiner").style.display = "flex";
    document.getElementById("ochkoGame").style.display = "none";
    document.getElementById("twentyOneGame").style.display = "none";
    document.getElementById("casinoGame").style.display = "none";
}

function twentyOneGame() {
    document.getElementById("twentyOneGame").style.display = "flex";
    document.getElementById("conteiner").style.display = "none";
    document.getElementById("ochkoGame").style.display = "none";
    document.getElementById("casinoGame").style.display = "none";
}

function ochkoGame() {
    document.getElementById("ochkoGame").style.display = "flex";
    document.getElementById("conteiner").style.display = "none";
    document.getElementById("twentyOneGame").style.display = "none";
    document.getElementById("casinoGame").style.display = "none";
}

function casinoGame() {
    document.getElementById("casinoGame").style.display = "inline-block";
    document.getElementById("conteiner").style.display = "none";
    document.getElementById("ochkoGame").style.display = "none";
    document.getElementById("twentyOneGame").style.display = "none";
}


function Random() {
    document.getElementById("textTop1").innerHTML = textRandom();

    document.getElementById("textTop").classList.add("shake");
    setTimeout(function () {
        document.getElementById("textTop").classList.remove("shake");
    }, 1000);
}
var arrWords = new Array("Yes", "No", "Maybe", "Really?", "Can be...", "Ohh wait...");

function textRandom() {
    return arrWords[Math.floor(Math.random() * ((arrWords.length) - 0) + 0)];
}
