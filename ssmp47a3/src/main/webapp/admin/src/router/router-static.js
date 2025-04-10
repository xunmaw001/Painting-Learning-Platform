import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xuesheng from '@/views/modules/xuesheng/list'
    import storeup from '@/views/modules/storeup/list'
    import discusskechengxinxi from '@/views/modules/discusskechengxinxi/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import discusswenzhangxinxi from '@/views/modules/discusswenzhangxinxi/list'
    import kechengleixing from '@/views/modules/kechengleixing/list'
    import zuoyexinxi from '@/views/modules/zuoyexinxi/list'
    import forum from '@/views/modules/forum/list'
    import zuoyeleixing from '@/views/modules/zuoyeleixing/list'
    import jiangshi from '@/views/modules/jiangshi/list'
    import kechenggoumai from '@/views/modules/kechenggoumai/list'
    import wenzhangxinxi from '@/views/modules/wenzhangxinxi/list'
    import config from '@/views/modules/config/list'
    import discusszuoyexinxi from '@/views/modules/discusszuoyexinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/discusskechengxinxi',
        name: '课程信息评论',
        component: discusskechengxinxi
      }
          ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
          ,{
	path: '/discusswenzhangxinxi',
        name: '文章信息评论',
        component: discusswenzhangxinxi
      }
          ,{
	path: '/kechengleixing',
        name: '课程类型',
        component: kechengleixing
      }
          ,{
	path: '/zuoyexinxi',
        name: '作业信息',
        component: zuoyexinxi
      }
          ,{
	path: '/forum',
        name: '论坛管理',
        component: forum
      }
          ,{
	path: '/zuoyeleixing',
        name: '作业类型',
        component: zuoyeleixing
      }
          ,{
	path: '/jiangshi',
        name: '讲师',
        component: jiangshi
      }
          ,{
	path: '/kechenggoumai',
        name: '课程购买',
        component: kechenggoumai
      }
          ,{
	path: '/wenzhangxinxi',
        name: '文章信息',
        component: wenzhangxinxi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/discusszuoyexinxi',
        name: '作业信息评论',
        component: discusszuoyexinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
