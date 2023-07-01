
/*
Чтобы создать роутер, нам нужно извлечь
createRouter и createWebHistory из Vue Router.
createRouter позволяет нам создать новый экземпляр маршрутизатора,
одновременно createWebHistory создавая историю HTML5, которая по сути является оболочкой для History API.
Это позволяет Vue Router манипулировать адресом в адресной строке, когда мы перемещаемся между страницами
*/

import {createRouter, createWebHashHistory} from "vue-router"

// маршруты, сопоставленные с компонентами
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
            path: "/menu", component: () => import("@/components/MainMenu")
        },
        {
            path: "/MyFooter", component: () => import("@/components/MyFooter")
        },
        {
            path: "/CarpetCart", component: () => import("@/components/CarpetCart")
        },
        {
            path: "/CatalogItem", component: () => import("@/components/CatalogItem")
        },
        {
            path: "/Services", component: () => import("@/components/CarpetServices")
        },
        {
            path: "/Delivery", component: () => import("@/components/CarpetDelivery")
        },
        {
            path: "/Payment", component: () => import("@/components/CarpetPayment")
        },
        {
            path: "/Promotion", component: () => import("@/components/CarpetPromotion")
        },
        {
            path: "/Contacts", component: () => import("@/components/CarpetContact")
        },
        {
            path: "/Reviews", component: () => import("@/components/CarpetReviews")
        },


    ]
})
