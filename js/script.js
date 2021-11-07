function addElements() {

    let newDiv = document.createElement("div");
    newDiv.id = "textTop";

    let newText = document.createElement("h1");
    newText.innerHTML = "Magic Ball </br> Imaginate your question.";

    let newTextAbs = document.createElement("span");
    newTextAbs.id = "textTop1";
    newTextAbs.innerHTML = "I am wait...";

    let conteinerDiv = document.createElement("div");
    conteinerDiv.id = "conteiner";

    let button = document.createElement("button");
    button.innerHTML = "Press on me";
    button.id = "buttonNew";
    button.onclick = function () {
        document.getElementById("textTop1").innerHTML = textRandom();

        document.getElementById("textTop").classList.add("shake");
        setTimeout(function () {
            document.getElementById("textTop").classList.remove("shake");
        }, 1000);
    };

    document.body.appendChild(conteinerDiv);
    conteinerDiv.appendChild(newText);
    conteinerDiv.appendChild(newDiv);
    newDiv.appendChild(newTextAbs);
    conteinerDiv.appendChild(button);
}

var arrWords = new Array("Yes", "No", "Maybe", "Really?", "Can be...", "Ohh wait...");

function textRandom() {
    return arrWords[Math.floor(Math.random() * ((arrWords.length) - 0) + 0)];
}
