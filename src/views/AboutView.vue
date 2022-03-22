<template>
  <div class="text-center pa-4 sobre">
    <h1>Sobre:</h1>
    <p class="mt-16">Site desenvolvido com <a href="#">Vue JS</a>, <a href="#">Vuetify</a>, <a href="#">Vue Router</a> com o objetivo de testar minhas habilidades com essas tecnologias.</p>
    <p>No Backend foi utilizado a <a href="#">API Jikan</a> para fornecer os dados.</p>
    <p>Gostou do meu trabalho? Me mande um feedback, ele será de grande ajuda para mim:</p>
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
  </div>
</template>
<script>
export default {
  data: () => ({
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
}
</script>

<style scoped>
.sobre a {
  color: rgb(255, 127, 9);
  text-decoration: none;
}
</style>
