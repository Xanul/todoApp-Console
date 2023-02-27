const { showMenu, pause } = require('./helpers/mensajes');

require('colors');

console.clear();

const main = async () => {

  let opt = "";

  do {

    opt = await showMenu();
    
    if (opt !== '0') await pause();

  } while (opt !== '0');


}

main();