import {
  Lazyload,
  Image as VanImage,
  Tab as VanTab,
  Tabs as VanTabs,
  Field as VanField,
  CellGroup as VanCellGroup,
  Button as VanButton
} from 'vant';

const components = [Lazyload, VanImage, VanTab, VanTabs, VanField, VanCellGroup, VanButton];

export function vant(app) {
  for (let i = 0; i < components.length; i++) {
    app.use(components[i]);
  }
}
