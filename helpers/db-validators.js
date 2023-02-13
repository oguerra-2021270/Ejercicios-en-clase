const Usuario = require('../models/usuario');
const Role = require('../models/role');


//Validamos en contra
const emailExiste = async( correo = '' ) => {
    
    //Verificar si el correo existe
    const existeEmailDeUsuario = await Usuario.findOne(  { correo }  );
    if (existeEmailDeUsuario) {
        throw new Error(`EL correo ${ correo }, ya esta registrado en la DB `);
    }
}

const esRoleValido =  async( rol = '' ) => {

    //Verificar si el rol es valido y existe en la DB
    const existeRolDB = await Role.findOne( { rol } );
    if ( !existeRolDB ) {
        throw new Error(`EL rol ${ rol }, no existe en la DB `);
    }
}

const existeUsuarioPorId = async( id ) => {
    const existIdUser = await Usuario.findById( id );
    if ( !existIdUser ) {
        throw new Error(`El id: ${id} no existe en la DB`)
    }
}

module.exports = {
    emailExiste,
    esRoleValido,
    existeUsuarioPorId
}