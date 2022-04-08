import {
  Lazyload,
  Image as VanImage,
  Tab as VanTab,
  Tabs as VanTabs,
  Field as VanField
} from 'vant';

const components = [Lazyload, VanImage, VanTab, VanTabs, VanField];

export function vant(app) {
  for (let i = 0; i < components.length; i++) {
    app.use(components[i]);
  }
}
