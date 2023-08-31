const mongoose = require('mongoose')

//connecting MongoDb
const connectToDb = async ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`Connected to DB : ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

module.exports = connectToDb