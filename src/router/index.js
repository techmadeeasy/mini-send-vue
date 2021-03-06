import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewEmail from "@/views/NewEmail";
import EmailActivity from "@/views/EmailActivity";
import RecipientEmailList from "@/views/RecipientEmailList";
import ViewEmail from "@/views/ViewEmail";
import RecipientList from "@/views/RecipientList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-email',
    name: 'new-email',
    component: NewEmail
  },
  {
    path: '/email-activity',
    name: 'email-activity',
    component: EmailActivity
  },
  {
    path: '/recipient-emails/:id',
    name: 'recipient-emails',
    props: true,
    component: RecipientEmailList
  },
  {
    path: '/view-email/:id',
    name: 'view-email',
    props: true,
    component: ViewEmail
  },
  {
    path: '/recipient-list',
    name: 'recipient-list',
    component: RecipientList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
