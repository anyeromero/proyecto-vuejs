import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar', () => {
    const nombre = ref('');
    const email = ref('');

    const guardarRegistro = (nombreFormulario, emailFormularrio) => {
        nombre.value = nombreFormulario;
        email.value = emailFormularrio;
    }

    return { nombre, email, guardarRegistro}
});