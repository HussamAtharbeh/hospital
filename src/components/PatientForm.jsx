import { useState } from 'react';

function PatientForm() {
  const [patients, setPatients] = useState([]); 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      name,
      age,
      department,
    };

    setPatients([...patients, newPatient]);
    console.log({ name, age, department });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Add Patient
      </button>
    </form>
    
    <h2>Patients</h2>
    
<ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
  {patients.map((patient, index) => (
    <li key={index}>
      <strong>{patient.name}</strong> --- Age: {patient.age},--- Department: {patient.department}
    </li>
  ))}
</ul>
</>
  );
}

export default PatientForm;