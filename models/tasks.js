const Task = require('./task');
require('colors');


class Tasks {

  _list = {};

  constructor() {
    this._list = {};
  }

  delteTask( id = " " ) {

    if ( this._list[id] ) {
      delete this._list[id];
    }

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
  }

  showCompletedPendingTasks( completed = true ) {

    if ( this.listArray.length <= 0 ) {
      console.log("\nTask list is empty, please add a new task".green);
      return
    }

    console.log(" ");

    let taskNumber = 1;
    
    this.listArray.map( (task) => {

      const { desc, dateDone } = task;
      const idx = (dateDone) ? `${taskNumber + "."}`.green : `${taskNumber + "."}`.red;
      const state = (dateDone) 
                      ? "Completed".green
                      : "Pending".red

      if ( completed === true && dateDone !== null ) {
        console.log(`${idx} ${desc} ${state} ${dateDone}`)
        taskNumber ++;
      }
      else if ( completed === false && dateDone === null){
        console.log(`${idx} ${desc} ${state} ${dateDone}`);
        taskNumber ++;
      }

    })

  }

}

module.exports = Tasks;