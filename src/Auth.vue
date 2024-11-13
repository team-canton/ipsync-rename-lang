<template>
    <RouterView />
</template>

<!-- <template>
    <div :class="`flex items-center justify-center ${ !isLoginSetup ? 'overflow-auto py-10' : 'w-screen h-screen'}`">
        <div class="shadow-[0rem_0.25rem_0.25rem_black] border border-black rounded-[1.25rem] bg-c5 px-9 pb-12 pt-9
            flex flex-col items-center justify-center">
            <span v-if="isLoginSetup" class="sm:text-[1.5rem] w-full text-center">WELCOME BACK TAGA-WEST!</span>
            <span v-else class="sm:text-[1.5rem] w-full text-center">CREATE NEW ACCOUNT</span>
            <IPSYNCLogo class="h-16" />
            <div class="rounded-[0.4375rem] border border-black py-2 sm:py-3 px-6 sm:px-12 bg-white text-xs sm:text-[1rem] mt-9">
                Continue with <span @click="loginGoogle" class="text-c1 underline cursor-pointer">Google</span> or 
                <span @click="loginGithub" class="text-c1 underline cursor-pointer">Github</span>
            </div>
            <div class="py-2 flex cursor-pointer gap-2">
                <GoogleIcon @click="loginGoogle" class="w-9 h-9 hover:scale-105" /> 
                <GithubIcon @click="loginGithub" class="h-9 w-9 hover:scale-105" />
            </div>
            <div class="flex items-center justify-center w-full">
                <span :class="`border-b border-black flex-grow ${ isLoginSetup ? 'md:w-[11rem]' : 'md:w-[12rem]'}`"></span>
                <div v-if="isLoginSetup" class="text-c1 px-2 md:px-12 text-xs sm:text-sm md:text-[1rem]">
                    Log in to your IPsync account
                </div>
                <div v-else class="text-c1 px-2 md:px-12 text-xs sm:text-sm md:text-[1rem]">
                    Or Sign up with email
                </div>
                <span :class="`border-b border-black flex-grow ${ isLoginSetup ? 'md:w-[11rem]' : 'md:w-[12rem]'}`"></span>
            </div>
            <div class="w-full sm:w-max">
                <div class="w-full flex flex-col items-end justify-center pt-6 text-[0.90rem] sm:text-[1rem]">
                    <span class="w-full text-start">Email <span class="text-red-500">*</span></span>
                    <input type="text" v-model="user.email.value" @blur="validateInput('email')"
                        class="w-full sm:w-[20rem] md:w-[32rem] py-1 sm:py-2 rounded-[0.4375rem] border border-black 
                        focus:outline-none px-2">
                    <span v-if="user.email.hasError" class="text-red-500 text-xs w-full text-start">
                        {{ user.email.errorMessage }}</span>
                    <span class="w-full text-start mt-4">Password <span class="text-red-500">*</span></span>
                    <div class="relative w-full">
                        <input :type="showPass ? 'text' : 'password'" 
                            v-model="user.password.value" @blur="validateInput('password')"
                            class="w-full sm:w-[20rem] md:w-[32rem] py-1 sm:py-2 rounded-[0.4375rem] border border-black 
                            focus:outline-none px-2">
                        <VisibilityOutline v-if="showPass" @click="showPass = false" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 cursor-pointer" />
                        <VisibilityOffOutline v-else @click="showPass = true" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 cursor-pointer" />
                    </div>
                    <span v-if="user.password.hasError" class="text-red-500 text-xs w-full text-start">
                        {{ user.password.errorMessage }}</span>
                    <span v-if="!isLoginSetup" class="w-full text-start mt-4">Password Confirmation <span class="text-red-500">*</span></span>
                    <div v-if="!isLoginSetup" class="relative w-full">
                        <input :type="showPassConfirmation ? 'text' : 'password'" 
                            v-model="user.password_confirmation.value" @blur="validateInput('password_confirmation')"
                            class="w-full sm:w-[20rem] md:w-[32rem] py-1 sm:py-2 rounded-[0.4375rem] border border-black 
                            focus:outline-none px-2">
                        <VisibilityOutline v-if="showPassConfirmation" @click="showPassConfirmation = false" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 cursor-pointer" />
                        <VisibilityOffOutline v-else @click="showPassConfirmation = true" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 cursor-pointer" />
                    </div>
                    <span v-if="user.password_confirmation.hasError" class="text-red-500 text-xs w-full text-start">
                        {{ user.password_confirmation.errorMessage }}</span>
                    <span v-if="emailAlreadyExist.hasError" class="text-red-500 text-xs w-full text-start">
                        {{  emailAlreadyExist.message }}
                    </span>
                    <button @click="handleLogin" 
                        class="rounded-[0.7rem] bg-c1 text-white py-1 sm:py-2 px-6 sm:px-8 mt-7">
                        Continue
                    </button>
                </div>
            </div>
            <div class="w-full text-center mt-8 flex flex-col gap-8 text-xs sm:text-base">
                <span class="border-b border-b-black w-full"></span>
                <span @click="isLoginSetup = false" v-if="isLoginSetup">Don’t have an IPsync account? 
                    <span class="text-c1 hover:underline cursor-pointer">Sign up</span>
                </span>
                <span @click="isLoginSetup = true" v-else>Already have an account? 
                    <span class="text-c1 hover:underline cursor-pointer">Login</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { auth, google, github } from './firebase'
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { reactive, ref } from "vue";

