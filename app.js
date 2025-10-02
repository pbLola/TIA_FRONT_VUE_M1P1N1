const App = {
          data(){
                    return{
                              tasks: [], newTaskText: ''
                    }
          },
          addTask(){
                    if(this.newTaskText.trim()=== ''){
                              alert('A tarefa não pode estar vazia')
                              return;
                    }
                    const newTask = {
                              id: Date.now(),
                              Text: this.newTaskText.trim()
                              done: false
                    };
                    this.tasks.push(newTask);
                    this.newTaskText = '';

                    console.log('Nova tarefa adicionada:', newTask.text);
          }
          removeTask(taskId){
                    this.tasks = this.tasks.filter(task => task.id !== taskId)
          }
}