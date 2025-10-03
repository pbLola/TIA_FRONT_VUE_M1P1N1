const App = {
  data() {
    return {
      tasks: [],
      newTaskText: "",
    }
  },
  methods: {
            watch{
          tasks:{
                    handler(newTask){
                              localStorage.setItem('tasks', JSON.stringify(newTasks));
                    }
          },
          deep: true
  },
  created(){
          console.log('Aplicação Vue.js criada e pronta!');
          const storedTasks = localStorage.getItem('tasks');
          this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

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
    removeTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
      console.log("Tarefa removida com ID:", taskId)
    },
  },

Vue.createApp(App).mount("#app")
