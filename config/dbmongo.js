const mongoose = require('mongoose')

const db_uri = 'mongodb+srv://rockola4:lNapEc8q9rmcmjDp@cluster0.dgyji.mongodb.net/login?retryWrites=true&w=majority'



//`mongodb://localhost:27017/login`

/**
 * Por medio de este archivo hacemos la conexion con mongoDB
 */

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            db_uri,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) =>{
                if(err) {
                    console.log('We cant connect to database')
                }else{
                    console.log('DataBase connected')
                }
            }
        )
    }

    connect();

}