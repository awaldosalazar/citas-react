import { useState } from 'react';
import Header from "./components/Header";
import Formulary from "./components/Formulary";
import PatientList from "./components/PatientList";
const App = () => {
  const [patient, setPatient] = useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulary patient={patient} setPatient={setPatient}/>
        <PatientList patients={patient} />
      </div>
    </div>
  );
};

export default App;
