<script setup>

</script>

<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
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