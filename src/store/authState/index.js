import { defineStore } from "pinia";
import { ref } from "vue";

export const userState = defineStore('userState', () => {
    const isAuthenticated = ref(false)
    const displayName = ref('')
    
    const setState = (value) => {
      isAuthenticated.value = value
    }

    const setDisplayName = (name) => {
        displayName.value = name
    }
    return { isAuthenticated, setState, displayName, setDisplayName }
}) 