// 导入vue
import Vue from "vue"

// 导入路由
import VueRouter from "vue-router"


// 注册
Vue.use(VueRouter)

import index from "../views/index/index.vue"
import login from "../views/login/login.vue"


// 创建路由对象
const router = new VueRouter({
    routes:[
        {
            path:"/index",
            component:index
        },
        {
            path:"/login",
            component:login
        },
    ]
    
})
export default router
