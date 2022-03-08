<template>
  <Anime
    :anime="anime"
    :related="related"
  ></Anime>

</template>

<script>

import { eventBus } from './../main'
import AnimeService from './../resources/anime/AnimeService'

import Anime from '@/components/Anime.vue'


export default {
  name: 'AnimeView',
  components: {
    Anime
  },
  data: () => ({
    anime: {},
    related: []
  }),
  watch: {
    '$route' (to) {
      eventBus.requestAnime(to.params.id);
      eventBus.$on('request-anime', () => {
        this.anime = eventBus.anime;
      })
      AnimeService.getRelatedAnime(to.params.id).then(response => {
        this.related = response.data.data
      })
    }
  },
  methods: {
    requestAnime (id) {
      eventBus.requestAnime(id);
      eventBus.$on('request-anime', () => {
        this.anime = eventBus.anime;
      })
      AnimeService.getRelatedAnime(id).then(response => {
        this.related = response.data.data
      })
    }
  },
  created () {
    this.requestAnime(this.$route.params.id);
  },
  destroyed () {
    eventBus.$off('request-anime')
  },
}
</script>