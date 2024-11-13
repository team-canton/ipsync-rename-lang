<template>
    <div class="flex items-center justify-center w-screen h-screen bg-c1 overflow-auto px-8 sm:px-0">
        <div v-if="!resetPassword" 
            class="shadow-[0rem_0.25rem_0.25rem_black] border border-black bg-white px-2 md:px-4 pt-7 md:pt-9 pb-5 
                w-full sm:w-[80%] md:w-[68%] flex flex-col items-center justify-center max-w-[62rem]">
            <div class="w-full flex justify-start pl-2 px-2"><IPSYNCLogo class="w-12 h-7 sm:w-16 sm:h-9 md:w-20 md:h-12"/></div>
            <div class="text-c1 font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] sm:-translate-y-2 md:-translate-y-6
                px-2">
                Sign In to IPSync
            </div>
            <div class="text-[0.6rem] sm:text-[0.65rem] md:text-[0.8rem] sm:-translate-y-2 md:-translate-y-6">
                Welcome back! Please sign in to continue.
            </div>
            <div class="flex flex-col items-center w-full sm:w-[20rem] md:w-[24rem] gap-3 md:gap-4 py-4 sm:-translate-y-2 px-4 sm:px-0
                    md:-translate-y-6">
                <div @click="loginGoogle"
                    class="flex items-center justify-center border border-black w-full text-xs sm:text-[0.90rem] md:text-[1rem] 
                        py-3 md:py-4 relative shadow cursor-pointer">
                    <GoogleIcon @click="loginGoogle" class="w-[1.12rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] md:w-[1.75rem] 
                        md:h-[1.75rem] absolute left-3 top-1/2 -translate-y-1/2" /> 
                    signin with Google
                </div>
                <div @click="loginGithub"
                    class="flex items-center justify-center border border-black w-full text-xs sm:text-[0.90rem] md:text-[1rem]   
                        py-3 md:py-4 relative shadow cursor-pointer">
                    <GithubIcon @click="loginGoogle" class="w-[1.12rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] md:w-[1.75rem] 
                        md:h-[1.75rem] absolute left-3 top-1/2 -translate-y-1/2" /> 
                    signin with Github
                </div>
                <div class="flex items-center justify-center w-full sm:my-1">
                    <span class="border-b border-black flex-grow"></span>
                    <div class="px-2 md:px-4 text-[0.6rem] sm:text-xs md:text-[1rem]">
                        or
                    </div>
                    <span class="border-b border-black flex-grow"></span>
                </div>
                <div class="w-full flex flex-col items-end justify-center gap-3 md:gap-4">
                    <div class="w-full">
                        <input type="text" v-model="user.email.value" @blur="validateInput('email')"
                            @focus="hasError.value = false"
                        class="w-full py-3 border border-black focus:outline-none px-4 text-xs sm:text-[0.90rem] md:text-[1rem]
                            placeholder:font-light shadow"
                            placeholder="Email Address">
                        <span v-if="user.email.hasError" class="text-red-500 text-xs w-full text-start">
                            {{ user.email.errorMessage }}</span>
                    </div>
                    <div class="w-full">
                        <div class="relative w-full">
                            <input :type="showPass ? 'text' : 'password'" 
                                v-model="user.password.value" @blur="validateInput('password')"
                                @input="hasError.value = false"
                                class="w-full py-3 border border-black focus:outline-none px-4 text-xs sm:text-[0.90rem] 
                                    md:text-[1rem] placeholder:font-light shadow"
                                placeholder="Password">
                            <VisibilityOutline v-if="showPass" @click="showPass = false" 
                                class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 cursor-pointer" />
                            <VisibilityOffOutline v-else @click="showPass = true" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 cursor-pointer" />
                        </div>
                        <span v-if="user.password.hasError" class="text-red-500 text-xs w-full text-start">
                            {{ user.password.errorMessage }}</span>
                        <span v-if="hasError.value" class="text-red-500 text-xs w-full text-start">
                            {{  hasError.message }}
                        </span>
                        <div class="w-full flex justify-start text-[0.6rem] sm:text-xs md:text-[0.80rem] gap-1 my-1 md:mt-3">
                            Forgot your password? 
                            <span @click="resetPassword = true" 
                                class="font-bold text-c1 cursor-pointer hover:underline">Reset</span>
                        </div>
                    </div>
                    <div class="w-full">
                        <button @click="handleLogin" 
                            class="rounded-[1.87rem] bg-c1 text-white py-[0.4rem] sm:py-[0.5rem] md:py-[0.75rem] my-1 md:my-3 
                            w-full text-xs sm:text-[0.90rem] md:text-[1rem] font-semibold active:scale-[99%]">
                            LOGIN
                        </button>
                        <div class="w-full text-center text-[0.6rem] sm:text-xs md:text-[0.80rem]">
                            Don’t have an account? 
                            <span @click="$router.push({ name: 'Signup' })" class="font-bold text-c1 cursor-pointer hover:underline">Sign up</span>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
        <div v-if="resetPassword"
            class="flex flex-col gap-4 p-8 bg-white shadow-[0rem_0.25rem_0.25rem_black] border border-black">
            Enter email address
            <div class="w-[24rem]">
                <input type="text" v-model="user.email.value" @blur="validateInput('email')"
                    class="w-full py-3 border border-black focus:outline-none px-4 text-xs sm:text-[0.90rem] md:text-[1rem]
                        placeholder:font-light shadow"
                        placeholder="Email Address">
                <span v-if="user.email.hasError" class="text-red-500 text-xs w-full text-start">
                    {{ user.email.errorMessage }}</span>
            </div>
            <div class="w-full flex flex-col items-center gap-2">
                <button @click="handleReset" 
                    class="rounded-[1.5rem] bg-c1 text-white py-[0.4rem] sm:py-[0.5rem] md:py-[0.75rem] mt-1 md:mt-3 
                    w-[10rem] text-xs sm:text-[0.90rem] md:text-[1rem] font-semibold active:scale-[99%]">
                    Send
                </button>
                <span @click="resetPassword = false" 
                    class="text-[0.6rem] sm:text-xs md:text-[0.80rem] w-full text-start">Back to 
                    <span class="text-c1 font-semibold cursor-pointer hover:underline">Login</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { auth, google, github } from '../firebase'
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { reactive, ref } from "vue";

