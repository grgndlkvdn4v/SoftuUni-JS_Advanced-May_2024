/**
 * @param {Number} budget
 * @param {Array} tasks
 * @param {Array} completedTasks
 */

class HomeRenovation {
  //TODO...
  constructor(budget) {
    this.budget = budget;
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask (description, cost, priority) {
  /**
   * @param {String} description
   * @param {Number} cost
   * @param {Number} priority
   */
  
    let message;
    if (cost > this.budget) {
        message = `Not enough budget to add '${description}' task.`
        return message
    }

    this.budget -= cost;
    let obj = {description, cost, priority}
    this.tasks.push(obj);
    message = `The task '${description}' has been successfully added to the renovation plan.`;

    return message
  }

  markTaskAsCompleted (description) {
    let message;
    const obj = this.tasks.find((obj) => obj.description === description);

    if (!obj) {
      message = `Task '${description}' not found in the renovation plan.`;
      throw new Error(message);
    }
    
    this.tasks = this.tasks.filter(obj => obj.description !== description);
    this.completedTasks.push(obj)

    message = `The task '${description}' has been successfully completed.`;
    return message
  }

  getPriorityTasksCount (minimalPriority) {
    let message;

    if (minimalPriority <= 0) {
      message = `The priority cannot be zero or negative.`;
      // throw new Error(message)
      return message
    }

    let greaterPrioArr = [];
    this.tasks.forEach(obj => {
      if (obj.priority >= minimalPriority) {
        greaterPrioArr.push(obj)
      }
    });

    if (greaterPrioArr.length) {
      message = `You have ${greaterPrioArr.length} tasks to prioritize.`;
    } else {
      message = `No tasks found with priority ${minimalPriority} or higher.`;
    }

    return message
  }

  renovationSummary() {
    let message;

    if (!this.completedTasks.length) {
      message = `No tasks have been completed yet!`;
      throw new Error(message);
    }

    message = `Budget left ${this.budget}$.\n`;
    message += `You have completed ${this.completedTasks.length} tasks.\n`;
    message += `Pending tasks in the renovation plan:\n`

    this.tasks.forEach(obj => {
      message += `${obj.description} - Cost: ${obj.cost}, Priority: ${obj.priority}\n`;
    });

    return message.trim()
  }

}


const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.addTask("Put furniture in the bedroom", 500, 3)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.getPriorityTasksCount(1)); 