<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todo';

const useTodo = useTodoStore();

onMounted(()=>{

    useTodo.getAllTodos();
})
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
                                    <label for="" class="form-label">Add New Task</label>
                                    <input type="text" class="form-control">

                                    <button type="submit" class="btn btn-success mt-3">Add task</button>
                                </form>
                            </div>

                        </div>

                    </div>

                    <div class="card-body">
                        <h4 class="text-primary">Task Item</h4>
                        <hr>

                        <ul class="list-group mb-3">

                            <li class="list-group-item d-flex justify-content-between" v-for="todo in useTodo.todos" :key="todo.id">
                                <span :class="todo.completed ? 'text-decoration-line-through' : '' "> {{ todo.title }} </span>
                                <a href=""
                                    class="text-danger"> <i class="fa-solid fa-xmark"></i></a></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<style scoped></style>
