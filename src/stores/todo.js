import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo',{

  state: () => ({

    todos: [],
    formData: {

      userId: 1,
      title: null,
      completed: false
    },
    isUpdate: false,
    editId: 0

  }),
  actions: {

   async getAllTodos(){

      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');

      // console.log(data);
      this.todos = data;

    },

    async createTodo(){

        const {data} = await axios.post('https://jsonplaceholder.typicode.com/todos',this.formData);
        this.todos.push(data);
        this.todos.reverse();
        this.formData.title = null;
        console.log(data);
    },

    async deletTodo(id){

      const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log(data);

     this.todos = this.todos.filter(todo => {

        return todo.id != id;

      });
    },
    async getTodo(id){

        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(data);
        this.formData.title = data.title;
        this.formData.userId = data.userId;
        this.formData.completed = data.completed;
        this.isUpdate = true;
        this.editId = data.id;

    },  
    async updateTodo(id){

        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,this.formData);
        console.log(data);
        this.todos.push(data);
        this.todos.reverse();
        this.formData.title = null;
        this.isUpdate = false;

    }

  },
  getters: {



  }

})
