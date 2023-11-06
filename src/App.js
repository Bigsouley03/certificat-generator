import React, { useState } from 'react';
import Certificate from './Components/Certificate';
import FormComponent from './Components/FormComponent';

function App() {
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    // Stockez les données dans l'état de l'application
    setFormData(data);
  };

  return (
    <div className="App">
      {formData ? (
        <Certificate data={formData} />
      ) : (
        <FormComponent onSave={handleSave} />
      )}
    </div>
  );
}

export default App;
