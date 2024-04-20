// Function to validate the form
function validateForm() {
    // Retrieve values from input fields
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var commande = document.getElementById("commande").value;

    // Check if any of the fields are empty
    if (nom == "" || prenom == "" || email == "" || tel == "" || commande == "") {
        // Display an alert message if any field is empty
        alert("Veuillez remplir tous les champs.");
        return false; // Return false indicating form is not valid
    }

    // Validate email format using the validateEmail function
    if (!validateEmail(email)) {
        // Display an alert message if email format is invalid
        alert("Veuillez entrer une adresse email valide.");
        return false; // Return false indicating form is not valid
    }

    // Validate telephone number format using the validateTel function
    if (!validateTel(tel)) {
        // Display an alert message if telephone number format is invalid
        alert("Veuillez entrer un numéro de téléphone valide.");
        return false; // Return false indicating form is not valid
    }

    // If all validations pass, return true indicating form is valid
    return true;
}

// Function to validate email format
function validateEmail(email) {
    // Regular expression pattern to validate email format
    var re = /\S+@\S+\.\S+/;
    return re.test(email); // Return true if email matches the pattern, false otherwise
}

// Function to validate telephone number format
function validateTel(tel) {
    // Regular expression pattern to validate telephone number format
    var re = /^(0|\+213)[567]\d{8}$/;
    return re.test(tel); // Return true if telephone number matches the pattern, false otherwise
}
