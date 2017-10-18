import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

const Home = () => import('../views/home/home.vue')
const City = () => import('../views/city/city.vue')
const Login = () => import('../views/login/login.vue')
const Msite = () => import('../views/msite/msite.vue')
const Address = () => import('../views/address/address.vue')
const AddAddress = () => import('../views/addAddress/addAddress.vue')
const Shop = () => import('../views/shop/shop.vue')
const confirmOrder = () => import('../views/confirmOrder/confirmOrder.vue')
const Profile = () => import('../views/profile/profile.vue')
const Register = () => import('../views/register/register.vue')
const OrderList = () => import('../views/orderList/orderList.vue')

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    component: Home
                },
                {
                    path: '/city/:cityId',
                    component: City
                },
                {
                    path: '/login',
                    component: Login
                },
                {
                    path: '/msite',
                    component: Msite
                },
                {
                    path: '/address',
                    component: Address
                },
                {
                    path: '/addaddress',
                    component: AddAddress
                },
                {
                    path: '/shop/:shopId',
                    component: Shop
                },
                {
                  path: '/confirmOrder/:shopId',
                  component: confirmOrder
                },
                {
                  path: '/profile',
                  component: Profile
                },
                {
                  path: '/orderList',
                  component: OrderList
                },
                {
                  path: '/register',
                  component: Register
                },

            ]
        },
		{
            path: '*',
            redirect: App,
        }
    ]
})
