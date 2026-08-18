
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import PatientItem from "./components/PatientItem";

import { useState } from 'react';

function App() {
  
    const [patients, setPatients] = useState([]); 
    
    const addPatient = (newPatient) => {
      setPatients([...patients, newPatient]);
    }

  return (
    <>
      <h1>hospital manager app</h1>

      <PatientForm addPatient={addPatient}/>
      <PatientList patients={patients} />

    </>
  )
}

export default App
