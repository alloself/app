import { router } from "@/router/index";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import components from "@/plugins/components";
import { loadFonts } from "./plugins/webfontloader";
import { createMetaManager } from "vue-meta";

loadFonts();

createApp(App)
  .use(components)
  .use(vuetify)
  .use(router)
  .use(createMetaManager())
  .use(createPinia())
  .mount("#app");
