document.addEventListener('DOMContentLoaded', function () {
    var changeableBlock = document.getElementById('changeable-block');
    var states = ['state-1', 'state-2', 'state-3'];
    var texts = ['Я змінився!', 'Ще раз натисни!', 'Знову змінився!'];
    var currentState = 0;

    changeableBlock.addEventListener('click', function () {
        states.forEach(function(state) {
            changeableBlock.classList.remove(state);
        });
        changeableBlock.classList.add(states[currentState]);
        changeableBlock.textContent = texts[currentState];
        currentState = (currentState + 1) % states.length;
    });
});


document.getElementById("addBlockButton").addEventListener("click", function() {
    var newBlock = document.createElement("div");
    newBlock.className = "grid-item new-block";
    newBlock.innerHTML = "<p>Новий блок додано!</p>";
    document.querySelector(".grid-container").appendChild(newBlock);
});