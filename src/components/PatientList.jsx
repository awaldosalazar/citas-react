import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
        {patients && patients.length ? (
            <>
            <h2 className="font-black text-3xl text-center"> Listado Pacientes </h2>
            <p className="mt-5 text-xl mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
      
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient} setPatient={setPatient} deletePatient={deletePatient} />
                ))}
            </>
        ): (
            <>
             <h2 className="font-black text-3xl text-center"> No hay pacientes </h2>
            <p className="mt-5 text-xl mb-10 text-center">
              Comienza agregando pacientes {""}
              <span className="text-indigo-600 font-bold">No cuentas con pacientes</span>
            </p>
            </>
        )}
    </div>
  );
};

export default PatientList;
