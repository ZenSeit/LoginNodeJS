const mongoose = require('mongoose')


/**
 * Se creea el modelo del usuario que se va a recibir en la aplicacion
 */

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('user', UserScheme)