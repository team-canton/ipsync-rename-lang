<template>
    <div>
        <button @click="counter.count++" class="p-4 bg-sky-400">Increment Count</button>
        <div class="p-4 border text-xl w-max">{{ counter.count }}</div>
        <div @click="$router.push({ name: 'Profile' })" class="p-4 border w-max">Profile</div>
        <p class="font-sample text-4xl">Hello{{ (user.displayName !== null ? ' ' + user.displayName : ' pip') + '!'}}</p>
    </div>
</template>

<script setup>
import { useCounterMyVersion } from '../store/tests/counter';
import { userState } from '../store/authState'

const user = userState();

const counter = useCounterMyVersion();
</script>