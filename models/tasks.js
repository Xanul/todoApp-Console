const Task = require('./task');


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

  createTask( desc = '' ) {

    const task = new Task( desc );

    this._list[task.id] = task;

  }

}

module.exports = Tasks;