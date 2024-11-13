import { defineStore } from "pinia";
import { ref } from "vue";

export const userInfo = defineStore('userInfo', () => {
    const userId = ref('')

    const clearUserId = () => {
        userId.value = ''
    }

    return { userId, clearUserId }
})