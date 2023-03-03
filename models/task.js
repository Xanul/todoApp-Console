const { v4: uuidv4 } = require('uuid');

class Task {

  id = '';
  desc = '';
  dateDone = null;

  constructor( desc ) {
    
    this.id = uuidv4();
    this.desc = desc;
    this.dateDone = null;

  }

}

module.exports = Task;