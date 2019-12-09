import Vue from 'vue'
import router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import home from '../components/home.vue'
import contact from '../components/contact.vue'
import about from '../components/about.vue'

Vue.use(router)

export const  routes =[
    {
        path:'',
        name :'hello',
        component: Hello
    },
        {
        path:'/home',
        name :'home',
        component: home
    },
    {
        path:'/about',
        name :'about',
        component: about
    },
    {
        path:'/contact',
        name :'contact',
        component: contact
    }

]
