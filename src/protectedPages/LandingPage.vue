<template>
    <div class="w-full bg-[#113567] h-[3.80rem] text-white font-extrabold flex items-center justify-center">
        DUMMY NAVBAR LANG TOOO BIHH CHILLLL....
    </div>
    <div class="bg-image text-white">
        <div class="pt-[10rem] pl-[7.5rem] tracking-widest">
            <div class="font-black text-[3.25rem] w-[60%]">
                CONNECT, COLLABORATE, SUCCEED
            </div>
            <div class="font-extralight text-[1.25rem] w-[40%] pt-3 pb-6">
                Bridging Learning and Real-World Experience for Career-Ready Taga-West Students
            </div>
            <div class="flex flex-row">
    <button @click="$router.push({ name: 'Auth' })" class="pl-6 pr-3 py-2 bg-[#EBF1FD] text-[#113567] font-bold rounded-3xl flex items-center">
        GET STARTED 
        <MdiLightArrowRight class="w-[3rem] h-[2rem] ml-1 text-[#113567]"/>
    </button>
</div>
        </div>
    </div>
    <div class="bg-[#113567] h-[35vh] w-full text-white">
    <div class="text-center pt-6 text-[0.8rem] tracking-widest">IN COLLABORATION WITH</div>
    <div class="flex justify-between items-center px-[6rem]">
      <img src="/src/assets/images/googlelogo.png" alt="Google" class="h-[7rem] w-auto" />
      <img src="/src/assets/images/istio.png" alt="Istio" class="h-[7rem] w-auto" />
      <img src="/src/assets/images/jacquard.png" alt="Jacquard" class="h-[10rem] w-auto" />
      <img src="/src/assets/images/jigsaw.png" alt="Jigsaw" class="h-[7rem] w-auto" />
      <img src="/src/assets/images/justaline.png" alt="Justaline" class="h-[7rem] w-auto" />
      <img src="/src/assets/images/pegman2.png" alt="Pegman" class="h-[7rem] w-auto" />
      <img src="/src/assets/images/nest2.png" alt="Nest" class="h-[7rem] w-auto" />
    </div>
  </div>
  <div>
    hello
  </div>
</template>
<style scoped>
    .bg-image {
        background-image: url('./public/images/landingBg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 92vh;
    }
</style>
<script setup>
import MdiLightArrowRight from '../components/icons/MDILightArrowRight.vue'
</script>