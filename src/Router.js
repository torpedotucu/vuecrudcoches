import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CrearCoches from "./components/CrearCoches.vue";

const myRoutes=[
    {
        path:'/',component:CochesComponent
    },
    {
        path:'/crear', component:CrearCoches
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;