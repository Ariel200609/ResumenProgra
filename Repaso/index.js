const express = require('express');
const app = express();
app.use(express.json());

//modelos 
let id = 2;
let data = [{
    id: 1,
    nombre: "Sergio",
    email: "sergo@gmail.com",
    password: "1234"
}];

function getPacienteModel(){
    return new Promise ((resolve, reject) => {
        
        resolve(data);

        if (data.length = 0 ){
            
            reject( new Error("La lista esta vacia"))
        }
    });
}

function getPacienteporIdModel(id){
    
}
//fin de modelos


//controladores
function getPacientes(req, res) {
    getPacienteModel()
    .then((d) => {
        res.status(200).json('d');
    }).catch((error) => {
        res.status(400).json({ error: error.message })
    })
}

function getPacientePorId(req, res) {
    try {
        const id = req.params.id;

        if (!id) {
            throw new Error("ID inválido");
        }

        const paciente = data.find((p) => p.id == id);

        if (!paciente) {
            throw new Error("No existe el paciente " + id + " en la base de datos");
        }

        res.status(200).json({ paciente });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

function crearPaciente(req, res) {
    try {
        // const nombre = req.nombre;
        // const email = req.body.email;
        // const password = req.body.password;
        const { nombre, email, password } = req.body;

        if (nombre === undefined || nombre === null || nombre === "") {
            throw new Error("nombre Invalido");
        }
        if (password === undefined || password === null || password === "") {
            throw new Error(" Completa la contra gil ");
        }
        if (email === undefined | email === null | email === "") {
            throw new Error(" Completa email gil ");
        }

        // data=[...data,{
        //     id:1,
        //     nombre:"Sergio",
        //     email:"sergio@gmial.com",
        //     password:"1234"
        // }]
        data.push({
            id,
            nombre,
            email,
            password
        })
        id++;
        // res.status(201).json({mensaje:"Usuario creado correctamente"});
        res.status(202).json({ mensaje: `nombre:${nombre}, email:${email}, password:${password}` });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });

    }
}

function modificarPaciente(req, res) {
    const id = req.params.id;
    const { nombre, email, password } = req.body;

    try {
        if (!id) {
            throw new Error("ID inválido");
        }

        const paciente = data.find((p) => p.id == id);

        if (!paciente) {
            throw new Error("No existe el paciente " + id + " en la base de datos");
        }

        if (nombre === undefined || nombre === null || nombre === "") {
            throw new Error("nombre Invalido");
        }
        if (password === undefined || password === null || password === "") {
            throw new Error(" Completa la contra gil ");
        }
        if (email === undefined | email === null | email === "") {
            throw new Error(" Completa email gil ");
        }

        paciente.nombre = nombre;
        paciente.email = email;
        paciente.password = password;

        res.status(200).json({ mensaje: `Paciente ${paciente.nombre} modificado correctamente` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

function eliminarPaciente(req, res) {
    const id = req.params.id;

    try {
        if (!id) {
            throw new Error("ID inválido");
        }

        const paciente = data.find((p) => p.id == id);

        if (!paciente) {
            throw new Error("No existe el paciente " + id + " en la base de datos");
        }

        const index = data.indexOf(paciente);
        data.splice(index, 1);

        res.status(200).json({ mensaje: `Paciente ${paciente.nombre} eliminado correctamente` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}
//fin de controladores

//rutas 
app.get('/:id',getPacientePorId);

app.get('/',getPacientes);

app.post("/", crearPaciente);

app.put('/modificar/:id', modificarPaciente);

app.delete('/eliminar/:id', eliminarPaciente);
//fin de rutas 

app.listen(3000, () => {
    console.log('Hola Mundo');
    console.log('Servidor en el puerto 3000');
});
