import { useState, useEffect } from "react";
import Error from "./Error";
const Formulary = ({ patients, setPatients, patient, setPatient }) => {
    const { id } = patient;
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if( Object.keys(patient).length > 0) {
            const {nombre, propietario, email, fecha, sintomas} = patient;
            setNombre(nombre);
            setPropietario(propietario);
            setEmail(email);
            setFecha(fecha);
            setSintomas(sintomas);
            return;
        }
        console.log('esperando paciente a modificar...');
    }, [patient])

    const generarId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //   Validacion de componente
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Tenemos un campo vacio');
            setError(true);
            return;
        }
        setError(false);
        
        // Obj paciente
        const objectPatient = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,            
        }

        if(id) {
            // Validacion para editar registro
            objectPatient.id = id;
            console.log(objectPatient);
            console.log(patient);

            const patientsUpdates = patients.map(patientState =>  patientState.id === id ? objectPatient : patientState);
            setPatients(patientsUpdates);
            setPatient({});
        } else {
            // Registro nuevo
            objectPatient.id = generarId()
            setPatients([...patients, objectPatient])
        }

        
        
        // restart form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        {" "}
        Seguimientos Pacientes{" "}
      </h2>

      <p className="text-lg m-5 text-center mb-10">
        Añade Paciente y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 hover:shadow-xl"
        >
          {error && 
          <Error><p>Todos los campos son obligatorios</p></Error>
         }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email Contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={id ? "Editar Paciente" : "Agregar paciente"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Formulary;

