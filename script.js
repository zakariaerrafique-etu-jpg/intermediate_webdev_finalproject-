function calculateTotal() {
  // Récupérer les valeurs des inputs
  let priceInput = document.getElementById("price").value;
  let quantityInput = document.getElementById("quantity").value;

  // Conversion correcte en nombres
  let price = Number(priceInput);
  let quantity = Number(quantityInput);

  // Vérification pour éviter les TypeErrors ou NaN
  if (isNaN(price) || isNaN(quantity)) {
    console.error("Veuillez entrer des valeurs numériques valides.");
    return;
  }

  // Calcul du total
  let total = price * quantity;

  // Affichage du résultat (si élément existe)
  let resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.textContent = "Total : " + total;
  } else {
    console.log("Total :", total);
  }
}

// Exemple d'événement bouton
let btn = document.getElementById("calculateBtn");
if (btn) {
  btn.addEventListener("click", calculateTotal);
}
