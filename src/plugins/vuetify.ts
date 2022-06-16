import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";

const appTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#096ed1",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "appTheme",
    themes: {
      appTheme,
    },
  },
});
