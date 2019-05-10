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
import Kehu from '@/views/Kehu'

import Richangbaojie from '@/views/Richangbaojie'
import Shendubaojie from '@/views/Shendubaojie'
import Woshibaojie from '@/views/Woshibaojie'
import CleaningCard from '@/views/CleaningCard'
import Cleaner from '@/views/Cleaner'
import Repairman from '@/views/Repairman'
import JdCleaning from '@/views/JdCleaning'
import Wipeglass from '@/views/Wipeglass'
import Khbj from '@/views/Khbj'
import Xiaoban from '@/views/Xiaoban'
import Zhongban from '@/views/Zhongban'
import Daban from '@/views/Daban'
import Jingban from '@/views/Jingban'
import Qiyeban from '@/views/Qiyeban'
import Domestic from '@/views/Domestic'
import Propertydetails from '@/views/Propertydetails'
import Rule from '@/views/Rule'
import Overseas from '@/views/Overseas'
import Addkehu from '@/views/Addkehu'
import Worktable from '@/views/Worktable'
import Recod from '@/views/Recod'


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
//    children:[
//      {
//        path:"/baojie",
//        name:"Baojie",
//        component:Baojie
//      },
//      {
//        path:"/banjia",
//        name:"Banjia",
//        component:Banjia
//      },
//      {
//        path:"/weixiu",
//        name:"Weixiu",
//        component:Weixiu
//      }
//    ]
    },
    {
          path:"/baojie",
          name:"Baojie",
          component:Baojie,
     },  
      {
          path:"/weixiu",
          name:"Weixiu",
          component:Weixiu,
     },
    {
      path:'/richangbaojie',
      name:'Richangbaojie',
      component:Richangbaojie
    },
    {
    	path:'/shendubaojie',
    	name:'Shendubaojie',
      component:Shendubaojie
    },
    {
    	path:'/woshibaojie',
    	name:'Woshibaojie',
      component:Woshibaojie
    },
       
    {
    	path:'/cleaningcard',
    	name:'CleaningCard',
      component:CleaningCard  
    }, 
    
     {
    	path:'/cleaner',
    	name:'Cleaner',
      component:Cleaner  
    },
     {
    	path:'/repairman',
    	name:'Repairman',
      component:Repairman  
    },
     {
    	path:'/jdcleaning',
    	name:'JdCleaning',
      component:JdCleaning  
    },
    
    {
    	path:'/wipeglass',
    	name:'Wipeglass',
      component:Wipeglass  
    },
    {
    	path:'/khbj',
    	name:'Khbj',
      component:Khbj  
    },
    {
    	path:'/banjia',
    	name:'Banjia',
      component:Banjia,
      redirect:"/xiaoban",
      children:[
      			{
				    	path:'/xiaoban',
				    	name:'Xiaoban',
				      component:Xiaoban  
				    },
				    {
				    	path:'/zhongban',
				    	name:'Zhongban',
				      component:Zhongban  
				    },
				    {
				    	path:'/jingban',
				    	name:'Jingban',
				      component:Jingban  
				    },
				    {
				    	path:'/qiyeban',
				    	name:'Qiyeban',
				      component:Qiyeban  
				    },
				    {
				    	path:'/daban',
				    	name:'Daban',
				      component:Daban  
				    },
      ]
    },
    
    
    {
      path:"/maimai",
      name:"Maimai",
      component:Maimai
      /*children:[
        {
          path:"/haiwai",
          name:"Haiwai",
          component:Haiwai
        },
        {
          path:"/domestic",
          name:"Domestic",
          component:Domestic
        },
        {
          path:"/kehu",
          name:"Kehu",
          component:Kehu
        }
      ]*/
    },
        {
          path:"/domestic",
          name:"Domestic",
          component:Domestic
        },
        
        {
          path:"/overseas",
          name:"Overseas",
          component:Overseas
        }
        ,{
        	path:"/propertydetails",
          name:"Propertydetails",
          component:Propertydetails
        },
        {
        	path:"/rule",
          name:"Rule",
          component:Rule
        },
         {
        	path:"/addkehu",
          name:"Addkehu",
          component:Addkehu
        },
        {
        	path:"/worktable",
          name:"Worktable",
          component:Worktable
        },{
        	path:"/recod",
          name:"Recod",
          component:Recod
        }
        
        
  ]
})
