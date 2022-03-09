import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AnimeView from '../views/AnimeView.vue'
import AboutView from '../views/AboutView.vue'
import MangaView from '../views/MangaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/animanga',
    redirect: 'animes'
  },
  {
    path: '/animanga/animes',
    name: 'animes',
    component: HomeView,
  },
  {
    path: '/animanga/animes/:category/:cat/page/:pag',
    name: 'animes-cat',
    component: HomeView,
  },
  {
    path: '/animanga/animes/anime/:id/',
    name: 'anime',
    component: AnimeView
  },
  {
    path: '/animanga/mangas',
    name: 'mangas',
    component: HomeView,
  },
  {
    path: '/animanga/mangas/:category/:cat/page/:pag',
    name: 'mangas-cat',
    component: HomeView,
  },
  {
    path: '/animanga/mangas/manga/:id',
    name: 'manga',
    component: MangaView
  },
  {
    path: '/animanga/sobre',
    name: 'sobre',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'hash',
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
