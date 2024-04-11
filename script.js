document.addEventListener("DOMContentLoaded", () => {
    const noteInputs = document.querySelectorAll('.note-input');
    const coefRessources = [
        [15, 5, 5],
        [10, 0, 3],
        [13, 0, 0],
        [7, 3, 3],
        [5, 10, 0],
        [3, 7, 0],
        [1, 0, 7],
        [0, 0, 7],
        [3, 0, 8],
        [12, 4, 4],
        [6, 4, 4],
        [2, 2, 2],
        [3, 3, 6],
        [4, 9, 0],
        [20, 0, 0],
        [0, 20, 0],
        [0, 0, 25],
        [17, 15, 17],
        [2, 2, 2],
    ];

    function calculerMoyennesUE() {
        const moyennesUE = Array.from({ length: coefRessources[0].length }, () => ({ sum: 0, sumCoef: 0 }));

        noteInputs.forEach((input, index) => {
            const note = parseFloat(input.value);
            if (!isNaN(note)) {
                for (let i = 0; i < coefRessources[index].length; i++) {
                    const coef = coefRessources[index][i];
                    moyennesUE[i].sum += note * coef;
                    moyennesUE[i].sumCoef += coef;
                }
            }
        });

        for (let i = 0; i < moyennesUE.length; i++) {
            moyennesUE[i] = moyennesUE[i].sumCoef > 0 ? moyennesUE[i].sum / moyennesUE[i].sumCoef : 0;
        }

        const resultatElement = document.getElementById('resultat');
        resultatElement.innerHTML = "";
            
        moyennesUE.forEach((moyenne, index) => {
            const p = document.createElement('p');
            p.textContent = "Moyenne UE " + (index + 1) + ": " + moyenne.toFixed(2);
            resultatElement.appendChild(p);
        });

    }

    noteInputs.forEach(input => {
        input.addEventListener('input', calculerMoyennesUE);
    });
});