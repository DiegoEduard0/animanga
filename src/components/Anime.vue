<template >
  <v-container v-if="anime">
    <h2 style="text-align: center;">{{anime.title}}</h2>
    <v-btn
      class="mx-2 mt-4"
      absolute
      color="primary"
      @click="back"
    >
      <v-icon dark>
        mdi-arrow-left
      </v-icon>
    </v-btn>

    <v-row class="mt-8 content">
      <template>
        <v-col
          class="pa-3 d-flex justify-center"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <v-img
            max-height="350"
            max-width="230"
            :src="imgUrl(anime.images)"
            class="rounded-xl"
          ></v-img>
        </v-col>
        <v-col
          class="pa-3 d-flex justify-center"
          style="flex-direction: column;"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <h3>Sinopse:</h3>
          <p class="mt-4 overflow-x">{{anime.synopsis}}</p>
        </v-col>
        <v-col
          class="pa-3 d-flex justify-center"
          style="flex-direction: column;"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <h3>Trailer:</h3>
          <iframe
            class="mt=4 iframe"
            :src="trailer(anime.trailer)"
          ></iframe>

        </v-col>
        <v-col
          class="pa-3 d-flex justify-center"
          style="flex-direction: column;"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <h3>Categorias:</h3>
          <p class="mt-4 overflow-x">
            <router-link
              :to="{ name: 'animes', query: { category: cat.mal_id } }"
              class="cat-rel"
              style="text-decoration: none;"
              role="button"
              v-for="(cat, indice) in anime.genres"
              :key="indice"
            >
              {{cat ? cat.name : ''}}
            </router-link>

          <h3>Relacionados:</h3>
          <p
            class="mt-4 overflow-x"
            v-if="related"
          >
            <router-link
              :to="{ name: rel.type, params: { id: rel.mal_id } }"
              class="cat-rel"
              style="text-decoration: none;"
              role="button"
              v-for="rel in relateds"
              :key="rel.mal_id"
            >
              {{rel ? rel.name : ''}}
            </router-link>
          </p>
        </v-col>
      </template>
    </v-row>

    <span class="d-flex justify-end mr-2 ver-mais">
      <a
        :href="anime.url"
        target="_blank"
      >
        Ver mais
      </a>
    </span>
  </v-container>
</template>

<script>
import router from '../router'

export default {
  name: 'Anime',
  data: () => ({

  }),
  props: {
    anime: {
      required: true
    },
    related: {
      required: true
    },
  },
  computed: {

    relateds () {
      let rel = [];
      let rels = [];
      this.related.forEach(r => {
        rel.push(r.entry);
      });
      for (let i = 0; i < rel.length; i++) {
        rel[i].forEach(r => {
          rels.push(r);
        });
      }
      return rels
    }
  },
  methods: {
    imgUrl (img) {
      return img ? img.jpg.image_url : ''
    },
    trailer (trailer) {
      return trailer ? trailer.embed_url : ''
    },
    type (type) {
      return type == 'anime' ? 'anime' : 'manga'
    },
    back () {
      router.go(-1)
    }
  },

  mounted () {
  },


}
</script>

<style scoped>
.cat-rel {
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
}

.cat-rel:hover {
  background-color: rgba(255, 127, 9, 0.616);
}

.overflow-x {
  max-height: 45vh;
  overflow-y: auto;
}
.iframe {
  border: none;
  width: 100%;
  height: 380px;
  border-radius: 5%;
}

.ver-mais a {
  color: rgb(255, 127, 9);
  text-decoration: none;
}

@media (max-width: 950px) {
  .content {
    display: flex !important;
    flex-direction: column !important;
  }
}
</style>