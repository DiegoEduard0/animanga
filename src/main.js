import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import AnimeService from './resources/anime/AnimeService'
import MangaService from './resources/manga/MangaService'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: () => ({
    anime: [],
    manga: [],
  }),
  methods: {
    requestAnime (id) {
      AnimeService.getAnime(id).then(response => {
        this.anime = response.data.data
        this.$emit('request-anime');
      })
    },
    requestManga (id) {
      MangaService.getManga(id).then(response => {
        this.manga = response.data.data
        this.$emit('request-manga');
      })
    }
  },
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
