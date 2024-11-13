<template>
    <div class="w-screen h-screen bg-c1 text-c4 flex flex-col items-center justify-center">
        <div class="py-4">404 page not found</div>
        <button class="px-8 py-2 border" @click="$router.push({ name: 'Dashboard'})">back to home...</button>
    </div>
</template>