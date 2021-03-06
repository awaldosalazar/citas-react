import swal from 'sweetalert';
const Patient = ({patient, setPatient, deletePatient}) => {    
    const { nombre, propietario, email, fecha, sintomas, id  } = patient;
    
    const handleDelete = () =>{
      swal({
        title: "Estas seguro?",
        text: "El siguiente registro se eliminara por completo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Perfecto! Tu registro fue eliminado!", {
            icon: "success",
          });
          deletePatient(id);
        } 
      });
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl hover:shadow-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between" >
          <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all" type="button"
            onClick={() => setPatient(patient)}
          >
              Editar
          </button>
          <button  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all" type="button"
            onClick={handleDelete}
          >
              Eliminar
          </button>
      </div>
    </div>
  );
};

export default Patient;
