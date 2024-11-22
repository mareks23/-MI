document.getElementById("calculateBtn").addEventListener("click", function() {
    // Iegūt ievades vērtības
    const height = parseFloat(document.getElementById("heightInput").value);
    const weight = parseFloat(document.getElementById("weightInput").value);

    // Pārbaudīt, vai ievades lauki nav tukši un vai vērtības ir derīgas
    if (!height || !weight || height <= 0 || weight <= 0) {
        document.getElementById("result").textContent = "Lūdzu, ievadiet derīgas auguma un svara vērtības.";
        return;
    }

    // Aprēķināt ĶMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Noteikt ĶMI kategoriju
    let category;
    if (bmi < 18.5) {
        category = "Nepietiekams svars";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normāls svars";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Liekais svars";
    } else {
        category = "Aptaukošanās";
    }

    // Attēlot rezultātu
    document.getElementById("result").textContent = `Jūsu ĶMI ir ${bmi}, kas atbilst kategorijai: ${category}.`;
});
