function countCharacters() {
    const characterLimit = 200;
    var text = document.getElementById('textarea').value;
    let charactersCount = document.getElementById('charactersCount');
    let remainingCount = document.getElementById('remainingCount');
    let length = text.length;

    charactersCount.innerHTML = length;
    remainingCount.innerHTML = characterLimit - length;

    if (length >= characterLimit) {
        remainingCount.style.color = "red";
        document.getElementById('textarea').disabled = true;
    } else {
        charactersCount.style.color = "black";
        document.getElementById('textarea').disabled = false; 
    }
}