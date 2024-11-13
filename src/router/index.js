import { createWebHistory, createRouter } from 'vue-router'
import { auth } from '../firebase'

import Protected from '../Protected.vue'

import Auth from    '../Auth.vue'
import LoginPage from '../authPages/LoginPage.vue'
import SignupPage from '../authPages/SignupPage.vue'
import DashboardPage from '../protectedPages/DashboardPage.vue'
import ProfilePage from '../protectedPages/ProfilePage.vue'

import page404 from '../page404.vue'
import { onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/auth',
            name: 'Auth',
            component: Auth,
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: LoginPage
                },
                {
                    path: '/signup',
                    name: 'Signup',
                    component: SignupPage
                }
            ]
        },
        {
            path: '/',
            name: 'Protected',
            component: Protected,
            meta: {
                requiresAuth: { requiresAuth: true }
            },
            children: [
            {
                path: '',
                name: 'Dashboard',
                component: DashboardPage
            },
            {
                path: 'profile',
                name: 'Profile',
                component: ProfilePage
            }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'not-found',
            component: page404
        },
        
    ],

    scrollBehavior (to, from, savePosition) {
        return savePosition || new Promise((resolve) => {
            // resolve({ top: 0, behavior: 'smooth' })
            setTimeout(() =>  resolve({ top: 0 }), 300)
        })
    }

})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                console.log(user)
                unsubscribe()
                resolve(user)
            },
            reject
        ) 
    })
}
  
router.beforeEach(async (to) => {
    if (to.meta.requiresAuth && !(await getCurrentUser())) {
        return '/login'
    } else if ((to.name === 'Login' || to.name === 'Signup') && (await getCurrentUser())) {
        return '/'
    } else if(to.name === 'Auth') {
        return '/'
    }
})

export default router