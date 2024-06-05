const { app } = require('./config');


//Ruta de las url
app.get('/', (req, res) => {
    res.render('index');
});

//Ruta para insertar formulario contactos
app.post('/submitContacto', (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;
    db.query('INSERT INTO contacts (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)', [nombre, email, telefono, mensaje], (err, result) => {
        if(err) {
            console.log(err);
            res.send('Error al insertar usuario');
        }else {
            console.log(result);
            res.render('contact', {message: 'Nos pondremos en contacto con usted en la brevedad.'});
        }
    });
});
