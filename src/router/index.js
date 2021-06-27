import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Policies from '../components/Policies.vue'
import homeBG from '../assets/images/bg.jpeg'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {bgImage: homeBG}
    },
    {
        path: '/policies/:yearFrom/:yearTo/:searchTerm?',
        name: 'Policies',
        props: true,
        component: Policies,
        meta: {bgImage: homeBG}
    },
]
// routes.afterEach(to=>{
//     if (to.meta && to.meta.bgImage){
//         document.body.style.backgroundImage = `url(${to.meta.bgImage})`
//         document.body.style.backgroundSize = `3000px`
//     }else{
//         document.body.style.backgroundImage = ""
//         document.body.style.backgroundSize = ""
//     }
// })


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router