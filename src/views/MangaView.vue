<template>
  <Manga
    :manga="manga"
    :related="related"
  ></Manga>

</template>

<script>

import { eventBus } from '../main'
import MangaService from './../resources/manga/MangaService'

import Manga from '@/components/Manga.vue'


export default {
  name: 'MangaView',
  components: {
    Manga
  },
  data: () => ({
    manga: null,
    related: null
  }),
  watch: {
    '$route' (to) {
      eventBus.requestManga(to.params.id);
      eventBus.$on('request-manga', () => {
        this.manga = eventBus.manga;
      })
      MangaService.getRelatedManga(to.params.id).then(response => {
        this.related = response.data.data
      })
    }
  },
  methods: {
    requestManga (id) {
      eventBus.requestManga(id);
      eventBus.$on('request-manga', () => {
        this.manga = eventBus.manga;
      })
      MangaService.getRelatedManga(id).then(response => {
        this.related = response.data.data
      })
    }
  },
  created () {
    this.requestManga(this.$route.params.id);
  },
  destroyed () {
    eventBus.$off('request-manga')
  },
}
</script>