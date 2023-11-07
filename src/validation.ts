export function isValidEmail(email: string) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

export function isAdult(birthdate: string) {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = today.getMonth() - birthdateObj.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
    age--;
  }

  return age >= 18;
}

export function isNomPrenomValides() {
  const nomInput = document.getElementById('nom') as HTMLInputElement;
  const prénomInput = document.getElementById('prénom') as HTMLInputElement;

  if (!/^[A-Za-z\s]*$/.test(nomInput.value) || !/^[A-Za-z\s]*$/.test(prénomInput.value)) {
    alert("Les champs Nom et Prénom ne doivent contenir que des lettres alphabétiques et des espaces.");
    return false;
  }
  return true;
}
