import { useState } from 'react';
import Header from "./components/Header";
import Formulary from "./components/Formulary";
import PatientList from "./components/PatientList";
const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulary patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
        <PatientList patients={patients} setPatient={setPatient}/>
      </div>
    </div>
  );
};

export default App;
