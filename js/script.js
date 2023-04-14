const eleGrid = document.querySelector('.grid');

for (let i = 1; i <= 100; i++){

    if ((i % 3 == 0) && (i % 5 == 0)) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell red">fizzbuzz</div>`;
    }
        else if (i % 5 == 0){
            eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell yellow">buzz</div>`;
        }
            else if (i % 3 == 0) {
                eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell green">fizz</div>`;
            }
                else {
                    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
                }
    
}

