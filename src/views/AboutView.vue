<template>
  <div class="text-center pa-4 sobre">
    <h1>Sobre:</h1>
    <p class="mt-16">Site desenvolvido com <a href="#">Vue JS</a>, <a href="#">Vuetify</a>, <a href="#">Vue Router</a> com o objetivo de testar minhas habilidades com essas tecnologias.</p>
    <p>No Backend foi utilizado a <a href="#">API Jikan</a> para fornecer os dados.</p>
    <p>Gostou do meu trabalho? Me mande um feedback, ele será de grande ajuda para mim:</p>
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4 "
      icon
    >
      <v-icon size="24px">
        {{ icon }}
      </v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-linkedin',
      'mdi-github',
      'mdi-whatsapp',
    ],

  }),
}
</script>

<style scoped>
.sobre a {
  color: rgb(255, 127, 9);
  text-decoration: none;
}
</style>
