<script setup>
import {ref} from 'vue';

const tareas = ref([]);
const nuevaTarea = ref('');

const addTareas = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}

const borrarTareas = (index) => {
    tareas.value.splice(index, 1);
}

</script>

<template>
    <div>
        <h1>Lista de tareas</h1>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTareas">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTareas">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<style>

</style>