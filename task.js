function app() {
  return {
    newTask: "",
    tasks: [
      { body: "Go to the store", completed: false },
      { body: "study alpine.js", completed: true },
      { body: "finish the flutter app", completed: true },
    ],
    add() {
      this.tasks.push({ body: this.newTask, completed: false });
      this.newTask = "";
    },
  };
}
