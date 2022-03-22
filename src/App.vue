<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item class="justify-center">
          <v-list-item-avatar>
            <img src="./../public/logo.png">
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Animanga
            </v-list-item-title>

          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item
          link
          :to="{ name: 'animes' }"
        >
          <v-list-item-icon>
            <v-icon>mdi-movie</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Animes</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          :to="{ name: 'mangas' }"
        >
          <v-list-item-icon>
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Mangas</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-format-align-center</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Categorias</v-list-item-title>
        </v-list-item>
        <v-list
          nav
          dense
          class="categoria"
        >
          <v-list-item
            v-for="(c, indice) in categorias"
            :key="indice"
            link
            :to="{ name: type, params: { category: c[0], cat: c[1], pag: 1 } }"
          >
            <v-list-item-title style="margin-left: 49px;"><span>{{c[0]}}</span></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item
          link
          :to="{ name: 'sobre' }"
          style="margin-top: 3vh;"
        >
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sobre</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Animanga</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        color="gray"
        placeholder="Pesquisar"
        append-icon="mdi-magnify"
        style="margin-top: 23px !important;"
        v-model="text"
        @keyup.enter="search(text)"
      >

      </v-text-field>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer
      :rounded="true"
      padless
      class="mt-5"
    >
      <v-card-text class="text-center footer">
        <v-btn
          v-for="(link, indice) in links"
          :key="indice"
          class="mx-4 "
          icon
        >
          <a
            :href="link.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon size="24px">
              {{ link.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-col
        class="text-center pt-0"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Diego Eduardo</strong>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: null,
    categorias: [['Ação', 1], ['Aventura', 2], ['Carros', 3], ['Comédia', 4], ['Vanguarda/Demência', 5], ['Demônios', 6], ['Mistério', 7], ['Drama', 8], ['Ecchi', 9], ['Fantasia', 10], ['Jogos', 11], ['Hentai', 12], ['Histórico', 13], ['Horror', 14], ['Kids', 15], ['Artes Marciais', 17], ['Mecha', 18], ['Música', 19], ['Paródia', 20], ['Samurai', 21], ['Romance', 22], ['Escolar', 23], ['Sci Fi', 24], ['Shoujo', 25], ['Girls Love/Shoujo Ai', 26], ['Shounen', 27], ['Boys Love/Shounen Ai', 28], ['Espaço', 29], ['Esportes', 30], ['Super Poderes', 31], ['Vampiros', 32], ['Harem', 35], ['Slice of Life', 36], ['Sobrenatural', 37], ['Militar', 38], ['Policia', 39], ['Psicológico', 40]],
    anmCat: [['Suspense/Thriller', 41], ['Seinen', 42], ['Josei', 43], ['Award Winning', 46], ['Gourmet', 47], ['Work Life', 48], ['Erotica', 49]],
    manCat: [['Seinen', 41], ['Josei', 42], ['Doujinshi', 43], ['Gender Bender', 44], ['Suspense/Thriller', 45], ['Award Winning', 46], ['Gourmet', 47], ['Work Life', 48], ['Erotica', 49]],
    text: '',
    links: [
      {
        link: 'https://www.linkedin.com/in/diego-eduardo-link/',
        icon: 'mdi-linkedin'
      },
      {
        link: 'https://github.com/DiegoEduard0/animanga',
        icon: 'mdi-github'
      },
      {
        link: 'https://api.whatsapp.com/send?phone=5518991070115',
        icon: 'mdi-whatsapp'
      }
    ],

  }),
  watch: {
    '$route' (to) {
      this.categorias.splice(40, Number.MAX_VALUE);
      to.path.slice(0, 7) == '/animes' ?
        this.anmCat.forEach(cat => {
          this.categorias.push(cat)
        }) :
        this.manCat.forEach(cat => {
          this.categorias.push(cat)
        })
    }
  },
  computed: {
    type () {
      return this.$route.path.slice(0, 7) == '/animes' ? 'animes-cat' : 'mangas-cat'
    },
  },
  methods: {
    search (text) {
      this.$router.push({
        name: this.$route.path == '/animes' ? 'animes' : 'mangas',
        query: { search: text, page: 1 }
      }).catch(err => {
        if (
          err.name !== 'NavigationDuplicated' &&
          !err.message.includes('Avoided redundant navigation to current location')
        ) {
          console.error(err);
        }
      });
    }
  },
  mounted () {
    this.categorias.splice(40, Number.MAX_VALUE);
    this.$route.path == '/animes' ?
      this.anmCat.forEach(cat => {
        this.categorias.push(cat)
      }) :
      this.manCat.forEach(cat => {
        this.categorias.push(cat)
      })
  }
}
</script>

<style scoped>
.categoria {
  max-height: 49vh !important;
  overflow-y: auto;
}

.footer a {
  color: rgb(255, 127, 9);
  text-decoration: none;
}
</style>


<style>
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track-piece {
  background: transparent;
}

body::-webkit-scrollbar-track-piece {
  background: #121212;
}

*::-webkit-scrollbar-thumb {
  background: #ff7f09;
  border-radius: 5px;
}
</style>