import IPSYNCLogo from "./components/IPSYNCLogo.vue";
import GoogleIcon from "./components/icons/GoogleIcon.vue";
import GithubIcon from "./components/icons/GithubIcon.vue";
import VisibilityOutline from './components/icons/VisibilityOutline.vue'
import VisibilityOffOutline from './components/icons/VisibilityOffOutline.vue'
 
const isLoginSetup = ref(true)
const showPass = ref(false)
const showPassConfirmation = ref(false)
const emailAlreadyExist = reactive({
    hasError: false, message: 'An error occurred. Please Try Again'
})

const user = reactive({
    // first_name: { value: '', hasError: false, errorMessage: '' },
    // last_name: { value: '', hasError: false, errorMessage: '' },
    email: { value: 'test@user.com', hasError: false, errorMessage: '' },
    // email_confirmation: { value: '', hasError: false, errorMessage: '' },
    password: { value: 'testing123', hasError: false, errorMessage: '' },
    password_confirmation: { value: 'testing123', hasError: false, errorMessage: '' },
    // confirmation_code: { value: '', hasError: false, errorMessage: '' },
})

const router = useRouter()
const redirectToDashboard = () => {
    router.push({ name: "Dashboard" })
}
  
const login = () => {
    signInWithEmailAndPassword(auth, user.email.value, user.password.value)
    .then((userCredential) => {
        // Signed in 
        thisUser.setDisplayName(userCredential.user.displayName)
        redirectToDashboard()
        // ...
    })
    .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
    });
}

import { userState } from './store/authState'
const thisUser = userState()
const loginGoogle = () => {

    signInWithPopup(auth, google)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // alert(result.user.displayName)
        thisUser.setDisplayName(result.user.displayName)
        redirectToDashboard();
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // The email of the user's account used.
        //   const email = error.customData.email;
        // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
  
const loginGithub = () => {
  
    signInWithPopup(auth, github)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        thisUser.setDisplayName(result.user.email)
        redirectToDashboard();
        // console.log(result)
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    });
}

const createUserAccount = () => {
    createUserWithEmailAndPassword(auth, user.email.value, user.password.value)
    .then((userCredential) => {
        // Signed up 
        thisUser.setDisplayName(userCredential.user.displayName)
        redirectToDashboard();
        // ...
    })
    .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        // console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
            emailAlreadyExist.hasError = true
            emailAlreadyExist.message = 'The email address is already registered.'
        }
    });
}


const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required')
        .matches(/^[^\s@]+@(?!.*\.\.)([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,}|com|wvsu\.edu\.ph)$/, 'Email must be a valid email address'),
    // email_confirmation: yup.string().required('Email confirmation is required')
    //     .test('emails-match', 'Emails must match', function (value) {
    //         return value === this.parent.email.value;
    //     }),
    // first_name: yup.string().required('First Name is required'),
    // last_name: yup.string().required('Last Name is required'),
    // confirmation_code: yup.string().required('Code is required')
    //     .length(8, 'Confirmation code is 8 characters long'),
    password: yup.string().required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
        // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        // .matches(/\d/, 'Password must contain at least one number'),
    password_confirmation: yup.string().required('Password confirmation is required')
        .test('password-match', 'Password must match', function (value) {
            return value === this.parent.password.value;
        }),
});

const validateInput = (name) => {
    validationSchema
        .validateAt(name, { ...user, [name]: user[name].value })
        .then(() => {
            user[name].hasError = false;
            user[name].errorMessage = '';
        })
        .catch((err) => {
            user[name].hasError = true;
            user[name].errorMessage = err.message;
        });
}

const handleLogin = () => {
    if(isLoginSetup.value && !user.email.hasError && !user.password.hasError) {
        login();
    } else if (!user.email.hasError && !user.password.hasError && !user.password_confirmation.hasError) {
        createUserAccount();
    }
}
</script> -->