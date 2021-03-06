

function processCommande() {
    let PU = parseInt(document.getElementById("PU").value);
    let QTECOM = parseInt(document.getElementById("QTECOM").value);
    let TOT = PU * QTECOM;
    let REM = calculeRemise(TOT);
    let PORT = calculePort(TOT, REM);


    let PAP = (TOT * REM) + PORT;
    //affichage du total et de la remise 
    document.getElementById("TOT").innerHTML = `Le prix a payer est de ${PAP.toFixed(2)}€,<br>Remise: ${Math.round(((REM - 1) * 100) * -1)}%`;
}

function calculeRemise(TOT) {
    
    if (TOT >= 100 && TOT <= 200) {
        return 0.95
    }
    else if (TOT > 200) {
        return 0.90
    } else {
        return 1
    }
}

function calculePort(TOT, REM) {
    let PORT;
    if (TOT * REM > 500) {
        PORT = 0
    }
    else {
        PORT = 0.02 * (TOT * REM)
    }

    if (PORT < 6 && PORT != 0) {
        PORT = 6
    }

    return PORT;
}

let bouton = document.getElementById("btn_commande");

bouton.addEventListener("click", function() {
    processCommande();

});