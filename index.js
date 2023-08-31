//import app.js file
const Server = require('./app.js')

//define Port
const PORT = process.env.PORT


//Method for listening Client Request
Server.listen(PORT,()=>{
    console.log(`connect successfully Port :${PORT}`);
})
