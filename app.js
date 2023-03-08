const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveOnDatabase, readDatabase } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

require('colors');

console.clear();

const main = async () => {

  let opt = "";
  const tasks = new Tasks();
  const tasksFromDB = readDatabase();

  if ( tasksFromDB ) {
    tasks.loadTasksFromArray( tasksFromDB );
  }

  do {

    // This functions prtins the menu and get the user input for opt (option)
    opt = await inquirerMenu();

    switch (opt) {
      case "1":

        const desc = await readInput("Please enter a task");
        tasks.createTask(desc);

        break;
      case "2":
        // console.log(tasks.listArray);
        tasks.showAllTasks();
        break;
    }
    


    saveOnDatabase( tasks.listArray );

    if (opt !== '0') await pause();

  } while (opt !== '0');


}

main();