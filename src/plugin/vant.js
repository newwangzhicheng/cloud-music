import { Lazyload, Image as VanImage, Tab as VanTab, Tabs as VanTabs } from 'vant';

const components = [Lazyload, VanImage, VanTab, VanTabs];

export function vant(app) {
  for (let i = 0; i < components.length; i++) {
    app.use(components[i]);
  }
}
