import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AnimeView from '../views/AnimeView.vue'
import AboutView from '../views/AboutView.vue'
import MangaView from '../views/MangaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'animes'
  },
  {
    path: '/animes',
    name: 'animes',
    component: HomeView,
  },
  {
    path: '/animes/:category/:cat/page/:pag',
    name: 'animes-cat',
    component: HomeView,
  },
  {
    path: '/animes/anime/:id/',
    name: 'anime',
    component: AnimeView
  },
  {
    path: '/mangas',
    name: 'mangas',
    component: HomeView,
  },
  {
    path: '/mangas/:category/:cat/page/:pag',
    name: 'mangas-cat',
    component: HomeView,
  },
  {
    path: '/mangas/manga/:id',
    name: 'manga',
    component: MangaView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0, behavior: 'smooth' }
    }
  },
  routes
})

export default router
