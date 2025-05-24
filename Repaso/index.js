const express = require('express');
const app = express();
app.use(express.json());
let id = 2;
let data = [{
    id: 1,
    nombre: "Sergio",
    email: "sergo@gmail.com",
    password: "1234"
}];

app.get('/', (req, res) => {

    res.status(200).json('data');

});

app.post("/", (req, res) => {
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
});

app.put('/modificar/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, email, password } = req.body;
    try {
        if (!paciente) {
            throw new Error("No existe el paciente" + id + " en la base de datos");
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


        if (id == undefined || id == null || id == "") {
            throw new Error("id Invalido");
        }


        const paciente = data.find((p) => p.id == id);
        if (!paciente) {
            throw new Error("No existe el paciente" + id + " en la base de datos");
        }
        paciente.nombre=nombre;
        paciente.email=email;
        paciente.password=password;

        res.status(200).json({paciente});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

app.delete('/eliminar/:id', (req, res) => {
    try{
    const id = req.params.id;
    const paciente = data.find((p) => {
        return p.id == id;
    })

    if (!paciente) {
        throw new Error("No existe el paciente" + id + " en la base de datos");
    }

    const index = data.indexOf(paciente);

    // const index= data.findIndex((p) => p.id == id);
    //     if (index == -1) {
    //         throw new Error("No existe el paciente" + id + " en la base de datos");
    //     }
    // data.splice(index, 1);
    data.splice(index, 1);
    res.status(200).json({ mensaje: `Paciente ${paciente.nombre} eliminado correctamente` });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

app.get('/id/:id', (req, res) => {
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
});


app.listen(3000, () => {
    console.log('Hola Mundo');
    console.log('Servidor en el puerto 3000');
});
