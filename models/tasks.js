const Task = require('./task');
require('colors');


class Tasks {

  _list = {};

  constructor() {
    this._list = {};
  }

  get listArray() {
    const list = [];
    // This tool goes trough all keys in the object
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  loadTasksFromArray = ( tasks = [] ) => {
    tasks.map( task => {
      this._list[task.id] = task
    })    
  }

  createTask( desc = '' ) {
    const task = new Task( desc );
    this._list[task.id] = task;
  }

  showAllTasks() {

    if ( this.listArray.length <= 0 ) {
      console.log("\nTask list is empty, please add a new task".green);
      return
    }

    console.log(" ");

    this.listArray.map( (task, i) => {

      const idx = `${i+1 + "."}`.green;
      const { desc, dateDone } = task;
      const state = (dateDone) 
                      ? "Completed".green
                      : "Pending".red

      console.log( `${idx} ${desc} :: ${state}` );

    })
    
    // console.log(" ");
    // this.listArray.map( ({id, desc, dateDone }, index) => {
    //   if ( dateDone != null ) {
    //     console.log( `${index+1}.`.green, `${desc} --->`, `${"Completed".green}`)
    //   } else {
    //     console.log( `${index+1}.`.red, `${desc} --->`, `${"Pending".red}`)
    //   }
    // })

  }

}

module.exports = Tasks;