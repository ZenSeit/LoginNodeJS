const { encrypt, compare } = require("../helpers/handleBcrypt");
const { tokenSign } = require("../helpers/generateToken");
const userModel = require("../models/user");


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * 
 * Controlador para realizar la funcion de inicio de sesion, toma del body los parametros de email y password. Posteriormente
 * validad que el email exista, y verifica que las contraseñas coincidan para dar acceso
 */

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404).send({ error: "User not found" });
    }else{
      const checkPassword = await compare(password, user.password);


    const tokenSession = await tokenSign(user);

    if (checkPassword) {
      //res.send()
      res.send({
        tokenSession,
        nombre: user.name,
        role: user.role,
      });
      return;
    }else{
      return res.status(409).send({
        error: "Invalid password",
      });
    }

    }

} catch (e) {
    console.log(e);
    return res.status(500).send({ e: "Something is wrong" });
  }
};



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * Controlador para permitir el registro de usuarios, se piden parametros de email, passwors y name, en caso de que el email no
 * exista en la base de datos permite el registro, de lo contrario no permite realizar el proceso.
 */
const registerCtrl = async (req, res) => {
  try {

    const { email, password, name } = req.body;

    const user = await userModel.findOne({ email })

    if (user) {
      res.status(404).send({ error: "User is register already" });
    }else{

      const passwordHash = await encrypt(password); 
      const registerUser = await userModel.create({
        email,
        name,
        password: passwordHash,
      });
  
      res.send({ data: registerUser });
    }
  
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send({ e: "Something is wrong" });
  }
};

module.exports = { loginCtrl, registerCtrl };
