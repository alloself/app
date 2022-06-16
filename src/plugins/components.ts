import { App } from "vue";

const UiComponents = import.meta.globEager("/src/components/ui/*.vue");

const addComponents = (
  prefix: string,
  components: object,
  appInstance: App
) => {
  Object.entries(components).forEach(([path, definition]) => {
    const componentName = path.split("/").pop();
    if (componentName === undefined) {
      return;
    }

    const normalizedComponentName = componentName
      .replace(/\.\w+$/, "")
      .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

    appInstance.component(
      `${prefix}${normalizedComponentName}`,
      definition.default
    );
  });
};

export default {
  install: (app: App) => {
    addComponents("ui", UiComponents, app);
  },
};
