import React, { useState } from 'react';

const FormComponent = ({ onSave }) => {
  const [formData, setFormData] = useState({
    civility: 'Monsieur',
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    classe: '',
    filiere:'',
    matricule: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mt-3">
         <h1 className="text-center">Générateur de Certificats d'Inscription</h1>
        <form>
        <div className="form-group">
          <label htmlFor="civility">Civilité :</label>
          <select
            name="civility"
            value={formData.civility}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="Monsieur">Monsieur</option>
            <option value="Madame">Madame</option>
          </select>
        </div>
        <div className="form-group">
        <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
            className="form-control"

          />
        </div>
        <div className="form-group">
                    <label htmlFor="prenom">Prénom :</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dateNaissance">Date de Naissance :</label>
                    <input
                        type="date"
                        id="dateNaissance"
                        name="dateNaissance"
                        value={formData.dateNaissance}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lieuNaissance">Lieu de Naissance :</label>
                    <input
                        type="text"
                        id="lieuNaissance"
                        name="lieuNaissance"
                        value={formData.lieuNaissance}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="classe">Classe :</label>
                  <select
                    name="classe"
                    value={formData.classe}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Sélectionnez la classe</option>
                    <option value="LICENCE 1">LICENCE 1</option>
                    <option value="LICENCE 2">LICENCE 2</option>
                    <option value="LICENCE 3">LICENCE 3</option>
                    <option value="MASTER 1">MASTER 1</option>
                    <option value="MASTER 2">MASTER 2</option>

                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="filiere">Filiere :</label>
                  <select
                    name="filiere"
                    value={formData.filiere}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Sélectionnez la filiére</option>
                    <option value=" Cybersécurité"> Cybersécurité</option>
                    <option value="Data Science & Intelligence Artificielle">Data Science & Intelligence Artificielle</option>
                    <option value="CyberSécurité - Cyberdefense">CyberSécurité - Cyberdefense</option>
                    <option value="DataCenter">DataCenter</option>

                  </select>
                </div>

                <div className="form-group">
                    <label htmlFor="matricule">Matricule de l'Étudiant :</label>
                    <input
                        type="text"
                        id="matricule"
                        name="matricule"
                        value={formData.matricule}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <br/>

        <button type="button" onClick={() => onSave(formData)} className="btn btn-primary">GENERER</button>
      </form>
    </div>
  );
};

export default FormComponent;
