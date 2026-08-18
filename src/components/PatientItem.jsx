import { useState } from "react";
function PatientItem({patients,index}) {
   const [showDetails, setShowDetails] = useState(true);
  return (
    <>
       {showDetails  && (
       <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "35px" }}>
            <strong>
              {index + 1} {patients.name}
            </strong>

            <span>Age: {patients.age}</span>

            <span>Department: {patients.department}</span>
          </div>

          <button onClick={() => setShowDetails(false)}>
            Delete
          </button>
          </div>
      )}
    </>
  )
}

export default PatientItem