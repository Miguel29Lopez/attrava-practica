const calcularAnticipo = (precioServicio,esNuevoPaciente) => {
    if(esNuevoPaciente) {
        return precioServicio * 0.20;
    } else{
        return "0"
    }
};

//console.log(calcularAnticipo(1000, false));

const estadoDeCita = (minutosTarde, avisoRetraso) => {
    if(minutosTarde <= 15){
        return "Se atiende";
    } else if(minutosTarde > 15 && avisoRetraso){
        return "Se valora si se atiende o se reagenda";
    } else{
        return "Cita cancelada";
    };
}

//console.log(estadoDeCita(20, false));


const pacientes = [{nombre: "Miguel", sesionesRealizadas: 0},
    {nombre: "Jorge", sesionesRealizadas: 0},
    {nombre: "Jairo", sesionesRealizadas: 2},
    {nombre: "Amira", sesionesRealizadas: 1},
    {nombre: "Prys", sesionesRealizadas: 0}];

const contarSinSesion = (pacientes) => {
    let sinSesion = 0;

    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].sesionesRealizadas === 0){
            sinSesion++;
        }
    }
    return sinSesion;
}

//console.log(contarSinSesion(pacientes))

