function validateForm() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var commande = document.getElementById("commande").value;

    if (nom == "" || prenom == "" || email == "" || tel == "" || commande == "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    if (!validateTel(tel)) {
        alert("Veuillez entrer un numéro de téléphone valide.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateTel(tel) {
    var re = /^(0|\+213)[567]\d{8}$/;
    return re.test(tel);
}
