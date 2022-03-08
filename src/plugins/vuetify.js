import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.grey.lighten5,
        secondary: colors.deepOrange.darken1,
        grey: colors.grey.darken4,
        transparent: colors.transparent,
      },
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.deepOrange.darken1,
        grey: colors.grey.lighten5,
        transparent: colors.transparent,
      }
    },
  },
});
