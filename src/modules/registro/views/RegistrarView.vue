<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStores';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');

const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
}

</script>

<template>
    <div>
        <Form :validation-schema="schema" @submit="onSubmit">
            <h1>Formulario de Registro</h1>
            <div class="form">
                <label for="nombre">Nombre: </label>
                <Field type="text" v-model="nombre" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo: </label>
                <Field type="email" v-model="email" name="email" id="correo" placeholder="Ingrese su email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
         </Form>
    </div>

</template>

<style scoped>

    .form {
        margin-bottom: 10px;
    }

</style>