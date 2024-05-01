<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todo';

const useTodo = useTodoStore();

onMounted(() => {

    useTodo.getAllTodos();
});

</script>

<template>

    <div class="container">
        <div class="row my-5">
            <div class="col-md-12">

                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title text-center"> Task List</h4>

                        <div class="row mb-3">

                            <div class="col-md-12">
                                <form action="">
                                    <label for="" class="form-label">
                                        <span v-if="!useTodo.isUpdate">Add New Task</span> 
                                        <span v-if="useTodo.isUpdate">Update Task</span> 
                                        
                                    </label>
                                    <input type="text" class="form-control" v-model="useTodo.formData.title">

                                    <button type="submit" class="btn btn-success mt-3"
                                        @click.prevent="useTodo.createTodo" v-if="!useTodo.isUpdate">Add task</button>

                                    <button type="submit" class="btn  mt-3"
                                        @click.prevent="useTodo.updateTodo(useTodo.editId)" :class="useTodo.isUpdate ? 'btn-primary' : '' " v-else>Update task</button>

                                </form>
                            </div>

                        </div>

                    </div>

                    <div class="card-body">
                        <h4 class="text-primary">Task Item</h4>
                        <hr>

                        <ul class="list-group mb-3">

                            <li class="list-group-item d-flex justify-content-between" v-for="todo in useTodo.todos"
                                :key="todo.id">

                                <div class="">

                                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
                                    <span :class="todo.completed ? 'text-decoration-line-through' : '' "> {{ todo.title
                                        }} </span>

                                </div>

                                <div class="">

                                    <a href="" class="text-info" @click.prevent="useTodo.getTodo(todo.id)"> <i class="fa-solid fa-edit me-4"></i></a>
                                    <a href="" class="text-danger" @click.prevent="useTodo.deletTodo(todo.id)"> <i class="fa-solid fa-xmark"></i></a>

                                </div>

                                
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<style scoped></style>
