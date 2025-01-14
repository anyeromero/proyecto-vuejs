<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStores';
// import { ref, watch } from 'vue';


const registrarStore = useRegistrarStore();

//esto de watch y las varibles lo use como el primer ejemplo, perp no era necesario por eso lo comento para hacerlo de otra manera, voy a borra el import de ref y watch
// const nombre = ref(registrarStore.nombre.value);
// const email = ref(registrarStore.email.value);

// //esto de watch lo usecomo el primer ejemplo
// watch(() => registrarStore.nombre, (newValue)=>{
//     nombre.value = newValue;
// });

// watch(() => registrarStore.email, (newValue) => {
//     email.value = newValue;
// })

</script>

<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }} </h3>
        <h3>Email: {{ registrarStore.email }}</h3>
        <ul>
            <li><RouterLink to="/contador">Contador</RouterLink></li>
            <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
            <li><router-link to="/registrar">Registrar</router-link></li> 
        </ul>
      
        

    </div>
</template>

<style>
    .sidebar{
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>