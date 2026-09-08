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


/*const pacientes = [{nombre: "Miguel", sesionesRealizadas: 0},
    {nombre: "Jorge", sesionesRealizadas: 0},
    {nombre: "Jairo", sesionesRealizadas: 2},
    {nombre: "Amira", sesionesRealizadas: 1},
    {nombre: "Prys", sesionesRealizadas: 0}];*/

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

/*const pacientes = [{nombre: "Miguel", edad: 21},
    {nombre: "Jairo", edad: 29}, 
    {nombre: "Naomy", edad: 88},
    {nombre: "Ruben", edad: 35},
    {nombre: "Angel", edad: 12},
]*/

const contarPorEdad = (pacientes, edadMin, edadMax) => {
    let cont = 0;

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].edad >= edadMin && pacientes[i].edad <= edadMax){
            cont++;
        }
    }
    return cont;
}

//console.log(contarPorEdad(pacientes, 29, 88))

const ventasDelDia = [];
const retirosDelDia = [200, 100];

const calcularTotalCaja = (fondoInicial, ventas, retiros) => {
    let total = fondoInicial
    for(let i = 0; i < ventas.length; i++) {
        total = total + ventas[i]
    }
    for(let j = 0;j < retiros.length; j++){
        total = total - retiros[j]
    }
    if(total < 0){
        console.log("Advertencia caja en negativo");
        return 0;
    }
    return total
}

//console.log(calcularTotalCaja(100, ventasDelDia, retirosDelDia))

const paciente = { nombre: "Juan", edad: 30, motivoConsulta: "Dolor de rodilla" };

const { nombre: nombrePaciente, edad: edadPaciente } = paciente;
console.log(nombrePaciente);
console.log(edadPaciente);