<template>
  <div>
    <h1 class="text-center ma-4">{{title}}</h1>
    <h2
      class="text-center pt-10  "
      v-if="content.data && content.data.length === 0"
    >
      Nenhum resultado encontrado!
    </h2>
    <Home :content="content" />
    <div class="text-center">
      <v-pagination
        v-if="lastPage && content.data.length > 0"
        circle
        v-model="page"
        :length="lastPage"
        :total-visible="7"
        @input="trocarPagina"
      ></v-pagination>
    </div>
  </div>

</template>

<script>

import AnimeService from './../resources/anime/AnimeService'
import MangaService from './../resources/manga/MangaService'

// @ is an alias to /src
import Home from '@/components/Home.vue';
import router from '../router';

export default {
  name: 'HomeView',
  components: {
    Home
  },
  data: () => ({
    content: [],
    lastPage: undefined,
    page: 1,

  }),
  computed: {
    title () {
      if (this.$route.path.slice(0, 7) == '/animes') {
        if (this.$route.params.category) {
          return `Animes em ${this.$route.params.category}`
        }
        if (this.$route.query.search) {
          return `Resultados para "${this.$route.query.search}" em Animes`
        }
        return 'Top Animes'
      }
      if (this.$route.path.slice(0, 7) == '/mangas') {
        if (this.$route.params.category) {
          return `Mangas em ${this.$route.params.category}`
        }
        if (this.$route.query.search) {
          return `Resultados para "${this.$route.query.search}" em Mangas`
        }
        return 'Top Mangas'
      }
      return ''
    }
  },
  methods: {
    trocarPagina (event) {
      if (this.$route.params.cat) {
        router.push({ name: this.$route.path.slice(0, 7) == '/animes' ? 'animes-cat' : 'mangas-cat', params: { cat: this.$route.params.cat, pag: event } })
      } else if (this.$route.query.search) {
        router.push({ name: this.$route.path.slice(0, 7) == '/animes' ? 'animes' : 'mangas', query: { search: this.$route.query.search, page: event } })
      }
    },
    contentHome () {
      if (this.$route.path.slice(0, 7) == '/animes') {
        if (this.$route.params.cat) {
          AnimeService.getCategoryAnime(this.$route.params.cat, this.$route.params.pag).then(response => {
            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else if (this.$route.query.search) {
          AnimeService.getSearchAnime(this.$route.query.search, this.$route.query.page).then(response => {

            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else {
          AnimeService.getAnimes().then(response => {
            this.content = response.data
            this.lastPage = undefined
          })
        }
      } else if (this.$route.path.slice(0, 7) == '/mangas') {
        if (this.$route.params.cat) {
          MangaService.getCategoryManga(this.$route.params.cat, this.$route.params.pag).then(response => {
            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else if (this.$route.query.search) {
          MangaService.getSearchManga(this.$route.query.search, this.$route.query.page).then(response => {
            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else {
          MangaService.getMangas().then(response => {
            this.content = response.data
            this.lastPage = undefined
          })
        }
      }


    }

  },
  watch: {
    '$route' (to) {
      if (to.path.slice(0, 7) == '/animes') {
        if (to.query.search) {
          AnimeService.getSearchAnime(to.query.search, to.query.page).then(response => {
            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else {
          if (to.params.cat)
            AnimeService.getCategoryAnime(to.params.cat, this.$route.params.pag).then(response => {
              this.content = response.data
              this.lastPage = response.data.pagination.last_visible_page

            })
          else {
            this.contentHome();
          }
        }
      }
      if (to.path.slice(0, 7) == '/mangas') {
        if (to.params.cat) {
          MangaService.getCategoryManga(to.params.cat, to.params.pag).then(response => {
            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else if (to.query.search) {
          MangaService.getSearchManga(to.query.search, to.query.page).then(response => {
            this.content = response.data
            this.lastPage = response.data.pagination.last_visible_page
          })
        } else {
          MangaService.getMangas().then(response => {
            this.content = response.data
            this.lastPage = undefined
          })
        }
      }


    }
  },
  created () {
    this.contentHome();
  }
}
</script>
