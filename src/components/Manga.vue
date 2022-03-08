<template >
  <v-container v-if="manga">
    <h2 style="text-align: center;">{{manga.title}}</h2>

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
            :src="imgUrl"
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
          <p class="mt-4 overflow-x">{{manga.synopsis}}</p>
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
              :to="{ name: 'mangas', query: { category: cat.mal_id } }"
              class="cat-rel"
              style="text-decoration: none;"
              role="button"
              v-for="(cat, indice) in manga.genres"
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
              :to="{ name: type(rel.type), params: { id: rel.mal_id } }"
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
        <v-col
          class="pa-3 d-flex justify-center"
          style="flex-direction: column;"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <h3>Mais informações:</h3>
          <div class="d-flex mt-4 more-info">
            <h4>Autor:</h4>
            <p>
              <a
                :href="aut.url"
                target="_blank"
                class="pl-2 aut"
                style="text-decoration: none;"
                role="button"
                v-for="(aut, indice) in manga.authors"
                :key="indice"
              >
                {{aut ? aut.name : ''}}
              </a>
            </p>
          </div>
          <div class="d-flex more-info">
            <h4>Status:</h4>
            <p class="pl-2">
              {{manga.status}}
            </p>
          </div>
          <div class="d-flex more-info">
            <h4>Tipo:</h4>
            <p class="pl-2">
              {{manga.type}}
            </p>
          </div>
          <div class="d-flex more-info">
            <h4>Volumes:</h4>
            <p class="pl-2">
              {{manga.volumes}}
            </p>
          </div>
          <div class="d-flex more-info">
            <h4>Capitulos:</h4>
            <p class="pl-2">
              {{manga.chapters}}
            </p>
          </div>
          <div class="d-flex more-info">
            <h4>Nota:</h4>
            <p class="pl-2">
              {{manga.scored}}
            </p>
          </div>
        </v-col>
      </template>
    </v-row>

    <span class="d-flex justify-end mr-2 ver-mais">
      <a
        :href="manga.url"
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
  name: 'Manga',
  data: () => ({

  }),
  props: {
    manga: {
      required: true
    },
    related: {
      required: true
    },
  },
  computed: {
    imgUrl () {
      let img = this.manga.images.jpg.image_url
      return img
    },
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
.aut {
  color: #fff;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
}

.more-info p {
  font-size: 16px;
}

.capa img {
  height: 350px;
  width: auto;
}

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