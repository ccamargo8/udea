const mongoose = require ("mongoose");
//Importar app
const app = require("./App");
//Importar puerto
const port = process.env.PORT || 3977;
//VErsión de la API
const { API_VERSION, IP_SERVER, PORT_DB } = require ("./config");


mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/marketplace`, //Llamar la conexión

//Validación de credenciales de conexión.
{useNewUrlParser: true}, (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("La conexión a la base de datos es correcta");

        app.listen(port,()=>{
            console.log("############################");
            console.log("##### API REST #####");
            console.log("############################");
            console.log(`http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/`);
        })
    }
});

