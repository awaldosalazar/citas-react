import Patient from "./Patient";

const PatientList = ({patients}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="font-black text-3xl text-center"> Listado Pacientes </h2>
      <p className="mt-5 text-xl mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>


        {patients.map((patient) => <Patient key={patient.id} patient={patient} /> )}
        
    </div>
  );
};

export default PatientList;
