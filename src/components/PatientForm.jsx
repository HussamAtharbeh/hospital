import { useState } from 'react';

function PatientForm({addPatient}) {
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
addPatient(newPatient);
    console.log({ name, age, department });
    setName('');
    setAge('');
    setDepartment('');
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
    

</>
  );
}

export default PatientForm;