import React, { useEffect } from 'react';
import { Home } from './Home';
import { About } from './About';
import {
  isValidEmail,
  isAdult,
  isNomPrenomValides,
} from './validation';

const App: React.FC = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('cvForm') as HTMLFormElement;
      form.addEventListener('submit', handleFormSubmit);
    });
  }, []);

  const handleFormSubmit = (event: Event) => {
    event.preventDefault();

    const numerodutéléphoneInput = document.getElementById('numerodutéléphone') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const birthdayInput = document.getElementById('birthday') as HTMLInputElement;

    if (!/^[0-9]+$/.test(numerodutéléphoneInput.value)) {
      alert('Le numéro de téléphone doit contenir que des chiffres.');
      return;
    }

    if (!isValidEmail(emailInput.value)) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    if (!isNomPrenomValides()) {
      alert('Le nom doit être en majuscules et le prénom doit commencer par une majuscule.');
      return;
    }
  

    if (!isAdult(birthdayInput.value)) {
      alert('Vous devez avoir au moins 18 ans.');
      return;
    }
  };

  return (
    <div className='container'>
      <Home />
      <footer className="bg-gray-800 text-white text-center p-2">
        <About />
      </footer>
    </div>
  );
};

export default App;
