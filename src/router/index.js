import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Tenancy from '@/views/Tenancy'
import TenancyIndex from '@/views/TenancyIndex'
import Cotenancy from '@/views/Cotenancy'
import WholeRent from '@/views/WholeRent'
import Apartment from '@/views/Apartment'
import Mansion from '@/views/Mansion'
import Home from '@/views/Home'
import Message from '@/views/Message'
import Shopping from '@/views/Shopping'
import Landlord from '@/views/Landlord'
import Mine from '@/views/Mine'
import Fuwu from '@/views/Fuwu'
import Baojie from '@/views/Baojie'
import Banjia from '@/views/Banjia'
import Weixiu from '@/views/Weixiu'
import Maimai from '@/views/Maimai'
import Haiwai from '@/views/Haiwai'
import Guonei from '@/views/Guonei'
import Kehu from '@/views/Kehu'
import Detail from '@/views/detail'
import Fukuan from '@/views/Fukuan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      redirect:"/home",
      component: Index,
      children:[
        {
          path:"/home",
          name:"Home",
          component:Home
        },
        {
          path:"/message",
          name:"Message",
          component:Message
        },
        {
          path:"/shopping",
          name:"Shopping",
          component:Shopping
        },
        {
          path:"/landlord",
          name:"Landlord",
          component:Landlord
        },
        {
          path:"/mine",
          name:"Mine",
          component:Mine
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/tenancy',
      name: 'Tenancy',
      redirect:"/tenancyIndex",
      component: Tenancy,
      children:[
        {
          path:"/tenancyIndex",
          name:"TenancyIndex",
          component:TenancyIndex
        },
        {
          path: '/cotenancy',
          name: 'Cotenancy',
          component: Cotenancy
        },
        {
          path: '/wholeRent',
          name: 'WholeRent',
          component: WholeRent
        },
        {
          path: '/apartment',
          name: 'Apartment',
          component: Apartment
        },
        {
          path: '/mansion',
          name: 'Mansion',
          component: Mansion
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/fukuan',
          name: 'Fukuan',
          component: Fukuan
        }
      ]
    },
    {
      path:"/fuwu",
      name:"Fuwu",
      component:Fuwu,
      children:[
        {
          path:"/baojie",
          name:"Baojie",
          component:Baojie
        },
        {
          path:"/banjia",
          name:"Banjia",
          component:Banjia
        },
        {
          path:"/weixiu",
          name:"Weixiu",
          component:Weixiu
        }
      ]
    },
    {
      path:"/maimai",
      name:"Maimai",
      component:Maimai,
      children:[
        {
          path:"/haiwai",
          name:"Haiwai",
          component:Haiwai
        },
        {
          path:"/guonei",
          name:"Guonei",
          component:Guonei
        },
        {
          path:"/kehu",
          name:"Kehu",
          component:Kehu
        }
      ]
    }
  ]
})
