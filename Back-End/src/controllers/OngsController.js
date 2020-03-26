//Importando bibliotecas
const crypto = require('crypto');

//Conectando com o banco
const connection = require('../database/connection');

//Exportando um objeto com os métodoso
module.exports = {
    //Criando os métodos
    async index (request, response){
        const ongs = await connection('ongs').select('*');
     
        return response.json(ongs);
     },

    async create(request, response){
     const {name, email, whatsapp, city, uf} = request.body;
   
     const id = crypto.randomBytes(4).toString('HEX');

     await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
     });

     return response.json({ id });
  }
};