import IPSYNCLogo from "../components/IPSYNCLogo.vue";
import GoogleIcon from "../components/icons/GoogleIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import VisibilityOutline from '../components/icons/VisibilityOutline.vue'
import VisibilityOffOutline from '../components/icons/VisibilityOffOutline.vue'

import { toast } from "../funtions";

const showPass = ref(false)
const hasError = reactive({
    value: false, message: 'An error occurred please try again.'
})
const buttonLock = ref(false)
const resetPassword = ref(false)

const user = reactive({
    // first_name: { value: '', hasError: false, errorMessage: '' },
    // last_name: { value: '', hasError: false, errorMessage: '' },
    email: { value: '', hasError: false, errorMessage: '' },
    // email_confirmation: { value: '', hasError: false, errorMessage: '' },
    password: { value: '', hasError: false, errorMessage: '' },
    // password_confirmation: { value: 'testing123', hasError: false, errorMessage: '' },
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
        const errorCode = getErrorMessage(error.code)
        alert(error.code)
        hasError.value = true;
        hasError.message = errorCode;
		buttonLock.value = false;
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(error.code)
    });
}

import { userState } from '../store/authState'
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
        const errorCode = getErrorMessage(error.code)
        hasError.value = true;
        hasError.message = errorCode;
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
        const errorCode = getErrorMessage(error.code)
        hasError.value = true;
        hasError.message = errorCode;
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
    // password_confirmation: yup.string().required('Password confirmation is required')
    //     .test('password-match', 'Password must match', function (value) {
    //         return value === this.parent.password.value;
    //     }),
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
    if(!user.email.hasError && !user.password.hasError && !buttonLock.value) {
        login();
        buttonLock.value = true;
    }
}

const getErrorMessage = (error) => {
  switch (error) {
    case 'auth/invalid-email':
      return 'Invalid Email';
    case 'auth/missing-password':
      return 'Missing password';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/account-exists-with-different-credential':
      return 'Account exists with different credential';
    case 'auth/invalid-credential':
      return 'Invalid credential';
    case 'auth/too-many-requests':
      return 'Too many requests';
    default:
      return 'An error occurred please try again.';
  }
}
const handleReset = () => {
    validateInput('email')
    setTimeout(() => {
        if(!user.email.hasError) {
            sendPasswordResetEmail(auth, user.email.value)
            .then(() => {
                // Password reset email sent!
                // ..
                toast();
                setTimeout(() => {
                    resetPassword.value = false
                }, 1600)
            })
            .catch((error) => {
                const errorCode = getErrorMessage(error.code)
                user.email.errorMessage = errorCode;
                user.email.hasError = true;
                // alert(error.code)
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
        }
    }, 50)
}
</script>