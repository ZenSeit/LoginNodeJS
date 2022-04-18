const bcrypt = require('bcrypt') 



/**
 * 
 * @param {*} textPlain 
 * @returns 
 * 
 * Con este metodo se busca encriptar la contraseña que suministra el usuaria con el fin de no almacenar la contraseña directamente
 */
const encrypt = async (textPlain) => { 
    const hash = await bcrypt.hash(textPlain, 10) 
    return hash
}


/**
 * 
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * @returns 
 * Este metodo permite comparar la contraseña en texto plano con la contraseña encriptada para dar acceso
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }