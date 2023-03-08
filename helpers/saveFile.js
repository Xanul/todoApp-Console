const fs = require('fs');

const file = './database/data.json';

const saveOnDatabase = ( data ) => {

  fs.writeFileSync(file, JSON.stringify(data));

}

const readDatabase = () => {

  if ( !fs.existsSync( file ) ){
    return null;
  }

  const infoFromDatabase = fs.readFileSync( file, { encoding: 'utf-8' } );
  const data = JSON.parse( infoFromDatabase )

  return data;

}

module.exports = {
  saveOnDatabase,
  readDatabase
}