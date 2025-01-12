<script setup>
import { ref } from "vue";

const contador = ref(0);

const incrementar = () => {
  
  if (contador.value >= 5) {
    return 
  }
  contador.value++;
}

const decrementar = () => {
  
  if (contador.value <= 0) {
    return 
  }
  contador.value--
}

</script>

<template>
  <h1>Hola Mundo</h1>

  <P> {{ contador }}</P>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
  
</template>

<style scoped>

P {
  color: red;
}
</style>
