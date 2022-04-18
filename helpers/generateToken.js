const jwt = require('jsonwebtoken') 

/**
 * 
 * @param {*} user 
 * @returns
 * 
 * Con el id del usuario se crea un token que permite el acceso al sitio
 */


const tokenSign = async (user) => { 
    return jwt.sign(
        {
            _id: user._id,
            name: user.name
        }, 
        process.env.JWT_SECRET, 
        {
            expiresIn: "30m", 
        }
    );
}

/**
 * 
 * @param {*} token 
 * @returns 
 * 
 * Con este metodo se verifica que el token que estamos recibiendo contiene una firma autorizada para continuar con la navegacion
 */
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { 
    return jwt.decode(token, null)
}



module.exports = { tokenSign, decodeSign, verifyToken }