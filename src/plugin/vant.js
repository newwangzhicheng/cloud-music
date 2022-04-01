import { Lazyload, Button, Image as VanImage } from 'vant';

const components = [Lazyload, Button, VanImage];

export function vant(app) {
  for (let i = 0; i < components.length; i++) {
    app.use(components[i]);
  }
}
