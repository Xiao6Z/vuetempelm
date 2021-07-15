import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const Orderlist = () => import("../views/OrderList.vue");
const Profile = () => import("../views/Profile.vue");
const Detail = () => import("../views/detailviews/Detail.vue");
const Bebuy = () => import("../views/detailviews/bebuy")
const Botcomment = () => import("../views/detailviews/botcomment")
const TakeOver = () => import("../views/takeover/takeoverlist")
const Add = () => import("../views/takeover/add")
const Edit = () => import("../views/takeover/edit")
const ConfirmOrder = () => import("../views/order/confirmorder")
const ChooseCity = () => import("../views/takeover/choosecity")
const Login = () => import("../views/Login/login")
const SignUp = () => import("../views/Login/signup")
const Mystar = () => import("../views/profile/mystar")
const Themelist = () => import("../views/homeviews/themelist")

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        redirect: '/home'
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/themelist",
        component: Themelist,
    },
    {
        path: "/login",
        component: Login,
    }, {
        path: "/signup",
        component: SignUp,
    }, {
        path: "/mystar",
        component: Mystar,
    },
    {
        path: '/choosecity',
        component: ChooseCity
    },
    {
        path: "/orderlist",
        component: Orderlist,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/detail/:id",
        component: Detail,
        children: [
            {
                path: "",
                redirect: 'bebuy'
            },
            {
                path: "bebuy",
                component: Bebuy,
            },
            {
                path: "botcomment",
                component: Botcomment,
            },
        ]
    },
    {
        path: "/takeover",
        component: TakeOver
    },
    {
        path: '/takeover/add',
        component: Add
    }, {
        path: '/takeover/:id/edit',
        component: Edit
    }, {
        path: '/confirmorder',
        component: ConfirmOrder
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});
// router.beforeEach((to, from, next) => {
//     // console.log(to);
//     // console.log(from);
//     // if (to.path.indexOf('/home') != -1 ||
//     //     to.path.indexOf('/orderlist') != -1 ||
//     //     to.path.indexOf('/profile') != -1
//     // ) {
//     //     this.show = true
//     // } else {
//     //     this.show = false
//     // }
//     next()
// });
export default router;
