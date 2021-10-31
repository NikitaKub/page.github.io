function addElement() {

    let newDiv = document.createElement("div");
    newDiv.id = "textTop";
    newDiv
    newDiv.onclick = function () {
        let textAbs = document.getElementById("textTop2");
        textAbs.innerHTML = textRandom();
    };

    document.body.appendChild(newDiv);
}
function addText() {
    let newText = document.createElement("h1");
    newText.innerHTML = "Magic Ball </br> Imaginate your question.";
    document.body.appendChild(newText);
}
function divCentr() {
    let newDiv = document.createElement("div");
    newDiv.id = "textTop1";

    let div1 = document.getElementById("textTop");
    div1.appendChild(newDiv);
}
function textCentr() {
    let newTextAbs = document.createElement("span");
    newTextAbs.id = "textTop2";
    newTextAbs.innerHTML = "Press on Ball";

    let div1 = document.getElementById("textTop1");
    div1.appendChild(newTextAbs);
}
var arrWords = new Array("Yes", "No", "Maybe", "Really?", "Can be...", "Ohh wait...");
function textRandom() {
    return arrWords[Math.floor(Math.random() * ((arrWords.length) - 0) + 0)];
}