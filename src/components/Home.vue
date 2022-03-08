<template>

  <v-container>
    <v-row>
      <template v-for="cont in content.data">
        <v-col
          class="pa-3"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          :key="cont.mal_id"
        >
          <v-card
            color="transparent"
            class="mx-auto rounded-xl card"
            width="250"
            height="400"
            link
            :to="{ name: contentType , params: { id: cont.mal_id } }"
          >
            <v-img
              :src="cont.images.jpg.image_url"
              width="100%"
              height="90%"
              class="rounded-xl"
            ></v-img>
            <div class="title">
              <p>
                {{cont.title}}
              </p>
            </div>
          </v-card>
        </v-col>

      </template>
    </v-row>
  </v-container>

</template>

<script>


export default {
  name: 'Home',
  data: () => ({
  }),
  computed: {
    contentType () {
      return this.$route.path == '/animes' ? 'anime' : 'manga'
    }
  },
  props: {
    content: {
      type: [Array, Object],
      required: false
    }
  },

  mounted () {


  }
}
</script>

<style scoped>
.card:hover {
  transform: scale(1.01);
  cursor: pointer;
}

.title {
  height: 10%;
}

.title p {
  margin: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>