import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const HelloWorld = () => import('@/views/helloworld/HelloWorld')
const Select = () => import('@/views/select')
const Upload = () => import('@/views/upload')
const Rate = () => import('@/views/rate')
const Form = () => import('@/views/form')
const BasicForm = () => import('@/views/form/basicForm')
const AdvanceForm = () => import('@/views/form/advanceForm')
const BasicLayout = () => import('@/views/layout')
const CountTo = () => import('@/views/countTo')
const NotFound = () => import('@/views/notFound')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/test/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/basiclayout',
      name: 'BasicLayout',
      component: BasicLayout
    },
    {
      path: '/countto',
      name: 'CountTo',
      component: CountTo
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      children: [{
        path: '',
        name: 'BasicForm',
        component: BasicForm
      },
      {
        path: 'advanceform',
        name: 'BasicForm',
        component: AdvanceForm
      }]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
