// https://www.youtube.com/watch?v=CWkD2kP6Wug
// Singleton Design Pattern -> means use only one instance of class
// Generally similar to state management

let instance;

class Logger {
  constructor() {
    if (instance) {
      throw new Error("Instance already created");
    }
    this.logs = [];
    instance = this;
  }
  getLogs() {
    this.logs.forEach((log) => {
      console.log(log);
    });
  }
  addLog(item) {
    this.logs.push(item);
  }
  countLogs() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = Object.freeze(new Logger());

export default logger;

// Its important to export only one instance of class rather than exporting the whole class as we need to use only one instance of class
