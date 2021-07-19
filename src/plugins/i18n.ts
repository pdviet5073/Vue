import Vue from 'vue';
import VueI18n from 'vue-i18n';
import eng from "../locales/en.json";
import vn from "../locales/vi.json";
import vi from "vee-validate/dist/locale/vi.json";
import en from "vee-validate/dist/locale/en.json";

Vue.use(VueI18n);

const languages: any = {
    en: {
      ...eng,
      validation: {
        ...en.messages,
        ...eng.messages
      }
    },
    vi:{
      ...vn, 
      validation: {
        ...vi.messages,
        ...vn.messages
      }
    }
}

const messages = Object.assign(languages)
  
const i18n = new VueI18n({
    locale:  JSON.parse(localStorage.getItem("i18n")!)|| "en", // set locale
    fallbackLocale: JSON.parse(localStorage.getItem("i18n")!)|| "en", // set fallback locale
    messages, // set locale messages
});
export default i18n;
