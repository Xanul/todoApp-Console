const inquirer = require('inquirer');
require('colors');

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

const pauseMenu = [
  {
    type: 'input',
    name: 'pause',
    message: `Press ${'ENTER'.green} to continue`
  }
]

const inquirerMenu = async () => {

  console.clear();
  console.log('========================='.green);
  console.log(' Please select an option '.white);
  console.log('=========================\n'.green);

  const {option} = await inquirer.prompt(menuOpts);

  return option;

}

const pause = async () => {
  
  console.log('\n')
  return inquirer.prompt(pauseMenu);

}

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

module.exports = {
  inquirerMenu,
  pause,
  readInput
}