// Dictionnaire associant les noms à des tableaux de chiffres
const nameToNumbers = {
    "aco": [41245648, 25789248, 35635878, 4456554584],
    "fca": [525355658, 62664555, 7545486848, 23555658],
    "lpa": [51551655, 656545654, 756456555, 5646545558],
    "ame": [5, 6, 7, 8],
    "oco": [5, 6, 7, 8],
    "cfa": [5, 6, 7, 8],
    "mler": [5, 6, 7, 8],
    "afe": [5, 6, 7, 8],
    "ada": [5, 6, 7, 8],
    "ege": [5, 6, 7, 8],
    "afgu": [5, 6, 7, 8],
    "ban": [5, 6, 7, 8],
    "fco": [5, 6, 7, 8],
    "ydr": [5, 6, 7, 8],
    "sla": [5, 6, 7, 8],
    "mre": [5, 6, 7, 8],
    "cser": [5, 6, 7, 8],
    "dsb": [5, 6, 7, 8],
    "cce": [5, 6, 7, 8],
    "adel": [5, 6, 7, 8],
    "nle": [5, 6, 7, 8],
    "ame": [5, 6, 7, 8],
    "mno": [5, 6, 7, 8],
    "fro": [5, 6, 7, 8],
    "cde": [5, 6, 7, 8],
    "vlem": [5, 6, 7, 8],
    "ech": [5, 6, 7, 8],
    "adu": [5, 6, 7, 8],
    "gew": [5, 6, 7, 8],
    "ebe": [5, 6, 7, 8],
    "clem": [5, 6, 7, 8],
    "ple": [5, 6, 7, 8],
    "ele": [5, 6, 7, 8],
    "vbs": [5, 6, 7, 8],
    "ava": [5, 6, 7, 8],
    "mde": [5, 6, 7, 8],
    "ami": [5, 6, 7, 8],
    "hal": [5, 6, 7, 8],
    "afa": [5, 6, 7, 8],
    "fka": [5, 6, 7, 8],
    "jmo": [5, 6, 7, 8],
    "mdu": [5, 6, 7, 8],
    "edu": [5, 6, 7, 8],
    "rro": [5, 6, 7, 8],
    "nva": [5, 6, 7, 8],
    "mar": [5, 6, 7, 8],
    "rbe": [5, 6, 7, 8],
    "mch": [5, 6, 7, 8],
    "ama": [5, 6, 7, 8],
    "amas": [5, 6, 7, 8],
    "avan": [5, 6, 7, 8],
    "rch": [5, 6, 7, 8],
    "mda": [5, 6, 7, 8],
    "api": [5, 6, 7, 8],
    "gbo": [5, 6, 7, 8],
    "ljo": [5, 6, 7, 8],
    "mman": [5, 6, 7, 8],
    "cmb": [5, 6, 7, 8],
    "mdi": [5, 6, 7, 8]
};

// Dictionnaire pour suivre les chiffres déjà affichés
const displayedNumbers = {
    "aco": [],
    "fca": [],
    "lpa": [],
    "ame": [],
    "oco": [],
    "cfa": [],
    "mler": [],
    "afe": [],
    "ada": [],
    "ege": [],
    "afgu": [],
    "ban": [],
    "fco": [],
    "ydr": [],
    "sla": [],
    "mre": [],
    "cser": [],
    "dsb": [],
    "cce": [],
    "adel": [],
    "nle": [],
    "ame": [],
    "mno": [],
    "fro": [],
    "cde": [],
    "vlem": [],
    "ech": [],
    "adu": [],
    "gew": [],
    "ebe": [],
    "clem": [],
    "ple": [],
    "ele": [],
    "vbs": [],
    "ava": [],
    "mde": [],
    "ami": [],
    "hal": [],
    "afa": [],
    "fka": [],
    "jmo": [],
    "mdu": [],
    "edu": [],
    "rro": [],
    "nva": [],
    "mar": [],
    "rbe": [],
    "mch": [],
    "ama": [],
    "amas": [],
    "avan": [],
    "rch": [],
    "mda": [],
    "api": [],
    "gbo": [],
    "ljo": [],
    "mman": [],
    "cmb": [],
    "mdi": []
};

function getChiffre() {
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');
    
    if (nameInput === "") {
        resultElement.textContent = "Veuillez entrer un nom.";
        return;
    }
    
    const numbers = nameToNumbers[nameInput];
    const displayed = displayedNumbers[nameInput];
    
    if (numbers) {
        const remainingNumbers = numbers.filter(num => !displayed.includes(num));
        
        if (remainingNumbers.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
            const randomNumber = remainingNumbers[randomIndex];
            displayed.push(randomNumber);
            resultElement.textContent = `Le chiffre pour "${nameInput}" est : ${randomNumber}`;
        } else {
            resultElement.textContent = "Tous les chiffres ont été affichés. Veuillez contacter l'équipe support.";
        }
    } else {
        resultElement.textContent = `Nom "${nameInput}" non trouvé.`;
    }
}