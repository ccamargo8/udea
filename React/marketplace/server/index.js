const mongoose = require ("mongoose");
//Importar app
const app = require("./App");
//Importar puerto
const port = process.env.PORT || 3977;
//VErsión de la API
const { API_VERSION, IP_SERVER, PORT_DB } = require ("./config");


mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/web_personal`, //Llamar la conexión

//Validación de credenciales de conexión.
{useNewUrlParser: true }, (err, res) =>{
    if(err){
        throw err;
    }else{
        console.log("La conexión a la base de datos es correcta");

        app.listen(port, () =>{
            console.log("#########");
            console.log("###API RESTE###");
            console.log("#########");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        })
    }
});
