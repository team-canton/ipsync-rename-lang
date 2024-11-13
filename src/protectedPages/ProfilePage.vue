<template>
    <div>
        <div class="p-4 text-xl border">{{ 'Reflected value from store: ' + a }}</div>
        <div @click="$router.push({ name: 'Dashboard' })" class="p-4 border w-max">Dashboard</div>
        <div @click="handleLogout" class="p-4 w-max border cursor-pointer">Logout</div>
        <p class="p-4 bg-sky-400">{{ user.displayName }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterMyVersion } from '../store/tests/counter';
import { userState } from '../store/authState'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';

const user = userState();

const counter = useCounterMyVersion();

const a = ref(counter.count)
const router = useRouter()
const handleLogout = () => {
    signOut(auth).then(() => {
        router.push({ name: 'Auth' })
    }).catch((error) => {

    })
}

</script>