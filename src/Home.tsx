import React from 'react';
import './MyReactCSS.css';

export const Home = () => {
  return (
    <div>
      <header>
      <h1 style={{ textAlign: 'center' }}>Formulaire du CV</h1>
      </header>
      <form id="cvForm">
        <fieldset>
          <legend>Identité</legend>
          <label>Nom</label>
          <input type="text" id="nom" placeholder="Saisir votre Nom" required />
          <label>Prénom</label>
          <input type="text" id="prénom" placeholder="Saisir votre Prénom" required />
        </fieldset>
        <fieldset>
          <legend>Genre</legend>
          <input type="radio" name="Genre" id="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="Genre" id="female" />
          <label htmlFor="female">Femme</label>
        </fieldset>
        <fieldset>
          <legend>Informations personnelles</legend>
          <label>Numéro du téléphone</label>
          <input type="text" id="numerodutéléphone" placeholder="+212..." required />
          <label>Adresse</label>
          <input type="text" placeholder="Saisir votre Adresse" required />
          <label>Email</label>
          <input type="email" id="email" placeholder="Saisir votre eMail" required />
          <label htmlFor="birthday">Choisir votre date de naissance:</label>
          <input type="date" id="birthday" name="Date de naissance" />
        </fieldset>
        <fieldset>
          <legend>Objectifs</legend>
          <label>Que souhaites-vous</label>
          <textarea placeholder="Vos Objectifs"></textarea>
        </fieldset>
        <fieldset>
          <legend>Diplômes</legend>
          <select>
            <option>Ingenieur D'état</option>
            <option>Master</option>
            <option>Bachelor</option>
            <option>Doctorant</option>
            <option>DUT,DEUG</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Compétences Techniques</legend>
          <label>Que savez vous faire?</label>
          <textarea placeholder="Vos Compétences techniques"></textarea>
        </fieldset>
        <fieldset>
          <legend>Centres d'interets</legend>
          <input type="checkbox" id="ai" />
          <label htmlFor="ai">AI</label>
          <input type="checkbox" id="cybersecurity" />
          <label htmlFor="cybersecurity">Cybersecurity</label>
          <input type="checkbox" id="software" />
          <label htmlFor="software">Software</label>
          <input type="checkbox" id="systèmes-embarqués" />
          <label htmlFor="systèmes-embarqués">Systèmes Embarqués</label>
          <input type="checkbox" id="data" />
          <label htmlFor="data">Data</label>
          <input type="checkbox" id="autres" />
          <label htmlFor="autres">Autres</label>
        </fieldset>
        <fieldset>
          <legend>Langues Maitrisées</legend>
          <input type="checkbox" id="arabe" />
          <label htmlFor="arabe">Arabe</label>
          <input type="checkbox" id="anglais" />
          <label htmlFor="anglais">Anglais</label>
          <input type="checkbox" id="français" />
          <label htmlFor="français">Français</label>
          <input type="checkbox" id="allemand" />
          <label htmlFor="allemand">Allemand</label>
          <input type="checkbox" id="japonais" />
          <label htmlFor="japonais">Japonais</label>
          <input type="checkbox" id="autres-langues" />
          <label htmlFor="autres-langues">Autres</label>
        </fieldset>
        <fieldset>
          <legend>Message</legend>
          <label>Message</label>
          <textarea placeholder="Description"></textarea>
        </fieldset>
        <fieldset>
          <legend>Photo</legend>
          <label>Télécharger votre photo</label>
          <input type="file" />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
      <hr />
    </div>
  );
};
