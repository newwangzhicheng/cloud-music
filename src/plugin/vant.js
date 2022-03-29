import { Button } from 'vant';

const components = [Button];

export function vant(app) {
  for (let i = 0; i < components.length; i++) {
    app.use(components[i]);
  }
}
