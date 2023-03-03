const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

require('colors');

console.clear();

const main = async () => {

  let opt = "";
  const tasks = new Tasks();

  do {

    // This functions prtins the menu and get the user input for opt (option)
    opt = await inquirerMenu();

    switch (opt) {
      case "1":

        const desc = await readInput("Please enter a task");
        tasks.createTask(desc);

        break;
      case "2":
        console.log(tasks.listArray);
        break;
    }
    
    if (opt !== '0') await pause();

  } while (opt !== '0');


}

main();