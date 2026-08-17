function PatientList({ patients }) {
  
  return (
    <>
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
  {patients.map((patient, index) => (
    <li key={index}>
      <strong>{patient.name}</strong> --- Age: {patient.age},--- Department: {patient.department}
    </li>
  ))}
</ul>
    </>
  )
}

export default PatientList