import {createRouter, createWebHashHistory} from "vue-router"

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/", component: () => import("@/components/HomePage")
        },
        {
            path: "/catalog", component: () => import("@/components/CarpetCatalog")
        },
        {
            path: "/contacts", component: () => import("@/components/Contacts")
        },
    ]
})
