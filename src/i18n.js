import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from "./locales/en.json";
import vi from "./locales/vi.json";

Vue.use(VueI18n);
const languages = {
    en: en,
    vi:vi
  }
  const messages = Object.assign(languages)
  
const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
});
export default i18n;
