const App = {
  data() {
    return {
      tasks: [],
      newTaskText: "",
    }
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() === "") {
        alert("A tarefa não pode estar vazia")
        return
      }
      const newTask = {
        id: Date.now(),
        text: this.newTaskText.trim(),
        done: false,
      }
      this.tasks.push(newTask)
      this.newTaskText = ""

      console.log("Nova tarefa adicionada:", newTask.text)
    },
    toggleDone(taskId) {
      const task = this.tasks.find((t) => t.id === taskId)
      if (task) {
        task.done = !task.done
        console.log(`Tarefa ${taskId} status alterado para: ${task.done}`)
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
      console.log("Tarefa removida com ID:", taskId)
    },
  },
}
Vue.createApp(App).mount("#app")
