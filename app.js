const { inquirerMenu, pause, readInput, deleteTaskOptions, confirm, checkTaskOptions } = require('./helpers/inquirer');
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
        tasks.showAllTasks();
        break;

      case "3":
        tasks.showCompletedPendingTasks(true);
        break;

      case "4":
        tasks.showCompletedPendingTasks(false);
        break;

      case "5":
        const ids = await checkTaskOptions( tasks.listArray );
        break;

      case "6":
        const id = await deleteTaskOptions( tasks.listArray );
        if ( id == 0 ) break;
        const confirmDelete = await confirm("Are you sure you want to delete?")
        
        if ( confirmDelete ) {
          tasks.delteTask( id );
          console.log("");
          console.log("Task Deleted");
        }

    }
    


    saveOnDatabase( tasks.listArray );

    if (opt !== '0') await pause();

  } while (opt !== '0');


}

main();