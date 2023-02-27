require('colors');

const showMenu = () => {

  return new Promise((resolve, reject) => {

    console.clear();
    console.log('========================='.green);
    console.log(' Please select an option '.green);
    console.log('=========================\n'.green);

    console.log(`${'1.'.green} Create a new task`);
    console.log(`${'2.'.green} Show all tasks`);
    console.log(`${'3.'.green} Show completed tasks`);
    console.log(`${'4.'.green} Show pending tasks`);
    console.log(`${'5.'.green} Mark completed tasks`);
    console.log(`${'6.'.green} Delete a task`);
    console.log(`${'0.'.green} Exit \n`);

    // This creates the interface using a package from node and we use it for the input and output
    const readLine = require('readline').createInterface({
      input:process.stdin,
      output: process.stdout
    })

    readLine.question('Please select an option: ', (opt) => {
      readLine.close();
      resolve(opt);
    });

  })
}

const pause = () => {
  
  return new Promise((resolve, reject) => {
    const readLine = require('readline').createInterface({
      input:process.stdin,
      output: process.stdout
    })
  
    readLine.question(`Press  ${'ENTER'.green} to continue`, () => {
      readLine.close();
      resolve();
    })  
  })

}

module.exports = {
  showMenu,
  pause
}