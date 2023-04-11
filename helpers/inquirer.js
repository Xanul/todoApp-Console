const inquirer = require('inquirer');
require('colors');

// Main menu of the app
const inquirerMenu = async () => {

  const menuOpts = [
    {
      type: 'list',
      name: 'option',
      message: 'Please select an option',
      choices: [
        {
          value: '1',
          name: `${"1.".green} Create a new task`
        },
        {
          value: '2',
          name: `${"2.".green} Show all tasks`
        },
        {
          value: '3',
          name: `${"3.".green} Show completed tasks`
        },
        {
          value: '4',
          name: `${"4.".green} Show pending tasks`
        },
        {
          value: '5',
          name: `${"5.".green} Mark completed tasks`
        },
        {
          value: '6',
          name: `${"6.".green} Delete a tasks`
        },
        {
          value: '0',
          name: `${"0.".green} Exit`
        }
      ]
    }
  ]

  console.clear();
  console.log('========================='.green);
  console.log(' Please select an option '.white);
  console.log('=========================\n'.green);

  const {option} = await inquirer.prompt(menuOpts);

  return option;

}

// Pause option
const pause = async () => {
  
  const pauseMenu = [
    {
      type: 'input',
      name: 'pause',
      message: `Press ${'ENTER'.green} to continue`
    }
  ]

  console.log('\n')
  return inquirer.prompt(pauseMenu);

}

// Read input function
const readInput = async ( msg ) => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message: msg,
      validate(value) {
        if ( value.length === 0 ){
          return 'Please write a task'
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;

}

// Menu for deleting a task
const deleteTaskOptions = async ( tasks = [] ) => {

  // Using map to crate a list of tasks to delete
  const deleteOptions = tasks.map((task, i) => {

    const idx = `${i+1}.`.green

    return {
      value: task.id,
      name: `${idx} ${task.desc}`
    }
  })

  // Adding an option at the top to cancel the operation
  deleteOptions.unshift({
    value: '0',
    name: '0. '.green + "Cancel".red
  })

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: "Select a task to delete",
      choices: deleteOptions
    }
  ]

  const { id } = await inquirer.prompt(questions);

  return id;


}

// Function to confirm the operation 
const confirm = async ( message ) => {
  const confirmQuestion = [
    {
      type: 'confirm',
      name: 'ok',
      message: message
    }
  ];

  const { ok } = await inquirer.prompt(confirmQuestion);

  return ok;

}

// Function to check or uncheck the tasks
const checkTaskOptions = async ( tasks = [] ) => {

  // Using map to crate a list of tasks to check or uncheck
  const checkedOptions = tasks.map((task, i) => {

    const idx = `${i+1}.`.green

    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
      checked: ( task.dateDone ) ? true : false
    }
  })

  const checkMenu = [
    {
      type: 'checkbox',
      name: 'ids',
      message: "Select a task",
      choices: checkedOptions
    }
  ]

  const { ids } = await inquirer.prompt(checkMenu);

  return ids;

}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  deleteTaskOptions,
  confirm,
  checkTaskOptions
}