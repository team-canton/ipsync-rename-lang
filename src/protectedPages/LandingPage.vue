<template>

    <div class="w-full bg-[#113567] h-[3.8rem] text-white font-extrabold flex items-center justify-center text-sm md:text-base">
        DUMMY NAVBAR LANG TOOO BIHH CHILLLL....
    </div>


    <div class="bg-image text-white">
        <div class="pt-[10rem] px-6 text-center md:text-left md:pt-[10rem] md:pl-[7.5rem] sm:pt-[12rem] tracking-widest">
            <div class="font-black text-[2.5rem] md:text-[3.25rem] md:w-[60%] sm:text-[3rem] leading-tight">
                CONNECT, COLLABORATE, SUCCEED
            </div>
            <div class="font-extralight text-[1rem] md:text-[1.25rem] md:w-[40%] pt-3 pb-6">
                Bridging Learning and Real-World Experience for Career-Ready Taga-West Students
            </div>
            <div class="flex justify-center md:justify-start">
                <button 
                    @click="$router.push({ name: 'Auth' })" 
                    class="pl-6 pr-3 py-2 bg-[#EBF1FD] text-[#113567] font-bold rounded-3xl flex items-center">
                    GET STARTED 
                    <MdiLightArrowRight class="w-[2rem] md:w-[3rem] h-[1.5rem] md:h-[2rem] ml-1 text-[#113567]" />
                </button>
            </div>
        </div>
    </div>


    <div class="bg-[#113567] h-auto w-full text-white py-8 md:h-auto">
        <div class="text-center text-[0.8rem] md:text-[1rem] tracking-widest mb-6">
            IN COLLABORATION WITH
        </div>
        <div class="flex flex-wrap justify-around gap-10 px-20 md:px-[6rem]">
            <img src="/src/assets/images/googlelogo.png" alt="Google" class="h-[5rem] w-auto" />
            <img src="/src/assets/images/istio.png" alt="Istio" class="h-[5rem] w-auto" />
            <img src="/src/assets/images/jigsaw.png" alt="Jigsaw" class="h-[5rem] w-auto" />
            <img src="/src/assets/images/justaline.png" alt="Justaline" class="h-[5rem] w-auto" />
            <img src="/src/assets/images/pegman2.png" alt="Pegman" class="h-[5rem] w-auto" />
            <img src="/src/assets/images/nest2.png" alt="Nest" class="h-[5rem] w-auto" />
        </div>
    </div>


    <div class="mt-[5rem] md:mt-[10rem] px-6 md:px-[10%] text-center">
        <div class="text-[#113567] font-black text-[2rem] md:text-[3rem] sm:text-[2.3rem] leading-tight">
            IPSync is the bridge between academic learning and career success.
        </div>
        <div class="text-[#113567] font-medium text-[0.75rem] md:text-[1.25rem] mt-6">
            Our platform connects students, faculty, and industry partners, offering hands-on experience through internships and projects to help students gain real-world skills in their fields.
        </div>
        <div class="flex flex-wrap justify-center gap-4 mt-10 mb-14 md:mt-20 md:mb-20">
            <img src="/src/assets/images/register.png" alt="Register" class="h-[8rem] md:h-[12rem] w-auto" />
            <img src="/src/assets/images/explore.png" alt="Explore" class="h-[8rem] md:h-[12rem] w-auto" />
            <img src="/src/assets/images/experience.png" alt="Experience" class="h-[8rem] md:h-[12rem] w-auto" />
            <img src="/src/assets/images/achievement.png" alt="Achievement" class="h-[8rem] md:h-[12rem] w-auto" />
        </div>
    </div>

    <!-- Mission Section -->
    <div class="bg-[#113567] py-10 md:py-[8rem] px-6 md:px-[8rem] text-white text-center md:text-left">
        <div class="font-extrabold text-[2rem] md:text-[3rem] leading-tight">
            We want to build a world where candidates are considered equally on their merits.
        </div>
        <div class="font-light text-[1rem] md:text-[1.5rem] md:w-[70%] mt-4">
            We're here to ensure that your skills, grit, and drive are recognized and rewarded.
        </div>
        <div class="flex justify-center md:justify-start mt-6">
            <button 
                @click="$router.push({ name: 'Auth' })" 
                class="pl-6 pr-3 py-2 bg-[#EBF1FD] text-[#113567] font-bold rounded-2xl flex items-center">
                JOIN NOW
                <MdiLightArrowRight class="w-[2rem] md:w-[3rem] h-[1.5rem] md:h-[2rem] ml-1 text-[#113567]" />
            </button>
        </div>
    </div>

    <!-- Testimonial Section -->
    <div class="mt-10 md:mt-20 px-6 text-center">
        <div class="text-[#113567] font-black text-[2rem] md:text-[3rem] leading-tight">
            Too good to be true? Hear from real students.
        </div>
    </div>
</template>

<style scoped>
.bg-image {
    background-image: url('/src/assets/images/landingBg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
}

@media (min-width: 48rem) {
    .bg-image {
        height: 92vh; 
    }
}
</style>

<script setup>
import MdiLightArrowRight from '../components/icons/MDILightArrowRight.vue';
</script>
