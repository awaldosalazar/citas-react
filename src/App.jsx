import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulary from "./components/Formulary";
import PatientList from "./components/PatientList";
const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pantientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(pantientsLS);
    }

    obtenerLS();
  },[]);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  },[patients]);

  const deletePatient = id => {
    const patientUpdates = patients.filter(patient => patient.id !== id);
    setPatients(patientUpdates);
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulary patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
        <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient}/>
      </div>
    </div>
  );
};

export default App;
